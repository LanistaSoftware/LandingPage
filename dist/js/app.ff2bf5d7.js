(function(t){function a(a){for(var r,n,o=a[0],l=a[1],c=a[2],p=0,u=[];p<o.length;p++)n=o[p],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&u.push(i[n][0]),i[n]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);d&&d(a);while(u.length)u.shift()();return s.push.apply(s,c||[]),e()}function e(){for(var t,a=0;a<s.length;a++){for(var e=s[a],r=!0,o=1;o<e.length;o++){var l=e[o];0!==i[l]&&(r=!1)}r&&(s.splice(a--,1),t=n(n.s=e[0]))}return t}var r={},i={app:0},s=[];function n(a){if(r[a])return r[a].exports;var e=r[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,n),e.l=!0,e.exports}n.m=t,n.c=r,n.d=function(t,a,e){n.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,a){if(1&a&&(t=n(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(n.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var r in t)n.d(e,r,function(a){return t[a]}.bind(null,r));return e},n.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(a,"a",a),a},n.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},n.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=a,o=o.slice();for(var c=0;c<o.length;c++)a(o[c]);var d=l;s.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},2395:function(t,a,e){},"2a3b":function(t,a,e){t.exports=e.p+"media/bg.6e3daaaa.mp4"},"56d7":function(t,a,e){"use strict";e.r(a);e("e260"),e("e6cf"),e("cca6"),e("a79d");var r=e("2b0e"),i=function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("div",{attrs:{id:"app"}},[r("header",[r("div",{staticClass:"overlay"}),r("video",{attrs:{playsinline:"playsinline",autoplay:"autoplay",muted:"muted",loop:"loop"},domProps:{muted:!0}},[r("source",{attrs:{src:e("2a3b"),type:"video/mp4"}})]),r("div",{staticClass:"container"},[t._m(0),r("div",{staticClass:"row"},[t._m(1),r("div",{staticClass:"col-6 mt-5"},[r("div",{staticClass:"cronos"},[r("h2",{staticClass:"heading"},[t._v("Projelerimizi, heyecanımızı ve daha fazlasını sizinle paylaşabilmek için çok çalışıyoruz.")]),r("hr",{staticClass:"border border-secondary mt-5"}),r("h1",{staticClass:"text-warning pt-2"},[t._v(" "+t._s(t.date.getDate())+":"+t._s(t.date.getHours())+":"+t._s(t.date.getMinutes())+":"),r("span",{staticClass:"second"},[t._v(t._s(t.date.getSeconds()))])])])])])])])])},s=[function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("nav",{staticClass:"navbar mt-3"},[r("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[r("img",{attrs:{src:e("e48a"),width:"150",alt:""}}),r("h5",{staticClass:"altlogo pt-3"},[t._v("Think. Create. Develop")])]),r("ul",{staticClass:"footer-icons text-center"},[r("h5",{staticClass:"text-light"},[t._v("Bizi takip et!")]),r("li",[r("a",{attrs:{href:"#"}},[r("div",{staticClass:"social border border-secondary"},[r("i",{staticClass:"fab fa-facebook-f"})])])]),r("li",[r("a",{attrs:{href:"#"}},[r("div",{staticClass:"social border border-secondary"},[r("i",{staticClass:"fab fa-twitter"})])])]),r("li",[r("a",{attrs:{href:"#"}},[r("div",{staticClass:"social border border-secondary"},[r("i",{staticClass:"fab fa-linkedin"})])])]),r("li",[r("a",{attrs:{href:"#"}},[r("div",{staticClass:"social border border-secondary"},[r("i",{staticClass:"fab fa-instagram"})])])]),r("li",[r("a",{attrs:{href:"#"}},[r("div",{staticClass:"social border border-secondary"},[r("i",{staticClass:"fab fa-pinterest"})])])])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"col-6 mt-5 border border-secondary "},[e("h3",{staticClass:"pl-3 pt-4"},[t._v("İletişime geç.")]),e("h4",{staticClass:"text-light pl-3 pt-4"},[t._v("Heyecanımıza ortak olmak için bizimle iletişime geçin.")]),e("form",{staticClass:"p-3 text-warning"},[e("div",{staticClass:"form-group tex"},[e("label",{attrs:{for:"inputName"}},[t._v("Ad Soyad")]),e("input",{staticClass:"form-control",attrs:{type:"email",id:"inputName","aria-describedby":"emailHelp",placeholder:"İsim ve Soyisim giriniz."}})]),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"inputEmail"}},[t._v("Email adresinizi giriniz.")]),e("input",{staticClass:"form-control",attrs:{type:"email",id:"inputEmail","aria-describedby":"emailHelp",placeholder:"Enter adresinizi giriniz."}})]),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"messageBox"}},[t._v("Mesajınızı bırakabilirsiniz.")]),e("textarea",{staticClass:"form-control",attrs:{id:"messageBox",rows:"3",placeholder:"Mesajınızı giriniz."}})]),e("div",{staticClass:"btn-container"},[e("button",{staticClass:"btn btn-lg btn-warning text-light",attrs:{type:"submit"}},[t._v("Gönder")])])])])}],n={name:"app",data:function(){return{date:new Date}},methods:{lale:function(){var t="lale";console.log(t)}}},o=n,l=(e("7c55"),e("2877")),c=Object(l["a"])(o,i,s,!1,null,null,null),d=c.exports;e("4989"),r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(d)}}).$mount("#app")},"7c55":function(t,a,e){"use strict";var r=e("2395"),i=e.n(r);i.a},e48a:function(t,a,e){t.exports=e.p+"img/beyaz.7a4fca20.png"}});
//# sourceMappingURL=app.ff2bf5d7.js.map