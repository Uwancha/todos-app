(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>u});var r=n(81),a=n.n(r),o=n(645),i=n.n(o)()(a());i.push([e.id,'* {\n    box-sizing: border-box;\n    margin: 0;\n}\n\nhtml {\n    height: 100%;\n}\n\nbody {\n    height: 100%;\n}\n\nheader {\n    position: fixed;\n    top: 0;\n    width: 100%;\n    background-color: rgb(1, 4, 4);\n    color: aliceblue;\n    box-shadow: 5px -5px 15px #41410d;\n    padding: 1rem;\n}\n\nmain {\n    padding-top: 3rem;\n    display: grid;\n    grid-template-columns: 2fr 8fr;\n    grid-template-rows: 100%;\n    height: 100%;\n}\n\n.catagories {\n    background-color: rgb(139, 226, 226);\n    color: aliceblue;\n    padding-top: 5rem;\n    padding-left: 3rem;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n}\n\n.tasks {\n    background-color: azure;\n    color: rgb(139, 226, 226);\n    padding-top: 3rem;\n    height: 100%;\n}\n\n.name-duedate {\n    display: flex;\n    justify-content: space-between;\n    padding-left: 2rem;\n    padding-right: 2rem;\n    color: #41410d;\n}\n\n#todo-list {\n    padding-left: 2rem;\n    padding-right: 2rem;\n    padding-top: 2rem;\n}\n\n#todo-list  div{\n    border-bottom: solid rgba(207, 205, 203, 0.544) 2px;\n    border-top: solid rgba(214, 211, 204, 0.496) 2px;\n    margin-bottom: 1rem;\n}\n\n.todo-container {\n    display: flex;\n    align-items: center;\n    gap: 1rem;\n}\n\n.todo-container li {\n    list-style: none;\n    font-weight: 600;\n}\n\n#due-date {\n    margin-left: auto;\n}\n\n\n#project-list li {\n    list-style: none;\n    font-size: 1.2rem;\n    font-weight: 600;\n    margin-left: 1rem;\n    margin-bottom: 1rem;\n}\n\n#project-list li:hover {\n    text-shadow: 1px 1px aliceblue;\n    background-color:  rgb(155, 255, 255);\n}\n\n\n.form {\n    display: none; \n}  \n\n.form.visible {\n    position: fixed;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 10rem;\n    width: 20rem;\n    top: 15rem;\n    left: 30rem;\n}\n\n\n#add-task {\n    color: aliceblue;\n    padding: .3rem;\n    font-weight: 700;\n    margin-left: 2rem;\n    margin-right: 2rem;\n}\n\n#add-task button {\n    border: none;\n    background-color:  rgb(139, 226, 226);\n    color: aliceblue;\n    font-weight: 800;\n}\n\n#add-task button:hover {\n    background-color: aqua;\n}\n\n\nform {\n    display: flex;\n    flex-direction: column;\n    gap: .5rem;\n    background-color: rgb(139, 226, 226);\n    color: aliceblue;\n    padding: 1rem;\n}\n\ninput {\n    background: transparent;\n    color: aliceblue;\n    padding: .5rem;\n    border: none;\n}\n\ninput:focus {\n    border: none;\n}\n\ninput[type="text"]::placeholder {\n    color: aliceblue;\n  }\n\n\nform > div {\n    display: flex;\n    flex-direction: column;\n}\n\n.remove-form {\n    justify-self: flex-end;\n    align-self: flex-end;\n}\nh3{\n    text-align: center;\n}\n\nh2:hover {\n    text-shadow: 1px 1px aliceblue;\n}\n\nimg {\n    width: 20px;\n    height: 20px;\n}\n\n.check {\n    border: #e6e6dd solid 2px;\n    border-radius: 2px;\n    opacity: .2;\n}\n\n.done {\n    opacity: 1;\n}\n\n\n\n@media (max-width: 767px) {\n    .catagories {\n        padding-left: 1rem;\n    }\n\n    .form.visible {\n        height: 15rem;\n        width: 15rem;\n        left: 7rem;\n    }\n}',""]);const u=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var u=0;u<this.length;u++){var d=this[u][0];null!=d&&(i[d]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);r&&i[s[0]]||(void 0!==o&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=o),n&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=n):s[2]=n),a&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=a):s[4]="".concat(a)),t.push(s))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var o={},i=[],u=0;u<e.length;u++){var d=e[u],c=r.base?d[0]+r.base:d[0],s=o[c]||0,l="".concat(c," ").concat(s);o[c]=s+1;var m=n(l),f={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==m)t[m].references++,t[m].updater(f);else{var h=a(f,r);r.byIndex=u,t.splice(u,0,{identifier:l,updater:h,references:1})}i.push(l)}return i}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var u=n(o[i]);t[u].references--}for(var d=r(e,a),c=0;c<o.length;c++){var s=n(o[c]);0===t[s].references&&(t[s].updater(),t.splice(s,1))}o=d}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},609:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={id:r,exports:{}};return e[r](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var a=r.length-1;a>-1&&!e;)e=r[a--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),r=n(795),a=n.n(r),o=n(569),i=n.n(o),u=n(565),d=n.n(u),c=n(609),s=n.n(c),l=n(589),m=n.n(l),f=n(426),h={};h.styleTagTransform=m(),h.setAttributes=d(),h.insert=i().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=s(),t()(f.Z,h),f.Z&&f.Z.locals&&f.Z.locals;const g=n.p+"images/ad96b678361296ab365e7ea5ca624cc6.png",v=n.p+"images/0b014409b4bac1de72deee8588edc8e9.png";function p(e){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}function w(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function b(e){w(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"===p(e)&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function y(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function T(e){w(1,arguments);var t=b(e),n=t.getUTCDay(),r=(n<1?7:0)+n-1;return t.setUTCDate(t.getUTCDate()-r),t.setUTCHours(0,0,0,0),t}function x(e){w(1,arguments);var t=b(e),n=t.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(n+1,0,4),r.setUTCHours(0,0,0,0);var a=T(r),o=new Date(0);o.setUTCFullYear(n,0,4),o.setUTCHours(0,0,0,0);var i=T(o);return t.getTime()>=a.getTime()?n+1:t.getTime()>=i.getTime()?n:n-1}var C={};function D(){return C}function S(e,t){var n,r,a,o,i,u,d,c;w(1,arguments);var s=D(),l=y(null!==(n=null!==(r=null!==(a=null!==(o=null==t?void 0:t.weekStartsOn)&&void 0!==o?o:null==t||null===(i=t.locale)||void 0===i||null===(u=i.options)||void 0===u?void 0:u.weekStartsOn)&&void 0!==a?a:s.weekStartsOn)&&void 0!==r?r:null===(d=s.locale)||void 0===d||null===(c=d.options)||void 0===c?void 0:c.weekStartsOn)&&void 0!==n?n:0);if(!(l>=0&&l<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var m=b(e),f=m.getUTCDay(),h=(f<l?7:0)+f-l;return m.setUTCDate(m.getUTCDate()-h),m.setUTCHours(0,0,0,0),m}function M(e,t){var n,r,a,o,i,u,d,c;w(1,arguments);var s=b(e),l=s.getUTCFullYear(),m=D(),f=y(null!==(n=null!==(r=null!==(a=null!==(o=null==t?void 0:t.firstWeekContainsDate)&&void 0!==o?o:null==t||null===(i=t.locale)||void 0===i||null===(u=i.options)||void 0===u?void 0:u.firstWeekContainsDate)&&void 0!==a?a:m.firstWeekContainsDate)&&void 0!==r?r:null===(d=m.locale)||void 0===d||null===(c=d.options)||void 0===c?void 0:c.firstWeekContainsDate)&&void 0!==n?n:1);if(!(f>=1&&f<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var h=new Date(0);h.setUTCFullYear(l+1,0,f),h.setUTCHours(0,0,0,0);var g=S(h,t),v=new Date(0);v.setUTCFullYear(l,0,f),v.setUTCHours(0,0,0,0);var p=S(v,t);return s.getTime()>=g.getTime()?l+1:s.getTime()>=p.getTime()?l:l-1}function k(e,t){for(var n=e<0?"-":"",r=Math.abs(e).toString();r.length<t;)r="0"+r;return n+r}const E=function(e,t){var n=e.getUTCFullYear(),r=n>0?n:1-n;return k("yy"===t?r%100:r,t.length)},N=function(e,t){var n=e.getUTCMonth();return"M"===t?String(n+1):k(n+1,2)},U=function(e,t){return k(e.getUTCDate(),t.length)},P=function(e,t){return k(e.getUTCHours()%12||12,t.length)},q=function(e,t){return k(e.getUTCHours(),t.length)},W=function(e,t){return k(e.getUTCMinutes(),t.length)},L=function(e,t){return k(e.getUTCSeconds(),t.length)},Y=function(e,t){var n=t.length,r=e.getUTCMilliseconds();return k(Math.floor(r*Math.pow(10,n-3)),t.length)};var O={G:function(e,t,n){var r=e.getUTCFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(e,t,n){if("yo"===t){var r=e.getUTCFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return E(e,t)},Y:function(e,t,n,r){var a=M(e,r),o=a>0?a:1-a;return"YY"===t?k(o%100,2):"Yo"===t?n.ordinalNumber(o,{unit:"year"}):k(o,t.length)},R:function(e,t){return k(x(e),t.length)},u:function(e,t){return k(e.getUTCFullYear(),t.length)},Q:function(e,t,n){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"Q":return String(r);case"QQ":return k(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(e,t,n){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"q":return String(r);case"qq":return k(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(e,t,n){var r=e.getUTCMonth();switch(t){case"M":case"MM":return N(e,t);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(e,t,n){var r=e.getUTCMonth();switch(t){case"L":return String(r+1);case"LL":return k(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(e,t,n,r){var a=function(e,t){w(1,arguments);var n=b(e),r=S(n,t).getTime()-function(e,t){var n,r,a,o,i,u,d,c;w(1,arguments);var s=D(),l=y(null!==(n=null!==(r=null!==(a=null!==(o=null==t?void 0:t.firstWeekContainsDate)&&void 0!==o?o:null==t||null===(i=t.locale)||void 0===i||null===(u=i.options)||void 0===u?void 0:u.firstWeekContainsDate)&&void 0!==a?a:s.firstWeekContainsDate)&&void 0!==r?r:null===(d=s.locale)||void 0===d||null===(c=d.options)||void 0===c?void 0:c.firstWeekContainsDate)&&void 0!==n?n:1),m=M(e,t),f=new Date(0);return f.setUTCFullYear(m,0,l),f.setUTCHours(0,0,0,0),S(f,t)}(n,t).getTime();return Math.round(r/6048e5)+1}(e,r);return"wo"===t?n.ordinalNumber(a,{unit:"week"}):k(a,t.length)},I:function(e,t,n){var r=function(e){w(1,arguments);var t=b(e),n=T(t).getTime()-function(e){w(1,arguments);var t=x(e),n=new Date(0);return n.setUTCFullYear(t,0,4),n.setUTCHours(0,0,0,0),T(n)}(t).getTime();return Math.round(n/6048e5)+1}(e);return"Io"===t?n.ordinalNumber(r,{unit:"week"}):k(r,t.length)},d:function(e,t,n){return"do"===t?n.ordinalNumber(e.getUTCDate(),{unit:"date"}):U(e,t)},D:function(e,t,n){var r=function(e){w(1,arguments);var t=b(e),n=t.getTime();t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0);var r=n-t.getTime();return Math.floor(r/864e5)+1}(e);return"Do"===t?n.ordinalNumber(r,{unit:"dayOfYear"}):k(r,t.length)},E:function(e,t,n){var r=e.getUTCDay();switch(t){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(e,t,n,r){var a=e.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(t){case"e":return String(o);case"ee":return k(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(e,t,n,r){var a=e.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(t){case"c":return String(o);case"cc":return k(o,t.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(e,t,n){var r=e.getUTCDay(),a=0===r?7:r;switch(t){case"i":return String(a);case"ii":return k(a,t.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(e,t,n){var r=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(e,t,n){var r,a=e.getUTCHours();switch(r=12===a?"noon":0===a?"midnight":a/12>=1?"pm":"am",t){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(e,t,n){var r,a=e.getUTCHours();switch(r=a>=17?"evening":a>=12?"afternoon":a>=4?"morning":"night",t){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(e,t,n){if("ho"===t){var r=e.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return P(e,t)},H:function(e,t,n){return"Ho"===t?n.ordinalNumber(e.getUTCHours(),{unit:"hour"}):q(e,t)},K:function(e,t,n){var r=e.getUTCHours()%12;return"Ko"===t?n.ordinalNumber(r,{unit:"hour"}):k(r,t.length)},k:function(e,t,n){var r=e.getUTCHours();return 0===r&&(r=24),"ko"===t?n.ordinalNumber(r,{unit:"hour"}):k(r,t.length)},m:function(e,t,n){return"mo"===t?n.ordinalNumber(e.getUTCMinutes(),{unit:"minute"}):W(e,t)},s:function(e,t,n){return"so"===t?n.ordinalNumber(e.getUTCSeconds(),{unit:"second"}):L(e,t)},S:function(e,t){return Y(e,t)},X:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();if(0===a)return"Z";switch(t){case"X":return H(a);case"XXXX":case"XX":return F(a);default:return F(a,":")}},x:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"x":return H(a);case"xxxx":case"xx":return F(a);default:return F(a,":")}},O:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+j(a,":");default:return"GMT"+F(a,":")}},z:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+j(a,":");default:return"GMT"+F(a,":")}},t:function(e,t,n,r){var a=r._originalDate||e;return k(Math.floor(a.getTime()/1e3),t.length)},T:function(e,t,n,r){return k((r._originalDate||e).getTime(),t.length)}};function j(e,t){var n=e>0?"-":"+",r=Math.abs(e),a=Math.floor(r/60),o=r%60;if(0===o)return n+String(a);var i=t||"";return n+String(a)+i+k(o,2)}function H(e,t){return e%60==0?(e>0?"-":"+")+k(Math.abs(e)/60,2):F(e,t)}function F(e,t){var n=t||"",r=e>0?"-":"+",a=Math.abs(e);return r+k(Math.floor(a/60),2)+n+k(a%60,2)}const z=O;var A=function(e,t){switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});default:return t.date({width:"full"})}},I=function(e,t){switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});default:return t.time({width:"full"})}};const B={p:I,P:function(e,t){var n,r=e.match(/(P+)(p+)?/)||[],a=r[1],o=r[2];if(!o)return A(e,t);switch(a){case"P":n=t.dateTime({width:"short"});break;case"PP":n=t.dateTime({width:"medium"});break;case"PPP":n=t.dateTime({width:"long"});break;default:n=t.dateTime({width:"full"})}return n.replace("{{date}}",A(a,t)).replace("{{time}}",I(o,t))}};var R=["D","DD"],Q=["YY","YYYY"];function G(e,t,n){if("YYYY"===e)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("YY"===e)throw new RangeError("Use `yy` instead of `YY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("D"===e)throw new RangeError("Use `d` instead of `D` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("DD"===e)throw new RangeError("Use `dd` instead of `DD` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var X={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function J(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.width?String(t.width):e.defaultWidth;return e.formats[n]||e.formats[e.defaultWidth]}}const Z={date:J({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:J({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:J({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})};var $={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function _(e){return function(t,n){var r;if("formatting"===(null!=n&&n.context?String(n.context):"standalone")&&e.formattingValues){var a=e.defaultFormattingWidth||e.defaultWidth,o=null!=n&&n.width?String(n.width):a;r=e.formattingValues[o]||e.formattingValues[a]}else{var i=e.defaultWidth,u=null!=n&&n.width?String(n.width):e.defaultWidth;r=e.values[u]||e.values[i]}return r[e.argumentCallback?e.argumentCallback(t):t]}}const V={ordinalNumber:function(e,t){var n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:_({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:_({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:_({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:_({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:_({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})};function K(e){return function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.width,a=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],o=t.match(a);if(!o)return null;var i,u=o[0],d=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],c=Array.isArray(d)?function(e,t){for(var n=0;n<e.length;n++)if(e[n].test(u))return n}(d):function(e,t){for(var n in e)if(e.hasOwnProperty(n)&&e[n].test(u))return n}(d);return i=e.valueCallback?e.valueCallback(c):c,{value:i=n.valueCallback?n.valueCallback(i):i,rest:t.slice(u.length)}}}var ee,te={ordinalNumber:(ee={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}},function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.match(ee.matchPattern);if(!n)return null;var r=n[0],a=e.match(ee.parsePattern);if(!a)return null;var o=ee.valueCallback?ee.valueCallback(a[0]):a[0];return{value:o=t.valueCallback?t.valueCallback(o):o,rest:e.slice(r.length)}}),era:K({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:K({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:K({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:K({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:K({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})};const ne={code:"en-US",formatDistance:function(e,t,n){var r,a=X[e];return r="string"==typeof a?a:1===t?a.one:a.other.replace("{{count}}",t.toString()),null!=n&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},formatLong:Z,formatRelative:function(e,t,n,r){return $[e]},localize:V,match:te,options:{weekStartsOn:0,firstWeekContainsDate:1}};var re=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,ae=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,oe=/^'([^]*?)'?$/,ie=/''/g,ue=/[a-zA-Z]/;function de(e,t,n){var r,a,o,i,u,d,c,s,l,m,f,h,g,v,T,x,C,S;w(2,arguments);var M=String(t),k=D(),E=null!==(r=null!==(a=null==n?void 0:n.locale)&&void 0!==a?a:k.locale)&&void 0!==r?r:ne,N=y(null!==(o=null!==(i=null!==(u=null!==(d=null==n?void 0:n.firstWeekContainsDate)&&void 0!==d?d:null==n||null===(c=n.locale)||void 0===c||null===(s=c.options)||void 0===s?void 0:s.firstWeekContainsDate)&&void 0!==u?u:k.firstWeekContainsDate)&&void 0!==i?i:null===(l=k.locale)||void 0===l||null===(m=l.options)||void 0===m?void 0:m.firstWeekContainsDate)&&void 0!==o?o:1);if(!(N>=1&&N<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var U=y(null!==(f=null!==(h=null!==(g=null!==(v=null==n?void 0:n.weekStartsOn)&&void 0!==v?v:null==n||null===(T=n.locale)||void 0===T||null===(x=T.options)||void 0===x?void 0:x.weekStartsOn)&&void 0!==g?g:k.weekStartsOn)&&void 0!==h?h:null===(C=k.locale)||void 0===C||null===(S=C.options)||void 0===S?void 0:S.weekStartsOn)&&void 0!==f?f:0);if(!(U>=0&&U<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!E.localize)throw new RangeError("locale must contain localize property");if(!E.formatLong)throw new RangeError("locale must contain formatLong property");var P=b(e);if(!function(e){if(w(1,arguments),!function(e){return w(1,arguments),e instanceof Date||"object"===p(e)&&"[object Date]"===Object.prototype.toString.call(e)}(e)&&"number"!=typeof e)return!1;var t=b(e);return!isNaN(Number(t))}(P))throw new RangeError("Invalid time value");var q=function(e){var t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),e.getTime()-t.getTime()}(P),W=function(e,t){return w(2,arguments),function(e,t){w(2,arguments);var n=b(e).getTime(),r=y(t);return new Date(n+r)}(e,-y(t))}(P,q),L={firstWeekContainsDate:N,weekStartsOn:U,locale:E,_originalDate:P};return M.match(ae).map((function(e){var t=e[0];return"p"===t||"P"===t?(0,B[t])(e,E.formatLong):e})).join("").match(re).map((function(r){if("''"===r)return"'";var a,o,i=r[0];if("'"===i)return(o=(a=r).match(oe))?o[1].replace(ie,"'"):a;var u,d=z[i];if(d)return null!=n&&n.useAdditionalWeekYearTokens||(u=r,-1===Q.indexOf(u))||G(r,t,String(e)),null!=n&&n.useAdditionalDayOfYearTokens||!function(e){return-1!==R.indexOf(e)}(r)||G(r,t,String(e)),d(W,r,E.localize,L);if(i.match(ue))throw new RangeError("Format string contains an unescaped latin alphabet character `"+i+"`");return r})).join("")}function ce(e,t,n,r){let a=!1;return{getTitle:()=>e,getDescription:()=>t,getDueDate:()=>{try{return de(new Date(n),"yy-MM-dd")}catch(e){console.log(e)}},getPriority:()=>r,markDone:e=>a=e,isDone:()=>a}}function se(e){return e&&"function"==typeof e.getTitle}function le(e){let t=[];const n=()=>{console.log("Saving projects...");try{localStorage.setItem(e,JSON.stringify(t))}catch(e){console.error("Error saving todos")}};return(()=>{try{const n=localStorage.getItem(e);let r,a=[];if(n&&function(e){try{return JSON.parse(e),!0}catch(e){return!1}}(n))try{r=JSON.parse(n),r.forEach((e=>{se(e)&&a.push(e)}))}catch(e){return void console.error("Error parsing JSON")}else r=[];r.every(se)||localStorage.clear(),t=a}catch(e){console.error(`Error while loading todos from local storage: ${e}`)}})(),{name:e,todos:t,addTodo:e=>{t.push(e),n()},removeTodo:e=>{const r=t.indexOf(e);-1!==r&&(t.splice(r,1),n())}}}const me=document.getElementById("todo-list");function fe(e,t){document.getElementById("title").textContent=t;const n=document.querySelector("#todo-list");e.forEach((t=>{if(se(t)){const r=document.createElement("div"),a=document.createElement("li"),o=document.createElement("li"),i=document.createElement("img"),u=document.createElement("img");a.textContent=t.getTitle(),a.setAttribute("id","todo-title"),o.textContent=t.getDueDate(),o.setAttribute("id","due-date"),i.src=v,i.classList.add("check"),u.src=g,u.setAttribute("id","remove-todo"),r.appendChild(i),r.appendChild(a),r.appendChild(o),r.appendChild(u),r.classList.add("todo-container"),n.appendChild(r),i.addEventListener("click",(()=>{t.isDone()?t.markDone(!1):t.markDone(!0),i.classList.toggle("done")})),u.addEventListener("click",(()=>{const a=e.indexOf(t);-1!==a&&(e.splice(a,1),n.removeChild(r))})),t.isDone()&&i.classList.add("done")}}))}Math.pow(10,8);var he=36e5;function ge(e,t){var n;w(1,arguments);var r=y(null!==(n=null==t?void 0:t.additionalDigits)&&void 0!==n?n:2);if(2!==r&&1!==r&&0!==r)throw new RangeError("additionalDigits must be 0, 1 or 2");if("string"!=typeof e&&"[object String]"!==Object.prototype.toString.call(e))return new Date(NaN);var a,o=function(e){var t,n={},r=e.split(ve.dateTimeDelimiter);if(r.length>2)return n;if(/:/.test(r[0])?t=r[0]:(n.date=r[0],t=r[1],ve.timeZoneDelimiter.test(n.date)&&(n.date=e.split(ve.timeZoneDelimiter)[0],t=e.substr(n.date.length,e.length))),t){var a=ve.timezone.exec(t);a?(n.time=t.replace(a[1],""),n.timezone=a[1]):n.time=t}return n}(e);if(o.date){var i=function(e,t){var n=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+t)+"})|(\\d{2}|[+-]\\d{"+(2+t)+"})$)"),r=e.match(n);if(!r)return{year:NaN,restDateString:""};var a=r[1]?parseInt(r[1]):null,o=r[2]?parseInt(r[2]):null;return{year:null===o?a:100*o,restDateString:e.slice((r[1]||r[2]).length)}}(o.date,r);a=function(e,t){if(null===t)return new Date(NaN);var n=e.match(pe);if(!n)return new Date(NaN);var r=!!n[4],a=ye(n[1]),o=ye(n[2])-1,i=ye(n[3]),u=ye(n[4]),d=ye(n[5])-1;if(r)return function(e,t,n){return t>=1&&t<=53&&n>=0&&n<=6}(0,u,d)?function(e,t,n){var r=new Date(0);r.setUTCFullYear(e,0,4);var a=7*(t-1)+n+1-(r.getUTCDay()||7);return r.setUTCDate(r.getUTCDate()+a),r}(t,u,d):new Date(NaN);var c=new Date(0);return function(e,t,n){return t>=0&&t<=11&&n>=1&&n<=(xe[t]||(Ce(e)?29:28))}(t,o,i)&&function(e,t){return t>=1&&t<=(Ce(e)?366:365)}(t,a)?(c.setUTCFullYear(t,o,Math.max(a,i)),c):new Date(NaN)}(i.restDateString,i.year)}if(!a||isNaN(a.getTime()))return new Date(NaN);var u,d=a.getTime(),c=0;if(o.time&&(c=function(e){var t=e.match(we);if(!t)return NaN;var n=Te(t[1]),r=Te(t[2]),a=Te(t[3]);return function(e,t,n){return 24===e?0===t&&0===n:n>=0&&n<60&&t>=0&&t<60&&e>=0&&e<25}(n,r,a)?n*he+6e4*r+1e3*a:NaN}(o.time),isNaN(c)))return new Date(NaN);if(!o.timezone){var s=new Date(d+c),l=new Date(0);return l.setFullYear(s.getUTCFullYear(),s.getUTCMonth(),s.getUTCDate()),l.setHours(s.getUTCHours(),s.getUTCMinutes(),s.getUTCSeconds(),s.getUTCMilliseconds()),l}return u=function(e){if("Z"===e)return 0;var t=e.match(be);if(!t)return 0;var n="+"===t[1]?-1:1,r=parseInt(t[2]),a=t[3]&&parseInt(t[3])||0;return function(e,t){return t>=0&&t<=59}(0,a)?n*(r*he+6e4*a):NaN}(o.timezone),isNaN(u)?new Date(NaN):new Date(d+c+u)}var ve={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},pe=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,we=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,be=/^([+-])(\d{2})(?::?(\d{2}))?$/;function ye(e){return e?parseInt(e):1}function Te(e){return e&&parseFloat(e.replace(",","."))||0}var xe=[31,null,31,30,31,30,31,31,30,31,30,31];function Ce(e){return e%400==0||e%4==0&&e%100!=0}const De=document.querySelector("#add-task"),Se=document.querySelector(".form"),Me=document.getElementById("todo-list"),ke=document.querySelector(".remove-form"),Ee=[],Ne=[],Ue=le("Home"),Pe=ce("Coding","Do coding",ge("2023-08-08"),"high"),qe=ce("Reading","Read 10 pages",ge("2023-08-08"),"high"),We=ce("Exercise","Do exercises",ge("2023-08-08"),"high"),Le=ce("Meditate","Meditating",ge("2023-08-08"),"high");Ue.addTodo(Pe),Ue.addTodo(qe),Ue.addTodo(We),Ue.addTodo(Le),Ee.push(Ue),fe(Ue.todos,Ue.name),document.querySelector("#home").addEventListener("click",(()=>{const e=document.getElementById("title");Me.innerHTML="",e.textContent=Ue.name,fe(Ue.todos,Ue.name)}));const Ye=le("Today");Ee.push(Ye),document.querySelector("#today").addEventListener("click",(()=>{const e=document.getElementById("title");Me.innerHTML="",e.textContent=Ye.name,fe(Ye.todos,Ye.name)}));const Oe=le("Week");Ee.push(Oe),document.querySelector("#week").addEventListener("click",(()=>{const e=document.getElementById("title");Me.innerHTML="",e.textContent=Oe.name,fe(Oe.todos,Oe.name)})),De.addEventListener("click",(()=>{Se.classList.add("visible")})),document.querySelector("form").addEventListener("submit",(function(e){e.preventDefault();const t="new"==document.querySelector("#project-select").value,n=document.querySelector("#project").value;if(t){const e=le(n),t=document.querySelector("#task-title").value,r=document.querySelector("#duedate").value,a=document.querySelector('input[name="priority"]:checked').value,o=document.querySelector('input[placeholder="task description"]').value,i=ce(t,r,a,o);e.addTodo(i),Ne.push(e),function(e){const t=document.getElementById("project-list");t.innerHTML="",e.forEach((e=>{const n=document.createElement("li");n.textContent=e.name,n.addEventListener("click",(()=>{me.innerHTML="",fe(e.todos,e.name)})),t.appendChild(n)}))}(Ne),Se.classList.remove("visible"),Se.classList.add("form"),t.value="",r.value="",a.value="",o.value=""}else{const e=document.querySelector("#task-title"),t=document.querySelector("#duedate"),n=document.querySelector('input[name="priority"]:checked'),r=document.querySelector('input[placeholder="task description"]');!function(){const e=document.querySelector("#task-title").value,t=document.querySelector("#duedate").value,n=document.querySelector('input[name="priority"]:checked').value,r=ce(e,document.querySelector('input[placeholder="task description"]').value,t,n),a=document.querySelector("#title").textContent;let o=Ee.find((e=>e.name==a));o||(o=Ne.find((e=>e.name==a))),o.addTodo(r),Me.innerHTML="",console.log(o.todos),fe(o.todos,o.name)}(),Se.classList.remove("visible"),Se.classList.add("form"),e.value="",t.value="",n.value="",r.value=""}})),document.querySelector("#project-select").addEventListener("change",(()=>{const e="new"==document.querySelector("#project-select").value;document.querySelector("#new-project").style.display=e?"block":"none"})),ke.addEventListener("click",(()=>{Se.classList.remove("visible"),Se.classList.add("form")}))})()})();