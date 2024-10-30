import{u as z,a as M,b as X}from"./useUsers-DGC35aVu.js";import{_ as O,d as Y,u as Z}from"./useProjects-BskBNde_.js";import{_ as q}from"./ProjectStatusBadge.vue_vue_type_script_setup_true_lang-CYsAm0rP.js";import{d as S,f as d,a as g,g as D,w as c,c as C,s as I,F as E,h as o,b as p,t as k,e as N,i as h,u as i,K as A,E as T,_ as L,r as U,A as ee}from"./index-Dt8_RWqX.js";import{u as te}from"./useModal-DfDxM_eH.js";import{u as oe}from"./useToast-B__vTN-n.js";import"./utils-Blx_SZM_.js";const ae={class:"text-[var(--va-secondary)]"},le={class:"flex flex-col items-center gap-4 grow"},se={class:"va-h4 text-center self-stretch overflow-hidden line-clamp-2 text-ellipsis"},ne={class:"flex justify-between"},re={key:1,class:"p-4 flex justify-center items-center text-[var(--va-secondary)]"},ie=S({__name:"ProjectCards",props:{projects:{type:Array,required:!0},loading:{type:Boolean,required:!0}},emits:["edit","delete"],setup(_){const w=v=>{const f=["primary","#FFD43A","#ADFF00","#262824","danger"],r=v.charCodeAt(0)%f.length;return f[r]};return(v,f)=>{const r=d("VaAvatarGroup"),$=d("VaDivider"),y=d("VaButton"),V=d("VaCardContent"),b=d("VaCard"),s=d("VaInnerLoading");return _.projects.length>0||_.loading?(g(),D(s,{key:0,loading:_.loading,class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 min-h-[4rem]"},{default:c(()=>[(g(!0),C(E,null,I(_.projects,e=>(g(),D(b,{key:e.project_name,style:{"--va-card-outlined-border":"1px solid var(--va-background-element)"},outlined:""},{default:c(()=>[o(V,{class:"flex flex-col h-full"},{default:c(()=>[p("div",ae,k(e.creation_date),1),p("div",le,[p("h4",se,k(e.project_name),1),p("p",null,[f[0]||(f[0]=p("span",{class:"text-[var(--va-secondary)]"},"Owner: ",-1)),p("span",null,k(e.project_owner.fullname),1)]),o(r,{class:"my-4",options:e.team.map(n=>({label:n.fullname,src:n.avatar,fallbackText:n.fullname[0],color:w(n.fullname)})),max:5},null,8,["options"]),o(q,{status:e.status},null,8,["status"])]),o($,{class:"my-6"}),p("div",ne,[o(y,{preset:"secondary",icon:"mso-edit",color:"secondary",onClick:n=>v.$emit("edit",e)},null,8,["onClick"]),o(y,{preset:"secondary",icon:"mso-delete",color:"danger",onClick:n=>v.$emit("delete",e)},null,8,["onClick"])])]),_:2},1024)]),_:2},1024))),128))]),_:1},8,["loading"])):(g(),C("div",re,"No projects"))}}}),de={class:"ellipsis max-w-[230px] lg:max-w-[450px]"},ue={class:"flex items-center gap-2 ellipsis max-w-[230px]"},ce={class:"flex gap-2 justify-end"},pe={class:"flex flex-col-reverse md:flex-row gap-2 justify-between items-center py-2"},me={key:0,class:"flex"},ge=S({__name:"ProjectsTable",props:{projects:{type:Array,required:!0},loading:{type:Boolean,required:!0},sortBy:{type:Object,required:!0},sortingOrder:{type:Object,required:!0},pagination:{type:Object,required:!0}},emits:["edit","delete"],setup(_,{emit:w}){const v=Y([{label:"Project name",key:"project_name",sortable:!0},{label:"Project owner",key:"project_owner",sortable:!0},{label:"Team",key:"team",sortable:!0},{label:"Status",key:"status",sortable:!0},{label:"Creation Date",key:"creation_date",sortable:!0},{label:" ",key:"actions"}]),f=_,r=w,$=s=>{const e=["primary","#FFD43A","#ADFF00","#262824","danger"],n=s.charCodeAt(0)%e.length;return e[n]},y=z(f,"sortBy",r),V=z(f,"sortingOrder",r),b=N(()=>Math.ceil(f.pagination.total/f.pagination.perPage));return(s,e)=>{const n=d("VaAvatarGroup"),a=d("VaButton"),P=d("VaDataTable"),B=d("VaSelect"),F=d("VaPagination");return g(),C("div",null,[o(P,{"sort-by":i(y),"onUpdate:sortBy":e[0]||(e[0]=l=>A(y)?y.value=l:null),"sorting-order":i(V),"onUpdate:sortingOrder":e[1]||(e[1]=l=>A(V)?V.value=l:null),items:_.projects,columns:i(v),loading:_.loading},{"cell(project_name)":c(({rowData:l})=>[p("div",de,k(l.project_name),1)]),"cell(project_owner)":c(({rowData:l})=>[p("div",ue,[o(O,{user:l.project_owner,size:"small"},null,8,["user"]),h(" "+k(l.project_owner.fullname),1)])]),"cell(team)":c(({rowData:l})=>[o(n,{size:"small",options:l.team.map(j=>({label:j.fullname,src:j.avatar,fallbackText:j.fullname[0],color:$(j.fullname)})),max:5},null,8,["options"])]),"cell(status)":c(({rowData:l})=>[o(q,{status:l.status},null,8,["status"])]),"cell(actions)":c(({rowData:l})=>[p("div",ce,[o(a,{preset:"primary",size:"small",color:"primary",icon:"mso-edit","aria-label":"Edit project",onClick:j=>s.$emit("edit",l)},null,8,["onClick"]),o(a,{preset:"primary",size:"small",icon:"mso-delete",color:"danger","aria-label":"Delete project",onClick:j=>s.$emit("delete",l)},null,8,["onClick"])])]),_:1},8,["sort-by","sorting-order","items","columns","loading"]),p("div",pe,[p("div",null,[p("b",null,k(s.$props.pagination.total)+" results.",1),e[6]||(e[6]=h(" Results per page ")),o(B,{modelValue:s.$props.pagination.perPage,"onUpdate:modelValue":e[2]||(e[2]=l=>s.$props.pagination.perPage=l),class:"!w-20",options:[10,50,100]},null,8,["modelValue"])]),b.value>1?(g(),C("div",me,[o(a,{preset:"secondary",icon:"va-arrow-left","aria-label":"Previous page",disabled:s.$props.pagination.page===1,onClick:e[3]||(e[3]=l=>s.$props.pagination.page--)},null,8,["disabled"]),o(a,{class:"mr-2",preset:"secondary",icon:"va-arrow-right","aria-label":"Next page",disabled:s.$props.pagination.page===b.value,onClick:e[4]||(e[4]=l=>s.$props.pagination.page++)},null,8,["disabled"]),o(F,{modelValue:s.$props.pagination.page,"onUpdate:modelValue":e[5]||(e[5]=l=>s.$props.pagination.page=l),"buttons-preset":"secondary",pages:b.value,"visible-pages":5,"boundary-links":!1,"direction-links":!1},null,8,["modelValue","pages"])])):T("",!0)])])}}}),ve=L(ge,[["__scopeId","data-v-6b0380a6"]]),fe={class:"flex justify-end flex-col-reverse sm:flex-row mt-4 gap-2"},be=S({__name:"EditProjectForm",props:{project:{},saveButtonLabel:{}},emits:["save","close"],setup(_,{expose:w}){const v=_,f={project_name:"",project_owner:void 0,team:[],status:void 0},r=U({...f}),$=N(()=>Object.keys(r.value).some(n=>{var a;return n==="team"?!1:r.value[n]!==((a=v.project??f)==null?void 0:a[n])}));w({isFormHasUnsavedChanges:$}),ee(()=>v.project,()=>{v.project&&(r.value={...v.project,project_owner:v.project.project_owner})},{immediate:!0});const y=n=>!!n||"This field is required",{users:V,filters:b}=M({pagination:U({page:1,perPage:100,total:10})}),{users:s,filters:e}=M({pagination:U({page:1,perPage:100,total:10})});return(n,a)=>{const P=d("VaInput"),B=d("VaSelect"),F=d("VaButton"),l=d("VaForm");return g(),D(l,{class:"flex flex-col gap-2"},{default:c(({validate:j})=>[o(P,{modelValue:r.value.project_name,"onUpdate:modelValue":a[0]||(a[0]=t=>r.value.project_name=t),label:"Project name",rules:[y]},null,8,["modelValue","rules"]),o(B,{modelValue:r.value.project_owner,"onUpdate:modelValue":a[1]||(a[1]=t=>r.value.project_owner=t),search:i(e).search,"onUpdate:search":a[2]||(a[2]=t=>i(e).search=t),searchable:"",label:"Owner","text-by":"fullname","track-by":"id",rules:[y],options:i(s)},{content:c(({value:t})=>[t?(g(),C("div",{key:t.id,class:"flex items-center gap-1 mr-4"},[o(O,{user:t,size:"18px"},null,8,["user"]),h(" "+k(t.fullname),1)])):T("",!0)]),_:1},8,["modelValue","search","rules","options"]),o(B,{modelValue:r.value.team,"onUpdate:modelValue":a[3]||(a[3]=t=>r.value.team=t),search:i(b).search,"onUpdate:search":a[4]||(a[4]=t=>i(b).search=t),label:"Team","text-by":"fullname","track-by":"id",multiple:"",rules:[t=>"length"in t&&t.length>0||"This field is required"],options:i(V),"max-visible-options":3},{content:c(({valueArray:t})=>[t?(g(!0),C(E,{key:0},I(t,(m,u)=>(g(),C("div",{key:m.id,class:"flex items-center gap-1 mr-2"},[o(O,{user:m,size:"18px"},null,8,["user"]),h(" "+k(m.fullname)+k(u<t.length-1?",":""),1)]))),128)):T("",!0)]),_:1},8,["modelValue","search","rules","options"]),o(B,{modelValue:r.value.status,"onUpdate:modelValue":a[5]||(a[5]=t=>r.value.status=t),label:"Status",rules:[y],"track-by":"value","value-by":"value",options:[{text:"In progress",value:"in progress"},{text:"Archived",value:"archived"},{text:"Completed",value:"completed"},{text:"Important",value:"important"}]},{content:c(({value:t})=>[t?(g(),D(q,{key:0,status:t.value},null,8,["status"])):T("",!0)]),_:1},8,["modelValue","rules"]),p("div",fe,[o(F,{preset:"secondary",color:"secondary",onClick:a[6]||(a[6]=t=>n.$emit("close"))},{default:c(()=>a[7]||(a[7]=[h("Cancel")])),_:1}),o(F,{onClick:t=>j()&&n.$emit("save",r.value)},{default:c(()=>[h(k(n.saveButtonLabel),1)]),_:2},1032,["onClick"])])]),_:1})}}}),ye=L(be,[["__scopeId","data-v-4405dfca"]]),_e={class:"flex flex-col md:flex-row gap-2 mb-2 justify-between"},Ve={class:"flex flex-col md:flex-row gap-2 justify-start"},je={key:0,class:"va-h5 mb-4"},xe={key:1,class:"va-h5 mb-4"},he=S({__name:"ProjectsPage",setup(_){const w=X("projects-view",!0),{projects:v,update:f,add:r,isLoading:$,remove:y,pagination:V,sorting:b}=Z(),s=U(null),e=U(!1),n=m=>{s.value=m,e.value=!0},a=()=>{s.value=null,e.value=!0},{init:P}=oe(),B=async m=>{e.value=!1,"id"in m?(await f(m),P({message:"Project updated",color:"success"})):(await r(m),P({message:"Project created",color:"success"}))},{confirm:F}=te(),l=async m=>{await F({title:"Delete project",message:`Are you sure you want to delete project "${m.project_name}"?`,okText:"Delete",size:"small",maxWidth:"380px"})&&(await y(m),P({message:"Project deleted",color:"success"}))},j=U(),t=async m=>{j.value.isFormHasUnsavedChanges?await F({maxWidth:"380px",message:"Form has unsaved changes. Are you sure you want to close it?",size:"small"})&&m():m()};return(m,u)=>{const G=d("VaButtonToggle"),R=d("VaButton"),H=d("VaCardContent"),W=d("VaModal"),K=d("VaCard");return g(),C(E,null,[u[6]||(u[6]=p("h1",{class:"page-title"},"Projects",-1)),o(K,null,{default:c(()=>[o(H,null,{default:c(()=>[p("div",_e,[p("div",Ve,[o(G,{modelValue:i(w),"onUpdate:modelValue":u[0]||(u[0]=x=>A(w)?w.value=x:null),color:"background-element","border-color":"background-element",options:[{label:"Cards",value:!0},{label:"Table",value:!1}]},null,8,["modelValue"])]),o(R,{icon:"add",onClick:a},{default:c(()=>u[5]||(u[5]=[h("Project")])),_:1})]),i(w)?(g(),D(ie,{key:0,projects:i(v),loading:i($),onEdit:n,onDelete:l},null,8,["projects","loading"])):(g(),D(ve,{key:1,"sort-by":i(b).sortBy,"onUpdate:sortBy":u[1]||(u[1]=x=>i(b).sortBy=x),"sorting-order":i(b).sortingOrder,"onUpdate:sortingOrder":u[2]||(u[2]=x=>i(b).sortingOrder=x),pagination:i(V),"onUpdate:pagination":u[3]||(u[3]=x=>A(V)?V.value=x:null),projects:i(v),loading:i($),onEdit:n,onDelete:l},null,8,["sort-by","sorting-order","pagination","projects","loading"]))]),_:1}),o(W,{modelValue:e.value,"onUpdate:modelValue":u[4]||(u[4]=x=>e.value=x),size:"small","mobile-fullscreen":"","close-button":"",stateful:"","hide-default-actions":"","before-cancel":t},{default:c(({cancel:x,ok:J})=>[s.value===null?(g(),C("h1",je,"Add project")):(g(),C("h1",xe,"Edit project")),o(ye,{ref_key:"editFormRef",ref:j,project:s.value,"save-button-label":s.value===null?"Add":"Save",onClose:x,onSave:Q=>{B(Q),J()}},null,8,["project","save-button-label","onClose","onSave"])]),_:1},8,["modelValue"])]),_:1})],64)}}});export{he as default};
//# sourceMappingURL=ProjectsPage-Yn0kF5mZ.js.map
