"use strict";(globalThis.webpackChunk_next_bricks_form=globalThis.webpackChunk_next_bricks_form||[]).push([[4741],{4741:(i,e,r)=>{r.r(e),r.d(e,{pipes:()=>t,utils:()=>n});var n={};r.r(n),r.d(n,{convertUnitValueByPrecision:()=>Gi,formatUnitValue:()=>Li});var t={};function s(i,e){return i+e}function a(i){return"0"!==i&&Boolean(i)}r.r(t),r.d(t,{add:()=>s,bool:()=>o,boolean:()=>a,cmdbInstanceShowName:()=>d,countBy:()=>c,datetime:()=>p,deltaTime:()=>v,divide:()=>B,equal:()=>m,find:()=>g,findIndex:()=>h,findLast:()=>M,findLastIndex:()=>w,get:()=>k,graphTree:()=>P,groupBy:()=>K,groupByToIndex:()=>C,includes:()=>N,join:()=>A,json:()=>x,jsonStringify:()=>j,keyBy:()=>O,map:()=>I,mapToArray:()=>D,mergeArrayByKey:()=>E,multiply:()=>_,not:()=>H,nullish:()=>U,number:()=>Y,parseTimeRange:()=>q,randomString:()=>F,reverse:()=>J,round:()=>ji,slice:()=>W,sort:()=>z,split:()=>V,string:()=>Q,substr:()=>X,substring:()=>Z,subtract:()=>$,ternary:()=>ii,uniq:()=>ei,unitFormat:()=>Ci,yaml:()=>Ai,yamlStringify:()=>xi});var o=a;function d(i){if(Array.isArray(i)){var e=i[0]||"-",r=i.slice(1,i.length).join(",");return r?e+"("+r+")":e}return i}var u=r(1030);function c(i,e){return(0,u.countBy)(i,e)}var l=r(8297),y=r.n(l);function p(i,e){return y()(i).format(e)}function f(i){return"object"==typeof i&&null!==i}function b(i,e){return"number"==typeof i?y()(i):y()(i,e)}function v(i,e,r){if(void 0===e&&(e=!0),void 0===r&&(r="YYYY-MM-DD HH:mm:ss"),!i)return"";if(f(i)&&i.startTime&&i.endTime){var n=b(i.startTime,r),t=b(i.endTime,r);return y().duration(t.diff(n)).humanize(e)}var s=b(f(i)?i.startTime||i.endTime:i,r);return y().duration(s.diff(y()())).humanize(e)}function B(i,e){return i/e}function m(i,e){return(0,u.isEqual)(i,e)}function g(i,e,r){return(0,u.find)(i,e,r)}function h(i,e,r){return(0,u.findIndex)(i,e,r)}function M(i,e,r){return(0,u.findLast)(i,e,r)}function w(i,e,r){return(0,u.findLastIndex)(i,e,r)}function k(i,e,r){return(0,u.get)(i,e,r)}function P(i,e){var r,n;if(!i)return[];var t=null==e?void 0:e.sort,s=(0,u.groupBy)(i.edges,"out"),a=function(e){var r=s[e.instanceId];if((0,u.forEach)(r,(function(r){var n=r.out_name,t=(0,u.find)(i.vertices,["instanceId",r.in]);if(t){var s=a(t);e[n]?e[n].push(s):e[n]=[s]}})),t){var n=(0,u.uniq)((0,u.map)(r,"out_name"));(0,u.forEach)(n,(function(i){(0,u.isEmpty)(e[i])||(e[i]=(0,u.orderBy)(e[i],(function(i){var e;return null!==(e=(0,u.get)(i,t.key))&&void 0!==e?e:-1/0}),-1===t.order?"desc":"asc"))}))}return e};return null!==(n=null===(r=i.topic_vertices)||void 0===r?void 0:r.map((function(i){return a(i)})))&&void 0!==n?n:[]}function K(i,e){return(0,u.groupBy)(i,e)}var S,T,G=function(){return G=Object.assign||function(i){for(var e,r=1,n=arguments.length;r<n;r++)for(var t in e=arguments[r])Object.prototype.hasOwnProperty.call(e,t)&&(i[t]=e[t]);return i},G.apply(this,arguments)};function L(){for(var i=0,e=0,r=arguments.length;e<r;e++)i+=arguments[e].length;var n=Array(i),t=0;for(e=0;e<r;e++)for(var s=arguments[e],a=0,o=s.length;a<o;a++,t++)n[t]=s[a];return n}function C(i,e,r){var n=i;if(!(0,u.isNil)(e)&&!(0,u.isNil)(r)){var t=(0,u.groupBy)(i,e),s=(0,u.keys)(t).sort();n=n.map((function(i){var n=G({},i);return(0,u.set)(n,r,(0,u.indexOf)(s,(0,u.get)(i,e))),n}))}return n}function N(i,e){return i.includes(e)}function A(i,e){return void 0===e&&(e=","),Array.isArray(i)?i.join(e):""}function x(i){if((0,u.isNil)(i))return i;try{return JSON.parse(i)}catch(i){return void console.error(i)}}function j(i,e){void 0===e&&(e=2);try{return JSON.stringify(i,null,e)}catch(i){return void console.error(i)}}function O(i,e){return(0,u.keyBy)(i,e)}function I(i,e){return Array.isArray(i)?i.map((function(i){return(0,u.get)(i,e)})):[]}function D(i,e,r){return"object"==typeof i&&i?Object.entries(i).map((function(i){var n,t=i[0],s=i[1];return(n={})[e]=t,n[r]=s,n})):[]}function E(i,e){return i.reduce((function(i,r){return Object.values((0,u.mergeWith)((0,u.keyBy)(i,e),(0,u.keyBy)(r,e),R))}),[])}function R(i,e){if((0,u.isArray)(i))return i.concat(e)}function _(i,e){return i*e}function H(i){return!i}function U(i,e){return null!=i?i:e}function Y(i){return Number(i)}function q(i){if("now/d"===i)return+y()().startOf("day");if("now/y"===i)return+y()().startOf("year");var e=/^now-(\d+)(\w+)/.exec(i);if(null!==e){var r=e[1],n=e[2];return+y()().subtract(r,n)}return i?+i:+y()()}function F(i,e){i=i>0?i:8,e="string"==typeof e?e:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";for(var r="",n=0;n<i;n++)r+=e.charAt(Math.floor(Math.random()*e.length));return r}function J(i){return Array.isArray(i)?i.slice().reverse():[]}function W(i,e,r){return i.slice(e,r)}function z(i,e){return Array.isArray(i)?(0,u.sortBy)(i,e):[]}function V(i,e){return"string"==typeof i?i.split(e):[]}function Q(i){return null==i?"":String(i)}function X(i,e,r){return"string"==typeof i?i.substr(e,r):""}function Z(i,e,r){return"string"==typeof i?i.substring(e,r):""}function $(i,e){return i-e}function ii(i,e,r){return i?e:r}function ei(i){return(0,u.uniq)(i)}Object.create,Object.create,"function"==typeof SuppressedError&&SuppressedError,function(i){i.Time="time",i.Byte="byte",i.Bibyte="bibyte",i.BitRate="bitRate",i.ByteRate="byteRate"}(S||(S={})),function(i){i.Percent1="percent(1)",i.Percent100="percent(100)"}(T||(T={}));var ri,ni=[T.Percent1,T.Percent100];!function(i){i.Bytes="bytes",i.Kilobytes="kilobytes",i.Megabytes="megabytes",i.Gigabytes="gigabytes",i.Terabytes="terabytes",i.Petabytes="petabytes",i.Bibytes="bibytes",i.Kibibytes="kibibytes",i.Mebibytes="mebibytes",i.Gibibytes="gibibytes",i.Tebibytes="tebibytes",i.Pebibytes="pebibytes",i.b="b",i.B="B",i.KB="KB",i.MB="MB",i.GB="GB"}(ri||(ri={}));var ti,si=[{id:ri.Bytes,alias:["B","bytes(B)"],divisor:1,display:"B"},{id:ri.Kilobytes,alias:["KB","kilobytes(KB)"],divisor:1e3,display:"KB"},{id:ri.Megabytes,alias:["MB","megabytes(MB)"],divisor:Math.pow(1e3,2),display:"MB"},{id:ri.Gigabytes,alias:["GB","gigabytes(GB)"],divisor:Math.pow(1e3,3),display:"GB"},{id:ri.Terabytes,alias:["TB","terabytes(TB)"],divisor:Math.pow(1e3,4),display:"TB"},{id:ri.Petabytes,alias:["PB","petabytes(PB)"],divisor:Math.pow(1e3,5),display:"PB"}],ai=[{id:ri.Bibytes,alias:["B","bibytes(B)"],divisor:1,display:"B"},{id:ri.Kibibytes,alias:["KiB","kibibytes(KiB)"],divisor:1024,display:"KiB"},{id:ri.Mebibytes,alias:["MiB","mebibytes(MiB)"],divisor:Math.pow(1024,2),display:"MiB"},{id:ri.Gibibytes,alias:["GiB","gibibytes(GiB)"],divisor:Math.pow(1024,3),display:"GiB"},{id:ri.Tebibytes,alias:["TiB","tebibytes(TiB)"],divisor:Math.pow(1024,4),display:"TiB"},{id:ri.Pebibytes,alias:["PiB","pebibytes(PiB)"],divisor:Math.pow(1024,5),display:"PiB"}],oi=[{id:ri.b,divisor:1,display:"b"},{id:ri.B,divisor:8,display:"B"},{id:ri.KB,divisor:8192,display:"KB"},{id:ri.MB,divisor:8388608,display:"MB"},{id:ri.GB,divisor:8589934592,display:"GB"}];!function(i){i.BitsPerSecond="bits/sec",i.KilobitsPerSecond="kilobits/sec",i.MegabitsPerSecond="megabits/sec",i.GigabitsPerSecond="gigabits/sec",i.BytesPerSecond="bytes/sec",i.KilobytesPerSecond="kilobytes/sec",i.MegabytesPerSecond="megabytes/sec",i.GigabytesPerSecond="gigabytes/sec",i.bps="bps",i.Bps="Bps",i.KBps="KBps",i.MBps="MBps",i.GBps="GBps"}(ti||(ti={}));var di,ui=[{id:ti.BitsPerSecond,alias:["bps","bits/sec(bps)"],divisor:1,display:"bps"},{id:ti.KilobitsPerSecond,alias:["Kbps","kilobits/sec(Kbps)"],divisor:1024,display:"Kbps"},{id:ti.MegabitsPerSecond,alias:["Mbps","megabits/sec(Mbps)"],divisor:1048576,display:"Mbps"},{id:ti.GigabitsPerSecond,alias:["Gbps","gigabits/sec(Gbps)"],divisor:1073741824,display:"Gbps"}],ci=[{id:ti.BytesPerSecond,alias:["Bps","bytes/sec(Bps)"],divisor:8,display:"Bps"},{id:ti.KilobytesPerSecond,alias:["KBps","kilobytes/sec(KBps)"],divisor:8192,display:"KBps"},{id:ti.MegabytesPerSecond,alias:["MBps","megabytes/sec(MBps)"],divisor:8388608,display:"MBps"},{id:ti.GigabytesPerSecond,alias:["GBps","gigabytes/sec(GBps)"],divisor:8589934592,display:"GBps"}],li=[{id:ti.bps,divisor:1,display:"bps"},{id:ti.Bps,divisor:8,display:"Bps"},{id:ti.KBps,divisor:8192,display:"KBps"},{id:ti.MBps,divisor:8388608,display:"MBps"},{id:ti.GBps,divisor:8589934592,display:"GBps"}];!function(i){i.Nanosecond="nanoseconds",i.Microsecond="microseconds",i.Milliseconds="milliseconds",i.Seconds="seconds",i.Minutes="minutes",i.Hours="hours",i.Days="days",i.Weeks="weeks",i.Months="months",i.Years="years",i.ms="ms",i.s="s",i.min="min",i.hour="hour",i.day="day",i.week="week"}(di||(di={}));var yi,pi,fi=[{id:di.Nanosecond,alias:["ns","nanoseconds(ns)"],divisor:1,display:"ns"},{id:di.Microsecond,alias:["μs","microseconds(μs)"],divisor:1e3,display:"μs"},{id:di.Milliseconds,alias:["ms","milliseconds(ms)"],divisor:1e6,display:"ms"},{id:di.Seconds,alias:["s","seconds(s)"],divisor:1e9,display:"s"},{id:di.Minutes,alias:["min","minutes(min)"],divisor:6e10,display:"min"},{id:di.Hours,alias:["hour","hours(hour)"],divisor:36e11,display:"hour"},{id:di.Days,alias:["day","days(day)"],divisor:864e11,display:"day"},{id:di.Weeks,alias:["week","weeks(week)"],divisor:6048e11,display:"week"},{id:di.Months,alias:["month","months(month)"],divisor:2592e12,display:"month"},{id:di.Years,alias:["year","years(year)"],divisor:31536e12,display:"year"}];di.ms,di.s,di.min,di.hour,di.day,di.week,(yi={})[S.Time]=fi,yi[S.Byte]=si,yi[S.Bibyte]=ai,yi[S.BitRate]=ui,yi[S.ByteRate]=ci,function(i){i.None="none",i.K="K",i.M="M",i.B="B",i.T="T"}(pi||(pi={}));var bi,vi,Bi=[{id:pi.None,divisor:1,display:""},{id:pi.K,divisor:1e3,display:"K"},{id:pi.M,divisor:1e6,display:"M"},{id:pi.B,divisor:1e9,display:"B"},{id:pi.T,divisor:1e12,display:"T"}],mi=function(i,e){return i.id.toLocaleLowerCase()===(null==e?void 0:e.toLocaleLowerCase())||i.alias&&i.alias.map((function(i){return i.toLocaleLowerCase()})).includes(e)},gi=function(i,e){return i.id.toLocaleLowerCase()===(null==e?void 0:e.toLocaleLowerCase())||i.alias&&i.alias.includes(e)},hi=[fi],Mi=[].concat.apply([],hi.map((function(i){return L(i.map((function(i){return i.id})),[].concat.apply([],i.map((function(i){return i.alias?i.alias:[]}))))}))),wi=[si,ai,oi],ki=[].concat.apply([],wi.map((function(i){return L(i.map((function(i){return i.id})),[].concat.apply([],i.map((function(i){return i.alias?i.alias:[]}))))}))),Pi=[ui,ci,li],Ki=[].concat.apply([],Pi.map((function(i){return L(i.map((function(i){return i.id})),[].concat.apply([],i.map((function(i){return i.alias?i.alias:[]}))))}))),Si=function(i,e,r){var n=0,t=Math.sign(i),s=Math.abs(i);if(e){var a=Bi.findIndex((function(i){return i.id.toLocaleLowerCase()===e.toLocaleLowerCase()}));-1!==a&&(n=a)}for(var o=Bi[n],d=n+1;d<Bi.length&&s/(Bi[d].divisor/Bi[n].divisor)>=1;++d)o=Bi[d];return o.id===pi.None?(t*s).toFixed(null!=r?r:2):(s/(o.divisor/Bi[n].divisor)*t).toFixed(null!=r?r:2)+o.display};!function(i){i.None="none",i.Short="short",i.Percent="percent",i.Time="time",i.Data="data",i.DataRate="data_rate"}(vi||(vi={}));var Ti=((bi={})[vi.None]=[],bi[vi.Short]=[],bi[vi.Percent]=ni,bi[vi.Time]=Mi,bi[vi.Data]=ki,bi[vi.DataRate]=Ki,bi),Gi=function(i,e){return void 0===e?i.toString():i.toFixed(e)},Li=function(i,e){if(!e)return[Si(i),null];var r=e.type;r||(e.unit?(r=vi.Short,Object.entries(Ti).map((function(i){var n=i[0];i[1].map((function(i){return i.toLocaleLowerCase()})).includes(e.unit.toLocaleLowerCase())&&(r=n)}))):r=vi.None);var n=void 0===(null==e?void 0:e.precision)?2:e.precision;switch(r){case vi.Percent:var t=function(i,e){return e&&e.toLocaleLowerCase()===T.Percent100.toLocaleLowerCase()?i:100*i}(i,e.unit);return[Gi(t,n)+"%",null];case vi.Time:var s=function(i,e,r){var n=0,t=2,s=-1;if(e)for(var a=function(i){var a=-1,o=-1;if(hi[i].forEach((function(i,n){mi(i,e)&&(a=n),mi(i,r)&&(o=n)})),-1!==a)return n=i,t=a,s=o,"break"},o=0;o<hi.length&&"break"!==a(o);++o);else r&&(s=hi[n].findIndex((function(i){return mi(i,r)})));var d=hi[n],u=d[t],c=u;if(-1===s)for(o=t+1;o<d.length&&i/(d[o].divisor/u.divisor)>=1;++o)c=d[o];else c=d[s];return r&&-1===s&&console.warn('Cannot convert unit "'+(e||u.display)+'" to "'+r+'"'),[i/(c.divisor/u.divisor),c.display]}(i,e.unit,e.targetUnit),a=s[0],o=s[1];return[""+Gi(a,void 0===(null==e?void 0:e.precision)?1:e.precision),o];case vi.Data:var d=function(i,e,r){var n=wi.length-1,t=0,s=-1,a=Math.sign(i),o=Math.abs(i);if(e)for(var d=function(i){var a=-1,o=-1;if(wi[i].forEach((function(i,n){gi(i,e)&&(a=n),gi(i,r)&&(o=n)})),-1!==a)return n=i,t=a,s=o,"break"},u=0;u<wi.length&&"break"!==d(u);++u);else r&&(s=wi[n].findIndex((function(i){return gi(i,r)})));var c=wi[n],l=c[t],y=l;if(-1===s)for(u=t+1;u<c.length&&o/(c[u].divisor/l.divisor)>=1;++u)y=c[u];else y=c[s];return r&&-1===s&&console.warn('Cannot convert unit "'+(e||l.display)+'" to "'+r+'"'),[o/(y.divisor/l.divisor)*a,y.display]}(i,e.unit,e.targetUnit),u=d[0],c=d[1];return[""+Gi(u,n),c];case vi.DataRate:var l=function(i,e,r){var n=Pi.length-1,t=0,s=-1,a=Math.sign(i),o=Math.abs(i);if(e)for(var d=function(i){var a=-1,o=-1;if(Pi[i].forEach((function(i,n){mi(i,e)&&(a=n),mi(i,r)&&(o=n)})),-1!==a)return n=i,t=a,s=o,"break"},u=0;u<Pi.length&&"break"!==d(u);++u);else r&&(s=Pi[n].findIndex((function(i){return mi(i,r)})));var c=Pi[n],l=c[t],y=l;if(-1===s)for(u=t+1;u<c.length&&o/(c[u].divisor/l.divisor)>=1;++u)y=c[u];else y=c[s];return r&&-1===s&&console.warn('Cannot convert unit "'+(e||l.display)+'" to "'+r+'"'),[o/(y.divisor/l.divisor)*a,y.display]}(i,e.unit,e.targetUnit),y=l[0],p=l[1];return[""+Gi(y,n),p];case vi.None:return[Gi(i,n),""];default:return[Si(i,e.unit,n),e.unit]}};function Ci(i,e,r,n){return void 0===r&&(r=2),Li(i,{unit:e,precision:r,targetUnit:n})}var Ni=r(1204);function Ai(i){var e;try{e=(0,Ni.safeLoad)(i,{schema:Ni.JSON_SCHEMA,json:!0})}catch(i){console.error(i)}return e}function xi(i,e,r){var n;void 0===e&&(e=2);try{n=(0,Ni.safeDump)(i,{indent:e,schema:Ni.JSON_SCHEMA,skipInvalid:!0,noRefs:!0,noCompatMode:!0,sortKeys:null==r?void 0:r.sortKeys})}catch(i){console.error(i)}return n}function ji(i,e){return(0,u.round)(i,e)}}}]);
//# sourceMappingURL=4741.ed462c44.js.map