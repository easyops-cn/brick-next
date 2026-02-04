"use strict";(globalThis.webpackChunknext_docs=globalThis.webpackChunknext_docs||[]).push([["433"],{66008:function(e,t,r){r.r(t),r.d(t,{default:()=>f,frontMatter:()=>o,metadata:()=>n,assets:()=>u,toc:()=>d,contentTitle:()=>c});var n=JSON.parse('{"id":"learn/tutorial-bak","title":"Tutorial","description":"<NextExample","source":"@site/docs/learn/tutorial-bak.mdx","sourceDirName":"learn","slug":"/learn/tutorial-bak","permalink":"/zh/docs/learn/tutorial-bak","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Tutorial"}}'),i=r("85893"),l=r("50065"),a=r("75133");let s=".flex-layout {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\nsl-input::part(form-control) {\n  display: grid;\n  grid: auto / min-content 1fr;\n  gap: 0.1em 0.5em;\n  align-items: center;\n}\n\n.product-list {\n  display: flex;\n  gap: 1em;\n  flex-wrap: wrap;\n}\n",o={title:"Tutorial"},c=void 0,u={},d=[];function p(e){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.Z,{files:[{name:"Bricks",code:`brick: sl-card
children:
- brick: img
  slot: image
  properties:
    src: |
      https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=240&q=80
- brick: strong
  properties:
    textContent: Apple
- brick: div
  properties:
    textContent: Fresh apples!`}]}),"\n",(0,i.jsx)(a.Z,{files:[{name:"Bricks",code:`brick: sl-card
children:
- brick: img
  slot: image
  properties:
    src: |
      https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=240&q=80
- brick: strong
  properties:
    textContent: Apple
- brick: div
  properties:
    textContent: Fresh apples!
- brick: div
  slot: footer
  properties:
    className: flex-layout
  children:
  - brick: sl-input
    properties:
      label: Qty
      type: number
      min: 1
      max: 10
      value: 1
      size: small
  - brick: sl-button
    properties:
      size: small
      textContent: Add to cart`},{name:"style.css",lang:"css",code:s}]}),"\n",(0,i.jsx)(a.Z,{files:[{name:"Bricks",code:`brick: tpl-fruit-card
properties:
  label: Apple
  description: Fresh apples!
  imageUrl: |
    https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=240&q=80`},{name:"tpl-fruit-card",defaultActive:!0,code:`state:
- name: label
  expose: true
- name: description
  expose: true
- name: imageUrl
  expose: true
bricks:
- brick: sl-card
  children:
  - brick: img
    slot: image
    properties:
      src: <%= STATE.imageUrl %>
  - brick: strong
    properties:
      textContent: <%= STATE.label %>
  - brick: div
    properties:
      textContent: <%= STATE.description %>
  - brick: div
    slot: footer
    properties:
      className: flex-layout
    children:
    - brick: sl-input
      properties:
        label: Qty
        type: number
        min: 1
        max: 10
        value: 1
        size: small
    - brick: sl-button
      properties:
        size: small
        textContent: Add to cart`},{name:"style.css",lang:"css",code:s}]}),"\n",(0,i.jsx)(a.Z,{files:[{name:"Bricks",code:`brick: div
properties:
  className: product-list
children:
- brick: ':forEach'
  dataSource: <%= CTX.products %>
  children:
  - brick: tpl-fruit-card
    properties:
      label: <% ITEM.label %>
      description: <% ITEM.description %>
      imageUrl: <% ITEM.imageUrl %>`},{name:"Context",code:`- name: products
  value:
  - label: Apple
    description: Fresh apples!
    imageUrl: |
      https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=240&q=80
  - label: Orange
    description: Fresh Oranges!
    imageUrl: |
      https://images.unsplash.com/photo-1482012792084-a0c3725f289f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=240&q=80`},{name:"tpl-fruit-card",defaultActive:!0,code:`state:
- name: label
  expose: true
- name: description
  expose: true
- name: imageUrl
  expose: true
bricks:
- brick: sl-card
  children:
  - brick: img
    slot: image
    properties:
      src: <%= STATE.imageUrl %>
  - brick: strong
    properties:
      textContent: <%= STATE.label %>
  - brick: div
    properties:
      textContent: <%= STATE.description %>
  - brick: div
    slot: footer
    properties:
      className: flex-layout
    children:
    - brick: sl-input
      properties:
        label: Qty
        type: number
        min: 1
        max: 10
        value: 1
        size: small
    - brick: sl-button
      properties:
        size: small
        textContent: Add to cart`},{name:"style.css",lang:"css",code:s}]})]})}function f(e={}){let{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},66535:function(e,t,r){r.d(t,{Z:()=>i});var n=r("85893");r("67294");function i(){return(0,n.jsx)("div",{className:"ringContainer_Jl9i",children:(0,n.jsxs)("div",{className:"ring_UfU1",children:[(0,n.jsx)("div",{}),(0,n.jsx)("div",{}),(0,n.jsx)("div",{}),(0,n.jsx)("div",{})]})})}},72218:function(e,t,r){r.d(t,{Z:function(){return o}});var n=r(85893),i=r(67294),l=r(66535);let a=i.lazy(()=>Promise.all([r.e("6212"),r.e("700"),r.e("3855")]).then(r.bind(r,77386))),s=i.lazy(()=>Promise.all([r.e("6212"),r.e("4309"),r.e("3295"),r.e("9384")]).then(r.bind(r,5359))),o=(0,i.forwardRef)(function(e,t){let{files:r,currentFile:o,theme:c,className:u,typingEffectReady:d,onChange:p}=e,f=!!navigator.maxTouchPoints;return(0,i.useEffect)(()=>{if(f&&p){let e=r.find(e=>e.name===o);e.codeSlides&&p(e.code,o)}},[o,r,f,p]),(0,n.jsx)(i.Suspense,{fallback:(0,n.jsx)(l.Z,{}),children:f?(0,n.jsx)(a,{files:r,currentFile:o,className:u}):(0,n.jsx)(s,{files:r,currentFile:o,theme:c,className:u,typingEffectReady:d,onChange:p,ref:t})})})},75133:function(e,t,r){r.d(t,{Z:()=>y});var n,i,l=r("85893"),a=r("67294"),s=r("73935"),o=r("23113"),c=r("97844"),u=r("37131");function d(e){let{children:t,fallback:r}=e;return(0,u.Z)()?(0,l.jsx)(l.Fragment,{children:null==t?void 0:t()}):r??null}var p=r("67026"),f=r("21656"),m=r("48113");function b(){return(b=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(null,arguments)}let x=e=>{let{title:t,titleId:r,...i}=e;return a.createElement("svg",b({xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"currentColor",className:"bi bi-chevron-up",viewBox:"0 0 16 16","aria-labelledby":r},i),t?a.createElement("title",{id:r},t):null,n||(n=a.createElement("path",{fillRule:"evenodd",d:"M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z"})))};function h(){return(h=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(null,arguments)}let v=e=>{let{title:t,titleId:r,...n}=e;return a.createElement("svg",h({xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"currentColor",className:"bi bi-chevron-down",viewBox:"0 0 16 16","aria-labelledby":r},n),t?a.createElement("title",{id:r},t):null,i||(i=a.createElement("path",{fillRule:"evenodd",d:"M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"})))};var g=r("66535");let w={example:"example_UmKM",editorColumn:"editorColumn_AL_t",previewColumn:"previewColumn_FsuT",editorContainer:"editorContainer_sUW3",preview:"preview_bwr6",ready:"ready_dhJq",expanded:"expanded_o_pT",collapsed:"collapsed_aDj8",tabs:"tabs_yDjk",tab:"tab_uskj",active:"active_KoUc",buttonToggleShowMore:"buttonToggleShowMore_A68N",expandable:"expandable_arS4",condensed:"condensed_ytqo"};function y(e){let{files:t,hiddenFiles:n,condensed:i,wait:u,className:b}=e,h=(0,a.useRef)(),y=(0,a.useRef)(),{colorMode:T}=(0,c.I)(),S=(0,o.ZP)("/preview/"),M=(0,a.useRef)(),[E,A]=(0,a.useState)(m.cP),[_,N]=(0,a.useState)(!1),[Z,H]=(0,a.useState)(()=>(t.find(e=>e.defaultActive)??t[0]).name),[B,z]=(0,a.useState)(()=>C(t,Z)),[D,O]=(0,a.useState)(()=>k(B,E)),[P,U]=(0,a.useState)(!1),F=(0,a.useCallback)(()=>{let e=()=>{var t,r;(null===(r=M.current)||void 0===r?void 0:null===(t=r.contentWindow)||void 0===t?void 0:t._preview_only_render)?N(!0):setTimeout(e,100)};e()},[]),[q,G]=(0,a.useState)(()=>Object.fromEntries(t.map(e=>{var t;return[e.name,(null===(t=e.codeSlides)||void 0===t?void 0:t[0])??e.code]}))),R=(0,f.Z)(q);(0,a.useEffect)(()=>{var e,t;if(!_)return;let r=null===(t=M.current)||void 0===t?void 0:null===(e=t.contentWindow)||void 0===e?void 0:e._preview_only_render;if(!r)return;let{Bricks:i,Context:l,Functions:a,Templates:s,I18N:o,Style:c,templatesAreArrayOfYaml:u}=function(e){let t={},r=[],n=[];for(let[i,l]of Object.entries(e))if(i.startsWith("Functions/")){let[e,t]=i.split("/")[1].split(".");r.push({name:e,source:l,typescript:"ts"===t})}else i.startsWith("tpl-")?n.push({name:i,yaml:l}):"style.css"===i?t.Style=l:t[i]=l;return r.length>0&&(t.Functions=r),n.length>0&&(t.Templates=n,t.templatesAreArrayOfYaml=!0),t}({...n,...R});r("yaml",{yaml:i},{theme:T,context:l,functions:a,templates:s,i18n:o,styleText:c,templatesAreArrayOfYaml:u})},[_,T,R,n]),(0,a.useEffect)(()=>{if(!_)return;let e=new ResizeObserver(e=>{for(let n of e){var t,r;A(Math.max(m.cP,(null===(r=n.borderBoxSize)||void 0===r?void 0:null===(t=r[0])||void 0===t?void 0:t.blockSize)??n.contentRect.height))}});return e.observe(M.current.contentDocument.body,{box:"border-box"}),()=>{e.disconnect()}},[_]);let V=(0,a.useCallback)((e,r)=>{G(t=>({...t,[r]:e})),j(t,r).minLines||z(e.split("\n").length)},[t]);(0,a.useEffect)(()=>{z(C(t,Z))},[t,Z]),(0,a.useEffect)(()=>{O(k(B,E))},[B,E]);let W=(0,a.useCallback)(()=>{let e=!P;if((0,s.flushSync)(()=>{U(e)}),!e){var t;null===(t=y.current)||void 0===t||t.resetScrollTop(),h.current.scrollIntoViewIfNeeded?h.current.scrollIntoViewIfNeeded():h.current.scrollIntoView({block:"nearest",inline:"nearest"})}},[P]),I=D>m.qH,Y={height:I&&!P?m.qH:Math.max(D,m.lV)};return(0,l.jsxs)("div",{className:(0,p.Z)(w.example,b,{[w.expandable]:I,[w.condensed]:i}),ref:h,children:[(0,l.jsx)("div",{className:w.tabs,children:t.map(e=>(0,l.jsx)("button",{className:(0,p.Z)(w.tab,{[w.active]:e.name===Z}),onClick:()=>{H(e.name)},children:"Bricks"===e.name?"Storyboard":e.name},e.name))}),(0,l.jsx)("div",{className:w.editorColumn,style:Y,children:u?(0,l.jsx)(g.Z,{}):(0,l.jsx)(d,{fallback:(0,l.jsx)(g.Z,{}),children:()=>{let e=r(72218).Z;return(0,l.jsx)(e,{files:t,currentFile:Z,theme:"dark"===T?"vs-dark":"vs",className:w.editorContainer,typingEffectReady:_,onChange:V,ref:y})}})}),(0,l.jsxs)("div",{className:(0,p.Z)(w.previewColumn,P?w.expanded:w.collapsed),style:{maxHeight:I&&!P?m.qH:"unset",padding:m.$P},children:[u||(0,l.jsx)("div",{className:(0,p.Z)(w.preview,{[w.ready]:_}),children:(0,l.jsx)("iframe",{ref:M,src:S,loading:"lazy",onLoad:F,style:{height:E}})}),(u||!_)&&(0,l.jsx)(g.Z,{})]}),I&&(0,l.jsxs)("button",{className:w.buttonToggleShowMore,role:"button",onClick:W,children:[P?(0,l.jsx)(x,{}):(0,l.jsx)(v,{}),(0,l.jsx)("span",{children:P?"Show less":"Show more"})]})]})}function k(e,t){return Math.max(t+2*m.$P,e*m.CZ+m.sE+m.z5)}function j(e,t){return e.find(e=>e.name===t)}function C(e,t){let r=j(e,t);return r.minLines??r.code.split("\n").length}},48113:function(e,t,r){r.d(t,{$P:function(){return l},CZ:function(){return n},cP:function(){return i},lV:function(){return c},qH:function(){return o},sE:function(){return a},z5:function(){return s}});let n=22,i=32,l=20,a=12,s=12,o=376,c=156},21656:function(e,t,r){r.d(t,{Z:function(){return i}});var n=r(67294);function i(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:200,[r,i]=(0,n.useState)(e);return(0,n.useEffect)(()=>{let r=setTimeout(()=>{i(e)},t);return()=>{clearTimeout(r)}},[e,t]),r}},50065:function(e,t,r){r.d(t,{Z:function(){return s},a:function(){return a}});var n=r(67294);let i={},l=n.createContext(i);function a(e){let t=n.useContext(l);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(l.Provider,{value:t},e.children)}}}]);