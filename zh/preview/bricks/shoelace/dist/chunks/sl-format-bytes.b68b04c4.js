"use strict";(self.webpackChunk_next_bricks_shoelace=self.webpackChunk_next_bricks_shoelace||[]).push([[5810],{2480:(e,t,o)=>{o.r(t),o(2750),o(5517)},5517:(e,t,o)=>{o(2969),o(3467);var n=o(4124);function r(e){document.documentElement.classList["dark"===e||"dark-v2"===e?"add":"remove"]("sl-theme-dark")}o(1744),(0,n.t)(o.p),r(document.documentElement.dataset.theme),window.addEventListener("theme.change",(e=>{r(e.detail)}))},738:(e,t,o)=>{o.d(t,{Z:()=>l});var n=o(9601),r=o.n(n),s=o(2609),a=o.n(s)()(r());a.push([e.id,":root,\n.sl-theme-dark{--sl-z-index-drawer:1000;--sl-z-index-dialog:1000;--sl-z-index-dropdown:1050;--sl-z-index-toast:1000;--sl-z-index-tooltip:1070}.sl-toast-stack{width:100%;left:0;right:auto;overflow:initial;pointer-events:none}.sl-toast-stack > sl-alert{pointer-events:all}",""]);const l=a},1744:(e,t,o)=>{var n=o(6062),r=o.n(n),s=o(4036),a=o.n(s),l=o(6793),i=o.n(l),d=o(7892),u=o.n(d),c=o(1173),m=o.n(c),h=o(2464),g=o.n(h),p=o(738),v={};v.styleTagTransform=g(),v.setAttributes=u(),v.insert=i().bind(null,"head"),v.domAPI=a(),v.insertStyleElement=m(),r()(p.Z,v),p.Z&&p.Z.locals&&p.Z.locals},8179:(e,t,o)=>{o.d(t,{P5:()=>d,Ve:()=>c});const n=new Set,r=new MutationObserver(u),s=new Map;let a,l=document.documentElement.dir||"ltr",i=document.documentElement.lang||navigator.language;function d(...e){e.map((e=>{const t=e.$code.toLowerCase();s.has(t)?s.set(t,Object.assign(Object.assign({},s.get(t)),e)):s.set(t,e),a||(a=e)})),u()}function u(){l=document.documentElement.dir||"ltr",i=document.documentElement.lang||navigator.language,[...n.keys()].map((e=>{"function"==typeof e.requestUpdate&&e.requestUpdate()}))}r.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});class c{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){n.add(this.host)}hostDisconnected(){n.delete(this.host)}dir(){return`${this.host.dir||l}`.toLowerCase()}lang(){return`${this.host.lang||i}`.toLowerCase()}getTranslationData(e){var t,o;const n=new Intl.Locale(e),r=null==n?void 0:n.language.toLowerCase(),a=null!==(o=null===(t=null==n?void 0:n.region)||void 0===t?void 0:t.toLowerCase())&&void 0!==o?o:"";return{locale:n,language:r,region:a,primary:s.get(`${r}-${a}`),secondary:s.get(r)}}exists(e,t){var o;const{primary:n,secondary:r}=this.getTranslationData(null!==(o=t.lang)&&void 0!==o?o:this.lang());return t=Object.assign({includeFallback:!1},t),!!(n&&n[e]||r&&r[e]||t.includeFallback&&a&&a[e])}term(e,...t){const{primary:o,secondary:n}=this.getTranslationData(this.lang());let r;if(o&&o[e])r=o[e];else if(n&&n[e])r=n[e];else{if(!a||!a[e])return console.error(`No translation found for: ${String(e)}`),String(e);r=a[e]}return"function"==typeof r?r(...t):r}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,o){return new Intl.RelativeTimeFormat(this.lang(),o).format(e,t)}}},3385:(e,t,o)=>{o.d(t,{V:()=>r});var n=o(8179),r=class extends n.Ve{}},8513:(e,t,o)=>{(0,o(8179).P5)({$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:e=>0===e?"No options selected":1===e?"1 option selected":`${e} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:e=>`Slide ${e}`,toggleColorFormat:"Toggle color format"})},2750:(e,t,o)=>{var n=o(3385),r=o(1465),s=o(7979),a=o(9900),l=class extends r.P{constructor(){super(...arguments),this.localize=new n.V(this),this.value=0,this.unit="byte",this.display="short"}render(){if(isNaN(this.value))return"";const e="bit"===this.unit?["","kilo","mega","giga","tera"]:["","kilo","mega","giga","tera","peta"],t=Math.max(0,Math.min(Math.floor(Math.log10(this.value)/3),e.length-1)),o=e[t]+this.unit,n=parseFloat((this.value/Math.pow(1e3,t)).toPrecision(3));return this.localize.number(n,{style:"unit",unit:o,unitDisplay:this.display})}};(0,s.u2)([(0,a.Cb)({type:Number})],l.prototype,"value",2),(0,s.u2)([(0,a.Cb)()],l.prototype,"unit",2),(0,s.u2)([(0,a.Cb)()],l.prototype,"display",2),l.define("sl-format-bytes"),o(8513)}}]);
//# sourceMappingURL=sl-format-bytes.b68b04c4.js.map