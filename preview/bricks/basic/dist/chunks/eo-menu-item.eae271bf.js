/*! For license information please see eo-menu-item.eae271bf.js.LICENSE.txt */
(globalThis.webpackChunk_next_bricks_basic=globalThis.webpackChunk_next_bricks_basic||[]).push([[5239,2052],{7836:(t,e,n)=>{"use strict";n.r(e),n.d(e,{MenuItem:()=>k});var r,i=n(9575),o=n(918),a=n(6121),c=n(829),s=n(2740),u=n(8769),l=n.n(u),f=n(4799),d=n(8610),p=n(983),h=n(3373),v=n.n(h);let m,b,y,g,A,w,j;const{defineElement:S,property:E}=(0,f.createDecorators)(),x=(0,d.wrapBrick)("eo-icon");let k;var O=new WeakMap,T=new WeakMap,P=new WeakMap;class _ extends d.ReactNextElement{constructor(){super(...arguments),(0,o.A)(this,O,b(this)),(0,o.A)(this,T,(y(this),g(this))),(0,o.A)(this,P,(A(this),w(this))),j(this)}get icon(){return(0,c.A)(O,this)}set icon(t){(0,a.A)(O,this,t)}get active(){return(0,c.A)(T,this)}set active(t){(0,a.A)(T,this,t)}get disabled(){return(0,c.A)(P,this)}set disabled(t){(0,a.A)(P,this,t)}render(){return l().createElement(z,{icon:this.icon,active:this.active,disabled:this.disabled})}}function z(t){let{icon:e,disabled:n,active:r}=t;return l().createElement("div",{part:"menu-item",className:v()("menu-item",{disabled:n,active:r}),onClick:t=>{n&&(t.stopPropagation(),t.preventDefault())}},e&&l().createElement(x,(0,i.A)({part:"menu-item-icon",className:"menu-item-icon"},e)),l().createElement("slot",null))}r=_,({e:[b,y,g,A,w,j],c:[k,m]}=(0,s.A)(r,[S("eo-menu-item",{styleTexts:[p.A],alias:["basic.general-menu-item"]})],[[E({attribute:!1}),1,"icon"],[E({type:Boolean}),1,"active"],[E({type:Boolean}),1,"disabled"]],0,void 0,d.ReactNextElement)),m()},983:(t,e,n)=>{"use strict";n.d(e,{A:()=>c});var r=n(6758),i=n.n(r),o=n(935),a=n.n(o)()(i());a.push([t.id,":host{display:block}:host([hidden]){display:none}.menu-item{display:flex;justify-items:center;align-items:center;cursor:pointer}.menu-item.disabled{cursor:not-allowed;color:var(--text-color-disabled)}.menu-item-icon{margin-right:8px}",""]);const c=a.toString()},935:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,i,o){"string"==typeof t&&(t=[[null,t,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var u=0;u<t.length;u++){var l=[].concat(t[u]);r&&a[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),i&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=i):l[4]="".concat(i)),e.push(l))}},e}},6758:t=>{"use strict";t.exports=function(t){return t[1]}},3373:(t,e)=>{var n;!function(){"use strict";var r={}.hasOwnProperty;function i(){for(var t="",e=0;e<arguments.length;e++){var n=arguments[e];n&&(t=a(t,o(n)))}return t}function o(t){if("string"==typeof t||"number"==typeof t)return t;if("object"!=typeof t)return"";if(Array.isArray(t))return i.apply(null,t);if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]"))return t.toString();var e="";for(var n in t)r.call(t,n)&&t[n]&&(e=a(e,n));return e}function a(t,e){return e?t?t+" "+e:t+e:t}t.exports?(i.default=i,t.exports=i):void 0===(n=function(){return i}.apply(e,[]))||(t.exports=n)}()},2740:(t,e,n)=>{"use strict";n.d(e,{A:()=>c});var r=n(7545),i=n(6902);function o(t,e,n){"symbol"==(0,r.A)(e)&&(e=(e=e.description)?"["+e+"]":"");try{Object.defineProperty(t,"name",{configurable:!0,value:n?n+" "+e:e})}catch(t){}return t}var a=n(1369);function c(t,e,n,c,s,u){var l,f,d,p,h,v,m,b=Symbol.metadata||Symbol.for("Symbol.metadata"),y=Object.defineProperty,g=Object.create,A=[g(null),g(null)],w=e.length;function j(e,n,r){return function(i,o){n&&(o=i,i=t);for(var a=0;a<e.length;a++)o=e[a].apply(i,r?[o]:[]);return r?o:i}}function S(t,e,n,r){if("function"!=typeof t&&(r||void 0!==t))throw new TypeError(e+" must "+(n||"be")+" a function"+(r?"":" or undefined"));return t}function E(t,e,n,i,a,c,s,u,d,p,h){function v(t){if(!h(t))throw new TypeError("Attempted to access private element on non-instance")}var m=[].concat(e[0]),b=e[3],g=!s,w=1===a,E=3===a,x=4===a,k=2===a;function O(e,n,r){return function(i,o){return n&&(o=i,i=t),r&&r(i),T[e].call(i,o)}}if(!g){var T={},P=[],_=E?"get":x||w?"set":"value";if(d?(p||w?T={get:o((function(){return b(this)}),i,"get"),set:function(t){e[4](this,t)}}:T[_]=b,p||o(T[_],i,k?"":_)):p||(T=Object.getOwnPropertyDescriptor(t,i)),!p&&!d){if((f=A[+u][i])&&7!=(f^a))throw Error("Decorating two elements with the same name ("+T[_].name+") is not supported yet");A[+u][i]=a<3?1:a}}for(var z=t,C=m.length-1;C>=0;C-=n?2:1){var D=S(m[C],"A decorator","be",!0),M=n?m[C-1]:void 0,N={},B={kind:["field","accessor","method","getter","setter","class"][a],name:i,metadata:l,addInitializer:function(t,e){if(t.v)throw Error("attempted to call addInitializer after decoration was finished");S(e,"An initializer","be",!0),c.push(e)}.bind(null,N)};if(g)f=D.call(M,z,B),N.v=1,S(f,"class decorators","return")&&(z=f);else if(B.static=u,B.private=d,f=B.access={has:d?h.bind():function(t){return i in t}},x||(f.get=d?k?function(t){return v(t),T.value}:O("get",0,v):function(t){return t[i]}),k||E||(f.set=d?O("set",0,v):function(t,e){t[i]=e}),z=D.call(M,w?{get:T.get,set:T.set}:T[_],B),N.v=1,w){if("object"==(0,r.A)(z)&&z)(f=S(z.get,"accessor.get"))&&(T.get=f),(f=S(z.set,"accessor.set"))&&(T.set=f),(f=S(z.init,"accessor.init"))&&P.unshift(f);else if(void 0!==z)throw new TypeError("accessor decorators must return an object with get, set, or init properties or undefined")}else S(z,(p?"field":"method")+" decorators","return")&&(p?P.unshift(z):T[_]=z)}return a<2&&s.push(j(P,u,1),j(c,u,0)),p||g||(d?w?s.splice(-1,0,O("get",u),O("set",u)):s.push(k?T[_]:S.call.bind(T[_])):y(t,i,T)),z}function x(t){return y(t,b,{configurable:!0,enumerable:!0,value:l})}return void 0!==u&&(l=u[b]),l=g(null==l?null:l),h=[],v=function(t){t&&h.push(j(t))},m=function(e,r){for(var o=0;o<n.length;o++){var c=n[o],u=c[1],l=7&u;if((8&u)==e&&!l==r){var f=c[2],v=!!c[3],m=16&u;E(e?t:t.prototype,c,m,v?"#"+f:(0,a.A)(f),l,l<2?[]:e?p=p||[]:d=d||[],h,!!e,v,r,e&&v?function(e){return(0,i.A)(e)===t}:s)}}},m(8,0),m(0,0),m(8,1),m(0,1),v(d),v(p),f=h,w||x(t),{e:f,get c(){var n=[];return w&&[x(t=E(t,[e],c,t.name,5,n)),j(n,1)]}}}},2559:(t,e,n)=>{"use strict";function r(t,e,n){if("function"==typeof t?t===e:t.has(e))return arguments.length<3?e:n;throw new TypeError("Private element is not present on this object")}n.d(e,{A:()=>r})},6902:(t,e,n)=>{"use strict";n.d(e,{A:()=>i});var r=n(7545);function i(t){if(Object(t)!==t)throw TypeError("right-hand side of 'in' should be an object, got "+(null!==t?(0,r.A)(t):"null"));return t}},2016:(t,e,n)=>{"use strict";function r(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}n.d(e,{A:()=>r})},829:(t,e,n)=>{"use strict";n.d(e,{A:()=>i});var r=n(2559);function i(t,e){return t.get((0,r.A)(t,e))}},918:(t,e,n)=>{"use strict";n.d(e,{A:()=>i});var r=n(2016);function i(t,e,n){(0,r.A)(t,e),e.set(t,n)}},6121:(t,e,n)=>{"use strict";n.d(e,{A:()=>i});var r=n(2559);function i(t,e,n){return t.set((0,r.A)(t,e),n),n}},9575:(t,e,n)=>{"use strict";function r(){return r=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},r.apply(this,arguments)}n.d(e,{A:()=>r})},1369:(t,e,n)=>{"use strict";n.d(e,{A:()=>i});var r=n(7545);function i(t){var e=function(t,e){if("object"!=(0,r.A)(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,"string");if("object"!=(0,r.A)(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==(0,r.A)(e)?e:e+""}},7545:(t,e,n)=>{"use strict";function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}n.d(e,{A:()=>r})}}]);
//# sourceMappingURL=eo-menu-item.eae271bf.js.map