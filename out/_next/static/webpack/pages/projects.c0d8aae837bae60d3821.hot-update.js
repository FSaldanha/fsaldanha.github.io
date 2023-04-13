self["webpackHotUpdate_N_E"]("pages/projects",{

/***/ "./pages/projects.tsx":
/*!****************************!*\
  !*** ./pages/projects.tsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSG": function() { return /* binding */ __N_SSG; },
/* harmony export */   "default": function() { return /* binding */ Page; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/Layout */ "./components/Layout.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "/home/fsaldanha/dev/dev_fsaldanha/pages/projects.tsx";

var __N_SSG = true;
function Page(_ref) {
  var _this = this;

  var projects = _ref.projects;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_1__.default, {
    title: "Projects",
    page: "projects",
    children: [projects.map(function (project, k) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "card",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: project.url,
            target: "_blank",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
              children: project.title
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 27,
              columnNumber: 13
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 27,
              columnNumber: 45
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("em", {
              children: project.lead
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 28,
              columnNumber: 13
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 28,
              columnNumber: 36
            }, _this), project.description]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 11
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 9
        }, _this)
      }, k, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 7
      }, _this);
    }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: ["Also, the website where you are is open source, and its code is ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        href: "https://github.com/FSaldanha/fsaldanha.github.io",
        target: "_blank",
        children: "available on GitHub"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 72
      }, this), ". It uses ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        href: "http://nextjs.org/",
        target: "_blank",
        children: "Next.JS"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 180
      }, this), "."]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 10
  }, this);
}
_c = Page;

var _c;

$RefreshReg$(_c, "Page");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvamVjdHMudHN4Il0sIm5hbWVzIjpbIlBhZ2UiLCJwcm9qZWN0cyIsIm1hcCIsInByb2plY3QiLCJrIiwidXJsIiwidGl0bGUiLCJsZWFkIiwiZGVzY3JpcHRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7O0FBbUJlLFNBQVNBLElBQVQsT0FBbUM7QUFBQTs7QUFBQSxNQUFuQkMsUUFBbUIsUUFBbkJBLFFBQW1CO0FBQ2hELHNCQUFPLDhEQUFDLHVEQUFEO0FBQVEsU0FBSyxFQUFDLFVBQWQ7QUFBeUIsUUFBSSxFQUFDLFVBQTlCO0FBQUEsZUFDSkEsUUFBUSxDQUFDQyxHQUFULENBQWEsVUFBQ0MsT0FBRCxFQUFVQyxDQUFWO0FBQUEsMEJBQ1o7QUFBSyxpQkFBUyxFQUFDLE1BQWY7QUFBQSwrQkFDRTtBQUFBLGlDQUNFO0FBQUcsZ0JBQUksRUFBRUQsT0FBTyxDQUFDRSxHQUFqQjtBQUFzQixrQkFBTSxFQUFDLFFBQTdCO0FBQUEsb0NBQ0U7QUFBQSx3QkFBU0YsT0FBTyxDQUFDRztBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBQ2tDO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRGxDLGVBRUU7QUFBQSx3QkFBS0gsT0FBTyxDQUFDSTtBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkYsZUFFeUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGekIsRUFHR0osT0FBTyxDQUFDSyxXQUhYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixTQUEyQkosQ0FBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURZO0FBQUEsS0FBYixDQURJLGVBWUw7QUFBQSxrR0FBbUU7QUFBRyxZQUFJLEVBQUMsa0RBQVI7QUFBMkQsY0FBTSxFQUFDLFFBQWxFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQW5FLDZCQUErSztBQUFHLFlBQUksRUFBQyxvQkFBUjtBQUE2QixjQUFNLEVBQUMsUUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FBL0s7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBWks7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFjRDtLQWZ1QkosSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9qZWN0cy5jMGQ4YWFlODM3YmFlNjBkMzgyMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2V0U3RhdGljUHJvcHMgfSBmcm9tICduZXh0J1xuaW1wb3J0IExheW91dCBmcm9tICdAY29tcG9uZW50cy9MYXlvdXQnXG5pbXBvcnQgY29udGVudCBmcm9tICdAY29udGVudHMvcHJvamVjdHMuanNvbidcblxudHlwZSBQcm9qZWN0ID0ge1xuICB1cmw/OiBzdHJpbmdcbiAgdGl0bGU/OiBzdHJpbmdcbiAgbGVhZD86IHN0cmluZ1xuICBkZXNjcmlwdGlvbj86IHN0cmluZ1xufVxuXG50eXBlIFByb3BzID0ge1xuICBwcm9qZWN0czogUHJvamVjdFtdXG59XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wczogR2V0U3RhdGljUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHByb2plY3RzOiBQcm9qZWN0W10gPSBjb250ZW50LnByb2plY3RzO1xuICByZXR1cm4geyBwcm9wczogeyBwcm9qZWN0cyB9IH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFnZSh7IHByb2plY3RzIH06IFByb3BzKSB7XG4gIHJldHVybiA8TGF5b3V0IHRpdGxlPVwiUHJvamVjdHNcIiBwYWdlPVwicHJvamVjdHNcIj5cbiAgICB7cHJvamVjdHMubWFwKChwcm9qZWN0LCBrKSA9PiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIiBrZXk9e2t9PlxuICAgICAgICA8cD5cbiAgICAgICAgICA8YSBocmVmPXtwcm9qZWN0LnVybH0gdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICA8c3Ryb25nPntwcm9qZWN0LnRpdGxlfTwvc3Ryb25nPjxiciAvPlxuICAgICAgICAgICAgPGVtPntwcm9qZWN0LmxlYWR9PC9lbT48YnIgLz5cbiAgICAgICAgICAgIHtwcm9qZWN0LmRlc2NyaXB0aW9ufVxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+XG4gICAgKSl9XG4gICAgPHA+QWxzbywgdGhlIHdlYnNpdGUgd2hlcmUgeW91IGFyZSBpcyBvcGVuIHNvdXJjZSwgYW5kIGl0cyBjb2RlIGlzIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vRlNhbGRhbmhhL2ZzYWxkYW5oYS5naXRodWIuaW9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5hdmFpbGFibGUgb24gR2l0SHViPC9hPi4gSXQgdXNlcyA8YSBocmVmPVwiaHR0cDovL25leHRqcy5vcmcvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+TmV4dC5KUzwvYT4uPC9wPlxuICA8L0xheW91dD5cbn0iXSwic291cmNlUm9vdCI6IiJ9