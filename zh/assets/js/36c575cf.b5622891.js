"use strict";(globalThis.webpackChunknext_docs=globalThis.webpackChunknext_docs||[]).push([[1887],{9366:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>h,frontMatter:()=>o,metadata:()=>t,toc:()=>i});var r=s(5893),c=s(1151);const o={title:"\u9875\u9762\u4e3b\u9898\u548c\u6a21\u5f0f"},d=void 0,t={id:"concepts/theme-and-mode",title:"\u9875\u9762\u4e3b\u9898\u548c\u6a21\u5f0f",description:"Brick Next \u4ece 2.7.1 \u5f00\u59cb\u652f\u6301\u9875\u9762\u4e3b\u9898\u548c\u6a21\u5f0f\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/concepts/theme-and-mode.md",sourceDirName:"concepts",slug:"/concepts/theme-and-mode",permalink:"/zh/docs/concepts/theme-and-mode",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"\u9875\u9762\u4e3b\u9898\u548c\u6a21\u5f0f"}},a={},i=[{value:"\u5fae\u5e94\u7528\u7f16\u6392\uff1a\u5207\u6362\u4e3b\u9898\u548c\u6a21\u5f0f",id:"toggle-theme-and-mode",level:2},{value:"\u6784\u4ef6\u5f00\u53d1\uff1a\u9002\u914d\u6df1\u8272\u4e3b\u9898\u548c\u5927\u5c4f\u6a21\u5f0f",id:"develop-with-theme-and-mode",level:2},{value:"\u9002\u914d\u516c\u5171 UI \u89c4\u8303\u6837\u5f0f",id:"adapting-ui-specs",level:2},{value:"\u4f7f\u7528 CSS Variables",id:"using-css-variables",level:3}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",strong:"strong",...(0,c.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:"Brick Next \u4ece 2.7.1 \u5f00\u59cb\u652f\u6301\u9875\u9762\u4e3b\u9898\u548c\u6a21\u5f0f\u3002"})}),"\n",(0,r.jsxs)(n.p,{children:["Brick Next \u652f\u6301\u4e24\u79cd\u4e3b\u9898\uff1a",(0,r.jsx)(n.code,{children:"light"})," \u548c ",(0,r.jsx)(n.code,{children:"dark"}),"\uff08\u9ed8\u8ba4\u4e3a ",(0,r.jsx)(n.code,{children:"light"}),"\uff09\uff0c\u4ee5\u53ca\u4e24\u79cd\u6a21\u5f0f\uff1a",(0,r.jsx)(n.code,{children:"default"})," \u548c ",(0,r.jsx)(n.code,{children:"dashboard"}),"\uff08\u9ed8\u8ba4\u4e3a ",(0,r.jsx)(n.code,{children:"default"}),"\uff09\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u5728 ",(0,r.jsx)(n.code,{children:"dark"})," \u6df1\u8272\u4e3b\u9898\u4e0b\uff0c\u9875\u9762\u6846\u67b6\u53ca\u6784\u4ef6\u5c06\u4ee5\u6df1\u8272\u80cc\u666f\u6837\u5f0f\u663e\u793a\u3002\u800c\u5728 ",(0,r.jsx)(n.code,{children:"dashboard"})," \u5927\u5c4f\u6a21\u5f0f\u4e0b\uff0c\u7cfb\u7edf\u7684\u9875\u9762\u9876\u680f\u53ca\u4fa7\u680f\u5c06\u6d88\u5931\uff0c\u540c\u65f6\u914d\u5408 ",(0,r.jsx)(n.code,{children:"basic-bricks.micro-view"})," \u5f00\u542f ",(0,r.jsx)(n.code,{children:"dashboardMode: true"})," \u53ef\u4ee5\u5b9e\u73b0\u5927\u5c4f\u6548\u679c\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u76ee\u524d\u4e3b\u8981\u5728\u201c\u5927\u5c4f\u201d\u573a\u666f\u4e0b\u4f7f\u7528\uff0c\u6ce8\u610f\u8be5\u573a\u666f\u9700\u8981\u540c\u65f6\u542f\u7528\u6df1\u8272\u4e3b\u9898\u548c\u5927\u5c4f\u6a21\u5f0f\u3002"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:s(8401).Z+"",width:"1079",height:"797"})}),"\n",(0,r.jsx)(n.h2,{id:"toggle-theme-and-mode",children:"\u5fae\u5e94\u7528\u7f16\u6392\uff1a\u5207\u6362\u4e3b\u9898\u548c\u6a21\u5f0f"}),"\n",(0,r.jsx)(n.p,{children:"\u4f8b\u5982\u5728 Storyboard \u7f16\u6392\u4e2d\uff0c\u5e0c\u671b\u67d0\u4e2a\u6309\u94ae\u70b9\u51fb\u540e\u5207\u6362\u5230\u201c\u6df1\u8272+\u5927\u5c4f\u201d\u573a\u666f\uff0c\u53ef\u4ee5\u5982\u4e0b\u914d\u7f6e\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",metastring:"{4-5}",children:'brick: "your-button"\nevents:\n  click:\n    - action: "theme.setDarkTheme"\n    - action: "mode.setDashboardMode"\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u6bcf\u5f53\u9875\u9762\u521d\u59cb\u8fdb\u5165\u3001\u6216\u53d1\u751f\u8df3\u8f6c\u5e76\u91cd\u65b0\u6e32\u67d3\u524d\uff0c",(0,r.jsx)(n.strong,{children:"\u7cfb\u7edf\u5c06\u81ea\u52a8\u5207\u56de\u6d45\u8272\u4e3b\u9898\u548c\u9ed8\u8ba4\u6a21\u5f0f"}),"\uff0c\u4f46\u7cfb\u7edf\u5f00\u653e\u4e86\u4e00\u4e2a\u7a97\u53e3\u671f ",(0,r.jsx)(n.code,{children:"onBeforePageLoad"}),"\uff0c\u4ee5\u652f\u6301\u9875\u9762\u53ef\u4ee5\u8bbe\u7f6e\u521d\u59cb\u5316\u4e3a\u6df1\u8272\u4e3b\u9898\u53ca\u5927\u5c4f\u6a21\u5f0f\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u4f8b\u5982\u5047\u8bbe\u6211\u4eec\u5e0c\u671b URL \u4e2d\u643a\u5e26\u53c2\u6570 ",(0,r.jsx)(n.code,{children:"mode=dashboard"})," \u65f6\u81ea\u52a8\u4f7f\u7528\u6df1\u8272\u4e3b\u9898\u548c\u5927\u5c4f\u6a21\u5f0f\uff0c\u53ef\u4ee5\u5982\u4e0b\u914d\u7f6e\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'brick: "basic-bricks.micro-view"\nlifeCycle:\n  onBeforePageLoad:\n    - if: "<% QUERY.mode === \'dashboard\' %>"\n      action: "theme.setDarkTheme"\n    - if: "<% QUERY.mode === \'dashboard\' %>"\n      action: "mode.setDashboardMode"\nproperties:\n  dashboardMode: "<% QUERY.mode === \'dashboard\' %>"\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u6ce8\u610f ",(0,r.jsx)(n.code,{children:"basic-bricks.micro-view"})," \u6784\u4ef6\u5728\u5927\u5c4f\u6a21\u5f0f\u4e0b\u4f1a\u591a\u4e00\u4e2a\u9000\u51fa\u6309\u94ae\uff0c\u70b9\u51fb\u540e\u5c06\u53d1\u51fa ",(0,r.jsx)(n.code,{children:"mode.dashboard.exit"})," \u4e8b\u4ef6\uff0c\u9700\u8981\u7528\u6237\u81ea\u884c\u914d\u7f6e\u9000\u51fa\u5927\u5c4f\u9700\u8981\u6267\u884c\u7684\u52a8\u4f5c\u3002\u4f8b\u5982\u901a\u5e38\u5e94\u6dfb\u52a0\u5982\u4e0b\u4e8b\u4ef6\u914d\u7f6e\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'brick: "basic-bricks.micro-view"\nevents:\n  mode.dashboard.exit:\n    - target: "_self"\n      properties:\n        dashboardMode: false\n    - action: "theme.setLightTheme"\n    - action: "mode.setDefaultMode"\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u4e0d\u5185\u7f6e\u9000\u51fa\u52a8\u4f5c\u7684\u539f\u56e0\u662f\uff0c\u7528\u6237\u53ef\u4ee5\u901a\u8fc7\u5176\u4ed6\u65b9\u5f0f\u9000\u51fa\u5927\u5c4f\uff0c\u4f8b\u5982\u901a\u8fc7 ",(0,r.jsx)(n.code,{children:"history.pushQuery"})," \u8df3\u8f6c\u91cd\u7f6e ",(0,r.jsx)(n.code,{children:"mode=dashboard"})," \u53c2\u6570\u6765\u5b9e\u73b0\u9000\u51fa\u5927\u5c4f\u6a21\u5f0f\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'brick: "basic-bricks.micro-view"\nevents:\n  mode.dashboard.exit:\n    - action: "history.pushQuery"\n      args:\n        - mode: null\n'})}),"\n",(0,r.jsx)(n.admonition,{title:"Important",type:"info",children:(0,r.jsx)(n.p,{children:"\u4e0d\u8981\u5728\u7f16\u6392\u4e2d\u4e3a\u6784\u4ef6\u914d\u7f6e\u56fa\u5b9a\u7684\u989c\u8272\u503c\uff0c\u800c\u5e94\u4f7f\u7528\u7cfb\u7edf\u9884\u5b9a\u4e49\u7684 CSS custom properties\uff0c\u5177\u4f53\u53ef\u4ee5\u53c2\u8003\u672c\u6587\u4e0b\u4e00\u8282\u5185\u5bb9\u3002"})}),"\n",(0,r.jsx)(n.h2,{id:"develop-with-theme-and-mode",children:"\u6784\u4ef6\u5f00\u53d1\uff1a\u9002\u914d\u6df1\u8272\u4e3b\u9898\u548c\u5927\u5c4f\u6a21\u5f0f"}),"\n",(0,r.jsxs)(n.p,{children:["\u7cfb\u7edf\u901a\u8fc7\u5b9a\u4e49\u4e00\u7cfb\u5217 ",(0,r.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties",children:"CSS custom properties"}),"\uff08\u53c8\u79f0 CSS variables\uff09\u6765\u5b9e\u73b0\u4e3b\u9898\u6837\u5f0f\u7684\u5b9e\u65f6\u65e0\u7f1d\u5207\u6362\uff0c\u65e0\u8bba\u5728\u7f16\u6392\u6216\u6784\u4ef6\u5f00\u53d1\u65f6\u5e94\u9996\u5148\u5c1d\u8bd5\u4f7f\u7528\u8fd9\u4e9b\u5c5e\u6027\u3002\u5177\u4f53\u5c5e\u6027\u5217\u8868\u53ef\u4ee5\u53c2\u8003\u8fd9\u91cc\u7684",(0,r.jsx)(n.a,{href:"https://git.easyops.local/anyclouds/next-core/blob/master/packages/brick-container/src/styles/variables.css",children:"\u6e90\u7801"}),"\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u7cfb\u7edf\u5f53\u524d\u7684\u4e3b\u9898\u548c\u6a21\u5f0f\u53cd\u9988\u5728 ",(0,r.jsx)(n.code,{children:"<html>"})," \u5143\u7d20\u7684 ",(0,r.jsx)(n.code,{children:"data-theme"})," \u53ca ",(0,r.jsx)(n.code,{children:"data-mode"})," \u5c5e\u6027\u4e0a\uff0c\u56e0\u6b64\u4ec5\u4f7f\u7528 css \u5373\u53ef\u5b8c\u6210\u5927\u90e8\u5206\u6df1\u8272\u4e3b\u9898\u548c\u5927\u5c4f\u6a21\u5f0f\u7684\u9002\u914d\u3002\u4f8b\u5982\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-css",metastring:"{5-7}",children:'.your-class {\n  color: black;\n}\n\nhtml[data-theme="dark"] .your-class {\n  color: white;\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u5f53\u4f7f\u7528\u7cfb\u7edf\u9884\u5b9a\u4e49\u7684 CSS custom properties \u65f6\uff0c\u5219\u65e0\u9700\u989d\u5916\u914d\u7f6e ",(0,r.jsx)(n.code,{children:'html[data-theme="dark"]'})," \u6837\u5f0f\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-css",children:".your-class {\n  color: var(--text-color-default);\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u6709\u65f6\u5019\u6784\u4ef6\u9700\u8981\u5728 JavaScript \u4e2d\u5224\u65ad\u5f53\u524d\u4e3b\u9898\u6216\u6a21\u5f0f\uff0c\u4f8b\u5982\u56fe\u8868\u7c7b\u6784\u4ef6\u9700\u8981\u6839\u636e\u5f53\u524d\u4e3b\u9898\u6765\u751f\u6210\u4e0d\u540c\u7684\u989c\u8272\u5217\u8868\uff0c\u5bf9\u6b64\u7cfb\u7edf\u63d0\u4f9b\u4e86 React Hooks ",(0,r.jsx)(n.code,{children:"useCurrentTheme"})," \u548c ",(0,r.jsx)(n.code,{children:"useCurrentMode"})," \u6765\u83b7\u53d6\u5f53\u524d\u7684\u4e3b\u9898\u548c\u6a21\u5f0f\uff0c\u4f8b\u5982\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",metastring:"{4}",children:'import { useCurrentTheme } from "@next-core/brick-kit";\n\nfunction YourComponent() {\n  const theme = useCurrentTheme();\n\n  const colors = theme === "dark" ? ["red", "green"] : ["blue", "orange"];\n\n  return <YourChart colors={colors} />;\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"adapting-ui-specs",children:"\u9002\u914d\u516c\u5171 UI \u89c4\u8303\u6837\u5f0f"}),"\n",(0,r.jsx)(n.h3,{id:"using-css-variables",children:"\u4f7f\u7528 CSS Variables"}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["\u6ce8\u610f\uff1a\u867d\u7136\u5728 v3 \u4e2d\u6211\u4eec\u4e0d\u518d\u4f7f\u7528 AntDesign\uff0c\u4f46\u4ecd\u4fdd\u7559\u4e86\u5df2\u6709\u7684 ",(0,r.jsx)(n.code,{children:"--antd-"})," \u4f5c\u4e3a\u524d\u7f00\u7684 CSS variables\u3002"]})}),"\n",(0,r.jsxs)(n.p,{children:["Brick Next \u7684 CSS variables \u7edf\u4e00\u7ba1\u7406\u5728 next-core \u4ed3\u5e93\u7684 ",(0,r.jsx)(n.a,{href:"https://github.com/easyops-cn/next-core/blob/master/packages/theme/src/variables.css",children:"packages/theme/src/variables.css"})," \u4e2d\u3002"]})]})}function h(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},8401:(e,n,s)=>{s.d(n,{Z:()=>r});const r=s.p+"assets/images/screen-shot-dashboard-mode-29c64eb81240177c430e69aebb932135.png"},1151:(e,n,s)=>{s.d(n,{Z:()=>t,a:()=>d});var r=s(7294);const c={},o=r.createContext(c);function d(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:d(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);