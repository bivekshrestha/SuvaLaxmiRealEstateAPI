(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{123:function(t,e,n){"use strict";var i=n(159);n.d(e,"a",(function(){return i.a})),n.d(e,"b",(function(){return i.b}))},159:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return a}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row mt-5"},[n("div",{staticClass:"col-md-12"},[n("div",{staticClass:"card"},[t._m(0),t._v(" "),n("div",{staticClass:"card-body table-responsive p-0"},[n("table",{staticClass:"table table-hover"},[t._m(1),t._v(" "),n("tbody",t._l(t.enquiries,(function(e,i){return n("tr",{key:e.id},[n("td",[t._v(t._s(i+1))]),t._v(" "),n("td",{staticClass:"text-capitalize"},[t._v(t._s(e.name))]),t._v(" "),n("td",[t._v(t._s(e.email))]),t._v(" "),n("td",[t._v(t._s(e.mobile_number))]),t._v(" "),n("td",[t._v(t._s(e.message))]),t._v(" "),n("td",[n("a",{attrs:{href:"#"},on:{click:function(n){return t.deleteEnquiry(e.id)}}},[n("i",{staticClass:"fa fa-trash red"})])])])})),0)])])])])])},a=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card-header"},[e("h3",{staticClass:"card-title"},[this._v("Enquiries")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",[t._v("ID")]),t._v(" "),n("th",[t._v("Name")]),t._v(" "),n("th",[t._v("Email")]),t._v(" "),n("th",[t._v("Mobile Number")]),t._v(" "),n("th",[t._v("Message")]),t._v(" "),n("th",[t._v("Action")])])])}]},274:function(t,e,n){"use strict";n.r(e);var i=n(123),a=n(68),s=n(0),r=Object(s.a)(a.a,i.a,i.b,!1,null,null,null);e.default=r.exports},68:function(t,e,n){"use strict";var i=n(69);e.a=i.a},69:function(t,e,n){"use strict";e.a={data:function(){return{enquiries:{}}},created:function(){var t=this;this.loadEnquiry(),this.$on("deleteEnquiry",(function(){t.loadEnquiry()}))},methods:{deleteEnquiry:function(t){var e=this;swal.fire({title:"Are you sure?",text:"You won't be able to revert this!",type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(n){n.value&&axios.delete("/api/enquiry/"+t).then((function(){swal.fire("Deleted!","Your file has been deleted.","success"),e.$emit("deleteEnquiry")})).catch((function(){swal("Failed!","There was something wrong.","warning")}))}))},loadEnquiry:function(){var t=this;axios.get("/api/enquiry").then((function(e){t.enquiries=e.data})).catch((function(){}))}}}}}]);