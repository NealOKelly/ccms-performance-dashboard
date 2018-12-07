!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define("GOVUKFrontend",["exports"],e):e(t.GOVUKFrontend={})}(this,function(t){"use strict";function e(t,e){if(window.NodeList.prototype.forEach)return t.forEach(e);for(var n=0;n<t.length;n++)e.call(window,t[n],n,t)}(function(t){"Window"in this||"undefined"==typeof WorkerGlobalScope&&"function"!=typeof importScripts&&function(t){t.constructor?t.Window=t.constructor:(t.Window=t.constructor=new Function("return function Window() {}")()).prototype=this}(this)}).call("object"==typeof window&&window||"object"==typeof self&&self||"object"==typeof global&&global||{}),function(t){"Document"in this||"undefined"==typeof WorkerGlobalScope&&"function"!=typeof importScripts&&(this.HTMLDocument?this.Document=this.HTMLDocument:(this.Document=this.HTMLDocument=document.constructor=new Function("return function Document() {}")(),this.Document.prototype=document))}.call("object"==typeof window&&window||"object"==typeof self&&self||"object"==typeof global&&global||{}),function(t){"Element"in this&&"HTMLElement"in this||function(){if(!window.Element||window.HTMLElement){window.Element=window.HTMLElement=new Function("return function Element() {}")();var t,e=document.appendChild(document.createElement("body")),n=e.appendChild(document.createElement("iframe")).contentWindow.document,o=Element.prototype=n.appendChild(n.createElement("*")),i={},r=function(t,e){var n,o,a,s=t.childNodes||[],c=-1;if(1===t.nodeType&&t.constructor!==Element)for(n in t.constructor=Element,i)o=i[n],t[n]=o;for(;a=e&&s[++c];)r(a,e);return t},a=document.getElementsByTagName("*"),s=document.createElement,c=100;o.attachEvent("onpropertychange",function(t){for(var e,n=t.propertyName,r=!i.hasOwnProperty(n),s=o[n],c=i[n],l=-1;e=a[++l];)1===e.nodeType&&(r||e[n]===c)&&(e[n]=s);i[n]=s}),o.constructor=Element,o.hasAttribute||(o.hasAttribute=function(t){return null!==this.getAttribute(t)}),l()||(document.onreadystatechange=l,t=setInterval(l,25)),document.createElement=function(t){var e=s(String(t).toLowerCase());return r(e)},document.removeChild(e)}else window.HTMLElement=window.Element;function l(){return c--||clearTimeout(t),!(!document.body||document.body.prototype||!/(complete|interactive)/.test(document.readyState))&&(r(document,!0),t&&document.body.prototype&&clearTimeout(t),!!document.body.prototype)}}()}.call("object"==typeof window&&window||"object"==typeof self&&self||"object"==typeof global&&global||{}),function(t){var e,n,o,i;"defineProperty"in Object&&function(){try{return Object.defineProperty({},"test",{value:42}),!0}catch(t){return!1}}()||(e=Object.defineProperty,n=Object.prototype.hasOwnProperty("__defineGetter__"),o="Getters & setters cannot be defined on this javascript engine",i="A property cannot both have accessors and be writable or have a value",Object.defineProperty=function(t,r,a){if(e&&(t===window||t===document||t===Element.prototype||t instanceof Element))return e(t,r,a);if(null===t||!(t instanceof Object||"object"==typeof t))throw new TypeError("Object.defineProperty called on non-object");if(!(a instanceof Object))throw new TypeError("Property description must be an object");var s=String(r),c="value"in a||"writable"in a,l="get"in a&&typeof a.get,u="set"in a&&typeof a.set;if(l){if("function"!==l)throw new TypeError("Getter must be a function");if(!n)throw new TypeError(o);if(c)throw new TypeError(i);Object.__defineGetter__.call(t,s,a.get)}else t[s]=a.value;if(u){if("function"!==u)throw new TypeError("Setter must be a function");if(!n)throw new TypeError(o);if(c)throw new TypeError(i);Object.__defineSetter__.call(t,s,a.set)}return"value"in a&&(t[s]=a.value),t})}.call("object"==typeof window&&window||"object"==typeof self&&self||"object"==typeof global&&global||{}),function(t){(function(t){if(!("Event"in t))return!1;if("function"==typeof t.Event)return!0;try{return new Event("click"),!0}catch(t){return!1}})(this)||function(){var e={click:1,dblclick:1,keyup:1,keypress:1,keydown:1,mousedown:1,mouseup:1,mousemove:1,mouseover:1,mouseenter:1,mouseleave:1,mouseout:1,storage:1,storagecommit:1,textinput:1};if("undefined"!=typeof document&&"undefined"!=typeof window){var n=window.Event&&window.Event.prototype||null;window.Event=Window.prototype.Event=function(e,n){if(!e)throw new Error("Not enough arguments");var o;if("createEvent"in document){o=document.createEvent("Event");var i=!(!n||n.bubbles===t)&&n.bubbles,r=!(!n||n.cancelable===t)&&n.cancelable;return o.initEvent(e,i,r),o}return(o=document.createEventObject()).type=e,o.bubbles=!(!n||n.bubbles===t)&&n.bubbles,o.cancelable=!(!n||n.cancelable===t)&&n.cancelable,o},n&&Object.defineProperty(window.Event,"prototype",{configurable:!1,enumerable:!1,writable:!0,value:n}),"createEvent"in document||(window.addEventListener=Window.prototype.addEventListener=Document.prototype.addEventListener=Element.prototype.addEventListener=function(){var t=this,n=arguments[0],i=arguments[1];if(t===window&&n in e)throw new Error("In IE8 the event: "+n+" is not available on the window object. Please see https://github.com/Financial-Times/polyfill-service/issues/317 for more information.");t._events||(t._events={}),t._events[n]||(t._events[n]=function(e){var n,i=t._events[e.type].list,r=i.slice(),a=-1,s=r.length;for(e.preventDefault=function(){!1!==e.cancelable&&(e.returnValue=!1)},e.stopPropagation=function(){e.cancelBubble=!0},e.stopImmediatePropagation=function(){e.cancelBubble=!0,e.cancelImmediate=!0},e.currentTarget=t,e.relatedTarget=e.fromElement||null,e.target=e.target||e.srcElement||t,e.timeStamp=(new Date).getTime(),e.clientX&&(e.pageX=e.clientX+document.documentElement.scrollLeft,e.pageY=e.clientY+document.documentElement.scrollTop);++a<s&&!e.cancelImmediate;)a in r&&-1!==o(i,n=r[a])&&"function"==typeof n&&n.call(t,e)},t._events[n].list=[],t.attachEvent&&t.attachEvent("on"+n,t._events[n])),t._events[n].list.push(i)},window.removeEventListener=Window.prototype.removeEventListener=Document.prototype.removeEventListener=Element.prototype.removeEventListener=function(){var t,e=this,n=arguments[0],i=arguments[1];e._events&&e._events[n]&&e._events[n].list&&-1!==(t=o(e._events[n].list,i))&&(e._events[n].list.splice(t,1),e._events[n].list.length||(e.detachEvent&&e.detachEvent("on"+n,e._events[n]),delete e._events[n]))},window.dispatchEvent=Window.prototype.dispatchEvent=Document.prototype.dispatchEvent=Element.prototype.dispatchEvent=function(t){if(!arguments.length)throw new Error("Not enough arguments");if(!t||"string"!=typeof t.type)throw new Error("DOM Events Exception 0");var e=this,n=t.type;try{if(!t.bubbles){t.cancelBubble=!0;var o=function(t){t.cancelBubble=!0,(e||window).detachEvent("on"+n,o)};this.attachEvent("on"+n,o)}this.fireEvent("on"+n,t)}catch(o){t.target=e;do{t.currentTarget=e,"_events"in e&&"function"==typeof e._events[n]&&e._events[n].call(e,t),"function"==typeof e["on"+n]&&e["on"+n].call(e,t),e=9===e.nodeType?e.parentWindow:e.parentNode}while(e&&!t.cancelBubble)}return!0},document.attachEvent("onreadystatechange",function(){"complete"===document.readyState&&document.dispatchEvent(new Event("DOMContentLoaded",{bubbles:!0}))}))}function o(t,e){for(var n=-1,o=t.length;++n<o;)if(n in t&&t[n]===e)return n;return-1}}()}.call("object"==typeof window&&window||"object"==typeof self&&self||"object"==typeof global&&global||{});function n(t){this.$module=t}n.prototype.handleKeyDown=function(t){var e=t.target;"button"===e.getAttribute("role")&&32===t.keyCode&&(t.preventDefault(),e.click())},n.prototype.init=function(){this.$module.addEventListener("keydown",this.handleKeyDown)},function(t){"bind"in Function.prototype||Object.defineProperty(Function.prototype,"bind",{value:function(t){var e,n=Array,o=Object,i=o.prototype,r=n.prototype,a=function(){},s=i.toString,c="function"==typeof Symbol&&"symbol"==typeof Symbol.toStringTag,l=Function.prototype.toString;e=function(t){if("function"!=typeof t)return!1;if(c)return function(t){try{return l.call(t),!0}catch(t){return!1}}(t);var e=s.call(t);return"[object Function]"===e||"[object GeneratorFunction]"===e};var u=r.slice,d=r.concat,p=r.push,h=Math.max,f=this;if(!e(f))throw new TypeError("Function.prototype.bind called on incompatible "+f);for(var b,y=u.call(arguments,1),m=h(0,f.length-y.length),v=[],g=0;g<m;g++)p.call(v,"$"+g);return b=Function("binder","return function ("+v.join(",")+"){ return binder.apply(this, arguments); }")(function(){if(this instanceof b){var e=f.apply(this,d.call(y,u.call(arguments)));return o(e)===e?e:this}return f.apply(t,d.call(y,u.call(arguments)))}),f.prototype&&(a.prototype=f.prototype,b.prototype=new a,a.prototype=null),b}})}.call("object"==typeof window&&window||"object"==typeof self&&self||"object"==typeof global&&global||{});var o="boolean"==typeof document.createElement("details").open;function i(t){this.$module=t}function r(t){this.$module=t,this.$inputs=t.querySelectorAll('input[type="checkbox"]')}function a(t){this.$module=t}function s(t){this.$module=t}function c(t){this.$module=t,this.$inputs=t.querySelectorAll('input[type="radio"]')}function l(t){this.$module=t,this.$tabs=t.querySelectorAll(".govuk-tabs__tab"),this.keys={left:37,right:39,up:38,down:40},this.jsHiddenClass="govuk-tabs__panel--hidden"}i.prototype.handleInputs=function(t,e){t.addEventListener("keypress",function(t){var n=t.target;13!==t.keyCode&&32!==t.keyCode||"summary"===n.nodeName.toLowerCase()&&(t.preventDefault(),n.click?n.click():e(t))}),t.addEventListener("keyup",function(t){var e=t.target;32===t.keyCode&&"summary"===e.nodeName.toLowerCase()&&t.preventDefault()}),t.addEventListener("click",e)},i.prototype.init=function(){var t=this.$module;if(t){var e,n=this.$summary=t.getElementsByTagName("summary").item(0),i=this.$content=t.getElementsByTagName("div").item(0);if(n&&i)i.id||(i.id="details-content-"+(e=(new Date).getTime(),void 0!==window.performance&&"function"==typeof window.performance.now&&(e+=window.performance.now()),"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var n=(e+16*Math.random())%16|0;return e=Math.floor(e/16),("x"===t?n:3&n|8).toString(16)}))),t.setAttribute("role","group"),n.setAttribute("role","button"),n.setAttribute("aria-controls",i.id),o||(n.tabIndex=0),!0===(null!==t.getAttribute("open"))?(n.setAttribute("aria-expanded","true"),i.setAttribute("aria-hidden","false")):(n.setAttribute("aria-expanded","false"),i.setAttribute("aria-hidden","true"),o||(i.style.display="none")),this.handleInputs(n,this.setAttributes.bind(this))}},i.prototype.setAttributes=function(){var t=this.$module,e=this.$summary,n=this.$content,i="true"===e.getAttribute("aria-expanded"),r="true"===n.getAttribute("aria-hidden");(e.setAttribute("aria-expanded",i?"false":"true"),n.setAttribute("aria-hidden",r?"false":"true"),o)||(n.style.display=i?"none":"",null!==t.getAttribute("open")?t.removeAttribute("open"):t.setAttribute("open","open"));return!0},i.prototype.destroy=function(t){t.removeEventListener("keypress"),t.removeEventListener("keyup"),t.removeEventListener("click")},function(t){var e,n,o;"DOMTokenList"in this&&(!("classList"in(e=document.createElement("x")))||!e.classList.toggle("x",!1)&&!e.className)||("DOMTokenList"in(n=this)&&n.DOMTokenList&&(!document.createElementNS||!document.createElementNS("http://www.w3.org/2000/svg","svg")||document.createElementNS("http://www.w3.org/2000/svg","svg").classList instanceof DOMTokenList)||(n.DOMTokenList=function(){var e=!0,n=function(t,n,o,i){Object.defineProperty?Object.defineProperty(t,n,{configurable:!1===e||!!i,get:o}):t.__defineGetter__(n,o)};try{n({},"support")}catch(t){e=!1}return function(e,o){var i=this,r=[],a={},s=0,c=0,l=function(t){n(i,t,function(){return d(),r[t]},!1)},u=function(){if(s>=c)for(;c<s;++c)l(c)},d=function(){var t,n,i=arguments,c=/\s+/;if(i.length)for(n=0;n<i.length;++n)if(c.test(i[n]))throw(t=new SyntaxError('String "'+i[n]+'" contains an invalid character')).code=5,t.name="InvalidCharacterError",t;for(""===(r="object"==typeof e[o]?(""+e[o].baseVal).replace(/^\s+|\s+$/g,"").split(c):(""+e[o]).replace(/^\s+|\s+$/g,"").split(c))[0]&&(r=[]),a={},n=0;n<r.length;++n)a[r[n]]=!0;s=r.length,u()};return d(),n(i,"length",function(){return d(),s}),i.toLocaleString=i.toString=function(){return d(),r.join(" ")},i.item=function(t){return d(),r[t]},i.contains=function(t){return d(),!!a[t]},i.add=function(){d.apply(i,t=arguments);for(var t,n,c=0,l=t.length;c<l;++c)n=t[c],a[n]||(r.push(n),a[n]=!0);s!==r.length&&(s=r.length>>>0,"object"==typeof e[o]?e[o].baseVal=r.join(" "):e[o]=r.join(" "),u())},i.remove=function(){d.apply(i,t=arguments);for(var t,n={},c=0,l=[];c<t.length;++c)n[t[c]]=!0,delete a[t[c]];for(c=0;c<r.length;++c)n[r[c]]||l.push(r[c]);r=l,s=l.length>>>0,"object"==typeof e[o]?e[o].baseVal=r.join(" "):e[o]=r.join(" "),u()},i.toggle=function(e,n){return d.apply(i,[e]),t!==n?n?(i.add(e),!0):(i.remove(e),!1):a[e]?(i.remove(e),!1):(i.add(e),!0)},i}}()),"classList"in(o=document.createElement("span"))&&(o.classList.toggle("x",!1),o.classList.contains("x")&&(o.classList.constructor.prototype.toggle=function(e){var n=arguments[1];if(n===t){var o=!this.contains(e);return this[o?"add":"remove"](e),o}return this[(n=!!n)?"add":"remove"](e),n})),function(){var t=document.createElement("span");if("classList"in t&&(t.classList.add("a","b"),!t.classList.contains("b"))){var e=t.classList.constructor.prototype.add;t.classList.constructor.prototype.add=function(){for(var t=arguments,n=arguments.length,o=0;o<n;o++)e.call(this,t[o])}}}(),function(){var t=document.createElement("span");if("classList"in t&&(t.classList.add("a"),t.classList.add("b"),t.classList.remove("a","b"),t.classList.contains("b"))){var e=t.classList.constructor.prototype.remove;t.classList.constructor.prototype.remove=function(){for(var t=arguments,n=arguments.length,o=0;o<n;o++)e.call(this,t[o])}}}())}.call("object"==typeof window&&window||"object"==typeof self&&self||"object"==typeof global&&global||{}),function(t){var e;"document"in this&&"classList"in document.documentElement&&"Element"in this&&"classList"in Element.prototype&&((e=document.createElement("span")).classList.add("a","b"),e.classList.contains("b"))||function(t){var e=!0,n=function(t,n,o,i){Object.defineProperty?Object.defineProperty(t,n,{configurable:!1===e||!!i,get:o}):t.__defineGetter__(n,o)};try{n({},"support")}catch(t){e=!1}var o=function(t,i,r){n(t.prototype,i,function(){var t,a=this,s="__defineGetter__DEFINE_PROPERTY"+i;if(a[s])return t;if(a[s]=!0,!1===e){for(var c,l=o.mirror||document.createElement("div"),u=l.childNodes,d=u.length,p=0;p<d;++p)if(u[p]._R===a){c=u[p];break}c||(c=l.appendChild(document.createElement("div"))),t=DOMTokenList.call(c,a,r)}else t=new DOMTokenList(a,r);return n(a,i,function(){return t}),delete a[s],t},!0)};o(t.Element,"classList","className"),o(t.HTMLElement,"classList","className"),o(t.HTMLLinkElement,"relList","rel"),o(t.HTMLAnchorElement,"relList","rel"),o(t.HTMLAreaElement,"relList","rel")}(this)}.call("object"==typeof window&&window||"object"==typeof self&&self||"object"==typeof global&&global||{}),r.prototype.init=function(){var t=this.$module;e(this.$inputs,function(e){var n=e.getAttribute("data-aria-controls");n&&t.querySelector("#"+n)&&(e.setAttribute("aria-controls",n),e.removeAttribute("data-aria-controls"),this.setAttributes(e))}.bind(this)),t.addEventListener("click",this.handleClick.bind(this))},r.prototype.setAttributes=function(t){var e=t.checked;t.setAttribute("aria-expanded",e),document.querySelector("#"+t.getAttribute("aria-controls")).classList.toggle("govuk-checkboxes__conditional--hidden",!e)},r.prototype.handleClick=function(t){var e=t.target,n="checkbox"===e.getAttribute("type"),o=e.getAttribute("aria-controls");n&&o&&this.setAttributes(e)},a.prototype.init=function(){var t=this.$module;t&&window.addEventListener("load",function(){t.focus()})},s.prototype.init=function(){var t=this.$module;if(t){var e=t.querySelector(".js-header-toggle");e&&e.addEventListener("click",this.handleClick.bind(this))}},s.prototype.toggleClass=function(t,e){t.className.indexOf(e)>0?t.className=t.className.replace(" "+e,""):t.className+=" "+e},s.prototype.handleClick=function(t){var e=this.$module,n=t.target||t.srcElement,o=e.querySelector("#"+n.getAttribute("aria-controls"));n&&o&&(this.toggleClass(o,"govuk-header__navigation--open"),this.toggleClass(n,"govuk-header__menu-button--open"),n.setAttribute("aria-expanded","true"!==n.getAttribute("aria-expanded")),o.setAttribute("aria-hidden","false"===o.getAttribute("aria-hidden")))},c.prototype.init=function(){var t=this.$module;e(this.$inputs,function(e){var n=e.getAttribute("data-aria-controls");n&&t.querySelector("#"+n)&&(e.setAttribute("aria-controls",n),e.removeAttribute("data-aria-controls"),this.setAttributes(e))}.bind(this)),t.addEventListener("click",this.handleClick.bind(this))},c.prototype.setAttributes=function(t){var e=t.checked;t.setAttribute("aria-expanded",e),document.querySelector("#"+t.getAttribute("aria-controls")).classList.toggle("govuk-radios__conditional--hidden",!e)},c.prototype.handleClick=function(t){e(this.$inputs,function(t){var e="radio"===t.getAttribute("type"),n=t.getAttribute("aria-controls");e&&n&&this.setAttributes(t)}.bind(this))},l.prototype.init=function(){"function"==typeof window.matchMedia?this.setupResponsiveChecks():this.setup()},l.prototype.setupResponsiveChecks=function(){this.mql=window.matchMedia("(min-width: 40.0625em)"),this.mql.addListener(this.checkMode.bind(this)),this.checkMode()},l.prototype.checkMode=function(){this.mql.matches?this.setup():this.teardown()},l.prototype.setup=function(){var t=this.$module,n=this.$tabs,o=t.querySelector(".govuk-tabs__list"),i=t.querySelectorAll(".govuk-tabs__list-item");if(n&&o&&i){o.setAttribute("role","tablist"),e(i,function(t){t.setAttribute("role","presentation")}),e(n,function(t){this.setAttributes(t),t.boundTabClick=this.onTabClick.bind(this),t.boundTabKeydown=this.onTabKeydown.bind(this),t.addEventListener("click",t.boundTabClick,!0),t.addEventListener("keydown",t.boundTabKeydown,!0),this.hideTab(t)}.bind(this));var r=this.getTab(window.location.hash)||this.$tabs[0];this.showTab(r),t.boundOnHashChange=this.onHashChange.bind(this),window.addEventListener("hashchange",t.boundOnHashChange,!0)}},l.prototype.teardown=function(){var t=this.$module,n=this.$tabs,o=t.querySelector(".govuk-tabs__list"),i=t.querySelectorAll(".govuk-tabs__list-item");n&&o&&i&&(o.removeAttribute("role"),e(i,function(t){t.removeAttribute("role","presentation")}),e(n,function(t){t.removeEventListener("click",t.boundTabClick,!0),t.removeEventListener("keydown",t.boundTabKeydown,!0),this.unsetAttributes(t)}.bind(this)),window.removeEventListener("hashchange",t.boundOnHashChange,!0))},l.prototype.onHashChange=function(t){var e=window.location.hash;if(this.hasTab(e))if(this.changingHash)this.changingHash=!1;else{var n=this.getCurrentTab(),o=this.getTab(e)||this.$tabs[0];this.hideTab(n),this.showTab(o),o.focus()}},l.prototype.hasTab=function(t){return this.$module.querySelector(t)},l.prototype.hideTab=function(t){this.unhighlightTab(t),this.hidePanel(t)},l.prototype.showTab=function(t){this.highlightTab(t),this.showPanel(t)},l.prototype.getTab=function(t){return this.$module.querySelector('a[role="tab"][href="'+t+'"]')},l.prototype.setAttributes=function(t){var e=this.getHref(t).slice(1);t.setAttribute("id","tab_"+e),t.setAttribute("role","tab"),t.setAttribute("aria-controls",e),t.setAttribute("tabindex","-1");var n=this.getPanel(t);n.setAttribute("role","tabpanel"),n.setAttribute("aria-labelledby",t.id),n.classList.add(this.jsHiddenClass)},l.prototype.unsetAttributes=function(t){t.removeAttribute("id"),t.removeAttribute("role"),t.removeAttribute("aria-controls"),t.removeAttribute("tabindex");var e=this.getPanel(t);e.removeAttribute("role"),e.removeAttribute("aria-labelledby"),e.classList.remove(this.jsHiddenClass)},l.prototype.onTabClick=function(t){t.preventDefault();var e=t.target,n=this.getCurrentTab();this.hideTab(n),this.showTab(e),this.createHistoryEntry(e)},l.prototype.createHistoryEntry=function(t){var e=this.getPanel(t),n=e.id;e.id="",this.changingHash=!0,window.location.hash=this.getHref(t).slice(1),e.id=n},l.prototype.onTabKeydown=function(t){switch(t.keyCode){case this.keys.left:case this.keys.up:this.activatePreviousTab(),t.preventDefault();break;case this.keys.right:case this.keys.down:this.activateNextTab(),t.preventDefault()}},l.prototype.activateNextTab=function(){var t=this.getCurrentTab(),e=t.parentNode.nextElementSibling;if(e)var n=e.firstElementChild;n&&(this.hideTab(t),this.showTab(n),n.focus(),this.createHistoryEntry(n))},l.prototype.activatePreviousTab=function(){var t=this.getCurrentTab(),e=t.parentNode.previousElementSibling;if(e)var n=e.firstElementChild;n&&(this.hideTab(t),this.showTab(n),n.focus(),this.createHistoryEntry(n))},l.prototype.getPanel=function(t){return this.$module.querySelector(this.getHref(t))},l.prototype.showPanel=function(t){this.getPanel(t).classList.remove(this.jsHiddenClass)},l.prototype.hidePanel=function(t){this.getPanel(t).classList.add(this.jsHiddenClass)},l.prototype.unhighlightTab=function(t){t.setAttribute("aria-selected","false"),t.setAttribute("tabindex","-1")},l.prototype.highlightTab=function(t){t.setAttribute("aria-selected","true"),t.setAttribute("tabindex","0")},l.prototype.getCurrentTab=function(){return this.$module.querySelector("[role=tab][aria-selected=true]")},l.prototype.getHref=function(t){var e=t.getAttribute("href");return e.slice(e.indexOf("#"),e.length)},t.initAll=function(){new n(document).init(),e(document.querySelectorAll("details"),function(t){new i(t).init()}),e(document.querySelectorAll('[data-module="checkboxes"]'),function(t){new r(t).init()}),new a(document.querySelector('[data-module="error-summary"]')).init(),new s(document.querySelector('[data-module="header"]')).init(),e(document.querySelectorAll('[data-module="radios"]'),function(t){new c(t).init()}),e(document.querySelectorAll('[data-module="tabs"]'),function(t){new l(t).init()})},t.Button=n,t.Details=i,t.Checkboxes=r,t.ErrorSummary=a,t.Header=s,t.Radios=c,t.Tabs=l});
