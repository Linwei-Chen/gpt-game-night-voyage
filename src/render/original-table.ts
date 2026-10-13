import { SCORE_POP_MS, CARD_POP_MS, SCORE_SHAKE, scorePitch } from './timing';
import { Application, Container, Graphics, Text } from 'pixi.js';

export interface TableCard {
  id: string; key?: string; title: string; subtitle?: string; kind: 'playing'|'joker'|'consumable'|'voucher'|'pack';
  rank?: number; suit?: string; selected?: boolean; debuffed?: boolean; faceDown?: boolean;
  enhancement?: string; edition?: string; seal?: string; price?: number;
}
export interface TableView {
  hand: TableCard[]; jokers: TableCard[]; consumables: TableCard[]; played: TableCard[];
  offers: TableCard[]; packs: TableCard[]; packChoices: TableCard[]; stage: string;
}
interface SpriteCard { display: Container; targetX:number; targetY:number; targetRotation:number; pulse:number; signature:string; card:TableCard }
const colors = { paper:0xe2e8da, ink:0x17384a, red:0xcd6467, gold:0xeabd6b, teal:0x6fbcb5, blue:0x85b5d3 };

/** 几何卡面与动效均为本项目独立绘制。 */
export class CardTable {
  app = new Application(); private scene = new Container(); private cards = new Map<string,SpriteCard>();
  private latest?:TableView;private compact=false;
  private overlays: HTMLDivElement; private scale=1; private pending:Promise<void>; private shake=0;
  reducedMotion=false; onReorder:(from:string,to:string)=>void=()=>{}; onClick:(card:TableCard)=>void = ()=>{};
  constructor(private host:HTMLElement) {
    this.overlays=document.createElement('div');this.overlays.className='card-hitboxes';
    this.pending=this.init();
  }
  async init() {
    await this.app.init({resizeTo:this.host,antialias:true,backgroundAlpha:0,resolution:Math.min(devicePixelRatio,2),autoDensity:true});
    this.host.append(this.app.canvas,this.overlays);this.app.stage.addChild(this.scene);
    this.app.ticker.add(t=>this.tick(t.deltaMS));this.app.renderer.on('resize',()=>{this.layout();if(this.latest&&this.compact!==(this.host.clientWidth<600))void this.render(this.latest);});
    this.layout();
  }
  async render(view:TableView) {
    await this.pending;this.latest=view;this.compact=this.host.clientWidth<600;
    const keep=new Set<string>(); const placements:{card:TableCard;x:number;y:number;w:number;h:number;rotation:number}[]=[];
    const row=(items:TableCard[],cx:number,y:number,maxGap:number,w:number,h:number,fan=false,widthLimit=this.host.clientWidth<600?500:900)=>{
      const gap=Math.min(maxGap,(widthLimit-w)/Math.max(1,items.length-1));
      items.forEach((card,i)=>placements.push({card,x:cx+(i-(items.length-1)/2)*gap,y:y+(fan?Math.abs(i-(items.length-1)/2)*3:0)-(card.selected?27:0),w,h,rotation:fan?(i-(items.length-1)/2)*0.025:0}));
    };
    const compact=this.host.clientWidth<600;
    if(compact){
      row(view.jokers,270,86,82,68,90);row(view.consumables,445,175,70,58,78);
      if(view.stage==='shop'){row(view.offers,270,310,100,86,112);row(view.packs,270,410,110,90,80);}
      else if(view.stage==='pack')row(view.packChoices,270,330,90,78,112);
      else row(view.played,240,280,78,72,100);
      const middle=Math.ceil(view.hand.length/2),shelf=view.stage==='shop'||view.stage==='pack';
      row(view.hand.slice(0,middle),270,shelf?495:430,100,86,shelf?80:106);row(view.hand.slice(middle),270,shelf?588:550,100,86,shelf?80:106);
    }else{
      row(view.jokers,350,100,132,108,146,false,680);row(view.consumables,850,88,96,80,110,false,260);
      if(view.stage==='shop'){row(view.offers,390,320,128,110,152);row(view.packs,860,320,116,88,138);}
      else if(view.stage==='pack')row(view.packChoices,540,297,135,112,154);
      else row(view.played,540,285,115,99,140);
      row(view.hand,540,505,102,99,146,true);
    }
    this.overlays.replaceChildren();
    for(const p of placements) {
      keep.add(p.card.id);const signature=JSON.stringify({...p.card,selected:undefined})+p.w;
      let sprite=this.cards.get(p.card.id);
      if(sprite?.signature!==signature) {sprite?.display.destroy({children:true});this.cards.delete(p.card.id);sprite=undefined;}
      if(!sprite){const display=this.drawCard(p.card,p.w,p.h);display.position.set(p.x,p.y+34);display.alpha=0;this.scene.addChild(display);
        sprite={display,targetX:p.x,targetY:p.y,targetRotation:p.rotation,pulse:0,signature,card:p.card};this.cards.set(p.card.id,sprite);}
      sprite.targetX=p.x;sprite.targetY=p.y;sprite.targetRotation=p.rotation;sprite.card=p.card;
      const button=document.createElement('button');button.className='card-hit';button.dataset.cardId=p.card.id;
      button.setAttribute('aria-label',`${p.card.title}${p.card.subtitle?'，'+p.card.subtitle:''}${p.card.price!==undefined?'，价格'+p.card.price:''}`);
      button.draggable=true;button.ondragstart=e=>{e.dataTransfer?.setData('text/plain',p.card.id);};button.ondragover=e=>e.preventDefault();button.ondrop=e=>{e.preventDefault();const id=e.dataTransfer?.getData('text/plain');if(id)this.onReorder(id,p.card.id);};
      button.setAttribute('aria-pressed',String(!!p.card.selected));button.onclick=()=>this.onClick(p.card);
      button.onmouseenter=()=>{if(sprite)sprite.targetY=p.y-8;};button.onmouseleave=()=>{if(sprite)sprite.targetY=p.y;};
      button.style.left=`${p.x-p.w/2}px`;button.style.top=`${p.y-p.h/2}px`;button.style.width=`${p.w}px`;button.style.height=`${p.h}px`;this.overlays.append(button);
    }
    for(const [id,sprite] of this.cards) if(!keep.has(id)){sprite.display.destroy({children:true});this.cards.delete(id);}
    this.layout();
  }
  private layout() {
    const w=this.host.clientWidth,h=this.host.clientHeight;const logicalWidth=w<600?540:1080;this.scale=Math.min(w/logicalWidth,h/630);
    this.scene.scale.set(this.scale);this.scene.position.set((w-logicalWidth*this.scale)/2,(h-630*this.scale)/2);
    this.overlays.style.transform=`translate(${this.scene.x}px,${this.scene.y}px) scale(${this.scale})`;
  }
  private text(parent:Container,s:string,size:number,x:number,y:number,fill:number=colors.ink,center=false){
    const t=new Text({text:s,style:{fontFamily:'Noto Local',fontSize:size,fill,fontWeight:size>26?'bold':'normal',align:'center'}});
    t.position.set(x,y);if(center)t.anchor.set(.5);parent.addChild(t);return t;
  }
  private star(g:Graphics,cx:number,cy:number,r:number,color:number,sides=5) {
    const path:number[]=[];for(let i=0;i<sides*2;i++){const a=i*Math.PI/sides-Math.PI/2,rr=i%2?r*.45:r;path.push(cx+Math.cos(a)*rr,cy+Math.sin(a)*rr);}
    g.poly(path).fill(color);
  }
  private suit(g:Graphics,s:string,x:number,y:number,r:number,color:number){
    if(s==='diamonds')g.poly([x,y-r,x+r*.72,y,x,y+r,x-r*.72,y]).fill(color);
    else if(s==='hearts') {g.circle(x-r*.36,y-r*.25,r*.46).circle(x+r*.36,y-r*.25,r*.46).poly([x-r*.78,y-r*.13,x+r*.78,y-r*.13,x,y+r]).fill(color);}
    else if(s==='clubs'){g.circle(x,y-r*.38,r*.47).circle(x-r*.45,y+r*.13,r*.47).circle(x+r*.45,y+r*.13,r*.47).poly([x,y,x-r*.29,y+r,x+r*.29,y+r]).fill(color);}
    else {g.poly([x,y-r,x+r*.77,y+r*.24,x,y+r*.44,x-r*.77,y+r*.24]).fill(color);g.poly([x,y,x-r*.28,y+r,x+r*.28,y+r]).fill(color);}
  }
  private drawCard(card:TableCard,w:number,h:number){
    const c=new Container();const g=new Graphics();c.addChild(g);
    g.roundRect(-w/2+4,-h/2+7,w,h,8).fill({color:0x041722,alpha:.38});
    const color=card.kind==='joker'?0xceddd1:card.kind==='consumable'?0xc0d5e4:card.kind==='pack'?0x254c64:colors.paper;
    g.roundRect(-w/2,-h/2,w,h,8).fill(color).stroke({color:card.edition==='polychrome'?colors.teal:card.edition==='foil'?colors.blue:colors.gold,width:card.edition?3:1,alpha:card.edition?1:.6});
    if(card.faceDown){g.roundRect(-w/2+8,-h/2+8,w-16,h-16,4).fill(0x214c60).stroke({color:colors.gold,width:1});this.star(g,0,0,w*.23,colors.gold,8);return c;}
    if(card.kind==='playing') {
      const red=card.suit==='hearts'||card.suit==='diamonds';const ink=red?colors.red:colors.ink;
      const rank=card.rank===14?'A':card.rank===13?'K':card.rank===12?'Q':card.rank===11?'J':String(card.rank);
      this.text(c,rank,22,-w/2+10,-h/2+7,ink);this.suit(g,card.suit||'spades',-w/2+18,-h/2+48,9,ink);
      this.suit(g,card.suit||'spades',0,3,26,ink);this.text(c,rank,17,w/2-22,h/2-28,ink);
      if(card.enhancement&&card.enhancement!=='none'){g.roundRect(-w/2+6,h/2-20,w-12,13,3).fill({color:colors.gold,alpha:.45});this.text(c,card.enhancement,8,0,h/2-13,colors.ink,true);}
      if(card.seal){g.circle(w/2-17,-h/2+18,8).fill(card.seal==='red'?colors.red:card.seal==='blue'?colors.blue:card.seal==='purple'?0xa795c6:colors.gold);}
    } else {
      const isPack=card.kind==='pack';const ink=isPack?colors.paper:colors.ink;
      let hash=0;for(const ch of card.key||card.id)hash=(hash*31+ch.charCodeAt(0))>>>0;
      const rays=4+hash%5;const offset=(hash%180)*Math.PI/180;
      g.circle(0,-8,w*.28).stroke({color:ink,width:1,alpha:.25});
      for(let i=0;i<rays;i++){const a=i*Math.PI*2/rays+offset;g.moveTo(Math.cos(a)*w*.08,-8+Math.sin(a)*w*.08).lineTo(Math.cos(a)*w*.26,-8+Math.sin(a)*w*.26).stroke({color:ink,width:2});g.circle(Math.cos(a)*w*.26,-8+Math.sin(a)*w*.26,3).fill(ink);}
      this.star(g,0,-8,w*.15,card.kind==='joker'?0x527e77:colors.gold,rays);
      this.text(c,card.title,Math.min(15,w/(card.title.length+.5)),0,-h/2+19,ink,true);
      this.text(c,card.subtitle||'',9,0,h/2-29,ink,true);
      if(card.price!==undefined)this.text(c,`$${card.price}`,17,0,h/2-13,isPack?colors.gold:colors.ink,true);
    }
    if(card.debuffed){g.roundRect(-w/2,-h/2,w,h,8).fill({color:0x13222a,alpha:.44});this.text(c,'失效',16,0,0,colors.paper,true);}
    return c;
  }
  pulse(id:string,label:string,color='chips') {
    if(this.reducedMotion)return;
    const sprite=this.cards.get(id);const x=sprite?.targetX??540,y=(sprite?.targetY??260)-82;if(sprite)sprite.pulse=1;
    const text=new Text({text:label,style:{fontFamily:'Noto Local',fontSize:25,fontWeight:'bold',fill:color==='mult'?colors.red:color==='money'?colors.gold:colors.blue,stroke:{color:0x0d2940,width:3}}});
    text.anchor.set(.5);text.position.set(x,y);this.scene.addChild(text);let age=0;const duration=SCORE_POP_MS;
    const tick=()=>{age+=this.app.ticker.deltaMS;text.y=y-age*.035;text.alpha=Math.max(0,1-age/duration);if(age>=duration){this.app.ticker.remove(tick);text.destroy();}};this.app.ticker.add(tick);this.shake=Math.max(this.shake,SCORE_SHAKE*(color==='mult'?7:3));
  }
  private tick(ms:number) {
    const lerp=this.reducedMotion?1:1-Math.exp(-ms/85);
    for(const sprite of this.cards.values()){
      sprite.display.x+=(sprite.targetX-sprite.display.x)*lerp;sprite.display.y+=(sprite.targetY-sprite.display.y)*lerp;
      sprite.pulse=Math.max(0,sprite.pulse-ms/CARD_POP_MS);sprite.display.rotation+=(sprite.targetRotation-sprite.display.rotation)*lerp;
      const p=sprite.pulse;sprite.display.scale.set(1+p*.09);sprite.display.rotation+=Math.sin(p*Math.PI*5)*p*.015;
      sprite.display.alpha=Math.min(1,sprite.display.alpha+ms/200);
    }
    this.shake*=Math.exp(-ms/90);this.scene.rotation=this.reducedMotion?0:Math.sin(performance.now()*.04)*this.shake*.0005;
  }
}

/** 合成音效；音频完全由本项目的振荡器生成。 */
export class GameAudio {
  muted=true;private ctx?:AudioContext;
  async unlock(){this.ctx??=new AudioContext();await this.ctx.resume();}
  play(kind:'select'|'chips'|'mult'|'money'|'win',progress=0){
    if(this.muted||!this.ctx)return;const a=this.ctx,o=a.createOscillator(),g=a.createGain();
    o.type=kind==='chips'?'triangle':'sine';const base=kind==='mult'?392:kind==='money'?587:kind==='win'?659:330;
    o.frequency.setValueAtTime(base*scorePitch(progress),a.currentTime);g.gain.setValueAtTime(.08,a.currentTime);g.gain.exponentialRampToValueAtTime(.0001,a.currentTime+.18);o.connect(g);g.connect(a.destination);o.start();o.stop(a.currentTime+.19);
  }
}
