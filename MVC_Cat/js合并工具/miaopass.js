/*! jQuery v1.9.1 | (c) 2005, 2012 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery.min.map
*/(function(e,t){var n,r,i=typeof t,o=e.document,a=e.location,s=e.jQuery,u=e.$,l={},c=[],p="1.9.1",f=c.concat,d=c.push,h=c.slice,g=c.indexOf,m=l.toString,y=l.hasOwnProperty,v=p.trim,b=function(e,t){return new b.fn.init(e,t,r)},x=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,w=/\S+/g,T=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,N=/^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,k=/^[\],:{}\s]*$/,E=/(?:^|:|,)(?:\s*\[)+/g,S=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,A=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,j=/^-ms-/,D=/-([\da-z])/gi,L=function(e,t){return t.toUpperCase()},H=function(e){(o.addEventListener||"load"===e.type||"complete"===o.readyState)&&(q(),b.ready())},q=function(){o.addEventListener?(o.removeEventListener("DOMContentLoaded",H,!1),e.removeEventListener("load",H,!1)):(o.detachEvent("onreadystatechange",H),e.detachEvent("onload",H))};b.fn=b.prototype={jquery:p,constructor:b,init:function(e,n,r){var i,a;if(!e)return this;if("string"==typeof e){if(i="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:N.exec(e),!i||!i[1]&&n)return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e);if(i[1]){if(n=n instanceof b?n[0]:n,b.merge(this,b.parseHTML(i[1],n&&n.nodeType?n.ownerDocument||n:o,!0)),C.test(i[1])&&b.isPlainObject(n))for(i in n)b.isFunction(this[i])?this[i](n[i]):this.attr(i,n[i]);return this}if(a=o.getElementById(i[2]),a&&a.parentNode){if(a.id!==i[2])return r.find(e);this.length=1,this[0]=a}return this.context=o,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):b.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),b.makeArray(e,this))},selector:"",length:0,size:function(){return this.length},toArray:function(){return h.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=b.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return b.each(this,e,t)},ready:function(e){return b.ready.promise().done(e),this},slice:function(){return this.pushStack(h.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(b.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:d,sort:[].sort,splice:[].splice},b.fn.init.prototype=b.fn,b.extend=b.fn.extend=function(){var e,n,r,i,o,a,s=arguments[0]||{},u=1,l=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[1]||{},u=2),"object"==typeof s||b.isFunction(s)||(s={}),l===u&&(s=this,--u);l>u;u++)if(null!=(o=arguments[u]))for(i in o)e=s[i],r=o[i],s!==r&&(c&&r&&(b.isPlainObject(r)||(n=b.isArray(r)))?(n?(n=!1,a=e&&b.isArray(e)?e:[]):a=e&&b.isPlainObject(e)?e:{},s[i]=b.extend(c,a,r)):r!==t&&(s[i]=r));return s},b.extend({noConflict:function(t){return e.$===b&&(e.$=u),t&&e.jQuery===b&&(e.jQuery=s),b},isReady:!1,readyWait:1,holdReady:function(e){e?b.readyWait++:b.ready(!0)},ready:function(e){if(e===!0?!--b.readyWait:!b.isReady){if(!o.body)return setTimeout(b.ready);b.isReady=!0,e!==!0&&--b.readyWait>0||(n.resolveWith(o,[b]),b.fn.trigger&&b(o).trigger("ready").off("ready"))}},isFunction:function(e){return"function"===b.type(e)},isArray:Array.isArray||function(e){return"array"===b.type(e)},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[m.call(e)]||"object":typeof e},isPlainObject:function(e){if(!e||"object"!==b.type(e)||e.nodeType||b.isWindow(e))return!1;try{if(e.constructor&&!y.call(e,"constructor")&&!y.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(n){return!1}var r;for(r in e);return r===t||y.call(e,r)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||o;var r=C.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=b.buildFragment([e],t,i),i&&b(i).remove(),b.merge([],r.childNodes))},parseJSON:function(n){return e.JSON&&e.JSON.parse?e.JSON.parse(n):null===n?n:"string"==typeof n&&(n=b.trim(n),n&&k.test(n.replace(S,"@").replace(A,"]").replace(E,"")))?Function("return "+n)():(b.error("Invalid JSON: "+n),t)},parseXML:function(n){var r,i;if(!n||"string"!=typeof n)return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(o){r=t}return r&&r.documentElement&&!r.getElementsByTagName("parsererror").length||b.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&b.trim(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(j,"ms-").replace(D,L)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,a=M(e);if(n){if(a){for(;o>i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(a){for(;o>i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:v&&!v.call("\ufeff\u00a0")?function(e){return null==e?"":v.call(e)}:function(e){return null==e?"":(e+"").replace(T,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(M(Object(e))?b.merge(n,"string"==typeof e?[e]:e):d.call(n,e)),n},inArray:function(e,t,n){var r;if(t){if(g)return g.call(t,e,n);for(r=t.length,n=n?0>n?Math.max(0,r+n):n:0;r>n;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,o=0;if("number"==typeof r)for(;r>o;o++)e[i++]=n[o];else while(n[o]!==t)e[i++]=n[o++];return e.length=i,e},grep:function(e,t,n){var r,i=[],o=0,a=e.length;for(n=!!n;a>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,a=M(e),s=[];if(a)for(;o>i;i++)r=t(e[i],i,n),null!=r&&(s[s.length]=r);else for(i in e)r=t(e[i],i,n),null!=r&&(s[s.length]=r);return f.apply([],s)},guid:1,proxy:function(e,n){var r,i,o;return"string"==typeof n&&(o=e[n],n=e,e=o),b.isFunction(e)?(r=h.call(arguments,2),i=function(){return e.apply(n||this,r.concat(h.call(arguments)))},i.guid=e.guid=e.guid||b.guid++,i):t},access:function(e,n,r,i,o,a,s){var u=0,l=e.length,c=null==r;if("object"===b.type(r)){o=!0;for(u in r)b.access(e,n,u,r[u],!0,a,s)}else if(i!==t&&(o=!0,b.isFunction(i)||(s=!0),c&&(s?(n.call(e,i),n=null):(c=n,n=function(e,t,n){return c.call(b(e),n)})),n))for(;l>u;u++)n(e[u],r,s?i:i.call(e[u],u,n(e[u],r)));return o?e:c?n.call(e):l?n(e[0],r):a},now:function(){return(new Date).getTime()}}),b.ready.promise=function(t){if(!n)if(n=b.Deferred(),"complete"===o.readyState)setTimeout(b.ready);else if(o.addEventListener)o.addEventListener("DOMContentLoaded",H,!1),e.addEventListener("load",H,!1);else{o.attachEvent("onreadystatechange",H),e.attachEvent("onload",H);var r=!1;try{r=null==e.frameElement&&o.documentElement}catch(i){}r&&r.doScroll&&function a(){if(!b.isReady){try{r.doScroll("left")}catch(e){return setTimeout(a,50)}q(),b.ready()}}()}return n.promise(t)},b.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function M(e){var t=e.length,n=b.type(e);return b.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}r=b(o);var _={};function F(e){var t=_[e]={};return b.each(e.match(w)||[],function(e,n){t[n]=!0}),t}b.Callbacks=function(e){e="string"==typeof e?_[e]||F(e):b.extend({},e);var n,r,i,o,a,s,u=[],l=!e.once&&[],c=function(t){for(r=e.memory&&t,i=!0,a=s||0,s=0,o=u.length,n=!0;u&&o>a;a++)if(u[a].apply(t[0],t[1])===!1&&e.stopOnFalse){r=!1;break}n=!1,u&&(l?l.length&&c(l.shift()):r?u=[]:p.disable())},p={add:function(){if(u){var t=u.length;(function i(t){b.each(t,function(t,n){var r=b.type(n);"function"===r?e.unique&&p.has(n)||u.push(n):n&&n.length&&"string"!==r&&i(n)})})(arguments),n?o=u.length:r&&(s=t,c(r))}return this},remove:function(){return u&&b.each(arguments,function(e,t){var r;while((r=b.inArray(t,u,r))>-1)u.splice(r,1),n&&(o>=r&&o--,a>=r&&a--)}),this},has:function(e){return e?b.inArray(e,u)>-1:!(!u||!u.length)},empty:function(){return u=[],this},disable:function(){return u=l=r=t,this},disabled:function(){return!u},lock:function(){return l=t,r||p.disable(),this},locked:function(){return!l},fireWith:function(e,t){return t=t||[],t=[e,t.slice?t.slice():t],!u||i&&!l||(n?l.push(t):c(t)),this},fire:function(){return p.fireWith(this,arguments),this},fired:function(){return!!i}};return p},b.extend({Deferred:function(e){var t=[["resolve","done",b.Callbacks("once memory"),"resolved"],["reject","fail",b.Callbacks("once memory"),"rejected"],["notify","progress",b.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return b.Deferred(function(n){b.each(t,function(t,o){var a=o[0],s=b.isFunction(e[t])&&e[t];i[o[1]](function(){var e=s&&s.apply(this,arguments);e&&b.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[a+"With"](this===r?n.promise():this,s?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?b.extend(e,r):r}},i={};return r.pipe=r.then,b.each(t,function(e,o){var a=o[2],s=o[3];r[o[1]]=a.add,s&&a.add(function(){n=s},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=a.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=h.call(arguments),r=n.length,i=1!==r||e&&b.isFunction(e.promise)?r:0,o=1===i?e:b.Deferred(),a=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?h.call(arguments):r,n===s?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},s,u,l;if(r>1)for(s=Array(r),u=Array(r),l=Array(r);r>t;t++)n[t]&&b.isFunction(n[t].promise)?n[t].promise().done(a(t,l,n)).fail(o.reject).progress(a(t,u,s)):--i;return i||o.resolveWith(l,n),o.promise()}}),b.support=function(){var t,n,r,a,s,u,l,c,p,f,d=o.createElement("div");if(d.setAttribute("className","t"),d.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=d.getElementsByTagName("*"),r=d.getElementsByTagName("a")[0],!n||!r||!n.length)return{};s=o.createElement("select"),l=s.appendChild(o.createElement("option")),a=d.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t={getSetAttribute:"t"!==d.className,leadingWhitespace:3===d.firstChild.nodeType,tbody:!d.getElementsByTagName("tbody").length,htmlSerialize:!!d.getElementsByTagName("link").length,style:/top/.test(r.getAttribute("style")),hrefNormalized:"/a"===r.getAttribute("href"),opacity:/^0.5/.test(r.style.opacity),cssFloat:!!r.style.cssFloat,checkOn:!!a.value,optSelected:l.selected,enctype:!!o.createElement("form").enctype,html5Clone:"<:nav></:nav>"!==o.createElement("nav").cloneNode(!0).outerHTML,boxModel:"CSS1Compat"===o.compatMode,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},a.checked=!0,t.noCloneChecked=a.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!l.disabled;try{delete d.test}catch(h){t.deleteExpando=!1}a=o.createElement("input"),a.setAttribute("value",""),t.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),t.radioValue="t"===a.value,a.setAttribute("checked","t"),a.setAttribute("name","t"),u=o.createDocumentFragment(),u.appendChild(a),t.appendChecked=a.checked,t.checkClone=u.cloneNode(!0).cloneNode(!0).lastChild.checked,d.attachEvent&&(d.attachEvent("onclick",function(){t.noCloneEvent=!1}),d.cloneNode(!0).click());for(f in{submit:!0,change:!0,focusin:!0})d.setAttribute(c="on"+f,"t"),t[f+"Bubbles"]=c in e||d.attributes[c].expando===!1;return d.style.backgroundClip="content-box",d.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===d.style.backgroundClip,b(function(){var n,r,a,s="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",u=o.getElementsByTagName("body")[0];u&&(n=o.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",u.appendChild(n).appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",a=d.getElementsByTagName("td"),a[0].style.cssText="padding:0;margin:0;border:0;display:none",p=0===a[0].offsetHeight,a[0].style.display="",a[1].style.display="none",t.reliableHiddenOffsets=p&&0===a[0].offsetHeight,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",t.boxSizing=4===d.offsetWidth,t.doesNotIncludeMarginInBodyOffset=1!==u.offsetTop,e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(d,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(d,null)||{width:"4px"}).width,r=d.appendChild(o.createElement("div")),r.style.cssText=d.style.cssText=s,r.style.marginRight=r.style.width="0",d.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),typeof d.style.zoom!==i&&(d.innerHTML="",d.style.cssText=s+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=3===d.offsetWidth,d.style.display="block",d.innerHTML="<div></div>",d.firstChild.style.width="5px",t.shrinkWrapBlocks=3!==d.offsetWidth,t.inlineBlockNeedsLayout&&(u.style.zoom=1)),u.removeChild(n),n=d=a=r=null)}),n=s=u=l=r=a=null,t}();var O=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,B=/([A-Z])/g;function P(e,n,r,i){if(b.acceptData(e)){var o,a,s=b.expando,u="string"==typeof n,l=e.nodeType,p=l?b.cache:e,f=l?e[s]:e[s]&&s;if(f&&p[f]&&(i||p[f].data)||!u||r!==t)return f||(l?e[s]=f=c.pop()||b.guid++:f=s),p[f]||(p[f]={},l||(p[f].toJSON=b.noop)),("object"==typeof n||"function"==typeof n)&&(i?p[f]=b.extend(p[f],n):p[f].data=b.extend(p[f].data,n)),o=p[f],i||(o.data||(o.data={}),o=o.data),r!==t&&(o[b.camelCase(n)]=r),u?(a=o[n],null==a&&(a=o[b.camelCase(n)])):a=o,a}}function R(e,t,n){if(b.acceptData(e)){var r,i,o,a=e.nodeType,s=a?b.cache:e,u=a?e[b.expando]:b.expando;if(s[u]){if(t&&(o=n?s[u]:s[u].data)){b.isArray(t)?t=t.concat(b.map(t,b.camelCase)):t in o?t=[t]:(t=b.camelCase(t),t=t in o?[t]:t.split(" "));for(r=0,i=t.length;i>r;r++)delete o[t[r]];if(!(n?$:b.isEmptyObject)(o))return}(n||(delete s[u].data,$(s[u])))&&(a?b.cleanData([e],!0):b.support.deleteExpando||s!=s.window?delete s[u]:s[u]=null)}}}b.extend({cache:{},expando:"jQuery"+(p+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(e){return e=e.nodeType?b.cache[e[b.expando]]:e[b.expando],!!e&&!$(e)},data:function(e,t,n){return P(e,t,n)},removeData:function(e,t){return R(e,t)},_data:function(e,t,n){return P(e,t,n,!0)},_removeData:function(e,t){return R(e,t,!0)},acceptData:function(e){if(e.nodeType&&1!==e.nodeType&&9!==e.nodeType)return!1;var t=e.nodeName&&b.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),b.fn.extend({data:function(e,n){var r,i,o=this[0],a=0,s=null;if(e===t){if(this.length&&(s=b.data(o),1===o.nodeType&&!b._data(o,"parsedAttrs"))){for(r=o.attributes;r.length>a;a++)i=r[a].name,i.indexOf("data-")||(i=b.camelCase(i.slice(5)),W(o,i,s[i]));b._data(o,"parsedAttrs",!0)}return s}return"object"==typeof e?this.each(function(){b.data(this,e)}):b.access(this,function(n){return n===t?o?W(o,e,b.data(o,e)):null:(this.each(function(){b.data(this,e,n)}),t)},null,n,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){b.removeData(this,e)})}});function W(e,n,r){if(r===t&&1===e.nodeType){var i="data-"+n.replace(B,"-$1").toLowerCase();if(r=e.getAttribute(i),"string"==typeof r){try{r="true"===r?!0:"false"===r?!1:"null"===r?null:+r+""===r?+r:O.test(r)?b.parseJSON(r):r}catch(o){}b.data(e,n,r)}else r=t}return r}function $(e){var t;for(t in e)if(("data"!==t||!b.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;return!0}b.extend({queue:function(e,n,r){var i;return e?(n=(n||"fx")+"queue",i=b._data(e,n),r&&(!i||b.isArray(r)?i=b._data(e,n,b.makeArray(r)):i.push(r)),i||[]):t},dequeue:function(e,t){t=t||"fx";var n=b.queue(e,t),r=n.length,i=n.shift(),o=b._queueHooks(e,t),a=function(){b.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),o.cur=i,i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return b._data(e,n)||b._data(e,n,{empty:b.Callbacks("once memory").add(function(){b._removeData(e,t+"queue"),b._removeData(e,n)})})}}),b.fn.extend({queue:function(e,n){var r=2;return"string"!=typeof e&&(n=e,e="fx",r--),r>arguments.length?b.queue(this[0],e):n===t?this:this.each(function(){var t=b.queue(this,e,n);b._queueHooks(this,e),"fx"===e&&"inprogress"!==t[0]&&b.dequeue(this,e)})},dequeue:function(e){return this.each(function(){b.dequeue(this,e)})},delay:function(e,t){return e=b.fx?b.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,o=b.Deferred(),a=this,s=this.length,u=function(){--i||o.resolveWith(a,[a])};"string"!=typeof e&&(n=e,e=t),e=e||"fx";while(s--)r=b._data(a[s],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(u));return u(),o.promise(n)}});var I,z,X=/[\t\r\n]/g,U=/\r/g,V=/^(?:input|select|textarea|button|object)$/i,Y=/^(?:a|area)$/i,J=/^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,G=/^(?:checked|selected)$/i,Q=b.support.getSetAttribute,K=b.support.input;b.fn.extend({attr:function(e,t){return b.access(this,b.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){b.removeAttr(this,e)})},prop:function(e,t){return b.access(this,b.prop,e,t,arguments.length>1)},removeProp:function(e){return e=b.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,o,a=0,s=this.length,u="string"==typeof e&&e;if(b.isFunction(e))return this.each(function(t){b(this).addClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(X," "):" ")){o=0;while(i=t[o++])0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=b.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,a=0,s=this.length,u=0===arguments.length||"string"==typeof e&&e;if(b.isFunction(e))return this.each(function(t){b(this).removeClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(X," "):"")){o=0;while(i=t[o++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");n.className=e?b.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e,r="boolean"==typeof t;return b.isFunction(e)?this.each(function(n){b(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n){var o,a=0,s=b(this),u=t,l=e.match(w)||[];while(o=l[a++])u=r?u:!s.hasClass(o),s[u?"addClass":"removeClass"](o)}else(n===i||"boolean"===n)&&(this.className&&b._data(this,"__className__",this.className),this.className=this.className||e===!1?"":b._data(this,"__className__")||"")})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(X," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,o=this[0];{if(arguments.length)return i=b.isFunction(e),this.each(function(n){var o,a=b(this);1===this.nodeType&&(o=i?e.call(this,n,a.val()):e,null==o?o="":"number"==typeof o?o+="":b.isArray(o)&&(o=b.map(o,function(e){return null==e?"":e+""})),r=b.valHooks[this.type]||b.valHooks[this.nodeName.toLowerCase()],r&&"set"in r&&r.set(this,o,"value")!==t||(this.value=o))});if(o)return r=b.valHooks[o.type]||b.valHooks[o.nodeName.toLowerCase()],r&&"get"in r&&(n=r.get(o,"value"))!==t?n:(n=o.value,"string"==typeof n?n.replace(U,""):null==n?"":n)}}}),b.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,a=o?null:[],s=o?i+1:r.length,u=0>i?s:o?i:0;for(;s>u;u++)if(n=r[u],!(!n.selected&&u!==i||(b.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&b.nodeName(n.parentNode,"optgroup"))){if(t=b(n).val(),o)return t;a.push(t)}return a},set:function(e,t){var n=b.makeArray(t);return b(e).find("option").each(function(){this.selected=b.inArray(b(this).val(),n)>=0}),n.length||(e.selectedIndex=-1),n}}},attr:function(e,n,r){var o,a,s,u=e.nodeType;if(e&&3!==u&&8!==u&&2!==u)return typeof e.getAttribute===i?b.prop(e,n,r):(a=1!==u||!b.isXMLDoc(e),a&&(n=n.toLowerCase(),o=b.attrHooks[n]||(J.test(n)?z:I)),r===t?o&&a&&"get"in o&&null!==(s=o.get(e,n))?s:(typeof e.getAttribute!==i&&(s=e.getAttribute(n)),null==s?t:s):null!==r?o&&a&&"set"in o&&(s=o.set(e,r,n))!==t?s:(e.setAttribute(n,r+""),r):(b.removeAttr(e,n),t))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(w);if(o&&1===e.nodeType)while(n=o[i++])r=b.propFix[n]||n,J.test(n)?!Q&&G.test(n)?e[b.camelCase("default-"+n)]=e[r]=!1:e[r]=!1:b.attr(e,n,""),e.removeAttribute(Q?n:r)},attrHooks:{type:{set:function(e,t){if(!b.support.radioValue&&"radio"===t&&b.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(e,n,r){var i,o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return a=1!==s||!b.isXMLDoc(e),a&&(n=b.propFix[n]||n,o=b.propHooks[n]),r!==t?o&&"set"in o&&(i=o.set(e,r,n))!==t?i:e[n]=r:o&&"get"in o&&null!==(i=o.get(e,n))?i:e[n]},propHooks:{tabIndex:{get:function(e){var n=e.getAttributeNode("tabindex");return n&&n.specified?parseInt(n.value,10):V.test(e.nodeName)||Y.test(e.nodeName)&&e.href?0:t}}}}),z={get:function(e,n){var r=b.prop(e,n),i="boolean"==typeof r&&e.getAttribute(n),o="boolean"==typeof r?K&&Q?null!=i:G.test(n)?e[b.camelCase("default-"+n)]:!!i:e.getAttributeNode(n);return o&&o.value!==!1?n.toLowerCase():t},set:function(e,t,n){return t===!1?b.removeAttr(e,n):K&&Q||!G.test(n)?e.setAttribute(!Q&&b.propFix[n]||n,n):e[b.camelCase("default-"+n)]=e[n]=!0,n}},K&&Q||(b.attrHooks.value={get:function(e,n){var r=e.getAttributeNode(n);return b.nodeName(e,"input")?e.defaultValue:r&&r.specified?r.value:t},set:function(e,n,r){return b.nodeName(e,"input")?(e.defaultValue=n,t):I&&I.set(e,n,r)}}),Q||(I=b.valHooks.button={get:function(e,n){var r=e.getAttributeNode(n);return r&&("id"===n||"name"===n||"coords"===n?""!==r.value:r.specified)?r.value:t},set:function(e,n,r){var i=e.getAttributeNode(r);return i||e.setAttributeNode(i=e.ownerDocument.createAttribute(r)),i.value=n+="","value"===r||n===e.getAttribute(r)?n:t}},b.attrHooks.contenteditable={get:I.get,set:function(e,t,n){I.set(e,""===t?!1:t,n)}},b.each(["width","height"],function(e,n){b.attrHooks[n]=b.extend(b.attrHooks[n],{set:function(e,r){return""===r?(e.setAttribute(n,"auto"),r):t}})})),b.support.hrefNormalized||(b.each(["href","src","width","height"],function(e,n){b.attrHooks[n]=b.extend(b.attrHooks[n],{get:function(e){var r=e.getAttribute(n,2);return null==r?t:r}})}),b.each(["href","src"],function(e,t){b.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}})),b.support.style||(b.attrHooks.style={get:function(e){return e.style.cssText||t},set:function(e,t){return e.style.cssText=t+""}}),b.support.optSelected||(b.propHooks.selected=b.extend(b.propHooks.selected,{get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}})),b.support.enctype||(b.propFix.enctype="encoding"),b.support.checkOn||b.each(["radio","checkbox"],function(){b.valHooks[this]={get:function(e){return null===e.getAttribute("value")?"on":e.value}}}),b.each(["radio","checkbox"],function(){b.valHooks[this]=b.extend(b.valHooks[this],{set:function(e,n){return b.isArray(n)?e.checked=b.inArray(b(e).val(),n)>=0:t}})});var Z=/^(?:input|select|textarea)$/i,et=/^key/,tt=/^(?:mouse|contextmenu)|click/,nt=/^(?:focusinfocus|focusoutblur)$/,rt=/^([^.]*)(?:\.(.+)|)$/;function it(){return!0}function ot(){return!1}b.event={global:{},add:function(e,n,r,o,a){var s,u,l,c,p,f,d,h,g,m,y,v=b._data(e);if(v){r.handler&&(c=r,r=c.handler,a=c.selector),r.guid||(r.guid=b.guid++),(u=v.events)||(u=v.events={}),(f=v.handle)||(f=v.handle=function(e){return typeof b===i||e&&b.event.triggered===e.type?t:b.event.dispatch.apply(f.elem,arguments)},f.elem=e),n=(n||"").match(w)||[""],l=n.length;while(l--)s=rt.exec(n[l])||[],g=y=s[1],m=(s[2]||"").split(".").sort(),p=b.event.special[g]||{},g=(a?p.delegateType:p.bindType)||g,p=b.event.special[g]||{},d=b.extend({type:g,origType:y,data:o,handler:r,guid:r.guid,selector:a,needsContext:a&&b.expr.match.needsContext.test(a),namespace:m.join(".")},c),(h=u[g])||(h=u[g]=[],h.delegateCount=0,p.setup&&p.setup.call(e,o,m,f)!==!1||(e.addEventListener?e.addEventListener(g,f,!1):e.attachEvent&&e.attachEvent("on"+g,f))),p.add&&(p.add.call(e,d),d.handler.guid||(d.handler.guid=r.guid)),a?h.splice(h.delegateCount++,0,d):h.push(d),b.event.global[g]=!0;e=null}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,p,f,d,h,g,m=b.hasData(e)&&b._data(e);if(m&&(c=m.events)){t=(t||"").match(w)||[""],l=t.length;while(l--)if(s=rt.exec(t[l])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){p=b.event.special[d]||{},d=(r?p.delegateType:p.bindType)||d,f=c[d]||[],s=s[2]&&RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),u=o=f.length;while(o--)a=f[o],!i&&g!==a.origType||n&&n.guid!==a.guid||s&&!s.test(a.namespace)||r&&r!==a.selector&&("**"!==r||!a.selector)||(f.splice(o,1),a.selector&&f.delegateCount--,p.remove&&p.remove.call(e,a));u&&!f.length&&(p.teardown&&p.teardown.call(e,h,m.handle)!==!1||b.removeEvent(e,d,m.handle),delete c[d])}else for(d in c)b.event.remove(e,d+t[l],n,r,!0);b.isEmptyObject(c)&&(delete m.handle,b._removeData(e,"events"))}},trigger:function(n,r,i,a){var s,u,l,c,p,f,d,h=[i||o],g=y.call(n,"type")?n.type:n,m=y.call(n,"namespace")?n.namespace.split("."):[];if(l=f=i=i||o,3!==i.nodeType&&8!==i.nodeType&&!nt.test(g+b.event.triggered)&&(g.indexOf(".")>=0&&(m=g.split("."),g=m.shift(),m.sort()),u=0>g.indexOf(":")&&"on"+g,n=n[b.expando]?n:new b.Event(g,"object"==typeof n&&n),n.isTrigger=!0,n.namespace=m.join("."),n.namespace_re=n.namespace?RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,n.result=t,n.target||(n.target=i),r=null==r?[n]:b.makeArray(r,[n]),p=b.event.special[g]||{},a||!p.trigger||p.trigger.apply(i,r)!==!1)){if(!a&&!p.noBubble&&!b.isWindow(i)){for(c=p.delegateType||g,nt.test(c+g)||(l=l.parentNode);l;l=l.parentNode)h.push(l),f=l;f===(i.ownerDocument||o)&&h.push(f.defaultView||f.parentWindow||e)}d=0;while((l=h[d++])&&!n.isPropagationStopped())n.type=d>1?c:p.bindType||g,s=(b._data(l,"events")||{})[n.type]&&b._data(l,"handle"),s&&s.apply(l,r),s=u&&l[u],s&&b.acceptData(l)&&s.apply&&s.apply(l,r)===!1&&n.preventDefault();if(n.type=g,!(a||n.isDefaultPrevented()||p._default&&p._default.apply(i.ownerDocument,r)!==!1||"click"===g&&b.nodeName(i,"a")||!b.acceptData(i)||!u||!i[g]||b.isWindow(i))){f=i[u],f&&(i[u]=null),b.event.triggered=g;try{i[g]()}catch(v){}b.event.triggered=t,f&&(i[u]=f)}return n.result}},dispatch:function(e){e=b.event.fix(e);var n,r,i,o,a,s=[],u=h.call(arguments),l=(b._data(this,"events")||{})[e.type]||[],c=b.event.special[e.type]||{};if(u[0]=e,e.delegateTarget=this,!c.preDispatch||c.preDispatch.call(this,e)!==!1){s=b.event.handlers.call(this,e,l),n=0;while((o=s[n++])&&!e.isPropagationStopped()){e.currentTarget=o.elem,a=0;while((i=o.handlers[a++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(i.namespace))&&(e.handleObj=i,e.data=i.data,r=((b.event.special[i.origType]||{}).handle||i.handler).apply(o.elem,u),r!==t&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,e),e.result}},handlers:function(e,n){var r,i,o,a,s=[],u=n.delegateCount,l=e.target;if(u&&l.nodeType&&(!e.button||"click"!==e.type))for(;l!=this;l=l.parentNode||this)if(1===l.nodeType&&(l.disabled!==!0||"click"!==e.type)){for(o=[],a=0;u>a;a++)i=n[a],r=i.selector+" ",o[r]===t&&(o[r]=i.needsContext?b(r,this).index(l)>=0:b.find(r,this,null,[l]).length),o[r]&&o.push(i);o.length&&s.push({elem:l,handlers:o})}return n.length>u&&s.push({elem:this,handlers:n.slice(u)}),s},fix:function(e){if(e[b.expando])return e;var t,n,r,i=e.type,a=e,s=this.fixHooks[i];s||(this.fixHooks[i]=s=tt.test(i)?this.mouseHooks:et.test(i)?this.keyHooks:{}),r=s.props?this.props.concat(s.props):this.props,e=new b.Event(a),t=r.length;while(t--)n=r[t],e[n]=a[n];return e.target||(e.target=a.srcElement||o),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,a):e},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,i,a,s=n.button,u=n.fromElement;return null==e.pageX&&null!=n.clientX&&(i=e.target.ownerDocument||o,a=i.documentElement,r=i.body,e.pageX=n.clientX+(a&&a.scrollLeft||r&&r.scrollLeft||0)-(a&&a.clientLeft||r&&r.clientLeft||0),e.pageY=n.clientY+(a&&a.scrollTop||r&&r.scrollTop||0)-(a&&a.clientTop||r&&r.clientTop||0)),!e.relatedTarget&&u&&(e.relatedTarget=u===e.target?n.toElement:u),e.which||s===t||(e.which=1&s?1:2&s?3:4&s?2:0),e}},special:{load:{noBubble:!0},click:{trigger:function(){return b.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):t}},focus:{trigger:function(){if(this!==o.activeElement&&this.focus)try{return this.focus(),!1}catch(e){}},delegateType:"focusin"},blur:{trigger:function(){return this===o.activeElement&&this.blur?(this.blur(),!1):t},delegateType:"focusout"},beforeunload:{postDispatch:function(e){e.result!==t&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=b.extend(new b.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?b.event.trigger(i,null,t):b.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},b.removeEvent=o.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]===i&&(e[r]=null),e.detachEvent(r,n))},b.Event=function(e,n){return this instanceof b.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?it:ot):this.type=e,n&&b.extend(this,n),this.timeStamp=e&&e.timeStamp||b.now(),this[b.expando]=!0,t):new b.Event(e,n)},b.Event.prototype={isDefaultPrevented:ot,isPropagationStopped:ot,isImmediatePropagationStopped:ot,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=it,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=it,e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=it,this.stopPropagation()}},b.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){b.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;
return(!i||i!==r&&!b.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),b.support.submitBubbles||(b.event.special.submit={setup:function(){return b.nodeName(this,"form")?!1:(b.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=b.nodeName(n,"input")||b.nodeName(n,"button")?n.form:t;r&&!b._data(r,"submitBubbles")&&(b.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),b._data(r,"submitBubbles",!0))}),t)},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&b.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){return b.nodeName(this,"form")?!1:(b.event.remove(this,"._submit"),t)}}),b.support.changeBubbles||(b.event.special.change={setup:function(){return Z.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(b.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._just_changed=!0)}),b.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),b.event.simulate("change",this,e,!0)})),!1):(b.event.add(this,"beforeactivate._change",function(e){var t=e.target;Z.test(t.nodeName)&&!b._data(t,"changeBubbles")&&(b.event.add(t,"change._change",function(e){!this.parentNode||e.isSimulated||e.isTrigger||b.event.simulate("change",this.parentNode,e,!0)}),b._data(t,"changeBubbles",!0))}),t)},handle:function(e){var n=e.target;return this!==n||e.isSimulated||e.isTrigger||"radio"!==n.type&&"checkbox"!==n.type?e.handleObj.handler.apply(this,arguments):t},teardown:function(){return b.event.remove(this,"._change"),!Z.test(this.nodeName)}}),b.support.focusinBubbles||b.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){b.event.simulate(t,e.target,b.event.fix(e),!0)};b.event.special[t]={setup:function(){0===n++&&o.addEventListener(e,r,!0)},teardown:function(){0===--n&&o.removeEventListener(e,r,!0)}}}),b.fn.extend({on:function(e,n,r,i,o){var a,s;if("object"==typeof e){"string"!=typeof n&&(r=r||n,n=t);for(a in e)this.on(a,n,r,e[a],o);return this}if(null==r&&null==i?(i=n,r=n=t):null==i&&("string"==typeof n?(i=r,r=t):(i=r,r=n,n=t)),i===!1)i=ot;else if(!i)return this;return 1===o&&(s=i,i=function(e){return b().off(e),s.apply(this,arguments)},i.guid=s.guid||(s.guid=b.guid++)),this.each(function(){b.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,o;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,b(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){for(o in e)this.off(o,n,e[o]);return this}return(n===!1||"function"==typeof n)&&(r=n,n=t),r===!1&&(r=ot),this.each(function(){b.event.remove(this,e,r,n)})},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},trigger:function(e,t){return this.each(function(){b.event.trigger(e,t,this)})},triggerHandler:function(e,n){var r=this[0];return r?b.event.trigger(e,n,r,!0):t}}),function(e,t){var n,r,i,o,a,s,u,l,c,p,f,d,h,g,m,y,v,x="sizzle"+-new Date,w=e.document,T={},N=0,C=0,k=it(),E=it(),S=it(),A=typeof t,j=1<<31,D=[],L=D.pop,H=D.push,q=D.slice,M=D.indexOf||function(e){var t=0,n=this.length;for(;n>t;t++)if(this[t]===e)return t;return-1},_="[\\x20\\t\\r\\n\\f]",F="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",O=F.replace("w","w#"),B="([*^$|!~]?=)",P="\\["+_+"*("+F+")"+_+"*(?:"+B+_+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+O+")|)|)"+_+"*\\]",R=":("+F+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+P.replace(3,8)+")*)|.*)\\)|)",W=RegExp("^"+_+"+|((?:^|[^\\\\])(?:\\\\.)*)"+_+"+$","g"),$=RegExp("^"+_+"*,"+_+"*"),I=RegExp("^"+_+"*([\\x20\\t\\r\\n\\f>+~])"+_+"*"),z=RegExp(R),X=RegExp("^"+O+"$"),U={ID:RegExp("^#("+F+")"),CLASS:RegExp("^\\.("+F+")"),NAME:RegExp("^\\[name=['\"]?("+F+")['\"]?\\]"),TAG:RegExp("^("+F.replace("w","w*")+")"),ATTR:RegExp("^"+P),PSEUDO:RegExp("^"+R),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+_+"*(even|odd|(([+-]|)(\\d*)n|)"+_+"*(?:([+-]|)"+_+"*(\\d+)|))"+_+"*\\)|)","i"),needsContext:RegExp("^"+_+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+_+"*((?:-\\d)?\\d*)"+_+"*\\)|)(?=[^-]|$)","i")},V=/[\x20\t\r\n\f]*[+~]/,Y=/^[^{]+\{\s*\[native code/,J=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,G=/^(?:input|select|textarea|button)$/i,Q=/^h\d$/i,K=/'|\\/g,Z=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,et=/\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,tt=function(e,t){var n="0x"+t-65536;return n!==n?t:0>n?String.fromCharCode(n+65536):String.fromCharCode(55296|n>>10,56320|1023&n)};try{q.call(w.documentElement.childNodes,0)[0].nodeType}catch(nt){q=function(e){var t,n=[];while(t=this[e++])n.push(t);return n}}function rt(e){return Y.test(e+"")}function it(){var e,t=[];return e=function(n,r){return t.push(n+=" ")>i.cacheLength&&delete e[t.shift()],e[n]=r}}function ot(e){return e[x]=!0,e}function at(e){var t=p.createElement("div");try{return e(t)}catch(n){return!1}finally{t=null}}function st(e,t,n,r){var i,o,a,s,u,l,f,g,m,v;if((t?t.ownerDocument||t:w)!==p&&c(t),t=t||p,n=n||[],!e||"string"!=typeof e)return n;if(1!==(s=t.nodeType)&&9!==s)return[];if(!d&&!r){if(i=J.exec(e))if(a=i[1]){if(9===s){if(o=t.getElementById(a),!o||!o.parentNode)return n;if(o.id===a)return n.push(o),n}else if(t.ownerDocument&&(o=t.ownerDocument.getElementById(a))&&y(t,o)&&o.id===a)return n.push(o),n}else{if(i[2])return H.apply(n,q.call(t.getElementsByTagName(e),0)),n;if((a=i[3])&&T.getByClassName&&t.getElementsByClassName)return H.apply(n,q.call(t.getElementsByClassName(a),0)),n}if(T.qsa&&!h.test(e)){if(f=!0,g=x,m=t,v=9===s&&e,1===s&&"object"!==t.nodeName.toLowerCase()){l=ft(e),(f=t.getAttribute("id"))?g=f.replace(K,"\\$&"):t.setAttribute("id",g),g="[id='"+g+"'] ",u=l.length;while(u--)l[u]=g+dt(l[u]);m=V.test(e)&&t.parentNode||t,v=l.join(",")}if(v)try{return H.apply(n,q.call(m.querySelectorAll(v),0)),n}catch(b){}finally{f||t.removeAttribute("id")}}}return wt(e.replace(W,"$1"),t,n,r)}a=st.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},c=st.setDocument=function(e){var n=e?e.ownerDocument||e:w;return n!==p&&9===n.nodeType&&n.documentElement?(p=n,f=n.documentElement,d=a(n),T.tagNameNoComments=at(function(e){return e.appendChild(n.createComment("")),!e.getElementsByTagName("*").length}),T.attributes=at(function(e){e.innerHTML="<select></select>";var t=typeof e.lastChild.getAttribute("multiple");return"boolean"!==t&&"string"!==t}),T.getByClassName=at(function(e){return e.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",e.getElementsByClassName&&e.getElementsByClassName("e").length?(e.lastChild.className="e",2===e.getElementsByClassName("e").length):!1}),T.getByName=at(function(e){e.id=x+0,e.innerHTML="<a name='"+x+"'></a><div name='"+x+"'></div>",f.insertBefore(e,f.firstChild);var t=n.getElementsByName&&n.getElementsByName(x).length===2+n.getElementsByName(x+0).length;return T.getIdNotName=!n.getElementById(x),f.removeChild(e),t}),i.attrHandle=at(function(e){return e.innerHTML="<a href='#'></a>",e.firstChild&&typeof e.firstChild.getAttribute!==A&&"#"===e.firstChild.getAttribute("href")})?{}:{href:function(e){return e.getAttribute("href",2)},type:function(e){return e.getAttribute("type")}},T.getIdNotName?(i.find.ID=function(e,t){if(typeof t.getElementById!==A&&!d){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},i.filter.ID=function(e){var t=e.replace(et,tt);return function(e){return e.getAttribute("id")===t}}):(i.find.ID=function(e,n){if(typeof n.getElementById!==A&&!d){var r=n.getElementById(e);return r?r.id===e||typeof r.getAttributeNode!==A&&r.getAttributeNode("id").value===e?[r]:t:[]}},i.filter.ID=function(e){var t=e.replace(et,tt);return function(e){var n=typeof e.getAttributeNode!==A&&e.getAttributeNode("id");return n&&n.value===t}}),i.find.TAG=T.tagNameNoComments?function(e,n){return typeof n.getElementsByTagName!==A?n.getElementsByTagName(e):t}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},i.find.NAME=T.getByName&&function(e,n){return typeof n.getElementsByName!==A?n.getElementsByName(name):t},i.find.CLASS=T.getByClassName&&function(e,n){return typeof n.getElementsByClassName===A||d?t:n.getElementsByClassName(e)},g=[],h=[":focus"],(T.qsa=rt(n.querySelectorAll))&&(at(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||h.push("\\["+_+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),e.querySelectorAll(":checked").length||h.push(":checked")}),at(function(e){e.innerHTML="<input type='hidden' i=''/>",e.querySelectorAll("[i^='']").length&&h.push("[*^$]="+_+"*(?:\"\"|'')"),e.querySelectorAll(":enabled").length||h.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),h.push(",.*:")})),(T.matchesSelector=rt(m=f.matchesSelector||f.mozMatchesSelector||f.webkitMatchesSelector||f.oMatchesSelector||f.msMatchesSelector))&&at(function(e){T.disconnectedMatch=m.call(e,"div"),m.call(e,"[s!='']:x"),g.push("!=",R)}),h=RegExp(h.join("|")),g=RegExp(g.join("|")),y=rt(f.contains)||f.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},v=f.compareDocumentPosition?function(e,t){var r;return e===t?(u=!0,0):(r=t.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(t))?1&r||e.parentNode&&11===e.parentNode.nodeType?e===n||y(w,e)?-1:t===n||y(w,t)?1:0:4&r?-1:1:e.compareDocumentPosition?-1:1}:function(e,t){var r,i=0,o=e.parentNode,a=t.parentNode,s=[e],l=[t];if(e===t)return u=!0,0;if(!o||!a)return e===n?-1:t===n?1:o?-1:a?1:0;if(o===a)return ut(e,t);r=e;while(r=r.parentNode)s.unshift(r);r=t;while(r=r.parentNode)l.unshift(r);while(s[i]===l[i])i++;return i?ut(s[i],l[i]):s[i]===w?-1:l[i]===w?1:0},u=!1,[0,0].sort(v),T.detectDuplicates=u,p):p},st.matches=function(e,t){return st(e,null,null,t)},st.matchesSelector=function(e,t){if((e.ownerDocument||e)!==p&&c(e),t=t.replace(Z,"='$1']"),!(!T.matchesSelector||d||g&&g.test(t)||h.test(t)))try{var n=m.call(e,t);if(n||T.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(r){}return st(t,p,null,[e]).length>0},st.contains=function(e,t){return(e.ownerDocument||e)!==p&&c(e),y(e,t)},st.attr=function(e,t){var n;return(e.ownerDocument||e)!==p&&c(e),d||(t=t.toLowerCase()),(n=i.attrHandle[t])?n(e):d||T.attributes?e.getAttribute(t):((n=e.getAttributeNode(t))||e.getAttribute(t))&&e[t]===!0?t:n&&n.specified?n.value:null},st.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},st.uniqueSort=function(e){var t,n=[],r=1,i=0;if(u=!T.detectDuplicates,e.sort(v),u){for(;t=e[r];r++)t===e[r-1]&&(i=n.push(r));while(i--)e.splice(n[i],1)}return e};function ut(e,t){var n=t&&e,r=n&&(~t.sourceIndex||j)-(~e.sourceIndex||j);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function lt(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function ct(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function pt(e){return ot(function(t){return t=+t,ot(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}o=st.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=o(t);return n},i=st.selectors={cacheLength:50,createPseudo:ot,match:U,find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(et,tt),e[3]=(e[4]||e[5]||"").replace(et,tt),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||st.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&st.error(e[0]),e},PSEUDO:function(e){var t,n=!e[5]&&e[2];return U.CHILD.test(e[0])?null:(e[4]?e[2]=e[4]:n&&z.test(n)&&(t=ft(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){return"*"===e?function(){return!0}:(e=e.replace(et,tt).toLowerCase(),function(t){return t.nodeName&&t.nodeName.toLowerCase()===e})},CLASS:function(e){var t=k[e+" "];return t||(t=RegExp("(^|"+_+")"+e+"("+_+"|$)"))&&k(e,function(e){return t.test(e.className||typeof e.getAttribute!==A&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=st.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,p,f,d,h,g=o!==a?"nextSibling":"previousSibling",m=t.parentNode,y=s&&t.nodeName.toLowerCase(),v=!u&&!s;if(m){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?m.firstChild:m.lastChild],a&&v){c=m[x]||(m[x]={}),l=c[e]||[],d=l[0]===N&&l[1],f=l[0]===N&&l[2],p=d&&m.childNodes[d];while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if(1===p.nodeType&&++f&&p===t){c[e]=[N,d,f];break}}else if(v&&(l=(t[x]||(t[x]={}))[e])&&l[0]===N)f=l[1];else while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++f&&(v&&((p[x]||(p[x]={}))[e]=[N,f]),p===t))break;return f-=i,f===r||0===f%r&&f/r>=0}}},PSEUDO:function(e,t){var n,r=i.pseudos[e]||i.setFilters[e.toLowerCase()]||st.error("unsupported pseudo: "+e);return r[x]?r(t):r.length>1?(n=[e,e,"",t],i.setFilters.hasOwnProperty(e.toLowerCase())?ot(function(e,n){var i,o=r(e,t),a=o.length;while(a--)i=M.call(e,o[a]),e[i]=!(n[i]=o[a])}):function(e){return r(e,0,n)}):r}},pseudos:{not:ot(function(e){var t=[],n=[],r=s(e.replace(W,"$1"));return r[x]?ot(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:ot(function(e){return function(t){return st(e,t).length>0}}),contains:ot(function(e){return function(t){return(t.textContent||t.innerText||o(t)).indexOf(e)>-1}}),lang:ot(function(e){return X.test(e||"")||st.error("unsupported lang: "+e),e=e.replace(et,tt).toLowerCase(),function(t){var n;do if(n=d?t.getAttribute("xml:lang")||t.getAttribute("lang"):t.lang)return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===f},focus:function(e){return e===p.activeElement&&(!p.hasFocus||p.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!i.pseudos.empty(e)},header:function(e){return Q.test(e.nodeName)},input:function(e){return G.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:pt(function(){return[0]}),last:pt(function(e,t){return[t-1]}),eq:pt(function(e,t,n){return[0>n?n+t:n]}),even:pt(function(e,t){var n=0;for(;t>n;n+=2)e.push(n);return e}),odd:pt(function(e,t){var n=1;for(;t>n;n+=2)e.push(n);return e}),lt:pt(function(e,t,n){var r=0>n?n+t:n;for(;--r>=0;)e.push(r);return e}),gt:pt(function(e,t,n){var r=0>n?n+t:n;for(;t>++r;)e.push(r);return e})}};for(n in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})i.pseudos[n]=lt(n);for(n in{submit:!0,reset:!0})i.pseudos[n]=ct(n);function ft(e,t){var n,r,o,a,s,u,l,c=E[e+" "];if(c)return t?0:c.slice(0);s=e,u=[],l=i.preFilter;while(s){(!n||(r=$.exec(s)))&&(r&&(s=s.slice(r[0].length)||s),u.push(o=[])),n=!1,(r=I.exec(s))&&(n=r.shift(),o.push({value:n,type:r[0].replace(W," ")}),s=s.slice(n.length));for(a in i.filter)!(r=U[a].exec(s))||l[a]&&!(r=l[a](r))||(n=r.shift(),o.push({value:n,type:a,matches:r}),s=s.slice(n.length));if(!n)break}return t?s.length:s?st.error(e):E(e,u).slice(0)}function dt(e){var t=0,n=e.length,r="";for(;n>t;t++)r+=e[t].value;return r}function ht(e,t,n){var i=t.dir,o=n&&"parentNode"===i,a=C++;return t.first?function(t,n,r){while(t=t[i])if(1===t.nodeType||o)return e(t,n,r)}:function(t,n,s){var u,l,c,p=N+" "+a;if(s){while(t=t[i])if((1===t.nodeType||o)&&e(t,n,s))return!0}else while(t=t[i])if(1===t.nodeType||o)if(c=t[x]||(t[x]={}),(l=c[i])&&l[0]===p){if((u=l[1])===!0||u===r)return u===!0}else if(l=c[i]=[p],l[1]=e(t,n,s)||r,l[1]===!0)return!0}}function gt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function mt(e,t,n,r,i){var o,a=[],s=0,u=e.length,l=null!=t;for(;u>s;s++)(o=e[s])&&(!n||n(o,r,i))&&(a.push(o),l&&t.push(s));return a}function yt(e,t,n,r,i,o){return r&&!r[x]&&(r=yt(r)),i&&!i[x]&&(i=yt(i,o)),ot(function(o,a,s,u){var l,c,p,f=[],d=[],h=a.length,g=o||xt(t||"*",s.nodeType?[s]:s,[]),m=!e||!o&&t?g:mt(g,f,e,s,u),y=n?i||(o?e:h||r)?[]:a:m;if(n&&n(m,y,s,u),r){l=mt(y,d),r(l,[],s,u),c=l.length;while(c--)(p=l[c])&&(y[d[c]]=!(m[d[c]]=p))}if(o){if(i||e){if(i){l=[],c=y.length;while(c--)(p=y[c])&&l.push(m[c]=p);i(null,y=[],l,u)}c=y.length;while(c--)(p=y[c])&&(l=i?M.call(o,p):f[c])>-1&&(o[l]=!(a[l]=p))}}else y=mt(y===a?y.splice(h,y.length):y),i?i(null,a,y,u):H.apply(a,y)})}function vt(e){var t,n,r,o=e.length,a=i.relative[e[0].type],s=a||i.relative[" "],u=a?1:0,c=ht(function(e){return e===t},s,!0),p=ht(function(e){return M.call(t,e)>-1},s,!0),f=[function(e,n,r){return!a&&(r||n!==l)||((t=n).nodeType?c(e,n,r):p(e,n,r))}];for(;o>u;u++)if(n=i.relative[e[u].type])f=[ht(gt(f),n)];else{if(n=i.filter[e[u].type].apply(null,e[u].matches),n[x]){for(r=++u;o>r;r++)if(i.relative[e[r].type])break;return yt(u>1&&gt(f),u>1&&dt(e.slice(0,u-1)).replace(W,"$1"),n,r>u&&vt(e.slice(u,r)),o>r&&vt(e=e.slice(r)),o>r&&dt(e))}f.push(n)}return gt(f)}function bt(e,t){var n=0,o=t.length>0,a=e.length>0,s=function(s,u,c,f,d){var h,g,m,y=[],v=0,b="0",x=s&&[],w=null!=d,T=l,C=s||a&&i.find.TAG("*",d&&u.parentNode||u),k=N+=null==T?1:Math.random()||.1;for(w&&(l=u!==p&&u,r=n);null!=(h=C[b]);b++){if(a&&h){g=0;while(m=e[g++])if(m(h,u,c)){f.push(h);break}w&&(N=k,r=++n)}o&&((h=!m&&h)&&v--,s&&x.push(h))}if(v+=b,o&&b!==v){g=0;while(m=t[g++])m(x,y,u,c);if(s){if(v>0)while(b--)x[b]||y[b]||(y[b]=L.call(f));y=mt(y)}H.apply(f,y),w&&!s&&y.length>0&&v+t.length>1&&st.uniqueSort(f)}return w&&(N=k,l=T),x};return o?ot(s):s}s=st.compile=function(e,t){var n,r=[],i=[],o=S[e+" "];if(!o){t||(t=ft(e)),n=t.length;while(n--)o=vt(t[n]),o[x]?r.push(o):i.push(o);o=S(e,bt(i,r))}return o};function xt(e,t,n){var r=0,i=t.length;for(;i>r;r++)st(e,t[r],n);return n}function wt(e,t,n,r){var o,a,u,l,c,p=ft(e);if(!r&&1===p.length){if(a=p[0]=p[0].slice(0),a.length>2&&"ID"===(u=a[0]).type&&9===t.nodeType&&!d&&i.relative[a[1].type]){if(t=i.find.ID(u.matches[0].replace(et,tt),t)[0],!t)return n;e=e.slice(a.shift().value.length)}o=U.needsContext.test(e)?0:a.length;while(o--){if(u=a[o],i.relative[l=u.type])break;if((c=i.find[l])&&(r=c(u.matches[0].replace(et,tt),V.test(a[0].type)&&t.parentNode||t))){if(a.splice(o,1),e=r.length&&dt(a),!e)return H.apply(n,q.call(r,0)),n;break}}}return s(e,p)(r,t,d,n,V.test(e)),n}i.pseudos.nth=i.pseudos.eq;function Tt(){}i.filters=Tt.prototype=i.pseudos,i.setFilters=new Tt,c(),st.attr=b.attr,b.find=st,b.expr=st.selectors,b.expr[":"]=b.expr.pseudos,b.unique=st.uniqueSort,b.text=st.getText,b.isXMLDoc=st.isXML,b.contains=st.contains}(e);var at=/Until$/,st=/^(?:parents|prev(?:Until|All))/,ut=/^.[^:#\[\.,]*$/,lt=b.expr.match.needsContext,ct={children:!0,contents:!0,next:!0,prev:!0};b.fn.extend({find:function(e){var t,n,r,i=this.length;if("string"!=typeof e)return r=this,this.pushStack(b(e).filter(function(){for(t=0;i>t;t++)if(b.contains(r[t],this))return!0}));for(n=[],t=0;i>t;t++)b.find(e,this[t],n);return n=this.pushStack(i>1?b.unique(n):n),n.selector=(this.selector?this.selector+" ":"")+e,n},has:function(e){var t,n=b(e,this),r=n.length;return this.filter(function(){for(t=0;r>t;t++)if(b.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(ft(this,e,!1))},filter:function(e){return this.pushStack(ft(this,e,!0))},is:function(e){return!!e&&("string"==typeof e?lt.test(e)?b(e,this.context).index(this[0])>=0:b.filter(e,this).length>0:this.filter(e).length>0)},closest:function(e,t){var n,r=0,i=this.length,o=[],a=lt.test(e)||"string"!=typeof e?b(e,t||this.context):0;for(;i>r;r++){n=this[r];while(n&&n.ownerDocument&&n!==t&&11!==n.nodeType){if(a?a.index(n)>-1:b.find.matchesSelector(n,e)){o.push(n);break}n=n.parentNode}}return this.pushStack(o.length>1?b.unique(o):o)},index:function(e){return e?"string"==typeof e?b.inArray(this[0],b(e)):b.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?b(e,t):b.makeArray(e&&e.nodeType?[e]:e),r=b.merge(this.get(),n);return this.pushStack(b.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),b.fn.andSelf=b.fn.addBack;function pt(e,t){do e=e[t];while(e&&1!==e.nodeType);return e}b.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return b.dir(e,"parentNode")},parentsUntil:function(e,t,n){return b.dir(e,"parentNode",n)},next:function(e){return pt(e,"nextSibling")},prev:function(e){return pt(e,"previousSibling")},nextAll:function(e){return b.dir(e,"nextSibling")},prevAll:function(e){return b.dir(e,"previousSibling")},nextUntil:function(e,t,n){return b.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return b.dir(e,"previousSibling",n)},siblings:function(e){return b.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return b.sibling(e.firstChild)},contents:function(e){return b.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:b.merge([],e.childNodes)}},function(e,t){b.fn[e]=function(n,r){var i=b.map(this,t,n);return at.test(e)||(r=n),r&&"string"==typeof r&&(i=b.filter(r,i)),i=this.length>1&&!ct[e]?b.unique(i):i,this.length>1&&st.test(e)&&(i=i.reverse()),this.pushStack(i)}}),b.extend({filter:function(e,t,n){return n&&(e=":not("+e+")"),1===t.length?b.find.matchesSelector(t[0],e)?[t[0]]:[]:b.find.matches(e,t)},dir:function(e,n,r){var i=[],o=e[n];while(o&&9!==o.nodeType&&(r===t||1!==o.nodeType||!b(o).is(r)))1===o.nodeType&&i.push(o),o=o[n];return i},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});function ft(e,t,n){if(t=t||0,b.isFunction(t))return b.grep(e,function(e,r){var i=!!t.call(e,r,e);return i===n});if(t.nodeType)return b.grep(e,function(e){return e===t===n});if("string"==typeof t){var r=b.grep(e,function(e){return 1===e.nodeType});if(ut.test(t))return b.filter(t,r,!n);t=b.filter(t,r)}return b.grep(e,function(e){return b.inArray(e,t)>=0===n})}function dt(e){var t=ht.split("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}var ht="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",gt=/ jQuery\d+="(?:null|\d+)"/g,mt=RegExp("<(?:"+ht+")[\\s/>]","i"),yt=/^\s+/,vt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bt=/<([\w:]+)/,xt=/<tbody/i,wt=/<|&#?\w+;/,Tt=/<(?:script|style|link)/i,Nt=/^(?:checkbox|radio)$/i,Ct=/checked\s*(?:[^=]|=\s*.checked.)/i,kt=/^$|\/(?:java|ecma)script/i,Et=/^true\/(.*)/,St=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,At={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:b.support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},jt=dt(o),Dt=jt.appendChild(o.createElement("div"));At.optgroup=At.option,At.tbody=At.tfoot=At.colgroup=At.caption=At.thead,At.th=At.td,b.fn.extend({text:function(e){return b.access(this,function(e){return e===t?b.text(this):this.empty().append((this[0]&&this[0].ownerDocument||o).createTextNode(e))},null,e,arguments.length)},wrapAll:function(e){if(b.isFunction(e))return this.each(function(t){b(this).wrapAll(e.call(this,t))});if(this[0]){var t=b(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&&1===e.firstChild.nodeType)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return b.isFunction(e)?this.each(function(t){b(this).wrapInner(e.call(this,t))}):this.each(function(){var t=b(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=b.isFunction(e);return this.each(function(n){b(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){b.nodeName(this,"body")||b(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(e){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&this.appendChild(e)})},prepend:function(){return this.domManip(arguments,!0,function(e){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&this.insertBefore(e,this.firstChild)})},before:function(){return this.domManip(arguments,!1,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,!1,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=0;for(;null!=(n=this[r]);r++)(!e||b.filter(e,[n]).length>0)&&(t||1!==n.nodeType||b.cleanData(Ot(n)),n.parentNode&&(t&&b.contains(n.ownerDocument,n)&&Mt(Ot(n,"script")),n.parentNode.removeChild(n)));return this},empty:function(){var e,t=0;for(;null!=(e=this[t]);t++){1===e.nodeType&&b.cleanData(Ot(e,!1));while(e.firstChild)e.removeChild(e.firstChild);e.options&&b.nodeName(e,"select")&&(e.options.length=0)}return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return b.clone(this,e,t)})},html:function(e){return b.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return 1===n.nodeType?n.innerHTML.replace(gt,""):t;if(!("string"!=typeof e||Tt.test(e)||!b.support.htmlSerialize&&mt.test(e)||!b.support.leadingWhitespace&&yt.test(e)||At[(bt.exec(e)||["",""])[1].toLowerCase()])){e=e.replace(vt,"<$1></$2>");try{for(;i>r;r++)n=this[r]||{},1===n.nodeType&&(b.cleanData(Ot(n,!1)),n.innerHTML=e);n=0}catch(o){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(e){var t=b.isFunction(e);return t||"string"==typeof e||(e=b(e).not(this).detach()),this.domManip([e],!0,function(e){var t=this.nextSibling,n=this.parentNode;n&&(b(this).remove(),n.insertBefore(e,t))})},detach:function(e){return this.remove(e,!0)},domManip:function(e,n,r){e=f.apply([],e);var i,o,a,s,u,l,c=0,p=this.length,d=this,h=p-1,g=e[0],m=b.isFunction(g);if(m||!(1>=p||"string"!=typeof g||b.support.checkClone)&&Ct.test(g))return this.each(function(i){var o=d.eq(i);m&&(e[0]=g.call(this,i,n?o.html():t)),o.domManip(e,n,r)});if(p&&(l=b.buildFragment(e,this[0].ownerDocument,!1,this),i=l.firstChild,1===l.childNodes.length&&(l=i),i)){for(n=n&&b.nodeName(i,"tr"),s=b.map(Ot(l,"script"),Ht),a=s.length;p>c;c++)o=l,c!==h&&(o=b.clone(o,!0,!0),a&&b.merge(s,Ot(o,"script"))),r.call(n&&b.nodeName(this[c],"table")?Lt(this[c],"tbody"):this[c],o,c);if(a)for(u=s[s.length-1].ownerDocument,b.map(s,qt),c=0;a>c;c++)o=s[c],kt.test(o.type||"")&&!b._data(o,"globalEval")&&b.contains(u,o)&&(o.src?b.ajax({url:o.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):b.globalEval((o.text||o.textContent||o.innerHTML||"").replace(St,"")));l=i=null}return this}});function Lt(e,t){return e.getElementsByTagName(t)[0]||e.appendChild(e.ownerDocument.createElement(t))}function Ht(e){var t=e.getAttributeNode("type");return e.type=(t&&t.specified)+"/"+e.type,e}function qt(e){var t=Et.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function Mt(e,t){var n,r=0;for(;null!=(n=e[r]);r++)b._data(n,"globalEval",!t||b._data(t[r],"globalEval"))}function _t(e,t){if(1===t.nodeType&&b.hasData(e)){var n,r,i,o=b._data(e),a=b._data(t,o),s=o.events;if(s){delete a.handle,a.events={};for(n in s)for(r=0,i=s[n].length;i>r;r++)b.event.add(t,n,s[n][r])}a.data&&(a.data=b.extend({},a.data))}}function Ft(e,t){var n,r,i;if(1===t.nodeType){if(n=t.nodeName.toLowerCase(),!b.support.noCloneEvent&&t[b.expando]){i=b._data(t);for(r in i.events)b.removeEvent(t,r,i.handle);t.removeAttribute(b.expando)}"script"===n&&t.text!==e.text?(Ht(t).text=e.text,qt(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),b.support.html5Clone&&e.innerHTML&&!b.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&Nt.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}}b.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){b.fn[e]=function(e){var n,r=0,i=[],o=b(e),a=o.length-1;for(;a>=r;r++)n=r===a?this:this.clone(!0),b(o[r])[t](n),d.apply(i,n.get());return this.pushStack(i)}});function Ot(e,n){var r,o,a=0,s=typeof e.getElementsByTagName!==i?e.getElementsByTagName(n||"*"):typeof e.querySelectorAll!==i?e.querySelectorAll(n||"*"):t;if(!s)for(s=[],r=e.childNodes||e;null!=(o=r[a]);a++)!n||b.nodeName(o,n)?s.push(o):b.merge(s,Ot(o,n));return n===t||n&&b.nodeName(e,n)?b.merge([e],s):s}function Bt(e){Nt.test(e.type)&&(e.defaultChecked=e.checked)}b.extend({clone:function(e,t,n){var r,i,o,a,s,u=b.contains(e.ownerDocument,e);if(b.support.html5Clone||b.isXMLDoc(e)||!mt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(Dt.innerHTML=e.outerHTML,Dt.removeChild(o=Dt.firstChild)),!(b.support.noCloneEvent&&b.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||b.isXMLDoc(e)))for(r=Ot(o),s=Ot(e),a=0;null!=(i=s[a]);++a)r[a]&&Ft(i,r[a]);if(t)if(n)for(s=s||Ot(e),r=r||Ot(o),a=0;null!=(i=s[a]);a++)_t(i,r[a]);else _t(e,o);return r=Ot(o,"script"),r.length>0&&Mt(r,!u&&Ot(e,"script")),r=s=i=null,o},buildFragment:function(e,t,n,r){var i,o,a,s,u,l,c,p=e.length,f=dt(t),d=[],h=0;for(;p>h;h++)if(o=e[h],o||0===o)if("object"===b.type(o))b.merge(d,o.nodeType?[o]:o);else if(wt.test(o)){s=s||f.appendChild(t.createElement("div")),u=(bt.exec(o)||["",""])[1].toLowerCase(),c=At[u]||At._default,s.innerHTML=c[1]+o.replace(vt,"<$1></$2>")+c[2],i=c[0];while(i--)s=s.lastChild;if(!b.support.leadingWhitespace&&yt.test(o)&&d.push(t.createTextNode(yt.exec(o)[0])),!b.support.tbody){o="table"!==u||xt.test(o)?"<table>"!==c[1]||xt.test(o)?0:s:s.firstChild,i=o&&o.childNodes.length;while(i--)b.nodeName(l=o.childNodes[i],"tbody")&&!l.childNodes.length&&o.removeChild(l)
}b.merge(d,s.childNodes),s.textContent="";while(s.firstChild)s.removeChild(s.firstChild);s=f.lastChild}else d.push(t.createTextNode(o));s&&f.removeChild(s),b.support.appendChecked||b.grep(Ot(d,"input"),Bt),h=0;while(o=d[h++])if((!r||-1===b.inArray(o,r))&&(a=b.contains(o.ownerDocument,o),s=Ot(f.appendChild(o),"script"),a&&Mt(s),n)){i=0;while(o=s[i++])kt.test(o.type||"")&&n.push(o)}return s=null,f},cleanData:function(e,t){var n,r,o,a,s=0,u=b.expando,l=b.cache,p=b.support.deleteExpando,f=b.event.special;for(;null!=(n=e[s]);s++)if((t||b.acceptData(n))&&(o=n[u],a=o&&l[o])){if(a.events)for(r in a.events)f[r]?b.event.remove(n,r):b.removeEvent(n,r,a.handle);l[o]&&(delete l[o],p?delete n[u]:typeof n.removeAttribute!==i?n.removeAttribute(u):n[u]=null,c.push(o))}}});var Pt,Rt,Wt,$t=/alpha\([^)]*\)/i,It=/opacity\s*=\s*([^)]*)/,zt=/^(top|right|bottom|left)$/,Xt=/^(none|table(?!-c[ea]).+)/,Ut=/^margin/,Vt=RegExp("^("+x+")(.*)$","i"),Yt=RegExp("^("+x+")(?!px)[a-z%]+$","i"),Jt=RegExp("^([+-])=("+x+")","i"),Gt={BODY:"block"},Qt={position:"absolute",visibility:"hidden",display:"block"},Kt={letterSpacing:0,fontWeight:400},Zt=["Top","Right","Bottom","Left"],en=["Webkit","O","Moz","ms"];function tn(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=en.length;while(i--)if(t=en[i]+n,t in e)return t;return r}function nn(e,t){return e=t||e,"none"===b.css(e,"display")||!b.contains(e.ownerDocument,e)}function rn(e,t){var n,r,i,o=[],a=0,s=e.length;for(;s>a;a++)r=e[a],r.style&&(o[a]=b._data(r,"olddisplay"),n=r.style.display,t?(o[a]||"none"!==n||(r.style.display=""),""===r.style.display&&nn(r)&&(o[a]=b._data(r,"olddisplay",un(r.nodeName)))):o[a]||(i=nn(r),(n&&"none"!==n||!i)&&b._data(r,"olddisplay",i?n:b.css(r,"display"))));for(a=0;s>a;a++)r=e[a],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[a]||"":"none"));return e}b.fn.extend({css:function(e,n){return b.access(this,function(e,n,r){var i,o,a={},s=0;if(b.isArray(n)){for(o=Rt(e),i=n.length;i>s;s++)a[n[s]]=b.css(e,n[s],!1,o);return a}return r!==t?b.style(e,n,r):b.css(e,n)},e,n,arguments.length>1)},show:function(){return rn(this,!0)},hide:function(){return rn(this)},toggle:function(e){var t="boolean"==typeof e;return this.each(function(){(t?e:nn(this))?b(this).show():b(this).hide()})}}),b.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Wt(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":b.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,a,s,u=b.camelCase(n),l=e.style;if(n=b.cssProps[u]||(b.cssProps[u]=tn(l,u)),s=b.cssHooks[n]||b.cssHooks[u],r===t)return s&&"get"in s&&(o=s.get(e,!1,i))!==t?o:l[n];if(a=typeof r,"string"===a&&(o=Jt.exec(r))&&(r=(o[1]+1)*o[2]+parseFloat(b.css(e,n)),a="number"),!(null==r||"number"===a&&isNaN(r)||("number"!==a||b.cssNumber[u]||(r+="px"),b.support.clearCloneStyle||""!==r||0!==n.indexOf("background")||(l[n]="inherit"),s&&"set"in s&&(r=s.set(e,r,i))===t)))try{l[n]=r}catch(c){}}},css:function(e,n,r,i){var o,a,s,u=b.camelCase(n);return n=b.cssProps[u]||(b.cssProps[u]=tn(e.style,u)),s=b.cssHooks[n]||b.cssHooks[u],s&&"get"in s&&(a=s.get(e,!0,r)),a===t&&(a=Wt(e,n,i)),"normal"===a&&n in Kt&&(a=Kt[n]),""===r||r?(o=parseFloat(a),r===!0||b.isNumeric(o)?o||0:a):a},swap:function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i}}),e.getComputedStyle?(Rt=function(t){return e.getComputedStyle(t,null)},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),u=s?s.getPropertyValue(n)||s[n]:t,l=e.style;return s&&(""!==u||b.contains(e.ownerDocument,e)||(u=b.style(e,n)),Yt.test(u)&&Ut.test(n)&&(i=l.width,o=l.minWidth,a=l.maxWidth,l.minWidth=l.maxWidth=l.width=u,u=s.width,l.width=i,l.minWidth=o,l.maxWidth=a)),u}):o.documentElement.currentStyle&&(Rt=function(e){return e.currentStyle},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),u=s?s[n]:t,l=e.style;return null==u&&l&&l[n]&&(u=l[n]),Yt.test(u)&&!zt.test(n)&&(i=l.left,o=e.runtimeStyle,a=o&&o.left,a&&(o.left=e.currentStyle.left),l.left="fontSize"===n?"1em":u,u=l.pixelLeft+"px",l.left=i,a&&(o.left=a)),""===u?"auto":u});function on(e,t,n){var r=Vt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function an(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,a=0;for(;4>o;o+=2)"margin"===n&&(a+=b.css(e,n+Zt[o],!0,i)),r?("content"===n&&(a-=b.css(e,"padding"+Zt[o],!0,i)),"margin"!==n&&(a-=b.css(e,"border"+Zt[o]+"Width",!0,i))):(a+=b.css(e,"padding"+Zt[o],!0,i),"padding"!==n&&(a+=b.css(e,"border"+Zt[o]+"Width",!0,i)));return a}function sn(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=Rt(e),a=b.support.boxSizing&&"border-box"===b.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=Wt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Yt.test(i))return i;r=a&&(b.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+an(e,t,n||(a?"border":"content"),r,o)+"px"}function un(e){var t=o,n=Gt[e];return n||(n=ln(e,t),"none"!==n&&n||(Pt=(Pt||b("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(Pt[0].contentWindow||Pt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=ln(e,t),Pt.detach()),Gt[e]=n),n}function ln(e,t){var n=b(t.createElement(e)).appendTo(t.body),r=b.css(n[0],"display");return n.remove(),r}b.each(["height","width"],function(e,n){b.cssHooks[n]={get:function(e,r,i){return r?0===e.offsetWidth&&Xt.test(b.css(e,"display"))?b.swap(e,Qt,function(){return sn(e,n,i)}):sn(e,n,i):t},set:function(e,t,r){var i=r&&Rt(e);return on(e,t,r?an(e,n,r,b.support.boxSizing&&"border-box"===b.css(e,"boxSizing",!1,i),i):0)}}}),b.support.opacity||(b.cssHooks.opacity={get:function(e,t){return It.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=b.isNumeric(t)?"alpha(opacity="+100*t+")":"",o=r&&r.filter||n.filter||"";n.zoom=1,(t>=1||""===t)&&""===b.trim(o.replace($t,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===t||r&&!r.filter)||(n.filter=$t.test(o)?o.replace($t,i):o+" "+i)}}),b(function(){b.support.reliableMarginRight||(b.cssHooks.marginRight={get:function(e,n){return n?b.swap(e,{display:"inline-block"},Wt,[e,"marginRight"]):t}}),!b.support.pixelPosition&&b.fn.position&&b.each(["top","left"],function(e,n){b.cssHooks[n]={get:function(e,r){return r?(r=Wt(e,n),Yt.test(r)?b(e).position()[n]+"px":r):t}}})}),b.expr&&b.expr.filters&&(b.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight||!b.support.reliableHiddenOffsets&&"none"===(e.style&&e.style.display||b.css(e,"display"))},b.expr.filters.visible=function(e){return!b.expr.filters.hidden(e)}),b.each({margin:"",padding:"",border:"Width"},function(e,t){b.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];for(;4>r;r++)i[e+Zt[r]+t]=o[r]||o[r-2]||o[0];return i}},Ut.test(e)||(b.cssHooks[e+t].set=on)});var cn=/%20/g,pn=/\[\]$/,fn=/\r?\n/g,dn=/^(?:submit|button|image|reset|file)$/i,hn=/^(?:input|select|textarea|keygen)/i;b.fn.extend({serialize:function(){return b.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=b.prop(this,"elements");return e?b.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!b(this).is(":disabled")&&hn.test(this.nodeName)&&!dn.test(e)&&(this.checked||!Nt.test(e))}).map(function(e,t){var n=b(this).val();return null==n?null:b.isArray(n)?b.map(n,function(e){return{name:t.name,value:e.replace(fn,"\r\n")}}):{name:t.name,value:n.replace(fn,"\r\n")}}).get()}}),b.param=function(e,n){var r,i=[],o=function(e,t){t=b.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(n===t&&(n=b.ajaxSettings&&b.ajaxSettings.traditional),b.isArray(e)||e.jquery&&!b.isPlainObject(e))b.each(e,function(){o(this.name,this.value)});else for(r in e)gn(r,e[r],n,o);return i.join("&").replace(cn,"+")};function gn(e,t,n,r){var i;if(b.isArray(t))b.each(t,function(t,i){n||pn.test(e)?r(e,i):gn(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==b.type(t))r(e,t);else for(i in t)gn(e+"["+i+"]",t[i],n,r)}b.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){b.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),b.fn.hover=function(e,t){return this.mouseenter(e).mouseleave(t||e)};var mn,yn,vn=b.now(),bn=/\?/,xn=/#.*$/,wn=/([?&])_=[^&]*/,Tn=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Nn=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Cn=/^(?:GET|HEAD)$/,kn=/^\/\//,En=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,Sn=b.fn.load,An={},jn={},Dn="*/".concat("*");try{yn=a.href}catch(Ln){yn=o.createElement("a"),yn.href="",yn=yn.href}mn=En.exec(yn.toLowerCase())||[];function Hn(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(w)||[];if(b.isFunction(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function qn(e,n,r,i){var o={},a=e===jn;function s(u){var l;return o[u]=!0,b.each(e[u]||[],function(e,u){var c=u(n,r,i);return"string"!=typeof c||a||o[c]?a?!(l=c):t:(n.dataTypes.unshift(c),s(c),!1)}),l}return s(n.dataTypes[0])||!o["*"]&&s("*")}function Mn(e,n){var r,i,o=b.ajaxSettings.flatOptions||{};for(i in n)n[i]!==t&&((o[i]?e:r||(r={}))[i]=n[i]);return r&&b.extend(!0,e,r),e}b.fn.load=function(e,n,r){if("string"!=typeof e&&Sn)return Sn.apply(this,arguments);var i,o,a,s=this,u=e.indexOf(" ");return u>=0&&(i=e.slice(u,e.length),e=e.slice(0,u)),b.isFunction(n)?(r=n,n=t):n&&"object"==typeof n&&(a="POST"),s.length>0&&b.ajax({url:e,type:a,dataType:"html",data:n}).done(function(e){o=arguments,s.html(i?b("<div>").append(b.parseHTML(e)).find(i):e)}).complete(r&&function(e,t){s.each(r,o||[e.responseText,t,e])}),this},b.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){b.fn[t]=function(e){return this.on(t,e)}}),b.each(["get","post"],function(e,n){b[n]=function(e,r,i,o){return b.isFunction(r)&&(o=o||i,i=r,r=t),b.ajax({url:e,type:n,dataType:o,data:r,success:i})}}),b.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:yn,type:"GET",isLocal:Nn.test(mn[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Dn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":e.String,"text html":!0,"text json":b.parseJSON,"text xml":b.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Mn(Mn(e,b.ajaxSettings),t):Mn(b.ajaxSettings,e)},ajaxPrefilter:Hn(An),ajaxTransport:Hn(jn),ajax:function(e,n){"object"==typeof e&&(n=e,e=t),n=n||{};var r,i,o,a,s,u,l,c,p=b.ajaxSetup({},n),f=p.context||p,d=p.context&&(f.nodeType||f.jquery)?b(f):b.event,h=b.Deferred(),g=b.Callbacks("once memory"),m=p.statusCode||{},y={},v={},x=0,T="canceled",N={readyState:0,getResponseHeader:function(e){var t;if(2===x){if(!c){c={};while(t=Tn.exec(a))c[t[1].toLowerCase()]=t[2]}t=c[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===x?a:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return x||(e=v[n]=v[n]||e,y[e]=t),this},overrideMimeType:function(e){return x||(p.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>x)for(t in e)m[t]=[m[t],e[t]];else N.always(e[N.status]);return this},abort:function(e){var t=e||T;return l&&l.abort(t),k(0,t),this}};if(h.promise(N).complete=g.add,N.success=N.done,N.error=N.fail,p.url=((e||p.url||yn)+"").replace(xn,"").replace(kn,mn[1]+"//"),p.type=n.method||n.type||p.method||p.type,p.dataTypes=b.trim(p.dataType||"*").toLowerCase().match(w)||[""],null==p.crossDomain&&(r=En.exec(p.url.toLowerCase()),p.crossDomain=!(!r||r[1]===mn[1]&&r[2]===mn[2]&&(r[3]||("http:"===r[1]?80:443))==(mn[3]||("http:"===mn[1]?80:443)))),p.data&&p.processData&&"string"!=typeof p.data&&(p.data=b.param(p.data,p.traditional)),qn(An,p,n,N),2===x)return N;u=p.global,u&&0===b.active++&&b.event.trigger("ajaxStart"),p.type=p.type.toUpperCase(),p.hasContent=!Cn.test(p.type),o=p.url,p.hasContent||(p.data&&(o=p.url+=(bn.test(o)?"&":"?")+p.data,delete p.data),p.cache===!1&&(p.url=wn.test(o)?o.replace(wn,"$1_="+vn++):o+(bn.test(o)?"&":"?")+"_="+vn++)),p.ifModified&&(b.lastModified[o]&&N.setRequestHeader("If-Modified-Since",b.lastModified[o]),b.etag[o]&&N.setRequestHeader("If-None-Match",b.etag[o])),(p.data&&p.hasContent&&p.contentType!==!1||n.contentType)&&N.setRequestHeader("Content-Type",p.contentType),N.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+Dn+"; q=0.01":""):p.accepts["*"]);for(i in p.headers)N.setRequestHeader(i,p.headers[i]);if(p.beforeSend&&(p.beforeSend.call(f,N,p)===!1||2===x))return N.abort();T="abort";for(i in{success:1,error:1,complete:1})N[i](p[i]);if(l=qn(jn,p,n,N)){N.readyState=1,u&&d.trigger("ajaxSend",[N,p]),p.async&&p.timeout>0&&(s=setTimeout(function(){N.abort("timeout")},p.timeout));try{x=1,l.send(y,k)}catch(C){if(!(2>x))throw C;k(-1,C)}}else k(-1,"No Transport");function k(e,n,r,i){var c,y,v,w,T,C=n;2!==x&&(x=2,s&&clearTimeout(s),l=t,a=i||"",N.readyState=e>0?4:0,r&&(w=_n(p,N,r)),e>=200&&300>e||304===e?(p.ifModified&&(T=N.getResponseHeader("Last-Modified"),T&&(b.lastModified[o]=T),T=N.getResponseHeader("etag"),T&&(b.etag[o]=T)),204===e?(c=!0,C="nocontent"):304===e?(c=!0,C="notmodified"):(c=Fn(p,w),C=c.state,y=c.data,v=c.error,c=!v)):(v=C,(e||!C)&&(C="error",0>e&&(e=0))),N.status=e,N.statusText=(n||C)+"",c?h.resolveWith(f,[y,C,N]):h.rejectWith(f,[N,C,v]),N.statusCode(m),m=t,u&&d.trigger(c?"ajaxSuccess":"ajaxError",[N,p,c?y:v]),g.fireWith(f,[N,C]),u&&(d.trigger("ajaxComplete",[N,p]),--b.active||b.event.trigger("ajaxStop")))}return N},getScript:function(e,n){return b.get(e,t,n,"script")},getJSON:function(e,t,n){return b.get(e,t,n,"json")}});function _n(e,n,r){var i,o,a,s,u=e.contents,l=e.dataTypes,c=e.responseFields;for(s in c)s in r&&(n[c[s]]=r[s]);while("*"===l[0])l.shift(),o===t&&(o=e.mimeType||n.getResponseHeader("Content-Type"));if(o)for(s in u)if(u[s]&&u[s].test(o)){l.unshift(s);break}if(l[0]in r)a=l[0];else{for(s in r){if(!l[0]||e.converters[s+" "+l[0]]){a=s;break}i||(i=s)}a=a||i}return a?(a!==l[0]&&l.unshift(a),r[a]):t}function Fn(e,t){var n,r,i,o,a={},s=0,u=e.dataTypes.slice(),l=u[0];if(e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u[1])for(i in e.converters)a[i.toLowerCase()]=e.converters[i];for(;r=u[++s];)if("*"!==r){if("*"!==l&&l!==r){if(i=a[l+" "+r]||a["* "+r],!i)for(n in a)if(o=n.split(" "),o[1]===r&&(i=a[l+" "+o[0]]||a["* "+o[0]])){i===!0?i=a[n]:a[n]!==!0&&(r=o[0],u.splice(s--,0,r));break}if(i!==!0)if(i&&e["throws"])t=i(t);else try{t=i(t)}catch(c){return{state:"parsererror",error:i?c:"No conversion from "+l+" to "+r}}}l=r}return{state:"success",data:t}}b.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return b.globalEval(e),e}}}),b.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),b.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=o.head||b("head")[0]||o.documentElement;return{send:function(t,i){n=o.createElement("script"),n.async=!0,e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,t){(t||!n.readyState||/loaded|complete/.test(n.readyState))&&(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),n=null,t||i(200,"success"))},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(t,!0)}}}});var On=[],Bn=/(=)\?(?=&|$)|\?\?/;b.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=On.pop()||b.expando+"_"+vn++;return this[e]=!0,e}}),b.ajaxPrefilter("json jsonp",function(n,r,i){var o,a,s,u=n.jsonp!==!1&&(Bn.test(n.url)?"url":"string"==typeof n.data&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Bn.test(n.data)&&"data");return u||"jsonp"===n.dataTypes[0]?(o=n.jsonpCallback=b.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,u?n[u]=n[u].replace(Bn,"$1"+o):n.jsonp!==!1&&(n.url+=(bn.test(n.url)?"&":"?")+n.jsonp+"="+o),n.converters["script json"]=function(){return s||b.error(o+" was not called"),s[0]},n.dataTypes[0]="json",a=e[o],e[o]=function(){s=arguments},i.always(function(){e[o]=a,n[o]&&(n.jsonpCallback=r.jsonpCallback,On.push(o)),s&&b.isFunction(a)&&a(s[0]),s=a=t}),"script"):t});var Pn,Rn,Wn=0,$n=e.ActiveXObject&&function(){var e;for(e in Pn)Pn[e](t,!0)};function In(){try{return new e.XMLHttpRequest}catch(t){}}function zn(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}b.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&In()||zn()}:In,Rn=b.ajaxSettings.xhr(),b.support.cors=!!Rn&&"withCredentials"in Rn,Rn=b.support.ajax=!!Rn,Rn&&b.ajaxTransport(function(n){if(!n.crossDomain||b.support.cors){var r;return{send:function(i,o){var a,s,u=n.xhr();if(n.username?u.open(n.type,n.url,n.async,n.username,n.password):u.open(n.type,n.url,n.async),n.xhrFields)for(s in n.xhrFields)u[s]=n.xhrFields[s];n.mimeType&&u.overrideMimeType&&u.overrideMimeType(n.mimeType),n.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");try{for(s in i)u.setRequestHeader(s,i[s])}catch(l){}u.send(n.hasContent&&n.data||null),r=function(e,i){var s,l,c,p;try{if(r&&(i||4===u.readyState))if(r=t,a&&(u.onreadystatechange=b.noop,$n&&delete Pn[a]),i)4!==u.readyState&&u.abort();else{p={},s=u.status,l=u.getAllResponseHeaders(),"string"==typeof u.responseText&&(p.text=u.responseText);try{c=u.statusText}catch(f){c=""}s||!n.isLocal||n.crossDomain?1223===s&&(s=204):s=p.text?200:404}}catch(d){i||o(-1,d)}p&&o(s,c,p,l)},n.async?4===u.readyState?setTimeout(r):(a=++Wn,$n&&(Pn||(Pn={},b(e).unload($n)),Pn[a]=r),u.onreadystatechange=r):r()},abort:function(){r&&r(t,!0)}}}});var Xn,Un,Vn=/^(?:toggle|show|hide)$/,Yn=RegExp("^(?:([+-])=|)("+x+")([a-z%]*)$","i"),Jn=/queueHooks$/,Gn=[nr],Qn={"*":[function(e,t){var n,r,i=this.createTween(e,t),o=Yn.exec(t),a=i.cur(),s=+a||0,u=1,l=20;if(o){if(n=+o[2],r=o[3]||(b.cssNumber[e]?"":"px"),"px"!==r&&s){s=b.css(i.elem,e,!0)||n||1;do u=u||".5",s/=u,b.style(i.elem,e,s+r);while(u!==(u=i.cur()/a)&&1!==u&&--l)}i.unit=r,i.start=s,i.end=o[1]?s+(o[1]+1)*n:n}return i}]};function Kn(){return setTimeout(function(){Xn=t}),Xn=b.now()}function Zn(e,t){b.each(t,function(t,n){var r=(Qn[t]||[]).concat(Qn["*"]),i=0,o=r.length;for(;o>i;i++)if(r[i].call(e,t,n))return})}function er(e,t,n){var r,i,o=0,a=Gn.length,s=b.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;var t=Xn||Kn(),n=Math.max(0,l.startTime+l.duration-t),r=n/l.duration||0,o=1-r,a=0,u=l.tweens.length;for(;u>a;a++)l.tweens[a].run(o);return s.notifyWith(e,[l,o,n]),1>o&&u?n:(s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:b.extend({},t),opts:b.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Xn||Kn(),duration:n.duration,tweens:[],createTween:function(t,n){var r=b.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)l.tweens[n].run(1);return t?s.resolveWith(e,[l,t]):s.rejectWith(e,[l,t]),this}}),c=l.props;for(tr(c,l.opts.specialEasing);a>o;o++)if(r=Gn[o].call(l,e,c,l.opts))return r;return Zn(l,c),b.isFunction(l.opts.start)&&l.opts.start.call(e,l),b.fx.timer(b.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always)}function tr(e,t){var n,r,i,o,a;for(i in e)if(r=b.camelCase(i),o=t[r],n=e[i],b.isArray(n)&&(o=n[1],n=e[i]=n[0]),i!==r&&(e[r]=n,delete e[i]),a=b.cssHooks[r],a&&"expand"in a){n=a.expand(n),delete e[r];for(i in n)i in e||(e[i]=n[i],t[i]=o)}else t[r]=o}b.Animation=b.extend(er,{tweener:function(e,t){b.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;i>r;r++)n=e[r],Qn[n]=Qn[n]||[],Qn[n].unshift(t)},prefilter:function(e,t){t?Gn.unshift(e):Gn.push(e)}});function nr(e,t,n){var r,i,o,a,s,u,l,c,p,f=this,d=e.style,h={},g=[],m=e.nodeType&&nn(e);n.queue||(c=b._queueHooks(e,"fx"),null==c.unqueued&&(c.unqueued=0,p=c.empty.fire,c.empty.fire=function(){c.unqueued||p()}),c.unqueued++,f.always(function(){f.always(function(){c.unqueued--,b.queue(e,"fx").length||c.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[d.overflow,d.overflowX,d.overflowY],"inline"===b.css(e,"display")&&"none"===b.css(e,"float")&&(b.support.inlineBlockNeedsLayout&&"inline"!==un(e.nodeName)?d.zoom=1:d.display="inline-block")),n.overflow&&(d.overflow="hidden",b.support.shrinkWrapBlocks||f.always(function(){d.overflow=n.overflow[0],d.overflowX=n.overflow[1],d.overflowY=n.overflow[2]}));for(i in t)if(a=t[i],Vn.exec(a)){if(delete t[i],u=u||"toggle"===a,a===(m?"hide":"show"))continue;g.push(i)}if(o=g.length){s=b._data(e,"fxshow")||b._data(e,"fxshow",{}),"hidden"in s&&(m=s.hidden),u&&(s.hidden=!m),m?b(e).show():f.done(function(){b(e).hide()}),f.done(function(){var t;b._removeData(e,"fxshow");for(t in h)b.style(e,t,h[t])});for(i=0;o>i;i++)r=g[i],l=f.createTween(r,m?s[r]:0),h[r]=s[r]||b.style(e,r),r in s||(s[r]=l.start,m&&(l.end=l.start,l.start="width"===r||"height"===r?1:0))}}function rr(e,t,n,r,i){return new rr.prototype.init(e,t,n,r,i)}b.Tween=rr,rr.prototype={constructor:rr,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(b.cssNumber[n]?"":"px")},cur:function(){var e=rr.propHooks[this.prop];return e&&e.get?e.get(this):rr.propHooks._default.get(this)},run:function(e){var t,n=rr.propHooks[this.prop];return this.pos=t=this.options.duration?b.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):rr.propHooks._default.set(this),this}},rr.prototype.init.prototype=rr.prototype,rr.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=b.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){b.fx.step[e.prop]?b.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[b.cssProps[e.prop]]||b.cssHooks[e.prop])?b.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},rr.propHooks.scrollTop=rr.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},b.each(["toggle","show","hide"],function(e,t){var n=b.fn[t];b.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ir(t,!0),e,r,i)}}),b.fn.extend({fadeTo:function(e,t,n,r){return this.filter(nn).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=b.isEmptyObject(e),o=b.speed(t,n,r),a=function(){var t=er(this,b.extend({},e),o);a.finish=function(){t.stop(!0)},(i||b._data(this,"finish"))&&t.stop(!0)};return a.finish=a,i||o.queue===!1?this.each(a):this.queue(o.queue,a)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return"string"!=typeof e&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=null!=e&&e+"queueHooks",o=b.timers,a=b._data(this);if(n)a[n]&&a[n].stop&&i(a[n]);else for(n in a)a[n]&&a[n].stop&&Jn.test(n)&&i(a[n]);for(n=o.length;n--;)o[n].elem!==this||null!=e&&o[n].queue!==e||(o[n].anim.stop(r),t=!1,o.splice(n,1));(t||!r)&&b.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=b._data(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=b.timers,a=r?r.length:0;for(n.finish=!0,b.queue(this,e,[]),i&&i.cur&&i.cur.finish&&i.cur.finish.call(this),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;a>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}});function ir(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=Zt[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}b.each({slideDown:ir("show"),slideUp:ir("hide"),slideToggle:ir("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){b.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),b.speed=function(e,t,n){var r=e&&"object"==typeof e?b.extend({},e):{complete:n||!n&&t||b.isFunction(e)&&e,duration:e,easing:n&&t||t&&!b.isFunction(t)&&t};return r.duration=b.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in b.fx.speeds?b.fx.speeds[r.duration]:b.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){b.isFunction(r.old)&&r.old.call(this),r.queue&&b.dequeue(this,r.queue)},r},b.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},b.timers=[],b.fx=rr.prototype.init,b.fx.tick=function(){var e,n=b.timers,r=0;for(Xn=b.now();n.length>r;r++)e=n[r],e()||n[r]!==e||n.splice(r--,1);n.length||b.fx.stop(),Xn=t},b.fx.timer=function(e){e()&&b.timers.push(e)&&b.fx.start()},b.fx.interval=13,b.fx.start=function(){Un||(Un=setInterval(b.fx.tick,b.fx.interval))},b.fx.stop=function(){clearInterval(Un),Un=null},b.fx.speeds={slow:600,fast:200,_default:400},b.fx.step={},b.expr&&b.expr.filters&&(b.expr.filters.animated=function(e){return b.grep(b.timers,function(t){return e===t.elem}).length}),b.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){b.offset.setOffset(this,e,t)});var n,r,o={top:0,left:0},a=this[0],s=a&&a.ownerDocument;if(s)return n=s.documentElement,b.contains(n,a)?(typeof a.getBoundingClientRect!==i&&(o=a.getBoundingClientRect()),r=or(s),{top:o.top+(r.pageYOffset||n.scrollTop)-(n.clientTop||0),left:o.left+(r.pageXOffset||n.scrollLeft)-(n.clientLeft||0)}):o},b.offset={setOffset:function(e,t,n){var r=b.css(e,"position");"static"===r&&(e.style.position="relative");var i=b(e),o=i.offset(),a=b.css(e,"top"),s=b.css(e,"left"),u=("absolute"===r||"fixed"===r)&&b.inArray("auto",[a,s])>-1,l={},c={},p,f;u?(c=i.position(),p=c.top,f=c.left):(p=parseFloat(a)||0,f=parseFloat(s)||0),b.isFunction(t)&&(t=t.call(e,n,o)),null!=t.top&&(l.top=t.top-o.top+p),null!=t.left&&(l.left=t.left-o.left+f),"using"in t?t.using.call(e,l):i.css(l)}},b.fn.extend({position:function(){if(this[0]){var e,t,n={top:0,left:0},r=this[0];return"fixed"===b.css(r,"position")?t=r.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),b.nodeName(e[0],"html")||(n=e.offset()),n.top+=b.css(e[0],"borderTopWidth",!0),n.left+=b.css(e[0],"borderLeftWidth",!0)),{top:t.top-n.top-b.css(r,"marginTop",!0),left:t.left-n.left-b.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||o.documentElement;while(e&&!b.nodeName(e,"html")&&"static"===b.css(e,"position"))e=e.offsetParent;return e||o.documentElement})}}),b.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);b.fn[e]=function(i){return b.access(this,function(e,i,o){var a=or(e);return o===t?a?n in a?a[n]:a.document.documentElement[i]:e[i]:(a?a.scrollTo(r?b(a).scrollLeft():o,r?o:b(a).scrollTop()):e[i]=o,t)},e,i,arguments.length,null)}});function or(e){return b.isWindow(e)?e:9===e.nodeType?e.defaultView||e.parentWindow:!1}b.each({Height:"height",Width:"width"},function(e,n){b.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){b.fn[i]=function(i,o){var a=arguments.length&&(r||"boolean"!=typeof i),s=r||(i===!0||o===!0?"margin":"border");return b.access(this,function(n,r,i){var o;return b.isWindow(n)?n.document.documentElement["client"+e]:9===n.nodeType?(o=n.documentElement,Math.max(n.body["scroll"+e],o["scroll"+e],n.body["offset"+e],o["offset"+e],o["client"+e])):i===t?b.css(n,r,s):b.style(n,r,i,s)},n,a?i:t,a,null)}})}),e.jQuery=e.$=b,"function"==typeof define&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return b})})(window);
/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
(function (factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD
		define(['jquery'], factory);
	} else if (typeof exports === 'object') {
		// CommonJS
		factory(require('jquery'));
	} else {
		// Browser globals
		factory(jQuery);
	}
}(function ($) {

	var pluses = /\+/g;

	function encode(s) {
		return config.raw ? s : encodeURIComponent(s);
	}

	function decode(s) {
		return config.raw ? s : decodeURIComponent(s);
	}

	function stringifyCookieValue(value) {
		return encode(config.json ? JSON.stringify(value) : String(value));
	}

	function parseCookieValue(s) {
		if (s.indexOf('"') === 0) {
			// This is a quoted cookie as according to RFC2068, unescape...
			s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
		}

		try {
			// Replace server-side written pluses with spaces.
			// If we can't decode the cookie, ignore it, it's unusable.
			// If we can't parse the cookie, ignore it, it's unusable.
			s = decodeURIComponent(s.replace(pluses, ' '));
			return config.json ? JSON.parse(s) : s;
		} catch(e) {}
	}

	function read(s, converter) {
		var value = config.raw ? s : parseCookieValue(s);
		return $.isFunction(converter) ? converter(value) : value;
	}

	var config = $.cookie = function (key, value, options) {

		// Write

		if (value !== undefined && !$.isFunction(value)) {
			options = $.extend({}, config.defaults, options);

			if (typeof options.expires === 'number') {
				var days = options.expires, t = options.expires = new Date();
				t.setTime(+t + days * 864e+5);
			}

			return (document.cookie = [
				encode(key), '=', stringifyCookieValue(value),
				options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
				options.path    ? '; path=' + options.path : '',
				options.domain  ? '; domain=' + options.domain : '',
				options.secure  ? '; secure' : ''
			].join(''));
		}

		// Read

		var result = key ? undefined : {};

		// To prevent the for loop in the first place assign an empty array
		// in case there are no cookies at all. Also prevents odd result when
		// calling $.cookie().
		var cookies = document.cookie ? document.cookie.split('; ') : [];

		for (var i = 0, l = cookies.length; i < l; i++) {
			var parts = cookies[i].split('=');
			var name = decode(parts.shift());
			var cookie = parts.join('=');

			if (key && key === name) {
				// If second argument (value) is a function it's a converter...
				result = read(cookie, value);
				break;
			}

			// Prevent storing a cookie that we couldn't decode.
			if (!key && (cookie = read(cookie)) !== undefined) {
				result[name] = cookie;
			}
		}

		return result;
	};

	config.defaults = {};

	$.removeCookie = function (key, options) {
		if ($.cookie(key) === undefined) {
			return false;
		}

		// Must not alter options, thus extending a fresh object...
		$.cookie(key, '', $.extend({}, options, { expires: -1 }));
		return !$.cookie(key);
	};

}));
/// <reference path="Widget/Image.js" />
/// <reference path="jquery.js" />
/// <reference path="carhartl-jquery-cookie-92b7715/jquery.cookie.js" />
/// <reference path="config.js" />

String.prototype.Format = function (arg1, arg2)
{
    var args;
    if (arguments[0] instanceof Array)
        args = arguments[0];
    else
        args = arguments;
    return this.replace(/(\{\d+\})/g, function (word)
    {
        var index = parseInt(word.substring(1, word.length - 1));
        var obj = "";
        if (args[index] != undefined || args[index] != null)
            obj = args[index];
        return MPHtmlEncode(obj.toString());
    });
}
String.prototype.FormatNoEncode = function (arg1, arg2)
{
    var args;
    if (arguments[0] instanceof Array)
        args = arguments[0];
    else
        args = arguments;
    return this.replace(/(\{\d+\})/g, function (word)
    {
        var index = parseInt(word.substring(1, word.length - 1));
        var obj = "";
        if (args[index] != undefined || args[index] != null)
            obj = args[index];
        return obj.toString();
    });
}

MPData = {};
MPTemplate = {};
MPWidget = {};
MPFormat = {};
MPObject = {};
host = "";
imageHost = "";

var MPWaterFall = {
    Item: {
        New: function (element)
        {
            var item = {};
            item.Element = $(element);
            var _x;
            var _y;
            var _height = item.Element.outerHeight();
            var _wid;

            item.Height = function ()
            {
                return _height;
            }
            item.X = function ()
            {
                if (arguments.length == 0)
                    return _x;
                var value = arguments[0];
                if (value == _x)
                    return;

                item.Element.css("left", value + "px");
                _x = value;
            }
            item.Y = function ()
            {
                if (arguments.length == 0)
                    return _y;

                var value = arguments[0];
                if (value == _y)
                    return;

                item.Element.css("top", value + "px");
                _y = value;
            }
            item.WID = function ()
            {
                if (arguments.length == 0)
                    return _wid;

                var value = arguments[0];
                if (value == _wid)
                    return;

                item.Element.attr("wid", value);
                _wid = value;
            }
            return item;
        }
    },
    New: function (frame, container, columnCount, itemWidth, marginLeft, marginTop, marginRight, marginBottom)
    {

        var waterFall = {};

        //列数 
        var _columnCount = 1;
        //设置列数,若参数为0,则返回当前列数,否则设定列数
        waterFall.ColumnCount = function ()
        {
            if (arguments.length == 0)
                return _columnCount;

            var value = arguments[0];
            if (value == _columnCount)
                return;

            _columnHeights = [];
            for (var i = 0; i < value; i++)
            {
                _columnHeights[i] = 0;
            }
            _columnCount = value;
            Layout();
        }

        //瀑布流内元素列表,MPWaterFall.Item[]
        var _list = [];
        //列高度,int[]
        var _columnHeights = [];
        //当前插入的wid
        var _wid = 0;
        //瀑布流容器高度
        var _containerHeight = 0;
        //最矮列高度
        var _minColumnHeight = 0;
        //指示瀑布流是否正在更新
        var _isUpdating = false;
        //指示瀑布流是否全部内容显示完毕
        var _isComplete = false;
        //布局瀑布流        
        function Layout()
        {
            _containerHeight = 0;
            for (var i = 0; i < _columnCount; i++)
            {
                _columnHeights[i] = 0;
            }

            var n = _list.length;
            for (var i = 0; i < n; i++)
            {
                var item = _list[i];
                Arrange(item);
            }
        }
        //在瀑布尾放置元素
        function Arrange(item)
        {
            var targetColumn = Min(_columnHeights);
            item.X((itemWidth + marginLeft + marginRight) * targetColumn.index + marginLeft);
            item.Y(targetColumn.value + marginTop);
            var height = targetColumn.value + item.Height() + marginTop + marginBottom;
            _columnHeights[targetColumn.index] = height;

            if (height > _containerHeight)
                container.css("height", height);
            _minColumnHeight = Min(_columnHeights).value;
        }

        frame.scroll(function ()
        {
            if (_isUpdating == true)
                return;

            if (_isComplete == true)
                return;

            var isWindow = (frame.get(0) == window);
            var frameTop = isWindow ? 0 : frame.offset().top;
            var containerTop = container.offset().top;
            var height = frame.height();
            var scrollTop = frame.scrollTop();

            var top = containerTop - frameTop + (isWindow ? 0 : scrollTop);
            var a = scrollTop + top + height;
            if (a > _minColumnHeight)
            {
                if (waterFall.onBottom != null)
                {
                    waterFall.onBottom();
                }
            }
        })

        function Max(arr)
        {
            if ((arr instanceof Array) == false)
                throw TypeError("函数只接受数组参数");
            var n = arr.length;
            var max = arr[0];
            var index = 0;
            for (var i = 1; i < n; i++)
            {
                if (arr[i] > max)
                {
                    max = arr[i];
                    index = i;
                }
            }

            return { index: index, value: max };
        }

        function Min(arr)
        {
            if ((arr instanceof Array) == false)
                throw TypeError("函数只接受数组参数");
            var n = arr.length;
            var min = arr[0];
            var index = 0;
            for (var i = 1; i < n; i++)
            {
                if (arr[i] < min)
                {
                    min = arr[i];
                    index = i;
                }
            }
            return { index: index, value: min };
        }

        function Add(item)
        {
            container.append(item);
            var a = MPWaterFall.Item.New(item);
            a.WID(_wid++);
            return a;
        }

        waterFall.Push = function (dataList, type, typeDetail, returnField)
        {
            var n = dataList.length;
            if (n == 0)
            {
                waterFall.Complete();
                return 0;
            }
            for (var i = 0; i < n; i++)
            {
                var item1 = Add(type.New(dataList[i], typeDetail));
                Arrange(item1);
                _list.push(item1);
            }
            return dataList[n - 1][returnField];
        }

        waterFall.PushElement = function (element)
        {
            var item = Add(element);
            Arrange(item);
            _list.push(item);
        }

        waterFall.Insert = function (startIndex, newItems)
        {
            var list = [];
            if (newItems instanceof Array)
            {
                var n = newItems.length;
                for (var i = 0; i < n; i++)
                {
                    list.push(Add(newItems[i]));
                }
            }
            else
            {
                list.push(Add(newItems));
            }
            var p1 = _list.slice(0, startIndex);
            var p2 = _list.slice(startIndex);
            var t = p1.concat(list, p2);
            _list = t;
            Layout();
        }

        waterFall.Delete = function (wid)
        {
            var n = _list.length;
            for (var i = 0; i < n; i++)
            {
                var item = _list[i];
                if (item.WID() == wid)
                {
                    _list.splice(i, 1);
                    item.Element.remove();
                    break;
                }
            }
        }

        waterFall.Clear = function ()
        {
            container.empty();
            _list = [];
        }

        waterFall.ColumnCount(columnCount);

        waterFall.BeginUpdate = function ()
        {
            _isUpdating = true;
        }

        waterFall.EndUpdate = function ()
        {
            _isUpdating = false;
        }

        waterFall.Complete = function ()
        {
            _isComplete = true;
        }

        waterFall.onBottom = null;

        waterFall.Resize = function ()
        {
            var c = countColumn();
            $(".wrapper").css("width", c * (itemWidth + marginLeft + marginRight));
            waterFall.ColumnCount(c);
            $(window).on("resize", function ()
            {
                var c = countColumn();
                $(".wrapper").css("width", c * (itemWidth + marginLeft + marginRight));
                waterFall.ColumnCount(c);
            })
        }

        function countColumn()
        {
            var w = itemWidth + marginLeft + marginRight;
            var wwidth = $(window).width();
            var count = 1;
            while (w * (count + 1) <= wwidth)
            {
                count++;
            }

            if (count < 4)
            {
                return 4;
            }
            else if (count > 6)
            {
                return 6;
            }
            else
                return count;
        }

        return waterFall;
    }
}

//检查登录
function MPCheckLogin(showDialog)
{
    showDialog = (showDialog == null ? true : showDialog);
    if (MPData.user.id == 0)
    {
        if (showDialog === true)
        {
            var dialog = MPLoginDialog.New();
            dialog.onSuccess = function ()
            {
                location.reload();
            }
        }
        return false;
    }
    else
    {
        return true;
    }
}


//窗口居中
function MPCenter(content, parent)
{
    var cheight = content.height();
    var cwidth = content.width();

    content.css("margin-left", -Math.floor(cwidth / 2));
    content.css("margin-top", -Math.floor(cheight / 2));
}

function MPCheckEmail(e)
{
    if (e == "")
    {
        MPMessageBox.New(MPMessageBox.Icons.Warn, "邮箱不能为空!");
        return false;
    }
    if (!e.match(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/))
    {
        MPMessageBox.New(MPMessageBox.Icons.Warn, "邮箱格式不正确,请重新输入!");
        return false;
    }
    return true;
}

function MPCheckPassword(e)
{
    if (e == "")
    {
        MPMessageBox.New("alert", "提示", "请输入密码");
        return false;
    }
    return true;
}

function MPHtmlEncode(e)
{
    var d = $("<div></div>");
    d.text(e);
    return d.html();
}

function MPLogOut()
{
    $.post(host + "/ajax.aspx?act=logout", {}, function (data)
    {
        if (data.code == 0)
        {
            $.removeCookie("login");
            alert("logout success");
        }
    }, "json")
}

function MPMenu(parent, menu, staytime, delaytime)//parent为点击目标 menu自行定义 staytime为鼠标离开menu后滞留时间 delaytime为点击后延时处理时间
{
    var _stayTime = staytime ? staytime : 500;
    var _delayTime = delaytime ? delaytime : 0;
    var _timerIdDisplay;
    var _timerIdHide;
    var _parent = $(parent);
    var _menu = $(menu);
    _parent.mouseenter(function (e)
    {
        clearTimeout(_timerIdHide);
        _timerIdDisplay = setTimeout(function ()
        {
            _menu.show();
        }, _delayTime);

    })
    _parent.mouseleave(function ()
    {
        clearTimeout(_timerIdDisplay);
        _timerIdHide = setTimeout(function ()
        {
            _menu.hide();
        }, _stayTime);
    })

    _menu.mouseenter(function ()
    {
        clearTimeout(_timerIdHide);
    })

    if (!CheckChild(_menu, _parent))
    {
        _menu.mouseleave(function ()
        {
            _timerIdHide = setTimeout(function ()
            {
                _menu.hide();
            }, _stayTime);
        })
    }

    $(window).click(function (e)
    {
        var point = {};
        point.X = e.clientX;
        point.Y = e.clientY;
        if (!MPCheckInEle(_menu,point))
        {
            _menu.hide();
        }
    })
    //检查菜单是否为点击目标的子元素
    function CheckChild(obj, parentObj)
    {
        obj = obj.get(0);
        parentObj = parentObj.get(0);
        while (obj != undefined && obj != null && obj.tagName.toUpperCase() != "BODY")
        {
            if (obj == parentObj)
            {
                return true;
            }
            obj = obj.parentNode;
        }
        return false;
    }

}

function MPPopUpMenu(parent, menu, onMenuClose, callback)//parent为点击目标 menu为弹出窗口 onMenuClose为menu关闭后响应的事件,callback回调
{
    var _parent = $(parent);
    var _menu = $(menu);
    _parent.click(function (e)
    {
        e.stopPropagation();
        _menu.show();
        if (callback)
            callback();
        var clickfn;
        $(window).on("click", clickfn = function (event)
        {
            var point = {};
            point.X = event.clientX;
            point.Y = event.clientY;
            if (MPCheckInEle(_menu, point))
            {
                _menu.show();                
            }
            else
            {
                _menu.hide();
                $(window).off("click", clickfn);
            }
            if (onMenuClose)
            {
                onMenuClose();
            }
        })
    })
}

//检查某点是否在某个元素内
function MPCheckInEle(node, point)
{
    var w = $(window);
    var mouseX = point.X;
    var mouseY = point.Y;
    var left = node.offset().left;
    var top = node.offset().top;
    var width = node.width();
    var height = node.height();
    if (mouseX > left - w.scrollLeft() && mouseX < left + width - w.scrollLeft() && mouseY > top - w.scrollTop() && mouseY < top + height - w.scrollTop())
    {
        return true;
    }
    else
    {
        return false;
    }
}

//获取地址栏的某个参数内容
function MPGetQueryString(name)
{
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
}
/*!
 * jQuery Color Animations v2.0pre
 * http://jquery.org/
 *
 * Copyright 2011 John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 */

(function( jQuery, undefined ){
	var stepHooks = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color outlineColor".split(" "),

		// plusequals test for += 100 -= 100
		rplusequals = /^([\-+])=\s*(\d+\.?\d*)/,
		// a set of RE's that can match strings and generate color tuples.
		stringParsers = [{
				re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
				parse: function( execResult ) {
					return [
						execResult[ 1 ],
						execResult[ 2 ],
						execResult[ 3 ],
						execResult[ 4 ]
					];
				}
			}, {
				re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
				parse: function( execResult ) {
					return [
						2.55 * execResult[1],
						2.55 * execResult[2],
						2.55 * execResult[3],
						execResult[ 4 ]
					];
				}
			}, {
				re: /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/,
				parse: function( execResult ) {
					return [
						parseInt( execResult[ 1 ], 16 ),
						parseInt( execResult[ 2 ], 16 ),
						parseInt( execResult[ 3 ], 16 )
					];
				}
			}, {
				re: /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/,
				parse: function( execResult ) {
					return [
						parseInt( execResult[ 1 ] + execResult[ 1 ], 16 ),
						parseInt( execResult[ 2 ] + execResult[ 2 ], 16 ),
						parseInt( execResult[ 3 ] + execResult[ 3 ], 16 )
					];
				}
			}, {
				re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
				space: "hsla",
				parse: function( execResult ) {
					return [
						execResult[1],
						execResult[2] / 100,
						execResult[3] / 100,
						execResult[4]
					];
				}
			}],

		// jQuery.Color( )
		color = jQuery.Color = function( color, green, blue, alpha ) {
			return new jQuery.Color.fn.parse( color, green, blue, alpha );
		},
		spaces = {
			rgba: {
				cache: "_rgba",
				props: {
					red: {
						idx: 0,
						type: "byte",
						empty: true
					},
					green: {
						idx: 1,
						type: "byte",
						empty: true
					},
					blue: {
						idx: 2,
						type: "byte",
						empty: true
					},
					alpha: {
						idx: 3,
						type: "percent",
						def: 1
					}
				}
			},
			hsla: {
				cache: "_hsla",
				props: {
					hue: {
						idx: 0,
						type: "degrees",
						empty: true
					},
					saturation: {
						idx: 1,
						type: "percent",
						empty: true
					},
					lightness: {
						idx: 2,
						type: "percent",
						empty: true
					}
				}
			}
		},
		propTypes = {
			"byte": {
				floor: true,
				min: 0,
				max: 255
			},
			"percent": {
				min: 0,
				max: 1
			},
			"degrees": {
				mod: 360,
				floor: true
			}
		},
		rgbaspace = spaces.rgba.props,
		support = color.support = {},

		// colors = jQuery.Color.names
		colors,

		// local aliases of functions called often
		each = jQuery.each;

	spaces.hsla.props.alpha = rgbaspace.alpha;

	function clamp( value, prop, alwaysAllowEmpty ) {
		var type = propTypes[ prop.type ] || {},
			allowEmpty = prop.empty || alwaysAllowEmpty;

		if ( allowEmpty && value == null ) {
			return null;
		}
		if ( prop.def && value == null ) {
			return prop.def;
		}
		if ( type.floor ) {
			value = ~~value;
		} else {
			value = parseFloat( value );
		}
		if ( value == null || isNaN( value ) ) {
			return prop.def;
		}
		if ( type.mod ) {
			value = value % type.mod;
			// -10 -> 350
			return value < 0 ? type.mod + value : value;
		}

		// for now all property types without mod have min and max
		return type.min > value ? type.min : type.max < value ? type.max : value;
	}

	function stringParse( string ) {
		var inst = color(),
			rgba = inst._rgba = [];

		string = string.toLowerCase();

		each( stringParsers, function( i, parser ) {
			var match = parser.re.exec( string ),
				values = match && parser.parse( match ),
				parsed,
				spaceName = parser.space || "rgba",
				cache = spaces[ spaceName ].cache;


			if ( values ) {
				parsed = inst[ spaceName ]( values );

				// if this was an rgba parse the assignment might happen twice
				// oh well....
				inst[ cache ] = parsed[ cache ];
				rgba = inst._rgba = parsed._rgba;

				// exit each( stringParsers ) here because we matched
				return false;
			}
		});

		// Found a stringParser that handled it
		if ( rgba.length !== 0 ) {

			// if this came from a parsed string, force "transparent" when alpha is 0
			// chrome, (and maybe others) return "transparent" as rgba(0,0,0,0)
			if ( Math.max.apply( Math, rgba ) === 0 ) {
				jQuery.extend( rgba, colors.transparent );
			}
			return inst;
		}

		// named colors / default - filter back through parse function
		if ( string = colors[ string ] ) {
			return string;
		}
	}

	color.fn = color.prototype = {
		constructor: color,
		parse: function( red, green, blue, alpha ) {
			if ( red === undefined ) {
				this._rgba = [ null, null, null, null ];
				return this;
			}
			if ( red instanceof jQuery || red.nodeType ) {
				red = red instanceof jQuery ? red.css( green ) : jQuery( red ).css( green );
				green = undefined;
			}

			var inst = this,
				type = jQuery.type( red ),
				rgba = this._rgba = [],
				source;

			// more than 1 argument specified - assume ( red, green, blue, alpha )
			if ( green !== undefined ) {
				red = [ red, green, blue, alpha ];
				type = "array";
			}

			if ( type === "string" ) {
				return this.parse( stringParse( red ) || colors._default );
			}

			if ( type === "array" ) {
				each( rgbaspace, function( key, prop ) {
					rgba[ prop.idx ] = clamp( red[ prop.idx ], prop );
				});
				return this;
			}

			if ( type === "object" ) {
				if ( red instanceof color ) {
					each( spaces, function( spaceName, space ) {
						if ( red[ space.cache ] ) {
							inst[ space.cache ] = red[ space.cache ].slice();
						}
					});
				} else {
					each( spaces, function( spaceName, space ) {
						each( space.props, function( key, prop ) {
							var cache = space.cache;

							// if the cache doesn't exist, and we know how to convert
							if ( !inst[ cache ] && space.to ) {

								// if the value was null, we don't need to copy it
								// if the key was alpha, we don't need to copy it either
								if ( red[ key ] == null || key === "alpha") {
									return;
								}
								inst[ cache ] = space.to( inst._rgba );
							}

							// this is the only case where we allow nulls for ALL properties.
							// call clamp with alwaysAllowEmpty
							inst[ cache ][ prop.idx ] = clamp( red[ key ], prop, true );
						});
					});
				}
				return this;
			}
		},
		is: function( compare ) {
			var is = color( compare ),
				same = true,
				myself = this;

			each( spaces, function( _, space ) {
				var isCache = is[ space.cache ],
					localCache;
				if (isCache) {
					localCache = myself[ space.cache ] || space.to && space.to( myself._rgba ) || [];
					each( space.props, function( _, prop ) {
						if ( isCache[ prop.idx ] != null ) {
							same = ( isCache[ prop.idx ] === localCache[ prop.idx ] );
							return same;
						}
					});
				}
				return same;
			});
			return same;
		},
		_space: function() {
			var used = [],
				inst = this;
			each( spaces, function( spaceName, space ) {
				if ( inst[ space.cache ] ) {
					used.push( spaceName );
				}
			});
			return used.pop();
		},
		transition: function( other, distance ) {
			var end = color( other ),
				spaceName = end._space(),
				space = spaces[ spaceName ],
				start = this[ space.cache ] || space.to( this._rgba ),
				result = start.slice();

			end = end[ space.cache ];
			each( space.props, function( key, prop ) {
				var index = prop.idx,
					startValue = start[ index ],
					endValue = end[ index ],
					type = propTypes[ prop.type ] || {};

				// if null, don't override start value
				if ( endValue === null ) {
					return;
				}
				// if null - use end
				if ( startValue === null ) {
					result[ index ] = endValue;
				} else {
					if ( type.mod ) {
						if ( endValue - startValue > type.mod / 2 ) {
							startValue += type.mod;
						} else if ( startValue - endValue > type.mod / 2 ) {
							startValue -= type.mod;
						}
					}
					result[ prop.idx ] = clamp( ( endValue - startValue ) * distance + startValue, prop );
				}
			});
			return this[ spaceName ]( result );
		},
		blend: function( opaque ) {
			// if we are already opaque - return ourself
			if ( this._rgba[ 3 ] === 1 ) {
				return this;
			}

			var rgb = this._rgba.slice(),
				a = rgb.pop(),
				blend = color( opaque )._rgba;

			return color( jQuery.map( rgb, function( v, i ) {
				return ( 1 - a ) * blend[ i ] + a * v;
			}));
		},
		toRgbaString: function() {
			var prefix = "rgba(",
				rgba = jQuery.map( this._rgba, function( v, i ) {
					return v == null ? ( i > 2 ? 1 : 0 ) : v;
				});

			if ( rgba[ 3 ] === 1 ) {
				rgba.pop();
				prefix = "rgb(";
			}

			return prefix + rgba.join(",") + ")";
		},
		toHslaString: function() {
			var prefix = "hsla(",
				hsla = jQuery.map( this.hsla(), function( v, i ) {
					if ( v == null ) {
						v = i > 2 ? 1 : 0;
					}

					// catch 1 and 2
					if ( i && i < 3 ) {
						v = Math.round( v * 100 ) + "%";
					}
					return v;
				});

			if ( hsla[ 3 ] === 1 ) {
				hsla.pop();
				prefix = "hsl(";
			}
			return prefix + hsla.join(",") + ")";
		},
		toHexString: function( includeAlpha ) {
			var rgba = this._rgba.slice(),
				alpha = rgba.pop();

			if ( includeAlpha ) {
				rgba.push( ~~( alpha * 255 ) );
			}

			return "#" + jQuery.map( rgba, function( v, i ) {

				// default to 0 when nulls exist
				v = ( v || 0 ).toString( 16 );
				return v.length === 1 ? "0" + v : v;
			}).join("");
		},
		toString: function() {
			return this._rgba[ 3 ] === 0 ? "transparent" : this.toRgbaString();
		}
	};
	color.fn.parse.prototype = color.fn;

	// hsla conversions adapted from:
	// http://www.google.com/codesearch/p#OAMlx_jo-ck/src/third_party/WebKit/Source/WebCore/inspector/front-end/Color.js&d=7&l=193

	function hue2rgb( p, q, h ) {
		h = ( h + 1 ) % 1;
		if ( h * 6 < 1 ) {
			return p + (q - p) * 6 * h;
		}
		if ( h * 2 < 1) {
			return q;
		}
		if ( h * 3 < 2 ) {
			return p + (q - p) * ((2/3) - h) * 6;
		}
		return p;
	}

	spaces.hsla.to = function ( rgba ) {
		if ( rgba[ 0 ] == null || rgba[ 1 ] == null || rgba[ 2 ] == null ) {
			return [ null, null, null, rgba[ 3 ] ];
		}
		var r = rgba[ 0 ] / 255,
			g = rgba[ 1 ] / 255,
			b = rgba[ 2 ] / 255,
			a = rgba[ 3 ],
			max = Math.max( r, g, b ),
			min = Math.min( r, g, b ),
			diff = max - min,
			add = max + min,
			l = add * 0.5,
			h, s;

		if ( min === max ) {
			h = 0;
		} else if ( r === max ) {
			h = ( 60 * ( g - b ) / diff ) + 360;
		} else if ( g === max ) {
			h = ( 60 * ( b - r ) / diff ) + 120;
		} else {
			h = ( 60 * ( r - g ) / diff ) + 240;
		}

		if ( l === 0 || l === 1 ) {
			s = l;
		} else if ( l <= 0.5 ) {
			s = diff / add;
		} else {
			s = diff / ( 2 - add );
		}
		return [ Math.round(h) % 360, s, l, a == null ? 1 : a ];
	};

	spaces.hsla.from = function ( hsla ) {
		if ( hsla[ 0 ] == null || hsla[ 1 ] == null || hsla[ 2 ] == null ) {
			return [ null, null, null, hsla[ 3 ] ];
		}
		var h = hsla[ 0 ] / 360,
			s = hsla[ 1 ],
			l = hsla[ 2 ],
			a = hsla[ 3 ],
			q = l <= 0.5 ? l * ( 1 + s ) : l + s - l * s,
			p = 2 * l - q,
			r, g, b;

		return [
			Math.round( hue2rgb( p, q, h + ( 1 / 3 ) ) * 255 ),
			Math.round( hue2rgb( p, q, h ) * 255 ),
			Math.round( hue2rgb( p, q, h - ( 1 / 3 ) ) * 255 ),
			a
		];
	};


	each( spaces, function( spaceName, space ) {
		var props = space.props,
			cache = space.cache,
			to = space.to,
			from = space.from;

		// makes rgba() and hsla()
		color.fn[ spaceName ] = function( value ) {

			// generate a cache for this space if it doesn't exist
			if ( to && !this[ cache ] ) {
				this[ cache ] = to( this._rgba );
			}
			if ( value === undefined ) {
				return this[ cache ].slice();
			}

			var type = jQuery.type( value ),
				arr = ( type === "array" || type === "object" ) ? value : arguments,
				local = this[ cache ].slice(),
				ret;

			each( props, function( key, prop ) {
				var val = arr[ type === "object" ? key : prop.idx ];
				if ( val == null ) {
					val = local[ prop.idx ];
				}
				local[ prop.idx ] = clamp( val, prop );
			});

			if ( from ) {
				ret = color( from( local ) );
				ret[ cache ] = local;
				return ret;
			} else {
				return color( local );
			}
		};

		// makes red() green() blue() alpha() hue() saturation() lightness()
		each( props, function( key, prop ) {
			// alpha is included in more than one space
			if ( color.fn[ key ] ) {
				return;
			}
			color.fn[ key ] = function( value ) {
				var vtype = jQuery.type( value ),
					fn = ( key === 'alpha' ? ( this._hsla ? 'hsla' : 'rgba' ) : spaceName ),
					local = this[ fn ](),
					cur = local[ prop.idx ],
					match;

				if ( vtype === "undefined" ) {
					return cur;
				}

				if ( vtype === "function" ) {
					value = value.call( this, cur );
					vtype = jQuery.type( value );
				}
				if ( value == null && prop.empty ) {
					return this;
				}
				if ( vtype === "string" ) {
					match = rplusequals.exec( value );
					if ( match ) {
						value = cur + parseFloat( match[ 2 ] ) * ( match[ 1 ] === "+" ? 1 : -1 );
					}
				}
				local[ prop.idx ] = value;
				return this[ fn ]( local );
			};
		});
	});

	// add .fx.step functions
	each( stepHooks, function( i, hook ) {
		jQuery.cssHooks[ hook ] = {
			set: function( elem, value ) {
				var parsed, backgroundColor, curElem;

				if ( jQuery.type( value ) !== 'string' || ( parsed = stringParse( value ) ) )
				{
					value = color( parsed || value );
					if ( !support.rgba && value._rgba[ 3 ] !== 1 ) {
						curElem = hook === "backgroundColor" ? elem.parentNode : elem;
						do {
							backgroundColor = jQuery.curCSS( curElem, "backgroundColor" );
						} while (
							( backgroundColor === "" || backgroundColor === "transparent" ) &&
							( curElem = curElem.parentNode ) &&
							curElem.style
						);

						value = value.blend( backgroundColor && backgroundColor !== "transparent" ?
							backgroundColor :
							"_default" );
					}

					value = value.toRgbaString();
				}
				elem.style[ hook ] = value;
			}
		};
		jQuery.fx.step[ hook ] = function( fx ) {
			if ( !fx.colorInit ) {
				fx.start = color( fx.elem, hook );
				fx.end = color( fx.end );
				fx.colorInit = true;
			}
			jQuery.cssHooks[ hook ].set( fx.elem, fx.start.transition( fx.end, fx.pos ) );
		};
	});

	// detect rgba support
	jQuery(function() {
		var div = document.createElement( "div" ),
			div_style = div.style;

		div_style.cssText = "background-color:rgba(1,1,1,.5)";
		support.rgba = div_style.backgroundColor.indexOf( "rgba" ) > -1;
	});

	// Some named colors to work with
	// From Interface by Stefan Petre
	// http://interface.eyecon.ro/
	colors = jQuery.Color.names = {
		aqua: "#00ffff",
		azure: "#f0ffff",
		beige: "#f5f5dc",
		black: "#000000",
		blue: "#0000ff",
		brown: "#a52a2a",
		cyan: "#00ffff",
		darkblue: "#00008b",
		darkcyan: "#008b8b",
		darkgrey: "#a9a9a9",
		darkgreen: "#006400",
		darkkhaki: "#bdb76b",
		darkmagenta: "#8b008b",
		darkolivegreen: "#556b2f",
		darkorange: "#ff8c00",
		darkorchid: "#9932cc",
		darkred: "#8b0000",
		darksalmon: "#e9967a",
		darkviolet: "#9400d3",
		fuchsia: "#ff00ff",
		gold: "#ffd700",
		green: "#008000",
		indigo: "#4b0082",
		khaki: "#f0e68c",
		lightblue: "#add8e6",
		lightcyan: "#e0ffff",
		lightgreen: "#90ee90",
		lightgrey: "#d3d3d3",
		lightpink: "#ffb6c1",
		lightyellow: "#ffffe0",
		lime: "#00ff00",
		magenta: "#ff00ff",
		maroon: "#800000",
		navy: "#000080",
		olive: "#808000",
		orange: "#ffa500",
		pink: "#ffc0cb",
		purple: "#800080",
		violet: "#800080",
		red: "#ff0000",
		silver: "#c0c0c0",
		white: "#ffffff",
		yellow: "#ffff00",
		transparent: [ null, null, null, 0 ],
		_default: "#ffffff"
	};
})( jQuery );
/**
 * jquery.Jcrop.js v0.9.12
 * jQuery Image Cropping Plugin - released under MIT License 
 * Author: Kelly Hallman <khallman@gmail.com>
 * http://github.com/tapmodo/Jcrop
 * Copyright (c) 2008-2013 Tapmodo Interactive LLC {{{
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 *
 * }}}
 */

(function ($) {

  $.Jcrop = function (obj, opt) {
    var options = $.extend({}, $.Jcrop.defaults),
        docOffset,
        _ua = navigator.userAgent.toLowerCase(),
        is_msie = /msie/.test(_ua),
        ie6mode = /msie [1-6]\./.test(_ua);

    // Internal Methods {{{
    function px(n) {
      return Math.round(n) + 'px';
    }
    function cssClass(cl) {
      return options.baseClass + '-' + cl;
    }
    function supportsColorFade() {
      return $.fx.step.hasOwnProperty('backgroundColor');
    }
    function getPos(obj) //{{{
    {
      var pos = $(obj).offset();
      return [pos.left, pos.top];
    }
    //}}}
    function mouseAbs(e) //{{{
    {
      return [(e.pageX - docOffset[0]), (e.pageY - docOffset[1])];
    }
    //}}}
    function setOptions(opt) //{{{
    {
      if (typeof(opt) !== 'object') opt = {};
      options = $.extend(options, opt);

      $.each(['onChange','onSelect','onRelease','onDblClick'],function(i,e) {
        if (typeof(options[e]) !== 'function') options[e] = function () {};
      });
    }
    //}}}
    function startDragMode(mode, pos, touch) //{{{
    {
      docOffset = getPos($img);
      Tracker.setCursor(mode === 'move' ? mode : mode + '-resize');

      if (mode === 'move') {
        return Tracker.activateHandlers(createMover(pos), doneSelect, touch);
      }

      var fc = Coords.getFixed();
      var opp = oppLockCorner(mode);
      var opc = Coords.getCorner(oppLockCorner(opp));

      Coords.setPressed(Coords.getCorner(opp));
      Coords.setCurrent(opc);

      Tracker.activateHandlers(dragmodeHandler(mode, fc), doneSelect, touch);
    }
    //}}}
    function dragmodeHandler(mode, f) //{{{
    {
      return function (pos) {
        if (!options.aspectRatio) {
          switch (mode) {
          case 'e':
            pos[1] = f.y2;
            break;
          case 'w':
            pos[1] = f.y2;
            break;
          case 'n':
            pos[0] = f.x2;
            break;
          case 's':
            pos[0] = f.x2;
            break;
          }
        } else {
          switch (mode) {
          case 'e':
            pos[1] = f.y + 1;
            break;
          case 'w':
            pos[1] = f.y + 1;
            break;
          case 'n':
            pos[0] = f.x + 1;
            break;
          case 's':
            pos[0] = f.x + 1;
            break;
          }
        }
        Coords.setCurrent(pos);
        Selection.update();
      };
    }
    //}}}
    function createMover(pos) //{{{
    {
      var lloc = pos;
      KeyManager.watchKeys();

      return function (pos) {
        Coords.moveOffset([pos[0] - lloc[0], pos[1] - lloc[1]]);
        lloc = pos;

        Selection.update();
      };
    }
    //}}}
    function oppLockCorner(ord) //{{{
    {
      switch (ord) {
      case 'n':
        return 'sw';
      case 's':
        return 'nw';
      case 'e':
        return 'nw';
      case 'w':
        return 'ne';
      case 'ne':
        return 'sw';
      case 'nw':
        return 'se';
      case 'se':
        return 'nw';
      case 'sw':
        return 'ne';
      }
    }
    //}}}
    function createDragger(ord) //{{{
    {
      return function (e) {
        if (options.disabled) {
          return false;
        }
        if ((ord === 'move') && !options.allowMove) {
          return false;
        }
        
        // Fix position of crop area when dragged the very first time.
        // Necessary when crop image is in a hidden element when page is loaded.
        docOffset = getPos($img);

        btndown = true;
        startDragMode(ord, mouseAbs(e));
        e.stopPropagation();
        e.preventDefault();
        return false;
      };
    }
    //}}}
    function presize($obj, w, h) //{{{
    {
      var nw = $obj.width(),
          nh = $obj.height();
      if ((nw > w) && w > 0) {
        nw = w;
        nh = (w / $obj.width()) * $obj.height();
      }
      if ((nh > h) && h > 0) {
        nh = h;
        nw = (h / $obj.height()) * $obj.width();
      }
      xscale = $obj.width() / nw;
      yscale = $obj.height() / nh;
      $obj.width(nw).height(nh);
    }
    //}}}
    function unscale(c) //{{{
    {
      return {
        x: c.x * xscale,
        y: c.y * yscale,
        x2: c.x2 * xscale,
        y2: c.y2 * yscale,
        w: c.w * xscale,
        h: c.h * yscale
      };
    }
    //}}}
    function doneSelect(pos) //{{{
    {
      var c = Coords.getFixed();
      if ((c.w > options.minSelect[0]) && (c.h > options.minSelect[1])) {
        Selection.enableHandles();
        Selection.done();
      } else {
        Selection.release();
      }
      Tracker.setCursor(options.allowSelect ? 'crosshair' : 'default');
    }
    //}}}
    function newSelection(e) //{{{
    {
      if (options.disabled) {
        return false;
      }
      if (!options.allowSelect) {
        return false;
      }
      btndown = true;
      docOffset = getPos($img);
      Selection.disableHandles();
      Tracker.setCursor('crosshair');
      var pos = mouseAbs(e);
      Coords.setPressed(pos);
      Selection.update();
      Tracker.activateHandlers(selectDrag, doneSelect, e.type.substring(0,5)==='touch');
      KeyManager.watchKeys();

      e.stopPropagation();
      e.preventDefault();
      return false;
    }
    //}}}
    function selectDrag(pos) //{{{
    {
      Coords.setCurrent(pos);
      Selection.update();
    }
    //}}}
    function newTracker() //{{{
    {
      var trk = $('<div></div>').addClass(cssClass('tracker'));
      if (is_msie) {
        trk.css({
          opacity: 0,
          backgroundColor: 'white'
        });
      }
      return trk;
    }
    //}}}

    // }}}
    // Initialization {{{
    // Sanitize some options {{{
    if (typeof(obj) !== 'object') {
      obj = $(obj)[0];
    }
    if (typeof(opt) !== 'object') {
      opt = {};
    }
    // }}}
    setOptions(opt);
    // Initialize some jQuery objects {{{
    // The values are SET on the image(s) for the interface
    // If the original image has any of these set, they will be reset
    // However, if you destroy() the Jcrop instance the original image's
    // character in the DOM will be as you left it.
    var img_css = {
      border: 'none',
      visibility: 'visible',
      margin: 0,
      padding: 0,
      position: 'absolute',
      top: 0,
      left: 0
    };

    var $origimg = $(obj),
      img_mode = true;

    if (obj.tagName == 'IMG') {
      // Fix size of crop image.
      // Necessary when crop image is within a hidden element when page is loaded.
      if ($origimg[0].width != 0 && $origimg[0].height != 0) {
        // Obtain dimensions from contained img element.
        $origimg.width($origimg[0].width);
        $origimg.height($origimg[0].height);
      } else {
        // Obtain dimensions from temporary image in case the original is not loaded yet (e.g. IE 7.0). 
        var tempImage = new Image();
        tempImage.src = $origimg[0].src;
        $origimg.width(tempImage.width);
        $origimg.height(tempImage.height);
      } 

      var $img = $origimg.clone().removeAttr('id').css(img_css).show();

      $img.width($origimg.width());
      $img.height($origimg.height());
      $origimg.after($img).hide();

    } else {
      $img = $origimg.css(img_css).show();
      img_mode = false;
      if (options.shade === null) { options.shade = true; }
    }

    presize($img, options.boxWidth, options.boxHeight);

    var boundx = $img.width(),
        boundy = $img.height(),
        
        
        $div = $('<div />').width(boundx).height(boundy).addClass(cssClass('holder')).css({
        position: 'relative',
        backgroundColor: options.bgColor
      }).insertAfter($origimg).append($img);

    if (options.addClass) {
      $div.addClass(options.addClass);
    }

    var $img2 = $('<div />'),

        $img_holder = $('<div />') 
        .width('100%').height('100%').css({
          zIndex: 310,
          position: 'absolute',
          overflow: 'hidden'
        }),

        $hdl_holder = $('<div />') 
        .width('100%').height('100%').css('zIndex', 320), 

        $sel = $('<div />') 
        .css({
          position: 'absolute',
          zIndex: 600
        }).dblclick(function(){
          var c = Coords.getFixed();
          options.onDblClick.call(api,c);
        }).insertBefore($img).append($img_holder, $hdl_holder); 

    if (img_mode) {

      $img2 = $('<img />')
          .attr('src', $img.attr('src')).css(img_css).width(boundx).height(boundy),

      $img_holder.append($img2);

    }

    if (ie6mode) {
      $sel.css({
        overflowY: 'hidden'
      });
    }

    var bound = options.boundary;
    var $trk = newTracker().width(boundx + (bound * 2)).height(boundy + (bound * 2)).css({
      position: 'absolute',
      top: px(-bound),
      left: px(-bound),
      zIndex: 290
    }).mousedown(newSelection);

    /* }}} */
    // Set more variables {{{
    var bgcolor = options.bgColor,
        bgopacity = options.bgOpacity,
        xlimit, ylimit, xmin, ymin, xscale, yscale, enabled = true,
        btndown, animating, shift_down;

    docOffset = getPos($img);
    // }}}
    // }}}
    // Internal Modules {{{
    // Touch Module {{{ 
    var Touch = (function () {
      // Touch support detection function adapted (under MIT License)
      // from code by Jeffrey Sambells - http://github.com/iamamused/
      function hasTouchSupport() {
        var support = {}, events = ['touchstart', 'touchmove', 'touchend'],
            el = document.createElement('div'), i;

        try {
          for(i=0; i<events.length; i++) {
            var eventName = events[i];
            eventName = 'on' + eventName;
            var isSupported = (eventName in el);
            if (!isSupported) {
              el.setAttribute(eventName, 'return;');
              isSupported = typeof el[eventName] == 'function';
            }
            support[events[i]] = isSupported;
          }
          return support.touchstart && support.touchend && support.touchmove;
        }
        catch(err) {
          return false;
        }
      }

      function detectSupport() {
        if ((options.touchSupport === true) || (options.touchSupport === false)) return options.touchSupport;
          else return hasTouchSupport();
      }
      return {
        createDragger: function (ord) {
          return function (e) {
            if (options.disabled) {
              return false;
            }
            if ((ord === 'move') && !options.allowMove) {
              return false;
            }
            docOffset = getPos($img);
            btndown = true;
            startDragMode(ord, mouseAbs(Touch.cfilter(e)), true);
            e.stopPropagation();
            e.preventDefault();
            return false;
          };
        },
        newSelection: function (e) {
          return newSelection(Touch.cfilter(e));
        },
        cfilter: function (e){
          e.pageX = e.originalEvent.changedTouches[0].pageX;
          e.pageY = e.originalEvent.changedTouches[0].pageY;
          return e;
        },
        isSupported: hasTouchSupport,
        support: detectSupport()
      };
    }());
    // }}}
    // Coords Module {{{
    var Coords = (function () {
      var x1 = 0,
          y1 = 0,
          x2 = 0,
          y2 = 0,
          ox, oy;

      function setPressed(pos) //{{{
      {
        pos = rebound(pos);
        x2 = x1 = pos[0];
        y2 = y1 = pos[1];
      }
      //}}}
      function setCurrent(pos) //{{{
      {
        pos = rebound(pos);
        ox = pos[0] - x2;
        oy = pos[1] - y2;
        x2 = pos[0];
        y2 = pos[1];
      }
      //}}}
      function getOffset() //{{{
      {
        return [ox, oy];
      }
      //}}}
      function moveOffset(offset) //{{{
      {
        var ox = offset[0],
            oy = offset[1];

        if (0 > x1 + ox) {
          ox -= ox + x1;
        }
        if (0 > y1 + oy) {
          oy -= oy + y1;
        }

        if (boundy < y2 + oy) {
          oy += boundy - (y2 + oy);
        }
        if (boundx < x2 + ox) {
          ox += boundx - (x2 + ox);
        }

        x1 += ox;
        x2 += ox;
        y1 += oy;
        y2 += oy;
      }
      //}}}
      function getCorner(ord) //{{{
      {
        var c = getFixed();
        switch (ord) {
        case 'ne':
          return [c.x2, c.y];
        case 'nw':
          return [c.x, c.y];
        case 'se':
          return [c.x2, c.y2];
        case 'sw':
          return [c.x, c.y2];
        }
      }
      //}}}
      function getFixed() //{{{
      {
        if (!options.aspectRatio) {
          return getRect();
        }
        // This function could use some optimization I think...
        var aspect = options.aspectRatio,
            min_x = options.minSize[0] / xscale,
            
            
            //min_y = options.minSize[1]/yscale,
            max_x = options.maxSize[0] / xscale,
            max_y = options.maxSize[1] / yscale,
            rw = x2 - x1,
            rh = y2 - y1,
            rwa = Math.abs(rw),
            rha = Math.abs(rh),
            real_ratio = rwa / rha,
            xx, yy, w, h;

        if (max_x === 0) {
          max_x = boundx * 10;
        }
        if (max_y === 0) {
          max_y = boundy * 10;
        }
        if (real_ratio < aspect) {
          yy = y2;
          w = rha * aspect;
          xx = rw < 0 ? x1 - w : w + x1;

          if (xx < 0) {
            xx = 0;
            h = Math.abs((xx - x1) / aspect);
            yy = rh < 0 ? y1 - h : h + y1;
          } else if (xx > boundx) {
            xx = boundx;
            h = Math.abs((xx - x1) / aspect);
            yy = rh < 0 ? y1 - h : h + y1;
          }
        } else {
          xx = x2;
          h = rwa / aspect;
          yy = rh < 0 ? y1 - h : y1 + h;
          if (yy < 0) {
            yy = 0;
            w = Math.abs((yy - y1) * aspect);
            xx = rw < 0 ? x1 - w : w + x1;
          } else if (yy > boundy) {
            yy = boundy;
            w = Math.abs(yy - y1) * aspect;
            xx = rw < 0 ? x1 - w : w + x1;
          }
        }

        // Magic %-)
        if (xx > x1) { // right side
          if (xx - x1 < min_x) {
            xx = x1 + min_x;
          } else if (xx - x1 > max_x) {
            xx = x1 + max_x;
          }
          if (yy > y1) {
            yy = y1 + (xx - x1) / aspect;
          } else {
            yy = y1 - (xx - x1) / aspect;
          }
        } else if (xx < x1) { // left side
          if (x1 - xx < min_x) {
            xx = x1 - min_x;
          } else if (x1 - xx > max_x) {
            xx = x1 - max_x;
          }
          if (yy > y1) {
            yy = y1 + (x1 - xx) / aspect;
          } else {
            yy = y1 - (x1 - xx) / aspect;
          }
        }

        if (xx < 0) {
          x1 -= xx;
          xx = 0;
        } else if (xx > boundx) {
          x1 -= xx - boundx;
          xx = boundx;
        }

        if (yy < 0) {
          y1 -= yy;
          yy = 0;
        } else if (yy > boundy) {
          y1 -= yy - boundy;
          yy = boundy;
        }

        return makeObj(flipCoords(x1, y1, xx, yy));
      }
      //}}}
      function rebound(p) //{{{
      {
        if (p[0] < 0) p[0] = 0;
        if (p[1] < 0) p[1] = 0;

        if (p[0] > boundx) p[0] = boundx;
        if (p[1] > boundy) p[1] = boundy;

        return [Math.round(p[0]), Math.round(p[1])];
      }
      //}}}
      function flipCoords(x1, y1, x2, y2) //{{{
      {
        var xa = x1,
            xb = x2,
            ya = y1,
            yb = y2;
        if (x2 < x1) {
          xa = x2;
          xb = x1;
        }
        if (y2 < y1) {
          ya = y2;
          yb = y1;
        }
        return [xa, ya, xb, yb];
      }
      //}}}
      function getRect() //{{{
      {
        var xsize = x2 - x1,
            ysize = y2 - y1,
            delta;

        if (xlimit && (Math.abs(xsize) > xlimit)) {
          x2 = (xsize > 0) ? (x1 + xlimit) : (x1 - xlimit);
        }
        if (ylimit && (Math.abs(ysize) > ylimit)) {
          y2 = (ysize > 0) ? (y1 + ylimit) : (y1 - ylimit);
        }

        if (ymin / yscale && (Math.abs(ysize) < ymin / yscale)) {
          y2 = (ysize > 0) ? (y1 + ymin / yscale) : (y1 - ymin / yscale);
        }
        if (xmin / xscale && (Math.abs(xsize) < xmin / xscale)) {
          x2 = (xsize > 0) ? (x1 + xmin / xscale) : (x1 - xmin / xscale);
        }

        if (x1 < 0) {
          x2 -= x1;
          x1 -= x1;
        }
        if (y1 < 0) {
          y2 -= y1;
          y1 -= y1;
        }
        if (x2 < 0) {
          x1 -= x2;
          x2 -= x2;
        }
        if (y2 < 0) {
          y1 -= y2;
          y2 -= y2;
        }
        if (x2 > boundx) {
          delta = x2 - boundx;
          x1 -= delta;
          x2 -= delta;
        }
        if (y2 > boundy) {
          delta = y2 - boundy;
          y1 -= delta;
          y2 -= delta;
        }
        if (x1 > boundx) {
          delta = x1 - boundy;
          y2 -= delta;
          y1 -= delta;
        }
        if (y1 > boundy) {
          delta = y1 - boundy;
          y2 -= delta;
          y1 -= delta;
        }

        return makeObj(flipCoords(x1, y1, x2, y2));
      }
      //}}}
      function makeObj(a) //{{{
      {
        return {
          x: a[0],
          y: a[1],
          x2: a[2],
          y2: a[3],
          w: a[2] - a[0],
          h: a[3] - a[1]
        };
      }
      //}}}

      return {
        flipCoords: flipCoords,
        setPressed: setPressed,
        setCurrent: setCurrent,
        getOffset: getOffset,
        moveOffset: moveOffset,
        getCorner: getCorner,
        getFixed: getFixed
      };
    }());

    //}}}
    // Shade Module {{{
    var Shade = (function() {
      var enabled = false,
          holder = $('<div />').css({
            position: 'absolute',
            zIndex: 240,
            opacity: 0
          }),
          shades = {
            top: createShade(),
            left: createShade().height(boundy),
            right: createShade().height(boundy),
            bottom: createShade()
          };

      function resizeShades(w,h) {
        shades.left.css({ height: px(h) });
        shades.right.css({ height: px(h) });
      }
      function updateAuto()
      {
        return updateShade(Coords.getFixed());
      }
      function updateShade(c)
      {
        shades.top.css({
          left: px(c.x),
          width: px(c.w),
          height: px(c.y)
        });
        shades.bottom.css({
          top: px(c.y2),
          left: px(c.x),
          width: px(c.w),
          height: px(boundy-c.y2)
        });
        shades.right.css({
          left: px(c.x2),
          width: px(boundx-c.x2)
        });
        shades.left.css({
          width: px(c.x)
        });
      }
      function createShade() {
        return $('<div />').css({
          position: 'absolute',
          backgroundColor: options.shadeColor||options.bgColor
        }).appendTo(holder);
      }
      function enableShade() {
        if (!enabled) {
          enabled = true;
          holder.insertBefore($img);
          updateAuto();
          Selection.setBgOpacity(1,0,1);
          $img2.hide();

          setBgColor(options.shadeColor||options.bgColor,1);
          if (Selection.isAwake())
          {
            setOpacity(options.bgOpacity,1);
          }
            else setOpacity(1,1);
        }
      }
      function setBgColor(color,now) {
        colorChangeMacro(getShades(),color,now);
      }
      function disableShade() {
        if (enabled) {
          holder.remove();
          $img2.show();
          enabled = false;
          if (Selection.isAwake()) {
            Selection.setBgOpacity(options.bgOpacity,1,1);
          } else {
            Selection.setBgOpacity(1,1,1);
            Selection.disableHandles();
          }
          colorChangeMacro($div,0,1);
        }
      }
      function setOpacity(opacity,now) {
        if (enabled) {
          if (options.bgFade && !now) {
            holder.animate({
              opacity: 1-opacity
            },{
              queue: false,
              duration: options.fadeTime
            });
          }
          else holder.css({opacity:1-opacity});
        }
      }
      function refreshAll() {
        options.shade ? enableShade() : disableShade();
        if (Selection.isAwake()) setOpacity(options.bgOpacity);
      }
      function getShades() {
        return holder.children();
      }

      return {
        update: updateAuto,
        updateRaw: updateShade,
        getShades: getShades,
        setBgColor: setBgColor,
        enable: enableShade,
        disable: disableShade,
        resize: resizeShades,
        refresh: refreshAll,
        opacity: setOpacity
      };
    }());
    // }}}
    // Selection Module {{{
    var Selection = (function () {
      var awake,
          hdep = 370,
          borders = {},
          handle = {},
          dragbar = {},
          seehandles = false;

      // Private Methods
      function insertBorder(type) //{{{
      {
        var jq = $('<div />').css({
          position: 'absolute',
          opacity: options.borderOpacity
        }).addClass(cssClass(type));
        $img_holder.append(jq);
        return jq;
      }
      //}}}
      function dragDiv(ord, zi) //{{{
      {
        var jq = $('<div />').mousedown(createDragger(ord)).css({
          cursor: ord + '-resize',
          position: 'absolute',
          zIndex: zi
        }).addClass('ord-'+ord);

        if (Touch.support) {
          jq.bind('touchstart.jcrop', Touch.createDragger(ord));
        }

        $hdl_holder.append(jq);
        return jq;
      }
      //}}}
      function insertHandle(ord) //{{{
      {
        var hs = options.handleSize,

          div = dragDiv(ord, hdep++).css({
            opacity: options.handleOpacity
          }).addClass(cssClass('handle'));

        if (hs) { div.width(hs).height(hs); }

        return div;
      }
      //}}}
      function insertDragbar(ord) //{{{
      {
        return dragDiv(ord, hdep++).addClass('jcrop-dragbar');
      }
      //}}}
      function createDragbars(li) //{{{
      {
        var i;
        for (i = 0; i < li.length; i++) {
          dragbar[li[i]] = insertDragbar(li[i]);
        }
      }
      //}}}
      function createBorders(li) //{{{
      {
        var cl,i;
        for (i = 0; i < li.length; i++) {
          switch(li[i]){
            case'n': cl='hline'; break;
            case's': cl='hline bottom'; break;
            case'e': cl='vline right'; break;
            case'w': cl='vline'; break;
          }
          borders[li[i]] = insertBorder(cl);
        }
      }
      //}}}
      function createHandles(li) //{{{
      {
        var i;
        for (i = 0; i < li.length; i++) {
          handle[li[i]] = insertHandle(li[i]);
        }
      }
      //}}}
      function moveto(x, y) //{{{
      {
        if (!options.shade) {
          $img2.css({
            top: px(-y),
            left: px(-x)
          });
        }
        $sel.css({
          top: px(y),
          left: px(x)
        });
      }
      //}}}
      function resize(w, h) //{{{
      {
        $sel.width(Math.round(w)).height(Math.round(h));
      }
      //}}}
      function refresh() //{{{
      {
        var c = Coords.getFixed();

        Coords.setPressed([c.x, c.y]);
        Coords.setCurrent([c.x2, c.y2]);

        updateVisible();
      }
      //}}}

      // Internal Methods
      function updateVisible(select) //{{{
      {
        if (awake) {
          return update(select);
        }
      }
      //}}}
      function update(select) //{{{
      {
        var c = Coords.getFixed();

        resize(c.w, c.h);
        moveto(c.x, c.y);
        if (options.shade) Shade.updateRaw(c);

        awake || show();

        if (select) {
          options.onSelect.call(api, unscale(c));
        } else {
          options.onChange.call(api, unscale(c));
        }
      }
      //}}}
      function setBgOpacity(opacity,force,now) //{{{
      {
        if (!awake && !force) return;
        if (options.bgFade && !now) {
          $img.animate({
            opacity: opacity
          },{
            queue: false,
            duration: options.fadeTime
          });
        } else {
          $img.css('opacity', opacity);
        }
      }
      //}}}
      function show() //{{{
      {
        $sel.show();

        if (options.shade) Shade.opacity(bgopacity);
          else setBgOpacity(bgopacity,true);

        awake = true;
      }
      //}}}
      function release() //{{{
      {
        disableHandles();
        $sel.hide();

        if (options.shade) Shade.opacity(1);
          else setBgOpacity(1);

        awake = false;
        options.onRelease.call(api);
      }
      //}}}
      function showHandles() //{{{
      {
        if (seehandles) {
          $hdl_holder.show();
        }
      }
      //}}}
      function enableHandles() //{{{
      {
        seehandles = true;
        if (options.allowResize) {
          $hdl_holder.show();
          return true;
        }
      }
      //}}}
      function disableHandles() //{{{
      {
        seehandles = false;
        $hdl_holder.hide();
      } 
      //}}}
      function animMode(v) //{{{
      {
        if (v) {
          animating = true;
          disableHandles();
        } else {
          animating = false;
          enableHandles();
        }
      } 
      //}}}
      function done() //{{{
      {
        animMode(false);
        refresh();
      } 
      //}}}
      // Insert draggable elements {{{
      // Insert border divs for outline

      if (options.dragEdges && $.isArray(options.createDragbars))
        createDragbars(options.createDragbars);

      if ($.isArray(options.createHandles))
        createHandles(options.createHandles);

      if (options.drawBorders && $.isArray(options.createBorders))
        createBorders(options.createBorders);

      //}}}

      // This is a hack for iOS5 to support drag/move touch functionality
      $(document).bind('touchstart.jcrop-ios',function(e) {
        if ($(e.currentTarget).hasClass('jcrop-tracker')) e.stopPropagation();
      });

      var $track = newTracker().mousedown(createDragger('move')).css({
        cursor: 'move',
        position: 'absolute',
        zIndex: 360
      });

      if (Touch.support) {
        $track.bind('touchstart.jcrop', Touch.createDragger('move'));
      }

      $img_holder.append($track);
      disableHandles();

      return {
        updateVisible: updateVisible,
        update: update,
        release: release,
        refresh: refresh,
        isAwake: function () {
          return awake;
        },
        setCursor: function (cursor) {
          $track.css('cursor', cursor);
        },
        enableHandles: enableHandles,
        enableOnly: function () {
          seehandles = true;
        },
        showHandles: showHandles,
        disableHandles: disableHandles,
        animMode: animMode,
        setBgOpacity: setBgOpacity,
        done: done
      };
    }());
    
    //}}}
    // Tracker Module {{{
    var Tracker = (function () {
      var onMove = function () {},
          onDone = function () {},
          trackDoc = options.trackDocument;

      function toFront(touch) //{{{
      {
        $trk.css({
          zIndex: 450
        });

        if (touch)
          $(document)
            .bind('touchmove.jcrop', trackTouchMove)
            .bind('touchend.jcrop', trackTouchEnd);

        else if (trackDoc)
          $(document)
            .bind('mousemove.jcrop',trackMove)
            .bind('mouseup.jcrop',trackUp);
      } 
      //}}}
      function toBack() //{{{
      {
        $trk.css({
          zIndex: 290
        });
        $(document).unbind('.jcrop');
      } 
      //}}}
      function trackMove(e) //{{{
      {
        onMove(mouseAbs(e));
        return false;
      } 
      //}}}
      function trackUp(e) //{{{
      {
        e.preventDefault();
        e.stopPropagation();

        if (btndown) {
          btndown = false;

          onDone(mouseAbs(e));

          if (Selection.isAwake()) {
            options.onSelect.call(api, unscale(Coords.getFixed()));
          }

          toBack();
          onMove = function () {};
          onDone = function () {};
        }

        return false;
      }
      //}}}
      function activateHandlers(move, done, touch) //{{{
      {
        btndown = true;
        onMove = move;
        onDone = done;
        toFront(touch);
        return false;
      }
      //}}}
      function trackTouchMove(e) //{{{
      {
        onMove(mouseAbs(Touch.cfilter(e)));
        return false;
      }
      //}}}
      function trackTouchEnd(e) //{{{
      {
        return trackUp(Touch.cfilter(e));
      }
      //}}}
      function setCursor(t) //{{{
      {
        $trk.css('cursor', t);
      }
      //}}}

      if (!trackDoc) {
        $trk.mousemove(trackMove).mouseup(trackUp).mouseout(trackUp);
      }

      $img.before($trk);
      return {
        activateHandlers: activateHandlers,
        setCursor: setCursor
      };
    }());
    //}}}
    // KeyManager Module {{{
    var KeyManager = (function () {
      var $keymgr = $('<input type="radio" />').css({
        position: 'fixed',
        left: '-120px',
        width: '12px'
      }).addClass('jcrop-keymgr'),

        $keywrap = $('<div />').css({
          position: 'absolute',
          overflow: 'hidden'
        }).append($keymgr);

      function watchKeys() //{{{
      {
        if (options.keySupport) {
          $keymgr.show();
          $keymgr.focus();
        }
      }
      //}}}
      function onBlur(e) //{{{
      {
        $keymgr.hide();
      }
      //}}}
      function doNudge(e, x, y) //{{{
      {
        if (options.allowMove) {
          Coords.moveOffset([x, y]);
          Selection.updateVisible(true);
        }
        e.preventDefault();
        e.stopPropagation();
      }
      //}}}
      function parseKey(e) //{{{
      {
        if (e.ctrlKey || e.metaKey) {
          return true;
        }
        shift_down = e.shiftKey ? true : false;
        var nudge = shift_down ? 10 : 1;

        switch (e.keyCode) {
        case 37:
          doNudge(e, -nudge, 0);
          break;
        case 39:
          doNudge(e, nudge, 0);
          break;
        case 38:
          doNudge(e, 0, -nudge);
          break;
        case 40:
          doNudge(e, 0, nudge);
          break;
        case 27:
          if (options.allowSelect) Selection.release();
          break;
        case 9:
          return true;
        }

        return false;
      }
      //}}}

      if (options.keySupport) {
        $keymgr.keydown(parseKey).blur(onBlur);
        if (ie6mode || !options.fixedSupport) {
          $keymgr.css({
            position: 'absolute',
            left: '-20px'
          });
          $keywrap.append($keymgr).insertBefore($img);
        } else {
          $keymgr.insertBefore($img);
        }
      }


      return {
        watchKeys: watchKeys
      };
    }());
    //}}}
    // }}}
    // API methods {{{
    function setClass(cname) //{{{
    {
      $div.removeClass().addClass(cssClass('holder')).addClass(cname);
    }
    //}}}
    function animateTo(a, callback) //{{{
    {
      var x1 = a[0] / xscale,
          y1 = a[1] / yscale,
          x2 = a[2] / xscale,
          y2 = a[3] / yscale;

      if (animating) {
        return;
      }

      var animto = Coords.flipCoords(x1, y1, x2, y2),
          c = Coords.getFixed(),
          initcr = [c.x, c.y, c.x2, c.y2],
          animat = initcr,
          interv = options.animationDelay,
          ix1 = animto[0] - initcr[0],
          iy1 = animto[1] - initcr[1],
          ix2 = animto[2] - initcr[2],
          iy2 = animto[3] - initcr[3],
          pcent = 0,
          velocity = options.swingSpeed;

      x1 = animat[0];
      y1 = animat[1];
      x2 = animat[2];
      y2 = animat[3];

      Selection.animMode(true);
      var anim_timer;

      function queueAnimator() {
        window.setTimeout(animator, interv);
      }
      var animator = (function () {
        return function () {
          pcent += (100 - pcent) / velocity;

          animat[0] = Math.round(x1 + ((pcent / 100) * ix1));
          animat[1] = Math.round(y1 + ((pcent / 100) * iy1));
          animat[2] = Math.round(x2 + ((pcent / 100) * ix2));
          animat[3] = Math.round(y2 + ((pcent / 100) * iy2));

          if (pcent >= 99.8) {
            pcent = 100;
          }
          if (pcent < 100) {
            setSelectRaw(animat);
            queueAnimator();
          } else {
            Selection.done();
            Selection.animMode(false);
            if (typeof(callback) === 'function') {
              callback.call(api);
            }
          }
        };
      }());
      queueAnimator();
    }
    //}}}
    function setSelect(rect) //{{{
    {
      setSelectRaw([rect[0] / xscale, rect[1] / yscale, rect[2] / xscale, rect[3] / yscale]);
      options.onSelect.call(api, unscale(Coords.getFixed()));
      Selection.enableHandles();
    }
    //}}}
    function setSelectRaw(l) //{{{
    {
      Coords.setPressed([l[0], l[1]]);
      Coords.setCurrent([l[2], l[3]]);
      Selection.update();
    }
    //}}}
    function tellSelect() //{{{
    {
      return unscale(Coords.getFixed());
    }
    //}}}
    function tellScaled() //{{{
    {
      return Coords.getFixed();
    }
    //}}}
    function setOptionsNew(opt) //{{{
    {
      setOptions(opt);
      interfaceUpdate();
    }
    //}}}
    function disableCrop() //{{{
    {
      options.disabled = true;
      Selection.disableHandles();
      Selection.setCursor('default');
      Tracker.setCursor('default');
    }
    //}}}
    function enableCrop() //{{{
    {
      options.disabled = false;
      interfaceUpdate();
    }
    //}}}
    function cancelCrop() //{{{
    {
      Selection.done();
      Tracker.activateHandlers(null, null);
    }
    //}}}
    function destroy() //{{{
    {
      $div.remove();
      $origimg.show();
      $origimg.css('visibility','visible');
      $(obj).removeData('Jcrop');
    }
    //}}}
    function setImage(src, callback) //{{{
    {
      Selection.release();
      disableCrop();
      var img = new Image();
      img.onload = function () {
        var iw = img.width;
        var ih = img.height;
        var bw = options.boxWidth;
        var bh = options.boxHeight;
        $img.width(iw).height(ih);
        $img.attr('src', src);
        $img2.attr('src', src);
        presize($img, bw, bh);
        boundx = $img.width();
        boundy = $img.height();
        $img2.width(boundx).height(boundy);
        $trk.width(boundx + (bound * 2)).height(boundy + (bound * 2));
        $div.width(boundx).height(boundy);
        Shade.resize(boundx,boundy);
        enableCrop();

        if (typeof(callback) === 'function') {
          callback.call(api);
        }
      };
      img.src = src;
    }
    //}}}
    function colorChangeMacro($obj,color,now) {
      var mycolor = color || options.bgColor;
      if (options.bgFade && supportsColorFade() && options.fadeTime && !now) {
        $obj.animate({
          backgroundColor: mycolor
        }, {
          queue: false,
          duration: options.fadeTime
        });
      } else {
        $obj.css('backgroundColor', mycolor);
      }
    }
    function interfaceUpdate(alt) //{{{
    // This method tweaks the interface based on options object.
    // Called when options are changed and at end of initialization.
    {
      if (options.allowResize) {
        if (alt) {
          Selection.enableOnly();
        } else {
          Selection.enableHandles();
        }
      } else {
        Selection.disableHandles();
      }

      Tracker.setCursor(options.allowSelect ? 'crosshair' : 'default');
      Selection.setCursor(options.allowMove ? 'move' : 'default');

      if (options.hasOwnProperty('trueSize')) {
        xscale = options.trueSize[0] / boundx;
        yscale = options.trueSize[1] / boundy;
      }

      if (options.hasOwnProperty('setSelect')) {
        setSelect(options.setSelect);
        Selection.done();
        delete(options.setSelect);
      }

      Shade.refresh();

      if (options.bgColor != bgcolor) {
        colorChangeMacro(
          options.shade? Shade.getShades(): $div,
          options.shade?
            (options.shadeColor || options.bgColor):
            options.bgColor
        );
        bgcolor = options.bgColor;
      }

      if (bgopacity != options.bgOpacity) {
        bgopacity = options.bgOpacity;
        if (options.shade) Shade.refresh();
          else Selection.setBgOpacity(bgopacity);
      }

      xlimit = options.maxSize[0] || 0;
      ylimit = options.maxSize[1] || 0;
      xmin = options.minSize[0] || 0;
      ymin = options.minSize[1] || 0;

      if (options.hasOwnProperty('outerImage')) {
        $img.attr('src', options.outerImage);
        delete(options.outerImage);
      }

      Selection.refresh();
    }
    //}}}
    //}}}

    if (Touch.support) $trk.bind('touchstart.jcrop', Touch.newSelection);

    $hdl_holder.hide();
    interfaceUpdate(true);

    var api = {
      setImage: setImage,
      animateTo: animateTo,
      setSelect: setSelect,
      setOptions: setOptionsNew,
      tellSelect: tellSelect,
      tellScaled: tellScaled,
      setClass: setClass,

      disable: disableCrop,
      enable: enableCrop,
      cancel: cancelCrop,
      release: Selection.release,
      destroy: destroy,

      focus: KeyManager.watchKeys,

      getBounds: function () {
        return [boundx * xscale, boundy * yscale];
      },
      getWidgetSize: function () {
        return [boundx, boundy];
      },
      getScaleFactor: function () {
        return [xscale, yscale];
      },
      getOptions: function() {
        // careful: internal values are returned
        return options;
      },

      ui: {
        holder: $div,
        selection: $sel
      }
    };

    if (is_msie) $div.bind('selectstart', function () { return false; });

    $origimg.data('Jcrop', api);
    return api;
  };
  $.fn.Jcrop = function (options, callback) //{{{
  {
    var api;
    // Iterate over each object, attach Jcrop
    this.each(function () {
      // If we've already attached to this object
      if ($(this).data('Jcrop')) {
        // The API can be requested this way (undocumented)
        if (options === 'api') return $(this).data('Jcrop');
        // Otherwise, we just reset the options...
        else $(this).data('Jcrop').setOptions(options);
      }
      // If we haven't been attached, preload and attach
      else {
        if (this.tagName == 'IMG')
          $.Jcrop.Loader(this,function(){
            $(this).css({display:'block',visibility:'hidden'});
            api = $.Jcrop(this, options);
            if ($.isFunction(callback)) callback.call(api);
          });
        else {
          $(this).css({display:'block',visibility:'hidden'});
          api = $.Jcrop(this, options);
          if ($.isFunction(callback)) callback.call(api);
        }
      }
    });

    // Return "this" so the object is chainable (jQuery-style)
    return this;
  };
  //}}}
  // $.Jcrop.Loader - basic image loader {{{

  $.Jcrop.Loader = function(imgobj,success,error){
    var $img = $(imgobj), img = $img[0];

    function completeCheck(){
      if (img.complete) {
        $img.unbind('.jcloader');
        if ($.isFunction(success)) success.call(img);
      }
      else window.setTimeout(completeCheck,50);
    }

    $img
      .bind('load.jcloader',completeCheck)
      .bind('error.jcloader',function(e){
        $img.unbind('.jcloader');
        if ($.isFunction(error)) error.call(img);
      });

    if (img.complete && $.isFunction(success)){
      $img.unbind('.jcloader');
      success.call(img);
    }
  };

  //}}}
  // Global Defaults {{{
  $.Jcrop.defaults = {

    // Basic Settings
    allowSelect: true,
    allowMove: true,
    allowResize: true,

    trackDocument: true,

    // Styling Options
    baseClass: 'jcrop',
    addClass: null,
    bgColor: 'black',
    bgOpacity: 0.6,
    bgFade: false,
    borderOpacity: 0.4,
    handleOpacity: 0.5,
    handleSize: null,

    aspectRatio: 0,
    keySupport: true,
    createHandles: ['n','s','e','w','nw','ne','se','sw'],
    createDragbars: ['n','s','e','w'],
    createBorders: ['n','s','e','w'],
    drawBorders: true,
    dragEdges: true,
    fixedSupport: true,
    touchSupport: null,

    shade: null,

    boxWidth: 0,
    boxHeight: 0,
    boundary: 2,
    fadeTime: 400,
    animationDelay: 20,
    swingSpeed: 3,

    minSelect: [0, 0],
    maxSize: [0, 0],
    minSize: [0, 0],

    // Callbacks / Event Handlers
    onChange: function () {},
    onSelect: function () {},
    onDblClick: function () {},
    onRelease: function () {}
  };

  // }}}
}(jQuery));
/*! jquery.caret 2015-02-01 */
!function(a,b){"function"==typeof define&&define.amd?define(["jquery"],function(c){return a.returnExportsGlobal=b(c)}):"object"==typeof exports?module.exports=b(require("jquery")):b(jQuery)}(this,function(a){"use strict";var b,c,d,e,f,g,h,i,j,k,l;k="caret",b=function(){function b(a){this.$inputor=a,this.domInputor=this.$inputor[0]}return b.prototype.setPos=function(){return this.domInputor},b.prototype.getIEPosition=function(){return this.getPosition()},b.prototype.getPosition=function(){var a,b;return b=this.getOffset(),a=this.$inputor.offset(),b.left-=a.left,b.top-=a.top,b},b.prototype.getOldIEPos=function(){var a,b;return b=h.selection.createRange(),a=h.body.createTextRange(),a.moveToElementText(this.domInputor),a.setEndPoint("EndToEnd",b),a.text.length},b.prototype.getPos=function(){var a,b,c;return(c=this.range())?(a=c.cloneRange(),a.selectNodeContents(this.domInputor),a.setEnd(c.endContainer,c.endOffset),b=a.toString().length,a.detach(),b):h.selection?this.getOldIEPos():void 0},b.prototype.getOldIEOffset=function(){var a,b;return a=h.selection.createRange().duplicate(),a.moveStart("character",-1),b=a.getBoundingClientRect(),{height:b.bottom-b.top,left:b.left,top:b.top}},b.prototype.getOffset=function(){var b,c,d,e,f;return j.getSelection&&(d=this.range())?(d.endOffset-1>0&&d.endContainer===!this.domInputor&&(b=d.cloneRange(),b.setStart(d.endContainer,d.endOffset-1),b.setEnd(d.endContainer,d.endOffset),e=b.getBoundingClientRect(),c={height:e.height,left:e.left+e.width,top:e.top},b.detach()),c&&0!==(null!=c?c.height:void 0)||(b=d.cloneRange(),f=a(h.createTextNode("|")),b.insertNode(f[0]),b.selectNode(f[0]),e=b.getBoundingClientRect(),c={height:e.height,left:e.left,top:e.top},f.remove(),b.detach())):h.selection&&(c=this.getOldIEOffset()),c&&(c.top+=a(j).scrollTop(),c.left+=a(j).scrollLeft()),c},b.prototype.range=function(){var a;if(j.getSelection)return a=j.getSelection(),a.rangeCount>0?a.getRangeAt(0):null},b}(),c=function(){function b(a){this.$inputor=a,this.domInputor=this.$inputor[0]}return b.prototype.getIEPos=function(){var a,b,c,d,e,f,g;return b=this.domInputor,f=h.selection.createRange(),e=0,f&&f.parentElement()===b&&(d=b.value.replace(/\r\n/g,"\n"),c=d.length,g=b.createTextRange(),g.moveToBookmark(f.getBookmark()),a=b.createTextRange(),a.collapse(!1),e=g.compareEndPoints("StartToEnd",a)>-1?c:-g.moveStart("character",-c)),e},b.prototype.getPos=function(){return h.selection?this.getIEPos():this.domInputor.selectionStart},b.prototype.setPos=function(a){var b,c;return b=this.domInputor,h.selection?(c=b.createTextRange(),c.move("character",a),c.select()):b.setSelectionRange&&b.setSelectionRange(a,a),b},b.prototype.getIEOffset=function(a){var b,c,d,e;return c=this.domInputor.createTextRange(),a||(a=this.getPos()),c.move("character",a),d=c.boundingLeft,e=c.boundingTop,b=c.boundingHeight,{left:d,top:e,height:b}},b.prototype.getOffset=function(b){var c,d,e;return c=this.$inputor,h.selection?(d=this.getIEOffset(b),d.top+=a(j).scrollTop()+c.scrollTop(),d.left+=a(j).scrollLeft()+c.scrollLeft(),d):(d=c.offset(),e=this.getPosition(b),d={left:d.left+e.left-c.scrollLeft(),top:d.top+e.top-c.scrollTop(),height:e.height})},b.prototype.getPosition=function(b){var c,e,f,g,h,i,j;return c=this.$inputor,g=function(b){return a("<div></div>").text(b).html().replace(/\r\n|\r|\n/g,"<br/>").replace(/\s/g,"&nbsp;")},void 0===b&&(b=this.getPos()),j=c.val().slice(0,b),f=c.val().slice(b),h="<span style='position: relative; display: inline;'>"+g(j)+"</span>",h+="<span id='caret' style='position: relative; display: inline;'>|</span>",h+="<span style='position: relative; display: inline;'>"+g(f)+"</span>",i=new d(c),e=i.create(h).rect()},b.prototype.getIEPosition=function(a){var b,c,d,e,f;return d=this.getIEOffset(a),c=this.$inputor.offset(),e=d.left-c.left,f=d.top-c.top,b=d.height,{left:e,top:f,height:b}},b}(),d=function(){function b(a){this.$inputor=a}return b.prototype.css_attr=["borderBottomWidth","borderLeftWidth","borderRightWidth","borderTopStyle","borderRightStyle","borderBottomStyle","borderLeftStyle","borderTopWidth","boxSizing","fontFamily","fontSize","fontWeight","height","letterSpacing","lineHeight","marginBottom","marginLeft","marginRight","marginTop","outlineWidth","overflow","overflowX","overflowY","paddingBottom","paddingLeft","paddingRight","paddingTop","textAlign","textOverflow","textTransform","wordBreak","wordWrap"],b.prototype.mirrorCss=function(){var b,c=this;return b={position:"absolute",left:-9999,top:0,zIndex:-2e4,whiteSpace:"pre-wrap"},"TEXTAREA"===this.$inputor.prop("tagName")&&this.css_attr.push("width"),a.each(this.css_attr,function(a,d){return b[d]=c.$inputor.css(d)}),b},b.prototype.create=function(b){return this.$mirror=a("<div></div>"),this.$mirror.css(this.mirrorCss()),this.$mirror.html(b),this.$inputor.after(this.$mirror),this},b.prototype.rect=function(){var a,b,c;return a=this.$mirror.find("#caret"),b=a.position(),c={left:b.left,top:b.top,height:a.height()},this.$mirror.remove(),c},b}(),e={contentEditable:function(a){return!(!a[0].contentEditable||"true"!==a[0].contentEditable)}},g={pos:function(a){return a||0===a?this.setPos(a):this.getPos()},position:function(a){return h.selection?this.getIEPosition(a):this.getPosition(a)},offset:function(a){var b;return b=this.getOffset(a)}},h=null,j=null,i=null,l=function(a){var b;return(b=null!=a?a.iframe:void 0)?(i=b,j=b.contentWindow,h=b.contentDocument||j.document):(i=void 0,j=window,h=document)},f=function(a){var b;h=a[0].ownerDocument,j=h.defaultView||h.parentWindow;try{return i=j.frameElement}catch(c){b=c}},a.fn.caret=function(d,f,h){var i;return g[d]?(a.isPlainObject(f)?(l(f),f=void 0):l(h),i=e.contentEditable(this)?new b(this):new c(this),g[d].apply(i,[f])):a.error("Method "+d+" does not exist on jQuery.caret")},a.fn.caret.EditableCaret=b,a.fn.caret.InputCaret=c,a.fn.caret.Utils=e,a.fn.caret.apis=g});
/// <reference path="../jquery.js" />
/// <reference path="../main.js" />
var MPDialog = {
    New: function (content)
    {
        var dialog = {};
        dialog.onClose = null;
        dialog.Content = $(content);
        var buttonClose = dialog.Content.find(".dialog-close");
        dialog.ButtonOK = dialog.Content.find(".ok");
        $("body").append(dialog.Content);
        MPCenter(dialog.Content.find(".dialog-box"), $(window));
        dialog.Close = function ()
        {
            dialog.Content.remove();
            if (dialog.onClose != null)
            {
                dialog.onClose();
            }
        }
        buttonClose.click(function ()
        {
            dialog.Close();
        })
        dialog.HideClose = function ()
        {
            buttonClose.hide();
        }
        return dialog;
    }
}
/// <reference path="Dialog.js" />
MPTitleDialog = {
    New: function (content, titleText)
    {
        var dialog = MPDialog.New(content);
        var title = dialog.Content.find(".dialog-title .text");
        dialog.Title = function (t)
        {
            if (arguments.length==0)
            {
                return title;
            }
            else
            {
                title.text(t);
            }
        }
        return dialog;
    }
}
/// <reference path="../include.js" />

MPMessageBox = {
    Icons: {
        Error: "error",
        OK: "ok",
        Warn: "warn"
    },
    New: function (icon, message)
    {
        var title;
        switch (icon)
        {
            case this.Icons.Warn:
                title = "警告";
                break;
            case this.Icons.Error:
                title = "错误";
                break;
            case this.Icons.OK:
                title = "成功";
                break;
            default:;
        }
        var box = MPTitleDialog.New('<div class="dialog-mask"><div class="dialog-box"><div class="dialog-title"><span class="text">对话框</span><div class="dialog-close"></div></div><div class="dialog-content"><div class="messagebox"><div class="icon"></div><div class="message">这里是一条信息</div></div></div><div class="dialog-btns"><div class="ok">确认</div></div></div></div>', title);
        box.onOK = null;
        var m = box.Content.find(".message");
        m.text(message);
        box.ButtonOK.click(function ()
        {
            box.Close();
            if(box.onOK)
            {
                box.onOK();
            }
        })
        var bicon = box.Content.find(".icon");
        bicon.addClass(icon);
        return box;
    }
}
/// <reference path="MessageBox.js" />
MPSignUpDialog = {};
MPSignUpDialog.New = function ()
{
    var dialog = MPDialog.New('<div class="dialog-mask"><div class="dialog-box"><div class="dialog-title"><span class="text">注册</span><div class="dialog-close"></div></div><div class="dialog-content"><div class="signup-dialog"><input class="email" type="text" placeholder="邮箱"><div class="signup">注册</div><div class="more"><span>已经有账号了</span> <span class="login">登录</span></div></div></div></div></div>')
    var buttonsignup = dialog.Content.find(".signup");//注册按钮
    var buttonlogin = dialog.Content.find(".login");//登录按钮
    buttonsignup.click(function ()
    {
        var e = dialog.Content.find(".email").val();//注册邮箱
        if (MPCheckEmail(e) == false)
            return false;
        $.post(host + "/ajax/signup-email", { email: MPHtmlEncode(e) }, function (data)
        {
            if (data.code == 0)
            {
                dialog.Close();
                MPSignUpSuccessDialog.New(e);
            }
            else
            {
                MPMessageBox.New(MPMessageBox.Icons.Warn, data.msg);
            }

        }, "json");
    })
    buttonlogin.click(function ()
    {
        dialog.Close();
        MPLoginDialog.New();
    })
    return dialog;
}
/// <reference path="../include.js" />

MPSignUpSuccessDialog = {};
MPSignUpSuccessDialog.New = function (email)
{
    var strVar = "";
    strVar += "<div class=\"dialog-mask\">";
    strVar += "    <div class=\"dialog-box\">";
    strVar += "        <div class=\"dialog-title\">";
    strVar += "            <span class=\"text\">注册成功<\/span>";
    strVar += "            <div class=\"dialog-close\"><\/div>";
    strVar += "        <\/div>";
    strVar += "        <div class=\"dialog-content\">";
    strVar += "            <div class=\"signup-success-dialog\">";
    strVar += "                <p>验证邮件已经发送到<span class=\"email\">{0}<\/span>，请查收邮件激活帐号完成注册。<\/p>";
    strVar += "                <p>如果没有收到邮件，请耐心等待，或者<span class=\"resend\">重新发送<\/span><\/p>";
    strVar += "                <p class=\"return\">&lt;&lt; 返回登录页<\/p>";
    strVar += "            <\/div>";
    strVar += "        <\/div>";
    strVar += "    <\/div>";
    strVar += "<\/div>";
    strVar += "";

    var dialog = MPDialog.New(strVar.Format(email));

    var buttonResend = dialog.Content.find(".resend");//重新发送
    var buttonReturn = dialog.Content.find(".return");//登录按钮

    buttonResend.click(function ()
    {
        $.post(host + "/ajax/signup-email", { email: MPHtmlEncode(email) }, function (data)
        {
            if (data.code == 0)
            {
                MPMessageBox.New(MPMessageBox.Icons.OK, "邮件发送成功,请查收");
            }
        }, "json");
    })
    buttonReturn.click(function ()
    {
        dialog.Close();
        MPLoginDialog.New();
    })
    return dialog;
}
/// <reference path="MessageBox.js" />
MPLoginDialog = {};
MPLoginDialog.New = function () {
    var dialog = MPDialog.New('<div class="dialog-mask"><div class="dialog-box"><div class="dialog-title"><span class="text">登录</span><div class="dialog-close"></div></div><div class="dialog-content"><div class="login-dialog"><input class="email" type="text" placeholder="注册邮箱"> <input class="password" type="password" placeholder="密码"><div class="reset">忘记了密码？</div><div class="login">登录</div><div class="more"><span>还没有注册？</span> <span class="signup">立即注册</span></div></div></div></div></div>');
    dialog.onSuccess = null;

    var ButtonForget = dialog.Content.find(".reset").click(function ()//忘记密码
    {
        dialog.Close();
        MPResetPasswordDialog.New();
    })//忘记密码

    var ButtonLogin = dialog.Content.find(".login").click(function () {
        var e = dialog.Content.find(".email").val();
        var p = dialog.Content.find(".password").val();
        if (MPCheckEmail(e) == false)
            return;
        if (MPCheckPassword(p) == false)
            return;
        $.post(host + "/ajax/login", { email: MPHtmlEncode(e), password: MPHtmlEncode(p) },
         function (data) {
             if (data.code == 0) {
                 $.cookie("login", data.cookie, { expires: 30 });
                 dialog.Close();
                 if (dialog.onSuccess != null) {
                     dialog.onSuccess();
                 }
             }
             else {
                 MPMessageBox.New(MPMessageBox.Icons.Error, data.msg);
             }
         }, "json");
    })//登录按钮

    var Buttonsignup = dialog.Content.find(".signup").click(function () {
        dialog.Close();
        MPSignUpDialog.New();
    })//注册按钮
    return dialog;
}
/// <reference path="../include.js" />

MPResetPasswordDialog = {
    New: function () {
        var dialog = MPDialog.New('<div class="dialog-mask"><div class="dialog-box"><div class="dialog-title"><span class="text">找回密码</span><div class="dialog-close"></div></div><div class="dialog-content"><div class="reset-password-dialog"><span>注册邮箱:</span> <input type="text" placeholder="请输入注册邮箱"></div></div><div class="dialog-btns"><div class="ok">确认</div></div></div></div>');
        var inputemail = dialog.Content.find(".reset-password-dialog input");
        dialog.ButtonOK.click(function () {
            if (!MPCheckEmail(inputemail.val())) {
                return;
            }
            $.post(host + "/ajax/reset-password", { email: MPHtmlEncode(inputemail.val()) }, function (data) {
                if (data.code == 0) {
                    dialog.Close();
                    MPResetPasswordSuccessDialog.New(inputemail.val());
                }
                else {
                    MPMessageBox.New(MPMessageBox.Icons.Error, data.msg);
                }
            }, "json")
        })
        return dialog;
    }
}
/// <reference path="../include.js" />

MPResetPasswordSuccessDialog = {};
MPResetPasswordSuccessDialog.New = function (email) {
    var strVar = "";
    strVar += "<div class=\"dialog-mask\">";
    strVar += "    <div class=\"dialog-box\">";
    strVar += "        <div class=\"dialog-title\">";
    strVar += "            <span class=\"text\">邮件已发送...<\/span>";
    strVar += "            <div class=\"dialog-close\"><\/div>";
    strVar += "        <\/div>";
    strVar += "        <div class=\"dialog-content\">";
    strVar += "            <div class=\"reset-password-success-dialog\">";
    strVar += "                <p>重置密码的邮件已经发送到<span class=\"email\">{0}<\/span>，请查收邮件并重新设置密码。<\/p>";
    strVar += "                <p>如果没有收到邮件，请耐心等待，或者<span class=\"resend\">重新发送<\/span><\/p>";
    strVar += "                <p class=\"return\">&lt;&lt; 返回登录页<\/p>";
    strVar += "            <\/div>";
    strVar += "        <\/div>";
    strVar += "    <\/div>";
    strVar += "<\/div>";
    strVar += "";

    var dialog = MPDialog.New(strVar.Format(email));

    var buttonResend = dialog.Content.find(".resend");//重新发送
    var buttonReturn = dialog.Content.find(".return");//登录按钮

    buttonResend.click(function () {
        $.post(host + "/ajax/reset-password", { email: MPHtmlEncode(email) }, function (data) {
            if (data.code == 0) {
                MPMessageBox.New(MPMessageBox.Icons.OK, "邮件发送成功,请查收");
            }
        }, "json");
    })
    buttonReturn.click(function () {
        dialog.Close();
        MPLoginDialog.New();
    })
    return dialog;
}
/// <reference path="../include.js" />

MPCreatePackageDialog = {
    New: function (isEdit, packageid, packagetitle, description)
    {
        packagetitle = packagetitle ? packagetitle : "";
        description = description ? description : "";
        var strVar = "";
        strVar += "<div class=\"dialog-mask\">";
        strVar += "        <div class=\"dialog-box\">";
        strVar += "            <div class=\"dialog-title\">";
        strVar += "                <span class=\"text\"><\/span>";
        strVar += "                <div class=\"dialog-close\"><\/div>";
        strVar += "            <\/div>";
        strVar += "            <div class=\"dialog-content\">";
        strVar += "                <div class=\"package-dialog\">";
        strVar += "                    <div class=\"title\">标题<\/div>";
        if (isEdit == true)
        {
            strVar += "                    <input type=\"text\" class=\"package-title\" value={0} />".Format(packagetitle);
        }
        else
        {
            strVar += "                <input type=\"text\" class=\"package-title\"/>";
        }

        strVar += "                    <div class=\"title\">描述<\/div>";
        if (isEdit == true)
        {
            strVar += "                    <textarea class=\"package-description\" placeholder=\"请输入图包描述\">{0}<\/textarea>".Format(description);
        }
        else
        {
            strVar += "                    <textarea class=\"package-description\" placeholder=\"请输入图包描述\"><\/textarea>";
        }

        strVar += "                <\/div>";
        strVar += "            <\/div>";
        strVar += "            <div class=\"dialog-btns\">";
        if (isEdit == true)
        {
            strVar += "                <div class=\"delete\">删除<\/div>";
        }
        strVar += "                <div class=\"ok\">确认<\/div>";
        strVar += "                <div class=\"cancel\">取消<\/div>";
        strVar += "            <\/div>";
        strVar += "        <\/div>";
        strVar += "<\/div>";
        var title = "";
        if (isEdit == true)
        {
            title = "编辑图包";
        }
        else
        {
            title = "创建图包";
        }

        var dialog = MPTitleDialog.New(strVar, title);
        dialog.packageid = null;
        dialog.onDelete = null;
        var inputtitle = dialog.Content.find(".package-title");
        var inputdescription = dialog.Content.find(".package-description");
        if (isEdit == true)
        {
            dialog.packageid = packageid;
            dialog.ButtonOK.click(function ()
            {
                $.post(host + "/ajax/edit-package", { id: packageid, title: MPHtmlEncode(inputtitle.val()), description: MPHtmlEncode(inputdescription.val()) }, function (data)
                {
                    if (data.code == 0)
                    {
                        var box = MPMessageBox.New(MPMessageBox.Icons.OK, "编辑成功");
                        box.onOK = function ()
                        {
                            dialog.Close();
                        }
                    }
                    else
                    {
                        MPMessageBox.New(MPMessageBox.Icons.Error, data.msg);
                    }
                }, "json");
            })
        }
        else
        {
            dialog.ButtonOK.click(function ()
            {
                $.post(host + "/ajax/create-package", { title: MPHtmlEncode(inputtitle.val()), description: MPHtmlEncode(inputdescription.val()) }, function (data)
                {
                    if (data.code == 0)
                    {
                        dialog.packageid = data.packageid;
                        //dialog.Close();
                        location.href = "/package/" + dialog.packageid;
                    }
                    else
                    {
                        MPMessageBox.New(MPMessageBox.Icons.Error, data.msg);
                    }
                }, "json");
            })
        }

        dialog.Content.find(".cancel").click(function ()
        {
            dialog.Close();
        })

        //删除图包的处理函数
        dialog.Content.find(".delete").click(function ()
        {
            var box = MPMessageBox.New(MPMessageBox.Icons.Warn, "确定要删除图包?一旦删除后就无法还原哦>_<");
            box.onOK = function ()
            {
                $.post(host + "/ajax/delete-package", { id: dialog.packageid }, function (data)
                {
                    if (data.code == 0)
                    {
                        if (dialog.onDelete)
                        {
                            dialog.onDelete();
                        }
                        location.href = "/user/" + MPData.user.id;
                        //dialog.Close();
                    }
                    else
                    {
                        MPMessageBox.New(MPMessageBox.Icons.Error, data.msg);
                    }
                }, "json")
            }
        })
        return dialog;
    }
}
/// <reference path="TitleDialog.js" />
/// <reference path="../jquery.js" />
/// <reference path="MessageBox.js" />
/// <reference path="Dialog.js" />
MPCreateImageDialog =
    {
        //New: function (imageSrc, title, description, isEdit, source, packageID, packageTitle)
        //{
        New: function (options)
        {
            var strVar = "";
            strVar += "<div class=\"dialog-mask\">";
            strVar += "    <div class=\"dialog-box\">";
            strVar += "        <div class=\"dialog-title\">";
            strVar += "            <span class=\"text\">{0}<\/span>".Format(options.title);
            strVar += "            <div class=\"dialog-close\">";
            strVar += "            <\/div>";
            strVar += "        <\/div>";
            strVar += "        <div class=\"dialog-content\">";
            strVar += "            <div class=\"create-image-dialog\">";
            strVar += "                <div class=\"message\">";
            strVar += "                </div>";
            strVar += "                <div class=\"preview\">";
            strVar += "                    <img src=\"{0}\" width=\"180\">".Format(options.previewUrl);
            strVar += "                <\/div>";
            strVar += "                <div class=\"right\">";
            strVar += "                    <h3>图包</h3>";
            strVar += "                    <div class=\"package-list\">";
            strVar += "                        <div class=\"current\">";
            strVar += "                            <div class=\"name\">&nbsp;<\/div>";
            strVar += "                            <div class=\"arrow\"><\/div>";
            strVar += "                        <\/div>";
            strVar += "                        <div class=\"drop-list\">";
            strVar += "                            <div class=\"selections\"><\/div>";
            strVar += "                            <div class=\"filtrate\">";
            strVar += "                                <div class=\"create\"><\/div>";
            strVar += "                            <\/div>";
            strVar += "                            <div class=\"filter\">";
            strVar += "                                <input type=\"text\" placeholder=\"快速筛选/创建图包\">";
            strVar += "                            <\/div>";
            strVar += "                        <\/div>";
            strVar += "                    <\/div>";
            strVar += "                     <div class=\"seperator\"></div>";
            strVar += "                     <h3 >描述</h3>";
            strVar += "                    <div class=\"description\">";
            strVar += "                        <textarea>{0}<\/textarea>".Format(options.description);
            strVar += "                        <div class=\"tip\">";
            strVar += "                            给图片添加 #标签#，可以更好地整理图片哦~";
            strVar += "                        <\/div>";
            strVar += "                    <\/div>";
            if (options.canEdit == true)
            {
                strVar += "                     <div class=\"seperator\"></div>";
                strVar += "                     <h3>来自</h3>";
                strVar += "                     <input class=\"source\"  type=\"text\" value=\"{0}\">".Format(options.source);
            }
            strVar += "                <\/div>";
            strVar += "            <\/div>";
            strVar += "        <\/div>";
            strVar += "        <div class=\"dialog-btns\">";
            if (options.canEdit == true)
            {
                strVar += "            <div class=\"delete\">删除<\/div>";
            }
            strVar += "            <div class=\"ok\">确认<\/div>";
            strVar += "            <div class=\"cancel\">取消<\/div>";
            strVar += "        <\/div>";
            strVar += "    <\/div>";
            strVar += "<\/div>";

            var dialog = MPTitleDialog.New(strVar);
            var description = dialog.Content.find(".description textarea");//描述
            var bCurrent = dialog.Content.find(".package-list");//当前图标按钮
            var dropList = dialog.Content.find(".drop-list");//点击后弹出列表
            var select = dialog.Content.find(".selections");//图包列表
            var filterate = dialog.Content.find(".filtrate");//筛选栏输入后显示的内容
            var filterSearch = dialog.Content.find(".filter input");//筛选栏
            var source = dialog.Content.find(".source");//来源处
            dialog.onOK = null;
            dialog.onDelete = null;
            dialog.description = "";
            dialog.packageId = 0;
            dialog.source = "";

            //获取图包
            $.post(host + "/ajax/query-packages", {}, function (data)
            {
                if (data.code == 0)
                {
                    var packagelist = data.packages;
                    var length = packagelist.length;
                    for (var i = 0; i < length; i++)
                    {
                        var option = $("<div/>").addClass("package");
                        option.text(packagelist[i].title);
                        option.attr("data-package-id", packagelist[i].id);
                        select.append(option);

                        //选中默认图包
                        if(packagelist[i].id==options.defaultPackageId)
                        {
                                bCurrent.attr("data-package-id",packagelist[i].id);
                                bCurrent.find(".name").text(packagelist[i].title);
                        }
                    }
                    //if (options.canEdit == true)
                    //{
                    //    bCurrent.attr("data-package-id", packageID);
                    //    bCurrent.find(".name").text(packageTitle);
                    //}
                    //else if (packagelist.length != 0)
                    //{
                    //    bCurrent.attr("data-package-id", packagelist[0].id);
                    //    bCurrent.find(".name").text(packagelist[0].title);
                    //}
                }
            }, "json");

            //检查是否重复
            if (options.check != null)
            {
                $.post(host + "/ajax/check", options.check, function (data)
                {
                    if(data.code==0 && data.packages.length!=0)
                    {
                        var str = "<span>图包</span>";
                        for (var i = 0,n=data.packages.length; i < n; i++)
                        {
                            str += "<a href=\"{0}\">{1}</a>".Format(host+"/package/"+data.packages[i].id,data.packages[i].title);
                        }
                        str += "<span>里已经有这张图片了</span>";
                        var message = dialog.Content.find(".message");
                        message.html(str);
                        message.show();
                    }
                }, "json");
            }

            var dropListHide = function ()
            {
                filterate.hide();
                select.show();
                filterSearch.val("");
            }

            MPPopUpMenu(bCurrent, dropList, dropListHide);

            dropList.on("click", ".package", function (e)
            {
                var a = $(this);
                bCurrent.attr("data-package-id", a.attr("data-package-id"));
                bCurrent.find(".name").text(a.text());
                dropList.hide();
                e.stopPropagation();
            });

            filterate.find(".create").click(function ()
            {
                var a = $(this);
                if (a.text == null)
                {
                    return;
                }
                $.post(host + "/ajax/create-package", { title: MPHtmlEncode(filterSearch.val()) }, function (data)
                {
                    if (data.code == 0)
                    {
                        bCurrent.attr("data-package-id", data.packageid);
                        bCurrent.find(".name").text(filterSearch.val());

                        var option = $("<div/>").addClass("package");
                        option.text(filterSearch.val());
                        option.attr("data-package-id", data.packageid);
                        select.append(option);//将新的选项添加到select中
                        dropListHide();
                        dropList.hide();
                    }
                    else
                    {
                        MPMessageBox.New("warn", data.msg);
                    }
                }, "json");
            })

            filterSearch.keyup(function ()
            {
                var val = $.trim(filterSearch.val());
                if (val == "")
                {
                    select.show();
                    filterate.hide();
                    return;
                }
                select.hide();
                filterate.show();

                //清空快速搜素列表
                filterate.find(".package").remove();
                //获取当前图包列表
                var packageList = select.find(".package");
                if (packageList.length == 0)
                {
                    filterate.find(".create").text("新建图包---" + val);
                }
                else
                {
                    packageList.each(function ()
                    {
                        if ($(this).text().indexOf(val) != -1)
                        {
                            //找到了之后就复制一个放入候选列表
                            filterate.append($(this).clone());
                        }
                        else
                        {
                            filterate.find(".create").text("新建图包---" + val);
                        }
                    });
                }
            });

            dialog.ButtonOK.click(function ()
            {
                var packageid=bCurrent.attr("data-package-id");   
                if (packageid == "" || packageid == undefined)
                {
                    MPMessageBox.New(MPMessageBox.Icons.Warn, "请选择一个图包,如果没有图包请新建一个图包!");
                    return;
                }
                dialog.description = description.val();
                dialog.packageId = packageid;
                localStorage["default-package-id"] = packageid;

                if (options.canEdit == true)
                {
                    dialog.source = source.val();
                }
                if (dialog.onOK != null)
                {
                    dialog.onOK();
                }
                else
                {
                    dialog.Close();
                }
            })

            dialog.Content.find(".cancel").click(function ()
            {
                dialog.Close();
            })//取消按钮

            dialog.Content.find(".delete").click(function ()
            {
                if (dialog.onDelete != null)
                {
                    dialog.onDelete();
                }
                //获取对话框的信息,包括图包id,描述,图片来源,这个功能可以写成一个函数
                //然后就是触发onDelete
            })

            return dialog;
        }
    }
MPUploadDialog = {
    New: function (title)
    {
        title = title ? title : "";
        var dialog = MPTitleDialog.New('<div class="dialog-mask"><div class="dialog-box"><div class="dialog-title"><span class="text">上传图片</span><div class="dialog-close"></div></div><div class="dialog-content"><div class="upload-dialog"><div class="select"><div class="img"></div><div class="button">选择图片</div><div class="more">请选择上传的图片，支持jpg和png图片</div><input type="file" class="upload"></div><div class="process"><div class="img"></div><div class="percentage">正在上传(0%)...</div></div></div></div></div></div>', title);
        dialog.Content.find(".upload").change(function ()//上传按钮
        {
            UpLoad(this);
        })
        dialog.filename = "";
        dialog.onSuccess = null;
        function UpLoad(a)
        {
            var fileList = a.files;
            var file = fileList[0];
            dialog.filename = file.name;
            var chunk = 0;
            var chunks = Math.ceil(file.size / 128 / 1024);
            UpBegin(function (name)
            {
                SendChunk(0, chunks, file, name, function (file)
                {
                    if (dialog.onSuccess != null)
                    {
                        dialog.onSuccess(file);
                    }
                    dialog.Close();
                });
            });

            var select = dialog.Content.find(".select");
            var process = dialog.Content.find(".process");

            function UpBegin(callback)
            {
                var tfilename = $.post(host + "/ajax/upload-begin", {}, function (data)
                {
                    if (data.code == 0)
                    {
                        select.hide();
                        dialog.HideClose();
                        process.show();
                        callback(data.name);
                    }
                }, "json");
            }

            function SendChunk(chunk, chunks, file, tfilename, callback)
            {
                var xhr = new XMLHttpRequest();
                xhr.open("post", host + "/ajax/upload-chunk?chunks=" + chunks + "&chunk=" + chunk + "&name=" + tfilename);
                var begin = chunk * 1024 * 128;
                var end = begin + 1024 * 128;
                xhr.send(file.slice(begin, end));
                xhr.onload = function ()
                {
                    var d = JSON.parse(xhr.responseText);
                    if (d.code == 0)
                    {
                        if (chunk == chunks - 1)
                        {
                            process.find(".percentage").text("正在上传(100%)...");
                            callback(d.file);
                            return;
                        }
                        else
                        {
                            chunk++;
                            process.find(".percentage").text("正在上传(" + Math.ceil(chunk / chunks * 100) + "%)...");
                            SendChunk(chunk, chunks, file, tfilename, callback);
                        }
                    }
                    else
                    {
                        var box = MPMessageBox.New("error", "文件上传失败>_< 请重试");
                        box.HideClose();
                        box.onOK = function () {
                            box.Close();
                            dialog.Close();
                        }
                        return;
                    }
                }
            }
        }
        return dialog;
    }
}
/// <reference path="../include.js" />

MPAvtCutDialog = {
    //创建对话框,参数file为file对象{hash,width,height}
    New: function (file) {
        var dialog = MPTitleDialog.New(MPTemplate.Dialog.AvtCutDialog(file), "裁剪头像");
        var origin = dialog.Content.find(".main");
        var preview = dialog.Content.find("#preview");
        dialog.offset_x = null;
        dialog.offset_y = null;
        dialog.size = null;
        dialog.onSuccess = null;
        //预览图处理函数

        var jcrop_api,
        boundx,
        boundy,

        // Grab some information about the preview pane
        $preview = $('.previews');

        //console.log('init',[xsize,ysize]);
        origin.Jcrop({
            onChange: updatePreview,
            onSelect: updatePreview,
            aspectRatio: 1
        }, function () {
            // Use the API to get the real image size
            var bounds = this.getBounds();
            boundx = bounds[0];
            boundy = bounds[1];
            // Store the API in the jcrop_api variable
            jcrop_api = this;

        });

        function updatePreview(c) {
            if (parseInt(c.w) > 0) {
                $(".previews").children("div").each(function () {

                    var $pcontainer = $(this),
                    $pimg = $(this).find("img"),
                    xsize = $pcontainer.width();

                    var rx = xsize / c.w;

                    $pimg.css({
                        width: Math.round(rx * boundx) + 'px',
                        height: Math.round(rx * boundy) + 'px',
                        marginLeft: '-' + Math.round(rx * c.x) + 'px',
                        marginTop: '-' + Math.round(rx * c.y) + 'px'
                    });
                })
            }
        };


        dialog.ButtonOK.click(function () {
            var ratio = file.width / $(".jcrop-holder").width();
            var c = jcrop_api.tellScaled();
            dialog.offset_x = Math.round(c.x * ratio);
            dialog.offset_y = Math.round(c.y * ratio);
            //获取比例
            dialog.size = Math.round(c.w * ratio);
            if (dialog.onSuccess) {
                dialog.onSuccess();
            }
            dialog.Close();
        })

        dialog.Content.find(".cancel").click(function () {
            dialog.Close();
        })
        return dialog;
    }
}
/// <reference path="../main.js" />
MPFormat.User = {};
MPFormat.User.New = function (user)
{
    var res = {};
    res.Home = function ()
    {
        return "/user/" + user.id;
    }
    res.BigAvt = function ()
    {
        if (user.default_head == true)
            return imageHost + "/avt/0_big";
        else
            return imageHost + "/avt/" + user.id + "_big";
    }
    res.Avt = function ()
    {
        if (user.default_head == true)
            return imageHost + "/avt/0";
        else
            return imageHost + "/avt/" + user.id;
    }
    res.Follower = function ()
    {
        return "/user/" + user.id + "/follower";
    }
    res.Following = function ()
    {
        return "/user/" + user.id + "/following";
    }
    res.Name = function ()
    {
        return user.name;
    }
    res.ID = function ()
    {
        return user.id;
    }
    return res;
}
/// <reference path="../include.js" />

MPObject.User = {};

MPObject.User.Avt = function (user)
{
    if (user.default_head == true)
        return imageHost + "/avt/0";
    else
        return imageHost + "/avt/" + user.id;
}

MPObject.User.BigAvt = function (user)
{
    if (user.default_head == true)
        return imageHost + "/avt/0_big";
    else
        return imageHost + "/avt/" + user.id + "_big";
}

MPObject.User.ID = function (user)
{
    return user.id;
}

MPObject.User.Name = function (user)
{
    return user.name;
}

//用户操作
MPObject.User.Actions = {};

//关注用户
MPObject.User.Actions.Follow = function (userid, callback)
{
    if (!MPCheckLogin())
    {
        return;
    }
    $.post(host + "/ajax/follow-user", { user_id: userid }, function (data)
    {
        if (data.code == 0)
        {
            if (callback)
            {
                callback();
            }
        }
    }, "json");
}

//取消关注用户
MPObject.User.Actions.UnFollow = function (userid, callback)
{
    if (!MPCheckLogin())
    {
        return;
    }
    var box = MPMessageBox.New(MPMessageBox.Icons.Warn, "确认要取消关注吗>_<")
    box.onOK = function ()
    {
        $.post(host + "/ajax/unfollow-user", { user_id: userid }, function (data)
        {
            if (data.code == 0)
            {
                if (callback)
                {
                    callback();
                }
            }
        }, "json");
    }
}

//用户页面
MPObject.User.Pages = {};

//用户所关注的人的页面
MPObject.User.Pages.Following = function (user)
{
    return "/user/" + user.id + "/following";
}

//关注的图包的页面
MPObject.User.Pages.FollowingPackage = function (user)
{
    return "/user/" + user.id + "/following/package";
}
//用户的粉丝的页面
MPObject.User.Pages.Follower = function (user)
{
    return "/user/" + user.id + "/follower";
}

//用户图片的页面
MPObject.User.Pages.Image = function (user)
{
    return "/user/" + user.id + "/image";
}

//用户图包的页面
MPObject.User.Pages.Package = function (user)
{
    return "/user/" + user.id;
}

//用户个人主页
MPObject.User.Pages.Home = function (user)
{
    return "/user/" + user.id;
}

//用户赞的首页面
MPObject.User.Pages.Praise = function (user)
{
    return "/user/" + user.id + "/praise";
}
//用户赞的图包
MPObject.User.Pages.PraisePackage = function (user)
{
    return "/user/" + user.id + "/praise/package";
}
/// <reference path="../include.js" />

MPObject.Image = {};

MPObject.Image._info = function (image, width, shape)
{
    var res = {};
    shape = shape ? shape : "";
    switch (shape)
    {
        case "fw":
            {
                res.url = imageHost + "/" + image.file.hash + "_fw" + width;
                res.width = width;
                res.height = Math.ceil(width * image.file.height / image.file.width);
            }
            break;
        case "sq":
            {
                res.url = imageHost + "/" + image.file.hash + "_sq" + width
                res.width = width;
                res.height = width;
            }
            break;
        default:
            {
                res.url = imageHost + "/" + image.file.hash;
                res.width = image.file.width;
                res.height = image.file.height;
            }
            break;
    }
    res.url += ".jpg";
    return res;
}

MPObject.Image.sq236 = function (image)
{
    return MPObject.Image._info(image, 236, "sq");
}

MPObject.Image.fw78 = function (image)
{
    return MPObject.Image._info(image, 78, "fw");
}

MPObject.Image.fw236 = function (image)
{
    return MPObject.Image._info(image, 236, "fw");
}

MPObject.Image.fw658 = function (image)
{
    return MPObject.Image._info(image, 658, "fw");
}


MPObject.Image.sq75 = function (image)
{
    return MPObject.Image._info(image, 75, "sq");
}

MPObject.Image.fw236 = function (image)
{
    return MPObject.Image._info(image, 236, "fw");
}

MPObject.Image.Origin = function (image)
{
    return MPObject.Image._info(image);
}

MPObject.Image.Resave = function (imageID, imageHash, description)
{
    if (!MPCheckLogin())
    {
        return;
    }
    var url = imageHost + "/" + imageHash + "_fw236.jpg";
    //var dialog = MPCreateImageDialog.New(url, "转存", description, false, "");
    var defaultPackageId = localStorage["default-package-id"];
    var dialog = MPCreateImageDialog.New({
        previewUrl: url,
        title: "转存",
        description: description,
        check: { image_id: imageID },
        defaultPackageId:defaultPackageId
    });
    dialog.onOK = function ()
    {
        $.post(host + "/ajax/resave", { image_id: imageID, package_id: dialog.packageId, description: dialog.description }, function (data)
        {
            if (data.code == 0)
            {
                var box = MPMessageBox.New(MPMessageBox.Icons.OK, "图片转存成功");
                box.onOK = function ()
                {
                    dialog.Close();
                    box.Close();
                }
            }
            else
            {
                MPMessageBox.New(MPMessageBox.Icons.Error, data.msg);
            }
        }, "json");
    }
}

MPObject.Image.Edit = function (imageID, imageHash, description, source, packageID, packageTitle, callback)
{
    if (!MPCheckLogin())
    {
        return;
    }
    var url = imageHost + "/" + imageHash + "_fw236.jpg";
    //var dialog = MPCreateImageDialog.New(url, "编辑图片", description, true, source,packageID,packageTitle);
    var dialog = MPCreateImageDialog.New({
        previewUrl: url,
        title: "编辑图片",
        canEdit: true,
        source: source,
        descripiton: description,
        defaultPackageId: packageID
    }); dialog.onOK = function ()
    {
        $.post(host + "/ajax/edit-image", { id: imageID, package_id: dialog.packageId, description: dialog.description, source: dialog.source }, function (data)
        {
            if (data.code == 0)
            {
                var box = MPMessageBox.New(MPMessageBox.Icons.OK, "图片编辑成功");
                box.onOK = function ()
                {
                    dialog.Close();
                    box.Close();
                }
            }
            else
            {
                MPMessageBox.New(MPMessageBox.Icons.Error, data.msg);
            }
        }, "json");
    }

    dialog.onDelete = function ()
    {
        MPObject.Image.Delete(imageID, callback);
    }
}

MPObject.Image.Delete = function (imageID, callback)
{
    if (!MPCheckLogin())
    {
        return;
    }
    var box = MPMessageBox.New(MPMessageBox.Icons.Warn, "图片删除后无法恢复哦!")
    box.onOK = function ()
    {
        $.post(host + "/ajax/delete-image", { id: imageID }, function (data)
        {
            if (data.code == 0)
            {
                if (callback)
                {
                    callback();
                }
                location.reload();
            }
            else
            {
                MPMessageBox.New(MPMessageBox.Icons.Error, data.msg);
            }
        }, "json");
    }
}

MPObject.Image.Praise = function (imageID, callback)
{
    if (!MPCheckLogin())
    {
        return;
    }
    $.post(host + "/ajax/praise-image", { image_id: imageID }, function (data)
    {
        if (callback)
        {
            callback();
        }
    }, "json");
}

MPObject.Image.UnPraise = function (imageID, callback)
{
    if (!MPCheckLogin())
    {
        return;
    }
    $.post(host + "/ajax/unpraise-image", { image_id: imageID }, function (data)
    {
        if (callback)
        {
            callback();
        }
    }, "json");
}

MPObject.Image.CreateImage = function ()
{
    var dialog = MPUploadDialog.New("上传图片");
    dialog.onSuccess = function (file)
    {
        //var c = MPCreateImageDialog.New(imageHost + "/" + file.hash + "_fw236", "上传图片", dialog.filename);
        var c = MPCreateImageDialog.New({
            previewUrl: imageHost + "/" + file.hash + "_fw236.jpg",
            title: "上传图片",
            description: dialog.filename,
            check: {hash:file.hash}
        });
        c.onOK = function ()
        {
            $.post(host + "/ajax/create-image", { package_id: c.packageId, file_hash: file.hash, description: MPHtmlEncode(c.description) }, function (msg)
            {
                if (msg.code == 0)
                {
                    MPMessageBox.New(MPMessageBox.Icons.OK, "上传图片成功");
                    c.Close();
                }
                else
                {
                    MPMessageBox.New(MPMessageBox.Icons.Error, msg.msg);
                }
            }, "json");
        }
    }
}
/// <reference path="../include.js" />

MPObject.Package = {};

//关注图包
MPObject.Package.Follow = function (packageID, callback)
{
    if (!MPCheckLogin())
        return;
    $.post(host + "/ajax/follow-package", { package_id: packageID }, function (data)
    {
        if (data.code == 0)
        {
            if (callback)
                callback();
        }
    }, "json");
}

//取消关注图包
MPObject.Package.UnFollow = function (packageID, callback)
{
    if (!MPCheckLogin())
        return;
    //var box = MPMessageBox.New(MPMessageBox.Icons.Warn, "确认要取消该图包的关注吗>_<");
    //box.onOK = function ()
    //{
    $.post(host + "/ajax/unfollow-package", { package_id: packageID }, function (data)
    {
        if (data.code == 0)
        {
            if (callback)
                callback();
        }
    }, "json");
    //}
}

//赞图包(实用性待商榷)
MPObject.Package.Praise = function (packageID, callback)
{
    if (!MPCheckLogin())
        return;
    $.post(host + "/ajax/praise-package", { package_id: packageID }, function (data)
    {
        if (data.code == 0)
        {
            if (callback)
                callback();
        }
    }, "json");
}

//取消赞赞图包(实用性待商榷)
MPObject.Package.Praise = function (packageID, callback)
{
    if (!MPCheckLogin())
        return;
    $.post(host + "/ajax/unpraise-package", { package_id: packageID }, function (data)
    {
        if (data.code == 0)
        {
            if (callback)
                callback();
        }
    }, "json");
}

//编辑图包
MPObject.Package.Edit = function (packageID, title, description, callback)
{
    if (!MPCheckLogin())
        return;
    var dialog = MPCreatePackageDialog.New(true, packageID, title, description);
    dialog.onDelete = function ()
    {
        if (callback)
            callback();
        else
            location.reload();
    }
}
/// <reference path="../include.js" />

MPTemplate.Widget = {};
MPTemplate.Page = {};
MPTemplate.Dialog = {};
/// <reference path="../../include.js" />

MPTemplate.Page.Search = function (data, options)
{
    var strVar = "";
    strVar += "<div class=\"page-search\">";
    strVar += "    <div class=\"bar\">";
    strVar += "        <a class=\"item {1}\" href=\"/search/{0}\">图片<\/a>".Format(encodeURIComponent(MPData.keyword), MPData.sub1 == "" ? "on" : "");
    strVar += "        <a class=\"item {1}\" href=\"/search/package/{0}\">图包<\/a>".Format(encodeURIComponent(MPData.keyword),MPData.sub1 == "package" ? "on" : "");
    strVar += "        <a class=\"item {1}\" href=\"/search/user/{0}\">用户<\/a>".Format(encodeURIComponent(MPData.keyword),MPData.sub1 == "user" ? "on" : "");
    strVar += "    <\/div>";
    strVar += "    <div class=\"waterfall\"><\/div>";
    strVar += "<\/div>";

    return strVar;
}
/// <reference path="../../include.js" />

MPTemplate.Page.User = function (data, options)
{
    var user = MPObject.User;
    var strVar = "";
    strVar += "<div class=\"page-user\">";
    strVar += "        <div class=\"inner\">";
    strVar += "            <div class=\"info\">";
    strVar += "                <img class=\"avt\" src=\"{0}\" />".Format(user.BigAvt(data));
    strVar += "                <div class=\"right\">";
    strVar += "                    <h1 class=\"username\">{0}<\/h1>".Format(user.Name(data));
    if (data.description != "")
    {
        strVar += "                    <h2 class=\"description\">{0}</h2>".Format(data.description);
    }
    strVar += "                <\/div>";
    strVar += "                <div class=\"clear\"><\/div>";
    strVar += "                <div class=\"actions\">";
    if (data.id != MPData.user.id)
    {
        strVar += MPTemplate.Widget.User.Buttons.Follow(data);
    }
    strVar += "                </div>";
    strVar += "            <\/div>";
    strVar += "            <div class=\"tabs\">";
    strVar += "                <a class=\"tab {1}\" href=\"{2}\">{0}图包<\/a>".Format(data.packages_count, MPData.sub1 == "" ? " on" : "", user.Pages.Home(data));
    strVar += "                <a class=\"tab {1}\" href=\"{2}\">{0}图片<\/a>".Format(data.images_count, MPData.sub1 == "image" ? " on" : "", user.Pages.Image(data));
    strVar += "                <a class=\"tab {1}\" href=\"{2}\">{0}赞<\/a>".Format(data.praise_count, MPData.sub1 == "praise" ? " on" : "", user.Pages.Praise(data));
    strVar += "                <a class=\"tab {2}\" href=\"{1}\">{0}关注<\/a>".Format(data.follows_count, user.Pages.Following(data),MPData.sub1 == "following" ? " on" : "");
    strVar += "                <a class=\"tab {2}\" href=\"{1}\">{0}粉丝<\/a>".Format(data.followers_count, user.Pages.Follower(data),MPData.sub1 == "follower" ? " on" : "");

    strVar += "            <\/div>";
    strVar += "        <\/div>";
    if (MPData.sub1 == "following")
    {
        strVar += "        <div class=\"outer\">";
        strVar += "            <div class=\"list\">";
        strVar += "                <a class=\"item{1}\" href=\"{0}\">用户<\/a>".Format(user.Pages.Following(data), MPData.sub2 == "" ? " on" : "");
        strVar += "                <a class=\"item{1}\" href=\"{0}\">图包<\/a>".Format(user.Pages.FollowingPackage(data), MPData.sub2 == "package" ? " on" : "");
        strVar += "            <\/div>";
        strVar += "        <\/div>        ";
    }
    //else if (MPData.sub1 == "praise")
    //{
    //    strVar += "        <div class=\"outer\">";
    //    strVar += "            <div class=\"list\">";
    //    strVar += "                <a class=\"item{1}\" href=\"{0}\">图片<\/a>".Format(user.Pages.Praise(data), MPData.sub2 == "" ? " on" : "");
    //    strVar += "                <a class=\"item{1}\" href=\"{0}\">图包<\/a>".Format(user.Pages.PraisePackage(data), MPData.sub2 == "package" ? " on" : "");
    //    strVar += "            <\/div>";
    //    strVar += "        <\/div>        ";
    //}
    strVar += "<div class=\"waterfall\"></div>"
    strVar += "    <\/div>";

    return strVar;
}
/// <reference path="../../include.js" />

MPTemplate.Page.Setting = function (data, options)
{
    var strVar = "";
    strVar += "<div class=\"page-setting\">";
    strVar += "    <ul class=\"left\">";
    strVar += "        <li><a href=\"{0}/setting\">基本信息<\/a><\/li>".Format(host);
    strVar += "        <li><a href=\"{0}/setting/password\">更改密码<\/a><\/li>".Format(host);
    strVar += "    <\/ul>";
    strVar += "    <div class=\"right\">";
    if (MPData.sub1 == "")
    {
        strVar += "        <div class=\"content\">";
        strVar += "            <div class=\"line\">";
        strVar += "                <h2>基本信息<\/h2>";
        strVar += "            <\/div>";
        strVar += "            <div class=\"line\">";
        strVar += "                <h3>邮箱地址<\/h3>";
        strVar += "                <div>";
        strVar += "                    <input type=\"text\" readonly=\"readonly\" value=\"{0}\" />".Format(MPData.basic_email);
        strVar += "                <\/div>";
        strVar += "            <\/div>";
        strVar += "            <div class=\"line\">";
        strVar += "                <h3>昵称<\/h3>";
        strVar += "                <div>";
        strVar += "                    <input type=\"text\" value=\"{0}\" id=\"username\" />".Format(MPData.user.name);
        strVar += "                <\/div>";
        strVar += "            <\/div>";
        strVar += "            <div class=\"line\">";
        strVar += "                <h3>自我介绍<\/h3>";
        strVar += "                <div>";
        strVar += "                    <textarea id=\"description\">{0}<\/textarea>".Format(MPData.basic_description);
        strVar += "                <\/div>";
        strVar += "            <\/div>";
        strVar += "            <div class=\"line\">";
        strVar += "                <h3>头像<\/h3>";
        strVar += "                <div>";
        strVar += "                    <div class=\"avt\">";
        strVar += "                         <img src=\"{0}\" />".Format(MPObject.User.BigAvt(MPData.user));
        strVar += "                    </div>";
        strVar += "                    <div class=\"upload\">上传头像<\/div>";
        strVar += "                    <div class=\"clear\"><\/div>";
        strVar += "                <\/div>";
        strVar += "            <\/div>";
        strVar += "            <div class=\"actions\">";
        strVar += "                <div class=\"submit\">确定<\/div>";
        strVar += "            <\/div>";
        strVar += "            <div class=\"clear\"><\/div>";
        strVar += "        <\/div>";
    }
    else if (MPData.sub1 == "password")
    {
        strVar += "        <div class=\"content\">";
        strVar += "            <div class=\"line\">";
        strVar += "                <h2>修改密码<\/h2>";
        strVar += "            <\/div>";
        strVar += "            <div class=\"line\">";
        strVar += "                <h3>原密码<\/h3>";
        strVar += "                <div>";
        strVar += "                    <input type=\"password\" id=\"oldpassword\" value=\"\" />";
        strVar += "                <\/div>";
        strVar += "            <\/div>";
        strVar += "            <div class=\"line\">";
        strVar += "                <h3>新密码<\/h3>";
        strVar += "                <div>";
        strVar += "                    <input type=\"password\" id=\"newpassword1\" />";
        strVar += "                <\/div>";
        strVar += "            <\/div>";
        strVar += "            <div class=\"line\">";
        strVar += "                <h3>确认新密码<\/h3>";
        strVar += "                <div>";
        strVar += "                    <input type=\"password\" id=\"newpassword\" />";
        strVar += "                <\/div>";
        strVar += "            <\/div>";
        strVar += "            <div class=\"actions\">";
        strVar += "                <div class=\"submit\">确定<\/div>";
        strVar += "            <\/div>";
        strVar += "            <div class=\"clear\"><\/div>";
        strVar += "        <\/div>";
    }
    strVar += "    <\/div>";
    strVar += "<\/div>";
    
    return strVar;
}
/// <reference path="../../include.js" />

MPTemplate.Page.Package = function (data, options)
{
    var strVar = "";
    strVar += "<div class=\"page-package\">";
    strVar += "<div class=\"inner\">";
    strVar += "    <div class=\"bar1\">";
    strVar += "        <h1 class=\"title\">{0}<\/h1>".Format(data.title);
    strVar += "        <div class=\"action-btns\">";    
    if (data.user.id != MPData.user.id)
    {
        strVar += MPTemplate.Widget.Package.Buttons.Follow(data, { "class": "btn" });
    }
    else
    {
        strVar += MPTemplate.Widget.Package.Buttons.Edit(data, { "class": "btn" });
    }
    strVar += "        <\/div>";
    strVar += "        <div class=\"clear\"><\/div>";
    strVar += "        <div class=\"description\">{0}<\/div>".Format(data.description);
    strVar += "    <\/div>";

    var User = MPObject.User;
    strVar += "    <div class=\"bar2\">";
    strVar += "        <div class=\"user\">";
    strVar += "             <a href=\"{0}\"><img src=\"{1}\" /></a>".Format(User.Pages.Home(data.user), User.Avt(data.user));
    strVar += "            <a class=\"user-name\" href=\"{0}\">{1}<\/a>".Format(User.Pages.Home(data.user),User.Name(data.user));
    strVar += "        <\/div>";
    strVar += "        <div class=\"tabs\">";
    strVar += "            <div class=\"tab count\">{0}图片<\/div>".Format(data.imageCount);
    strVar += "            <div class=\"tab follower\">{0}人关注<\/div>".Format(data.followerCount);
    strVar += "        <\/div>";
    strVar += "    <\/div>";
    strVar += "    <\/div>";
    strVar += "     <div class=\"waterfall\"></div>";
    strVar += "<\/div>";

    return strVar;
}
/// <reference path="../../include.js" />

MPTemplate.Page.From = function (data, options)
{
    var strVar = "";
    strVar += "<div class=\"page-from\">";
    strVar += "    <h1>来自{0}的图片<\/h1>".Format(MPData.host);
    strVar += "    <div class=\"waterfall\"><\/div>";
    strVar += "<\/div>";
    return strVar;
}
/// <reference path="../../include.js" />

MPTemplate.Widget.Package = function (data, options)
{
    options = options ? options : MPTemplate.Widget.Package.Options.BigButton;
    var strVar = "";
    strVar += "<div class=\"widget-package\">";
    strVar += "    <a class=\"previews\" href=\"{0}\">".Format(host + "/package/" + data.id);
    if (data.thumbs.length != 0)
    {
        strVar += "        <div class=\"thumbs\">";
        var n = data.thumbs.length;
        for (var i = 0; i < n; i++)
        {
            if (i == 0)
            {
                strVar += " <img class=\"cover\" src=\"{0}\" />".Format(MPObject.Image.sq236(data.thumbs[i]).url);
            }
            else
            {
                strVar += " <img class=\"thumb\" src=\"{0}\" />".Format(MPObject.Image.sq75(data.thumbs[i]).url);
            }
        }
        strVar += "        <\/div>";
    }
    strVar += "        <div class=\"borders\">";
    strVar += "            <div class=\"cover-border\"><\/div>";
    strVar += "            <div class=\"thumb-border\"><\/div>";
    strVar += "            <div class=\"thumb-border\"><\/div>";
    strVar += "            <div class=\"thumb-border\"><\/div>";
    strVar += "        <\/div>";
    if (data.imageCount != 0)
    {
        strVar += "        <div class=\"count\">{0}<\/div>".Format(data.imageCount);
    }
    strVar += "        <div class=\"over{0}\">".Format(data.thumbs.length == 0 ? " empty-package" : "");
    strVar += "            <h3>{0}<\/h3>".Format(data.title);
    strVar += "            <h4>{0}<\/h4>".Format(data.description);
    strVar += "        <\/div>";
    strVar += "    <\/a>";

    var fuser = MPFormat.User.New(data.user);
    strVar += "    <div class=\"actions\">";
    if (data.user.id == MPData.user.id)
    {
        strVar += "<div class=\"btn2 edit\" data-id=\"{0}\" data-title=\"{1}\" data-description=\"{2}\"><\/div>".Format(data.id,data.title,data.description);
    }
    else
    {
        switch (options)
        {
            case MPTemplate.Widget.Package.Options.SmallButton:
                strVar += "        <a class=\"avt\" href=\"{0}\">".Format(fuser.Home());
                strVar += "            <img src=\"{0}\" />".Format(fuser.Avt());
                strVar += "        <\/a>";
                strVar += "        <a class=\"username\" href=\"{0}\" >{1}<\/a>".Format(fuser.Home(), fuser.Name);
                if (data.followed === true)
                {
                    strVar += "        <div class=\"btn unfollow\" data-id=\"{0}\"><\/div>".Format(data.id);
                }
                else
                {
                    strVar += "        <div class=\"btn follow\" data-id=\"{0}\"><\/div>".Format(data.id);
                }
                break;
            case MPTemplate.Widget.Package.Options.BigButton:
                if (data.followed == true)
                {
                    strVar += "        <div class=\"btn2 unfollow\" data-id=\"{0}\"><\/div>".Format(data.id);
                }
                else
                {
                    strVar += "        <div class=\"btn2 follow\" data-id=\"{0}\"><\/div>".Format(data.id);
                }
                break;
        }
    }
    strVar += "<\/div>";

    return strVar;
}

MPTemplate.Widget.Package.Options = {
    SmallButton: 0,
    BigButton: 1
};

MPTemplate.Widget.Package.Buttons = {};

MPTemplate.Widget.Package.Buttons.Edit = function (data, options)
{
    if (options == null)
        options = {};
    var str = "<div class=\"package-edit {0}\" data-id=\"{1}\" data-title=\"{2}\" data-description=\"{4}\">编辑</div>".Format(options.class, data.id, data.title, data.description);
    return str;
}

MPTemplate.Widget.Package.Buttons.Follow = function (data, options)
{
    if (options == null)
        options = {};
    var cls = data.followed == true ? "package-unfollow" : "package-follow";
    var title = data.followed == true ? "取消关注" : "关注";
    var str = "<div class=\"{0} {1}\" data-id=\"{2}\" title=\"{3}\"></div>".Format(cls, options.class, data.id, title);
    return str;
}

MPTemplate.Widget.Package.Buttons.Praise = function (data, options)
{
    if (options == null)
        options = {};
    var cls = data.praised == true ? "package-unpraise" : "package-praise";
    var title = data.praised == true ? "取消赞" : "赞";
    var str = "<div class=\"{0} {1}\" data-id=\"{2}\" title=\"{3}\"></div>".Format(cls, options.class, data.id, title);
    return str;
}
/// <reference path="../../include.js" />

MPTemplate.Widget.Image = function (data, options)
{
    options = options ? options : MPTemplate.Widget.Image.Options.ShowUser;
    var fuser = MPFormat.User.New(data.user);
    var strVar = "";
    strVar += "<div class=\"widget-image\" data-id=\"{0}\">".Format(data.id);
    strVar += "    <div class=\"actions\">";
    strVar += "         <div class=\"left\">";
    strVar += "             <div class=\"resave\" title=\"转存到我的图包\" data-id=\"{0}\" data-hash=\"{1}\" data-description=\"{2}\">转存<\/div>".Format(data.id, data.file.hash, data.description);
    strVar += "         <\/div>";
    if (data.user.id == MPData.user.id)
    {
        strVar += "<div class=\"right\">";
        strVar += "    <div class=\"edit\" title=\"编辑\" data-id=\"{0}\" data-hash=\"{1}\" data-description=\"{2}\" data-packageid=\"{3}\" data-source=\"{4}\" data-packagetitle=\"{5}\" >编辑<\/div>".Format(data.id, data.file.hash, data.description, data.package.id, data.source, data.package.title);
        strVar += "<\/div>";
    }
    else
    {
        strVar += "<div class=\"right\">";
        var cls, title;
        if (data.praised == true)
        {
            cls = "unpraise";
            title = "取消赞";
        }
        else
        {
            cls = "praise";
            title = "赞";
        }
        strVar += "    <div class=\"{0}\" title=\"{1}\" data-id=\"{2}\" ><em></em><\/div>".Format(cls,title,data.id);
        strVar += "<\/div>";
    }
    strVar += "    <\/div>";
    strVar += "    <a class=\"img\" href=\"{0}\">".Format("/image/" + data.id);
    var img = MPObject.Image.fw236(data);
    strVar += "        <img src=\"{0}\" width=\"236\" height=\"{1}\" />".Format(img.url,img.height);
    strVar += "        <div class=\"cover\"><\/div>";
    strVar += "    <\/a>";
    strVar += "    <div class=\"description\">{0}<\/div>".FormatNoEncode(MPWidget.Image.Description(data.description));
    if (data.resave_count != 0 || data.praise_count != 0)
    {
        strVar += "    <div class=\"count\">";
        if (data.resave_count != 0)
        {
            strVar += "         <span title=\"{0}人转存了这张图片\">".Format(data.resave_count);
            strVar += "             <em class=\"resave\"></em>";
            strVar += "             <span>{0}</span>".Format(data.resave_count);
            strVar += "         </span>";
        }
        if (data.praise_count != 0)
        {
            strVar += "         <span title=\"{0}人赞过这张图片\">".Format(data.praise_count);
            strVar += "             <em class=\"praise\"></em>";
            strVar += "             <span>{0}</span>".Format(data.praise_count);
            strVar += "         </span>";
        }
        strVar += "    </div>";
    }
    strVar += "    <div class=\"info\">";
    if (options == MPTemplate.Widget.Image.Options.ShowUser)
    {
        strVar += "        <a class=\"avt\" href=\"{0}\">".Format(fuser.Home());
        strVar += "            <img src=\"{0}\" />".Format(fuser.Avt());
        strVar += "        <\/a>";
        strVar += "        <div class=\"text\">";
        strVar += "            <div class=\"line\"><a class=\"user-name\" href=\"{0}\">{1}<\/a><span>收集到<\/span><\/div>".Format(fuser.Home(), fuser.Name());
        strVar += "            <div class=\"line\"><a class=\"package-title\" href=\"{0}\">{1}<\/a><\/div>".Format("/package/" + data.package.id, data.package.title);
        strVar += "        <\/div>";
    }
    else if (options == MPTemplate.Widget.Image.Options.ShowSource)
    {
        strVar += "<a class=\"source\" href=\"/from/{0}\">{0}<\/a>".Format(data.host);
    }
    strVar += "    <\/div>";
    strVar += "<\/div>";

    return strVar;
}

MPTemplate.Widget.Image.Options = {
    ShowUser: 0,
    ShowSource: 1
};
/// <reference path="../../include.js" />

//此处data为comment类型的数据
MPTemplate.Widget.Comment = function (data,option) {
    var strVar = "";
    strVar += "<div class=\"comment\">";
    strVar += "<a class=\"avt\" href=\"{0}\">".Format(MPObject.User.Pages.Home(data.user));
    strVar += " <img src=\"{0}\" />".Format(MPObject.User.Avt(data.user));
    strVar += "<\/a>";
    strVar += "<a class=\"name\">{0}<\/a>".Format(MPObject.User.Name(data.user));
    strVar += "<div class=\"text\">{0}<\/div>".FormatNoEncode(mentionConvert(data.text, data.mentions))
    strVar += "<\/div>";
    return strVar;
}

function mentionConvert(text, mentions) {
    var str = "";
    var begin = 0;
    var end = 0;
    for (var i = 0; i < mentions.length; i++) {
        end = mentions[i].pos;
        str += text.substring(begin, end);
        begin = end++;
        end = end + mentions[i].len;
        str += "<a href=\"{0}\">".Format("/user/" + mentions[i].user_id);
        str = str + text.substring(begin, end) + "</a>";
        begin = end++;
    }
    if (end < text.length) {
        end = text.length;
        str += text.substring(begin, end);
    }
    return str;
}
/// <reference path="../../include.js" />

MPTemplate.Widget.Frame = function ()
{
    var strVar = "";
    strVar += "<div class=\"widget-frame\">";
    strVar += "    <div class=\"header\">";
    strVar += "        <div class=\"wrapper\">";
    strVar += "            <div class=\"menu-bar\">";
    strVar += "                <div class=\"left\">";
    strVar += "                    <div class=\"nav home-nav\">";
    strVar += "                        <a class=\"nav-link\" href=\"{0}\">主页<\/a>".Format(host);
    strVar += "                    <\/div>";
    strVar += "                    <div class=\"nav search\"><\/div>";
    strVar += "                <\/div>";
    strVar += "                <div class=\"right\">";
    if (MPData.user.id == 0)
    {
        strVar += "<div id=\"login\">登录</div>";
        strVar += "<div id=\"signup\">注册</div>";
    }
    else
    {
        var User = MPObject.User;
        //消息提示
        strVar += "<div class=\"nav notice-nav\">";        
        strVar += "    <div class=\"nav-link\" title=\"通知\">";
        strVar += "         <em class=\"count\"></em>";
        strVar += "    <\/div>";       
        strVar += "    <div class=\"hide-menu\">";
        strVar += "         <div class=\"triangle\"></div>";
        strVar += "         <ul>";
        strVar += "             <li id=\"message\" data-max=\"0\">消息</li>";
        strVar += "             <li id=\"activity\" data-max=\"0\">动态</li>";
        strVar += "         </ul>";
        strVar += "         <div class=\"clear\"></div>";
        strVar += "         <div class=\"content \">";
        strVar += "         </div>";
        strVar += "    </div>";
        strVar += "<\/div>";
        //用户按钮
        strVar += "<div class=\"nav add-nav\">";
        strVar += "    <div class=\"nav-link\" title=\"添加\">";
        strVar += "    <\/div>";
        strVar += "    <div class=\"hide-menu\"><\/div>";
        strVar += "<\/div>";
        strVar += "<div class=\"nav user-nav\">";
        strVar += "    <a class=\"nav-link\" href=\"{0}\">".Format(User.Pages.Home(MPData.user));
        strVar += "        <img class=\"avt\" src=\"{0}\" />".Format(User.Avt(MPData.user));
        strVar += "        <div class=\"arrow\"><\/div>";
        strVar += "    <\/a>";
        strVar += "    <div class=\"hide-menu\">";
        strVar += "        <a class=\"item\" href=\"{0}\">我的主页<\/a>".Format(User.Pages.Home(MPData.user));
        strVar += "        <div class=\"seperator\"><\/div>";
        strVar += "        <a class=\"item\" href=\"{0}\">我的关注<\/a>".Format(User.Pages.Following(MPData.user));
        strVar += "        <a class=\"item\" href=\"{0}\">我的粉丝<\/a>".Format(User.Pages.Follower(MPData.user));
        strVar += "        <div class=\"seperator\"><\/div>";
        strVar += "        <a class=\"item\" href=\"/setting\">设置<\/a>";
        strVar += "        <div class=\"item\" id=\"logout\">退出<\/div>";
        strVar += "    <\/div>";
        strVar += "<\/div>";
    }
    strVar += "                <\/div>";
    strVar += "            <\/div>";
    strVar += "        <\/div>";
    strVar += "    <\/div>";
    strVar += "    <div class=\"wrapper\">";
    strVar += "        <div class=\"body\"><\/div>";
    strVar += "    <\/div>";
    strVar += "    <div class=\"float-tools\">";
    strVar += "        <em class=\"top\" title=\"回到顶部\"><\/em>";
    strVar += "    <\/div>";
    strVar += "<\/div>";

    return strVar;
}
/// <reference path="../../include.js" />
MPTemplate.Widget.ImageView = function (data, options)
{
    var fuser = MPFormat.User.New(data.user);
    var strVar = "";
    strVar += "<div class=\"image-view\">";
    strVar += "    <div class=\"main\">";
    strVar += "        <div class=\"image-piece piece\">";
    strVar += "            <div class=\"tool-bar\">";
    strVar += "                <div class=\"resave btn\" data-id=\"{0}\" data-hash=\"{1}\" data-description=\"{2}\">转存<\/div>".Format(data.id, data.file.hash, data.description.replace("\"",""));
    if (MPData.user.id == data.user.id)
    {
        strVar += "                <div class=\"edit btn\" data-id=\"{0}\" data-hash=\"{1}\" data-descripition=\"{2}\" data-source=\"{3}\" data-packageid=\"{4}\" data-packagetitle=\"{5}\">编辑<\/div>".Format(data.id, data.file.hash, data.description, data.source, data.package.id,data.package.title);
        strVar += "                <div class=\"delete btn\" data-id=\"{0}\" data-hash=\"{1}\">删除<\/div>".Format(data.id, data.file.hash);
    }
    else
    {
        strVar += "<div class=\"{0} btn\" data-id=\"{1}\"><em></em></div>".Format(data.praised == true ? "image-unpraise" : "image-praise",data.id);
    }
    strVar += "         <div class=\"big btn\" title=\"查看大图\" data-id=\"{0}\"><em></em></div>".Format(data.id);
    strVar += "            <\/div>";
    strVar += "            <div class=\"image\">";
    strVar += "                <img src=\"{0}\" alt=\"{1}\" />".Format(MPObject.Image.fw658(data).url, data.description.substring(0, 20).replace('"', ''));
    strVar += "            <\/div>";
    if (data.host != "")
    {
        strVar += "            <div class=\"bar-bottom\">";
        strVar += "                <div class=\"source\"><span>来自</span><a href=\"{0}\" target=\"_blank\">{1}</a></div>".Format(data.source, data.host);
        strVar += "                <div class=\"clear\"><\/div>";
        strVar += "            <\/div>";
    }

    strVar += "        <\/div>";

    strVar += "          <div class=\"info-piece piece\">";
    strVar += "                <div class=\"info\">";
    strVar += "                    <a class=\"avt\" href=\"{0}\">".Format(fuser.Home());
    strVar += "                        <img src=\"{0}\" />".Format(fuser.Avt());
    strVar += "                    <\/a>";
    strVar += "                    <div class=\"info-main\">";
    strVar += "                        <a class=\"name\" href=\"{1}\">{0}<\/a>".Format(fuser.Name(), fuser.Home());
    strVar += "                    <\/div>";
    strVar += "                    <div class=\"sub\">";
    strVar += "                        收集于 {0}".Format(data.time);
    strVar += "                    <\/div>";
    strVar += "                <\/div>";
    if (data.description != "")
    {
        strVar += "                <div class=\"description\">{0}<\/div>".Format(data.description);
    }
    strVar += "                <div class=\"comments\">";
    var n = data.comments.length;
    for (var i = 0; i < n; i++)
    {
        strVar += MPTemplate.Widget.Comment(data.comments[i]);
    }
    if (MPCheckLogin(false) == true)
    {
        var User = MPObject.User;
        strVar += "                <div class=\"add-comment\">";
        strVar += "                     <img class=\"avt\" src=\"{0}\" />".Format(User.Avt(MPData.user));
        strVar += "                    <div class=\"new-comment\">";
        strVar += "                        <textarea placeholder=\"请在这里输入评论内容\" ><\/textarea>";
        strVar += "                    <\/div>";
        strVar += "                    <div class=\"submit\">添加评论<\/div>";
        strVar += "                <\/div>";
        strVar += "                <div class=\"clear\"><\/div>";
    }
    strVar += "            <\/div>";
    strVar += "        <\/div>";
    strVar += "    <\/div>";
    strVar += "    <div class=\"side\">";
    strVar += "        <div class=\"package-piece piece\">";
    strVar += "            <div class=\"info\">";
    strVar += "                <img class=\"avt\" src=\"{0}\" />".Format(fuser.Avt());
    strVar += "                <a class=\"username\" href=\"{1}\">{0}<\/a>".Format(fuser.Name(), "/user/" + fuser.ID());
    strVar += "                <a class=\"title\" href=\"{1}\">{0}<\/a>".Format(data.package.title, "/package/" + data.package.id);
    strVar += "            <\/div>";
    strVar += "            <div class=\"images\">";
    strVar += "                <div class=\"image-waterfall\">";
    strVar += "                <\/div>";
    strVar += "            <\/div>";
    strVar += "        <\/div>";
    strVar += "        <div class=\"ad-piece piece\">";
    strVar += "        <\/div>";
    strVar += "         <div class=\"from-piece piece\">"
    strVar += "             <a href=\"/from/{0}\">".Format(data.host);
    strVar += "                     <div class=\"text\">更多来自</div>";
    strVar += "                     <div class=\"host\"></div>";
    strVar += "                     <div class=\"thumbs\">";
    strVar += "                     </div>";
    strVar += "                     <div class=\"clear\"></div>";
    strVar += "             </a>";
    strVar += "         </div>";
    strVar += "    <\/div>";
    strVar += "    <div class=\"bottom\"><\/div>";
    strVar += "<\/div>";

    return strVar;
}
/// <reference path="../../include.js" />
MPTemplate.Widget.Link = function (data,options)
{
    var type;
    if (data.indexOf("http://") == 0)
        type = { type: "link", text: "网页链接" };
    else if (data.indexOf("magnet:?xt=urn:btih:") == 0)
        type = { type: "magnet", text: "磁力链" };
    var strVar = "";
    strVar += "<a class=\"widget-link\" href=\"{0}\">".Format(data);
    strVar += "    <div class=\"icon {0}\"><\/div>".Format(type.type);
    strVar += "    <div class=\"text\">{0}<\/div>".Format(type.text);
    strVar += "<\/a>";
}
/// <reference path="../../include.js" />

//user模板
MPTemplate.Widget.User = function (data, options)
{
    var strVar = "";
    strVar += "<div class=\"widget-user\">";
    strVar += "    <a class=\"avt\" href=\"/user/{0}\">".Format(data.id);
    strVar += "        <img src=\"{0}\" />".Format(MPObject.User.BigAvt(data));
    strVar += "    <\/a>";
    strVar += "    <a class=\"name\">{0}<\/a>".Format(MPObject.User.Name(data));
    strVar += "    <div class=\"counts\">";
    strVar += "        <a class=\"item\" href=\"{1}\">{0}图片<\/a>".Format(data.images_count, MPObject.User.Pages.Image(data));
    strVar += "        <a class=\"item\" href=\"{1}\">{0}图包<\/a>".Format(data.packages_count, MPObject.User.Pages.Package(data));
    strVar += "    <\/div>";
    strVar += "    <div class=\"actions {0}\" data-id=\"{1}\"><\/div>".Format(data.followed ? "unfollow" : "follow", data.id);
    strVar += "<\/div>";

    return strVar;
}

//user上的操作按钮
MPTemplate.Widget.User.Buttons = {};

//关注按钮(会根据data的状态自动生成关注或者取消关注)
MPTemplate.Widget.User.Buttons.Follow = function (data, options)
{
    if (options == null)
    {
        options = {};
    }
    return "<div class=\"{0} {4}\" data-id=\"{1}\" title=\"关注{2}\"></div>".Format(data.followed ? "user-unfollow" : "user-follow", data.id, data.name,options.class);
}
/// <reference path="../../include.js" />

MPTemplate.Widget.Add = function (data, options)
{
    var strVar = "";
    strVar += "<div class=\"widget-add\" data-id=\"{0}\">".Format(data.id);
    strVar += "    <div class=\"border {0}\">".Format(options.class);
    strVar += "        <em><\/em>";
    strVar += "        <span>{0}<\/span>".Format(options.text);
    strVar += "    <\/div>";
    strVar += "<\/div>";

    return strVar;
}

MPTemplate.Widget.Add.Options = {
    AddPackage: {
        "class": "package",
        "text": "创建图包"
    },
    AddImage: {
        "class": "image",
        "text": "添加图片"
    }
}
/// <reference path="../../include.js" />
MPTemplate.Widget.Notice = {};

MPTemplate.Widget.Notice.Activity = function (data, options)
{
    str = "";
    switch (data.type)
    {
        case "praise":
            {
                var User = MPObject.User;
                var Package = MPObject.Package;
                var Image = MPObject.Image;
                str += "<div class=\"widget-notice\">";
                str += "    <a href=\"{0}\"><img class=\"avt\" src=\"{1}\"/></a>".Format(User.Pages.Home(data.user), User.Avt(data.user));
                str += "    <div class=\"r\">";
                str += "        <div class=\"line\">";
                str += "            <a class=\"username\" href=\"{0}\">{1}</a>".Format(User.Pages.Home(data.user), User.Name(data.user));
                str += "            <span>赞了你的图片</span>";
                str += "        </div>";
                str += "        <div class=\"line\">";
                str += "            <a class=\"image-description\" href=\"{0}\">{1}</a>".Format(host + "/image/" + data.image.id, data.image.description);
                str += "        </div>";
                str += "    </div>";
                str += "</div>";
            }
            break;
        case "resave":
            {
                var User = MPObject.User;
                var Image = MPObject.Image;
                str += "<div class=\"widget-notice\">";
                str += "    <a href=\"{0}\"><img class=\"avt\" src=\"{1}\"/></a>".Format(User.Pages.Home(data.user), User.Avt(data.user));
                str += "    <div class=\"r\">";
                str += "        <div class=\"line\">";
                str += "            <a class=\"username\" href=\"{0}\">{1}</a>".Format(User.Pages.Home(data.user), User.Name(data.user));
                str += "            <span>转存了你的</span>";
                str += "        </div>";
                str += "        <div class=\"line\">";
                str += "            <a class=\"image-description\" href=\"{0}\">{1}</a>".Format(host + "/image/" + data.image.id, data.image.description);
                str += "        </div>";
                str += "    </div>";
                str += "</div>";
            }
            break;
        case "follow_user":
            {
                var User = MPObject.User;
                var Package = MPObject.Package;
                var Image = MPObject.Image;
                str += "<div class=\"widget-notice\">";
                str += "    <a href=\"{0}\"><img class=\"avt\" src=\"{1}\"/></a>".Format(User.Pages.Home(data.user), User.Avt(data.user));
                str += "    <div class=\"r\">";
                str += "        <div class=\"line\">";
                str += "            <a class=\"username\" href=\"{0}\">{1}</a>".Format(User.Pages.Home(data.user), User.Name(data.user));
                str += "            <span>关注了你</span>";
                str += "        </div>";
                str += "        <div class=\"line\">";
                str += "        </div>";
                str += "    </div>";
                str += "</div>";
            }
            break;
        case "follow_package":
            {
                var User = MPObject.User;
                var Package = MPObject.Package;
                var Image = MPObject.Image;
                str += "<div class=\"widget-notice\">";
                str += "    <a href=\"{0}\"><img class=\"avt\" src=\"{1}\"/></a>".Format(User.Pages.Home(data.user), User.Avt(data.user));
                str += "    <div class=\"r\">";
                str += "        <div class=\"line\">";
                str += "            <a class=\"username\" href=\"{0}\">{1}</a>".Format(User.Pages.Home(data.user), User.Name(data.user));
                str += "            <span>关注了你的图包</span>";
                str += "        </div>";
                str += "        <div class=\"line\">";
                str += "            <a class=\"package-title\" href=\"{0}\">{1}</a>".Format(host + "/package/" + data.package.id, data.package.title);
                str += "        </div>";
                str += "    </div>";
                str += "</div>";
            }
            break;
        case "resave_through":
            {
                var User = MPObject.User;
                var Package = MPObject.Package;
                var Image = MPObject.Image;
                str += "<div class=\"widget-notice\">";
                str += "    <a href=\"{0}\"><img class=\"avt\" src=\"{1}\"/></a>".Format(User.Pages.Home(data.user), User.Avt(data.user));
                str += "    <div class=\"r\">";
                str += "        <div class=\"line\">";
                str += "            <a class=\"username\" href=\"{0}\">{1}</a>".Format(User.Pages.Home(data.user), User.Name(data.user));
                str += "            <span>通过</span>";
                str += "            <a class=\"package-title\" href=\"{0}\">{1}</a>".Format(host + "/package/" + data.package.id, data.package.title);
                str += "            <span>转存了</span>";
                str += "        </div>";
                str += "        <div class=\"line\">";
                str += "            <a class=\"image-description\" href=\"{0}\">{1}</a>".Format(host + "/image/" + data.image.id, data.image.description);
                str += "        </div>";
                str += "    </div>";
                str += "</div>";
            }
            break;
    }

    return str;
}

MPTemplate.Widget.Notice.Message=function(data,options)
{
    str = "";
    switch (data.type)
    {
        case "comment":
            {
                var User = MPObject.User;
                var Package = MPObject.Package;
                var Image = MPObject.Image;
                str += "<div class=\"widget-notice\">";
                str += "    <a href=\"{0}\"><img class=\"avt\" src=\"{1}\"/></a>".Format(User.Pages.Home(data.user), User.Avt(data.user));
                str += "    <div class=\"r\">";
                str += "        <div class=\"line\">";
                str += "            <a class=\"username\" href=\"{0}\">{1}</a>".Format(User.Pages.Home(data.user), User.Name(data.user));
                str += "            <span>对你的图片</span>";
                str += "            <a class=\"image-description\" href=\"{0}\">{1}</a>".Format(host + "/image/" + data.image.id, data.image.description);
                str += "            <span>作出了评价</span>";
                str += "        </div>";
                str += "        <div class=\"line\">";
                str += "            <span>{0}</span>".Format(data.comment);
                str += "        </div>";
                str += "    </div>";
                str += "</div>";
            }
            break;
        case "mention":
            {
                var User = MPObject.User;
                var Package = MPObject.Package;
                var Image = MPObject.Image;
                str += "<div class=\"widget-notice\">";
                str += "    <a href=\"{0}\"><img class=\"avt\" src=\"{1}\"/></a>".Format(User.Pages.Home(data.user), User.Avt(data.user));
                str += "    <div class=\"r\">";
                str += "        <div class=\"line\">";
                str += "            <a class=\"username\" href=\"{0}\">{1}</a>".Format(User.Pages.Home(data.user), User.Name(data.user));
                str += "            <span>在评论</span>";
                str += "            <a class=\"image-description\" href=\"{0}\">{1}</a>".Format(host + "/image/" + data.image.id, data.image.description);
                str += "            <span>时提到了你</span>";
                str += "        </div>";
                str += "        <div class=\"line\">";
                str += "            <span>{0}</span>".Format(data.comment);
                str += "        </div>";
                str += "    </div>";
                str += "</div>";
            }
            break;
        case "reply":
            {
                var User = MPObject.User;
                var Package = MPObject.Package;
                var Image = MPObject.Image;
                str += "<div class=\"widget-notice\">";
                str += "    <a href=\"{0}\"><img class=\"avt\" src=\"{1}\"/></a>".Format(User.Pages.Home(data.user), User.Avt(data.user));
                str += "    <div class=\"r\">";
                str += "        <div class=\"line\">";
                str += "            <a class=\"username\" href=\"{0}\">{1}</a>".Format(User.Pages.Home(data.user), User.Name(data.user));
                str += "            <span>在</span>";
                str += "            <a class=\"image-description\" href=\"{0}\">{1}</a>".Format(host + "/image/" + data.image.id, data.image.description);
                str += "            <span>回复了你</span>";
                str += "        </div>";
                str += "        <div class=\"line\">";
                str += "            <span>{0}</span>".Format(data.comment);
                str += "        </div>";
                str += "    </div>";
                str += "</div>";
            }
            break;
    }
    return str;
}
/// <reference path="../../include.js" />

MPTemplate.Dialog.AvtCutDialog = function (data, options)
{
    var img = { file: data };
    var strVar = "";
    strVar += "<div class=\"dialog-mask\">";
    strVar += "    <div class=\"dialog-box\">";
    strVar += "        <div class=\"dialog-title\">";
    strVar += "            <span class=\"text\">图片裁剪<\/span>";
    strVar += "            <div class=\"dialog-close\"><\/div>";
    strVar += "        <\/div>";
    strVar += "        <div class=\"dialog-content\">";
    strVar += "            <div class=\"crop-dialog\">";
    var scaleX = 400 / data.width;
    var scaleY = 300 / data.height;
    if (scaleX > 1)
        scaleX = 1;
    if (scaleY > 1)
        scaleY = 1;
    var scale = scaleX > scaleY ? scaleY : scaleX;

    var w = Math.ceil(data.width * scale);
    var h = Math.ceil(data.height * scale);

    strVar += "                <div class=\"img\" style=\"left:{0}px;top:{1}px;height:{2}px;width:{3}px\">".Format(Math.ceil((400 - w) / 2), Math.ceil((300 - h) / 2),h,w);
    strVar += "                    <img class=\"main\" src=\"{0}\" width=\"{1}\" height=\"{2}\"/>".Format(MPObject.Image.fw658(img).url,w,h);
    strVar += "                <\/div>";
    strVar += "                <div class=\"previews\">";
    strVar += "                    <div class=\"big\">";
    strVar += "                        <img src=\"{0}\" />".Format(MPObject.Image.fw658(img).url);
    strVar += "                    <\/div>";
    strVar += "                    <div class=\"normal\">";
    strVar += "                        <img src=\"{0}\"/>".Format(MPObject.Image.fw658(img).url);
    strVar += "                    <\/div>";
    strVar += "                <\/div>";
    strVar += "                <div class=\"clear\"></div>";
    strVar += "            <\/div>";
    strVar += "        <\/div>";
    strVar += "        <div class=\"dialog-btns\">";
    strVar += "            <div class=\"ok\">确认<\/div>";
    strVar += "            <div class=\"cancel\">取消<\/div>";
    strVar += "        <\/div>";
    strVar += "    <\/div>";
    strVar += "<\/div>";

    return strVar;
}
/// <reference path="../main.js" />

MPWidget.Package = {};
MPWidget.Image = {};
MPWidget.Frame = {};
/// <reference path="../include.js" />

MPWidget.Frame.New = function ()
{
    var content = $(MPTemplate.Widget.Frame());

    var search = content.find(".header .search");
    content.Body = content.find(".body");

    var s = MPWidget.Search.New();
    search.append(MPWidget.Search.New());

    if (MPData.user.id == 0)
    {
        var login = content.find("#login");
        var signup = content.find("#signup");

        login.click(function ()
        {
            var dialog = MPLoginDialog.New();
            dialog.onSuccess = function ()
            {
                location.reload();
            }
        });
        signup.click(function ()
        {
            MPSignUpDialog.New();
        })
    }
    else
    {
        var user_nav = content.find(".user-nav");
        var user_nav_menu = user_nav.find(".hide-menu");
        //登出
        var l = content.find("#logout");
        MPMenu(user_nav, user_nav_menu);

        var notice_nav = content.find(".notice-nav");
        var notice_nav_menu = notice_nav.find(".hide-menu");
        //点击消息之后的处理响应
        MPPopUpMenu(notice_nav, notice_nav_menu, function ()
        {
            MPMenu(user_nav, user_nav_menu);
            $(".widget-notice").remove();
            $("#activity").removeClass("on");
            $("#message").removeClass("on");
        },
        function ()//callback
        {
            user_nav.unbind();
            if (!($("#activity").hasClass("on") || $("#message").hasClass("on")))
            {
                $("#message").addClass("on");
                var notice_o = notice.New("message");
                notice_o.GetNotice();
            }

            $("#activity").click(function (e)
            {
                e.stopPropagation();
                if ($(this).hasClass("on"))
                    return;
                $("#message").removeClass("on");
                $(this).addClass("on");
                $(".widget-notice").remove();
                var notice_o = notice.New("activity");
                notice_o.GetNotice();
            });

            $("#message").click(function (e)
            {
                e.stopPropagation();
                if ($(this).hasClass("on"))
                    return;
                $("#activity").removeClass("on");
                $(this).addClass("on");
                $(".widget-notice").remove();
                var notice_o = notice.New("message");
                notice_o.GetNotice();
            })
        });

        l.click(function ()
        {
            if ($.cookie("login") == null)
            {
                MPMessageBox.New(MPMessageBox.Icons.Error, "请先登录");
                return;
            }
            $.post(host + "/ajax/logout", {}, function (data)
            {
                if (data.code == 0)
                {
                    $.cookie("login", null);
                    location.href = host;
                }
            }, "json");
        });

        var add = content.find(".add-nav");
        add.click(function ()
        {
            MPObject.Image.CreateImage();
        });

    }

    //返回顶端按钮
    var toTopButton = content.find(".float-tools .top");

    $(document).scroll(function ()
    {
        if ($(document).scrollTop() < 200)
            toTopButton.fadeOut();
        else
            toTopButton.fadeIn().css("display", "block");
    })

    toTopButton.click(function ()
    {
        $("html,body").animate({ scrollTop: 0 }, 200);
    })

    $.post(host + "/ajax/get-notice-count", {}, function (data)
    {
        if (data.code == 0)
        {
            var total = data.activity_count + data.message_count;
            if (total == 0)
                $(".notice-nav .count").hide();
            else
            {
                var noticeCount = $(".notice-nav .count");
                noticeCount.text(total);
                noticeCount.show();
            }
        }
    }, "json");
    return content;
};

notice = {
    New: function (type)
    {
        //获取最大的ID量
        notice.Max = 0;
        //标记是否在更新
        var _isUpdating = false;
        //标记是否已经更新完毕
        var _isComplete = false;

        notice.BeginUpdata = function ()
        {
            _isUpdating = true;
        }

        notice.EndUpdata = function ()
        {
            _isUpdating = false;
        }

        notice.Complete = function ()
        {
            _isComplete = true;
        }

        var container = $(".notice-nav .content ");//容器

        notice.GetNotice = function (callback)//type为类型 只能是message或者activity
        {
            $.post(host + "/ajax/get-" + type, { max: notice.Max }, function (data)
            {
                if (data.code == 0)
                {
                    if (type == "activity")
                    {
                        for (var n = data.datas.length, i = 0; i < n; i++)
                        {
                            container.append(MPTemplate.Widget.Notice.Activity(data.datas[i]));
                            notice.Max = data.data_max;
                        }
                        if (data.data_max == 1)
                            _isComplete = true;
                        if (callback)
                            callback();
                    }
                    else
                    {
                        for (var n = data.datas.length, i = 0; i < n; i++)
                        {
                            container.append(MPTemplate.Widget.Notice.Message(data.datas[i]));
                            notice.Max = data.data_max;
                        }
                        if (data.data_max == 1)
                            _isComplete = true;
                        if (callback)
                            callback();
                    }
                }
            }, "json");
        }
        container.scroll(function ()
        {
            if (_isComplete)
                return;
            if (_isUpdating)
                return;
            var scrollMax = $(this)[0].scrollHeight;
            var scrollTop = $(this)[0].scrollTop;　 //滚动到的当前位置
            var divHight = $(this).height();
            if (divHight + scrollTop >= scrollMax)
                notice.Update();
        })

        notice.Update = function ()
        {
            notice.BeginUpdata();
            notice.GetNotice(notice.EndUpdata());
        }

        notice.Destroy = function ()
        {
            delete notice;
        }
        return notice;
    }
}
/// <reference path="../main.js" />
/// <reference path="../jquery.js" />
MPWidget.Search = {};
MPWidget.Search.New = function ()
{
    var strVar = "";
    strVar += "<div class=\"widget-search\">";
    strVar += "    <input type=\"text\" class=\"keyword\" autocomplete=\"on\" placeholder=\"搜索\" />";
    strVar += "    <div class=\"go\"><\/div>";
    strVar += "<\/div>";

    var res = $(strVar);
    var input = res.find("input");
    var go = res.find(".go");

    go.click(go_click);

    function go_click()
    {
        var val = input.val();
        location.href = "/search/" + encodeURIComponent(val);
    }

    return res;
}
/// <reference path="../include.js" />

MPWidget.Image.Description = function (description)
{
    description = MPHtmlEncode(description);
    return description.replace(/(#.*?#)/g, function (word)
    {
        var w = $.trim(word.substring(1, word.length - 1));
        if (w == "")
            return word;

        return "<a href=\"{0}/search/{1}\">{2}</a>".FormatNoEncode(host, encodeURIComponent(w), word);
    });
};
MPWidget.Image.New = function (image,options)
{
    return $(MPTemplate.Widget.Image(image,options));
};
MPWidget.Image.Bind = function ()
{
    //点击编辑按钮
    $(document).on("click", ".widget-image .edit", edit_click)
        //点击转存按钮
    .on("click", ".widget-image .resave", resave_click)
        //点击赞按钮
    .on("click", ".widget-image .praise", praise_click)
        //点击取消赞
    .on("click", ".widget-image .unpraise", unpraise_click)
        //点击图像,点击了以后阻止a标签的click,防止页面跳转,并显示图片,这个函数暂时先不实现
    .on("click", ".widget-image a.img", img_click)
        //鼠标进入,显示action
    .on("mouseenter", ".widget-image", mouse_enter)
        //鼠标离开,隐藏action
    .on("mouseleave", ".widget-image", mouse_leave);

    function edit_click()
    {
        var t = $(this);
        var id = t.attr("data-id");
        var hash = t.attr("data-hash");
        var source = t.attr("data-source");
        var description = t.attr("data-description");
        var packageID = t.attr("data-packageid");
        var packagetitle = t.attr("data-packagetitle");
        MPObject.Image.Edit(id, hash, description, source, packageID, packagetitle);
    }

    function img_click(e)
    {
        //防止浏览器跳转
        e.preventDefault();
        var viewerWindow = $(".widget_window");
        if (viewerWindow.length == 0)
        {
            var viewerWindow = MPWidget.Window.New();
            var body = $("body");
            viewerWindow.onClose = function ()
            {
                body.removeAttr("style");
            }
            $("body").append(viewerWindow).css("overflow", "hidden");
        }
        viewerWindow.Init($(this).parents(".widget-image"));
    }

    function resave_click()
    {
        var t = $(this);
        var id = t.attr("data-id");
        var hash = t.attr("data-hash");
        //获取要转存图片的描述内容用作初始描述
        var description = t.attr("data-description");
        MPObject.Image.Resave(id, hash, description, "");
    }

    function praise_click()
    {
        var t = $(this);
        var id =t.attr("data-id");
        MPObject.Image.Praise(id, function () {
            t.removeClass("praise");
            t.addClass("unpraise");
        });
    }

    function unpraise_click() {
        var t = $(this);
        var id = t.attr("data-id");
        MPObject.Image.UnPraise(id, function () {
            t.removeClass("unpraise");
            t.addClass("praise");
        });
    }

    function mouse_enter()
    {
        $(this).find(".actions").show();
    }

    function mouse_leave()
    {
        $(this).find(".actions").hide();
    }
};
/// <reference path="../include.js" />

MPWidget.Package.New = function (packageDetail, type) {
    var res = $(MPTemplate.Widget.Package(packageDetail, type));
    return res;
}

MPWidget.Package.Bind = function () {
    //编辑点击(图包是自己时)
    $(document).on("click", ".widget-package .edit", edit_click)
        //点击关注
    .on("click", ".widget-package .follow", follow_click)
        //点击取消关注
    .on("click", ".widget-package .unfollow", unfollow_click);

    function edit_click() {
        //提取id
        var id = $(this).attr("data-id");
        var title = $(this).attr("data-title");
        var description = $(this).attr("data-description");
        MPObject.Package.Edit(id, title, description);
    }

    function follow_click() {
        var t = $(this);
        var id = t.attr("data-id");
        MPObject.Package.Follow(id, function () {
            t.removeClass("follow");
            t.addClass("unfollow");
            MPMessageBox.New(MPMessageBox.Icons.OK, "关注成功!");
        })
    }//关注操作

    function unfollow_click() {
        var t = $(this);
        var box = MPMessageBox.New(MPMessageBox.Icons.Warn, "确认要取消关注?");
        box.onOK = function myfunction() {
            var id = t.attr("data-id");
            MPObject.Package.UnFollow(id, function () {
                t.removeClass("unfollow");
                t.addClass("follow");
            })
        }
    }//取消关注
}
/// <reference path="../include.js" />

MPWidget.ImageView = {};
MPWidget.ImageView.New = function (imageDetail)
{
    var res = $(MPTemplate.Widget.ImageView(imageDetail));
    res.Run = function ()
    {
        //缩略图瀑布流处理
        var wf = MPWaterFall.New(res.find(".images"), res.find(".image-waterfall"), 3, 76, 1, 1, 1, 1, false);
        var max = 0;
        wf.onBottom = function ()
        {
            wf.BeginUpdate();
            $.getJSON("/package/" + imageDetail.package.id, { ajax: true, simple: true, max: max }, function (data)
            {
                max = wf.Push(data, ImageItem, null, "id");
                wf.EndUpdate();
            })
        };
        wf.onBottom();
        //广告处理
        var ad = res.find(".ad-piece.piece");
        ad.append(MPPage.ad);
        //更多来自同一个网站的图片处理
        if (imageDetail.host != "")
        {
            $.getJSON("/from/" + imageDetail.host, { ajax: true, limit: 3 })
            .success(function (data)
            {
                var n = data.length;
                if (n != 0)
                {
                    res.find(".from-piece").show();
                    res.find(".from-piece .host").text(imageDetail.host);
                    var thumbs = res.find(".from-piece .thumbs");
                    thumbs.empty();
                    for (var i = 0; i < n; i++)
                    {
                        var thumb = "<img src=\"{0}\" class=\"thumb\"/>".Format(MPObject.Image.sq236(data[i]).url);
                        thumbs.append(thumb);
                    }
                }
            });
        }
    }

    var ImageItem = {};
    ImageItem.New = function (image)
    {
        var strVar1 = "";
        strVar1 += "<a class=\"image\" href=\"{0}\" data-id=\"{1}\">".Format("/image/" + image.id, image.id);
        var img = MPObject.Image.fw78(image);
        strVar1 += "     <img src=\"{0}\" width=\"76\" height=\"{1}\"/>".Format(img.url, img.height);
        strVar1 += "     <div class=\"cover\"><\/div>";
        strVar1 += "<\/a>";

        return $(strVar1);
    }

    return res;
}

MPWidget.ImageView.Bind = function ()
{
    //转存按钮
    $(document).on("click", ".image-view .resave", resave_click)
    //编辑按钮
    .on("click", ".image-view .edit", edit_click)
    //删除按钮
    .on("click", ".image-view .delete", delete_click)
    //添加评论
    .on("click", ".image-view .submit", submit_click)
    //监听键盘输入,主要针对@的使用
    .on("keydown", ".new-comment textarea", keydown)
    //点击@人
    .on("click", ".mention-option", mention_click)
     //赞图片
    .on("click", ".image-view .image-praise", praise_click)
    //取消赞图片
    .on("click", ".image-view .image-unpraise", unpraise_click)
    //查看大图
    .on("click", ".image-view .big", big_click);
    function praise_click()
    {
        var t = $(this);
        var id = t.attr("data-id");
        MPObject.Image.Praise(id, function ()
        {
            t.removeClass("image-praise ");
            t.addClass("image-unpraise");
        })
    }

    function unpraise_click()
    {
        var t = $(this);
        var id = t.attr("data-id");
        MPObject.Image.UnPraise(id, function ()
        {
            t.removeClass("image-unpraise");
            t.addClass("image-praise ");
        })
    }

    function resave_click()
    {
        var t = $(this);
        var id = t.attr("data-id");
        var hash = t.attr("data-hash");
        var description = t.attr("data-description");
        //待处理
        MPObject.Image.Resave(id, hash, description);
    }

    function edit_click()
    {
        var t = $(this);
        var id = t.attr("data-id");
        var hash = t.attr("data-hash");
        var packageID = t.attr("data-packageid");
        var packagetitle = t.attr("data-packagetitle");
        var description = t.attr("data-description");
        var sourve = t.attr("data-source");
        MPObject.Image.Edit(id, hash, description, sourve, packageID, packagetitle);
    }

    function delete_click()
    {
        var id = $(this).attr("data-id");
        MPObject.Image.Delete(id);
    }

    function submit_click()
    {
        var id = $(".image-view .resave").attr("data-id");
        var text = $(".new-comment textarea");//评论内容
        if ($.trim(text.val()) == "")
        {
            MPMessageBox.New(MPMessageBox.Icons.Warn, "请输入评论内容");
            return;
        }
        $.post(host + "/ajax/add-comment", { text: MPHtmlEncode(text.val()), image_id: id }, function (data)
        {
            if (data.code == 0)
            {
                //成功的处理
                $(".image-view .comments").prepend($(MPTemplate.Widget.Comment(data.comment)));
                text.val("");
            }
            else
            {
                MPMessageBox.New(MPMessageBox.Icons.Error, data.mag);
            }
        }, "json");
    }

    function keydown(e)
    {
        if (e.keyCode == 50 && e.shiftKey)
        {
            $.post(host + "/ajax/get-following-user", {}, function (data)
            {
                if (data.code == 0)
                {
                    var folUserList = data.users;
                    var container = $("<div/>").addClass("mention-container ");
                    if (folUserList.length == 0)
                        return;
                    for (var i = 0; i < folUserList.length; i++)
                    {
                        var option = $("<div/>").addClass("mention-option");
                        option.text(folUserList[i].name);
                        container.append(option);
                    }
                    var t = $(".new-comment textarea").position().top;
                    var l = $(".new-comment textarea").position().left
                    var position = $(".new-comment textarea").caret("position");
                    container.offset({ left: position.left + l + 2, top: position.top + t + 1 });
                    $(".new-comment").append(container);

                    $(document).click(function (e)
                    {
                        var point = {};
                        point.X = e.clientX;
                        point.Y = e.clientY;
                        if (!MPCheckInEle(container, point))
                        {
                            container.remove();
                        }
                    })

                    $(document).keydown(function (e)
                    {
                        container.remove();
                    })
                }
            }, "json");
        }
    }

    function mention_click()
    {
        var aText = $(this).text() + " ";
        var oText = $(".new-comment textarea").val();
        $(".new-comment textarea").val(oText + aText);
        $(".new-comment .mention-container").remove();
    }

    function big_click()
    {
        var e = $(this);
        var id = e.attr("data-id");
        //var url = e.attr("data-url");
        //var width = e.attr("data-width");
        //var height = e.attr("data-height");
        open(host+"/image/"+id+"/big")
        //var w = open("", "_blank");
        //var strVar = "";
        //strVar += "<html>";
        //strVar += "<head>";
        //strVar += "    <title>查看大图<\/title>";
        //strVar += "<\/head>";
        //strVar += "<body>";
        //strVar += "    <img  src=\"{0}\" />".Format(url);
        //strVar += "<\/body>";
        //strVar += "<\/html>";
        //w.document.write(strVar);
    }
}
/// <reference path="../include.js" />


MPWidget.User = {};
MPWidget.User.New = function (userDetail) {
    var content = $(MPTemplate.Widget.User(userDetail));
    return content;
}

MPWidget.User.Bind = function () {
    $(document).on("click", ".widget-user .follow", follow_click)
    //关注用户
    .on("click", "widget-user .unfollow", unfollow_click);
    //点击取消关注;

    function follow_click() {
        var t = $(this);
        var id = t.attr("data-id");
        MPObject.User.Actions.Follow(id, function () {
            t.removeClass("follow");
            t.addClass("unfollow");
        });
    }

    function unfollow_click() {
        var t = $(this);
        var id = t.attr("data-id");
        MPObject.User.Actions.UnFollow(id, function () {
            t.removeClass("unfollow");
            t.addClass("follow");
        })
    }
}
/// <reference path="../main.js" />
/// <reference path="image-view.js" />

MPWidget.Window = {};
MPWidget.Window.New=function(element)
{
    var content = null;
    if (element != undefined)
        content = $(element);
    else
    {
        var strVar = "";
        strVar += "<div class=\"widget-window\">";
        strVar += "     <div class=\"container\">";
        strVar += "         <div class=\"close\"><\/div>";
        strVar += "         <div class=\"prev\"><\/div>";
        strVar += "         <div class=\"next\"><\/div>";
        strVar += "         <div class=\"viewer\"><\/div>";
        strVar += "      </div>";
        strVar += "<\/div>";
        content = $(strVar);

        var next = content.find(".next");
        var prev = content.find(".prev");
        var close = content.find(".close");
        var viewer = content.find(".viewer");
        var current = null;

        next.click(next_click);
        prev.click(prev_click);
        close.click(close_click);
        content.on("click", ".image-waterfall .image", image_click);
    }

    function image_click(e)
    {
        //防止浏览器跳转
        e.preventDefault();
        var id = $(this).attr("data-id");
        Show(id);
    }

    function next_click()
    { 
        content.Init(current.next(".widget-image"));
    }

    function prev_click()
    {
        content.Init(current.prev(".widget-image"));
    }

    function close_click()
    {
        content.remove();
        if(content.onClose!=null)
        {
            content.onClose();
        }
    }

    function Show(id)
    {
        $.getJSON("/image/" + id + "?ajax=", function (data)
        {
            viewer.empty();
            var imageView = MPWidget.ImageView.New(data);
            viewer.append(imageView);
            imageView.Run();
        })
    }

    content.Init=function(widget_image)
    {
        current = widget_image;

        if (widget_image.next(".widget-image").length == 0)
            next.hide();
        else
            next.show();

        if (widget_image.prev(".widget-image").length == 0)
            prev.hide();
        else
            prev.show();
        
        var id = widget_image.attr("data-id");

        Show(id);
    }

    content.onClose = null;

    return content;
}
/// <reference path="include.js" />


$(function ()
{
    MPWidget.Image.Bind();
    MPWidget.Package.Bind();
    MPWidget.User.Bind();
    MPWidget.ImageView.Bind();

    MPPage = {};
    MPPage.ad = $("#tanxssp_con_mm_26054915_7856098_30982792");
});
