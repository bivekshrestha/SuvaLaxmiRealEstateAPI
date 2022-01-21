(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{105:function(t,e,a){"use strict";var s=a(138);a.d(e,"a",(function(){return s.a})),a.d(e,"b",(function(){return s.b}))},138:function(t,e,a){"use strict";a.d(e,"a",(function(){return s})),a.d(e,"b",(function(){return r}));var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"row mt-5"},[a("div",{staticClass:"col-md-12"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-header"},[a("h3",{staticClass:"card-title"},[t._v("Users Table")]),t._v(" "),a("div",{staticClass:"card-tools"},[a("button",{staticClass:"btn btn-success",attrs:{"data-toggle":"modal","data-target":"#addNew"},on:{click:t.newModal}},[t._v("Add New "),a("i",{staticClass:"fas fa-user-plus fa-fw"})])])]),t._v(" "),a("div",{staticClass:"card-body table-responsive p-0"},[a("table",{staticClass:"table table-hover"},[t._m(0),t._v(" "),a("tbody",t._l(t.users.data,(function(e){return a("tr",{key:e.id},[a("td",[t._v(t._s(e.id))]),t._v(" "),a("td",[t._v(t._s(e.name))]),t._v(" "),a("td",[t._v(t._s(e.email))]),t._v(" "),a("td",[t._v(t._s(e.type))]),t._v(" "),a("td",[t._v(t._s(e.phone))]),t._v(" "),a("td",[t._v(t._s(e.created_at))]),t._v(" "),a("td",[a("a",{attrs:{href:"#"},on:{click:function(a){return t.editModal(e)}}},[a("i",{staticClass:"fa fa-edit blue"})]),t._v(" "),a("a",{attrs:{href:"#"},on:{click:function(a){return t.deleteUser(e.id)}}},[a("i",{staticClass:"fa fa-trash red"})])])])})),0)])]),t._v(" "),a("div",{staticClass:"card-footer"},[a("pagination",{attrs:{data:t.users},on:{"pagination-change-page":t.getResults}})],1)])])]),t._v(" "),a("div",{staticClass:"modal fade",attrs:{id:"addNew",tabindex:"-1",role:"dialog","aria-labelledby":"addNewLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog modal-dialog-centered",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header"},[a("h5",{directives:[{name:"show",rawName:"v-show",value:!t.editMode,expression:"!editMode"}],staticClass:"modal-title",attrs:{id:"addNewLabel"}},[t._v("Add New")]),t._v(" "),a("h5",{directives:[{name:"show",rawName:"v-show",value:t.editMode,expression:"editMode"}],staticClass:"modal-title",attrs:{id:"addNewLabel"}},[t._v("Update User's Info")]),t._v(" "),t._m(1)]),t._v(" "),a("form",{on:{submit:function(e){e.preventDefault(),t.editMode?t.updateUser():t.createUser()}}},[a("div",{staticClass:"modal-body"},[a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("name")},attrs:{type:"text",name:"name",placeholder:"Enter Name"},domProps:{value:t.form.name},on:{input:function(e){e.target.composing||t.$set(t.form,"name",e.target.value)}}}),t._v(" "),a("has-error",{attrs:{form:t.form,field:"name"}})],1),t._v(" "),a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("email")},attrs:{type:"email",name:"email",placeholder:"Enter Email"},domProps:{value:t.form.email},on:{input:function(e){e.target.composing||t.$set(t.form,"email",e.target.value)}}}),t._v(" "),a("has-error",{attrs:{form:t.form,field:"email"}})],1),t._v(" "),a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.phone,expression:"form.phone"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("phone")},attrs:{type:"text",name:"phone",placeholder:"Enter Phone"},domProps:{value:t.form.phone},on:{input:function(e){e.target.composing||t.$set(t.form,"phone",e.target.value)}}}),t._v(" "),a("has-error",{attrs:{form:t.form,field:"phone"}})],1),t._v(" "),a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.address,expression:"form.address"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("address")},attrs:{type:"text",name:"address",placeholder:"Enter Address"},domProps:{value:t.form.address},on:{input:function(e){e.target.composing||t.$set(t.form,"address",e.target.value)}}}),t._v(" "),a("has-error",{attrs:{form:t.form,field:"address"}})],1),t._v(" "),a("div",{staticClass:"form-group"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.bio,expression:"form.bio"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("bio")},attrs:{type:"text",name:"bio",placeholder:"Short bio for User(Description optional)"},domProps:{value:t.form.bio},on:{input:function(e){e.target.composing||t.$set(t.form,"bio",e.target.value)}}}),t._v(" "),a("has-error",{attrs:{form:t.form,field:"bio"}})],1),t._v(" "),a("div",{staticClass:"form-group"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.form.type,expression:"form.type"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("type")},attrs:{type:"text",name:"type",placeholder:"Enter type"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"type",e.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"",selected:"",disabled:""}},[t._v("Select User Role")]),t._v(" "),a("option",{attrs:{value:"user"}},[t._v("User")]),t._v(" "),a("option",{attrs:{value:"admin"}},[t._v("Admin")]),t._v(" "),a("option",{attrs:{value:"author"}},[t._v("Author")])]),t._v(" "),a("has-error",{attrs:{form:t.form,field:"type"}})],1),t._v(" "),a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password,expression:"form.password"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("password")},attrs:{type:"password",name:"password",placeholder:"Enter password"},domProps:{value:t.form.password},on:{input:function(e){e.target.composing||t.$set(t.form,"password",e.target.value)}}}),t._v(" "),a("has-error",{attrs:{form:t.form,field:"password"}})],1)]),t._v(" "),a("div",{staticClass:"modal-footer"},[t._m(2),t._v(" "),a("button",{directives:[{name:"show",rawName:"v-show",value:!t.editMode,expression:"!editMode"}],staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Create "),a("i",{staticClass:"fas fa-plus-circle"})]),t._v(" "),a("button",{directives:[{name:"show",rawName:"v-show",value:t.editMode,expression:"editMode"}],staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Update "),a("i",{staticClass:"fas fa-plus-circle"})])])])])])])])},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v("ID")]),t._v(" "),a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Email")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Phone")]),t._v(" "),a("th",[t._v("Registered At")]),t._v(" "),a("th",[t._v("Modify")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[this._v("×")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"btn btn-danger",attrs:{type:"button","data-dismiss":"modal"}},[this._v("Close "),e("i",{staticClass:"fas fa-times-circle"})])}]},18:function(t,e,a){"use strict";var s=a(19);e.a=s.a},19:function(t,e,a){"use strict";e.a={data:function(){return{editMode:!1,users:{},form:new Form({id:"",name:"",email:"",password:"",type:"",bio:"",photo:"",phone:"",address:""})}},created:function(){var t=this;this.loadUsers(),this.$on("AfterCreate",(function(){t.loadUsers()}))},methods:{getResults:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;axios.get("/api/user?page="+e).then((function(e){t.users=e.data}))},updateUser:function(){var t=this;this.$Progress.start(),this.form.put("/api/user/"+this.form.id).then((function(e){$("#addNew").modal("hide"),swal.fire("Updated!","Information has been updated.","success"),t.$Progress.finish(),t.$emit("AfterCreate")})).catch((function(){t.$Progress.fail()}))},newModal:function(){this.editMode=!1,this.form.reset(),$("#addNew").modal("show")},editModal:function(t){this.editMode=!0,this.form.reset(),this.form.fill(t),$("#addNew").modal("show")},loadUsers:function(){var t=this;axios.get("/api/user").then((function(e){var a=e.data;return t.users=a}))},createUser:function(){var t=this;this.$Progress.start(),this.form.post("/api/user").then((function(){t.$emit("AfterCreate"),$("#addNew").modal("hide"),Toast.fire({type:"success",title:"User Created Successfully !!!"}),t.$Progress.finish()})).catch((function(){}))},deleteUser:function(t){var e=this;swal.fire({title:"Are you sure?",text:"You won't be able to revert this!",type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(a){a.value&&e.form.delete("/api/user/"+t).then((function(){swal.fire("Deleted!","Your file has been deleted.","success"),e.$emit("AfterCreate")})).catch((function(){swal("Failed!","There was something wrong.","warning")}))}))}}}},258:function(t,e,a){"use strict";a.r(e);var s=a(105),r=a(18),o=a(0),i=Object(o.a)(r.a,s.a,s.b,!1,null,null,null);e.default=i.exports}}]);