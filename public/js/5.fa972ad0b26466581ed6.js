(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{107:function(t,a,s){"use strict";var e=s(140);s.d(a,"a",(function(){return e.a})),s.d(a,"b",(function(){return e.b}))},140:function(t,a,s){"use strict";s.d(a,"a",(function(){return e})),s.d(a,"b",(function(){return n}));var e=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[t._m(0),t._v(" "),e("section",{staticClass:"row justify-content-center m-auto property_details_searchbar"},[e("div",{staticClass:"col-12 col-sm-12 col-md-8 col-lg-8 text-center pt-2 margin-top-negative"},[e("div",{staticClass:"row justify-content-center pt-2"},[e("div",{staticClass:"col-12 col-sm-6 col-md-3 col-lg-3 mb-2"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.form.location,expression:"form.location"}],staticClass:"form-control select-height",attrs:{name:"location",id:"location"},on:{change:function(a){var s=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"location",a.target.multiple?s:s[0])}}},t._l(t.locations,(function(a){return e("option",{key:a.id,domProps:{value:a}},[t._v("\n                            "+t._s(a)+"\n                        ")])})),0)]),t._v(" "),e("div",{staticClass:"col-12 col-sm-6 col-md-3 col-lg-3 mb-2"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.form.purpose,expression:"form.purpose"}],staticClass:"form-control select-height",attrs:{name:"purpose"},on:{change:function(a){var s=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"purpose",a.target.multiple?s:s[0])}}},[e("option",{attrs:{value:"Sale"}},[t._v("Sale")]),t._v(" "),e("option",{attrs:{value:"Rent"}},[t._v("Rent")])])]),t._v(" "),e("div",{staticClass:"col-12 col-sm-6 col-md-3 col-lg-3 mb-2"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.form.category,expression:"form.category"}],staticClass:"form-control select-height",attrs:{name:"category"},on:{change:function(a){var s=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"category",a.target.multiple?s:s[0])}}},[e("option",{attrs:{value:"House"}},[t._v("House")]),t._v(" "),e("option",{attrs:{value:"Land"}},[t._v("Land")]),t._v(" "),e("option",{attrs:{value:"Apartment"}},[t._v("Apartment")])])]),t._v(" "),e("div",{staticClass:"col-12 col-sm-6 col-md-3 col-lg-3 mb-2"},[e("a",{staticClass:"nav-link btn btn-info btn-sm text-white select-height",attrs:{href:"#",id:"nav-btn"},on:{click:function(a){return a.preventDefault(),t.submitSearch()}}},[e("i",{staticClass:"fas fa-search mr-1 fa-sm text-white "}),t._v(" Search")])])])])]),t._v(" "),e("section",{staticClass:"wrapper"},[e("div",{staticClass:"container-fostrap"},[e("p",{staticClass:"categories-title font-weight-bold mt-5"},[t._v("CATEGORIES")]),t._v(" "),e("div",{staticClass:"content"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-xs-12 col-sm-6 col-md-4 col-lg-4"},[e("div",{staticClass:"card",on:{click:function(a){return a.preventDefault(),t.submitCategory("house")}}},[e("img",{staticClass:"img-card",attrs:{src:s(204),alt:"find home image"}}),t._v(" "),e("div",{staticClass:"centered font-weight-bold text-white"},[t._v("House")])])]),t._v(" "),e("div",{staticClass:"col-xs-12 col-sm-6 col-md-4 col-lg-4"},[e("div",{staticClass:"card",on:{click:function(a){return a.preventDefault(),t.submitCategory("land")}}},[e("img",{staticClass:"img-card",attrs:{src:s(205),alt:"find land image"}}),t._v(" "),e("div",{staticClass:"centered font-weight-bold text-white"},[t._v("Land")])])]),t._v(" "),e("div",{staticClass:"col-xs-12 col-sm-6 col-md-4 col-lg-4"},[e("div",{staticClass:"card",on:{click:function(a){return a.preventDefault(),t.submitCategory("apartment")}}},[e("img",{staticClass:"img-card",attrs:{src:s(206),alt:"find apartment image"}}),t._v(" "),e("div",{staticClass:"centered font-weight-bold text-white"},[t._v("Apartment")])])])])])])])]),t._v(" "),e("section",{staticClass:"section-padding",attrs:{id:"trending"}},[t._m(1),t._v(" "),e("div",{staticClass:"container"},[e("div",{staticClass:"owl-carousel owl-theme",attrs:{id:"owl-demo"}},t._l(t.trendingProperty,(function(a){return e("div",{staticClass:"card card-sm single-property-slide"},[e("router-link",{attrs:{to:{name:"singleproperty",params:{id:a.id}}}},[e("div",{staticClass:"sale-rent"},["sell"==a.purpose?[e("span",{staticClass:"sale"},[t._v("For Sale")])]:t._e(),t._v(" "),"rent"==a.purpose?[e("span",{staticClass:"rent"},[t._v("For Rent")])]:t._e()],2),t._v(" "),e("div",{staticClass:"time"},[e("span",[t._v(t._s(a.views)+" views")])]),t._v(" "),e("img",{staticClass:"card-img-top",attrs:{alt:"trending-image",src:t.getPropertyImage(a.thumbnail)}}),t._v(" "),e("div",{staticClass:"card-body"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 pb-2 d-flex flex-column"},[e("h5",{staticClass:"card-title"},[t._v(" "+t._s(a.title.substring(0,24)+".."))]),t._v(" "),e("p",[t._v(t._s(a.address)+","+t._s(a.location))])])]),t._v(" "),e("div",{staticClass:"row area"},[e("div",{staticClass:"col-12"},[e("p",{staticClass:"category"},[e("b",[t._v(t._s(a.category))])])])]),t._v(" "),e("div",{staticClass:"row area"},[e("div",{staticClass:"col-12"},[e("p",[e("b",[t._v("NPR. "+t._s(a.price)+"\n                                        "),null!=a.price_unit?[t._v("/"+t._s(a.price_unit)+"\n                                        ")]:t._e()],2)])])]),t._v(" "),e("div",{staticClass:"row area mt-3"},[e("div",{staticClass:"col-12 p-0 d-flex"},[e("i",{staticClass:"col-3 fas fa-shower card-icon"},[e("span",[t._v(t._s(a.bathroom))])]),t._v(" "),e("i",{staticClass:"col-3 fas fa-bed pr-0 card-icon"},[e("span",[t._v(t._s(a.bedroom))])]),t._v(" "),e("i",{staticClass:"pl-0 col-6 fas fa-clock card-icon"},[e("span",[t._v(t._s(a.time))])])])])])])],1)})),0)])]),t._v(" "),e("section",{staticClass:"section-padding",attrs:{id:"search-box"}},[e("div",{staticClass:"submit-property mb-4",attrs:{align:"center"}},[t._m(2),t._v(" "),e("a",{staticClass:"btn btn-info btn-sm text-white mt-1",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.submitproperty()}}},[t._v("SUBMIT\n                PROPERTY")]),t._v("  \n            "),e("a",{staticClass:"btn btn-outline-info btn-sm mt-1",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.browse()}}},[t._v(" BROWSE PROPERTY")])])]),t._v(" "),e("section",{staticClass:"latest-properties mb-6"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[t._m(3),t._v(" "),e("div",{staticClass:"col-lg-6 col-md-6 col-sm-6 trending-menu mt-2 pt-5"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 font-weight-bold trending-item"},[e("div",[e("div",{staticClass:"trending-link",on:{click:t.showHouse}},[t._v("HOUSE")])]),t._v(" "),e("div",[e("div",{staticClass:"trending-link trending-link-land",on:{click:t.showLand}},[t._v("LAND")])]),t._v(" "),e("div",[e("div",{staticClass:"trending-link ",on:{click:t.showApartment}},[t._v("APARTMENT")])])])])])])]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.ishouse,expression:"ishouse"}]},[e("div",{staticClass:"container"},[e("div",{staticClass:"row pt-3"},[t._l(t.latestProperties.house,(function(a,s){return e("div",{key:a.id,staticClass:"col-xl-3 col-md-6 col-lg-4 p-2"},[e("router-link",{attrs:{to:{name:"singleproperty",params:{id:a.id}}}},[e("div",{staticClass:"props card"},[e("div",{staticClass:"sale-rent"},["sell"==a.purpose?[e("span",{staticClass:"sale"},[t._v("For Sale")])]:t._e(),t._v(" "),"rent"==a.purpose?[e("span",{staticClass:"rent"},[t._v("For Rent")])]:t._e()],2),t._v(" "),e("div",{staticClass:"time"},[e("span",[t._v(t._s(a.views)+" views")])]),t._v(" "),e("img",{staticClass:"card-img-top",attrs:{alt:"image",src:t.getPropertyImage(a.thumbnail)}}),t._v(" "),e("div",{staticClass:"card-body"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 pb-2 d-flex flex-column"},[e("h5",{staticClass:"card-title"},[t._v(" "+t._s(a.title.substring(0,25)+".."))]),t._v(" "),e("p",[t._v(t._s(a.address)+","+t._s(a.location))])])]),t._v(" "),e("div",{staticClass:"row area"},[e("div",{staticClass:"col-12"},[e("p",{staticClass:"category"},[e("b",[t._v(t._s(a.category))])])])]),t._v(" "),e("div",{staticClass:"row area"},[e("div",{staticClass:"col-12"},[e("p",[e("b",[t._v("NPR. "+t._s(a.price)+"\n                                                "),null!=a.price_unit?[t._v("\n                                                    /"+t._s(a.price_unit)+"\n                                                ")]:t._e()],2)])])]),t._v(" "),e("div",{staticClass:"row area mt-3"},[e("div",{staticClass:"col-12 p-0 d-flex"},[e("i",{staticClass:"col-3 fas fa-shower card-icon"},[e("span",[t._v(t._s(a.bathroom))])]),t._v(" "),e("i",{staticClass:"col-3 fas fa-bed pr-0 card-icon"},[e("span",[t._v(t._s(a.bedroom))])]),t._v(" "),e("i",{staticClass:"pl-0 col-6 fas fa-clock card-icon"},[e("span",[t._v(t._s(a.time))])])])])])])])],1)})),t._v(" "),e("div",{staticClass:"col-xl-3 col-md-6 col-lg-4 p-2 view-all"},[e("div",{staticClass:"card",on:{click:function(a){return a.preventDefault(),t.submitCategory("house")}}},[t._m(4),t._v(" "),e("h2",[t._v("View All")])])])],2)])]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.island,expression:"island"}]},[e("div",{staticClass:"container"},[e("div",{staticClass:"row pt-3"},[t._l(t.latestProperties.land,(function(a,s){return e("div",{key:a.id,staticClass:"col-xl-3 col-md-6 col-lg-4 p-2"},[e("router-link",{attrs:{to:{name:"singleproperty",params:{id:a.id}}}},[e("div",{staticClass:"props card"},[e("div",{staticClass:"sale-rent"},["sell"==a.purpose?[e("span",{staticClass:"sale"},[t._v("For Sale")])]:t._e(),t._v(" "),"rent"==a.purpose?[e("span",{staticClass:"rent"},[t._v("For Rent")])]:t._e()],2),t._v(" "),e("div",{staticClass:"time"},[e("span",[t._v(t._s(a.views)+" views")])]),t._v(" "),e("img",{staticClass:"card-img-top",attrs:{alt:"image",src:t.getPropertyImage(a.thumbnail)}}),t._v(" "),e("div",{staticClass:"card-body"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 pb-2 d-flex flex-column"},[e("h5",{staticClass:"card-title"},[t._v(" "+t._s(a.title.substring(0,25)+".."))]),t._v(" "),e("p",[t._v(t._s(a.address)+","+t._s(a.location))])])]),t._v(" "),e("div",{staticClass:"row area"},[e("div",{staticClass:"col-12"},[e("p",{staticClass:"category"},[e("b",[t._v(t._s(a.category))])])])]),t._v(" "),e("div",{staticClass:"row area"},[e("div",{staticClass:"col-12"},[e("p",[e("b",[t._v("NPR. "+t._s(a.price)+"\n                                                "),null!=a.price_unit?[t._v("/\n                                                    "+t._s(a.price_unit)+"\n                                                ")]:t._e()],2)])])]),t._v(" "),e("div",{staticClass:"row area mt-3"},[e("div",{staticClass:"col-12 p-0 d-flex"},[e("i",{staticClass:"col-3 fas fa-shower card-icon"},[e("span",[t._v(t._s(a.bathroom))])]),t._v(" "),e("i",{staticClass:"col-3 fas fa-bed pr-0 card-icon"},[e("span",[t._v(t._s(a.bedroom))])]),t._v(" "),e("i",{staticClass:"pl-0 col-6 fas fa-clock card-icon"},[e("span",[t._v(t._s(a.time))])])])])])])])],1)})),t._v(" "),e("div",{staticClass:"col-xl-3 col-md-6 col-lg-4 p-2 view-all"},[e("div",{staticClass:"card",on:{click:function(a){return a.preventDefault(),t.submitCategory("land")}}},[t._m(5),t._v(" "),e("h2",[t._v("View All")])])])],2)])]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.isapartment,expression:"isapartment"}]},[e("div",{staticClass:"container"},[e("div",{staticClass:"row pt-3"},[t._l(t.latestProperties.apartment,(function(a,s){return e("div",{key:a.id,staticClass:"col-xl-3 col-md-6 col-lg-4 p-2"},[e("router-link",{attrs:{to:{name:"singleproperty",params:{id:a.id}}}},[e("div",{staticClass:"props card"},[e("div",{staticClass:"sale-rent"},["sell"==a.purpose?[e("span",{staticClass:"sale"},[t._v("For Sale")])]:t._e(),t._v(" "),"rent"==a.purpose?[e("span",{staticClass:"rent"},[t._v("For Rent")])]:t._e()],2),t._v(" "),e("div",{staticClass:"time"},[e("span",[t._v(t._s(a.views)+" views")])]),t._v(" "),e("img",{staticClass:"card-img-top",attrs:{alt:"image",src:t.getPropertyImage(a.thumbnail)}}),t._v(" "),e("div",{staticClass:"card-body"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 pb-2 d-flex flex-column"},[e("h5",{staticClass:"card-title"},[t._v(" "+t._s(a.title.substring(0,25)+".."))]),t._v(" "),e("p",[t._v(t._s(a.address)+","+t._s(a.location))])])]),t._v(" "),e("div",{staticClass:"row area"},[e("div",{staticClass:"col-12"},[e("p",{staticClass:"category"},[e("b",[t._v(t._s(a.category))])])])]),t._v(" "),e("div",{staticClass:"row area"},[e("div",{staticClass:"col-12"},[e("p",[e("b",[t._v("NPR. "+t._s(a.price)+"\n                                                "),null!=a.price_unit?[t._v("/\n                                                    "+t._s(a.price_unit)+"\n                                                ")]:t._e()],2)])])]),t._v(" "),e("div",{staticClass:"row area mt-3"},[e("div",{staticClass:"col-12 p-0 d-flex"},[e("i",{staticClass:"col-3 fas fa-shower card-icon"},[e("span",[t._v(t._s(a.bathroom))])]),t._v(" "),e("i",{staticClass:"col-3 fas fa-bed pr-0 card-icon"},[e("span",[t._v(t._s(a.bedroom))])]),t._v(" "),e("i",{staticClass:"pl-0 col-6 fas fa-clock card-icon"},[e("span",[t._v(t._s(a.time))])])])])])])])],1)})),t._v(" "),e("div",{staticClass:"col-xl-3 col-md-6 col-lg-4 p-2 view-all"},[e("div",{staticClass:"card",on:{click:function(a){return a.preventDefault(),t.submitCategory("apartment")}}},[t._m(6),t._v(" "),e("h2",[t._v("View All")])])])],2)])])]),t._v(" "),e("div",{staticClass:"container-fluid mt-5"},[e("div",{staticClass:"row text-center let-us-know  pt-5 pb-5 "},[t._m(7),t._v(" "),e("div",{staticClass:"col-lg-6  let-us-know-btn"},[e("router-link",{staticClass:"btn btn-info btn-sm text-white",staticStyle:{padding:"13px"},attrs:{to:"/contact",tag:"a","active-class":"active",exact:""}},[t._v("\n                    LET US KNOW\n                ")])],1)])])])},n=[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{attrs:{id:"bg"}},[a("img",{staticClass:"temple mt-5",attrs:{src:s(207),alt:"home page image"}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"trending-properties"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-7  col-md-7 col-sm-6"},[a("p",{staticClass:"trending-properties-title font-weight-bold"},[this._v("TRENDING PROPERTIES")]),this._v(" "),a("hr",{attrs:{width:"15%",align:"left",size:"30"}})])])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h6",{staticClass:"submit-question ",attrs:{align:"center"}},[this._v("Looking to Buy a new property or Sell an existing one?"),a("br"),this._v("\n                Real Homes provides an awesome solution!")])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"col-lg-6  col-md-6 col-sm-6"},[a("p",{staticClass:"trending-properties-title font-weight-bold mt-2 pt-5"},[this._v("LATEST PROPERTIES")]),this._v(" "),a("hr",{attrs:{width:"15%",align:"left",size:"30"}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"arrow"},[a("i",{staticClass:"fas fa-arrow-right"})])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"arrow"},[a("i",{staticClass:"fas fa-arrow-right"})])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"arrow"},[a("i",{staticClass:"fas fa-arrow-right"})])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"col-lg-6 "},[a("h6",{staticClass:"letknow"},[this._v("Find a home that's right for you "),a("br"),this._v(" "),a("span",{staticClass:"letusknow ml-5"},[this._v("Don't worry, we've done this many times")])])])}]},20:function(t,a,s){"use strict";var e=s(21);a.a=e.a},204:function(t,a){t.exports="/images/house1.png?65809733408115c47aa1fd3d6dbf1412"},205:function(t,a){t.exports="/images/land.png?eb8e6af25b2af0c032b747051ad8b262"},206:function(t,a){t.exports="/images/apartment.png?76201b7f675c0b2b4b30371e1e5f841b"},207:function(t,a){t.exports="/images/temple3.jpg?d4111035f5f42f115ea64aceec803b27"},208:function(t,a,s){"use strict";var e=s(22);s.n(e).a},209:function(t,a,s){(t.exports=s(1)(!1)).push([t.i,".view-all[data-v-03fc452e] {\n  cursor: pointer;\n}\n.view-all .card[data-v-03fc452e] {\n  height: 96%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.view-all .card .arrow[data-v-03fc452e] {\n  height: 3rem;\n  width: 3rem;\n  border-radius: 50%;\n  border: 1px solid;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.props[data-v-03fc452e] {\n  position: relative;\n  overflow: hidden;\n}\n.category[data-v-03fc452e] {\n  text-transform: uppercase;\n}\n.time span[data-v-03fc452e] {\n  padding: 2px 10px;\n  color: white;\n  position: absolute;\n  font-size: 12px;\n  outline: none;\n  top: 1rem;\n  right: 1rem;\n  background: #38A1DA;\n}\n.sale-rent .sale[data-v-03fc452e], .sale-rent .rent[data-v-03fc452e] {\n  padding: 5px 40px;\n  color: white;\n  position: absolute;\n  font-size: 12px;\n  outline: none;\n  top: 0.7rem;\n  -webkit-transform: rotate(321deg);\n          transform: rotate(321deg);\n  left: -2rem;\n}\n.sale-rent .sale[data-v-03fc452e] {\n  background: #138655;\n}\n.sale-rent .rent[data-v-03fc452e] {\n  background: #BA1518;\n}\ni span[data-v-03fc452e] {\n  margin-left: 5px;\n  color: black;\n}\n.select-height[data-v-03fc452e] {\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\n}\n.margin-top-negative[data-v-03fc452e] {\n  margin-top: -3vh;\n}\n@media (min-width: 1200px) {\n.margin-top-negative[data-v-03fc452e] {\n    margin-top: -6vh;\n}\n}\n.trending-item[data-v-03fc452e] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n}\n@media (max-width: 992px) {\n.trending-item .trending-link-land[data-v-03fc452e] {\n    margin: 0 3vh;\n}\n}\n@media (min-width: 992px) and (max-width: 1100px) {\n.trending-item .trending-link-land[data-v-03fc452e] {\n    margin: 0 6vh;\n}\n}\n@media (min-width: 1200px) {\n.trending-item .trending-link-land[data-v-03fc452e] {\n    margin: 0 10vh;\n}\n}\n.section-padding[data-v-03fc452e] {\n  padding: 10px 0;\n}\n\n/*landing picture*/\n.temple[data-v-03fc452e] {\n  height: 100%;\n  width: 100%;\n}\n\n/*categories title*/\n.categories-title[data-v-03fc452e] {\n  font-size: 1.2em;\n}\n\n/*categories vitra ko text*/\n.centered[data-v-03fc452e] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  font-size: 25px;\n}\n.wrapper[data-v-03fc452e] {\n  display: table;\n  height: 100%;\n  width: 100%;\n}\n.container-fostrap[data-v-03fc452e] {\n  display: table-cell;\n  padding: 1em;\n  text-align: center;\n  vertical-align: middle;\n}\n\n/*buttons ma shadow*/\n.btn[data-v-03fc452e] {\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n\n/*horizontal ruler*/\nhr[data-v-03fc452e] {\n  border: 1px solid #38A1DA;\n  border-radius: 1px;\n}\n\n/*trending properties ko title*/\n.trending-properties-title[data-v-03fc452e] {\n  font-size: 1.2rem;\n}\n.single-property-slide[data-v-03fc452e] {\n  padding: 0;\n}\n@media (min-width: 768px) {\n.single-property-slide[data-v-03fc452e] {\n    margin-right: 20px;\n}\n}\n@media (max-width: 767px) {\n.single-property-slide[data-v-03fc452e] {\n    margin-top: 25px;\n}\n}\n.single-property-slide img[data-v-03fc452e] {\n  height: 100%;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\nh5[data-v-03fc452e] {\n  color: #38A1DA;\n}\n\n/*let us know section*/\n.letknow[data-v-03fc452e] {\n  font-size: 26px;\n}\n.letusknow[data-v-03fc452e] {\n  font-size: 18px;\n}\n.let-us-know[data-v-03fc452e] {\n  background-color: #D4E0E6;\n}\n\n/*cards*/\n.card-icon[data-v-03fc452e] {\n  color: #38A1DA;\n}\na[data-v-03fc452e] {\n  text-decoration: none;\n}\n.card[data-v-03fc452e] {\n  background-color: #fff;\n  border-radius: 2px;\n  box-shadow: none;\n  overflow: hidden;\n}\n.card p[data-v-03fc452e] {\n  color: #435061;\n  margin: 0 !important;\n}\n.card[data-v-03fc452e]:hover {\n  box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n.img-card[data-v-03fc452e] {\n  width: 100%;\n  display: block;\n  overflow: hidden;\n}\n.card-title[data-v-03fc452e] {\n  color: #435061;\n  font-size: 18px;\n  font-weight: bold;\n}\n.card-body[data-v-03fc452e] {\n  padding: 20px 15px !important;\n}\n.description-1[data-v-03fc452e], .description-2[data-v-03fc452e] {\n  display: inline;\n  color: #435061;\n}\n.description-2[data-v-03fc452e] {\n  font-weight: bold;\n}\n\n/*trending-properties ko menu*/\n.trending-properties[data-v-03fc452e] {\n  padding-top: 30px;\n}\n.trending-menu .trending-item .trending-link[data-v-03fc452e]:hover {\n  color: #38A1DA;\n  cursor: pointer;\n}\n.trending-menu .trending-item .trending-link[data-v-03fc452e]:focus {\n  color: #38A1DA;\n}\n.trending-menu .trending-item:active .trending-link[data-v-03fc452e] {\n  color: #38A1DA;\n}\n\n/*media queries*/\n@media (min-width: 577px) and (max-width: 768px) {\n.property_details_searchbar[data-v-03fc452e] {\n    margin-left: 5rem;\n}\n}\n@media (min-width: 1200px) {\n  /*let us know section ko button*/\n.let-us-know-btn[data-v-03fc452e] {\n    margin-left: -3rem;\n}\n}\n.container[data-v-03fc452e] {\n  max-width: 90%;\n}",""])},21:function(t,a,s){"use strict";a.a={name:"Home.vue",data:function(){return{ishouse:!0,island:!1,isapartment:!1,locations:"",latestProperties:{land:{},house:{},apartment:{}},trendingProperty:[],form:new Form({location:"Kathmandu",purpose:"Sale",category:"House"})}},created:function(){var t=this;window.scrollTo(0,0),axios.get("/api/latestproperty").then((function(a){t.latestProperties.land=a.data[0],t.latestProperties.house=a.data[1],t.latestProperties.apartment=a.data[2]})).catch((function(){})),axios.get("/api/location").then((function(a){t.locations=a.data}))},mounted:function(){var t=this;axios.get("/api/trending").then((function(a){t.trendingProperty=a.data,Vue.nextTick(function(){t.installOwlCarousel()}.bind(t))})).catch((function(t){t&&console.log(t)}))},methods:{submitSearch:function(){this.$router.push({name:"property",params:{category:this.form.category,purpose:this.form.purpose,location:this.form.location}})},submitCategory:function(t){this.$router.push({name:"property",params:{category:t}})},getLatestPropertyImage:function(t,a){return"house"===t?"/img/thumbnail/"+this.latestProperties.house[a].images.split(",",1):"land"===t?"/img/thumbnail/"+this.latestProperties.land[a].images.split(",",1):"/img/thumbnail/"+this.latestProperties.apartment[a].images.split(",",1)},showHouse:function(){this.ishouse=!0,this.island=!1,this.isapartment=!1},showLand:function(){this.ishouse=!1,this.island=!0,this.isapartment=!1},showApartment:function(){this.ishouse=!1,this.island=!1,this.isapartment=!0},getPropertyImage:function(t){return"/img/thumbnail/"+t},installOwlCarousel:function(){jQuery(document).ready((function(){jQuery("#owl-demo").owlCarousel({autoplay:!1,loop:!0,autoplayTimeout:2e3,autoplayHoverPause:!0,responsiveClass:!0,responsive:{0:{items:1,nav:!0},768:{items:2,nav:!0},1024:{items:3,nav:!0},1100:{items:4,nav:!0}}})}))},submitproperty:function(){this.$store.getters.isLoggedIn?this.$router.push({name:"addproperty"}):Toast.fire({type:"warning",title:"You must login to add property"})},browse:function(){this.$router.push({name:"property"})}}}},22:function(t,a,s){var e=s(209);"string"==typeof e&&(e=[[t.i,e,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};s(2)(e,n);e.locals&&(t.exports=e.locals)},262:function(t,a,s){"use strict";s.r(a);var e=s(107),n=s(20),i=(s(208),s(0)),r=Object(i.a)(n.a,e.a,e.b,!1,null,"03fc452e",null);a.default=r.exports}}]);