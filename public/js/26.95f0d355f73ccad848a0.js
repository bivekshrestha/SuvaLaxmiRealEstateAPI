(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{109:function(t,e,r){"use strict";var a=r(145);r.d(e,"a",(function(){return a.a})),r.d(e,"b",(function(){return a.b}))},145:function(t,e,r){"use strict";r.d(e,"a",(function(){return a})),r.d(e,"b",(function(){return s}));var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("div",{staticClass:"row mt-5"},[r("div",{staticClass:"col-md-12"},[r("div",{staticClass:"card"},[t._m(0),t._v(" "),r("div",{staticClass:"card-body table-responsive p-0"},[r("table",{staticClass:"table table-hover"},[t._m(1),t._v(" "),r("tbody",t._l(t.properties.data,(function(e){return r("tr",{key:e.id},[r("td",[t._v(t._s(e.id))]),t._v(" "),r("td",[t._v(t._s(e.purpose))]),t._v(" "),r("td",[t._v(t._s(e.type))]),t._v(" "),r("td",[t._v(t._s(e.category))]),t._v(" "),r("td",[t._v(t._s(e.location))]),t._v(" "),r("td",[t._v(t._s(e.price))]),t._v(" "),r("td",[t._v(t._s(e.price_unit))]),t._v(" "),r("td",[t._v(t._s(e.created_at))]),t._v(" "),r("td",[r("a",{attrs:{href:"#"},on:{click:function(r){return t.viewModal(e)}}},[r("i",{staticClass:"fa fa-eye blue"})]),t._v(" "),r("a",{attrs:{href:"#"},on:{click:function(r){return t.deleteProperty(e.id)}}},[r("i",{staticClass:"fa fa-trash red"})])])])})),0)])]),t._v(" "),r("div",{staticClass:"card-footer"},[r("pagination",{attrs:{data:t.properties},on:{"pagination-change-page":t.getResults}})],1)])])]),t._v(" "),r("div",{staticClass:"modal fade",attrs:{id:"showModal",tabindex:"-1",role:"dialog","aria-labelledby":"showModalLabel","aria-hidden":"true"}},[r("div",{staticClass:"modal-dialog modal-dialog-centered",attrs:{role:"document"}},[r("div",{staticClass:"modal-content"},[t._m(2),t._v(" "),r("div",{staticClass:"modal-body"},[r("table",{staticClass:"table table-hover table-sm"},[t._m(3),t._v(" "),r("tbody",[r("tr",[r("th",[t._v("ID")]),t._v(" "),r("td",[t._v(t._s(t.form.id))])]),t._v(" "),r("tr",[r("th",[t._v("Purpose")]),t._v(" "),r("td",[t._v(t._s(t.form.purpose))])]),t._v(" "),r("tr",[r("th",[t._v("Type")]),t._v(" "),r("td",[t._v(t._s(t.form.type))])]),t._v(" "),r("tr",[r("th",[t._v("Status")]),t._v(" "),r("td",[t._v(t._s(t.form.status))])]),t._v(" "),r("tr",[r("th",[t._v("Category")]),t._v(" "),r("td",[t._v(t._s(t.form.category))])]),t._v(" "),r("tr",[r("th",[t._v("Location")]),t._v(" "),r("td",[t._v(t._s(t.form.location))])]),t._v(" "),r("tr",[r("th",[t._v("Price")]),t._v(" "),r("td",[t._v(t._s(t.form.price))])]),t._v(" "),r("tr",[r("th",[t._v("Per Unit")]),t._v(" "),r("td",[t._v(t._s(t.form.price_unit))])]),t._v(" "),r("tr",[r("th",[t._v("Registered At")]),t._v(" "),r("td",[t._v(t._s(t.form.created_at))])]),t._v(" "),r("tr",[r("th",[t._v("Total Images")]),t._v(" "),r("td",[t._v(t._s(t.getImageCount()))])]),t._v(" "),r("tr",[r("th",[t._v("Title")]),t._v(" "),r("td",[t._v(t._s(t.form.title))])]),t._v(" "),r("tr",[r("th",[t._v("Description")]),t._v(" "),r("td",[t._v(t._s(t.form.description))])]),t._v(" "),r("tr",[r("th",[t._v("Area Total")]),t._v(" "),r("td",[t._v(t._s(t.form.area_total)+" Aana")])]),t._v(" "),r("tr",[r("th",[t._v("Area Built")]),t._v(" "),r("td",[t._v(t._s(t.form.area_built)+" Aana")])]),t._v(" "),r("tr",[r("th",[t._v("Face")]),t._v(" "),r("td",[t._v(t._s(t.form.face))])]),t._v(" "),r("tr",[r("th",[t._v("Road Size")]),t._v(" "),r("td",[t._v(t._s(t.form.road_size)+" Meters")])]),t._v(" "),r("tr",[r("th",[t._v("Road Type")]),t._v(" "),r("td",[t._v(t._s(t.form.road_type))])]),t._v(" "),r("tr",[r("th",[t._v("Name(Owner of Property)")]),t._v(" "),r("td",[t._v(t._s(t.owner.name))])]),t._v(" "),r("tr",[r("th",[t._v("Phone")]),t._v(" "),r("td",[t._v(t._s(t.owner.phone))])]),t._v(" "),r("tr",[r("th",[t._v("Email")]),t._v(" "),r("td",[t._v(t._s(t.owner.email))])]),t._v(" "),"land"!=t.form.category?[r("tr",[r("th",[t._v("Built Year  ")]),t._v(" "),r("td",[t._v(t._s(t.propAlt.built_year)+"  ")])]),t._v(" "),r("tr",[r("th",[t._v("Furnish Status")]),t._v(" "),r("td",[t._v(t._s(t.propAlt.furnish_status)+" ")])]),t._v(" "),r("tr",[r("th",[t._v("Kitchen")]),t._v(" "),r("td",[t._v(t._s(t.propAlt.kitchen)+" ")])]),t._v(" "),r("tr",[r("th",[t._v("Bedroom")]),t._v(" "),r("td",[t._v(t._s(t.propAlt.bedroom))])]),t._v(" "),r("tr",[r("th",[t._v("Bathroom")]),t._v(" "),r("td",[t._v(t._s(t.propAlt.bathroom)+"   ")])]),t._v(" "),r("tr",[r("th",[t._v("Living Room  ")]),t._v(" "),r("td",[t._v(t._s(t.propAlt.living_room))])]),t._v(" "),r("tr",[r("th",[t._v("Parking")]),t._v(" "),r("td",[t._v(t._s(t.propAlt.parking))])]),t._v(" "),r("tr",[r("th",[t._v("Amenities")]),t._v(" "),r("td",[t._v(t._s(t.propAlt.amenities))])]),t._v(" "),r("tr",[r("th",[t._v("Floors  ")]),t._v(" "),r("td",[t._v(t._s(t.propAlt.no_floors))])])]:t._e()],2)])]),t._v(" "),t._m(4)])])])])},s=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card-header"},[e("h3",{staticClass:"card-title"},[this._v("Properties Table")]),this._v(" "),e("div",{staticClass:"card-tools"})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",[r("tr",[r("th",[t._v("ID")]),t._v(" "),r("th",[t._v("Purpose")]),t._v(" "),r("th",[t._v("Type")]),t._v(" "),r("th",[t._v("Category")]),t._v(" "),r("th",[t._v("Location")]),t._v(" "),r("th",[t._v("Price")]),t._v(" "),r("th",[t._v("Per Unit")]),t._v(" "),r("th",[t._v("Registered At")]),t._v(" "),r("th",[t._v("Modify")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-header"},[e("h5",{staticClass:"modal-title",attrs:{id:"showModalLabel"}},[this._v("Properties Detail")]),this._v(" "),e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[this._v("×")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",[this._v("Particulars")]),this._v(" "),e("th",[this._v("Details")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-danger",attrs:{type:"button","data-dismiss":"modal"}},[this._v("Close "),e("i",{staticClass:"fas fa-times-circle"})])])}]},26:function(t,e,r){"use strict";var a=r(27);e.a=a.a},264:function(t,e,r){"use strict";r.r(e);var a=r(109),s=r(26),i=r(0),o=Object(i.a)(s.a,a.a,a.b,!1,null,null,null);e.default=o.exports},27:function(t,e,r){"use strict";e.a={name:"Propertyback.vue",data:function(){return{image:"",editMode:!1,properties:{},propAlt:{},owner:{},form:new Form({id:"",purpose:"",type:"",category:"",address:"",location:"",road:"",images:[],title:"",description:"",area_total:"",area_built:"",face:"",road_size:"",road_type:"",price:"",price_unit:"",owner_id:"",status:"",created_at:""})}},created:function(){var t=this;this.loadProperties(),this.$on("AfterCreate",(function(){t.loadProperties()}))},methods:{getResults:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;axios.get("/api/property?page="+e).then((function(e){t.properties=e.data}))},getImageCount:function(){return JSON.stringify(this.form.images).split(",").length},loadProperties:function(){var t=this;axios.get("/api/property").then((function(e){var r=e.data;return t.properties=r}))},newModal:function(){},getName:function(){},viewModal:function(t){var e=this;this.form.reset(),this.form.fill(t),axios.get("/api/propertyHouse/"+t.id).then((function(t){var r=t.data;return e.propAlt=r[0]})),axios.get("/api/user/"+t.owner_id).then((function(t){var r=t.data;return e.owner=r})),$("#showModal").modal("show")},deleteProperty:function(t){var e=this;swal.fire({title:"Are you sure?",text:"You won't be able to revert this!",type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(r){r.value&&e.form.delete("/api/property/"+t).then((function(){swal.fire("Deleted!","Your file has been deleted.","success"),e.$emit("AfterCreate")})).catch((function(){swal("Failed!","There was something wrong.","warning")}))}))}}}}}]);