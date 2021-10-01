(this.webpackJsonpnetflix=this.webpackJsonpnetflix||[]).push([[0],{106:function(e,t,a){"use strict";a.r(t);var n=a(7),i=a(60),r=a.n(i),c=a(24),s=a(31),o=a.n(s),l=a(5);var u=function(){return Object(l.jsx)("div",{children:Object(l.jsx)("div",{className:o.a.logo,children:Object(l.jsx)(c.b,{to:"/",className:o.a.logoLink,children:Object(l.jsx)("img",{className:o.a.logoImg,src:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png",alt:""})})})})};var j=function(){return Object(l.jsxs)("div",{className:o.a.headerMain,children:[Object(l.jsx)(u,{}),Object(l.jsx)(c.b,{to:"/signin",className:o.a.signLink,children:Object(l.jsx)("button",{className:o.a.btnRegister,children:"Sign in"})})]})},b=a(14),d=a.n(b);var h=function(){return Object(l.jsx)("div",{className:d.a.page,children:Object(l.jsx)(j,{})})},O="/browse",m=a(11),p=a(15),v=a(16),f=a(21);var x=function(e){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("input",{type:e.type,placeholder:e.placeholder,value:e.value,onChange:e.onChange,className:"".concat(d.a.input," ").concat(e.className)}),Object(l.jsx)("p",{className:d.a.hint,children:e.hint})]})},g=a(65).a.initializeApp({apiKey:"AIzaSyBGVxG3idO6SLb1KvIc8VL6Kzbfx9k5_b0",authDomain:"netflix-4ad51.firebaseapp.com",projectId:"netflix-4ad51",storageBucket:"netflix-4ad51.appspot.com",messagingSenderId:"956142069791",appId:"1:956142069791:web:55149067ed2fb7092dcd2a",measurementId:"G-42EYPTVWFV"}),_=Object(v.d)();var N=function(){var e=Object(p.useHistory)(),t=Object(n.useState)(""),a=Object(m.a)(t,2),i=a[0],r=a[1],s=Object(n.useState)(""),o=Object(m.a)(s,2),j=o[0],b=o[1],h=Object(n.useState)(""),g=Object(m.a)(h,2),N=g[0],C=g[1],k=Object(n.useState)(""),S=Object(m.a)(k,2),M=(S[0],S[1]),I=""===i||""===N||""===j;return Object(l.jsxs)("div",{className:d.a.page,children:[Object(l.jsx)(u,{}),Object(l.jsxs)("form",{onSubmit:function(t){t.preventDefault();var a=Object(f.b)();Object(f.a)(a,j,N).then((function(e){console.log("currentUser",e),Object(f.e)(a.currentUser,{displayName:i});var t=Object(v.a)(_,"users");Object(v.e)(Object(v.b)(t,e.user.uid),{favouriteMovies:[],likedMovies:[]},{merge:!0})})).then((function(){e.push(O)})).catch((function(e){r(""),C(""),b(""),M(e.message)}))},method:"POST",className:d.a.form,children:[Object(l.jsx)("h3",{className:d.a.signTitle,children:"Sign Up"}),Object(l.jsx)(x,{type:"text",placeholder:"Name",value:i,onChange:function(e){var t=e.target;return r(t.value)}}),Object(l.jsx)(x,{type:"email",placeholder:"Email",value:j,onChange:function(e){var t=e.target;return b(t.value)},className:d.a.inputEmail,hint:"Enter email in format xxxx@ccc.ddd"}),Object(l.jsx)(x,{type:"password",placeholder:"Password",autoComplete:"off",value:N,onChange:function(e){var t=e.target;return C(t.value)},className:d.a.inputPassword,hint:"Password must be at least 9 symbols"}),Object(l.jsx)("button",{disabled:I,type:"submit",className:d.a.btn,children:"sign up"}),Object(l.jsxs)("p",{className:d.a.text,children:["Already a user? ",Object(l.jsx)(c.b,{to:"/signin",className:d.a.signLink,children:"Sign in"})]})]})]})};var C=function(){var e=Object(p.useHistory)(),t=Object(n.useState)(""),a=Object(m.a)(t,2),i=a[0],r=a[1],s=Object(n.useState)(""),o=Object(m.a)(s,2),j=o[0],b=o[1],h=Object(n.useState)(""),v=Object(m.a)(h,2),g=(v[0],v[1]),_=""===j||""===i;return Object(l.jsxs)("div",{className:d.a.page,children:[Object(l.jsx)(u,{}),Object(l.jsxs)("form",{onSubmit:function(t){t.preventDefault();var a=Object(f.b)();Object(f.d)(a,i,j).then((function(){e.push(O)})).catch((function(e){r(""),b(""),g(e.message),console.log(e),alert("No user with such email and password, please try again or sign up")}))},method:"POST",className:d.a.form,children:[Object(l.jsx)("h3",{className:d.a.signTitle,children:"Sign In"}),Object(l.jsx)(x,{type:"email",placeholder:"Email",value:i,onChange:function(e){var t=e.target;return r(t.value)},styles:d.a}),Object(l.jsx)(x,{type:"password",placeholder:"Password",autoComplete:"off",value:j,onChange:function(e){var t=e.target;return b(t.value)}}),Object(l.jsx)("button",{disabled:_,type:"submit",className:d.a.btn,children:"sign in"}),Object(l.jsxs)("p",{className:d.a.text,children:["New to netflix? ",Object(l.jsx)(c.b,{to:"/signup",className:d.a.signLink,children:"Sign up now"})]})]})]})},k=a(22),S=a(0),M=a.n(S),I=a(1),w=a(62),y=a(48),L=a.n(y),B=a(63),D=a.n(B).a.create({baseURL:"https://api.tvmaze.com"}),T=a(13),P=a.n(T);var F=function(e){var t=e.movie,a=e.favouriteComponent,n=e.handleFavouritesClick,i=e.likedMovies,r=e.storeLikeMovie,c=a,s=t.weight,o=i.some((function(e){return e.id===t.id}))?P.a.activeLike:"",u=i.some((function(e){return e.id===t.id}))?s+1:s,j=t.rating.average?t.rating.average:0;return Object(l.jsxs)("div",{className:P.a.movieCard,children:[Object(l.jsxs)("a",{href:t.url,className:P.a.movieLink,children:[t.image?Object(l.jsx)("img",{src:t.image.medium,alt:t.name}):Object(l.jsx)("img",{src:"https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=338&ext=jpg&ga=GA1.2.1656857203.1631318400",className:P.a.noImg,alt:t.name}),Object(l.jsx)("h4",{className:P.a.movieTitle,children:t.name})]}),Object(l.jsx)("p",{className:P.a.genresText,children:t.genres.join("/")}),Object(l.jsxs)("p",{className:P.a.textDescription,children:["Language: ",t.language]}),Object(l.jsxs)("p",{className:P.a.textDescription,children:["Schedule: ",t.schedule.days.join(" ")," ",t.schedule.time]}),Object(l.jsxs)("div",{className:P.a.iconsBox,children:[Object(l.jsxs)("div",{className:P.a.ratingBoxWrapper,children:[Object(l.jsx)("span",{className:P.a.ratingIcon,children:"\u2605"})," ",Object(l.jsx)("span",{children:j})]}),Object(l.jsxs)("div",{className:P.a.likeBoxWrapper,onClick:function(){r(t)},children:[Object(l.jsx)("span",{className:"".concat(P.a.likesAmount," ").concat(o," ").concat(P.a.counter),children:"\u2764"})," ",Object(l.jsx)("p",{className:P.a.likeText,children:u})]})]}),Object(l.jsx)("div",{onClick:function(){return n(t)},children:Object(l.jsx)(c,{})})]})};var E=function(e){return Object(l.jsx)("input",{type:"text",value:e.value,onChange:e.onChange,placeholder:"Search...",className:P.a.inputSearch})},U={fetchNetflixAll:"/shows",fetchSearch:"/search/shows?q="};var H=function(){return Object(l.jsx)("div",{className:P.a.favourite,children:Object(l.jsx)("span",{children:"Add to favourite"})})};var R=function(){return Object(l.jsx)("div",{className:P.a.favourite,children:Object(l.jsx)("span",{children:"Remove from favourites"})})};var A=function(e){return Object(l.jsxs)("span",{className:P.a.radioButton,children:[Object(l.jsx)("input",{id:e.id,type:e.type,onChange:e.onChange,name:e.name,className:P.a.radioInput}),Object(l.jsx)("label",{htmlFor:e.id,children:e.label})]})};var W=function(e){var t=Object(n.useState)([]),a=Object(m.a)(t,2),i=a[0],r=a[1],c=Object(n.useState)([]),s=Object(m.a)(c,2),o=s[0],u=s[1],j=Object(n.useState)(""),b=Object(m.a)(j,2),d=b[0],h=b[1],O=Object(n.useState)([]),p=Object(m.a)(O,2),f=p[0],x=p[1],g=Object(n.useState)([]),N=Object(m.a)(g,2),C=N[0],S=N[1],y=Object(n.useState)(!1),B=Object(m.a)(y,2),T=B[0],W=B[1],z=Object(n.useState)(""),G=Object(m.a)(z,2),q=G[0],J=G[1],K=Object(n.useState)(!0),V=Object(m.a)(K,2),Y=V[0],Z=V[1],X=Object(n.useState)(!0),Q=Object(m.a)(X,2),$=Q[0],ee=Q[1],te=[],ae=[],ne=[],ie=[],re=[],ce=[],se=[],oe=Object(n.useCallback)(Object(w.a)(1e3,function(){var e=Object(I.a)(M.a.mark((function e(t){var a,n,i;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.get("".concat(U.fetchSearch).concat(t));case 2:a=e.sent,(n=a.data)&&(i=n.map((function(e){return e.show})),u(i));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),[]);function le(e,t){return ue.apply(this,arguments)}function ue(){return(ue=Object(I.a)(M.a.mark((function e(t,a){return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(v.f)(t,{favouriteMovies:a});case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}i.forEach((function(e){e.genres.forEach((function(t){"Drama"===t?te.push(e):"Science-Fiction"===t?ne.push(e):"Thriller"===t?ae.push(e):"Horror"===t?ie.push(e):"Supernatural"===t?re.push(e):"Music"===t&&ce.push(e)}))}));var je=function(t){if(!f.some((function(e){return e.id===t.id}))){var a=[].concat(Object(k.a)(f),[t]);x(a),Object(v.c)(Object(v.a)(_,"users")).then((function(t){t.forEach((function(t){t.id===e.userUID&&le(Object(v.b)(_,"users","".concat(e.userUID)),a)}))}))}};function be(){return(be=Object(I.a)(M.a.mark((function e(t,a){return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(v.f)(t,{likedMovies:a});case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var de=function(t){var a=[];a=C.some((function(e){return e.id===t.id}))?C.filter((function(e){return e.id!==t.id})):[].concat(Object(k.a)(C),[t]),S(a),Object(v.c)(Object(v.a)(_,"users")).then((function(t){t.forEach((function(t){t.id===e.userUID&&function(e,t){be.apply(this,arguments)}(Object(v.b)(_,"users","".concat(e.userUID)),a)}))}))},he=function(t){var a=f.filter((function(e){return e.id!==t.id}));x(a),Object(v.c)(Object(v.a)(_,"users")).then((function(t){t.forEach((function(t){t.id===e.userUID&&le(Object(v.b)(_,"users","".concat(e.userUID)),a)}))}))};function Oe(e){W(!1),W(e.target.checked),J(e.target.id)}return Object(n.useEffect)(Object(I.a)(M.a.mark((function e(){var t;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.get(U.fetchNetflixAll);case 2:t=e.sent,r(t.data),ee(!1);case 5:case"end":return e.stop()}}),e)}))),[]),Object(n.useEffect)((function(){e.userUID&&Object(v.c)(Object(v.a)(_,"users")).then((function(t){t.forEach((function(t){t.id===e.userUID&&(x(t.data().favouriteMovies),S(t.data().likedMovies))})),Z(!1)}))}),[e.userUID]),se=d?o:T&&"drama"===q?te:T&&"thriller"===q?ae:T&&"scienceFiction"===q?ne:T&&"horror"===q?ie:T&&"music"===q?ce:T&&"supernatural"===q?re:i,Object(l.jsxs)("div",{className:P.a.movieContainerPage,children:[Object(l.jsx)(E,{searchValue:d,onChange:function(e){h(e.target.value),oe(e.target.value)}}),d?Object(l.jsxs)("h2",{className:P.a.mainTitle,children:["Search: ",d]}):Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h2",{className:P.a.mainTitle,children:"All Movies"}),Object(l.jsx)("div",{className:P.a.radioButtonWrapper,children:[{id:"drama",label:"Drama"},{id:"thriller",label:"Thriller"},{id:"scienceFiction",label:"Science-Fiction"},{id:"horror",label:"Horror"},{id:"music",label:"Music"},{id:"supernatural",label:"Supernatural"},{id:"reset",label:"Reset"}].map((function(e){return Object(l.jsx)(A,{id:e.id,type:"radio",name:"question",onChange:Oe,label:e.label},e.id)}))})]}),Object(l.jsx)("div",{className:P.a.movieContainer,children:$?Object(l.jsx)(L.a,{color:"#D73674",loading:Y,size:30}):Object(l.jsx)(l.Fragment,{children:se.map((function(e){return Object(l.jsx)("div",{children:Object(l.jsx)(F,{movie:e,favouriteComponent:H,handleFavouritesClick:je,likedMovies:C,setLikedMovies:S,storeLikeMovie:de})},e.id)}))})}),Object(l.jsx)("div",{children:Y?Object(l.jsx)(L.a,{color:"#D73674",loading:Y,size:30}):Object(l.jsx)(l.Fragment,{children:f.length>0?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h2",{className:P.a.mainTitle,children:"Favourites"}),Object(l.jsx)("div",{className:P.a.movieContainer,children:f.map((function(e){return Object(l.jsx)(F,{movie:e,favouriteComponent:R,handleFavouritesClick:he,likedMovies:C,setLikedMovies:S,storeLikeMovie:de},e.id)}))})]}):Object(l.jsx)("h2",{className:P.a.mainTitle,children:"No favourites"})})})]})},z=a(43),G=a.n(z);var q=function(e){var t=e.userName;return Object(l.jsxs)("div",{className:G.a.profileRow,children:[Object(l.jsxs)("p",{className:G.a.userName,children:["Name: ",t]}),Object(l.jsx)(c.b,{to:"/",onClick:function(){return Object(f.b)().signOut()},children:Object(l.jsx)("button",{className:G.a.btnSignOut,children:"Sign Out"})})]})};var J=function(){var e=Object(n.useState)(""),t=Object(m.a)(e,2),a=t[0],i=t[1],r=Object(n.useState)(""),c=Object(m.a)(r,2),s=c[0],o=c[1];return Object(n.useEffect)((function(){var e=Object(f.b)();Object(f.c)(e,(function(e){e&&(i(e.displayName),o(e.uid))}))}),[]),Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{className:d.a.browseHeader,children:[Object(l.jsx)(u,{}),Object(l.jsx)(q,{userName:a})]}),Object(l.jsx)(W,{userUID:s})]})},K=a(40),V=a(49),Y=["user","loggedInPath","children"],Z=["user","children"];function X(e){var t=e.user,a=e.loggedInPath,n=e.children,i=Object(V.a)(e,Y);return Object(l.jsx)(p.Route,Object(K.a)(Object(K.a)({},i),{},{render:function(){return t?t?Object(l.jsx)(p.Redirect,{to:{pathname:a}}):null:n}}))}function Q(e){var t=e.user,a=e.children,n=Object(V.a)(e,Z);return Object(l.jsx)(p.Route,Object(K.a)(Object(K.a)({},n),{},{render:function(e){var n=e.location;return t?a:t?null:Object(l.jsx)(p.Redirect,{to:{pathname:"signin",state:{from:n}}})}}))}var $=function(){var e=function(){var e=Object(n.useState)(JSON.parse(localStorage.getItem("authUser"))),t=Object(m.a)(e,2),a=t[0],i=t[1];return Object(n.useEffect)((function(){var e=Object(f.b)().onAuthStateChanged((function(e){e?(localStorage.setItem("authUser",JSON.stringify(e)),i(e)):(localStorage.removeItem("authUser"),i(null))}));return function(){return e()}}),[]),{user:a}}(),t=e.user;return Object(l.jsxs)(c.a,{children:[Object(l.jsx)(X,{user:t,loggedInPath:O,path:"/signin",exact:!0,children:Object(l.jsx)(C,{})}),Object(l.jsx)(X,{user:t,loggedInPath:O,path:"/signup",exact:!0,children:Object(l.jsx)(N,{})}),Object(l.jsx)(Q,{user:t,path:O,children:Object(l.jsx)(J,{})}),Object(l.jsx)(X,{user:t,loggedInPath:O,path:"/",exact:!0,children:Object(l.jsx)(h,{})})]})},ee=Object(n.createContext)(""),te=a(64),ae=a.n(te);r.a.render(Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(ae.a,{basename:"/project_Netflix",children:Object(l.jsx)(ee.Provider,{value:{firebase:g},children:Object(l.jsx)($,{})})})}),document.getElementById("root"))},13:function(e,t,a){e.exports={mainTitle:"MovieContainer_mainTitle__1flz-",movieContainer:"MovieContainer_movieContainer__1kYMh",movieContainerPage:"MovieContainer_movieContainerPage__3yJmL",movieCard:"MovieContainer_movieCard__1_1Bh",movieLink:"MovieContainer_movieLink__CtvfS",movieTitle:"MovieContainer_movieTitle__13aHw",genresText:"MovieContainer_genresText__rBKt7",textDescription:"MovieContainer_textDescription__2-14V",iconsBox:"MovieContainer_iconsBox__26mqs",counter:"MovieContainer_counter__i_Jdr",ratingIcon:"MovieContainer_ratingIcon__1Ffrc",likeBoxWrapper:"MovieContainer_likeBoxWrapper__BkH2b",likeText:"MovieContainer_likeText__1y7yZ",ratingBoxWrapper:"MovieContainer_ratingBoxWrapper__39dSR",noImg:"MovieContainer_noImg__1-VeI",inputSearch:"MovieContainer_inputSearch__3Jcaf",favourite:"MovieContainer_favourite__3z73G",likesAmount:"MovieContainer_likesAmount__3ZUGM",activeLike:"MovieContainer_activeLike__lzxBE",radioButtonWrapper:"MovieContainer_radioButtonWrapper__yGM-F",radioButton:"MovieContainer_radioButton__2qcbG",radioInput:"MovieContainer_radioInput__13968"}},14:function(e,t,a){e.exports={form:"pages_form__2OjYv",input:"pages_input__3IDY6",page:"pages_page__2RsQU",btn:"pages_btn__3yxK_",text:"pages_text__3EOMj",signLink:"pages_signLink__2GDrA",signTitle:"pages_signTitle__2yCSk",browseHeader:"pages_browseHeader__1mHFm",hint:"pages_hint__q0by8",inputEmail:"pages_inputEmail__19-d1",inputPassword:"pages_inputPassword__1r8c1"}},31:function(e,t,a){e.exports={headerMain:"Header_headerMain__2XB1I",searchPanelWrapper:"Header_searchPanelWrapper__Oda5c",logo:"Header_logo__2K0Fr",logoLink:"Header_logoLink__2ZF2G",btnRegister:"Header_btnRegister__zKlhB",signLink:"Header_signLink__3WMC8",logoImg:"Header_logoImg___Lvwt"}},43:function(e,t,a){e.exports={btnSignOut:"Profiles_btnSignOut__1l7Xh",userName:"Profiles_userName__D-Yqb",profileRow:"Profiles_profileRow__1qU67"}}},[[106,1,2]]]);
//# sourceMappingURL=main.6c4040ba.chunk.js.map