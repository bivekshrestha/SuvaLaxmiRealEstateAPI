(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{113:function(t,e,n){"use strict";var a=n(149);n.d(e,"a",(function(){return a.a})),n.d(e,"b",(function(){return a.b}))},149:function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return s}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{height:"100vh"}},[n("h5",{staticClass:"text-center mt-5"},[t._v("Confirming your account. Please wait....")]),t._v(" "),t.loading?n("div",{staticStyle:{height:"100vh"}},[t._m(0)]):t._e(),t._v(" "),n("div",{staticClass:"text-danger text-center"},[t._v(t._s(t.message))])])},s=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{"margin-top":"5vh","margin-left":"50%"}},[e("div",{staticClass:"spinner-border",attrs:{role:"status"}},[e("span",{staticClass:"sr-only"},[this._v("Loading...")])])])}]},265:function(t,e,n){"use strict";n.r(e);var a=n(113),s=n(40),i=n(0),r=Object(i.a)(s.a,a.a,a.b,!1,null,null,null);e.default=r.exports},40:function(t,e,n){"use strict";var a=n(41);e.a=a.a},41:function(t,e,n){"use strict";e.a={name:"user-confirmation",data:function(){return{message:"",loading:!0}},mounted:function(){var t=this;axios.get("/api/register/activate/"+this.$route.params.token).then((function(){Toast.fire({type:"success",title:"Your Account has been activated!!!"}),t.$router.push({name:"login",query:{account:"activated"}})})).catch((function(e){t.loading=!1,t.message=e.response.data.message}))}}}}]);