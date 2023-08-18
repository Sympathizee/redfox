import{aq as v,ar as S,d as C,e as N,j,n as P,H as y,aa as $,as as E,at as H,a7 as G,au as J,x as L,a9 as p,K,av as Y,ak as D,a8 as Q,ah as X,aw as Z,ax as ee}from"./index-112961a8.js";const A=(()=>v.reduce((e,l)=>(e[l]={type:[Boolean,String,Number],default:!1},e),{}))(),B=(()=>v.reduce((e,l)=>{const s="offset"+S(l);return e[s]={type:[String,Number],default:null},e},{}))(),O=(()=>v.reduce((e,l)=>{const s="order"+S(l);return e[s]={type:[String,Number],default:null},e},{}))(),V={col:Object.keys(A),offset:Object.keys(B),order:Object.keys(O)};function te(e,l,s){let n=e;if(!(s==null||s===!1)){if(l){const t=l.replace(e,"");n+=`-${t}`}return e==="col"&&(n="v-"+n),e==="col"&&(s===""||s===!0)||(n+=`-${s}`),n.toLowerCase()}}const ne=["auto","start","end","center","baseline","stretch"],se=C({cols:{type:[Boolean,String,Number],default:!1},...A,offset:{type:[String,Number],default:null},...B,order:{type:[String,Number],default:null},...O,alignSelf:{type:String,default:null,validator:e=>ne.includes(e)},...N(),...j()},"VCol"),ge=P()({name:"VCol",props:se(),setup(e,l){let{slots:s}=l;const n=y(()=>{const t=[];let a;for(a in V)V[a].forEach(f=>{const c=e[f],b=te(a,f,c);b&&t.push(b)});const d=t.some(f=>f.startsWith("v-col-"));return t.push({"v-col":!d||!e.cols,[`v-col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),t});return()=>{var t;return $(e.tag,{class:[n.value,e.class],style:e.style},(t=s.default)==null?void 0:t.call(s))}}}),I=["start","end","center"],U=["space-between","space-around","space-evenly"];function w(e,l){return v.reduce((s,n)=>{const t=e+S(n);return s[t]=l(),s},{})}const le=[...I,"baseline","stretch"],M=e=>le.includes(e),R=w("align",()=>({type:String,default:null,validator:M})),ae=[...I,...U],_=e=>ae.includes(e),T=w("justify",()=>({type:String,default:null,validator:_})),oe=[...I,...U,"stretch"],q=e=>oe.includes(e),F=w("alignContent",()=>({type:String,default:null,validator:q})),k={align:Object.keys(R),justify:Object.keys(T),alignContent:Object.keys(F)},ie={align:"align",justify:"justify",alignContent:"align-content"};function ue(e,l,s){let n=ie[e];if(s!=null){if(l){const t=l.replace(e,"");n+=`-${t}`}return n+=`-${s}`,n.toLowerCase()}}const re=C({dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:M},...R,justify:{type:String,default:null,validator:_},...T,alignContent:{type:String,default:null,validator:q},...F,...N(),...j()},"VRow"),me=P()({name:"VRow",props:re(),setup(e,l){let{slots:s}=l;const n=y(()=>{const t=[];let a;for(a in k)k[a].forEach(d=>{const f=e[d],c=ue(a,d,f);c&&t.push(c)});return t.push({"v-row--no-gutters":e.noGutters,"v-row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),t});return()=>{var t;return $(e.tag,{class:["v-row",n.value,e.class],style:e.style},(t=s.default)==null?void 0:t.call(s))}}}),ye=C({modelValue:{type:null,default:void 0},multiple:Boolean,mandatory:[Boolean,String],max:Number,selectedClass:String,disabled:Boolean},"group"),be=C({value:null,disabled:Boolean,selectedClass:String},"group-item");function he(e,l){let s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;const n=E("useGroupItem");if(!n)throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");const t=H();G(Symbol.for(`${l.description}:id`),t);const a=J(l,null);if(!a){if(!s)return a;throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${l.description}`)}const d=L(e,"value"),f=y(()=>!!(a.disabled.value||e.disabled));a.register({id:t,value:d,disabled:f},n),p(()=>{a.unregister(t)});const c=y(()=>a.isSelected(t)),b=y(()=>c.value&&[a.selectedClass.value,e.selectedClass]);return K(c,h=>{n.emit("group:selected",{value:h})}),{id:t,isSelected:c,toggle:()=>a.select(t,!c.value),select:h=>a.select(t,h),selectedClass:b,value:d,disabled:f,group:a}}function ve(e,l){let s=!1;const n=Y([]),t=D(e,"modelValue",[],o=>o==null?[]:W(n,Z(o)),o=>{const i=de(n,o);return e.multiple?i:i[0]}),a=E("useGroup");function d(o,i){const r=o,u=Symbol.for(`${l.description}:id`),m=ee(u,a==null?void 0:a.vnode).indexOf(i);m>-1?n.splice(m,0,r):n.push(r)}function f(o){if(s)return;c();const i=n.findIndex(r=>r.id===o);n.splice(i,1)}function c(){const o=n.find(i=>!i.disabled);o&&e.mandatory==="force"&&!t.value.length&&(t.value=[o.id])}Q(()=>{c()}),p(()=>{s=!0});function b(o,i){const r=n.find(u=>u.id===o);if(!(i&&(r!=null&&r.disabled)))if(e.multiple){const u=t.value.slice(),g=u.findIndex(z=>z===o),m=~g;if(i=i??!m,m&&e.mandatory&&u.length<=1||!m&&e.max!=null&&u.length+1>e.max)return;g<0&&i?u.push(o):g>=0&&!i&&u.splice(g,1),t.value=u}else{const u=t.value.includes(o);if(e.mandatory&&u)return;t.value=i??!u?[o]:[]}}function h(o){if(e.multiple,t.value.length){const i=t.value[0],r=n.findIndex(m=>m.id===i);let u=(r+o)%n.length,g=n[u];for(;g.disabled&&u!==r;)u=(u+o)%n.length,g=n[u];if(g.disabled)return;t.value=[n[u].id]}else{const i=n.find(r=>!r.disabled);i&&(t.value=[i.id])}}const x={register:d,unregister:f,selected:t,select:b,disabled:L(e,"disabled"),prev:()=>h(n.length-1),next:()=>h(1),isSelected:o=>t.value.includes(o),selectedClass:y(()=>e.selectedClass),items:y(()=>n),getItemIndex:o=>ce(n,o)};return G(l,x),x}function ce(e,l){const s=W(e,[l]);return s.length?e.findIndex(n=>n.id===s[0]):-1}function W(e,l){const s=[];return l.forEach(n=>{const t=e.find(d=>X(n,d.value)),a=e[n];(t==null?void 0:t.value)!=null?s.push(t.id):a!=null&&s.push(a.id)}),s}function de(e,l){const s=[];return l.forEach(n=>{const t=e.findIndex(a=>a.id===n);if(~t){const a=e[t];s.push(a.value!=null?a.value:t)}}),s}export{me as V,be as a,he as b,ge as c,ye as m,ve as u};
