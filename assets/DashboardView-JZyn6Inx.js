import{a as n}from"./axios-L6U4YIEh.js";import{_ as u,c as d,a as r,b as t,w as a,d as e,F as _,r as c,o as l}from"./index-AYMRNMcT.js";var m={VITE_URL:"https://vue3-course-api.hexschool.io",VITE_PATH:"ttmtest",BASE_URL:"/Vue-Week6/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:p}=m,h={methods:{checkLogin(){n.post(`${p}/v2/api/user/check`).then(o=>{console.log("驗證成功:",o.data.success)}).catch(()=>{this.$router.push("/login")})}},mounted(){const o=document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,"$1");n.defaults.headers.common.Authorization=o,this.checkLogin()}},f=r("h2",null,"這是後台",-1);function k(o,V,R,$,x,E){const s=c("RouterLink"),i=c("RouterView");return l(),d(_,null,[f,r("nav",null,[t(s,{to:"/admin/products"},{default:a(()=>[e("產品列表")]),_:1}),e(" | "),t(s,{to:"/admin/order"},{default:a(()=>[e("訂單列表")]),_:1}),e(" | "),t(s,{to:"/"},{default:a(()=>[e("回到前台")]),_:1})]),t(i)],64)}const v=u(h,[["render",k]]);export{v as default};
