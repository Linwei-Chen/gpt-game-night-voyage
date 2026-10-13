import evidence from '../../data/evidence-ui.json';
const fact=(id:string)=>evidence.facts.find(f=>f.id===id)!.value;
export const SCORE_POP_MS=Number(fact('UI-003'))*Number(fact('UI-004'))*1000;
export const CARD_POP_MS=Number(fact('UI-002'))*1000;
export const SCORE_SHAKE=Number(fact('UI-006'));
export const scorePitch=(progress:number)=>.8+Math.min(1,Math.max(0,progress))*.2; // UI-005
