import{_ as D,d as Q,u as X}from"./useProjects-CfB9Sg0B.js";import{u as L}from"./useModal-CdMsIUwE.js";import{u as I,a as Y}from"./useUsers-D4hvPUy9.js";import{d as z,J as Z,e as h,f as d,a as T,c as M,h as a,w as p,b as i,i as k,t as U,u as r,K as N,E as H,F as W,_ as ee,r as j,A as q,g as R,I as le}from"./index-CmN9cPVF.js";import{u as ae}from"./useForm-BZb0T4e0.js";import{v as C}from"./utils-Blx_SZM_.js";import{u as se}from"./useToast-CFOIASfZ.js";const oe={class:"flex items-center gap-2 max-w-[230px] ellipsis"},te={class:"max-w-[120px] ellipsis"},ne={class:"ellipsis max-w-[230px]"},re={class:"ellipsis max-w-[300px] lg:max-w-[450px]"},ue={class:"flex gap-2 justify-end"},ie={class:"flex flex-col-reverse md:flex-row gap-2 justify-between items-center py-2"},de={key:0,class:"flex"},me=z({__name:"UsersTable",props:{users:{type:Array,required:!0},loading:{type:Boolean,default:!1},pagination:{type:Object,required:!0},sortBy:{type:String,required:!0},sortingOrder:{type:String,required:!0}},emits:["edit-user","delete-user","update:sortBy","update:sortingOrder"],setup(B,{emit:y}){const S=Q([{label:"Full Name",key:"fullname",sortable:!0},{label:"Email",key:"email",sortable:!0},{label:"Username",key:"username",sortable:!0},{label:"Role",key:"role",sortable:!0},{label:"Projects",key:"projects",sortable:!0},{label:" ",key:"actions",align:"right"}]),c=B,v=y,o=Z(c,"users"),x=I(c,"sortBy",v),f=I(c,"sortingOrder",v),b={admin:"danger",user:"background-element",owner:"warning"},w=h(()=>Math.ceil(c.pagination.total/c.pagination.perPage)),{confirm:F}=L(),_=async t=>{await F({title:"Delete user",message:`Are you sure you want to delete ${t.fullname}?`,okText:"Delete",cancelText:"Cancel",size:"small",maxWidth:"380px"})&&v("delete-user",t)},A=t=>t.length===0?"No projects":t.length<=2?t.map(e=>e.project_name).join(", "):t.slice(0,2).map(e=>e.project_name).join(", ")+" + "+(t.length-2)+" more";return(t,e)=>{const l=d("VaBadge"),g=d("VaButton"),m=d("VaDataTable"),n=d("VaSelect"),$=d("VaPagination");return T(),M(W,null,[a(m,{"sort-by":r(x),"onUpdate:sortBy":e[0]||(e[0]=s=>N(x)?x.value=s:null),"sorting-order":r(f),"onUpdate:sortingOrder":e[1]||(e[1]=s=>N(f)?f.value=s:null),columns:r(S),items:o.value,loading:t.$props.loading},{"cell(fullname)":p(({rowData:s})=>[i("div",oe,[a(D,{user:s,size:"small"},null,8,["user"]),k(" "+U(s.fullname),1)])]),"cell(username)":p(({rowData:s})=>[i("div",te,U(s.username),1)]),"cell(email)":p(({rowData:s})=>[i("div",ne,U(s.email),1)]),"cell(role)":p(({rowData:s})=>[a(l,{text:s.role,color:b[s.role]},null,8,["text","color"])]),"cell(projects)":p(({rowData:s})=>[i("div",re,U(A(s.projects)),1)]),"cell(actions)":p(({rowData:s})=>[i("div",ue,[a(g,{preset:"primary",size:"small",icon:"mso-edit","aria-label":"Edit user",onClick:O=>t.$emit("edit-user",s)},null,8,["onClick"]),a(g,{preset:"primary",size:"small",icon:"mso-delete",color:"danger","aria-label":"Delete user",onClick:O=>_(s)},null,8,["onClick"])])]),_:1},8,["sort-by","sorting-order","columns","items","loading"]),i("div",ie,[i("div",null,[i("b",null,U(t.$props.pagination.total)+" results.",1),e[6]||(e[6]=k(" Results per page ")),a(n,{modelValue:t.$props.pagination.perPage,"onUpdate:modelValue":e[2]||(e[2]=s=>t.$props.pagination.perPage=s),class:"!w-20",options:[10,50,100]},null,8,["modelValue"])]),w.value>1?(T(),M("div",de,[a(g,{preset:"secondary",icon:"va-arrow-left","aria-label":"Previous page",disabled:t.$props.pagination.page===1,onClick:e[3]||(e[3]=s=>t.$props.pagination.page--)},null,8,["disabled"]),a(g,{class:"mr-2",preset:"secondary",icon:"va-arrow-right","aria-label":"Next page",disabled:t.$props.pagination.page===w.value,onClick:e[4]||(e[4]=s=>t.$props.pagination.page++)},null,8,["disabled"]),a($,{modelValue:t.$props.pagination.page,"onUpdate:modelValue":e[5]||(e[5]=s=>t.$props.pagination.page=s),"buttons-preset":"secondary",pages:w.value,"visible-pages":5,"boundary-links":!1,"direction-links":!1},null,8,["modelValue","pages"])])):H("",!0)])],64)}}}),pe=ee(me,[["__scopeId","data-v-17c7b410"]]),ce={class:"self-stretch flex-col justify-start items-start gap-4 flex"},fe={class:"flex gap-4 flex-col sm:flex-row w-full"},ve={class:"flex gap-4 flex-col sm:flex-row w-full"},ge={class:"flex gap-4 w-full"},Ve={class:"w-1/2"},be={class:"flex items-center w-1/2 mt-4"},ye={class:"flex gap-2 flex-col-reverse items-stretch justify-end w-full sm:flex-row sm:items-center"},xe=z({__name:"EditUserForm",props:{user:{type:Object,default:null},saveButtonLabel:{type:String,default:"Save"}},emits:["close","save"],setup(B,{expose:y,emit:S}){const c=B,v={id:-1,avatar:"",fullname:"",role:"user",username:"",notes:"",email:"",active:!0,projects:[]},o=j({...v}),x=h(()=>Object.keys(o.value).some(e=>{var l;return e==="avatar"||e==="projects"?!1:o.value[e]!==((l=c.user??v)==null?void 0:l[e])}));y({isFormHasUnsavedChanges:x}),q(()=>c.user,()=>{c.user&&(o.value={...c.user,avatar:c.user.avatar||""})},{immediate:!0});const f=j(),b=e=>URL.createObjectURL(e);q(f,e=>{o.value.avatar=e?b(e):""});const w=ae("add-user-form"),F=S,_=()=>{w.validate()&&F("save",o.value)},A=[{text:"Admin",value:"admin"},{text:"User",value:"user"},{text:"Owner",value:"owner"}],{projects:t}=X({pagination:j({page:1,perPage:9999,total:10})});return(e,l)=>{const g=d("VaButton"),m=d("VaFileUpload"),n=d("VaInput"),$=d("VaSelect"),s=d("VaCheckbox"),O=d("VaTextarea"),P=d("VaForm");return T(),R(P,{ref:"add-user-form",class:"flex-col justify-start items-start gap-4 inline-flex w-full"},{default:p(({isValid:E})=>[a(m,{modelValue:f.value,"onUpdate:modelValue":l[1]||(l[1]=u=>f.value=u),type:"single","hide-file-list":"",class:"self-stretch justify-start items-center gap-4 inline-flex"},{default:p(()=>[a(D,{user:o.value,size:"large"},null,8,["user"]),a(g,{preset:"primary",size:"small"},{default:p(()=>l[10]||(l[10]=[k("Add image")])),_:1}),f.value?(T(),R(g,{key:0,preset:"primary",color:"danger",size:"small",icon:"delete",class:"z-10",onClick:l[0]||(l[0]=le(u=>f.value=void 0,["stop"]))})):H("",!0)]),_:1},8,["modelValue"]),i("div",ce,[i("div",fe,[a(n,{modelValue:o.value.fullname,"onUpdate:modelValue":l[2]||(l[2]=u=>o.value.fullname=u),label:"Full name",class:"w-full sm:w-1/2",rules:[r(C).required],name:"fullname"},null,8,["modelValue","rules"]),a(n,{modelValue:o.value.username,"onUpdate:modelValue":l[3]||(l[3]=u=>o.value.username=u),label:"Username",class:"w-full sm:w-1/2",rules:[r(C).required],name:"username"},null,8,["modelValue","rules"])]),i("div",ve,[a(n,{modelValue:o.value.email,"onUpdate:modelValue":l[4]||(l[4]=u=>o.value.email=u),label:"Email",class:"w-full sm:w-1/2",rules:[r(C).required,r(C).email],name:"email"},null,8,["modelValue","rules"]),a($,{modelValue:o.value.projects,"onUpdate:modelValue":l[5]||(l[5]=u=>o.value.projects=u),label:"Projects",class:"w-full sm:w-1/2",options:r(t),rules:[r(C).required],name:"projects","text-by":"project_name","track-by":"id",multiple:"","max-visible-options":2},null,8,["modelValue","options","rules"])]),i("div",ge,[i("div",Ve,[a($,{modelValue:o.value.role,"onUpdate:modelValue":l[6]||(l[6]=u=>o.value.role=u),label:"Role",class:"w-full",options:A,rules:[r(C).required],name:"role","value-by":"value"},null,8,["modelValue","rules"])]),i("div",be,[a(s,{modelValue:o.value.active,"onUpdate:modelValue":l[7]||(l[7]=u=>o.value.active=u),label:"Active",class:"w-full",name:"active"},null,8,["modelValue"])])]),a(O,{modelValue:o.value.notes,"onUpdate:modelValue":l[8]||(l[8]=u=>o.value.notes=u),label:"Notes",class:"w-full",name:"notes"},null,8,["modelValue"]),i("div",ye,[a(g,{preset:"secondary",color:"secondary",onClick:l[9]||(l[9]=u=>e.$emit("close"))},{default:p(()=>l[11]||(l[11]=[k("Cancel")])),_:1}),a(g,{disabled:!E,onClick:_},{default:p(()=>[k(U(B.saveButtonLabel),1)]),_:2},1032,["disabled"])])])]),_:1},512)}}}),we={class:"flex flex-col md:flex-row gap-2 mb-2 justify-between"},_e={class:"flex flex-col md:flex-row gap-2 justify-start"},Ue={class:"va-h5"},Ae=z({__name:"UsersPage",setup(B){const y=j(!1),{users:S,isLoading:c,filters:v,sorting:o,pagination:x,...f}=Y(),b=j(null),w=m=>{b.value=m,y.value=!0},F=()=>{b.value=null,y.value=!0},{init:_}=se(),A=async m=>{b.value?(await f.update(m),_({message:`${m.fullname} has been updated`,color:"success"})):(f.add(m),_({message:`${m.fullname} has been created`,color:"success"}))},t=async m=>{await f.remove(m),_({message:`${m.fullname} has been deleted`,color:"success"})},e=j(),{confirm:l}=L(),g=async m=>{e.value.isFormHasUnsavedChanges?await l({maxWidth:"380px",message:"Form has unsaved changes. Are you sure you want to close it?",size:"small"})&&m():m()};return(m,n)=>{const $=d("VaButtonToggle"),s=d("VaIcon"),O=d("VaInput"),P=d("VaButton"),E=d("VaCardContent"),u=d("VaCard"),J=d("VaModal");return T(),M(W,null,[n[6]||(n[6]=i("h1",{class:"page-title"},"Users",-1)),a(u,null,{default:p(()=>[a(E,null,{default:p(()=>[i("div",we,[i("div",_e,[a($,{modelValue:r(v).isActive,"onUpdate:modelValue":n[0]||(n[0]=V=>r(v).isActive=V),color:"background-element","border-color":"background-element",options:[{label:"Active",value:!0},{label:"Inactive",value:!1}]},null,8,["modelValue"]),a(O,{modelValue:r(v).search,"onUpdate:modelValue":n[1]||(n[1]=V=>r(v).search=V),placeholder:"Search"},{prependInner:p(()=>[a(s,{name:"search",color:"secondary",size:"small"})]),_:1},8,["modelValue"])]),a(P,{onClick:F},{default:p(()=>n[5]||(n[5]=[k("Add User")])),_:1})]),a(pe,{"sort-by":r(o).sortBy,"onUpdate:sortBy":n[2]||(n[2]=V=>r(o).sortBy=V),"sorting-order":r(o).sortingOrder,"onUpdate:sortingOrder":n[3]||(n[3]=V=>r(o).sortingOrder=V),users:r(S),loading:r(c),pagination:r(x),onEditUser:w,onDeleteUser:t},null,8,["sort-by","sorting-order","users","loading","pagination"])]),_:1})]),_:1}),a(J,{modelValue:y.value,"onUpdate:modelValue":n[4]||(n[4]=V=>y.value=V),size:"small","mobile-fullscreen":"","close-button":"","hide-default-actions":"","before-cancel":g},{default:p(({cancel:V,ok:K})=>[i("h1",Ue,U(b.value?"Edit user":"Add user"),1),a(xe,{ref_key:"editFormRef",ref:e,user:b.value,"save-button-label":b.value?"Save":"Add",onClose:V,onSave:G=>{A(G),K()}},null,8,["user","save-button-label","onClose","onSave"])]),_:1},8,["modelValue"])],64)}}});export{Ae as default};
//# sourceMappingURL=UsersPage-CLmngwek.js.map