webpackJsonp([1],{

/***/ 21:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5379831f_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_Readme_vue__ = __webpack_require__(52);
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = null
/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5379831f_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_Readme_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "content"
  }, [_c('div', [_c('div', [_c('strong', [_vm._v("Project info")])]), _vm._v(" "), _c('p', [_vm._v("\n  NPM used for package management,\n  In package.json - depencies contains all while in development and production devDepedencies has all packages required while in development.\n  express.js used as web server as can be easily used in development and in production\n  start script built into ackages.json so just npm start to run server (port 3000)\n")]), _vm._v(" "), _c('p', [_vm._v("\n  This app uses modules to import and use libraries. Not all browsers support modules as per modern js, so we use a module bundler called webpack. Also good for minifying other build processes. Leads to nice small package size for use by browser\n")]), _vm._v(" "), _c('p', [_vm._v("\n  Babel used as a compiler so ecma compatible on all browsers\n")]), _vm._v(" "), _c('p', [_vm._v("\n  Vue scroll behvaiours set so page restores to y axis and page upon reload\n")]), _vm._v(" "), _c('p', [_vm._v("\n  Modules loaded asyncronously so that lazy loading is capable - means not a monolithic js file sent to the browswer but rather one file for each component\n")]), _vm._v(" "), _c('p', [_vm._v("\n  Used axios for web api rather than native XMLHttpRequest\n")]), _vm._v(" "), _c('p', [_vm._v("\n  Included eslint as linter to catch js mistakes. Turned it off for vue files as linter for ; conflicts with auto complete on vs code\n\n")]), _c('p', [_vm._v("\n  When downloading app for first time kindly run npm install to find and download all dependencies into the node modules folder\n")]), _vm._v(" "), _c('p', [_vm._v("\n  Karma was used as my test runner - it opens browser specified, tests, sends back results. Used a headless broswer (PhantomJS as lightwieght and very fast). Used mocha as the testing framework. Chai used as asertion library to compare test to expected results. Sinon used for mocks. Could also have used Jasmine and Jest which conain the full package.\n  run npm test in git bash to test - note this needs tuning, not receiving the object correctly so tests are failing. Infrastructure exists however functionality needs improvement.\n")])])])
}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});