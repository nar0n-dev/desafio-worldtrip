/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/continents/[slug]",{

/***/ "./src/components/CardCountry/CardCountry.tsx":
/*!****************************************************!*\
  !*** ./src/components/CardCountry/CardCountry.tsx ***!
  \****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CardCountry\": function() { return /* binding */ CardCountry; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/home/nar0n/WWW/Ignite/Desafios/Desafios Complementares/desafio-worldtrip/src/components/CardCountry/CardCountry.tsx\";\n\n\nfunction CardCountry(_ref) {\n  var _ref$thumb = _ref.thumb,\n      thumb = _ref$thumb === void 0 ? 'https://via.placeholder.com/256x173' : _ref$thumb,\n      image = _ref.image,\n      capital = _ref.capital,\n      country = _ref.country;\n  var countryUrl = (image !== null && image !== void 0 ? image : country).replace(/[[:blank:]]/g, '-').toLocaleLowerCase();\n  console.log(countryUrl);\n  var avatarUrl = \"https://n.i.uol.com.br/licaodecasa/ensfundamental/geografia/bandeiras/\".concat(countryUrl, \".gif\");\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Heading, {\n      children: \"Cidades +100\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {\n      direction: \"column\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Image, {\n        src: thumb,\n        alt: country,\n        w: \"100%\",\n        h: \"173px\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Stack, {\n        direction: \"row\",\n        justify: \"space-between\",\n        padding: \"25px\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {\n          direction: \"column\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {\n            color: 'gray.700',\n            fontSize: \"xl\",\n            fontWeight: \"600\",\n            children: capital\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 30,\n            columnNumber: 25\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {\n            color: 'gray.400',\n            fontSize: \"md\",\n            fontWeight: \"600\",\n            children: country\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 34,\n            columnNumber: 25\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 21\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {\n          align: \"center\",\n          justify: \"center\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Image, {\n            src: avatarUrl,\n            alt: capital,\n            w: \"30px\",\n            h: \"30px\",\n            borderRadius: \"100%\",\n            margin: \"0px\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 39,\n            columnNumber: 25\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 38,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true);\n}\n_c = CardCountry;\n\nvar _c;\n\n$RefreshReg$(_c, \"CardCountry\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ2FyZENvdW50cnkvQ2FyZENvdW50cnkudHN4P2Q3NjQiXSwibmFtZXMiOlsiQ2FyZENvdW50cnkiLCJ0aHVtYiIsImltYWdlIiwiY2FwaXRhbCIsImNvdW50cnkiLCJjb3VudHJ5VXJsIiwicmVwbGFjZSIsInRvTG9jYWxlTG93ZXJDYXNlIiwiY29uc29sZSIsImxvZyIsImF2YXRhclVybCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBUUE7QUFTTyxTQUFTQSxXQUFULE9BQXFIO0FBQUEsd0JBQTlGQyxLQUE4RjtBQUFBLE1BQTlGQSxLQUE4RiwyQkFBdEYscUNBQXNGO0FBQUEsTUFBL0NDLEtBQStDLFFBQS9DQSxLQUErQztBQUFBLE1BQXhDQyxPQUF3QyxRQUF4Q0EsT0FBd0M7QUFBQSxNQUEvQkMsT0FBK0IsUUFBL0JBLE9BQStCO0FBQ3hILE1BQU1DLFVBQVUsR0FBRyxDQUFDSCxLQUFELGFBQUNBLEtBQUQsY0FBQ0EsS0FBRCxHQUFVRSxPQUFWLEVBQW1CRSxPQUFuQixDQUEyQixjQUEzQixFQUEyQyxHQUEzQyxFQUFnREMsaUJBQWhELEVBQW5CO0FBQ0FDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZSixVQUFaO0FBQ0EsTUFBTUssU0FBUyxtRkFDOERMLFVBRDlELFNBQWY7QUFFQSxzQkFDSTtBQUFBLDRCQUNJLDhEQUFDLHFEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFFSSw4REFBQyxrREFBRDtBQUFNLGVBQVMsRUFBQyxRQUFoQjtBQUFBLDhCQUNJLDhEQUFDLG1EQUFEO0FBQU8sV0FBRyxFQUFFSixLQUFaO0FBQW1CLFdBQUcsRUFBRUcsT0FBeEI7QUFBaUMsU0FBQyxFQUFDLE1BQW5DO0FBQTBDLFNBQUMsRUFBQztBQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFFSSw4REFBQyxtREFBRDtBQUFPLGlCQUFTLEVBQUMsS0FBakI7QUFBdUIsZUFBTyxFQUFDLGVBQS9CO0FBQStDLGVBQU8sRUFBQyxNQUF2RDtBQUFBLGdDQUNJLDhEQUFDLGtEQUFEO0FBQU0sbUJBQVMsRUFBQyxRQUFoQjtBQUFBLGtDQUNJLDhEQUFDLGtEQUFEO0FBQU0saUJBQUssRUFBRSxVQUFiO0FBQXlCLG9CQUFRLEVBQUMsSUFBbEM7QUFBdUMsc0JBQVUsRUFBQyxLQUFsRDtBQUFBLHNCQUNLRDtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREosZUFLSSw4REFBQyxrREFBRDtBQUFNLGlCQUFLLEVBQUUsVUFBYjtBQUF5QixvQkFBUSxFQUFDLElBQWxDO0FBQXVDLHNCQUFVLEVBQUMsS0FBbEQ7QUFBQSxzQkFDS0M7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQVVJLDhEQUFDLGtEQUFEO0FBQU0sZUFBSyxFQUFDLFFBQVo7QUFBcUIsaUJBQU8sRUFBQyxRQUE3QjtBQUFBLGlDQUNJLDhEQUFDLG1EQUFEO0FBQU8sZUFBRyxFQUFFTSxTQUFaO0FBQXVCLGVBQUcsRUFBRVAsT0FBNUI7QUFBcUMsYUFBQyxFQUFDLE1BQXZDO0FBQThDLGFBQUMsRUFBQyxNQUFoRDtBQUF1RCx3QkFBWSxFQUFDLE1BQXBFO0FBQTJFLGtCQUFNLEVBQUM7QUFBbEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBVko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRko7QUFBQSxrQkFESjtBQXNCSDtLQTNCZUgsVyIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL0NhcmRDb3VudHJ5L0NhcmRDb3VudHJ5LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgSW1hZ2UsXG4gICAgVGV4dCxcbiAgICBTdGFjayxcbiAgICBGbGV4LFxuICAgIEJveCxcbiAgICBIZWFkaW5nLFxufSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG4gIFxuaW50ZXJmYWNlIEl0ZW5zRmVhdHVyZXNQcm9wcyB7XG4gICAgdGh1bWI6IHN0cmluZztcbiAgICBpbWFnZTogc3RyaW5nO1xuICAgIGNhcGl0YWw6IHN0cmluZztcbiAgICBjb3VudHJ5OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBDYXJkQ291bnRyeSh7IHRodW1iID0gJ2h0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8yNTZ4MTczJywgaW1hZ2UsIGNhcGl0YWwsIGNvdW50cnkgfTogSXRlbnNGZWF0dXJlc1Byb3BzKSB7XG4gICAgY29uc3QgY291bnRyeVVybCA9IChpbWFnZSA/PyBjb3VudHJ5KS5yZXBsYWNlKC9bWzpibGFuazpdXS9nLCAnLScpLnRvTG9jYWxlTG93ZXJDYXNlKCk7XG4gICAgY29uc29sZS5sb2coY291bnRyeVVybClcbiAgICBjb25zdCBhdmF0YXJVcmwgPVxuICAgICAgICBgaHR0cHM6Ly9uLmkudW9sLmNvbS5ici9saWNhb2RlY2FzYS9lbnNmdW5kYW1lbnRhbC9nZW9ncmFmaWEvYmFuZGVpcmFzLyR7Y291bnRyeVVybH0uZ2lmYDtcbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPEhlYWRpbmc+Q2lkYWRlcyArMTAwPC9IZWFkaW5nPlxuICAgICAgICAgICAgPEZsZXggZGlyZWN0aW9uPVwiY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgPEltYWdlIHNyYz17dGh1bWJ9IGFsdD17Y291bnRyeX0gdz1cIjEwMCVcIiBoPVwiMTczcHhcIi8+XG4gICAgICAgICAgICAgICAgPFN0YWNrIGRpcmVjdGlvbj1cInJvd1wiIGp1c3RpZnk9XCJzcGFjZS1iZXR3ZWVuXCIgcGFkZGluZz1cIjI1cHhcIj5cbiAgICAgICAgICAgICAgICAgICAgPEZsZXggZGlyZWN0aW9uPVwiY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBjb2xvcj17J2dyYXkuNzAwJ30gZm9udFNpemU9XCJ4bFwiIGZvbnRXZWlnaHQ9XCI2MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2FwaXRhbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgY29sb3I9eydncmF5LjQwMCd9IGZvbnRTaXplPVwibWRcIiBmb250V2VpZ2h0PVwiNjAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvdW50cnl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICAgICAgICAgICAgPEZsZXggYWxpZ249XCJjZW50ZXJcIiBqdXN0aWZ5PVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXthdmF0YXJVcmx9IGFsdD17Y2FwaXRhbH0gdz1cIjMwcHhcIiBoPVwiMzBweFwiIGJvcmRlclJhZGl1cz1cIjEwMCVcIiBtYXJnaW49XCIwcHhcIi8+XG4gICAgICAgICAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICA8Lz5cbiAgICApO1xufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/CardCountry/CardCountry.tsx\n");

/***/ })

});