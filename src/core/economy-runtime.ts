import definitions from '../../data/systems-verified.json';

export type Edition = 'foil' | 'holo' | 'polychrome' | 'negative';
export interface EconomyRng { next(key?: string): number; pick<T>(items: T[], key?: string): T }
export interface PriceOptions { edition?: Edition | string; inflation?: number; discountPercent?: number; rental?: boolean; free?: boolean; boosterAnteScaling?: boolean; ante?: number }
const E = definitions.economy;

/** 利息以本轮发奖前的现金为基准；储蓄上限以本金表达。 */
export function computeInterest(dollars: number, cap = E.interestCap, amount = E.interestAmount, noInterest = false): number {
  if (noInterest || dollars < E.interestUnit) return 0;
  return Math.min(Math.floor(dollars / E.interestUnit), cap / E.interestUnit) * amount;
}
export function computeSellValue(price: number, extraValue = 0): number { return Math.max(E.sellMinimum, Math.floor(price / E.sellDivisor)) + extraValue; }
export function computePurchasePrice(base: number, options: PriceOptions = {}): number {
  const surcharge = E.editionSurcharges[options.edition as Edition] ?? 0;
  const undiscounted = base + (options.inflation ?? 0) + surcharge + E.priceRoundOffset;
  let price = Math.max(E.minimumPrice, Math.floor(undiscounted * (100 - (options.discountPercent ?? 0)) / 100));
  if (options.boosterAnteScaling) price += (options.ante ?? 1) - 1;
  if (options.rental) price = E.rentalPurchase;
  if (options.free) price = 0;
  return price;
}
export function computeRerollCost(paidRerolls = 0, base = definitions.starting.rerollBaseCost, freeRerolls = 0, temporaryBase?: number): number {
  return freeRerolls > 0 ? 0 : (temporaryBase ?? base) + paidRerolls * E.rerollIncrement;
}
export function computeBlindReward(blindKey = 'bl_small', stake = 1, noReward = false): number {
  const blind = definitions.blinds.find(x => x.sourceKey === blindKey);
  if (!blind) throw new Error(`未知盲注 ${blindKey}`);
  return noReward || (blindKey === 'bl_small' && stake >= 2) ? 0 : blind.dollars;
}
export function scalingForStake(stake = 1): 1 | 2 | 3 { return stake >= 6 ? 3 : stake >= 3 ? 2 : 1; }
export function computeAnteBase(ante: number, scaling: 1 | 2 | 3 = 1): number {
  if (ante < 1) return definitions.anteCurves.belowOne;
  const curve = definitions.anteCurves[String(scaling) as '1' | '2' | '3'];
  if (ante <= curve.length) return curve[ante - 1];
  const endless = definitions.anteCurves.endless;
  const distance = ante - endless.afterAnte;
  const growth = endless.base + Math.pow(endless.k * distance, 1 + endless.powerIncrement * distance);
  const amount = Math.floor(curve.at(-1)! * Math.pow(growth, distance));
  const precision = Math.pow(10, Math.floor(Math.log10(amount) - 1));
  return amount - amount % precision;
}
export function computeBlindRequirement(ante: number, blindKey = 'bl_small', stake = 1, anteScaling = 1): number {
  const blind = definitions.blinds.find(x => x.sourceKey === blindKey);
  if (!blind) throw new Error(`未知盲注 ${blindKey}`);
  return computeAnteBase(ante, scalingForStake(stake)) * blind.mult * anteScaling;
}
export interface RoundPayoutInput { dollars: number; blindKey?: string; stake?: number; handsLeft: number; discardsLeft?: number; moneyPerHand?: number; moneyPerDiscard?: number; noInterest?: boolean; interestCap?: number; interestAmount?: number; noBlindReward?: boolean }
export function computeRoundPayout(input: RoundPayoutInput) {
  const blind = computeBlindReward(input.blindKey, input.stake, input.noBlindReward);
  const hands = Math.max(0, input.handsLeft) * (input.moneyPerHand ?? E.moneyPerHand);
  const discards = Math.max(0, input.discardsLeft ?? 0) * (input.moneyPerDiscard ?? E.moneyPerDiscard);
  const interest = computeInterest(input.dollars, input.interestCap, input.interestAmount, input.noInterest);
  return { blind, hands, discards, interest, total: blind + hands + discards + interest };
}
export interface EditionOptions { rate?: number; modifier?: number; noNegative?: boolean; guaranteed?: boolean }
/** 这里的数据是累积阈值，不能误当成四种互斥版本各自的概率。 */
export function pickEdition(roll: number, options: EditionOptions = {}): Edition | undefined {
  const rates = definitions.shop.editionCumulative;
  const multiplier = options.guaranteed ? definitions.shop.guaranteedEditionMultiplier : options.modifier ?? 1;
  const rate = options.guaranteed ? 1 : options.rate ?? definitions.shop.editionRate;
  const candidates: [Edition, number][] = [['negative', rates.negative * multiplier], ['polychrome', rates.polychrome * multiplier * rate], ['holo', rates.holo * multiplier * rate], ['foil', rates.foil * multiplier * rate]];
  return candidates.find(([edition, threshold]) => !(edition === 'negative' && options.noNegative) && roll > 1 - threshold)?.[0];
}
export interface ShopWeights { joker: number; tarot: number; planet: number; spectral: number; playingCard: number }
export function shopWeightsForState(state: { jokerRate?: number; tarotRate?: number; planetRate?: number; spectralRate?: number; playingCardRate?: number } = {}): ShopWeights {
  const b = definitions.shop.weights;
  return { joker: state.jokerRate ?? b.joker, tarot: state.tarotRate ?? b.tarot, planet: state.planetRate ?? b.planet, spectral: state.spectralRate ?? b.spectral, playingCard: state.playingCardRate ?? b.playingCard };
}
export function pickShopKind(roll: number, weights: ShopWeights = definitions.shop.weights): keyof ShopWeights {
  const entries: [keyof ShopWeights,number][] = ['joker','tarot','planet','playingCard','spectral'].map(kind=>[kind as keyof ShopWeights,weights[kind as keyof ShopWeights]]);
  const total = entries.reduce((sum, [,weight]) => sum + Math.max(0, weight), 0);
  if (total <= 0) throw new Error('商店没有可用商品分类');
  let target = roll * total;
  for (const [kind,weight] of entries) { target -= Math.max(0,weight); if (target < 0) return kind; }
  return entries.filter(([,weight]) => weight > 0).at(-1)![0];
}
export function pickBooster(rng: EconomyRng, options: { firstShop?: boolean; kind?: string; banned?: string[]; key?: string } = {}) {
  const pool = definitions.boosters.filter(x => !options.banned?.includes(x.sourceKey) && (!options.kind || x.packKind === options.kind.toLowerCase()));
  if (options.firstShop && !options.banned?.includes('p_buffoon_normal_1')) return rng.pick(definitions.boosters.filter(x => /^p_buffoon_normal_[12]$/.test(x.sourceKey)), 'firstPackVariant');
  if (!pool.length) throw new Error('没有可用卡包');
  let target = rng.next(options.key ?? 'shop_pack') * pool.reduce((sum,x) => sum + x.weight, 0);
  for (const pack of pool) { target -= pack.weight; if (target < 0) return pack; }
  return pool.at(-1)!;
}
/** 普通 Boss 使用最低出现次数过滤；定义中的 max 字段在选择规则中没有参与限制。 */
export function eligibleBosses(ante: number, options: { winAnte?: number; banned?: string[]; used?: Record<string,number> } = {}) {
  const showdown = ante >= 2 && ante % (options.winAnte ?? definitions.starting.winAnte) === 0;
  const pool = definitions.blinds.filter(x => x.boss && !options.banned?.includes(x.sourceKey) && (showdown ? x.boss.showdown : !x.boss.showdown && x.boss.min <= Math.max(1,ante)));
  const minimum = Math.min(...pool.map(x => options.used?.[x.sourceKey] ?? 0));
  return pool.filter(x => (options.used?.[x.sourceKey] ?? 0) === minimum);
}
