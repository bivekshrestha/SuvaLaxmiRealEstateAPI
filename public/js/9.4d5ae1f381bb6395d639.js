(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{131:function(t,o,s){"use strict";var a=s(167);s.d(o,"a",(function(){return a.a})),s.d(o,"b",(function(){return a.b}))},167:function(t,o,s){"use strict";s.d(o,"a",(function(){return a})),s.d(o,"b",(function(){return e}));var a=function(){var t=this,o=t.$createElement,s=t._self._c||o;return s("div",{staticClass:"container mt-3"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-body"},[s("div",{staticClass:"tab-content"},[t._m(0),t._v(" "),s("div",{staticClass:"tab-pane active show",attrs:{id:"settings"}},[s("form",{staticClass:"form-horizontal row d-flex justify-content-center"},[s("div",{staticClass:"form-group col-12 col-md-6"},[s("label",{staticClass:"col-6 control-label",attrs:{for:"inputName"}},[t._v("Name")]),t._v(" "),s("div",{staticClass:"col-sm-12"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("name")},attrs:{type:"",id:"inputName",placeholder:"Name"},domProps:{value:t.form.name},on:{input:function(o){o.target.composing||t.$set(t.form,"name",o.target.value)}}}),t._v(" "),s("has-error",{attrs:{form:t.form,field:"name"}})],1)]),t._v(" "),s("div",{staticClass:"form-group col-12 col-md-6"},[s("label",{staticClass:"col-6 control-label",attrs:{for:"inputEmail"}},[t._v("Email")]),t._v(" "),s("div",{staticClass:"col-sm-12"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("email")},attrs:{type:"email",id:"inputEmail",placeholder:"Email"},domProps:{value:t.form.email},on:{input:function(o){o.target.composing||t.$set(t.form,"email",o.target.value)}}}),t._v(" "),s("has-error",{attrs:{form:t.form,field:"email"}})],1)]),t._v(" "),s("div",{staticClass:"form-group col-12 col-md-6"},[s("label",{staticClass:"col-6 control-label",attrs:{for:"inputEmail"}},[t._v("Phone")]),t._v(" "),s("div",{staticClass:"col-sm-12"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.phone,expression:"form.phone"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("phone")},attrs:{type:"text",id:"inputPhone",placeholder:"Phone"},domProps:{value:t.form.phone},on:{input:function(o){o.target.composing||t.$set(t.form,"phone",o.target.value)}}}),t._v(" "),s("has-error",{attrs:{form:t.form,field:"phone"}})],1)]),t._v(" "),s("div",{staticClass:"form-group col-12 col-md-6"},[s("label",{staticClass:"col-6 control-label",attrs:{for:"inputExperience"}},[t._v("Experience")]),t._v(" "),s("div",{staticClass:"col-sm-12"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.bio,expression:"form.bio"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("bio")},attrs:{id:"inputExperience",placeholder:"Experience"},domProps:{value:t.form.bio},on:{input:function(o){o.target.composing||t.$set(t.form,"bio",o.target.value)}}}),t._v(" "),s("has-error",{attrs:{form:t.form,field:"bio"}})],1)]),t._v(" "),s("div",{staticClass:"form-group col-12 col-md-6"},[s("label",{staticClass:"col-6 control-label",attrs:{for:"photo"}},[t._v("Profile Photo")]),t._v(" "),s("div",{staticClass:"col-sm-12"},[s("input",{staticClass:"form-input",attrs:{type:"file",name:"photo",id:"photo"},on:{change:t.updateProfile}})])]),t._v(" "),s("div",{staticClass:"form-group col-12 col-md-6"},[s("label",{staticClass:"col-sm-12 control-label",attrs:{for:"password"}},[t._v("Password (leave empty if\n                                        not changing)")]),t._v(" "),s("div",{staticClass:"col-sm-12"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password,expression:"form.password"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("password")},attrs:{type:"password",id:"password",placeholder:"Password"},domProps:{value:t.form.password},on:{input:function(o){o.target.composing||t.$set(t.form,"password",o.target.value)}}}),t._v(" "),s("has-error",{attrs:{form:t.form,field:"password"}})],1)]),t._v(" "),s("div",{staticClass:"form-group col-12 col-md-6 text-center mt-3"},[s("button",{staticClass:"btn btn-success",attrs:{type:"submit"},on:{click:function(o){return o.preventDefault(),t.updateInfo(o)}}},[t._v("\n                                            Update\n                                        ")])])])])])])])])])])},e=[function(){var t=this.$createElement,o=this._self._c||t;return o("div",{staticClass:"tab-pane",attrs:{id:"activity"}},[o("h3",{staticClass:"text-center"},[this._v("Display User Activity")])])}]},258:function(t,o,s){"use strict";var a=s(90);s.n(a).a},259:function(t,o,s){(t.exports=s(1)(!1)).push([t.i,"\nbutton[data-v-85477932]{\n    padding: 0.5rem 4rem;\n}\n.widget-user-header[data-v-85477932] {\n    background-position: center center;\n    background-size: cover;\n    height: 250px !important;\n}\n.widget-user .card-footer[data-v-85477932] {\n    padding: 0;\n}\n",""])},284:function(t,o,s){"use strict";s.r(o);var a=s(131),e=s(88),r=(s(258),s(0)),i=Object(r.a)(e.a,a.a,a.b,!1,null,"85477932",null);o.default=i.exports},88:function(t,o,s){"use strict";var a=s(89);o.a=a.a},89:function(t,o,s){"use strict";o.a={data:function(){return{form:new Form({id:this.$store.getters.currentUser.id,name:"",email:"",password:"",type:"",bio:"",photo:"",phone:""})}},mounted:function(){console.log("Component mounted.")},methods:{getProfilePhoto:function(){return this.form.photo.length>200?this.form.photo:"/img/profile/"+this.form.photo},updateInfo:function(){var t=this;this.$Progress.start(),""==this.form.password&&(this.form.password=void 0),this.form.put("/api/profile").then((function(){t.$emit("AfterCreate"),t.$Progress.finish(),swal.fire("Updated!","Information has been updated.","success")})).catch((function(){t.$Progress.fail()}))},updateProfile:function(t){var o=this,s=t.target.files[0],a=new FileReader;if(s.size>2097152)return swal.fire({type:"error",title:"Oops...",text:"You are uploading a large file"}),!1;a.onloadend=function(t){o.form.photo=a.result},a.readAsDataURL(s)}},created:function(){var t=this;axios.get("/api/profile/"+this.$store.getters.currentUser.id).then((function(o){var s=o.data;return t.form.fill(s)}))}}},90:function(t,o,s){var a=s(259);"string"==typeof a&&(a=[[t.i,a,""]]);var e={hmr:!0,transform:void 0,insertInto:void 0};s(2)(a,e);a.locals&&(t.exports=a.locals)}}]);