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
  }, [_c('div', [_vm._v("\n    Build instructions:\n\n      clone app to c://vue-spa\n      run in git bash (or other similar):\n      -npm build\n      -npm start\n      open web broswer to localhost:3000 or as set\n\n    Notes:\n      The brief stated to create a high quality modern web app. I used vs code and built the framework, rather than an out-the-box angular or similar build on visual studio, as given the small nature of the project a very small production package size can be achieved through close control of the framework and application and as a result maximize performance dramatically, versus a generic build on visual studio. Also there was no need for backend so I presumed achieving brilliant performance and a very small package size was possible.\n\n      Ultimately, i chose that as the selection criteria (smallest, fastest, lightest weight rather than largest but less control) when deciding on a css library, package manager, web server, module bundler for ensured cross-platform compatibility, web api, and any others.\n\n      In the end I started development on Saturday and ended on Sunday evening. With a day more I would have had the automated and lightweight testing complete, the router.js file would be properly configured so as to allow convertion into a production build using webpack.js.\n\n      Kindly see below for further project information:\n\n      Project info\n      NPM used for package management:\n      In package.json - depencies contains all dependencies/packages required while in development and in production, devDepedencies contains all packages required while in development.\n      express.js was chosen and used as a web server as it can be easily used in development and in production, also extremely light weight.\n\n      An 'npm start' script has been built into packages.json so only has to use the command npm start to run server (set to port 3000 in server.js at line 35)\n\n      This app uses modules to import and use libraries. Not all browsers support modules as per modern js, so we use a module bundler called webpack. Also good for minifying other build processes. Leads to nice small package size for use by browser\n\n      Babel has been used as a compiler as i used ecma script javascript, this shall be compiled down to be compatible on all browsers.\n\n      Vue scroll behvaiours has been set so page restores to y axis and page upon reload - happens often with Vue - this means the page reload is imperceptible.\n\n      Modules are loaded asyncronously so that lazy loading is capable - means not a monolithic js file sent to the browswer but rather one file for each component - has made it extremely fast.\n\n      I used axios for web api consumption rather than a native XMLHttpRequest, axios uses a promise for it's async api calls.\n\n      I included eslint as a linter to catch js mistakes. Turned it off for vue files as linter for ; conflicts with auto complete on vs code in the \\*.vue files.\n\n      I took a risk and used Bulma for my css rather than Bootstrap (I usually use 3 for the col structuring. I did not notice a big performance or indeed difference and would likely revert to using Bootstrap3 or 4 for future developments).\n\n      Lastly please note I have been using vue for a week, this build was an attempt to demostrate my ability to compose my own framework and use a modern JS library as we discussed in the interview. All my above choice were entirely performance based with special consideration for it being lightweight - and in the case of a web api to make async api calls.\n\n    Requires finishing: Infrastructure exists however requires refactoring to allow for deployment - currently have an azure app service set up: https://mark-hailwood-geodesys.azurewebsites.net/. Using native javascript in a custom built framework makes for a challening build deploy - I have simply run out of time.\n\n  ")])])
}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});