"use strict";(self.webpackChunk_next_bricks_containers=self.webpackChunk_next_bricks_containers||[]).push([[974,628],{8862:(e,t,r)=>{r.r(t),r.d(t,{MicroView:()=>f});var n,i,a,o,c,s,l,u,f,p=r(5866),d=r(6234),v=r(3395),h=r(6171),g=r(381),m=r(687),w=r(2604),y=r(8657),b=r.n(y),Z=r(1218),E=r(3105),T=r(8530),{defineElement:k,property:j}=(0,Z.createDecorators)(),x=(0,E.wrapBrick)("eo-page-title");i=k("eo-micro-view",{styleTexts:[T.Z],alias:["containers.micro-view"]}),a=j(),c=j();var S=new WeakMap,z=new WeakMap,A=new WeakSet;class N extends E.ReactNextElement{constructor(){super(...arguments),(0,p.Z)(this,A),(0,v.Z)(this,S,{writable:!0,value:(l(this),o(this))}),(0,v.Z)(this,z,{writable:!0,value:s(this)}),(0,d.Z)(this,"renderCallback",(()=>{var e=(0,h.Z)(this,A,P).call(this,"slot[name='toolbar']");null==e||e.addEventListener("slotchange",(()=>{this.hasToolbar=e.assignedElements().length>0}))}))}get pageTitle(){return(0,m.Z)(this,S)}set pageTitle(e){(0,g.Z)(this,S,e)}get hasToolbar(){return(0,m.Z)(this,z)}set hasToolbar(e){(0,g.Z)(this,z,e)}render(){return b().createElement(_,{pageTitle:this.pageTitle,callback:this.renderCallback})}}function P(e){var t;return null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector(e)}function _(e){var{pageTitle:t,callback:r}=e;return b().createElement("div",{className:"micro-view-wrapper",ref:r},b().createElement("div",{className:"header"},t&&b().createElement("div",{className:"page-title"},b().createElement(x,{pageTitle:t})),b().createElement("div",{className:"toolbar"},b().createElement("slot",{name:"toolbar"}))),b().createElement("div",{className:"body"},b().createElement("slot",null)))}u=N,({e:[o,s,l],c:[f,n]}=(0,w.Z)(u,[[a,1,"pageTitle"],[c,1,"hasToolbar"]],[i])),n()},8530:(e,t,r)=>{r.d(t,{Z:()=>c});var n=r(9601),i=r.n(n),a=r(2609),o=r.n(a)()(i());o.push([e.id,":host([has-toolbar]) .micro-view-wrapper{padding-top:var(--page-title-margin-top)}:host([has-toolbar]) .header{margin:9px 0}.micro-view-wrapper{padding:var(--page-padding)}.header{display:flex;justify-content:space-between;align-items:center}.page-title{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:var(--page-title-font-size);font-weight:var(--page-title-font-weight);line-height:32px}.toolbar{display:flex;justify-content:flex-end}",""]);const c=o.toString()},2609:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r="",n=void 0!==t[5];return t[4]&&(r+="@supports (".concat(t[4],") {")),t[2]&&(r+="@media ".concat(t[2]," {")),n&&(r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),r+=e(t),n&&(r+="}"),t[2]&&(r+="}"),t[4]&&(r+="}"),r})).join("")},t.i=function(e,r,n,i,a){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(n)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(o[s]=!0)}for(var l=0;l<e.length;l++){var u=[].concat(e[l]);n&&o[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),r&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=r):u[2]=r),i&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=i):u[4]="".concat(i)),t.push(u))}},t}},9601:e=>{e.exports=function(e){return e[1]}},2604:(e,t,r)=>{r.d(t,{Z:()=>h});var n=r(6522),i=r(1815);function a(e,t){return function(r){(function(e,t){if(e.v)throw new Error("attempted to call addInitializer after decoration was finished")})(t),s(r,"An initializer"),e.push(r)}}function o(e,t){if(!e(t))throw new TypeError("Attempted to access private element on non-instance")}function c(e,t,r,n,i,c,s,l,u,f){var p;switch(c){case 1:p="accessor";break;case 2:p="method";break;case 3:p="getter";break;case 4:p="setter";break;default:p="field"}var d,v,h={kind:p,name:l?"#"+r:r,static:s,private:l},g={v:!1};if(0!==c&&(h.addInitializer=a(i,g)),l||0!==c&&2!==c)if(2===c)d=function(e){return o(f,e),n.value};else{var m=0===c||1===c;(m||3===c)&&(d=l?function(e){return o(f,e),n.get.call(e)}:function(e){return n.get.call(e)}),(m||4===c)&&(v=l?function(e,t){o(f,e),n.set.call(e,t)}:function(e,t){n.set.call(e,t)})}else d=function(e){return e[r]},0===c&&(v=function(e,t){e[r]=t});var w=l?f.bind():function(e){return r in e};h.access=d&&v?{get:d,set:v,has:w}:d?{get:d,has:w}:{set:v,has:w};try{return e.call(t,u,h)}finally{g.v=!0}}function s(e,t){if("function"!=typeof e)throw new TypeError(t+" must be a function")}function l(e,t){var r=(0,n.Z)(t);if(1===e){if("object"!==r||null===t)throw new TypeError("accessor decorators must return an object with get, set, or init properties or void 0");void 0!==t.get&&s(t.get,"accessor.get"),void 0!==t.set&&s(t.set,"accessor.set"),void 0!==t.init&&s(t.init,"accessor.init")}else if("function"!==r)throw new TypeError((0===e?"field":5===e?"class":"method")+" decorators must return a function or void 0")}function u(e){return function(){return e(this)}}function f(e){return function(t){e(this,t)}}function p(e,t,r,n,i,a,o,s,p,d){var v,h,g,m,w,y,b=r[0];n||Array.isArray(b)||(b=[b]),s?v=0===a||1===a?{get:u(r[3]),set:f(r[4])}:3===a?{get:r[3]}:4===a?{set:r[3]}:{value:r[3]}:0!==a&&(v=Object.getOwnPropertyDescriptor(t,i)),1===a?g={get:v.get,set:v.set}:2===a?g=v.value:3===a?g=v.get:4===a&&(g=v.set);for(var Z=n?2:1,E=b.length-1;E>=0;E-=Z){var T;void 0!==(m=c(b[E],n?b[E-1]:void 0,i,v,p,a,o,s,g,d))&&(l(a,m),0===a?T=m:1===a?(T=m.init,w=m.get||g.get,y=m.set||g.set,g={get:w,set:y}):g=m,void 0!==T&&(void 0===h?h=T:"function"==typeof h?h=[h,T]:h.push(T)))}if(0===a||1===a){if(void 0===h)h=function(e,t){return t};else if("function"!=typeof h){var k=h;h=function(e,t){for(var r=t,n=k.length-1;n>=0;n--)r=k[n].call(e,r);return r}}else{var j=h;h=function(e,t){return j.call(e,t)}}e.push(h)}0!==a&&(1===a?(v.get=g.get,v.set=g.set):2===a?v.value=g:3===a?v.get=g:4===a&&(v.set=g),s?1===a?(e.push((function(e,t){return g.get.call(e,t)})),e.push((function(e,t){return g.set.call(e,t)}))):2===a?e.push(g):e.push((function(e,t){return g.call(e,t)})):Object.defineProperty(t,i,v))}function d(e,t,r){for(var n,a,o,c=[],s=new Map,l=new Map,u=0;u<t.length;u++){var f=t[u];if(Array.isArray(f)){var d,h,g=f[1],m=f[2],w=f.length>3,y=16&g,b=!!(8&g),Z=r;if(g&=7,b?(d=e,0!==g&&(h=a=a||[]),w&&!o&&(o=function(t){return(0,i.Z)(t)===e}),Z=o):(d=e.prototype,0!==g&&(h=n=n||[])),0!==g&&!w){var E=b?l:s,T=E.get(m)||0;if(!0===T||3===T&&4!==g||4===T&&3!==g)throw new Error("Attempted to decorate a public method/accessor that has the same name as a previously decorated public method/accessor. This is not currently supported by the decorators plugin. Property name was: "+m);E.set(m,!(!T&&g>2)||g)}p(c,d,f,y,m,g,b,w,h,Z)}}return v(c,n),v(c,a),c}function v(e,t){t&&e.push((function(e){for(var r=0;r<t.length;r++)t[r].call(e);return e}))}function h(e,t,r,n,i){return{e:d(e,t,i),get c(){return function(e,t,r){if(t.length){for(var n=[],i=e,o=e.name,c=r?2:1,s=t.length-1;s>=0;s-=c){var u={v:!1};try{var f=t[s].call(r?t[s-1]:void 0,i,{kind:"class",name:o,addInitializer:a(n,u)})}finally{u.v=!0}void 0!==f&&(l(5,f),i=f)}return[i,function(){for(var e=0;e<n.length;e++)n[e].call(i)}]}}(e,r,n)}}}},1815:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(6522);function i(e){if(Object(e)!==e)throw TypeError("right-hand side of 'in' should be an object, got "+(null!==e?(0,n.Z)(e):"null"));return e}},5863:(e,t,r)=>{function n(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}r.d(t,{Z:()=>n})},175:(e,t,r)=>{function n(e,t,r){if(!t.has(e))throw new TypeError("attempted to "+r+" private field on non-instance");return t.get(e)}r.d(t,{Z:()=>n})},687:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(175);function i(e,t){return function(e,t){return t.get?t.get.call(e):t.value}(e,(0,n.Z)(e,t,"get"))}},3395:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(5863);function i(e,t,r){(0,n.Z)(e,t),t.set(e,r)}},381:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(175);function i(e,t,r){return function(e,t,r){if(t.set)t.set.call(e,r);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=r}}(e,(0,n.Z)(e,t,"set"),r),r}},6171:(e,t,r)=>{function n(e,t,r){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return r}r.d(t,{Z:()=>n})},5866:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(5863);function i(e,t){(0,n.Z)(e,t),t.add(e)}},6234:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(6522);function i(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==(0,n.Z)(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,"string");if("object"!==(0,n.Z)(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===(0,n.Z)(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},6522:(e,t,r)=>{function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}r.d(t,{Z:()=>n})}}]);
//# sourceMappingURL=eo-micro-view.82dce3dd.js.map