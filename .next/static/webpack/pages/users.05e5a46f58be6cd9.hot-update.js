"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/users",{

/***/ "./src/constants/routes.tsx":
/*!**********************************!*\
  !*** ./src/constants/routes.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ROUTES\": function() { return /* binding */ ROUTES; },\n/* harmony export */   \"SIDE_MENUS_CUSTOM\": function() { return /* binding */ SIDE_MENUS_CUSTOM; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ \"./node_modules/@ant-design/icons/es/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nvar ROUTES = {\n    FEED: {\n        LIST: \"/feed\"\n    },\n    FLOCK: {\n        LIST: \"/flock\"\n    },\n    MEDICINE: {\n        LIST: \"/medicine\"\n    },\n    PRODUCTION: {\n        LIST: \"/production\"\n    },\n    REPORTS: {\n        LIST: \"/reports\"\n    }\n};\nvar SIDE_MENUS_CUSTOM = [\n    {\n        label: \"FEED\",\n        key: \"1\",\n        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__.DashboardOutlined, {}, void 0, false, {\n            fileName: \"/Users/iweb/Downloads/Farm Product/Farm-Project/src/constants/routes.tsx\",\n            lineNumber: 40,\n            columnNumber: 11\n        }, undefined),\n        url: ROUTES.FEED.LIST,\n        access: \"All\"\n    },\n    {\n        label: \"FLOCK\",\n        key: \"2\",\n        url: ROUTES.FLOCK.LIST,\n        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__.TeamOutlined, {}, void 0, false, {\n            fileName: \"/Users/iweb/Downloads/Farm Product/Farm-Project/src/constants/routes.tsx\",\n            lineNumber: 48,\n            columnNumber: 11\n        }, undefined),\n        access: \"All\"\n    },\n    {\n        label: \"Clients\",\n        key: \"3\",\n        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__.UsergroupAddOutlined, {}, void 0, false, {\n            fileName: \"/Users/iweb/Downloads/Farm Product/Farm-Project/src/constants/routes.tsx\",\n            lineNumber: 54,\n            columnNumber: 11\n        }, undefined),\n        url: ROUTES.M.LIST,\n        access: \"All\"\n    },\n    {\n        label: \"Projects\",\n        key: \"4\",\n        url: ROUTES.PROJECTS.LIST,\n        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__.ProjectOutlined, {}, void 0, false, {\n            fileName: \"/Users/iweb/Downloads/Farm Product/Farm-Project/src/constants/routes.tsx\",\n            lineNumber: 62,\n            columnNumber: 11\n        }, undefined),\n        access: \"All\"\n    },\n    {\n        label: \"Tasks\",\n        key: \"5\",\n        url: ROUTES.TASKS.LIST,\n        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__.CarryOutOutlined, {}, void 0, false, {\n            fileName: \"/Users/iweb/Downloads/Farm Product/Farm-Project/src/constants/routes.tsx\",\n            lineNumber: 69,\n            columnNumber: 11\n        }, undefined),\n        access: \"All\"\n    },\n    {\n        label: \"Attendance\",\n        key: \"6\",\n        url: ROUTES.ATTENDANCE.LIST,\n        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__.ScheduleOutlined, {}, void 0, false, {\n            fileName: \"/Users/iweb/Downloads/Farm Product/Farm-Project/src/constants/routes.tsx\",\n            lineNumber: 76,\n            columnNumber: 11\n        }, undefined),\n        access: \"All\"\n    },\n    {\n        label: \"Timesheet\",\n        key: \"7\",\n        url: ROUTES.TIMESHEET.LIST,\n        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__.ScheduleOutlined, {}, void 0, false, {\n            fileName: \"/Users/iweb/Downloads/Farm Product/Farm-Project/src/constants/routes.tsx\",\n            lineNumber: 83,\n            columnNumber: 11\n        }, undefined),\n        access: \"All\"\n    },\n    {\n        label: \"Leaves/Timeoff\",\n        key: \"8\",\n        url: ROUTES.LEAVES.LIST,\n        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__.CalendarOutlined, {}, void 0, false, {\n            fileName: \"/Users/iweb/Downloads/Farm Product/Farm-Project/src/constants/routes.tsx\",\n            lineNumber: 90,\n            columnNumber: 11\n        }, undefined),\n        access: \"All\"\n    },\n    {\n        label: \"Expences\",\n        key: \"9\",\n        url: ROUTES.EXPENCES.LIST,\n        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__.WalletOutlined, {}, void 0, false, {\n            fileName: \"/Users/iweb/Downloads/Farm Product/Farm-Project/src/constants/routes.tsx\",\n            lineNumber: 97,\n            columnNumber: 11\n        }, undefined),\n        access: \"All\"\n    },\n    {\n        label: \"Billing\",\n        key: \"10\",\n        url: ROUTES.BILLING.LIST,\n        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__.ProfileOutlined, {}, void 0, false, {\n            fileName: \"/Users/iweb/Downloads/Farm Product/Farm-Project/src/constants/routes.tsx\",\n            lineNumber: 104,\n            columnNumber: 11\n        }, undefined),\n        access: \"All\"\n    },\n    {\n        label: \"Reports\",\n        key: \"11\",\n        url: ROUTES.REPORTS.LIST,\n        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__.FundProjectionScreenOutlined, {}, void 0, false, {\n            fileName: \"/Users/iweb/Downloads/Farm Product/Farm-Project/src/constants/routes.tsx\",\n            lineNumber: 111,\n            columnNumber: 11\n        }, undefined),\n        access: \"All\"\n    },\n    {\n        label: \"Approvals\",\n        key: \"12\",\n        url: ROUTES.APPROVALS.LIST,\n        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__.CheckCircleOutlined, {}, void 0, false, {\n            fileName: \"/Users/iweb/Downloads/Farm Product/Farm-Project/src/constants/routes.tsx\",\n            lineNumber: 118,\n            columnNumber: 11\n        }, undefined),\n        access: \"All\"\n    },\n    {\n        label: \"Other Settings\",\n        key: \"13\",\n        url: ROUTES.SETTINGS.LIST,\n        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__.SettingOutlined, {}, void 0, false, {\n            fileName: \"/Users/iweb/Downloads/Farm Product/Farm-Project/src/constants/routes.tsx\",\n            lineNumber: 125,\n            columnNumber: 11\n        }, undefined),\n        access: \"All\"\n    }, \n];\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29uc3RhbnRzL3JvdXRlcy50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBYTJCO0FBQ0Q7QUFFbkIsSUFBTWEsTUFBTSxHQUFHO0lBQ3BCQyxJQUFJLEVBQUU7UUFDSkMsSUFBSSxFQUFFLE9BQU87S0FDZDtJQUNEQyxLQUFLLEVBQUU7UUFDTEQsSUFBSSxFQUFFLFFBQVE7S0FDZjtJQUNERSxRQUFRLEVBQUU7UUFDUkYsSUFBSSxFQUFFLFdBQVc7S0FDbEI7SUFDREcsVUFBVSxFQUFFO1FBQ1ZILElBQUksRUFBRSxhQUFhO0tBQ3BCO0lBQ0RJLE9BQU8sRUFBRTtRQUNQSixJQUFJLEVBQUUsVUFBVTtLQUNqQjtDQUVGLENBQUM7QUFFSyxJQUFNSyxpQkFBaUIsR0FBUTtJQUNwQztRQUNFQyxLQUFLLEVBQUUsTUFBTTtRQUNiQyxHQUFHLEVBQUUsR0FBRztRQUNSQyxJQUFJLGdCQUFFLDhEQUFDdkIsZ0VBQWlCOzs7O3FCQUFHO1FBQzNCd0IsR0FBRyxFQUFFWCxNQUFNLENBQUNDLElBQUksQ0FBQ0MsSUFBSTtRQUNyQlUsTUFBTSxFQUFFLEtBQUs7S0FDZDtJQUNEO1FBQ0VKLEtBQUssRUFBRSxPQUFPO1FBQ2RDLEdBQUcsRUFBRSxHQUFHO1FBQ1JFLEdBQUcsRUFBRVgsTUFBTSxDQUFDRyxLQUFLLENBQUNELElBQUk7UUFDdEJRLElBQUksZ0JBQUUsOERBQUN0QiwyREFBWTs7OztxQkFBRztRQUN0QndCLE1BQU0sRUFBRSxLQUFLO0tBQ2Q7SUFDRDtRQUNFSixLQUFLLEVBQUUsU0FBUztRQUNoQkMsR0FBRyxFQUFFLEdBQUc7UUFDUkMsSUFBSSxnQkFBRSw4REFBQ1osbUVBQW9COzs7O3FCQUFHO1FBQzlCYSxHQUFHLEVBQUVYLE1BQU0sQ0FBQ2EsQ0FBQyxDQUFDWCxJQUFJO1FBQ2xCVSxNQUFNLEVBQUUsS0FBSztLQUNkO0lBQ0Q7UUFDRUosS0FBSyxFQUFFLFVBQVU7UUFDakJDLEdBQUcsRUFBRSxHQUFHO1FBQ1JFLEdBQUcsRUFBRVgsTUFBTSxDQUFDYyxRQUFRLENBQUNaLElBQUk7UUFDekJRLElBQUksZ0JBQUUsOERBQUNmLDhEQUFlOzs7O3FCQUFHO1FBQ3pCaUIsTUFBTSxFQUFFLEtBQUs7S0FDZDtJQUNEO1FBQ0VKLEtBQUssRUFBRSxPQUFPO1FBQ2RDLEdBQUcsRUFBRSxHQUFHO1FBQ1JFLEdBQUcsRUFBRVgsTUFBTSxDQUFDZSxLQUFLLENBQUNiLElBQUk7UUFDdEJRLElBQUksZ0JBQUUsOERBQUNuQiwrREFBZ0I7Ozs7cUJBQUc7UUFDMUJxQixNQUFNLEVBQUUsS0FBSztLQUNkO0lBQ0Q7UUFDRUosS0FBSyxFQUFFLFlBQVk7UUFDbkJDLEdBQUcsRUFBRSxHQUFHO1FBQ1JFLEdBQUcsRUFBRVgsTUFBTSxDQUFDZ0IsVUFBVSxDQUFDZCxJQUFJO1FBQzNCUSxJQUFJLGdCQUFFLDhEQUFDaEIsK0RBQWdCOzs7O3FCQUFHO1FBQzFCa0IsTUFBTSxFQUFFLEtBQUs7S0FDZDtJQUNEO1FBQ0VKLEtBQUssRUFBRSxXQUFXO1FBQ2xCQyxHQUFHLEVBQUUsR0FBRztRQUNSRSxHQUFHLEVBQUVYLE1BQU0sQ0FBQ2lCLFNBQVMsQ0FBQ2YsSUFBSTtRQUMxQlEsSUFBSSxnQkFBRSw4REFBQ2hCLCtEQUFnQjs7OztxQkFBRztRQUMxQmtCLE1BQU0sRUFBRSxLQUFLO0tBQ2Q7SUFDRDtRQUNFSixLQUFLLEVBQUUsZ0JBQWdCO1FBQ3ZCQyxHQUFHLEVBQUUsR0FBRztRQUNSRSxHQUFHLEVBQUVYLE1BQU0sQ0FBQ2tCLE1BQU0sQ0FBQ2hCLElBQUk7UUFDdkJRLElBQUksZ0JBQUUsOERBQUNkLCtEQUFnQjs7OztxQkFBRztRQUMxQmdCLE1BQU0sRUFBRSxLQUFLO0tBQ2Q7SUFDRDtRQUNFSixLQUFLLEVBQUUsVUFBVTtRQUNqQkMsR0FBRyxFQUFFLEdBQUc7UUFDUkUsR0FBRyxFQUFFWCxNQUFNLENBQUNtQixRQUFRLENBQUNqQixJQUFJO1FBQ3pCUSxJQUFJLGdCQUFFLDhEQUFDckIsNkRBQWM7Ozs7cUJBQUc7UUFDeEJ1QixNQUFNLEVBQUUsS0FBSztLQUNkO0lBQ0Q7UUFDRUosS0FBSyxFQUFFLFNBQVM7UUFDaEJDLEdBQUcsRUFBRSxJQUFJO1FBQ1RFLEdBQUcsRUFBRVgsTUFBTSxDQUFDb0IsT0FBTyxDQUFDbEIsSUFBSTtRQUN4QlEsSUFBSSxnQkFBRSw4REFBQ2IsOERBQWU7Ozs7cUJBQUc7UUFDekJlLE1BQU0sRUFBRSxLQUFLO0tBQ2Q7SUFDRDtRQUNFSixLQUFLLEVBQUUsU0FBUztRQUNoQkMsR0FBRyxFQUFFLElBQUk7UUFDVEUsR0FBRyxFQUFFWCxNQUFNLENBQUNNLE9BQU8sQ0FBQ0osSUFBSTtRQUN4QlEsSUFBSSxnQkFBRSw4REFBQ2xCLDJFQUE0Qjs7OztxQkFBRztRQUN0Q29CLE1BQU0sRUFBRSxLQUFLO0tBQ2Q7SUFDRDtRQUNFSixLQUFLLEVBQUUsV0FBVztRQUNsQkMsR0FBRyxFQUFFLElBQUk7UUFDVEUsR0FBRyxFQUFFWCxNQUFNLENBQUNxQixTQUFTLENBQUNuQixJQUFJO1FBQzFCUSxJQUFJLGdCQUFFLDhEQUFDcEIsa0VBQW1COzs7O3FCQUFHO1FBQzdCc0IsTUFBTSxFQUFFLEtBQUs7S0FDZDtJQUNEO1FBQ0VKLEtBQUssRUFBRSxnQkFBZ0I7UUFDdkJDLEdBQUcsRUFBRSxJQUFJO1FBQ1RFLEdBQUcsRUFBRVgsTUFBTSxDQUFDc0IsUUFBUSxDQUFDcEIsSUFBSTtRQUN6QlEsSUFBSSxnQkFBRSw4REFBQ2pCLDhEQUFlOzs7O3FCQUFHO1FBQ3pCbUIsTUFBTSxFQUFFLEtBQUs7S0FDZDtDQUNGLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnN0YW50cy9yb3V0ZXMudHN4PzNlMTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRGFzaGJvYXJkT3V0bGluZWQsXG4gIFRlYW1PdXRsaW5lZCxcbiAgV2FsbGV0T3V0bGluZWQsXG4gIENoZWNrQ2lyY2xlT3V0bGluZWQsXG4gIENhcnJ5T3V0T3V0bGluZWQsXG4gIEZ1bmRQcm9qZWN0aW9uU2NyZWVuT3V0bGluZWQsXG4gIFNldHRpbmdPdXRsaW5lZCxcbiAgU2NoZWR1bGVPdXRsaW5lZCxcbiAgUHJvamVjdE91dGxpbmVkLFxuICBDYWxlbmRhck91dGxpbmVkLFxuICBQcm9maWxlT3V0bGluZWQsXG4gIFVzZXJncm91cEFkZE91dGxpbmVkLFxufSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGNvbnN0IFJPVVRFUyA9IHtcbiAgRkVFRDoge1xuICAgIExJU1Q6IFwiL2ZlZWRcIixcbiAgfSxcbiAgRkxPQ0s6IHtcbiAgICBMSVNUOiBcIi9mbG9ja1wiLFxuICB9LFxuICBNRURJQ0lORToge1xuICAgIExJU1Q6IFwiL21lZGljaW5lXCIsXG4gIH0sXG4gIFBST0RVQ1RJT046IHtcbiAgICBMSVNUOiBcIi9wcm9kdWN0aW9uXCIsXG4gIH0sXG4gIFJFUE9SVFM6IHtcbiAgICBMSVNUOiBcIi9yZXBvcnRzXCIsXG4gIH0sXG4gIFxufTtcblxuZXhwb3J0IGNvbnN0IFNJREVfTUVOVVNfQ1VTVE9NOiBhbnkgPSBbXG4gIHtcbiAgICBsYWJlbDogXCJGRUVEXCIsXG4gICAga2V5OiBcIjFcIixcbiAgICBpY29uOiA8RGFzaGJvYXJkT3V0bGluZWQgLz4sXG4gICAgdXJsOiBST1VURVMuRkVFRC5MSVNULFxuICAgIGFjY2VzczogXCJBbGxcIixcbiAgfSxcbiAge1xuICAgIGxhYmVsOiBcIkZMT0NLXCIsXG4gICAga2V5OiBcIjJcIixcbiAgICB1cmw6IFJPVVRFUy5GTE9DSy5MSVNULFxuICAgIGljb246IDxUZWFtT3V0bGluZWQgLz4sXG4gICAgYWNjZXNzOiBcIkFsbFwiLFxuICB9LFxuICB7XG4gICAgbGFiZWw6IFwiQ2xpZW50c1wiLFxuICAgIGtleTogXCIzXCIsXG4gICAgaWNvbjogPFVzZXJncm91cEFkZE91dGxpbmVkIC8+LFxuICAgIHVybDogUk9VVEVTLk0uTElTVCxcbiAgICBhY2Nlc3M6IFwiQWxsXCIsXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogXCJQcm9qZWN0c1wiLFxuICAgIGtleTogXCI0XCIsXG4gICAgdXJsOiBST1VURVMuUFJPSkVDVFMuTElTVCxcbiAgICBpY29uOiA8UHJvamVjdE91dGxpbmVkIC8+LFxuICAgIGFjY2VzczogXCJBbGxcIixcbiAgfSxcbiAge1xuICAgIGxhYmVsOiBcIlRhc2tzXCIsXG4gICAga2V5OiBcIjVcIixcbiAgICB1cmw6IFJPVVRFUy5UQVNLUy5MSVNULFxuICAgIGljb246IDxDYXJyeU91dE91dGxpbmVkIC8+LFxuICAgIGFjY2VzczogXCJBbGxcIixcbiAgfSxcbiAge1xuICAgIGxhYmVsOiBcIkF0dGVuZGFuY2VcIixcbiAgICBrZXk6IFwiNlwiLFxuICAgIHVybDogUk9VVEVTLkFUVEVOREFOQ0UuTElTVCxcbiAgICBpY29uOiA8U2NoZWR1bGVPdXRsaW5lZCAvPixcbiAgICBhY2Nlc3M6IFwiQWxsXCIsXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogXCJUaW1lc2hlZXRcIixcbiAgICBrZXk6IFwiN1wiLFxuICAgIHVybDogUk9VVEVTLlRJTUVTSEVFVC5MSVNULFxuICAgIGljb246IDxTY2hlZHVsZU91dGxpbmVkIC8+LFxuICAgIGFjY2VzczogXCJBbGxcIixcbiAgfSxcbiAge1xuICAgIGxhYmVsOiBcIkxlYXZlcy9UaW1lb2ZmXCIsXG4gICAga2V5OiBcIjhcIixcbiAgICB1cmw6IFJPVVRFUy5MRUFWRVMuTElTVCxcbiAgICBpY29uOiA8Q2FsZW5kYXJPdXRsaW5lZCAvPixcbiAgICBhY2Nlc3M6IFwiQWxsXCIsXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogXCJFeHBlbmNlc1wiLFxuICAgIGtleTogXCI5XCIsXG4gICAgdXJsOiBST1VURVMuRVhQRU5DRVMuTElTVCxcbiAgICBpY29uOiA8V2FsbGV0T3V0bGluZWQgLz4sXG4gICAgYWNjZXNzOiBcIkFsbFwiLFxuICB9LFxuICB7XG4gICAgbGFiZWw6IFwiQmlsbGluZ1wiLFxuICAgIGtleTogXCIxMFwiLFxuICAgIHVybDogUk9VVEVTLkJJTExJTkcuTElTVCxcbiAgICBpY29uOiA8UHJvZmlsZU91dGxpbmVkIC8+LFxuICAgIGFjY2VzczogXCJBbGxcIixcbiAgfSxcbiAge1xuICAgIGxhYmVsOiBcIlJlcG9ydHNcIixcbiAgICBrZXk6IFwiMTFcIixcbiAgICB1cmw6IFJPVVRFUy5SRVBPUlRTLkxJU1QsXG4gICAgaWNvbjogPEZ1bmRQcm9qZWN0aW9uU2NyZWVuT3V0bGluZWQgLz4sXG4gICAgYWNjZXNzOiBcIkFsbFwiLFxuICB9LFxuICB7XG4gICAgbGFiZWw6IFwiQXBwcm92YWxzXCIsXG4gICAga2V5OiBcIjEyXCIsXG4gICAgdXJsOiBST1VURVMuQVBQUk9WQUxTLkxJU1QsXG4gICAgaWNvbjogPENoZWNrQ2lyY2xlT3V0bGluZWQgLz4sXG4gICAgYWNjZXNzOiBcIkFsbFwiLFxuICB9LFxuICB7XG4gICAgbGFiZWw6IFwiT3RoZXIgU2V0dGluZ3NcIixcbiAgICBrZXk6IFwiMTNcIixcbiAgICB1cmw6IFJPVVRFUy5TRVRUSU5HUy5MSVNULFxuICAgIGljb246IDxTZXR0aW5nT3V0bGluZWQgLz4sXG4gICAgYWNjZXNzOiBcIkFsbFwiLFxuICB9LFxuXTtcbiJdLCJuYW1lcyI6WyJEYXNoYm9hcmRPdXRsaW5lZCIsIlRlYW1PdXRsaW5lZCIsIldhbGxldE91dGxpbmVkIiwiQ2hlY2tDaXJjbGVPdXRsaW5lZCIsIkNhcnJ5T3V0T3V0bGluZWQiLCJGdW5kUHJvamVjdGlvblNjcmVlbk91dGxpbmVkIiwiU2V0dGluZ091dGxpbmVkIiwiU2NoZWR1bGVPdXRsaW5lZCIsIlByb2plY3RPdXRsaW5lZCIsIkNhbGVuZGFyT3V0bGluZWQiLCJQcm9maWxlT3V0bGluZWQiLCJVc2VyZ3JvdXBBZGRPdXRsaW5lZCIsIlJlYWN0IiwiUk9VVEVTIiwiRkVFRCIsIkxJU1QiLCJGTE9DSyIsIk1FRElDSU5FIiwiUFJPRFVDVElPTiIsIlJFUE9SVFMiLCJTSURFX01FTlVTX0NVU1RPTSIsImxhYmVsIiwia2V5IiwiaWNvbiIsInVybCIsImFjY2VzcyIsIk0iLCJQUk9KRUNUUyIsIlRBU0tTIiwiQVRURU5EQU5DRSIsIlRJTUVTSEVFVCIsIkxFQVZFUyIsIkVYUEVOQ0VTIiwiQklMTElORyIsIkFQUFJPVkFMUyIsIlNFVFRJTkdTIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/constants/routes.tsx\n");

/***/ })

});