import{C,e as T,D as j,f as q,g as K,h as R}from"./Dashboard-DbRdPqxi.js";import{d as L,L as O,$ as x,a0 as U,r as $,o as k,a1 as N,A as z,a2 as P,n as E,a3 as w}from"./index-Dt8_RWqX.js";const B={data:{type:Object,required:!0},options:{type:Object,default:()=>({})},plugins:{type:Array,default:()=>[]},datasetIdKey:{type:String,default:"label"},updateMode:{type:String,default:void 0}},F={ariaLabel:{type:String},ariaDescribedby:{type:String}},G={type:{type:String,required:!0},destroyDelay:{type:Number,default:0},...B,...F},H=U[0]==="2"?(t,e)=>Object.assign(t,{attrs:e}):(t,e)=>Object.assign(t,e);function i(t){return w(t)?P(t):t}function J(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:t;return w(e)?new Proxy(t,{}):t}function Q(t,e){const s=t.options;s&&e&&Object.assign(s,e)}function S(t,e){t.labels=e}function A(t,e,s){const o=[];t.datasets=e.map(n=>{const a=t.datasets.find(c=>c[s]===n[s]);return!a||!n.data||o.includes(a)?{...n}:(o.push(a),Object.assign(a,n),a)})}function V(t,e){const s={labels:[],datasets:[]};return S(s,t.labels),A(s,t.datasets,e),s}const W=L({props:G,setup(t,e){let{expose:s,slots:o}=e;const n=$(null),a=O(null);s({chart:a});const c=()=>{if(!n.value)return;const{type:r,data:y,options:b,plugins:f,datasetIdKey:v}=t,g=V(y,v),l=J(g,y);a.value=new C(n.value,{type:r,data:l,options:{...b},plugins:f})},d=()=>{const r=P(a.value);r&&(t.destroyDelay>0?setTimeout(()=>{r.destroy(),a.value=null},t.destroyDelay):(r.destroy(),a.value=null))},I=r=>{r.update(t.updateMode)};return k(c),N(d),z([()=>t.options,()=>t.data],(r,y)=>{let[b,f]=r,[v,g]=y;const l=P(a.value);if(!l)return;let h=!1;if(b){const u=i(b),D=i(v);u&&u!==D&&(Q(l,u),h=!0)}if(f){const u=i(f.labels),D=i(g.labels),m=i(f.datasets),M=i(g.datasets);u!==D&&(S(l.config.data,u),h=!0),m&&m!==M&&(A(l.config.data,m,t.datasetIdKey),h=!0)}h&&E(()=>{I(l)})},{deep:!0}),()=>x("canvas",{role:"img",ariaLabel:t.ariaLabel,ariaDescribedby:t.ariaDescribedby,ref:n},[x("p",{},[o.default?o.default():""])])}});function p(t,e){return C.register(e),L({props:B,setup(s,o){let{expose:n}=o;const a=O(null),c=d=>{a.value=d==null?void 0:d.chart};return n({chart:a}),()=>x(W,H({ref:c},{type:t,...s}))}})}const Z=p("bar",T),_=p("doughnut",j),tt=p("line",q),et=p("pie",K),at=p("bubble",R);export{at as B,_ as D,tt as L,et as P,Z as a};
//# sourceMappingURL=index-b5tOSmPL.js.map
