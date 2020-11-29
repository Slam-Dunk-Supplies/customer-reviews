/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkcustomer_review_service"] = self["webpackChunkcustomer_review_service"] || []).push([["client_src_components_StarScale_jsx"],{

/***/ "./client/src/components/StarScale.jsx":
/*!*********************************************!*\
  !*** ./client/src/components/StarScale.jsx ***!
  \*********************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n;\n\n\nvar Stars = function Stars(props) {\n  var blackStars = [];\n\n  for (var i = 0; i < Math.round(props.ratio); i++) {\n    blackStars.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", {\n      key: \"\".concat(props.id, \"a\").concat(i)\n    }, \"\\u2605\"));\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", {\n    className: \"black-star\"\n  }, blackStars), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", {\n    className: \"grey-star\"\n  }, \"\\u2606\\u2606\\u2606\\u2606\\u2606\"));\n};\n\nStars.propTypes = {\n  ratio: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number.isRequired),\n  id: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number.isRequired)\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Stars);\n\n//# sourceURL=webpack://customer-review-service/./client/src/components/StarScale.jsx?");

/***/ })

}]);