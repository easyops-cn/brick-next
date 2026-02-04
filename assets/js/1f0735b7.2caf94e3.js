"use strict";(globalThis.webpackChunknext_docs=globalThis.webpackChunknext_docs||[]).push([["9674"],{95862:function(e,t,n){n.r(t),n.d(t,{default:()=>u,frontMatter:()=>a,metadata:()=>i,assets:()=>c,toc:()=>d,contentTitle:()=>l});var i=JSON.parse('{"id":"learn/quick-start","title":"Quick Start","description":"Welcome to the Brick Next documentation! This page will give you an introduction to the 80% of Brick Next concepts that you will use on a daily basis.","source":"@site/docs/learn/quick-start.mdx","sourceDirName":"learn","slug":"/learn/quick-start","permalink":"/docs/learn/quick-start","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Quick Start"},"sidebar":"docsSidebar","next":{"title":"Tutorial","permalink":"/docs/learn/tutorial"}}'),r=n("85893"),s=n("50065"),o=n("75133");let a={title:"Quick Start"},l=void 0,c={},d=[{value:"Nesting bricks",id:"nesting-bricks",level:2},{value:"Responding to events",id:"responding-to-events",level:2},{value:"Displaying data",id:"displaying-data",level:2},{value:"Conditional rendering",id:"conditional-rendering",level:2},{value:"Rendering lists",id:"rendering-lists",level:2},{value:"Making templates",id:"making-templates",level:2},{value:"Fetching data",id:"fetching-data",level:2},{value:"Next steps",id:"next-steps",level:2}];function h(e){let t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Welcome to the Brick Next documentation! This page will give you an introduction to the 80% of Brick Next concepts that you will use on a daily basis."}),"\n",(0,r.jsx)(t.p,{children:"For simplicity, in most examples on this page, we will use native HTML elements to build user interfaces with Brick Next."}),"\n",(0,r.jsxs)(t.p,{children:["However, the full potential of Brick Next will be realized only when combined with ",(0,r.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_components",children:"custom elements"}),". We have provided a first-party ",(0,r.jsx)(t.a,{href:"https://github.com/easyops-cn/next-bricks",children:"brick library"}),", containing lots of custom elements, with decent design, out of the box. There are also many free off-the-shelf third-party web components libraries, that can be easily integrated into Brick Next. Additionally, you can also create your own bricks."]}),"\n",(0,r.jsx)(t.h2,{id:"nesting-bricks",children:"Nesting bricks"}),"\n",(0,r.jsxs)(t.p,{children:["Storyboards are defined as declarative structural data, made out of ",(0,r.jsx)(t.em,{children:"bricks"}),"."]}),"\n",(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsxs)(t.p,{children:["In most examples through our documentation, we will use ",(0,r.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/YAML",children:"YAML"})," to define storyboards, since it has a minimal syntax, and is more human-readable at the same time, compared to JSON or others. But keep in mind that they are just structural data."]})}),"\n",(0,r.jsx)(o.Z,{files:[{name:"Bricks",code:`brick: div
children:
- brick: h1
  properties:
    textContent: Welcome to my app
- brick: button
  properties:
    textContent: I'm a button`}]}),"\n",(0,r.jsx)(t.p,{children:"In the above example, we defined a page that is pretty the same as the following HTML:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-html",children:"<div>\n  <h1>Welcome to my app</h1>\n  <button>I'm a button</button>\n</div>\n"})}),"\n",(0,r.jsx)(t.h2,{id:"responding-to-events",children:"Responding to events"}),"\n",(0,r.jsxs)(t.p,{children:["You can respond to events by declaring ",(0,r.jsx)(t.a,{href:"/docs/concepts/events",children:(0,r.jsx)(t.em,{children:"event handlers"})}),"."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"brick: button\nproperties:\n  textContent: Click me\n// highlight-start\nevents:\n  click:\n    action: console.log\n    args:\n    - You clicked me\n// highlight-end\n"})}),"\n",(0,r.jsx)(t.h2,{id:"displaying-data",children:"Displaying data"}),"\n",(0,r.jsxs)(t.p,{children:["Embed JavaScript ",(0,r.jsx)(t.a,{href:"/docs/concepts/expressions",children:(0,r.jsx)(t.em,{children:"expressions"})})," to display dynamic data."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"brick: div\nproperties:\n// highlight-next-line\n  textContent: <% CTX.user.name %>\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Notice that the expressions have their own syntax highlighting through our documentation, but they are just ",(0,r.jsx)(t.em,{children:"strings"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["Usually you should define some ",(0,r.jsx)(t.a,{href:"/docs/concepts/context",children:(0,r.jsx)(t.em,{children:"contexts"})})," to manage page states, and use expressions to bind the states to brick properties. You can also updating these states in response to events, thus the bound properties will be updated automatically once the states changed."]}),"\n",(0,r.jsx)(o.Z,{files:[{name:"Bricks",code:`brick: button
properties:
  textContent: <%= \`Clicked \${CTX.count} times\` %>
events:
  click:
    action: context.replace
    args:
    - count
    - <% CTX.count + 1 %>`},{name:"Context",code:`- name: count
  value: 0`}]}),"\n",(0,r.jsxs)(t.p,{children:["Notice that we use ",(0,r.jsx)(t.code,{children:"<%= %>"})," instead of ",(0,r.jsx)(t.code,{children:"<% %>"})," to enable binding mode."]}),"\n",(0,r.jsx)(t.h2,{id:"conditional-rendering",children:"Conditional rendering"}),"\n",(0,r.jsxs)(t.p,{children:["There are two ways to ",(0,r.jsx)(t.a,{href:"/docs/concepts/conditional-rendering",children:"conditionally render bricks"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["The first approach is to define a ",(0,r.jsx)(t.code,{children:"if"})," field along with your brick."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"- if: <% CTX.isAdmin %>\n  brick: admin-panel\n- if: <% !CTX.isAdmin %>\n  brick: user-panel\n"})}),"\n",(0,r.jsxs)(t.p,{children:["The second one is to use a ",(0,r.jsx)(t.a,{href:"/docs/concepts/control-nodes",children:(0,r.jsx)(t.em,{children:"control node"})})," of ",(0,r.jsx)(t.code,{children:":if"}),". It is more convenient if your condition is complex or you have multiple bricks to render."]}),"\n",(0,r.jsxs)(t.p,{children:["Specify the condition ",(0,r.jsx)(t.code,{children:"dataSource"})," which is usually an expression, and define the bricks to render in ",(0,r.jsx)(t.code,{children:"children"}),". If the condition is met, those children with an empty slot will be rendered, otherwise those children with slot of ",(0,r.jsx)(t.code,{children:"else"})," will be rendered."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"brick: ':if'\ndataSource: <% FN.check('my', 'complex', 'expression') %>\nchildren:\n- brick: admin-panel-a\n- brick: admin-panel-b\n- brick: user-panel-x\n  slot: else\n- brick: user-panel-y\n  slot: else\n"})}),"\n",(0,r.jsx)(t.h2,{id:"rendering-lists",children:"Rendering lists"}),"\n",(0,r.jsxs)(t.p,{children:["You can use a ",(0,r.jsx)(t.a,{href:"/docs/concepts/control-nodes",children:(0,r.jsx)(t.em,{children:"control node"})})," of ",(0,r.jsx)(t.code,{children:":forEach"})," to render lists of bricks."]}),"\n",(0,r.jsxs)(t.p,{children:["Like the ",(0,r.jsx)(t.code,{children:":if"})," node, you should also specify a ",(0,r.jsx)(t.code,{children:"dataSource"})," as well as ",(0,r.jsx)(t.code,{children:"children"}),". For each item in the list (",(0,r.jsx)(t.code,{children:"dataSource"}),"), the children will be rendered once. You can use ",(0,r.jsx)(t.code,{children:"ITEM"})," in expressions inside the children, to access the current item of each loop."]}),"\n",(0,r.jsx)(o.Z,{files:[{name:"Bricks",code:`brick: ul
children:
- brick: ':forEach'
  dataSource: <% CTX.products %>
  children:
  - brick: li
    properties:
      textContent: <% ITEM.title %>
      style:
        color: |
          <% ITEM.isFruit ? 'magenta' : 'green' %>`},{name:"Context",code:`- name: products
  value:
  - title: Cabbage
    isFruit: false
    id: 1
  - title: Garlic
    isFruit: false
    id: 2
  - title: Apple
    isFruit: true
    id: 3`}]}),"\n",(0,r.jsx)(t.h2,{id:"making-templates",children:"Making templates"}),"\n",(0,r.jsxs)(t.p,{children:["You can make ",(0,r.jsx)(t.a,{href:"/docs/concepts/custom-templates",children:(0,r.jsx)(t.em,{children:"templates"})})," to encapsulate parts of your UI, and reuse them just like other bricks."]}),"\n",(0,r.jsx)(t.p,{children:"A template can have its own scoped states which is very similar with contexts. Template states can be internal states, or exposed as properties of the template."}),"\n",(0,r.jsx)(o.Z,{files:[{name:"Bricks",code:`- brick: tpl-description
  properties:
    label: Name
    content: Harry Potter
- brick: tpl-description
  properties:
    label: Gender
    content: Male
- brick: tpl-description
  properties:
    label: Age
    content: 17`},{name:"tpl-description",defaultActive:!0,code:`state:
- name: label
  expose: true
- name: content
  expose: true
bricks:
- brick: strong
  properties:
    textContent: <%= STATE.label %>
- brick: p
  properties:
    textContent: <%= STATE.content %>`}]}),"\n",(0,r.jsx)(t.h2,{id:"fetching-data",children:"Fetching data"}),"\n",(0,r.jsx)(t.p,{children:"You can combine page states with remote HTTP APIs, and then bind these states with any brick properties."}),"\n",(0,r.jsx)(o.Z,{files:[{name:"Bricks",code:`- brick: h1
  properties:
    textContent: <% \`Weather in \${CTX.city}\` %>
- brick: div
  properties:
    style:
      display: grid
      gridTemplateColumns: 24px 1fr
      gap: 10px
  children:
  - brick: img
    properties:
      src: <% CTX.weather.current.condition.icon %>
      style:
        width: 24px
  - brick: span
    properties:
      textContent: <% CTX.weather.current.condition.text %>
  - brick: img
    properties:
      src: ../img/thermometer-half.svg
      style:
        width: 24px
  - brick: span
    properties:
      textContent: |
        <% \`\${Math.round(CTX.weather.current.temp_c)}\xb0C\` %>`},{name:"Context",defaultActive:!0,code:`- name: city
  value: Shenzhen
- name: weather
  resolve:
    useProvider: basic.http-request
    args:
    - |
      <%
        \`//api.weatherapi.com/v1/current.json?q=\${
          CTX.city
        }&key=\${MISC.weather_api_key}\`
      %>`}]}),"\n",(0,r.jsxs)(t.p,{children:["You can also create your own ",(0,r.jsx)(t.a,{href:"/docs/concepts/provider-bricks",children:(0,r.jsx)(t.em,{children:"provider bricks"})}),", which involves pro code, if you have complex logic to fetch and process data."]}),"\n",(0,r.jsx)(t.h2,{id:"next-steps",children:"Next steps"}),"\n",(0,r.jsx)(t.p,{children:"By now, you know the basics of how to write Brick Next storyboards!"}),"\n",(0,r.jsxs)(t.p,{children:["Check out the ",(0,r.jsx)(t.a,{href:"/docs/learn/tutorial",children:"Tutorial"})," to put them into practice and build your first micro-app with Brick Next."]})]})}function u(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},66535:function(e,t,n){n.d(t,{Z:()=>r});var i=n("85893");n("67294");function r(){return(0,i.jsx)("div",{className:"ringContainer_Jl9i",children:(0,i.jsxs)("div",{className:"ring_UfU1",children:[(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{})]})})}},72218:function(e,t,n){n.d(t,{Z:function(){return l}});var i=n(85893),r=n(67294),s=n(66535);let o=r.lazy(()=>Promise.all([n.e("6212"),n.e("700"),n.e("3855")]).then(n.bind(n,77386))),a=r.lazy(()=>Promise.all([n.e("6212"),n.e("4309"),n.e("3295"),n.e("9384")]).then(n.bind(n,5359))),l=(0,r.forwardRef)(function(e,t){let{files:n,currentFile:l,theme:c,className:d,typingEffectReady:h,onChange:u}=e,p=!!navigator.maxTouchPoints;return(0,r.useEffect)(()=>{if(p&&u){let e=n.find(e=>e.name===l);e.codeSlides&&u(e.code,l)}},[l,n,p,u]),(0,i.jsx)(r.Suspense,{fallback:(0,i.jsx)(s.Z,{}),children:p?(0,i.jsx)(o,{files:n,currentFile:l,className:d}):(0,i.jsx)(a,{files:n,currentFile:l,theme:c,className:d,typingEffectReady:h,onChange:u,ref:t})})})},75133:function(e,t,n){n.d(t,{Z:()=>y});var i,r,s=n("85893"),o=n("67294"),a=n("73935"),l=n("23113"),c=n("97844"),d=n("37131");function h(e){let{children:t,fallback:n}=e;return(0,d.Z)()?(0,s.jsx)(s.Fragment,{children:null==t?void 0:t()}):n??null}var u=n("67026"),p=n("21656"),m=n("48113");function x(){return(x=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)({}).hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(null,arguments)}let f=e=>{let{title:t,titleId:n,...r}=e;return o.createElement("svg",x({xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"currentColor",className:"bi bi-chevron-up",viewBox:"0 0 16 16","aria-labelledby":n},r),t?o.createElement("title",{id:n},t):null,i||(i=o.createElement("path",{fillRule:"evenodd",d:"M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z"})))};function b(){return(b=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)({}).hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(null,arguments)}let v=e=>{let{title:t,titleId:n,...i}=e;return o.createElement("svg",b({xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"currentColor",className:"bi bi-chevron-down",viewBox:"0 0 16 16","aria-labelledby":n},i),t?o.createElement("title",{id:n},t):null,r||(r=o.createElement("path",{fillRule:"evenodd",d:"M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"})))};var g=n("66535");let j={example:"example_UmKM",editorColumn:"editorColumn_AL_t",previewColumn:"previewColumn_FsuT",editorContainer:"editorContainer_sUW3",preview:"preview_bwr6",ready:"ready_dhJq",expanded:"expanded_o_pT",collapsed:"collapsed_aDj8",tabs:"tabs_yDjk",tab:"tab_uskj",active:"active_KoUc",buttonToggleShowMore:"buttonToggleShowMore_A68N",expandable:"expandable_arS4",condensed:"condensed_ytqo"};function y(e){let{files:t,hiddenFiles:i,condensed:r,wait:d,className:x}=e,b=(0,o.useRef)(),y=(0,o.useRef)(),{colorMode:T}=(0,c.I)(),N=(0,l.ZP)("/preview/"),S=(0,o.useRef)(),[_,E]=(0,o.useState)(m.cP),[M,Z]=(0,o.useState)(!1),[A,B]=(0,o.useState)(()=>(t.find(e=>e.defaultActive)??t[0]).name),[I,P]=(0,o.useState)(()=>C(t,A)),[F,R]=(0,o.useState)(()=>k(I,_)),[O,W]=(0,o.useState)(!1),q=(0,o.useCallback)(()=>{let e=()=>{var t,n;(null===(n=S.current)||void 0===n?void 0:null===(t=n.contentWindow)||void 0===t?void 0:t._preview_only_render)?Z(!0):setTimeout(e,100)};e()},[]),[z,Y]=(0,o.useState)(()=>Object.fromEntries(t.map(e=>{var t;return[e.name,(null===(t=e.codeSlides)||void 0===t?void 0:t[0])??e.code]}))),L=(0,p.Z)(z);(0,o.useEffect)(()=>{var e,t;if(!M)return;let n=null===(t=S.current)||void 0===t?void 0:null===(e=t.contentWindow)||void 0===e?void 0:e._preview_only_render;if(!n)return;let{Bricks:r,Context:s,Functions:o,Templates:a,I18N:l,Style:c,templatesAreArrayOfYaml:d}=function(e){let t={},n=[],i=[];for(let[r,s]of Object.entries(e))if(r.startsWith("Functions/")){let[e,t]=r.split("/")[1].split(".");n.push({name:e,source:s,typescript:"ts"===t})}else r.startsWith("tpl-")?i.push({name:r,yaml:s}):"style.css"===r?t.Style=s:t[r]=s;return n.length>0&&(t.Functions=n),i.length>0&&(t.Templates=i,t.templatesAreArrayOfYaml=!0),t}({...i,...L});n("yaml",{yaml:r},{theme:T,context:s,functions:o,templates:a,i18n:l,styleText:c,templatesAreArrayOfYaml:d})},[M,T,L,i]),(0,o.useEffect)(()=>{if(!M)return;let e=new ResizeObserver(e=>{for(let i of e){var t,n;E(Math.max(m.cP,(null===(n=i.borderBoxSize)||void 0===n?void 0:null===(t=n[0])||void 0===t?void 0:t.blockSize)??i.contentRect.height))}});return e.observe(S.current.contentDocument.body,{box:"border-box"}),()=>{e.disconnect()}},[M]);let X=(0,o.useCallback)((e,n)=>{Y(t=>({...t,[n]:e})),w(t,n).minLines||P(e.split("\n").length)},[t]);(0,o.useEffect)(()=>{P(C(t,A))},[t,A]),(0,o.useEffect)(()=>{R(k(I,_))},[I,_]);let H=(0,o.useCallback)(()=>{let e=!O;if((0,a.flushSync)(()=>{W(e)}),!e){var t;null===(t=y.current)||void 0===t||t.resetScrollTop(),b.current.scrollIntoViewIfNeeded?b.current.scrollIntoViewIfNeeded():b.current.scrollIntoView({block:"nearest",inline:"nearest"})}},[O]),U=F>m.qH,$={height:U&&!O?m.qH:Math.max(F,m.lV)};return(0,s.jsxs)("div",{className:(0,u.Z)(j.example,x,{[j.expandable]:U,[j.condensed]:r}),ref:b,children:[(0,s.jsx)("div",{className:j.tabs,children:t.map(e=>(0,s.jsx)("button",{className:(0,u.Z)(j.tab,{[j.active]:e.name===A}),onClick:()=>{B(e.name)},children:"Bricks"===e.name?"Storyboard":e.name},e.name))}),(0,s.jsx)("div",{className:j.editorColumn,style:$,children:d?(0,s.jsx)(g.Z,{}):(0,s.jsx)(h,{fallback:(0,s.jsx)(g.Z,{}),children:()=>{let e=n(72218).Z;return(0,s.jsx)(e,{files:t,currentFile:A,theme:"dark"===T?"vs-dark":"vs",className:j.editorContainer,typingEffectReady:M,onChange:X,ref:y})}})}),(0,s.jsxs)("div",{className:(0,u.Z)(j.previewColumn,O?j.expanded:j.collapsed),style:{maxHeight:U&&!O?m.qH:"unset",padding:m.$P},children:[d||(0,s.jsx)("div",{className:(0,u.Z)(j.preview,{[j.ready]:M}),children:(0,s.jsx)("iframe",{ref:S,src:N,loading:"lazy",onLoad:q,style:{height:_}})}),(d||!M)&&(0,s.jsx)(g.Z,{})]}),U&&(0,s.jsxs)("button",{className:j.buttonToggleShowMore,role:"button",onClick:H,children:[O?(0,s.jsx)(f,{}):(0,s.jsx)(v,{}),(0,s.jsx)("span",{children:O?"Show less":"Show more"})]})]})}function k(e,t){return Math.max(t+2*m.$P,e*m.CZ+m.sE+m.z5)}function w(e,t){return e.find(e=>e.name===t)}function C(e,t){let n=w(e,t);return n.minLines??n.code.split("\n").length}},48113:function(e,t,n){n.d(t,{$P:function(){return s},CZ:function(){return i},cP:function(){return r},lV:function(){return c},qH:function(){return l},sE:function(){return o},z5:function(){return a}});let i=22,r=32,s=20,o=12,a=12,l=376,c=156},21656:function(e,t,n){n.d(t,{Z:function(){return r}});var i=n(67294);function r(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:200,[n,r]=(0,i.useState)(e);return(0,i.useEffect)(()=>{let n=setTimeout(()=>{r(e)},t);return()=>{clearTimeout(n)}},[e,t]),n}},50065:function(e,t,n){n.d(t,{Z:function(){return a},a:function(){return o}});var i=n(67294);let r={},s=i.createContext(r);function o(e){let t=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);