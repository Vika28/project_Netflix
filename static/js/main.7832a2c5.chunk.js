(this.webpackJsonpnetflix=this.webpackJsonpnetflix||[]).push([[0],{106:function(e,t,a){"use strict";a.r(t);var n=a(7),i=a(60),r=a.n(i),c=a(24),s=a(31),o=a.n(s),u=a(5);var l=function(){return Object(u.jsx)("div",{children:Object(u.jsx)("div",{className:o.a.logo,children:Object(u.jsx)(c.b,{to:"/",className:o.a.logoLink,children:Object(u.jsx)("img",{className:o.a.logoImg,src:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png",alt:""})})})})};var j=function(){return Object(u.jsxs)("div",{className:o.a.headerMain,children:[Object(u.jsx)(l,{}),Object(u.jsx)(c.b,{to:"/signin",className:o.a.signLink,children:Object(u.jsx)("button",{className:o.a.btnRegister,children:"Sign in"})})]})},b=a(14),d=a.n(b);var h=function(){return Object(u.jsx)("div",{className:d.a.page,children:Object(u.jsx)(j,{})})},O="/browse",p=a(11),m=a(15),v=a(16),f=a(21);var x=function(e){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("input",{type:e.type,placeholder:e.placeholder,value:e.value,onChange:e.onChange,className:"".concat(d.a.input," ").concat(e.className)}),Object(u.jsx)("p",{className:d.a.hint,children:e.hint})]})},g=a(65).a.initializeApp({apiKey:"AIzaSyBGVxG3idO6SLb1KvIc8VL6Kzbfx9k5_b0",authDomain:"netflix-4ad51.firebaseapp.com",projectId:"netflix-4ad51",storageBucket:"netflix-4ad51.appspot.com",messagingSenderId:"956142069791",appId:"1:956142069791:web:55149067ed2fb7092dcd2a",measurementId:"G-42EYPTVWFV"}),_=Object(v.d)();var N=function(){var e=Object(m.useHistory)(),t=Object(n.useState)(""),a=Object(p.a)(t,2),i=a[0],r=a[1],s=Object(n.useState)(""),o=Object(p.a)(s,2),j=o[0],b=o[1],h=Object(n.useState)(""),g=Object(p.a)(h,2),N=g[0],C=g[1],k=Object(n.useState)(""),S=Object(p.a)(k,2),I=(S[0],S[1]),M=""===i||""===N||""===j;return Object(u.jsxs)("div",{className:d.a.page,children:[Object(u.jsx)(l,{}),Object(u.jsxs)("form",{onSubmit:function(t){t.preventDefault();var a=Object(f.b)();Object(f.a)(a,j,N).then((function(e){console.log("currentUser",e),Object(f.e)(a.currentUser,{displayName:i});var t=Object(v.a)(_,"users");Object(v.e)(Object(v.b)(t,e.user.uid),{favouriteMovies:[],likedMovies:[]},{merge:!0})})).then((function(){e.push(O)})).catch((function(e){r(""),C(""),b(""),I(e.message)}))},method:"POST",className:d.a.form,children:[Object(u.jsx)("h3",{className:d.a.signTitle,children:"Sign Up"}),Object(u.jsx)(x,{type:"text",placeholder:"Name",value:i,onChange:function(e){var t=e.target;return r(t.value)}}),Object(u.jsx)(x,{type:"email",placeholder:"Email",value:j,onChange:function(e){var t=e.target;return b(t.value)},className:d.a.inputEmail,hint:"Enter email in format xxxx@ccc.ddd"}),Object(u.jsx)(x,{type:"password",placeholder:"Password",autoComplete:"off",value:N,onChange:function(e){var t=e.target;return C(t.value)},className:d.a.inputPassword,hint:"Password must be at least 9 symbols"}),Object(u.jsx)("button",{disabled:M,type:"submit",className:d.a.btn,children:"sign up"}),Object(u.jsxs)("p",{className:d.a.text,children:["Already a user? ",Object(u.jsx)(c.b,{to:"/signin",className:d.a.signLink,children:"Sign in"})]})]})]})};var C=function(){var e=Object(m.useHistory)(),t=Object(n.useState)(""),a=Object(p.a)(t,2),i=a[0],r=a[1],s=Object(n.useState)(""),o=Object(p.a)(s,2),j=o[0],b=o[1],h=Object(n.useState)(""),v=Object(p.a)(h,2),g=(v[0],v[1]),_=""===j||""===i;return Object(u.jsxs)("div",{className:d.a.page,children:[Object(u.jsx)(l,{}),Object(u.jsxs)("form",{onSubmit:function(t){t.preventDefault();var a=Object(f.b)();Object(f.d)(a,i,j).then((function(){e.push(O)})).catch((function(e){r(""),b(""),g(e.message),console.log(e),alert("No user with such email and password, please try again or sign up")}))},method:"POST",className:d.a.form,children:[Object(u.jsx)("h3",{className:d.a.signTitle,children:"Sign In"}),Object(u.jsx)(x,{type:"email",placeholder:"Email",value:i,onChange:function(e){var t=e.target;return r(t.value)},styles:d.a}),Object(u.jsx)(x,{type:"password",placeholder:"Password",autoComplete:"off",value:j,onChange:function(e){var t=e.target;return b(t.value)}}),Object(u.jsx)("button",{disabled:_,type:"submit",className:d.a.btn,children:"sign in"}),Object(u.jsxs)("p",{className:d.a.text,children:["New to netflix? ",Object(u.jsx)(c.b,{to:"/signup",className:d.a.signLink,children:"Sign up now"})]})]})]})},k=a(22),S=a(0),I=a.n(S),M=a(1),w=a(62),y=a(48),L=a.n(y),P=a(63),T=a.n(P).a.create({baseURL:"https://api.tvmaze.com"}),E=a(13),B=a.n(E);var D=function(e){var t=e.movie,a=e.favouriteComponent,n=e.handleFavouritesClick,i=e.likedMovies,r=e.storeLikeMovie,c=a,s=t.weight,o=i.some((function(e){return e.id===t.id}))?B.a.activeLike:"",l=i.some((function(e){return e.id===t.id}))?s+1:s,j=t.rating.average?t.rating.average:0;return Object(u.jsxs)("div",{className:B.a.movieCard,children:[Object(u.jsxs)("a",{href:t.url,className:B.a.movieLink,children:[t.image?Object(u.jsx)("img",{src:t.image.medium,alt:t.name}):Object(u.jsx)("img",{src:"https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=338&ext=jpg&ga=GA1.2.1656857203.1631318400",className:B.a.noImg,alt:t.name}),Object(u.jsx)("h4",{className:B.a.movieTitle,children:t.name})]}),Object(u.jsx)("p",{className:B.a.genresText,children:t.genres.join("/")}),Object(u.jsxs)("p",{className:B.a.textDescription,children:["Language: ",t.language]}),Object(u.jsxs)("p",{className:B.a.textDescription,children:["Schedule: ",t.schedule.days.join(" ")," ",t.schedule.time]}),Object(u.jsxs)("div",{className:B.a.iconsBox,children:[Object(u.jsxs)("div",{className:B.a.ratingBoxWrapper,children:[Object(u.jsx)("span",{className:B.a.ratingIcon,children:"\u2605"})," ",Object(u.jsx)("span",{children:j})]}),Object(u.jsxs)("div",{className:B.a.likeBoxWrapper,onClick:function(){r(t)},children:[Object(u.jsx)("span",{className:"".concat(B.a.likesAmount," ").concat(o," ").concat(B.a.counter),children:"\u2764"})," ",Object(u.jsx)("p",{className:B.a.likeText,children:l})]})]}),Object(u.jsx)("div",{onClick:function(){return n(t)},children:Object(u.jsx)(c,{})})]})};var U=function(e){return Object(u.jsx)("input",{type:"text",value:e.value,onChange:e.onChange,placeholder:"Search...",className:B.a.inputSearch})},F={fetchNetflixAll:"/shows",fetchSearch:"/search/shows?q="};var H=function(){return Object(u.jsx)("div",{className:B.a.favourite,children:Object(u.jsx)("span",{children:"Add to favourite"})})};var R=function(){return Object(u.jsx)("div",{className:B.a.favourite,children:Object(u.jsx)("span",{children:"Remove from favourites"})})};var W=function(e){return Object(u.jsxs)("span",{className:B.a.radioButton,children:[Object(u.jsx)("input",{id:e.id,type:e.type,onChange:e.onChange,name:e.name,className:B.a.radioInput}),Object(u.jsx)("label",{htmlFor:e.id,children:e.label})]})};var A=function(e){var t=Object(n.useState)([]),a=Object(p.a)(t,2),i=a[0],r=a[1],c=Object(n.useState)([]),s=Object(p.a)(c,2),o=s[0],l=s[1],j=Object(n.useState)(""),b=Object(p.a)(j,2),d=b[0],h=b[1],O=Object(n.useState)([]),m=Object(p.a)(O,2),f=m[0],x=m[1],g=Object(n.useState)([]),N=Object(p.a)(g,2),C=N[0],S=N[1],y=Object(n.useState)(!1),P=Object(p.a)(y,2),E=P[0],A=P[1],z=Object(n.useState)(""),V=Object(p.a)(z,2),q=V[0],J=V[1],X=Object(n.useState)(!0),K=Object(p.a)(X,2),Y=K[0],Z=K[1],G=Object(n.useState)(!0),Q=Object(p.a)(G,2),$=Q[0],ee=Q[1],te=[],ae=[],ne=[],ie=[],re=[],ce=[],se=[],oe=Object(n.useCallback)(Object(w.a)(1e3,function(){var e=Object(M.a)(I.a.mark((function e(t){var a,n,i;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.get("".concat(F.fetchSearch).concat(t));case 2:a=e.sent,(n=a.data)&&(i=n.map((function(e){return e.show})),l(i));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),[]);function ue(e,t){return le.apply(this,arguments)}function le(){return(le=Object(M.a)(I.a.mark((function e(t,a){return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(v.f)(t,{favouriteMovies:a});case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}i.forEach((function(e){e.genres.forEach((function(t){"Drama"===t?te.push(e):"Science-Fiction"===t?ne.push(e):"Thriller"===t?ae.push(e):"Horror"===t?ie.push(e):"Supernatural"===t?re.push(e):"Music"===t&&ce.push(e)}))}));var je=function(t){if(!f.some((function(e){return e.id===t.id}))){var a=[].concat(Object(k.a)(f),[t]);x(a),Object(v.c)(Object(v.a)(_,"users")).then((function(t){t.forEach((function(t){t.id===e.userUID&&ue(Object(v.b)(_,"users","".concat(e.userUID)),a)}))}))}};function be(){return(be=Object(M.a)(I.a.mark((function e(t,a){return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(v.f)(t,{likedMovies:a});case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var de=function(t){var a=[];a=C.some((function(e){return e.id===t.id}))?C.filter((function(e){return e.id!==t.id})):[].concat(Object(k.a)(C),[t]),S(a),Object(v.c)(Object(v.a)(_,"users")).then((function(t){t.forEach((function(t){t.id===e.userUID&&function(e,t){be.apply(this,arguments)}(Object(v.b)(_,"users","".concat(e.userUID)),a)}))}))},he=function(t){var a=f.filter((function(e){return e.id!==t.id}));x(a),Object(v.c)(Object(v.a)(_,"users")).then((function(t){t.forEach((function(t){t.id===e.userUID&&ue(Object(v.b)(_,"users","".concat(e.userUID)),a)}))}))};function Oe(e){A(!1),A(e.target.checked),J(e.target.id)}return Object(n.useEffect)(Object(M.a)(I.a.mark((function e(){var t;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.get(F.fetchNetflixAll);case 2:t=e.sent,r(t.data),ee(!1);case 5:case"end":return e.stop()}}),e)}))),[]),Object(n.useEffect)((function(){e.userUID&&Object(v.c)(Object(v.a)(_,"users")).then((function(t){t.forEach((function(t){t.id===e.userUID&&(x(t.data().favouriteMovies),S(t.data().likedMovies))})),Z(!1)}))}),[e.userUID]),se=d?o:E&&"drama"===q?te:E&&"thriller"===q?ae:E&&"scienceFiction"===q?ne:E&&"horror"===q?ie:E&&"music"===q?ce:E&&"supernatural"===q?re:i,Object(u.jsxs)("div",{className:B.a.movieContainerPage,children:[Object(u.jsx)(U,{searchValue:d,onChange:function(e){h(e.target.value),oe(e.target.value)}}),d?Object(u.jsxs)("h2",{className:B.a.mainTitle,children:["Search: ",d]}):Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h2",{className:B.a.mainTitle,children:"All Movies"}),Object(u.jsx)("div",{className:B.a.radioButtonWrapper,children:[{id:"drama",label:"Drama"},{id:"thriller",label:"Thriller"},{id:"scienceFiction",label:"Science-Fiction"},{id:"horror",label:"Horror"},{id:"music",label:"Music"},{id:"supernatural",label:"Supernatural"},{id:"reset",label:"Reset"}].map((function(e){return Object(u.jsx)(W,{id:e.id,type:"radio",name:"question",onChange:Oe,label:e.label},e.id)}))})]}),Object(u.jsx)("div",{className:B.a.movieContainer,children:$?Object(u.jsx)(L.a,{color:"#D73674",loading:Y,size:30}):Object(u.jsx)(u.Fragment,{children:se.map((function(e){return Object(u.jsx)("div",{children:Object(u.jsx)(D,{movie:e,favouriteComponent:H,handleFavouritesClick:je,likedMovies:C,setLikedMovies:S,storeLikeMovie:de})},e.id)}))})}),Object(u.jsx)("div",{children:Y?Object(u.jsx)(L.a,{color:"#D73674",loading:Y,size:30}):Object(u.jsx)(u.Fragment,{children:f.length>0?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h2",{className:B.a.mainTitle,children:"Favourites"}),Object(u.jsx)("div",{className:B.a.movieContainer,children:f.map((function(e){return Object(u.jsx)(D,{movie:e,favouriteComponent:R,handleFavouritesClick:he,likedMovies:C,setLikedMovies:S,storeLikeMovie:de},e.id)}))})]}):Object(u.jsx)("h2",{className:B.a.mainTitle,children:"No favourites"})})})]})},z=a(43),V=a.n(z);var q=function(e){var t=e.userName;return Object(u.jsxs)("div",{className:V.a.profileRow,children:[Object(u.jsxs)("p",{className:V.a.userName,children:["Name: ",t]}),Object(u.jsx)(c.b,{to:"/",onClick:function(){return Object(f.b)().signOut()},children:Object(u.jsx)("button",{className:V.a.btnSignOut,children:"Sign Out"})})]})};var J=function(){var e=Object(n.useState)(""),t=Object(p.a)(e,2),a=t[0],i=t[1],r=Object(n.useState)(""),c=Object(p.a)(r,2),s=c[0],o=c[1];return Object(n.useEffect)((function(){var e=Object(f.b)();Object(f.c)(e,(function(e){e&&(i(e.displayName),o(e.uid))}))}),[]),Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{className:d.a.browseHeader,children:[Object(u.jsx)(l,{}),Object(u.jsx)(q,{userName:a})]}),Object(u.jsx)(A,{userUID:s})]})},X=a(40),K=a(49),Y=["user","loggedInPath","children"],Z=["user","children"];function G(e){var t=e.user,a=e.loggedInPath,n=e.children,i=Object(K.a)(e,Y);return Object(u.jsx)(m.Route,Object(X.a)(Object(X.a)({},i),{},{render:function(){return t?t?Object(u.jsx)(m.Redirect,{to:{pathname:a}}):null:n}}))}function Q(e){var t=e.user,a=e.children,n=Object(K.a)(e,Z);return Object(u.jsx)(m.Route,Object(X.a)(Object(X.a)({},n),{},{render:function(e){var n=e.location;return t?a:t?null:Object(u.jsx)(m.Redirect,{to:{pathname:"signin",state:{from:n}}})}}))}var $=function(){var e=function(){var e=Object(n.useState)(JSON.parse(localStorage.getItem("authUser"))),t=Object(p.a)(e,2),a=t[0],i=t[1];return Object(n.useEffect)((function(){var e=Object(f.b)().onAuthStateChanged((function(e){e?(localStorage.setItem("authUser",JSON.stringify(e)),i(e)):(localStorage.removeItem("authUser"),i(null))}));return function(){return e()}}),[]),{user:a}}(),t=e.user;return Object(u.jsxs)(c.a,{children:[Object(u.jsx)(G,{user:t,loggedInPath:O,path:"/signin",exact:!0,children:Object(u.jsx)(C,{})}),Object(u.jsx)(G,{user:t,loggedInPath:O,path:"/signup",exact:!0,children:Object(u.jsx)(N,{})}),Object(u.jsx)(Q,{user:t,path:O,children:Object(u.jsx)(J,{})}),Object(u.jsx)(G,{user:t,loggedInPath:O,path:"/",exact:!0,children:Object(u.jsx)(h,{})})]})},ee=Object(n.createContext)(""),te=a(64),ae=a.n(te);r.a.render(Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(ae.a,{basename:"/project_Netflix",children:Object(u.jsx)(ee.Provider,{value:{firebase:g},children:Object(u.jsx)($,{})})})}),document.getElementById("root"))},13:function(e,t,a){e.exports={mainTitle:"MovieContainer_mainTitle__8RyJV",movieContainer:"MovieContainer_movieContainer__1-udq",movieContainerPage:"MovieContainer_movieContainerPage__3giQJ",movieCard:"MovieContainer_movieCard__1jInF",movieLink:"MovieContainer_movieLink__3HC8Z",movieTitle:"MovieContainer_movieTitle__3Yf8P",genresText:"MovieContainer_genresText__1oXt5",textDescription:"MovieContainer_textDescription__9KXae",iconsBox:"MovieContainer_iconsBox__3ILHl",counter:"MovieContainer_counter__3V7WQ",ratingIcon:"MovieContainer_ratingIcon__1_OFC",likeBoxWrapper:"MovieContainer_likeBoxWrapper__3x3Yz",likeText:"MovieContainer_likeText__iJ3Ua",ratingBoxWrapper:"MovieContainer_ratingBoxWrapper__LIjqw",noImg:"MovieContainer_noImg__1Jl3X",inputSearch:"MovieContainer_inputSearch__1liO3",favourite:"MovieContainer_favourite__1d0o4",likesAmount:"MovieContainer_likesAmount__1Ukpb",activeLike:"MovieContainer_activeLike__1Va1x",radioButtonWrapper:"MovieContainer_radioButtonWrapper__53Yjv",radioButton:"MovieContainer_radioButton__3-Lys",radioInput:"MovieContainer_radioInput__2jk_-"}},14:function(e,t,a){e.exports={form:"pages_form__Bs5Hq",input:"pages_input__2wCZ3",page:"pages_page__1VL8X",btn:"pages_btn__3Uoko",text:"pages_text__3kKEc",signLink:"pages_signLink__2nzP9",signTitle:"pages_signTitle__ZpSZk",browseHeader:"pages_browseHeader__X3Tde",hint:"pages_hint__1vBdq",inputEmail:"pages_inputEmail__1yeIx",inputPassword:"pages_inputPassword__q4CE3"}},31:function(e,t,a){e.exports={headerMain:"Header_headerMain__--115",searchPanelWrapper:"Header_searchPanelWrapper__1z-dy",logo:"Header_logo__34EPL",logoLink:"Header_logoLink__1XqXH",btnRegister:"Header_btnRegister__2wBkE",signLink:"Header_signLink__2NEvQ",logoImg:"Header_logoImg__Y1Ff1"}},43:function(e,t,a){e.exports={btnSignOut:"Profiles_btnSignOut__1jToe",userName:"Profiles_userName__2_nu0",profileRow:"Profiles_profileRow__2ocaZ"}}},[[106,1,2]]]);
//# sourceMappingURL=main.7832a2c5.chunk.js.map