import{L as f}from"./index-b5tOSmPL.js";import{C,p as g,a as h,b as _,d as L,L as k,P as v,c as S,i as x}from"./Dashboard-DbRdPqxi.js";import{d as b,r as y,e as p,q as B,a as E,g as G,u as P}from"./index-Dt8_RWqX.js";import"./useProjects-BskBNde_.js";import"./utils-Blx_SZM_.js";import"./ProjectStatusBadge.vue_vue_type_script_setup_true_lang-CYsAm0rP.js";const W=b({__name:"LineChart",props:{data:{},options:{}},setup(u){C.register(g,h,_,L,k,v,S,x);const e=y(),o=u,n=p(()=>{var t;return e.value?((t=e.value.chart)==null?void 0:t.ctx)??null:null}),{setHSLAColor:s,getColor:d}=B(),i=["primary","success","danger","warning"],m=p(()=>{if(!n.value)return o.data;const t=r=>{const a=n.value.createLinearGradient(0,0,0,90);return a.addColorStop(0,s(r,{a:.4})),a.addColorStop(1,s(r,{a:0})),a},l=o.data.datasets.map((r,a)=>{const c=d(i[a%i.length]);return{...r,fill:!0,backgroundColor:t(c),borderColor:c,pointRadius:0,borderWidth:2}});return{...o.data,datasets:l}});return(t,l)=>(E(),G(P(f),{ref_key:"chart",ref:e,data:m.value,options:t.options},null,8,["data","options"]))}});export{W as default};
//# sourceMappingURL=LineChart-CEmtk4Ud.js.map
