(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Frontend/Property.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Frontend/Property.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/debounce */ "./node_modules/lodash/debounce.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_1__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "Property.vue",
  data: function data() {
    return {
      firstHidden: true,
      hidden: true,
      val: '',
      isActive: false,
      //Sell Rent Toggle
      isInactive: false,
      //Sell Rent Toggle
      resActive: false,
      //Residential Toggle
      comActive: false,
      //Commercial Toggle
      filterValue: {},
      year: '',
      loader: false,
      sort: 'nosort',
      noresult: false,
      high: 'high',
      low: 'low',
      latest: 'latest',
      oldest: 'oldest',
      categories: [{
        value: 'House'
      }, {
        value: 'Land'
      }, {
        value: 'Apartment'
      }],
      //Commercial Toggle
      crores: [{
        value: '1 Cr.'
      }, {
        value: '2 Cr.'
      }, {
        value: '5 Cr.'
      }, {
        value: '10 Cr.'
      }, {
        value: '20 Cr.'
      }, {
        value: '50 Cr.'
      }, {
        value: '100 Cr.'
      }],
      roadTypes: [{
        value: 'Gravelled'
      }, {
        value: 'Paved'
      }, {
        value: 'Blacktopped'
      }, {
        value: 'Alley'
      }, {
        value: 'Soil Stabilized'
      }],
      image: '',
      properties: {},
      propAlt: {},
      owner: {},
      status: '',
      locations: {},
      purposes: 'Buy',
      form: new Form({
        location: '',
        built_year: ''
      })
    };
  },
  created: function created() {
    var _this = this;

    window.scrollTo(0, 0);
    this.year = new Date().getFullYear() - 1900;
    this.loadProperties();
    this.$on('AfterCreate', function () {
      _this.loadProperties();
    });
    this.loadLocations();
  },
  mounted: function mounted() {
    //for redirect to specific category
    var para = this.$route.params.category;

    if (typeof para !== 'undefined') {
      var tag = 'cus_' + para.charAt(0).toUpperCase() + para.slice(1);
      document.getElementById(tag).click();
      this.addToFilter('category', para.toLowerCase());
    }

    var search = this.$route.params.location;

    if (typeof search !== 'undefined') {
      this.addToFilter('location', this.$route.params.location);
      this.firstHidden = false;
    }

    var purpose = this.$route.params.purpose;

    if (typeof purpose !== 'undefined') {
      this.toggleSaleRent(purpose.toLowerCase());
    }
  },
  methods: {
    //reset data
    resetData: function resetData() {
      Object.assign(this.$data, this.$options.data.call(this));
    },
    // Getting SVG file for cancel button in Filter Section
    getCancelSvgImage: function getCancelSvgImage() {
      return "images/cross-sign.svg";
    },
    loadLocations: function () {
      var _loadLocations = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _this2 = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return axios.get('/api/location').then(function (data) {
                  _this2.locations = data.data;
                });

              case 3:
                _context.next = 8;
                break;

              case 5:
                _context.prev = 5;
                _context.t0 = _context["catch"](0);
                console.log(_context.t0);

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 5]]);
      }));

      function loadLocations() {
        return _loadLocations.apply(this, arguments);
      }

      return loadLocations;
    }(),
    //get owner id and check logged or not
    checkLoggedIn: function checkLoggedIn() {
      return this.$store.getters.isLoggedIn;
    },
    //clear all selected options
    clearSelected: function clearSelected(id) {
      this.removeFilter('location');
      this.form.location = "No Selection";
      this.firstHidden = true;
    },
    clearSelectSort: function clearSelectSort() {
      this.removeFilter('sort');
      this.sort = "nosort";
      this.hidden = true;
    },
    removeElement: function removeElement(index) {
      this.filterValue.splice(index, 1);
    },
    //method for favorites
    getClassFavorites: function getClassFavorites() {
      var _this3 = this;

      axios.get('/api/getFavorites/' + 1 + '/' + 1).then(function (data) {
        _this3.val = data.data;
      })["catch"](function () {});
      return {
        'fas': this.val,
        'far': !this.val
      };
    },
    changeHeart: function changeHeart(e) {
      if (e.target.classList.contains('far')) {
        e.target.classList.remove('far');
        e.target.classList.add('fas');
        axios.post('/api/userfavorite', {
          user_id: 1,
          prop_id: 1
        }).then(function () {
          Toast.fire({
            type: 'success',
            title: 'Property Added to Favorites !!!'
          });
        });
      } else {
        //when solid
        e.target.classList.add('far');
        e.target.classList.remove('fas');
        axios["delete"]('/api/deleteFavorites/' + 1 + '/' + 1).then(function () {
          Toast.fire({
            type: 'warning',
            title: 'Property removed from Favorites !!!'
          });
        });
      }
    },
    //end of favorite section
    //filter section starts
    changeValue: function changeValue(str) {
      if (str === 'location') {
        if (this.form.location === 'nolocation') {
          this.removeFilter('location');
          this.firstHidden = true;
        } else {
          this.addToFilter('location', this.form.location);
          this.firstHidden = false;
        }
      } else if (str === 'sort') {
        if (this.sort === 'nosort') {
          this.removeFilter('sort');
          this.hidden = true;
        } else {
          this.addToFilter('sort', this.sort);
          this.hidden = false;
        }
      } else if (str === 'year') {
        if (this.form.built_year.length === 0) {
          this.removeFilter('built_year');
        } else {
          this.addToFilter('built_year', this.form.built_year);
        }
      }
    },
    addToFilter: function addToFilter(key, value) {
      this.filterValue[key] = value;
      this.submitFilter();
      this.loader = true;
    },
    removeTag: function removeTag(key) {
      delete this.filterValue[key];

      switch (key) {
        case 'purpose':
          this.isActive = false;
          this.isInactive = false;
          break;

        case 'type':
          this.resActive = false;
          this.comActive = false;
          break;

        case 'category':
          var select = event.target.parentNode;
          select.removeChild(select.childNodes[0]);
          var el = document.getElementById('categ');
          var child = el.childNodes; // Remove active class from all other crores buttons

          for (var i = 0; i < child.length; i++) {
            el.childNodes[i].childNodes[0].classList.remove('active');
          }

          break;

        case 'road_type':
          var select1 = event.target;
          select1.parentNode.removeChild(select1);
          this.tagRemoveHelper('road');
          break;

        case 'price':
          var select2 = event.target;
          select2.parentNode.removeChild(select2);
          this.tagRemoveHelper('corer');
          break;
      }
    },
    tagRemoveHelper: function tagRemoveHelper(element) {
      var el = document.getElementById(element);
      var child = el.childNodes; // Remove active class from all other crores buttons

      for (var i = 0; i < child.length; i++) {
        el.childNodes[i].childNodes[0].classList.remove('active');
      }
    },
    removeFilter: function removeFilter(key) {
      delete this.filterValue[key];
      this.submitFilter();
      this.loader = true;
    },
    //wait for 2 seconds so that user is still inputting data
    //after 2 second only api request is send
    submitFilter: lodash_debounce__WEBPACK_IMPORTED_MODULE_1___default()(function () {
      var _this4 = this;

      var val = JSON.stringify(this.filterValue);
      axios.get('/api/getFilter/' + val).then(function (data) {
        _this4.loader = false;
        _this4.properties = data.data;
      })["catch"](function () {});
    }, 1000),
    //end of filter section
    toggleSaleRentRender: function toggleSaleRentRender(e) {
      if (e === 'sale') {
        this.isActive = true;
        this.isInactive = false;
        this.sellRent = 'sell';
        this.addToFilter('purpose', 'sell');
      } else if (e === 'rent') {
        this.isInactive = true;
        this.isActive = false;
        this.sellRent = 'rent';
        this.addToFilter('purpose', 'rent');
      }
    },
    // Filter Toggle Section Starts
    toggleSaleRent: function toggleSaleRent(e) {
      if (e == 'sale') {
        if (this.isActive) {
          this.isActive = false;
          this.removeFilter('purpose');
        } else {
          this.isActive = true;
          this.isInactive = false;
          this.sellRent = 'sell';
          this.addToFilter('purpose', 'sell');
        }
      } else if (e == 'rent') {
        if (this.isInactive) {
          this.isInactive = false;
          this.removeFilter('purpose');
        } else {
          this.isInactive = true;
          this.isActive = false;
          this.sellRent = 'rent';
          this.addToFilter('purpose', 'rent');
        }
      }
    },
    toggleResCom: function toggleResCom(e) {
      if (e == 'residential') {
        if (this.resActive) {
          this.resActive = false;
          this.removeFilter('type');
        } else {
          this.resActive = true;
          this.comActive = false;
          this.addToFilter('type', 'residential');
        }
      } else if (e == 'commercial') {
        if (this.comActive) {
          this.comActive = false;
          this.removeFilter('type');
        } else {
          this.comActive = true;
          this.resActive = false;
          this.addToFilter('type', 'commercial');
        }
      }
    },
    toggleCrore: function toggleCrore(e) {
      var val;

      switch (e) {
        case '1 Cr.':
          val = 100000000;
          break;

        case '2 Cr.':
          val = 200000000;
          break;

        case '5 Cr.':
          val = 500000000;
          break;

        case '10 Cr.':
          val = 1000000000;
          break;

        case '20 Cr.':
          val = 2000000000;
          break;

        case '50 Cr.':
          val = 5000000000;
          break;

        case '100 Cr.':
          val = 10000000000;
          break;
      }

      this.addToFilter('price', val);
      var parent = event.target.parentElement.parentElement;
      var el = event.target;
      var children = parent.childNodes;

      if (el.classList.contains('active')) {
        el.classList.remove('active');
        this.removeFilter('price');
        this.getClass(false);
      } else {
        // Remove active class from all other crores buttons
        for (var i = 0; i < children.length; i++) {
          children[i].childNodes[0].classList.remove('active');
        }

        el.classList.add('active');
        this.getClass(true);
      }
    },
    toggleRoadType: function toggleRoadType(e) {
      this.addToFilter('road_type', e);
      var parent = event.target.parentElement.parentElement;
      var el = event.target;
      var children = parent.childNodes;

      if (el.classList.contains('active')) {
        el.classList.remove('active');
        this.getClass(false);
        this.removeFilter('road_type');
      } else {
        // Remove active class from all other crores buttons
        for (var i = 0; i < children.length; i++) {
          children[i].childNodes[0].classList.remove('active');
        }

        el.classList.add('active');
        this.getClass(true);
      }
    },
    toggleCategories: function toggleCategories(e) {
      this.addToFilter('category', e);
      var parent = event.target.parentElement.parentElement;
      var el = event.target;
      var children = parent.childNodes;

      if (el.classList.contains('active')) {
        el.classList.remove('active');
        this.getClass(false);
        this.removeFilter('category');
      } else {
        // Remove active class from all other crores buttons
        for (var i = 0; i < children.length; i++) {
          children[i].childNodes[0].classList.remove('active');
        }

        el.classList.add('active');
        this.getClass(true);
      }
    },
    getClass: function getClass(val) {
      return {
        active: !val,
        'text-dark': val
      };
    },
    // Filter Toggle Section Ends
    getCoverImage: function getCoverImage() {
      return "/img/global/ktm.jpg";
    } //method for filter
    ,
    getResults: function getResults() {
      var _this5 = this;

      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var val = JSON.stringify(this.filterValue);
      axios.get('/api/getFilter/' + val + '?page=' + page).then(function (response) {
        _this5.properties = response.data;
      });
    },
    loadProperties: function loadProperties() {
      var _this6 = this;

      axios.get("/api/property").then(function (_ref) {
        var data = _ref.data;
        return _this6.properties = data;
      });
    },
    getPropertyImage: function getPropertyImage(src) {
      return "/img/thumbnail/" + src;
    },
    toggle: function toggle(event) {
      parent = event.target.parentElement;

      if (parent.tagName === 'SPAN') {
        parent = parent.parentElement;
      }

      var val = parent.childNodes[2].style.display;

      if (val === "none") {
        parent.childNodes[2].style.display = "block";
      } else {
        parent.childNodes[2].style.display = "none";
      }
    },
    toggleMobile: function toggleMobile(event) {
      parent = event.target.parentElement;
      var val = parent.childNodes[4].style.display;

      if (val === "block") {
        parent.childNodes[4].style.display = "none";
      } else {
        parent.childNodes[4].style.display = "block";
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Frontend/Property.vue?vue&type=style&index=0&id=964cc512&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Frontend/Property.vue?vue&type=style&index=0&id=964cc512&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".area b[data-v-964cc512] {\n  color: #435061;\n}\n@media only screen and (max-width: 500px) {\n.mobile-padding[data-v-964cc512] {\n    padding: 0;\n}\n}\n.mobile-filter[data-v-964cc512] {\n  display: block;\n}\n@media only screen and (max-width: 768px) {\n.mobile-filter[data-v-964cc512] {\n    display: none;\n}\n}\n@media only screen and (max-width: 768px) {\n.desktop-toggle[data-v-964cc512] {\n    display: none;\n}\n}\n@media only screen and (min-width: 900px) {\n.mobile-sort[data-v-964cc512] {\n    display: none;\n}\n}\n.mobile-sort input[data-v-964cc512] {\n  opacity: 0;\n}\n.mobile-toggle[data-v-964cc512] {\n  background: #38A1DA;\n  color: white;\n  text-align: center;\n  padding: 1rem;\n}\n@media only screen and (min-width: 800px) {\n.mobile-toggle[data-v-964cc512] {\n    display: none;\n}\n}\n.tags[data-v-964cc512] {\n  display: flex;\n  padding: 0 20px;\n  flex-wrap: wrap;\n}\n.tags .filter-tags[data-v-964cc512] {\n  margin-bottom: 5px;\n}\n.tags .filter-tags span[data-v-964cc512] {\n  font-size: 12px;\n  font-weight: 200;\n}\n.filter-header-container[data-v-964cc512] {\n  display: flex;\n  justify-content: space-between;\n  padding-right: 10px;\n}\n@media only screen and (max-width: 768px) {\n.filter-header-container[data-v-964cc512] {\n    display: none;\n}\n}\n.filter[data-v-964cc512] {\n  padding: 0 20px;\n}\n.toggleBtns button[data-v-964cc512] {\n  font-size: 14px;\n}\nli[data-v-964cc512] {\n  margin-bottom: 10px;\n}\nli span[data-v-964cc512] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 16px;\n}\n.card[data-v-964cc512] {\n  box-shadow: none !important;\n}\n.props[data-v-964cc512] {\n  position: relative;\n  overflow: hidden;\n}\n.category[data-v-964cc512] {\n  text-transform: uppercase;\n}\n.time span[data-v-964cc512] {\n  padding: 2px 10px;\n  color: white;\n  position: absolute;\n  font-size: 12px;\n  outline: none;\n  top: 1rem;\n  right: 1rem;\n  background: #38A1DA;\n}\n.sale-rent .sale[data-v-964cc512], .sale-rent .rent[data-v-964cc512] {\n  padding: 5px 40px;\n  color: white;\n  position: absolute;\n  font-size: 12px;\n  outline: none;\n  top: 0.7rem;\n  transform: rotate(321deg);\n  left: -2rem;\n}\n.sale-rent .sale[data-v-964cc512] {\n  background: #138655;\n}\n.sale-rent .rent[data-v-964cc512] {\n  background: #BA1518;\n}\ni span[data-v-964cc512] {\n  margin-left: 5px;\n  color: black;\n}\na[data-v-964cc512] {\n  color: #707070;\n}\na i[data-v-964cc512] {\n  color: #38A1DA;\n}\n.hideShow[data-v-964cc512] {\n  display: none;\n}\n\n/*css loader*/\n.property-container[data-v-964cc512] {\n  padding: 10vh 5vh;\n}\n.lds-facebook[data-v-964cc512] {\n  display: block;\n  position: relative;\n  width: 64px;\n  height: 64px;\n  margin: auto;\n  top: 10%;\n}\n.lds-facebook div[data-v-964cc512] {\n  display: inline-block;\n  position: absolute;\n  left: 6px;\n  width: 13px;\n  background: #38A1DA;\n  -webkit-animation: lds-facebook-data-v-964cc512 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;\n          animation: lds-facebook-data-v-964cc512 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;\n}\n.lds-facebook div[data-v-964cc512]:nth-child(1) {\n  left: 6px;\n  -webkit-animation-delay: -0.24s;\n          animation-delay: -0.24s;\n}\n.lds-facebook div[data-v-964cc512]:nth-child(2) {\n  left: 26px;\n  -webkit-animation-delay: -0.12s;\n          animation-delay: -0.12s;\n}\n.lds-facebook div[data-v-964cc512]:nth-child(3) {\n  left: 45px;\n  -webkit-animation-delay: 0s;\n          animation-delay: 0s;\n}\n@-webkit-keyframes lds-facebook-data-v-964cc512 {\n0% {\n    top: 6px;\n    height: 51px;\n}\n50%, 100% {\n    top: 19px;\n    height: 26px;\n}\n}\n@keyframes lds-facebook-data-v-964cc512 {\n0% {\n    top: 6px;\n    height: 51px;\n}\n50%, 100% {\n    top: 19px;\n    height: 26px;\n}\n}\n/* Buy Sell Button */\n.toggleBtns[data-v-964cc512] {\n  padding: 0;\n}\n.toggleBtns li[data-v-964cc512] {\n  list-style: none;\n  display: inline-block;\n}\n.toggleBtns li .btn-outline-primary[data-v-964cc512]:hover {\n  color: white !important;\n}\n\n/*this section is for image header*/\n.property_details_header[data-v-964cc512] {\n  width: 100%;\n  background: black;\n  height: 50vh;\n}\n@media only screen and (max-width: 1100px) {\n.property_details_header[data-v-964cc512] {\n    height: 35vh;\n}\n}\n.property_details_header img[data-v-964cc512] {\n  height: 100%;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  -o-object-position: top;\n     object-position: top;\n  opacity: 0.6;\n}\n.property_details_header .title[data-v-964cc512] {\n  position: relative;\n  top: -35vh;\n  font-size: 8vh;\n  font-weight: bold;\n  color: whitesmoke;\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  text-shadow: 4px 3px 0 #000;\n}\n@media only screen and (max-width: 1100px) {\n.property_details_header .title[data-v-964cc512] {\n    top: -15vh;\n    font-size: 4vh;\n}\n}\n.property_details_searchbar[data-v-964cc512] {\n  width: 100%;\n  position: relative;\n  top: -2px;\n}\n.property_details_searchbar .main_search_box[data-v-964cc512] {\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n.property_details_searchbar .main_search_box select[data-v-964cc512] {\n  border: gray solid 0.5px;\n  border-radius: 0;\n}\n.property_details_searchbar .main_search_box button[data-v-964cc512] {\n  border-radius: 0;\n}\n\n/*this section is for horizontal ruler*/\n.horizontal1[data-v-964cc512] {\n  top: 10%;\n}\n\n/*this section is for filter */\n.slide-down-hover[data-v-964cc512] {\n  color: #31A2E1;\n}\n.list-filter[data-v-964cc512] {\n  padding: 20px;\n  list-style-type: none;\n}\n\n/*---------------this section is for card display in right side*/\n.card-body[data-v-964cc512] {\n  padding-top: 8px;\n  padding-bottom: 8px;\n}\n.search-title[data-v-964cc512], .dropdown-sort[data-v-964cc512] {\n  display: inline;\n}\n.search-title[data-v-964cc512] {\n  color: #435061;\n  margin-left: 1vh;\n  font-weight: bold;\n}\n.dropdown-sort[data-v-964cc512] {\n  width: 14em;\n  background: #ebecf0;\n  border: none;\n  display: flex;\n}\n@media only screen and (max-width: 768px) {\n.dropdown-sort[data-v-964cc512] {\n    display: none;\n}\n}\n.card-container img[data-v-964cc512] {\n  height: 50%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.card-container[data-v-964cc512]:hover {\n  transform: translate(0, -10px);\n  box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  transition: all ease 0.8s;\n}\n.card-title[data-v-964cc512] {\n  color: #435061;\n  font-size: 18px;\n  font-weight: bold;\n}\n.card-price[data-v-964cc512], .card-heart[data-v-964cc512] {\n  color: #31A2E1;\n}\n.description-1[data-v-964cc512], .description-2[data-v-964cc512] {\n  display: inline;\n  color: #435061;\n}\n.description-2[data-v-964cc512] {\n  font-weight: bold;\n}\nh2[data-v-964cc512] {\n  font-weight: bold;\n}\n\n/*let us know section*/\n.letknow[data-v-964cc512] {\n  font-size: 26px;\n}\n.letusknow[data-v-964cc512] {\n  font-size: 18px;\n}\n.let-us-know[data-v-964cc512] {\n  background-color: #D4E0E6;\n  font-family: titillium web !important;\n}\n.pagination-property[data-v-964cc512] {\n  padding-left: 3vh;\n  padding-top: 3vh;\n}\na[data-v-964cc512] {\n  text-decoration: none;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Frontend/Property.vue?vue&type=style&index=0&id=964cc512&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Frontend/Property.vue?vue&type=style&index=0&id=964cc512&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./Property.vue?vue&type=style&index=0&id=964cc512&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Frontend/Property.vue?vue&type=style&index=0&id=964cc512&lang=scss&scoped=true&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Frontend/Property.vue?vue&type=template&id=964cc512&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Frontend/Property.vue?vue&type=template&id=964cc512&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "container-fluid" }, [
      _c("div", { staticClass: "row mt-4" }, [
        _c("section", { staticClass: "property_details_header" }, [
          _c("img", {
            staticClass: "img-header",
            attrs: { src: _vm.getCoverImage() }
          }),
          _vm._v(" "),
          _c("div", { staticClass: "title" }, [
            _vm._v(
              "\n                    “Jata bikash Utai basai”\n                "
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "row justify-content-center property-container" },
        [
          _c("div", { staticClass: "col-xs-12 col-xl-3 p-0" }, [
            _c("h5", { staticClass: "filter desktop-toggle" }, [
              _vm._v("FILTER BY ")
            ]),
            _vm._v(" "),
            _c(
              "h5",
              { staticClass: "mobile-toggle", on: { click: _vm.toggleMobile } },
              [_vm._v("FILTER BY ")]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "mobile-filter" }, [
              _c("ul", { staticClass: "list-filter" }, [
                _c("li", { staticClass: "mobile-sort" }, [
                  _c("span", { on: { click: _vm.toggle } }, [
                    _vm._v("Sort\n                    "),
                    _c("i", {
                      staticClass: "fas fa-chevron-down slide-down-hover"
                    })
                  ]),
                  _vm._v(" "),
                  _c(
                    "h6",
                    { staticClass: "mt-2", staticStyle: { display: "none" } },
                    [
                      _c("label", { staticClass: "container" }, [
                        _vm._v(
                          "\n                                    Highest Price\n                                    "
                        ),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.sort,
                              expression: "sort"
                            }
                          ],
                          attrs: { type: "radio", id: "highest" },
                          domProps: {
                            value: _vm.high,
                            checked: _vm._q(_vm.sort, _vm.high)
                          },
                          on: {
                            change: [
                              function($event) {
                                _vm.sort = _vm.high
                              },
                              function($event) {
                                return _vm.changeValue("sort")
                              }
                            ]
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("label", { staticClass: "container" }, [
                        _vm._v(
                          "\n                                    Lowest Price\n                                    "
                        ),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.sort,
                              expression: "sort"
                            }
                          ],
                          attrs: { type: "radio", id: "lowest" },
                          domProps: {
                            value: _vm.low,
                            checked: _vm._q(_vm.sort, _vm.low)
                          },
                          on: {
                            change: [
                              function($event) {
                                _vm.sort = _vm.low
                              },
                              function($event) {
                                return _vm.changeValue("sort")
                              }
                            ]
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("label", { staticClass: "container" }, [
                        _vm._v(
                          "\n                                    Latest\n                                    "
                        ),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.sort,
                              expression: "sort"
                            }
                          ],
                          attrs: { type: "radio", id: "latests" },
                          domProps: {
                            value: _vm.latest,
                            checked: _vm._q(_vm.sort, _vm.latest)
                          },
                          on: {
                            change: [
                              function($event) {
                                _vm.sort = _vm.latest
                              },
                              function($event) {
                                return _vm.changeValue("sort")
                              }
                            ]
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("label", { staticClass: "container" }, [
                        _vm._v(
                          "\n                                    Oldest\n                                    "
                        ),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.sort,
                              expression: "sort"
                            }
                          ],
                          attrs: { type: "radio", id: "oldest" },
                          domProps: {
                            value: _vm.oldest,
                            checked: _vm._q(_vm.sort, _vm.oldest)
                          },
                          on: {
                            change: [
                              function($event) {
                                _vm.sort = _vm.oldest
                              },
                              function($event) {
                                return _vm.changeValue("sort")
                              }
                            ]
                          }
                        })
                      ])
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("li", [
                  _c("span", { on: { click: _vm.toggle } }, [
                    _vm._v("Property Purposes\n                    "),
                    _c("i", {
                      staticClass: "fas fa-chevron-down slide-down-hover"
                    })
                  ]),
                  _vm._v(" "),
                  _c(
                    "h6",
                    { staticClass: "mt-2", staticStyle: { display: "none" } },
                    [
                      _c("ul", { staticClass: "toggleBtns" }, [
                        _c("li", { staticClass: "mr-2" }, [
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-outline-primary btn-sm",
                              class: { active: _vm.isActive },
                              on: {
                                click: function($event) {
                                  return _vm.toggleSaleRent("sale")
                                }
                              }
                            },
                            [
                              _vm._v(
                                "For Sale\n                                        "
                              )
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-outline-primary btn-sm",
                              class: { active: _vm.isInactive },
                              on: {
                                click: function($event) {
                                  return _vm.toggleSaleRent("rent")
                                }
                              }
                            },
                            [
                              _vm._v(
                                "For Rent\n                                        "
                              )
                            ]
                          )
                        ])
                      ])
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("li", [
                  _c("span", { on: { click: _vm.toggle } }, [
                    _vm._v("Property Categories\n                    "),
                    _c("i", {
                      staticClass: "fas fa-chevron-down slide-down-hover"
                    })
                  ]),
                  _vm._v(" "),
                  _c(
                    "h6",
                    { staticClass: "mt-2", staticStyle: { display: "none" } },
                    [
                      _c(
                        "ul",
                        { staticClass: "toggleBtns", attrs: { id: "categ" } },
                        _vm._l(_vm.categories, function(roadType) {
                          return _c(
                            "li",
                            {
                              key: roadType.id,
                              staticClass: "mr-2",
                              attrs: { value: roadType }
                            },
                            [
                              _c(
                                "button",
                                {
                                  staticClass:
                                    "btn btn-outline-primary btn-sm roadBtn",
                                  attrs: { id: "cus_" + roadType.value },
                                  on: {
                                    click: function($event) {
                                      return _vm.toggleCategories(
                                        roadType.value
                                      )
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                                            " +
                                      _vm._s(roadType.value) +
                                      "\n                                        "
                                  )
                                ]
                              )
                            ]
                          )
                        }),
                        0
                      )
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("li", [
                  _c("span", { on: { click: _vm.toggle } }, [
                    _vm._v("Property Type\n                    "),
                    _c("i", {
                      staticClass: "fas fa-chevron-down slide-down-hover"
                    })
                  ]),
                  _vm._v(" "),
                  _c(
                    "h6",
                    { staticClass: "mt-2", staticStyle: { display: "none" } },
                    [
                      _c("ul", { staticClass: "toggleBtns" }, [
                        _c("li", { staticClass: "mr-2" }, [
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-outline-primary btn-sm",
                              class: { active: _vm.resActive },
                              on: {
                                click: function($event) {
                                  return _vm.toggleResCom("residential")
                                }
                              }
                            },
                            [
                              _vm._v(
                                "\n                                            Residential\n                                        "
                              )
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-outline-primary btn-sm",
                              class: { active: _vm.comActive },
                              on: {
                                click: function($event) {
                                  return _vm.toggleResCom("commercial")
                                }
                              }
                            },
                            [
                              _vm._v(
                                "\n                                            Commercial\n                                        "
                              )
                            ]
                          )
                        ])
                      ])
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("li", [
                  _c("span", { on: { click: _vm.toggle } }, [
                    _vm._v("Property Location\n                    "),
                    _c("i", {
                      staticClass: "fas fa-chevron-down slide-down-hover"
                    })
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "mt-2", staticStyle: { display: "none" } },
                    [
                      _c(
                        "div",
                        { staticClass: "d-flex flex-row input-group" },
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
                              staticClass: "form-control",
                              class: {
                                "is-invalid": _vm.form.errors.has("location")
                              },
                              attrs: { name: "location", id: "location" },
                              on: {
                                change: [
                                  function($event) {
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
                                      "location",
                                      $event.target.multiple
                                        ? $$selectedVal
                                        : $$selectedVal[0]
                                    )
                                  },
                                  function($event) {
                                    return _vm.changeValue("location")
                                  }
                                ]
                              }
                            },
                            [
                              _c(
                                "option",
                                {
                                  attrs: { value: "nolocation", selected: "" }
                                },
                                [_vm._v("No Selection")]
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
                                      "\n                                            " +
                                        _vm._s(location) +
                                        "\n                                        "
                                    )
                                  ]
                                )
                              })
                            ],
                            2
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass: "input-group-prepend",
                              class: { hideShow: _vm.firstHidden },
                              on: {
                                click: function($event) {
                                  $event.preventDefault()
                                  return _vm.clearSelected("location")
                                }
                              }
                            },
                            [_vm._m(0)]
                          )
                        ]
                      )
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("li", [
                  _c("span", { on: { click: _vm.toggle } }, [
                    _vm._v("Max Price\n                    "),
                    _c("i", {
                      staticClass: "fas fa-chevron-down slide-down-hover"
                    })
                  ]),
                  _vm._v(" "),
                  _c(
                    "h6",
                    { staticClass: "mt-2", staticStyle: { display: "none" } },
                    [
                      _c(
                        "ul",
                        { staticClass: "toggleBtns", attrs: { id: "corer" } },
                        _vm._l(_vm.crores, function(crore) {
                          return _c(
                            "li",
                            {
                              key: crore.id,
                              staticClass: "mr-2",
                              attrs: { value: crore }
                            },
                            [
                              _c(
                                "button",
                                {
                                  staticClass:
                                    "btn btn-outline-primary btn-sm croreBtn",
                                  on: {
                                    click: function($event) {
                                      return _vm.toggleCrore(crore.value)
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                                            " +
                                      _vm._s(crore.value) +
                                      "\n                                        "
                                  )
                                ]
                              )
                            ]
                          )
                        }),
                        0
                      )
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("li", [
                  _c("span", { on: { click: _vm.toggle } }, [
                    _vm._v("Min Built Year\n                        "),
                    _c("i", {
                      staticClass: "fas fa-chevron-down slide-down-hover"
                    })
                  ]),
                  _vm._v(" "),
                  _c(
                    "p",
                    { staticClass: "mt-2", staticStyle: { display: "none" } },
                    [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.built_year,
                            expression: "form.built_year"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { type: "text", placeholder: "Built Year(BS)" },
                        domProps: { value: _vm.form.built_year },
                        on: {
                          keyup: function($event) {
                            return _vm.changeValue("year")
                          },
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.form,
                              "built_year",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("li", [
                  _c("span", { on: { click: _vm.toggle } }, [
                    _vm._v("Road Type\n                    "),
                    _c("i", {
                      staticClass: "fas fa-chevron-down slide-down-hover"
                    })
                  ]),
                  _vm._v(" "),
                  _c(
                    "h6",
                    { staticClass: "mt-2", staticStyle: { display: "none" } },
                    [
                      _c(
                        "ul",
                        { staticClass: "toggleBtns", attrs: { id: "road" } },
                        _vm._l(_vm.roadTypes, function(roadType) {
                          return _c(
                            "li",
                            {
                              key: roadType.id,
                              staticClass: "mr-2",
                              attrs: { value: roadType }
                            },
                            [
                              _c(
                                "button",
                                {
                                  staticClass:
                                    "btn btn-outline-primary btn-sm roadBtn",
                                  on: {
                                    click: function($event) {
                                      return _vm.toggleRoadType(roadType.value)
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                                            " +
                                      _vm._s(roadType.value) +
                                      "\n                                        "
                                  )
                                ]
                              )
                            ]
                          )
                        }),
                        0
                      )
                    ]
                  )
                ])
              ]),
              _vm._v(" "),
              _c("h5", { staticClass: "filter" }, [_vm._v("Filter Tags:")]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "tags" },
                _vm._l(_vm.filterValue, function(item, key, index) {
                  return _c(
                    "div",
                    { key: item.key, staticClass: "filter-tags" },
                    [
                      _c(
                        "span",
                        {
                          key: index,
                          staticClass: "badge badge-pill badge-primary  p-2 m-1"
                        },
                        [_vm._v(_vm._s(item))]
                      )
                    ]
                  )
                }),
                0
              )
            ])
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-xs-12 col-xl-9 mobile-padding" },
            [
              _c("div", { staticClass: "filter-header-container" }, [
                _c("div", { staticClass: "filter-header" }, [
                  _c(
                    "h2",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.isActive && !_vm.isInactive,
                          expression: "isActive && !isInactive"
                        }
                      ],
                      staticClass: "search-title"
                    },
                    [_vm._v("Properties For Sale")]
                  ),
                  _vm._v(" "),
                  _c(
                    "h2",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: !_vm.isActive && _vm.isInactive,
                          expression: "!isActive && isInactive"
                        }
                      ],
                      staticClass: "search-title"
                    },
                    [_vm._v("Properties For Rent")]
                  ),
                  _vm._v(" "),
                  _c(
                    "h2",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: !_vm.isActive && !_vm.isInactive,
                          expression: "!isActive && !isInactive"
                        }
                      ],
                      staticClass: "search-title"
                    },
                    [_vm._v("All Properties")]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "input-group  dropdown-sort" }, [
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.sort,
                          expression: "sort"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { name: "sortBy" },
                      on: {
                        change: [
                          function($event) {
                            var $$selectedVal = Array.prototype.filter
                              .call($event.target.options, function(o) {
                                return o.selected
                              })
                              .map(function(o) {
                                var val = "_value" in o ? o._value : o.value
                                return val
                              })
                            _vm.sort = $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          },
                          function($event) {
                            return _vm.changeValue("sort")
                          }
                        ]
                      }
                    },
                    [
                      _c(
                        "option",
                        {
                          attrs: { value: "nosort", disabled: "", selected: "" }
                        },
                        [_vm._v("SORT BY")]
                      ),
                      _vm._v(" "),
                      _c("option", { attrs: { value: "high" } }, [
                        _vm._v("HIGHEST PRICE")
                      ]),
                      _vm._v(" "),
                      _c("option", { attrs: { value: "low" } }, [
                        _vm._v("LOWEST PRICE")
                      ]),
                      _vm._v(" "),
                      _c("option", { attrs: { value: "latest" } }, [
                        _vm._v("LATEST")
                      ]),
                      _vm._v(" "),
                      _c("option", { attrs: { value: "oldest" } }, [
                        _vm._v("OLDEST")
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "input-group-prepend",
                      class: { hideShow: _vm.hidden },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.clearSelectSort("sort")
                        }
                      }
                    },
                    [_vm._m(1)]
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
                      value: _vm.loader,
                      expression: "loader"
                    }
                  ],
                  staticClass: "mb-5",
                  class: { "lds-facebook": _vm.loader }
                },
                [_c("div"), _vm._v(" "), _c("div"), _vm._v(" "), _c("div")]
              ),
              _vm._v(" "),
              _vm.properties.data == 0
                ? _c("div", [
                    _vm._v(
                      "\n                    No Result Found\n                "
                    )
                  ])
                : _vm._e(),
              _vm._v(" "),
              _c(
                "section",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: !_vm.loader,
                      expression: "!loader"
                    }
                  ],
                  staticClass: "section-padding",
                  attrs: { id: "latest" }
                },
                [
                  _c("div", { staticClass: "container" }, [
                    _c(
                      "div",
                      { staticClass: "row pt-3" },
                      _vm._l(_vm.properties.data, function(property, index) {
                        return _c(
                          "div",
                          {
                            key: property.id,
                            staticClass: "col-md-6 col-lg-4 p-2"
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
                                            _c(
                                              "span",
                                              { staticClass: "sale" },
                                              [_vm._v("For Sale")]
                                            )
                                          ]
                                        : _vm._e(),
                                      _vm._v(" "),
                                      property.purpose == "rent"
                                        ? [
                                            _c(
                                              "span",
                                              { staticClass: "rent" },
                                              [_vm._v("For Rent")]
                                            )
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
                                      src: _vm.getPropertyImage(
                                        property.thumbnail
                                      )
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
                                          _c(
                                            "h5",
                                            { staticClass: "card-title" },
                                            [
                                              _vm._v(
                                                "\n                                                        " +
                                                  _vm._s(
                                                    property.title.substring(
                                                      0,
                                                      25
                                                    ) + ".."
                                                  )
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c("span", [
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
                                        _c(
                                          "span",
                                          { staticClass: "category" },
                                          [
                                            _c("b", [
                                              _vm._v(_vm._s(property.category))
                                            ])
                                          ]
                                        )
                                      ])
                                    ]),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "row area" }, [
                                      _c("div", { staticClass: "col-12" }, [
                                        _c("span", [
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
                                                        _vm._s(
                                                          property.price_unit
                                                        ) +
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
                                    _c(
                                      "div",
                                      { staticClass: "row area mt-3 mb-2" },
                                      [
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
                                                  _vm._v(
                                                    _vm._s(property.bathroom)
                                                  )
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
                                                  _vm._v(
                                                    _vm._s(property.bedroom)
                                                  )
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
                                      ]
                                    )
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
              _c("pagination", {
                staticClass: "pagination-property",
                attrs: { data: _vm.properties },
                on: { "pagination-change-page": _vm.getResults }
              })
            ],
            1
          )
        ]
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "container-fluid mt-5" }, [
      _c("div", { staticClass: "row text-center let-us-know  pt-5 pb-5 " }, [
        _vm._m(2),
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
    return _c("div", { staticClass: "input-group-text" }, [
      _c("a", { staticClass: "border", attrs: { href: "javascript:;" } }, [
        _c("i", { staticClass: "fas fa-times" })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-text" }, [
      _c("a", { staticClass: "border", attrs: { href: "javascript:;" } }, [
        _c("i", { staticClass: "fas fa-times" })
      ])
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
          _vm._v("Don't worry, we've done this a million times")
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Frontend/Property.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/Frontend/Property.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Property_vue_vue_type_template_id_964cc512_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Property.vue?vue&type=template&id=964cc512&scoped=true& */ "./resources/js/components/Frontend/Property.vue?vue&type=template&id=964cc512&scoped=true&");
/* harmony import */ var _Property_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Property.vue?vue&type=script&lang=js& */ "./resources/js/components/Frontend/Property.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Property_vue_vue_type_style_index_0_id_964cc512_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Property.vue?vue&type=style&index=0&id=964cc512&lang=scss&scoped=true& */ "./resources/js/components/Frontend/Property.vue?vue&type=style&index=0&id=964cc512&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Property_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Property_vue_vue_type_template_id_964cc512_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Property_vue_vue_type_template_id_964cc512_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "964cc512",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Frontend/Property.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Frontend/Property.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/Frontend/Property.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Property_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Property.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Frontend/Property.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Property_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Frontend/Property.vue?vue&type=style&index=0&id=964cc512&lang=scss&scoped=true&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/components/Frontend/Property.vue?vue&type=style&index=0&id=964cc512&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Property_vue_vue_type_style_index_0_id_964cc512_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./Property.vue?vue&type=style&index=0&id=964cc512&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Frontend/Property.vue?vue&type=style&index=0&id=964cc512&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Property_vue_vue_type_style_index_0_id_964cc512_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Property_vue_vue_type_style_index_0_id_964cc512_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Property_vue_vue_type_style_index_0_id_964cc512_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Property_vue_vue_type_style_index_0_id_964cc512_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/Frontend/Property.vue?vue&type=template&id=964cc512&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/Frontend/Property.vue?vue&type=template&id=964cc512&scoped=true& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Property_vue_vue_type_template_id_964cc512_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Property.vue?vue&type=template&id=964cc512&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Frontend/Property.vue?vue&type=template&id=964cc512&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Property_vue_vue_type_template_id_964cc512_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Property_vue_vue_type_template_id_964cc512_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);