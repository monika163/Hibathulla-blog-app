"use strict";(self.webpackChunkblog_app=self.webpackChunkblog_app||[]).push([[483],{3258:function(e,t,r){r.r(t),r.d(t,{default:function(){return x}});var a=r(5861),s=r(7757),n=r.n(s),i=r(9271),u=r(2791),c=r(8152),l=r(6030),o=r.p+"static/media/write.f15a6f22e43d2a45154f.png",p=r(184),d=function(e){var t=(0,u.useState)(""),r=(0,c.Z)(t,2),a=r[0],s=r[1],n=(0,u.useRef)(),i=(0,u.useRef)(),d=(0,u.useRef)(),f=(0,u.useRef)(),m=(0,u.useRef)();return(0,l.v9)((function(e){return e.auth.user}))?(0,p.jsxs)("div",{className:"write",children:[(0,p.jsx)("h2",{className:"write__heading",children:"Add a Blog"}),(0,p.jsxs)("form",{onSubmit:function(t){t.preventDefault();var r={image:m.current.value,title:n.current.value,desc:i.current.value,date:d.current.value,cat:f.current.value};e.onOrder(r)},className:"write__form",children:[(0,p.jsxs)("div",{className:"write__inputbox",children:[a&&(0,p.jsx)("img",{className:"write__showImg",src:a,alt:"blog"}),(0,p.jsx)("input",{ref:m,onChange:function(){s(m.current.value)},type:"text",className:"write__imageLink",placeholder:"upload image URL...",required:!0}),(0,p.jsx)("input",{ref:f,type:"text",className:"write__cat",placeholder:"Category",required:!0}),(0,p.jsx)("input",{type:"text",className:"write__text",placeholder:"Title",ref:n,required:!0}),(0,p.jsx)("textarea",{ref:i,rows:"4",type:"text",className:"write__words",placeholder:"Write your Blog...",required:!0}),(0,p.jsx)("input",{ref:d,type:"date",className:"write__date"})]}),(0,p.jsx)("button",{className:"write__submit",children:"Publish"})]})]}):(0,p.jsxs)("div",{className:"notLog",children:[(0,p.jsx)("p",{className:"notLog__message",children:"SIGN IN to write a BLOG"}),(0,p.jsx)("img",{src:o,alt:"",className:"notLog__img"})]})},f=r(4569),m=r.n(f),x=function(){var e=(0,i.k6)(),t=function(){var t=(0,a.Z)(n().mark((function t(r){return n().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,m().post("/api/posts",r);case 3:e.replace("/home"),t.next=8;break;case 6:t.prev=6,t.t0=t.catch(0);case 8:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}();return(0,p.jsx)(u.Fragment,{children:(0,p.jsx)(d,{onOrder:t})})}}}]);
//# sourceMappingURL=483.c2d6b584.chunk.js.map