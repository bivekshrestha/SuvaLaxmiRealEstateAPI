(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{115:function(t,e,r){"use strict";var n=r(151);r.d(e,"a",(function(){return n.a})),r.d(e,"b",(function(){return n.b}))},151:function(t,e,r){"use strict";r.d(e,"a",(function(){return n})),r.d(e,"b",(function(){return s}));var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"modal-dialog text-center"},[r("div",{staticClass:"col-sm-11 main-section"},[r("div",{staticClass:"modal-content"},[r("h4",{staticClass:"mt-5"},[t._v("Password Reset Form")]),t._v(" "),r("form",{staticClass:"col-12 mt-3 mb-5",on:{submit:function(e){return e.preventDefault(),t.sendRequest(e)}}},[r("div",{staticClass:"input-group form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("email")},attrs:{type:"email",id:"email",name:"email",placeholder:"Enter your Email Address"},domProps:{value:t.form.email},on:{input:function(e){e.target.composing||t.$set(t.form,"email",e.target.value)}}}),t._v(" "),r("has-error",{attrs:{form:t.form,field:"email"}})],1),t._v(" "),r("p",[r("router-link",{attrs:{to:{name:"login"}}},[t._v("Let me Login")])],1),t._v(" "),t._m(0),t._v(" "),r("div",{staticClass:"form-group row valid-feedback d-block"},[t._v("\n                    "+t._s(t.message)+"\n                ")]),t._v(" "),r("div",{staticClass:"form-group row invalid-feedback d-block"},[t._v("\n                    "+t._s(t.error)+"\n                ")])])])])])},s=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"form-group align-items-center mt-3"},[e("input",{staticClass:"btn btn-primary btn-block",attrs:{type:"submit",value:"Send Reset Link"}})])}]},230:function(t,e,r){"use strict";var n=r(44);r.n(n).a},231:function(t,e,r){(t.exports=r(1)(!1)).push([t.i,"\ninput[data-v-1b1b0689] {\n    border-radius: 5px;\n}\n.modal-dialog[data-v-1b1b0689]{\n    margin-top: 5rem;\n    margin-bottom: 5rem;\n}\n.modal-content[data-v-1b1b0689] {\n    box-shadow: 0px 0px 6px gray;\n}\n.modal-content img[data-v-1b1b0689] {\n    height: 100px;\n    width: 100px;\n    -webkit-transform: translate(0, -56px);\n            transform: translate(0, -56px);\n}\n.form-group .btn[data-v-1b1b0689] {\n    background-color: #38A1DA;\n    border: none;\n}\n.input-group-text i[data-v-1b1b0689] {\n    color: #fff;\n}\n\n",""])},270:function(t,e,r){"use strict";r.r(e);var n=r(115),s=r(42),a=(r(230),r(0)),o=Object(a.a)(s.a,n.a,n.b,!1,null,"1b1b0689",null);e.default=o.exports},42:function(t,e,r){"use strict";var n=r(43);e.a=n.a},43:function(t,e,r){"use strict";e.a={name:"request-password-reset",data:function(){return{form:new Form({email:""}),message:"",error:""}},mounted:function(){},methods:{sendRequest:function(){var t=this;this.$Progress.start(),this.error="",this.form.post("/api/password_reset/email_verify").then((function(){Toast.fire({type:"success",title:"Password reset request sent!!!"}),t.message="A link to reset your password has been sent to your email.",t.$Progress.finish()})).catch((function(){t.message="",t.error="Invalid Email Address",t.$Progress.fail()}))}}}},44:function(t,e,r){var n=r(231);"string"==typeof n&&(n=[[t.i,n,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};r(2)(n,s);n.locals&&(t.exports=n.locals)}}]);