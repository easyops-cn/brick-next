"use strict";(globalThis.webpackChunknext_docs=globalThis.webpackChunknext_docs||[]).push([[249],{4282:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>a});var s=t(5893),i=t(1151);const r={title:"Templates"},o=void 0,c={id:"concepts/custom-templates",title:"Templates",description:"\u80cc\u666f",source:"@site/docs/concepts/custom-templates.md",sourceDirName:"concepts",slug:"/concepts/custom-templates",permalink:"/docs/concepts/custom-templates",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Templates"},sidebar:"docsSidebar",previous:{title:"Conditional Rendering",permalink:"/docs/concepts/conditional-rendering"},next:{title:"Template States",permalink:"/docs/concepts/template-state"}},l={},a=[{value:"\u80cc\u666f",id:"background",level:2},{value:"\u539f\u7406",id:"fundamental",level:2},{value:"\u793a\u4f8b",id:"examples",level:2},{value:"\u6a21\u677f\u72b6\u6001\u6570\u636e",id:"\u6a21\u677f\u72b6\u6001\u6570\u636e",level:2},{value:"\u53d8\u66f4\u5386\u53f2",id:"history",level:2}];function d(e){const n={a:"a",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"background",children:"\u80cc\u666f"}),"\n",(0,s.jsxs)(n.p,{children:["\u5728\u8f83\u65e9\u7684 Legacy Templates \u6784\u4ef6\u6a21\u677f\u4e2d\uff08\u4ee5\u4e0b\u79f0 ",(0,s.jsx)(n.em,{children:"Legacy Templates"}),"\uff09\uff0c\u6211\u4eec\u5b9a\u4e49\u4e86\u4e00\u79cd\u4f7f\u7528 JavaScript Functions \u5b9a\u4e49\u7684\u6784\u4ef6\u6a21\u677f\uff0c\u8fd9\u4e00\u5c42\u62bd\u8c61\u5728\u4e00\u5b9a\u7a0b\u5ea6\u4e0a\u5c01\u88c5\u4e86\u590d\u6742\u7684\u6784\u4ef6\u914d\u7f6e\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"Legacy Templates \u4f7f\u7528\u51fd\u6570\u5b9a\u4e49\uff0c\u56e0\u6b64\u62e5\u6709\u4e86\u9ad8\u5ea6\u7075\u6d3b\u7684\u52a8\u6001\u5c55\u5f00\u80fd\u529b\u3002\u4f46\u51fd\u6570\u5b9a\u4e49\u4f7f\u5f97\u6846\u67b6\u65e0\u6cd5\u5c06\u5b83\u4eec\u50cf\u666e\u901a\u6784\u4ef6\u4e00\u6837\u5730\u5229\u7528\u8d77\u6765\uff0c\u56e0\u6b64\u53d7\u5230\u4e86\u8bf8\u591a\u9650\u5236\uff0c\u4f8b\u5982\u6846\u67b6\u65e0\u6cd5\u8fdb\u884c\u4e00\u4e9b\u57fa\u4e8e\u9759\u6001\u5206\u6790\u7684\u4f18\u5316\u3001\u65e0\u6cd5\u5bf9\u6a21\u677f\u7ed1\u5b9a\u4e8b\u4ef6\u5904\u7406\u3001\u65e0\u6cd5\u8ba9\u7528\u6237\u7f16\u6392\u4e00\u4e2a\u81ea\u5b9a\u4e49\u6a21\u677f\u7b49\u7b49\u3002"}),"\n",(0,s.jsxs)(n.p,{children:["\u56e0\u6b64\u6709\u5fc5\u8981\u8bbe\u8ba1\u4e00\u79cd\u81ea\u5b9a\u4e49\u6a21\u677f\uff08\u4ee5\u4e0b\u79f0 ",(0,s.jsx)(n.em,{children:"Custom Templates"}),"\uff09\uff0c\u5b83\u4f7f\u7528\u9759\u6001\u7ed3\u6784\u58f0\u660e\uff08JSON or YAML\uff09\uff0c\u5e76\u4e14\u62e5\u6709\u666e\u901a\u6784\u4ef6\u7684\u6240\u6709\u80fd\u529b\uff0c\u4ee5\u4fbf\u5728 Brick Next \u4e2d\u7f16\u6392\u8005\u53ef\u4ee5\u50cf\u666e\u901a\u6784\u4ef6\u4e00\u6837\u53bb\u4f7f\u7528\u5b83\u4eec\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"fundamental",children:"\u539f\u7406"}),"\n",(0,s.jsx)(n.p,{children:"Custom Templates \u7684\u5b9a\u4e49\u548c Storyboard \u4e2d\u7684\u6784\u4ef6\u914d\u7f6e\u57fa\u672c\u4fdd\u6301\u4e00\u81f4\uff0c\u53ef\u4ee5\u5728\u5b83\u5185\u90e8\u914d\u7f6e\u591a\u4e2a\u6784\u4ef6\uff0c\u5e76\u4e14\u53ef\u4ee5\u4e3a\u8fd9\u4e9b\u6784\u4ef6\u914d\u7f6e\u63d2\u69fd\u3002\u5728\u7cfb\u7edf\u6e32\u67d3\u8be5\u6a21\u677f\u65f6\uff0c\u5c06\u6309\u6a21\u677f\u5b9a\u4e49\u5c55\u5f00\uff0c\u5e76\u7ef4\u62a4\u4e00\u4efd\u6a21\u677f\u5916\u90e8\u4e0e\u6a21\u677f\u5185\u90e8\u7684\u5c5e\u6027\u548c\u4e8b\u4ef6\u7b49\u7684\u7684\u6620\u5c04\u5173\u7cfb\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u6a21\u677f\u7684\u5c55\u5f00\u8fc7\u7a0b\u5982\u4e0b\u56fe\u6240\u793a\uff1a"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Custom Templates Expanding Explained",src:t(283).Z+"",width:"966",height:"404"})}),"\n",(0,s.jsxs)(n.p,{children:["\u4e0a\u56fe\u4e2d ",(0,s.jsx)("span",{style:{display:"inline-block",border:"2px solid darkorchid",fontSize:"0.9em",padding:"0 0.2em"},children:"\u7d2b\u8272\u8fb9\u6846"})," \u8868\u793a\u7684\u662f Custom Template\uff0c\u6a21\u677f\u5728\u8fd0\u884c\u65f6\u6309\u6a21\u677f\u7684\u5b9a\u4e49\u88ab\u5c55\u5f00\uff0c",(0,s.jsx)("span",{style:{display:"inline-block",border:"2px solid mediumseagreen",fontSize:"0.9em",padding:"0 0.2em"},children:"\u7eff\u8272\u8fb9\u6846"})," \u7684\u6784\u4ef6\u662f\u6a21\u677f\u5185\u90e8\u5b9a\u4e49\u597d\u7684\u6784\u4ef6\uff0c\u5c55\u5f00\u524d\u7684\u6a21\u677f\u7684 ",(0,s.jsx)("code",{children:"tools"})," \u63d2\u69fd\u4e0b\u7684 ",(0,s.jsx)("span",{style:{display:"inline-block",border:"2px solid orange",fontSize:"0.9em",padding:"0 0.2em"},children:"\u6a59\u8272\u8fb9\u6846"})," \u7684\u6784\u4ef6\u6309\u6a21\u677f\u5b9a\u4e49\u88ab\u79fb\u690d\u5230\u4e86 ",(0,s.jsx)(n.code,{children:"basic-bricks.micro-view"})," \u7684 ",(0,s.jsx)(n.code,{children:"toolbar"})," \u63d2\u69fd\u4e2d\u3002\u5e76\u4e14\u6a21\u677f\u6784\u4ef6\u7684\u5c5e\u6027\u548c\u4e8b\u4ef6\u7b49\u4e5f\u4f1a\u6309\u6a21\u677f\u5b9a\u4e49\u6620\u5c04\u5230\u76f8\u5173\u5185\u90e8\u6784\u4ef6\u4e2d\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"\u793a\u4f8b"}),"\n",(0,s.jsx)(n.p,{children:"\u4f8b\u5982\u4e00\u4e2a\u7b80\u5355\u7684\u6a21\u677f\u5b9a\u4e49\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'# A custom template definition.\nname: "some-package.my-custom-template"\nbricks:\n  - brick: "basic-bricks.micro-view"\n    properties:\n      pageTitle: "My Awesome Page"\n    slots:\n      content:\n        type: "bricks"\n        bricks:\n          - brick: "my.awesome-brick"\n          - brick: "my.another-brick"\n            events:\n              something.happen:\n                action: "console.log"\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u5728\u5b9a\u4e49\u597d Custom Templates \u540e\uff0c\u5b83\u4eec\u53ef\u4ee5\u50cf\u666e\u901a\u6784\u4ef6\u4e00\u6837\u4f7f\u7528\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'# A storyboard partial.\nbrick: "some-package.my-custom-template"\n# All lifeCycles and other configs.\nlifeCycle: ...\n'})}),"\n",(0,s.jsx)(n.p,{children:"Custom Templates \u53ef\u4ee5\u4ee3\u7406\u5185\u90e8\u6784\u4ef6\u7684\u5c5e\u6027\u3001\u4e8b\u4ef6\u3001\u63d2\u69fd\u548c\u65b9\u6cd5\uff0c\u4ee5\u6b64\u5b9e\u73b0\u5c06 Storyboard \u4e0a\u4e3a\u8be5\u6a21\u677f\u914d\u7f6e\u7684\u5c5e\u6027\u548c\u4e8b\u4ef6\u7b49\u6620\u5c04\u5230\u6a21\u677f\u5185\u90e8\u7684\u6307\u5b9a\u6784\u4ef6\u4e0a\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u4f8b\u5982\u4ee5\u4e0b\u5305\u542b proxy \u8bbe\u7f6e\u7684\u6a21\u677f\u5b9a\u4e49\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'# A custom template definition with proxy.\nname: "some-package.my-custom-template"\nproxy:\n  properties:\n    pageName:\n      ref: "micro-vew"\n      # You can omit `refProperty` if it\u2019s the same as the referring name.\n      # The same applies to `refEvent/refMethod/refSlot`.\n      refProperty: "pageTitle"\n  events:\n    awesome.happen:\n      ref: "awesome-brick"\n      refEvent: "something.happen"\n  # Now we recommend to define `slot` element (since brick_next 3.19.13), instead of `proxy.slots`\n  slots:\n    tools:\n      ref: "micro-view"\n      refSlot: "toolbar"\n      # Optional `refPosition` (number):\n      # Insert the slotted bricks to the specified position of inner brick slot.\n      # If `refPosition >= 0`, counts from the start.\n      # If `refPosition < 0`, counts from the end.\n      # The `refPosition` is relative to the slotted bricks specified in template definition.\n  methods:\n    tellAwesomeStories:\n      ref: "awesome-brick"\n      refMethod: "tellStories"\nbricks:\n  - brick: "basic-bricks.micro-view"\n    ref: "micro-view" # Notice here! The ref id should be unique inside a custom template.\n    slots:\n      content:\n        type: "bricks"\n        bricks:\n          - brick: "my.awesome-brick"\n            ref: "awesome-brick" # And another ref.\n            events:\n              inner.happen:\n                # Use `targetRef` to point to another brick inside a custom template.\n                targetRef: "micro-view"\n                method: "updateView"\n          # Define a slot\n          - brick: slot\n            properties:\n              name: extra\n            # If no bricks is passed in for the slot, will use children of the slot instead\n            # (only children of the default empty-named slots).\n            children:\n              - brick: p\n                properties:\n                  textContent: I\'m a default placeholder\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u5728 Storyboard \u4e2d\u4f7f\u7528\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'# A storyboard partial.\nbrick: "some-package.my-custom-template"\nproperties:\n  pageName: "My Awesome Page"\nevents:\n  awesome.happen:\n    action: "console.log"\nslots:\n  tools:\n    type: "bricks"\n    bricks: [...]\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u5728\u8be5 Storyboard \u4e2d\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u6a21\u677f\u7684 ",(0,s.jsx)(n.code,{children:"pageName"})," \u5c5e\u6027\u5c06\u88ab\u6620\u5c04\u5230\u6a21\u677f\u5185\u90e8\u7684 ",(0,s.jsx)(n.code,{children:"micro-view"})," \u7684 ",(0,s.jsx)(n.code,{children:"pageTitle"})," \u5c5e\u6027\u4e0a\uff1b"]}),"\n",(0,s.jsxs)(n.li,{children:["\u6a21\u677f\u5185\u90e8\u7684 ",(0,s.jsx)(n.code,{children:"awesome-brick"})," \u89e6\u53d1\u7684 ",(0,s.jsx)(n.code,{children:"something.happen"})," \u5c06\u89e6\u53d1\u6a21\u677f\u7684 ",(0,s.jsx)(n.code,{children:"awesome.happen"})," \u4e8b\u4ef6\uff1b"]}),"\n",(0,s.jsxs)(n.li,{children:["\u6a21\u677f\u7684 ",(0,s.jsx)(n.code,{children:"tools"})," \u63d2\u69fd\u5c06\u88ab\u88c5\u8f7d\u5230\u6a21\u677f\u5185\u90e8\u7684 ",(0,s.jsx)(n.code,{children:"micro-view"})," \u7684 ",(0,s.jsx)(n.code,{children:"toolbar"})," \u63d2\u69fd\u4e2d\uff1b"]}),"\n",(0,s.jsxs)(n.li,{children:["\u8c03\u7528\u6a21\u677f\u7684 ",(0,s.jsx)(n.code,{children:"tellAwesomeStories"})," \u5c06\u5b9e\u9645\u8c03\u7528\u6a21\u677f\u5185\u90e8\u7684 ",(0,s.jsx)(n.code,{children:"awesome-brick"})," \u7684 ",(0,s.jsx)(n.code,{children:"tellStories"})," \u65b9\u6cd5\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u6a21\u677f\u72b6\u6001\u6570\u636e",children:"\u6a21\u677f\u72b6\u6001\u6570\u636e"}),"\n",(0,s.jsxs)(n.p,{children:["\u8be6\u89c1 ",(0,s.jsx)(n.a,{href:"/docs/concepts/template-state",children:"Template State \u6a21\u677f\u72b6\u6001\u6570\u636e"}),"\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"history",children:"\u53d8\u66f4\u5386\u53f2"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\u7ec4\u4ef6"}),(0,s.jsx)(n.th,{children:"\u7248\u672c"}),(0,s.jsx)(n.th,{children:"\u53d8\u66f4"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"brick_next"}),(0,s.jsx)(n.td,{children:"3.19.13"}),(0,s.jsx)(n.td,{children:"\u652f\u6301\u5728\u6a21\u677f\u5185\u90e8\u5b9a\u4e49 slot \u5143\u7d20"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"-"}),(0,s.jsx)(n.td,{children:"3.0.0"}),(0,s.jsxs)(n.td,{children:["\u79fb\u9664\u5e9f\u5f03\u7528\u6cd5\uff1a ",(0,s.jsx)(n.code,{children:"proxy.properties.{refTransform}"})," ",(0,s.jsx)(n.code,{children:"extraOneWayRefs"})," ",(0,s.jsx)(n.code,{children:"mergeProperty"})," ",(0,s.jsx)(n.code,{children:"<% TPL.* %>"})]})]})]})]})]})}function p(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},283:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/custom-templates-c15921b5d449769b966bec4e7957a5ac.png"},1151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>o});var s=t(7294);const i={},r=s.createContext(i);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);