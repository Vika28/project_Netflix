(this.webpackJsonpnetflix=this.webpackJsonpnetflix||[]).push([[0],{100:function(e,t,a){"use strict";a.r(t);var n=a(7),r=a(58),i=a.n(r),c=a(24),s=a(31),o=a.n(s),u=a(6);var l=function(){return Object(u.jsx)("div",{children:Object(u.jsx)("div",{className:o.a.logo,children:Object(u.jsx)(c.b,{to:"/",className:o.a.logoLink,children:Object(u.jsx)("img",{className:o.a.logoImg,src:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png",alt:""})})})})};var j=function(){return Object(u.jsxs)("div",{className:o.a.headerMain,children:[Object(u.jsx)(l,{}),Object(u.jsx)(c.b,{to:"/signin",className:o.a.signLink,children:Object(u.jsx)("button",{className:o.a.btnRegister,children:"Sign in"})})]})},b=a(17),d=a.n(b);var h=function(){return Object(u.jsx)("div",{className:d.a.page,children:Object(u.jsx)(j,{})})},O="/browse",p=a(11),m=a(14),v=a(15),f=a(21);var g=function(e){return Object(u.jsx)("input",{type:e.type,placeholder:e.placeholder,value:e.value,onChange:e.onChange,className:d.a.input})},x=a(64).a.initializeApp({apiKey:"AIzaSyBGVxG3idO6SLb1KvIc8VL6Kzbfx9k5_b0",authDomain:"netflix-4ad51.firebaseapp.com",projectId:"netflix-4ad51",storageBucket:"netflix-4ad51.appspot.com",messagingSenderId:"956142069791",appId:"1:956142069791:web:55149067ed2fb7092dcd2a",measurementId:"G-42EYPTVWFV"}),_=Object(v.d)();var N=function(){Object(m.useHistory)();var e=Object(m.useHistory)(),t=Object(n.useState)(""),a=Object(p.a)(t,2),r=a[0],i=a[1],s=Object(n.useState)(""),o=Object(p.a)(s,2),j=o[0],b=o[1],h=Object(n.useState)(""),x=Object(p.a)(h,2),N=x[0],C=x[1],k=Object(n.useState)(""),S=Object(p.a)(k,2),M=(S[0],S[1]),I=""===r||""===N||""===j;return Object(u.jsxs)("div",{className:d.a.page,children:[Object(u.jsx)(l,{}),Object(u.jsxs)("form",{onSubmit:function(t){t.preventDefault();var a=Object(f.b)();Object(f.a)(a,j,N).then((function(e){console.log("currentUser",e),Object(f.e)(a.currentUser,{displayName:r});var t=Object(v.a)(_,"users");Object(v.e)(Object(v.b)(t,e.user.uid),{favouriteMovies:[],likedMovies:[]},{merge:!0})})).then((function(){e.push(O)})).catch((function(e){i(""),C(""),b(""),M(e.message)}))},method:"POST",className:d.a.form,children:[Object(u.jsx)("h3",{className:d.a.signTitle,children:"Sign Up"}),Object(u.jsx)(g,{type:"text",placeholder:"Name",value:r,onChange:function(e){var t=e.target;return i(t.value)}}),Object(u.jsx)(g,{type:"email",placeholder:"Email",value:j,onChange:function(e){var t=e.target;return b(t.value)}}),Object(u.jsx)(g,{type:"password",placeholder:"Password",autoComplete:"off",value:N,onChange:function(e){var t=e.target;return C(t.value)}}),Object(u.jsx)("button",{disabled:I,type:"submit",className:d.a.btn,children:"sign up"}),Object(u.jsxs)("p",{className:d.a.text,children:["Already a user? ",Object(u.jsx)(c.b,{to:"/signin",className:d.a.signLink,children:"Sign in"})]})]})]})};var C=function(){var e=Object(m.useHistory)(),t=Object(n.useState)(""),a=Object(p.a)(t,2),r=a[0],i=a[1],s=Object(n.useState)(""),o=Object(p.a)(s,2),j=o[0],b=o[1],h=Object(n.useState)(""),v=Object(p.a)(h,2),x=(v[0],v[1]),_=""===j||""===r;return Object(u.jsxs)("div",{className:d.a.page,children:[Object(u.jsx)(l,{}),Object(u.jsxs)("form",{onSubmit:function(t){t.preventDefault();var a=Object(f.b)();Object(f.d)(a,r,j).then((function(){e.push(O)})).catch((function(e){i(""),b(""),x(e.message),console.log(e),alert("No user with such email and password, please try again or sign up")}))},method:"POST",className:d.a.form,children:[Object(u.jsx)("h3",{className:d.a.signTitle,children:"Sign In"}),Object(u.jsx)(g,{type:"email",placeholder:"Email",value:r,onChange:function(e){var t=e.target;return i(t.value)},styles:d.a}),Object(u.jsx)(g,{type:"password",placeholder:"Password",autoComplete:"off",value:j,onChange:function(e){var t=e.target;return b(t.value)}}),Object(u.jsx)("button",{disabled:_,type:"submit",className:d.a.btn,children:"sign in"}),Object(u.jsxs)("p",{className:d.a.text,children:["New to netflix? ",Object(u.jsx)(c.b,{to:"/signup",className:d.a.signLink,children:"Sign up now"})]})]})]})},k=a(22),S=a(0),M=a.n(S),I=a(1),y=a(61),w=a(62),L=a.n(w).a.create({baseURL:"https://api.tvmaze.com"}),T=a(13),B=a.n(T);var D=function(e){var t=e.movie,a=e.favouriteComponent,n=e.handleFavouritesClick,r=e.likedMovies,i=e.storeLikeMovie,c=a,s=t.weight,o=r.some((function(e){return e.id===t.id}))?B.a.activeLike:"",l=r.some((function(e){return e.id===t.id}))?s+1:s,j=t.rating.average?t.rating.average:0;return Object(u.jsxs)("div",{className:B.a.movieCard,children:[Object(u.jsxs)("a",{href:t.url,className:B.a.movieLink,children:[t.image?Object(u.jsx)("img",{src:t.image.medium,alt:t.name}):Object(u.jsx)("img",{src:"https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=338&ext=jpg&ga=GA1.2.1656857203.1631318400",className:B.a.noImg,alt:t.name}),Object(u.jsx)("h4",{className:B.a.movieTitle,children:t.name})]}),Object(u.jsx)("p",{className:B.a.genresText,children:t.genres.join("/")}),Object(u.jsxs)("p",{className:B.a.textDescription,children:["Language: ",t.language]}),Object(u.jsxs)("p",{className:B.a.textDescription,children:["Schedule: ",t.schedule.days.join(" ")," ",t.schedule.time]}),Object(u.jsxs)("div",{className:B.a.iconsBox,children:[Object(u.jsxs)("div",{className:B.a.ratingBoxWrapper,children:[Object(u.jsx)("span",{className:B.a.ratingIcon,children:"\u2605"})," ",Object(u.jsx)("span",{children:j})]}),Object(u.jsxs)("div",{className:B.a.likeBoxWrapper,onClick:function(){i(t)},children:[Object(u.jsx)("span",{className:"".concat(B.a.likesAmount," ").concat(o," ").concat(B.a.counter),children:"\u2764"})," ",Object(u.jsx)("p",{className:B.a.likeText,children:l})]})]}),Object(u.jsx)("div",{onClick:function(){return n(t)},className:B.a.favouriteWrapper,children:Object(u.jsx)(c,{})})]})};var U=function(e){return Object(u.jsx)("input",{type:"text",value:e.value,onChange:e.onChange,placeholder:"Search...",className:B.a.inputSearch})},P={fetchNetflixAll:"/shows",fetchSearch:"/search/shows?q="};var F=function(){return Object(u.jsx)("div",{className:B.a.favourite,children:Object(u.jsx)("span",{children:"Add to favourite"})})};var H=function(){return Object(u.jsx)("div",{className:B.a.favourite,children:Object(u.jsx)("span",{children:"Remove from favourites"})})};var E=function(e){return Object(u.jsxs)("span",{className:B.a.radioButton,children:[Object(u.jsx)("input",{id:e.id,type:e.type,onChange:e.onChange,name:e.name,className:B.a.radioInput}),Object(u.jsx)("label",{htmlFor:e.id,children:e.label})]})};var W=function(e){var t=Object(n.useState)([]),a=Object(p.a)(t,2),r=a[0],i=a[1],c=Object(n.useState)([]),s=Object(p.a)(c,2),o=s[0],l=s[1],j=Object(n.useState)(""),b=Object(p.a)(j,2),d=b[0],h=b[1],O=Object(n.useState)([]),m=Object(p.a)(O,2),f=m[0],g=m[1],x=Object(n.useState)([]),N=Object(p.a)(x,2),C=N[0],S=N[1],w=Object(n.useState)(!1),T=Object(p.a)(w,2),W=T[0],R=T[1],A=Object(n.useState)(""),G=Object(p.a)(A,2),z=G[0],J=G[1],K=[],V=[],q=[],Y=[],Z=[],X=[],Q=[],$=Object(n.useCallback)(Object(y.a)(1e3,function(){var e=Object(I.a)(M.a.mark((function e(t){var a,n,r;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.get("".concat(P.fetchSearch).concat(t));case 2:a=e.sent,(n=a.data)&&(r=n.map((function(e){return e.show})),l(r));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),[]);function ee(e,t){return te.apply(this,arguments)}function te(){return(te=Object(I.a)(M.a.mark((function e(t,a){return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(v.f)(t,{favouriteMovies:a});case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}r.forEach((function(e){e.genres.forEach((function(t){"Drama"===t?K.push(e):"Science-Fiction"===t?q.push(e):"Thriller"===t?V.push(e):"Horror"===t?Y.push(e):"Supernatural"===t?Z.push(e):"Music"===t&&X.push(e)}))}));var ae=function(t){if(!f.some((function(e){return e.id===t.id}))){var a=[].concat(Object(k.a)(f),[t]);g(a),Object(v.c)(Object(v.a)(_,"users")).then((function(t){t.forEach((function(t){t.id===e.userUID&&ee(Object(v.b)(_,"users","".concat(e.userUID)),a)}))}))}};function ne(){return(ne=Object(I.a)(M.a.mark((function e(t,a){return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(v.f)(t,{likedMovies:a});case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var re=function(t){var a=[];a=C.some((function(e){return e.id===t.id}))?C.filter((function(e){return e.id!==t.id})):[].concat(Object(k.a)(C),[t]),S(a),Object(v.c)(Object(v.a)(_,"users")).then((function(t){t.forEach((function(t){t.id===e.userUID&&function(e,t){ne.apply(this,arguments)}(Object(v.b)(_,"users","".concat(e.userUID)),a)}))}))},ie=function(t){var a=f.filter((function(e){return e.id!==t.id}));g(a),Object(v.c)(Object(v.a)(_,"users")).then((function(t){t.forEach((function(t){t.id===e.userUID&&ee(Object(v.b)(_,"users","".concat(e.userUID)),a)}))}))};function ce(e){R(!1),R(e.target.checked),J(e.target.id)}return Object(n.useEffect)(Object(I.a)(M.a.mark((function e(){var t;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.get(P.fetchNetflixAll);case 2:t=e.sent,i(t.data);case 4:case"end":return e.stop()}}),e)}))),[]),Object(n.useEffect)((function(){e.userUID&&Object(v.c)(Object(v.a)(_,"users")).then((function(t){t.forEach((function(t){t.id===e.userUID&&(g(t.data().favouriteMovies),S(t.data().likedMovies))}))}))}),[e.userUID]),Q=d?o:W&&"drama"===z?K:W&&"thriller"===z?V:W&&"scienceFiction"===z?q:W&&"horror"===z?Y:W&&"music"===z?X:W&&"supernatural"===z?Z:r,Object(u.jsxs)("div",{className:B.a.movieContainerPage,children:[Object(u.jsx)(U,{searchValue:d,onChange:function(e){h(e.target.value),$(e.target.value)}}),d?Object(u.jsxs)("h2",{className:B.a.mainTitle,children:["Search: ",d]}):Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h2",{className:B.a.mainTitle,children:"All Movies"}),Object(u.jsx)("div",{className:B.a.radioButtonWrapper,children:[{id:"drama",label:"Drama"},{id:"thriller",label:"Thriller"},{id:"scienceFiction",label:"Science-Fiction"},{id:"horror",label:"Horror"},{id:"music",label:"Music"},{id:"supernatural",label:"Supernatural"},{id:"reset",label:"Reset"}].map((function(e){return Object(u.jsx)(E,{id:e.id,type:"radio",name:"question",onChange:ce,label:e.label},e.id)}))})]}),Object(u.jsx)("div",{className:B.a.movieContainer,children:Q.map((function(e){return Object(u.jsx)("div",{children:Object(u.jsx)(D,{movie:e,favouriteComponent:F,handleFavouritesClick:ae,likedMovies:C,setLikedMovies:S,storeLikeMovie:re})},e.id)}))}),Object(u.jsx)("div",{children:f.length>0?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h2",{className:B.a.mainTitle,children:"Favourites"}),Object(u.jsx)("div",{className:B.a.movieContainer,children:f.map((function(e){return Object(u.jsx)(D,{movie:e,favouriteComponent:H,handleFavouritesClick:ie,likedMovies:C,setLikedMovies:S,storeLikeMovie:re},e.id)}))})]}):Object(u.jsx)("h2",{className:B.a.mainTitle,children:"No favourites"})})]})},R=a(42),A=a.n(R);var G=function(e){var t=e.userName;return Object(u.jsxs)("div",{className:A.a.profileRow,children:[Object(u.jsxs)("p",{className:A.a.userName,children:["Name: ",t]}),Object(u.jsx)(c.b,{to:"/",onClick:function(){return Object(f.b)().signOut()},children:Object(u.jsx)("button",{className:A.a.btnSignOut,children:"Sign Out"})})]})};var z=function(e){var t=Object(n.useState)({}),a=Object(p.a)(t,2),r=(a[0],a[1]),i=Object(n.useState)(""),c=Object(p.a)(i,2),s=c[0],o=c[1],j=Object(n.useState)(""),b=Object(p.a)(j,2),h=b[0],O=b[1];return Object(n.useEffect)((function(){var e=Object(f.b)();Object(f.c)(e,(function(e){e&&(o(e.displayName),O(e.uid))}))}),[]),console.log("user UID",h),Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{className:d.a.browseHeader,children:[Object(u.jsx)(l,{}),Object(u.jsx)(G,{userName:s,setProfile:r})]}),Object(u.jsx)(W,{userUID:h})]})},J=a(39),K=a(47),V=["user","loggedInPath","children"],q=["user","children"];function Y(e){var t=e.user,a=e.loggedInPath,n=e.children,r=Object(K.a)(e,V);return Object(u.jsx)(m.Route,Object(J.a)(Object(J.a)({},r),{},{render:function(){return t?t?Object(u.jsx)(m.Redirect,{to:{pathname:a}}):null:n}}))}function Z(e){var t=e.user,a=e.children,n=Object(K.a)(e,q);return Object(u.jsx)(m.Route,Object(J.a)(Object(J.a)({},n),{},{render:function(e){var n=e.location;return t?a:t?null:Object(u.jsx)(m.Redirect,{to:{pathname:"signin",state:{from:n}}})}}))}var X=function(){var e=function(){var e=Object(n.useState)(JSON.parse(localStorage.getItem("authUser"))),t=Object(p.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){var e=Object(f.b)().onAuthStateChanged((function(e){e?(localStorage.setItem("authUser",JSON.stringify(e)),r(e)):(localStorage.removeItem("authUser"),r(null))}));return function(){return e()}}),[]),{user:a}}(),t=e.user;return console.log(t),Object(u.jsxs)(c.a,{children:[Object(u.jsx)(Y,{user:t,loggedInPath:O,path:"/signin",exact:!0,children:Object(u.jsx)(C,{})}),Object(u.jsx)(Y,{user:t,loggedInPath:O,path:"/signup",exact:!0,children:Object(u.jsx)(N,{})}),Object(u.jsx)(Z,{user:t,path:O,children:Object(u.jsx)(z,{})}),Object(u.jsx)(Y,{user:t,loggedInPath:O,path:"/",exact:!0,children:Object(u.jsx)(h,{})})]})},Q=Object(n.createContext)(""),$=a(63),ee=a.n($);i.a.render(Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(ee.a,{basename:"/project_Netflix",children:Object(u.jsx)(Q.Provider,{value:{firebase:x},children:Object(u.jsx)(X,{})})})}),document.getElementById("root"))},13:function(e,t,a){e.exports={mainTitle:"MovieContainer_mainTitle__1flz-",movieContainer:"MovieContainer_movieContainer__1kYMh",movieContainerPage:"MovieContainer_movieContainerPage__3yJmL",movieCard:"MovieContainer_movieCard__1_1Bh",movieLink:"MovieContainer_movieLink__CtvfS",movieTitle:"MovieContainer_movieTitle__13aHw",genresText:"MovieContainer_genresText__rBKt7",textDescription:"MovieContainer_textDescription__2-14V",iconsBox:"MovieContainer_iconsBox__26mqs",counter:"MovieContainer_counter__i_Jdr",ratingIcon:"MovieContainer_ratingIcon__1Ffrc",likeBoxWrapper:"MovieContainer_likeBoxWrapper__BkH2b",likeText:"MovieContainer_likeText__1y7yZ",ratingBoxWrapper:"MovieContainer_ratingBoxWrapper__39dSR",noImg:"MovieContainer_noImg__1-VeI",inputSearch:"MovieContainer_inputSearch__3Jcaf",favourite:"MovieContainer_favourite__3z73G",favouriteWrapper:"MovieContainer_favouriteWrapper__1goIT",likesAmount:"MovieContainer_likesAmount__3ZUGM",activeLike:"MovieContainer_activeLike__lzxBE",radioButtonWrapper:"MovieContainer_radioButtonWrapper__yGM-F",radioButton:"MovieContainer_radioButton__2qcbG",radioInput:"MovieContainer_radioInput__13968"}},17:function(e,t,a){e.exports={form:"pages_form__2OjYv",input:"pages_input__3IDY6",page:"pages_page__2RsQU",btn:"pages_btn__3yxK_",text:"pages_text__3EOMj",signLink:"pages_signLink__2GDrA",signTitle:"pages_signTitle__2yCSk",browseHeader:"pages_browseHeader__1mHFm"}},31:function(e,t,a){e.exports={headerMain:"Header_headerMain__2XB1I",searchPanelWrapper:"Header_searchPanelWrapper__Oda5c",logo:"Header_logo__2K0Fr",logoLink:"Header_logoLink__2ZF2G",btnRegister:"Header_btnRegister__zKlhB",signLink:"Header_signLink__3WMC8",logoImg:"Header_logoImg___Lvwt"}},42:function(e,t,a){e.exports={btnSignOut:"Profiles_btnSignOut__1l7Xh",userName:"Profiles_userName__D-Yqb",profileRow:"Profiles_profileRow__1qU67"}}},[[100,1,2]]]);
//# sourceMappingURL=main.805f9f69.chunk.js.map