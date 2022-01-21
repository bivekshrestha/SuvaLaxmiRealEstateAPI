(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[26],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/backend/Enquiry.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/backend/Enquiry.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      enquiries: {},
      details: {}
    };
  },
  created: function created() {
    var _this = this;

    this.loadEnquiry();
    this.$on('deleteEnquiry', function () {
      _this.loadEnquiry();
    });
  },
  methods: {
    deleteEnquiry: function deleteEnquiry(id) {
      var _this2 = this;

      swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then(function (result) {
        // Send request to the server
        if (result.value) {
          axios["delete"]('/api/enquiry/' + id).then(function () {
            swal.fire('Deleted!', 'Your file has been deleted.', 'success');

            _this2.$emit('deleteEnquiry');
          })["catch"](function () {
            swal("Failed!", "There was something wrong.", "warning");
          });
        }
      });
    },
    loadEnquiry: function loadEnquiry() {
      var _this3 = this;

      axios.get('/api/enquiry').then(function (data) {
        _this3.enquiries = data.data;
      })["catch"](function () {});
    },
    viewEnquiry: function viewEnquiry(id) {
      var _this4 = this;

      axios.get('/api/enquiry' + id).then(function (data) {
        _this4.details = data.data;
      });
      $('#showModal').modal('show');
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/backend/Enquiry.vue?vue&type=template&id=a8a8d6a6&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/backend/Enquiry.vue?vue&type=template&id=a8a8d6a6& ***!
  \******************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "row mt-5" }, [
      _c("div", { staticClass: "col-md-12" }, [
        _c("div", { staticClass: "card" }, [
          _vm._m(0),
          _vm._v(" "),
          _c("div", { staticClass: "card-body table-responsive p-0" }, [
            _c("table", { staticClass: "table table-hover" }, [
              _vm._m(1),
              _vm._v(" "),
              _c(
                "tbody",
                _vm._l(_vm.enquiries, function(enquiry, index) {
                  return _c("tr", { key: enquiry.id }, [
                    _c("td", [_vm._v(_vm._s(index + 1))]),
                    _vm._v(" "),
                    _c("td", { staticClass: "text-capitalize" }, [
                      _vm._v(_vm._s(enquiry.name))
                    ]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(enquiry.email))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(enquiry.mobile_number))]),
                    _vm._v(" "),
                    _c("td", [
                      _c(
                        "a",
                        {
                          attrs: { href: "#" },
                          on: {
                            click: function($event) {
                              return _vm.viewEnquiry(enquiry.id)
                            }
                          }
                        },
                        [_c("i", { staticClass: "fa fa-eye blue" })]
                      ),
                      _vm._v(" "),
                      _c(
                        "a",
                        {
                          attrs: { href: "#" },
                          on: {
                            click: function($event) {
                              return _vm.deleteEnquiry(enquiry.id)
                            }
                          }
                        },
                        [_c("i", { staticClass: "fa fa-trash red" })]
                      )
                    ])
                  ])
                }),
                0
              )
            ])
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "modal fade",
        attrs: {
          id: "showModal",
          tabindex: "-1",
          role: "dialog",
          "aria-labelledby": "showModalLabel",
          "aria-hidden": "true"
        }
      },
      [
        _c(
          "div",
          {
            staticClass: "modal-dialog modal-dialog-centered",
            attrs: { role: "document" }
          },
          [
            _c("div", { staticClass: "modal-content" }, [
              _vm._m(2),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "modal-body" },
                [
                  _vm._l(_vm.details, function(detail) {
                    return [
                      _vm._v(
                        "\n                        Enquiry Received: {{}}\n                        "
                      ),
                      _c("h3", [_vm._v("Property Information")]),
                      _vm._v(" "),
                      _c("p", [
                        _c("strong", [_vm._v("Property Id")]),
                        _vm._v(": " + _vm._s(detail.property_id))
                      ]),
                      _vm._v(" "),
                      _c("p", [
                        _c("strong", [_vm._v("Property Title")]),
                        _vm._v(": " + _vm._s(detail.title))
                      ]),
                      _vm._v(" "),
                      _c("h3", [_vm._v("Property Owner Information")]),
                      _vm._v(" "),
                      _c("p", [
                        _c("strong", [_vm._v("Owner Name")]),
                        _vm._v(": " + _vm._s(detail.userName))
                      ]),
                      _vm._v(" "),
                      _c("p", [
                        _c("strong", [_vm._v("Owner Email")]),
                        _vm._v(": " + _vm._s(detail.userEmail))
                      ]),
                      _vm._v(" "),
                      _c("p", [
                        _c("strong", [_vm._v("Owner Phone")]),
                        _vm._v(": " + _vm._s(detail.userPhone))
                      ]),
                      _vm._v(" "),
                      _c("h3", [_vm._v("Enquiry Sent By:")]),
                      _vm._v(" "),
                      _c("p", [
                        _c("strong", [_vm._v("Name")]),
                        _vm._v(": " + _vm._s(detail.name))
                      ]),
                      _vm._v(" "),
                      _c("p", [
                        _c("strong", [_vm._v("Email")]),
                        _vm._v(": " + _vm._s(detail.email))
                      ]),
                      _vm._v(" "),
                      _c("p", [
                        _c("strong", [_vm._v("Phone")]),
                        _vm._v(": " + _vm._s(detail.mobile_number))
                      ]),
                      _vm._v(" "),
                      _c("p", [
                        _c("strong", [_vm._v("Message")]),
                        _vm._v(": " + _vm._s(detail.message))
                      ])
                    ]
                  })
                ],
                2
              ),
              _vm._v(" "),
              _vm._m(3)
            ])
          ]
        )
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("h3", { staticClass: "card-title" }, [_vm._v("Enquiries")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("ID")]),
        _vm._v(" "),
        _c("th", [_vm._v("Name")]),
        _vm._v(" "),
        _c("th", [_vm._v("Email")]),
        _vm._v(" "),
        _c("th", [_vm._v("Mobile Number")]),
        _vm._v(" "),
        _c("th", [_vm._v("Action")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c(
        "h5",
        { staticClass: "modal-title", attrs: { id: "showModalLabel" } },
        [_vm._v("Enquiry Detail")]
      ),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "close",
          attrs: {
            type: "button",
            "data-dismiss": "modal",
            "aria-label": "Close"
          }
        },
        [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-footer" }, [
      _c(
        "button",
        {
          staticClass: "btn btn-danger",
          attrs: { type: "button", "data-dismiss": "modal" }
        },
        [_vm._v("Close "), _c("i", { staticClass: "fas fa-times-circle" })]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/backend/Enquiry.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/backend/Enquiry.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Enquiry_vue_vue_type_template_id_a8a8d6a6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Enquiry.vue?vue&type=template&id=a8a8d6a6& */ "./resources/js/components/backend/Enquiry.vue?vue&type=template&id=a8a8d6a6&");
/* harmony import */ var _Enquiry_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Enquiry.vue?vue&type=script&lang=js& */ "./resources/js/components/backend/Enquiry.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Enquiry_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Enquiry_vue_vue_type_template_id_a8a8d6a6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Enquiry_vue_vue_type_template_id_a8a8d6a6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/backend/Enquiry.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/backend/Enquiry.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/backend/Enquiry.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Enquiry_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Enquiry.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/backend/Enquiry.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Enquiry_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/backend/Enquiry.vue?vue&type=template&id=a8a8d6a6&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/backend/Enquiry.vue?vue&type=template&id=a8a8d6a6& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Enquiry_vue_vue_type_template_id_a8a8d6a6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Enquiry.vue?vue&type=template&id=a8a8d6a6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/backend/Enquiry.vue?vue&type=template&id=a8a8d6a6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Enquiry_vue_vue_type_template_id_a8a8d6a6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Enquiry_vue_vue_type_template_id_a8a8d6a6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);