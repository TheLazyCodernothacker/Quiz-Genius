"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/auth/[...nextauth]/route";
exports.ids = ["app/api/auth/[...nextauth]/route"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "./action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "./request-async-storage.external?3d59":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "./static-generation-async-storage.external?16bc":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=%2Fworkspaces%2FQuiz-Genius%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fworkspaces%2FQuiz-Genius&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=%2Fworkspaces%2FQuiz-Genius%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fworkspaces%2FQuiz-Genius&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_node_polyfill_headers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/node-polyfill-headers */ \"(rsc)/./node_modules/next/dist/server/node-polyfill-headers.js\");\n/* harmony import */ var next_dist_server_node_polyfill_headers__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_node_polyfill_headers__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var _workspaces_Quiz_Genius_src_app_api_auth_nextauth_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/auth/[...nextauth]/route.ts */ \"(rsc)/./src/app/api/auth/[...nextauth]/route.ts\");\n\n// @ts-ignore this need to be imported from next/dist to be external\n\n\n// @ts-expect-error - replaced by webpack/turbopack loader\n\nconst AppRouteRouteModule = next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1__.AppRouteRouteModule;\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_2__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/[...nextauth]/route\",\n        pathname: \"/api/auth/[...nextauth]\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/[...nextauth]/route\"\n    },\n    resolvedPagePath: \"/workspaces/Quiz-Genius/src/app/api/auth/[...nextauth]/route.ts\",\n    nextConfigOutput,\n    userland: _workspaces_Quiz_Genius_src_app_api_auth_nextauth_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/auth/[...nextauth]/route\";\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhdXRoJTJGJTVCLi4ubmV4dGF1dGglNUQlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlLnRzJmFwcERpcj0lMkZ3b3Jrc3BhY2VzJTJGUXVpei1HZW5pdXMlMkZzcmMlMkZhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPSUyRndvcmtzcGFjZXMlMkZRdWl6LUdlbml1cyZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFnRDtBQUNoRDtBQUMwRjtBQUMzQjtBQUMvRDtBQUM0RjtBQUM1Riw0QkFBNEIsZ0hBQTBCO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsdUdBQXVHO0FBQy9HO0FBQ2lKOztBQUVqSiIsInNvdXJjZXMiOlsid2VicGFjazovL3F1aXpfZ2VuaXVzLz83YTNlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIm5leHQvZGlzdC9zZXJ2ZXIvbm9kZS1wb2x5ZmlsbC1oZWFkZXJzXCI7XG4vLyBAdHMtaWdub3JlIHRoaXMgbmVlZCB0byBiZSBpbXBvcnRlZCBmcm9tIG5leHQvZGlzdCB0byBiZSBleHRlcm5hbFxuaW1wb3J0ICogYXMgbW9kdWxlIGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG4vLyBAdHMtZXhwZWN0LWVycm9yIC0gcmVwbGFjZWQgYnkgd2VicGFjay90dXJib3BhY2sgbG9hZGVyXG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiL3dvcmtzcGFjZXMvUXVpei1HZW5pdXMvc3JjL2FwcC9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlLnRzXCI7XG5jb25zdCBBcHBSb3V0ZVJvdXRlTW9kdWxlID0gbW9kdWxlLkFwcFJvdXRlUm91dGVNb2R1bGU7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9hdXRoL1suLi5uZXh0YXV0aF1cIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIi93b3Jrc3BhY2VzL1F1aXotR2VuaXVzL3NyYy9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBoZWFkZXJIb29rcywgc3RhdGljR2VuZXJhdGlvbkJhaWxvdXQgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGVcIjtcbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgaGVhZGVySG9va3MsIHN0YXRpY0dlbmVyYXRpb25CYWlsb3V0LCBvcmlnaW5hbFBhdGhuYW1lLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=%2Fworkspaces%2FQuiz-Genius%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fworkspaces%2FQuiz-Genius&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/auth/[...nextauth]/route.ts":
/*!*************************************************!*\
  !*** ./src/app/api/auth/[...nextauth]/route.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ handler),\n/* harmony export */   POST: () => (/* binding */ handler),\n/* harmony export */   authOptions: () => (/* binding */ authOptions),\n/* harmony export */   handler: () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/github */ \"(rsc)/./node_modules/next-auth/providers/github.js\");\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../lib/db */ \"(rsc)/./src/lib/db.ts\");\n/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../models/user */ \"(rsc)/./src/models/user.ts\");\n\n\n\n\nconst authOptions = {\n    providers: [\n        (0,next_auth_providers_github__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n            clientId: process.env.GITHUB_ID ?? \"\",\n            clientSecret: process.env.GITHUB_SECRET ?? \"\"\n        })\n    ],\n    callbacks: {\n        async signIn (user) {\n            await (0,_lib_db__WEBPACK_IMPORTED_MODULE_2__.connectToDataBase)();\n            try {\n                const findUser = await _models_user__WEBPACK_IMPORTED_MODULE_3__[\"default\"].findOne({\n                    email: user.user.email\n                });\n                if (findUser) {\n                    console.log(user.user.email);\n                    return true;\n                } else if (findUser === null) {\n                    console.log(\"Creating new user\", user.user.email);\n                    const newUser = new _models_user__WEBPACK_IMPORTED_MODULE_3__[\"default\"]({\n                        email: user.user.email,\n                        username: user.user.name\n                    });\n                    await newUser.save();\n                    return true;\n                }\n            } catch (error) {\n                console.error(error);\n                return false;\n            }\n        }\n    }\n};\nconst handler = next_auth__WEBPACK_IMPORTED_MODULE_0___default()(authOptions);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQWlDO0FBQ3VCO0FBQ0Q7QUFDRjtBQUU5QyxNQUFNSSxjQUFjO0lBQ3pCQyxXQUFXO1FBQ1RKLHNFQUFjQSxDQUFDO1lBQ2JLLFVBQVVDLFFBQVFDLEdBQUcsQ0FBQ0MsU0FBUyxJQUFJO1lBQ25DQyxjQUFjSCxRQUFRQyxHQUFHLENBQUNHLGFBQWEsSUFBSTtRQUM3QztLQUNEO0lBQ0RDLFdBQVc7UUFDVCxNQUFNQyxRQUFPQyxJQUFTO1lBQ3BCLE1BQU1aLDBEQUFpQkE7WUFDdkIsSUFBSTtnQkFDRixNQUFNYSxXQUFXLE1BQU1aLG9EQUFjQSxDQUFDYSxPQUFPLENBQUM7b0JBQzVDQyxPQUFPSCxLQUFLQSxJQUFJLENBQUNHLEtBQUs7Z0JBQ3hCO2dCQUNBLElBQUlGLFVBQVU7b0JBQ1pHLFFBQVFDLEdBQUcsQ0FBQ0wsS0FBS0EsSUFBSSxDQUFDRyxLQUFLO29CQUMzQixPQUFPO2dCQUNULE9BQU8sSUFBSUYsYUFBYSxNQUFNO29CQUM1QkcsUUFBUUMsR0FBRyxDQUFDLHFCQUFxQkwsS0FBS0EsSUFBSSxDQUFDRyxLQUFLO29CQUNoRCxNQUFNRyxVQUFVLElBQUlqQixvREFBY0EsQ0FBQzt3QkFDakNjLE9BQU9ILEtBQUtBLElBQUksQ0FBQ0csS0FBSzt3QkFDdEJJLFVBQVVQLEtBQUtBLElBQUksQ0FBQ1EsSUFBSTtvQkFDMUI7b0JBQ0EsTUFBTUYsUUFBUUcsSUFBSTtvQkFDbEIsT0FBTztnQkFDVDtZQUNGLEVBQUUsT0FBT0MsT0FBTztnQkFDZE4sUUFBUU0sS0FBSyxDQUFDQTtnQkFDZCxPQUFPO1lBQ1Q7UUFDRjtJQUNGO0FBQ0YsRUFBRTtBQUVLLE1BQU1DLFVBQVV6QixnREFBUUEsQ0FBQ0ksYUFBYTtBQUVGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcXVpel9nZW5pdXMvLi9zcmMvYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUudHM/MDA5OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV4dEF1dGggZnJvbSBcIm5leHQtYXV0aFwiO1xuaW1wb3J0IEdpdGh1YlByb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2dpdGh1YlwiO1xuaW1wb3J0IHsgY29ubmVjdFRvRGF0YUJhc2UgfSBmcm9tIFwiLi4vLi4vLi4vLi4vbGliL2RiXCI7XG5pbXBvcnQgUXVpekdlbml1c1VzZXIgZnJvbSBcIi4uLy4uLy4uLy4uL21vZGVscy91c2VyXCI7XG5cbmV4cG9ydCBjb25zdCBhdXRoT3B0aW9ucyA9IHtcbiAgcHJvdmlkZXJzOiBbXG4gICAgR2l0aHViUHJvdmlkZXIoe1xuICAgICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LkdJVEhVQl9JRCA/PyBcIlwiLFxuICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5HSVRIVUJfU0VDUkVUID8/IFwiXCIsXG4gICAgfSksXG4gIF0sXG4gIGNhbGxiYWNrczoge1xuICAgIGFzeW5jIHNpZ25Jbih1c2VyOiBhbnkpIHtcbiAgICAgIGF3YWl0IGNvbm5lY3RUb0RhdGFCYXNlKCk7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBmaW5kVXNlciA9IGF3YWl0IFF1aXpHZW5pdXNVc2VyLmZpbmRPbmUoe1xuICAgICAgICAgIGVtYWlsOiB1c2VyLnVzZXIuZW1haWwsXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoZmluZFVzZXIpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyh1c2VyLnVzZXIuZW1haWwpO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYgKGZpbmRVc2VyID09PSBudWxsKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJDcmVhdGluZyBuZXcgdXNlclwiLCB1c2VyLnVzZXIuZW1haWwpO1xuICAgICAgICAgIGNvbnN0IG5ld1VzZXIgPSBuZXcgUXVpekdlbml1c1VzZXIoe1xuICAgICAgICAgICAgZW1haWw6IHVzZXIudXNlci5lbWFpbCxcbiAgICAgICAgICAgIHVzZXJuYW1lOiB1c2VyLnVzZXIubmFtZSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBhd2FpdCBuZXdVc2VyLnNhdmUoKTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9LFxuICB9LFxufTtcblxuZXhwb3J0IGNvbnN0IGhhbmRsZXIgPSBOZXh0QXV0aChhdXRoT3B0aW9ucyk7XG5cbmV4cG9ydCB7IGhhbmRsZXIgYXMgR0VULCBoYW5kbGVyIGFzIFBPU1QgfTsiXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJHaXRodWJQcm92aWRlciIsImNvbm5lY3RUb0RhdGFCYXNlIiwiUXVpekdlbml1c1VzZXIiLCJhdXRoT3B0aW9ucyIsInByb3ZpZGVycyIsImNsaWVudElkIiwicHJvY2VzcyIsImVudiIsIkdJVEhVQl9JRCIsImNsaWVudFNlY3JldCIsIkdJVEhVQl9TRUNSRVQiLCJjYWxsYmFja3MiLCJzaWduSW4iLCJ1c2VyIiwiZmluZFVzZXIiLCJmaW5kT25lIiwiZW1haWwiLCJjb25zb2xlIiwibG9nIiwibmV3VXNlciIsInVzZXJuYW1lIiwibmFtZSIsInNhdmUiLCJlcnJvciIsImhhbmRsZXIiLCJHRVQiLCJQT1NUIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/auth/[...nextauth]/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/db.ts":
/*!***********************!*\
  !*** ./src/lib/db.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   connectToDataBase: () => (/* binding */ connectToDataBase)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\n// track the connection\nlet isConnected = false;\nconst connectToDataBase = async ()=>{\n    mongoose__WEBPACK_IMPORTED_MODULE_0___default().set(\"strictQuery\", true);\n    if (isConnected) {\n        console.log(\"DB connected already\");\n        return;\n    }\n    try {\n        await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGODB_URI ?? \"\", {\n            dbName: \"QuizGenius\",\n            useNewUrlParser: true,\n            useUnifiedTopology: true\n        });\n        isConnected = true;\n    } catch (error) {\n        console.log(error);\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL2RiLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFnQztBQUNoQyx1QkFBdUI7QUFDdkIsSUFBSUMsY0FBYztBQUNYLE1BQU1DLG9CQUFvQjtJQUMvQkYsbURBQVksQ0FBQyxlQUFlO0lBQzVCLElBQUlDLGFBQWE7UUFDZkcsUUFBUUMsR0FBRyxDQUFDO1FBQ1o7SUFDRjtJQUNBLElBQUk7UUFDRixNQUFNTCx1REFBZ0IsQ0FBQ08sUUFBUUMsR0FBRyxDQUFDQyxXQUFXLElBQUksSUFBSTtZQUNwREMsUUFBUTtZQUNSQyxpQkFBaUI7WUFDakJDLG9CQUFvQjtRQUN0QjtRQUNBWCxjQUFjO0lBQ2hCLEVBQUUsT0FBT1ksT0FBTztRQUNkVCxRQUFRQyxHQUFHLENBQUNRO0lBQ2Q7QUFDRixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcXVpel9nZW5pdXMvLi9zcmMvbGliL2RiLnRzPzllNGYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xuLy8gdHJhY2sgdGhlIGNvbm5lY3Rpb25cbmxldCBpc0Nvbm5lY3RlZCA9IGZhbHNlO1xuZXhwb3J0IGNvbnN0IGNvbm5lY3RUb0RhdGFCYXNlID0gYXN5bmMgKCkgPT4ge1xuICBtb25nb29zZS5zZXQoXCJzdHJpY3RRdWVyeVwiLCB0cnVlKTtcbiAgaWYgKGlzQ29ubmVjdGVkKSB7XG4gICAgY29uc29sZS5sb2coXCJEQiBjb25uZWN0ZWQgYWxyZWFkeVwiKTtcbiAgICByZXR1cm47XG4gIH1cbiAgdHJ5IHtcbiAgICBhd2FpdCBtb25nb29zZS5jb25uZWN0KHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJID8/IFwiXCIsIHtcbiAgICAgIGRiTmFtZTogXCJRdWl6R2VuaXVzXCIsXG4gICAgICB1c2VOZXdVcmxQYXJzZXI6IHRydWUsXG4gICAgICB1c2VVbmlmaWVkVG9wb2xvZ3k6IHRydWUsXG4gICAgfSk7XG4gICAgaXNDb25uZWN0ZWQgPSB0cnVlO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgfVxufTtcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsImlzQ29ubmVjdGVkIiwiY29ubmVjdFRvRGF0YUJhc2UiLCJzZXQiLCJjb25zb2xlIiwibG9nIiwiY29ubmVjdCIsInByb2Nlc3MiLCJlbnYiLCJNT05HT0RCX1VSSSIsImRiTmFtZSIsInVzZU5ld1VybFBhcnNlciIsInVzZVVuaWZpZWRUb3BvbG9neSIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/db.ts\n");

/***/ }),

/***/ "(rsc)/./src/models/user.ts":
/*!****************************!*\
  !*** ./src/models/user.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst UserSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    email: {\n        type: String,\n        unique: [\n            true,\n            \"Email already exists!\"\n        ],\n        required: [\n            true,\n            \"Email is required!\"\n        ]\n    },\n    username: {\n        type: String,\n        required: [\n            true,\n            \"Username is required!\"\n        ]\n    },\n    image: {\n        type: String\n    }\n});\nconst QuizGeniusUser = mongoose__WEBPACK_IMPORTED_MODULE_0__.models.User || (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)(\"User\", UserSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (QuizGeniusUser);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbW9kZWxzL3VzZXIudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWlEO0FBRWpELE1BQU1HLGFBQWEsSUFBSUgsNENBQU1BLENBQUM7SUFDNUJJLE9BQU87UUFDTEMsTUFBTUM7UUFDTkMsUUFBUTtZQUFDO1lBQU07U0FBd0I7UUFDdkNDLFVBQVU7WUFBQztZQUFNO1NBQXFCO0lBQ3hDO0lBQ0FDLFVBQVU7UUFDUkosTUFBTUM7UUFDTkUsVUFBVTtZQUFDO1lBQU07U0FBd0I7SUFDM0M7SUFDQUUsT0FBTztRQUNMTCxNQUFNQztJQUNSO0FBQ0Y7QUFFQSxNQUFNSyxpQkFBaUJULDRDQUFNQSxDQUFDVSxJQUFJLElBQUlYLCtDQUFLQSxDQUFDLFFBQVFFO0FBRXBELGlFQUFlUSxjQUFjQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcXVpel9nZW5pdXMvLi9zcmMvbW9kZWxzL3VzZXIudHM/OGI2NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTY2hlbWEsIG1vZGVsLCBtb2RlbHMgfSBmcm9tIFwibW9uZ29vc2VcIjtcblxuY29uc3QgVXNlclNjaGVtYSA9IG5ldyBTY2hlbWEoe1xuICBlbWFpbDoge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICB1bmlxdWU6IFt0cnVlLCBcIkVtYWlsIGFscmVhZHkgZXhpc3RzIVwiXSxcbiAgICByZXF1aXJlZDogW3RydWUsIFwiRW1haWwgaXMgcmVxdWlyZWQhXCJdLFxuICB9LFxuICB1c2VybmFtZToge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICByZXF1aXJlZDogW3RydWUsIFwiVXNlcm5hbWUgaXMgcmVxdWlyZWQhXCJdLFxuICB9LFxuICBpbWFnZToge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgfSxcbn0pO1xuXG5jb25zdCBRdWl6R2VuaXVzVXNlciA9IG1vZGVscy5Vc2VyIHx8IG1vZGVsKFwiVXNlclwiLCBVc2VyU2NoZW1hKTtcblxuZXhwb3J0IGRlZmF1bHQgUXVpekdlbml1c1VzZXI7XG4iXSwibmFtZXMiOlsiU2NoZW1hIiwibW9kZWwiLCJtb2RlbHMiLCJVc2VyU2NoZW1hIiwiZW1haWwiLCJ0eXBlIiwiU3RyaW5nIiwidW5pcXVlIiwicmVxdWlyZWQiLCJ1c2VybmFtZSIsImltYWdlIiwiUXVpekdlbml1c1VzZXIiLCJVc2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/models/user.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/@babel","vendor-chunks/oauth","vendor-chunks/object-hash","vendor-chunks/preact","vendor-chunks/preact-render-to-string","vendor-chunks/uuid","vendor-chunks/yallist","vendor-chunks/lru-cache","vendor-chunks/cookie","vendor-chunks/oidc-token-hash","vendor-chunks/@panva"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=%2Fworkspaces%2FQuiz-Genius%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fworkspaces%2FQuiz-Genius&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();