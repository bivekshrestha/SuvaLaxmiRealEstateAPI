(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{115:function(s,r,t){"use strict";var o=t(151);t.d(r,"a",(function(){return o.a})),t.d(r,"b",(function(){return o.b}))},151:function(s,r,t){"use strict";t.d(r,"a",(function(){return o})),t.d(r,"b",(function(){return a}));var o=function(){var s=this,r=s.$createElement,t=s._self._c||r;return t("div",{staticClass:"modal-dialog text-center"},[t("div",{staticClass:"col-sm-11 main-section"},[t("div",{staticClass:"modal-content"},[t("h4",{staticClass:"mt-5"},[s._v("Reset Your Password Here")]),s._v(" "),t("form",{staticClass:" col-12 mt-3 mb-5",on:{submit:function(r){return r.preventDefault(),s.resetPassword(r)}}},[t("div",{staticClass:"input-group form-group"},[t("input",{directives:[{name:"model",rawName:"v-model",value:s.form.password,expression:"form.password"}],staticClass:"form-control",class:{"is-invalid":s.form.errors.has("password")},attrs:{type:"password",placeholder:"New Password"},domProps:{value:s.form.password},on:{input:function(r){r.target.composing||s.$set(s.form,"password",r.target.value)}}}),s._v(" "),t("has-error",{attrs:{form:s.form,field:"password"}})],1),s._v(" "),t("div",{staticClass:"input-group form-group"},[t("input",{directives:[{name:"model",rawName:"v-model",value:s.form.password_confirmation,expression:"form.password_confirmation"}],staticClass:"form-control",class:{"is-invalid":s.form.errors.has("password_confirmation")},attrs:{type:"password",placeholder:"Confirm Password"},domProps:{value:s.form.password_confirmation},on:{input:function(r){r.target.composing||s.$set(s.form,"password_confirmation",r.target.value)}}}),s._v(" "),t("has-error",{attrs:{form:s.form,field:"password_confirmation"}})],1),s._v(" "),s._m(0),s._v(" "),t("div",{staticClass:"form-group row valid-feedback d-block"},[s._v("\n                    "+s._s(s.message)+"\n                ")]),s._v(" "),t("div",{staticClass:"form-group row invalid-feedback d-block"},[s._v("\n                    "+s._s(s.error)+"\n                ")])])])])])},a=[function(){var s=this.$createElement,r=this._self._c||s;return r("div",{staticClass:"form-group align-items-center mt-3"},[r("input",{staticClass:"btn btn-primary btn-block",attrs:{type:"submit",value:"Reset Password"}})])}]},231:function(s,r,t){"use strict";var o=t(47);t.n(o).a},232:function(s,r,t){(s.exports=t(1)(!1)).push([s.i,"\ninput[data-v-9f17f3ba] {\n    border-radius: 5px;\n}\n.modal-dialog[data-v-9f17f3ba]{\n    margin-top: 5rem;\n    margin-bottom: 5rem;\n}\n.modal-content[data-v-9f17f3ba] {\n    box-shadow: 0px 0px 6px gray;\n}\n.modal-content img[data-v-9f17f3ba] {\n    height: 100px;\n    width: 100px;\n    -webkit-transform: translate(0, -56px);\n            transform: translate(0, -56px);\n}\n.form-group .btn[data-v-9f17f3ba] {\n    background-color: #232323;\n    border: none;\n}\n.input-group-text i[data-v-9f17f3ba] {\n    color: #fff;\n}\n\n",""])},268:function(s,r,t){"use strict";t.r(r);var o=t(115),a=t(45),n=(t(231),t(0)),e=Object(n.a)(a.a,o.a,o.b,!1,null,"9f17f3ba",null);r.default=e.exports},45:function(s,r,t){"use strict";var o=t(46);r.a=o.a},46:function(s,r,t){"use strict";r.a={name:"password-reset",data:function(){return{form:new Form({token:this.$route.params.token,password:"",password_confirmation:""}),message:"",error:""}},mounted:function(){},methods:{resetPassword:function(){var s=this;this.$Progress.start(),this.error="",this.form.post("/api/password_reset").then((function(){s.message="Password reset is successfully. Now you can login.",s.$Progress.finish(),Toast.fire({type:"success",title:"Password reset successful!!!"}),s.$router.push({name:"login",query:{reset:"password-reset"}})})).catch((function(){s.message="",s.error="Invalid token",s.$Progress.fail()}))}}}},47:function(s,r,t){var o=t(232);"string"==typeof o&&(o=[[s.i,o,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};t(2)(o,a);o.locals&&(s.exports=o.locals)}}]);