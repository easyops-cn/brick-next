"use strict";(self.webpackChunknext_docs=self.webpackChunknext_docs||[]).push([[5246],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=d(n),m=a,k=c["".concat(p,".").concat(m)]||c[m]||u[m]||l;return n?r.createElement(k,o(o({ref:t},s),{},{components:n})):r.createElement(k,o({ref:t},s))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:a,o[1]=i;for(var d=2;d<l;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},49637:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var r=n(87462),a=(n(67294),n(3905));const l={title:"Provider \u6784\u4ef6"},o=void 0,i={unversionedId:"concepts/provider-bricks",id:"concepts/provider-bricks",title:"Provider \u6784\u4ef6",description:"Provider \u6784\u4ef6\u662f\u4e00\u79cd\u7279\u6b8a\u7c7b\u578b\u7684\u6784\u4ef6\uff0c\u5b83\u4e0d\u63d0\u4f9b\u4efb\u4f55\u754c\u9762\u5c55\u793a\u7684\u80fd\u529b\uff0c\u4ec5\u63d0\u4f9b\u6570\u636e\u83b7\u53d6\u548c\u5904\u7406\u7684\u80fd\u529b\u3002\u914d\u5408 [Context] \u6216 [State] \u53ef\u4ee5\u5b9e\u73b0\u9875\u9762\u4f9d\u8d56\u6570\u636e\u7684\u5b9a\u4e49\uff0c\u914d\u5408 [Events \u4e8b\u4ef6]\u53ef\u4ee5\u5b9e\u73b0\u52a8\u6001\u7684\u6570\u636e\u5904\u7406\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/concepts/provider-bricks.md",sourceDirName:"concepts",slug:"/concepts/provider-bricks",permalink:"/zh/docs/concepts/provider-bricks",draft:!1,tags:[],version:"current",frontMatter:{title:"Provider \u6784\u4ef6"},sidebar:"docsSidebar",previous:{title:"Context",permalink:"/zh/docs/concepts/context"},next:{title:"\u6761\u4ef6\u6e32\u67d3",permalink:"/zh/docs/concepts/conditional-rendering"}},p={},d=[{value:"\u521b\u5efa Provider \u6784\u4ef6",id:"create-provider-bricks",level:2},{value:"\u4f7f\u7528\u65b9\u6cd5",id:"usage",level:2},{value:"\u5f15\u7528\u5176\u4ed6 Provider \u6784\u4ef6",id:"use-other-provider-bricks",level:2},{value:"Provider \u5f02\u6b65\u56de\u8c03",id:"provider-async-callback",level:2},{value:"Provider \u8f6e\u8be2",id:"provider-polling",level:2},{value:"\u53d8\u66f4\u5386\u53f2",id:"history",level:2}],s={toc:d},c="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Provider \u6784\u4ef6\u662f\u4e00\u79cd\u7279\u6b8a\u7c7b\u578b\u7684\u6784\u4ef6\uff0c\u5b83\u4e0d\u63d0\u4f9b\u4efb\u4f55\u754c\u9762\u5c55\u793a\u7684\u80fd\u529b\uff0c\u4ec5\u63d0\u4f9b\u6570\u636e\u83b7\u53d6\u548c\u5904\u7406\u7684\u80fd\u529b\u3002\u914d\u5408 ",(0,a.kt)("a",{parentName:"p",href:"/zh/docs/concepts/context"},"Context")," \u6216 ",(0,a.kt)("a",{parentName:"p",href:"/zh/docs/concepts/template-state"},"State")," \u53ef\u4ee5\u5b9e\u73b0\u9875\u9762\u4f9d\u8d56\u6570\u636e\u7684\u5b9a\u4e49\uff0c\u914d\u5408 ",(0,a.kt)("a",{parentName:"p",href:"/zh/docs/concepts/events"},"Events \u4e8b\u4ef6"),"\u53ef\u4ee5\u5b9e\u73b0\u52a8\u6001\u7684\u6570\u636e\u5904\u7406\u3002"),(0,a.kt)("p",null,"\u5728 Brick Next \u4e2d\uff0c\u5c06\u6570\u636e\u4e0e UI \u5206\u79bb\u975e\u5e38\u91cd\u8981\uff0c\u4e00\u65b9\u9762\u53ef\u4ee5\u63d0\u5347\u4e1a\u52a1\u6784\u4ef6\u7684\u53ef\u590d\u7528\u6027\uff0c\u540c\u65f6\u4e5f\u53ef\u4ee5\u63d0\u5347\u5e94\u7528\u7684\u53ef\u914d\u7f6e\u80fd\u529b\u3001\u53ef\u7f16\u6392\u80fd\u529b\u3002"),(0,a.kt)("h2",{id:"create-provider-bricks"},"\u521b\u5efa Provider \u6784\u4ef6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { createProviderClass } from "@next-core/utils/general";\nimport { CmdbObjectApi } from "@sdk/cmdb-sdk";\n\nasync function getPublicModels(params) {\n  const allModels = await CmdbObjectApi.list(params);\n  return allModels.filter((model) => !model.private);\n}\n\ncustomElements.define(\n  "cmdb.provider-get-public-models",\n  createProviderClass(getPublicModels)\n);\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"createProviderClass")," \u652f\u6301\u4f20\u5165\u4efb\u610f ",(0,a.kt)("em",{parentName:"p"},"Function"),"\uff0c\u8be5\u6784\u4ef6\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"resolve")," \u65b9\u6cd5\u5c06\u88ab\u6307\u5411\u4e3a\u8be5\u51fd\u6570\u3002"),(0,a.kt)("h2",{id:"usage"},"\u4f7f\u7528\u65b9\u6cd5"),(0,a.kt)("p",null,"Provider \u6784\u4ef6\u4e00\u822c\u7528\u4e8e ",(0,a.kt)("a",{parentName:"p",href:"/zh/docs/concepts/context"},"Context"),"\u3001",(0,a.kt)("a",{parentName:"p",href:"/zh/docs/concepts/template-state"},"State")," \u548c ",(0,a.kt)("a",{parentName:"p",href:"/zh/docs/concepts/events"},"Events \u4e8b\u4ef6"),"\u3002"),(0,a.kt)("h2",{id:"use-other-provider-bricks"},"\u5f15\u7528\u5176\u4ed6 Provider \u6784\u4ef6"),(0,a.kt)("p",null,"Provider \u6784\u4ef6\u672c\u8d28\u4e0a\u662f\u5c06\u4efb\u610f\u4e00\u4e2a\u51fd\u6570\u5305\u88f9\u800c\u6210\u7684\u81ea\u5b9a\u4e49\u5143\u7d20\uff0c\u5982\u679c\u6211\u4eec\u671f\u671b\u8fd9\u4e2a\u51fd\u6570\u80fd\u50cf\u4e00\u4e2a\u666e\u901a\u7684 libs \u5305\u4e2d\u7684\u51fd\u6570\u4e00\u6837\u5bf9\u5916\u5171\u4eab\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"unwrapProvider"),"\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { unwrapProvider } from "@next-core/utils/general";\n// \u5f15\u5165\u7c7b\u578b\u4ee5\u4fbf\u83b7\u5f97\u7c7b\u578b\u63d0\u793a\nimport type { getIllustration } from "@next-bricks/illustrations/data-providers/get-illustration";\n\n// \u4f7f\u7528 `unwrapProvider` \u6765\u83b7\u5f97\u4e00\u4e2a Provider \u6784\u4ef6\u88ab\u5305\u88f9\u7684\u539f\u59cb\u51fd\u6570\nconst GetIllustration = unwrapProvider<typeof getIllustration>(\n  "illustrations.get-illustration"\n);\n\n// \u8be5\u51fd\u6570\u65e2\u53ef\u4ee5\u7528\u5728\u666e\u901a\u6784\u4ef6\u4e2d\uff0c\nfunction MyOtherComponent() {\n  const url = GetIllustration({ name: "no-content" });\n  return <img src={url} />;\n}\n\n// \u4e5f\u53ef\u4ee5\u7528\u5728\u5176\u4ed6 Provider \u6784\u4ef6\u4e2d\nfunction myOtherProvider() {\n  const url = GetIllustration({ name: "no-content" });\n  return url;\n}\n')),(0,a.kt)("p",null,"\u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"wrapBrick")," \u7c7b\u4f3c\uff0c\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"unwrapProvider")," \u6211\u4eec\u83b7\u5f97\u4e86\u5728\u4e0d\u901a\u7684\u6784\u4ef6\u5305\u4e2d\u5171\u4eab Provider \u51fd\u6570\u7684\u80fd\u529b\uff0c\u548c\u4e4b\u524d\u7684 Libs \u5305\u76f8\u6bd4\uff0c\u8fd9\u4e2a\u65b9\u5f0f\u53ef\u4ee5\u907f\u514d\u8de8\u4ed3\u5e93\u4ee3\u7801\u7ef4\u62a4\u7684\u95ee\u9898\uff0c\u540c\u65f6\u89e3\u51b3\u4e86 libs \u5305\u5728\u591a\u4e2a\u6784\u4ef6\u5305\u4e2d\u5236\u54c1\u4ee3\u7801\u91cd\u590d\u7684\u95ee\u9898\u3002"),(0,a.kt)("p",null,"\u5728 v3 \u4e2d\u6211\u4eec\u5c06\u6846\u67b6\u89e3\u8026\u3001\u505a\u8584\uff0c\u56e0\u6b64\u6211\u4eec\u5229\u7528\u4e86\u4e0a\u8ff0\u80fd\u529b\u5c06\u4e00\u4e9b\u4e4b\u524d\u8026\u5408\u5728\u6846\u67b6\u4e2d\u7684\u6a21\u5757\u8fc1\u79fb\u5230\u4e86\u6784\u4ef6\u4e2d\uff0c\u4f8b\u5982\u56fe\u6807\u5e93\uff08",(0,a.kt)("inlineCode",{parentName:"p"},"icons-NB"),"\uff09\u548c\u63d2\u753b\u5e93 ",(0,a.kt)("inlineCode",{parentName:"p"},"illustrations-NB"),"\u3002"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Provider \u51fd\u6570\u65e2\u53ef\u4ee5\u662f\u540c\u6b65\u7684\uff0c\u4e5f\u53ef\u4ee5\u662f\u5f02\u6b65\u7684\u3002")),(0,a.kt)("h2",{id:"provider-async-callback"},"Provider \u5f02\u6b65\u56de\u8c03"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'brick: "your-brick"\nevents:\n  something.happen:\n    useProvider: "your-provider"\n    args:\n      - "<% EVENT.detail.id %>"\n    callback:\n      success:\n        target: "another-brick"\n        properties:\n          instanceData: "<% EVENT.detail %>"\n      error:\n        action: "console.error"\n      finally:\n        target: "your-button"\n        properties:\n          disabled: false\n')),(0,a.kt)("p",null,"\u5728\u4ee5\u4e0a\u914d\u7f6e\u4e2d\uff0c\u5982\u679c\u6784\u4ef6 ",(0,a.kt)("inlineCode",{parentName:"p"},"your-brick")," \u53d1\u751f\u4e86\u4e8b\u4ef6 ",(0,a.kt)("inlineCode",{parentName:"p"},"something.happen"),"\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u7cfb\u7edf\u5c06\u4f7f\u7528 Provider \u6784\u4ef6 ",(0,a.kt)("inlineCode",{parentName:"li"},"your-provider"),"\uff0c\u8c03\u7528\u5b83\u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"resolve")," \uff08\u672a\u6307\u5b9a ",(0,a.kt)("inlineCode",{parentName:"li"},"method"),"\uff09\uff0c\u4f20\u9012\u53c2\u6570 ",(0,a.kt)("inlineCode",{parentName:"li"},"<% EVENT.detail.id %>"),"\uff1b"),(0,a.kt)("li",{parentName:"ol"},"\u5f53\u8be5\u5f02\u6b65\u51fd\u6570\u5b8c\u6210\u540e\uff1a")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u6210\u529f\uff0c\u627e\u5230\u6784\u4ef6 ",(0,a.kt)("inlineCode",{parentName:"li"},"another-brick"),"\uff0c\u8bbe\u7f6e\u5b83\u7684\u5c5e\u6027 ",(0,a.kt)("inlineCode",{parentName:"li"},"instanceData")," \u4e3a\u4e0a\u8ff0\u51fd\u6570\u8fd4\u56de\u7684\u7ed3\u679c\uff1b"),(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u5931\u8d25\uff0c\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"li"},"console.error")," \u6253\u5370\u4e0a\u8ff0\u51fd\u6570\u8fd4\u56de\u7684\u5931\u8d25\u539f\u56e0\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u65e0\u8bba\u6210\u529f\u5931\u8d25\uff0c\u6700\u540e\u90fd\u5c06 ",(0,a.kt)("inlineCode",{parentName:"li"},"your-button")," \u6784\u4ef6\u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"disabled")," \u5c5e\u6027\u8bbe\u7f6e\u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},"false"))),(0,a.kt)("p",null,"\u5982\u679c\u7ed9\u4e8b\u4ef6\u5904\u7406\u5668\u914d\u7f6e\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"callback"),"\uff0c\u90a3\u4e48\u7cfb\u7edf\u5728\u4e8b\u4ef6\u89e6\u53d1\u540e\uff0c\u9664\u4e86\u6267\u884c\u6307\u5b9a ",(0,a.kt)("inlineCode",{parentName:"p"},"method")," \u5916\uff0c\u8fd8\u5c06\u6839\u636e\u8be5\u51fd\u6570\u6267\u884c\u7ed3\u679c\u8fdb\u884c\u56de\u8c03\u8c03\u7528\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"method")," \u5c06\u88ab\u89c6\u4f5c\u5f02\u6b65\u51fd\u6570\u8c03\u7528\uff0c\u5f53\u8be5\u51fd\u6570\u6210\u529f\u65f6\uff08",(0,a.kt)("em",{parentName:"p"},"resolved"),"\uff09\uff0c\u5c06\u89e6\u53d1 ",(0,a.kt)("inlineCode",{parentName:"p"},"callback.success")," \u56de\u8c03\uff0c\u53cd\u4e4b\uff08",(0,a.kt)("em",{parentName:"p"},"rejected"),"\uff09\u5c06\u89e6\u53d1 ",(0,a.kt)("inlineCode",{parentName:"p"},"callback.error"),"\uff0c\u800c\u65e0\u8bba\u6210\u529f\u6216\u5931\u8d25\uff0c\u6700\u540e\u90fd\u5c06\u89e6\u53d1 ",(0,a.kt)("inlineCode",{parentName:"p"},"callback.finally"),"\u3002\u8fd9\u4e9b\u56de\u8c03\u7684\u914d\u7f6e\u672c\u8eab\u53c8\u662f\u4e00\u4e2a\u4e8b\u4ef6\u914d\u7f6e\uff0c\u56e0\u6b64\u5b83\u53ef\u4ee5\u6267\u884c\u5185\u7f6e\u52a8\u4f5c\u3001\u6216\u8bbe\u7f6e\u5176\u4ed6\u6784\u4ef6\u7684\u5c5e\u6027\u3001\u751a\u81f3\u7ee7\u7eed\u8c03\u7528\u5176\u4ed6\u6784\u4ef6\u7684\u65b9\u6cd5\u3002\u8fd9\u4e9b\u56de\u8c03\u4f20\u9012\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"EVENT.detail")," \u5728\u6210\u529f\u65f6\u4e3a\u51fd\u6570\u6267\u884c\u7684 ",(0,a.kt)("em",{parentName:"p"},"resolved result"),"\uff0c\u5931\u8d25\u65f6\u4e3a\u51fd\u6570\u6267\u884c\u7684 ",(0,a.kt)("em",{parentName:"p"},"rejected reason"),"\u3002"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"\u57fa\u4e8e\u5f02\u6b65\u56de\u8c03\u9a71\u52a8"),"\u7684\u6a21\u5f0f\u76f8\u6bd4",(0,a.kt)("em",{parentName:"p"},"\u57fa\u4e8e\u4e8b\u4ef6\u9a71\u52a8"),"\u7684\u597d\u5904\u5728\u4e8e\u5728\u540c\u6837\u5b9e\u73b0\u4e86\u5f02\u6b65\u64cd\u4f5c\u7684\u524d\u63d0\u4e0b\uff0c\u56de\u8c03\u4f7f\u5f97\u64cd\u4f5c\u4e0e\u54cd\u5e94\u53ef\u4ee5\u4e00\u4e00\u5bf9\u5e94\u3002\u4e8b\u4ef6\u65e0\u6cd5\u5c06\u64cd\u4f5c\u4e0e\u54cd\u5e94\u4e00\u4e00\u5bf9\u5e94\uff0c\u5bf9\u4e8e\u4e8b\u4ef6\u63a5\u6536\u65b9\uff0c\u5728\u6536\u5230\u4e8b\u4ef6\u65f6\uff0c\u5f88\u96be\u5224\u65ad\u5b83\u662f\u81ea\u5df1\u89e6\u53d1\u7684\u8fd8\u662f\u5176\u5b83\u5bf9\u8c61\u89e6\u53d1\u7684\u3002"),(0,a.kt)("p",null,"\u56e0\u6b64\u4e8b\u4ef6\u901a\u5e38\u7528\u4e8e\u65c1\u8def\u5904\u7406\u7684\u573a\u666f\uff0c\u4f8b\u5982\u6253\u5370\u65e5\u5fd7\u3001\u5e7f\u64ad\u901a\u77e5\u7b49\u3002\u800c\u56de\u8c03\u5219\u7528\u4e8e\u9700\u8981\u5c06\u64cd\u4f5c\u548c\u54cd\u5e94\u5bf9\u5e94\u8d77\u6765\u7684\u573a\u666f\uff0c\u4f8b\u5982\u5b9e\u4f8b\u7684\u589e\u3001\u5220\u3001\u6539\u3001\u67e5\u3002"),(0,a.kt)("h2",{id:"provider-polling"},"Provider \u8f6e\u8be2"),(0,a.kt)("p",null,"\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"useProvider")," \u4f5c\u4e8b\u4ef6\u5904\u7406\u65f6\uff0c\u53ef\u4ee5\u6fc0\u6d3b\u8f6e\u8be2\u6a21\u5f0f\uff0c\u7cfb\u7edf\u5c06\u95f4\u9694\u6307\u5b9a\u65f6\u95f4\u8f6e\u8be2\u5bf9\u5e94\u7684\u63a5\u53e3\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'useProvider: "my-provider"\nargs:\n  - "some args"\n  # \u901a\u5e38\u5e94\u4e3a\u8f6e\u8be2\u63a5\u53e3\u6307\u5b9a\u4e00\u4e2a\u7cfb\u7edf\u989d\u5916\u7684\u53c2\u6570\uff0c\u4ee5\u907f\u514d\u5728\u6bcf\u6b21\u8f6e\u8be2\u65f6\u663e\u793a\u52a0\u8f7d\u6761\n  - interceptorParams:\n      ignoreLoadingBar: true\npoll:\n  enabled: true\n  # \u901a\u5e38\u5e94\u6307\u5b9a\u4e00\u4e2a\u6821\u9a8c\u51fd\u6570 `expectPollEnd`\uff0c\u8be5\u51fd\u6570\u63a5\u6536\u4e00\u4e2a\u53c2\u6570\uff1a\u8f6e\u8be2\u6267\u884c\u7ed3\u679c\uff0c\n  # \u5e76\u8fd4\u56de\u8f6e\u8be2\u662f\u5426\u5e94\u8be5\u7ed3\u675f\u3002\n  expectPollEnd: \'<% (result) => result.status === "done" %>\'\ncallback:\n  progress:\n    # \u6bcf\u6b21\u8f6e\u8be2\u5f97\u5230\u7ed3\u679c\u65f6\u4f1a\u89e6\u53d1 `callback.progress`\n  success:\n    # \u8f6e\u8be2\u5b8c\u6210\u65f6\u4f1a\u89e6\u53d1 `callback.success`\uff0c\n    # \u5373 `expectPollEnd(result)` \u8fd4\u56de true \u65f6\n  error:\n    # \u8f6e\u8be2\u5931\u8d25\u65f6\u4f1a\u89e6\u53d1 `callback.error`\n  finally:\n    # \u8f6e\u8be2\u5b8c\u6210\u6216\u5931\u8d25\u65f6\u89e6\u53d1 `callback.finally`\n')),(0,a.kt)("p",null,"\u9664\u4e86\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"progress")," \u6765\u83b7\u5f97\u63a5\u53e3\u7684\u5b9e\u65f6\u7ed3\u679c\u5916\uff0c\u4e5f\u53ef\u4ee5\u8ba9\u8f6e\u8be2\u63a5\u53e3\u5bf9\u5916\u8868\u73b0\u5f97\u50cf\u666e\u901a\u63a5\u53e3\u4e00\u6837\u3002\u4f8b\u5982\u5047\u8bbe\u6709\u4e00\u4e2a\u67e5\u8be2\u5de5\u5177\u6267\u884c\u7ed3\u679c\u7684\u63a5\u53e3\u9700\u8981\u8f6e\u8be2\u4ee5\u5f97\u5230\u6700\u7ec8\u6267\u884c\u7ed3\u679c\uff0c\u53ef\u4ee5\u8fd9\u6837\u914d\u7f6e\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'useProvider: "my-provider.get-tool-result"\nargs:\n  - "some args"\n  - interceptorParams:\n      ignoreLoadingBar: true\npoll:\n  enabled: true\n  expectPollEnd: |\n    <%\n      (result) =>\n        result.status === "success" || result.status === "failed"\n    %>\n  delegateLoadingBar: true\ncallback:\n  success:\n    target: "tool-result"\n    properties:\n      - output: "<% EVENT.detail.output %>"\n  error:\n    action: handleHttpError\n')),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Poll \u9009\u9879"),(0,a.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"enabled"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"false")),(0,a.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u542f\u7528\u8f6e\u8be2")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"interval"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"3000")),(0,a.kt)("td",{parentName:"tr",align:null},"\u8f6e\u8be2\u95f4\u9694\u65f6\u95f4\uff08\u6beb\u79d2\uff09")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"expectPollEnd"),(0,a.kt)("td",{parentName:"tr",align:null},"-"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8f6e\u8be2\u662f\u5426\u5e94\u7ed3\u675f\u7684\u6821\u9a8c\u51fd\u6570\uff0c\u8be5\u51fd\u6570\u63a5\u6536\u4e00\u4e2a\u53c2\u6570\uff1a\u5f53\u524d\u8f6e\u8be2\u7684\u6267\u884c\u7ed3\u679c\uff0c\u8f6e\u8be2\u7ed3\u675f\u65f6\u5c06\u89e6\u53d1 ",(0,a.kt)("inlineCode",{parentName:"td"},"callback.success")," \u4e8b\u4ef6")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"expectPollStopImmediately"),(0,a.kt)("td",{parentName:"tr",align:null},"-"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8f6e\u8be2\u662f\u5426\u5e94\u7acb\u5373\u7ed3\u675f\u7684\u6821\u9a8c\u51fd\u6570\uff0c\u8fd8\u5728\u7b49\u5f85\u6216\u8fdb\u884c\u4e2d\u7684\u8f6e\u8be2\u5c06\u5931\u6548\uff0c\u4e0d\u4f1a\u89e6\u53d1 ",(0,a.kt)("inlineCode",{parentName:"td"},"progress \\| success \\| error \\| finally")," \u7b49\u4e8b\u4ef6")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"delegateLoadingBar"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"false")),(0,a.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u4ee3\u7406\u7cfb\u7edf\u52a0\u8f7d\u6761\u7684\u663e\u793a\u4e0e\u9690\u85cf\uff0c\u5f53\u542f\u7528\u65f6\uff0c\u5728\u8f6e\u8be2\u521d\u59cb\u65f6\uff0c\u4f1a\u663e\u793a\u52a0\u8f7d\u6761\uff0c\u8f6e\u8be2\u5b8c\u6210\u6216\u5931\u8d25\u65f6\uff0c\u5c06\u9690\u85cf\u52a0\u8f7d\u6761\u3002\u5e94\u914d\u5408 ",(0,a.kt)("inlineCode",{parentName:"td"},"expectPollEnd")," \u4e0e ",(0,a.kt)("inlineCode",{parentName:"td"},"interceptorParams.ignoreLoadingBar")," \u4f7f\u7528\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"continueOnError"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"false")),(0,a.kt)("td",{parentName:"tr",align:null},"\u5f53\u67d0\u6b21\u8f6e\u8be2\u5931\u8d25\u65f6\uff0c\u662f\u5426\u4ecd\u7ee7\u7eed\u53d1\u8d77\u8f6e\u8be2\u3002")))),(0,a.kt)("h2",{id:"history"},"\u53d8\u66f4\u5386\u53f2"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u7ec4\u4ef6"),(0,a.kt)("th",{parentName:"tr",align:null},"\u7248\u672c"),(0,a.kt)("th",{parentName:"tr",align:null},"\u53d8\u66f4"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"brick_next"),(0,a.kt)("td",{parentName:"tr",align:null},"3.0.0"),(0,a.kt)("td",{parentName:"tr",align:null},"\u4e0d\u518d\u652f\u6301\u57fa\u4e8e\u4e8b\u4ef6\u7684\u4f7f\u7528\u65b9\u5f0f\uff0c\u4f8b\u5982 ",(0,a.kt)("inlineCode",{parentName:"td"},"execute")," ",(0,a.kt)("inlineCode",{parentName:"td"},"updateArgs")," \u7b49\u65b9\u6cd5\u548c ",(0,a.kt)("inlineCode",{parentName:"td"},"response.*")," \u4e8b\u4ef6")))))}u.isMDXComponent=!0}}]);