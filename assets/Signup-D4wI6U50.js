import{d as x,S as I,Q as k,f as l,a as C,g as P,w as r,b as d,i as m,h as o,I as p}from"./index-Dt8_RWqX.js";import{u as R}from"./useForm-DKL7tPFR.js";import{u as A}from"./useToast-B__vTN-n.js";const B={class:"text-base mb-4 leading-5"},S={class:"flex justify-center mt-4"},L=x({__name:"Signup",setup(h){const{validate:f}=R("form"),{push:v}=I(),{init:w}=A(),n=k({email:"",password:"",repeatPassword:""}),i=()=>{f()&&(w({message:"You've successfully signed up",color:"success"}),v({name:"dashboard"}))},_=[e=>!!e||"Password field is required",e=>e&&e.length>=8||"Password must be at least 8 characters long",e=>e&&/[A-Za-z]/.test(e)||"Password must contain at least one letter",e=>e&&/\d/.test(e)||"Password must contain at least one number",e=>e&&/[!@#$%^&*(),.?":{}|<>]/.test(e)||"Password must contain at least one special character"];return(e,a)=>{const b=l("RouterLink"),u=l("VaInput"),c=l("VaIcon"),V=l("VaValue"),y=l("VaButton"),g=l("VaForm");return C(),P(g,{ref:"form",onSubmit:p(i,["prevent"])},{default:r(()=>[a[6]||(a[6]=d("h1",{class:"font-semibold text-4xl mb-4"},"Sign up",-1)),d("p",B,[a[4]||(a[4]=m(" Have an account? ")),o(b,{to:{name:"login"},class:"font-semibold text-primary"},{default:r(()=>a[3]||(a[3]=[m("Login")])),_:1})]),o(u,{modelValue:n.email,"onUpdate:modelValue":a[0]||(a[0]=s=>n.email=s),rules:[s=>!!s||"Email field is required",s=>/.+@.+\..+/.test(s)||"Email should be valid"],class:"mb-4",label:"Email",type:"email"},null,8,["modelValue","rules"]),o(V,{"default-value":!1},{default:r(s=>[o(u,{ref:"password1",modelValue:n.password,"onUpdate:modelValue":a[1]||(a[1]=t=>n.password=t),rules:_,type:s.value?"text":"password",class:"mb-4",label:"Password",messages:"Password should be 8+ characters: letters, numbers, and special characters.",onClickAppendInner:p(t=>s.value=!s.value,["stop"])},{appendInner:r(()=>[o(c,{name:s.value?"mso-visibility_off":"mso-visibility",class:"cursor-pointer",color:"secondary"},null,8,["name"])]),_:2},1032,["modelValue","type","onClickAppendInner"]),o(u,{ref:"password2",modelValue:n.repeatPassword,"onUpdate:modelValue":a[2]||(a[2]=t=>n.repeatPassword=t),rules:[t=>!!t||"Repeat Password field is required",t=>t===n.password||"Passwords don't match"],type:s.value?"text":"password",class:"mb-4",label:"Repeat Password",onClickAppendInner:p(t=>s.value=!s.value,["stop"])},{appendInner:r(()=>[o(c,{name:s.value?"mso-visibility_off":"mso-visibility",class:"cursor-pointer",color:"secondary"},null,8,["name"])]),_:2},1032,["modelValue","rules","type","onClickAppendInner"])]),_:1}),d("div",S,[o(y,{class:"w-full",onClick:i},{default:r(()=>a[5]||(a[5]=[m(" Create account")])),_:1})])]),_:1},512)}}});export{L as default};
//# sourceMappingURL=Signup-D4wI6U50.js.map
