/*! For license information please see eo-actions.c0a6dd69.js.LICENSE.txt */
(globalThis.webpackChunk_next_bricks_basic=globalThis.webpackChunk_next_bricks_basic||[]).push([[5089,2052],{2134:(e,t,n)=>{"use strict";n.r(t),n.d(t,{EoActions:()=>H,EoActionsComponent:()=>oe});var r,i=n(4635),o=n(918),a=n(6902),c=n(5536),s=n(6121),l=n(829),u=n(2740),d=n(8769),m=n.n(d),p=n(4799),h=n(8610),f=(n(6477),n(3373)),g=n.n(f),b=n(1030),v=n(3931);let y,A,k,w,x,E,S,D,C,j,M,N,T,W,O,P,K,B,I;const{defineElement:_,property:z,event:F}=(0,p.createDecorators)(),L=(0,h.wrapBrick)("eo-tooltip"),R=(0,h.wrapBrick)("eo-link"),V=(0,h.wrapBrick)("eo-menu"),J=(0,h.wrapBrick)("eo-menu-item"),q=(0,h.wrapBrick)("eo-popover",{onVisibleChange:"visible.change",beforeVisibleChange:"before.visible.change"});function G(e){let{index:t,action:n,checkedKeys:r,onSubMenuClick:i}=e;return m().createElement(q,{"data-index":t,className:"popover",trigger:"click",arrow:!1,placement:n.placement||"right-start",distance:4,anchorDisplay:"block",strategy:"fixed"},m().createElement(J,{slot:"anchor",className:g()("sub-menu-item-label",{"menu-item-danger":n.danger}),icon:n.icon,disabled:n.disabled},n.text),m().createElement("div",{className:"sub-menu-wrapper"},null==n?void 0:n.items.map(((e,t)=>{const n=m().createElement(m().Fragment,null,m().createElement(J,{className:g()({"menu-item-danger":e.danger,"menu-item-selected":!(0,b.isNil)(e.key)&&(null==r?void 0:r.includes(e.key))}),icon:e.icon,disabled:e.disabled,onClick:t=>{e.url||e.href||t.preventDefault(),t.stopPropagation(),null==i||i(e)}},e.text));return m().createElement(L,{key:t,content:e.tooltip,hoist:!0,placement:"left"},e.url||e.href?m().createElement(R,{type:"plain",href:e.href,target:e.target,url:e.url,disabled:e.disabled},n):n)}))))}let H;var Q=new WeakMap,U=new WeakMap,X=new WeakMap,Y=new WeakMap,Z=new WeakSet,$=new WeakMap,ee=new WeakMap,te=new WeakMap,ne=new WeakMap,re=new WeakMap;class ie extends h.ReactNextElement{constructor(){super(...arguments),(0,i.A)(this,Z),(0,o.A)(this,Q,A(this)),(0,o.A)(this,U,(k(this),w(this,[]))),(0,o.A)(this,X,(x(this),E(this))),(0,o.A)(this,Y,(S(this),D(this))),(0,o.A)(this,$,(M(this),N(this))),(0,o.A)(this,ee,(O(this),P(this))),(0,o.A)(this,te,(I(this),e=>{(0,c.A)(Z,this,C).emit(e),e.event&&this.dispatchEvent(new CustomEvent(e.event,{detail:e}))})),(0,o.A)(this,ne,(e=>{(0,c.A)(Z,this,K).emit(e)})),(0,o.A)(this,re,(e=>{(0,c.A)(Z,this,T).emit(e)}))}get actions(){return(0,l.A)(Q,this)}set actions(e){(0,s.A)(Q,this,e)}get checkedKeys(){return(0,l.A)(U,this)}set checkedKeys(e){(0,s.A)(U,this,e)}get itemDraggable(){return(0,l.A)(X,this)}set itemDraggable(e){(0,s.A)(X,this,e)}render(){return m().createElement(oe,{actions:this.actions,itemDraggable:this.itemDraggable,onActionClick:(0,l.A)(te,this),onItemDragStart:(0,l.A)(re,this),onItemDragEnd:(0,l.A)(ne,this),checkedKeys:this.checkedKeys})}}function oe(e){let{actions:t,checkedKeys:n,onActionClick:r,itemDraggable:i,onItemDragStart:o,onItemDragEnd:a}=e;const c=(0,d.useMemo)((()=>null==t?void 0:t.filter((e=>!e.hidden))),[t]);return m().createElement(m().Fragment,null,null!=c&&c.length?m().createElement(V,null,c.map(((e,t)=>{if(function(e){return"type"in e&&"divider"===e.type}(e))return 0===t||t===c.length-1?null:m().createElement("div",{key:t,className:"menu-item-divider"});{var s;const c=null!=e&&null!==(s=e.items)&&void 0!==s&&s.length?m().createElement(G,{index:t,action:e,checkedKeys:n,onSubMenuClick:e=>{null==r||r(e)}}):m().createElement(J,{className:g()({"menu-item-danger":e.danger,"menu-item-selected":!(0,b.isNil)(e.key)&&(null==n?void 0:n.includes(e.key))}),draggable:i,icon:e.icon,disabled:e.disabled,onClick:t=>{e.url||e.href||t.preventDefault(),t.stopPropagation(),null==r||r(e)},onDragStart:t=>{var n;e.dragConf&&(null===(n=t.dataTransfer)||void 0===n||n.setData(e.dragConf.format,JSON.stringify(e.dragConf.data)),t.target.classList.add("dragging")),null==o||o(e)},onDragEnd:t=>{t.target.classList.remove("dragging"),null==a||a(e)}},e.text);return m().createElement(L,{key:t,content:e.tooltip,hoist:!0,placement:"left"},e.url||e.href?m().createElement(R,{type:"plain",href:e.href,target:e.target,url:e.url,disabled:e.disabled},c):c)}}))):null)}r=ie,({e:[A,k,w,x,E,S,D,C,j,M,N,T,W,O,P,K,B,I],c:[H,y]}=(0,u.A)(r,[_("eo-actions",{styleTexts:[v.A]})],[[z({attribute:!1}),1,"actions"],[z({attribute:!1}),1,"checkedKeys"],[z({type:Boolean}),1,"itemDraggable"],[F({type:"action.click"}),1,"actionClickEvent",e=>(0,l.A)(Y,e),(e,t)=>(0,s.A)(Y,e,t)],[F({type:"item.drag.start"}),1,"itemDragStartEvent",e=>(0,l.A)($,e),(e,t)=>(0,s.A)($,e,t)],[F({type:"item.drag.end"}),1,"itemDragEndEvent",e=>(0,l.A)(ee,e),(e,t)=>(0,s.A)(ee,e,t)]],0,(e=>re.has((0,a.A)(e))),h.ReactNextElement)),y()},3931:(e,t,n)=>{"use strict";n.d(t,{A:()=>c});var r=n(6758),i=n.n(r),o=n(935),a=n.n(o)()(i());a.push([e.id,':host{display:block;width:-moz-fit-content;width:fit-content}:host([hidden]){display:none}eo-menu{padding:2px;border-radius:4px;background:var(--antd-dropdown-menu-bg);box-shadow:var(--antd-box-shadow-base);border:none}eo-menu-item::part(menu-item){padding:5px 12px;border-radius:var(--medius-border-radius);min-width:max-content}eo-menu-item:not([disabled]):hover::part(menu-item){background-color:var(--left-sidebar-item-hover-bg)}eo-menu-item.dragging{opacity:0.5}eo-menu-item[draggable="true"]::part(menu-item){cursor:grab}eo-tooltip{display:block}eo-link{display:block}.menu-item-divider{height:1px;margin:4px 0;overflow:hidden;line-height:0;background-color:var(--antd-border-color-split)}.menu-item-danger:not([disabled])::part(menu-item){color:var(--theme-red-color)}.menu-item-selected::part(menu-item){font-weight:600;background-color:var(--app-bar-dropdown-menu-item-hover-bg);color:var(--theme-blue-color)}eo-menu-item::part(menu-icon){margin-right:8px}.popover .sub-menu-item-label{padding:2px 0px;color:var(--color-normal-text)}.sub-menu-wrapper{min-width:160px;max-height:calc(100vh - 100px);background-color:var(--antd-dropdown-menu-bg);padding:4px 0;border-radius:6px;box-shadow:0px 4px 12px 0px rgba(17,37,64,0.08);overflow-x:hidden;overflow-y:auto}.popover .menu-item-selected::part(menu-item)::after{content:"✓";display:inline-block;padding:0 5px}',""]);const c=a.toString()},935:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,i,o){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var l=0;l<e.length;l++){var u=[].concat(e[l]);r&&a[u[0]]||(void 0!==o&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=o),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),i&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=i):u[4]="".concat(i)),t.push(u))}},t}},6758:e=>{"use strict";e.exports=function(e){return e[1]}},3373:(e,t)=>{var n;!function(){"use strict";var r={}.hasOwnProperty;function i(){for(var e="",t=0;t<arguments.length;t++){var n=arguments[t];n&&(e=a(e,o(n)))}return e}function o(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return i.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var n in e)r.call(e,n)&&e[n]&&(t=a(t,n));return t}function a(e,t){return t?e?e+" "+t:e+t:e}e.exports?(i.default=i,e.exports=i):void 0===(n=function(){return i}.apply(t,[]))||(e.exports=n)}()},2740:(e,t,n)=>{"use strict";n.d(t,{A:()=>c});var r=n(7545),i=n(6902);function o(e,t,n){"symbol"==(0,r.A)(t)&&(t=(t=t.description)?"["+t+"]":"");try{Object.defineProperty(e,"name",{configurable:!0,value:n?n+" "+t:t})}catch(e){}return e}var a=n(1369);function c(e,t,n,c,s,l){var u,d,m,p,h,f,g,b=Symbol.metadata||Symbol.for("Symbol.metadata"),v=Object.defineProperty,y=Object.create,A=[y(null),y(null)],k=t.length;function w(t,n,r){return function(i,o){n&&(o=i,i=e);for(var a=0;a<t.length;a++)o=t[a].apply(i,r?[o]:[]);return r?o:i}}function x(e,t,n,r){if("function"!=typeof e&&(r||void 0!==e))throw new TypeError(t+" must "+(n||"be")+" a function"+(r?"":" or undefined"));return e}function E(e,t,n,i,a,c,s,l,m,p,h){function f(e){if(!h(e))throw new TypeError("Attempted to access private element on non-instance")}var g=[].concat(t[0]),b=t[3],y=!s,k=1===a,E=3===a,S=4===a,D=2===a;function C(t,n,r){return function(i,o){return n&&(o=i,i=e),r&&r(i),j[t].call(i,o)}}if(!y){var j={},M=[],N=E?"get":S||k?"set":"value";if(m?(p||k?j={get:o((function(){return b(this)}),i,"get"),set:function(e){t[4](this,e)}}:j[N]=b,p||o(j[N],i,D?"":N)):p||(j=Object.getOwnPropertyDescriptor(e,i)),!p&&!m){if((d=A[+l][i])&&7!=(d^a))throw Error("Decorating two elements with the same name ("+j[N].name+") is not supported yet");A[+l][i]=a<3?1:a}}for(var T=e,W=g.length-1;W>=0;W-=n?2:1){var O=x(g[W],"A decorator","be",!0),P=n?g[W-1]:void 0,K={},B={kind:["field","accessor","method","getter","setter","class"][a],name:i,metadata:u,addInitializer:function(e,t){if(e.v)throw Error("attempted to call addInitializer after decoration was finished");x(t,"An initializer","be",!0),c.push(t)}.bind(null,K)};if(y)d=O.call(P,T,B),K.v=1,x(d,"class decorators","return")&&(T=d);else if(B.static=l,B.private=m,d=B.access={has:m?h.bind():function(e){return i in e}},S||(d.get=m?D?function(e){return f(e),j.value}:C("get",0,f):function(e){return e[i]}),D||E||(d.set=m?C("set",0,f):function(e,t){e[i]=t}),T=O.call(P,k?{get:j.get,set:j.set}:j[N],B),K.v=1,k){if("object"==(0,r.A)(T)&&T)(d=x(T.get,"accessor.get"))&&(j.get=d),(d=x(T.set,"accessor.set"))&&(j.set=d),(d=x(T.init,"accessor.init"))&&M.unshift(d);else if(void 0!==T)throw new TypeError("accessor decorators must return an object with get, set, or init properties or undefined")}else x(T,(p?"field":"method")+" decorators","return")&&(p?M.unshift(T):j[N]=T)}return a<2&&s.push(w(M,l,1),w(c,l,0)),p||y||(m?k?s.splice(-1,0,C("get",l),C("set",l)):s.push(D?j[N]:x.call.bind(j[N])):v(e,i,j)),T}function S(e){return v(e,b,{configurable:!0,enumerable:!0,value:u})}return void 0!==l&&(u=l[b]),u=y(null==u?null:u),h=[],f=function(e){e&&h.push(w(e))},g=function(t,r){for(var o=0;o<n.length;o++){var c=n[o],l=c[1],u=7&l;if((8&l)==t&&!u==r){var d=c[2],f=!!c[3],g=16&l;E(t?e:e.prototype,c,g,f?"#"+d:(0,a.A)(d),u,u<2?[]:t?p=p||[]:m=m||[],h,!!t,f,r,t&&f?function(t){return(0,i.A)(t)===e}:s)}}},g(8,0),g(0,0),g(8,1),g(0,1),f(m),f(p),d=h,k||S(e),{e:d,get c(){var n=[];return k&&[S(e=E(e,[t],c,e.name,5,n)),w(n,1)]}}}},2559:(e,t,n)=>{"use strict";function r(e,t,n){if("function"==typeof e?e===t:e.has(t))return arguments.length<3?t:n;throw new TypeError("Private element is not present on this object")}n.d(t,{A:()=>r})},6902:(e,t,n)=>{"use strict";n.d(t,{A:()=>i});var r=n(7545);function i(e){if(Object(e)!==e)throw TypeError("right-hand side of 'in' should be an object, got "+(null!==e?(0,r.A)(e):"null"));return e}},2016:(e,t,n)=>{"use strict";function r(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}n.d(t,{A:()=>r})},829:(e,t,n)=>{"use strict";n.d(t,{A:()=>i});var r=n(2559);function i(e,t){return e.get((0,r.A)(e,t))}},918:(e,t,n)=>{"use strict";n.d(t,{A:()=>i});var r=n(2016);function i(e,t,n){(0,r.A)(e,t),t.set(e,n)}},6121:(e,t,n)=>{"use strict";n.d(t,{A:()=>i});var r=n(2559);function i(e,t,n){return e.set((0,r.A)(e,t),n),n}},5536:(e,t,n)=>{"use strict";n.d(t,{A:()=>i});var r=n(2559);function i(e,t,n){return n((0,r.A)(e,t))}},4635:(e,t,n)=>{"use strict";n.d(t,{A:()=>i});var r=n(2016);function i(e,t){(0,r.A)(e,t),t.add(e)}},1369:(e,t,n)=>{"use strict";n.d(t,{A:()=>i});var r=n(7545);function i(e){var t=function(e,t){if("object"!=(0,r.A)(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,"string");if("object"!=(0,r.A)(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==(0,r.A)(t)?t:t+""}},7545:(e,t,n)=>{"use strict";function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}n.d(t,{A:()=>r})}}]);
//# sourceMappingURL=eo-actions.c0a6dd69.js.map