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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ROUTES\": function() { return /* binding */ ROUTES; },\n/* harmony export */   \"SIDE_MENUS_CUSTOM\": function() { return /* binding */ SIDE_MENUS_CUSTOM; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ \"./node_modules/@ant-design/icons/es/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nvar ROUTES = {\n    FEED: {\n        LIST: \"/feed\"\n    },\n    FLOCK: {\n        LIST: \"/flock\"\n    },\n    MEDICINE: {\n        LIST: \"/medicine\"\n    },\n    PRODUCTION: {\n        LIST: \"/tasks\"\n    },\n    ATTENDANCE: {\n        LIST: \"/attendance\"\n    },\n    TIMESHEET: {\n        LIST: \"/timesheet\"\n    },\n    LEAVES: {\n        LIST: \"/leave\"\n    },\n    EXPENCES: {\n        LIST: \"/expences\"\n    },\n    BILLING: {\n        LIST: \"/billing\"\n    },\n    REPORTS: {\n        LIST: \"/reports\"\n    },\n    APPROVALS: {\n        LIST: \"/approvals\"\n    },\n    SETTINGS: {\n        LIST: \"/settings\"\n    },\n    USERS: {\n        LIST: \"/users\",\n        EDIT: \"/users/edit\"\n    }\n};\nvar SIDE_MENUS_CUSTOM = [\n    {\n        label: \"Dashboard\",\n        key: \"1\",\n        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__.DashboardOutlined, {}, void 0, false, {\n            fileName: \"/Users/iweb/Downloads/Farm Product/Farm-Project/src/constants/routes.tsx\",\n            lineNumber: 66,\n            columnNumber: 11\n        }, undefined),\n        url: ROUTES.DASHBOARD.LIST,\n        access: \"All\"\n    },\n    {\n        label: \"Users\",\n        key: \"2\",\n        url: ROUTES.USERS.LIST,\n        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__.TeamOutlined, {}, void 0, false, {\n            fileName: \"/Users/iweb/Downloads/Farm Product/Farm-Project/src/constants/routes.tsx\",\n            lineNumber: 74,\n            columnNumber: 11\n        }, undefined),\n        access: \"All\"\n    },\n    {\n        label: \"Clients\",\n        key: \"3\",\n        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__.UsergroupAddOutlined, {}, void 0, false, {\n            fileName: \"/Users/iweb/Downloads/Farm Product/Farm-Project/src/constants/routes.tsx\",\n            lineNumber: 80,\n            columnNumber: 11\n        }, undefined),\n        url: ROUTES.CLIENTS.LIST,\n        access: \"All\"\n    },\n    {\n        label: \"Projects\",\n        key: \"4\",\n        url: ROUTES.PROJECTS.LIST,\n        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__.ProjectOutlined, {}, void 0, false, {\n            fileName: \"/Users/iweb/Downloads/Farm Product/Farm-Project/src/constants/routes.tsx\",\n            lineNumber: 88,\n            columnNumber: 11\n        }, undefined),\n        access: \"All\"\n    },\n    {\n        label: \"Tasks\",\n        key: \"5\",\n        url: ROUTES.TASKS.LIST,\n        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__.CarryOutOutlined, {}, void 0, false, {\n            fileName: \"/Users/iweb/Downloads/Farm Product/Farm-Project/src/constants/routes.tsx\",\n            lineNumber: 95,\n            columnNumber: 11\n        }, undefined),\n        access: \"All\"\n    },\n    {\n        label: \"Attendance\",\n        key: \"6\",\n        url: ROUTES.ATTENDANCE.LIST,\n        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__.ScheduleOutlined, {}, void 0, false, {\n            fileName: \"/Users/iweb/Downloads/Farm Product/Farm-Project/src/constants/routes.tsx\",\n            lineNumber: 102,\n            columnNumber: 11\n        }, undefined),\n        access: \"All\"\n    },\n    {\n        label: \"Timesheet\",\n        key: \"7\",\n        url: ROUTES.TIMESHEET.LIST,\n        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__.ScheduleOutlined, {}, void 0, false, {\n            fileName: \"/Users/iweb/Downloads/Farm Product/Farm-Project/src/constants/routes.tsx\",\n            lineNumber: 109,\n            columnNumber: 11\n        }, undefined),\n        access: \"All\"\n    },\n    {\n        label: \"Leaves/Timeoff\",\n        key: \"8\",\n        url: ROUTES.LEAVES.LIST,\n        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__.CalendarOutlined, {}, void 0, false, {\n            fileName: \"/Users/iweb/Downloads/Farm Product/Farm-Project/src/constants/routes.tsx\",\n            lineNumber: 116,\n            columnNumber: 11\n        }, undefined),\n        access: \"All\"\n    },\n    {\n        label: \"Expences\",\n        key: \"9\",\n        url: ROUTES.EXPENCES.LIST,\n        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__.WalletOutlined, {}, void 0, false, {\n            fileName: \"/Users/iweb/Downloads/Farm Product/Farm-Project/src/constants/routes.tsx\",\n            lineNumber: 123,\n            columnNumber: 11\n        }, undefined),\n        access: \"All\"\n    },\n    {\n        label: \"Billing\",\n        key: \"10\",\n        url: ROUTES.BILLING.LIST,\n        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__.ProfileOutlined, {}, void 0, false, {\n            fileName: \"/Users/iweb/Downloads/Farm Product/Farm-Project/src/constants/routes.tsx\",\n            lineNumber: 130,\n            columnNumber: 11\n        }, undefined),\n        access: \"All\"\n    },\n    {\n        label: \"Reports\",\n        key: \"11\",\n        url: ROUTES.REPORTS.LIST,\n        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__.FundProjectionScreenOutlined, {}, void 0, false, {\n            fileName: \"/Users/iweb/Downloads/Farm Product/Farm-Project/src/constants/routes.tsx\",\n            lineNumber: 137,\n            columnNumber: 11\n        }, undefined),\n        access: \"All\"\n    },\n    {\n        label: \"Approvals\",\n        key: \"12\",\n        url: ROUTES.APPROVALS.LIST,\n        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__.CheckCircleOutlined, {}, void 0, false, {\n            fileName: \"/Users/iweb/Downloads/Farm Product/Farm-Project/src/constants/routes.tsx\",\n            lineNumber: 144,\n            columnNumber: 11\n        }, undefined),\n        access: \"All\"\n    },\n    {\n        label: \"Other Settings\",\n        key: \"13\",\n        url: ROUTES.SETTINGS.LIST,\n        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__.SettingOutlined, {}, void 0, false, {\n            fileName: \"/Users/iweb/Downloads/Farm Product/Farm-Project/src/constants/routes.tsx\",\n            lineNumber: 151,\n            columnNumber: 11\n        }, undefined),\n        access: \"All\"\n    }, \n];\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UUFDRUwsS0FBSyxFQUFFLGdCQUFnQjtRQUN2QkMsR0FBRyxFQUFFLElBQUk7UUFDVEUsR0FBRyxFQUFFcEIsTUFBTSxDQUFDYSxRQUFRLENBQUNYLElBQUk7UUFDekJpQixJQUFJLGdCQUFFLDhEQUFDMUIsOERBQWU7Ozs7cUJBQUc7UUFDekI2QixNQUFNLEVBQUUsS0FBSztLQUNkO0NBQ0YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29uc3RhbnRzL3JvdXRlcy50c3g/M2UxOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBEYXNoYm9hcmRPdXRsaW5lZCxcbiAgVGVhbU91dGxpbmVkLFxuICBXYWxsZXRPdXRsaW5lZCxcbiAgQ2hlY2tDaXJjbGVPdXRsaW5lZCxcbiAgQ2FycnlPdXRPdXRsaW5lZCxcbiAgRnVuZFByb2plY3Rpb25TY3JlZW5PdXRsaW5lZCxcbiAgU2V0dGluZ091dGxpbmVkLFxuICBTY2hlZHVsZU91dGxpbmVkLFxuICBQcm9qZWN0T3V0bGluZWQsXG4gIENhbGVuZGFyT3V0bGluZWQsXG4gIFByb2ZpbGVPdXRsaW5lZCxcbiAgVXNlcmdyb3VwQWRkT3V0bGluZWQsXG59IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgY29uc3QgUk9VVEVTID0ge1xuICBGRUVEOiB7XG4gICAgTElTVDogXCIvZmVlZFwiLFxuICB9LFxuICBGTE9DSzoge1xuICAgIExJU1Q6IFwiL2Zsb2NrXCIsXG4gIH0sXG4gIE1FRElDSU5FOiB7XG4gICAgTElTVDogXCIvbWVkaWNpbmVcIixcbiAgfSxcbiAgUFJPRFVDVElPTjoge1xuICAgIExJU1Q6IFwiL3Rhc2tzXCIsXG4gIH0sXG4gIEFUVEVOREFOQ0U6IHtcbiAgICBMSVNUOiBcIi9hdHRlbmRhbmNlXCIsXG4gIH0sXG4gIFRJTUVTSEVFVDoge1xuICAgIExJU1Q6IFwiL3RpbWVzaGVldFwiLFxuICB9LFxuXG4gIExFQVZFUzoge1xuICAgIExJU1Q6IFwiL2xlYXZlXCIsXG4gIH0sXG4gIEVYUEVOQ0VTOiB7XG4gICAgTElTVDogXCIvZXhwZW5jZXNcIixcbiAgfSxcbiAgQklMTElORzoge1xuICAgIExJU1Q6IFwiL2JpbGxpbmdcIixcbiAgfSxcbiAgUkVQT1JUUzoge1xuICAgIExJU1Q6IFwiL3JlcG9ydHNcIixcbiAgfSxcbiAgQVBQUk9WQUxTOiB7XG4gICAgTElTVDogXCIvYXBwcm92YWxzXCIsXG4gIH0sXG4gIFNFVFRJTkdTOiB7XG4gICAgTElTVDogXCIvc2V0dGluZ3NcIixcbiAgfSxcbiAgVVNFUlM6IHtcbiAgICBMSVNUOiBcIi91c2Vyc1wiLFxuXG4gICAgRURJVDogXCIvdXNlcnMvZWRpdFwiLFxuICB9LFxufTtcblxuZXhwb3J0IGNvbnN0IFNJREVfTUVOVVNfQ1VTVE9NOiBhbnkgPSBbXG4gIHtcbiAgICBsYWJlbDogXCJEYXNoYm9hcmRcIixcbiAgICBrZXk6IFwiMVwiLFxuICAgIGljb246IDxEYXNoYm9hcmRPdXRsaW5lZCAvPixcbiAgICB1cmw6IFJPVVRFUy5EQVNIQk9BUkQuTElTVCxcbiAgICBhY2Nlc3M6IFwiQWxsXCIsXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogXCJVc2Vyc1wiLFxuICAgIGtleTogXCIyXCIsXG4gICAgdXJsOiBST1VURVMuVVNFUlMuTElTVCxcbiAgICBpY29uOiA8VGVhbU91dGxpbmVkIC8+LFxuICAgIGFjY2VzczogXCJBbGxcIixcbiAgfSxcbiAge1xuICAgIGxhYmVsOiBcIkNsaWVudHNcIixcbiAgICBrZXk6IFwiM1wiLFxuICAgIGljb246IDxVc2VyZ3JvdXBBZGRPdXRsaW5lZCAvPixcbiAgICB1cmw6IFJPVVRFUy5DTElFTlRTLkxJU1QsXG4gICAgYWNjZXNzOiBcIkFsbFwiLFxuICB9LFxuICB7XG4gICAgbGFiZWw6IFwiUHJvamVjdHNcIixcbiAgICBrZXk6IFwiNFwiLFxuICAgIHVybDogUk9VVEVTLlBST0pFQ1RTLkxJU1QsXG4gICAgaWNvbjogPFByb2plY3RPdXRsaW5lZCAvPixcbiAgICBhY2Nlc3M6IFwiQWxsXCIsXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogXCJUYXNrc1wiLFxuICAgIGtleTogXCI1XCIsXG4gICAgdXJsOiBST1VURVMuVEFTS1MuTElTVCxcbiAgICBpY29uOiA8Q2FycnlPdXRPdXRsaW5lZCAvPixcbiAgICBhY2Nlc3M6IFwiQWxsXCIsXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogXCJBdHRlbmRhbmNlXCIsXG4gICAga2V5OiBcIjZcIixcbiAgICB1cmw6IFJPVVRFUy5BVFRFTkRBTkNFLkxJU1QsXG4gICAgaWNvbjogPFNjaGVkdWxlT3V0bGluZWQgLz4sXG4gICAgYWNjZXNzOiBcIkFsbFwiLFxuICB9LFxuICB7XG4gICAgbGFiZWw6IFwiVGltZXNoZWV0XCIsXG4gICAga2V5OiBcIjdcIixcbiAgICB1cmw6IFJPVVRFUy5USU1FU0hFRVQuTElTVCxcbiAgICBpY29uOiA8U2NoZWR1bGVPdXRsaW5lZCAvPixcbiAgICBhY2Nlc3M6IFwiQWxsXCIsXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogXCJMZWF2ZXMvVGltZW9mZlwiLFxuICAgIGtleTogXCI4XCIsXG4gICAgdXJsOiBST1VURVMuTEVBVkVTLkxJU1QsXG4gICAgaWNvbjogPENhbGVuZGFyT3V0bGluZWQgLz4sXG4gICAgYWNjZXNzOiBcIkFsbFwiLFxuICB9LFxuICB7XG4gICAgbGFiZWw6IFwiRXhwZW5jZXNcIixcbiAgICBrZXk6IFwiOVwiLFxuICAgIHVybDogUk9VVEVTLkVYUEVOQ0VTLkxJU1QsXG4gICAgaWNvbjogPFdhbGxldE91dGxpbmVkIC8+LFxuICAgIGFjY2VzczogXCJBbGxcIixcbiAgfSxcbiAge1xuICAgIGxhYmVsOiBcIkJpbGxpbmdcIixcbiAgICBrZXk6IFwiMTBcIixcbiAgICB1cmw6IFJPVVRFUy5CSUxMSU5HLkxJU1QsXG4gICAgaWNvbjogPFByb2ZpbGVPdXRsaW5lZCAvPixcbiAgICBhY2Nlc3M6IFwiQWxsXCIsXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogXCJSZXBvcnRzXCIsXG4gICAga2V5OiBcIjExXCIsXG4gICAgdXJsOiBST1VURVMuUkVQT1JUUy5MSVNULFxuICAgIGljb246IDxGdW5kUHJvamVjdGlvblNjcmVlbk91dGxpbmVkIC8+LFxuICAgIGFjY2VzczogXCJBbGxcIixcbiAgfSxcbiAge1xuICAgIGxhYmVsOiBcIkFwcHJvdmFsc1wiLFxuICAgIGtleTogXCIxMlwiLFxuICAgIHVybDogUk9VVEVTLkFQUFJPVkFMUy5MSVNULFxuICAgIGljb246IDxDaGVja0NpcmNsZU91dGxpbmVkIC8+LFxuICAgIGFjY2VzczogXCJBbGxcIixcbiAgfSxcbiAge1xuICAgIGxhYmVsOiBcIk90aGVyIFNldHRpbmdzXCIsXG4gICAga2V5OiBcIjEzXCIsXG4gICAgdXJsOiBST1VURVMuU0VUVElOR1MuTElTVCxcbiAgICBpY29uOiA8U2V0dGluZ091dGxpbmVkIC8+LFxuICAgIGFjY2VzczogXCJBbGxcIixcbiAgfSxcbl07XG4iXSwibmFtZXMiOlsiRGFzaGJvYXJkT3V0bGluZWQiLCJUZWFtT3V0bGluZWQiLCJXYWxsZXRPdXRsaW5lZCIsIkNoZWNrQ2lyY2xlT3V0bGluZWQiLCJDYXJyeU91dE91dGxpbmVkIiwiRnVuZFByb2plY3Rpb25TY3JlZW5PdXRsaW5lZCIsIlNldHRpbmdPdXRsaW5lZCIsIlNjaGVkdWxlT3V0bGluZWQiLCJQcm9qZWN0T3V0bGluZWQiLCJDYWxlbmRhck91dGxpbmVkIiwiUHJvZmlsZU91dGxpbmVkIiwiVXNlcmdyb3VwQWRkT3V0bGluZWQiLCJSZWFjdCIsIlJPVVRFUyIsIkZFRUQiLCJMSVNUIiwiRkxPQ0siLCJNRURJQ0lORSIsIlBST0RVQ1RJT04iLCJBVFRFTkRBTkNFIiwiVElNRVNIRUVUIiwiTEVBVkVTIiwiRVhQRU5DRVMiLCJCSUxMSU5HIiwiUkVQT1JUUyIsIkFQUFJPVkFMUyIsIlNFVFRJTkdTIiwiVVNFUlMiLCJFRElUIiwiU0lERV9NRU5VU19DVVNUT00iLCJsYWJlbCIsImtleSIsImljb24iLCJ1cmwiLCJEQVNIQk9BUkQiLCJhY2Nlc3MiLCJDTElFTlRTIiwiUFJPSkVDVFMiLCJUQVNLUyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/constants/routes.tsx\n");

/***/ })

});