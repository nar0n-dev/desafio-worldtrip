/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/continents/[slug]",{

/***/ "./src/pages/continents/[slug].tsx":
/*!*****************************************!*\
  !*** ./src/pages/continents/[slug].tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Slug; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Header */ \"./src/components/Header/index.tsx\");\n/* harmony import */ var _components_BannerPages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/BannerPages */ \"./src/components/BannerPages/index.tsx\");\n/* harmony import */ var _components_FeaturesPages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/FeaturesPages */ \"./src/components/FeaturesPages/index.tsx\");\n/* harmony import */ var _components_CardCountry__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/CardCountry */ \"./src/components/CardCountry/index.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/home/nar0n/WWW/Ignite/Desafios/Desafios Complementares/desafio-worldtrip/src/pages/continents/[slug].tsx\";\n\n\n\n\nvar __N_SSG = true;\nfunction Slug(_ref) {\n  var continent = _ref.continent,\n      countries = _ref.countries;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_1__.Header, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 9\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BannerPages__WEBPACK_IMPORTED_MODULE_2__.BannerPages, {\n      bgImage: continent.image,\n      name: continent.title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 9\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FeaturesPages__WEBPACK_IMPORTED_MODULE_3__.FeaturePages, {\n      description: continent.shortDescription\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 9\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CardCountry__WEBPACK_IMPORTED_MODULE_4__.CardsCountry, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 9\n    }, this)]\n  }, void 0, true);\n}\n_c = Slug;\n\nvar _c;\n\n$RefreshReg$(_c, \"Slug\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2NvbnRpbmVudHMvW3NsdWddLnRzeD8wZDRiIl0sIm5hbWVzIjpbIlNsdWciLCJjb250aW5lbnQiLCJjb3VudHJpZXMiLCJpbWFnZSIsInRpdGxlIiwic2hvcnREZXNjcmlwdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBK0JlLFNBQVNBLElBQVQsT0FBaUQ7QUFBQSxNQUFsQ0MsU0FBa0MsUUFBbENBLFNBQWtDO0FBQUEsTUFBdkJDLFNBQXVCLFFBQXZCQSxTQUF1QjtBQUM5RCxzQkFDRTtBQUFBLDRCQUNJLDhEQUFDLHNEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUVJLDhEQUFDLGdFQUFEO0FBQWEsYUFBTyxFQUFFRCxTQUFTLENBQUNFLEtBQWhDO0FBQXVDLFVBQUksRUFBRUYsU0FBUyxDQUFDRztBQUF2RDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkosZUFHSSw4REFBQyxtRUFBRDtBQUFjLGlCQUFXLEVBQUVILFNBQVMsQ0FBQ0k7QUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhKLGVBSUksOERBQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpKO0FBQUEsa0JBREY7QUFTRDtLQVZ1QkwsSSIsImZpbGUiOiIuL3NyYy9wYWdlcy9jb250aW5lbnRzL1tzbHVnXS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIZWFkZXIgfSAgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9IZWFkZXInO1xyXG5pbXBvcnQgeyBCYW5uZXJQYWdlcyB9ICBmcm9tICcuLi8uLi9jb21wb25lbnRzL0Jhbm5lclBhZ2VzJztcclxuaW1wb3J0IHsgRmVhdHVyZVBhZ2VzIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9GZWF0dXJlc1BhZ2VzJztcclxuaW1wb3J0IHsgQ2FyZHNDb3VudHJ5IH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9DYXJkQ291bnRyeSc7XHJcbmltcG9ydCB7IGFwaSB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL2FwaSc7XHJcbmltcG9ydCB7IGFwaVVuc3BsYXNoIH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvYXBpVW5zcGxhc2gnO1xyXG5pbXBvcnQgeyBHZXRTdGF0aWNQcm9wcywgR2V0U3RhdGljUGF0aHMgfSBmcm9tICduZXh0JztcclxuXHJcbmludGVyZmFjZSBDb250aW5lbnRQcm9wcyB7XHJcbiAgaWQ6IHN0cmluZztcclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgaW1hZ2U6IHN0cmluZztcclxuICBzaG9ydERlc2NyaXB0aW9uPzogc3RyaW5nO1xyXG4gIGNvdW50cmllczogbnVtYmVyO1xyXG4gIGNpdGllczogbnVtYmVyO1xyXG4gIGxhbmd1YWdlczogbnVtYmVyO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgQ291bnRyeVByb3BzIHtcclxuICBpZDogc3RyaW5nO1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBjb3VudHJ5OiBzdHJpbmc7XHJcbiAgZmxhZz86IHN0cmluZztcclxuICBjb250aW5lbnQ6c3RyaW5nO1xyXG4gIGltYWdlPzogc3RyaW5nO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgU2x1Z1Byb3BzIHtcclxuICBjb250aW5lbnQ6IENvbnRpbmVudFByb3BzO1xyXG4gIGNvdW50cmllczogQ291bnRyeVByb3BzW107XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTbHVnKHtjb250aW5lbnQsIGNvdW50cmllc306IFNsdWdQcm9wcykge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgICA8QmFubmVyUGFnZXMgYmdJbWFnZT17Y29udGluZW50LmltYWdlfSBuYW1lPXtjb250aW5lbnQudGl0bGV9Lz5cclxuICAgICAgICA8RmVhdHVyZVBhZ2VzIGRlc2NyaXB0aW9uPXtjb250aW5lbnQuc2hvcnREZXNjcmlwdGlvbn0vPlxyXG4gICAgICAgIDxDYXJkc0NvdW50cnkgLz5cclxuICAgIDwvPlxyXG5cclxuICApO1xyXG59XHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQYXRoczogR2V0U3RhdGljUGF0aHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHBhdGhzOiBbXSxcclxuICAgIGZhbGxiYWNrOiAnYmxvY2tpbmcnXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHM6IEdldFN0YXRpY1Byb3BzID0gYXN5bmMgKHsgcGFyYW1zIH0pID0+IHtcclxuICBjb25zdCB7IHNsdWcgfSA9IHBhcmFtc1xyXG4gIGNvbnN0IGNvbnRpbmVudFJlc3BvbnNlID0gYXdhaXQgYXBpLmdldChgL2NvbnRpbmVudHMvJHtTdHJpbmcoc2x1Zyl9YClcclxuICBjb25zdCBjb250aW5lbnQgPSBjb250aW5lbnRSZXNwb25zZS5kYXRhXHJcbiAgXHJcbiAgXHJcbiAgY29uc3QgY291bnRyeVJlc3BvbnNlID0gYXdhaXQgYXBpLmdldChgL2NvdW50cmllcz9jb250aW5lbnQke1N0cmluZyhzbHVnKX1gKVxyXG4gIGNvbnN0IGNvdW50cnlEYXRhID0gY291bnRyeVJlc3BvbnNlLmRhdGFcclxuICBjb25zdCBjb3VudHJpZXM6IENvdW50cnlQcm9wc1tdID0gYXdhaXQgUHJvbWlzZS5hbGwoY291bnRyeURhdGEubWFwKGFzeW5jIChjb3VudHJ5OiBDb3VudHJ5UHJvcHMpID0+IHtcclxuICAgIC8vY29uc3QgdW5zcGxhc2hSZXNwb25zZSA9IGF3YWl0IGFwaVVuc3BsYXNoLmdldChgL3NlYXJjaC9waG90b3M/cGFnZT0xJnBlcl9wYWdlPTEmcXVlcnk9JHtjb3VudHJ5LmlkfWApXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgLi4uY291bnRyeSwgXHJcbiAgICAgIC8vaW1hZ2U6IHVuc3BsYXNoUmVzcG9uc2UuZGF0YS5yZXN1bHRzWzBdLnVybHMucmF3LFxyXG4gICAgfVxyXG4gIH0pKVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgY29udGluZW50LFxyXG4gICAgICBjb3VudHJpZXNcclxuICAgIH1cclxuICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/continents/[slug].tsx\n");

/***/ })

});