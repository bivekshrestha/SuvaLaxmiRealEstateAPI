(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Frontend/CMS/Dashboard.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Frontend/CMS/Dashboard.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Dashboard.vue",
  components: {},
  data: function data() {
    return {
      enquiries: {},
      properties: {},
      favourites: {},
      owner_id: this.$store.getters.currentUser.id
    };
  },
  created: function created() {
    var _this = this;

    axios.get('/api/allfrontenquiries/' + this.owner_id).then(function (data) {
      _this.enquiries = data.data;
    })["catch"](function () {});
    axios.get("/api/getPropertyByUserId/" + this.owner_id).then(function (data) {
      _this.properties = data.data.data;
    });
    axios.get("/api/userfavorite/" + this.owner_id).then(function (data) {
      _this.favourites = data.data;
    });
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Frontend/CMS/Dashboard.vue?vue&type=style&index=0&id=6fbf977c&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Frontend/CMS/Dashboard.vue?vue&type=style&index=0&id=6fbf977c&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\na[data-v-6fbf977c] {\n    text-decoration: none;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Frontend/CMS/Dashboard.vue?vue&type=style&index=0&id=6fbf977c&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Frontend/CMS/Dashboard.vue?vue&type=style&index=0&id=6fbf977c&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=style&index=0&id=6fbf977c&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Frontend/CMS/Dashboard.vue?vue&type=style&index=0&id=6fbf977c&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Frontend/CMS/Dashboard.vue?vue&type=template&id=6fbf977c&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Frontend/CMS/Dashboard.vue?vue&type=template&id=6fbf977c&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************/
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
    _c(
      "div",
      { staticClass: "container-fluid my-4 border border-color bg-light" },
      [
        _c("div", { staticClass: "col-12 mt-3 bg-color" }, [
          _c(
            "div",
            {
              staticClass:
                "d-flex flex-row justify-content-around align-items-center"
            },
            [
              _c(
                "div",
                {
                  staticClass:
                    "d-flex flex-column justify-content-center align-items-center  text-white my-3 "
                },
                [
                  _c("div", { staticClass: "font-weight-bold" }, [
                    _vm._v(_vm._s(_vm.properties.length))
                  ]),
                  _vm._v(" "),
                  _c("div", [_vm._v("Active Properties")])
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "d-flex flex-column justify-content-center align-items-center  text-white my-3"
                },
                [
                  _c("div", { staticClass: "font-weight-bold" }, [
                    _vm._v(_vm._s(_vm.favourites.length))
                  ]),
                  _vm._v(" "),
                  _c("div", [_vm._v("Favorites")])
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "d-flex flex-column justify-content-center align-items-center  text-white my-3 "
                },
                [
                  _c("div", { staticClass: "font-weight-bold" }, [
                    _vm._v(_vm._s(_vm.enquiries.length))
                  ]),
                  _vm._v(" "),
                  _c("div", [_vm._v("Enquires")])
                ]
              )
            ]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-12 mx-1" }, [
          _c("div", { staticClass: "row pt-md-3 mb-5" }, [
            _c(
              "div",
              { staticClass: "col-xl-4 col-md-6 col-sm-6 p-2" },
              [
                _c("router-link", { attrs: { to: "/CMS/allproperties" } }, [
                  _c("div", { staticClass: "card card-common" }, [
                    _c("div", { staticClass: "card-body" }, [
                      _c(
                        "div",
                        {
                          staticClass:
                            "d-flex flex-column justify-content-center align-items-center"
                        },
                        [
                          _c("i", {
                            staticClass: "fas fa-home fa-2x text-primary"
                          }),
                          _vm._v(" "),
                          _c("div", { staticClass: "text-secondary mt-2" }, [
                            _c("h5", [_vm._v("Properties")])
                          ])
                        ]
                      )
                    ])
                  ])
                ])
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-xl-4 col-md-6 col-sm-6 p-2" },
              [
                _c("router-link", { attrs: { to: "/CMS/allfavorites" } }, [
                  _c("div", { staticClass: "card card-common" }, [
                    _c("div", { staticClass: "card-body" }, [
                      _c(
                        "div",
                        {
                          staticClass:
                            "d-flex flex-column justify-content-center align-items-center"
                        },
                        [
                          _c("i", {
                            staticClass: "fas fa-thumbs-up fa-2x text-primary"
                          }),
                          _vm._v(" "),
                          _c("div", { staticClass: "text-secondary mt-2" }, [
                            _c("h5", [_vm._v("Favorites")])
                          ])
                        ]
                      )
                    ])
                  ])
                ])
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-xl-4 col-md-6 col-sm-6 p-2" },
              [
                _c(
                  "router-link",
                  { attrs: { to: { name: "allfrontenquiries" } } },
                  [
                    _c("div", { staticClass: "card card-common" }, [
                      _c("div", { staticClass: "card-body" }, [
                        _c(
                          "div",
                          {
                            staticClass:
                              "d-flex flex-column justify-content-center align-items-center"
                          },
                          [
                            _c("i", {
                              staticClass: "fas fa-inbox fa-2x text-primary"
                            }),
                            _vm._v(" "),
                            _c("div", { staticClass: "text-secondary mt-2" }, [
                              _c("h5", [_vm._v("Enquiries")])
                            ])
                          ]
                        )
                      ])
                    ])
                  ]
                )
              ],
              1
            )
          ])
        ])
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Frontend/CMS/Dashboard.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/Frontend/CMS/Dashboard.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Dashboard_vue_vue_type_template_id_6fbf977c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=template&id=6fbf977c&scoped=true& */ "./resources/js/components/Frontend/CMS/Dashboard.vue?vue&type=template&id=6fbf977c&scoped=true&");
/* harmony import */ var _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=script&lang=js& */ "./resources/js/components/Frontend/CMS/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Dashboard_vue_vue_type_style_index_0_id_6fbf977c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=style&index=0&id=6fbf977c&scoped=true&lang=css& */ "./resources/js/components/Frontend/CMS/Dashboard.vue?vue&type=style&index=0&id=6fbf977c&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Dashboard_vue_vue_type_template_id_6fbf977c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Dashboard_vue_vue_type_template_id_6fbf977c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "6fbf977c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Frontend/CMS/Dashboard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Frontend/CMS/Dashboard.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/Frontend/CMS/Dashboard.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Frontend/CMS/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Frontend/CMS/Dashboard.vue?vue&type=style&index=0&id=6fbf977c&scoped=true&lang=css&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/components/Frontend/CMS/Dashboard.vue?vue&type=style&index=0&id=6fbf977c&scoped=true&lang=css& ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_0_id_6fbf977c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=style&index=0&id=6fbf977c&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Frontend/CMS/Dashboard.vue?vue&type=style&index=0&id=6fbf977c&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_0_id_6fbf977c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_0_id_6fbf977c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_0_id_6fbf977c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_0_id_6fbf977c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_0_id_6fbf977c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/Frontend/CMS/Dashboard.vue?vue&type=template&id=6fbf977c&scoped=true&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/Frontend/CMS/Dashboard.vue?vue&type=template&id=6fbf977c&scoped=true& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_6fbf977c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=template&id=6fbf977c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Frontend/CMS/Dashboard.vue?vue&type=template&id=6fbf977c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_6fbf977c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_6fbf977c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);