(function(e){function t(t){for(var n,s,o=t[0],l=t[1],c=t[2],v=0,d=[];v<o.length;v++)s=o[v],i[s]&&d.push(i[s][0]),i[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);u&&u(t);while(d.length)d.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],n=!0,o=1;o<a.length;o++){var l=a[o];0!==i[l]&&(n=!1)}n&&(r.splice(t--,1),e=s(s.s=a[0]))}return e}var n={},i={app:0},r=[];function s(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=n,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(a,n,function(t){return e[t]}.bind(null,n));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var u=l;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var n=a("04f5"),i=a.n(n);i.a},"04f5":function(e,t,a){},"13cc":function(e,t,a){e.exports=a.p+"img/ava.b680a0b1.jpg"},1752:function(e,t,a){e.exports=a.p+"img/mail.bbededdc.svg"},"2c9b":function(e,t,a){e.exports=a.p+"img/medium.18595416.svg"},"49a7":function(e,t,a){"use strict";var n=a("6330"),i=a.n(n);i.a},"517e":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("097d");var n=a("2b0e"),i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"page-wrapper"},[a("router-view"),a("Links"),a("Navigation")],1)])},r=[],s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"nav"}},[a("div",{attrs:{id:"nav-wrapper"}},[a("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#about",expression:"'#about'"}]},[e._v("About")]),a("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#career",expression:"'#career'"}]},[e._v("Career")]),a("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#contact",expression:"'#contact'"}]},[e._v("Contact")])])])},o=[],l={name:"Navigation"},c=l,u=(a("9028"),a("2877")),v=Object(u["a"])(c,s,o,!1,null,null,null);v.options.__file="Navigation.vue";var d=v.exports,f=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},p=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"links"}},[n("a",{attrs:{target:"_blank",href:"https://medium.com/@dev_starikov"}},[n("img",{attrs:{src:a("2c9b"),width:"40"}})]),n("a",{attrs:{target:"_blank",href:"https://www.linkedin.com/in/mikhail-starikov-84635211a/"}},[n("img",{attrs:{src:a("953d"),width:"40"}})]),n("a",{attrs:{href:"mailto:michail.a.starikov@gmail.com"}},[n("img",{attrs:{src:a("1752"),width:"35",height:"40"}})]),n("span",[e._v(".")]),n("span",[e._v(".")]),n("span",[e._v(".")]),n("span",[e._v(".")])])}],m={name:"Links"},_=m,h=(a("8937"),Object(u["a"])(_,f,p,!1,null,null,null));h.options.__file="Links.vue";var g=h.exports,b={name:"app",metaInfo:{htmlAttrs:{lang:"en-US"},meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1.0, user-scalable=no"}]},components:{Navigation:d,Links:g}},w=b,k=(a("034f"),Object(u["a"])(w,i,r,!1,null,null,null));k.options.__file="App.vue";var y=k.exports,C=a("8c4f"),j=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"home"}},[a("section",{staticClass:"content fullscreen-content"},[a("Heading")],1),e._m(0),a("section",{staticClass:"content",attrs:{id:"career"}},[a("h2",[e._v("Where I've worked")]),a("div",{staticClass:"tabs-wrapper"},[a("div",{staticClass:"tabs-content"},[a("div",{class:{"active-tab":"leapsome"===e.activeTab}},[e._m(1),a("span",{staticClass:"tab-subtitle"},[e._v("January 2022 - Present")]),e._m(2)]),a("div",{class:{"active-tab":"metro"===e.activeTab}},[e._m(3),a("span",{staticClass:"tab-subtitle"},[e._v("September 2019 - December 2021")]),e._m(4)]),a("div",{class:{"active-tab":"clusterjobs"===e.activeTab}},[e._m(5),a("span",{staticClass:"tab-subtitle"},[e._v("January 2019 - September 2020")]),e._m(6)]),a("div",{class:{"active-tab":"trivago"===e.activeTab}},[e._m(7),a("span",{staticClass:"tab-subtitle"},[e._v("July 2017 - August 2019")]),e._m(8)]),a("div",{class:{"active-tab":"legalplus"===e.activeTab}},[e._m(9),a("span",{staticClass:"tab-subtitle"},[e._v("July 2017 - August 2019")]),e._m(10)]),a("div",{class:{"active-tab":"itgro"===e.activeTab}},[e._m(11),a("span",{staticClass:"tab-subtitle"},[e._v("February 2014 - June 2017")]),e._m(12)])]),a("div",{staticClass:"tabs"},[a("button",{class:{active:"leapsome"===e.activeTab},on:{click:function(t){e.setActiveTab("leapsome")}}},[e._v("Leapsome")]),a("button",{class:{active:"metro"===e.activeTab},on:{click:function(t){e.setActiveTab("metro")}}},[e._v("Metro Markets")]),a("button",{class:{active:"clusterjobs"===e.activeTab},on:{click:function(t){e.setActiveTab("clusterjobs")}}},[e._v("Clusterjobs")]),a("button",{class:{active:"trivago"===e.activeTab},on:{click:function(t){e.setActiveTab("trivago")}}},[e._v("Trivago")]),a("button",{class:{active:"legalplus"===e.activeTab},on:{click:function(t){e.setActiveTab("legalplus")}}},[e._v("Legal Plus")]),a("button",{class:{active:"itgro"===e.activeTab},on:{click:function(t){e.setActiveTab("itgro")}}},[e._v("Itgro")])])])]),a("section",{staticClass:"content about-content",attrs:{id:"contact"}},[a("h2",[e._v("Get in touch")]),a("Contact")],1)])},T=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"content",attrs:{id:"about"}},[n("h2",[e._v("About me")]),n("div",{staticClass:"about-wrapper"},[n("p",[e._v("\n        Hello! My name is Mikhail and my expertise is focused on "),n("span",{staticClass:"yellow"},[e._v("building and scaling web products")]),e._v(" with great digital experience, as well as "),n("span",{staticClass:"green"},[e._v("growing teams")]),e._v(" for those products.\n        "),n("br"),n("br"),e._v("\n        My career in software engineering started back in 2012, when I started to learn web stack in parallel with finishing high school. Fast forward to 2014 I joined "),n("a",{attrs:{href:"https://itgro.ru/"}},[e._v("digital agency")]),e._v(" in Russia,\n        where I got my first "),n("span",{staticClass:"orange"},[e._v("software engineering and team leading experience")]),e._v(".\n        "),n("br"),n("br"),e._v("\n        In 2017 I relocated to Germany and still living here, I joined "),n("a",{attrs:{href:"https://trivago.com"}},[e._v("big corporation company")]),e._v(", "),n("a",{attrs:{href:"https://medium.com/itnext/building-startup-application-with-minimal-costs-b205347e726c"}},[e._v("started and closed a startup")]),e._v(", "),n("a",{attrs:{href:"https://www.metro-markets.de/"}},[e._v("another big german company")]),e._v(",\n        and finally joined purposeful and fulfilling role at "),n("a",{attrs:{href:"https://www.leapsome.com/"}},[e._v("Leapsome")]),e._v(".\n\n\n      ")]),n("img",{staticClass:"avatar",attrs:{alt:"Mikhail Starikov",src:a("13cc")}})]),n("h3",[e._v("Things I am working with:")]),n("ul",{staticClass:"skills-list"},[n("li",[e._v("Typescript")]),n("li",[e._v("Javascript (ES6+)")]),n("li",[e._v("Node.js")]),n("li",[e._v("Vue/React")]),n("li",[e._v("Scaling products and teams")]),n("li",[e._v("Growing people")])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h4",{staticClass:"tab-title"},[e._v("Senior Fullstack Engineer @ "),a("a",{attrs:{href:"https://www.leapsome.com/"}},[e._v("Leapsome")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",[a("li",[e._v("Working on a platform designed to improve people's lives and make their work fulfilling")]),a("li",[e._v("Heavily engaged into interviewing process")]),a("li",[e._v("Came up with suggestions towards engineering team composition and open positions, in order to give more opportunities to minor groups and increase team diversity")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h4",{staticClass:"tab-title"},[e._v("Team Lead @ "),a("a",{attrs:{href:"https://www.metro-markets.de/"}},[e._v("Metro Markets")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",[a("li",[e._v("Led a functional team that was focused on backoffice for marketplace vendors")]),a("li",[e._v("Designed frontend engineers case study and was maintaining frontend engineers interview pipeline for 2 years")]),a("li",[e._v("Introduced 360 feedback process to my own team 1 year before it was roll-out to company")]),a("li",[e._v("Helped engineers to grow and had one successfully picking up my role after I decided to leave")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h4",{staticClass:"tab-title"},[e._v("Co-founder @ "),a("a",{attrs:{href:"https://medium.com/itnext/building-startup-application-with-minimal-costs-b205347e726c"}},[e._v("Clusterjobs")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",[a("li",[e._v("Planning of feature development and vision of a product, which was job searching platform, targeting people who are looking to relocate to Germany. Platform was using AI engine that was picking CV and comparing it keywords to job offers we had in database.")]),a("li",[e._v("Planning of architecture of product infrastructure")]),a("li",[e._v("Building of a web platform, using nuxt.js, vue.js, laravel, graphQL")]),a("li",[e._v("Setting up of CI/CD for the project.")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h4",{staticClass:"tab-title"},[e._v("Software Engineer @ "),a("a",{attrs:{href:"https://trivago.com"}},[e._v("Trivago")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",[a("li",[e._v("Working in a functional team as fullstack engineer on main search component and filters")]),a("li",[e._v("Committed to big redesign of search and filters, when concepts were introduced to use more AI in search, rather than simple filters")]),a("li",[e._v("Preparing and organising nuxt.js workshops for colleagues")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h4",{staticClass:"tab-title"},[e._v("Software Engineer @ "),a("b",[e._v("Legal Plus")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",[a("li",[e._v("This project was developed by me, also I was the only maintainer for almost two years. Here I realized how to organize tasks and deadlines, got acquainted with symfony2 and doctrine orm.")]),a("li",[e._v("Development of informational system for microfinancial organization from scratch")]),a("li",[e._v("Some of solved problems: Entering and storing the client data, checking for duplicates, suspicious clients and adding clients in blacklist, printing Word and Excel documents from templates filled with client information, performance optimization, access restriction, encoded data storage")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h4",{staticClass:"tab-title"},[e._v("Team lead @ "),a("a",{attrs:{href:"https://itgro.ru/"}},[e._v("Itgro")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",[a("li",[e._v("I joined this digital agency as my first full-time software engineering role as junior engineer, less than in a year founder grabbed us and told that he wants to create a new small squad that will be responsible for smaller customers and asked who if anyone feels bold enough to lead it. I raised a hand and said I'd like to try if he really means it.")]),a("li",[e._v("I started leading a team at 2015 with only me and another guy there, and when I was leaving it was 12 people team with some people on part-time remote roles, account manager, who was communicating with clients and pretty big revenue growth.")]),a("li",[e._v("That role and those years gave me invaluable experience working with all kinds of projects, all kinds of clients and stakeholders and people in general")])])}],E=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},x=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"hello-heading"}},[a("span",[e._v("Hi! My name is")]),a("h1",[e._v("Mikhail Starikov")]),a("h1",{staticClass:"secondary-main-heading"},[e._v("I build web and lead teams")]),a("p",{staticClass:"heading-paragraph"},[e._v("\n    I am professional "),a("span",{staticClass:"green"},[e._v("fullstack web-developer")]),e._v(" and "),a("span",{staticClass:"orange"},[e._v("teamlead")]),e._v(",\n    passionate about "),a("span",{staticClass:"yellow"},[e._v("Javascript")]),e._v(" and "),a("span",{staticClass:"blue"},[e._v("User interfaces")]),e._v(".\n    "),a("br"),e._v("\n    Currently I am focused on human-centered product, working with amazing team in "),a("a",{attrs:{href:"https://www.leapsome.com/"}},[e._v("Leapsome")]),e._v(".\n  ")])])}],I={name:"Heading"},$=I,A=(a("eb3f"),Object(u["a"])($,E,x,!1,null,"348417ed",null));A.options.__file="Heading.vue";var S=A.exports,O=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},M=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("I am currently not looking for any open positions, but you always can contact me via "),a("a",{attrs:{target:"_blank",href:"mailto:michail.a.starikov@gmail.com"}},[e._v("mail")]),e._v(", check my "),a("a",{attrs:{target:"_blank",href:"https://www.linkedin.com/in/mikhail-starikov-84635211a/"}},[e._v("LinkedIn")]),e._v(" or articles at\n  "),a("a",{attrs:{target:"_blank",href:"https://medium.com/@dev_starikov"}},[e._v("Medium")])])}],L={name:"Contact"},P=L,H=(a("49a7"),Object(u["a"])(P,O,M,!1,null,"28c36676",null));H.options.__file="Contact.vue";var N=H.exports,J={name:"home",components:{Contact:N,Heading:S},data:function(){return{activeTab:"leapsome"}},methods:{setActiveTab:function(e){this.activeTab=e}}},z=J,F=(a("cccb"),Object(u["a"])(z,j,T,!1,null,null,null));F.options.__file="Home.vue";var D=F.exports;n["a"].use(C["a"]);var G=new C["a"]({mode:"history",routes:[{path:"/",name:"home",component:D}]}),W=a("f13c"),q=a.n(W),B=a("58ca"),R=a("9483");Object(R["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached:function(){console.log("Content has been cached for offline use.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),n["a"].config.productionTip=!1,n["a"].use(q.a),n["a"].use(B["a"]),new n["a"]({router:G,render:function(e){return e(y)}}).$mount("#app")},6330:function(e,t,a){},"71e9":function(e,t,a){},8937:function(e,t,a){"use strict";var n=a("517e"),i=a.n(n);i.a},9028:function(e,t,a){"use strict";var n=a("b443"),i=a.n(n);i.a},"953d":function(e,t,a){e.exports=a.p+"img/linkedin.89ad4412.svg"},b443:function(e,t,a){},b861:function(e,t,a){},cccb:function(e,t,a){"use strict";var n=a("b861"),i=a.n(n);i.a},eb3f:function(e,t,a){"use strict";var n=a("71e9"),i=a.n(n);i.a}});
//# sourceMappingURL=app.ba2562be.js.map