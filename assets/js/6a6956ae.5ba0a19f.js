"use strict";(globalThis.webpackChunknext_docs=globalThis.webpackChunknext_docs||[]).push([[6280],{4762:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>Z,contentTitle:()=>I,default:()=>P,frontMatter:()=>N,metadata:()=>M,toc:()=>_});var o=t(5893),s=t(1151),i=t(7867);const r="brick: sl-card\nchildren:\n- brick: strong\n  slot: header\n  properties:\n    textContent: My Todos\n- brick: sl-checkbox\n  properties:\n    textContent: Hard work\n- brick: sl-checkbox\n  properties:\n    textContent: Have lunch\n- brick: sl-checkbox\n  properties:\n    textContent: Go on vacation",l="brick: sl-card\nchildren:\n- brick: strong\n  slot: header\n  properties:\n    textContent: My Todos\n- brick: ':forEach'\n  dataSource: <% CTX.todos %>\n  children:\n  - brick: sl-checkbox\n    properties:\n      textContent: <% ITEM.title %>\n      checked: <% ITEM.done %>",a="brick: sl-card\nchildren:\n- brick: strong\n  slot: header\n  properties:\n    textContent: My Todos\n- brick: sl-input\n  properties:\n    placeholder: What to do?\n  events:\n    keydown:\n    - if: <% EVENT.code === 'Enter' %>\n      action: context.replace\n      args:\n      - todos\n      - |\n        <%\n          CTX.todos.concat({\n            title: EVENT.target.value,\n            done: false,\n          })\n        %>\n    - if: <% EVENT.code === 'Enter' %>\n      target: _self\n      properties:\n        value: ''\n- brick: ':forEach'\n  dataSource: <%= CTX.todos %>\n  children:\n  - brick: sl-checkbox\n    properties:\n      textContent: <% ITEM.title %>\n      checked: <% ITEM.done %>",c="    events:\n      sl-change:\n        action: context.replace\n        args:\n        - todos\n        - |\n          <%\n            CTX.todos.map(item => ({\n              ...item,\n              done: item === ITEM ? !item.done : item.done\n            }))\n          %>",d="- brick: sl-button\n  slot: footer\n  properties:\n    textContent: Clear completed\n    size: small\n  events:\n    click:\n      action: context.replace\n      args:\n      - todos\n      - <% CTX.todos.filter(t => !t.done) %>",h="- name: todos\n  resolve:\n    useProvider: basic.http-request\n    args:\n    - ./todos.json";const u={"style.css":t(8056).Z},p=r,x=a,f=[a,d].join("\n"),m=[a,c,d].join("\n"),g=m.split("\n"),b=g.findIndex((e=>e.includes("sl-button"))),j=[...g.slice(0,b+1),"  if: <%= CTX.todos.some(t => t.done) %>",...g.slice(b+1)].join("\n"),y=a.split("\n").length,v=[[7,13]],w=[[7,26],[28,28,"modified"]],k=[[y+1,f.split("\n").length]],C=[[y+1,y+c.split("\n").length]],T=[[b+2,b+2]],S=[[1,5]],E=t.p+"assets/images/my-todos-light-510c34d08c5dfe403ab644cb8108153f.png",N={title:"Tutorial"},I=void 0,M={id:"learn/tutorial",title:"Tutorial",description:"You will build a small My Todos app during this tutorial. The techniques you\u2019ll learn in the tutorial are fundamental to building any Brick Next app, and fully understanding it will give you a deep understanding of Brick Next.",source:"@site/docs/learn/tutorial.mdx",sourceDirName:"learn",slug:"/learn/tutorial",permalink:"/docs/learn/tutorial",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Tutorial"},sidebar:"docsSidebar",previous:{title:"Quick Start",permalink:"/docs/learn/quick-start"},next:{title:"Installation",permalink:"/docs/learn/installation"}},Z={},_=[{value:"Setup for the tutorial",id:"setup-for-the-tutorial",level:2},{value:"Starting with a static storyboard",id:"starting-with-a-static-storyboard",level:2},{value:"Fetching data",id:"fetching-data",level:2},{value:"Passing data",id:"passing-data",level:2},{value:"Responding to events",id:"responding-to-events",level:2},{value:"Conditional rendering",id:"conditional-rendering",level:2}];function F(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["You will build a small ",(0,o.jsx)(n.em,{children:"My Todos"})," app during this tutorial. The techniques you\u2019ll learn in the tutorial are fundamental to building any Brick Next app, and fully understanding it will give you a deep understanding of Brick Next."]}),"\n",(0,o.jsx)(n.p,{children:"You can see what it will look like when you\u2019re finished here:"}),"\n",(0,o.jsx)("img",{src:E,width:309,alt:"Screen shot of My Todos app",style:{display:"block",margin:"var(--ifm-leading) auto"}}),"\n",(0,o.jsx)(n.h2,{id:"setup-for-the-tutorial",children:"Setup for the tutorial"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"https://stackblitz.com/edit/brick-next-tutorial-my-todos?file=bootstrap.js,context.yml,storyboard.yml",children:"Fork this tutorial project"})," on StackBlitz. StackBlitz lets you do development in your browser and preview how your users will see the app you\u2019ve created."]}),"\n",(0,o.jsxs)(n.admonition,{type:"tip",children:[(0,o.jsx)(n.p,{children:"You can also follow this tutorial using your local development environment. To do this, you need to:"}),(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["Install ",(0,o.jsx)(n.a,{href:"https://nodejs.org/en/",children:"Node.js"})]}),"\n",(0,o.jsx)(n.li,{children:"In the StackBlitz tab you opened earlier, on the Project panel, press the download button to download an archive of the files locally"}),"\n",(0,o.jsxs)(n.li,{children:["Unzip the archive, then open a terminal and ",(0,o.jsx)(n.code,{children:"cd"})," to the directory you unzipped"]}),"\n",(0,o.jsxs)(n.li,{children:["Install the dependencies with ",(0,o.jsx)(n.code,{children:"npm install"})]}),"\n",(0,o.jsxs)(n.li,{children:["Run ",(0,o.jsx)(n.code,{children:"npm start"})," to start a local server and follow the prompts to view the code running in a browser"]}),"\n"]}),(0,o.jsx)(n.p,{children:"If you get stuck, don\u2019t let this stop you! Follow along online instead and try a local setup again later."})]}),"\n",(0,o.jsx)(n.h2,{id:"starting-with-a-static-storyboard",children:"Starting with a static storyboard"}),"\n",(0,o.jsx)(n.p,{children:"In the starter project, a static storyboard has been created for you:"}),"\n",(0,o.jsx)(i.Z,{files:[{name:"Bricks",code:r}],hiddenFiles:u}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsxs)(n.p,{children:["Here we\u2019re using ",(0,o.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/YAML",children:"YAML"})," to define storyboards, since it has a minimal syntax, and is more human-readable at the same time, compared to JSON or others. But keep in mind that storyboards are just tree-like structure data."]})}),"\n",(0,o.jsx)(n.p,{children:"It defines a page that is pretty the same as the following HTML:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-html",children:'<sl-card>\n  <strong slot="header">My Todos</strong>\n  <sl-checkbox>Hard work</sl-checkbox>\n  <sl-checkbox>Have launch</sl-checkbox>\n  <sl-checkbox>Go on vacation</sl-checkbox>\n</sl-card>\n'})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"https://shoelace.style/components/card",children:(0,o.jsx)(n.code,{children:"sl-card"})})," and ",(0,o.jsx)(n.a,{href:"https://shoelace.style/components/checkbox",children:(0,o.jsx)(n.code,{children:"sl-checkbox"})})," are web components from a third-party library ",(0,o.jsx)(n.a,{href:"https://shoelace.style/",children:"Shoelace"}),", which has been integrated to our built-in brick library. You can check more details on their website."]}),"\n",(0,o.jsx)(n.h2,{id:"fetching-data",children:"Fetching data"}),"\n",(0,o.jsx)(n.p,{children:"Next step you\u2019ll want to make the todo list from remote instead of static specified."}),"\n",(0,o.jsx)(n.p,{children:"First assume that you have a RESTful API to fetch todos data, which will return the following JSON:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'[\n  {\n    "title": "Hard work",\n    "done": true\n  },\n  {\n    "title": "Have launch",\n    "done": false\n  },\n  {\n    "title": "Go on vacation",\n    "done": false\n  }\n]\n'})}),"\n",(0,o.jsx)(n.p,{children:"Then you\u2019ll define a context that will be resolved by your API:"}),"\n",(0,o.jsx)(i.Z,{files:[{name:"Bricks",code:p},{name:"Context",defaultActive:!0,code:h,highlightRanges:S}],hiddenFiles:u}),"\n",(0,o.jsxs)(n.p,{children:["Here you\u2019re using a built-in ",(0,o.jsx)(n.a,{href:"/docs/concepts/provider-bricks",children:"provider brick"})," ",(0,o.jsx)(n.code,{children:"basic.http-request"})," which can call arbitrary HTTP API. It accepts a URL as its first argument. For simplicity, a static JSON file is used in this tutorial."]}),"\n",(0,o.jsx)(n.h2,{id:"passing-data",children:"Passing data"}),"\n",(0,o.jsx)(n.p,{children:"You have fetched the todo list from an API, but how to render it on the page?"}),"\n",(0,o.jsxs)(n.p,{children:["In order to render a list of todos, you can define a ",(0,o.jsx)(n.a,{href:"/docs/concepts/control-nodes",children:"control node"})," of ",(0,o.jsx)(n.code,{children:":forEach"}),", set its ",(0,o.jsx)(n.code,{children:"dataSource"})," to the context you defined before by using an ",(0,o.jsx)(n.a,{href:"/docs/concepts/expressions",children:"expression"}),", and set its ",(0,o.jsx)(n.code,{children:"children"})," to a list of bricks that will be rendered for each item in the data source."]}),"\n",(0,o.jsx)(i.Z,{files:[{name:"Bricks",code:l,highlightRanges:v},{name:"Context",code:h}],hiddenFiles:u}),"\n",(0,o.jsxs)(n.p,{children:["You can use ",(0,o.jsx)(n.code,{children:"ITEM"})," in expressions inside the children, to access the current item of each loop."]}),"\n",(0,o.jsx)(n.h2,{id:"responding-to-events",children:"Responding to events"}),"\n",(0,o.jsx)(n.p,{children:"Let\u2019s add an input box so that users can add todos as they wish."}),"\n",(0,o.jsxs)(n.p,{children:["Add a brick ",(0,o.jsx)(n.a,{href:"https://shoelace.style/components/input",children:"sl-input"}),", listen on its ",(0,o.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Element/keydown_event",children:(0,o.jsx)(n.code,{children:"keydown"})})," event, push a todo item into the list when the user pressed ",(0,o.jsx)(n.em,{children:"Enter"}),"."]}),"\n",(0,o.jsx)(i.Z,{files:[{name:"Bricks",code:x,highlightRanges:w},{name:"Context",code:h}],hiddenFiles:u}),"\n",(0,o.jsxs)(n.p,{children:["Note that you should also update the expression of ",(0,o.jsx)(n.code,{children:"dataSource"})," to enable binding mode with ",(0,o.jsx)(n.code,{children:"<%= %>"})," instead of ",(0,o.jsx)(n.code,{children:"<% %>"}),", otherwise the list will not be refreshed when the context gets updated."]}),"\n",(0,o.jsx)(n.p,{children:"Next you\u2019ll add a feature that allows the user to clear completed todos."}),"\n",(0,o.jsx)(i.Z,{files:[{name:"Bricks",code:f,highlightRanges:k},{name:"Context",code:h}],hiddenFiles:u}),"\n",(0,o.jsxs)(n.p,{children:["But the clear button is not working as you expected, it will only clear ",(0,o.jsx)(n.code,{children:"Hard work"})," which is initialized with ",(0,o.jsx)(n.code,{children:"done: true"}),". If the user clicked other todos as done, they will not get cleared when user clicked the clear button."]}),"\n",(0,o.jsx)(n.p,{children:"That\u2019s because the done states of the todos don\u2019t get updated when the user clicked the checkboxes. You need to update the context when the user clicked the checkboxes."}),"\n",(0,o.jsx)(i.Z,{files:[{name:"Bricks",code:m,highlightRanges:C},{name:"Context",code:h}],hiddenFiles:u}),"\n",(0,o.jsx)(n.h2,{id:"conditional-rendering",children:"Conditional rendering"}),"\n",(0,o.jsx)(n.p,{children:"Finally, let\u2019s make the clear button only appear when there are completed todos."}),"\n",(0,o.jsxs)(n.p,{children:["To do that, you can add a ",(0,o.jsxs)(n.a,{href:"/docs/concepts/conditional-rendering",children:[(0,o.jsx)(n.code,{children:"if"})," condition"]})," for the clear button:"]}),"\n",(0,o.jsx)(i.Z,{files:[{name:"Bricks",code:j,highlightRanges:T},{name:"Context",code:h}],hiddenFiles:u})]})}function P(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(F,{...e})}):F(e)}},9728:(e,n,t)=>{t.d(n,{Z:()=>i});t(7294);const o={ringContainer:"ringContainer_Jl9i",ring:"ring_UfU1"};var s=t(5893);function i(){return(0,s.jsx)("div",{className:o.ringContainer,children:(0,s.jsxs)("div",{className:o.ring,children:[(0,s.jsx)("div",{}),(0,s.jsx)("div",{}),(0,s.jsx)("div",{}),(0,s.jsx)("div",{})]})})}},5295:(e,n,t)=>{t.d(n,{Z:()=>a});var o=t(7294),s=t(9728),i=t(5893);const r=o.lazy((()=>Promise.all([t.e(532),t.e(635),t.e(1651)]).then(t.bind(t,1651)))),l=o.lazy((()=>Promise.all([t.e(532),t.e(9850),t.e(9384)]).then(t.bind(t,6718)))),a=(0,o.forwardRef)((function(e,n){let{files:t,currentFile:a,theme:c,className:d,typingEffectReady:h,onChange:u}=e;const p=!!navigator.maxTouchPoints;return(0,o.useEffect)((()=>{if(p&&u){const e=t.find((e=>e.name===a));e.codeSlides&&u(e.code,a)}}),[a,t,p,u]),(0,i.jsx)(o.Suspense,{fallback:(0,i.jsx)(s.Z,{}),children:p?(0,i.jsx)(r,{files:t,currentFile:a,className:d}):(0,i.jsx)(l,{files:t,currentFile:a,theme:c,className:d,typingEffectReady:h,onChange:u,ref:n})})}))},7867:(e,n,t)=>{t.d(n,{Z:()=>v});var o=t(7294),s=t(3935),i=t(4132),r=t(9507),l=t(573),a=t(5893);function c(e){let{children:n,fallback:t}=e;return(0,l.Z)()?(0,a.jsx)(a.Fragment,{children:null==n?void 0:n()}):t??null}var d,h=t(6010),u=t(6616),p=t(2748);function x(){return x=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)({}).hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},x.apply(null,arguments)}const f=e=>{let{title:n,titleId:t,...s}=e;return o.createElement("svg",x({xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"currentColor",className:"bi bi-chevron-up",viewBox:"0 0 16 16","aria-labelledby":t},s),n?o.createElement("title",{id:t},n):null,d||(d=o.createElement("path",{fillRule:"evenodd",d:"M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z"})))};var m;function g(){return g=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)({}).hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},g.apply(null,arguments)}const b=e=>{let{title:n,titleId:t,...s}=e;return o.createElement("svg",g({xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"currentColor",className:"bi bi-chevron-down",viewBox:"0 0 16 16","aria-labelledby":t},s),n?o.createElement("title",{id:t},n):null,m||(m=o.createElement("path",{fillRule:"evenodd",d:"M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"})))};var j=t(9728);const y={example:"example_UmKM",editorColumn:"editorColumn_AL_t",previewColumn:"previewColumn_FsuT",editorContainer:"editorContainer_sUW3",preview:"preview_bwr6",ready:"ready_dhJq",expanded:"expanded_o_pT",collapsed:"collapsed_aDj8",tabs:"tabs_yDjk",tab:"tab_uskj",active:"active_KoUc",buttonToggleShowMore:"buttonToggleShowMore_A68N",expandable:"expandable_arS4",condensed:"condensed_ytqo"};function v(e){let{files:n,hiddenFiles:l,condensed:d,wait:x,className:m}=e;const g=(0,o.useRef)(),v=(0,o.useRef)(),{colorMode:T}=(0,r.I)(),S=(0,i.ZP)("/preview/"),E=(0,o.useRef)(),[N,I]=(0,o.useState)(p.cP),[M,Z]=(0,o.useState)(!1),[_,F]=(0,o.useState)((()=>(n.find((e=>e.defaultActive))??n[0]).name)),[P,R]=(0,o.useState)((()=>C(n,_))),[B,z]=(0,o.useState)((()=>w(P,N))),[A,H]=(0,o.useState)(!1),O=(0,o.useCallback)((()=>{const e=()=>{var n;null!=(n=E.current)&&null!=(n=n.contentWindow)&&n._preview_only_render?Z(!0):setTimeout(e,100)};e()}),[]),[Y,q]=(0,o.useState)((()=>Object.fromEntries(n.map((e=>{var n;return[e.name,(null==(n=e.codeSlides)?void 0:n[0])??e.code]}))))),L=(0,u.Z)(Y);(0,o.useEffect)((()=>{var e;if(!M)return;const n=null==(e=E.current)||null==(e=e.contentWindow)?void 0:e._preview_only_render;if(!n)return;const{Bricks:t,Context:o,Functions:s,Templates:i,I18N:r,Style:a,templatesAreArrayOfYaml:c}=function(e){const n={},t=[],o=[];for(const[s,i]of Object.entries(e))if(s.startsWith("Functions/")){const[e,n]=s.split("/")[1].split(".");t.push({name:e,source:i,typescript:"ts"===n})}else s.startsWith("tpl-")?o.push({name:s,yaml:i}):"style.css"===s?n.Style=i:n[s]=i;t.length>0&&(n.Functions=t);o.length>0&&(n.Templates=o,n.templatesAreArrayOfYaml=!0);return n}({...l,...L});n("yaml",{yaml:t},{theme:T,context:o,functions:s,templates:i,i18n:r,styleText:a,templatesAreArrayOfYaml:c})}),[M,T,L,l]),(0,o.useEffect)((()=>{if(!M)return;const e=new ResizeObserver((e=>{for(const t of e){var n;I(Math.max(p.cP,(null==(n=t.borderBoxSize)||null==(n=n[0])?void 0:n.blockSize)??t.contentRect.height))}}));return e.observe(E.current.contentDocument.body,{box:"border-box"}),()=>{e.disconnect()}}),[M]);const U=(0,o.useCallback)(((e,t)=>{q((n=>({...n,[t]:e})));k(n,t).minLines||R(e.split("\n").length)}),[n]);(0,o.useEffect)((()=>{R(C(n,_))}),[n,_]),(0,o.useEffect)((()=>{z(w(P,N))}),[P,N]);const V=(0,o.useCallback)((()=>{const e=!A;var n;((0,s.flushSync)((()=>{H(e)})),e)||(null==(n=v.current)||n.resetScrollTop(),g.current.scrollIntoViewIfNeeded?g.current.scrollIntoViewIfNeeded():g.current.scrollIntoView({block:"nearest",inline:"nearest"}))}),[A]),W=B>p.qH,X={height:W&&!A?p.qH:Math.max(B,p.lV)};return(0,a.jsxs)("div",{className:(0,h.Z)(y.example,m,{[y.expandable]:W,[y.condensed]:d}),ref:g,children:[(0,a.jsx)("div",{className:y.tabs,children:n.map((e=>(0,a.jsx)("button",{className:(0,h.Z)(y.tab,{[y.active]:e.name===_}),onClick:()=>{F(e.name)},children:"Bricks"===e.name?"Storyboard":e.name},e.name)))}),(0,a.jsx)("div",{className:y.editorColumn,style:X,children:x?(0,a.jsx)(j.Z,{}):(0,a.jsx)(c,{fallback:(0,a.jsx)(j.Z,{}),children:()=>{const e=t(5295).Z;return(0,a.jsx)(e,{files:n,currentFile:_,theme:"dark"===T?"vs-dark":"vs",className:y.editorContainer,typingEffectReady:M,onChange:U,ref:v})}})}),(0,a.jsxs)("div",{className:(0,h.Z)(y.previewColumn,A?y.expanded:y.collapsed),style:{maxHeight:W&&!A?p.qH:"unset",padding:p.$P},children:[x||(0,a.jsx)("div",{className:(0,h.Z)(y.preview,{[y.ready]:M}),children:(0,a.jsx)("iframe",{ref:E,src:S,loading:"lazy",onLoad:O,style:{height:N}})}),(x||!M)&&(0,a.jsx)(j.Z,{})]}),W&&(0,a.jsxs)("button",{className:y.buttonToggleShowMore,role:"button",onClick:V,children:[A?(0,a.jsx)(f,{}):(0,a.jsx)(b,{}),(0,a.jsx)("span",{children:A?"Show less":"Show more"})]})]})}function w(e,n){const t=n+2*p.$P,o=e*p.CZ+p.sE+p.z5;return Math.max(t,o)}function k(e,n){return e.find((e=>e.name===n))}function C(e,n){const t=k(e,n);return t.minLines??t.code.split("\n").length}},2748:(e,n,t)=>{t.d(n,{$P:()=>i,CZ:()=>o,cP:()=>s,lV:()=>c,qH:()=>a,sE:()=>r,z5:()=>l});const o=22,s=32,i=20,r=12,l=12,a=16*o+l+r,c=6*o+l+r},6616:(e,n,t)=>{t.d(n,{Z:()=>s});var o=t(7294);function s(e,n){void 0===n&&(n=200);const[t,s]=(0,o.useState)(e);return(0,o.useEffect)((()=>{const t=setTimeout((()=>{s(e)}),n);return()=>{clearTimeout(t)}}),[e,n]),t}},8056:(e,n,t)=>{t.d(n,{Z:()=>o});const o="#preview-root {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1em;\n  justify-content: center;\n}\n\nsl-card {\n  display: block;\n  min-width: 200px;\n  max-width: 300px;\n  flex: 1;\n}\n\nsl-card::part(body) {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75em;\n}\n"},1151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>r});var o=t(7294);const s={},i=o.createContext(s);function r(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);