(function(){var m;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
function ba(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
var ca="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},da;
if("function"==typeof Object.setPrototypeOf)da=Object.setPrototypeOf;else{var ea;a:{var ha={a:!0},ia={};try{ia.__proto__=ha;ea=ia.a;break a}catch(a){}ea=!1}da=ea?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}
var ja=da,ka="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},la="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;
function ma(a,b){if(b){for(var c=la,d=a.split("."),e=0;e<d.length-1;e++){var f=d[e];f in c||(c[f]={});c=c[f]}d=d[d.length-1];e=c[d];f=b(e);f!=e&&null!=f&&ka(c,d,{configurable:!0,writable:!0,value:f})}}
function na(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
ma("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=na(this,b,"endsWith");b+="";void 0===c&&(c=d.length);for(var e=Math.max(0,Math.min(c|0,d.length)),f=b.length;0<f&&0<e;)if(d[--e]!=b[--f])return!1;return 0>=f}});
ma("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=na(this,b,"startsWith");b+="";for(var e=d.length,f=b.length,g=Math.max(0,Math.min(c|0,d.length)),h=0;h<f&&g<e;)if(d[g++]!=b[h++])return!1;return h>=f}});
function oa(){oa=function(){};
la.Symbol||(la.Symbol=pa)}
function qa(a,b){this.f=a;ka(this,"description",{configurable:!0,writable:!0,value:b})}
qa.prototype.toString=function(){return this.f};
var pa=function(){function a(c){if(this instanceof a)throw new TypeError("Symbol is not a constructor");return new qa("jscomp_symbol_"+(c||"")+"_"+b++,c)}
var b=0;return a}();
function ra(){oa();var a=la.Symbol.iterator;a||(a=la.Symbol.iterator=la.Symbol("Symbol.iterator"));"function"!=typeof Array.prototype[a]&&ka(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return sa(aa(this))}});
ra=function(){}}
function sa(a){ra();a={next:a};a[la.Symbol.iterator]=function(){return this};
return a}
function ta(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var ua="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)ta(d,e)&&(a[e]=d[e])}return a};
ma("Object.assign",function(a){return a||ua});
ma("Promise",function(a){function b(g){this.g=0;this.i=void 0;this.f=[];var h=this.l();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.f=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.g=function(g){if(null==this.f){this.f=[];var h=this;this.i(function(){h.o()})}this.f.push(g)};
var e=la.setTimeout;c.prototype.i=function(g){e(g,0)};
c.prototype.o=function(){for(;this.f&&this.f.length;){var g=this.f;this.f=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.l(l)}}}this.f=null};
c.prototype.l=function(g){this.i(function(){throw g;})};
b.prototype.l=function(){function g(l){return function(n){k||(k=!0,l.call(h,n))}}
var h=this,k=!1;return{resolve:g(this.O),reject:g(this.o)}};
b.prototype.O=function(g){if(g===this)this.o(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.W(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.G(g):this.v(g)}};
b.prototype.G=function(g){var h=void 0;try{h=g.then}catch(k){this.o(k);return}"function"==typeof h?this.ca(h,g):this.v(g)};
b.prototype.o=function(g){this.w(2,g)};
b.prototype.v=function(g){this.w(1,g)};
b.prototype.w=function(g,h){if(0!=this.g)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.g);this.g=g;this.i=h;this.D()};
b.prototype.D=function(){if(null!=this.f){for(var g=0;g<this.f.length;++g)f.g(this.f[g]);this.f=null}};
var f=new c;b.prototype.W=function(g){var h=this.l();g.X(h.resolve,h.reject)};
b.prototype.ca=function(g,h){var k=this.l();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(r,q){return"function"==typeof r?function(u){try{l(r(u))}catch(H){n(H)}}:q}
var l,n,t=new b(function(r,q){l=r;n=q});
this.X(k(g,l),k(h,n));return t};
b.prototype["catch"]=function(g){return this.then(void 0,g)};
b.prototype.X=function(g,h){function k(){switch(l.g){case 1:g(l.i);break;case 2:h(l.i);break;default:throw Error("Unexpected state: "+l.g);}}
var l=this;null==this.f?f.g(k):this.f.push(k)};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=ba(g),n=l.next();!n.done;n=l.next())d(n.value).X(h,k)})};
b.all=function(g){var h=ba(g),k=h.next();return k.done?d([]):new b(function(l,n){function t(u){return function(H){r[u]=H;q--;0==q&&l(r)}}
var r=[],q=0;do r.push(void 0),q++,d(k.value).X(t(r.length-1),n),k=h.next();while(!k.done)})};
return b});
var va=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){void 0===e&&(e=c);
e=ca(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}();
ma("Reflect.construct",function(){return va});
ma("WeakMap",function(a){function b(k){this.f=(h+=Math.random()+1).toString();if(k){k=ba(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return"object"===l&&null!==k||"function"===l}
function e(k){if(!ta(k,g)){var l=new c;ka(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(n){if(n instanceof c)return n;e(n);return l(n)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),n=new a([[k,2],[l,3]]);if(2!=n.get(k)||3!=n.get(l))return!1;n["delete"](k);n.set(l,4);return!n.has(k)&&4==n.get(l)}catch(t){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!ta(k,g))throw Error("WeakMap key fail: "+k);k[g][this.f]=l;return this};
b.prototype.get=function(k){return d(k)&&ta(k,g)?k[g][this.f]:void 0};
b.prototype.has=function(k){return d(k)&&ta(k,g)&&ta(k[g],this.f)};
b.prototype["delete"]=function(k){return d(k)&&ta(k,g)&&ta(k[g],this.f)?delete k[g][this.f]:!1};
return b});
ma("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h.f;return sa(function(){if(l){for(;l.head!=h.f;)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;"object"==l||"function"==l?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var n=h.g[l];if(n&&ta(h.g,l))for(var t=0;t<n.length;t++){var r=n[t];if(k!==k&&r.key!==r.key||k===r.key)return{id:l,list:n,index:t,C:r}}return{id:l,list:n,index:-1,C:void 0}}
function e(h){this.g={};this.f=b();this.size=0;if(h){h=ba(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(ba([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),n=l.next();if(n.done||n.value[0]!=h||"s"!=n.value[1])return!1;n=l.next();return n.done||4!=n.value[0].x||"t"!=n.value[1]||!l.next().done?!1:!0}catch(t){return!1}}())return a;
ra();var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var l=d(this,h);l.list||(l.list=this.g[l.id]=[]);l.C?l.C.value=k:(l.C={next:this.f,previous:this.f.previous,head:this.f,key:h,value:k},l.list.push(l.C),this.f.previous.next=l.C,this.f.previous=l.C,this.size++);return this};
e.prototype["delete"]=function(h){h=d(this,h);return h.C&&h.list?(h.list.splice(h.index,1),h.list.length||delete this.g[h.id],h.C.previous.next=h.C.next,h.C.next.previous=h.C.previous,h.C.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.g={};this.f=this.f.previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).C};
e.prototype.get=function(h){return(h=d(this,h).C)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),n;!(n=l.next()).done;)n=n.value,h.call(k,n[1],n[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
ma("Set",function(a){function b(c){this.f=new Map;if(c){c=ba(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.f.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(ba([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
ra();b.prototype.add=function(c){c=0===c?0:c;this.f.set(c,c);this.size=this.f.size;return this};
b.prototype["delete"]=function(c){c=this.f["delete"](c);this.size=this.f.size;return c};
b.prototype.clear=function(){this.f.clear();this.size=0};
b.prototype.has=function(c){return this.f.has(c)};
b.prototype.entries=function(){return this.f.entries()};
b.prototype.values=function(){return this.f.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.f.forEach(function(f){return c.call(d,f,f,e)})};
return b});
ma("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==na(this,b,"includes").indexOf(b,c||0)}});
var p=this||self;function v(a){return void 0!==a}
function w(a){return"string"==typeof a}
function x(a,b){for(var c=a.split("."),d=b||p,e=0;e<c.length;e++)if(d=d[c[e]],null==d)return null;return d}
function wa(){}
function ya(a){a.fa=void 0;a.A=function(){return a.fa?a.fa:a.fa=new a}}
function za(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}
function Aa(a){return"array"==za(a)}
function Ba(a){var b=za(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Ca(a){return"function"==za(a)}
function Da(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Ea(a){return a[Fa]||(a[Fa]=++Ga)}
var Fa="closure_uid_"+(1E9*Math.random()>>>0),Ga=0;function Ha(a,b,c){return a.call.apply(a.bind,arguments)}
function Ia(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function y(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?y=Ha:y=Ia;return y.apply(null,arguments)}
function Ja(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
var Ka=Date.now||function(){return+new Date};
function z(a,b){var c=a.split("."),d=p;c[0]in d||"undefined"==typeof d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)!c.length&&v(b)?d[e]=b:d[e]&&d[e]!==Object.prototype[e]?d=d[e]:d=d[e]={}}
function A(a,b){function c(){}
c.prototype=b.prototype;a.B=b.prototype;a.prototype=new c;a.prototype.constructor=a}
;var B=window;function La(a){if(Error.captureStackTrace)Error.captureStackTrace(this,La);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}
A(La,Error);La.prototype.name="CustomError";var Ma;var Na=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if(w(a))return w(b)&&1==b.length?a.indexOf(b,0):-1;
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},C=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=w(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Oa=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,g=w(a)?a.split(""):a,h=0;h<d;h++)if(h in g){var k=g[h];
b.call(c,k,h,a)&&(e[f++]=k)}return e},Pa=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e=w(a)?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},Qa=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
C(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d},Ra=Array.prototype.some?function(a,b){return Array.prototype.some.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=w(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a))return!0;
return!1};
function Sa(a,b){a:{var c=a.length;for(var d=w(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){c=e;break a}c=-1}return 0>c?null:w(a)?a.charAt(c):a[c]}
function Ta(a,b){return 0<=Na(a,b)}
function Ua(a){return Array.prototype.concat.apply([],arguments)}
function Va(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function Wa(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Ba(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
function Ya(a,b,c,d){return Array.prototype.splice.apply(a,Za(arguments,1))}
function Za(a,b,c){return 2>=arguments.length?Array.prototype.slice.call(a,b):Array.prototype.slice.call(a,b,c)}
function $a(a){for(var b=[],c=0;c<arguments.length;c++){var d=arguments[c];if(Aa(d))for(var e=0;e<d.length;e+=8192)for(var f=$a.apply(null,Za(d,e,e+8192)),g=0;g<f.length;g++)b.push(f[g]);else b.push(d)}return b}
;function ab(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;function bb(a,b,c){for(var d in a)b.call(c,a[d],d,a)}
function cb(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b}
function db(a){var b=eb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function fb(a){for(var b in a)return!1;return!0}
function gb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(c in b)if(!(c in a))return!1;return!0}
function hb(a){var b=za(a);if("object"==b||"array"==b){if(Ca(a.clone))return a.clone();b="array"==b?[]:{};for(var c in a)b[c]=hb(a[c]);return b}return a}
var ib="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function jb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<ib.length;f++)c=ib[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;function kb(a,b){this.f=a===lb&&b||"";this.g=mb}
kb.prototype.U=!0;kb.prototype.T=function(){return this.f};
kb.prototype.toString=function(){return"Const{"+this.f+"}"};
var mb={},lb={},nb=new kb(lb,"");function ob(){this.f="";this.g=pb}
ob.prototype.U=!0;ob.prototype.T=function(){return this.f.toString()};
var pb={};var qb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
function rb(a,b){for(var c=0,d=qb(String(a)).split("."),e=qb(String(b)).split("."),f=Math.max(d.length,e.length),g=0;0==c&&g<f;g++){var h=d[g]||"",k=e[g]||"";do{h=/(\d*)(\D*)(.*)/.exec(h)||["","","",""];k=/(\d*)(\D*)(.*)/.exec(k)||["","","",""];if(0==h[0].length&&0==k[0].length)break;c=sb(0==h[1].length?0:parseInt(h[1],10),0==k[1].length?0:parseInt(k[1],10))||sb(0==h[2].length,0==k[2].length)||sb(h[2],k[2]);h=h[3];k=k[3]}while(0==c)}return c}
function sb(a,b){return a<b?-1:a>b?1:0}
;function tb(){this.f="";this.g=ub}
tb.prototype.U=!0;tb.prototype.T=function(){return this.f.toString()};
var vb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,ub={};function wb(a){var b=new tb;b.f=a;return b}
wb("about:blank");var xb;a:{var yb=p.navigator;if(yb){var zb=yb.userAgent;if(zb){xb=zb;break a}}xb=""}function D(a){return-1!=xb.indexOf(a)}
;function Ab(){return D("Firefox")||D("FxiOS")}
function Bb(){return D("Safari")&&!(Cb()||D("Coast")||D("Opera")||D("Edge")||D("Edg/")||D("OPR")||Ab()||D("Silk")||D("Android"))}
function Cb(){return(D("Chrome")||D("CriOS"))&&!D("Edge")}
function Db(){return D("Android")&&!(Cb()||Ab()||D("Opera")||D("Silk"))}
;function Eb(){this.f="";this.g=Fb}
Eb.prototype.U=!0;Eb.prototype.T=function(){return this.f.toString()};
function Gb(a){return a instanceof Eb&&a.constructor===Eb&&a.g===Fb?a.f:"type_error:SafeHtml"}
var Fb={};function Hb(a){var b=new Eb;b.f=a;return b}
Hb("<!DOCTYPE html>");var Ib=Hb("");Hb("<br>");var Jb=ab(function(){var a=document.createElement("div"),b=document.createElement("div");b.appendChild(document.createElement("div"));a.appendChild(b);b=a.firstChild.firstChild;a.innerHTML=Gb(Ib);return!b.parentElement});
function Kb(a,b){if(Jb())for(;a.lastChild;)a.removeChild(a.lastChild);a.innerHTML=Gb(b)}
function Lb(a){var b=new ob;b.f=nb instanceof kb&&nb.constructor===kb&&nb.g===mb?nb.f:"type_error:Const";a.src=(b instanceof ob&&b.constructor===ob&&b.g===pb?b.f:"type_error:TrustedResourceUrl").toString()}
;function Mb(a){return String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()})}
function Nb(a){var b=w(void 0)?"undefined".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08"):"\\s";return a.replace(new RegExp("(^"+(b?"|["+b+"]+":"")+")([a-z])","g"),function(c,d,e){return d+e.toUpperCase()})}
;function Ob(){return D("iPhone")&&!D("iPod")&&!D("iPad")}
function Pb(){return Ob()||D("iPad")||D("iPod")}
;function Qb(a){Qb[" "](a);return a}
Qb[" "]=wa;function Rb(a,b){var c=Sb;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)}
;var Tb=D("Opera"),E=D("Trident")||D("MSIE"),Ub=D("Edge"),Vb=Ub||E,Wb=D("Gecko")&&!(-1!=xb.toLowerCase().indexOf("webkit")&&!D("Edge"))&&!(D("Trident")||D("MSIE"))&&!D("Edge"),Xb=-1!=xb.toLowerCase().indexOf("webkit")&&!D("Edge"),Yb=D("Macintosh"),Zb=D("Windows"),$b=D("Android"),ac=Ob(),bc=D("iPad"),cc=D("iPod"),dc=Pb();function ec(){var a=p.document;return a?a.documentMode:void 0}
var fc;a:{var gc="",hc=function(){var a=xb;if(Wb)return/rv:([^\);]+)(\)|;)/.exec(a);if(Ub)return/Edge\/([\d\.]+)/.exec(a);if(E)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Xb)return/WebKit\/(\S+)/.exec(a);if(Tb)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
hc&&(gc=hc?hc[1]:"");if(E){var jc=ec();if(null!=jc&&jc>parseFloat(gc)){fc=String(jc);break a}}fc=gc}var kc=fc,Sb={};function lc(a){return Rb(a,function(){return 0<=rb(kc,a)})}
var mc;mc=p.document&&E?ec():void 0;var nc=Ab(),oc=Ob()||D("iPod"),pc=D("iPad"),qc=Db(),rc=Cb(),sc=Bb()&&!Pb();var tc={},uc=null;function vc(a){this.f=a||{cookie:""}}
m=vc.prototype;m.isEnabled=function(){return navigator.cookieEnabled};
m.set=function(a,b,c,d,e,f){if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');v(c)||(c=-1);e=e?";domain="+e:"";d=d?";path="+d:"";f=f?";secure":"";c=0>c?"":0==c?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Ka()+1E3*c)).toUTCString();this.f.cookie=a+"="+b+e+d+c+f};
m.get=function(a,b){for(var c=a+"=",d=(this.f.cookie||"").split(";"),e=0,f;e<d.length;e++){f=qb(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
m.remove=function(a,b,c){var d=v(this.get(a));this.set(a,"",0,b,c);return d};
m.isEmpty=function(){return!this.f.cookie};
m.clear=function(){for(var a=(this.f.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=qb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var wc=new vc("undefined"==typeof document?null:document);var xc=!Wb&&!E||E&&9<=Number(mc)||Wb&&lc("1.9.1"),yc=E&&!lc("9");function G(a,b){this.x=v(a)?a:0;this.y=v(b)?b:0}
m=G.prototype;m.clone=function(){return new G(this.x,this.y)};
m.equals=function(a){return a instanceof G&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
function zc(a,b){return new G(a.x-b.x,a.y-b.y)}
m.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
m.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
m.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};function Ac(a,b){this.width=a;this.height=b}
m=Ac.prototype;m.clone=function(){return new Ac(this.width,this.height)};
m.aspectRatio=function(){return this.width/this.height};
m.isEmpty=function(){return!(this.width*this.height)};
m.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
m.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
m.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Bc(a){return a?new Cc(Dc(a)):Ma||(Ma=new Cc)}
function I(a){return w(a)?document.getElementById(a):a}
function Ec(a,b){var c=b||document;return c.querySelectorAll&&c.querySelector?c.querySelectorAll("."+a):Fc(document,"*",a,b)}
function J(a,b){var c=b||document;if(c.getElementsByClassName)c=c.getElementsByClassName(a)[0];else{c=document;var d=b||c;c=d.querySelectorAll&&d.querySelector&&a?d.querySelector(a?"."+a:""):Fc(c,"*",a,b)[0]||null}return c||null}
function Fc(a,b,c,d){a=d||a;b=b&&"*"!=b?String(b).toUpperCase():"";if(a.querySelectorAll&&a.querySelector&&(b||c))return a.querySelectorAll(b+(c?"."+c:""));if(c&&a.getElementsByClassName){a=a.getElementsByClassName(c);if(b){d={};for(var e=0,f=0,g;g=a[f];f++)b==g.nodeName&&(d[e++]=g);d.length=e;return d}return a}a=a.getElementsByTagName(b||"*");if(c){d={};for(f=e=0;g=a[f];f++)b=g.className,"function"==typeof b.split&&Ta(b.split(/\s+/),c)&&(d[e++]=g);d.length=e;return d}return a}
function Gc(a,b){bb(b,function(c,d){c&&"object"==typeof c&&c.U&&(c=c.T());"style"==d?a.style.cssText=c:"class"==d?a.className=c:"for"==d?a.htmlFor=c:Hc.hasOwnProperty(d)?a.setAttribute(Hc[d],c):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,c):a[d]=c})}
var Hc={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};function Ic(a){a=a.document;a=Jc(a)?a.documentElement:a.body;return new Ac(a.clientWidth,a.clientHeight)}
function Kc(a){var b=Lc(a);a=Mc(a);return E&&lc("10")&&a.pageYOffset!=b.scrollTop?new G(b.scrollLeft,b.scrollTop):new G(a.pageXOffset||b.scrollLeft,a.pageYOffset||b.scrollTop)}
function Lc(a){return a.scrollingElement?a.scrollingElement:!Xb&&Jc(a)?a.documentElement:a.body||a.documentElement}
function Mc(a){return a.parentWindow||a.defaultView}
function Jc(a){return"CSS1Compat"==a.compatMode}
function Nc(a){a&&a.parentNode&&a.parentNode.removeChild(a)}
function Oc(a){return xc&&void 0!=a.children?a.children:Oa(a.childNodes,function(b){return 1==b.nodeType})}
function Pc(a){return Da(a)&&1==a.nodeType}
function Qc(a,b){if(!a||!b)return!1;if(a.contains&&1==b.nodeType)return a==b||a.contains(b);if("undefined"!=typeof a.compareDocumentPosition)return a==b||!!(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a}
function Dc(a){return 9==a.nodeType?a:a.ownerDocument||a.document}
function Rc(a,b){if("textContent"in a)a.textContent=b;else if(3==a.nodeType)a.data=String(b);else if(a.firstChild&&3==a.firstChild.nodeType){for(;a.lastChild!=a.firstChild;)a.removeChild(a.lastChild);a.firstChild.data=String(b)}else{for(var c;c=a.firstChild;)a.removeChild(c);a.appendChild(Dc(a).createTextNode(String(b)))}}
function Sc(a,b){var c=[];return Tc(a,b,c,!0)?c[0]:void 0}
function Tc(a,b,c,d){if(null!=a)for(a=a.firstChild;a;){if(b(a)&&(c.push(a),d)||Tc(a,b,c,d))return!0;a=a.nextSibling}return!1}
var Uc={SCRIPT:1,STYLE:1,HEAD:1,IFRAME:1,OBJECT:1},Vc={IMG:" ",BR:"\n"};function Wc(a){var b;if((b="A"==a.tagName&&a.hasAttribute("href")||"INPUT"==a.tagName||"TEXTAREA"==a.tagName||"SELECT"==a.tagName||"BUTTON"==a.tagName?!a.disabled&&(!Xc(a)||Zc(a)):Xc(a)&&Zc(a))&&E){var c;!Ca(a.getBoundingClientRect)||E&&null==a.parentElement?c={height:a.offsetHeight,width:a.offsetWidth}:c=a.getBoundingClientRect();a=null!=c&&0<c.height&&0<c.width}else a=b;return a}
function Xc(a){return E&&!lc("9")?(a=a.getAttributeNode("tabindex"),null!=a&&a.specified):a.hasAttribute("tabindex")}
function Zc(a){a=a.tabIndex;return"number"==typeof a&&0<=a&&32768>a}
function $c(a){if(yc&&null!==a&&"innerText"in a)a=a.innerText.replace(/(\r\n|\r|\n)/g,"\n");else{var b=[];ad(a,b,!0);a=b.join("")}a=a.replace(/ \xAD /g," ").replace(/\xAD/g,"");a=a.replace(/\u200B/g,"");yc||(a=a.replace(/ +/g," "));" "!=a&&(a=a.replace(/^\s*/,""));return a}
function ad(a,b,c){if(!(a.nodeName in Uc))if(3==a.nodeType)c?b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g,"")):b.push(a.nodeValue);else if(a.nodeName in Vc)b.push(Vc[a.nodeName]);else for(a=a.firstChild;a;)ad(a,b,c),a=a.nextSibling}
function bd(a,b,c,d){if(!b&&!c)return null;var e=b?String(b).toUpperCase():null;return cd(a,function(f){return(!e||f.nodeName==e)&&(!c||w(f.className)&&Ta(f.className.split(/\s+/),c))},!0,d)}
function K(a,b){return bd(a,null,b,void 0)}
function cd(a,b,c,d){a&&!c&&(a=a.parentNode);for(c=0;a&&(null==d||c<=d);){if(b(a))return a;a=a.parentNode;c++}return null}
function Cc(a){this.f=a||p.document||document}
Cc.prototype.getElementsByTagName=function(a,b){return(b||this.f).getElementsByTagName(String(a))};
Cc.prototype.createElement=function(a){return this.f.createElement(String(a))};
Cc.prototype.appendChild=function(a,b){a.appendChild(b)};
Cc.prototype.isElement=Pc;var dd=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function ed(a){return a.match(dd)}
function fd(a){return a?decodeURI(a):a}
function gd(a,b){if(!b)return a;var c=a.indexOf("#");0>c&&(c=a.length);var d=a.indexOf("?");if(0>d||d>c){d=c;var e=""}else e=a.substring(d+1,c);c=[a.substr(0,d),e,a.substr(c)];d=c[1];c[1]=b?d?d+"&"+b:b:d;return c[0]+(c[1]?"?"+c[1]:"")+c[2]}
function hd(a,b,c){if(Aa(b))for(var d=0;d<b.length;d++)hd(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function id(a,b){for(var c=[],d=b||0;d<a.length;d+=2)hd(a[d],a[d+1],c);return c.join("&")}
function jd(a){var b=[],c;for(c in a)hd(c,a[c],b);return b.join("&")}
function kd(a,b){var c=2==arguments.length?id(arguments[1],0):id(arguments,1);return gd(a,c)}
function ld(a,b){var c=jd(b);return gd(a,c)}
;function md(a){var b=nd;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a.call(void 0,b[c],c,b)}
function od(){var a=[];md(function(b){a.push(b)});
return a}
var nd={Db:"allow-forms",Eb:"allow-modals",Fb:"allow-orientation-lock",Gb:"allow-pointer-lock",Hb:"allow-popups",Ib:"allow-popups-to-escape-sandbox",Jb:"allow-presentation",Kb:"allow-same-origin",Lb:"allow-scripts",Mb:"allow-top-navigation",Nb:"allow-top-navigation-by-user-activation"},pd=ab(function(){return od()});
function qd(){var a=document.createElement("IFRAME").sandbox,b=a&&a.supports;if(!b)return{};var c={};C(pd(),function(d){b.call(a,d)&&(c[d]=!0)});
return c}
;function rd(a,b,c,d){this.top=a;this.right=b;this.bottom=c;this.left=d}
m=rd.prototype;m.getHeight=function(){return this.bottom-this.top};
m.clone=function(){return new rd(this.top,this.right,this.bottom,this.left)};
m.ceil=function(){this.top=Math.ceil(this.top);this.right=Math.ceil(this.right);this.bottom=Math.ceil(this.bottom);this.left=Math.ceil(this.left);return this};
m.floor=function(){this.top=Math.floor(this.top);this.right=Math.floor(this.right);this.bottom=Math.floor(this.bottom);this.left=Math.floor(this.left);return this};
m.round=function(){this.top=Math.round(this.top);this.right=Math.round(this.right);this.bottom=Math.round(this.bottom);this.left=Math.round(this.left);return this};function sd(a,b,c,d){this.left=a;this.top=b;this.width=c;this.height=d}
sd.prototype.clone=function(){return new sd(this.left,this.top,this.width,this.height)};
sd.prototype.ceil=function(){this.left=Math.ceil(this.left);this.top=Math.ceil(this.top);this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
sd.prototype.floor=function(){this.left=Math.floor(this.left);this.top=Math.floor(this.top);this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
sd.prototype.round=function(){this.left=Math.round(this.left);this.top=Math.round(this.top);this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function td(a,b,c){if(w(b))(b=ud(a,b))&&(a.style[b]=c);else for(var d in b){c=a;var e=b[d],f=ud(c,d);f&&(c.style[f]=e)}}
var vd={};function ud(a,b){var c=vd[b];if(!c){var d=Mb(b);c=d;void 0===a.style[d]&&(d=(Xb?"Webkit":Wb?"Moz":E?"ms":Tb?"O":null)+Nb(d),void 0!==a.style[d]&&(c=d));vd[b]=c}return c}
function wd(a,b){var c=Dc(a);return c.defaultView&&c.defaultView.getComputedStyle&&(c=c.defaultView.getComputedStyle(a,null))?c[b]||c.getPropertyValue(b)||"":""}
function xd(a,b){return wd(a,b)||(a.currentStyle?a.currentStyle[b]:null)||a.style&&a.style[b]}
function yd(a){try{var b=a.getBoundingClientRect()}catch(c){return{left:0,top:0,right:0,bottom:0}}E&&a.ownerDocument.body&&(a=a.ownerDocument,b.left-=a.documentElement.clientLeft+a.body.clientLeft,b.top-=a.documentElement.clientTop+a.body.clientTop);return b}
function zd(a){if(E&&!(8<=Number(mc)))return a.offsetParent;var b=Dc(a),c=xd(a,"position"),d="fixed"==c||"absolute"==c;for(a=a.parentNode;a&&a!=b;a=a.parentNode)if(11==a.nodeType&&a.host&&(a=a.host),c=xd(a,"position"),d=d&&"static"==c&&a!=b.documentElement&&a!=b.body,!d&&(a.scrollWidth>a.clientWidth||a.scrollHeight>a.clientHeight||"fixed"==c||"absolute"==c||"relative"==c))return a;return null}
function Ad(a){for(var b=new rd(0,Infinity,Infinity,0),c=Bc(a),d=c.f.body,e=c.f.documentElement,f=Lc(c.f);a=zd(a);)if(!(E&&0==a.clientWidth||Xb&&0==a.clientHeight&&a==d)&&a!=d&&a!=e&&"visible"!=xd(a,"overflow")){var g=Bd(a),h=new G(a.clientLeft,a.clientTop);g.x+=h.x;g.y+=h.y;b.top=Math.max(b.top,g.y);b.right=Math.min(b.right,g.x+a.clientWidth);b.bottom=Math.min(b.bottom,g.y+a.clientHeight);b.left=Math.max(b.left,g.x)}d=f.scrollLeft;f=f.scrollTop;b.left=Math.max(b.left,d);b.top=Math.max(b.top,f);c=
Ic(Mc(c.f)||window);b.right=Math.min(b.right,d+c.width);b.bottom=Math.min(b.bottom,f+c.height);return 0<=b.top&&0<=b.left&&b.bottom>b.top&&b.right>b.left?b:null}
function Bd(a){var b=Dc(a),c=new G(0,0);var d=b?Dc(b):document;d=!E||9<=Number(mc)||Jc(Bc(d).f)?d.documentElement:d.body;if(a==d)return c;a=yd(a);b=Kc(Bc(b).f);c.x=a.left+b.x;c.y=a.top+b.y;return c}
function Cd(a){a=yd(a);return new G(a.left,a.top)}
function Dd(a,b){"number"==typeof a&&(a=(b?Math.round(a):a)+"px");return a}
function Ed(a){var b=Fd;if("none"!=xd(a,"display"))return b(a);var c=a.style,d=c.display,e=c.visibility,f=c.position;c.visibility="hidden";c.position="absolute";c.display="inline";a=b(a);c.display=d;c.position=f;c.visibility=e;return a}
function Fd(a){var b=a.offsetWidth,c=a.offsetHeight,d=Xb&&!b&&!c;return v(b)&&!d||!a.getBoundingClientRect?new Ac(b,c):(a=yd(a),new Ac(a.right-a.left,a.bottom-a.top))}
function Gd(a){var b=Bd(a);a=Ed(a);return new sd(b.x,b.y,a.width,a.height)}
function Hd(a){return"rtl"==xd(a,"direction")}
function Id(a,b){if(/^\d+px?$/.test(b))return parseInt(b,10);var c=a.style.left,d=a.runtimeStyle.left;a.runtimeStyle.left=a.currentStyle.left;a.style.left=b;var e=a.style.pixelLeft;a.style.left=c;a.runtimeStyle.left=d;return+e}
function Jd(a,b){var c=a.currentStyle?a.currentStyle[b]:null;return c?Id(a,c):0}
var Kd={thin:2,medium:4,thick:6};function Ld(a,b){if("none"==(a.currentStyle?a.currentStyle[b+"Style"]:null))return 0;var c=a.currentStyle?a.currentStyle[b+"Width"]:null;return c in Kd?Kd[c]:Id(a,c)}
;var Md=(new Date).getTime();function Nd(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"file"!==a&&"android-app"!==a&&"chrome-search"!==a&&"app"!==a)throw Error("Invalid URI scheme in origin: "+a);c="";var d=b.indexOf(":");if(-1!=d){var e=
b.substring(d+1);b=b.substring(0,d);if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c}
;/*
 gapi.loader.OBJECT_CREATE_TEST_OVERRIDE &&*/
var Od=window,Pd=document,Qd=Od.location;function Rd(){}
var Sd=/\[native code\]/;function L(a,b,c){return a[b]=a[b]||c}
function Td(a){a=a.sort();for(var b=[],c=void 0,d=0;d<a.length;d++){var e=a[d];e!=c&&b.push(e);c=e}return b}
function Ud(){var a;if((a=Object.create)&&Sd.test(a))a=a(null);else{a={};for(var b in a)a[b]=void 0}return a}
var Vd=L(Od,"gapi",{});var M;M=L(Od,"___jsl",Ud());L(M,"I",0);L(M,"hel",10);function Wd(){var a=Qd.href;if(M.dpo)var b=M.h;else{b=M.h;var c=RegExp("([#].*&|[#])jsh=([^&#]*)","g"),d=RegExp("([?#].*&|[?#])jsh=([^&#]*)","g");if(a=a&&(c.exec(a)||d.exec(a)))try{b=decodeURIComponent(a[2])}catch(e){}}return b}
function Xd(a){var b=L(M,"PQ",[]);M.PQ=[];var c=b.length;if(0===c)a();else for(var d=0,e=function(){++d===c&&a()},f=0;f<c;f++)b[f](e)}
function Yd(a){return L(L(M,"H",Ud()),a,Ud())}
;function Zd(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;n=l=0}
function b(t){for(var r=g,q=0;64>q;q+=4)r[q/4]=t[q]<<24|t[q+1]<<16|t[q+2]<<8|t[q+3];for(q=16;80>q;q++)t=r[q-3]^r[q-8]^r[q-14]^r[q-16],r[q]=(t<<1|t>>>31)&4294967295;t=e[0];var u=e[1],H=e[2],F=e[3],Xa=e[4];for(q=0;80>q;q++){if(40>q)if(20>q){var fa=F^u&(H^F);var xa=1518500249}else fa=u^H^F,xa=1859775393;else 60>q?(fa=u&H|F&(u|H),xa=2400959708):(fa=u^H^F,xa=3395469782);fa=((t<<5|t>>>27)&4294967295)+fa+Xa+xa+r[q]&4294967295;Xa=F;F=H;H=(u<<30|u>>>2)&4294967295;u=t;t=fa}e[0]=e[0]+t&4294967295;e[1]=e[1]+
u&4294967295;e[2]=e[2]+H&4294967295;e[3]=e[3]+F&4294967295;e[4]=e[4]+Xa&4294967295}
function c(t,r){if("string"===typeof t){t=unescape(encodeURIComponent(t));for(var q=[],u=0,H=t.length;u<H;++u)q.push(t.charCodeAt(u));t=q}r||(r=t.length);q=0;if(0==l)for(;q+64<r;)b(t.slice(q,q+64)),q+=64,n+=64;for(;q<r;)if(f[l++]=t[q++],n++,64==l)for(l=0,b(f);q+64<r;)b(t.slice(q,q+64)),q+=64,n+=64}
function d(){var t=[],r=8*n;56>l?c(h,56-l):c(h,64-(l-56));for(var q=63;56<=q;q--)f[q]=r&255,r>>>=8;b(f);for(q=r=0;5>q;q++)for(var u=24;0<=u;u-=8)t[r++]=e[q]>>u&255;return t}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,n;a();return{reset:a,update:c,digest:d,Ua:function(){for(var t=d(),r="",q=0;q<t.length;q++)r+="0123456789ABCDEF".charAt(Math.floor(t[q]/16))+"0123456789ABCDEF".charAt(t[q]%16);return r}}}
;function $d(a,b,c){var d=[],e=[];if(1==(Aa(c)?2:1))return e=[b,a],C(d,function(h){e.push(h)}),ae(e.join(" "));
var f=[],g=[];C(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];C(d,function(h){e.push(h)});
a=ae(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function ae(a){var b=Zd();b.update(a);return b.Ua().toLowerCase()}
;function be(a){var b=Nd(String(p.location.href)),c=p.__OVERRIDE_SID;null==c&&(c=(new vc(document)).get("SID"));if(c&&(b=(c=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:"))?p.__SAPISID:p.__APISID,null==b&&(b=(new vc(document)).get(c?"SAPISID":"APISID")),b)){c=c?"SAPISIDHASH":"APISIDHASH";var d=String(p.location.href);return d&&b&&c?[c,$d(Nd(d),b,a||null)].join(" "):null}return null}
;var ce=L(M,"perf",Ud());L(ce,"g",Ud());var de=L(ce,"i",Ud());L(ce,"r",[]);Ud();Ud();function ee(a,b,c){b&&0<b.length&&(b=fe(b),c&&0<c.length&&(b+="___"+fe(c)),28<b.length&&(b=b.substr(0,28)+(b.length-28)),c=b,b=L(de,"_p",Ud()),L(b,c,Ud())[a]=(new Date).getTime(),b=ce.r,"function"===typeof b?b(a,"_p",c):b.push([a,"_p",c]))}
function fe(a){return a.join("__").replace(/\./g,"_").replace(/\-/g,"_").replace(/,/g,"_")}
;var ge=Ud(),he=[];function ie(a){throw Error("Bad hint"+(a?": "+a:""));}
he.push(["jsl",function(a){for(var b in a)if(Object.prototype.hasOwnProperty.call(a,b)){var c=a[b];"object"==typeof c?M[b]=L(M,b,[]).concat(c):L(M,b,c)}if(b=a.u)a=L(M,"us",[]),a.push(b),(b=/^https:(.*)$/.exec(b))&&a.push("http:"+b[1])}]);
var je=/^(\/[a-zA-Z0-9_\-]+)+$/,ke=[/\/amp\//,/\/amp$/,/^\/amp$/],le=/^[a-zA-Z0-9\-_\.,!]+$/,me=/^gapi\.loaded_[0-9]+$/,ne=/^[a-zA-Z0-9,._-]+$/;function oe(a,b,c,d){var e=a.split(";"),f=e.shift(),g=ge[f],h=null;g?h=g(e,b,c,d):ie("no hint processor for: "+f);h||ie("failed to generate load url");b=h;c=b.match(pe);(d=b.match(qe))&&1===d.length&&re.test(b)&&c&&1===c.length||ie("failed sanity: "+a);return h}
function se(a,b,c,d){function e(f){return encodeURIComponent(f).replace(/%2C/g,",")}
a=te(a);me.test(c)||ie("invalid_callback");b=ue(b);d=d&&d.length?ue(d):null;return[encodeURIComponent(a.pathPrefix).replace(/%2C/g,",").replace(/%2F/g,"/"),"/k=",e(a.version),"/m=",e(b),d?"/exm="+e(d):"","/rt=j/sv=1/d=1/ed=1",a.ia?"/am="+e(a.ia):"",a.Fa?"/rs="+e(a.Fa):"",a.Pa?"/t="+e(a.Pa):"","/cb=",e(c)].join("")}
function te(a){"/"!==a.charAt(0)&&ie("relative path");for(var b=a.substring(1).split("/"),c=[];b.length;){a=b.shift();if(!a.length||0==a.indexOf("."))ie("empty/relative directory");else if(0<a.indexOf("=")){b.unshift(a);break}c.push(a)}a={};for(var d=0,e=b.length;d<e;++d){var f=b[d].split("="),g=decodeURIComponent(f[0]),h=decodeURIComponent(f[1]);2==f.length&&g&&h&&(a[g]=a[g]||h)}b="/"+c.join("/");je.test(b)||ie("invalid_prefix");c=0;for(d=ke.length;c<d;++c)ke[c].test(b)&&ie("invalid_prefix");c=ve(a,
"k",!0);d=ve(a,"am");e=ve(a,"rs");a=ve(a,"t");return{pathPrefix:b,version:c,ia:d,Fa:e,Pa:a}}
function ue(a){for(var b=[],c=0,d=a.length;c<d;++c){var e=a[c].replace(/\./g,"_").replace(/-/g,"_");ne.test(e)&&b.push(e)}return b.join(",")}
function ve(a,b,c){a=a[b];!a&&c&&ie("missing: "+b);if(a){if(le.test(a))return a;ie("invalid: "+b)}return null}
var re=/^https?:\/\/[a-z0-9_.-]+\.google(rs)?\.com(:\d+)?\/[a-zA-Z0-9_.,!=\-\/]+$/,qe=/\/cb=/g,pe=/\/\//g;function we(){var a=Wd();if(!a)throw Error("Bad hint");return a}
ge.m=function(a,b,c,d){(a=a[0])||ie("missing_hint");return"https://apis.google.com"+se(a,b,c,d)};
var xe=decodeURI("%73cript"),ye=/^[-+_0-9\/A-Za-z]+={0,2}$/;function ze(a,b){for(var c=[],d=0;d<a.length;++d){var e=a[d],f;if(f=e){a:{for(f=0;f<b.length;f++)if(b[f]===e)break a;f=-1}f=0>f}f&&c.push(e)}return c}
function Ae(){var a=M.nonce;return void 0!==a?a&&a===String(a)&&a.match(ye)?a:M.nonce=null:Pd.querySelector?(a=Pd.querySelector("script[nonce]"))?(a=a.nonce||a.getAttribute("nonce")||"",a&&a===String(a)&&a.match(ye)?M.nonce=a:M.nonce=null):null:null}
function Be(a){if("loading"!=Pd.readyState)Ce(a);else{var b=Ae(),c="";null!==b&&(c=' nonce="'+b+'"');a="<"+xe+' src="'+encodeURI(a)+'"'+c+"></"+xe+">";Pd.write(a)}}
function Ce(a){var b=Pd.createElement(xe);b.setAttribute("src",a);a=Ae();null!==a&&b.setAttribute("nonce",a);b.async="true";(a=Pd.getElementsByTagName(xe)[0])?a.parentNode.insertBefore(b,a):(Pd.head||Pd.body||Pd.documentElement).appendChild(b)}
function De(a,b){var c=b&&b._c;if(c)for(var d=0;d<he.length;d++){var e=he[d][0],f=he[d][1];f&&Object.prototype.hasOwnProperty.call(c,e)&&f(c[e],a,b)}}
function Ee(a,b,c){Fe(function(){var d=b===Wd()?L(Vd,"_",Ud()):Ud();d=L(Yd(b),"_",d);a(d)},c)}
function Ge(a,b){var c=b||{};"function"==typeof b&&(c={},c.callback=b);De(a,c);var d=a?a.split(":"):[],e=c.h||we(),f=L(M,"ah",Ud());if(f["::"]&&d.length){for(var g=[],h=null;h=d.shift();){var k=h.split(".");k=f[h]||f[k[1]&&"ns:"+k[0]||""]||e;var l=g.length&&g[g.length-1]||null,n=l;l&&l.hint==k||(n={hint:k,features:[]},g.push(n));n.features.push(h)}var t=g.length;if(1<t){var r=c.callback;r&&(c.callback=function(){0==--t&&r()})}for(;d=g.shift();)He(d.features,c,d.hint)}else He(d||[],c,e)}
function He(a,b,c){function d(fa,xa){if(t)return 0;Od.clearTimeout(n);r.push.apply(r,u);var ic=((Vd||{}).config||{}).update;ic?ic(f):f&&L(M,"cu",[]).push(f);if(xa){ee("me0",fa,q);try{Ee(xa,c,l)}finally{ee("me1",fa,q)}}return 1}
a=Td(a)||[];var e=b.callback,f=b.config,g=b.timeout,h=b.ontimeout,k=b.onerror,l=void 0;"function"==typeof k&&(l=k);var n=null,t=!1;if(g&&!h||!g&&h)throw"Timeout requires both the timeout parameter and ontimeout parameter to be set";k=L(Yd(c),"r",[]).sort();var r=L(Yd(c),"L",[]).sort(),q=[].concat(k);0<g&&(n=Od.setTimeout(function(){t=!0;h()},g));
var u=ze(a,r);if(u.length){u=ze(a,k);var H=L(M,"CP",[]),F=H.length;H[F]=function(fa){function xa(){var Yc=H[F+1];Yc&&Yc()}
function ic(Yc){H[F]=null;d(u,fa)&&Xd(function(){e&&e();Yc()})}
if(!fa)return 0;ee("ml1",u,q);0<F&&H[F-1]?H[F]=function(){ic(xa)}:ic(xa)};
if(u.length){var Xa="loaded_"+M.I++;Vd[Xa]=function(fa){H[F](fa);Vd[Xa]=null};
a=oe(c,u,"gapi."+Xa,k);k.push.apply(k,u);ee("ml0",u,q);b.sync||Od.___gapisync?Be(a):Ce(a)}else H[F](Rd)}else d(u)&&e&&e()}
function Fe(a,b){if(M.hee&&0<M.hel)try{return a()}catch(c){b&&b(c),M.hel--,Ge("debug_error",function(){try{window.___jsl.hefn(c)}catch(d){throw c;}})}else try{return a()}catch(c){throw b&&b(c),c;
}}
Vd.load=function(a,b){return Fe(function(){return Ge(a,b)})};function Ie(a,b){this.i=a;this.l=b;this.g=0;this.f=null}
Ie.prototype.get=function(){if(0<this.g){this.g--;var a=this.f;this.f=a.next;a.next=null}else a=this.i();return a};
function Je(a,b){a.l(b);100>a.g&&(a.g++,b.next=a.f,a.f=b)}
;function Ke(a){p.setTimeout(function(){throw a;},0)}
var Le;
function Me(){var a=p.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!D("Presto")&&(a=function(){var e=document.createElement("IFRAME");e.style.display="none";Lb(e);document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.write(Gb(Ib));e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=y(function(k){if(("*"==h||k.origin==h)&&k.data==
g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!D("Trident")&&!D("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(v(c.next)){c=c.next;var e=c.ka;c.ka=null;e()}};
return function(e){d.next={ka:e};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(e){var f=document.createElement("SCRIPT");
f.onreadystatechange=function(){f.onreadystatechange=null;f.parentNode.removeChild(f);f=null;e();e=null};
document.documentElement.appendChild(f)}:function(e){p.setTimeout(e,0)}}
;function Ne(){this.g=this.f=null}
var Pe=new Ie(function(){return new Oe},function(a){a.reset()});
Ne.prototype.add=function(a,b){var c=Pe.get();c.set(a,b);this.g?this.g.next=c:this.f=c;this.g=c};
Ne.prototype.remove=function(){var a=null;this.f&&(a=this.f,this.f=this.f.next,this.f||(this.g=null),a.next=null);return a};
function Oe(){this.next=this.scope=this.f=null}
Oe.prototype.set=function(a,b){this.f=a;this.scope=b;this.next=null};
Oe.prototype.reset=function(){this.next=this.scope=this.f=null};function Qe(a,b){Re||Se();Te||(Re(),Te=!0);Ue.add(a,b)}
var Re;function Se(){if(p.Promise&&p.Promise.resolve){var a=p.Promise.resolve(void 0);Re=function(){a.then(Ve)}}else Re=function(){var b=Ve;
!Ca(p.setImmediate)||p.Window&&p.Window.prototype&&!D("Edge")&&p.Window.prototype.setImmediate==p.setImmediate?(Le||(Le=Me()),Le(b)):p.setImmediate(b)}}
var Te=!1,Ue=new Ne;function Ve(){for(var a;a=Ue.remove();){try{a.f.call(a.scope)}catch(b){Ke(b)}Je(Pe,a)}Te=!1}
;function We(){this.g=-1}
;function Xe(){this.g=-1;this.g=64;this.f=[];this.v=[];this.w=[];this.l=[];this.l[0]=128;for(var a=1;a<this.g;++a)this.l[a]=0;this.o=this.i=0;this.reset()}
A(Xe,We);Xe.prototype.reset=function(){this.f[0]=1732584193;this.f[1]=4023233417;this.f[2]=2562383102;this.f[3]=271733878;this.f[4]=3285377520;this.o=this.i=0};
function Ye(a,b,c){c||(c=0);var d=a.w;if(w(b))for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.f[0];c=a.f[1];var g=a.f[2],h=a.f[3],k=a.f[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else 60>e?(f=c&g|h&(c|g),l=2400959708):(f=c^g^h,l=
3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.f[0]=a.f[0]+b&4294967295;a.f[1]=a.f[1]+c&4294967295;a.f[2]=a.f[2]+g&4294967295;a.f[3]=a.f[3]+h&4294967295;a.f[4]=a.f[4]+k&4294967295}
Xe.prototype.update=function(a,b){if(null!=a){v(b)||(b=a.length);for(var c=b-this.g,d=0,e=this.v,f=this.i;d<b;){if(0==f)for(;d<=c;)Ye(this,a,d),d+=this.g;if(w(a))for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.g){Ye(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.g){Ye(this,e);f=0;break}}this.i=f;this.o+=b}};
Xe.prototype.digest=function(){var a=[],b=8*this.o;56>this.i?this.update(this.l,56-this.i):this.update(this.l,this.g-(this.i-56));for(var c=this.g-1;56<=c;c--)this.v[c]=b&255,b/=256;Ye(this,this.v);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.f[c]>>d&255,++b;return a};function Ze(){this.i=this.i;this.l=this.l}
Ze.prototype.i=!1;Ze.prototype.Z=function(){return this.i};
Ze.prototype.dispose=function(){this.i||(this.i=!0,this.ea())};
Ze.prototype.ea=function(){if(this.l)for(;this.l.length;)this.l.shift()()};
function $e(a){a&&"function"==typeof a.dispose&&a.dispose()}
;function af(a){if(a.classList)return a.classList;a=a.className;return w(a)&&a.match(/\S+/g)||[]}
function N(a,b){return a.classList?a.classList.contains(b):Ta(af(a),b)}
function O(a,b){a.classList?a.classList.add(b):N(a,b)||(a.className+=0<a.className.length?" "+b:b)}
function bf(a,b){if(a.classList)C(b,function(e){O(a,e)});
else{var c={};C(af(a),function(e){c[e]=!0});
C(b,function(e){c[e]=!0});
a.className="";for(var d in c)a.className+=0<a.className.length?" "+d:d}}
function P(a,b){a.classList?a.classList.remove(b):N(a,b)&&(a.className=Oa(af(a),function(c){return c!=b}).join(" "))}
function cf(a,b){a.classList?C(b,function(c){P(a,c)}):a.className=Oa(af(a),function(c){return!Ta(b,c)}).join(" ")}
function df(a,b,c){c?O(a,b):P(a,b)}
function ef(a,b,c){N(a,b)&&(P(a,b),O(a,c))}
function ff(a,b){var c=!N(a,b);df(a,b,c)}
;var gf=!E&&!Bb();function hf(a,b){if(/-[a-z]/.test(b))return null;if(gf&&a.dataset){if(Db()&&!(b in a.dataset))return null;var c=a.dataset[b];return void 0===c?null:c}return a.getAttribute("data-"+String(b).replace(/([A-Z])/g,"-$1").toLowerCase())}
;var jf="StopIteration"in p?p.StopIteration:{message:"StopIteration",stack:""};function kf(){}
kf.prototype.next=function(){throw jf;};
kf.prototype.L=function(){return this};
function lf(a){if(a instanceof kf)return a;if("function"==typeof a.L)return a.L(!1);if(Ba(a)){var b=0,c=new kf;c.next=function(){for(;;){if(b>=a.length)throw jf;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function mf(a,b){if(Ba(a))try{C(a,b,void 0)}catch(c){if(c!==jf)throw c;}else{a=lf(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==jf)throw c;}}}
function nf(a){if(Ba(a))return Va(a);a=lf(a);var b=[];mf(a,function(c){b.push(c)});
return b}
;function of(a,b){this.i={};this.f=[];this.M=this.g=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof of)for(c=pf(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function pf(a){qf(a);return a.f.concat()}
m=of.prototype;m.equals=function(a,b){if(this===a)return!0;if(this.g!=a.g)return!1;var c=b||rf;qf(this);for(var d,e=0;d=this.f[e];e++)if(!c(this.get(d),a.get(d)))return!1;return!0};
function rf(a,b){return a===b}
m.isEmpty=function(){return 0==this.g};
m.clear=function(){this.i={};this.M=this.g=this.f.length=0};
m.remove=function(a){return Object.prototype.hasOwnProperty.call(this.i,a)?(delete this.i[a],this.g--,this.M++,this.f.length>2*this.g&&qf(this),!0):!1};
function qf(a){if(a.g!=a.f.length){for(var b=0,c=0;b<a.f.length;){var d=a.f[b];Object.prototype.hasOwnProperty.call(a.i,d)&&(a.f[c++]=d);b++}a.f.length=c}if(a.g!=a.f.length){var e={};for(c=b=0;b<a.f.length;)d=a.f[b],Object.prototype.hasOwnProperty.call(e,d)||(a.f[c++]=d,e[d]=1),b++;a.f.length=c}}
m.get=function(a,b){return Object.prototype.hasOwnProperty.call(this.i,a)?this.i[a]:b};
m.set=function(a,b){Object.prototype.hasOwnProperty.call(this.i,a)||(this.g++,this.f.push(a),this.M++);this.i[a]=b};
m.forEach=function(a,b){for(var c=pf(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
m.clone=function(){return new of(this)};
m.L=function(a){qf(this);var b=0,c=this.M,d=this,e=new kf;e.next=function(){if(c!=d.M)throw Error("The map has changed since the iterator was created");if(b>=d.f.length)throw jf;var f=d.f[b++];return a?f:d.i[f]};
return e};function sf(a){var b=[];tf(new uf,a,b);return b.join("")}
function uf(){}
function tf(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(Aa(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),tf(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),vf(d,c),c.push(":"),tf(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":vf(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var wf={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},xf=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function vf(a,b){b.push('"',a.replace(xf,function(c){var d=wf[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).substr(1),wf[c]=d);return d}),'"')}
;var yf=function(){if(Zb){var a=/Windows NT ([0-9.]+)/;return(a=a.exec(xb))?a[1]:"0"}return Yb?(a=/10[_.][0-9_.]+/,(a=a.exec(xb))?a[0].replace(/_/g,"."):"10"):$b?(a=/Android\s+([^\);]+)(\)|;)/,(a=a.exec(xb))?a[1]:""):ac||bc||cc?(a=/(?:iPhone|CPU)\s+OS\s+(\S+)/,(a=a.exec(xb))?a[1].replace(/_/g,"."):""):""}();function zf(a){return(a=a.exec(xb))?a[1]:""}
var Af=function(){if(nc)return zf(/Firefox\/([0-9.]+)/);if(E||Ub||Tb)return kc;if(rc)return Pb()?zf(/CriOS\/([0-9.]+)/):zf(/Chrome\/([0-9.]+)/);if(sc&&!Pb())return zf(/Version\/([0-9.]+)/);if(oc||pc){var a=/Version\/(\S+).*Mobile\/(\S+)/.exec(xb);if(a)return a[1]+"."+a[2]}else if(qc)return(a=zf(/Android\s+([0-9.]+)/))?a:zf(/Version\/([0-9.]+)/);return""}();function Bf(a,b,c,d,e,f,g){var h;if(h=c.offsetParent){var k="HTML"==h.tagName||"BODY"==h.tagName;if(!k||"static"!=xd(h,"position")){var l=Bd(h);if(!k){k=Hd(h);var n;if(n=k){if(n=sc)n=0<=rb(Af,10);var t;if(t=dc)t=0<=rb(yf,10);n=Wb||n||t}k=n?-h.scrollLeft:!k||Vb&&lc("8")||"visible"==xd(h,"overflowX")?h.scrollLeft:h.scrollWidth-h.clientWidth-h.scrollLeft;l=zc(l,new G(k,h.scrollTop))}}}h=l||new G;l=Gd(a);if(k=Ad(a)){var r=new sd(k.left,k.top,k.right-k.left,k.bottom-k.top);k=Math.max(l.left,r.left);n=
Math.min(l.left+l.width,r.left+r.width);k<=n&&(t=Math.max(l.top,r.top),r=Math.min(l.top+l.height,r.top+r.height),t<=r&&(l.left=k,l.top=t,l.width=n-k,l.height=r-t))}k=Bc(a);t=Bc(c);if(k.f!=t.f){n=k.f.body;t=Mc(t.f);r=new G(0,0);var q=(q=Dc(n))?Mc(q):window;b:{try{Qb(q.parent);var u=!0;break b}catch(Xa){}u=!1}if(u){u=n;do{var H=q==t?Bd(u):Cd(u);r.x+=H.x;r.y+=H.y}while(q&&q!=t&&q!=q.parent&&(u=q.frameElement)&&(q=q.parent))}u=zc(r,Bd(n));!E||9<=Number(mc)||Jc(k.f)||(u=zc(u,Kc(k.f)));l.left+=u.x;l.top+=
u.y}a=Cf(a,b);b=l.left;a&4?b+=l.width:a&2&&(b+=l.width/2);b=new G(b,l.top+(a&1?l.height:0));b=zc(b,h);e&&(b.x+=(a&4?-1:1)*e.x,b.y+=(a&1?-1:1)*e.y);var F;g&&(F=Ad(c))&&(F.top-=h.y,F.right-=h.x,F.bottom-=h.y,F.left-=h.x);return Df(b,c,d,f,F,g,void 0)}
function Df(a,b,c,d,e,f,g){a=a.clone();var h=Cf(b,c);c=Ed(b);g=g?g.clone():c.clone();a=a.clone();g=g.clone();var k=0;if(d||0!=h)h&4?a.x-=g.width+(d?d.right:0):h&2?a.x-=g.width/2:d&&(a.x+=d.left),h&1?a.y-=g.height+(d?d.bottom:0):d&&(a.y+=d.top);if(f){if(e){d=a;h=g;k=0;65==(f&65)&&(d.x<e.left||d.x>=e.right)&&(f&=-2);132==(f&132)&&(d.y<e.top||d.y>=e.bottom)&&(f&=-5);d.x<e.left&&f&1&&(d.x=e.left,k|=1);if(f&16){var l=d.x;d.x<e.left&&(d.x=e.left,k|=4);d.x+h.width>e.right&&(h.width=Math.min(e.right-d.x,
l+h.width-e.left),h.width=Math.max(h.width,0),k|=4)}d.x+h.width>e.right&&f&1&&(d.x=Math.max(e.right-h.width,e.left),k|=1);f&2&&(k|=(d.x<e.left?16:0)|(d.x+h.width>e.right?32:0));d.y<e.top&&f&4&&(d.y=e.top,k|=2);f&32&&(l=d.y,d.y<e.top&&(d.y=e.top,k|=8),d.y+h.height>e.bottom&&(h.height=Math.min(e.bottom-d.y,l+h.height-e.top),h.height=Math.max(h.height,0),k|=8));d.y+h.height>e.bottom&&f&4&&(d.y=Math.max(e.bottom-h.height,e.top),k|=2);f&8&&(k|=(d.y<e.top?64:0)|(d.y+h.height>e.bottom?128:0));e=k}else e=
256;k=e}f=new sd(0,0,0,0);f.left=a.x;f.top=a.y;f.width=g.width;f.height=g.height;e=k;if(e&496)return e;a=new G(f.left,f.top);a instanceof G?(g=a.x,a=a.y):(g=a,a=void 0);b.style.left=Dd(g,!1);b.style.top=Dd(a,!1);g=new Ac(f.width,f.height);c==g||c&&g&&c.width==g.width&&c.height==g.height||(c=g,a=Jc(Bc(Dc(b)).f),!E||lc("10")||a&&lc("8")?(b=b.style,Wb?b.MozBoxSizing="border-box":Xb?b.WebkitBoxSizing="border-box":b.boxSizing="border-box",b.width=Math.max(c.width,0)+"px",b.height=Math.max(c.height,0)+
"px"):(g=b.style,a?(E?(a=Jd(b,"paddingLeft"),f=Jd(b,"paddingRight"),d=Jd(b,"paddingTop"),h=Jd(b,"paddingBottom"),a=new rd(d,f,h,a)):(a=wd(b,"paddingLeft"),f=wd(b,"paddingRight"),d=wd(b,"paddingTop"),h=wd(b,"paddingBottom"),a=new rd(parseFloat(d),parseFloat(f),parseFloat(h),parseFloat(a))),!E||9<=Number(mc)?(f=wd(b,"borderLeftWidth"),d=wd(b,"borderRightWidth"),h=wd(b,"borderTopWidth"),b=wd(b,"borderBottomWidth"),b=new rd(parseFloat(h),parseFloat(d),parseFloat(b),parseFloat(f))):(f=Ld(b,"borderLeft"),
d=Ld(b,"borderRight"),h=Ld(b,"borderTop"),b=Ld(b,"borderBottom"),b=new rd(h,d,b,f)),g.pixelWidth=c.width-b.left-a.left-a.right-b.right,g.pixelHeight=c.height-b.top-a.top-a.bottom-b.bottom):(g.pixelWidth=c.width,g.pixelHeight=c.height)));return e}
function Cf(a,b){return(b&8&&Hd(a)?b^4:b)&-9}
;function Ef(a){this.f=0;this.w=void 0;this.l=this.g=this.i=null;this.o=this.v=!1;if(a!=wa)try{var b=this;a.call(void 0,function(c){Ff(b,2,c)},function(c){Ff(b,3,c)})}catch(c){Ff(this,3,c)}}
function Gf(){this.next=this.context=this.onRejected=this.g=this.f=null;this.i=!1}
Gf.prototype.reset=function(){this.context=this.onRejected=this.g=this.f=null;this.i=!1};
var Hf=new Ie(function(){return new Gf},function(a){a.reset()});
function If(a,b,c){var d=Hf.get();d.g=a;d.onRejected=b;d.context=c;return d}
Ef.prototype.then=function(a,b,c){return Jf(this,Ca(a)?a:null,Ca(b)?b:null,c)};
Ef.prototype.$goog_Thenable=!0;Ef.prototype.cancel=function(a){0==this.f&&Qe(function(){var b=new Kf(a);Lf(this,b)},this)};
function Lf(a,b){if(0==a.f)if(a.i){var c=a.i;if(c.g){for(var d=0,e=null,f=null,g=c.g;g&&(g.i||(d++,g.f==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.f&&1==d?Lf(c,b):(f?(d=f,d.next==c.l&&(c.l=d),d.next=d.next.next):Mf(c),Nf(c,e,3,b)))}a.i=null}else Ff(a,3,b)}
function Of(a,b){a.g||2!=a.f&&3!=a.f||Pf(a);a.l?a.l.next=b:a.g=b;a.l=b}
function Jf(a,b,c,d){var e=If(null,null,null);e.f=new Ef(function(f,g){e.g=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.onRejected=c?function(h){try{var k=c.call(d,h);!v(k)&&h instanceof Kf?g(h):f(k)}catch(l){g(l)}}:g});
e.f.i=a;Of(a,e);return e.f}
Ef.prototype.G=function(a){this.f=0;Ff(this,2,a)};
Ef.prototype.O=function(a){this.f=0;Ff(this,3,a)};
function Ff(a,b,c){if(0==a.f){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.f=1;a:{var d=c,e=a.G,f=a.O;if(d instanceof Ef){Of(d,If(e||wa,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(l){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(Da(d))try{var k=d.then;if(Ca(k)){Qf(d,k,e,f,a);g=!0;break a}}catch(l){f.call(a,l);g=!0;break a}g=!1}}}g||(a.w=c,a.f=b,a.i=null,Pf(a),3!=b||c instanceof Kf||Rf(a,c))}}
function Qf(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function Pf(a){a.v||(a.v=!0,Qe(a.D,a))}
function Mf(a){var b=null;a.g&&(b=a.g,a.g=b.next,b.next=null);a.g||(a.l=null);return b}
Ef.prototype.D=function(){for(var a;a=Mf(this);)Nf(this,a,this.f,this.w);this.v=!1};
function Nf(a,b,c,d){if(3==c&&b.onRejected&&!b.i)for(;a&&a.o;a=a.i)a.o=!1;if(b.f)b.f.i=null,Sf(b,c,d);else try{b.i?b.g.call(b.context):Sf(b,c,d)}catch(e){Tf.call(null,e)}Je(Hf,b)}
function Sf(a,b,c){2==b?a.g.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)}
function Rf(a,b){a.o=!0;Qe(function(){a.o&&Tf.call(null,b)})}
var Tf=Ke;function Kf(a){La.call(this,a)}
A(Kf,La);Kf.prototype.name="cancel";function Q(a){Ze.call(this);this.w=1;this.o=[];this.v=0;this.f=[];this.g={};this.D=!!a}
A(Q,Ze);m=Q.prototype;m.subscribe=function(a,b,c){var d=this.g[a];d||(d=this.g[a]=[]);var e=this.w;this.f[e]=a;this.f[e+1]=b;this.f[e+2]=c;this.w=e+3;d.push(e);return e};
function Uf(a,b){var c=!1,d=a.subscribe("ROOT_MENU_REMOVED",function(e){c||(c=!0,this.S(d),b.apply(void 0,arguments))},a)}
function Vf(a,b,c){if(b=a.g[b]){var d=a.f;(b=Sa(b,function(e){return d[e+1]==c&&void 0==d[e+2]}))&&a.S(b)}}
m.S=function(a){var b=this.f[a];if(b){var c=this.g[b];if(0!=this.v)this.o.push(a),this.f[a+1]=wa;else{if(c){var d=Na(c,a);0<=d&&Array.prototype.splice.call(c,d,1)}delete this.f[a];delete this.f[a+1];delete this.f[a+2]}}return!!b};
m.K=function(a,b){var c=this.g[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.D)for(e=0;e<c.length;e++){var g=c[e];Wf(this.f[g+1],this.f[g+2],d)}else{this.v++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.f[g+1].apply(this.f[g+2],d)}finally{if(this.v--,0<this.o.length&&0==this.v)for(;c=this.o.pop();)this.S(c)}}return 0!=e}return!1};
function Wf(a,b,c){Qe(function(){a.apply(b,c)})}
m.clear=function(a){if(a){var b=this.g[a];b&&(C(b,this.S,this),delete this.g[a])}else this.f.length=0,this.g={}};
function Xf(a,b){if(b){var c=a.g[b];return c?c.length:0}c=0;for(var d in a.g)c+=Xf(a,d);return c}
m.ea=function(){Q.B.ea.call(this);this.clear();this.o.length=0};function Yf(a){this.f=a}
Yf.prototype.set=function(a,b){v(b)?this.f.set(a,sf(b)):this.f.remove(a)};
Yf.prototype.get=function(a){try{var b=this.f.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
Yf.prototype.remove=function(a){this.f.remove(a)};function Zf(a){this.f=a}
A(Zf,Yf);function $f(a){this.data=a}
function ag(a){return!v(a)||a instanceof $f?a:new $f(a)}
Zf.prototype.set=function(a,b){Zf.B.set.call(this,a,ag(b))};
Zf.prototype.g=function(a){a=Zf.B.get.call(this,a);if(!v(a)||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Zf.prototype.get=function(a){if(a=this.g(a)){if(a=a.data,!v(a))throw"Storage: Invalid value was encountered";}else a=void 0;return a};function bg(a){this.f=a}
A(bg,Zf);bg.prototype.set=function(a,b,c){if(b=ag(b)){if(c){if(c<Ka()){bg.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Ka()}bg.B.set.call(this,a,b)};
bg.prototype.g=function(a){var b=bg.B.g.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Ka()||c&&c>Ka())bg.prototype.remove.call(this,a);else return b}};function cg(){}
;function dg(){}
A(dg,cg);dg.prototype.clear=function(){var a=nf(this.L(!0)),b=this;C(a,function(c){b.remove(c)})};function eg(a){this.f=a}
A(eg,dg);m=eg.prototype;m.isAvailable=function(){if(!this.f)return!1;try{return this.f.setItem("__sak","1"),this.f.removeItem("__sak"),!0}catch(a){return!1}};
m.set=function(a,b){try{this.f.setItem(a,b)}catch(c){if(0==this.f.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
m.get=function(a){a=this.f.getItem(a);if(!w(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
m.remove=function(a){this.f.removeItem(a)};
m.L=function(a){var b=0,c=this.f,d=new kf;d.next=function(){if(b>=c.length)throw jf;var e=c.key(b++);if(a)return e;e=c.getItem(e);if(!w(e))throw"Storage mechanism: Invalid value was encountered";return e};
return d};
m.clear=function(){this.f.clear()};
m.key=function(a){return this.f.key(a)};function fg(){var a=null;try{a=window.localStorage||null}catch(b){}this.f=a}
A(fg,eg);function gg(a,b){this.g=a;this.f=null;if(E&&!(9<=Number(mc))){hg||(hg=new of);this.f=hg.get(a);this.f||(b?this.f=document.getElementById(b):(this.f=document.createElement("userdata"),this.f.addBehavior("#default#userData"),document.body.appendChild(this.f)),hg.set(a,this.f));try{this.f.load(this.g)}catch(c){this.f=null}}}
A(gg,dg);var ig={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},hg=null;function jg(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return ig[b]})}
m=gg.prototype;m.isAvailable=function(){return!!this.f};
m.set=function(a,b){this.f.setAttribute(jg(a),b);kg(this)};
m.get=function(a){a=this.f.getAttribute(jg(a));if(!w(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
m.remove=function(a){this.f.removeAttribute(jg(a));kg(this)};
m.L=function(a){var b=0,c=this.f.XMLDocument.documentElement.attributes,d=new kf;d.next=function(){if(b>=c.length)throw jf;var e=c[b++];if(a)return decodeURIComponent(e.nodeName.replace(/\./g,"%")).substr(1);e=e.nodeValue;if(!w(e))throw"Storage mechanism: Invalid value was encountered";return e};
return d};
m.clear=function(){for(var a=this.f.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);kg(this)};
function kg(a){try{a.f.save(a.g)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function lg(a,b){this.g=a;this.f=b+"::"}
A(lg,dg);lg.prototype.set=function(a,b){this.g.set(this.f+a,b)};
lg.prototype.get=function(a){return this.g.get(this.f+a)};
lg.prototype.remove=function(a){this.g.remove(this.f+a)};
lg.prototype.L=function(a){var b=this.g.L(!0),c=this,d=new kf;d.next=function(){for(var e=b.next();e.substr(0,c.f.length)!=c.f;)e=b.next();return a?e.substr(c.f.length):c.g.get(e)};
return d};function mg(){this.g=[];this.f=-1}
mg.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&0===a%1&&this.g[a]!=b&&(this.g[a]=b,this.f=-1)};
mg.prototype.get=function(a){return!!this.g[a]};
function ng(a){-1==a.f&&(a.f=Qa(a.g,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.f}
;/*
 Copyright (c) Microsoft Corporation. All rights reserved.
 Licensed under the Apache License, Version 2.0 (the "License"); you may not use
 this file except in compliance with the License. You may obtain a copy of the
 License at http://www.apache.org/licenses/LICENSE-2.0

 THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
 WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
 MERCHANTABLITY OR NON-INFRINGEMENT.

 See the Apache Version 2.0 License for specific language governing permissions
 and limitations under the License.
*/
var og=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};z("yt.config_",og);function pg(a){var b=arguments;1<b.length?og[b[0]]=b[1]:1===b.length&&Object.assign(og,b[0])}
function R(a,b){return a in og?og[a]:b}
function qg(a){return R(a,void 0)}
;function rg(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){sg(b)}}:a}
function sg(a,b,c,d,e){var f=x("yt.logging.errors.log");f?f(a,b,c,d,e):(f=R("ERRORS",[]),f.push([a,b,c,d,e]),pg("ERRORS",f))}
;function S(a,b){Ca(a)&&(a=rg(a));return window.setTimeout(a,b)}
function tg(a){window.clearTimeout(a)}
;var ug=x("ytPubsubPubsubInstance")||new Q;Q.prototype.subscribe=Q.prototype.subscribe;Q.prototype.unsubscribeByKey=Q.prototype.S;Q.prototype.publish=Q.prototype.K;Q.prototype.clear=Q.prototype.clear;z("ytPubsubPubsubInstance",ug);var vg=x("ytPubsubPubsubSubscribedKeys")||{};z("ytPubsubPubsubSubscribedKeys",vg);var wg=x("ytPubsubPubsubTopicToKeys")||{};z("ytPubsubPubsubTopicToKeys",wg);var xg=x("ytPubsubPubsubIsSynchronous")||{};z("ytPubsubPubsubIsSynchronous",xg);
function yg(a,b,c){var d=zg();if(d){var e=d.subscribe(a,function(){var f=arguments;var g=function(){vg[e]&&b.apply(c||window,f)};
try{xg[a]?g():S(g,0)}catch(h){sg(h)}},c);
vg[e]=!0;wg[a]||(wg[a]=[]);wg[a].push(e);return e}return 0}
function Ag(a){var b=zg();b&&("number"==typeof a?a=[a]:w(a)&&(a=[parseInt(a,10)]),C(a,function(c){b.unsubscribeByKey(c);delete vg[c]}))}
function Bg(a,b){var c=zg();return c?c.publish.apply(c,arguments):!1}
function Cg(a,b){xg[a]=!0;var c=zg();c&&c.publish.apply(c,arguments);xg[a]=!1}
function zg(){return x("ytPubsubPubsubInstance")}
;function Dg(a,b,c){a&&(a.dataset?a.dataset[Eg(b)]=String(c):a.setAttribute("data-"+b,c))}
function Fg(a,b){return a?a.dataset?a.dataset[Eg(b)]:a.getAttribute("data-"+b):null}
function Gg(a,b){a&&(a.dataset?delete a.dataset[Eg(b)]:a.removeAttribute("data-"+b))}
var Hg={};function Eg(a){return Hg[a]||(Hg[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;function T(a,b){this.version=a;this.args=b}
;function U(a,b){this.topic=a;this.f=b}
U.prototype.toString=function(){return this.topic};function Ig(){}
function Jg(){}
Ig.prototype=ca(Jg.prototype);Ig.prototype.constructor=Ig;if(ja)ja(Ig,Jg);else for(var Kg in Jg)if("prototype"!=Kg)if(Object.defineProperties){var Lg=Object.getOwnPropertyDescriptor(Jg,Kg);Lg&&Object.defineProperty(Ig,Kg,Lg)}else Ig[Kg]=Jg[Kg];Ig.B=Jg.prototype;function Mg(a,b,c){isNaN(c)&&(c=void 0);var d=x("yt.scheduler.instance.addJob");d?d(a,b,c):void 0===c?a():S(a,c||0)}
Ig.prototype.start=function(){var a=x("yt.scheduler.instance.start");a&&a()};
ya(Ig);Ig.A();var Ng=x("ytPubsub2Pubsub2Instance")||new Q;Q.prototype.subscribe=Q.prototype.subscribe;Q.prototype.unsubscribeByKey=Q.prototype.S;Q.prototype.publish=Q.prototype.K;Q.prototype.clear=Q.prototype.clear;z("ytPubsub2Pubsub2Instance",Ng);var Og=x("ytPubsub2Pubsub2SubscribedKeys")||{};z("ytPubsub2Pubsub2SubscribedKeys",Og);var Pg=x("ytPubsub2Pubsub2TopicToKeys")||{};z("ytPubsub2Pubsub2TopicToKeys",Pg);var Qg=x("ytPubsub2Pubsub2IsAsync")||{};z("ytPubsub2Pubsub2IsAsync",Qg);
z("ytPubsub2Pubsub2SkipSubKey",null);function V(a,b){var c=Rg();c&&c.publish.call(c,a.toString(),a,b)}
function Sg(a,b,c){var d=Rg();if(!d)return 0;var e=d.subscribe(a.toString(),function(f,g){var h=x("ytPubsub2Pubsub2SkipSubKey");h&&h==e||(h=function(){if(Og[e])try{if(g&&a instanceof U&&a!=f)try{var k=a.f,l=g;if(!l.args||!l.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!k.M){var n=new k;k.M=n.version}var t=k.M}catch(r){}if(!t||l.version!=t)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{g=Reflect.construct(k,Va(l.args))}catch(r){throw r.message=
"yt.pubsub2.Data.deserialize(): "+r.message,r;}}catch(r){throw r.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+a.toString()+": "+r.message,r;}b.call(c||window,g)}catch(r){sg(r)}},Qg[a.toString()]?x("yt.scheduler.instance")?Mg(h,1,void 0):S(h,0):h())});
Og[e]=!0;Pg[a.toString()]||(Pg[a.toString()]=[]);Pg[a.toString()].push(e);return e}
function Tg(a){var b=Rg();b&&("number"==typeof a&&(a=[a]),C(a,function(c){b.unsubscribeByKey(c);delete Og[c]}))}
function Rg(){return x("ytPubsub2Pubsub2Instance")}
;var Ug=0;function Vg(a){var b=a.__yt_uid_key;b||(b=Wg(),a.__yt_uid_key=b);return b}
function Xg(a,b){a=I(a);b=I(b);return!!cd(a,function(c){return c===b},!0,void 0)}
function Yg(a,b){var c=Fc(document,a,null,b);return c.length?c[0]:null}
function Zg(){var a=document,b;Ra(["fullscreenElement","webkitFullscreenElement","mozFullScreenElement","msFullscreenElement"],function(c){b=a[c];return!!b});
return b}
function $g(){df(document.body,"hide-players",!1);C(Ec("preserve-players"),function(a){P(a,"preserve-players")})}
var Wg=x("ytDomDomGetNextId")||function(){return++Ug};
z("ytDomDomGetNextId",Wg);var ah={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function bh(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;try{a=a||window.event;if(!a)return;this.event=a}catch(c){return}for(var b in a)b in ah||(this[b]=a[b]);(b=a.target||a.srcElement)&&3==b.nodeType&&(b=b.parentNode);this.target=b;if(b=a.relatedTarget)try{b=b.nodeName?b:null}catch(c){b=null}else"mouseover"==
this.type?b=a.fromElement:"mouseout"==this.type&&(b=a.toElement);this.relatedTarget=b;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey}
bh.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
bh.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
bh.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var eb=x("ytEventsEventsListeners")||{};z("ytEventsEventsListeners",eb);var ch=x("ytEventsEventsCounter")||{count:0};z("ytEventsEventsCounter",ch);
function dh(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return db(function(e){var f="boolean"==typeof e[4]&&e[4]==!!d,g=Da(e[4])&&Da(d)&&gb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
function W(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=dh(a,b,c,d);if(e)return e;e=++ch.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new bh(h);if(!cd(h.relatedTarget,function(k){return k==a},!0))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new bh(h);
h.currentTarget=a;return c.call(a,h)};
g=rg(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),eh()||"boolean"==typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);eb[e]=[a,b,c,g,d];return e}
function fh(a,b,c){var d=a||document;return W(d,"click",function(e){var f=cd(e.target,function(g){return g===d||c(g)},!0);
f&&f!==d&&!f.disabled&&(e.currentTarget=f,b.call(f,e))})}
function gh(a){a=a||window.event;a=a.target||a.srcElement;3==a.nodeType&&(a=a.parentNode);return a}
var eh=ab(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function hh(a,b,c){return fh(a,b,function(d){return N(d,c)})}
function ih(a){if(document.createEvent){var b=document.createEvent("HTMLEvents");b.initEvent("click",!0,!0);a.dispatchEvent(b)}else b=document.createEventObject(),a.fireEvent("onclick",b)}
function jh(a){a&&("string"==typeof a&&(a=[a]),C(a,function(b){if(b in eb){var c=eb[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?eh()||"boolean"==typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete eb[b]}}))}
;var kh={},lh="ontouchstart"in document;function mh(a,b,c){switch(a){case "mouseover":case "mouseout":var d=3;break;case "mouseenter":case "mouseleave":d=9}return cd(c,function(e){return N(e,b)},!0,d)}
function nh(a){var b="mouseover"==a.type&&"mouseenter"in kh||"mouseout"==a.type&&"mouseleave"in kh,c=a.type in kh||b;if("HTML"!=a.target.tagName&&c){if(b){b="mouseover"==a.type?"mouseenter":"mouseleave";c=kh[b];for(var d in c.g){var e=mh(b,d,a.target);e&&!cd(a.relatedTarget,function(f){return f==e},!0)&&c.K(d,e,b,a)}}if(b=kh[a.type])for(d in b.g)(e=mh(a.type,d,a.target))&&b.K(d,e,a.type,a)}}
W(document,"blur",nh,!0);W(document,"change",nh,!0);W(document,"click",nh);W(document,"focus",nh,!0);W(document,"mouseover",nh);W(document,"mouseout",nh);W(document,"mousedown",nh);W(document,"keydown",nh);W(document,"keyup",nh);W(document,"keypress",nh);W(document,"cut",nh);W(document,"paste",nh);lh&&(W(document,"touchstart",nh),W(document,"touchend",nh),W(document,"touchcancel",nh));function oh(a){this.o=a;this.w={};this.G=[];this.D=[]}
m=oh.prototype;m.F=function(a){return K(a,X(this))};
function X(a,b){return"yt-uix"+(a.o?"-"+a.o:"")+(b?"-"+b:"")}
m.unregister=function(){Ag(this.G);this.G.length=0;Tg(this.D);this.D.length=0};
m.init=wa;m.dispose=wa;function ph(a,b,c){a.G.push(yg(b,c,a))}
function qh(a,b,c){a.D.push(Sg(b,c,a))}
function Y(a,b,c,d){d=X(a,d);var e=y(c,a);b in kh||(kh[b]=new Q);kh[b].subscribe(d,e);a.w[c]=e}
function Z(a,b,c,d){if(b in kh){var e=kh[b];Vf(e,X(a,d),a.w[c]);0>=Xf(e)&&(e.dispose(),delete kh[b])}delete a.w[c]}
m.R=function(a,b,c){var d=this.j(a,b);if(d&&(d=x(d))){var e=Za(arguments,2);Ya(e,0,0,a);d.apply(null,e)}};
m.j=function(a,b){return Fg(a,b)};
function rh(a,b){Dg(a,"tooltip-text",b)}
;var sh=window.yt&&window.yt.uix&&window.yt.uix.widgets_||{};z("yt.uix.widgets_",sh);function th(a){var b=[];bb(a,function(c,d){var e=encodeURIComponent(String(d)),f;Aa(c)?f=c:f=[c];C(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function uh(a){"?"==a.charAt(0)&&(a=a.substr(1));a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length)try{var f=decodeURIComponent((e[0]||"").replace(/\+/g," ")),g=decodeURIComponent((e[1]||"").replace(/\+/g," "));f in b?Aa(b[f])?Wa(b[f],g):b[f]=[b[f],g]:b[f]=g}catch(k){var h=Error("Error decoding URL component");h.params="key: "+e[0]+", value: "+e[1];"q"==e[0]?sg(h,"WARNING",void 0,void 0,void 0):sg(h)}}return b}
function vh(a,b){return wh(a,b||{},!0)}
function wh(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=uh(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);return ld(a,e)+d}
;function xh(a){a=void 0===a?{}:a;Ca(a)&&(a={callback:a});if(a.gapiHintOverride||R("GAPI_HINT_OVERRIDE")){var b=document.location.href;-1!=b.indexOf("?")?(b=(b||"").split("#")[0],b=b.split("?",2),b=uh(1<b.length?b[1]:b[0])):b={};(b=b.gapi_jsh)&&jb(a,{_c:{jsl:{h:b}}})}Ge("gapi.iframes:gapi.iframes.style.common",a)}
;function yh(){return x("gapi.iframes.getContext")()}
;function zh(a){T.call(this,1,arguments);this.f=a}
A(zh,T);function Ah(a){T.call(this,1,arguments);this.f=a}
A(Ah,T);function Bh(a,b,c){T.call(this,3,arguments);this.i=a;this.g=b;this.f=null!=c?!!c:null}
A(Bh,T);function Ch(a,b,c,d,e){T.call(this,2,arguments);this.g=a;this.f=b;this.l=c||null;this.i=d||null;this.source=e||null}
A(Ch,T);function Dh(a,b,c){T.call(this,1,arguments);this.f=a;this.g=b}
A(Dh,T);function Eh(a,b,c,d,e,f,g){T.call(this,1,arguments);this.g=a;this.o=b;this.f=c;this.v=d||null;this.l=e||null;this.i=f||null;this.source=g||null}
A(Eh,T);
var Fh=new U("subscription-batch-subscribe",zh),Gh=new U("subscription-batch-unsubscribe",zh),Hh=new U("subscription-subscribe",Ch),Ih=new U("subscription-subscribe-loading",Ah),Jh=new U("subscription-subscribe-loaded",Ah),Kh=new U("subscription-subscribe-success",Dh),Lh=new U("subscription-subscribe-external",Ch),Mh=new U("subscription-unsubscribe",Eh),Nh=new U("subscription-unsubscirbe-loading",Ah),Oh=new U("subscription-unsubscribe-loaded",Ah),Ph=new U("subscription-unsubscribe-success",Ah),Qh=
new U("subscription-external-unsubscribe",Eh),Rh=new U("subscription-enable-ypc",Ah),Sh=new U("subscription-disable-ypc",Ah),Th=new U("subscription-prefs",Bh),Uh=new U("subscription-prefs-success",Bh),Vh=new U("subscription-prefs-failure",Bh);function Wh(){var a=Zg();return a?a:null}
;function Xh(a,b){(a=I(a))&&a.style&&(a.style.display=b?"":"none",df(a,"hid",!b))}
function Yh(a){return(a=I(a))?"none"!=a.style.display&&!N(a,"hid"):!1}
function Zh(a){C(arguments,function(b){!Ba(b)||b instanceof Element?Xh(b,!0):C(b,function(c){Zh(c)})})}
function $h(a){C(arguments,function(b){!Ba(b)||b instanceof Element?Xh(b,!1):C(b,function(c){$h(c)})})}
;function ai(){oh.call(this,"tooltip");this.f=0;this.g={}}
A(ai,oh);ya(ai);m=ai.prototype;m.register=function(){Y(this,"mouseover",this.aa);Y(this,"mouseout",this.N);Y(this,"focus",this.oa);Y(this,"blur",this.ja);Y(this,"click",this.N);Y(this,"touchstart",this.Ja);Y(this,"touchend",this.ba);Y(this,"touchcancel",this.ba)};
m.unregister=function(){Z(this,"mouseover",this.aa);Z(this,"mouseout",this.N);Z(this,"focus",this.oa);Z(this,"blur",this.ja);Z(this,"click",this.N);Z(this,"touchstart",this.Ja);Z(this,"touchend",this.ba);Z(this,"touchcancel",this.ba);this.dispose();ai.B.unregister.call(this)};
m.dispose=function(){for(var a in this.g)this.N(this.g[a]);this.g={}};
m.aa=function(a){if(!(this.f&&1E3>Ka()-this.f)){var b=parseInt(this.j(a,"tooltip-hide-timer"),10);b&&(Gg(a,"tooltip-hide-timer"),tg(b));b=y(function(){bi(this,a);Gg(a,"tooltip-show-timer")},this);
var c=parseInt(this.j(a,"tooltip-show-delay"),10)||0;b=S(b,c);Dg(a,"tooltip-show-timer",b.toString());a.title&&(rh(a,ci(this,a)),a.title="");b=Ea(a).toString();this.g[b]=a}};
m.N=function(a){var b=parseInt(this.j(a,"tooltip-show-timer"),10);b&&(tg(b),Gg(a,"tooltip-show-timer"));b=y(function(){if(a){var c=I(di(this,a));c&&(ei(c),Nc(c),Gg(a,"content-id"));c=I(di(this,a,"arialabel"));Nc(c)}Gg(a,"tooltip-hide-timer")},this);
b=S(b,50);Dg(a,"tooltip-hide-timer",b.toString());if(b=this.j(a,"tooltip-text"))a.title=b;b=Ea(a).toString();delete this.g[b]};
m.oa=function(a,b){this.f=0;this.aa(a,b)};
m.ja=function(a){this.f=0;this.N(a)};
m.Ja=function(a,b,c){c.changedTouches&&(this.f=0,(a=mh(b,X(this),c.changedTouches[0].target))&&this.aa(a,b))};
m.ba=function(a,b,c){c.changedTouches&&(this.f=Ka(),(a=mh(b,X(this),c.changedTouches[0].target))&&this.N(a))};
function fi(a,b,c){rh(b,c);a=a.j(b,"content-id");(a=I(a))&&Rc(a,c)}
function ci(a,b){return a.j(b,"tooltip-text")||b.title}
function bi(a,b){if(b){var c=ci(a,b);if(c){var d=I(di(a,b));if(!d){d=document.createElement("div");d.id=di(a,b);d.className=X(a,"tip");var e=document.createElement("div");e.className=X(a,"tip-body");var f=document.createElement("div");f.className=X(a,"tip-arrow");var g=document.createElement("div");g.setAttribute("aria-hidden","true");g.className=X(a,"tip-content");var h=gi(a,b),k=di(a,b,"content");g.id=k;Dg(b,"content-id",k);e.appendChild(g);h&&d.appendChild(h);d.appendChild(e);d.appendChild(f);
var l=$c(b);k=di(a,b,"arialabel");f=document.createElement("div");O(f,X(a,"arialabel"));f.id=k;l=b.hasAttribute("aria-label")?b.getAttribute("aria-label"):"rtl"==document.body.getAttribute("dir")?c+" "+l:l+" "+c;Rc(f,l);b.setAttribute("aria-labelledby",k);k=Wh()||document.body;k.appendChild(f);k.appendChild(d);fi(a,b,c);(c=parseInt(a.j(b,"tooltip-max-width"),10))&&e.offsetWidth>c&&(e.style.width=c+"px",O(g,X(a,"normal-wrap")));g=N(b,X(a,"reverse"));hi(a,b,d,e,h,g)||hi(a,b,d,e,h,!g);var n=X(a,"tip-visible");
S(function(){O(d,n)},0)}}}}
function hi(a,b,c,d,e,f){df(c,X(a,"tip-reverse"),f);var g=0;f&&(g=1);var h=Ed(b);f=new G((h.width-10)/2,f?h.height:0);var k=Bd(b);Df(new G(k.x+f.x,k.y+f.y),c,g);f=Ic(window);if(1==c.nodeType)var l=Cd(c);else c=c.changedTouches?c.changedTouches[0]:c,l=new G(c.clientX,c.clientY);c=Ed(d);var n=Math.floor(c.width/2);g=!!(f.height<l.y+h.height);h=!!(l.y<h.height);k=!!(l.x<n);f=!!(f.width<l.x+n);l=(c.width+3)/-2- -5;a=a.j(b,"force-tooltip-direction");if("left"==a||k)l=-5;else if("right"==a||f)l=20-c.width-
3;a=Math.floor(l)+"px";d.style.left=a;e&&(e.style.left=a,e.style.height=c.height+"px",e.style.width=c.width+"px");return!(g||h)}
function di(a,b,c){a=X(a)+Vg(b);c&&(a+="-"+c);return a}
function gi(a,b){var c=null;Zb&&N(b,X(a,"masked"))&&((c=I("yt-uix-tooltip-shared-mask"))?(c.parentNode.removeChild(c),Zh(c)):(c=document.createElement("IFRAME"),c.src='javascript:""',c.id="yt-uix-tooltip-shared-mask",c.className=X(a,"tip-mask")));return c}
function ei(a){var b=I("yt-uix-tooltip-shared-mask"),c=b&&cd(b,function(d){return d==a},!1,2);
b&&c&&(b.parentNode.removeChild(b),$h(b),document.body.appendChild(b))}
;function ii(a){var b=ji();if(b=window.open(b,"loginPopup","width=375,height=440,resizable=yes,scrollbars=yes",!0)){var c=yg("LOGGED_IN",function(d){Ag(R("LOGGED_IN_PUBSUB_KEY",void 0));pg("LOGGED_IN",!0);a(d)});
pg("LOGGED_IN_PUBSUB_KEY",c);b.moveTo((screen.width-375)/2,(screen.height-440)/2)}}
function ji(){var a=document.location.protocol+"//"+document.domain+"/post_login";a=kd(a,"mode","subscribe");a=kd("/signin?context=popup","next",a);return a=kd(a,"feature","sub_button")}
z("yt.pubsub.publish",Bg);function ki(a,b){var c=li(a);return void 0===c&&void 0!==b?b:Number(c||0)}
function li(a){return R("EXPERIMENT_FLAGS",{})[a]}
;function mi(a){var b=ni;a=void 0===a?x("yt.ads.biscotti.lastId_")||"":a;b=Object.assign(oi(b),pi(b));b.ca_type="image";a&&(b.bid=a);return b}
function oi(a){var b={};b.dt=Md;b.flash="0";a:{try{var c=a.f.top.location.href}catch(f){a=2;break a}a=c?c===a.g.location.href?0:1:2}b=(b.frm=a,b);b.u_tz=-(new Date).getTimezoneOffset();var d=void 0===d?B:d;try{var e=d.history.length}catch(f){e=0}b.u_his=e;b.u_java=!!B.navigator&&"unknown"!==typeof B.navigator.javaEnabled&&!!B.navigator.javaEnabled&&B.navigator.javaEnabled();B.screen&&(b.u_h=B.screen.height,b.u_w=B.screen.width,b.u_ah=B.screen.availHeight,b.u_aw=B.screen.availWidth,b.u_cd=B.screen.colorDepth);
B.navigator&&B.navigator.plugins&&(b.u_nplug=B.navigator.plugins.length);B.navigator&&B.navigator.mimeTypes&&(b.u_nmime=B.navigator.mimeTypes.length);return b}
function pi(a){var b=a.f;try{var c=b.screenX;var d=b.screenY}catch(l){}try{var e=b.outerWidth;var f=b.outerHeight}catch(l){}try{var g=b.innerWidth;var h=b.innerHeight}catch(l){}b=[b.screenLeft,b.screenTop,c,d,b.screen?b.screen.availWidth:void 0,b.screen?b.screen.availTop:void 0,e,f,g,h];c=a.f.top;try{var k=Ic(c||window).round()}catch(l){k=new Ac(-12245933,-12245933)}c=k;k={};d=new mg;p.SVGElement&&p.document.createElementNS&&d.set(0);e=qd();e["allow-top-navigation-by-user-activation"]&&d.set(1);e["allow-popups-to-escape-sandbox"]&&
d.set(2);p.crypto&&p.crypto.subtle&&d.set(3);p.TextDecoder&&p.TextEncoder&&d.set(4);d=ng(d);k.bc=d;k.bih=c.height;k.biw=c.width;k.brdim=b.join();a=a.g;return k.vis={visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[a.visibilityState||a.webkitVisibilityState||a.mozVisibilityState||""]||0,k.wgl=!!B.WebGLRenderingContext,k}
var ni=new function(){var a=window.document;this.f=window;this.g=a};
z("yt.ads_.signals_.getAdSignalsString",function(a){return th(mi(a))});Ka();var qi=v(XMLHttpRequest)?function(){return new XMLHttpRequest}:v(ActiveXObject)?function(){return new ActiveXObject("Microsoft.XMLHTTP")}:null;
function ri(){if(!qi)return null;var a=qi();return"open"in a?a:null}
;var si={Authorization:"AUTHORIZATION","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},ti="app debugcss debugjs expflag force_ad_params force_viral_ad_response_params forced_experiments internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" "),
ui=!1;
function vi(a,b){b=void 0===b?{}:b;if(!c)var c=window.location.href;var d=ed(a)[1]||null,e=fd(ed(a)[3]||null);d&&e?(d=c,c=ed(a),d=ed(d),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?fd(ed(c)[3]||null)==e&&(Number(ed(c)[4]||null)||null)==(Number(ed(a)[4]||null)||null):!0;d=!!li("web_ajax_ignore_global_headers_if_set");for(var f in si)e=R(si[f]),!e||!c&&!wi(a,f)||d&&void 0!==b[f]||(b[f]=e);if(c||wi(a,"X-YouTube-Utc-Offset"))b["X-YouTube-Utc-Offset"]=-(new Date).getTimezoneOffset();(li("pass_biscotti_id_in_header_ajax")||li("pass_biscotti_id_in_header_ajax_tv"))&&
(c||wi(a,"X-YouTube-Ad-Signals"))&&(b["X-YouTube-Ad-Signals"]=th(mi(void 0)));return b}
function xi(a){var b=window.location.search,c=fd(ed(a)[3]||null),d=fd(ed(a)[5]||null);d=(c=c&&c.endsWith("youtube.com"))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=uh(b),f={};C(ti,function(g){e[g]&&(f[g]=e[g])});
return wh(a,f||{},!1)}
function wi(a,b){var c=R("CORS_HEADER_WHITELIST")||{},d=fd(ed(a)[3]||null);return d?(c=c[d])?Ta(c,b):!1:!0}
function yi(a,b){if(window.fetch&&"XML"!=b.format){var c={method:b.method||"GET",credentials:"same-origin"};b.headers&&(c.headers=b.headers);a=zi(a,b);var d=Ai(a,b);d&&(c.body=d);b.withCredentials&&(c.credentials="include");var e=!1,f;fetch(a,c).then(function(g){if(!e){e=!0;f&&tg(f);var h=g.ok,k=function(l){l=l||{};var n=b.context||p;h?b.onSuccess&&b.onSuccess.call(n,l,g):b.onError&&b.onError.call(n,l,g);b.V&&b.V.call(n,l,g)};
"JSON"==(b.format||"JSON")&&(h||400<=g.status&&500>g.status)?g.json().then(k,function(){k(null)}):k(null)}});
b.wb&&0<b.timeout&&(f=S(function(){e||(e=!0,tg(f))},b.timeout))}else Bi(a,b)}
function Bi(a,b){var c=b.format||"JSON";a=zi(a,b);var d=Ai(a,b),e=!1,f,g=Ci(a,function(h){if(!e){e=!0;f&&tg(f);a:switch(h&&"status"in h?h.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:var k=!0;break a;default:k=!1}var l=null,n=400<=h.status&&500>h.status,t=500<=h.status&&600>h.status;if(k||n||t)l=Di(c,h,b.Sb);if(k)a:if(h&&204==h.status)k=!0;else{switch(c){case "XML":k=0==parseInt(l&&l.return_code,10);break a;case "RAW":k=!0;break a}k=!!l}l=l||{};n=b.context||p;
k?b.onSuccess&&b.onSuccess.call(n,h,l):b.onError&&b.onError.call(n,h,l);b.V&&b.V.call(n,h,l)}},b.method,d,b.headers,b.responseType,b.withCredentials);
b.Da&&0<b.timeout&&(f=S(function(){e||(e=!0,g.abort(),tg(f))},b.timeout))}
function zi(a,b){b.Wb&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=qg("XSRF_FIELD_NAME"),d=b.Ka;d&&(d[c]&&delete d[c],a=vh(a,d));return a}
function Ai(a,b){var c=qg("XSRF_FIELD_NAME"),d=qg("XSRF_TOKEN"),e=b.postBody||"",f=b.J,g=qg("XSRF_FIELD_NAME"),h;b.headers&&(h=b.headers["Content-Type"]);b.Vb||fd(ed(a)[3]||null)&&!b.withCredentials&&fd(ed(a)[3]||null)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.J&&b.J[g]||(f||(f={}),f[c]=d);f&&w(e)&&(e=uh(e),jb(e,f),e=b.Ea&&"JSON"==b.Ea?JSON.stringify(e):jd(e));f=e||f&&!fb(f);!ui&&f&&"POST"!=b.method&&(ui=!0,sg(Error("AJAX request with postData should use POST")));
return e}
function Di(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=JSON.parse(a));break;case "XML":if(b=(b=b.responseXML)?Ei(b):null)d={},C(b.getElementsByTagName("*"),function(e){d[e.tagName]=Fi(e)})}c&&Gi(d);
return d}
function Gi(a){if(Da(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=Hb(a[b]);a[c]=d}else Gi(a[b])}}
function Ei(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Fi(a){var b="";C(a.childNodes,function(c){b+=c.nodeValue});
return b}
function Ci(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&rg(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=ri();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;li("debug_forward_web_query_parameters")&&(a=xi(a));k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=vi(a,e))for(var l in e)k.setRequestHeader(l,e[l]),"content-type"==l.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);
return k}
;var Hi=window.ytcsi&&window.ytcsi.now?window.ytcsi.now:window.performance&&window.performance.timing&&window.performance.now&&window.performance.timing.navigationStart?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};var Ii=Math.pow(2,16)-1,Ji=null,Ki=0,Li={log_event:"events",log_interaction:"interactions"},Mi=Object.create(null);Mi.log_event="GENERIC_EVENT_LOGGING";Mi.log_interaction="INTERACTION_LOGGING";var Ni=new Set(["log_event"]),Oi={},Pi=0,Qi=0,Ri=x("ytLoggingTransportLogPayloadsQueue_")||{};z("ytLoggingTransportLogPayloadsQueue_",Ri);var Si=x("ytLoggingTransportTokensToCttTargetIds_")||{};z("ytLoggingTransportTokensToCttTargetIds_",Si);var Ti=x("ytLoggingTransportDispatchedStats_")||{};
z("ytLoggingTransportDispatchedStats_",Ti);z("ytytLoggingTransportCapturedTime_",x("ytLoggingTransportCapturedTime_")||{});function Ui(){tg(Pi);tg(Qi);Qi=0;if(!fb(Ri)){for(var a in Ri){var b=Oi[a];b&&(Vi(a,b),delete Ri[a])}fb(Ri)||Wi()}}
function Wi(){li("web_gel_timeout_cap")&&!Qi&&(Qi=S(Ui,6E4));tg(Pi);Pi=S(Ui,R("LOGGING_BATCH_TIMEOUT",ki("web_gel_debounce_ms",1E4)))}
function Xi(a,b){b=void 0===b?"":b;Ri[a]=Ri[a]||{};Ri[a][b]=Ri[a][b]||[];return Ri[a][b]}
function Vi(a,b){var c=Li[a],d=Ti[a]||{};Ti[a]=d;var e=Math.round(Hi());for(l in Ri[a]){var f=hb,g=b.f;g={client:{hl:g.kb,gl:g.jb,clientName:g.hb,clientVersion:g.ib,configInfo:g.gb}};var h=window.devicePixelRatio;h&&1!=h&&(g.client.screenDensityFloat=String(h));R("DELEGATED_SESSION_ID")&&!li("pageid_as_header_web")&&(g.user={onBehalfOfUser:R("DELEGATED_SESSION_ID")});f=f({context:g});f[c]=Xi(a,l);d.dispatchedEventCount=d.dispatchedEventCount||0;d.dispatchedEventCount+=f[c].length;if(g=Si[l])a:{var k=
l;if(g.videoId)h="VIDEO";else if(g.playlistId)h="PLAYLIST";else break a;f.credentialTransferTokenTargetId=g;f.context=f.context||{};f.context.user=f.context.user||{};f.context.user.credentialTransferTokens=[{token:k,scope:h}]}delete Si[l];f.requestTimeMs=e;if(g=qg("EVENT_ID"))h=(R("BATCH_CLIENT_COUNTER",void 0)||0)+1,h>Ii&&(h=1),pg("BATCH_CLIENT_COUNTER",h),g={serializedEventId:g,clientCounter:h},f.serializedClientEventId=g,Ji&&Ki&&li("log_gel_rtt_web")&&(f.previousBatchInfo={serializedClientEventId:Ji,
roundtripMs:Ki}),Ji=g,Ki=0;Yi(b,a,f,{retry:Ni.has(a),onSuccess:y(Zi,this,Hi())})}if(d.previousDispatchMs){c=e-d.previousDispatchMs;var l=d.diffCount||0;d.averageTimeBetweenDispatchesMs=l?(d.averageTimeBetweenDispatchesMs*l+c)/(l+1):c;d.diffCount=l+1}d.previousDispatchMs=e}
function Zi(a){Ki=Math.round(Hi()-a)}
;var $i=x("ytLoggingGelSequenceIdObj_")||{};z("ytLoggingGelSequenceIdObj_",$i);function aj(a,b,c){c=void 0===c?{}:c;var d={"X-Goog-Visitor-Id":c.visitorData||R("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.Rb||R("AUTHORIZATION"))||(a?b="Bearer "+x("gapi.auth.getToken")().Qb:b=be([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=R("SESSION_INDEX",0),li("pageid_as_header_web")&&(d["X-Goog-PageId"]=R("DELEGATED_SESSION_ID")));return d}
function bj(a){a=Object.assign({},a);delete a.Authorization;var b=be();if(b){var c=new Xe;c.update(qg("INNERTUBE_API_KEY"));c.update(b);b=c.digest();c=3;!1===c||void 0===c?c=0:!0===c&&(c=3);if(!uc){uc={};for(var d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),e=["+/=","+/","-_=","-_.","-_"],f=0;5>f;f++){var g=d.concat(e[f].split(""));tc[f]=g;for(var h=0;h<g.length;h++){var k=g[h];void 0===uc[k]&&(uc[k]=h)}}}c=tc[c];d=[];for(e=0;e<b.length;e+=3){var l=b[e],n=(f=e+1<b.length)?
b[e+1]:0;k=(g=e+2<b.length)?b[e+2]:0;h=l>>2;l=(l&3)<<4|n>>4;n=(n&15)<<2|k>>6;k&=63;g||(k=64,f||(n=64));d.push(c[h],c[l],c[n]||"",c[k]||"")}a.hash=d.join("")}return a}
;function cj(){var a=new fg;(a=a.isAvailable()?new lg(a,"yt.innertube"):null)||(a=new gg("yt.innertube"),a=a.isAvailable()?a:null);this.f=a?new bg(a):null;this.g=document.domain||window.location.hostname}
cj.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.f)try{this.f.set(a,b,Ka()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(sf(b))}catch(f){return}else e=escape(b);b=this.g;wc.set(""+a,e,c,"/",void 0===b?"youtube.com":b,!1)};
cj.prototype.get=function(a,b){var c=void 0,d=!this.f;if(!d)try{c=this.f.get(a)}catch(e){d=!0}if(d&&(c=wc.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
cj.prototype.remove=function(a){this.f&&this.f.remove(a);var b=this.g;wc.remove(""+a,"/",void 0===b?"youtube.com":b)};var dj=new cj;function ej(a,b,c,d){if(d)return null;d=dj.get("nextId",!0)||1;var e=dj.get("requests",!0)||{};e[d]={method:a,request:b,authState:bj(c),requestTime:Math.round(Hi())};dj.set("nextId",d+1,86400,!0);dj.set("requests",e,86400,!0);return d}
function fj(a){var b=dj.get("requests",!0)||{};delete b[a];dj.set("requests",b,86400,!0)}
function gj(a){var b=dj.get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(Hi())-d.requestTime)){var e=d.authState,f=bj(aj(!1));gb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(Hi())),Yi(a,d.method,e,{}));delete b[c]}}dj.set("requests",b,86400,!0)}}
;function hj(a){var b=this;this.f=a||{eb:qg("INNERTUBE_API_KEY"),fb:qg("INNERTUBE_API_VERSION"),gb:R("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),hb:R("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),ib:qg("INNERTUBE_CONTEXT_CLIENT_VERSION"),kb:qg("INNERTUBE_CONTEXT_HL"),jb:qg("INNERTUBE_CONTEXT_GL"),lb:qg("INNERTUBE_HOST_OVERRIDE")||"",mb:!!R("INNERTUBE_USE_THIRD_PARTY_AUTH",!1)};Mg(function(){gj(b)},0,5E3)}
function Yi(a,b,c,d){!R("VISITOR_DATA")&&.01>Math.random()&&sg(Error("Missing VISITOR_DATA when sending innertube request."),"WARNING");var e={headers:{"Content-Type":"application/json"},method:"POST",J:c,Ea:"JSON",Da:function(){},
wb:d.Da,onSuccess:function(r,q){if(d.onSuccess)d.onSuccess(q)},
Aa:function(r){if(d.onSuccess)d.onSuccess(r)},
onError:function(r,q){if(d.onError)d.onError(q)},
Xb:function(r){if(d.onError)d.onError(r)},
timeout:d.timeout,withCredentials:!0},f="",g=a.f.lb;g&&(f=g);g=a.f.mb||!1;var h=aj(g,f,d);Object.assign(e.headers,h);e.headers.Authorization&&!f&&(e.headers["x-origin"]=window.location.origin);var k=vh(""+f+("/youtubei/"+a.f.fb+"/"+b),{alt:"json",key:a.f.eb}),l;if(d.retry&&li("retry_web_logging_batches")&&"www.youtube-nocookie.com"!=f&&(l=ej(b,c,h,g))){var n=e.onSuccess,t=e.Aa;e.onSuccess=function(r,q){fj(l);n(r,q)};
c.Aa=function(r,q){fj(l);t(r,q)}}try{li("use_fetch_for_op_xhr")?yi(k,e):(e.method="POST",e.J||(e.J={}),Bi(k,e))}catch(r){if("InvalidAccessError"==r)l&&(fj(l),l=0),sg(Error("An extension is blocking network request."),"WARNING");
else throw r;}l&&Mg(function(){gj(a)},0,5E3)}
;var ij=Ka().toString();var jj;
if(!(jj=x("ytLoggingTimeDocumentNonce_"))){var kj;a:{if(window.crypto&&window.crypto.getRandomValues)try{var lj=Array(16),mj=new Uint8Array(16);window.crypto.getRandomValues(mj);for(var nj=0;nj<lj.length;nj++)lj[nj]=mj[nj];kj=lj;break a}catch(a){}for(var oj=Array(16),pj=0;16>pj;pj++){for(var qj=Ka(),rj=0;rj<qj%23;rj++)oj[pj]=Math.random();oj[pj]=Math.floor(256*Math.random())}if(ij)for(var sj=1,tj=0;tj<ij.length;tj++)oj[sj%16]=oj[sj%16]^oj[(sj-1)%16]/4^ij.charCodeAt(tj),sj++;kj=oj}for(var uj=kj,vj=
[],wj=0;wj<uj.length;wj++)vj.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(uj[wj]&63));jj=vj.join("")}var xj=jj;z("ytLoggingTimeDocumentNonce_",xj);function yj(a){a=void 0===a?0:a;return 0==a?"client-screen-nonce":"client-screen-nonce."+a}
function zj(a){a=void 0===a?0:a;return 0==a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
z("yt_logging_screen.getRootVeType",function(a){return R(zj(void 0===a?0:a),void 0)});
z("yt_logging_screen.getCurrentCsn",function(a){a=void 0===a?0:a;var b=R(yj(a));b||0!=a||(li("kevlar_client_side_screens")?b="UNDEFINED_CSN":b=R("EVENT_ID"));return b?b:null});
z("yt_logging_screen.setCurrentScreen",function(a,b,c){c=void 0===c?0:c;if(a!==R(yj(c))||b!==R(zj(c)))pg(yj(c),a),pg(zj(c),b),0==c&&(b=function(){setTimeout(function(){if(a){var d={clientDocumentNonce:xj,clientScreenNonce:a};var e=void 0===e?{}:e;var f={};f.eventTimeMs=Math.round(e.timestamp||Hi());f.foregroundHeartbeatScreenAssociated=d;d=String;if(e.timestamp)var g=-1;else g=x("_lact",window),g=null==g?-1:Math.max(Ka()-g,0);f.context={lastActivityMs:d(g)};li("log_sequence_info_on_gel_web")&&e.Ga&&
(d=f.context,g=e.Ga,$i[g]=g in $i?$i[g]+1:0,d.sequence={index:$i[g],groupKey:g},e.Ub&&delete $i[e.Ga]);d="log_event";if(e=e.Tb){g=e;var h={};g.videoId?h.videoId=g.videoId:g.playlistId&&(h.playlistId=g.playlistId);Si[e.token]=h;e=Xi(d,e.token)}else e=Xi(d);e.push(f);hj&&(Oi[d]=new hj);e.length>=(ki("web_logging_max_batch")||100)?Ui():Wi()}},0)},"requestAnimationFrame"in window?window.requestAnimationFrame(b):b())});function Aj(){oh.call(this,"button");this.f=null;this.i=[];this.g={}}
A(Aj,oh);ya(Aj);m=Aj.prototype;m.register=function(){Y(this,"click",this.La);Y(this,"keydown",this.sa);Y(this,"keypress",this.ta);ph(this,"page-scroll",this.ab)};
m.unregister=function(){Z(this,"click",this.La);Z(this,"keydown",this.sa);Z(this,"keypress",this.ta);Bj(this);this.g={};Aj.B.unregister.call(this)};
m.La=function(a){a&&!a.disabled&&(this.toggle(a),this.click(a))};
m.sa=function(a,b,c){if(!(c.altKey||c.ctrlKey||c.shiftKey||c.metaKey)&&(b=Cj(this,a))){var d=function(g){var h="";g.tagName&&(h=g.tagName.toLowerCase());return"ul"==h||"table"==h},e;
d(b)?e=b:e=Sc(b,d);if(e){e=e.tagName.toLowerCase();if("ul"==e)var f=this.rb;else"table"==e&&(f=this.qb);f&&Dj(this,a,b,c,y(f,this))}}};
m.ab=function(){var a=this.g,b=0;for(d in a)b++;if(0!=b)for(var c in a){b=a[c];var d=K(b.activeButtonNode||b.parentNode,X(this));if(void 0==d||void 0==b)break;Ej(this,d,b,!0)}};
function Dj(a,b,c,d,e){var f=Yh(c),g=9==d.keyCode;if(g||32==d.keyCode||13==d.keyCode)if(d=Fj(a,c)){if(v(d.firstElementChild))b=d.firstElementChild;else for(b=d.firstChild;b&&1!=b.nodeType;)b=b.nextSibling;if("a"==b.tagName.toLowerCase()){var h=void 0===h?{}:h;var k=void 0===k?"":k;var l=void 0===l?window:l;l=l.location;h=ld(b.href,h)+k;h instanceof tb||h instanceof tb||(h="object"==typeof h&&h.U?h.T():String(h),vb.test(h)||(h="about:invalid#zClosurez"),h=wb(h));l.href=h instanceof tb&&h.constructor===
tb&&h.g===ub?h.f:"type_error:SafeUrl"}else ih(b)}else g&&Gj(a,b);else f?27==d.keyCode?(Fj(a,c),Gj(a,b)):e(b,c,d):(h=N(b,X(a,"reverse"))?38:40,d.keyCode==h&&(ih(b),d.preventDefault()))}
m.ta=function(a,b,c){c.altKey||c.ctrlKey||c.shiftKey||c.metaKey||(a=Cj(this,a),Yh(a)&&c.preventDefault())};
function Fj(a,b){var c=X(a,"menu-item-highlight"),d=J(c,b);d&&P(d,c);return d}
function Hj(a,b,c){O(c,X(a,"menu-item-highlight"));var d=c.getAttribute("id");d||(d=X(a,"item-id-"+Ea(c)),c.setAttribute("id",d));b.setAttribute("aria-activedescendant",d)}
m.qb=function(a,b,c){var d=Fj(this,b),e=Yg("table",b);b=Fc(document,"td",null,e);d=Ij(d,b,Fc(document,"td",null,Yg("tr",e)).length,c);-1!=d&&(Hj(this,a,b[d]),c.preventDefault())};
m.rb=function(a,b,c){if(40==c.keyCode||38==c.keyCode){var d=Fj(this,b);b=Oa(Fc(document,"li",null,b),Yh);Hj(this,a,b[Ij(d,b,1,c)]);c.preventDefault()}};
function Ij(a,b,c,d){var e=b.length;a=Na(b,a);if(-1==a)if(38==d.keyCode)a=e-c;else{if(37==d.keyCode||38==d.keyCode||40==d.keyCode)a=0}else 39==d.keyCode?(a%c==c-1&&(a-=c),a+=1):37==d.keyCode?(0==a%c&&(a+=c),--a):38==d.keyCode?(a<c&&(a+=e),a-=c):40==d.keyCode&&(a>=e-c&&(a-=e),a+=c);return a}
function Jj(a,b){var c=b.iframeMask;c||(c=document.createElement("IFRAME"),c.src='javascript:""',c.className=X(a,"menu-mask"),$h(c),b.iframeMask=c);return c}
function Ej(a,b,c,d){var e=K(b,X(a,"group")),f=!!a.j(b,"button-menu-ignore-group");e=e&&!f?e:b;f=9;var g=8,h=Gd(b);if(N(b,X(a,"reverse"))){f=8;g=9;h=h.top+"px";try{c.style.maxHeight=h}catch(n){}}N(b,"flip")&&(N(b,X(a,"reverse"))?(f=12,g=13):(f=13,g=12));var k;a.j(b,"button-has-sibling-menu")?k=zd(e):a.j(b,"button-menu-root-container")&&(k=Kj(a,b));E&&!lc("8")&&(k=null);if(k){var l=Gd(k);l=new rd(-l.top,l.left,l.top,-l.left)}k=new G(0,1);N(b,X(a,"center-menu"))&&(k.x-=Math.round((Ed(c).width-Ed(b).width)/
2));d&&(k.y+=Kc(document).y);if(a=Jj(a,b))b=Ed(c),a.style.width=b.width+"px",a.style.height=b.height+"px",Bf(e,f,a,g,k,l,197),d&&td(a,"position","fixed");Bf(e,f,c,g,k,l,197)}
function Kj(a,b){if(a.j(b,"button-menu-root-container")){var c=a.j(b,"button-menu-root-container");return K(b,c)}return document.body}
m.Na=function(a){if(a){var b=Cj(this,a);if(b){a.setAttribute("aria-pressed","true");a.setAttribute("aria-expanded","true");b.originalParentNode=b.parentNode;b.activeButtonNode=a;b.parentNode.removeChild(b);var c;this.j(a,"button-has-sibling-menu")?c=a.parentNode:c=Kj(this,a);c.appendChild(b);b.style.minWidth=a.offsetWidth-2+"px";var d=Jj(this,a);d&&c.appendChild(d);(c=!!this.j(a,"button-menu-fixed"))&&(this.g[Vg(a).toString()]=b);Ej(this,a,b,c);Cg("yt-uix-button-menu-before-show",a,b);Zh(b);d&&Zh(d);
this.R(a,"button-menu-action",!0);O(a,X(this,"active"));b=y(this.Ma,this,a,!1);d=y(this.Ma,this,a,!0);c=y(this.Bb,this,a,void 0);this.f&&Cj(this,this.f)==Cj(this,a)||Bj(this);Bg("yt-uix-button-menu-show",a);jh(this.i);this.i=[W(document,"click",d),W(document,"contextmenu",b),W(window,"resize",c)];this.f=a}}};
function Gj(a,b){if(b){var c=Cj(a,b);if(c){a.f=null;b.setAttribute("aria-pressed","false");b.setAttribute("aria-expanded","false");b.removeAttribute("aria-activedescendant");$h(c);a.R(b,"button-menu-action",!1);var d=Jj(a,b),e=Vg(c).toString();delete a.g[e];S(function(){d&&d.parentNode&&($h(d),d.parentNode.removeChild(d));c.originalParentNode&&(c.parentNode.removeChild(c),c.originalParentNode.appendChild(c),c.originalParentNode=null,c.activeButtonNode=null)},1)}e=K(b,X(a,"group"));
var f=[X(a,"active")];e&&f.push(X(a,"group-active"));cf(b,f);Bg("yt-uix-button-menu-hide",b);jh(a.i);a.i.length=0}}
m.Bb=function(a,b){var c=Cj(this,a);if(c){b&&(b instanceof Eb?Kb(c,b):Rc(c,b));var d=!!this.j(a,"button-menu-fixed");Ej(this,a,c,d)}};
m.Ma=function(a,b,c){c=gh(c);var d=K(c,X(this));if(d){d=Cj(this,d);var e=Cj(this,a);if(d==e)return}d=K(c,X(this,"menu"));e=d==Cj(this,a);var f=N(c,X(this,"menu-item")),g=N(c,X(this,"menu-close"));if(!d||e&&(f||g))Gj(this,a),d&&b&&this.j(a,"button-menu-indicate-selected")&&((a=J(X(this,"content"),a))&&Rc(a,$c(c)),Lj(this,d,c))};
function Lj(a,b,c){var d=X(a,"menu-item-selected");C(Ec(d,b),function(e){P(e,d)});
O(c.parentNode,d)}
function Cj(a,b){if(!b.widgetMenu){var c=a.j(b,"button-menu-id");c=c&&I(c);var d=X(a,"menu");c?bf(c,[d,X(a,"menu-external")]):c=J(d,b);b.widgetMenu=c}return b.widgetMenu}
m.isToggled=function(a){return N(a,X(this,"toggled"))};
m.toggle=function(a){if(this.j(a,"button-toggle")){var b=K(a,X(this,"group")),c=X(this,"toggled"),d=N(a,c);if(b&&this.j(b,"button-toggle-group")){var e=this.j(b,"button-toggle-group");C(Ec(X(this),b),function(f){f!=a||"optional"==e&&d?(P(f,c),f.removeAttribute("aria-pressed")):(O(a,c),f.setAttribute("aria-pressed","true"))})}else d?a.removeAttribute("aria-pressed"):a.setAttribute("aria-pressed","true"),ff(a,c)}};
m.click=function(a){if(Cj(this,a)){var b=Cj(this,a);if(b){var c=K(b.activeButtonNode||b.parentNode,X(this));c&&c!=a?(Gj(this,c),S(y(this.Na,this,a),1)):Yh(b)?Gj(this,a):this.Na(a)}a.focus()}this.R(a,"button-action")};
function Bj(a){a.f&&Gj(a,a.f)}
;function Mj(a){oh.call(this,a);this.i=null}
A(Mj,oh);m=Mj.prototype;m.F=function(a){var b=oh.prototype.F.call(this,a);return b?b:a};
m.register=function(){ph(this,"yt-uix-kbd-nav-move-out-done",this.hide)};
m.dispose=function(){Nj(this);Mj.B.dispose.call(this)};
m.j=function(a,b){var c=Mj.B.j.call(this,a,b);return c?c:(c=Mj.B.j.call(this,a,"card-config"))&&(c=x(c))&&c[b]?c[b]:null};
m.show=function(a){var b=this.F(a);if(b){O(b,X(this,"active"));var c=Oj(this,a,b);if(c){c.cardTargetNode=a;c.cardRootNode=b;Pj(this,a,c);var d=X(this,"card-visible"),e=this.j(a,"card-delegate-show")&&this.j(b,"card-action");this.R(b,"card-action",a);this.i=a;$h(c);S(y(function(){e||(Zh(c),Bg("yt-uix-card-show",b,a,c));Qj(c);O(c,d);Bg("yt-uix-kbd-nav-move-in-to",c)},this),10)}}};
function Oj(a,b,c){var d=c||b,e=X(a,"card");c=Rj(a,d);var f=I(X(a,"card")+Vg(d));if(f)return a=J(X(a,"card-body"),f),Qc(a,c)||(Nc(c),a.appendChild(c)),f;f=document.createElement("div");f.id=X(a,"card")+Vg(d);f.className=e;(d=a.j(d,"card-class"))&&bf(f,d.split(/\s+/));d=document.createElement("div");d.className=X(a,"card-border");b=a.j(b,"orientation")||"horizontal";e=document.createElement("div");e.className="yt-uix-card-border-arrow yt-uix-card-border-arrow-"+b;var g=document.createElement("div");
g.className=X(a,"card-body");a=document.createElement("div");a.className="yt-uix-card-body-arrow yt-uix-card-body-arrow-"+b;Nc(c);g.appendChild(c);d.appendChild(a);d.appendChild(g);f.appendChild(e);f.appendChild(d);document.body.appendChild(f);return f}
function Pj(a,b,c){var d=a.j(b,"orientation")||"horizontal",e=J(X(a,"anchor"),b)||b,f=a.j(b,"position"),g=!!a.j(b,"force-position"),h=a.j(b,"position-fixed");d="horizontal"==d;var k="bottomright"==f||"bottomleft"==f,l="topright"==f||"bottomright"==f;if(l&&k){var n=13;var t=8}else l&&!k?(n=12,t=9):!l&&k?(n=9,t=12):(n=8,t=13);var r=Hd(document.body);f=Hd(b);r!=f&&(n^=4);if(d){f=b.offsetHeight/2-12;var q=new G(-12,b.offsetHeight+6)}else f=b.offsetWidth/2-6,q=new G(b.offsetWidth+6,-12);var u=Ed(c);f=
Math.min(f,(d?u.height:u.width)-24-6);6>f&&(f=6,d?q.y+=12-b.offsetHeight/2:q.x+=12-b.offsetWidth/2);u=null;g||(u=10);b=X(a,"card-flip");a=X(a,"card-reverse");df(c,b,l);df(c,a,k);u=Bf(e,n,c,t,q,null,u);!g&&u&&(u&48&&(l=!l,n^=4,t^=4),u&192&&(k=!k,n^=1,t^=1),df(c,b,l),df(c,a,k),Bf(e,n,c,t,q));h&&(e=parseInt(c.style.top,10),g=Kc(document).y,td(c,"position","fixed"),td(c,"top",e-g+"px"));r&&(c.style.right="",e=Gd(c),e.left=e.left||parseInt(c.style.left,10),g=Ic(window),c.style.left="",c.style.right=g.width-
e.left-e.width+"px");e=J("yt-uix-card-body-arrow",c);g=J("yt-uix-card-border-arrow",c);d=d?k?"top":"bottom":!r&&l||r&&!l?"left":"right";e.setAttribute("style","");g.setAttribute("style","");e.style[d]=f+"px";g.style[d]=f+"px";k=J("yt-uix-card-arrow",c);l=J("yt-uix-card-arrow-background",c);k&&l&&(c="right"==d?Ed(c).width-f-13:f+11,f=c/Math.sqrt(2),k.style.left=c+"px",k.style.marginLeft="1px",l.style.marginLeft=-f+"px",l.style.marginTop=f+"px")}
m.hide=function(a){if(a=this.F(a)){var b=I(X(this,"card")+Vg(a));b&&(P(a,X(this,"active")),P(b,X(this,"card-visible")),$h(b),this.i=null,b.cardTargetNode=null,b.cardRootNode=null,b.cardMask&&(Nc(b.cardMask),b.cardMask=null))}};
function Nj(a){a.i&&a.hide(a.i)}
m.Ab=function(a,b){var c=this.F(a);if(c){if(b){var d=Rj(this,c);if(!d)return;b instanceof Eb?Kb(d,b):Rc(d,b)}N(c,X(this,"active"))&&(c=Oj(this,a,c),Pj(this,a,c),Zh(c),Qj(c))}};
m.isActive=function(a){return(a=this.F(a))?N(a,X(this,"active")):!1};
function Rj(a,b){var c=b.cardContentNode;if(!c){var d=X(a,"content"),e=X(a,"card-content");(c=(c=a.j(b,"card-id"))?I(c):J(d,b))||(c=document.createElement("div"));var f=c;P(f,d);O(f,e);b.cardContentNode=c}return c}
function Qj(a){var b=a.cardMask;b||(b=document.createElement("IFRAME"),b.src='javascript:""',bf(b,["yt-uix-card-iframe-mask"]),a.cardMask=b);b.style.position=a.style.position;b.style.top=a.style.top;b.style.left=a.offsetLeft+"px";b.style.height=a.clientHeight+"px";b.style.width=a.clientWidth+"px";document.body.appendChild(b)}
;function Sj(){oh.call(this,"kbd-nav")}
var Tj;A(Sj,oh);ya(Sj);m=Sj.prototype;m.register=function(){Y(this,"keydown",this.qa);ph(this,"yt-uix-kbd-nav-move-in",this.ya);ph(this,"yt-uix-kbd-nav-move-in-to",this.sb);ph(this,"yt-uix-kbd-move-next",this.za);ph(this,"yt-uix-kbd-nav-move-to",this.Y)};
m.unregister=function(){Z(this,"keydown",this.qa);jh(Tj)};
m.qa=function(a,b,c){var d=c.keyCode;if(a=K(a,X(this)))switch(d){case 13:case 32:this.ya(a);break;case 27:c.preventDefault();c.stopImmediatePropagation();a:{for(c=hf(a,"kbdNavMoveOut");!c;){c=K(a.parentElement,X(this));if(!c)break a;c=hf(c,"kbdNavMoveOut")}c=I(c);this.Y(c);Bg("yt-uix-kbd-nav-move-out-done",c)}break;case 40:case 38:if((b=c.target)&&N(a,X(this,"list")))switch(d){case 40:this.za(b,a);break;case 38:d=document.activeElement==a,a=Uj(a),b=a.indexOf(b),0>b&&!d||(b=d?a.length-1:(a.length+
b-1)%a.length,a[b].focus(),Vj(this,a[b]))}c.preventDefault()}};
m.ya=function(a){var b=hf(a,"kbdNavMoveIn");b=I(b);Wj(this,a,b);this.Y(b)};
m.sb=function(a){var b=document;try{var c=b&&b.activeElement;var d=c&&c.nodeName?c:null}catch(e){d=null}Wj(this,d,a);this.Y(a)};
m.Y=function(a){if(a)if(Wc(a))a.focus();else{var b=Sc(a,function(c){return Pc(c)?Wc(c):!1});
b?b.focus():(a.setAttribute("tabindex","-1"),a.focus())}};
function Wj(a,b,c){if(b&&c)if(O(c,X(a)),a=b.id,a||(a="kbd-nav-"+Math.floor(1E6*Math.random()+1),b.id=a),b=a,gf&&c.dataset)c.dataset.kbdNavMoveOut=b;else{if(/-[a-z]/.test("kbdNavMoveOut"))throw Error("");c.setAttribute("data-"+"kbdNavMoveOut".replace(/([A-Z])/g,"-$1").toLowerCase(),b)}}
m.za=function(a,b){var c=document.activeElement==b,d=Uj(b),e=d.indexOf(a);0>e&&!c||(c=c?0:(e+1)%d.length,d[c].focus(),Vj(this,d[c]))};
function Vj(a,b){if(b){var c=bd(b,"LI");c&&(O(c,X(a,"highlight")),Tj=W(b,"blur",y(function(d){P(d,X(this,"highlight"));jh(Tj)},a,c)))}}
function Uj(a){if("UL"!=a.tagName.toUpperCase())return[];a=Oa(Oc(a),function(b){return"LI"==b.tagName.toUpperCase()});
return Oa(Pa(a,function(b){return Yh(b)?Sc(b,function(c){return Pc(c)?Wc(c):!1}):!1}),function(b){return!!b})}
;function Xj(){oh.call(this,"menu");this.g=this.f=null;this.i={};this.v={};this.l=null}
A(Xj,oh);ya(Xj);function Yj(a){var b=Xj.A();if(N(a,X(b)))return a;var c=b.F(a);return c?c:K(a,X(b,"content"))==b.f?b.g:null}
m=Xj.prototype;m.register=function(){Y(this,"click",this.pa);Y(this,"mouseenter",this.Ya);ph(this,"page-scroll",this.bb);ph(this,"yt-uix-kbd-nav-move-out-done",function(a){a=this.F(a);Zj(this,a)});
this.l=new Q};
m.unregister=function(){Z(this,"click",this.pa);this.g=this.f=null;jh($a(cb(this.i)));this.i={};bb(this.v,function(a){Nc(a)},this);
this.v={};$e(this.l);this.l=null;Xj.B.unregister.call(this)};
m.pa=function(a,b,c){a&&(b=ak(this,a),!b.disabled&&Xg(c.target,b)&&bk(this,a))};
m.Ya=function(a,b,c){a&&N(a,X(this,"hover"))&&Xg(c.target,ak(this,a))&&bk(this,a,!0)};
m.bb=function(){this.f&&this.g&&ck(this,this.g,this.f)};
function ck(a,b,c){var d=dk(a,b);if(d){var e=Ed(c);if(e instanceof Ac){var f=e.height;e=e.width}else throw Error("missing height argument");d.style.width=Dd(e,!0);d.style.height=Dd(f,!0)}c==a.f&&(e=9,f=8,N(b,X(a,"reversed"))&&(e^=1,f^=1),N(b,X(a,"flipped"))&&(e^=4,f^=4),a=new G(0,1),d&&Bf(b,e,d,f,a,null,197),Bf(b,e,c,f,a,null,197))}
function bk(a,b,c){ek(a,b)&&!c?Zj(a,b):(fk(a,b),!a.f||Xg(b,a.f)?a.Oa(b):Uf(a.l,y(a.Oa,a,b)))}
m.Oa=function(a){if(a){var b=gk(this,a);if(b){Cg("yt-uix-menu-before-show",a,b);this.f?Xg(a,this.f)||Zj(this,this.g):(this.g=a,this.f=b,N(a,X(this,"sibling-content"))||(Nc(b),document.body.appendChild(b)),b.style.minWidth=ak(this,a).offsetWidth-2+"px");var c=dk(this,a);c&&b.parentNode&&b.parentNode.insertBefore(c,b.nextSibling);P(b,X(this,"content-hidden"));ck(this,a,b);bf(ak(this,a),[X(this,"trigger-selected"),"yt-uix-button-toggled"]);Bg("yt-uix-menu-show",a);hk(b);ik(this,a);Bg("yt-uix-kbd-nav-move-in-to",
b);var d=y(this.Cb,this,a),e=y(this.ob,this,a);c=Ea(a).toString();this.i[c]=[W(b,"click",e),W(document,"click",d)];N(a,X(this,"indicate-selected"))&&(d=y(this.pb,this,a),this.i[c].push(W(b,"click",d)));N(a,X(this,"hover"))&&(a=y(this.Za,this,a),this.i[c].push(W(document,"mousemove",a)))}}};
m.Za=function(a,b){var c=gh(b);c&&(Xg(c,ak(this,a))||jk(this,c)||kk(this,a))};
m.Cb=function(a,b){var c=gh(b);if(c){if(jk(this,c)){var d=K(c,X(this,"content")),e=bd(c,"LI");e&&d&&Qc(d,e)&&Cg("yt-uix-menu-item-clicked",c);c=K(c,X(this,"close-on-select"));if(!c)return;d=Yj(c)}Zj(this,d||a)}};
function fk(a,b){if(b){var c=K(b,X(a,"content"));c&&C(Ec(X(a),c),function(d){!Xg(d,b)&&ek(this,d)&&kk(this,d)},a)}}
function Zj(a,b){if(b){var c=[];c.push(b);var d=gk(a,b);d&&(d=Ec(X(a),d),d=Va(d),c=c.concat(d),C(c,function(e){ek(this,e)&&kk(this,e)},a))}}
function kk(a,b){if(b){var c=gk(a,b);cf(ak(a,b),[X(a,"trigger-selected"),"yt-uix-button-toggled"]);O(c,X(a,"content-hidden"));var d=gk(a,b);d&&Gc(d,{"aria-expanded":"false"});(d=dk(a,b))&&d.parentNode&&Nc(d);c&&c==a.f&&(a.g.appendChild(c),a.f=null,a.g=null,a.l&&a.l.K("ROOT_MENU_REMOVED"));Bg("yt-uix-menu-hide",b);c=Ea(b).toString();jh(a.i[c]);delete a.i[c]}}
m.ob=function(a,b){var c=gh(b);c&&lk(this,a,c)};
m.pb=function(a,b){var c=gh(b);if(c){var d=ak(this,a);if(d&&(c=bd(c,"LI")))if(c=$c(c).trim(),d.hasChildNodes()){var e=Aj.A();(d=J(X(e,"content"),d))&&Rc(d,c)}else Rc(d,c)}};
function ik(a,b){var c=gk(a,b);if(c){C(c.children,function(e){"LI"==e.tagName&&Gc(e,{role:"menuitem"})});
Gc(c,{"aria-expanded":"true"});var d=c.id;d||(d="aria-menu-id-"+Ea(c),c.id=d);(c=ak(a,b))&&Gc(c,{"aria-controls":d})}}
function lk(a,b,c){var d=gk(a,b);d&&N(b,X(a,"checked"))&&(a=bd(c,"LI"))&&(a=J("yt-ui-menu-item-checked-hid",a))&&(C(Ec("yt-ui-menu-item-checked",d),function(e){ef(e,"yt-ui-menu-item-checked","yt-ui-menu-item-checked-hid")}),ef(a,"yt-ui-menu-item-checked-hid","yt-ui-menu-item-checked"))}
function ek(a,b){var c=gk(a,b);return c?!N(c,X(a,"content-hidden")):!1}
function hk(a){C(Fc(document,"UL",null,a),function(b){b.tabIndex=0;var c=Sj.A();bf(b,[X(c),X(c,"list")])})}
function gk(a,b){var c=Fg(b,"menu-content-id");return c&&(c=I(c))?(bf(c,[X(a,"content"),X(a,"content-external")]),c):b==a.g?a.f:J(X(a,"content"),b)}
function dk(a,b){var c=Ea(b).toString(),d=a.v[c];if(!d){d=document.createElement("IFRAME");d.src='javascript:""';var e=[X(a,"mask")];C(af(b),function(f){e.push(f+"-mask")});
bf(d,e);a.v[c]=d}return d||null}
function ak(a,b){return J(X(a,"trigger"),b)}
function jk(a,b){return Xg(b,a.f)||Xg(b,a.g)}
;function mk(){Mj.call(this,"clickcard");this.f={};this.g={}}
A(mk,Mj);ya(mk);m=mk.prototype;m.register=function(){mk.B.register.call(this);Y(this,"click",this.ma,"target");Y(this,"click",this.la,"close")};
m.unregister=function(){mk.B.unregister.call(this);Z(this,"click",this.ma,"target");Z(this,"click",this.la,"close");for(var a in this.f)jh(this.f[a]);this.f={};for(a in this.g)jh(this.g[a]);this.g={}};
m.ma=function(a,b,c){c.preventDefault();b=bd(c.target,"button");if(!b||!b.disabled){if(b=this.j(a,"card-target"))a=document,a=w(b)?a.getElementById(b):b;b=this.F(a);this.j(b,"disabled")||(N(b,X(this,"active"))?(this.hide(a),P(b,X(this,"active"))):(this.show(a),O(b,X(this,"active"))))}};
m.show=function(a){mk.B.show.call(this,a);var b=this.F(a),c=Ea(a).toString();if(!Fg(b,"click-outside-persists")){if(this.f[c])return;b=W(document,"click",y(this.na,this,a));var d=W(window,"blur",y(this.na,this,a));this.f[c]=[b,d]}a=W(window,"resize",y(this.Ab,this,a,void 0));this.g[c]=a};
m.hide=function(a){mk.B.hide.call(this,a);a=Ea(a).toString();var b=this.f[a];b&&(jh(b),this.f[a]=null);if(b=this.g[a])jh(b),delete this.g[a]};
m.na=function(a,b){var c="yt-uix"+(this.o?"-"+this.o:"")+"-card",d=null;b.target&&(d=K(b.target,c)||K(Yj(b.target),c));(d=d||K(document.activeElement,c)||K(Yj(document.activeElement),c))||this.hide(a)};
m.la=function(a){(a=K(a,X(this,"card")))&&(a=a.cardTargetNode)&&this.hide(a)};function nk(){Mj.call(this,"hovercard")}
A(nk,Mj);ya(nk);m=nk.prototype;m.register=function(){Y(this,"mouseenter",this.ua,"target");Y(this,"mouseleave",this.wa,"target");Y(this,"mouseenter",this.va,"card");Y(this,"mouseleave",this.xa,"card")};
m.unregister=function(){Z(this,"mouseenter",this.ua,"target");Z(this,"mouseleave",this.wa,"target");Z(this,"mouseenter",this.va,"card");Z(this,"mouseleave",this.xa,"card")};
m.ua=function(a){if(ok!=a){ok&&(this.hide(ok),ok=null);var b=y(this.show,this,a),c=parseInt(this.j(a,"delay-show"),10);b=S(b,-1<c?c:200);Dg(a,"card-timer",b.toString());ok=a;a.alt&&(Dg(a,"card-alt",a.alt),a.alt="");a.title&&(Dg(a,"card-title",a.title),a.title="")}};
m.wa=function(a){var b=parseInt(this.j(a,"card-timer"),10);tg(b);this.F(a).isCardHidable=!0;b=parseInt(this.j(a,"delay-hide"),10);b=-1<b?b:200;S(y(this.cb,this,a),b);if(b=this.j(a,"card-alt"))a.alt=b;if(b=this.j(a,"card-title"))a.title=b};
m.cb=function(a){this.F(a).isCardHidable&&(this.hide(a),ok=null)};
m.va=function(a){a&&(a.cardRootNode.isCardHidable=!1)};
m.xa=function(a){a&&this.hide(a.cardTargetNode)};
var ok=null;function pk(a,b,c,d,e,f){this.f=a;this.w=null;this.i=J("yt-dialog-fg",this.f)||this.f;if(a=J("yt-dialog-title",this.i)){var g="yt-dialog-title-"+Ea(this.i);a.setAttribute("id",g);this.i.setAttribute("aria-labelledby",g)}this.i.setAttribute("tabindex","-1");this.O=J("yt-dialog-focus-trap",this.f);this.W=!1;this.l=new Q;this.D=[];this.D.push(hh(this.f,y(this.tb,this),"yt-dialog-dismiss"));this.D.push(W(this.O,"focus",y(this.Xa,this),!0));qk(this);this.ca=b;this.Ra=c;this.Qa=d;this.G=e;this.Sa=f;this.v=
this.o=null}
var rk={LOADING:"loading",Ob:"content",Pb:"working"};function sk(a,b){a.Z()||a.l.subscribe("post-all",b)}
function qk(a){a=J("yt-dialog-fg-content",a.f);var b=[];bb(rk,function(c){b.push("yt-dialog-show-"+c)});
cf(a,b);O(a,"yt-dialog-show-content")}
m=pk.prototype;
m.show=function(){if(!this.Z()){this.w=document.activeElement;if(!this.Qa){this.g||(this.g=I("yt-dialog-bg"),this.g||(this.g=document.createElement("div"),this.g.id="yt-dialog-bg",this.g.className="yt-dialog-bg",document.body.appendChild(this.g)));var a=window,b=a.document;var c=0;if(b){c=b.body;var d=b.documentElement;if(d&&c)if(a=Ic(a).height,Jc(b)&&d.scrollHeight)c=d.scrollHeight!=a?d.scrollHeight:d.offsetHeight;else{b=d.scrollHeight;var e=d.offsetHeight;d.clientHeight!=e&&(b=c.scrollHeight,e=
c.offsetHeight);c=b>a?b>e?b:e:b<e?b:e}else c=0}this.g.style.height=c+"px";Zh(this.g)}this.ra();c=tk(this);uk(c);this.o=W(document,"keydown",y(this.nb,this));c=this.f;d=yg("player-added",this.ra,this);Dg(c,"player-ready-pubsub-key",d);this.Ra&&(this.v=W(document,"click",y(this.zb,this)));Zh(this.f);this.i.setAttribute("tabindex","0");vk(this);this.G||O(document.body,"yt-dialog-active");Bj(Aj.A());Nj(mk.A());Nj(nk.A());Bg("yt-ui-dialog-show-complete",this)}};
function wk(){return Ra(Ec("yt-dialog"),function(a){return Yh(a)})}
m.ra=function(){if(!this.Sa){var a=this.f;df(document.body,"hide-players",!0);a&&df(a,"preserve-players",!0)}};
function tk(a){var b=Fc(document,"iframe",null,a.f);C(b,function(c){var d=Fg(c,"onload");d&&(d=x(d))&&W(c,"load",d);if(d=Fg(c,"src"))c.src=d},a);
return Va(b)}
function uk(a){C(document.getElementsByTagName("iframe"),function(b){-1==Na(a,b)&&O(b,"iframe-hid")})}
function xk(){C(Ec("iframe-hid"),function(a){P(a,"iframe-hid")})}
m.tb=function(a){a=a.currentTarget;a.disabled||(a=Fg(a,"action")||"",this.dismiss(a))};
m.dismiss=function(a){if(!this.Z()){this.l.K("pre-all");this.l.K("pre-"+a);$h(this.f);Nj(mk.A());Nj(nk.A());this.i.setAttribute("tabindex","-1");wk()||($h(this.g),this.G||P(document.body,"yt-dialog-active"),$g(),xk());this.o&&(jh(this.o),this.o=null);this.v&&(jh(this.v),this.v=null);var b=this.f;if(b){var c=Fg(b,"player-ready-pubsub-key");c&&(Ag(c),Gg(b,"player-ready-pubsub-key"))}this.l.K("post-all");Bg("yt-ui-dialog-hide-complete",this);"cancel"==a&&Bg("yt-ui-dialog-cancelled",this);this.l&&this.l.K("post-"+
a);this.w&&this.w.focus()}};
m.setTitle=function(a){Rc(J("yt-dialog-title",this.f),a)};
m.nb=function(a){S(y(function(){this.ca||27!=a.keyCode||this.dismiss("cancel")},this),0);
9==a.keyCode&&a.shiftKey&&N(document.activeElement,"yt-dialog-fg")&&a.preventDefault()};
m.zb=function(a){"yt-dialog-base"==a.target.className&&this.dismiss("cancel")};
m.Z=function(){return this.W};
m.dispose=function(){Yh(this.f)&&this.dismiss("dispose");jh(this.D);this.D.length=0;S(y(function(){this.w=null},this),0);
this.O=this.i=null;this.l.dispose();this.l=null;this.W=!0};
m.Xa=function(a){a.stopPropagation();vk(this)};
function vk(a){S(y(function(){this.i&&this.i.focus()},a),0)}
z("yt.ui.Dialog",pk);function yk(){oh.call(this,"overlay");this.l=this.g=this.i=this.f=null}
A(yk,oh);ya(yk);m=yk.prototype;m.register=function(){Y(this,"click",this.ga,"target");Y(this,"click",this.hide,"close");zk(this)};
m.unregister=function(){yk.B.unregister.call(this);Z(this,"click",this.ga,"target");Z(this,"click",this.hide,"close");this.l&&(Ag(this.l),this.l=null);this.g&&(jh(this.g),this.g=null)};
m.ga=function(a){if(!this.f||!Yh(this.f.f)){var b=this.F(a);a=Ak(b,a);b||(b=a?a.overlayParentNode:null);if(b&&a){var c=!!this.j(b,"disable-shortcuts")||!1,d=!!this.j(b,"disable-outside-click-dismiss")||!1;this.f=new pk(a,c);this.i=b;var e=J("yt-dialog-fg",a);if(e){var f=this.j(b,"overlay-class")||"",g=this.j(b,"overlay-style")||"default",h=this.j(b,"overlay-shape")||"default";f=f?f.split(" "):[];f.push(X(this,g));f.push(X(this,h));bf(e,f)}this.f.show();Bg("yt-uix-kbd-nav-move-to",e||a);zk(this);c||
d||(c=y(function(k){N(k.target,"yt-dialog-base")&&Bk(this)},this),this.g=W(J("yt-dialog-base",a),"click",c));
this.R(b,"overlay-shown");Bg("yt-uix-overlay-shown",b)}}};
function zk(a){a.l||(a.l=yg("yt-uix-overlay-hide",Ck));a.f&&sk(a.f,function(){var b=yk.A();b.i=null;b.f.dispose();b.f=null})}
function Bk(a){if(a.f){var b=a.i;a.f.dismiss("overlayhide");b&&a.R(b,"overlay-hidden");a.i=null;a.g&&(jh(a.g),a.g=null);a.f=null}}
function Ak(a,b){var c;if(a)if(c=J("yt-dialog",a)){var d=I("body-container");d&&(d.appendChild(c),a.overlayContentNode=c,c.overlayParentNode=a)}else c=a.overlayContentNode;else b&&(c=K(b,"yt-dialog"));return c}
function Dk(){var a=yk.A();if(a.i)a=J("yt-dialog-fg-content",a.i.overlayContentNode);else a:{if(a=Ec("yt-dialog-fg-content"))for(var b=0;b<a.length;b++){var c=K(a[b],"yt-dialog");if(Yh(c)){a=a[b];break a}}a=null}return a}
m.hide=function(a){a&&a.disabled||Bg("yt-uix-overlay-hide")};
function Ck(){Bk(yk.A())}
m.show=function(a){this.ga(a)};var Ek={},Fk=[];function Gk(a){a=K(a,"yt-uix-button-subscription-container");return J("yt-dialog",J("unsubscribe-confirmation-overlay-container",a))}
function Hk(a,b){jh(Fk);Fk.length=0;Ek[b]||(Ek[b]=Gk(a));yk.A().show(Ek[b]);var c=Dk();return new Ef(function(d){Fk.push(hh(c,function(){d()},"overlay-confirmation-unsubscribe-button"))})}
;function Ik(){var a=R("PLAYER_CONFIG");return a&&a.args&&void 0!==a.args.authuser?!0:!(!R("SESSION_INDEX")&&!R("LOGGED_IN"))}
;function Jk(){oh.call(this,"subscription-button")}
A(Jk,oh);ya(Jk);m=Jk.prototype;m.register=function(){Y(this,"click",this.ha);qh(this,Ih,this.Ca);qh(this,Jh,this.Ba);qh(this,Kh,this.xb);qh(this,Nh,this.Ca);qh(this,Oh,this.Ba);qh(this,Ph,this.yb);qh(this,Rh,this.vb);qh(this,Sh,this.ub)};
m.unregister=function(){Z(this,"click",this.ha);Jk.B.unregister.call(this)};
m.isSubscribed=function(a){return!!this.j(a,"is-subscribed")};
m.ha=function(a){var b=this.j(a,"href"),c=this.j(a,"insecure");if(b)a=this.j(a,"target")||"_self",window.open(b,a);else if(!c)if(Ik()){b=this.j(a,"channel-external-id");c=this.j(a,"clicktracking");var d=Kk(this,a),e=this.j(a,"parent-url");if(this.j(a,"is-subscribed")){var f=this.j(a,"subscription-id"),g=new Eh(b,f,d,a,c,e);this.j(a,"show-unsub-confirm-dialog")?Hk(a,b).then(function(){V(Mh,g)}):V(Mh,g)}else V(Hh,new Ch(b,d,c,e))}else Lk(this,a)};
m.Ca=function(a){this.P(a.f,this.Ha,!0)};
m.Ba=function(a){this.P(a.f,this.Ha,!1)};
m.xb=function(a){this.P(a.f,this.Ia,!0,a.g)};
m.yb=function(a){this.P(a.f,this.Ia,!1)};
m.vb=function(a){this.P(a.f,this.Wa)};
m.ub=function(a){this.P(a.f,this.Va)};
m.Ia=function(a,b,c){b?(Dg(a,"is-subscribed","true"),c&&Dg(a,"subscription-id",c)):(Gg(a,"is-subscribed"),Gg(a,"subscription-id"));Mk(this,a)};
function Kk(a,b){if(!a.j(b,"ypc-enabled"))return null;var c=a.j(b,"ypc-item-type"),d=a.j(b,"ypc-item-id");return{itemType:c,itemId:d,subscriptionElement:b}}
m.Ha=function(a,b){var c=K(a,"yt-uix-button-subscription-container");df(c,"yt-subscription-button-disabled-mask-container",b);a.setAttribute("aria-busy",b?"true":"false");a.disabled=b};
function Mk(a,b){var c=a.j(b,"style-type"),d=!!a.j(b,"is-subscribed");c="-"+c;var e="yt-uix-button-subscribed"+c;df(b,"yt-uix-button-subscribe"+c,!d);df(b,e,d);a.j(b,"subscriber-count-tooltip")&&!a.j(b,"subscriber-count-show-when-subscribed")&&(c=X(ai.A()),df(b,c,!d),b.title=d?"":a.j(b,"subscriber-count-title"));d?S(function(){O(b,"hover-enabled")},1E3):P(b,"hover-enabled")}
m.Wa=function(a){var b=!!this.j(a,"ypc-item-type"),c=!!this.j(a,"ypc-item-id");!this.j(a,"ypc-enabled")&&b&&c&&(O(a,"ypc-enabled"),Dg(a,"ypc-enabled","true"))};
m.Va=function(a){this.j(a,"ypc-enabled")&&(P(a,"ypc-enabled"),Gg(a,"ypc-enabled"))};
function Nk(a,b){return Oa(Ec(X(a)),function(c){return b==this.j(c,"channel-external-id")},a)}
m.Ta=function(a,b,c){var d=Za(arguments,2);C(a,function(e){b.apply(this,Ua(e,d))},this)};
m.P=function(a,b,c){var d=Nk(this,a);this.Ta.apply(this,Ua([d],Za(arguments,1)))};
function Lk(a,b){var c=y(function(d){d.discoverable_subscriptions&&pg("SUBSCRIBE_EMBED_DISCOVERABLE_SUBSCRIPTIONS",d.discoverable_subscriptions);this.ha(b)},a);
ii(c)}
;function Ok(a){this.f=a;this.H=null;R("SUBSCRIBE_EMBED_HOVERCARD_URL")&&(Pk(this),W(this.f,"mouseover",y(this.l,this)),W(this.f,"mouseout",y(this.da,this)),W(this.f,"click",y(this.da,this)),Sg(Kh,Ja(this.g,!0),this),Sg(Ph,Ja(this.g,!1),this),Qk(this))}
function Pk(a){var b={url:R("SUBSCRIBE_EMBED_HOVERCARD_URL"),style:"bubble",hideClickDetection:!0,show:!1,anchor:a.f,relayOpen:"-1"};a=y(a.i,a);yh().open(b,a)}
function Qk(a){Ik()||yg("LOGGED_IN",function(){this.H&&(this.da(),this.H.close(),this.H=null,Pk(this))},a)}
Ok.prototype.i=function(a){this.H=a;a=Jk.A().isSubscribed(this.f);this.g(a)};
Ok.prototype.l=function(){this.H&&this.H.restyle({show:!0})};
Ok.prototype.da=function(){this.H&&this.H.restyle({show:!1})};
Ok.prototype.g=function(a){if(this.H){a={isSubscribed:a};try{this.H.send("msg-hovercard-subscription",a,void 0,x("gapi.iframes.SAME_ORIGIN_IFRAMES_FILTER"))}catch(b){}}};function Rk(){xh(function(){var a=Ed(I("yt-subscribe"));a={width:a.width,height:a.height};var b=Sk;yh().ready(a,null,b)})}
function Sk(a){if(a.length&&a[a.length-1]){a=a[a.length-1].eurl;var b=I("yt-subscribe"),c=Jk.A();if(b=J(X(c),b))a&&(Jk.A(),Dg(b,"parent-url",a)),new Ok(b)}}
;function Tk(a){T.call(this,1,arguments);this.f=a}
A(Tk,T);function Uk(a,b){T.call(this,2,arguments);this.g=a;this.f=b}
A(Uk,T);function Vk(a,b,c,d){T.call(this,1,arguments);this.f=b;this.itemType=c||null;this.itemId=d||null}
A(Vk,T);function Wk(a,b){T.call(this,1,arguments);this.g=a;this.f=b||null}
A(Wk,T);function Xk(a){T.call(this,1,arguments)}
A(Xk,T);var Yk=new U("ypc-core-load",Tk),Zk=new U("ypc-guide-sync-success",Uk),$k=new U("ypc-purchase-success",Vk),al=new U("ypc-subscription-cancel",Xk),bl=new U("ypc-subscription-cancel-success",Wk),cl=new U("ypc-init-subscription",Xk);var dl=!1,el=[];function fl(a){a.f?dl?V(Lh,a):V(Yk,new Tk(function(){V(cl,new Xk(a.f))})):gl(a.g,a.l,a.i,a.source)}
function hl(a){a.f?dl?V(Qh,a):V(Yk,new Tk(function(){V(al,new Xk(a.f))})):il(a.g,a.o,a.l,a.i,a.source)}
function jl(a){kl(Va(a.f))}
function ll(a){ml(Va(a.f))}
function nl(a){ol(a.i,a.g,a.f)}
function pl(a){var b=a.itemId,c=a.f.subscriptionId;b&&c&&V(Kh,new Dh(b,c,a.f.channelInfo))}
function ql(a){var b=a.f;bb(a.g,function(c,d){V(Kh,new Dh(d,c,b[d]))})}
function rl(a){V(Ph,new Ah(a.g.itemId));a.f&&a.f.length&&(sl(a.f,Ph),sl(a.f,Rh))}
function gl(a,b,c,d){var e=new Ah(a);V(Ih,e);var f={};f.c=a;c&&(f.eurl=c);d&&(f.source=d);c={};(d=R("PLAYBACK_ID"))&&(c.plid=d);(d=R("EVENT_ID"))&&(c.ei=d);b&&tl(b,c);Bi("/subscription_ajax?action_create_subscription_to_channel=1",{method:"POST",Ka:f,J:c,onSuccess:function(g,h){var k=h.response;V(Kh,new Dh(a,k.id,k.channel_info));k.show_feed_privacy_dialog&&Bg("SHOW-FEED-PRIVACY-SUBSCRIBE-DIALOG",a)},
V:function(){V(Jh,e)}})}
function il(a,b,c,d,e){var f=new Ah(a);V(Nh,f);var g={};g.c=a;d&&(g.eurl=d);e&&(g.source=e);d={};d.c=a;d.s=b;(a=R("PLAYBACK_ID"))&&(d.plid=a);(a=R("EVENT_ID"))&&(d.ei=a);c&&tl(c,d);Bi("/subscription_ajax?action_remove_subscriptions=1",{method:"POST",Ka:g,J:d,onSuccess:function(){V(Ph,f)},
V:function(){V(Oh,f)}})}
function ol(a,b,c){if(a){var d={};d.channel_id=a;switch(b){case "receive-all-updates":d.receive_all_updates=!0;break;case "receive-no-updates":d.receive_no_updates=!0;d.receive_post_updates=!1;break;case "receive-highlight-updates":d.receive_all_updates=!1;d.receive_no_updates=!1;break;default:return}null===c||d.receive_no_updates||(d.receive_post_updates=c);var e=new Bh(a,b,c);Bi("/subscription_ajax?action_update_subscription_preferences=1",{method:"POST",J:d,onError:function(){V(Vh,e)},
onSuccess:function(){V(Uh,e)}})}}
function kl(a){if(a.length){var b=Ya(a,0,40);V("subscription-batch-subscribe-loading");sl(b,Ih);var c={};c.a=b.join(",");var d=function(){V("subscription-batch-subscribe-loaded");sl(b,Jh)};
Bi("/subscription_ajax?action_create_subscription_to_all=1",{method:"POST",J:c,onSuccess:function(e,f){d();var g=f.response,h=g.id;if(Aa(h)&&h.length==b.length){var k=g.channel_info_map;C(h,function(l,n){var t=b[n];V(Kh,new Dh(t,l,k[t]))});
a.length?kl(a):V("subscription-batch-subscribe-finished")}},
onError:function(){d();V("subscription-batch-subscribe-failure")}})}}
function ml(a){if(a.length){var b=Ya(a,0,40);V("subscription-batch-unsubscribe-loading");sl(b,Nh);var c={};c.c=b.join(",");var d=function(){V("subscription-batch-unsubscribe-loaded");sl(b,Oh)};
Bi("/subscription_ajax?action_remove_subscriptions=1",{method:"POST",J:c,onSuccess:function(){d();sl(b,Ph);a.length&&ml(a)},
onError:function(){d()}})}}
function sl(a,b){C(a,function(c){V(b,new Ah(c))})}
function tl(a,b){var c=uh(a),d;for(d in c)b[d]=c[d]}
;z("yt.setConfig",pg);z("yt.config.set",pg);z("ytbin.www.subscribeembed.init",function(){dl=!0;el.push(Sg(Hh,fl),Sg(Mh,hl));dl||el.push(Sg(Lh,fl),Sg(Qh,hl),Sg(Fh,jl),Sg(Gh,ll),Sg(Th,nl),Sg($k,pl),Sg(bl,rl),Sg(Zk,ql));var a=Jk.A(),b=X(a);b in sh||(a.register(),ph(a,"yt-uix-init-"+b,a.init),ph(a,"yt-uix-dispose-"+b,a.dispose),sh[b]=a);Rk()});}).call(this);
