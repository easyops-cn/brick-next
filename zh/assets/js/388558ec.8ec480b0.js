"use strict";(self.webpackChunknext_docs=self.webpackChunknext_docs||[]).push([[1626],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>s});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),d=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=d(t.components);return a.createElement(p.Provider,{value:e},t.children)},k="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),k=d(n),c=r,s=k["".concat(p,".").concat(c)]||k[c]||m[c]||l;return n?a.createElement(s,i(i({ref:e},u),{},{components:n})):a.createElement(s,i({ref:e},u))}));function s(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[k]="string"==typeof t?t:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},56668:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const l={title:"\u6d4f\u89c8\u5668\u4f1a\u8bdd\u5386\u53f2"},i=void 0,o={unversionedId:"concepts/history",id:"concepts/history",title:"\u6d4f\u89c8\u5668\u4f1a\u8bdd\u5386\u53f2",description:"\u5728 Brick Next \u4e2d\uff0cHistory \u6982\u5ff5\u4e0d\u540c\u4e8e[\u6d4f\u89c8\u5668\u539f\u751f\u7684 History]\uff0c\u800c\u662f\u6307\u7684\u662f\u4e00\u4e2a[\u7b2c\u4e09\u65b9\u5e93 history]\uff0c\u5b83\u548c\u539f\u751f History \u7684\u80fd\u529b\u7c7b\u4f3c\uff0c\u4f46\u63d0\u4f9b\u4e86\u66f4\u4e30\u5bcc\u7684\u80fd\u529b\uff0c\u53e6\u5916\u6211\u4eec\u53c8\u5728\u5b83\u7684\u57fa\u7840\u4e0a\u6269\u5c55\u4e86\u66f4\u591a\u80fd\u529b\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/concepts/history.md",sourceDirName:"concepts",slug:"/concepts/history",permalink:"/zh/docs/concepts/history",draft:!1,tags:[],version:"current",frontMatter:{title:"\u6d4f\u89c8\u5668\u4f1a\u8bdd\u5386\u53f2"},sidebar:"docsSidebar",previous:{title:"\u6784\u4ef6\u5d4c\u5957",permalink:"/zh/docs/concepts/nesting-bricks"},next:{title:"\u56fd\u9645\u5316",permalink:"/zh/docs/concepts/i18n"}},p={},d=[{value:"\u4f7f\u7528",id:"usage",level:2},{value:"\u5c5e\u6027",id:"properties",level:2},{value:"location",id:"location",level:3},{value:"\u57fa\u672c\u65b9\u6cd5",id:"methods",level:2},{value:"push",id:"push",level:3},{value:"replace",id:"replace",level:3},{value:"goBack",id:"goback",level:3},{value:"goForward",id:"goforward",level:3},{value:"\u6269\u5c55\u65b9\u6cd5",id:"extended-methods",level:2},{value:"pushQuery",id:"pushquery",level:3},{value:"replaceQuery",id:"replacequery",level:3},{value:"pushAnchor",id:"pushanchor",level:3},{value:"reload",id:"reload",level:3},{value:"block",id:"block",level:3},{value:"unblock",id:"unblock",level:3},{value:"\u9ad8\u7ea7",id:"advanced",level:2},{value:"\u53d8\u66f4\u5386\u53f2",id:"history",level:2}],u={toc:d},k="wrapper";function m(t){let{components:e,...n}=t;return(0,r.kt)(k,(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u5728 Brick Next \u4e2d\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"History")," \u6982\u5ff5\u4e0d\u540c\u4e8e",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/History"},"\u6d4f\u89c8\u5668\u539f\u751f\u7684 History"),"\uff0c\u800c\u662f\u6307\u7684\u662f\u4e00\u4e2a",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ReactTraining/history"},"\u7b2c\u4e09\u65b9\u5e93 history"),"\uff0c\u5b83\u548c\u539f\u751f History \u7684\u80fd\u529b\u7c7b\u4f3c\uff0c\u4f46\u63d0\u4f9b\u4e86\u66f4\u4e30\u5bcc\u7684\u80fd\u529b\uff0c\u53e6\u5916\u6211\u4eec\u53c8\u5728\u5b83\u7684\u57fa\u7840\u4e0a\u6269\u5c55\u4e86\u66f4\u591a\u80fd\u529b\u3002"),(0,r.kt)("h2",{id:"usage"},"\u4f7f\u7528"),(0,r.kt)("p",null,"\u5728\u6784\u4ef6\u6e90\u7801\u4e2d\u4f7f\u7528\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { getHistory } from "@next-core/runtime";\n\nconst history = getHistory();\nhistory.push("/your/location");\n')),(0,r.kt)("p",null,"\u5728 Storyboard \u4e2d\u914d\u7f6e\u4e8b\u4ef6\u5904\u7406\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'events:\n  something.happen:\n    action: "history.push"\n    args:\n      - "/your/location"\n')),(0,r.kt)("h2",{id:"properties"},"\u5c5e\u6027"),(0,r.kt)("h3",{id:"location"},"location"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"export interface Location<S = LocationState> {\n  pathname: string;\n  search: string;\n  state: S;\n  hash: string;\n  key?: string;\n}\n")),(0,r.kt)("h2",{id:"methods"},"\u57fa\u672c\u65b9\u6cd5"),(0,r.kt)("h3",{id:"push"},"push"),(0,r.kt)("p",null,"\u8df3\u8f6c\u5230\u6307\u5b9a\u5730\u5740\uff0c\u5f80\u6d4f\u89c8\u5668\u4f1a\u8bdd\u5386\u53f2\u6808\u4e2d\u63a8\u5165\u4e00\u6761\u65b0\u8bb0\u5f55\u3002\u666e\u901a\u7684\u9875\u9762\u8df3\u8f6c\u5e94\u4f7f\u7528\u6b64\u65b9\u6cd5\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u5217\u8868"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5fc5\u586b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"path")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"string ","|"," LocationDescriptor")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65b0\u9875\u9762\u5730\u5740")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"state")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{ notify?: boolean }")),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"-")))),(0,r.kt)("h3",{id:"replace"},"replace"),(0,r.kt)("p",null,"\u8df3\u8f6c\u5230\u6307\u5b9a\u5730\u5740\uff0c\u66ff\u6362\u6d4f\u89c8\u5668\u4f1a\u8bdd\u5386\u53f2\u6808\u4e2d\u6700\u65b0\u7684\u4e00\u6761\u8bb0\u5f55\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u5217\u8868"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5fc5\u586b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"path")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"string ","|"," LocationDescriptor")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65b0\u9875\u9762\u5730\u5740")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"state")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{ notify?: boolean }")),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"-")))),(0,r.kt)("h3",{id:"goback"},"goBack"),(0,r.kt)("p",null,"\u56de\u9000\u5230\u6d4f\u89c8\u5668\u4f1a\u8bdd\u5386\u53f2\u6808\u4e2d\u7684\u4e0a\u4e00\u6761\u8bb0\u5f55\u3002"),(0,r.kt)("h3",{id:"goforward"},"goForward"),(0,r.kt)("p",null,"\u524d\u8fdb\u5230\u6d4f\u89c8\u5668\u4f1a\u8bdd\u5386\u53f2\u6808\u4e2d\u7684\u4e0b\u4e00\u6761\u8bb0\u5f55\u3002"),(0,r.kt)("h2",{id:"extended-methods"},"\u6269\u5c55\u65b9\u6cd5"),(0,r.kt)("h3",{id:"pushquery"},"pushQuery"),(0,r.kt)("p",null,"\u66f4\u65b0\u6307\u5b9a query \u53c2\u6570\uff0c\u4f1a\u4fdd\u7559\u5f53\u524d\u5176\u5b83 query \u53c2\u6570\uff0c\u5f80\u6d4f\u89c8\u5668\u4f1a\u8bdd\u5386\u53f2\u6808\u4e2d\u63a8\u5165\u4e00\u6761\u65b0\u8bb0\u5f55\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u5217\u8868"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5fc5\u586b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"query")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"object")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u9700\u8981\u66f4\u65b0\u7684 query \u53c2\u6570\u952e\u503c\u5bf9\uff0c\u5982\u679c\u503c\u4e3a ",(0,r.kt)("inlineCode",{parentName:"td"},"null")," ",(0,r.kt)("inlineCode",{parentName:"td"},"undefined")," ",(0,r.kt)("inlineCode",{parentName:"td"},'""')," \uff0c\u8be5\u5b57\u6bb5\u5c06\u88ab\u5220\u9664")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"options")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{ extraQuery?: object; clear?: boolean; notify?: boolean }")),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"td"},"extraQuery")," \u6307\u5b9a\u989d\u5916\u7684 query \u5bf9\u8c61\uff1b",(0,r.kt)("inlineCode",{parentName:"td"},"clear")," \u4e3a ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," \u65f6\u5c06\u6e05\u7a7a\u5f53\u524d URL \u5df2\u6709\u7684 query \u53c2\u6570")))),(0,r.kt)("h3",{id:"replacequery"},"replaceQuery"),(0,r.kt)("p",null,"\u7c7b\u4f3c ",(0,r.kt)("inlineCode",{parentName:"p"},"pushQuery"),"\uff0c\u4f46\u4f1a\u66ff\u6362\u6d4f\u89c8\u5668\u4f1a\u8bdd\u5386\u53f2\u6808\u4e2d\u6700\u65b0\u7684\u4e00\u6761\u8bb0\u5f55\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u5217\u8868"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5fc5\u586b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"query")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"object")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u540c ",(0,r.kt)("inlineCode",{parentName:"td"},"pushQuery"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"options")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{ extraQuery?: object; clear?: boolean; notify?: boolean }")),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"\u540c ",(0,r.kt)("inlineCode",{parentName:"td"},"pushQuery"))))),(0,r.kt)("h3",{id:"pushanchor"},"pushAnchor"),(0,r.kt)("p",null,"\u7c7b\u4f3c ",(0,r.kt)("inlineCode",{parentName:"p"},"history.pushQuery"),"\uff0c\u5c06\u8df3\u8f6c\u5230\u6307\u5b9a\u7684 anchor\uff08 URL hash\uff09\u5730\u5740\u3002\u6b64\u65b9\u6cd5\u9ed8\u8ba4\u4e0d\u4f1a\u89e6\u53d1\u9875\u9762\u91cd\u65b0\u6e32\u67d3\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u5217\u8868"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5fc5\u586b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"anchor")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"URL hash \u53bb\u6389\u524d\u7f00 ",(0,r.kt)("inlineCode",{parentName:"td"},"#"))))),(0,r.kt)("h3",{id:"reload"},"reload"),(0,r.kt)("p",null,"\u5c06\u91cd\u8f7d\u5f53\u524d\u4f1a\u8bdd\uff0c\u5373\u89e6\u53d1\u9875\u9762\u91cd\u65b0\u6e32\u67d3\u3002\u4e0e ",(0,r.kt)("inlineCode",{parentName:"p"},"location.reload()")," \u4e0d\u540c\uff0c\u5b83\u4e0d\u4f1a\u89e6\u53d1\u6d4f\u89c8\u5668\u9875\u9762\u7684\u91cd\u8f7d\u3002"),(0,r.kt)("h3",{id:"block"},"block"),(0,r.kt)("p",null,"\u8bbe\u7f6e\u540e\uff0c\u5c06\u5728\u7528\u6237\u79bb\u5f00\u9875\u9762\u524d\uff08\u4f8b\u5982\u8df3\u8f6c\u5230\u5176\u5b83\u9875\u9762\u3001\u5237\u65b0\u3001\u5173\u95ed\u6d4f\u89c8\u5668\u6807\u7b7e\u9875\u7b49\uff09\u5f39\u51fa\u63d0\u793a\u4fe1\u606f\uff0c\u4ee5\u4fbf\u7528\u6237\u786e\u8ba4\u662f\u5426\u79bb\u5f00\u3002\u66f4\u591a\u4fe1\u606f\u8bf7\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"/zh/docs/concepts/brick-life-cycle#onbeforepageleave"},(0,r.kt)("inlineCode",{parentName:"a"},"lifeCycle.onBeforePageLeave")),"\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u5217\u8868"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5fc5\u586b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"message")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u963b\u6b62\u9875\u9762\u79bb\u5f00\u65f6\uff0c\u5f39\u51fa\u7684\u786e\u8ba4\u4fe1\u606f")))),(0,r.kt)("h3",{id:"unblock"},"unblock"),(0,r.kt)("p",null,"\u53d6\u6d88\u4e4b\u524d\u8bbe\u7f6e\u7684\u963b\u6b62\u9875\u9762\u79bb\u5f00\u4fe1\u606f\u7684\u8bbe\u7f6e\u3002"),(0,r.kt)("h2",{id:"advanced"},"\u9ad8\u7ea7"),(0,r.kt)("p",null,"\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"push")," \u7b49\u652f\u6301\u53ef\u9009\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"state")," \u53c2\u6570\u7684\u5730\u65b9\u4f20\u9012 ",(0,r.kt)("inlineCode",{parentName:"p"},"{ notify: false }")," \u53ef\u4ee5\u4e0d\u89e6\u53d1\u9875\u9762\u91cd\u65b0\u6e32\u67d3\u3002"),(0,r.kt)("h2",{id:"history"},"\u53d8\u66f4\u5386\u53f2"))}m.isMDXComponent=!0}}]);