(function(e){function t(t){for(var r,i,c=t[0],u=t[1],s=t[2],l=0,p=[];l<c.length;l++)i=c[l],o[i]&&p.push(o[i][0]),o[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);f&&f(t);while(p.length)p.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,i=1;i<n.length;i++){var u=n[i];0!==o[u]&&(r=!1)}r&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={app:0},a=[];function i(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"a01ed6ec"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise(function(t,r){n=o[e]=[t,r]});t.push(n[2]=r);var a,u=document.getElementsByTagName("head")[0],s=document.createElement("script");s.charset="utf-8",s.timeout=120,c.nc&&s.setAttribute("nonce",c.nc),s.src=i(e),a=function(t){s.onerror=s.onload=null,clearTimeout(l);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+r+": "+a+")");i.type=r,i.request=a,n[1](i)}o[e]=void 0}};var l=setTimeout(function(){a({type:"timeout",target:s})},12e4);s.onerror=s.onload=a,u.appendChild(s)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var f=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("04f5"),o=n.n(r);o.a},"04f5":function(e,t,n){},"12fb":function(e,t,n){e.exports=n.p+"img/ava.2146a6a2.png"},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Navigation"),n("router-view")],1)},a=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("Home")]),n("router-link",{attrs:{to:"/about"}},[e._v("About")]),n("router-link",{attrs:{to:"/resume"}},[e._v("Resume")]),n("router-link",{attrs:{to:"/projects"}},[e._v("Projects")]),n("router-link",{attrs:{to:"/contact"}},[e._v("Contact")])],1)},c=[],u={name:"Navigation"},s=u,l=(n("9028"),n("2877")),f=Object(l["a"])(s,i,c,!1,null,null,null);f.options.__file="Navigation.vue";var p=f.exports,v={name:"app",components:{Navigation:p}},d=v,b=(n("034f"),Object(l["a"])(d,o,a,!1,null,null,null));b.options.__file="App.vue";var m=b.exports,h=n("8c4f"),g=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"home"}},[r("div",{attrs:{id:"centeredContent"}},[r("img",{attrs:{alt:"Mikhail Starikov",src:n("12fb")}}),r("Heading")],1)])},_=[],y=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},w=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"hello-heading"}},[n("h3",[e._v("Hi! My name is Mikhail Starikov")]),n("p",[e._v("I am "),n("span",{staticClass:"green"},[e._v("fullstack web-developer")]),e._v(", passionate about "),n("span",{staticClass:"yellow"},[e._v("Javascript")]),e._v(" and "),n("span",{staticClass:"blue"},[e._v("User interfaces")])])])}],j={name:"Heading"},k=j,O=(n("75c6"),Object(l["a"])(k,y,w,!1,null,"b40c4822",null));O.options.__file="Heading.vue";var x=O.exports,E={name:"home",components:{Heading:x}},P=E,C=(n("cccb"),Object(l["a"])(P,g,_,!1,null,null,null));C.options.__file="Home.vue";var H=C.exports;r["a"].use(h["a"]);var M=new h["a"]({routes:[{path:"/",name:"home",component:H},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/resume",name:"resume",component:function(){return n.e("about").then(n.bind(null,"1ba2"))}},{path:"/projects",name:"projects",component:function(){return n.e("about").then(n.bind(null,"acca"))}},{path:"/contact",name:"contact",component:function(){return n.e("about").then(n.bind(null,"b8fa"))}}]}),N=n("9483");Object(N["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached:function(){console.log("Content has been cached for offline use.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),r["a"].config.productionTip=!1,new r["a"]({router:M,render:function(e){return e(m)}}).$mount("#app")},"6ceb":function(e,t,n){},"75c6":function(e,t,n){"use strict";var r=n("6ceb"),o=n.n(r);o.a},9028:function(e,t,n){"use strict";var r=n("b443"),o=n.n(r);o.a},b443:function(e,t,n){},b861:function(e,t,n){},cccb:function(e,t,n){"use strict";var r=n("b861"),o=n.n(r);o.a}});
//# sourceMappingURL=app.1d4b5c21.js.map