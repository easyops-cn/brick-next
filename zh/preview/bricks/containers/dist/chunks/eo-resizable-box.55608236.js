/*! For license information please see eo-resizable-box.55608236.js.LICENSE.txt */
(globalThis.webpackChunk_next_bricks_containers=globalThis.webpackChunk_next_bricks_containers||[]).push([[8315,7620,2052],{9168:(t,e,r)=>{"use strict";r.r(e),r.d(e,{ResizableBox:()=>K,ResizableBoxComponent:()=>Q});var o,i=r(918),n=r(6121),s=r(829),a=r(2740),c=r(8769),u=r.n(c),l=r(4799),d=r(8610),h=(r(4291),r(3373)),b=r.n(h),f=r(4612),p=r(7290),m=r(7225);let g,v,y,A,x,S,w,z,k,E,N,W,j,M,D,I,O,R,T;const{defineElement:P,property:C}=(0,l.createDecorators)();let K;var _=new WeakMap,X=new WeakMap,G=new WeakMap,L=new WeakMap,Y=new WeakMap,B=new WeakMap,F=new WeakMap,J=new WeakMap,q=new WeakMap;class H extends d.ReactNextElement{constructor(){super(...arguments),(0,i.A)(this,_,v(this)),(0,i.A)(this,X,(y(this),A(this))),(0,i.A)(this,G,(x(this),S(this))),(0,i.A)(this,L,(w(this),z(this))),(0,i.A)(this,Y,(k(this),E(this))),(0,i.A)(this,B,(N(this),W(this))),(0,i.A)(this,F,(j(this),M(this))),(0,i.A)(this,J,(D(this),I(this))),(0,i.A)(this,q,(O(this),R(this))),T(this)}get resizeDirection(){return(0,s.A)(_,this)}set resizeDirection(t){(0,n.A)(_,this,t)}get storageKey(){return(0,s.A)(X,this)}set storageKey(t){(0,n.A)(X,this,t)}get defaultSize(){return(0,s.A)(G,this)}set defaultSize(t){(0,n.A)(G,this,t)}get minSize(){return(0,s.A)(L,this)}set minSize(t){(0,n.A)(L,this,t)}get minSpace(){return(0,s.A)(Y,this)}set minSpace(t){(0,n.A)(Y,this,t)}get disabled(){return(0,s.A)(B,this)}set disabled(t){(0,n.A)(B,this,t)}get variant(){return(0,s.A)(F,this)}set variant(t){(0,n.A)(F,this,t)}get boxStyle(){return(0,s.A)(J,this)}set boxStyle(t){(0,n.A)(J,this,t)}get boxStyleWhenNotResizing(){return(0,s.A)(q,this)}set boxStyleWhenNotResizing(t){(0,n.A)(q,this,t)}render(){return u().createElement(Q,{resizeDirection:this.resizeDirection,storageKey:this.storageKey,defaultSize:this.defaultSize,minSize:this.minSize,minSpace:this.minSpace,disabled:this.disabled,variant:this.variant,boxStyle:this.boxStyle,boxStyleWhenNotResizing:this.boxStyleWhenNotResizing})}}function Q(t){let{resizeDirection:e,storageKey:r,defaultSize:o,minSize:i,minSpace:n,disabled:s,variant:a,boxStyle:l,boxStyleWhenNotResizing:d}=t;const h=e??"right",m=o??200,g=n??300,v=i??m,y=(0,c.useMemo)((()=>r?new f.G(localStorage):null),[r]),A=(0,c.useCallback)((()=>(r?null==y?void 0:y.getItem(r):void 0)??m),[m,r,y]),[x,S]=(0,c.useState)(A),[w,z]=(0,c.useState)(!1),[k,E]=(0,c.useState)(null),N=(0,c.useMemo)((()=>["top","bottom"].includes(h)),[h]),W=(0,c.useCallback)((t=>{s||(t.preventDefault(),E({startSize:x,startX:t.clientX,startY:t.clientY}),z(!1))}),[x,s]);return(0,c.useEffect)((()=>{S(A())}),[A]),(0,c.useEffect)((()=>{if(!k)return;const t=(0,p.G)(S),e=e=>{const r=N?Math.min(document.documentElement.clientHeight-g,k.startSize+(e.clientY-k.startY)*("top"===h?-1:1)):Math.min(document.documentElement.clientWidth-g,k.startSize+(e.clientX-k.startX)*("left"===h?-1:1));z(!0),t(Math.max(v,r))},r=()=>{E(null)};return window.addEventListener("mousemove",e),window.addEventListener("mouseup",r),()=>{window.removeEventListener("mousemove",e),window.removeEventListener("mouseup",r)}}),[h,v,g,k,N]),(0,c.useEffect)((()=>{!k&&w&&r&&(null==y||y.setItem(r,x))}),[w,k,y,x,r]),u().createElement(u().Fragment,null,u().createElement("div",{className:b()("box",{resizing:!!k}),style:{[N?"height":"width"]:x,...l,...k?null:d}},u().createElement("slot",null)),u().createElement("div",{className:b()("bar","dashboard"===a?a:"default",h),onMouseDown:W},u().createElement("div",{className:"mask"})))}o=H,({e:[v,y,A,x,S,w,z,k,E,N,W,j,M,D,I,O,R,T],c:[K,g]}=(0,a.A)(o,[P("eo-resizable-box",{styleTexts:[m.A]})],[[C(),1,"resizeDirection"],[C(),1,"storageKey"],[C({type:Number}),1,"defaultSize"],[C({type:Number}),1,"minSize"],[C({type:Number}),1,"minSpace"],[C({type:Boolean}),1,"disabled"],[C(),1,"variant"],[C({attribute:!1}),1,"boxStyle"],[C({attribute:!1}),1,"boxStyleWhenNotResizing"]],0,void 0,d.ReactNextElement)),g()},7225:(t,e,r)=>{"use strict";r.d(e,{A:()=>a});var o=r(6758),i=r.n(o),n=r(935),s=r.n(n)()(i());s.push([t.id,':host{display:block;position:relative}:host([hidden]){display:none}:host([resize-direction="left"]),\n:host([resize-direction="right"]){height:100%}*,\n*::before,\n*::after{box-sizing:border-box}.box{height:100%}.bar{position:absolute;width:4px;top:0;bottom:0}.top.bar,\n.bottom.bar{position:absolute;height:4px;left:0;width:100%}.top.bar{top:-2px}.bottom.bar{bottom:-2px;top:100%;z-index:1}.left.bar{left:-2px}.right.bar{right:-2px}:host(:not([disabled])) .bar.default:hover{cursor:col-resize;background:#007fd4;transition:background 0.1s 0.3ms ease-out}.top:is(:host(:not([disabled])) .bar.default:hover),.bottom:is(:host(:not([disabled])) .bar.default:hover){cursor:row-resize}.bar.dashboard{width:8px;position:absolute;top:0;bottom:0}.bar.dashboard.top,.bar.dashboard.bottom{position:absolute;height:8px;left:0;width:100%}.bar.dashboard.top{top:-4px}.bar.dashboard.bottom{bottom:-4px}.bar.dashboard.left{left:-4px}.bar.dashboard.right{right:-4px}.bar.dashboard::before{content:"";position:absolute;transition:border-color 0.2s ease-in-out 0s}.bar.dashboard::after{background:var(--color-text-divider-line);content:"";position:absolute;transition:background 0.2s ease-in-out 0s;border-radius:4px}.bar.dashboard.left::before,.bar.dashboard.right::before{border-left:1px solid transparent;height:100%;left:50%;transform:translateX(-50%)}.bar.dashboard.left::after,.bar.dashboard.right::after{left:50%;top:50%;transform:translate(-50%,-50%);height:40%;width:4px}.bar.dashboard.top::before,.bar.dashboard.bottom::before{border-top:1px solid transparent;width:100%;height:100%;top:0;transform:translate(0%,50%)}.bar.dashboard.top::after,.bar.dashboard.bottom::after{top:50%;left:50%;transform:translate(-50%,-50%);height:4px;width:40%}:host(:not([disabled])) .bar.dashboard:hover{cursor:col-resize}:is(:host(:not([disabled])) .bar.dashboard:hover)::before{border-color:#007fd4}:is(:host(:not([disabled])) .bar.dashboard:hover)::after{background:rgba(0,127,212,0.75)}.top:is(:host(:not([disabled])) .bar.dashboard:hover),.bottom:is(:host(:not([disabled])) .bar.dashboard:hover){cursor:row-resize}.mask{position:fixed;top:0;bottom:0;left:0;right:0;z-index:2000;display:none}.resizing + .bar .mask{display:block}',""]);const a=s.toString()},935:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var r="",o=void 0!==e[5];return e[4]&&(r+="@supports (".concat(e[4],") {")),e[2]&&(r+="@media ".concat(e[2]," {")),o&&(r+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),r+=t(e),o&&(r+="}"),e[2]&&(r+="}"),e[4]&&(r+="}"),r})).join("")},e.i=function(t,r,o,i,n){"string"==typeof t&&(t=[[null,t,void 0]]);var s={};if(o)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(s[c]=!0)}for(var u=0;u<t.length;u++){var l=[].concat(t[u]);o&&s[l[0]]||(void 0!==n&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=n),r&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=r):l[2]=r),i&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=i):l[4]="".concat(i)),e.push(l))}},e}},6758:t=>{"use strict";t.exports=function(t){return t[1]}},3373:(t,e)=>{var r;!function(){"use strict";var o={}.hasOwnProperty;function i(){for(var t="",e=0;e<arguments.length;e++){var r=arguments[e];r&&(t=s(t,n(r)))}return t}function n(t){if("string"==typeof t||"number"==typeof t)return t;if("object"!=typeof t)return"";if(Array.isArray(t))return i.apply(null,t);if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]"))return t.toString();var e="";for(var r in t)o.call(t,r)&&t[r]&&(e=s(e,r));return e}function s(t,e){return e?t?t+" "+e:t+e:t}t.exports?(i.default=i,t.exports=i):void 0===(r=function(){return i}.apply(e,[]))||(t.exports=r)}()},2740:(t,e,r)=>{"use strict";r.d(e,{A:()=>a});var o=r(7545),i=r(6902);function n(t,e,r){"symbol"==(0,o.A)(e)&&(e=(e=e.description)?"["+e+"]":"");try{Object.defineProperty(t,"name",{configurable:!0,value:r?r+" "+e:e})}catch(t){}return t}var s=r(1369);function a(t,e,r,a,c,u){var l,d,h,b,f,p,m,g=Symbol.metadata||Symbol.for("Symbol.metadata"),v=Object.defineProperty,y=Object.create,A=[y(null),y(null)],x=e.length;function S(e,r,o){return function(i,n){r&&(n=i,i=t);for(var s=0;s<e.length;s++)n=e[s].apply(i,o?[n]:[]);return o?n:i}}function w(t,e,r,o){if("function"!=typeof t&&(o||void 0!==t))throw new TypeError(e+" must "+(r||"be")+" a function"+(o?"":" or undefined"));return t}function z(t,e,r,i,s,a,c,u,h,b,f){function p(t){if(!f(t))throw new TypeError("Attempted to access private element on non-instance")}var m=[].concat(e[0]),g=e[3],y=!c,x=1===s,z=3===s,k=4===s,E=2===s;function N(e,r,o){return function(i,n){return r&&(n=i,i=t),o&&o(i),W[e].call(i,n)}}if(!y){var W={},j=[],M=z?"get":k||x?"set":"value";if(h?(b||x?W={get:n((function(){return g(this)}),i,"get"),set:function(t){e[4](this,t)}}:W[M]=g,b||n(W[M],i,E?"":M)):b||(W=Object.getOwnPropertyDescriptor(t,i)),!b&&!h){if((d=A[+u][i])&&7!=(d^s))throw Error("Decorating two elements with the same name ("+W[M].name+") is not supported yet");A[+u][i]=s<3?1:s}}for(var D=t,I=m.length-1;I>=0;I-=r?2:1){var O=w(m[I],"A decorator","be",!0),R=r?m[I-1]:void 0,T={},P={kind:["field","accessor","method","getter","setter","class"][s],name:i,metadata:l,addInitializer:function(t,e){if(t.v)throw Error("attempted to call addInitializer after decoration was finished");w(e,"An initializer","be",!0),a.push(e)}.bind(null,T)};if(y)d=O.call(R,D,P),T.v=1,w(d,"class decorators","return")&&(D=d);else if(P.static=u,P.private=h,d=P.access={has:h?f.bind():function(t){return i in t}},k||(d.get=h?E?function(t){return p(t),W.value}:N("get",0,p):function(t){return t[i]}),E||z||(d.set=h?N("set",0,p):function(t,e){t[i]=e}),D=O.call(R,x?{get:W.get,set:W.set}:W[M],P),T.v=1,x){if("object"==(0,o.A)(D)&&D)(d=w(D.get,"accessor.get"))&&(W.get=d),(d=w(D.set,"accessor.set"))&&(W.set=d),(d=w(D.init,"accessor.init"))&&j.unshift(d);else if(void 0!==D)throw new TypeError("accessor decorators must return an object with get, set, or init properties or undefined")}else w(D,(b?"field":"method")+" decorators","return")&&(b?j.unshift(D):W[M]=D)}return s<2&&c.push(S(j,u,1),S(a,u,0)),b||y||(h?x?c.splice(-1,0,N("get",u),N("set",u)):c.push(E?W[M]:w.call.bind(W[M])):v(t,i,W)),D}function k(t){return v(t,g,{configurable:!0,enumerable:!0,value:l})}return void 0!==u&&(l=u[g]),l=y(null==l?null:l),f=[],p=function(t){t&&f.push(S(t))},m=function(e,o){for(var n=0;n<r.length;n++){var a=r[n],u=a[1],l=7&u;if((8&u)==e&&!l==o){var d=a[2],p=!!a[3],m=16&u;z(e?t:t.prototype,a,m,p?"#"+d:(0,s.A)(d),l,l<2?[]:e?b=b||[]:h=h||[],f,!!e,p,o,e&&p?function(e){return(0,i.A)(e)===t}:c)}}},m(8,0),m(0,0),m(8,1),m(0,1),p(h),p(b),d=f,x||k(t),{e:d,get c(){var r=[];return x&&[k(t=z(t,[e],a,t.name,5,r)),S(r,1)]}}}},2559:(t,e,r)=>{"use strict";function o(t,e,r){if("function"==typeof t?t===e:t.has(e))return arguments.length<3?e:r;throw new TypeError("Private element is not present on this object")}r.d(e,{A:()=>o})},6902:(t,e,r)=>{"use strict";r.d(e,{A:()=>i});var o=r(7545);function i(t){if(Object(t)!==t)throw TypeError("right-hand side of 'in' should be an object, got "+(null!==t?(0,o.A)(t):"null"));return t}},2016:(t,e,r)=>{"use strict";function o(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}r.d(e,{A:()=>o})},829:(t,e,r)=>{"use strict";r.d(e,{A:()=>i});var o=r(2559);function i(t,e){return t.get((0,o.A)(t,e))}},918:(t,e,r)=>{"use strict";r.d(e,{A:()=>i});var o=r(2016);function i(t,e,r){(0,o.A)(t,e),e.set(t,r)}},6121:(t,e,r)=>{"use strict";r.d(e,{A:()=>i});var o=r(2559);function i(t,e,r){return t.set((0,o.A)(t,e),r),r}},1369:(t,e,r)=>{"use strict";r.d(e,{A:()=>i});var o=r(7545);function i(t){var e=function(t,e){if("object"!=(0,o.A)(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var i=r.call(t,"string");if("object"!=(0,o.A)(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==(0,o.A)(e)?e:e+""}},7545:(t,e,r)=>{"use strict";function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}r.d(e,{A:()=>o})},4612:(t,e,r)=>{"use strict";r.d(e,{G:()=>o});class o{constructor(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"brick-next-";this.storage=t,this.prefix=e}setItem(t,e){this.storage.setItem(this.prefix+t,JSON.stringify(e))}getItem(t){return JSON.parse(this.storage.getItem(this.prefix+t))}removeItem(t){return this.storage.removeItem(this.prefix+t)}clear(){return this.storage.clear()}}},7290:(t,e,r)=>{"use strict";function o(t){let e;const r=()=>cancelAnimationFrame(e),o=function(){for(var o=arguments.length,i=new Array(o),n=0;n<o;n++)i[n]=arguments[n];e&&r(),e=requestAnimationFrame((()=>{t(...i)}))};return o.cancel=r,o}r.d(e,{G:()=>o})}}]);
//# sourceMappingURL=eo-resizable-box.55608236.js.map