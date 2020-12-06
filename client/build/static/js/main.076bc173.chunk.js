(this.webpackJsonpnightin=this.webpackJsonpnightin||[]).push([[0],{34:function(e,t,a){},39:function(e,t,a){e.exports=a(71)},62:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(36),c=a.n(r),i=a(7),o=a(6),u=a(5);var s=function(e){var t=e.children;return l.a.createElement("div",{style:{height:350,clear:"both",paddingTop:120,textAlign:"center"},className:"jumbotron"},t)},m=a(15),E=a.n(m),d=function(e){return E()({method:"POST",data:e,withCredentials:!0,url:"/api/user/register"})},f=function(e){return E.a.post("/api/user/login",e)},g=function(e){return console.log(e),E.a.post("/api/user/logout",e)},p=function(e){return E.a.put("/api/user/addRecipe",e)},v=function(e){return E.a.get("/api/recipe",{params:{q:e}})},h=function(e){return E.a.get("/api/recipe/"+e)},b=function(){return E.a.get("/api/wine")},N=function(e){return E.a.get("/api/wine/"+e)};function j(e){var t=e.fluid,a=e.children;return l.a.createElement("div",{className:"container".concat(t?"-fluid":"")},a)}function O(e){var t=e.fluid,a=e.children;return l.a.createElement("div",{className:"row".concat(t?"-fluid":"")},a)}function w(e){var t=e.size,a=e.children;return l.a.createElement("div",{className:t.split(" ").map((function(e){return"col-"+e})).join(" ")},a)}a(62);function y(e){var t=e.children;return l.a.createElement("div",{className:"list-overflow-container"},l.a.createElement("ul",{className:"list-group"},t))}function C(e){var t=e.children;return l.a.createElement("li",{className:"list-group-item"},t)}var k=function(e){return l.a.createElement("div",{className:"input-group"},l.a.createElement("input",Object.assign({className:"form-control",type:"text"},e)))};var S=function(e){var t=e.type,a=void 0===t?"default":t,n=e.className,r=e.children,c=e.onClick;return l.a.createElement("button",{onClick:c,className:["btn","btn-".concat(a),n].join(" ")},r)},x=a(72),z=a(38),I=a(18),T=Object(n.createContext)(),R=T.Provider,L=function(e,t){switch(t.type){case"setCurrentUser":return Object(I.a)(Object(I.a)({},e),{},{user:t.user,loading:!1});case"loading":return Object(I.a)(Object(I.a)({},e),{},{loading:!0});default:return e}},D=function(e){e.value;var t=Object(z.a)(e,["value"]),a=Object(n.useReducer)(L,{user:{},loading:!1}),r=Object(u.a)(a,2),c=r[0],i=r[1];return l.a.createElement(R,Object.assign({value:[c,i]},t))},W=function(){return Object(n.useContext)(T)};var F=function(){var e=W(),t=Object(u.a)(e,2),a=t[0],n=t[1];return a.user.email?l.a.createElement("nav",{className:"navbar navbar-expand-md navbar-light bg-light"},l.a.createElement("a",{className:"navbar-brand",href:"#"},"Night In"),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarColor03","aria-controls":"navbarColor03","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarColor03"},l.a.createElement("ul",{className:"navbar-nav mr-auto"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"/".concat(a.user.id,"/home")},l.a.createElement("strong",null,"Home"))),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"/favorites"},"Favorites")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"/register",onClick:function(){g(a).then((function(e){n({email:"",faves:[],_id:""})})).then((function(){window.location.reload()}))}},"Log Out"))))):l.a.createElement("nav",{className:"navbar navbar-expand-md navbar-light bg-light"},l.a.createElement("a",{className:"navbar-brand",href:"#"},"Night In"),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarColor03","aria-controls":"navbarColor03","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarColor03"},l.a.createElement("ul",{className:"navbar-nav mr-auto"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"/register"},"Sign Up")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"/login"},"Log In")))))};var U=function(){var e=W(),t=Object(u.a)(e,2),a=(t[0],t[1],Object(n.useState)([])),r=Object(u.a)(a,2),c=r[0],o=r[1],m=Object(n.useState)(""),E=Object(u.a)(m,2),d=E[0],f=E[1];return l.a.createElement("div",null,l.a.createElement(j,{fluid:!0},l.a.createElement(s,null,l.a.createElement(O,{className:"justify-content-center"}," ",l.a.createElement(w,{size:"md-12 sm-12"},l.a.createElement("p",{className:"lead"},"TEMP TEXT: The name of our mongo database is nightindb. In this version the data we are using is coming from a collection called recipes."),"When the user enters a term and clicks the search button, recipes containing that term appear below.",l.a.createElement("p",null))," "),l.a.createElement("br",null),l.a.createElement(O,null,l.a.createElement(w,{size:"md-12 sm-12"},l.a.createElement("form",null,l.a.createElement(j,{fluid:!0},l.a.createElement(O,null,l.a.createElement(w,{size:"md-6 sm-12"},l.a.createElement(k,{style:{backgroundColor:"#DCDCDC"},name:"RecipesSearch",value:d,onChange:function(e){var t=e.target.value;f(t)},placeholder:"Search For a Recipe",id:"defaultInput"})),l.a.createElement(w,{size:"xs-3 sm-2"},l.a.createElement(S,{onClick:function(e){e.preventDefault(),v(d).then((function(e){return o(e.data)})).catch((function(e){return console.log(e)}))},type:"secondary",className:"input-md btn-md btn-outline-secondary"},"Search")))))))),l.a.createElement(O,null,l.a.createElement(w,{size:"md-6 sm-12"},c.length?l.a.createElement(y,null,c.map((function(e){return l.a.createElement(C,{key:e._id},l.a.createElement(i.b,{to:"/recipe/"+e._id},l.a.createElement(x.a,{style:{width:"10rem"},className:"text-center"},l.a.createElement(x.a.Img,{className:"rounded-circle",variant:"top",src:e.image,alt:"photo of ".concat(e.title)}),l.a.createElement(x.a.Title,null,e.name))))}))):l.a.createElement("h3",null,"No Results to Display")))))};var P=function(e){return l.a.createElement("img",e)};var G=function(e){var t=W(),a=Object(u.a)(t,2),r=a[0],c=a[1],s=Object(n.useState)({}),m=Object(u.a)(s,2),E=m[0],d=m[1],f=Object(n.useState)([]),g=Object(u.a)(f,2),v=g[0],b=g[1],N=Object(n.useState)([]),k=Object(u.a)(N,2),x=k[0],z=k[1],I=Object(o.f)().id;return Object(n.useEffect)((function(){!function(e){h(e).then((function(e){d(e.data)})).catch((function(e){return console.log(e)}))}(I),function(e){h(e).then((function(e){return b(e.data.ingredients)})).catch((function(e){return console.log(e)}))}(I),function(e){h(e).then((function(e){return z(e.data.directions)})).catch((function(e){return console.log(e)}))}(I)}),[I]),l.a.createElement(j,{fluid:!0},l.a.createElement(O,null,l.a.createElement(w,{size:"md-10 md-offset-1"},l.a.createElement("article",null,l.a.createElement(O,null,l.a.createElement(i.b,{to:"/recipe"},l.a.createElement(S,{onClick:function(){},type:"success",className:"input-lg btn-lg"},"\u2190 Back")),l.a.createElement(i.b,{to:"/wine"},l.a.createElement(S,{type:"success",className:"input-lg btn-lg",onClick:function(){p({userId:r.user.id,favorite:E._id}).then((function(e){c({type:"setCurrentUser",user:e.data})})).catch((function(e){return console.log(e)}))}},"+ Select Recipe"))),l.a.createElement(O,null,l.a.createElement(w,{size:"md-10"},l.a.createElement(P,{src:E.image,alt:E.name}),l.a.createElement("br",null),l.a.createElement("h1",null,E.name)),l.a.createElement(w,{size:"md-5"},l.a.createElement("h2",null,"INGREDIENTS"),v.length?l.a.createElement(y,null,v.map((function(e){return l.a.createElement(C,{key:e.id},e.ing)}))):l.a.createElement("h3",null,"No Results to Display")),l.a.createElement(w,{size:"md-5"},l.a.createElement("h2",null,"INSTRUCTIONS"),x.length?l.a.createElement(y,null,x.map((function(e){return l.a.createElement(C,{key:e.id},e.dir)}))):l.a.createElement("h3",null,"No Results to Display")))))))};var _=function(){return l.a.createElement("div",null,l.a.createElement(j,{fluid:!0},l.a.createElement(O,null,l.a.createElement(w,{size:"md-12"},l.a.createElement(s,null,l.a.createElement("h1",null,"404 Page Not Found"),l.a.createElement("h1",null,l.a.createElement("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji"},"\ud83d\ude44")))))))},A=a(9),B=a(19);a(34);function J(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(""),o=Object(u.a)(c,2),s=o[0],m=o[1],E=W(),d=Object(u.a)(E,2),g=d[0],p=d[1];return l.a.createElement("div",{className:"Login"},l.a.createElement(A.a,{onSubmit:function(e){e.preventDefault()}},l.a.createElement(A.a.Group,{size:"md",controlId:"email"},l.a.createElement(A.a.Label,null,"Email"),l.a.createElement(A.a.Control,{autoFocus:!0,type:"email",value:a,onChange:function(e){return r(e.target.value)}})),l.a.createElement(A.a.Group,{size:"md",controlId:"password"},l.a.createElement(A.a.Label,null,"Password"),l.a.createElement(A.a.Control,{type:"password",value:s,onChange:function(e){return m(e.target.value)}})),l.a.createElement(i.b,{to:"/".concat(g.user.id,"/home")},l.a.createElement(B.a,{block:!0,size:"md",type:"submit",disabled:!(a.length>0&&s.length>0),onClick:function(){f({email:a,password:s}).then((function(e){200===e.status&&(console.log(e),e.data.email===a&&(p({type:"setCurrentUser",user:e.data}),console.log(g)))}),(function(){console.log("Login Failed")}))}},"Login"))))}function M(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(""),o=Object(u.a)(c,2),s=o[0],m=o[1],E=W(),f=Object(u.a)(E,2);f[0],f[1];return l.a.createElement("div",{className:"Login"},l.a.createElement(A.a,{onSubmit:function(e){e.preventDefault()}},l.a.createElement(A.a.Group,{size:"md",controlId:"email"},l.a.createElement(A.a.Label,null,"Email"),l.a.createElement(A.a.Control,{autoFocus:!0,type:"email",value:a,onChange:function(e){return r(e.target.value)}})),l.a.createElement(A.a.Group,{size:"md",controlId:"password"},l.a.createElement(A.a.Label,null,"Password"),l.a.createElement(A.a.Control,{type:"password",value:s,onChange:function(e){return m(e.target.value)}})),l.a.createElement(B.a,{block:!0,size:"md",type:"submit",onClick:function(){d({email:a,password:s}).then((function(e){"User Already Exists"===e.data?alert("This email is already in use"):window.location="/login"})).catch((function(e){return console.log(e)}))},disabled:!(a.length>0&&s.length>0)},"Sign Up"),l.a.createElement(i.b,{to:"/login"},l.a.createElement("strong",null,"Or Click here to Login"))))}var Y=function(){var e=W(),t=Object(u.a)(e,2),a=t[0];return t[1],l.a.createElement(j,{fluid:!0,className:"justify-content-center"},l.a.createElement(O,{className:"justify-content-center"},l.a.createElement(w,{size:"md-12 sm-12"},a.user.email?l.a.createElement(s,null,l.a.createElement("p",{class:"lead"},"Welcome ",l.a.createElement("span",{class:"text-muted"},a.user.email),"!"),l.a.createElement("br",null),l.a.createElement("button",{type:"button",class:"btn btn-secondary btn-lg"},l.a.createElement(i.b,{to:"/recipe"},"Start Planning Your Night In"))):l.a.createElement("div",null))))};var q=function(){return l.a.createElement(O,null,l.a.createElement(x.a,{style:{width:"10rem"},className:"text-center"},l.a.createElement(x.a.Img,{className:"rounded-circle",variant:"top",src:"https://via.placeholder.com/150"}),l.a.createElement(x.a.Title,null,"New York Strip Steak with Wild Rice and Broccoli")),l.a.createElement(x.a,{style:{width:"10rem"}},l.a.createElement(x.a.Img,{className:"rounded-circle",variant:"top",src:"https://via.placeholder.com/150"}),l.a.createElement(x.a.Title,null,"Wine Name")))};function H(){var e=W(),t=Object(u.a)(e,2),a=t[0];t[1];return l.a.createElement(j,{fluid:!0},a.user.email?l.a.createElement(q,null):l.a.createElement("div",null))}var V=function(){var e=W(),t=Object(u.a)(e,2),a=(t[0],t[1],Object(n.useState)([])),r=Object(u.a)(a,2),c=r[0],o=r[1];return Object(n.useEffect)((function(){b().then((function(e){return o(e.data)})).catch((function(e){return console.log(e)}))}),[]),l.a.createElement("div",null,l.a.createElement(j,{fluid:!0},l.a.createElement(O,null,l.a.createElement(w,{size:"md-6 sm-12"},l.a.createElement(s,null,l.a.createElement("h5",null,"FindAll Wine Collection")))),l.a.createElement(O,null,l.a.createElement(w,{size:"md-6 sm-12"},c.length?l.a.createElement(y,null,c.map((function(e){return l.a.createElement(C,{key:e._id},l.a.createElement(i.b,{to:"/wine/"+e._id},l.a.createElement(x.a,{style:{width:"10rem"},className:"text-center"},l.a.createElement(x.a.Img,{className:"rounded-circle",variant:"top",src:e.image,alt:"photo of ".concat(e.title)}),l.a.createElement(x.a.Title,null,e.name))))}))):l.a.createElement("h3",null,"No Results to Display")))))};var X=function(e){var t=Object(n.useState)({}),a=Object(u.a)(t,2),r=a[0],c=a[1],s=Object(n.useState)([]),m=Object(u.a)(s,2),E=m[0],d=m[1],f=Object(o.f)().id;return Object(n.useEffect)((function(){!function(e){N(e).then((function(e){return c(e.data)})).catch((function(e){return console.log(e)}))}(f),function(e){N(e).then((function(e){return d(e.data.vintages)})).catch((function(e){return console.log(e)}))}(f)}),[f]),l.a.createElement("div",null,l.a.createElement(j,{fluid:!0},l.a.createElement(O,null,l.a.createElement(w,{size:"md-10 md-offset-1"},l.a.createElement(O,null,l.a.createElement(i.b,{to:"/wine"},l.a.createElement(S,{onClick:function(){},type:"success",className:"input-lg btn-lg"},"\u2190 Back")),l.a.createElement(i.b,{to:"/favorites"},l.a.createElement(S,{onClick:function(){},type:"success",className:"input-lg btn-lg"},"+ Select Wine"))),l.a.createElement(O,null,l.a.createElement(w,{size:"md-10"},l.a.createElement(P,{src:r.image,alt:r.name}),l.a.createElement("br",null),l.a.createElement("h1",null,r.name),l.a.createElement("h4",null,r.blurb))),l.a.createElement(O,null,l.a.createElement(w,{size:"md-10"},l.a.createElement("h2",null,"VINTAGES"),E.length?l.a.createElement(y,null,E.map((function(e){return l.a.createElement(C,{key:e.id},e.vin)}))):l.a.createElement("p",null,"No Results to Display")))))))};var $=function(){return l.a.createElement(i.a,null,l.a.createElement("div",null,l.a.createElement(D,null,l.a.createElement(F,null),l.a.createElement(o.c,null,l.a.createElement(o.a,{exact:!0,path:"/:userId/home"},l.a.createElement(Y,null)),l.a.createElement(o.a,{exact:!0,path:["/","/register"]},l.a.createElement(M,null)),l.a.createElement(o.a,{exact:!0,path:"/login"},l.a.createElement(J,null)),l.a.createElement(o.a,{exact:!0,path:"/favorites"},l.a.createElement(H,null)),l.a.createElement(o.a,{exact:!0,path:"/recipe"},l.a.createElement(U,null)),l.a.createElement(o.a,{exact:!0,path:"/recipe/:id"},l.a.createElement(G,null)),l.a.createElement(o.a,{exact:!0,path:"/wine"},l.a.createElement(V,null)),l.a.createElement(o.a,{exact:!0,path:"/wine/:id"},l.a.createElement(X,null)),l.a.createElement(o.a,null,l.a.createElement(_,null))))))},K=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Q(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement($,null)),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");K?function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Q(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):Q(e)}))}}()}},[[39,1,2]]]);
//# sourceMappingURL=main.076bc173.chunk.js.map