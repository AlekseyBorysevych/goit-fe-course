!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=4)}([function(e,t,r){var n=r(1);"string"==typeof n&&(n=[[e.i,n,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};r(2)(n,o);n.locals&&(e.exports=n.locals)},function(e,t,r){},function(e,t,r){var n={},o=function(e){var t;return function(){return void 0===t&&(t=e.apply(this,arguments)),t}}(function(){return window&&document&&document.all&&!window.atob}),i=function(e){var t={};return function(e,r){if("function"==typeof e)return e();if(void 0===t[e]){var n=function(e,t){return t?t.querySelector(e):document.querySelector(e)}.call(this,e,r);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}}(),a=null,s=0,c=[],l=r(3);function u(e,t){for(var r=0;r<e.length;r++){var o=e[r],i=n[o.id];if(i){i.refs++;for(var a=0;a<i.parts.length;a++)i.parts[a](o.parts[a]);for(;a<o.parts.length;a++)i.parts.push(m(o.parts[a],t))}else{var s=[];for(a=0;a<o.parts.length;a++)s.push(m(o.parts[a],t));n[o.id]={id:o.id,refs:1,parts:s}}}}function f(e,t){for(var r=[],n={},o=0;o<e.length;o++){var i=e[o],a=t.base?i[0]+t.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};n[a]?n[a].parts.push(s):r.push(n[a]={id:a,parts:[s]})}return r}function p(e,t){var r=i(e.insertInto);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var n=c[c.length-1];if("top"===e.insertAt)n?n.nextSibling?r.insertBefore(t,n.nextSibling):r.appendChild(t):r.insertBefore(t,r.firstChild),c.push(t);else if("bottom"===e.insertAt)r.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=i(e.insertAt.before,r);r.insertBefore(t,o)}}function d(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=c.indexOf(e);t>=0&&c.splice(t,1)}function v(e){var t=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var n=function(){0;return r.nc}();n&&(e.attrs.nonce=n)}return h(t,e.attrs),p(e,t),t}function h(e,t){Object.keys(t).forEach(function(r){e.setAttribute(r,t[r])})}function m(e,t){var r,n,o,i;if(t.transform&&e.css){if(!(i="function"==typeof t.transform?t.transform(e.css):t.transform.default(e.css)))return function(){};e.css=i}if(t.singleton){var c=s++;r=a||(a=v(t)),n=w.bind(null,r,c,!1),o=w.bind(null,r,c,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(r=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",h(t,e.attrs),p(e,t),t}(t),n=function(e,t,r){var n=r.css,o=r.sourceMap,i=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||i)&&(n=l(n));o&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([n],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,r,t),o=function(){d(r),r.href&&URL.revokeObjectURL(r.href)}):(r=v(t),n=function(e,t){var r=t.css,n=t.media;n&&e.setAttribute("media",n);if(e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}.bind(null,r),o=function(){d(r)});return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else o()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=o()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var r=f(e,t);return u(r,t),function(e){for(var o=[],i=0;i<r.length;i++){var a=r[i];(s=n[a.id]).refs--,o.push(s)}e&&u(f(e,t),t);for(i=0;i<o.length;i++){var s;if(0===(s=o[i]).refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete n[s.id]}}}};var y=function(){var e=[];return function(t,r){return e[t]=r,e.filter(Boolean).join("\n")}}();function w(e,t,r,n){var o=r?"":n.css;if(e.styleSheet)e.styleSheet.cssText=y(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var r=t.protocol+"//"+t.host,n=r+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var o,i=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?e:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?r+i:n+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(e,t,r){"use strict";r.r(t);var n=function(e){if(e){return{isActive:"localStorage"in e,get:function(e){try{var t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e)}},set:function(e,t){try{var r=JSON.stringify(t);localStorage.setItem(e,r)}catch(e){console.error("Set state error: ",e)}},getAll:function(){try{var e=[],t={};for(var r in localStorage)null!==(t=JSON.parse(localStorage.getItem(r)))&&t.hasOwnProperty("title")&&t.hasOwnProperty("url")&&t.hasOwnProperty("image")&&t.hasOwnProperty("description")&&e.push(t);return e}catch(e){console.error("GetAll state error: ",e)}},remove:function(e){try{localStorage.removeItem(e)}catch(e){console.error("Remove state error: ",e)}}}}}(window);function o(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}console.log(n);var i=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.items=this.getAllBookmarks()}return function(e,t,r){t&&o(e.prototype,t),r&&o(e,r)}(e,[{key:"getAllBookmarks",value:function(){return n.getAll()}},{key:"addBookmark",value:function(e){var t=this;if(0===this.items.length||!this.items.find(function(t){return t.url===e}))return fetch("".concat("http://api.linkpreview.net","/?key=").concat("5bb905e4709c07d0c5dcce206d1a180df48ebcbd42e33","&q=").concat(function(e){return encodeURIComponent(e).replace(/['()]/g,escape).replace(/\*/g,"%2A").replace(/%(?:7C|60|5E)/g,unescape)}(e))).then(function(e){if(e.ok)return e.json();throw alert("Error while fetching",e.statusText),new Error("Error while fetching: ".concat(e.statusText))}).then(function(e){return t.items.unshift(e),n.set(e.url,e),e}).catch(function(e){return console.log(e)});alert("такая закладка уже есть")}}]),e}();function a(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var s={input:document.querySelector("#InputURl"),submitButton:document.querySelector(".addButton"),cardsWrapper:document.querySelector(".Cards"),template:document.querySelector("#cardTemplate"),removeButton:document.querySelector(".remove"),inputForm:document.querySelector("form")},c=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.refs=s}return function(e,t,r){t&&a(e.prototype,t),r&&a(e,r)}(e,[{key:"displayAll",value:function(e,t,r){t.innerHTML="";var n=r.innerHTML.trim(),o=Handlebars.compile(n),i=e.reduce(function(e,t){return e+o(t)},"");t.innerHTML=i,this.refs.input.value=""}}]),e}();function l(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var u=/^https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9]\.[^\s]{2,}/,f=function(){function e(t,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._model=t,this._view=r,this._view.refs.submitButton.addEventListener("click",this.SubmitHandler.bind(this)),this._view.refs.cardsWrapper.addEventListener("click",this.RemoveBookmarkHandler.bind(this)),this._view.refs.inputForm.addEventListener("submit",function(e){e.preventDefault()}),this._view.displayAll(this._model.items,this._view.refs.cardsWrapper,this._view.refs.template)}return function(e,t,r){t&&l(e.prototype,t),r&&l(e,r)}(e,[{key:"SubmitHandler",value:function(e){var t=this;e.preventDefault(),this._view.refs.input.value.match(u)?this._model.addBookmark(this._view.refs.input.value).then(function(){t._view.displayAll(t._model.items,t._view.refs.cardsWrapper,t._view.refs.template)}).catch(function(e){return console.log("Error while fetching, status err:",e)}):alert("Введенный адрес не поддерживается.")}},{key:"RemoveBookmarkHandler",value:function(e){e.preventDefault();var t=e.target,r=t.nodeName,o=t.classList.contains("remove");if("BUTTON"===r||o){var i=t.parentNode.querySelector("span").textContent.replace("URL: ","");console.log(i);var a=this._model.items.findIndex(function(e){if(i===e.url)return!0});this._model.items.splice(a,1),n.remove(i),this._view.displayAll(this._model.items,this._view.refs.cardsWrapper,this._view.refs.template)}}}]),e}();r(0),new f(new i(n.getAll()),new c)}]);