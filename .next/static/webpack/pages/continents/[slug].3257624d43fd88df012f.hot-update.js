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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CardCountry\": function() { return /* binding */ CardCountry; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar _jsxFileName = \"/home/nar0n/WWW/Ignite/Desafios/Desafios Complementares/desafio-worldtrip/src/components/CardCountry/CardCountry.tsx\";\n\n\nfunction CardCountry(_ref) {\n  var _ref$thumb = _ref.thumb,\n      thumb = _ref$thumb === void 0 ? 'https://via.placeholder.com/256x173' : _ref$thumb,\n      image = _ref.image,\n      capital = _ref.capital,\n      country = _ref.country;\n  var countryUrl = (image !== null && image !== void 0 ? image : country).replace(/[[:blank:]]/g, '-').toLocaleLowerCase();\n  console.log(countryUrl);\n  var avatarUrl = \"https://n.i.uol.com.br/licaodecasa/ensfundamental/geografia/bandeiras/\".concat(countryUrl, \".gif\");\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {\n    direction: \"column\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Image, {\n      src: thumb,\n      alt: country,\n      w: \"100%\",\n      h: \"173px\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Stack, {\n      direction: \"row\",\n      justify: \"space-between\",\n      padding: \"25px\",\n      bg: \"gray.100\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {\n        direction: \"column\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {\n          color: 'gray.700',\n          fontSize: \"xl\",\n          fontWeight: \"600\",\n          children: capital\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 21\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {\n          color: 'gray.400',\n          fontSize: \"md\",\n          fontWeight: \"600\",\n          children: country\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {\n        align: \"center\",\n        justify: \"center\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Image, {\n          src: avatarUrl,\n          alt: capital,\n          w: \"30px\",\n          h: \"30px\",\n          borderRadius: \"100%\",\n          margin: \"0px\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 35,\n          columnNumber: 21\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 22,\n    columnNumber: 9\n  }, this);\n}\n_c = CardCountry;\n\nvar _c;\n\n$RefreshReg$(_c, \"CardCountry\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ2FyZENvdW50cnkvQ2FyZENvdW50cnkudHN4P2Q3NjQiXSwibmFtZXMiOlsiQ2FyZENvdW50cnkiLCJ0aHVtYiIsImltYWdlIiwiY2FwaXRhbCIsImNvdW50cnkiLCJjb3VudHJ5VXJsIiwicmVwbGFjZSIsInRvTG9jYWxlTG93ZXJDYXNlIiwiY29uc29sZSIsImxvZyIsImF2YXRhclVybCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFNQTtBQVNPLFNBQVNBLFdBQVQsT0FBcUg7QUFBQSx3QkFBOUZDLEtBQThGO0FBQUEsTUFBOUZBLEtBQThGLDJCQUF0RixxQ0FBc0Y7QUFBQSxNQUEvQ0MsS0FBK0MsUUFBL0NBLEtBQStDO0FBQUEsTUFBeENDLE9BQXdDLFFBQXhDQSxPQUF3QztBQUFBLE1BQS9CQyxPQUErQixRQUEvQkEsT0FBK0I7QUFDeEgsTUFBTUMsVUFBVSxHQUFHLENBQUNILEtBQUQsYUFBQ0EsS0FBRCxjQUFDQSxLQUFELEdBQVVFLE9BQVYsRUFBbUJFLE9BQW5CLENBQTJCLGNBQTNCLEVBQTJDLEdBQTNDLEVBQWdEQyxpQkFBaEQsRUFBbkI7QUFDQUMsU0FBTyxDQUFDQyxHQUFSLENBQVlKLFVBQVo7QUFDQSxNQUFNSyxTQUFTLG1GQUM4REwsVUFEOUQsU0FBZjtBQUVBLHNCQUNJLDhEQUFDLGtEQUFEO0FBQU0sYUFBUyxFQUFDLFFBQWhCO0FBQUEsNEJBQ0ksOERBQUMsbURBQUQ7QUFBTyxTQUFHLEVBQUVKLEtBQVo7QUFBbUIsU0FBRyxFQUFFRyxPQUF4QjtBQUFpQyxPQUFDLEVBQUMsTUFBbkM7QUFBMEMsT0FBQyxFQUFDO0FBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUVJLDhEQUFDLG1EQUFEO0FBQU8sZUFBUyxFQUFDLEtBQWpCO0FBQXVCLGFBQU8sRUFBQyxlQUEvQjtBQUErQyxhQUFPLEVBQUMsTUFBdkQ7QUFBOEQsUUFBRSxFQUFFLFVBQWxFO0FBQUEsOEJBQ0ksOERBQUMsa0RBQUQ7QUFBTSxpQkFBUyxFQUFDLFFBQWhCO0FBQUEsZ0NBQ0ksOERBQUMsa0RBQUQ7QUFBTSxlQUFLLEVBQUUsVUFBYjtBQUF5QixrQkFBUSxFQUFDLElBQWxDO0FBQXVDLG9CQUFVLEVBQUMsS0FBbEQ7QUFBQSxvQkFDS0Q7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBS0ksOERBQUMsa0RBQUQ7QUFBTSxlQUFLLEVBQUUsVUFBYjtBQUF5QixrQkFBUSxFQUFDLElBQWxDO0FBQXVDLG9CQUFVLEVBQUMsS0FBbEQ7QUFBQSxvQkFDS0M7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBVUksOERBQUMsa0RBQUQ7QUFBTSxhQUFLLEVBQUMsUUFBWjtBQUFxQixlQUFPLEVBQUMsUUFBN0I7QUFBQSwrQkFDSSw4REFBQyxtREFBRDtBQUFPLGFBQUcsRUFBRU0sU0FBWjtBQUF1QixhQUFHLEVBQUVQLE9BQTVCO0FBQXFDLFdBQUMsRUFBQyxNQUF2QztBQUE4QyxXQUFDLEVBQUMsTUFBaEQ7QUFBdUQsc0JBQVksRUFBQyxNQUFwRTtBQUEyRSxnQkFBTSxFQUFDO0FBQWxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFtQkg7S0F4QmVILFciLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DYXJkQ291bnRyeS9DYXJkQ291bnRyeS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIEltYWdlLFxuICAgIFRleHQsXG4gICAgU3RhY2ssXG4gICAgRmxleCxcbn0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuICBcbmludGVyZmFjZSBJdGVuc0ZlYXR1cmVzUHJvcHMge1xuICAgIHRodW1iOiBzdHJpbmc7XG4gICAgaW1hZ2U6IHN0cmluZztcbiAgICBjYXBpdGFsOiBzdHJpbmc7XG4gICAgY291bnRyeTogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gQ2FyZENvdW50cnkoeyB0aHVtYiA9ICdodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vMjU2eDE3MycsIGltYWdlLCBjYXBpdGFsLCBjb3VudHJ5IH06IEl0ZW5zRmVhdHVyZXNQcm9wcykge1xuICAgIGNvbnN0IGNvdW50cnlVcmwgPSAoaW1hZ2UgPz8gY291bnRyeSkucmVwbGFjZSgvW1s6Ymxhbms6XV0vZywgJy0nKS50b0xvY2FsZUxvd2VyQ2FzZSgpO1xuICAgIGNvbnNvbGUubG9nKGNvdW50cnlVcmwpXG4gICAgY29uc3QgYXZhdGFyVXJsID1cbiAgICAgICAgYGh0dHBzOi8vbi5pLnVvbC5jb20uYnIvbGljYW9kZWNhc2EvZW5zZnVuZGFtZW50YWwvZ2VvZ3JhZmlhL2JhbmRlaXJhcy8ke2NvdW50cnlVcmx9LmdpZmA7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPEZsZXggZGlyZWN0aW9uPVwiY29sdW1uXCI+XG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPXt0aHVtYn0gYWx0PXtjb3VudHJ5fSB3PVwiMTAwJVwiIGg9XCIxNzNweFwiLz5cbiAgICAgICAgICAgIDxTdGFjayBkaXJlY3Rpb249XCJyb3dcIiBqdXN0aWZ5PVwic3BhY2UtYmV0d2VlblwiIHBhZGRpbmc9XCIyNXB4XCIgYmc9e1wiZ3JheS4xMDBcIn0+XG4gICAgICAgICAgICAgICAgPEZsZXggZGlyZWN0aW9uPVwiY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxUZXh0IGNvbG9yPXsnZ3JheS43MDAnfSBmb250U2l6ZT1cInhsXCIgZm9udFdlaWdodD1cIjYwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge2NhcGl0YWx9XG4gICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cblxuICAgICAgICAgICAgICAgICAgICA8VGV4dCBjb2xvcj17J2dyYXkuNDAwJ30gZm9udFNpemU9XCJtZFwiIGZvbnRXZWlnaHQ9XCI2MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtjb3VudHJ5fVxuICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgICAgICAgIDxGbGV4IGFsaWduPVwiY2VudGVyXCIganVzdGlmeT1cImNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXthdmF0YXJVcmx9IGFsdD17Y2FwaXRhbH0gdz1cIjMwcHhcIiBoPVwiMzBweFwiIGJvcmRlclJhZGl1cz1cIjEwMCVcIiBtYXJnaW49XCIwcHhcIi8+XG4gICAgICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgPC9GbGV4PlxuICAgICk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/CardCountry/CardCountry.tsx\n");

/***/ })

});