import{d as o,r as s,p as r,o as n,c as l,b as p,n as d,m as i,u,e as f,C as _}from"./index.b7c6ec9f.js";const k=o({__name:"FramecalcView",setup(x){const c="snartomo-framecalc",a=s({command:null});return async function(){const e=await(await fetch("./framecalc-help.txt")).text(),m=r(e,c);a.command=m}(),(t,e)=>(n(),l("main",null,[a.command?(n(),p(u(_),d(i({key:0},a.command)),null,16)):f("",!0)]))}});export{k as default};