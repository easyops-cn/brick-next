"use strict";(globalThis.webpackChunknext_docs=globalThis.webpackChunknext_docs||[]).push([[9749],{8580:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>r,default:()=>a,frontMatter:()=>t,metadata:()=>o,toc:()=>l});var c=n(5893),i=n(1151);const t={title:"Pipes"},r=void 0,o={id:"concepts/pipes",title:"Pipes",description:'\u5728 placeholders \u5360\u4f4d\u7b26 "${ ... }" \u548c "@{ ... }"\u4e2d\u53ef\u4ee5\u914d\u7f6e\u7ba1\u9053\u5217\u8868\uff0c\u7ba1\u9053\u63d0\u4f9b\u4e86\u8fde\u7eed\u5904\u7406\u6570\u636e\u7684\u80fd\u529b\uff0c\u76f8\u5f53\u4e8e\u7531\u6846\u67b6\u7edf\u4e00\u63d0\u4f9b\u7684\u5168\u5c40\u6570\u636e\u52a0\u5de5\u51fd\u6570\u3002',source:"@site/docs/concepts/pipes.md",sourceDirName:"concepts",slug:"/concepts/pipes",permalink:"/docs/concepts/pipes",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Pipes"},sidebar:"docsSidebar",previous:{title:"Placeholders",permalink:"/docs/concepts/placeholders"},next:{title:"Media Query",permalink:"/docs/concepts/media-query"}},d={},l=[{value:"\u56fe\u89e3",id:"\u56fe\u89e3",level:2},{value:"\u7ba1\u9053\u5217\u8868",id:"\u7ba1\u9053\u5217\u8868",level:2},{value:"\u53d8\u66f4\u5386\u53f2",id:"history",level:2}];function p(e){const s={a:"a",blockquote:"blockquote",code:"code",h2:"h2",img:"img",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(s.p,{children:["\u5728 ",(0,c.jsx)(s.a,{href:"/docs/concepts/placeholders",children:"placeholders \u5360\u4f4d\u7b26"})," ",(0,c.jsx)(s.code,{children:'"${ ... }"'})," \u548c ",(0,c.jsx)(s.code,{children:'"@{ ... }"'}),"\u4e2d\u53ef\u4ee5\u914d\u7f6e\u7ba1\u9053\u5217\u8868\uff0c\u7ba1\u9053\u63d0\u4f9b\u4e86\u8fde\u7eed\u5904\u7406\u6570\u636e\u7684\u80fd\u529b\uff0c\u76f8\u5f53\u4e8e\u7531\u6846\u67b6\u7edf\u4e00\u63d0\u4f9b\u7684\u5168\u5c40\u6570\u636e\u52a0\u5de5\u51fd\u6570\u3002"]}),"\n",(0,c.jsxs)(s.blockquote,{children:["\n",(0,c.jsxs)(s.p,{children:["\u5bf9\u4e8e\u4e0d\u5177\u5907\u901a\u7528\u6027\uff0c\u800c\u662f\u9488\u5bf9\u7279\u5b9a\u7684\u4e1a\u52a1\u7684\u52a0\u5de5\u51fd\u6570\uff0c\u5e94\u4f7f\u7528 ",(0,c.jsx)(s.a,{href:"/docs/concepts/custom-processors",children:"Custom Processors \u81ea\u5b9a\u4e49\u52a0\u5de5\u51fd\u6570"}),"\u3002"]}),"\n"]}),"\n",(0,c.jsxs)(s.p,{children:["\u7ba1\u9053\u7684\u57fa\u672c\u8bed\u6cd5\u4e3a\u4ee5 ",(0,c.jsx)(s.code,{children:"|"})," \u5f00\u59cb\uff0c\u7136\u540e\u662f ",(0,c.jsx)(s.code,{children:"pipe identifier"}),"\uff0c\u6700\u540e\u662f\u53ef\u9009\u7684\u989d\u5916\u53c2\u6570\u5217\u8868\uff0c\u4ee5 ",(0,c.jsx)(s.code,{children:":"})," \u5206\u9694\uff0c\u53c2\u6570\u503c\u5982\u679c\u662f\u4e0d\u5305\u542b\u7279\u6b8a\u63a7\u5236\u5b57\u7b26\uff08",(0,c.jsx)(s.code,{children:"|:}"}),"\uff09\u548c\u7a7a\u767d\u7b26\u7684\u5b57\u7b26\u4e32\u3001\u5e76\u4e14\u4e0d\u4f1a\u548c JSON value \u683c\u5f0f\u51b2\u7a81\u65f6\uff0c\u53ef\u4ee5\u76f4\u63a5\u586b\u5199\u5b57\u9762\u91cf\u5b57\u7b26\uff0c\u5426\u5219\u5e94\u4f7f\u7528 JSON value \u683c\u5f0f\u7f16\u5199\u3002"]}),"\n",(0,c.jsxs)(s.p,{children:["\u5728\u8fd0\u884c\u65f6\uff0c\u7ba1\u9053\u5217\u8868\u5c06\u88ab\u904d\u5386\u6267\u884c\uff0c\u901a\u8fc7 ",(0,c.jsx)(s.code,{children:"identifier"})," \u627e\u5230\u5bf9\u5e94\u7684\u7ba1\u9053\u51fd\u6570 ",(0,c.jsx)(s.code,{children:"pipe"}),"\uff0c\u5c06\u5f53\u524d ",(0,c.jsx)(s.code,{children:"result"})," \u4f5c\u4e3a\u7b2c\u4e00\u4e2a\u53c2\u6570\uff0c",(0,c.jsx)(s.code,{children:"parameters"})," \u4f5c\u4e3a\u989d\u5916\u53c2\u6570\u5217\u8868\uff0c\u8c03\u7528 ",(0,c.jsx)(s.code,{children:"pipe"})," \u5e76\u5c06\u8fd4\u56de\u503c\u8d4b\u503c\u7ed9 ",(0,c.jsx)(s.code,{children:"result"}),"\u3002"]}),"\n",(0,c.jsx)(s.p,{children:"\u4f8b\u5982\u4ee5\u4e0b transform \u914d\u7f6e\u7247\u6bb5\uff1a"}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-yaml",children:'transform:\n  url: \'?query=@{ some.field[0].path = ["complex","value"] | map : instanceId | slice : 0 : 10 }\'\n'})}),"\n",(0,c.jsxs)(s.p,{children:["\u5b57\u6bb5 ",(0,c.jsx)(s.code,{children:"url"})," \u4f7f\u7528\u7684\u7ba1\u9053\u4e3a\uff1a"]}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-yaml",children:'pipes:\n  - identifier: "map"\n    parameters:\n      - "instanceId"\n  - identifier: "slice"\n    parameters:\n      - 0\n      - 10\n'})}),"\n",(0,c.jsx)(s.h2,{id:"\u56fe\u89e3",children:"\u56fe\u89e3"}),"\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.img,{alt:"\u56fe\u89e3 pipes",src:n(2936).Z+"",width:"865",height:"322"})}),"\n",(0,c.jsx)(s.h2,{id:"\u7ba1\u9053\u5217\u8868",children:"\u7ba1\u9053\u5217\u8868"}),"\n",(0,c.jsxs)(s.p,{children:["Pipes \u7ba1\u9053\u6e90\u7801\u73b0\u5728\u6258\u7ba1\u5728\u516c\u5f00\u7684 GitHub ",(0,c.jsx)(s.a,{href:"https://github.com/easyops-cn/brick-next-pipes",children:"\u4ed3\u5e93"}),"\u4e2d\uff0c\u4ee5\u5141\u8bb8\u5305\u62ec\u5ba2\u6237\u5728\u5185\u7684\u7b2c\u4e09\u65b9\u5f00\u53d1\u8005\u5171\u540c\u7ef4\u62a4\u8fd9\u4e9b\u516c\u5171\u6570\u636e\u5904\u7406\u51fd\u6570\u3002"]}),"\n",(0,c.jsxs)(s.p,{children:["\u5f53\u524d\u5e73\u53f0\u652f\u6301\u7684\u7ba1\u9053\u51fd\u6570\u5217\u8868\u8bf7\u8bbf\u95ee ",(0,c.jsx)(s.a,{href:"https://easyops-cn.github.io/brick-next-pipes/brick-next-pipes.html",children:"https://easyops-cn.github.io/brick-next-pipes/brick-next-pipes.html"}),"\u3002"]}),"\n",(0,c.jsx)(s.h2,{id:"history",children:"\u53d8\u66f4\u5386\u53f2"})]})}function a(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,c.jsx)(s,{...e,children:(0,c.jsx)(p,{...e})}):p(e)}},2936:(e,s,n)=>{n.d(s,{Z:()=>c});const c=n.p+"assets/images/pipes-68c73e63eb629b3f82addc4e8d7af7c1.png"},1151:(e,s,n)=>{n.d(s,{Z:()=>o,a:()=>r});var c=n(7294);const i={},t=c.createContext(i);function r(e){const s=c.useContext(t);return c.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),c.createElement(t.Provider,{value:s},e.children)}}}]);