import{S as t,i as s,s as a,a as e,e as n,t as o,r as i,g as r,f as c,c as l,b as h,d as u,h as m,j as f,k as p,m as d,n as v}from"./client.b4027b65.js";function b(t){let s,a,b,g,j,x,E=t[0].title+"",H=t[0].html+"";return document.title=s=t[0].title,{c(){a=e(),b=n("h1"),g=o(E),j=e(),x=n("div"),this.h()},l(t){i('[data-svelte="svelte-1uty71u"]',document.head).forEach(r),a=c(t),b=l(t,"H1",{});var s=h(b);g=u(s,E),s.forEach(r),j=c(t),x=l(t,"DIV",{class:!0}),h(x).forEach(r),this.h()},h(){m(x,"class","content svelte-emm3f3")},m(t,s){f(t,a,s),f(t,b,s),p(b,g),f(t,j,s),f(t,x,s),x.innerHTML=H},p(t,[a]){1&a&&s!==(s=t[0].title)&&(document.title=s),1&a&&E!==(E=t[0].title+"")&&d(g,E),1&a&&H!==(H=t[0].html+"")&&(x.innerHTML=H)},i:v,o:v,d(t){t&&r(a),t&&r(b),t&&r(j),t&&r(x)}}}async function g({params:t}){const s=await this.fetch(`blog/${t.slug}.json`),a=await s.json();if(200===s.status)return{post:a};this.error(s.status,a.message)}function j(t,s,a){let{post:e}=s;return t.$$set=t=>{"post"in t&&a(0,e=t.post)},[e]}export default class extends t{constructor(t){super(),s(this,t,j,b,a,{post:0})}}export{g as preload};