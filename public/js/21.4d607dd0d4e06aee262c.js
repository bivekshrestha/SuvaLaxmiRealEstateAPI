(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{131:function(t,e,n){"use strict";var i=n(167);n.d(e,"a",(function(){return i.a})),n.d(e,"b",(function(){return i.b}))},167:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return r}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mx-1"},[n("div",{staticClass:"container-fluid my-4 border border-dark bg-light"},[n("div",{staticClass:"col-12"},[n("div",{staticClass:"section-title text-dark my-4"},[n("h3",[t._v("Enquiries")]),t._v(" "),n("div",{staticClass:"card-body table-responsive p-0"},[n("table",{staticClass:"table table-hover"},[t._m(0),t._v(" "),n("tbody",t._l(t.enquiries,(function(e,i){return n("tr",{key:e.id},[n("td",[t._v(t._s(i+1))]),t._v(" "),n("td",{staticClass:"text-capitalize"},[t._v(t._s(e.name))]),t._v(" "),n("td",[t._v(t._s(e.email))]),t._v(" "),n("td",[t._v(t._s(e.mobile_number))]),t._v(" "),n("td",[t._v(t._s(e.message))]),t._v(" "),n("td",[n("a",{attrs:{href:"#"},on:{click:function(n){return t.deleteEnquiry(e.id)}}},[n("i",{staticClass:"fa fa-trash red"})])])])})),0)])])])])])])},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",[t._v("#")]),t._v(" "),n("th",[t._v("Name")]),t._v(" "),n("th",[t._v("Email")]),t._v(" "),n("th",[t._v("Mobile Number")]),t._v(" "),n("th",[t._v("Message")]),t._v(" "),n("th",[t._v("Action")])])])}]},282:function(t,e,n){"use strict";n.r(e);var i=n(131),r=n(90),a=n(0),s=Object(a.a)(r.a,i.a,i.b,!1,null,null,null);e.default=s.exports},90:function(t,e,n){"use strict";var i=n(91);e.a=i.a},91:function(t,e,n){"use strict";e.a={data:function(){return{enquiries:{},owner_id:this.$store.getters.currentUser.id}},created:function(){var t=this;this.loadEnquiry(),this.$on("deleteEnquiry",(function(){t.loadEnquiry()}))},methods:{loadEnquiry:function(){var t=this;axios.get("/api/allfrontenquiries/"+this.owner_id).then((function(e){t.enquiries=e.data})).catch((function(){}))},deleteEnquiry:function(t){var e=this;swal.fire({title:"Are you sure?",text:"You won't be able to revert this!",type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(n){n.value&&axios.delete("/api/enquiry/"+t).then((function(){swal.fire("Deleted!","Your file has been deleted.","success"),e.$emit("deleteEnquiry")})).catch((function(){swal("Failed!","There was something wrong.","warning")}))}))}}}}}]);