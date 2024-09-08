(self["webpackChunkbraeniaks_web"] = self["webpackChunkbraeniaks_web"] || []).push([["websrc_quiz_js"],{

/***/ "./websrc/badel.js":
/*!*************************!*\
  !*** ./websrc/badel.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ne: () => (/* binding */ ne)
/* harmony export */ });
/* harmony import */ var sanitize_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sanitize-html */ "./node_modules/sanitize-html/index.js");
/* harmony import */ var sanitize_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sanitize_html__WEBPACK_IMPORTED_MODULE_0__);


function ne(elementText, sanitize = true){
    // let elementType = /[\s\S]*?<(.*?)>/.exec(elementText)[1]
    // if(elementType.includes(" ")==true)elementType = elementType.substring(0, elementType.indexOf(" "))
    // let e = document.createElement(elementType)
    let e = document.createElement("div")
    e.style.all = "unset"
    e.innerHTML = sanitize_html__WEBPACK_IMPORTED_MODULE_0___default()(elementText)
    return e
}


/***/ }),

/***/ "./websrc/quiz.js":
/*!************************!*\
  !*** ./websrc/quiz.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _badel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./badel.js */ "./websrc/badel.js");




let silly = (0,_badel_js__WEBPACK_IMPORTED_MODULE_0__.ne)(`
    <h1 style="color: green">Hello </h1>
`)

document.body.appendChild(silly)

var a = 0;

/***/ }),

/***/ "?5580":
/*!**************************************!*\
  !*** ./terminal-highlight (ignored) ***!
  \**************************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?03fb":
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?6197":
/*!**********************!*\
  !*** path (ignored) ***!
  \**********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?b8cb":
/*!*******************************!*\
  !*** source-map-js (ignored) ***!
  \*******************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?c717":
/*!*********************!*\
  !*** url (ignored) ***!
  \*********************/
/***/ (() => {

/* (ignored) */

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2Vic3JjX3F1aXpfanMuYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUF5QztBQUN6QztBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixvREFBWTtBQUM5QjtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ1ZBO0FBQzZCO0FBQ1k7QUFDekM7QUFDQSxZQUFZLDZDQUFFO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVkE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JyYWVuaWFrcy13ZWIvLi93ZWJzcmMvYmFkZWwuanMiLCJ3ZWJwYWNrOi8vYnJhZW5pYWtzLXdlYi8uL3dlYnNyYy9xdWl6LmpzIiwid2VicGFjazovL2JyYWVuaWFrcy13ZWIvaWdub3JlZHxEOlxcbG9nYW5cXGdpdGh1YlxcYnJhZW5pYWtzXFx3ZWJcXG5vZGVfbW9kdWxlc1xccG9zdGNzc1xcbGlifC4vdGVybWluYWwtaGlnaGxpZ2h0Iiwid2VicGFjazovL2JyYWVuaWFrcy13ZWIvaWdub3JlZHxEOlxcbG9nYW5cXGdpdGh1YlxcYnJhZW5pYWtzXFx3ZWJcXG5vZGVfbW9kdWxlc1xccG9zdGNzc1xcbGlifGZzIiwid2VicGFjazovL2JyYWVuaWFrcy13ZWIvaWdub3JlZHxEOlxcbG9nYW5cXGdpdGh1YlxcYnJhZW5pYWtzXFx3ZWJcXG5vZGVfbW9kdWxlc1xccG9zdGNzc1xcbGlifHBhdGgiLCJ3ZWJwYWNrOi8vYnJhZW5pYWtzLXdlYi9pZ25vcmVkfEQ6XFxsb2dhblxcZ2l0aHViXFxicmFlbmlha3NcXHdlYlxcbm9kZV9tb2R1bGVzXFxwb3N0Y3NzXFxsaWJ8c291cmNlLW1hcC1qcyIsIndlYnBhY2s6Ly9icmFlbmlha3Mtd2ViL2lnbm9yZWR8RDpcXGxvZ2FuXFxnaXRodWJcXGJyYWVuaWFrc1xcd2ViXFxub2RlX21vZHVsZXNcXHBvc3Rjc3NcXGxpYnx1cmwiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHNhbml0aXplSHRtbCBmcm9tICdzYW5pdGl6ZS1odG1sJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBuZShlbGVtZW50VGV4dCwgc2FuaXRpemUgPSB0cnVlKXtcclxuICAgIC8vIGxldCBlbGVtZW50VHlwZSA9IC9bXFxzXFxTXSo/PCguKj8pPi8uZXhlYyhlbGVtZW50VGV4dClbMV1cclxuICAgIC8vIGlmKGVsZW1lbnRUeXBlLmluY2x1ZGVzKFwiIFwiKT09dHJ1ZSllbGVtZW50VHlwZSA9IGVsZW1lbnRUeXBlLnN1YnN0cmluZygwLCBlbGVtZW50VHlwZS5pbmRleE9mKFwiIFwiKSlcclxuICAgIC8vIGxldCBlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50VHlwZSlcclxuICAgIGxldCBlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgZS5zdHlsZS5hbGwgPSBcInVuc2V0XCJcclxuICAgIGUuaW5uZXJIVE1MID0gc2FuaXRpemVIdG1sKGVsZW1lbnRUZXh0KVxyXG4gICAgcmV0dXJuIGVcclxufVxyXG4iLCJcclxuaW1wb3J0IHtuZX0gZnJvbSAnLi9iYWRlbC5qcydcclxuaW1wb3J0IHNhbml0aXplSHRtbCBmcm9tICdzYW5pdGl6ZS1odG1sJztcclxuXHJcbmxldCBzaWxseSA9IG5lKGBcclxuICAgIDxoMSBzdHlsZT1cImNvbG9yOiBncmVlblwiPkhlbGxvIDwvaDE+XHJcbmApXHJcblxyXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNpbGx5KVxyXG5cclxudmFyIGEgPSAwOyIsIi8qIChpZ25vcmVkKSAqLyIsIi8qIChpZ25vcmVkKSAqLyIsIi8qIChpZ25vcmVkKSAqLyIsIi8qIChpZ25vcmVkKSAqLyIsIi8qIChpZ25vcmVkKSAqLyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==