(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Frontend/Contact.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Frontend/Contact.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Contact",
  data: function data() {
    return {
      form: new Form({
        name: '',
        email: '',
        mobile_number: '',
        message: '',
        owner_id: '',
        property_id: ''
      })
    };
  },
  created: function created() {
    window.scrollTo(0, 0);
  },
  methods: {
    toggle: function toggle(event) {
      parent = event.target.parentElement;

      if (parent.className === 'question') {
        parent = parent.parentElement;
      }

      var val = parent.childNodes[4].style.display;

      if (val === "block") {
        parent.childNodes[4].style.display = "none";
        parent.childNodes[0].lastChild.innerHTML = "+";
      } else {
        parent.childNodes[4].style.display = "block";
        parent.childNodes[0].lastChild.innerHTML = "-";
      }
    },
    createEnquiry: function createEnquiry() {
      var _this = this;

      this.form.owner_id = 0;
      this.form.property_id = 0;
      this.form.post('/api/enquiry').then(function () {
        _this.form.reset();

        Toast.fire({
          type: 'success',
          title: 'Enquiry has been sent !!!'
        });

        _this.$Progress.finish();
      })["catch"](function () {
        console.log('error');
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Frontend/Contact.vue?vue&type=style&index=0&id=916ca424&scoped=true&lang=scss&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Frontend/Contact.vue?vue&type=style&index=0&id=916ca424&scoped=true&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".faq-section h3[data-v-916ca424] {\n  color: #232323;\n  padding: 3rem 0;\n}\n.question[data-v-916ca424] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n  color: #232323;\n  cursor: pointer;\n}\n.question h5[data-v-916ca424] {\n  margin: 0;\n}\n.question span[data-v-916ca424] {\n  font-size: 30px;\n}\n.answer[data-v-916ca424] {\n  font-size: 15px;\n  margin-bottom: 2rem;\n  text-align: justify;\n  display: none;\n  color: #4d4d4d;\n}\n.contact-btn[data-v-916ca424] {\n  background-color: #6cb2eb;\n  color: white;\n}\n.contact-details[data-v-916ca424] {\n  background-color: ghostwhite;\n  margin-top: 5rem;\n  margin-right: auto;\n  margin-left: auto;\n}\n@media (min-width: 768px) {\n.contact-details[data-v-916ca424] {\n    padding: 2rem 0;\n}\n}\n@media (max-width: 768px) {\n.enquiry h3[data-v-916ca424] {\n    font-size: 130%;\n    margin-top: 2em;\n}\n}\n.container[data-v-916ca424] {\n  max-width: 90% !important;\n}\ni[data-v-916ca424] {\n  color: #38A1DA;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Frontend/Contact.vue?vue&type=style&index=0&id=916ca424&scoped=true&lang=scss&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Frontend/Contact.vue?vue&type=style&index=0&id=916ca424&scoped=true&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./Contact.vue?vue&type=style&index=0&id=916ca424&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Frontend/Contact.vue?vue&type=style&index=0&id=916ca424&scoped=true&lang=scss&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Frontend/Contact.vue?vue&type=template&id=916ca424&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Frontend/Contact.vue?vue&type=template&id=916ca424&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "faq-section container" }, [
      _c("h3", [_vm._v("Frequently Asked Questions")]),
      _vm._v(" "),
      _c("div", { staticClass: "faq" }, [
        _c("div", { staticClass: "question", on: { click: _vm.toggle } }, [
          _c("h5", [_vm._v("What is this Website About? ")]),
          _vm._v(" "),
          _c("span", [_vm._v("+")])
        ]),
        _vm._v(" "),
        _c("hr"),
        _vm._v(" "),
        _vm._m(1)
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "faq" }, [
        _c("div", { staticClass: "question", on: { click: _vm.toggle } }, [
          _c("h5", [_vm._v("When did this establish ? ")]),
          _vm._v(" "),
          _c("span", [_vm._v("+")])
        ]),
        _vm._v(" "),
        _c("hr"),
        _vm._v(" "),
        _vm._m(2)
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "faq" }, [
        _c("div", { staticClass: "question", on: { click: _vm.toggle } }, [
          _c("h5", [_vm._v("How can this help sell my property?")]),
          _vm._v(" "),
          _c("span", [_vm._v("+")])
        ]),
        _vm._v(" "),
        _c("hr"),
        _vm._v(" "),
        _vm._m(3)
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "faq" }, [
        _c("div", { staticClass: "question", on: { click: _vm.toggle } }, [
          _c("h5", [_vm._v("How can I add My Property in the Website?")]),
          _vm._v(" "),
          _c("span", [_vm._v("+")])
        ]),
        _vm._v(" "),
        _c("hr"),
        _vm._v(" "),
        _vm._m(4)
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "faq" }, [
        _c("div", { staticClass: "question", on: { click: _vm.toggle } }, [
          _c("h5", [
            _vm._v(
              "If I am an agent can I also add property which is on my contact to ShuvaLaxmi ?"
            )
          ]),
          _vm._v(" "),
          _c("span", [_vm._v("+")])
        ]),
        _vm._v(" "),
        _c("hr"),
        _vm._v(" "),
        _vm._m(5)
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "contact mx-5 my-5" }, [
      _c("div", { staticClass: "row" }, [
        _vm._m(6),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-6 text-center enquiry" }, [
          _c("h3", [_vm._v("IF ANY ENQUIRY?")]),
          _vm._v(" "),
          _c("div", { staticClass: "form  " }, [
            _c(
              "form",
              {
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.createEnquiry()
                  }
                }
              },
              [
                _c(
                  "div",
                  { staticClass: "form-group" },
                  [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.name,
                          expression: "form.name"
                        }
                      ],
                      staticClass: "form-control",
                      class: { "is-invalid": _vm.form.errors.has("name") },
                      attrs: {
                        type: "text",
                        name: "name",
                        placeholder: "Your Name"
                      },
                      domProps: { value: _vm.form.name },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.form, "name", $event.target.value)
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("has-error", {
                      attrs: { form: _vm.form, field: "name" }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "form-group" },
                  [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.email,
                          expression: "form.email"
                        }
                      ],
                      staticClass: "form-control",
                      class: { "is-invalid": _vm.form.errors.has("email") },
                      attrs: {
                        type: "email",
                        name: "email",
                        placeholder: "Email Address"
                      },
                      domProps: { value: _vm.form.email },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.form, "email", $event.target.value)
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("has-error", {
                      attrs: { form: _vm.form, field: "email" }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "form-group" },
                  [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.mobile_number,
                          expression: "form.mobile_number"
                        }
                      ],
                      staticClass: "form-control",
                      class: {
                        "is-invalid": _vm.form.errors.has("mobile_number")
                      },
                      attrs: {
                        type: "text",
                        name: "mobile",
                        placeholder: "Mobile Number"
                      },
                      domProps: { value: _vm.form.mobile_number },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.form,
                            "mobile_number",
                            $event.target.value
                          )
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("has-error", {
                      attrs: { form: _vm.form, field: "mobile_number" }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "form-group" },
                  [
                    _c("textarea", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.message,
                          expression: "form.message"
                        }
                      ],
                      staticClass: "form-control",
                      class: { "is-invalid": _vm.form.errors.has("message") },
                      attrs: {
                        type: "text",
                        name: "message",
                        placeholder: "Message"
                      },
                      domProps: { value: _vm.form.message },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.form, "message", $event.target.value)
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("has-error", {
                      attrs: { form: _vm.form, field: "message" }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.owner_id,
                      expression: "form.owner_id"
                    }
                  ],
                  attrs: { type: "hidden", name: "owner_id" },
                  domProps: { value: _vm.form.owner_id },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.form, "owner_id", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.property_id,
                      expression: "form.property_id"
                    }
                  ],
                  attrs: { type: "hidden", name: "property_id" },
                  domProps: { value: _vm.form.property_id },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.form, "property_id", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _vm._m(7)
              ]
            )
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row contact-details container-fluid" }, [
      _c(
        "div",
        {
          staticClass: "col-6 col-md-3 center py-3",
          attrs: { align: "center" }
        },
        [
          _c("i", { staticClass: "fa fa-map-marker fa-lg p-2" }),
          _vm._v(" "),
          _c(
            "h6",
            { staticClass: "aboutus-footer-title font-weight-bold  pb-1" },
            [_vm._v("Address")]
          ),
          _vm._v(" "),
          _c("h6", [_vm._v("Chaksibari, Thamel")]),
          _vm._v(" "),
          _c("h6", [_vm._v("Kathmandu")])
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "col-6 col-md-3 details-sec py-3",
          attrs: { align: "center" }
        },
        [
          _c("i", { staticClass: "fa fa-phone p-2 fa-lg" }),
          _vm._v(" "),
          _c(
            "h6",
            { staticClass: "aboutus-footer-title font-weight-bold  pb-1" },
            [_vm._v("Contact")]
          ),
          _vm._v(" "),
          _c("h6", [_vm._v("+977 9851214726")]),
          _vm._v(" "),
          _c("h6", [_vm._v("+01 4701833")])
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "col-6 col-md-3 details-sec py-3",
          attrs: { align: "center" }
        },
        [
          _c("i", { staticClass: "fa fa-envelope fa-lg p-2" }),
          _vm._v(" "),
          _c(
            "h6",
            { staticClass: "aboutus-footer-title font-weight-bold  pb-1" },
            [_vm._v("Email")]
          ),
          _vm._v(" "),
          _c("h6", [_vm._v("suvalaxmirealestate@gmail.com")])
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "col-6 col-md-3 details-sec py-3",
          attrs: { align: "center" }
        },
        [
          _c("i", { staticClass: "fa fa-globe fa-lg p-2" }),
          _vm._v(" "),
          _c(
            "h6",
            { staticClass: "aboutus-footer-title font-weight-bold  pb-1" },
            [_vm._v("Web")]
          ),
          _vm._v(" "),
          _c("h6", [_vm._v("www.suvalaxmirealestate.com")])
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "answer" }, [
      _c("p", [
        _vm._v(
          "This website is a way to make selling and purchasing real estate in Nepal simple and more\n                    accessible."
        )
      ]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "We let sellers list their property and provide them a platform to find buyers."
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "answer" }, [
      _c("p", [_vm._v("It is registered on …in Kathmandu, Nepal.")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "answer" }, [
      _c("p", [
        _vm._v(
          "Anyone who has property can submit their details through our website and it will be added in our\n                    database and can be viewed by potential customers."
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "answer" }, [
      _c("p", [
        _vm._v(
          "All you need to do is open an account on our website. Then, you can start posting your property,\n                    and thousands of potential customers will view your house, land or apartment."
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "answer" }, [
      _c("p", [_vm._v("Yes you can sign up and add your property .")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "col-md-6 d-flex justify-content-center align-items-center"
      },
      [_c("img", { attrs: { src: "/img/global/email.png", width: "40%" } })]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group text-center" }, [
      _c(
        "button",
        {
          staticClass: "btn btn-outline-primary m-auto w-50",
          attrs: { type: "submit" }
        },
        [_vm._v("Submit")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Frontend/Contact.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/Frontend/Contact.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Contact_vue_vue_type_template_id_916ca424_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Contact.vue?vue&type=template&id=916ca424&scoped=true& */ "./resources/js/components/Frontend/Contact.vue?vue&type=template&id=916ca424&scoped=true&");
/* harmony import */ var _Contact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Contact.vue?vue&type=script&lang=js& */ "./resources/js/components/Frontend/Contact.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Contact_vue_vue_type_style_index_0_id_916ca424_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Contact.vue?vue&type=style&index=0&id=916ca424&scoped=true&lang=scss& */ "./resources/js/components/Frontend/Contact.vue?vue&type=style&index=0&id=916ca424&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Contact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Contact_vue_vue_type_template_id_916ca424_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Contact_vue_vue_type_template_id_916ca424_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "916ca424",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Frontend/Contact.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Frontend/Contact.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/Frontend/Contact.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Contact.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Frontend/Contact.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Frontend/Contact.vue?vue&type=style&index=0&id=916ca424&scoped=true&lang=scss&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/components/Frontend/Contact.vue?vue&type=style&index=0&id=916ca424&scoped=true&lang=scss& ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_style_index_0_id_916ca424_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./Contact.vue?vue&type=style&index=0&id=916ca424&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Frontend/Contact.vue?vue&type=style&index=0&id=916ca424&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_style_index_0_id_916ca424_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_style_index_0_id_916ca424_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_style_index_0_id_916ca424_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_style_index_0_id_916ca424_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_style_index_0_id_916ca424_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/Frontend/Contact.vue?vue&type=template&id=916ca424&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/Frontend/Contact.vue?vue&type=template&id=916ca424&scoped=true& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_template_id_916ca424_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Contact.vue?vue&type=template&id=916ca424&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Frontend/Contact.vue?vue&type=template&id=916ca424&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_template_id_916ca424_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_template_id_916ca424_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);