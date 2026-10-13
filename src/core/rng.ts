/** F:rng.*；游戏哈希/种子递推公式 + 开源 LuaJIT TW223 的独立位运算实现。 */
const MASK_64 = (1n << 64n) - 1n;
const MANTISSA_52 = (1n << 52n) - 1n;
const PARAMETERS = [[63,31,18],[58,19,28],[55,24,7],[47,21,8]] as const;
const bits=new DataView(new ArrayBuffer(8));
function floatBits(value: number): bigint { bits.setFloat64(0,value,true); return bits.getBigUint64(0,true); }
function bitsFloat(value: bigint): number { bits.setBigUint64(0,value,true); return bits.getFloat64(0,true); }
export type SeedFloatMode = 'fused' | 'separate';
/** ARM 的 C 编译器可把 a*b+c 合成一次舍入。以整数精确运算实现 IEEE-754 的融合乘加。 */
function fusedMultiplyAdd(a:number,b:number,c:number):number {
  const unpack=(value:number):{mantissa:bigint;exponent:number} => {
    const raw=floatBits(value), biased=Number((raw >> 52n)&0x7ffn);
    const mantissa=(raw&MANTISSA_52)|(biased ? 1n<<52n : 0n);
    return {mantissa:raw>>63n ? -mantissa : mantissa,exponent:(biased||1)-1023-52};
  };
  const av=unpack(a),bv=unpack(b),cv=unpack(c);
  const productExponent=av.exponent+bv.exponent;
  const exponent=Math.min(productExponent,cv.exponent);
  let exact=(av.mantissa*bv.mantissa << BigInt(productExponent-exponent))+(cv.mantissa << BigInt(cv.exponent-exponent));
  const negative=exact<0n;
  if(negative) exact=-exact;
  if(exact===0n) return 0;
  const excess=Math.max(0,exact.toString(2).length-53);
  let rounded=exact >> BigInt(excess);
  if(excess) {
    const discarded=exact-(rounded<<BigInt(excess)),half=1n << BigInt(excess-1);
    if(discarded>half || (discarded===half && (rounded&1n))) rounded++;
  }
  return (negative?-1:1)*Number(rounded)*Math.pow(2,exponent+excess);
}
/** 这是数学算法重写；参考开源 LuaJIT，不复制游戏逻辑。 */
class Tausworthe {
  private states: bigint[];
  constructor(seed: number, states?: bigint[], mode:SeedFloatMode='fused') {
    if (states) {this.states=[...states]; return;}
    const minima=[1,6,9,17];
    this.states=PARAMETERS.map((_,i) => {
      seed=mode==='fused'?fusedMultiplyAdd(seed,Math.PI,Math.E):seed*Math.PI+Math.E;
      const value=floatBits(seed), minimum=1n << BigInt(minima[i]!);
      return value < minimum ? value+minimum : value;
    });
    for(let i=0;i<10;i++) this.step();
  }
  private step(): bigint {
    this.states=this.states.map((value,i) => {
      const [k,q,s]=PARAMETERS[i]!;
      const feedback=(((value << BigInt(q)) & MASK_64)^value) >> BigInt(k-s);
      const main=(value & ((MASK_64 << BigInt(64-k)) & MASK_64)) << BigInt(s);
      return (feedback ^ main)&MASK_64;
    });
    return this.states.reduce((acc,value)=>acc^value,0n);
  }
  next():number {return bitsFloat((this.step()&MANTISSA_52)|0x3ff0000000000000n)-1;}
  snapshot(): string[] {return this.states.map(x=>x.toString());}
  static restore(states: string[]):Tausworthe {return new Tausworthe(0,states.map(BigInt));}
}
export function luaJitRandom(seed:number,mode:SeedFloatMode='fused'):number {return new Tausworthe(seed,undefined,mode).next();}
export function pseudohash(seed:string):number {
  const bytes=new TextEncoder().encode(seed);
  let h=1;
  for(let i=bytes.length;i>0;i--) h=((1.1239285023/h)*bytes[i-1]!*Math.PI+Math.PI*i)%1;
  return h;
}
export interface RngSnapshot { seed: string; streams: Record<string,number>; generator: string[]; floatMode:SeedFloatMode; }
export class SeededRng {
  readonly seed:string;
  private streams:Record<string,number>={};
  private hashed:number;
  private generator:Tausworthe;
  readonly floatMode:SeedFloatMode;
  constructor(seed:string,options:{floatMode?:SeedFloatMode}={}) {this.seed=seed;this.hashed=pseudohash(seed);this.floatMode=options.floatMode??'fused';this.generator=new Tausworthe(0,undefined,this.floatMode);}
  /** 返回给底层随机生成器的独立 key 浮点种子。 */
  pseudoseed(key:string):number {
    if (key === 'seed') return this.generator.next();
    const previous=this.streams[key] ?? pseudohash(key+this.seed);
    const advanced=Math.abs(Number(((2.134453429141+previous*1.72431234)%1).toFixed(13)));
    this.streams[key]=advanced;
    return (advanced+this.hashed)/2;
  }
  next(key='default'):number {
    this.generator=new Tausworthe(this.pseudoseed(key),undefined,this.floatMode);
    return this.generator.next();
  }
  int(min:number,max:number,key='default'):number {
    if (!Number.isInteger(min)||!Number.isInteger(max)||min>max) throw new Error('随机整数区间无效');
    return min+Math.floor(this.next(key)*(max-min+1));
  }
  pick<T>(values:readonly T[],key='default'):T {
    if (!values.length) throw new Error('随机候选不能为空');
    return values[this.int(0,values.length-1,key)]!;
  }
  shuffle<T>(values:readonly T[],key='shuffle'):T[] {
    const result=[...values];
    if (result.length && typeof result[0] === 'object' && result[0] !== null && 'sortId' in result[0]) {
      result.sort((a,b)=>Number((a as {sortId?:number}).sortId??1)-Number((b as {sortId?:number}).sortId??2));
    }
    this.generator=new Tausworthe(this.pseudoseed(key),undefined,this.floatMode);
    for(let remaining=result.length;remaining>1;remaining--) {
      const choice=Math.floor(this.generator.next()*remaining);
      [result[remaining-1],result[choice]]=[result[choice]!,result[remaining-1]!];
    }
    return result;
  }
  snapshot():RngSnapshot {return {seed:this.seed,streams:{...this.streams},generator:this.generator.snapshot(),floatMode:this.floatMode};}
  restore(snapshot:RngSnapshot):void {
    if (snapshot.floatMode!==this.floatMode) throw new Error('快照浮点模式与当前运行时不一致');
    if (snapshot.seed!==this.seed) throw new Error('快照种子与当前局不一致');
    this.streams={...snapshot.streams};this.generator=Tausworthe.restore(snapshot.generator);
  }
}
