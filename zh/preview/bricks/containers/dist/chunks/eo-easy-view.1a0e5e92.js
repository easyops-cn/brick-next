"use strict";(globalThis.webpackChunk_next_bricks_containers=globalThis.webpackChunk_next_bricks_containers||[]).push([[2340,7620,2052],{3799:(t,e,r)=>{r.r(e),r.d(e,{EasyView:()=>z,EasyViewElement:()=>C});var n,i=r(918),o=r(6121),a=r(829),s=r(2740),l=r(8769),c=r.n(l),u=r(4799),d=r(8610),f=r(5026);let h,p,m,y,g,A,v,b,w,T,j,E,S;const{defineElement:k,property:x}=(0,u.createDecorators)();let C;var R=new WeakMap,M=new WeakMap,O=new WeakMap,B=new WeakMap,P=new WeakMap,W=new WeakMap;class _ extends d.ReactNextElement{constructor(){super(...arguments),(0,i.A)(this,R,p(this)),(0,i.A)(this,M,(m(this),y(this))),(0,i.A)(this,O,(g(this),A(this))),(0,i.A)(this,B,(v(this),b(this))),(0,i.A)(this,P,(w(this),T(this))),(0,i.A)(this,W,(j(this),E(this))),S(this)}get gridAreas(){return(0,a.A)(R,this)}set gridAreas(t){(0,o.A)(R,this,t)}get gridTemplateAreas(){return(0,a.A)(M,this)}set gridTemplateAreas(t){(0,o.A)(M,this,t)}get gridTemplateColumns(){return(0,a.A)(O,this)}set gridTemplateColumns(t){(0,o.A)(O,this,t)}get gridTemplateRows(){return(0,a.A)(B,this)}set gridTemplateRows(t){(0,o.A)(B,this,t)}get containerStyle(){return(0,a.A)(P,this)}set containerStyle(t){(0,o.A)(P,this,t)}get styleByAreas(){return(0,a.A)(W,this)}set styleByAreas(t){(0,o.A)(W,this,t)}render(){return c().createElement(z,{gridAreas:this.gridAreas,gridTemplateAreas:this.gridTemplateAreas,gridTemplateColumns:this.gridTemplateColumns,gridTemplateRows:this.gridTemplateRows,containerStyle:this.containerStyle,styleByAreas:this.styleByAreas})}}function z(t){let{gridAreas:e,gridTemplateAreas:r,gridTemplateColumns:n,gridTemplateRows:i,containerStyle:o,styleByAreas:a}=t;const s=(0,l.useMemo)((()=>{var t;return e?Object.keys(e):Array.from(new Set((null==r||null===(t=r.flat)||void 0===t?void 0:t.call(r))??[])).filter((t=>"."!==t))}),[e,r]);return c().createElement("div",{style:{display:"grid",gridTemplateAreas:null==r?void 0:r.map((t=>`"${t.join(" ")}"`)).join(" "),gridTemplateColumns:Array.isArray(n)?n.join(" "):n,gridTemplateRows:Array.isArray(i)?i.join(" "):i,...o}},s.map((t=>c().createElement("div",{key:t,style:{gridArea:e?e[t].join(" / "):t,...null==a?void 0:a[t]}},c().createElement("slot",{name:t})))))}n=_,({e:[p,m,y,g,A,v,b,w,T,j,E,S],c:[C,h]}=(0,s.A)(n,[k("eo-easy-view",{styleTexts:[f.A],alias:["containers.easy-view"]})],[[x({attribute:!1}),1,"gridAreas"],[x({attribute:!1}),1,"gridTemplateAreas"],[x({attribute:!1}),1,"gridTemplateColumns"],[x({attribute:!1}),1,"gridTemplateRows"],[x({attribute:!1}),1,"containerStyle"],[x({attribute:!1}),1,"styleByAreas"]],0,void 0,d.ReactNextElement)),h()},5026:(t,e,r)=>{r.d(e,{A:()=>s});var n=r(6758),i=r.n(n),o=r(935),a=r.n(o)()(i());a.push([t.id,":host{display:block}:host([hidden]){display:none}*,\n*::before,\n*::after{box-sizing:border-box}",""]);const s=a.toString()},935:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var r="",n=void 0!==e[5];return e[4]&&(r+="@supports (".concat(e[4],") {")),e[2]&&(r+="@media ".concat(e[2]," {")),n&&(r+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),r+=t(e),n&&(r+="}"),e[2]&&(r+="}"),e[4]&&(r+="}"),r})).join("")},e.i=function(t,r,n,i,o){"string"==typeof t&&(t=[[null,t,void 0]]);var a={};if(n)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(a[l]=!0)}for(var c=0;c<t.length;c++){var u=[].concat(t[c]);n&&a[u[0]]||(void 0!==o&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=o),r&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=r):u[2]=r),i&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=i):u[4]="".concat(i)),e.push(u))}},e}},6758:t=>{t.exports=function(t){return t[1]}},2740:(t,e,r)=>{r.d(e,{A:()=>s});var n=r(7545),i=r(6902);function o(t,e,r){"symbol"==(0,n.A)(e)&&(e=(e=e.description)?"["+e+"]":"");try{Object.defineProperty(t,"name",{configurable:!0,value:r?r+" "+e:e})}catch(t){}return t}var a=r(1369);function s(t,e,r,s,l,c){var u,d,f,h,p,m,y,g=Symbol.metadata||Symbol.for("Symbol.metadata"),A=Object.defineProperty,v=Object.create,b=[v(null),v(null)],w=e.length;function T(e,r,n){return function(i,o){r&&(o=i,i=t);for(var a=0;a<e.length;a++)o=e[a].apply(i,n?[o]:[]);return n?o:i}}function j(t,e,r,n){if("function"!=typeof t&&(n||void 0!==t))throw new TypeError(e+" must "+(r||"be")+" a function"+(n?"":" or undefined"));return t}function E(t,e,r,i,a,s,l,c,f,h,p){function m(t){if(!p(t))throw new TypeError("Attempted to access private element on non-instance")}var y=[].concat(e[0]),g=e[3],v=!l,w=1===a,E=3===a,S=4===a,k=2===a;function x(e,r,n){return function(i,o){return r&&(o=i,i=t),n&&n(i),C[e].call(i,o)}}if(!v){var C={},R=[],M=E?"get":S||w?"set":"value";if(f?(h||w?C={get:o((function(){return g(this)}),i,"get"),set:function(t){e[4](this,t)}}:C[M]=g,h||o(C[M],i,k?"":M)):h||(C=Object.getOwnPropertyDescriptor(t,i)),!h&&!f){if((d=b[+c][i])&&7!=(d^a))throw Error("Decorating two elements with the same name ("+C[M].name+") is not supported yet");b[+c][i]=a<3?1:a}}for(var O=t,B=y.length-1;B>=0;B-=r?2:1){var P=j(y[B],"A decorator","be",!0),W=r?y[B-1]:void 0,_={},z={kind:["field","accessor","method","getter","setter","class"][a],name:i,metadata:u,addInitializer:function(t,e){if(t.v)throw Error("attempted to call addInitializer after decoration was finished");j(e,"An initializer","be",!0),s.push(e)}.bind(null,_)};if(v)d=P.call(W,O,z),_.v=1,j(d,"class decorators","return")&&(O=d);else if(z.static=c,z.private=f,d=z.access={has:f?p.bind():function(t){return i in t}},S||(d.get=f?k?function(t){return m(t),C.value}:x("get",0,m):function(t){return t[i]}),k||E||(d.set=f?x("set",0,m):function(t,e){t[i]=e}),O=P.call(W,w?{get:C.get,set:C.set}:C[M],z),_.v=1,w){if("object"==(0,n.A)(O)&&O)(d=j(O.get,"accessor.get"))&&(C.get=d),(d=j(O.set,"accessor.set"))&&(C.set=d),(d=j(O.init,"accessor.init"))&&R.unshift(d);else if(void 0!==O)throw new TypeError("accessor decorators must return an object with get, set, or init properties or undefined")}else j(O,(h?"field":"method")+" decorators","return")&&(h?R.unshift(O):C[M]=O)}return a<2&&l.push(T(R,c,1),T(s,c,0)),h||v||(f?w?l.splice(-1,0,x("get",c),x("set",c)):l.push(k?C[M]:j.call.bind(C[M])):A(t,i,C)),O}function S(t){return A(t,g,{configurable:!0,enumerable:!0,value:u})}return void 0!==c&&(u=c[g]),u=v(null==u?null:u),p=[],m=function(t){t&&p.push(T(t))},y=function(e,n){for(var o=0;o<r.length;o++){var s=r[o],c=s[1],u=7&c;if((8&c)==e&&!u==n){var d=s[2],m=!!s[3],y=16&c;E(e?t:t.prototype,s,y,m?"#"+d:(0,a.A)(d),u,u<2?[]:e?h=h||[]:f=f||[],p,!!e,m,n,e&&m?function(e){return(0,i.A)(e)===t}:l)}}},y(8,0),y(0,0),y(8,1),y(0,1),m(f),m(h),d=p,w||S(t),{e:d,get c(){var r=[];return w&&[S(t=E(t,[e],s,t.name,5,r)),T(r,1)]}}}},2559:(t,e,r)=>{function n(t,e,r){if("function"==typeof t?t===e:t.has(e))return arguments.length<3?e:r;throw new TypeError("Private element is not present on this object")}r.d(e,{A:()=>n})},6902:(t,e,r)=>{r.d(e,{A:()=>i});var n=r(7545);function i(t){if(Object(t)!==t)throw TypeError("right-hand side of 'in' should be an object, got "+(null!==t?(0,n.A)(t):"null"));return t}},2016:(t,e,r)=>{function n(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}r.d(e,{A:()=>n})},829:(t,e,r)=>{r.d(e,{A:()=>i});var n=r(2559);function i(t,e){return t.get((0,n.A)(t,e))}},918:(t,e,r)=>{r.d(e,{A:()=>i});var n=r(2016);function i(t,e,r){(0,n.A)(t,e),e.set(t,r)}},6121:(t,e,r)=>{r.d(e,{A:()=>i});var n=r(2559);function i(t,e,r){return t.set((0,n.A)(t,e),r),r}},1369:(t,e,r)=>{r.d(e,{A:()=>i});var n=r(7545);function i(t){var e=function(t,e){if("object"!=(0,n.A)(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var i=r.call(t,"string");if("object"!=(0,n.A)(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==(0,n.A)(e)?e:e+""}},7545:(t,e,r)=>{function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}r.d(e,{A:()=>n})}}]);
//# sourceMappingURL=eo-easy-view.1a0e5e92.js.map