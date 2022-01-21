(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Frontend/Home.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Frontend/Home.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Home.vue",
  data: function data() {
    return {
      ishouse: true,
      island: false,
      isapartment: false,
      locations: '',
      latestProperties: {
        land: {},
        house: {},
        apartment: {}
      },
      trendingProperty: [],
      form: new Form({
        location: 'Kathmandu',
        purpose: 'Sale',
        category: 'House'
      })
    };
  },
  created: function created() {
    var _this = this;

    window.scrollTo(0, 0);
    axios.get('/api/latestproperty').then(function (data) {
      _this.latestProperties.land = data.data[0];
      _this.latestProperties.house = data.data[1];
      _this.latestProperties.apartment = data.data[2];
      console.log(_this.latestProperties.land);
    })["catch"](function () {});
    axios.get('/api/location').then(function (data) {
      _this.locations = data.data;
    });
  },
  mounted: function mounted() {
    var vm = this;
    axios.get('/api/trending').then(function (res) {
      vm.trendingProperty = res.data;
      Vue.nextTick(function () {
        vm.installOwlCarousel();
      }.bind(vm));
    })["catch"](function (err) {
      if (err) console.log(err);
    });
  },
  methods: {
    //redirect to property page section
    submitSearch: function submitSearch() {
      this.$router.push({
        name: 'property',
        params: {
          category: this.form.category,
          purpose: this.form.purpose,
          location: this.form.location
        }
      });
    },
    submitCategory: function submitCategory(name) {
      this.$router.push({
        name: 'property',
        params: {
          category: name
        }
      });
    },
    //end of redirect page
    getLatestPropertyImage: function getLatestPropertyImage(cat, index) {
      if (cat === 'house') {
        return "/img/thumbnail/" + this.latestProperties.house[index].images.split(',', 1);
      } else if (cat === 'land') {
        return "/img/thumbnail/" + this.latestProperties.land[index].images.split(',', 1);
      } else {
        return "/img/thumbnail/" + this.latestProperties.apartment[index].images.split(',', 1);
      }

      return "/img/singleproperty/house-2.png";
    },
    showHouse: function showHouse() {
      this.ishouse = true;
      this.island = false;
      this.isapartment = false;
    },
    showLand: function showLand() {
      this.ishouse = false;
      this.island = true;
      this.isapartment = false;
    },
    showApartment: function showApartment() {
      this.ishouse = false;
      this.island = false;
      this.isapartment = true;
    },
    getPropertyImage: function getPropertyImage(src) {
      return "/img/thumbnail/" + src;
    },
    installOwlCarousel: function installOwlCarousel() {
      jQuery(document).ready(function () {
        jQuery("#owl-demo").owlCarousel({
          autoplay: false,
          loop: true,
          autoplayTimeout: 2000,
          autoplayHoverPause: true,
          responsiveClass: true,
          responsive: {
            0: {
              items: 1,
              nav: true
            },
            768: {
              items: 2,
              nav: true
            },
            1024: {
              items: 3,
              nav: true
            },
            1100: {
              items: 4,
              nav: true
            }
          }
        });
      });
    },
    submitproperty: function submitproperty() {
      if (this.$store.getters.isLoggedIn) {
        this.$router.push({
          name: 'addproperty'
        });
      } else {
        Toast.fire({
          type: 'warning',
          title: 'You must login to add property'
        });
      }
    },
    browse: function browse() {
      this.$router.push({
        name: 'property'
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Frontend/Home.vue?vue&type=style&index=0&id=2d977481&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Frontend/Home.vue?vue&type=style&index=0&id=2d977481&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".view-all[data-v-2d977481] {\n  cursor: pointer;\n}\n.view-all .card[data-v-2d977481] {\n  height: 96%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.view-all .card .arrow[data-v-2d977481] {\n  height: 3rem;\n  width: 3rem;\n  border-radius: 50%;\n  border: 1px solid;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.props[data-v-2d977481] {\n  position: relative;\n  overflow: hidden;\n}\n.category[data-v-2d977481] {\n  text-transform: uppercase;\n}\n.time span[data-v-2d977481] {\n  padding: 2px 10px;\n  color: white;\n  position: absolute;\n  font-size: 12px;\n  outline: none;\n  top: 1rem;\n  right: 1rem;\n  background: #38A1DA;\n}\n.sale-rent .sale[data-v-2d977481], .sale-rent .rent[data-v-2d977481] {\n  padding: 5px 40px;\n  color: white;\n  position: absolute;\n  font-size: 12px;\n  outline: none;\n  top: 0.7rem;\n  -webkit-transform: rotate(321deg);\n          transform: rotate(321deg);\n  left: -2rem;\n}\n.sale-rent .sale[data-v-2d977481] {\n  background: #138655;\n}\n.sale-rent .rent[data-v-2d977481] {\n  background: #BA1518;\n}\ni span[data-v-2d977481] {\n  margin-left: 5px;\n  color: black;\n}\n.select-height[data-v-2d977481] {\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\n}\n.margin-top-negative[data-v-2d977481] {\n  margin-top: -3vh;\n}\n@media (min-width: 1200px) {\n.margin-top-negative[data-v-2d977481] {\n    margin-top: -6vh;\n}\n}\n.trending-item[data-v-2d977481] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n}\n@media (max-width: 992px) {\n.trending-item .trending-link-land[data-v-2d977481] {\n    margin: 0 3vh;\n}\n}\n@media (min-width: 992px) and (max-width: 1100px) {\n.trending-item .trending-link-land[data-v-2d977481] {\n    margin: 0 6vh;\n}\n}\n@media (min-width: 1200px) {\n.trending-item .trending-link-land[data-v-2d977481] {\n    margin: 0 10vh;\n}\n}\n.section-padding[data-v-2d977481] {\n  padding: 10px 0;\n}\n\n/*landing picture*/\n.temple[data-v-2d977481] {\n  height: 100%;\n  width: 100%;\n}\n\n/*categories title*/\n.categories-title[data-v-2d977481] {\n  font-size: 1.2em;\n}\n\n/*categories vitra ko text*/\n.centered[data-v-2d977481] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  font-size: 25px;\n}\n.wrapper[data-v-2d977481] {\n  display: table;\n  height: 100%;\n  width: 100%;\n}\n.container-fostrap[data-v-2d977481] {\n  display: table-cell;\n  padding: 1em;\n  text-align: center;\n  vertical-align: middle;\n}\n\n/*buttons ma shadow*/\n.btn[data-v-2d977481] {\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n\n/*horizontal ruler*/\nhr[data-v-2d977481] {\n  border: 1px solid #38A1DA;\n  border-radius: 1px;\n}\n\n/*trending properties ko title*/\n.trending-properties-title[data-v-2d977481] {\n  font-size: 1.2rem;\n}\n.single-property-slide[data-v-2d977481] {\n  padding: 0;\n}\n@media (min-width: 768px) {\n.single-property-slide[data-v-2d977481] {\n    margin-right: 20px;\n}\n}\n@media (max-width: 767px) {\n.single-property-slide[data-v-2d977481] {\n    margin-top: 25px;\n}\n}\n.single-property-slide img[data-v-2d977481] {\n  height: 100%;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\nh5[data-v-2d977481] {\n  color: #38A1DA;\n}\n\n/*let us know section*/\n.letknow[data-v-2d977481] {\n  font-size: 26px;\n}\n.letusknow[data-v-2d977481] {\n  font-size: 18px;\n}\n.let-us-know[data-v-2d977481] {\n  background-color: #D4E0E6;\n}\n\n/*cards*/\n.card-icon[data-v-2d977481] {\n  color: #38A1DA;\n}\na[data-v-2d977481] {\n  text-decoration: none;\n}\n.card[data-v-2d977481] {\n  background-color: #fff;\n  border-radius: 2px;\n  box-shadow: none;\n  overflow: hidden;\n}\n.card p[data-v-2d977481] {\n  color: #435061;\n  margin: 0 !important;\n}\n.card[data-v-2d977481]:hover {\n  box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n.img-card[data-v-2d977481] {\n  width: 100%;\n  display: block;\n  overflow: hidden;\n}\n.card-title[data-v-2d977481] {\n  color: #435061;\n  font-size: 18px;\n  font-weight: bold;\n}\n.card-body[data-v-2d977481] {\n  padding: 20px 15px !important;\n}\n.description-1[data-v-2d977481], .description-2[data-v-2d977481] {\n  display: inline;\n  color: #435061;\n}\n.description-2[data-v-2d977481] {\n  font-weight: bold;\n}\n\n/*trending-properties ko menu*/\n.trending-properties[data-v-2d977481] {\n  padding-top: 30px;\n}\n.trending-menu .trending-item .trending-link[data-v-2d977481]:hover {\n  color: #38A1DA;\n  cursor: pointer;\n}\n.trending-menu .trending-item .trending-link[data-v-2d977481]:focus {\n  color: #38A1DA;\n}\n.trending-menu .trending-item:active .trending-link[data-v-2d977481] {\n  color: #38A1DA;\n}\n\n/*media queries*/\n@media (min-width: 577px) and (max-width: 768px) {\n.property_details_searchbar[data-v-2d977481] {\n    margin-left: 5rem;\n}\n}\n@media (min-width: 1200px) {\n  /*let us know section ko button*/\n.let-us-know-btn[data-v-2d977481] {\n    margin-left: -3rem;\n}\n}\n.container[data-v-2d977481] {\n  max-width: 90%;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Frontend/Home.vue?vue&type=style&index=0&id=2d977481&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Frontend/Home.vue?vue&type=style&index=0&id=2d977481&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=style&index=0&id=2d977481&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Frontend/Home.vue?vue&type=style&index=0&id=2d977481&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Frontend/Home.vue?vue&type=template&id=2d977481&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Frontend/Home.vue?vue&type=template&id=2d977481&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _vm._m(0),
    _vm._v(" "),
    _c(
      "section",
      {
        staticClass:
          "row justify-content-center m-auto property_details_searchbar"
      },
      [
        _c(
          "div",
          {
            staticClass:
              "col-12 col-sm-12 col-md-8 col-lg-8 text-center pt-2 margin-top-negative"
          },
          [
            _c("div", { staticClass: "row justify-content-center pt-2" }, [
              _c(
                "div",
                { staticClass: "col-12 col-sm-6 col-md-3 col-lg-3 mb-2" },
                [
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.location,
                          expression: "form.location"
                        }
                      ],
                      staticClass: "form-control select-height",
                      attrs: { name: "location", id: "location" },
                      on: {
                        change: function($event) {
                          var $$selectedVal = Array.prototype.filter
                            .call($event.target.options, function(o) {
                              return o.selected
                            })
                            .map(function(o) {
                              var val = "_value" in o ? o._value : o.value
                              return val
                            })
                          _vm.$set(
                            _vm.form,
                            "location",
                            $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          )
                        }
                      }
                    },
                    _vm._l(_vm.locations, function(location) {
                      return _c(
                        "option",
                        { key: location.id, domProps: { value: location } },
                        [
                          _vm._v(
                            "\n                            " +
                              _vm._s(location) +
                              "\n                        "
                          )
                        ]
                      )
                    }),
                    0
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col-12 col-sm-6 col-md-3 col-lg-3 mb-2" },
                [
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.purpose,
                          expression: "form.purpose"
                        }
                      ],
                      staticClass: "form-control select-height",
                      attrs: { name: "purpose" },
                      on: {
                        change: function($event) {
                          var $$selectedVal = Array.prototype.filter
                            .call($event.target.options, function(o) {
                              return o.selected
                            })
                            .map(function(o) {
                              var val = "_value" in o ? o._value : o.value
                              return val
                            })
                          _vm.$set(
                            _vm.form,
                            "purpose",
                            $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          )
                        }
                      }
                    },
                    [
                      _c("option", { attrs: { value: "Sale" } }, [
                        _vm._v("Sale")
                      ]),
                      _vm._v(" "),
                      _c("option", { attrs: { value: "Rent" } }, [
                        _vm._v("Rent")
                      ])
                    ]
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col-12 col-sm-6 col-md-3 col-lg-3 mb-2" },
                [
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.category,
                          expression: "form.category"
                        }
                      ],
                      staticClass: "form-control select-height",
                      attrs: { name: "category" },
                      on: {
                        change: function($event) {
                          var $$selectedVal = Array.prototype.filter
                            .call($event.target.options, function(o) {
                              return o.selected
                            })
                            .map(function(o) {
                              var val = "_value" in o ? o._value : o.value
                              return val
                            })
                          _vm.$set(
                            _vm.form,
                            "category",
                            $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          )
                        }
                      }
                    },
                    [
                      _c("option", { attrs: { value: "House" } }, [
                        _vm._v("House")
                      ]),
                      _vm._v(" "),
                      _c("option", { attrs: { value: "Land" } }, [
                        _vm._v("Land")
                      ]),
                      _vm._v(" "),
                      _c("option", { attrs: { value: "Apartment" } }, [
                        _vm._v("Apartment")
                      ])
                    ]
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col-12 col-sm-6 col-md-3 col-lg-3 mb-2" },
                [
                  _c(
                    "a",
                    {
                      staticClass:
                        "nav-link btn btn-info btn-sm text-white select-height",
                      attrs: { href: "#", id: "nav-btn" },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.submitSearch()
                        }
                      }
                    },
                    [
                      _c("i", {
                        staticClass: "fas fa-search mr-1 fa-sm text-white "
                      }),
                      _vm._v(" Search")
                    ]
                  )
                ]
              )
            ])
          ]
        )
      ]
    ),
    _vm._v(" "),
    _c("section", { staticClass: "wrapper" }, [
      _c("div", { staticClass: "container-fostrap" }, [
        _c("p", { staticClass: "categories-title font-weight-bold mt-5" }, [
          _vm._v("CATEGORIES")
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "content" }, [
          _c("div", { staticClass: "container" }, [
            _c("div", { staticClass: "row" }, [
              _c(
                "div",
                { staticClass: "col-xs-12 col-sm-6 col-md-4 col-lg-4" },
                [
                  _c(
                    "div",
                    {
                      staticClass: "card",
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.submitCategory("house")
                        }
                      }
                    },
                    [
                      _c("img", {
                        staticClass: "img-card",
                        attrs: {
                          src: __webpack_require__(/*! ../../../../public/img/global/house1.png */ "./public/img/global/house1.png"),
                          alt: "find home image"
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "centered font-weight-bold text-white" },
                        [_vm._v("House")]
                      )
                    ]
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col-xs-12 col-sm-6 col-md-4 col-lg-4" },
                [
                  _c(
                    "div",
                    {
                      staticClass: "card",
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.submitCategory("land")
                        }
                      }
                    },
                    [
                      _c("img", {
                        staticClass: "img-card",
                        attrs: {
                          src: __webpack_require__(/*! ../../../../public/img/global/land.png */ "./public/img/global/land.png"),
                          alt: "find land image"
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "centered font-weight-bold text-white" },
                        [_vm._v("Land")]
                      )
                    ]
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col-xs-12 col-sm-6 col-md-4 col-lg-4" },
                [
                  _c(
                    "div",
                    {
                      staticClass: "card",
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.submitCategory("apartment")
                        }
                      }
                    },
                    [
                      _c("img", {
                        staticClass: "img-card",
                        attrs: {
                          src: __webpack_require__(/*! ../../../../public/img/global/apartment.png */ "./public/img/global/apartment.png"),
                          alt: "find apartment image"
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "centered font-weight-bold text-white" },
                        [_vm._v("Apartment")]
                      )
                    ]
                  )
                ]
              )
            ])
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _c(
      "section",
      { staticClass: "section-padding", attrs: { id: "trending" } },
      [
        _vm._m(1),
        _vm._v(" "),
        _c("div", { staticClass: "container" }, [
          _c(
            "div",
            {
              staticClass: "owl-carousel owl-theme",
              attrs: { id: "owl-demo" }
            },
            _vm._l(_vm.trendingProperty, function(trending) {
              return _c(
                "div",
                { staticClass: "card card-sm single-property-slide" },
                [
                  _c(
                    "router-link",
                    {
                      attrs: {
                        to: {
                          name: "singleproperty",
                          params: { id: trending.id }
                        }
                      }
                    },
                    [
                      _c(
                        "div",
                        { staticClass: "sale-rent" },
                        [
                          trending.purpose == "sell"
                            ? [
                                _c("span", { staticClass: "sale" }, [
                                  _vm._v("For Sale")
                                ])
                              ]
                            : _vm._e(),
                          _vm._v(" "),
                          trending.purpose == "rent"
                            ? [
                                _c("span", { staticClass: "rent" }, [
                                  _vm._v("For Rent")
                                ])
                              ]
                            : _vm._e()
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "time" }, [
                        _c("span", [_vm._v(_vm._s(trending.views) + " views")])
                      ]),
                      _vm._v(" "),
                      _c("img", {
                        staticClass: "card-img-top",
                        attrs: {
                          alt: "trending-image",
                          src: _vm.getPropertyImage(trending.thumbnail)
                        }
                      }),
                      _vm._v(" "),
                      _c("div", { staticClass: "card-body" }, [
                        _c("div", { staticClass: "row" }, [
                          _c(
                            "div",
                            { staticClass: "col-12 pb-2 d-flex flex-column" },
                            [
                              _c("h5", { staticClass: "card-title" }, [
                                _vm._v(
                                  " " +
                                    _vm._s(
                                      trending.title.substring(0, 24) + ".."
                                    )
                                )
                              ]),
                              _vm._v(" "),
                              _c("p", [
                                _vm._v(
                                  _vm._s(trending.address) +
                                    "," +
                                    _vm._s(trending.location)
                                )
                              ])
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "row area" }, [
                          _c("div", { staticClass: "col-12" }, [
                            _c("p", { staticClass: "category" }, [
                              _c("b", [_vm._v(_vm._s(trending.category))])
                            ])
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "row area" }, [
                          _c("div", { staticClass: "col-12" }, [
                            _c("p", [
                              _c(
                                "b",
                                [
                                  _vm._v(
                                    "NPR. " +
                                      _vm._s(trending.price) +
                                      "\n                                        "
                                  ),
                                  trending.price_unit != null
                                    ? [
                                        _vm._v(
                                          "/" +
                                            _vm._s(trending.price_unit) +
                                            "\n                                        "
                                        )
                                      ]
                                    : _vm._e()
                                ],
                                2
                              )
                            ])
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "row area mt-3" }, [
                          _c("div", { staticClass: "col-12 p-0 d-flex" }, [
                            _c(
                              "i",
                              { staticClass: "col-3 fas fa-shower card-icon" },
                              [_c("span", [_vm._v(_vm._s(trending.bathroom))])]
                            ),
                            _vm._v(" "),
                            _c(
                              "i",
                              {
                                staticClass: "col-3 fas fa-bed pr-0 card-icon"
                              },
                              [_c("span", [_vm._v(_vm._s(trending.bedroom))])]
                            ),
                            _vm._v(" "),
                            _c(
                              "i",
                              {
                                staticClass: "pl-0 col-6 fas fa-clock card-icon"
                              },
                              [_c("span", [_vm._v(_vm._s(trending.time))])]
                            )
                          ])
                        ])
                      ])
                    ]
                  )
                ],
                1
              )
            }),
            0
          )
        ])
      ]
    ),
    _vm._v(" "),
    _c(
      "section",
      { staticClass: "section-padding", attrs: { id: "search-box" } },
      [
        _c(
          "div",
          { staticClass: "submit-property mb-4", attrs: { align: "center" } },
          [
            _vm._m(2),
            _vm._v(" "),
            _c(
              "a",
              {
                staticClass: "btn btn-info btn-sm text-white mt-1",
                attrs: { href: "#" },
                on: {
                  click: function($event) {
                    $event.preventDefault()
                    return _vm.submitproperty()
                  }
                }
              },
              [_vm._v("SUBMIT\n                PROPERTY")]
            ),
            _vm._v("  \n            "),
            _c(
              "a",
              {
                staticClass: "btn btn-outline-info btn-sm mt-1",
                attrs: { href: "#" },
                on: {
                  click: function($event) {
                    $event.preventDefault()
                    return _vm.browse()
                  }
                }
              },
              [_vm._v(" BROWSE PROPERTY")]
            )
          ]
        )
      ]
    ),
    _vm._v(" "),
    _c("section", { staticClass: "latest-properties mb-6" }, [
      _c("div", { staticClass: "container" }, [
        _c("div", { staticClass: "row" }, [
          _vm._m(3),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "col-lg-6 col-md-6 col-sm-6 trending-menu mt-2 pt-5"
            },
            [
              _c("div", { staticClass: "row" }, [
                _c(
                  "div",
                  { staticClass: "col-12 font-weight-bold trending-item" },
                  [
                    _c("div", [
                      _c(
                        "div",
                        {
                          staticClass: "trending-link",
                          on: { click: _vm.showHouse }
                        },
                        [_vm._v("HOUSE")]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", [
                      _c(
                        "div",
                        {
                          staticClass: "trending-link trending-link-land",
                          on: { click: _vm.showLand }
                        },
                        [_vm._v("LAND")]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", [
                      _c(
                        "div",
                        {
                          staticClass: "trending-link ",
                          on: { click: _vm.showApartment }
                        },
                        [_vm._v("APARTMENT")]
                      )
                    ])
                  ]
                )
              ])
            ]
          )
        ])
      ]),
      _vm._v(" "),
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.ishouse,
              expression: "ishouse"
            }
          ]
        },
        [
          _c("div", { staticClass: "container" }, [
            _c(
              "div",
              { staticClass: "row pt-3" },
              [
                _vm._l(_vm.latestProperties.house, function(property, index) {
                  return _c(
                    "div",
                    {
                      key: property.id,
                      staticClass: "col-xl-3 col-md-6 col-lg-4 p-2"
                    },
                    [
                      _c(
                        "router-link",
                        {
                          attrs: {
                            to: {
                              name: "singleproperty",
                              params: { id: property.id }
                            }
                          }
                        },
                        [
                          _c("div", { staticClass: "props card" }, [
                            _c(
                              "div",
                              { staticClass: "sale-rent" },
                              [
                                property.purpose == "sell"
                                  ? [
                                      _c("span", { staticClass: "sale" }, [
                                        _vm._v("For Sale")
                                      ])
                                    ]
                                  : _vm._e(),
                                _vm._v(" "),
                                property.purpose == "rent"
                                  ? [
                                      _c("span", { staticClass: "rent" }, [
                                        _vm._v("For Rent")
                                      ])
                                    ]
                                  : _vm._e()
                              ],
                              2
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: "time" }, [
                              _c("span", [
                                _vm._v(_vm._s(property.views) + " views")
                              ])
                            ]),
                            _vm._v(" "),
                            _c("img", {
                              staticClass: "card-img-top",
                              attrs: {
                                alt: "image",
                                src: _vm.getPropertyImage(property.thumbnail)
                              }
                            }),
                            _vm._v(" "),
                            _c("div", { staticClass: "card-body" }, [
                              _c("div", { staticClass: "row" }, [
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "col-12 pb-2 d-flex flex-column"
                                  },
                                  [
                                    _c("h5", { staticClass: "card-title" }, [
                                      _vm._v(
                                        " " +
                                          _vm._s(
                                            property.title.substring(0, 25) +
                                              ".."
                                          )
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("p", [
                                      _vm._v(
                                        _vm._s(property.address) +
                                          "," +
                                          _vm._s(property.location)
                                      )
                                    ])
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "row area" }, [
                                _c("div", { staticClass: "col-12" }, [
                                  _c("p", { staticClass: "category" }, [
                                    _c("b", [_vm._v(_vm._s(property.category))])
                                  ])
                                ])
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "row area" }, [
                                _c("div", { staticClass: "col-12" }, [
                                  _c("p", [
                                    _c(
                                      "b",
                                      [
                                        _vm._v(
                                          "NPR. " +
                                            _vm._s(property.price) +
                                            "\n                                                "
                                        ),
                                        property.price_unit != null
                                          ? [
                                              _vm._v(
                                                "\n                                                    /" +
                                                  _vm._s(property.price_unit) +
                                                  "\n                                                "
                                              )
                                            ]
                                          : _vm._e()
                                      ],
                                      2
                                    )
                                  ])
                                ])
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "row area mt-3" }, [
                                _c(
                                  "div",
                                  { staticClass: "col-12 p-0 d-flex" },
                                  [
                                    _c(
                                      "i",
                                      {
                                        staticClass:
                                          "col-3 fas fa-shower card-icon"
                                      },
                                      [
                                        _c("span", [
                                          _vm._v(_vm._s(property.bathroom))
                                        ])
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "i",
                                      {
                                        staticClass:
                                          "col-3 fas fa-bed pr-0 card-icon"
                                      },
                                      [
                                        _c("span", [
                                          _vm._v(_vm._s(property.bedroom))
                                        ])
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "i",
                                      {
                                        staticClass:
                                          "pl-0 col-6 fas fa-clock card-icon"
                                      },
                                      [
                                        _c("span", [
                                          _vm._v(_vm._s(property.time))
                                        ])
                                      ]
                                    )
                                  ]
                                )
                              ])
                            ])
                          ])
                        ]
                      )
                    ],
                    1
                  )
                }),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "col-xl-3 col-md-6 col-lg-4 p-2 view-all" },
                  [
                    _c(
                      "div",
                      {
                        staticClass: "card",
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            return _vm.submitCategory("house")
                          }
                        }
                      },
                      [_vm._m(4), _vm._v(" "), _c("h2", [_vm._v("View All")])]
                    )
                  ]
                )
              ],
              2
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.island,
              expression: "island"
            }
          ]
        },
        [
          _c("div", { staticClass: "container" }, [
            _c(
              "div",
              { staticClass: "row pt-3" },
              [
                _vm._l(_vm.latestProperties.land, function(property, index) {
                  return _c(
                    "div",
                    {
                      key: property.id,
                      staticClass: "col-xl-3 col-md-6 col-lg-4 p-2"
                    },
                    [
                      _c(
                        "router-link",
                        {
                          attrs: {
                            to: {
                              name: "singleproperty",
                              params: { id: property.id }
                            }
                          }
                        },
                        [
                          _c("div", { staticClass: "props card" }, [
                            _c(
                              "div",
                              { staticClass: "sale-rent" },
                              [
                                property.purpose == "sell"
                                  ? [
                                      _c("span", { staticClass: "sale" }, [
                                        _vm._v("For Sale")
                                      ])
                                    ]
                                  : _vm._e(),
                                _vm._v(" "),
                                property.purpose == "rent"
                                  ? [
                                      _c("span", { staticClass: "rent" }, [
                                        _vm._v("For Rent")
                                      ])
                                    ]
                                  : _vm._e()
                              ],
                              2
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: "time" }, [
                              _c("span", [
                                _vm._v(_vm._s(property.views) + " views")
                              ])
                            ]),
                            _vm._v(" "),
                            _c("img", {
                              staticClass: "card-img-top",
                              attrs: {
                                alt: "image",
                                src: _vm.getPropertyImage(property.thumbnail)
                              }
                            }),
                            _vm._v(" "),
                            _c("div", { staticClass: "card-body" }, [
                              _c("div", { staticClass: "row" }, [
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "col-12 pb-2 d-flex flex-column"
                                  },
                                  [
                                    _c("h5", { staticClass: "card-title" }, [
                                      _vm._v(
                                        " " +
                                          _vm._s(
                                            property.title.substring(0, 25) +
                                              ".."
                                          )
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("p", [
                                      _vm._v(
                                        _vm._s(property.address) +
                                          "," +
                                          _vm._s(property.location)
                                      )
                                    ])
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "row area" }, [
                                _c("div", { staticClass: "col-12" }, [
                                  _c("p", { staticClass: "category" }, [
                                    _c("b", [_vm._v(_vm._s(property.category))])
                                  ])
                                ])
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "row area" }, [
                                _c("div", { staticClass: "col-12" }, [
                                  _c("p", [
                                    _c(
                                      "b",
                                      [
                                        _vm._v(
                                          "NPR. " +
                                            _vm._s(property.price) +
                                            "\n                                                "
                                        ),
                                        property.price_unit != null
                                          ? [
                                              _vm._v(
                                                "/\n                                                    " +
                                                  _vm._s(property.price_unit) +
                                                  "\n                                                "
                                              )
                                            ]
                                          : _vm._e()
                                      ],
                                      2
                                    )
                                  ])
                                ])
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "row area mt-3" }, [
                                _c(
                                  "div",
                                  { staticClass: "col-12 p-0 d-flex" },
                                  [
                                    _c(
                                      "i",
                                      {
                                        staticClass:
                                          "col-3 fas fa-shower card-icon"
                                      },
                                      [
                                        _c("span", [
                                          _vm._v(_vm._s(property.bathroom))
                                        ])
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "i",
                                      {
                                        staticClass:
                                          "col-3 fas fa-bed pr-0 card-icon"
                                      },
                                      [
                                        _c("span", [
                                          _vm._v(_vm._s(property.bedroom))
                                        ])
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "i",
                                      {
                                        staticClass:
                                          "pl-0 col-6 fas fa-clock card-icon"
                                      },
                                      [
                                        _c("span", [
                                          _vm._v(_vm._s(property.time))
                                        ])
                                      ]
                                    )
                                  ]
                                )
                              ])
                            ])
                          ])
                        ]
                      )
                    ],
                    1
                  )
                }),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "col-xl-3 col-md-6 col-lg-4 p-2 view-all" },
                  [
                    _c(
                      "div",
                      {
                        staticClass: "card",
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            return _vm.submitCategory("land")
                          }
                        }
                      },
                      [_vm._m(5), _vm._v(" "), _c("h2", [_vm._v("View All")])]
                    )
                  ]
                )
              ],
              2
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.isapartment,
              expression: "isapartment"
            }
          ]
        },
        [
          _c("div", { staticClass: "container" }, [
            _c(
              "div",
              { staticClass: "row pt-3" },
              [
                _vm._l(_vm.latestProperties.apartment, function(
                  property,
                  index
                ) {
                  return _c(
                    "div",
                    {
                      key: property.id,
                      staticClass: "col-xl-3 col-md-6 col-lg-4 p-2"
                    },
                    [
                      _c(
                        "router-link",
                        {
                          attrs: {
                            to: {
                              name: "singleproperty",
                              params: { id: property.id }
                            }
                          }
                        },
                        [
                          _c("div", { staticClass: "props card" }, [
                            _c(
                              "div",
                              { staticClass: "sale-rent" },
                              [
                                property.purpose == "sell"
                                  ? [
                                      _c("span", { staticClass: "sale" }, [
                                        _vm._v("For Sale")
                                      ])
                                    ]
                                  : _vm._e(),
                                _vm._v(" "),
                                property.purpose == "rent"
                                  ? [
                                      _c("span", { staticClass: "rent" }, [
                                        _vm._v("For Rent")
                                      ])
                                    ]
                                  : _vm._e()
                              ],
                              2
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: "time" }, [
                              _c("span", [
                                _vm._v(_vm._s(property.views) + " views")
                              ])
                            ]),
                            _vm._v(" "),
                            _c("img", {
                              staticClass: "card-img-top",
                              attrs: {
                                alt: "image",
                                src: _vm.getPropertyImage(property.thumbnail)
                              }
                            }),
                            _vm._v(" "),
                            _c("div", { staticClass: "card-body" }, [
                              _c("div", { staticClass: "row" }, [
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "col-12 pb-2 d-flex flex-column"
                                  },
                                  [
                                    _c("h5", { staticClass: "card-title" }, [
                                      _vm._v(
                                        " " +
                                          _vm._s(
                                            property.title.substring(0, 25) +
                                              ".."
                                          )
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("p", [
                                      _vm._v(
                                        _vm._s(property.address) +
                                          "," +
                                          _vm._s(property.location)
                                      )
                                    ])
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "row area" }, [
                                _c("div", { staticClass: "col-12" }, [
                                  _c("p", { staticClass: "category" }, [
                                    _c("b", [_vm._v(_vm._s(property.category))])
                                  ])
                                ])
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "row area" }, [
                                _c("div", { staticClass: "col-12" }, [
                                  _c("p", [
                                    _c(
                                      "b",
                                      [
                                        _vm._v(
                                          "NPR. " +
                                            _vm._s(property.price) +
                                            "\n                                                "
                                        ),
                                        property.price_unit != null
                                          ? [
                                              _vm._v(
                                                "/\n                                                    " +
                                                  _vm._s(property.price_unit) +
                                                  "\n                                                "
                                              )
                                            ]
                                          : _vm._e()
                                      ],
                                      2
                                    )
                                  ])
                                ])
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "row area mt-3" }, [
                                _c(
                                  "div",
                                  { staticClass: "col-12 p-0 d-flex" },
                                  [
                                    _c(
                                      "i",
                                      {
                                        staticClass:
                                          "col-3 fas fa-shower card-icon"
                                      },
                                      [
                                        _c("span", [
                                          _vm._v(_vm._s(property.bathroom))
                                        ])
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "i",
                                      {
                                        staticClass:
                                          "col-3 fas fa-bed pr-0 card-icon"
                                      },
                                      [
                                        _c("span", [
                                          _vm._v(_vm._s(property.bedroom))
                                        ])
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "i",
                                      {
                                        staticClass:
                                          "pl-0 col-6 fas fa-clock card-icon"
                                      },
                                      [
                                        _c("span", [
                                          _vm._v(_vm._s(property.time))
                                        ])
                                      ]
                                    )
                                  ]
                                )
                              ])
                            ])
                          ])
                        ]
                      )
                    ],
                    1
                  )
                }),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "col-xl-3 col-md-6 col-lg-4 p-2 view-all" },
                  [
                    _c(
                      "div",
                      {
                        staticClass: "card",
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            return _vm.submitCategory("apartment")
                          }
                        }
                      },
                      [_vm._m(6), _vm._v(" "), _c("h2", [_vm._v("View All")])]
                    )
                  ]
                )
              ],
              2
            )
          ])
        ]
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "container-fluid mt-5" }, [
      _c("div", { staticClass: "row text-center let-us-know  pt-5 pb-5 " }, [
        _vm._m(7),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-lg-6  let-us-know-btn" },
          [
            _c(
              "router-link",
              {
                staticClass: "btn btn-info btn-sm text-white",
                staticStyle: { padding: "13px" },
                attrs: {
                  to: "/contact",
                  tag: "a",
                  "active-class": "active",
                  exact: ""
                }
              },
              [_vm._v("\n                    LET US KNOW\n                ")]
            )
          ],
          1
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { attrs: { id: "bg" } }, [
      _c("img", {
        staticClass: "temple mt-5",
        attrs: {
          src: __webpack_require__(/*! ../../../../public/img/global/temple3.jpg */ "./public/img/global/temple3.jpg"),
          alt: "home page image"
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "trending-properties" }, [
      _c("div", { staticClass: "container" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-lg-7  col-md-7 col-sm-6" }, [
            _c(
              "p",
              { staticClass: "trending-properties-title font-weight-bold" },
              [_vm._v("TRENDING PROPERTIES")]
            ),
            _vm._v(" "),
            _c("hr", { attrs: { width: "15%", align: "left", size: "30" } })
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "h6",
      { staticClass: "submit-question ", attrs: { align: "center" } },
      [
        _vm._v("Looking to Buy a new property or Sell an existing one?"),
        _c("br"),
        _vm._v("\n                Real Homes provides an awesome solution!")
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-lg-6  col-md-6 col-sm-6" }, [
      _c(
        "p",
        { staticClass: "trending-properties-title font-weight-bold mt-2 pt-5" },
        [_vm._v("LATEST PROPERTIES")]
      ),
      _vm._v(" "),
      _c("hr", { attrs: { width: "15%", align: "left", size: "30" } })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "arrow" }, [
      _c("i", { staticClass: "fas fa-arrow-right" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "arrow" }, [
      _c("i", { staticClass: "fas fa-arrow-right" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "arrow" }, [
      _c("i", { staticClass: "fas fa-arrow-right" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-lg-6 " }, [
      _c("h6", { staticClass: "letknow" }, [
        _vm._v("Find a home that's right for you "),
        _c("br"),
        _vm._v(" "),
        _c("span", { staticClass: "letusknow ml-5" }, [
          _vm._v("Don't worry, we've done this many times")
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./public/img/global/apartment.png":
/*!*****************************************!*\
  !*** ./public/img/global/apartment.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/apartment.png?76201b7f675c0b2b4b30371e1e5f841b";

/***/ }),

/***/ "./public/img/global/house1.png":
/*!**************************************!*\
  !*** ./public/img/global/house1.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/house1.png?65809733408115c47aa1fd3d6dbf1412";

/***/ }),

/***/ "./public/img/global/land.png":
/*!************************************!*\
  !*** ./public/img/global/land.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/land.png?eb8e6af25b2af0c032b747051ad8b262";

/***/ }),

/***/ "./public/img/global/temple3.jpg":
/*!***************************************!*\
  !*** ./public/img/global/temple3.jpg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/temple3.jpg?d4111035f5f42f115ea64aceec803b27";

/***/ }),

/***/ "./resources/js/components/Frontend/Home.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/Frontend/Home.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Home_vue_vue_type_template_id_2d977481_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.vue?vue&type=template&id=2d977481&scoped=true& */ "./resources/js/components/Frontend/Home.vue?vue&type=template&id=2d977481&scoped=true&");
/* harmony import */ var _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.vue?vue&type=script&lang=js& */ "./resources/js/components/Frontend/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Home_vue_vue_type_style_index_0_id_2d977481_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Home.vue?vue&type=style&index=0&id=2d977481&lang=scss&scoped=true& */ "./resources/js/components/Frontend/Home.vue?vue&type=style&index=0&id=2d977481&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Home_vue_vue_type_template_id_2d977481_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Home_vue_vue_type_template_id_2d977481_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2d977481",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Frontend/Home.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Frontend/Home.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/Frontend/Home.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Frontend/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Frontend/Home.vue?vue&type=style&index=0&id=2d977481&lang=scss&scoped=true&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/components/Frontend/Home.vue?vue&type=style&index=0&id=2d977481&lang=scss&scoped=true& ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_2d977481_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=style&index=0&id=2d977481&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Frontend/Home.vue?vue&type=style&index=0&id=2d977481&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_2d977481_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_2d977481_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_2d977481_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_2d977481_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_2d977481_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/Frontend/Home.vue?vue&type=template&id=2d977481&scoped=true&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/Frontend/Home.vue?vue&type=template&id=2d977481&scoped=true& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_2d977481_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=template&id=2d977481&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Frontend/Home.vue?vue&type=template&id=2d977481&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_2d977481_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_2d977481_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);