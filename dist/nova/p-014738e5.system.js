var __extends=this&&this.__extends||function(){var e=function(t,r){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)if(t.hasOwnProperty(r))e[r]=t[r]};return e(t,r)};return function(t,r){e(t,r);function n(){this.constructor=t}t.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}();var __awaiter=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))(function(a,i){function s(e){try{l(n.next(e))}catch(e){i(e)}}function o(e){try{l(n["throw"](e))}catch(e){i(e)}}function l(e){e.done?a(e.value):new r(function(t){t(e.value)}).then(s,o)}l((n=n.apply(e,t||[])).next())})};var __generator=this&&this.__generator||function(e,t){var r={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},n,a,i,s;return s={next:o(0),throw:o(1),return:o(2)},typeof Symbol==="function"&&(s[Symbol.iterator]=function(){return this}),s;function o(e){return function(t){return l([e,t])}}function l(s){if(n)throw new TypeError("Generator is already executing.");while(r)try{if(n=1,a&&(i=s[0]&2?a["return"]:s[0]?a["throw"]||((i=a["return"])&&i.call(a),0):a.next)&&!(i=i.call(a,s[1])).done)return i;if(a=0,i)s=[s[0]&2,i.value];switch(s[0]){case 0:case 1:i=s;break;case 4:r.label++;return{value:s[1],done:false};case 5:r.label++;a=s[1];s=[0];continue;case 7:s=r.ops.pop();r.trys.pop();continue;default:if(!(i=r.trys,i=i.length>0&&i[i.length-1])&&(s[0]===6||s[0]===2)){r=0;continue}if(s[0]===3&&(!i||s[1]>i[0]&&s[1]<i[3])){r.label=s[1];break}if(s[0]===6&&r.label<i[1]){r.label=i[1];i=s;break}if(i&&r.label<i[2]){r.label=i[2];r.ops.push(s);break}if(i[2])r.ops.pop();r.trys.pop();continue}s=t.call(e,r)}catch(e){s=[6,e];a=0}finally{n=i=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};System.register([],function(e,t){"use strict";return{execute:function(){var r=this;var n=e("B",{allRenderFn:true,cmpDidLoad:true,cmpDidUnload:false,cmpDidUpdate:true,cmpDidRender:false,cmpWillLoad:true,cmpWillUpdate:false,cmpWillRender:false,connectedCallback:false,disconnectedCallback:false,element:false,event:false,hasRenderFn:true,lifecycle:true,hostListener:false,hostListenerTargetWindow:false,hostListenerTargetDocument:false,hostListenerTargetBody:false,hostListenerTargetParent:false,hostListenerTarget:false,member:true,method:true,mode:true,noVdomRender:false,observeAttribute:true,prop:true,propBoolean:true,propNumber:true,propString:true,propMutable:true,reflect:false,scoped:false,shadowDom:true,slot:true,slotRelocation:true,state:true,style:true,svg:false,updatable:true,vdomAttribute:true,vdomClass:true,vdomFunctional:true,vdomKey:true,vdomListener:true,vdomRef:true,vdomRender:true,vdomStyle:true,vdomText:true,watchCallback:true,taskQueue:true,lazyLoad:true,hydrateServerSide:false,cssVarShim:true,hydrateClientSide:false,isDebug:false,isDev:false,lifecycleDOMEvents:false,profile:false,hotModuleReplacement:false,constructableCSS:true,cssAnnotations:true});var a="nova";var i=window;var s=document;var o={$flags$:0,$resourcesUrl$:"",raf:function(e){return requestAnimationFrame(e)},ael:function(e,t,r,n){return e.addEventListener(t,r,n)},rel:function(e,t,r,n){return e.removeEventListener(t,r,n)}};var l=!!s.documentElement.attachShadow;var f=function(){try{new CSSStyleSheet;return true}catch(e){}return false}();var u=new WeakMap;var c=function(e){return u.get(e)};var $=e("r",function(e,t){return u.set(t.$lazyInstance$=e,t)});var v=function(e){{var t={$flags$:0,$hostElement$:e,$instanceValues$:new Map};t.$onReadyPromise$=new Promise(function(e){return t.$onReadyResolve$=e});return u.set(e,t)}};var d=function(e,t){return t in e};var h=function(e){return console.error(e)};var m=function(e,r,n){var a=typeof e.$lazyBundleIds$!=="string"?e.$lazyBundleIds$[r.$modeName$]:e.$lazyBundleIds$;return t.import("./"+a+".entry.js"+"").then(function(t){return t[e.$tagName$.replace(/-/g,"_")]},h)};var p=new Map;var g=i.__stencil_cssshim;var y=0;var b=false;var w=[];var R=[];var S=[];var _=function(e){return function(t){e.push(t);if(!b){b=true;o.raf(T)}}};var x=function(e){for(var t=0;t<e.length;t++){try{e[t](performance.now())}catch(e){h(e)}}e.length=0};var N=function(e,t){var r=0;var n=0;while(r<e.length&&(n=performance.now())<t){try{e[r++](n)}catch(e){h(e)}}if(r===e.length){e.length=0}else if(r!==0){e.splice(0,r)}};var T=function(){y++;x(w);var e=(o.$flags$&6)===2?performance.now()+7*Math.ceil(y*(1/22)):Infinity;N(R,e);N(S,e);if(R.length>0){S.push.apply(S,R);R.length=0}if(b=w.length+R.length+S.length>0){o.raf(T)}else{y=0}};var k=function(e){return Promise.resolve().then(e)};var L=_(R);var C={};var E=function(e){return e!=null};var j=function(e){return e.toLowerCase()};var A=function(e){return["object","function"].includes(typeof e)};function B(e){return"__sc_import_"+e.replace(/\s|-/g,"_")}var P=e("a",function(){if(!(i.CSS&&i.CSS.supports&&i.CSS.supports("color","var(--c)"))){return t.import("./p-aaf72d6b.system.js")}return Promise.resolve()});var U=e("p",function(){return __awaiter(r,void 0,void 0,function(){var e,r,n;return __generator(this,function(o){switch(o.label){case 0:e=t.meta.url;if(!(e!==""))return[3,1];return[2,Promise.resolve(new URL(".",e).href)];case 1:r=Array.from(s.querySelectorAll("script")).find(function(e){return e.src.includes("/"+a+".esm.js")||e.getAttribute("data-namespace")===a});n=new URL(".",new URL(r.getAttribute("data-resources-url")||r.src,i.location.href));z(n.href);if(!!window.customElements)return[3,3];return[4,t.import("./p-a8fc097f.system.js")];case 2:o.sent();o.label=3;case 3:return[2,n.href]}})})});var z=function(e){var t=B(a);try{i[t]=new Function("w","return import(w);")}catch(n){var r=new Map;i[t]=function(n){var a=new URL(n,e).href;var o=r.get(a);if(!o){var l=s.createElement("script");l.type="module";l.src=URL.createObjectURL(new Blob(["import * as m from '"+a+"'; window."+t+".m = m;"],{type:"application/javascript"}));o=new Promise(function(e){l.onload=function(){e(i[t].m);l.remove()}});r.set(a,o);s.head.appendChild(l)}return o}}};var I="hydrated";var O=new WeakMap;var D=function(e,t,r){var n=p.get(e);if(f&&r){n=n||new CSSStyleSheet;n.replace(t)}else{n=t}p.set(e,n)};var M=function(e,t,r,n){var a=F(t.$tagName$,r);var i=p.get(a);e=e.nodeType===11?e:s;if(!i){a=F(t.$tagName$);i=p.get(a)}if(i){if(typeof i==="string"){e=e.head||e;var o=O.get(e);var l=void 0;if(!o){O.set(e,o=new Set)}if(!o.has(a)){{if(g){l=g.createHostStyle(n,a,i,!!(t.$flags$&10));var f=l["s-sc"];if(f){a=f;o=null}}else{l=s.createElement("style");l.innerHTML=i}e.insertBefore(l,e.querySelector("link"))}if(o){o.add(a)}}}else if(!e.adoptedStyleSheets.includes(i)){e.adoptedStyleSheets=e.adoptedStyleSheets.concat([i])}}return a};var W=function(e,t,r){var n=M(l&&e.shadowRoot?e.shadowRoot:e.getRootNode(),t,r,e);if(t.$flags$&10){e["s-sc"]=n;e.classList.add(n+"-h")}};var F=function(e,t){return"sc-"+(t?e+"-"+t:e)};var H=e("h",function(e,t){var r=[];for(var n=2;n<arguments.length;n++){r[n-2]=arguments[n]}var a=null;var i=false;var s=false;var o;var l;var f=[];var u=function(t){for(var r=0;r<t.length;r++){a=t[r];if(Array.isArray(a)){u(a)}else if(a!=null&&typeof a!=="boolean"){if(i=typeof e!=="function"&&!A(a)){a=String(a)}if(i&&s){f[f.length-1].$text$+=a}else{f.push(i?{$flags$:0,$text$:a}:a)}s=i}}};u(r);if(t){{o=t.key||undefined}{l=t.name}{var c=t.className||t.class;if(c){t.class=typeof c!=="object"?c:Object.keys(c).filter(function(e){return c[e]}).join(" ")}}}if(typeof e==="function"){return e(t,f,Q)}var $={$flags$:0,$tag$:e,$children$:f.length>0?f:null,$elm$:undefined,$attrs$:t};{$.$key$=o}{$.$name$=l}return $});var V={};var q=function(e){return e&&e.$tag$===V};var Q={forEach:function(e,t){return e.map(G).forEach(t)},map:function(e,t){return e.map(G).map(t).map(K)}};var G=function(e){return{vattrs:e.$attrs$,vchildren:e.$children$,vkey:e.$key$,vname:e.$name$,vtag:e.$tag$,vtext:e.$text$}};var K=function(e){return{$flags$:0,$attrs$:e.vattrs,$children$:e.vchildren,$key$:e.vkey,$name$:e.vname,$tag$:e.vtag,$text$:e.vtext}};var J=function(e,t,r,n,a,i){if(r===n){return}if(t==="class"&&!a){{var s=X(r);var l=X(e.className).filter(function(e){return!s.includes(e)});e.className=l.concat(X(n).filter(function(e){return!l.includes(e)})).join(" ")}}else if(t==="style"){{for(var f in r){if(!n||n[f]==null){if(f.includes("-")){e.style.removeProperty(f)}else{e.style[f]=""}}}}for(var f in n){if(!r||n[f]!==r[f]){if(f.includes("-")){e.style.setProperty(f,n[f])}else{e.style[f]=n[f]}}}}else if(t==="key");else if(t==="ref"){if(n){n(e)}}else if(t.startsWith("on")&&!d(e,t)){if(d(e,j(t))){t=j(t.substring(2))}else{t=j(t[2])+t.substring(3)}if(r){o.rel(e,t,r,false)}if(n){o.ael(e,t,n,false)}}else{var u=d(e,t);var c=A(n);if((u||c&&n!==null)&&!a){try{e[t]=n==null&&e.tagName.indexOf("-")===-1?"":n}catch(e){}}if(n==null||n===false){{e.removeAttribute(t)}}else if((!u||i&4||a)&&!c){n=n===true?"":n.toString();{e.setAttribute(t,n)}}}};var X=function(e){return!e?[]:e.split(" ")};var Y=function(e,t,r,n){var a=t.$elm$.nodeType===11&&t.$elm$.host?t.$elm$.host:t.$elm$;var i=e&&e.$attrs$||C;var s=t.$attrs$||C;{for(n in i){if(s[n]==null&&i[n]!=null){J(a,n,i[n],undefined,r,t.$flags$)}}}for(n in s){J(a,n,i[n],s[n],r,t.$flags$)}};var Z;var ee;var te;var re=false;var ne=false;var ae=false;var ie=false;var se=function(e,t,r,n){var a=t.$children$[r];var i=0;var o;var l;var f;if(!re){ae=true;if(a.$tag$==="slot"){if(Z){n.classList.add(Z+"-s")}if(!a.$children$){a.$flags$|=1}else{a.$flags$|=2}}}if(E(a.$text$)){a.$elm$=s.createTextNode(a.$text$)}else if(a.$flags$&1){a.$elm$=s.createTextNode("")}else{o=a.$elm$=s.createElement(a.$flags$&2?"slot-fb":a.$tag$);{Y(null,a,ie)}if(E(Z)&&o["s-si"]!==Z){o.classList.add(o["s-si"]=Z)}if(a.$children$){for(i=0;i<a.$children$.length;++i){l=se(e,a,i,o);if(l){o.appendChild(l)}}}}{a.$elm$["s-hn"]=te;if(a.$flags$&(2|1)){a.$elm$["s-sr"]=true;a.$elm$["s-cr"]=ee;a.$elm$["s-sn"]=a.$name$||"";f=e&&e.$children$&&e.$children$[r];if(f&&f.$tag$===a.$tag$&&e.$elm$){oe(e.$elm$,false)}}}return a.$elm$};var oe=function(e,t){o.$flags$|=1;var r=e.childNodes;for(var n=r.length-1;n>=0;n--){var a=r[n];if(a["s-hn"]!==te&&a["s-ol"]){ve(a).insertBefore(a,$e(a));a["s-ol"].remove();a["s-ol"]=undefined;ae=true}if(t){oe(a,t)}}o.$flags$&=~1};var le=function(e,t,r,n,a,i){var s=e["s-cr"]&&e["s-cr"].parentNode||e;var o;if(s.shadowRoot&&j(s.tagName)===te){s=s.shadowRoot}for(;a<=i;++a){if(n[a]){o=se(null,r,a,e);if(o){n[a].$elm$=o;s.insertBefore(o,$e(t))}}}};var fe=function(e,t,r,n){for(;t<=r;++t){if(E(e[t])){n=e[t].$elm$;ge(e[t],true);{ne=true;if(n["s-ol"]){n["s-ol"].remove()}else{oe(n,true)}}n.remove()}}};var ue=function(e,t,r,n){var a=0;var i=0;var s=0;var o=0;var l=t.length-1;var f=t[0];var u=t[l];var c=n.length-1;var $=n[0];var v=n[c];var d;var h;while(a<=l&&i<=c){if(f==null){f=t[++a]}else if(u==null){u=t[--l]}else if($==null){$=n[++i]}else if(v==null){v=n[--c]}else if(ce(f,$)){de(f,$);f=t[++a];$=n[++i]}else if(ce(u,v)){de(u,v);u=t[--l];v=n[--c]}else if(ce(f,v)){if(f.$tag$==="slot"||v.$tag$==="slot"){oe(f.$elm$.parentNode,false)}de(f,v);e.insertBefore(f.$elm$,u.$elm$.nextSibling);f=t[++a];v=n[--c]}else if(ce(u,$)){if(f.$tag$==="slot"||v.$tag$==="slot"){oe(u.$elm$.parentNode,false)}de(u,$);e.insertBefore(u.$elm$,f.$elm$);u=t[--l];$=n[++i]}else{s=-1;{for(o=a;o<=l;++o){if(t[o]&&E(t[o].$key$)&&t[o].$key$===$.$key$){s=o;break}}}if(s>=0){h=t[s];if(h.$tag$!==$.$tag$){d=se(t&&t[i],r,s,e)}else{de(h,$);t[s]=undefined;d=h.$elm$}$=n[++i]}else{d=se(t&&t[i],r,i,e);$=n[++i]}if(d){{ve(f.$elm$).insertBefore(d,$e(f.$elm$))}}}}if(a>l){le(e,n[c+1]==null?null:n[c+1].$elm$,r,n,i,c)}else if(i>c){fe(t,a,l)}};var ce=function(e,t){if(e.$tag$===t.$tag$){if(e.$tag$==="slot"){return e.$name$===t.$name$}{return e.$key$===t.$key$}return true}return false};var $e=function(e){return e&&e["s-ol"]||e};var ve=function(e){return(e["s-ol"]?e["s-ol"]:e).parentNode};var de=function(e,t){var r=t.$elm$=e.$elm$;var n=e.$children$;var a=t.$children$;var i;if(!E(t.$text$)){{if(t.$tag$==="slot");else{Y(e,t,ie)}}if(E(n)&&E(a)){ue(r,n,t,a)}else if(E(a)){if(E(e.$text$)){r.textContent=""}le(r,null,t,a,0,a.length-1)}else if(E(n)){fe(n,0,n.length-1)}}else if(i=r["s-cr"]){i.parentNode.textContent=t.$text$}else if(e.$text$!==t.$text$){r.textContent=t.$text$}};var he=function(e,t,r,n,a,i,s,o){r=e.childNodes;for(n=0,a=r.length;n<a;n++){t=r[n];if(t.nodeType===1){if(t["s-sr"]){s=t["s-sn"];t.hidden=false;for(i=0;i<a;i++){if(r[i]["s-hn"]!==t["s-hn"]){o=r[i].nodeType;if(s!==""){if(o===1&&s===r[i].getAttribute("slot")){t.hidden=true;break}}else{if(o===1||o===3&&r[i].textContent.trim()!==""){t.hidden=true;break}}}}}he(t)}}};var me=[];var pe=function(e){var t=e.childNodes;var r=t.length;var n=0;var a=0;var i=0;var s;var o;var l;var f;for(r=t.length;n<r;n++){s=t[n];if(s["s-sr"]&&(o=s["s-cr"])){l=o.parentNode.childNodes;f=s["s-sn"];for(a=l.length-1;a>=0;a--){o=l[a];if(!o["s-cn"]&&!o["s-nr"]&&o["s-hn"]!==s["s-hn"]){i=o.nodeType;if((i===3||i===8)&&f===""||i===1&&o.getAttribute("slot")===null&&f===""||i===1&&o.getAttribute("slot")===f){if(!me.some(function(e){return e.nodeToRelocate===o})){ne=true;o["s-sn"]=f;me.push({slotRefNode:s,nodeToRelocate:o})}}}}}if(s.nodeType===1){pe(s)}}};var ge=function(e,t){if(e){e.$attrs$&&e.$attrs$.ref&&e.$attrs$.ref(t?null:e.$elm$);e.$children$&&e.$children$.forEach(function(e){ge(e,t)})}};var ye=function(e,t,r,n){te=j(e.tagName);var a=t.$vnode$||{$flags$:0};var i=q(n)?n:H(null,null,n);i.$tag$=null;i.$flags$|=4;t.$vnode$=i;i.$elm$=a.$elm$=e.shadowRoot||e;{Z=e["s-sc"]}{ee=e["s-cr"];re=l&&(r.$flags$&1)!==0;ae=ne=false}de(a,i);{if(ae){pe(i.$elm$);for(var f=0;f<me.length;f++){var u=me[f];if(!u.nodeToRelocate["s-ol"]){var c=s.createTextNode("");c["s-nr"]=u.nodeToRelocate;u.nodeToRelocate.parentNode.insertBefore(u.nodeToRelocate["s-ol"]=c,u.nodeToRelocate)}}o.$flags$|=1;for(var f=0;f<me.length;f++){var u=me[f];var $=u.slotRefNode.parentNode;var v=u.slotRefNode.nextSibling;var c=u.nodeToRelocate["s-ol"];while(c=c.previousSibling){var d=c["s-nr"];if(d&&d){if(d["s-sn"]===u.nodeToRelocate["s-sn"]){if($===d.parentNode){if((d=d.nextSibling)&&d&&!d["s-nr"]){v=d;break}}}}}if(!v&&$!==u.nodeToRelocate.parentNode||u.nodeToRelocate.nextSibling!==v){if(u.nodeToRelocate!==v){$.insertBefore(u.nodeToRelocate,v)}}}o.$flags$&=~1}if(ne){he(i.$elm$)}me.length=0}};var be=function(e,t){return __awaiter(r,void 0,void 0,function(){var r;return __generator(this,function(n){switch(n.label){case 0:if(!(e&&e[t]))return[3,4];n.label=1;case 1:n.trys.push([1,3,,4]);return[4,e[t]()];case 2:n.sent();return[3,4];case 3:r=n.sent();h(r);return[3,4];case 4:return[2]}})})};var we=function(e,t,n,a){return __awaiter(r,void 0,void 0,function(){var r;return __generator(this,function(i){switch(i.label){case 0:{t.$flags$|=16}r=t.$lazyInstance$;if(!a)return[3,2];return[4,be(r,"componentWillLoad")];case 1:i.sent();i.label=2;case 2:{L(function(){return Re(e,t,n,r,a)})}return[2]}})})};var Re=function(e,t,r,n,a){{t.$flags$&=~16}{e["s-lr"]=false}if(a){W(e,r,t.$modeName$)}{{t.$flags$|=4;try{ye(e,t,r,n.render())}catch(e){h(e)}t.$flags$&=~4}}if(g){g.updateHost(e)}{e["s-lr"]=true}{t.$flags$|=2}if(e["s-rc"].length>0){e["s-rc"].forEach(function(e){return e()});e["s-rc"].length=0}Se(e,t)};var Se=function(e,t,r){if(!e["s-al"]){var a=t.$lazyInstance$;var i=t.$ancestorComponent$;if(!(t.$flags$&512)){t.$flags$|=512;{e.classList.add(I)}if(n.cmpDidLoad){be(a,"componentDidLoad")}{t.$onReadyResolve$(e)}if(!i){s.documentElement.classList.add(I);{setTimeout(function(){return o.$flags$|=2},999)}}}else{{be(a,"componentDidUpdate")}}if(i){if(r=i["s-al"]){r.delete(e);if(r.size===0){i["s-al"]=undefined;i["s-init"]()}}t.$ancestorComponent$=undefined}}};var _e=function(e){if((o.$flags$&1)===0){var t=c(e);if(g){g.removeHost(e)}var r=t.$lazyInstance$;if(n.cmpDidUnload){be(r,"componentDidUnload")}}};var xe=function(e,t){if(e!=null&&!A(e)){if(t&4){return e==="false"?false:e===""||!!e}if(t&2){return parseFloat(e)}if(t&1){return String(e)}return e}return e};var Ne=function(e,t){return c(e).$instanceValues$.get(t)};var Te=function(e,t,r,n){var a=c(e);var i=a.$hostElement$;var s=a.$instanceValues$.get(t);var o=a.$flags$;r=xe(r,n.$members$[t][0]);if(r!==s&&(!(o&8)||s===undefined)){a.$instanceValues$.set(t,r);if(a.$lazyInstance$){if(n.$watchers$&&(o&(1|8))===1){var l=n.$watchers$[t];if(l){l.forEach(function(e){try{a.$lazyInstance$[e].call(a.$lazyInstance$,r,s,t)}catch(e){h(e)}})}}if((o&(4|2|16))===2){we(i,a,n,false)}}}};var ke=function(e,t,r){if(t.$members$){if(e.watchers){t.$watchers$=e.watchers}var n=Object.entries(t.$members$);var a=e.prototype;n.forEach(function(e){var n=e[0],i=e[1][0];if(i&31||r&2&&i&32){Object.defineProperty(a,n,{get:function(){return Ne(this,n)},set:function(e){Te(this,n,e,t)},configurable:true,enumerable:true})}else if(r&1&&i&64){Object.defineProperty(a,n,{value:function(){var e=[];for(var t=0;t<arguments.length;t++){e[t]=arguments[t]}var r=c(this);return r.$onReadyPromise$.then(function(){var t;return(t=r.$lazyInstance$)[n].apply(t,e)})}})}});if(r&1){var i=new Map;a.attributeChangedCallback=function(e,t,r){var n=i.get(e);this[n]=r===null&&typeof this[n]==="boolean"?false:r};e.observedAttributes=n.filter(function(e){var t=e[0],r=e[1];return r[0]&15}).map(function(e){var t=e[0],r=e[1];var n=r[1]||t;i.set(n,t);return n})}}return e};var Le=[];var Ce=function(e){return Le.map(function(t){return t(e)}).find(function(e){return!!e})};var Ee=function(e){return Le.push(e)};var je=function(e,n,a,i,s){return __awaiter(r,void 0,void 0,function(){var r,i,o;return __generator(this,function(l){switch(l.label){case 0:if(!((n.$flags$&256)===0))return[3,4];n.$flags$|=256;if(n.$modeName$==null){n.$modeName$=typeof a.$lazyBundleIds$!=="string"?Ce(e):""}return[4,m(a,n)];case 1:s=l.sent();if(!s.isProxied){{a.$watchers$=s.watchers}ke(s,a,2);s.isProxied=true}{n.$flags$|=8}try{new s(n)}catch(e){h(e)}{n.$flags$&=~8}if(!(!s.isStyleRegistered&&s.style))return[3,4];r=s.style;i=F(a.$tagName$,n.$modeName$);if(!(a.$flags$&8))return[3,3];return[4,t.import("./p-1563a874.system.js").then(function(e){return e.scopeCss(r,i,false)})];case 2:r=l.sent();l.label=3;case 3:D(i,r,!!(a.$flags$&1));s.isStyleRegistered=true;l.label=4;case 4:o=n.$ancestorComponent$;if(o&&!o["s-lr"]&&o["s-rc"]){o["s-rc"].push(function(){return je(e,n,a)})}else{we(e,n,a,true)}return[2]}})})};var Ae=function(e,t){if((o.$flags$&1)===0){var r=c(e);if(!(r.$flags$&1)){r.$flags$|=1;var n=void 0;if(!n){if(t.$flags$&4||t.$flags$&8){Be(e)}}{var a=e;while(a=a.parentNode||a.host){if(a["s-init"]&&!a["s-lr"]){r.$ancestorComponent$=a;(a["s-al"]=a["s-al"]||new Set).add(e);break}}}if(t.$members$){Object.entries(t.$members$).forEach(function(t){var r=t[0],n=t[1][0];if(n&31&&e.hasOwnProperty(r)){var a=e[r];delete e[r];e[r]=a}})}{k(function(){return je(e,r,t)})}}}};var Be=function(e,t){var r;{r=""}t=e["s-cr"]=s.createComment(r);t["s-cn"]=true;e.insertBefore(t,e.firstChild)};var Pe=e("b",function(e,t){if(t===void 0){t={}}var r=[];var n=t.exclude||[];var a=s.head;var f=i.customElements;var u=a.querySelector("meta[charset]");var $=s.createElement("style");Object.assign(o,t);o.$resourcesUrl$=new URL(t.resourcesUrl||"/",i.location.href).href;if(t.syncQueue){o.$flags$|=4}e.forEach(function(e){return e[1].forEach(function(t){var a={$flags$:t[0],$tagName$:t[1],$members$:t[2],$listeners$:t[3]};{a.$watchers$={}}if(!l&&a.$flags$&1){a.$flags$|=8}var i=a.$tagName$;var s=function(e){__extends(t,e);function t(t){var r=e.call(this,t)||this;t=r;{r["s-lr"]=false;r["s-rc"]=[]}v(t);if(a.$flags$&1){if(l){t.attachShadow({mode:"open"})}else if(!("shadowRoot"in t)){t.shadowRoot=t}}return r}t.prototype.connectedCallback=function(){Ae(this,a)};t.prototype.disconnectedCallback=function(){_e(this)};t.prototype["s-init"]=function(){var e=c(this);if(e.$lazyInstance$){Se(this,e)}};t.prototype["s-hmr"]=function(e){};t.prototype.forceUpdate=function(){{var e=c(this);we(this,e,a,false)}};t.prototype.componentOnReady=function(){return c(this).$onReadyPromise$};return t}(HTMLElement);a.$lazyBundleIds$=e[0];if(!n.includes(i)&&!f.get(i)){r.push(i);f.define(i,ke(s,a,1))}})});$.innerHTML=r+"{visibility:hidden}.hydrated{visibility:inherit}";$.setAttribute("data-styles","");a.insertBefore($,u?u.nextSibling:a.firstChild)});var Ue=e("g",function(e){return c(e).$hostElement$});Ee(function(e){return e.mode||e.getAttribute("mode")||"default"})}}});