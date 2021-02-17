(function(e){function t(t){for(var n,o,i=t[0],l=t[1],c=t[2],p=0,d=[];p<i.length;p++)o=i[p],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);u&&u(t);while(d.length)d.shift()();return s.push.apply(s,c||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],n=!0,i=1;i<r.length;i++){var l=r[i];0!==a[l]&&(n=!1)}n&&(s.splice(t--,1),e=o(o.s=r[0]))}return e}var n={},a={app:0},s=[];function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=n,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var u=l;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},1546:function(e,t,r){"use strict";r("50a5")},"50a5":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e623"),r("e379"),r("5dc8"),r("37e1");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("b-card",{attrs:{title:"Ticket System","no-body":""}},[r("b-card-header",{attrs:{"header-tag":"nav"}},[r("b-nav",{attrs:{"card-header":"",tabs:""}},[e.isLoggedIn?e._e():r("b-nav-item",{attrs:{to:"/",exact:"","exact-active-class":"active"}},[e._v("Login")]),e.isLoggedIn?e._e():r("b-nav-item",{attrs:{to:"/register",exact:"","exact-active-class":"active"}},[e._v("Register")]),e.isLoggedIn?r("b-nav-item",{attrs:{to:"/",exact:"","exact-active-class":"active"}},[e._v("Home")]):e._e(),e.isLoggedIn?r("b-nav-item",{attrs:{to:"/tickets",exact:"","exact-active-class":"active"}},[e._v("Tickets")]):e._e(),e.isLoggedIn?r("b-nav-item",{attrs:{to:"/new-ticket",exact:"","exact-active-class":"active"}},[e._v("New Ticket")]):e._e(),e.isLoggedIn?r("b-nav-item",{attrs:{to:"/logout",exact:"","exact-active-class":"active"}},[e._v("Logout")]):e._e()],1)],1),r("b-card-body",[r("router-view")],1)],1)],1)},s=[],o={name:"App",computed:{isLoggedIn:function(){return this.$store.state.session}},beforeCreate:function(){if(window.localStorage){var e=window.localStorage.getItem("ticket-system-session");e&&this.$store.dispatch("setSession",JSON.parse(e))}}},i=o,l=r("2877"),c=Object(l["a"])(i,a,s,!1,null,null,null),u=c.exports,p=r("8c4f"),d=r("5530"),m=r("2f62"),f=(r("96cf"),r("1da1")),h={login:function(e,t){return Object(f["a"])(regeneratorRuntime.mark((function r(){var a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,n["default"].axios.post("http://localhost:80/api/auth/login",{email:t.email,password:t.password});case 3:a=r.sent,e.commit("set_session_mutation",a.data),r.next=10;break;case 7:throw r.prev=7,r.t0=r["catch"](0),r.t0;case 10:case"end":return r.stop()}}),r,null,[[0,7]])})))()},register:function(e,t){return Object(f["a"])(regeneratorRuntime.mark((function r(){var a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,n["default"].axios.post("http://localhost:80/api/auth/register",{firstName:t.firstName,lastName:t.lastName,email:t.email,password:t.password});case 3:a=r.sent,e.commit("set_session_mutation",a.data),r.next=10;break;case 7:throw r.prev=7,r.t0=r["catch"](0),r.t0;case 10:case"end":return r.stop()}}),r,null,[[0,7]])})))()},setSession:function(e,t){e.commit("set_session_mutation",t)}},b={set_session_mutation:function(e,t){e.session=t}},v={session:null},g={tickets:[],currentTicket:null,lastAnswer:null},k={set_tickets:function(e,t){e.tickets=t},set_current_ticket:function(e,t){e.currentTicket=t},set_last_answer:function(e,t){e.lastAnswer=t}};function y(){return _.state.session.token}var w={getAllTickets:function(e,t){return Object(f["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,n["default"].axios.get("http://localhost:80/api/ticket/",{headers:{"Content-Type":"application/json",Authorization:"Bearer "+y()}});case 3:r=t.sent,e.commit("set_tickets",r.data),t.next=10;break;case 7:throw t.prev=7,t.t0=t["catch"](0),t.t0;case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()},getSingleTicket:function(e,t){return Object(f["a"])(regeneratorRuntime.mark((function r(){var a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,n["default"].axios.get("http://localhost:80/api/ticket/"+t.id,{headers:{"Content-Type":"application/json",Authorization:"Bearer "+y()}});case 3:a=r.sent,e.commit("set_current_ticket",a.data),r.next=10;break;case 7:throw r.prev=7,r.t0=r["catch"](0),r.t0;case 10:case"end":return r.stop()}}),r,null,[[0,7]])})))()},postAnswer:function(e,t){return Object(f["a"])(regeneratorRuntime.mark((function r(){var a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,n["default"].axios.post("http://localhost:80/api/ticket/answer/"+t.id,{body:t.body},{headers:{"Content-Type":"application/json",Authorization:"Bearer "+y()}});case 3:a=r.sent,e.commit("set_last_answer",a.data),r.next=10;break;case 7:throw r.prev=7,r.t0=r["catch"](0),r.t0;case 10:case"end":return r.stop()}}),r,null,[[0,7]])})))()},createNewTicket:function(e,t){return Object(f["a"])(regeneratorRuntime.mark((function r(){var a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,n["default"].axios.post("http://localhost:80/api/ticket/create",{title:t.title,body:t.body},{headers:{"Content-Type":"application/json",Authorization:"Bearer "+y()}});case 3:a=r.sent,e.commit("set_current_ticket",a.data),r.next=10;break;case 7:throw r.prev=7,r.t0=r["catch"](0),r.t0;case 10:case"end":return r.stop()}}),r,null,[[0,7]])})))()},setCurrentTicket:function(e,t){e.commit("set_current_ticket",t)}};n["default"].use(m["a"]);var _=new m["a"].Store({state:Object(d["a"])(Object(d["a"])({},v),g),mutations:Object(d["a"])(Object(d["a"])({},b),k),actions:Object(d["a"])(Object(d["a"])({},h),w),modules:{}}),x=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[e.isLoggedIn?r("div",[e._v(" Logged in as: "+e._s(this.$store.state.session.user.firstName)+" ")]):r("AuthInputForm",{attrs:{"input-mode":"login"}})],1)},E=[],T=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-container",{attrs:{fluid:""}},["register"===e.inputMode?r("b-form-group",{attrs:{id:"first-name-label",label:"First Name:","label-for":"first-name-input"}},["register"===e.inputMode?r("b-form-input",{attrs:{id:"first-name-input",placeholder:"Enter your first name",required:""},model:{value:e.firstName,callback:function(t){e.firstName=t},expression:"firstName"}}):e._e(),e.isFirstNameValid?e._e():r("span",{staticClass:"verror"},[e._v(e._s(e.firstNameError))])],1):e._e(),"register"===e.inputMode?r("b-form-group",{attrs:{id:"last-name-label",label:"Last Name:","label-for":"last-name-input"}},["register"===e.inputMode?r("b-form-input",{attrs:{id:"last-name-input",placeholder:"Enter your last name",required:""},model:{value:e.lastName,callback:function(t){e.lastName=t},expression:"lastName"}}):e._e(),e.isLastNameValid?e._e():r("span",{staticClass:"verror"},[e._v(e._s(e.lastNameError))])],1):e._e(),r("b-form-group",{attrs:{id:"email-label",label:"Email address:","label-for":"email-input"}},[r("b-form-input",{attrs:{id:"email-input",type:"email",placeholder:"Enter your email",required:""},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),e.isEmailValid?e._e():r("span",{staticClass:"verror"},[e._v(e._s(e.emailError))])],1),r("b-form-group",{attrs:{id:"password-label",label:"Password:","label-for":"password-input"}},[r("b-form-input",{attrs:{id:"password-input",type:"password",placeholder:"Enter your password",required:""},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),e.isPasswordPresent?e._e():r("span",{staticClass:"verror"},[e._v(e._s(e.passwordError))])],1),r("b-button",{attrs:{type:"submit",variant:"primary"},on:{click:e.onSubmit}},[e._v(e._s("register"===e.inputMode?"Register":"Login"))]),e._v(" "),r("b-button",{attrs:{type:"reset",variant:"danger"},on:{click:e.onReset}},[e._v("Reset")])],1)},N=[],O=(r("498a"),{name:"AuthInputForm",props:["input-mode"],data:function(){return{firstName:null,lastName:null,email:null,password:null,firstNameError:null,lastNameError:null,emailError:null,passwordError:null}},computed:{isFirstNameValid:function(){return!(!this.firstName||this.firstName&&0===this.firstName.trim().lenght)},isLastNameValid:function(){return!(!this.lastName||this.lastName&&0===this.lastName.trim().lenght)},isEmailValid:function(){return!(!this.email||this.email&&0===this.email.trim().lenght||this.email&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email))},isPasswordPresent:function(){return this.password}},methods:{onSubmit:function(){var e=this;return Object(f["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if("register"!==e.inputMode){t.next=13;break}if(e.isFirstNameValid){t.next=6;break}return e.firstNameError="You must provide your first name!",t.abrupt("return");case 6:e.firstNameError=null;case 7:if(e.isLastNameValid){t.next=12;break}return e.lastNameError="You must provide your last name!",t.abrupt("return");case 12:e.lastNameError=null;case 13:if(e.isEmailValid){t.next=18;break}return e.emailError="You must provide your email!",t.abrupt("return");case 18:e.emailError=null;case 19:if(e.isPasswordPresent){t.next=24;break}return e.passwordError="You must provide your password!",t.abrupt("return");case 24:e.passwordError=null;case 25:if(t.prev=25,"register"!==e.inputMode){t.next=31;break}return t.next=29,e.$store.dispatch("register",{firstName:e.firstName,lastName:e.lastName,email:e.email,password:e.password});case 29:t.next=33;break;case 31:return t.next=33,e.$store.dispatch("login",{email:e.email,password:e.password});case 33:window.localStorage&&window.localStorage.setItem("ticket-system-session",JSON.stringify(e.$store.state.session)),t.next=39;break;case 36:t.prev=36,t.t0=t["catch"](25),t.t0.response?(console.log(t.t0.response),alert(t.t0.response.data.error)):t.t0.request?(console.log(t.t0.request),alert("Unable to connect to the server!")):console.log("Error",t.t0.message);case 39:case"end":return t.stop()}}),t,null,[[25,36]])})))()},onReset:function(){this.firstName=this.lastName=this.email=this.password="",this.firstNameError=this.lastNameError=this.emailError=this.passwordError=null}}}),R=O,j=(r("5e10"),Object(l["a"])(R,T,N,!1,null,"005472c6",null)),$=j.exports,S={name:"Home",computed:{isLoggedIn:function(){return null!=this.$store.state.session}},components:{AuthInputForm:$}},C=S,L=Object(l["a"])(C,x,E,!1,null,null,null),I=L.exports,B=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("AuthInputForm",{attrs:{"input-mode":"register"}})],1)},V=[],A={name:"Register",components:{AuthInputForm:$}},P=A,q=Object(l["a"])(P,B,V,!1,null,null,null),F=q.exports,M=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("b-button",{attrs:{variant:"danger"},on:{click:e.logout}},[e._v("Log out")])],1)},H=[],Y={name:"Logout",methods:{logout:function(){confirm("Do you really want to logout?")&&(window.localStorage.removeItem("ticket-system-session"),this.$store.dispatch("setSession",null),this.$router.push("/"))}}},U=Y,z=Object(l["a"])(U,M,H,!1,null,null,null),J=z.exports,D=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("TicketsComponent")},W=[],G=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e.tickets.length?r("b-table",{attrs:{hover:"",items:e.tickets,fields:e.fields,"sticky-header":"800px"},on:{"row-clicked":e.openTicket}}):r("h1",[e._v("You have no tickets")])],1)},K=[],Q=(r("4160"),r("159b"),{name:"TicketsComponent",computed:{tickets:function(){var e=this.$store.state.tickets;return e.forEach((function(e){return e.status=0===e.status?"Closed":"Open"})),e}},data:function(){return{fields:[{key:"id"},{key:"title"},{key:"user"},{key:"createdAt"},{key:"status"}]}},methods:{openTicket:function(e,t,r){Te.push({path:"/ticket/"+e.id})}},beforeCreate:function(){var e=this;return Object(f["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$store.dispatch("getAllTickets");case 3:t.next=8;break;case 5:t.prev=5,t.t0=t["catch"](0),t.t0.response?(console.log(t.t0.response),alert(t.t0.response.data.error)):t.t0.request?(console.log(t.t0.request),alert("Unable to connect to the server!")):console.log("Error",t.t0.message);case 8:case"end":return t.stop()}}),t,null,[[0,5]])})))()}}),X=Q,Z=Object(l["a"])(X,G,K,!1,null,null,null),ee=Z.exports,te={name:"Tickets",components:{TicketsComponent:ee}},re=te,ne=Object(l["a"])(re,D,W,!1,null,null,null),ae=ne.exports,se=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-card",{attrs:{"no-body":""},scopedSlots:e._u([{key:"header",fn:function(){return[r("h4",{staticClass:"mb-0"},[e._v("Ticket #"+e._s(e.ticketId))])]},proxy:!0}])},[r("b-card-body",[r("b-card-title",[e._v(e._s(e.ticketTitle))]),r("b-card-sub-title",{staticClass:"mb-2"},[e._v(e._s(e.ticketTime))]),r("b-card-text",[e._v(" "+e._s(e.ticketBody)+" ")])],1),r("b-list-group",{attrs:{flush:""}},e._l(e.answers,(function(t){return r("b-list-group-item",{key:t.id},[r("h4",[e._v(e._s(t.user))]),r("span",{staticClass:"time"},[e._v(e._s(t.createdAt))]),r("p",[e._v(e._s(t.body))])])})),1),0!=e.ticketStatus?r("b-form-group",{attrs:{id:"body-label",label:"Reply:","label-for":"body-input"}},[0!=e.ticketStatus?r("b-form-textarea",{attrs:{id:"body-input",placeholder:"Enter something...",rows:"3","max-rows":"6",maxlength:"1024"},model:{value:e.replyBody,callback:function(t){e.replyBody=t},expression:"replyBody"}}):e._e(),0!=e.ticketStatus?r("b-button",{attrs:{type:"submit",variant:"primary"},on:{click:e.reply}},[e._v("Reply")]):e._e()],1):e._e(),0==e.ticketStatus||e.isReplyPresent||e.isReplyLengthNormal?e._e():r("span",{staticClass:"verror"},[e._v(e._s(e.replyValidationError))]),0===e.ticketStatus?r("h5",[e._v(" This ticket is closed, you can not reply to it anymore! ")]):e._e()],1)},oe=[],ie=(r("caad6"),r("2532"),{name:"Ticket",data:function(){return{answers:[],ticketTitle:null,ticketBody:null,ticketTime:null,ticketId:null,ticketStatus:null,replyBody:null,replyValidationError:null}},computed:{isReplyPresent:function(){return this.replyBody},isReplyLengthNormal:function(){return this.replyBody&&this.replyBody.lenght<1024}},methods:{reply:function(){var e=this;return Object(f["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.isReplyPresent||e.isReplyLengthNormal){t.next=5;break}return e.isReplyPresent?e.replyValidationError="The reply can not be longer than 1024 characters!":e.replyValidationError="The reply must not be empty!",t.abrupt("return");case 5:e.replyValidationError=null;case 6:if(0!==e.ticketStatus){t.next=9;break}return alert("What are you trying to do?"),t.abrupt("return");case 9:return t.prev=9,t.next=12,e.$store.dispatch("postAnswer",{id:e.$route.params.id,body:e.replyBody});case 12:t.next=17;break;case 14:t.prev=14,t.t0=t["catch"](9),t.t0.response?(console.log(t.t0.response),alert(t.t0.response.data.error),p["a"].push({name:"Home"})):t.t0.request?(console.log(t.t0.request),alert("Unable to connect to the server!")):console.log("Error",t.t0.message);case 17:e.answers.push(e.$store.state.lastAnswer.answer);case 18:case"end":return t.stop()}}),t,null,[[9,14]])})))()}},beforeCreate:function(){var e=this;return Object(f["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$store.dispatch("getSingleTicket",{id:e.$route.params.id});case 3:t.next=8;break;case 5:t.prev=5,t.t0=t["catch"](0),t.t0.response?(console.log(t.t0.response),alert(t.t0.response.data.error),t.t0.response.toLowerCase().includes("invalid")&&e.$router.push("/")):t.t0.request?(console.log(t.t0.request),alert("Unable to connect to the server!")):console.log("Error",t.t0.message);case 8:e.ticketTitle=e.$store.state.currentTicket.ticket.title,e.ticketBody=e.$store.state.currentTicket.ticket.body,e.ticketTime=e.$store.state.currentTicket.ticket.createdAt,e.ticketId=e.$store.state.currentTicket.ticket.id,e.ticketStatus=e.$store.state.currentTicket.ticket.status,e.answers=e.$store.state.currentTicket.answers;case 14:case"end":return t.stop()}}),t,null,[[0,5]])})))()}}),le=ie,ce=(r("5f3a"),Object(l["a"])(le,se,oe,!1,null,"2abba416",null)),ue=ce.exports,pe=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("TicketInputForm")],1)},de=[],me=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-container",{attrs:{fluid:""}},[r("b-form-group",{attrs:{id:"title-label",label:"Title:","label-for":"title-input"}},[r("b-form-input",{attrs:{id:"title-input",placeholder:"Enter the title",required:""},model:{value:e.title,callback:function(t){e.title=t},expression:"title"}}),e.isTitleValid?e._e():r("span",{staticClass:"verror"},[e._v(e._s(e.titleError))])],1),r("b-form-group",{attrs:{id:"body-label",label:"Body:","label-for":"body-input"}},[r("b-form-textarea",{attrs:{id:"body-input",placeholder:"Enter something...",rows:"3","max-rows":"6",maxlength:"1024",required:""},model:{value:e.body,callback:function(t){e.body=t},expression:"body"}}),!e.isBodyValid||e.isBodyLengthInvalid?r("span",{staticClass:"verror"},[e._v(e._s(e.bodyError))]):e._e()],1),r("b-button",{attrs:{type:"submit",variant:"primary"},on:{click:e.onSubmit}},[e._v("Create")]),e._v(" "),r("b-button",{attrs:{type:"reset",variant:"danger"},on:{click:e.onReset}},[e._v("Reset")])],1)},fe=[],he={name:"TicketInputForm",data:function(){return{title:null,body:null,titleError:null,bodyError:null}},computed:{isTitleValid:function(){return!(!this.title||this.title&&0===this.title.trim().lenght)},isBodyValid:function(){return!(!this.body||this.body&&0===this.body.trim().lenght)},isBodyLengthInvalid:function(){return this.body&&this.body.lenght>1024}},methods:{onSubmit:function(){var e=this;return Object(f["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.isTitleValid){t.next=5;break}return e.titleError="You must provide a valid title!",t.abrupt("return");case 5:e.titleError=null;case 6:if(e.isBodyValid&&!e.isBodyLengthInvalid){t.next=11;break}return e.bodyError=e.isBodyValid?"Ticket body can not be longer than 1024 characters!":"You must provide a valid ticket content body!",t.abrupt("return");case 11:e.bodyError=null;case 12:return console.log("awdwad"),t.prev=13,t.next=16,e.$store.dispatch("createNewTicket",{title:e.title,body:e.body});case 16:t.next=21;break;case 18:t.prev=18,t.t0=t["catch"](13),t.t0.response?(console.log(t.t0.response),alert(t.t0.response.data.error)):t.t0.request?(console.log(t.t0.request),alert("Unable to connect to the server!")):console.log("Error",t.t0.message);case 21:e.$router.push("/ticket/"+e.$store.state.currentTicket.ticket.id);case 22:case"end":return t.stop()}}),t,null,[[13,18]])})))()},onReset:function(){this.title=this.body="",this.titleError=this.bodyError=null}}},be=he,ve=(r("1546"),Object(l["a"])(be,me,fe,!1,null,"f41ef118",null)),ge=ve.exports,ke={name:"NewTicket",components:{TicketInputForm:ge}},ye=ke,we=Object(l["a"])(ye,pe,de,!1,null,null,null),_e=we.exports;n["default"].use(p["a"]);var xe=[{path:"/",name:"Home",component:I},{path:"/home",name:"Home2",component:I},{path:"/register",name:"Register",component:F},{path:"/logout",name:"Logout",component:J,beforeEnter:function(e,t,r){null===_.state.session?r({name:"Home"}):r()}},{path:"/tickets",name:"Tickets",component:ae,beforeEnter:function(e,t,r){null===_.state.session?r({name:"Home"}):r()}},{path:"/new-ticket/",name:"NewTicket",component:_e,beforeEnter:function(e,t,r){null===_.state.session?r({name:"Home"}):r()}},{path:"/ticket/:id",name:"Ticket",component:ue,beforeEnter:function(e,t,r){null===_.state.session?r({name:"Home"}):r()}}],Ee=new p["a"]({mode:"history",base:"/",routes:xe}),Te=Ee,Ne=r("bc3a"),Oe=r.n(Ne),Re=r("2106"),je=r.n(Re),$e=r("5f5b");r("f9e3"),r("2dd8");n["default"].config.productionTip=!1,n["default"].use($e["a"]),n["default"].use(je.a,Oe.a),new n["default"]({router:Te,store:_,render:function(e){return e(u)}}).$mount("#app")},"5e10":function(e,t,r){"use strict";r("dc69")},"5f3a":function(e,t,r){"use strict";r("64a4")},"64a4":function(e,t,r){},dc69:function(e,t,r){}});
//# sourceMappingURL=app.d5d772c6.js.map