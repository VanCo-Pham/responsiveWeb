(this.webpackJsonpnongnghieppho=this.webpackJsonpnongnghieppho||[]).push([[0],{53:function(e,t,c){},75:function(e,t,c){},82:function(e,t,c){},84:function(e,t,c){"use strict";c.r(t);var i=c(13),n=c(0),s=c(1),a=(c(85).default,c(86).default),r=c(87).default;t.default=function(e){var t=e.title,c=e.data,l=Object(n.useState)([]),d=Object(i.a)(l,2),j=d[0],o=d[1],h=Object(n.useState)(8),b=Object(i.a)(h,2),m=b[0],u=b[1],O=Math.floor(c.length/m);return Object(n.useEffect)((function(){o(c.slice(0,m))}),[c]),Object(n.useEffect)((function(){window.innerWidth>1390&&u(12),console.log("Checking inner width")}),[]),Object(s.jsxs)("div",{className:"products-container",children:[Object(s.jsxs)("div",{className:"products-title",children:[Object(s.jsx)("h2",{children:t}),Object(s.jsxs)("span",{children:[c.length," sa\u0309n ph\xe2\u0309m"]})]}),Object(s.jsx)("div",{className:"products-grid",children:j.map((function(e){return Object(s.jsx)("div",{className:"",children:Object(s.jsx)(a,{url:e.url,title:e.title.slice(0,m),content:e.title.slice(0,30)})},e.id)}))}),Object(s.jsx)("div",{className:"products-pagination",children:Object(s.jsx)(r,{pageCount:O,handlePage:function(e){var t=(parseInt(e)-1)*m,i=t+m;o(c.slice(t,i))}})})]})}},85:function(e,t,c){"use strict";c.r(t);c(53);var i=c(0),n=c(1);t.default=function(e){var t=e.data;return Object(i.useEffect)((function(){var e=document.createElement("script");return e.src="glider_product.js",document.body.appendChild(e),function(){document.body.removeChild(e)}}),[]),Object(n.jsxs)("div",{className:"glider-contain multiple",children:[Object(n.jsx)("button",{className:"glider-prev",id:"glider-product-prev",children:"<"}),Object(n.jsx)("div",{className:"glider",id:"glider-product",children:t.map((function(e){return Object(n.jsxs)("div",{className:"item-container",children:[Object(n.jsx)("div",{className:"item-image",children:Object(n.jsx)("img",{src:e.url,alt:""})}),Object(n.jsxs)("div",{className:"item-first",children:[Object(n.jsx)("div",{className:"item-name",children:e.title.slice(0,10)}),Object(n.jsxs)("div",{className:"item-price",children:[Math.floor(Math.round(1e5*Math.random())),"\u0111"]})]}),Object(n.jsx)("div",{className:"item-details",children:e.title}),Object(n.jsx)("button",{className:"item-action",children:"Mua"})]},e.id)}))}),Object(n.jsx)("button",{className:"glider-next",id:"glider-product-next",children:">"}),Object(n.jsx)("div",{className:"glider-dots",id:"dots-product"})]})}},86:function(e,t,c){"use strict";c.r(t),c.d(t,"default",(function(){return b}));c(0);var i=c(68),n=c(103),s=c(97),a=c(100),r=c(99),l=c(98),d=c(70),j=c(69),o=c(1),h=Object(i.a)({root:{maxWidth:345},media:{height:150},button:{color:"white"}});function b(e){var t=e.title,c=e.content,i=e.url,b=h();return Object(o.jsxs)(n.a,{className:b.root,children:[Object(o.jsxs)(s.a,{children:[Object(o.jsx)(l.a,{className:b.media,image:i,title:"Contemplative Reptile"}),Object(o.jsxs)(r.a,{children:[Object(o.jsx)(j.a,{gutterBottom:!0,variant:"h5",component:"h2",children:t}),Object(o.jsxs)(j.a,{variant:"body2",color:"textSecondary",component:"p",children:[1e3*(Math.floor(10*Math.random())*c.length+25),"\u0111"]})]})]}),Object(o.jsxs)(a.a,{children:[Object(o.jsx)(d.a,{className:b.button,variant:"contained",size:"small",color:"primary",children:"Mua"}),Object(o.jsx)(d.a,{size:"small",color:"primary",children:"Th\xf4ng tin"})]})]})}},87:function(e,t,c){"use strict";c.r(t),c.d(t,"default",(function(){return j}));var i=c(13),n=c(0),s=c.n(n),a=c(68),r=c(102),l=c(1),d=Object(a.a)((function(e){return{root:{"& > *":{marginTop:e.spacing(2)}}}}));function j(e){var t=e.pageCount,c=e.handlePage,n=d(),a=s.a.useState(1),j=Object(i.a)(a,2),o=j[0],h=j[1];return Object(l.jsx)("div",{className:n.root,children:Object(l.jsx)(r.a,{count:t,variant:"outlined",page:o,color:"primary",onChange:function(e,t){h(t),c(t)}})})}},95:function(e,t,c){"use strict";c.r(t);var i=c(0),n=c.n(i),s=c(16),a=c.n(s),r=(c(75),c(13)),l=c(28),d=c(43),j=c.n(d),o=c(1),h=function(){var e=Object(i.useState)(!1),t=Object(r.a)(e,2),c=t[0],n=t[1];return Object(o.jsxs)("div",{className:"nav",children:[Object(o.jsx)("div",{className:"nav-icon",onClick:function(){return n(!c)},children:Object(o.jsx)(j.a,{})}),Object(o.jsxs)("ul",{className:c?"small-clicked":"",children:[Object(o.jsx)(l.a,{to:"/",children:Object(o.jsx)("li",{children:"TRANG CHU\u0309"})}),Object(o.jsx)(l.a,{to:"/",children:Object(o.jsx)("li",{children:"SA\u0309N PH\xc2\u0309M"})}),Object(o.jsx)("li",{children:"KI\xca\u0309M TRA \u0110\u01a0N HA\u0300NG"}),Object(o.jsx)("li",{children:"BLOG LA\u0300M V\u01af\u01a0\u0300N"}),Object(o.jsx)("li",{children:"C\xc2\u0309M NANG LA\u0300M V\u01af\u01a0\u0300N"}),Object(o.jsx)(l.a,{to:"/",children:Object(o.jsx)("li",{children:"LI\xcaN H\xca\u0323"})})]})]})},b=function(){var e=document.querySelectorAll(".imageSlide"),t=Object(i.useState)(3),c=Object(r.a)(t,2),n=c[0],s=c[1],a=function(){for(var t=0;t<e.length;t++)e[t].style.display="none",e[t].classList.remove="sliderAni"},l=function(t){a(),0===n&"left"===t&&(e[e.length-1].style.display="block",e[e.length-1].classList.add("sliderAni"),s(e.length-1)),n===e.length-1&"right"===t&&(e[0].style.display="block",e[0].classList.add("sliderAni"),s(0))},d=function(){n<e.length-1?(a(),e[n+1].style.display="block",e[n+1].classList.add("sliderAni"),s(n+1)):l("right")};Object(i.useEffect)((function(){s(0)}),[]);return Object(i.useEffect)((function(){var e=setInterval(d,4e3);return console.log("render"),function(){clearInterval(e)}}),[n]),Object(o.jsx)("div",{className:"imageSlider",children:Object(o.jsxs)("div",{id:"slider",children:[Object(o.jsx)("div",{className:"arrow",id:"arrow-left",onClick:function(){n>0?(a(),e[n-1].style.display="block",e[n-1].classList.add("sliderAni"),s(n-1)):l("left")}}),Object(o.jsx)("div",{className:"imageSlide slide1",children:Object(o.jsxs)("div",{className:"slide-content",children:[Object(o.jsxs)("div",{className:"slide-content-info",children:[Object(o.jsx)("h2",{children:"Ha\u0323t gi\xf4\u0301ng ch\xe2\u0301t l\u01b0\u01a1\u0323ng"}),Object(o.jsxs)("p",{children:["Nh\xe2\u0323p kh\xe2\u0309u tr\u01b0\u0323c ti\xea\u0301p t\u01b0\u0300 ",Object(o.jsx)("br",{}),Object(o.jsx)("span",{className:"highlight",children:"Nh\xe2\u0323t Ba\u0309n, Ch\xe2u \xc2u"}),"."]}),Object(o.jsx)("p",{children:"Kha\u0309 n\u0103ng na\u0309y m\xe2\u0300m, ch\xe2\u0301t l\u01b0\u01a1\u0323ng \u0111a\u0303 \u0111\u01b0\u01a1\u0323c ki\xea\u0309m tra ch\u0103\u0323t che\u0303."})]}),Object(o.jsx)("span",{className:"slider-content-info-small",children:" Ha\u0323t gi\xf4\u0301ng ch\xe2\u0301t l\u01b0\u01a1\u0323ng"})]})}),Object(o.jsx)("div",{className:"imageSlide slide2",children:Object(o.jsxs)("div",{className:"slide-content",children:[Object(o.jsxs)("div",{className:"slide-content-info",children:[Object(o.jsx)("h2",{children:"M\xe2\u0303u ch\xe2\u0323u \u0111a da\u0323ng"}),Object(o.jsxs)("p",{children:["Hi\xea\u0323n \u0111a\u0323i, c\xf4\u0309 \u0111i\xea\u0309n,",Object(o.jsx)("br",{})," th\xe2n thi\xea\u0323n m\xf4i tr\u01b0\u01a1\u0300ng..."]}),Object(o.jsx)("p",{children:"H\u01a1n 100 m\xe2\u0303u ch\xe2\u0323u \u0111ang \u0111\u01a1\u0323i ba\u0323n kha\u0301m pha\u0301."})]}),Object(o.jsx)("span",{}),Object(o.jsx)("span",{className:"slider-content-info-small",children:" M\xe2\u0303u ch\xe2\u0323u \u0111a da\u0323ng"})]})}),Object(o.jsx)("div",{className:"imageSlide slide3",children:Object(o.jsxs)("div",{className:"slide-content",children:[Object(o.jsxs)("div",{className:"slide-content-info",children:[Object(o.jsx)("h2",{children:"Gia\u0309m gia\u0301 s\xf4\u0301c"}),Object(o.jsxs)("p",{children:["Sale t\xe2\u0301t ca\u0309 m\u0103\u0323t ha\u0300ng t\u01b0\u0300 ",Object(o.jsx)("br",{}),"10 - 50%."]}),Object(o.jsx)("p",{children:"A\u0301p du\u0323ng t\u01b0\u0300 Mu\u0300ng 1 T\xea\u0301t \xe2m li\u0323ch \u0111\xea\u0301n h\xea\u0301t n\u0103m nay."}),Object(o.jsx)("p",{children:"Mua ngay kh\xf4ng h\xea\u0301t."})]}),Object(o.jsx)("span",{}),Object(o.jsx)("span",{className:"slider-content-info-small",children:" Gia\u0309m gia\u0301 s\xf4\u0301c"})]})}),Object(o.jsx)("div",{className:"imageSlide slide4",children:Object(o.jsxs)("div",{className:"slide-content",children:[Object(o.jsxs)("div",{className:"slide-content-info",children:[Object(o.jsx)("h2",{children:"Mi\xea\u0303n phi\u0301 t\u01b0 v\xe2\u0301n ky\u0303 thu\xe2\u0323t."}),Object(o.jsxs)("p",{children:["\u0110\xf4\u0323i ngu\u0303 nh\xe2n vi\xean nhi\xea\u0323t ti\u0300nh,",Object(o.jsx)("br",{})," gia\u0300u kinh nghi\xea\u0323m."]}),Object(o.jsx)("p",{children:"S\u0103\u0303n sa\u0300ng gia\u0309i \u0111a\u0301p mo\u0323i th\u0103\u0301c m\u0103\u0301c."})]}),Object(o.jsx)("span",{}),Object(o.jsx)("span",{className:"slider-content-info-small",children:" Mi\xea\u0303n phi\u0301 t\u01b0 v\xe2\u0301n ky\u0303 thu\xe2\u0323t."})]})}),Object(o.jsx)("div",{className:"arrow",id:"arrow-right",onClick:d})]})})};var m=function(){return Object(o.jsx)("div",{className:"show-item",children:Object(o.jsx)("div",{className:"right-item",children:Object(o.jsx)(b,{})})})},u=c(58),O=c.n(u),x=c(59),p=c.n(x),g=c(60),v=c.n(g),f=c.p+"static/media/logo.d166e372.png",N=function(){return Object(o.jsxs)("div",{className:"topbar",id:"topbar",children:[Object(o.jsx)("div",{className:"topbar-logo",children:Object(o.jsx)("img",{src:f,alt:""})}),Object(o.jsxs)("div",{className:"topbar-other",children:[Object(o.jsx)("div",{className:"topbar-search",children:Object(o.jsx)("span",{className:"topbar-search-Icon topbar-icons",children:Object(o.jsx)(O.a,{})})}),Object(o.jsxs)("div",{className:"topbar-login topbar-icons",children:[Object(o.jsx)(p.a,{}),Object(o.jsx)("p",{})]}),Object(o.jsxs)("div",{className:"topbar-cart topbar-icons",children:[Object(o.jsx)(v.a,{}),Object(o.jsxs)("div",{className:"topbar-cart-info",children:[Object(o.jsx)("p",{children:"Hi\xea\u0323n ch\u01b0a co\u0301 sa\u0309n ph\xe2\u0309m"}),Object(o.jsx)("hr",{}),Object(o.jsxs)("div",{className:"topbar-cart-info-sum",children:[Object(o.jsx)("p",{children:"T\xd4\u0309NG TI\xca\u0300N"}),Object(o.jsx)("p",{className:"sum",id:"topbar-cart-info-sum",children:"0 \u0111"})]}),Object(o.jsxs)("div",{className:"topbar-cart-info-action",children:[Object(o.jsx)("p",{children:"Xem gio\u0309 ha\u0300ng"}),Object(o.jsx)("p",{children:"\u0110\u0103\u0323t ha\u0300ng"})]})]})]})]})]})},y=(c(53),function(e){var t=e.infos;return Object(i.useEffect)((function(){var e=document.createElement("script");return e.src="Glider_helper.js",document.body.appendChild(e),function(){document.body.removeChild(e)}}),[]),Object(o.jsxs)("div",{className:"glider-contain multiple",children:[Object(o.jsx)("button",{className:"glider-prev",id:"glider-why-prev",children:"<"}),Object(o.jsx)("div",{className:"glider",id:"glider-why",children:t.map((function(e){return Object(o.jsxs)("figure",{children:[Object(o.jsx)("blockquote",{children:e.content}),Object(o.jsx)("figcaption",{children:e.caption})]},e.id)}))}),Object(o.jsx)("button",{className:"glider-next",id:"glider-why-next",children:">"}),Object(o.jsx)("div",{className:"glider-dots",id:"dots-why"})]})}),k=function(){return Object(o.jsx)("div",{className:"",children:Object(o.jsx)(y,{infos:[{id:0,content:"Sa\u0309n ph\xe2\u0309m ch\xe2\u0301t l\u01b0\u01a1\u0323ng, di\u0323ch vu\u0323 t\xf4\u0301t. R\xe2\u0301t khuy\xea\u0301n khi\u0301ch mo\u0323i ng\u01b0\u01a1\u0300i s\u01b0\u0309 du\u0323ng n\xf4ng nghi\xea\u0323p ph\xf4\u0301.",caption:"Anh T\xe2\u0301n Pha\u0301t"},{id:1,content:"T\u01b0 v\xe2\u0301n ky\u0303 thu\xe2\u0323t nhi\xea\u0323t ti\u0300nh, giao ha\u0300ng \u0111u\u0301ng he\u0323n.",caption:"Chi\u0323 Thuy\u0300 An"},{id:2,content:"Ha\u0323t gi\xf4\u0301ng ch\xe2\u0301t l\u01b0\u01a1\u0323ng, l\xean \u0111\xea\u0300u, cho n\u0103ng su\xe2\u0301t cao. Ca\u0301m \u01a1n N\xf4ng nghi\xea\u0323p ph\xf4\u0301.",caption:"Ba\u0301c Tr\xe2\u0300n V\u0103n Tha\u0300nh"},{id:3,content:"Gia\u0301 pha\u0309i ch\u0103ng, \u0111\xf4\u0309i tra\u0309 d\xea\u0303 da\u0300ng, nh\xe2n vi\xean nhi\xea\u0323t ti\u0300nh, vui ve\u0309.",caption:"C\xf4 Thu Thanh"}]})})},C=(c(82),c.p+"static/media/seed.a75bfc41.jpg"),w=c.p+"static/media/pots.93ace5a6.jpg",A=c.p+"static/media/orchid.3144d9b2.jpg",L=c.p+"static/media/car_02.d0ec57af.jpg",M=function(){return Object(o.jsxs)("div",{className:"news",children:[Object(o.jsx)("div",{className:"news-title",children:"Ba\u0300i vi\xea\u0301t m\u01a1\u0301i nh\xe2\u0301t"}),Object(o.jsxs)("div",{className:"news-grid",children:[Object(o.jsxs)("div",{className:"news-grid-item",children:[Object(o.jsx)("img",{src:C,alt:""}),Object(o.jsx)("h2",{children:"C\xe1ch x\u1eed l\xfd h\u1ea1t gi\u1ed1ng tr\u01b0\u1edbc khi gieo tr\u1ed3ng?"}),Object(o.jsxs)("p",{children:[Object(o.jsx)("span",{children:" 1. Ng\xe2m h\u1ea1t"}),Object(o.jsx)("br",{}),"- Kh\xf4ng nh\u1ea5t thi\u1ebft h\u1ea1t n\xe0o c\u0169ng ph\u1ea3i ng\xe2m tr\u01b0\u1edbc khi gieo, c\u1ea7n d\u1ef1a v\xe0o k\xedch th\u01b0\u1edbc \u0111\u1ec3 quy\u1ebft \u0111\u1ecbnh."]})]}),Object(o.jsxs)("div",{className:"news-grid-item",children:[Object(o.jsx)("img",{src:w,alt:""}),Object(o.jsx)("h2",{children:"X\u1eed l\xfd \u0111\u1ea5t tr\u1ed3ng b\u1ecb th\u1eeba ph\xe2n, th\u1eeba dinh d\u01b0\u1ee1ng?"}),Object(o.jsx)("p",{children:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt molestiae quo qui aut cupiditate."})]}),Object(o.jsxs)("div",{className:"news-grid-item",children:[Object(o.jsx)("img",{src:A,alt:""}),Object(o.jsx)("h2",{children:"\xdd ngh\u0129a v\xe0 c\xe1ch tr\u1ed3ng hoa thanh li\u1ec5u"}),Object(o.jsx)("p",{children:"Ratione mollitia ipsa cupiditate vero accusamus reprehenderit eveniet molestias, voluptatum nam facere cumque odit."})]}),Object(o.jsxs)("div",{className:"news-grid-item",children:[Object(o.jsx)("img",{src:L,alt:""}),Object(o.jsx)("h2",{children:"C\xe1ch t\u01b0\u1edbi n\u01b0\u1edbc cho c\xe2y khi v\u1eafng nh\xe0"}),Object(o.jsx)("p",{children:"N\u1ebfu b\u1ea1n s\u1eafp \u0111i ch\u01a1i xa, c\xf4ng t\xe1c, du l\u1ecbch\u2026 nh\u01b0ng mu\u1ed1n \u0111\u1ea3m b\u1ea3o c\xe2y \u0111\u01b0\u1ee3c cung c\u1ea5p \u0111\u1ee7 n\u01b0\u1edbc trong th\u1eddi gian v\u1eafng nh\xe0 th\xec t\xecm hi\u1ec3u ngay b\xe0i vi\u1ebft na\u0300y nhe\u0301."})]})]}),Object(o.jsxs)("div",{className:"news-readmore",children:[Object(o.jsx)("a",{href:"",children:"Xem th\xeam"})," "]})]})},T=function(){return Object(o.jsxs)("div",{className:"footer",children:[Object(o.jsxs)("div",{className:"footer-info",children:[Object(o.jsx)("div",{className:"footer-info-item",children:"HA\u0300NG CHI\u0301NH HA\u0303NG"}),Object(o.jsx)("div",{className:"footer-info-item",children:"\u0110A DA\u0323NG HA\u0300NG HOA\u0301"}),Object(o.jsx)("div",{className:"footer-info-item",children:"MI\xca\u0303N PHI\u0301 T\u01af V\xc2\u0301N KY\u0303 THU\xc2\u0323T"})]}),Object(o.jsx)("hr",{}),Object(o.jsxs)("div",{className:"footer-grid",children:[Object(o.jsxs)("div",{className:"footer-item",children:[Object(o.jsx)("h3",{children:"Li\xean h\xea\u0323"}),Object(o.jsx)("p",{children:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, in!"}),Object(o.jsx)("p",{children:"Lorem ipsum dolor sit amet."}),Object(o.jsx)("p",{children:"Consectetur adipisicing elit. Eum, in!"}),Object(o.jsx)("p",{children:"Lorem ipsum, dolor sit amet consectetur adipisicing."})]}),Object(o.jsxs)("div",{className:"footer-item",children:[Object(o.jsx)("h3",{children:"H\xf4\u0303 tr\u01a1\u0323 kha\u0301ch ha\u0300ng"}),Object(o.jsx)("p",{children:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, in!"}),Object(o.jsx)("p",{children:"Lorem ipsum dolor sit amet."}),Object(o.jsx)("p",{children:"Lorem ipsum, dolor sit amet consectetur adipisicing."})]}),Object(o.jsxs)("div",{className:"footer-item",children:[Object(o.jsx)("h3",{children:"Go\u0323i mua ha\u0300ng"}),Object(o.jsx)("h4",{children:"(8:00 - 18:00)"}),Object(o.jsx)("p",{className:"footer-item-number",children:"0888 444 222"}),Object(o.jsx)("p",{children:"T\u01af V\xc2\u0301N KY\u0303 THU\xc2\u0323T"}),Object(o.jsx)("p",{className:"footer-item-number",children:"0999 666 333"})]}),Object(o.jsxs)("div",{className:"footer-item",children:[Object(o.jsx)("h3",{children:"Li\xean k\xea\u0301t"}),Object(o.jsx)("p",{children:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, in!"})]}),Object(o.jsxs)("div",{className:"footer-item",children:[Object(o.jsx)("h3",{children:"\u0110\u0103ng ky\u0301 nh\xe2\u0323n \u01b0u \u0111a\u0303i"}),Object(o.jsx)("p",{children:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, in!"})]})]}),Object(o.jsx)("hr",{}),Object(o.jsx)("div",{className:"footer-copyright",children:Object(o.jsx)("h4",{children:"Made by Co Pham - 2021"})})]})},H=c(46),S=c.n(H),E=c(61),I=c(84).default,G=function(){var e=Object(i.useState)([]),t=Object(r.a)(e,2),c=t[0],n=t[1];return Object(i.useEffect)(Object(E.a)(S.a.mark((function e(){var t,c;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/photos?_limit=125");case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,n(c);case 7:case"end":return e.stop()}}),e)}))),[]),Object(o.jsxs)("div",{children:[Object(o.jsx)(I,{id:"phanbon",title:"Ph\xe2n bo\u0301n",data:c.slice(0,50)}),Object(o.jsx)(I,{id:"chepham",title:"Ch\xea\u0301 ph\xe2\u0309m sinh ho\u0323c",data:c.slice(50,84)}),Object(o.jsx)(I,{id:"hatgiong",title:"Ha\u0323t gi\xf4\u0301ng",data:c.slice(84,125)})]})},P=c(66),B=c(129),q=c(64),K=c.n(q),R=c(65),V=c.n(R),F=c(68),_=c(128),z=c(63),D=c.n(z),U=c(62),X=Object(F.a)((function(e){return{root:{"& > *":{margin:e.spacing(1)}},containIcon:{color:"white"}}}));function J(){var e=X();return Object(o.jsx)("div",{className:"floatNavigation",children:Object(o.jsx)(_.a,{className:e.containIcon,color:"primary","aria-label":"add",children:Object(o.jsx)(U.Link,{to:"topbar",spy:!0,smooth:!0,children:Object(o.jsx)(D.a,{fontSize:"large",className:e.containIcon})})})})}var W=Object(P.a)({palette:{primary:K.a,secondary:V.a}});var Y=function(){return Object(o.jsx)("div",{className:"App",children:Object(o.jsxs)(B.a,{theme:W,children:[Object(o.jsx)(N,{}),Object(o.jsx)(h,{}),Object(o.jsx)(m,{}),Object(o.jsx)(J,{}),Object(o.jsx)(G,{}),Object(o.jsx)(M,{}),Object(o.jsx)(k,{}),Object(o.jsx)(T,{})]})})},Q=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,130)).then((function(t){var c=t.getCLS,i=t.getFID,n=t.getFCP,s=t.getLCP,a=t.getTTFB;c(e),i(e),n(e),s(e),a(e)}))};a.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(Y,{})}),document.getElementById("root")),Q()}},[[95,1,2]]]);
//# sourceMappingURL=main.856198a7.chunk.js.map