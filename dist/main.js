!function(e){function t(t){for(var n,o,i=t[0],a=t[1],c=0,u=[];c<i.length;c++)o=i[c],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&u.push(r[o][0]),r[o]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n]);for(s&&s(t);u.length;)u.shift()()}var n={},r={0:0};function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise((function(t,o){n=r[e]=[t,o]}));t.push(n[2]=i);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.src=function(e){return o.p+"dist/bundle."+({}[e]||e)+"."+{1:"be547dcae58b6803fc96",2:"7540cc055390fae1eac1"}[e]+".js"}(e);var s=new Error;a=function(t){c.onerror=c.onload=null,clearTimeout(u);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",s.name="ChunkLoadError",s.type=o,s.request=i,n[1](s)}r[e]=void 0}};var u=setTimeout((function(){a({type:"timeout",target:c})}),12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(t)},o.m=e,o.c=n,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o.oe=function(e){throw console.error(e),e};var i=window.webpackJsonp=window.webpackJsonp||[],a=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var s=a;o(o.s=3)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(8),i=(r=o)&&r.__esModule?r:{default:r};t.default={data:function(){return{page:null}},mounted:function(){var e=this,t=(window.location.href+"#").split("#")[1].replace(/\?.{0,}$/,"").replace(/^\//,"").replace(/\/$/,"").split("/");(i.default[t[0]]||i.default.menu)().then((function(t){e.page=t.default}))}}},function(e,t,n){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function c(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function s(e,t){for(var n={},r=[],o=0;o<e.length;o++){var i=e[o],s=t.base?i[0]+t.base:i[0],u=n[s]||0,l="".concat(s," ").concat(u);n[s]=u+1;var p=c(l),d={css:i[1],media:i[2],sourceMap:i[3]};-1!==p?(a[p].references++,a[p].updater(d)):a.push({identifier:l,updater:b(d,t),references:1}),r.push(l)}return r}function u(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var l,p=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function d(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=p(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function f(e,t,n){var r=n.css,o=n.media,i=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var h=null,v=0;function b(e,t){var n,r,o;if(t.singleton){var i=v++;n=h||(h=u(t)),r=d.bind(null,n,i,!1),o=d.bind(null,n,i,!0)}else n=u(t),r=f.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var n=s(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=c(n[r]);a[o].references--}for(var i=s(e,t),u=0;u<n.length;u++){var l=c(n[u]);0===a[l].references&&(a[l].updater(),a.splice(l,1))}n=i}}}},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=r.sources.map((function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"}));return[n].concat(i).concat([o]).join("\n")}var a;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n})).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];null!=i&&(r[i]=!0)}for(o=0;o<e.length;o++){var a=e[o];null!=a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},function(e,t,n){e.exports=n(4)},function(e,t,n){"use strict";var r=i(n(5)),o=i(n(7));function i(e){return e&&e.__esModule?e:{default:e}}n(11),document.getElementById("root").innerHTML="",window.icrush=new r.default({el:document.getElementById("root"),render:function(e){return e(o.default)}})},function(module,exports,__webpack_require__){"use strict";(function(module){function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach((function(t){_defineProperty(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}
/*!
* iCrush v1.6.0
* (c) 2007-2020 心叶 git+https://github.com/yelloxing/iCrush.git
* License: MIT
*/!function(){function mount(e){e.directive=function(t,n){e.prototype.__directiveLib[t]=n},e.component=function(t,n){e.prototype.__componentLib[t]=n}}function use(e){e.use=function(t){t.install.call(t,e)}}function initGlobalAPI(e){e.prototype.__directiveLib={},e.prototype.__componentLib={},mount(e),use(e)}var toString=Object.prototype.toString;function getType(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":toString.call(e)}function isObject(e){var t=_typeof(e);return null!=e&&("object"===t||"function"===t)}function isFunction(e){if(!isObject(e))return!1;var t=getType(e);return"[object Function]"===t||"[object AsyncFunction]"===t||"[object GeneratorFunction]"===t||"[object Proxy]"===t}function isString(e){var t=_typeof(e);return"string"===t||"object"===t&&null!=e&&!Array.isArray(e)&&"[object String]"===getType(e)}function isPlainObject(e){if(null===e||"object"!==_typeof(e)||"[object Object]"!=getType(e))return!1;if(null===Object.getPrototypeOf(e))return!0;for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function isElement(e){return null!==e&&"object"===_typeof(e)&&(1===e.nodeType||9===e.nodeType||11===e.nodeType)&&!isPlainObject(e)}function outHTML(e){if(e.outerHTML)return e.outerHTML;var t=document.createElement("div");return t.appendChild(e.cloneNode(!0)),t.innerHTML}function toNode(e){if(isElement(e))return e;var t=document.createElement("div");return t.innerHTML=e.replace(/[\n\f\r]/g,"").trim(),t.firstElementChild}function isValidKey(e){/^[_$]/.test(e)&&console.error("[iCrush warn]: The beginning of _ or $ is not allowed："+e)}function compilerText(target,text){var getText=function getText(str){return eval(str)};return getText.call(target,text)}function templateToName(e){for(var t=(e+"").toLowerCase(),n=(e+"").toUpperCase(),r="",o=!1,i=0;i<e.length;i++)"-"!=e[i]?o?(r+=n[i],o=!1):r+=t[i]:o=!0;return r}function replaceDom(e,t){e.parentNode.replaceChild(t,e)}function bindEvent(e,t,n){window.attachEvent?e.attachEvent("on"+t,n):e.addEventListener(t,n,!1)}function unbindEvent(e,t,n){window.detachEvent?e.detachEvent("on"+t,n):e.removeEventListener(t,n,!1)}function stopPropagation(e){(e=e||window.event).stopPropagation?e.stopPropagation():e.cancelBubble=!0}function preventDefault(e){(e=e||window.event).preventDefault?e.preventDefault():e.returnValue=!1}var uid=1;function initMixin(e){e.prototype.$$init=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};for(var t in this._options=e,this._uid=uid++,this._data=isFunction(e.data)?e.data():e.data,this._el=isString(e.el)?document.querySelector(e.el):e.el,this.__isMounted=!1,this.__isDestroyed=!1,e.methods)isValidKey(t),this[t]=e.methods[t];for(var n in this._data)this[n]=this._data[n];for(var r in this.__componentLib_scope={},e.component)this.__componentLib_scope[r]=e.component[r];for(var o in this.__directiveLib_scope={},e.directive)this.__directiveLib_scope[o]=e.directive[o]}}function lifecycleMixin(e){e.prototype.$$lifecycle=function(e){isFunction(e)?e():["created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed"].indexOf(e)>-1&&isFunction(this._options[e])&&this._options[e].call(this)}}function createElement(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r={},o=[];if(!isString(e))return{type:"component",options:e,attrs:{},children:[]};for(var i in t)/^@/.test(i)?r[i.replace(/^@/,"i-on:")]=t[i]:/^:/.test(i)?r["i-bind"+i]=t[i]:r[i]=t[i];for(var a,c=0;c<n.length;c++)isString(a=n[c])?/\{\{[^}]+\}\}/.test(a)?o.push({type:"bindText",content:('" '+a+' "').replace(/\{\{([^}]+)\}\}/g,'"+this.$1+"')}):o.push({type:"text",content:a}):o.push(a);return{type:"none",tagName:e,attrs:r,children:o}}function isSymbol(e){var t=_typeof(e);return"symbol"===t||"object"===t&&null!==e&&"[object Symbol]"===getType(e)}function isKey(e,t){if(Array.isArray(e))return!1;var n=_typeof(e);return!("number"!=n&&"boolean"!=n&&null!=e&&!isSymbol(e))||null!==t&&e in Object(t)||/^\w*$/.test(e)}function stringToPath(e){return e.replace(/\[/g,".").replace(/\]/g,"").replace(/"/g,"").replace(/'/g,"").split(".")}function castPath(e,t){return Array.isArray(e)?e:isKey(e,t)?[e]:stringToPath(e)}var INFINITY=1/0;function toKey(e){if("string"==typeof e||isSymbol(e))return e;var t="".concat(e);return"0"===t&&1/e==-INFINITY?"-0":t}function baseGet(e,t){t=castPath(t,e);for(var n=0;n<t.length&&null!==e;n++)e=e[toKey(t[n])];return n&&n===t.length?e:void 0}function get(e,t,n){var r=null==e?void 0:baseGet(e,t);return void 0===r?n:r}function mountDom(e,t,n,r){var o,i=get(e,t);if(i){if("none"==i.type){var a=templateToName(i.tagName);e.__componentLib[a]||e.__componentLib_scope[a]?(i.options=e.__componentLib[a]||e.__componentLib_scope[a],i.type="component"):i.type="tag"}if("component"==i.type){o=document.createElement("i-crush-component"),n.appendChild(o),i.options.el=o,i.instance=new r(i.options),i.instance.__parent=e;var c={};for(var s in i.attrs)/^data-icrush-/.test(s)||(/^:/.test(s)?c[s.replace("i-bind"+s)]=i.attrs[s]:/^@/.test(s)?c[s.replace(s.replace(/^@/,"i-on:"))]=i.attrs[s]:c[s]=i.attrs[s]);var u={attrs:c,instance:i.instance};if("component"==u.instance._name){var l=u.attrs["i-bind:is"];u.instance.lister(r,e[l])}e.__componentTask.push(u)}else if("tag"==i.type){for(var p in o=document.createElement(i.tagName),"I-CRUSH-COMPONENT"==n.nodeName||"I-CRUSH-COMPONENT"==n._nodeName?(replaceDom(n,o),e._el=o):n.appendChild(o),i.attrs){var d=i.attrs[p],f=(p+":").split(":"),h=e.__directiveLib[templateToName(f[0])]||e.__directiveLib_scope[templateToName(f[0])];h?e.__directiveTask.push(_objectSpread({el:o},h,{value:d,type:f[1]})):o.setAttribute(p,d)}for(var v=0;v<i.children.length;v++)mountDom(e,t+".children["+v+"]",o,r)}else"text"==i.type?((o=document.createTextNode("")).textContent=i.content.replace(/↵/g,"\n"),n.appendChild(o)):"bindText"==i.type?((o=document.createTextNode("")).textContent=compilerText(e,i.content).replace(/↵/g,"\n"),n.appendChild(o),e.__bindTextTask.push({el:o,content:i.content})):console.error("[iCrush warn]: Type not expected："+i.type)}else console.error("[iCrush warn]: vnode is undefined!")}function watcher(e){var t=function(t){isValidKey(t),isFunction(e[t])&&console.error('[iCrush warn]: Data property "'+t+'" has already been defined as a Method.');var n=e._data[t];e[t]=n,Object.defineProperty(e,t,{get:function(){return n},set:function(t){n=t,e.$$updateComponent()}})};for(var n in e._data)t(n)}function isText(e){return null!==e&&"object"===_typeof(e)&&3===e.nodeType&&!isPlainObject(e)}function renderMixin(e){e.prototype.$$mountComponent=function(){this.$$lifecycle("beforeMount"),this._vnode=this.$$render(createElement),this.__directiveTask=[],this.__componentTask=[],this.__bindTextTask=[],mountDom(this,"_vnode",this._el,e);for(var t=0;t<this.__directiveTask.length;t++){var n=this.__directiveTask[t];isFunction(n.inserted)&&n.inserted(n.el,{target:this,exp:n.value,value:get(this,n.value),type:n.type})}watcher(this),this.__isMounted=!0,this.$$lifecycle("mounted")},e.prototype.$$updateComponent=function(){this.$$lifecycle("beforeUpdate");for(var t=0;t<this.__directiveTask.length;t++){var n=this.__directiveTask[t];isFunction(n.update)&&n.update(n.el,{target:this,exp:n.value,value:get(this,n.value),type:n.type})}for(var r=0;r<this.__bindTextTask.length;r++){var o=this.__bindTextTask[r],i=compilerText(this,o.content).replace(/↵/g,"\n");o.el.textContent!=i&&(o.el.textContent=i)}for(var a=0;a<this.__componentTask.length;a++){var c=this.__componentTask[a];if("component"==c.instance._name){var s=c.attrs["i-bind:is"];c.instance.lister(e,this[s])}}this.$$lifecycle("updated")},e.prototype.$$destroyComponent=function(){this.$$lifecycle("beforeDestroy");for(var e=0;e<this.__directiveTask.length;e++){var t=this.__directiveTask[e];isFunction(t.delete)&&t.delete(t.el,{target:this,exp:t.value,value:get(this,t.value),type:t.type})}this.$$lifecycle("destroyed")}}function createRenderFactroy(e){return function(t){return function e(t,n){for(var r=t.childNodes,o=[],i=0;i<r.length;i++)isText(r[i])?/^[\x20\t]+$/.test(r[i].textContent)||o.push(r[i].textContent):isElement(r[i])&&o.push(e(r[i],n));for(var a={},c=0;c<t.attributes.length;c++)a[t.attributes[c].nodeName]=t.attributes[c].nodeValue;return n(t.tagName,a,o)}(toNode(e),t)}}function iCrush(e){this instanceof iCrush||console.error("[iCrush warn]: iCrush is a constructor and should be called with the `new` keyword");var t=e.name||"noname";this._name=t,this.$$lifecycle(e.beforeCreate),this.$$init(e),this.$$lifecycle("created"),isElement(this._el)&&this.$$mount()}initMixin(iCrush),lifecycleMixin(iCrush),renderMixin(iCrush);var update=function(e,t){isString(t.type)&&t.type.length>0?e.getAttribute(t.type)!=t.value&&e.setAttribute(t.type,t.value):e.value==t.value&&e.textContent==t.value||(e.value=e.textContent=t.value)},iBind={inserted:update,update:update},iOn={inserted:function(e,t){for(var n=t.type.split("."),r={prevent:!1,stop:!1,once:!1},o=1;o<n.length;o++)r[n[o]]=!0;bindEvent(e,n[0],(function o(i){r.stop&&stopPropagation(i),r.prevent&&preventDefault(i);var a=/^([^(]+)(\([^)]{0,}\)){0,1}/.exec(t.exp),c=[],s=[];if(a[2]){var u=a[2].replace(/^\(/,"").replace(/\)$/,"").trim();u.length>0&&(s=u.split(","))}for(var l=0;l<s.length;l++){var p=s[l];p=/^\d/.test(p)||"true"==p||"false"==p||"NAN"==p||/["']/.test(p)?compilerText(t.target,p):compilerText(t.target,"this."+p),c.push(p)}t.target[a[1]].apply(t.target,c),r.once&&unbindEvent(e,n[0],o)}))}};function baseAssignValue(e,t,n){"__proto__"==t?Object.defineProperty(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}function assignValue(e,t,n){baseAssignValue(e,t,n)}function baseSet(e,t,n,r){if(!isObject(e))return e;t=castPath(t,e);for(var o=e,i=0;i<t.length;i++){var a=toKey(t[i]),c=n;if(i+1!=t.length){var s=o[a];isObject(s)?c=s:void 0===(c=r?r(s,a,o):void 0)&&(c={})}assignValue(o,a,c),o=o[a]}return e}function set(e,t,n,r){return r="function"==typeof r?r:void 0,null==e?e:baseSet(e,t,n,r)}var iModel={inserted:function(e,t){e.value=t.value,bindEvent(e,"input",(function(){set(t.target,t.exp,e.value)}))},update:function(e,t){e.value=t.value}},component={name:"component",data:function(){return{is:null}},methods:{lister:function(e,t){if(t!=this.is&&null!=t){var n=this._oldComponent;n&&n.$$lifecycle("beforeDestroy"),this.is=t;var r=t;r.el=this._el,r.el._nodeName="I-CRUSH-COMPONENT",this._oldComponent=new e(r),this._el=this._oldComponent._el,n&&(n.$$lifecycle("destroyed"),n=null)}}}};initGlobalAPI(iCrush),iCrush.directive("iBind",iBind),iCrush.directive("iOn",iOn),iCrush.directive("iModel",iModel),iCrush.component("component",component),iCrush.prototype.$$mount=function(){if(isFunction(this._options.render))this.$$render=this._options.render;else{var e=this._options.template;e&&isString(e)||(e=outHTML(this._el),this._el._nodeName="I-CRUSH-COMPONENT"),this.$$render=createRenderFactroy(e)}this.$$mountComponent()},"object"===_typeof(module)&&"object"===_typeof(module.exports)?module.exports=iCrush:window.iCrush=iCrush}()}).call(this,__webpack_require__(6)(module))},function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r);n(9);o.a.render=function(e){return e("component",{":is":"page","data-icrush-d5cf9266":""},[])},t.default=o.a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={menu:function(){return new Promise((function(e){n.e(1).then(function(t){e(n(13))}.bind(null,n)).catch(n.oe)}))},QuickSort:function(){return new Promise((function(e){n.e(2).then(function(t){e(n(14))}.bind(null,n)).catch(n.oe)}))}}},function(e,t,n){var r=n(1),o=n(10);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1},a=(r(o,i),o.locals?o.locals:{});e.exports=a},function(e,t,n){(e.exports=n(2)(!1)).push([e.i,"",""])},function(e,t,n){var r=n(1),o=n(12);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1},a=(r(o,i),o.locals?o.locals:{});e.exports=a},function(e,t,n){(e.exports=n(2)(!1)).push([e.i,"/*!\r\n* 统一不同浏览器的基础样式\r\n* git+https://github.com/yelloxing/normalize.css.git\r\n*\r\n* @since v0.1.0 \r\n* @public\r\n* \r\n* 引入方式：\r\n* import '@yelloxing/normalize.css';\r\n*/\r\n\r\nhtml {\r\n    /*\r\n  ------------------\r\n  防止iPhone在坚屏转向横屏时放大文字\r\n  ------------------\r\n  */\r\n    -ms-text-size-adjust: 100%;\r\n    -webkit-text-size-adjust: 100%;\r\n    /*\r\n  ------------------\r\n  统一行高\r\n  ------------------\r\n  */\r\n    line-height: 1.15;\r\n}\r\n\r\nbutton,\r\ninput {\r\n    /*\r\n  ------------------\r\n  兼容部分手机下border不显示问题\r\n  ------------------\r\n  */\r\n    border: 1px solid #b2b2bd;\r\n}\r\n\r\narticle,\r\nfooter,\r\nheader,\r\nnav,\r\nsection {\r\n    /*\r\n  ------------------\r\n  修正旧浏览器未定义的块级元素\r\n  ------------------\r\n  */\r\n    display: block;\r\n}\r\n\r\ncanvas,\r\nsvg {\r\n    /*\r\n  ------------------\r\n  修正旧浏览器未定义的行内块元素\r\n  ------------------\r\n  */\r\n    display: inline-block;\r\n}\r\n\r\n* {\r\n    /*\r\n  ------------------\r\n  统一不同浏览器盒子尺寸计算方法\r\n  ------------------\r\n  */\r\n    box-sizing: border-box;\r\n}\r\n\r\n::-ms-clear,\r\n::-ms-reveal {\r\n    /*\r\n  ------------------\r\n  去掉IE浏览器输入框叉叉和眼睛\r\n  ------------------\r\n  */\r\n    display: none;\r\n}\r\n\r\nimg {\r\n    /*\r\n  ------------------\r\n  针对火狐浏览器在img标签没有src时候的差异修复\r\n  ------------------\r\n  */\r\n    display: inline-block;\r\n}\r\n\r\nhtml {\r\n    /*\r\n  ------------------\r\n  设置默认字体为统一的安全字体\r\n  ------------------\r\n  */\r\n    font-family: sans-serif;\r\n}\r\n\r\na {\r\n    /*\r\n  ------------------\r\n  默认去掉下划线\r\n  ------------------\r\n  */\r\n    text-decoration: none;\r\n}\r\n\r\nli {\r\n    /*\r\n  ------------------\r\n  去掉前置索引\r\n  ------------------\r\n  */\r\n    list-style-type: none;\r\n}\r\n\r\nul,\r\nol,\r\nli,\r\np,\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n    /*\r\n  ------------------\r\n  去掉不喜欢的间距\r\n  ------------------\r\n  */\r\n    -webkit-margin-before: 0;\r\n    -webkit-margin-after: 0;\r\n    -webkit-padding-start: 0;\r\n    /*\r\n  ------------------\r\n  去掉不喜欢的间距，针对火狐浏览器等\r\n  ------------------\r\n  */\r\n    margin-block-end: 0;\r\n    margin-block-start: 0;\r\n    padding-inline-start: 0;\r\n    /*\r\n  ------------------\r\n  修改IE和其它浏览器不一致问题\r\n  ------------------\r\n  */\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\nbody {\r\n    /*\r\n  ------------------\r\n  去掉默认的8px\r\n  ------------------\r\n  */\r\n    margin: 0;\r\n}\r\n\r\ntable {\r\n    /*\r\n  ------------------\r\n  设置默认表格边框合并为一个单一的边框\r\n  ------------------\r\n  */\r\n    border-collapse: collapse;\r\n}\r\n",""])}]);