(this["webpackJsonpreact-lap"]=this["webpackJsonpreact-lap"]||[]).push([[0],{107:function(e,t,a){e.exports={Background:"ProfileCard_Background__2dmmf",ProfileCard:"ProfileCard_ProfileCard__V8jQK",ProfileCardBody:"ProfileCard_ProfileCardBody__2WvMX",ProfileCardBackgroundImage:"ProfileCard_ProfileCardBackgroundImage__3QV1U",ProfileCardImage:"ProfileCard_ProfileCardImage__1mS7H",TextMuted:"ProfileCard_TextMuted__34lCI",TextBold:"ProfileCard_TextBold__38av1",CardFooter:"ProfileCard_CardFooter__915GT",FooterP:"ProfileCard_FooterP__i-r6v"}},108:function(e,t,a){},109:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(19),o=a.n(l),c=(a(77),a(78),a(18)),u=a(6),s=a(120),i=a(114),m=a(121),E=a(118),d=a(23),p=a(47),f=a(10),g=a(17),h=a.n(g),v=a(32),S=a(38),y=a.n(S);var C=function(e){e.history;var t=Object(f.c)((function(e){return e.userLogin})).userInfo,a=Object(f.b)();return n.a.createElement("div",null,n.a.createElement("header",null,n.a.createElement(s.a,{bg:"dark",variant:"dark",expand:"lg",collapseOnSelect:!0},n.a.createElement(i.a,null,n.a.createElement(d.LinkContainer,{to:"/"},n.a.createElement(s.a.Brand,null,"PRIMODIAL ESCROW SERVICES")),n.a.createElement(s.a.Toggle,{"aria-controls":"basic-navbar-nav"}),n.a.createElement(s.a.Collapse,{id:"basic-navbar-nav"},n.a.createElement(m.a,{className:"ml-auto"},t?n.a.createElement(E.a,{title:t.name,id:"username"},n.a.createElement(d.LinkContainer,{to:"/profile"},n.a.createElement(E.a.Item,null,"Profile")),n.a.createElement(E.a.Item,{onClick:function(){a(function(){var e=Object(v.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:localStorage.removeItem("userInfo"),t({type:"USER_LOGOUT"}),t({type:"USER_DETAILS_RESET"});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}},"Logout")):n.a.createElement(d.LinkContainer,{to:"/login"},n.a.createElement(m.a.Link,null,n.a.createElement("i",{className:"fas fa-user"}))),!t&&n.a.createElement(d.LinkContainer,{to:"/login"},n.a.createElement(m.a.Link,null,n.a.createElement(p.a,{style:{margin:"5"}}),"Login")),!t&&n.a.createElement(d.LinkContainer,{to:"/register"},n.a.createElement(m.a.Link,null,n.a.createElement(p.a,{style:{margin:"5"}}),"Sign up"))))))))},b=a(115),_=a(69);var I=function(){return r.createElement("div",null,r.createElement(i.a,null,r.createElement(b.a,null,r.createElement("appBar",null),r.createElement(_.a,{className:"text-center py-3"},"Copyright \xa9 PRIMODIAL ESCROW SERVICES"))))},R=a(7),O=a(119),L=a(68);var U=function(e){var t=e.children;return n.a.createElement(i.a,null,n.a.createElement(b.a,{className:"justify-content-md-center"},n.a.createElement(_.a,{xs:12,md:6},t)))},j=a(116);var w=function(){return r.createElement(j.a,{animation:"border",role:"status",style:{height:"100px",width:"100px",margin:"auto",display:"block"}},r.createElement("span",{className:"sr-only"},"Loading..."))},A=a(122);var P=function(e){var t=e.variant,a=e.children;return r.createElement(A.a,{variant:t},a)};var T=function(e){var t=e.history,a=e.location,n=r.useState(""),l=Object(R.a)(n,2),o=l[0],u=l[1],s=r.useState(""),i=Object(R.a)(s,2),m=i[0],E=i[1],d=a.search?a.search.split("m")[1]:"/",p=Object(f.c)((function(e){return e.userLogin})),g=p.loading,S=p.error,C=p.userInfo,I=Object(f.b)();return r.useEffect((function(){C&&t.push(d)}),[t,C,d]),r.createElement(r.Fragment,null,r.createElement(U,null,r.createElement("h1",null,"Welcome to Primodial Escrow Services, please proceed to sign-in with your email address and password"),S&&r.createElement(P,{variant:"danger"},"Incorrect Password or username"),g&&r.createElement(w,null),r.createElement(O.a,{onSubmit:function(e){e.preventDefault(),I(function(e,t){return function(){var a=Object(v.a)(h.a.mark((function a(r){var n,l,o;return h.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,r({type:"USER_LOGIN_REQUEST"}),n={headers:{"Content-type":"application/json"}},a.next=5,y.a.post("http://127.0.0.1:8000/api/user/login/",{username:e,password:t},n);case 5:l=a.sent,o=l.data,r({type:"USER_LOGIN_SUCCESS",payload:o}),a.next=13;break;case 10:a.prev=10,a.t0=a.catch(0),r({type:"USER_LOGIN_FAIL",payload:a.t0.response&&a.t0.response.data.details?a.t0.response.data.details:a.t0.message});case 13:case"end":return a.stop()}}),a,null,[[0,10]])})));return function(e){return a.apply(this,arguments)}}()}(o,m))}},r.createElement(O.a.Group,{controlId:"email"},r.createElement(O.a.Label,null,"E-mail Address"),r.createElement(O.a.Control,{type:"email",placeholder:"Enter your email here",value:o,onChange:function(e){return u(e.target.value)}})),r.createElement(O.a.Group,{controlId:"password"},r.createElement(O.a.Label,null,"Password"),r.createElement(O.a.Control,{type:"password",placeholder:"Enter your Password here",value:m,onChange:function(e){return E(e.target.value)}})),r.createElement(L.a,{type:"submit",variant:"primary"},"Sign In")),r.createElement(b.a,{className:"py-3"},r.createElement(_.a,null,"New Customer? ",r.createElement(c.Link,{to:"/register"}," Click here to Register")))))};var k=function(e){e.location;var t=e.history,a=r.useState(""),n=Object(R.a)(a,2),l=n[0],o=n[1],u=r.useState(""),s=Object(R.a)(u,2),i=s[0],m=s[1],E=r.useState(""),d=Object(R.a)(E,2),p=d[0],g=d[1],S=r.useState(""),C=Object(R.a)(S,2),I=C[0],j=C[1],A=r.useState(""),T=Object(R.a)(A,2),k=T[0],G=T[1],x=Object(f.c)((function(e){return e.userRegister})),N=x.loading,B=x.error,D=x.userInfo,F=Object(f.b)();return r.useEffect((function(){D&&t.push("/")}),[t,D]),r.createElement(U,null,r.createElement("h1",null,"Welcome, please enter vaild details in order to register your account."),B&&r.createElement(P,{variant:"danger"},B),N&&r.createElement(w,null),k&&r.createElement(P,{variant:"danger"},k),r.createElement(O.a,{onSubmit:function(e){e.preventDefault(),p!==I?G("password does not match"):F(function(e,t,a){return function(){var r=Object(v.a)(h.a.mark((function r(n){var l,o,c;return h.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,n({type:"USER_REGISTER_REQUEST"}),l={headers:{"Content-type":"application/json"}},r.next=5,y.a.post("http://127.0.0.1:8000/api/user/register/",{name:e,email:t,password:a},l);case 5:o=r.sent,c=o.data,n({type:"USER_REGISTER_SUCCESS",payload:c}),localStorage.setItem("userInfo",JSON.stringify(c)),r.next=14;break;case 11:r.prev=11,r.t0=r.catch(0),n({type:"USER_REGISTER_FAIL",payload:r.t0.response&&r.t0.response.data.detail?r.t0.response.data.detail:r.t0.message});case 14:case"end":return r.stop()}}),r,null,[[0,11]])})));return function(e){return r.apply(this,arguments)}}()}(l,i,p)),t.push("/createAddress"),console.log("register")}},r.createElement(O.a.Group,{controlId:"name"},r.createElement(O.a.Label,null,"UserName"),r.createElement(O.a.Control,{required:!0,type:"text",placeholder:"Enter your Username here",value:l,onChange:function(e){return o(e.target.value)}})),r.createElement(O.a.Group,{controlId:"email"},r.createElement(O.a.Label,null,"Email Address"),r.createElement(O.a.Control,{required:!0,type:"email",placeholder:"Enter your Email here",value:i,onChange:function(e){return m(e.target.value)}}),r.createElement(O.a.Group,{controlId:"password"},r.createElement(O.a.Label,null,"Password"),r.createElement(O.a.Control,{required:!0,type:"password",placeholder:"Enter your Password here",value:p,onChange:function(e){return g(e.target.value)}})),r.createElement(O.a.Group,{controlId:"confirmPassword"},r.createElement(O.a.Label,null,"Re-Enter Password"),r.createElement(O.a.Control,{required:!0,type:"password",placeholder:"Confirm Password",value:I,onChange:function(e){return j(e.target.value)}})),r.createElement(L.a,{type:"submit",variant:"primary"},"Continue"))),r.createElement(b.a,{className:"py-3"},r.createElement(_.a,null,"Already have account? ",r.createElement(c.Link,{to:"/login"},"Click here to Login"))))};a(123),a(107);var G=function(e){return e.history,n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{style:{backgroundImage:'url("https://via.placeholder.com/500")'}},n.a.createElement(b.a,null)))};var x=function(e){e.location;var t=e.history,a=r.useState(""),n=Object(R.a)(a,2),l=n[0],o=n[1],c=r.useState(""),u=Object(R.a)(c,2),s=u[0],i=u[1],m=r.useState(""),E=Object(R.a)(m,2),d=E[0],p=E[1],g=r.useState(""),S=Object(R.a)(g,2),C=S[0],b=S[1],_=r.useState(""),I=Object(R.a)(_,2),j=I[0],A=I[1],T=r.useState(""),k=Object(R.a)(T,2),G=k[0],x=k[1],N=r.useState(""),B=Object(R.a)(N,2),D=B[0],F=B[1],q=r.useState(""),M=Object(R.a)(q,2),Q=M[0],W=(M[1],Object(f.c)((function(e){return e.userLogin}))),H=W.loading,J=W.error,V=(W.userInfo,Object(f.b)());return r.createElement(U,null,r.createElement("h1",null,"Please, fill the form below"),J&&r.createElement(P,{variant:"danger"},J),H&&r.createElement(w,null),Q&&r.createElement(P,{variant:"danger"},Q),r.createElement(O.a,{onSubmit:function(e){e.preventDefault(),V(function(e,t,a,r,n,l,o){return function(){var c=Object(v.a)(h.a.mark((function c(u,s){var i,m,E,d,p;return h.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,u({type:"USER_CREATE_ADRESS_REQUEST"}),i=s(),m=i.userLogin.userInfo,E={headers:{"Content-type":"application/json",Authorization:"Bearer ".concat(m.token)}},c.next=6,y.a.post("http://127.0.0.1:8000/api/user/create/address/",{phone:e,address:t,country:a,city:r,state:n,postalCode:l,accountNumber:o},E);case 6:d=c.sent,p=d.data,u({type:"USER_CREATE_ADRESS_SUCCESS",payload:p}),localStorage.setItem("userInfo",JSON.stringify(p)),c.next=15;break;case 12:c.prev=12,c.t0=c.catch(0),u({type:"USER_CREATE_ADRESS_FAIL",payload:c.t0.response&&c.t0.response.data.detail?c.t0.response.data.detail:c.t0.message});case 15:case"end":return c.stop()}}),c,null,[[0,12]])})));return function(e,t){return c.apply(this,arguments)}}()}(l,s,d,C,j,G,D)),t.push("/profile"),console.log("addressCreated")}},r.createElement(O.a.Group,{controlId:"tel"},r.createElement(O.a.Label,null,"Phone Number"),r.createElement(O.a.Control,{required:!0,type:"number",placeholder:"Enter your phone number",value:l,onChange:function(e){return o(e.target.value)}})),r.createElement(O.a.Group,{controlId:"address"},r.createElement(O.a.Label,null,"Address"),r.createElement(O.a.Control,{required:!0,type:"text",placeholder:"Enter your Address",value:s,onChange:function(e){return i(e.target.value)}}),r.createElement(O.a.Group,{controlId:"country"},r.createElement(O.a.Label,null,"Country"),r.createElement(O.a.Control,{required:!0,type:"text",placeholder:"",value:d,onChange:function(e){return p(e.target.value)}})),r.createElement(O.a.Group,{controlId:"state"},r.createElement(O.a.Label,null,"State"),r.createElement(O.a.Control,{required:!0,type:"text",placeholder:"",value:j,onChange:function(e){return A(e.target.value)}})),r.createElement(O.a.Group,{controlId:"city"},r.createElement(O.a.Label,null,"City"),r.createElement(O.a.Control,{required:!0,type:"text",placeholder:"",value:C,onChange:function(e){return b(e.target.value)}})),r.createElement(O.a.Group,{controlId:"postal"},r.createElement(O.a.Label,null,"Postal Code"),r.createElement(O.a.Control,{required:!0,type:"text",placeholder:"Enter your postal code",value:G,onChange:function(e){return x(e.target.value)}})),r.createElement(O.a.Group,{controlId:"number"},r.createElement(O.a.Label,null,"Account Number "),r.createElement(O.a.Control,{required:!0,type:"text",placeholder:"Input your account number",value:D,onChange:function(e){return F(e.target.value)}})),r.createElement(L.a,{type:"submit",variant:"primary"},"SUBMIT FORM"))))},N=a(117);var B=function(e){var t=e.history,a=Object(r.useState)(""),l=Object(R.a)(a,2),o=(l[0],l[1],Object(r.useState)("")),c=Object(R.a)(o,2),u=c[0],s=c[1],i=Object(f.b)(),m=Object(f.c)((function(e){return e.userLogin})).userInfo;return Object(r.useEffect)((function(){m||t.push("/login")}),[i,t,m]),n.a.createElement(b.a,null,n.a.createElement(_.a,{md:9},n.a.createElement("h2",null,"Transaction History"),n.a.createElement(N.a,{striped:!0,responsive:!0,className:"table-sm"},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"user"),n.a.createElement("th",null,"Amount"),n.a.createElement("th",null,"Amount Recieved"),n.a.createElement("th",null,"Payment Type"),n.a.createElement("th",null,"Account Number"),n.a.createElement("th",null,"Account Name"),n.a.createElement("th",null,"Status"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,null===m||void 0===m?void 0:m.username),n.a.createElement("td",null,"$100,000"),n.a.createElement("td",null,"$490 (successful)"),n.a.createElement("td",null,"ygyry"),n.a.createElement("td",null,"HBUK4017264178610USD"),n.a.createElement("td",null,"Helium Accounting Service"),n.a.createElement("td",null,"Pending"))))),n.a.createElement(_.a,{md:5},n.a.createElement("h4",null," "),n.a.createElement(O.a,{onSubmit:""},n.a.createElement(O.a.Group,{controlId:"email"},n.a.createElement(O.a.Label,null,"COMPLAINT"),n.a.createElement(O.a.Control,{type:"text",placeholder:"File your complaint here",value:u,onChange:function(e){return s(e.target.value)}})),n.a.createElement(L.a,{type:"submit",variant:"primary"},"Message"))))};var D=function(){return n.a.createElement(c.HashRouter,null,n.a.createElement(C,null),n.a.createElement("main",{className:"py-3"},n.a.createElement(i.a,null,n.a.createElement(u.d,{path:"/",component:G,exact:!0}),n.a.createElement(u.d,{path:"/login",component:T}),n.a.createElement(u.d,{path:"/createAddress",component:x}),n.a.createElement(u.d,{path:"/register",component:k}),n.a.createElement(u.d,{path:"/profile",component:B}))),n.a.createElement(I,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var F=a(37),q=a(70),M=a(71),Q=Object(F.combineReducers)({userLogin:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USER_LOGIN_REQUEST":return{loading:!0};case"USER_LOGIN_SUCCESS":return{loading:!1,userInfo:t.payload};case"USER_LOGIN_FAIL":return{loading:!1,error:t.payload};case"USER_LOGOUT":return{};default:return e}},userRegister:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USER_REGISTER_REQUEST":return{loading:!0};case"USER_REGISTER_SUCCESS":return{loading:!1,userInfo:t.payload};case"USER_REGISTER_FAIL":return{loading:!1,error:t.payload};case"USER_LOGOUT":return{};default:return e}},userAddress:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USER_CREATE_ADRESS_REQUEST":return{loading:!0};case"USER_CREATE_ADRESS_SUCCESS":return{loading:!1,userAddress:t.payload};case"USER_CREATE_ADRESS_FAIL":return{loading:!1,error:t.payload};case"USER_LOGOUT":return{};default:return e}}}),W={userLogin:{userInfo:localStorage.getItem("userInfo")?JSON.parse(localStorage.getItem("userInfo")):null}},H=[q.a],J=Object(F.createStore)(Q,W,Object(M.composeWithDevTools)(F.applyMiddleware.apply(void 0,H)));a(108);o.a.render(n.a.createElement(f.a,{store:J},n.a.createElement(D,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},72:function(e,t,a){e.exports=a(109)},77:function(e,t,a){},78:function(e,t,a){}},[[72,1,2]]]);
//# sourceMappingURL=main.07b8017d.chunk.js.map