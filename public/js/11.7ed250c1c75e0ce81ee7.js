(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Frontend/CMS/Property/AddProperty.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Frontend/CMS/Property/AddProperty.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "AddProperty.vue",
  data: function data() {
    return {
      category: 'house',
      checked: true,
      unchecked: false,
      house: true,
      land: false,
      image: '',
      editMode: this.$store.getters.isEdit,
      editId: '',
      propeties: {},
      locations: {},
      imageCount: 0,
      form: new Form({
        id: '',
        purpose: 'sell',
        type: 'residential',
        category: 'house',
        address: '',
        location: '',
        road: '',
        images: [],
        title: '',
        description: '',
        area_total: '',
        area_built: '',
        face: '',
        road_size: '',
        road_type: '',
        price: '',
        price_unit: '',
        owner_id: this.$store.getters.currentUser.id,
        built_year: '',
        furnish_status: '',
        kitchen: '',
        bedroom: '',
        bathroom: '',
        living_room: '',
        parking: '',
        amenities: [],
        floors: ''
      })
    };
  },
  components: {},
  created: function created() {
    var _this = this;

    axios.get('/api/location').then(function (data) {
      _this.locations = data.data;
    }); //this code is for edit
    //if parameter passed as id then
    //we retrieved required data and fill based on category
    //image also loaded

    if (typeof this.$route.params.id !== 'undefined') {
      this.$store.dispatch('setEditMode', true);
      axios.get('/api/property/' + this.$route.params.id).then(function (data) {
        var id = data.data.id;
        var object1 = data.data;

        if (data.data.category !== 'land') {
          axios.get("/api/propertyHouse/" + id).then(function (_ref) {
            var data = _ref.data;
            _this.form.furnish_status = data[0].furnish_status;
            _this.form.built_year = data[0].built_year;
            _this.form.kitchen = data[0].kitchen;
            _this.form.bedroom = data[0].bedroom;
            _this.form.bathroom = data[0].bathroom;
            _this.form.living_room = data[0].living_room;
            _this.form.parking = data[0].parking, _this.form.floors = data[0].no_floors;
            _this.form.amenities = data[0].amenities.split(",");
          });
        } else {
          _this.house = false;
          _this.land = true;
        }

        _this.form.fill(object1);

        if (data.data.category == 'land') {
          _this.form.amenities = [];
        }

        _this.getPreviewImage();
      })["catch"](function () {});
    }
  },
  updated: function updated() {
    var _this2 = this;

    Fire.$on('resetProperty', function () {
      _this2.form.reset();

      _this2.removeFile();
    });
  },
  destroyed: function destroyed() {
    this.form.reset();
  },
  methods: {
    getPreviewImage: function getPreviewImage() {
      var arrImg = this.form.images.split(",");
      this.image = "/img/property/" + arrImg[0];
      this.imageCount = arrImg.length;
    },
    toggleThree: function toggleThree(e) {
      if (e == 'land') {
        this.house = false;
        this.land = true;
      } else {
        this.land = false;
        this.house = true;
      }
    },
    createProperty: function createProperty() {
      var _this3 = this;

      console.log(this.form);
      this.$Progress.start();
      this.form.post('/api/property').then(function () {
        console.log(_this3.form);

        _this3.form.reset();

        _this3.removeFile();

        Toast.fire({
          type: 'success',
          title: 'Property Created Successfully !!!'
        });

        _this3.$Progress.finish();
      })["catch"](function () {
        swal.fire('Validation Failed', 'Please fill all the fields Properly  !!!', 'warning');
      });
    },
    //end of function
    editProperty: function editProperty(id) {
      var _this4 = this;

      this.$Progress.start();
      this.form.put('/api/property/' + id).then(function (id) {
        //success
        swal.fire('Updated!', 'Information has been updated.', 'success');

        _this4.$Progress.finish();

        _this4.form.reset();

        _this4.$router.push({
          name: 'allproperties'
        });
      })["catch"](function () {
        //fail
        _this4.$Progress.fail(); //changes the color of vue progress bar

      });
    },
    imageSave: function imageSave(files) {
      var _this5 = this;

      //using base64 for converting image into text and vice versa
      //let files = e.target.files;
      this.imageCount = files.length;

      var _loop = function _loop() {
        var reader = new FileReader();
        var file = files[i];

        if (!file.type.match('image.*')) {
          _this5.form.images = [];
          alert('Select an image');
          return {
            v: void 0
          };
        }

        reader.onloadend = function (file) {
          _this5.form.images.push(reader.result); //stores image in format of text

        };

        reader.readAsDataURL(file);
      };

      for (var i = 0; i < files.length; i++) {
        var _ret = _loop();

        if (_typeof(_ret) === "object") return _ret.v;
      }
    },
    onDrop: function onDrop(e) {
      e.stopPropagation(); //stops bubble propogation

      e.preventDefault();
      var files = e.dataTransfer.files;
      this.imageSave(files);
      this.createFile(files[0]);
    },
    onChange: function onChange(e) {
      var files = e.target.files;
      this.imageSave(files);
      this.createFile(files[0]);
    },
    createFile: function createFile(file) {
      if (!file.type.match('image.*')) {
        alert('Select an image');
        return;
      }

      var img = new Image();
      var reader = new FileReader();
      var vm = this;

      reader.onload = function (e) {
        vm.image = e.target.result;
      };

      reader.readAsDataURL(file);
    },
    removeFile: function removeFile() {
      this.form.images = [];
      this.image = ''; //image preview variable

      this.imageCount = 0;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Frontend/CMS/Property/AddProperty.vue?vue&type=style&index=0&id=15cb5284&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Frontend/CMS/Property/AddProperty.vue?vue&type=style&index=0&id=15cb5284&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.btn_remove[data-v-15cb5284] {\n    background-color: #d3394c;\n    border: 0;\n    color: #fff;\n    cursor: pointer;\n    display: inline-block;\n    font-weight: bold;\n    padding: 15px 35px;\n    position: relative;\n}\n.btn_remove[data-v-15cb5284]:hover {\n    background-color: #722040;\n}\ninput[type=\"file\"][data-v-15cb5284] {\n    position: absolute;\n    opacity: 0;\n    z-index: -1;\n}\n.helper[data-v-15cb5284] {\n    /*height: 100%;*/\n    display: inline-block;\n    vertical-align: middle;\n    width: 0;\n}\n.hidden[data-v-15cb5284] {\n    display: none !important;\n}\n.hidden.image[data-v-15cb5284] {\n    display: inline-block !important;\n}\n.display-inline[data-v-15cb5284] {\n    display: inline-block;\n    vertical-align: middle;\n    height: 80%;\n    width: 40%;\n}\n.img[data-v-15cb5284] {\n    border: 1px solid #f6f6f6;\n    display: inline-block;\n    height: 100%;\n    width: 100%;\n}\n.drop[data-v-15cb5284] {\n    background-color: #f2f2f2;\n    border: 4px dashed #ccc;\n    background-color: #f6f6f6;\n    border-radius: 2px;\n    height: 100%;\n    max-height: 400px;\n    max-width: 600px;\n    width: 100%;\n}\n\n/*Sidebar Sticky*/\n#sticky-sidebar[data-v-15cb5284] {\n    position: -webkit-sticky;\n    position: sticky;\n    top: 80px;\n}\n.nav-item .nav-item .nav-link[data-v-15cb5284] {\n    font-size: 0.9em;\n}\n.noBuildingDetails[data-v-15cb5284] {\n    display: none;\n}\n.show[data-v-15cb5284] {\n    display: block;\n}\n.hide[data-v-15cb5284] {\n    display: none;\n}\n\n/*Sidebar Sticky*/\n#sticky-sidebar[data-v-15cb5284] {\n    position: -webkit-sticky;\n    position: sticky;\n    top: 80px;\n}\n.nav-item .nav-item .nav-link[data-v-15cb5284] {\n    font-size: 0.9em;\n}\n\n/*Main container box layouts*/\n.main-container .container-fluid[data-v-15cb5284] {\n    box-shadow: 0px 0px 20px 2px rgba(0, 0, 0, 0.37);\n}\n#sellRent input:checked + .circle[data-v-15cb5284] {\n    background-color: #007bff;\n    color: white;\n    border-radius: 5px;\n}\n\n/*Property Type*/\n#property-type input[type=\"radio\"][data-v-15cb5284] {\n    display: none;\n}\n\n/*#38A1DA*/\n#property-type input + label[data-v-15cb5284] {\n    border: 1px solid #EBECF0;\n    color: black;\n    border-radius: 5px;\n}\n#property-type input:checked + label[data-v-15cb5284] {\n    background-color: #007bff;\n    background-color: #38A1DA;\n    color: white;\n    border-radius: 5px;\n}\n#property-type input:hover + label[data-v-15cb5284] {\n    border: 1px solid rgba(255, 0, 0, .2);\n    -webkit-background-clip: padding-box; /* for Safari */\n    background-clip: padding-box; /* for IE9+, Firefox 4+, Opera, Chrome */\n}\n\n/*Property Category*/\n#property-category input[type=\"radio\"][data-v-15cb5284] {\n    display: none;\n}\n#property-category input + label[data-v-15cb5284] {\n    border: 1px solid #EBECF0;\n    color: black;\n    border-radius: 5px;\n}\n#property-category input:checked + label[data-v-15cb5284] {\n    background-color: #38A1DA;\n    color: white;\n    border-radius: 5px;\n}\n#property-category input:hover + label[data-v-15cb5284] {\n    border: 1px solid rgba(255, 0, 0, .2);\n    -webkit-background-clip: padding-box; /* for Safari */\n    background-clip: padding-box; /* for IE9+, Firefox 4+, Opera, Chrome */\n}\n\n/*Amenities box layout*/\n#amenities input[type=\"checkbox\"][data-v-15cb5284] {\n    display: none;\n}\n#amenities input + label[data-v-15cb5284] {\n    border: 1px solid rgba(0, 0, 0, .2);\n    /*\tborder: 1px solid #EBECF0;*/\n    color: black;\n    border-radius: 5px;\n    width: 120px;\n}\n#amenities input:checked + label[data-v-15cb5284] {\n    background-color: #38A1DA;\n    color: white;\n    border-radius: 5px;\n}\n#amenities input:hover + label[data-v-15cb5284] {\n    border: 1px solid rgba(255, 0, 0, .2);\n    -webkit-background-clip: padding-box; /* for Safari */\n    background-clip: padding-box; /* for IE9+, Firefox 4+, Opera, Chrome */\n}\n\n/*Photos drag and drop to upload*/\n.dropzone[data-v-15cb5284] {\n    border: 1px dashed #ccc;\n    height: 100px;\n}\n.dropzone.dragover[data-v-15cb5284] {\n    border-color: #000;\n    color: #000;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Frontend/CMS/Property/AddProperty.vue?vue&type=style&index=0&id=15cb5284&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Frontend/CMS/Property/AddProperty.vue?vue&type=style&index=0&id=15cb5284&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader??ref--6-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AddProperty.vue?vue&type=style&index=0&id=15cb5284&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Frontend/CMS/Property/AddProperty.vue?vue&type=style&index=0&id=15cb5284&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Frontend/CMS/Property/AddProperty.vue?vue&type=template&id=15cb5284&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Frontend/CMS/Property/AddProperty.vue?vue&type=template&id=15cb5284&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "container-fluid mt-4 border bg-light" }, [
      _c("div", { staticClass: "col-12" }, [
        _c("div", { staticClass: "mt-4 mb-3" }, [
          _c(
            "div",
            { staticClass: "section-title text-dark" },
            [
              _vm.$store.getters.isEdit
                ? [
                    _c("h3", { staticClass: "font-weight-bold" }, [
                      _vm._v("Update a Property")
                    ])
                  ]
                : [
                    _c("h3", { staticClass: "font-weight-bold" }, [
                      _vm._v("Add a Property")
                    ])
                  ]
            ],
            2
          )
        ])
      ])
    ]),
    _vm._v(" "),
    _c(
      "form",
      {
        on: {
          submit: function($event) {
            $event.preventDefault()
            _vm.$store.getters.isEdit
              ? _vm.editProperty(_vm.$route.params.id)
              : _vm.createProperty()
          }
        }
      },
      [
        _c("div", { staticClass: "container-fluid my-2 border bg-light" }, [
          _c("div", { staticClass: "col-12" }, [
            _c("div", { staticClass: "my-2 mb-3" }, [
              _vm._m(0),
              _vm._v(" "),
              _c("div", { attrs: { id: "sellRent" } }, [
                _c("div", { staticClass: "form-check form-check-inline" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.purpose,
                        expression: "form.purpose"
                      }
                    ],
                    staticClass: "form-check-input",
                    attrs: {
                      type: "radio",
                      value: "sell",
                      id: "sell",
                      name: "purpose"
                    },
                    domProps: {
                      checked: _vm.checked,
                      checked: _vm._q(_vm.form.purpose, "sell")
                    },
                    on: {
                      change: function($event) {
                        return _vm.$set(_vm.form, "purpose", "sell")
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "label",
                    { staticClass: "form-check-label", attrs: { for: "rent" } },
                    [_vm._v("Sell")]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-check form-check-inline" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.purpose,
                        expression: "form.purpose"
                      }
                    ],
                    staticClass: "form-check-input",
                    attrs: {
                      type: "radio",
                      value: "rent",
                      id: "rent",
                      name: "sellRent"
                    },
                    domProps: { checked: _vm._q(_vm.form.purpose, "rent") },
                    on: {
                      change: function($event) {
                        return _vm.$set(_vm.form, "purpose", "rent")
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "label",
                    { staticClass: "form-check-label", attrs: { for: "rent" } },
                    [_vm._v("Rent")]
                  )
                ])
              ]),
              _vm._v(" "),
              _vm._m(1),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "d-flex flex-row my-3",
                  attrs: { id: "property-type" }
                },
                [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.type,
                        expression: "form.type"
                      }
                    ],
                    staticClass: "form-check-input",
                    attrs: {
                      type: "radio",
                      value: "residential",
                      id: "residential",
                      name: "type"
                    },
                    domProps: {
                      checked: _vm.checked,
                      checked: _vm._q(_vm.form.type, "residential")
                    },
                    on: {
                      change: function($event) {
                        return _vm.$set(_vm.form, "type", "residential")
                      }
                    }
                  }),
                  _vm._v(" "),
                  _vm._m(2),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.type,
                        expression: "form.type"
                      }
                    ],
                    staticClass: "form-check-input",
                    attrs: {
                      type: "radio",
                      value: "commercial",
                      id: "commercial",
                      name: "type"
                    },
                    domProps: { checked: _vm._q(_vm.form.type, "commercial") },
                    on: {
                      change: function($event) {
                        return _vm.$set(_vm.form, "type", "commercial")
                      }
                    }
                  }),
                  _vm._v(" "),
                  _vm._m(3)
                ]
              ),
              _vm._v(" "),
              _vm._m(4),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "d-flex flex-row my-3",
                  attrs: { id: "property-category" }
                },
                [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.category,
                        expression: "form.category"
                      }
                    ],
                    staticClass: "form-check-input",
                    attrs: {
                      type: "radio",
                      value: "house",
                      name: "category",
                      id: "house"
                    },
                    domProps: {
                      checked: _vm.checked,
                      checked: _vm._q(_vm.form.category, "house")
                    },
                    on: {
                      click: function($event) {
                        return _vm.toggleThree("house")
                      },
                      change: function($event) {
                        return _vm.$set(_vm.form, "category", "house")
                      }
                    }
                  }),
                  _vm._v(" "),
                  _vm._m(5),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.category,
                        expression: "form.category"
                      }
                    ],
                    staticClass: "form-check-input",
                    attrs: {
                      type: "radio",
                      value: "land",
                      id: "land",
                      name: "category"
                    },
                    domProps: {
                      checked: _vm.unchecked,
                      checked: _vm._q(_vm.form.category, "land")
                    },
                    on: {
                      click: function($event) {
                        return _vm.toggleThree("land")
                      },
                      change: function($event) {
                        return _vm.$set(_vm.form, "category", "land")
                      }
                    }
                  }),
                  _vm._v(" "),
                  _vm._m(6),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.category,
                        expression: "form.category"
                      }
                    ],
                    staticClass: "form-check-input",
                    attrs: {
                      type: "radio",
                      value: "apartment",
                      id: "apartment",
                      name: "category"
                    },
                    domProps: {
                      checked: _vm.unchecked,
                      checked: _vm._q(_vm.form.category, "apartment")
                    },
                    on: {
                      click: function($event) {
                        return _vm.toggleThree("house")
                      },
                      change: function($event) {
                        return _vm.$set(_vm.form, "category", "apartment")
                      }
                    }
                  }),
                  _vm._v(" "),
                  _vm._m(7)
                ]
              )
            ])
          ])
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "container-fluid my-2 py-3 border bg-light" },
          [
            _c("div", { staticClass: "col-12" }, [
              _c("div", { staticClass: "my-2" }, [
                _vm._m(8),
                _vm._v(" "),
                _c("div", { staticClass: "form-row my-3" }, [
                  _c(
                    "div",
                    { staticClass: "col-sm-6 col-md-5 col-lg-4 mb-3" },
                    [
                      _c(
                        "label",
                        {
                          staticClass: "font-weight-light",
                          attrs: { for: "address" }
                        },
                        [_vm._v("Address:")]
                      ),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.address,
                            expression: "form.address"
                          }
                        ],
                        staticClass: "form-control",
                        class: { "is-invalid": _vm.form.errors.has("address") },
                        attrs: {
                          type: "text",
                          placeholder: "Eg: New Road",
                          name: "address",
                          id: "address"
                        },
                        domProps: { value: _vm.form.address },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.form, "address", $event.target.value)
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c("has-error", {
                        attrs: { form: _vm.form, field: "address" }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "col-sm-6 col-md-5 col-lg-4" },
                    [
                      _c(
                        "label",
                        {
                          staticClass: "font-weight-light",
                          attrs: { for: "location" }
                        },
                        [_vm._v("Property Location :")]
                      ),
                      _vm._v(" "),
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
                          staticClass: "form-control",
                          class: {
                            "is-invalid": _vm.form.errors.has("location")
                          },
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
                        [
                          _c(
                            "option",
                            { attrs: { value: "", disabled: "dropzone" } },
                            [_vm._v("Select a district")]
                          ),
                          _vm._v(" "),
                          _vm._l(_vm.locations, function(location) {
                            return _c(
                              "option",
                              {
                                key: location.id,
                                domProps: { value: location }
                              },
                              [
                                _vm._v(
                                  "\n                                    " +
                                    _vm._s(location) +
                                    "\n                                "
                                )
                              ]
                            )
                          })
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _c("has-error", {
                        attrs: { form: _vm.form, field: "location" }
                      })
                    ],
                    1
                  )
                ])
              ])
            ])
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "container-fluid my-2 py-3 border bg-light" },
          [
            _c("div", { staticClass: "col-12" }, [
              _c(
                "div",
                { staticClass: "my-2" },
                [
                  _vm._m(9),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-row my-3 d-flex flex-row" }, [
                    _c(
                      "div",
                      { staticClass: "col-sm-6 col-md-5 col-lg-4 mb-3" },
                      [
                        _c(
                          "label",
                          {
                            staticClass: "font-weight-light",
                            attrs: { for: "totalArea" }
                          },
                          [_vm._v("Total Area :")]
                        ),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.area_total,
                              expression: "form.area_total"
                            }
                          ],
                          staticClass: "form-control",
                          class: {
                            "is-invalid": _vm.form.errors.has("area_total")
                          },
                          attrs: {
                            type: "number",
                            placeholder: "Total area in number",
                            id: "totalArea",
                            name: "area_total"
                          },
                          domProps: { value: _vm.form.area_total },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.form,
                                "area_total",
                                $event.target.value
                              )
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("has-error", {
                          attrs: { form: _vm.form, field: "area_total" }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.house,
                            expression: "house"
                          }
                        ],
                        staticClass: "col-sm-6 col-md-5 col-lg-4"
                      },
                      [
                        _c(
                          "label",
                          {
                            staticClass: "font-weight-light",
                            attrs: { for: "builtUpArea" }
                          },
                          [_vm._v("Built up Area :")]
                        ),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.area_built,
                              expression: "form.area_built"
                            }
                          ],
                          staticClass: "form-control",
                          class: {
                            "is-invalid": _vm.form.errors.has("area_built")
                          },
                          attrs: {
                            type: "number",
                            placeholder: "Enter the built Up Area",
                            id: "builtUpArea",
                            name: "area_built"
                          },
                          domProps: { value: _vm.form.area_built },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.form,
                                "area_built",
                                $event.target.value
                              )
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("has-error", {
                          attrs: { form: _vm.form, field: "area_built" }
                        })
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _vm._m(10),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-row my-3" }, [
                    _c(
                      "div",
                      { staticClass: "col-sm-6 col-md-5 col-lg-4" },
                      [
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.face,
                                expression: "form.face"
                              }
                            ],
                            staticClass: "form-control",
                            class: {
                              "is-invalid": _vm.form.errors.has("face")
                            },
                            attrs: { id: "propertyFace", name: "face" },
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
                                  "face",
                                  $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                )
                              }
                            }
                          },
                          [
                            _c(
                              "option",
                              { attrs: { value: "", disabled: "disabled" } },
                              [_vm._v("Select property face")]
                            ),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "east" } }, [
                              _vm._v("East")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "west" } }, [
                              _vm._v("West")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "north" } }, [
                              _vm._v("North")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "south" } }, [
                              _vm._v("South")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "north-east" } }, [
                              _vm._v("North-East")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "north-west" } }, [
                              _vm._v("North-West")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "south-east" } }, [
                              _vm._v("South-East")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "south-west" } }, [
                              _vm._v("South-West")
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _c("has-error", {
                          attrs: { form: _vm.form, field: "face" }
                        })
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _vm._m(11),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-row my-3" }, [
                    _c(
                      "div",
                      { staticClass: "col-sm-6 col-md-3 col-lg-3 mb-3" },
                      [
                        _c(
                          "label",
                          {
                            staticClass: "font-weight-light",
                            attrs: { for: "roadSize" }
                          },
                          [_vm._v("Road Size :")]
                        ),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.road_size,
                              expression: "form.road_size "
                            }
                          ],
                          staticClass: "form-control",
                          class: {
                            "is-invalid": _vm.form.errors.has("road_size")
                          },
                          attrs: {
                            type: "number",
                            placeholder: "Road Size (in meters)",
                            id: "roadSize",
                            name: "road_size"
                          },
                          domProps: { value: _vm.form.road_size },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.form,
                                "road_size",
                                $event.target.value
                              )
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("has-error", {
                          attrs: { form: _vm.form, field: "road_size" }
                        }),
                        _vm._v(
                          "\n                            Eg: 3\n\n                        "
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-sm-6 col-md-3 col-lg-3" },
                      [
                        _c(
                          "label",
                          {
                            staticClass: "font-weight-light",
                            attrs: { for: "roadType" }
                          },
                          [_vm._v("Road Type :")]
                        ),
                        _vm._v(" "),
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.road_type,
                                expression: "form.road_type"
                              }
                            ],
                            staticClass: "form-control",
                            class: {
                              "is-invalid": _vm.form.errors.has("road_type")
                            },
                            attrs: { id: "roadType", name: "road_type" },
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
                                  "road_type",
                                  $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                )
                              }
                            }
                          },
                          [
                            _c(
                              "option",
                              { attrs: { value: "", disabled: "dropzone" } },
                              [_vm._v("Select Road type")]
                            ),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "gravelled" } }, [
                              _vm._v("Gravelled")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "paved" } }, [
                              _vm._v("Paved")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "blacktopped" } }, [
                              _vm._v("Blacktopped")
                            ]),
                            _vm._v(" "),
                            _c(
                              "option",
                              { attrs: { value: "soil-stabilized" } },
                              [_vm._v("Soil Stabilized")]
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c("has-error", {
                          attrs: { form: _vm.form, field: "road_type" }
                        })
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c("has-error", { attrs: { form: _vm.form, field: "span" } }),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.house,
                          expression: "house"
                        }
                      ]
                    },
                    [
                      _vm._m(12),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-row my-3" }, [
                        _c(
                          "div",
                          { staticClass: "col-sm-6 col-md-5 col-lg-3 mb-2" },
                          [
                            _c(
                              "label",
                              {
                                staticClass: "font-weight-light",
                                attrs: { for: "builtYear" }
                              },
                              [_vm._v("Built Year :")]
                            ),
                            _vm._v(" "),
                            _c(
                              "select",
                              {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.built_year,
                                    expression: "form.built_year"
                                  }
                                ],
                                staticClass: "form-control",
                                class: {
                                  "is-invalid": _vm.form.errors.has(
                                    "built_year"
                                  )
                                },
                                attrs: { id: "builtYear", name: "built_year" },
                                on: {
                                  change: function($event) {
                                    var $$selectedVal = Array.prototype.filter
                                      .call($event.target.options, function(o) {
                                        return o.selected
                                      })
                                      .map(function(o) {
                                        var val =
                                          "_value" in o ? o._value : o.value
                                        return val
                                      })
                                    _vm.$set(
                                      _vm.form,
                                      "built_year",
                                      $event.target.multiple
                                        ? $$selectedVal
                                        : $$selectedVal[0]
                                    )
                                  }
                                }
                              },
                              [
                                _c(
                                  "option",
                                  {
                                    attrs: { value: "", disabled: "disabled" }
                                  },
                                  [_vm._v("Select a year")]
                                ),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "2010" } }, [
                                  _vm._v("2010")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "2011" } }, [
                                  _vm._v("2011")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "2012" } }, [
                                  _vm._v("2012")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "2013" } }, [
                                  _vm._v("2013")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "2014" } }, [
                                  _vm._v("2014")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "2015" } }, [
                                  _vm._v("2015")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "2016" } }, [
                                  _vm._v("2016")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "2017" } }, [
                                  _vm._v("2017")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "2018" } }, [
                                  _vm._v("2018")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "2019" } }, [
                                  _vm._v("2019")
                                ])
                              ]
                            ),
                            _vm._v(" "),
                            _c("has-error", {
                              attrs: { form: _vm.form, field: "built_year" }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "col-sm-6 col-md-5 col-lg-3 mb-2" },
                          [
                            _c(
                              "label",
                              {
                                staticClass: "font-weight-light",
                                attrs: { for: "totalFloors" }
                              },
                              [_vm._v("Total Floors :")]
                            ),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.form.floors,
                                  expression: "form.floors"
                                }
                              ],
                              staticClass: "form-control",
                              class: {
                                "is-invalid": _vm.form.errors.has("floors")
                              },
                              attrs: {
                                type: "number",
                                placeholder: "Eg. 6",
                                id: "totalFloors",
                                name: "floors"
                              },
                              domProps: { value: _vm.form.floors },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.form,
                                    "floors",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c("has-error", {
                              attrs: { form: _vm.form, field: "floors" }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "col-sm-6 col-md-5 col-lg-3 mb-2" },
                          [
                            _c(
                              "label",
                              {
                                staticClass: "font-weight-light",
                                attrs: { for: "furnished" }
                              },
                              [_vm._v("Furnishing Status :")]
                            ),
                            _vm._v(" "),
                            _c(
                              "select",
                              {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.furnish_status,
                                    expression: "form.furnish_status"
                                  }
                                ],
                                staticClass: "form-control",
                                class: {
                                  "is-invalid": _vm.form.errors.has(
                                    "furnish_status"
                                  )
                                },
                                attrs: {
                                  id: "furnished",
                                  name: "furnish_status"
                                },
                                on: {
                                  change: function($event) {
                                    var $$selectedVal = Array.prototype.filter
                                      .call($event.target.options, function(o) {
                                        return o.selected
                                      })
                                      .map(function(o) {
                                        var val =
                                          "_value" in o ? o._value : o.value
                                        return val
                                      })
                                    _vm.$set(
                                      _vm.form,
                                      "furnish_status",
                                      $event.target.multiple
                                        ? $$selectedVal
                                        : $$selectedVal[0]
                                    )
                                  }
                                }
                              },
                              [
                                _c(
                                  "option",
                                  {
                                    attrs: { value: "", disabled: "disabled" }
                                  },
                                  [_vm._v("Select One")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "option",
                                  { attrs: { value: "unfurnished" } },
                                  [_vm._v("Unfurnished")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "option",
                                  { attrs: { value: "semi-furnished" } },
                                  [_vm._v("Semi Furnished")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "option",
                                  { attrs: { value: "furnished" } },
                                  [_vm._v("Furnished")]
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c("has-error", {
                              attrs: { form: _vm.form, field: "furnish_status" }
                            })
                          ],
                          1
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "my-3" }, [
                        _vm._m(13),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "form-row my-3 d-flex flex-row" },
                          [
                            _c(
                              "div",
                              {
                                staticClass: "col-sm-5 col-md-4 col-lg-2 mb-3"
                              },
                              [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.form.kitchen,
                                      expression: "form.kitchen"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  class: {
                                    "is-invalid": _vm.form.errors.has("kitchen")
                                  },
                                  attrs: {
                                    type: "number",
                                    placeholder: "Kitchen",
                                    id: "kitchen",
                                    name: "kitchen"
                                  },
                                  domProps: { value: _vm.form.kitchen },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.form,
                                        "kitchen",
                                        $event.target.value
                                      )
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _c("has-error", {
                                  attrs: { form: _vm.form, field: "kitchen" }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass: "col-sm-5 col-md-4 col-lg-2 mb-3"
                              },
                              [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.form.bedroom,
                                      expression: "form.bedroom"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  class: {
                                    "is-invalid": _vm.form.errors.has("bedroom")
                                  },
                                  attrs: {
                                    type: "number",
                                    placeholder: "Bedroom",
                                    id: "bedroom",
                                    name: "bedroom"
                                  },
                                  domProps: { value: _vm.form.bedroom },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.form,
                                        "bedroom",
                                        $event.target.value
                                      )
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _c("has-error", {
                                  attrs: { form: _vm.form, field: "bedroom" }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass: "col-sm-5 col-md-4 col-lg-2 mb-3"
                              },
                              [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.form.bathroom,
                                      expression: "form.bathroom"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  class: {
                                    "is-invalid": _vm.form.errors.has(
                                      "bathroom"
                                    )
                                  },
                                  attrs: {
                                    type: "number",
                                    placeholder: "Bathroom",
                                    id: "bathroom",
                                    name: "bathroom"
                                  },
                                  domProps: { value: _vm.form.bathroom },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.form,
                                        "bathroom",
                                        $event.target.value
                                      )
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _c("has-error", {
                                  attrs: { form: _vm.form, field: "bathroom" }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass: "col-sm-5 col-md-4 col-lg-2 mb-3"
                              },
                              [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.form.living_room,
                                      expression: "form.living_room"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  class: {
                                    "is-invalid": _vm.form.errors.has(
                                      "living_room"
                                    )
                                  },
                                  attrs: {
                                    type: "number",
                                    placeholder: "Living Room",
                                    id: "livingRoom",
                                    name: "living_room"
                                  },
                                  domProps: { value: _vm.form.living_room },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.form,
                                        "living_room",
                                        $event.target.value
                                      )
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _c("has-error", {
                                  attrs: {
                                    form: _vm.form,
                                    field: "living_room"
                                  }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass: "col-sm-5 col-md-4 col-lg-2 mb-3"
                              },
                              [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.form.parking,
                                      expression: "form.parking"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  class: {
                                    "is-invalid": _vm.form.errors.has("parking")
                                  },
                                  attrs: {
                                    type: "number",
                                    placeholder: "Parking",
                                    id: "parking",
                                    name: "parking"
                                  },
                                  domProps: { value: _vm.form.parking },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.form,
                                        "parking",
                                        $event.target.value
                                      )
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _c("has-error", {
                                  attrs: { form: _vm.form, field: "parking" }
                                })
                              ],
                              1
                            )
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "my-2" }, [
                        _vm._m(14),
                        _vm._v(" "),
                        _c("div", { staticClass: " mr-1" }, [
                          _c(
                            "div",
                            {
                              staticClass:
                                "form-row my-3 d-flex justify-content-start text-center",
                              attrs: { id: "amenities" }
                            },
                            [
                              _c("div", [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.form.amenities,
                                      expression: "form.amenities"
                                    }
                                  ],
                                  staticClass: "form-check-input",
                                  attrs: {
                                    type: "checkbox",
                                    value: "lawn",
                                    id: "lawn",
                                    name: "lawn"
                                  },
                                  domProps: {
                                    checked: Array.isArray(_vm.form.amenities)
                                      ? _vm._i(_vm.form.amenities, "lawn") > -1
                                      : _vm.form.amenities
                                  },
                                  on: {
                                    change: function($event) {
                                      var $$a = _vm.form.amenities,
                                        $$el = $event.target,
                                        $$c = $$el.checked ? true : false
                                      if (Array.isArray($$a)) {
                                        var $$v = "lawn",
                                          $$i = _vm._i($$a, $$v)
                                        if ($$el.checked) {
                                          $$i < 0 &&
                                            _vm.$set(
                                              _vm.form,
                                              "amenities",
                                              $$a.concat([$$v])
                                            )
                                        } else {
                                          $$i > -1 &&
                                            _vm.$set(
                                              _vm.form,
                                              "amenities",
                                              $$a
                                                .slice(0, $$i)
                                                .concat($$a.slice($$i + 1))
                                            )
                                        }
                                      } else {
                                        _vm.$set(_vm.form, "amenities", $$c)
                                      }
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _vm._m(15)
                              ]),
                              _vm._v(" "),
                              _c("div", [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.form.amenities,
                                      expression: "form.amenities"
                                    }
                                  ],
                                  staticClass: "form-check-input",
                                  attrs: {
                                    type: "checkbox",
                                    value: "garage",
                                    id: "garage",
                                    name: "garage"
                                  },
                                  domProps: {
                                    checked: Array.isArray(_vm.form.amenities)
                                      ? _vm._i(_vm.form.amenities, "garage") >
                                        -1
                                      : _vm.form.amenities
                                  },
                                  on: {
                                    change: function($event) {
                                      var $$a = _vm.form.amenities,
                                        $$el = $event.target,
                                        $$c = $$el.checked ? true : false
                                      if (Array.isArray($$a)) {
                                        var $$v = "garage",
                                          $$i = _vm._i($$a, $$v)
                                        if ($$el.checked) {
                                          $$i < 0 &&
                                            _vm.$set(
                                              _vm.form,
                                              "amenities",
                                              $$a.concat([$$v])
                                            )
                                        } else {
                                          $$i > -1 &&
                                            _vm.$set(
                                              _vm.form,
                                              "amenities",
                                              $$a
                                                .slice(0, $$i)
                                                .concat($$a.slice($$i + 1))
                                            )
                                        }
                                      } else {
                                        _vm.$set(_vm.form, "amenities", $$c)
                                      }
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _vm._m(16)
                              ]),
                              _vm._v(" "),
                              _c("div", [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.form.amenities,
                                      expression: "form.amenities"
                                    }
                                  ],
                                  staticClass: "form-check-input",
                                  attrs: {
                                    type: "checkbox",
                                    value: "frontyard",
                                    id: "frontyard",
                                    name: "frontyard"
                                  },
                                  domProps: {
                                    checked: Array.isArray(_vm.form.amenities)
                                      ? _vm._i(
                                          _vm.form.amenities,
                                          "frontyard"
                                        ) > -1
                                      : _vm.form.amenities
                                  },
                                  on: {
                                    change: function($event) {
                                      var $$a = _vm.form.amenities,
                                        $$el = $event.target,
                                        $$c = $$el.checked ? true : false
                                      if (Array.isArray($$a)) {
                                        var $$v = "frontyard",
                                          $$i = _vm._i($$a, $$v)
                                        if ($$el.checked) {
                                          $$i < 0 &&
                                            _vm.$set(
                                              _vm.form,
                                              "amenities",
                                              $$a.concat([$$v])
                                            )
                                        } else {
                                          $$i > -1 &&
                                            _vm.$set(
                                              _vm.form,
                                              "amenities",
                                              $$a
                                                .slice(0, $$i)
                                                .concat($$a.slice($$i + 1))
                                            )
                                        }
                                      } else {
                                        _vm.$set(_vm.form, "amenities", $$c)
                                      }
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _vm._m(17)
                              ]),
                              _vm._v(" "),
                              _c("div", [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.form.amenities,
                                      expression: "form.amenities"
                                    }
                                  ],
                                  staticClass: "form-check-input",
                                  attrs: {
                                    type: "checkbox",
                                    value: "backyard",
                                    id: "backyard",
                                    name: "backyard"
                                  },
                                  domProps: {
                                    checked: Array.isArray(_vm.form.amenities)
                                      ? _vm._i(_vm.form.amenities, "backyard") >
                                        -1
                                      : _vm.form.amenities
                                  },
                                  on: {
                                    change: function($event) {
                                      var $$a = _vm.form.amenities,
                                        $$el = $event.target,
                                        $$c = $$el.checked ? true : false
                                      if (Array.isArray($$a)) {
                                        var $$v = "backyard",
                                          $$i = _vm._i($$a, $$v)
                                        if ($$el.checked) {
                                          $$i < 0 &&
                                            _vm.$set(
                                              _vm.form,
                                              "amenities",
                                              $$a.concat([$$v])
                                            )
                                        } else {
                                          $$i > -1 &&
                                            _vm.$set(
                                              _vm.form,
                                              "amenities",
                                              $$a
                                                .slice(0, $$i)
                                                .concat($$a.slice($$i + 1))
                                            )
                                        }
                                      } else {
                                        _vm.$set(_vm.form, "amenities", $$c)
                                      }
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _vm._m(18)
                              ]),
                              _vm._v(" "),
                              _c("div", [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.form.amenities,
                                      expression: "form.amenities"
                                    }
                                  ],
                                  staticClass: "form-check-input",
                                  attrs: {
                                    type: "checkbox",
                                    value: "balcony",
                                    id: "balcony",
                                    name: "balcony"
                                  },
                                  domProps: {
                                    checked: Array.isArray(_vm.form.amenities)
                                      ? _vm._i(_vm.form.amenities, "balcony") >
                                        -1
                                      : _vm.form.amenities
                                  },
                                  on: {
                                    change: function($event) {
                                      var $$a = _vm.form.amenities,
                                        $$el = $event.target,
                                        $$c = $$el.checked ? true : false
                                      if (Array.isArray($$a)) {
                                        var $$v = "balcony",
                                          $$i = _vm._i($$a, $$v)
                                        if ($$el.checked) {
                                          $$i < 0 &&
                                            _vm.$set(
                                              _vm.form,
                                              "amenities",
                                              $$a.concat([$$v])
                                            )
                                        } else {
                                          $$i > -1 &&
                                            _vm.$set(
                                              _vm.form,
                                              "amenities",
                                              $$a
                                                .slice(0, $$i)
                                                .concat($$a.slice($$i + 1))
                                            )
                                        }
                                      } else {
                                        _vm.$set(_vm.form, "amenities", $$c)
                                      }
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _vm._m(19)
                              ]),
                              _vm._v(" "),
                              _c("div", [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.form.amenities,
                                      expression: "form.amenities"
                                    }
                                  ],
                                  staticClass: "form-check-input",
                                  attrs: {
                                    type: "checkbox",
                                    value: "swimming-pool",
                                    id: "swimmingPool",
                                    name: "pool"
                                  },
                                  domProps: {
                                    checked: Array.isArray(_vm.form.amenities)
                                      ? _vm._i(
                                          _vm.form.amenities,
                                          "swimming-pool"
                                        ) > -1
                                      : _vm.form.amenities
                                  },
                                  on: {
                                    change: function($event) {
                                      var $$a = _vm.form.amenities,
                                        $$el = $event.target,
                                        $$c = $$el.checked ? true : false
                                      if (Array.isArray($$a)) {
                                        var $$v = "swimming-pool",
                                          $$i = _vm._i($$a, $$v)
                                        if ($$el.checked) {
                                          $$i < 0 &&
                                            _vm.$set(
                                              _vm.form,
                                              "amenities",
                                              $$a.concat([$$v])
                                            )
                                        } else {
                                          $$i > -1 &&
                                            _vm.$set(
                                              _vm.form,
                                              "amenities",
                                              $$a
                                                .slice(0, $$i)
                                                .concat($$a.slice($$i + 1))
                                            )
                                        }
                                      } else {
                                        _vm.$set(_vm.form, "amenities", $$c)
                                      }
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _vm._m(20)
                              ]),
                              _vm._v(" "),
                              _c("div", [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.form.amenities,
                                      expression: "form.amenities"
                                    }
                                  ],
                                  staticClass: "form-check-input",
                                  attrs: {
                                    type: "checkbox",
                                    value: "tv-cable",
                                    id: "tvCable",
                                    name: "cable"
                                  },
                                  domProps: {
                                    checked: Array.isArray(_vm.form.amenities)
                                      ? _vm._i(_vm.form.amenities, "tv-cable") >
                                        -1
                                      : _vm.form.amenities
                                  },
                                  on: {
                                    change: function($event) {
                                      var $$a = _vm.form.amenities,
                                        $$el = $event.target,
                                        $$c = $$el.checked ? true : false
                                      if (Array.isArray($$a)) {
                                        var $$v = "tv-cable",
                                          $$i = _vm._i($$a, $$v)
                                        if ($$el.checked) {
                                          $$i < 0 &&
                                            _vm.$set(
                                              _vm.form,
                                              "amenities",
                                              $$a.concat([$$v])
                                            )
                                        } else {
                                          $$i > -1 &&
                                            _vm.$set(
                                              _vm.form,
                                              "amenities",
                                              $$a
                                                .slice(0, $$i)
                                                .concat($$a.slice($$i + 1))
                                            )
                                        }
                                      } else {
                                        _vm.$set(_vm.form, "amenities", $$c)
                                      }
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _vm._m(21)
                              ]),
                              _vm._v(" "),
                              _c("div", [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.form.amenities,
                                      expression: "form.amenities"
                                    }
                                  ],
                                  staticClass: "form-check-input",
                                  attrs: {
                                    type: "checkbox",
                                    value: "washing-machine",
                                    id: "washingMachine",
                                    name: "washing_machine"
                                  },
                                  domProps: {
                                    checked: Array.isArray(_vm.form.amenities)
                                      ? _vm._i(
                                          _vm.form.amenities,
                                          "washing-machine"
                                        ) > -1
                                      : _vm.form.amenities
                                  },
                                  on: {
                                    change: function($event) {
                                      var $$a = _vm.form.amenities,
                                        $$el = $event.target,
                                        $$c = $$el.checked ? true : false
                                      if (Array.isArray($$a)) {
                                        var $$v = "washing-machine",
                                          $$i = _vm._i($$a, $$v)
                                        if ($$el.checked) {
                                          $$i < 0 &&
                                            _vm.$set(
                                              _vm.form,
                                              "amenities",
                                              $$a.concat([$$v])
                                            )
                                        } else {
                                          $$i > -1 &&
                                            _vm.$set(
                                              _vm.form,
                                              "amenities",
                                              $$a
                                                .slice(0, $$i)
                                                .concat($$a.slice($$i + 1))
                                            )
                                        }
                                      } else {
                                        _vm.$set(_vm.form, "amenities", $$c)
                                      }
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _vm._m(22)
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
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "container-fluid my-2 py-3 border bg-light" },
          [
            _c("div", { staticClass: "col-12" }, [
              _c("div", { staticClass: "my-3" }, [
                _vm._m(23),
                _vm._v(" "),
                _c("div", { staticClass: "form-row my-4" }, [
                  _c(
                    "div",
                    {
                      staticClass: "col-10 justify-content-center",
                      class: { "is-invalid": _vm.form.errors.has("images") }
                    },
                    [
                      _c("div", { staticClass: "helper" }),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "drop display-inline align-center",
                          on: {
                            dragover: function($event) {
                              $event.preventDefault()
                            },
                            drop: _vm.onDrop
                          }
                        },
                        [
                          _c("div", { staticClass: "helper" }),
                          _vm._v(" "),
                          !_vm.image
                            ? _c(
                                "label",
                                { staticClass: "btn display-inline" },
                                [
                                  _vm._v(
                                    "\n                                    SELECT OR DROP AN IMAGE\n                                    "
                                  ),
                                  _c("input", {
                                    attrs: {
                                      type: "file",
                                      name: "images",
                                      multiple: ""
                                    },
                                    on: { change: _vm.onChange }
                                  })
                                ]
                              )
                            : _c(
                                "div",
                                {
                                  staticClass:
                                    "hidden display-inline align-center",
                                  class: { image: true }
                                },
                                [
                                  _c("img", {
                                    staticClass: "img",
                                    attrs: { src: _vm.image, alt: "" }
                                  }),
                                  _vm._v(" "),
                                  _c("br"),
                                  _vm._v(" "),
                                  _c("br"),
                                  _vm._v(" "),
                                  _c(
                                    "button",
                                    {
                                      staticClass: "btn",
                                      on: { click: _vm.removeFile }
                                    },
                                    [_vm._v("REMOVE")]
                                  ),
                                  _vm._v(
                                    "\n                                    " +
                                      _vm._s(_vm.imageCount) +
                                      " Files Chosen"
                                  ),
                                  _c("br")
                                ]
                              )
                        ]
                      ),
                      _vm._v(" "),
                      !_vm.image
                        ? _c("span", { staticStyle: { color: "red" } }, [
                            _vm._v("*Image Field is required")
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _c("has-error", {
                        attrs: { form: _vm.form, field: "images" }
                      })
                    ],
                    1
                  )
                ])
              ])
            ])
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "container-fluid my-2 py-3 border bg-light" },
          [
            _c("div", { staticClass: "col-12" }, [
              _c("div", { staticClass: "my-2" }, [
                _vm._m(24),
                _vm._v(" "),
                _c("div", { staticClass: "form-row my-3" }, [
                  _c(
                    "div",
                    { staticClass: "col-sm-6 col-md-5 col-lg-4" },
                    [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.title,
                            expression: "form.title"
                          }
                        ],
                        staticClass: "form-control",
                        class: { "is-invalid": _vm.form.errors.has("title") },
                        attrs: {
                          type: "text",
                          placeholder: "Property Title",
                          id: "propertyTitle",
                          name: "title"
                        },
                        domProps: { value: _vm.form.title },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.form, "title", $event.target.value)
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c("has-error", {
                        attrs: { form: _vm.form, field: "title" }
                      })
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _vm._m(25),
                _vm._v(" "),
                _c("div", { staticClass: "form-row my-3" }, [
                  _c(
                    "div",
                    { staticClass: "col-sm-10 col-md-9 col-lg-8" },
                    [
                      _c("textarea", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.description,
                            expression: "form.description"
                          }
                        ],
                        staticClass: "form-control",
                        class: {
                          "is-invalid": _vm.form.errors.has("description")
                        },
                        attrs: {
                          placeholder: "Few descriptions about your property",
                          name: "description",
                          rows: "6"
                        },
                        domProps: { value: _vm.form.description },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.form,
                              "description",
                              $event.target.value
                            )
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c("has-error", {
                        attrs: { form: _vm.form, field: "description" }
                      })
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _vm._m(26),
                _vm._v(" "),
                _c("div", { staticClass: "form-row my-3" }, [
                  _c(
                    "div",
                    { staticClass: "col-sm-6 col-md-4 col-lg-3 mb-3" },
                    [
                      _c(
                        "label",
                        {
                          staticClass: "font-weight-light",
                          attrs: { for: "perUnit" }
                        },
                        [_vm._v("Cost Price")]
                      ),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.price,
                            expression: "form.price"
                          }
                        ],
                        staticClass: "form-control",
                        class: { "is-invalid": _vm.form.errors.has("price") },
                        attrs: {
                          type: "number",
                          placeholder: "Property Price",
                          id: "propertyPrice",
                          name: "price"
                        },
                        domProps: { value: _vm.form.price },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.form, "price", $event.target.value)
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c("has-error", {
                        attrs: { form: _vm.form, field: "price" }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.land,
                          expression: "land"
                        }
                      ],
                      staticClass: "col-sm-6 col-md-4 col-lg-3"
                    },
                    [
                      _c(
                        "label",
                        {
                          staticClass: "font-weight-light",
                          attrs: { for: "perUnit" }
                        },
                        [_vm._v("Measurement Unit")]
                      ),
                      _vm._v(" "),
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.price_unit,
                              expression: "form.price_unit"
                            }
                          ],
                          staticClass: "form-control",
                          class: {
                            "is-invalid": _vm.form.errors.has("price_unit")
                          },
                          attrs: { id: "perUnit", name: "price_unit" },
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
                                "price_unit",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            }
                          }
                        },
                        [
                          _c(
                            "option",
                            { attrs: { value: "", disabled: "disabled" } },
                            [_vm._v("Select Per unit")]
                          ),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "sqFt" } }, [
                            _vm._v("Per Sq.ft")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "Ropani" } }, [
                            _vm._v("Per Ropani")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "Aana" } }, [
                            _vm._v("Per Aana")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "Paisa" } }, [
                            _vm._v("Per Paisa")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "Daam" } }, [
                            _vm._v("Per Daam")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "Bigha" } }, [
                            _vm._v("Per Bigha")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "Acres" } }, [
                            _vm._v("Per Acres")
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c("has-error", {
                        attrs: { form: _vm.form, field: "price_unit" }
                      })
                    ],
                    1
                  )
                ])
              ])
            ])
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "container-fluid my-2 py-3 border bg-light" },
          [
            _c("div", { staticClass: "col-12" }, [
              _c("div", { staticClass: "my-2" }, [
                _c(
                  "div",
                  { staticClass: "form-row my-3" },
                  [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.owner_id,
                          expression: "form.owner_id"
                        }
                      ],
                      staticClass: "form-control",
                      class: { "is-invalid": _vm.form.errors.has("owner_id") },
                      attrs: {
                        type: "hidden",
                        id: "ownerEmail",
                        name: "owner_id"
                      },
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
                    _c("has-error", {
                      attrs: { form: _vm.form, field: "owner_id" }
                    }),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "my-2 col-12" },
                      [
                        _vm.$store.getters.isEdit
                          ? [
                              _c("input", {
                                staticClass: "btn btn-primary",
                                attrs: {
                                  type: "submit",
                                  name: "submit",
                                  value: "Update Property"
                                }
                              })
                            ]
                          : [
                              _c("input", {
                                staticClass: "btn btn-primary",
                                attrs: {
                                  type: "submit",
                                  name: "submit",
                                  value: "Add Property"
                                }
                              })
                            ]
                      ],
                      2
                    )
                  ],
                  1
                )
              ])
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
    return _c("div", { staticClass: "section-title text-dark" }, [
      _c("h5", { staticClass: "font-weight-bold" }, [_vm._v("I want to : ")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "section-title text-dark mt-3" }, [
      _c("h6", { staticClass: "font-weight-bold" }, [
        _vm._v("Property Type : ")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "label",
      {
        staticClass: "form-check-label py-1 px-2  ",
        attrs: { for: "residential" }
      },
      [
        _c("i", { staticClass: "fas fa-home" }),
        _vm._v(
          "\n                            Residential\n                        "
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "label",
      {
        staticClass: "form-check-label py-1 px-2 ml-3",
        attrs: { for: "commercial" }
      },
      [
        _c("i", { staticClass: "fas fa-industry" }),
        _vm._v(
          "\n                            Commercial\n                        "
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "section-title text-dark mt-2" }, [
      _c("h6", { staticClass: "font-weight-bold" }, [
        _vm._v("Property Category : ")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "label",
      {
        staticClass:
          "form-check-label py-2 px-3 d-flex flex-column align-items-center justify-content-center",
        attrs: { for: "house" }
      },
      [
        _c("i", { staticClass: "fas fa-home" }),
        _vm._v("\n                            House\n                        ")
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "label",
      {
        staticClass:
          "form-check-label py-2 px-3 ml-3 d-flex flex-column align-items-center justify-content-center",
        attrs: { for: "land" }
      },
      [
        _c("i", { staticClass: "fas fa-layer-group" }),
        _vm._v("\n                            Land\n                        ")
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "label",
      {
        staticClass:
          "form-check-label py-2 px-3 ml-3 d-flex flex-column align-items-center justify-content-center",
        attrs: { for: "apartment" }
      },
      [
        _c("i", { staticClass: "fas fa-industry" }),
        _vm._v(
          "\n                            Apartment\n                        "
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "section-title text-dark mt-2" }, [
      _c("h5", { staticClass: "font-weight-bold" }, [
        _vm._v("Address Details:")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "section-title text-dark mt-2" }, [
      _c("h5", { staticClass: "font-weight-bold" }, [
        _vm._v("Area (in aana) : ")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "section-title text-dark mt-2" }, [
      _c("h6", [_vm._v("Property Face : ")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "section-title text-dark mt-2" }, [
      _c("h5", { staticClass: "font-weight-bold" }, [_vm._v("Road Details: ")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "section-title text-dark" }, [
      _c("h5", { staticClass: "font-weight-bold" }, [
        _vm._v("Building Details : ")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "section-title text-dark" }, [
      _c("h5", { staticClass: "font-weight-bold" }, [
        _vm._v("Features (in numbers) : ")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "section-title text-dark mt-2" }, [
      _c("h5", { staticClass: "font-weight-bold" }, [_vm._v("Amenities : ")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "label",
      {
        staticClass: "form-check-label py-2 px-2 ml-3 mb-2",
        attrs: { for: "lawn" }
      },
      [_c("small", [_vm._v("Lawn")])]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "label",
      {
        staticClass: "form-check-label py-2 px-2 ml-3 mb-2",
        attrs: { for: "garage" }
      },
      [_c("small", [_vm._v("Garage")])]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "label",
      {
        staticClass: "form-check-label py-2 px-2 ml-3 mb-2",
        attrs: { for: "frontyard" }
      },
      [_c("small", [_vm._v("Frontyard")])]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "label",
      {
        staticClass: "form-check-label py-2 px-2 ml-3 mb-2",
        attrs: { for: "backyard" }
      },
      [_c("small", [_vm._v("Backyard")])]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "label",
      {
        staticClass: "form-check-label py-2 px-2 ml-3 mb-2",
        attrs: { for: "balcony" }
      },
      [_c("small", [_vm._v("Balcony")])]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "label",
      {
        staticClass: "form-check-label py-2 px-2 ml-3 mb-2",
        attrs: { for: "swimmingPool" }
      },
      [_c("small", [_vm._v("Swimming Pool")])]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "label",
      {
        staticClass: "form-check-label py-2 px-2 ml-3 mb-2",
        attrs: { for: "tvCable" }
      },
      [_c("small", [_vm._v("TV Cable")])]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "label",
      {
        staticClass: "form-check-label py-2 px-2 ml-3 mb-2",
        attrs: { for: "washingMachine" }
      },
      [_c("small", [_vm._v("Washing Machine")])]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "section-title text-dark" }, [
      _c("h5", { staticClass: "font-weight-bold" }, [
        _vm._v("Upload Photos : ")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "section-title text-dark" }, [
      _c("h5", { staticClass: "font-weight-bold" }, [
        _vm._v("Property Title : ")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "section-title text-dark" }, [
      _c("h5", { staticClass: "font-weight-bold" }, [
        _vm._v("Property Description : ")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "section-title text-dark" }, [
      _c("h5", { staticClass: "font-weight-bold" }, [_vm._v("Price Amount : ")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Frontend/CMS/Property/AddProperty.vue":
/*!***********************************************************************!*\
  !*** ./resources/js/components/Frontend/CMS/Property/AddProperty.vue ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AddProperty_vue_vue_type_template_id_15cb5284_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddProperty.vue?vue&type=template&id=15cb5284&scoped=true& */ "./resources/js/components/Frontend/CMS/Property/AddProperty.vue?vue&type=template&id=15cb5284&scoped=true&");
/* harmony import */ var _AddProperty_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddProperty.vue?vue&type=script&lang=js& */ "./resources/js/components/Frontend/CMS/Property/AddProperty.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _AddProperty_vue_vue_type_style_index_0_id_15cb5284_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AddProperty.vue?vue&type=style&index=0&id=15cb5284&scoped=true&lang=css& */ "./resources/js/components/Frontend/CMS/Property/AddProperty.vue?vue&type=style&index=0&id=15cb5284&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AddProperty_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AddProperty_vue_vue_type_template_id_15cb5284_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AddProperty_vue_vue_type_template_id_15cb5284_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "15cb5284",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Frontend/CMS/Property/AddProperty.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Frontend/CMS/Property/AddProperty.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/Frontend/CMS/Property/AddProperty.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddProperty_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AddProperty.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Frontend/CMS/Property/AddProperty.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddProperty_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Frontend/CMS/Property/AddProperty.vue?vue&type=style&index=0&id=15cb5284&scoped=true&lang=css&":
/*!********************************************************************************************************************************!*\
  !*** ./resources/js/components/Frontend/CMS/Property/AddProperty.vue?vue&type=style&index=0&id=15cb5284&scoped=true&lang=css& ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddProperty_vue_vue_type_style_index_0_id_15cb5284_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader??ref--6-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AddProperty.vue?vue&type=style&index=0&id=15cb5284&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Frontend/CMS/Property/AddProperty.vue?vue&type=style&index=0&id=15cb5284&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddProperty_vue_vue_type_style_index_0_id_15cb5284_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddProperty_vue_vue_type_style_index_0_id_15cb5284_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddProperty_vue_vue_type_style_index_0_id_15cb5284_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddProperty_vue_vue_type_style_index_0_id_15cb5284_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddProperty_vue_vue_type_style_index_0_id_15cb5284_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/Frontend/CMS/Property/AddProperty.vue?vue&type=template&id=15cb5284&scoped=true&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/components/Frontend/CMS/Property/AddProperty.vue?vue&type=template&id=15cb5284&scoped=true& ***!
  \******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddProperty_vue_vue_type_template_id_15cb5284_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AddProperty.vue?vue&type=template&id=15cb5284&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Frontend/CMS/Property/AddProperty.vue?vue&type=template&id=15cb5284&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddProperty_vue_vue_type_template_id_15cb5284_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddProperty_vue_vue_type_template_id_15cb5284_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);