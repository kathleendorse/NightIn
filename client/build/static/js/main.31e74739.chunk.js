(this.webpackJsonpnightin=this.webpackJsonpnightin||[]).push([[0],{32:function(e,t,a){},36:function(e,t,a){e.exports=a(68)},59:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(34),c=a.n(r),i=a(6),o=a(5),u=a(8);var m=function(e){var t=e.children;return l.a.createElement("div",{style:{height:300,clear:"both",paddingTop:120,textAlign:"center"},className:"jumbotron"},t)},s=a(15),E=a.n(s),d=function(e){return E.a.post("/api/user/login",e)},f=function(e){return E()({method:"POST",data:e,withCredentials:!0,url:"http://localhost:3001/api/user/register"})},p=function(e){return E.a.get("/api/recipe",{params:{q:e}})},h=function(e){return E.a.get("/api/recipe/"+e)},g=function(){return E.a.get("/api/wine")},v=function(e){return E.a.get("/api/wine/"+e)};function b(e){var t=e.fluid,a=e.children;return l.a.createElement("div",{className:"container".concat(t?"-fluid":"")},a)}function N(e){var t=e.fluid,a=e.children;return l.a.createElement("div",{className:"row".concat(t?"-fluid":"")},a)}function w(e){var t=e.size,a=e.children;return l.a.createElement("div",{className:t.split(" ").map((function(e){return"col-"+e})).join(" ")},a)}a(59);function O(e){var t=e.children;return l.a.createElement("div",{className:"list-overflow-container"},l.a.createElement("ul",{className:"list-group"},t))}function I(e){var t=e.children;return l.a.createElement("li",{className:"list-group-item"},t)}var j=function(e){return l.a.createElement("div",{className:"input-group input-group-lg"},l.a.createElement("input",Object.assign({className:"form-control",type:"text"},e)))};var y=function(e){var t=e.type,a=void 0===t?"default":t,n=e.className,r=e.children,c=e.onClick;return l.a.createElement("button",{onClick:c,className:["btn","btn-".concat(a),n].join(" ")},r)};var C=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(""),o=Object(u.a)(c,2),s=o[0],E=o[1];return l.a.createElement(b,{fluid:!0},l.a.createElement(N,null,l.a.createElement(w,{size:"md-6 sm-12"},l.a.createElement(m,null,l.a.createElement("h5",null,"The name of our mongo database is nightindb. In this version the data we are using is coming from a collection called recipes. When the user enters a term and clicks the search button, recipes containing that term appear below.")))),l.a.createElement(N,null,l.a.createElement(w,{size:"md-6 sm-12"},l.a.createElement("form",null,l.a.createElement(b,{fluid:!0},l.a.createElement(N,null,l.a.createElement(w,{size:"md-6 sm-12"},l.a.createElement(j,{name:"RecipesSearch",value:s,onChange:function(e){var t=e.target.value;E(t)},placeholder:"Search For a Recipe"})),l.a.createElement(w,{size:"xs-3 sm-2"},l.a.createElement(y,{onClick:function(e){e.preventDefault(),p(s).then((function(e){return r(e.data)})).catch((function(e){return console.log(e)}))},type:"success",className:"input-lg btn-lg"},"Search"))))))),l.a.createElement(N,null,l.a.createElement(w,{size:"md-6 sm-12"},a.length?l.a.createElement(O,null,a.map((function(e){return l.a.createElement(I,{key:e._id},l.a.createElement(i.b,{to:"/recipe/"+e._id},l.a.createElement("strong",null,e.name)))}))):l.a.createElement("h3",null,"No Results to Display"))))};var k=function(e){return l.a.createElement("img",e)};var S=function(e){var t=Object(n.useState)({}),a=Object(u.a)(t,2),r=a[0],c=a[1],s=Object(o.f)().id;return Object(n.useEffect)((function(){h(s).then((function(e){return c(e.data)})).catch((function(e){return console.log(e)}))}),[s]),l.a.createElement(b,{fluid:!0},l.a.createElement(N,null,l.a.createElement(w,{size:"md-12"},l.a.createElement(m,null,l.a.createElement("h1",null,"DETAIL OF SPECIFIC RECIPE RECORD IN COLLECTION")))),l.a.createElement(N,null,l.a.createElement(w,{size:"md-10 md-offset-1"},l.a.createElement("article",null,l.a.createElement("p",null,l.a.createElement(i.b,{to:"/recipe"},l.a.createElement(y,{onClick:function(){},type:"success",className:"input-lg btn-lg"},"\u2190 Back")),l.a.createElement(i.b,{to:"/wine"},l.a.createElement(y,{type:"success",className:"input-lg btn-lg"},"+ Select Recipe"))),l.a.createElement("h1",null,"ID"),l.a.createElement("p",null,r._id),l.a.createElement("h1",null,"NAME"),l.a.createElement("p",null,r.name),l.a.createElement("h1",null,"INGREDIENTS"),l.a.createElement("p",null,"(need means of providing key for indexes of ingredients array)"),l.a.createElement("h1",null,"IMAGE"),l.a.createElement("p",null,'(currently does not work because "src=" is duplicated in props and listed in image\'s property value string)'),l.a.createElement(k,{src:r.image}),l.a.createElement("h1",null,"INSTRUCTIONS"),l.a.createElement("p",null,"(need means of providing key for indexes of instructions array)"),l.a.createElement("h1",null,"MAIN TYPE"),l.a.createElement("p",null,r.type),l.a.createElement("h1",null,"SUGGESTED WINE PAIRING"),l.a.createElement("p",null,r.wine," - ",r.subwine)))))};var z=function(){return l.a.createElement(b,{fluid:!0},l.a.createElement(N,null,l.a.createElement(w,{size:"md-12"},l.a.createElement(m,null,l.a.createElement("h1",null,"404 Page Not Found"),l.a.createElement("h1",null,l.a.createElement("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji"},"\ud83d\ude44"))))))};var x=function(){return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark"},l.a.createElement("span",{className:"nav-brand"},"Night In"),l.a.createElement("span",{className:"nav-item nav-link"},l.a.createElement(i.b,{to:"/"},l.a.createElement("strong",null,"Home"))),l.a.createElement("span",{className:"nav-item nav-link"},l.a.createElement(i.b,{to:"/register"},l.a.createElement("strong",null,"Sign Up"))),l.a.createElement("span",{className:"nav-item nav-link"},l.a.createElement(i.b,{to:"/login"},l.a.createElement("strong",null,"Log In"))),l.a.createElement("span",{className:"nav-item nav-link"},l.a.createElement(i.b,{to:"/favorites"},l.a.createElement("strong",null,"Favorites"))))},L=a(9),R=a(18);a(32);function T(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(""),i=Object(u.a)(c,2),o=i[0],m=i[1];return l.a.createElement("div",{className:"Login"},l.a.createElement(L.a,{onSubmit:function(e){e.preventDefault()}},l.a.createElement(L.a.Group,{size:"lg",controlId:"email"},l.a.createElement(L.a.Label,null,"Email"),l.a.createElement(L.a.Control,{autoFocus:!0,type:"email",value:a,onChange:function(e){return r(e.target.value)}})),l.a.createElement(L.a.Group,{size:"lg",controlId:"password"},l.a.createElement(L.a.Label,null,"Password"),l.a.createElement(L.a.Control,{type:"password",value:o,onChange:function(e){return m(e.target.value)}})),l.a.createElement(R.a,{block:!0,size:"lg",type:"submit",disabled:!(a.length>0&&o.length>0),onClick:function(){d({email:a,password:o}).then((function(e){console.log(e),e.data.email===a&&(window.location.href="/")}),(function(){console.log("Login Failed")}))}},"Login")))}function D(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(""),i=Object(u.a)(c,2),o=i[0],m=i[1];return l.a.createElement("div",{className:"Login"},l.a.createElement(L.a,{onSubmit:function(e){e.preventDefault()}},l.a.createElement(L.a.Group,{size:"lg",controlId:"email"},l.a.createElement(L.a.Label,null,"Email"),l.a.createElement(L.a.Control,{autoFocus:!0,type:"email",value:a,onChange:function(e){return r(e.target.value)}})),l.a.createElement(L.a.Group,{size:"lg",controlId:"password"},l.a.createElement(L.a.Label,null,"Password"),l.a.createElement(L.a.Control,{type:"password",value:o,onChange:function(e){return m(e.target.value)}})),l.a.createElement(R.a,{block:!0,size:"lg",type:"submit",onClick:function(){f({email:a,password:o}).then((function(e){return window.location.href="/"}))},disabled:!(a.length>0&&o.length>0)},"Sign Up")))}var P=function(){return l.a.createElement(b,{fluid:!0},l.a.createElement(N,null,l.a.createElement(w,{size:"md-10 sm-12"},l.a.createElement(m,null,l.a.createElement("h1",null,"Start Planning Your Night In"),l.a.createElement("br",null),l.a.createElement("button",null,l.a.createElement(i.b,{to:"/recipe"},"Start Planning Your Night In"))))))},A=a(70);var F=function(){return l.a.createElement(N,null,l.a.createElement(w,{size:"sm-4"},l.a.createElement(A.a,{style:{width:"10rem"},className:"text-center"},l.a.createElement(A.a.Img,{className:"rounded-circle",variant:"top",src:"https://via.placeholder.com/150"}),l.a.createElement(A.a.Title,null,"Meal Name"))),l.a.createElement(w,{size:"sm-4"},l.a.createElement(A.a,{style:{width:"10rem"}},l.a.createElement(A.a.Img,{className:"rounded-circle",variant:"top",src:"https://via.placeholder.com/150"}),l.a.createElement(A.a.Title,null,"Wine Name"))),l.a.createElement(w,{size:"sm-4"},l.a.createElement(R.a,{variant:"outline-info",size:"sm",href:"#",role:"button"},"View details \xbb"),l.a.createElement("p",null,l.a.createElement(R.a,{variant:"outline-secondary",size:"sm",href:"#",role:"button"},"Add Note"))))};function W(){return l.a.createElement(b,{fluid:!0},l.a.createElement(F,null))}var G=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){g().then((function(e){return r(e.data)})).catch((function(e){return console.log(e)}))}),[]),l.a.createElement(b,{fluid:!0},l.a.createElement(N,null,l.a.createElement(w,{size:"md-6 sm-12"},l.a.createElement(m,null,l.a.createElement("h5",null,"FindAll Wine Collection")))),l.a.createElement(N,null,l.a.createElement(w,{size:"md-6 sm-12"},a.length?l.a.createElement(O,null,a.map((function(e){return l.a.createElement(I,{key:e._id},l.a.createElement(i.b,{to:"/wine/"+e._id},l.a.createElement("strong",null,e.name)))}))):l.a.createElement("h3",null,"No Results to Display"))))};var M=function(e){var t=Object(n.useState)({}),a=Object(u.a)(t,2),r=a[0],c=a[1],s=Object(o.f)().id;return Object(n.useEffect)((function(){v(s).then((function(e){return c(e.data)})).catch((function(e){return console.log(e)}))}),[s]),l.a.createElement(b,{fluid:!0},l.a.createElement(N,null,l.a.createElement(w,{size:"md-12"},l.a.createElement(m,null,l.a.createElement("h1",null,"DETAIL OF A SPECIFIC WINE RECORD IN COLLECTION")))),l.a.createElement(N,null,l.a.createElement(w,{size:"md-10 md-offset-1"},l.a.createElement("article",null,l.a.createElement("p",null,l.a.createElement(i.b,{to:"/wine"},l.a.createElement(y,{onClick:function(){},type:"success",className:"input-lg btn-lg"},"\u2190 Back")),l.a.createElement(i.b,{to:"/favorites"},l.a.createElement(y,{type:"success",className:"input-lg btn-lg"},"+ Select Wine"))),l.a.createElement("h1",null,"ID"),l.a.createElement("p",null,r._id),l.a.createElement("h1",null,"NAME"),l.a.createElement("p",null,r.name),l.a.createElement("h1",null,"TYPE"),l.a.createElement("p",null,r.type)))))};var _=function(){return l.a.createElement(i.a,null,l.a.createElement("div",null,l.a.createElement(x,null),l.a.createElement(o.c,null,l.a.createElement(o.a,{exact:!0,path:["/","/home"]},l.a.createElement(P,null)),l.a.createElement(o.a,{exact:!0,path:"/register"},l.a.createElement(D,null)),l.a.createElement(o.a,{exact:!0,path:"/login"},l.a.createElement(T,null)),l.a.createElement(o.a,{exact:!0,path:"/favorites"},l.a.createElement(W,null)),l.a.createElement(o.a,{exact:!0,path:"/recipe"},l.a.createElement(C,null)),l.a.createElement(o.a,{exact:!0,path:"/recipe/:id"},l.a.createElement(S,null)),l.a.createElement(o.a,{exact:!0,path:"/wine"},l.a.createElement(G,null)),l.a.createElement(o.a,{exact:!0,path:"/wine/:id"},l.a.createElement(M,null)),l.a.createElement(o.a,null,l.a.createElement(z,null)))))},U=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function B(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var Y=Object(n.createContext)({});function J(e){var t=Object(n.useState)(),a=Object(u.a)(t,2),r=a[0],c=a[1];return Object(n.useEffect)((function(){E.a.get("http://localhost:3001/api/user/login",{withCredentials:!0}).then((function(e){c(e.data)}))}),[r]),l.a.createElement(Y.Provider,{value:r},e.children)}c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(J,null,l.a.createElement(_,null))),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");U?function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):B(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):B(e)}))}}()}},[[36,1,2]]]);
//# sourceMappingURL=main.31e74739.chunk.js.map