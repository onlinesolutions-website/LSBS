!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.playbackRate=t():(e.xgplayer=e.xgplayer||{},e.xgplayer.PlayerControls=e.xgplayer.PlayerControls||{},e.xgplayer.PlayerControls.playbackRate=t())}(window,(function(){return function(e){var t={};function a(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,a),n.l=!0,n.exports}return a.m=e,a.c=t,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=5)}([function(e,t,a){var r=a(1);"string"==typeof r&&(r=[[e.i,r,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};a(3)(r,n);r.locals&&(e.exports=r.locals)},function(e,t,a){(e.exports=a(2)(!1)).push([e.i,".xgplayer-skin-default .xgplayer-playbackrate{-webkit-order:8;-moz-box-ordinal-group:9;order:8;width:60px;height:150px;z-index:18;position:relative;display:inline-block;cursor:default;margin-top:-119px}.xgplayer-skin-default .xgplayer-playbackrate ul{display:none;list-style:none;width:78px;background:rgba(0,0,0,.54);border-radius:1px;position:absolute;bottom:30px;left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);text-align:left;white-space:nowrap;z-index:26;cursor:pointer}.xgplayer-skin-default .xgplayer-playbackrate ul li{opacity:.7;font-family:PingFangSC-Regular;font-size:11px;color:hsla(0,0%,100%,.8);position:relative;padding:4px 0;text-align:center}.xgplayer-skin-default .xgplayer-playbackrate ul li.selected,.xgplayer-skin-default .xgplayer-playbackrate ul li:hover{color:#fff;opacity:1}.xgplayer-skin-default .xgplayer-playbackrate ul li:first-child{position:relative;margin-top:12px}.xgplayer-skin-default .xgplayer-playbackrate ul li:last-child{position:relative;margin-bottom:12px}.xgplayer-skin-default .xgplayer-playbackrate .name{width:60px;height:20px;position:absolute;bottom:0;text-align:center;font-family:PingFangSC-Regular;font-size:13px;background:rgba(0,0,0,.38);color:hsla(0,0%,100%,.8);border-radius:10px;line-height:20px}.xgplayer-skin-default .xgplayer-playbackrate span{position:relative;top:19px;font-weight:700;text-shadow:0 0 4px rgba(0,0,0,.6)}.xgplayer-skin-default .xgplayer-playbackrate:hover{opacity:1}.xgplayer-skin-default.xgplayer-playbackrate-active .xgplayer-playbackrate ul{display:block}",""])},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var a=function(e,t){var a=e[1]||"",r=e[3];if(!r)return a;if(t&&"function"==typeof btoa){var n=(i=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),o=r.sources.map((function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"}));return[a].concat(o).concat([n]).join("\n")}var i;return[a].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+a+"}":a})).join("")},t.i=function(e,a){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},n=0;n<this.length;n++){var o=this[n][0];"number"==typeof o&&(r[o]=!0)}for(n=0;n<e.length;n++){var i=e[n];"number"==typeof i[0]&&r[i[0]]||(a&&!i[2]?i[2]=a:a&&(i[2]="("+i[2]+") and ("+a+")"),t.push(i))}},t}},function(e,t,a){var r,n,o={},i=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===n&&(n=r.apply(this,arguments)),n}),l=function(e){return document.querySelector(e)},c=function(e){var t={};return function(e){if("function"==typeof e)return e();if(void 0===t[e]){var a=l.call(this,e);if(window.HTMLIFrameElement&&a instanceof window.HTMLIFrameElement)try{a=a.contentDocument.head}catch(e){a=null}t[e]=a}return t[e]}}(),s=null,p=0,f=[],u=a(4);function d(e,t){for(var a=0;a<e.length;a++){var r=e[a],n=o[r.id];if(n){n.refs++;for(var i=0;i<n.parts.length;i++)n.parts[i](r.parts[i]);for(;i<r.parts.length;i++)n.parts.push(v(r.parts[i],t))}else{var l=[];for(i=0;i<r.parts.length;i++)l.push(v(r.parts[i],t));o[r.id]={id:r.id,refs:1,parts:l}}}}function y(e,t){for(var a=[],r={},n=0;n<e.length;n++){var o=e[n],i=t.base?o[0]+t.base:o[0],l={css:o[1],media:o[2],sourceMap:o[3]};r[i]?r[i].parts.push(l):a.push(r[i]={id:i,parts:[l]})}return a}function b(e,t){var a=c(e.insertInto);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=f[f.length-1];if("top"===e.insertAt)r?r.nextSibling?a.insertBefore(t,r.nextSibling):a.appendChild(t):a.insertBefore(t,a.firstChild),f.push(t);else if("bottom"===e.insertAt)a.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var n=c(e.insertInto+" "+e.insertAt.before);a.insertBefore(t,n)}}function g(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=f.indexOf(e);t>=0&&f.splice(t,1)}function h(e){var t=document.createElement("style");return e.attrs.type="text/css",m(t,e.attrs),b(e,t),t}function m(e,t){Object.keys(t).forEach((function(a){e.setAttribute(a,t[a])}))}function v(e,t){var a,r,n,o;if(t.transform&&e.css){if(!(o=t.transform(e.css)))return function(){};e.css=o}if(t.singleton){var i=p++;a=s||(s=h(t)),r=R.bind(null,a,i,!1),n=R.bind(null,a,i,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(a=function(e){var t=document.createElement("link");return e.attrs.type="text/css",e.attrs.rel="stylesheet",m(t,e.attrs),b(e,t),t}(t),r=L.bind(null,a,t),n=function(){g(a),a.href&&URL.revokeObjectURL(a.href)}):(a=h(t),r=w.bind(null,a),n=function(){g(a)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else n()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=i()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var a=y(e,t);return d(a,t),function(e){for(var r=[],n=0;n<a.length;n++){var i=a[n];(l=o[i.id]).refs--,r.push(l)}e&&d(y(e,t),t);for(n=0;n<r.length;n++){var l;if(0===(l=r[n]).refs){for(var c=0;c<l.parts.length;c++)l.parts[c]();delete o[l.id]}}}};var x,k=(x=[],function(e,t){return x[e]=t,x.filter(Boolean).join("\n")});function R(e,t,a,r){var n=a?"":r.css;if(e.styleSheet)e.styleSheet.cssText=k(t,n);else{var o=document.createTextNode(n),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(o,i[t]):e.appendChild(o)}}function w(e,t){var a=t.css,r=t.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=a;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(a))}}function L(e,t,a){var r=a.css,n=a.sourceMap,o=void 0===t.convertToAbsoluteUrls&&n;(t.convertToAbsoluteUrls||o)&&(r=u(r)),n&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */");var i=new Blob([r],{type:"text/css"}),l=e.href;e.href=URL.createObjectURL(i),l&&URL.revokeObjectURL(l)}},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var a=t.protocol+"//"+t.host,r=a+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,(function(e,t){var n,o=t.trim().replace(/^"(.*)"$/,(function(e,t){return t})).replace(/^'(.*)'$/,(function(e,t){return t}));return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o)?e:(n=0===o.indexOf("//")?o:0===o.indexOf("/")?a+o:r+o.replace(/^\.\//,""),"url("+JSON.stringify(n)+")")}))}},function(e,t,a){"use strict";a.r(t);function r(e="div",t="",a={},r=""){let n=document.createElement(e);return n.className=r,n.innerHTML=t,Object.keys(a).forEach(t=>{let r=t,o=a[t];"video"===e||"audio"===e?o&&n.setAttribute(r,o):n.setAttribute(r,o)}),n}function n(e,t){return!!e&&(e.classList?Array.prototype.some.call(e.classList,e=>e===t):!!e.className&&!!e.className.match(new RegExp("(\\s|^)"+t+"(\\s|$)")))}function o(e,t){e&&(e.classList?t.replace(/(^\s+|\s+$)/g,"").split(/\s+/g).forEach(t=>{t&&e.classList.add(t)}):n(e,t)||(e.className+=" "+t))}function i(e,t){e&&(e.classList?t.split(/\s+/g).forEach(t=>{e.classList.remove(t)}):n(e,t)&&t.split(/\s+/g).forEach(t=>{let a=new RegExp("(\\s|^)"+t+"(\\s|$)");e.className=e.className.replace(a," ")}))}function l(e,t){e&&t.split(/\s+/g).forEach(t=>{n(e,t)?i(e,t):o(e,t)})}let c={};Object.defineProperty(c,"device",{get:function(){return c.os.isPc?"pc":"mobile"}}),Object.defineProperty(c,"browser",{get:function(){let e=navigator.userAgent.toLowerCase(),t={ie:/rv:([\d.]+)\) like gecko/,firfox:/firefox\/([\d.]+)/,chrome:/chrome\/([\d.]+)/,opera:/opera.([\d.]+)/,safari:/version\/([\d.]+).*safari/};return[].concat(Object.keys(t).filter(a=>t[a].test(e)))[0]||""}}),Object.defineProperty(c,"os",{get:function(){let e=navigator.userAgent,t=/(?:Windows Phone)/.test(e),a=/(?:SymbianOS)/.test(e)||t,r=/(?:Android)/.test(e),n=/(?:Firefox)/.test(e),o=/(?:iPad|PlayBook)/.test(e)||r&&!/(?:Mobile)/.test(e)||n&&/(?:Tablet)/.test(e),i=/(?:iPhone)/.test(e)&&!o;return{isTablet:o,isPhone:i,isAndroid:r,isPc:!(i||r||a||o),isSymbian:a,isWindowsPhone:t,isFireFox:n}}});var s=c;a(0);var p={name:"s_playbackRate",method:function(){let e=this,t=[];if(!e.config.playbackRate)return!1;t=[].concat(e.config.playbackRate),t.sort((e,t)=>t-e);let a=void 0!==e.config.playbackRateUnit?e.config.playbackRateUnit:"x",c=r("xg-playbackrate"," ",{},"xgplayer-playbackrate");"mobile"===s.device&&(e.config.playbackRateActive="click");let p=[];t.forEach(e=>{p.push({name:""+e,rate:`${e}${a}`,selected:!1})});let f=1,u=["<ul>"];p.forEach(t=>{e.config.defaultPlaybackRate&&e.config.defaultPlaybackRate.toString()===t.name?(t.selected=!0,f=e.config.defaultPlaybackRate,e.once("playing",()=>{e.video.playbackRate=e.config.defaultPlaybackRate})):"1.0"!==t.name&&"1"!==t.name||e.config.defaultPlaybackRate&&1!==e.config.defaultPlaybackRate||(t.selected=!0),u.push(`<li cname='${t.name}' class='${t.selected?"selected":""}'>${t.rate}</li>`)}),u.push(`</ul><p class='name'>${f}${a}</p>`);let d=e.root.querySelector(".xgplayer-playbackrate");if(d){d.innerHTML=u.join("");let t=d.querySelector(".name");e.config.playbackRateActive&&"hover"!==e.config.playbackRateActive||t.addEventListener("mouseenter",t=>{t.preventDefault(),t.stopPropagation(),o(e.root,"xgplayer-playbackrate-active"),d.focus()})}else{c.innerHTML=u.join("");let t=c.querySelector(".name");e.config.playbackRateActive&&"hover"!==e.config.playbackRateActive||t.addEventListener("mouseenter",t=>{t.preventDefault(),t.stopPropagation(),o(e.root,"xgplayer-playbackrate-active"),c.focus()}),e.once("ready",()=>{e.controls.appendChild(c)})}["touchend","click"].forEach(t=>{c.addEventListener(t,t=>{t.stopPropagation(),t.preventDefault();let r=t.target;if(r&&"li"===r.tagName.toLocaleLowerCase()){let t,l;p.forEach(a=>{a.selected=!1,r.textContent.replace(/\s+/g,"")===a.rate&&(Array.prototype.forEach.call(r.parentNode.childNodes,e=>{n(e,"selected")&&(t=Number(e.getAttribute("cname")),i(e,"selected"))}),a.selected=!0,e.video.playbackRate=1*a.name,f=1*a.name)}),o(r,"selected"),l=Number(r.getAttribute("cname")),r.parentNode.nextSibling.innerHTML=`${r.getAttribute("cname")}${a}`,e.emit("playbackrateChange",{from:t,to:l}),"mobile"===s.device&&i(e.root,"xgplayer-playbackrate-active")}else"click"!==e.config.playbackRateActive||!r||"p"!==r.tagName.toLocaleLowerCase()&&"span"!==r.tagName.toLocaleLowerCase()||("mobile"===s.device?l(e.root,"xgplayer-playbackrate-active"):o(e.root,"xgplayer-playbackrate-active"),c.focus());e.emit("focus")},!1)}),c.addEventListener("mouseleave",t=>{t.preventDefault(),t.stopPropagation(),i(e.root,"xgplayer-playbackrate-active")}),e.on("blur",(function(){i(e.root,"xgplayer-playbackrate-active")})),e.on("play",()=>{e.video.playbackRate.toFixed(1)!==f.toFixed(1)&&(e.video.playbackRate=f)}),e.switchPlaybackRate=function(t={}){let a=e.controls.querySelectorAll(".xgplayer-playbackrate ul li");for(let e=0;e<a.length;e++)n(a[e],"selected")||a[e].getAttribute("cname")!==""+t.playbackRate&&e!==t.index||a[e].click()},e.on("ratechange",()=>{e.switchPlaybackRate({playbackRate:e.playbackRate})})}};t.default={name:"playbackRate",method:function(){p.method.call(this)}}}])}));