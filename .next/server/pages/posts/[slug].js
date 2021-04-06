module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/posts/[slug].tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/pages/posts/[slug].tsx":
/*!************************************!*\
  !*** ./src/pages/posts/[slug].tsx ***!
  \************************************/
/*! exports provided: default, getServerSideProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Post; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getServerSideProps\", function() { return getServerSideProps; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/client */ \"next-auth/client\");\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prismic_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prismic-dom */ \"prismic-dom\");\n/* harmony import */ var prismic_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prismic_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _services_prismic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/prismic */ \"./src/services/prismic.ts\");\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ \"date-fns\");\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var date_fns_locale_pt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns/locale/pt */ \"date-fns/locale/pt\");\n/* harmony import */ var date_fns_locale_pt__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(date_fns_locale_pt__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _post_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./post.module.scss */ \"./src/pages/posts/post.module.scss\");\n/* harmony import */ var _post_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_post_module_scss__WEBPACK_IMPORTED_MODULE_7__);\n\n\nvar _jsxFileName = \"/Users/citelsistema/Desktop/ignite-aulas/Reactjs/Chapter03/ignews/src/pages/posts/[slug].tsx\";\n\n\n\n\n\n\n\nfunction Post({\n  post\n}) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: [post.title, \" | Ignews\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 7\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 5\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"main\", {\n      className: _post_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.container,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"article\", {\n        className: _post_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.post,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n          children: post.title\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 9\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"time\", {\n          children: post.updatedAt\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 31,\n          columnNumber: 9\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _post_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.postContent,\n          dangerouslySetInnerHTML: {\n            __html: post.content\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 32,\n          columnNumber: 9\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 7\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 5\n    }, this)]\n  }, void 0, true);\n}\nconst getServerSideProps = async ({\n  req,\n  params\n}) => {\n  const session = await Object(next_auth_client__WEBPACK_IMPORTED_MODULE_1__[\"getSession\"])({\n    req\n  });\n  const {\n    slug\n  } = params;\n\n  if (!(session !== null && session !== void 0 && session.activeSubscription)) {\n    return {\n      redirect: {\n        destination: \"/\",\n        permanent: false\n      }\n    };\n  }\n\n  const prismic = Object(_services_prismic__WEBPACK_IMPORTED_MODULE_3__[\"getPrismicClient\"])(req);\n  const response = await prismic.getByUID('post', String(slug), {});\n  const post = {\n    slug,\n    title: prismic_dom__WEBPACK_IMPORTED_MODULE_2__[\"RichText\"].asText(response.data.title),\n    content: prismic_dom__WEBPACK_IMPORTED_MODULE_2__[\"RichText\"].asHtml(response.data.content),\n    pdatedAt: Object(date_fns__WEBPACK_IMPORTED_MODULE_4__[\"format\"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_4__[\"parseISO\"])(response.last_publication_date), \"dd 'de' MMMM 'de' yyyy\", {\n      locale: date_fns_locale_pt__WEBPACK_IMPORTED_MODULE_5___default.a\n    })\n  };\n  return {\n    props: {\n      post\n    },\n    redirect: 60 * 30 // 30 minutes\n\n  };\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvcG9zdHMvW3NsdWddLnRzeD9kMDUzIl0sIm5hbWVzIjpbIlBvc3QiLCJwb3N0IiwidGl0bGUiLCJzdHlsZXMiLCJjb250YWluZXIiLCJ1cGRhdGVkQXQiLCJwb3N0Q29udGVudCIsIl9faHRtbCIsImNvbnRlbnQiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJyZXEiLCJwYXJhbXMiLCJzZXNzaW9uIiwiZ2V0U2Vzc2lvbiIsInNsdWciLCJhY3RpdmVTdWJzY3JpcHRpb24iLCJyZWRpcmVjdCIsImRlc3RpbmF0aW9uIiwicGVybWFuZW50IiwicHJpc21pYyIsImdldFByaXNtaWNDbGllbnQiLCJyZXNwb25zZSIsImdldEJ5VUlEIiwiU3RyaW5nIiwiUmljaFRleHQiLCJhc1RleHQiLCJkYXRhIiwiYXNIdG1sIiwicGRhdGVkQXQiLCJmb3JtYXQiLCJwYXJzZUlTTyIsImxhc3RfcHVibGljYXRpb25fZGF0ZSIsImxvY2FsZSIsInB0IiwicHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBV2UsU0FBU0EsSUFBVCxDQUFlO0FBQUVDO0FBQUYsQ0FBZixFQUFvQztBQUNqRCxzQkFDRTtBQUFBLDRCQUNBLHFFQUFDLGdEQUFEO0FBQUEsNkJBQ0U7QUFBQSxtQkFBUUEsSUFBSSxDQUFDQyxLQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFEQSxlQUtBO0FBQU0sZUFBUyxFQUFFQyx3REFBTSxDQUFDQyxTQUF4QjtBQUFBLDZCQUNFO0FBQVMsaUJBQVMsRUFBRUQsd0RBQU0sQ0FBQ0YsSUFBM0I7QUFBQSxnQ0FDRTtBQUFBLG9CQUFLQSxJQUFJLENBQUNDO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUVFO0FBQUEsb0JBQU9ELElBQUksQ0FBQ0k7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGLGVBR0U7QUFDRSxtQkFBUyxFQUFFRix3REFBTSxDQUFDRyxXQURwQjtBQUVFLGlDQUF1QixFQUFFO0FBQUVDLGtCQUFNLEVBQUVOLElBQUksQ0FBQ087QUFBZjtBQUYzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMQTtBQUFBLGtCQURGO0FBa0JEO0FBRU0sTUFBTUMsa0JBQXNDLEdBQUcsT0FBTztBQUFFQyxLQUFGO0FBQU9DO0FBQVAsQ0FBUCxLQUEyQjtBQUMvRSxRQUFNQyxPQUFPLEdBQUcsTUFBTUMsbUVBQVUsQ0FBQztBQUFFSDtBQUFGLEdBQUQsQ0FBaEM7QUFDQSxRQUFNO0FBQUVJO0FBQUYsTUFBV0gsTUFBakI7O0FBRUEsTUFBSSxFQUFDQyxPQUFELGFBQUNBLE9BQUQsZUFBQ0EsT0FBTyxDQUFFRyxrQkFBVixDQUFKLEVBQWtDO0FBQ2hDLFdBQU87QUFDTEMsY0FBUSxFQUFFO0FBQ1JDLG1CQUFXLEVBQUUsR0FETDtBQUVSQyxpQkFBUyxFQUFFO0FBRkg7QUFETCxLQUFQO0FBTUQ7O0FBRUQsUUFBTUMsT0FBTyxHQUFHQywwRUFBZ0IsQ0FBQ1YsR0FBRCxDQUFoQztBQUVBLFFBQU1XLFFBQVEsR0FBRyxNQUFNRixPQUFPLENBQUNHLFFBQVIsQ0FBaUIsTUFBakIsRUFBeUJDLE1BQU0sQ0FBQ1QsSUFBRCxDQUEvQixFQUF1QyxFQUF2QyxDQUF2QjtBQUVBLFFBQU1iLElBQUksR0FBRztBQUNYYSxRQURXO0FBRVhaLFNBQUssRUFBRXNCLG9EQUFRLENBQUNDLE1BQVQsQ0FBZ0JKLFFBQVEsQ0FBQ0ssSUFBVCxDQUFjeEIsS0FBOUIsQ0FGSTtBQUdYTSxXQUFPLEVBQUVnQixvREFBUSxDQUFDRyxNQUFULENBQWdCTixRQUFRLENBQUNLLElBQVQsQ0FBY2xCLE9BQTlCLENBSEU7QUFJWG9CLFlBQVEsRUFBRUMsdURBQU0sQ0FDZEMseURBQVEsQ0FBQ1QsUUFBUSxDQUFDVSxxQkFBVixDQURNLEVBRWQsd0JBRmMsRUFHZDtBQUFFQyxZQUFNLEVBQUVDLHlEQUFFQTtBQUFaLEtBSGM7QUFKTCxHQUFiO0FBV0EsU0FBTztBQUNMQyxTQUFLLEVBQUU7QUFDTGpDO0FBREssS0FERjtBQUlMZSxZQUFRLEVBQUUsS0FBSyxFQUpWLENBSWM7O0FBSmQsR0FBUDtBQU9ELENBbkNNIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL3Bvc3RzL1tzbHVnXS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHZXRTZXJ2ZXJTaWRlUHJvcHMgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IHsgZ2V0U2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvY2xpZW50XCI7XG5pbXBvcnQgeyBSaWNoVGV4dCB9IGZyb20gXCJwcmlzbWljLWRvbVwiO1xuaW1wb3J0IHsgZ2V0UHJpc21pY0NsaWVudCB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9wcmlzbWljXCI7XG5cbmltcG9ydCB7IHBhcnNlSVNPLCBmb3JtYXQgfSBmcm9tICdkYXRlLWZucyc7XG5pbXBvcnQgcHQgZnJvbSAnZGF0ZS1mbnMvbG9jYWxlL3B0JztcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3Bvc3QubW9kdWxlLnNjc3MnXG5cbmludGVyZmFjZSBQb3N0UHJvcHMge1xuICBwb3N0OiB7XG4gICAgc2x1Zzogc3RyaW5nO1xuICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgY29udGVudDogc3RyaW5nO1xuICAgIHVwZGF0ZWRBdDogc3RyaW5nO1xuICB9ICBcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9zdCggeyBwb3N0IH06IFBvc3RQcm9wcykge1xuICByZXR1cm4oXG4gICAgPD5cbiAgICA8SGVhZD5cbiAgICAgIDx0aXRsZT57cG9zdC50aXRsZX0gfCBJZ25ld3M8L3RpdGxlPiAgICAgIFxuICAgIDwvSGVhZD5cblxuICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9e3N0eWxlcy5wb3N0fT5cbiAgICAgICAgPGgxPntwb3N0LnRpdGxlfTwvaDE+XG4gICAgICAgIDx0aW1lPntwb3N0LnVwZGF0ZWRBdH08L3RpbWU+XG4gICAgICAgIDxkaXYgXG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMucG9zdENvbnRlbnR9XG4gICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBwb3N0LmNvbnRlbnQgfX1cbiAgICAgICAgLz5cbiAgICAgIDwvYXJ0aWNsZT5cbiAgICA8L21haW4+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHM6IEdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jICh7IHJlcSwgcGFyYW1zIH0pID0+IHtcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oeyByZXEgfSk7XG4gIGNvbnN0IHsgc2x1ZyB9ID0gcGFyYW1zO1xuXG4gIGlmICghc2Vzc2lvbj8uYWN0aXZlU3Vic2NyaXB0aW9uKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlZGlyZWN0OiB7XG4gICAgICAgIGRlc3RpbmF0aW9uOiBcIi9cIixcbiAgICAgICAgcGVybWFuZW50OiBmYWxzZSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0IHByaXNtaWMgPSBnZXRQcmlzbWljQ2xpZW50KHJlcSk7XG5cbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBwcmlzbWljLmdldEJ5VUlEKCdwb3N0JywgU3RyaW5nKHNsdWcpLCB7fSlcblxuICBjb25zdCBwb3N0ID0ge1xuICAgIHNsdWcsXG4gICAgdGl0bGU6IFJpY2hUZXh0LmFzVGV4dChyZXNwb25zZS5kYXRhLnRpdGxlKSxcbiAgICBjb250ZW50OiBSaWNoVGV4dC5hc0h0bWwocmVzcG9uc2UuZGF0YS5jb250ZW50KSxcbiAgICBwZGF0ZWRBdDogZm9ybWF0KFxuICAgICAgcGFyc2VJU08ocmVzcG9uc2UubGFzdF9wdWJsaWNhdGlvbl9kYXRlKSwgXG4gICAgICBcImRkICdkZScgTU1NTSAnZGUnIHl5eXlcIiwgXG4gICAgICB7IGxvY2FsZTogcHQgfVxuICAgICkgXG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgcG9zdFxuICAgIH0sXG4gICAgcmVkaXJlY3Q6IDYwICogMzAsIC8vIDMwIG1pbnV0ZXNcbiAgfVxuXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/posts/[slug].tsx\n");

/***/ }),

/***/ "./src/pages/posts/post.module.scss":
/*!******************************************!*\
  !*** ./src/pages/posts/post.module.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"post_container__2m5md\",\n\t\"post\": \"post_post__3quL2\",\n\t\"postContent\": \"post_postContent__B7qN9\",\n\t\"previewContent\": \"post_previewContent__oPpak\",\n\t\"continueReadings\": \"post_continueReadings__2TSEi\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvcG9zdHMvcG9zdC5tb2R1bGUuc2Nzcz85ZmUwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9zcmMvcGFnZXMvcG9zdHMvcG9zdC5tb2R1bGUuc2Nzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcInBvc3RfY29udGFpbmVyX18ybTVtZFwiLFxuXHRcInBvc3RcIjogXCJwb3N0X3Bvc3RfXzNxdUwyXCIsXG5cdFwicG9zdENvbnRlbnRcIjogXCJwb3N0X3Bvc3RDb250ZW50X19CN3FOOVwiLFxuXHRcInByZXZpZXdDb250ZW50XCI6IFwicG9zdF9wcmV2aWV3Q29udGVudF9fb1BwYWtcIixcblx0XCJjb250aW51ZVJlYWRpbmdzXCI6IFwicG9zdF9jb250aW51ZVJlYWRpbmdzX18yVFNFaVwiXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/posts/post.module.scss\n");

/***/ }),

/***/ "./src/services/prismic.ts":
/*!*********************************!*\
  !*** ./src/services/prismic.ts ***!
  \*********************************/
/*! exports provided: getPrismicClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getPrismicClient\", function() { return getPrismicClient; });\n/* harmony import */ var _prismicio_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prismicio/client */ \"@prismicio/client\");\n/* harmony import */ var _prismicio_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prismicio_client__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction getPrismicClient(req) {\n  const prismic = _prismicio_client__WEBPACK_IMPORTED_MODULE_0___default.a.client(process.env.PRISMIC_ENDPOINT, {\n    req,\n    accessToken: process.env.PRISMIC_ACCESS_TOKEN\n  });\n  return prismic;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvcHJpc21pYy50cz84YzUwIl0sIm5hbWVzIjpbImdldFByaXNtaWNDbGllbnQiLCJyZXEiLCJwcmlzbWljIiwiUHJpc21pYyIsImNsaWVudCIsInByb2Nlc3MiLCJlbnYiLCJQUklTTUlDX0VORFBPSU5UIiwiYWNjZXNzVG9rZW4iLCJQUklTTUlDX0FDQ0VTU19UT0tFTiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLFNBQVNBLGdCQUFULENBQTBCQyxHQUExQixFQUF5QztBQUM5QyxRQUFNQyxPQUFPLEdBQUdDLHdEQUFPLENBQUNDLE1BQVIsQ0FDZEMsT0FBTyxDQUFDQyxHQUFSLENBQVlDLGdCQURFLEVBRWQ7QUFDRU4sT0FERjtBQUVFTyxlQUFXLEVBQUVILE9BQU8sQ0FBQ0MsR0FBUixDQUFZRztBQUYzQixHQUZjLENBQWhCO0FBT0EsU0FBT1AsT0FBUDtBQUNEIiwiZmlsZSI6Ii4vc3JjL3NlcnZpY2VzL3ByaXNtaWMudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJpc21pYyBmcm9tICdAcHJpc21pY2lvL2NsaWVudCdcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFByaXNtaWNDbGllbnQocmVxPzogdW5rbm93bikge1xuICBjb25zdCBwcmlzbWljID0gUHJpc21pYy5jbGllbnQoXG4gICAgcHJvY2Vzcy5lbnYuUFJJU01JQ19FTkRQT0lOVCxcbiAgICB7XG4gICAgICByZXEsXG4gICAgICBhY2Nlc3NUb2tlbjogcHJvY2Vzcy5lbnYuUFJJU01JQ19BQ0NFU1NfVE9LRU5cbiAgICB9XG4gIClcbiAgcmV0dXJuIHByaXNtaWM7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/services/prismic.ts\n");

/***/ }),

/***/ "@prismicio/client":
/*!************************************!*\
  !*** external "@prismicio/client" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@prismicio/client\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAcHJpc21pY2lvL2NsaWVudFwiPzdiNTEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQHByaXNtaWNpby9jbGllbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcHJpc21pY2lvL2NsaWVudFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@prismicio/client\n");

/***/ }),

/***/ "date-fns":
/*!***************************!*\
  !*** external "date-fns" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"date-fns\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJkYXRlLWZuc1wiPzgwNTciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiZGF0ZS1mbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJkYXRlLWZuc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///date-fns\n");

/***/ }),

/***/ "date-fns/locale/pt":
/*!*************************************!*\
  !*** external "date-fns/locale/pt" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"date-fns/locale/pt\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJkYXRlLWZucy9sb2NhbGUvcHRcIj9hMzg0Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImRhdGUtZm5zL2xvY2FsZS9wdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImRhdGUtZm5zL2xvY2FsZS9wdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///date-fns/locale/pt\n");

/***/ }),

/***/ "next-auth/client":
/*!***********************************!*\
  !*** external "next-auth/client" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-auth/client\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LWF1dGgvY2xpZW50XCI/ZDNiMCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJuZXh0LWF1dGgvY2xpZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1hdXRoL2NsaWVudFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next-auth/client\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "prismic-dom":
/*!******************************!*\
  !*** external "prismic-dom" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prismic-dom\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcmlzbWljLWRvbVwiPzhjNTAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicHJpc21pYy1kb20uanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcmlzbWljLWRvbVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///prismic-dom\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });