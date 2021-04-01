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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/api/subscribe.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: name, version, private, scripts, dependencies, devDependencies, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"name\\\":\\\"ignews\\\",\\\"version\\\":\\\"0.1.0\\\",\\\"private\\\":true,\\\"scripts\\\":{\\\"dev\\\":\\\"next dev\\\",\\\"build\\\":\\\"next build\\\",\\\"start\\\":\\\"next start\\\"},\\\"dependencies\\\":{\\\"@stripe/stripe-js\\\":\\\"^1.13.2\\\",\\\"axios\\\":\\\"^0.21.1\\\",\\\"faunadb\\\":\\\"^4.1.3\\\",\\\"next\\\":\\\"10.0.9\\\",\\\"next-auth\\\":\\\"^3.13.3\\\",\\\"react\\\":\\\"17.0.2\\\",\\\"react-dom\\\":\\\"17.0.2\\\",\\\"react-icons\\\":\\\"^4.2.0\\\",\\\"sass\\\":\\\"^1.32.8\\\",\\\"stripe\\\":\\\"^8.140.0\\\"},\\\"devDependencies\\\":{\\\"@types/next-auth\\\":\\\"^3.13.0\\\",\\\"@types/node\\\":\\\"^14.14.36\\\",\\\"@types/react\\\":\\\"^17.0.3\\\",\\\"typescript\\\":\\\"^4.2.3\\\"}}\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3BhY2thZ2UuanNvbi5qcyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./package.json\n");

/***/ }),

/***/ "./src/pages/api/subscribe.ts":
/*!************************************!*\
  !*** ./src/pages/api/subscribe.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! faunadb */ \"faunadb\");\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(faunadb__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/client */ \"next-auth/client\");\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _services_stripe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/stripe */ \"./src/services/stripe.ts\");\n/* harmony import */ var _services_fauna__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/fauna */ \"./src/services/fauna.ts\");\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (req, res) => {\n  if (req.method === 'POST') {\n    const session = await Object(next_auth_client__WEBPACK_IMPORTED_MODULE_1__[\"getSession\"])({\n      req\n    });\n    const user = await _services_fauna__WEBPACK_IMPORTED_MODULE_3__[\"fauna\"].query(faunadb__WEBPACK_IMPORTED_MODULE_0__[\"query\"].Get(faunadb__WEBPACK_IMPORTED_MODULE_0__[\"query\"].Match(faunadb__WEBPACK_IMPORTED_MODULE_0__[\"query\"].Index('user_by_email'), faunadb__WEBPACK_IMPORTED_MODULE_0__[\"query\"].Casefold(session.user.email))));\n    let customerId = user.data.stripe_customer_id;\n\n    if (!customerId) {\n      const stripeCustomer = await _services_stripe__WEBPACK_IMPORTED_MODULE_2__[\"stripe\"].customers.create({\n        email: session.user.email // metadata\n\n      });\n      await _services_fauna__WEBPACK_IMPORTED_MODULE_3__[\"fauna\"].query(faunadb__WEBPACK_IMPORTED_MODULE_0__[\"query\"].Update(faunadb__WEBPACK_IMPORTED_MODULE_0__[\"query\"].Ref(faunadb__WEBPACK_IMPORTED_MODULE_0__[\"query\"].Collection('users'), user.ref.id), {\n        data: {\n          stripe_customer_id: stripeCustomer.id\n        }\n      }));\n      customerId = stripeCustomer.id;\n    }\n\n    const stripeCheckoutSession = await _services_stripe__WEBPACK_IMPORTED_MODULE_2__[\"stripe\"].checkout.sessions.create({\n      customer: customerId,\n      payment_method_types: ['card'],\n      billing_address_collection: 'required',\n      line_items: [{\n        price: 'price_1IaM7cL29EXkrxBnIx9wnRuK',\n        quantity: 1\n      }],\n      mode: 'subscription',\n      allow_promotion_codes: true,\n      success_url: process.env.STRIPE_SUCCESS_URL,\n      cancel_url: process.env.STRIPE_CANCEL_URL\n    });\n    return res.status(200).json({\n      sessionId: stripeCheckoutSession.id\n    });\n  } else {\n    res.setHeader('Allow', 'POST');\n    res.status(405).end('Method not allowed');\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvYXBpL3N1YnNjcmliZS50cz81NWE1Il0sIm5hbWVzIjpbInJlcSIsInJlcyIsIm1ldGhvZCIsInNlc3Npb24iLCJnZXRTZXNzaW9uIiwidXNlciIsImZhdW5hIiwicXVlcnkiLCJxIiwiR2V0IiwiTWF0Y2giLCJJbmRleCIsIkNhc2Vmb2xkIiwiZW1haWwiLCJjdXN0b21lcklkIiwiZGF0YSIsInN0cmlwZV9jdXN0b21lcl9pZCIsInN0cmlwZUN1c3RvbWVyIiwic3RyaXBlIiwiY3VzdG9tZXJzIiwiY3JlYXRlIiwiVXBkYXRlIiwiUmVmIiwiQ29sbGVjdGlvbiIsInJlZiIsImlkIiwic3RyaXBlQ2hlY2tvdXRTZXNzaW9uIiwiY2hlY2tvdXQiLCJzZXNzaW9ucyIsImN1c3RvbWVyIiwicGF5bWVudF9tZXRob2RfdHlwZXMiLCJiaWxsaW5nX2FkZHJlc3NfY29sbGVjdGlvbiIsImxpbmVfaXRlbXMiLCJwcmljZSIsInF1YW50aXR5IiwibW9kZSIsImFsbG93X3Byb21vdGlvbl9jb2RlcyIsInN1Y2Nlc3NfdXJsIiwicHJvY2VzcyIsImVudiIsIlNUUklQRV9TVUNDRVNTX1VSTCIsImNhbmNlbF91cmwiLCJTVFJJUEVfQ0FOQ0VMX1VSTCIsInN0YXR1cyIsImpzb24iLCJzZXNzaW9uSWQiLCJzZXRIZWFkZXIiLCJlbmQiXSwibWFwcGluZ3MiOiJBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFZZSxzRUFBT0EsR0FBUCxFQUE0QkMsR0FBNUIsS0FBcUQ7QUFDbEUsTUFBSUQsR0FBRyxDQUFDRSxNQUFKLEtBQWUsTUFBbkIsRUFBMkI7QUFDekIsVUFBTUMsT0FBTyxHQUFHLE1BQU1DLG1FQUFVLENBQUM7QUFBRUo7QUFBRixLQUFELENBQWhDO0FBRUEsVUFBTUssSUFBSSxHQUFHLE1BQU1DLHFEQUFLLENBQUNDLEtBQU4sQ0FDakJDLDZDQUFDLENBQUNDLEdBQUYsQ0FDRUQsNkNBQUMsQ0FBQ0UsS0FBRixDQUNFRiw2Q0FBQyxDQUFDRyxLQUFGLENBQVEsZUFBUixDQURGLEVBRUVILDZDQUFDLENBQUNJLFFBQUYsQ0FBV1QsT0FBTyxDQUFDRSxJQUFSLENBQWFRLEtBQXhCLENBRkYsQ0FERixDQURpQixDQUFuQjtBQVNBLFFBQUlDLFVBQVUsR0FBR1QsSUFBSSxDQUFDVSxJQUFMLENBQVVDLGtCQUEzQjs7QUFFQSxRQUFJLENBQUNGLFVBQUwsRUFBaUI7QUFDZixZQUFNRyxjQUFjLEdBQUcsTUFBTUMsdURBQU0sQ0FBQ0MsU0FBUCxDQUFpQkMsTUFBakIsQ0FBd0I7QUFDbkRQLGFBQUssRUFBRVYsT0FBTyxDQUFDRSxJQUFSLENBQWFRLEtBRCtCLENBRW5EOztBQUZtRCxPQUF4QixDQUE3QjtBQUtBLFlBQU1QLHFEQUFLLENBQUNDLEtBQU4sQ0FDSkMsNkNBQUMsQ0FBQ2EsTUFBRixDQUNFYiw2Q0FBQyxDQUFDYyxHQUFGLENBQU1kLDZDQUFDLENBQUNlLFVBQUYsQ0FBYSxPQUFiLENBQU4sRUFBNkJsQixJQUFJLENBQUNtQixHQUFMLENBQVNDLEVBQXRDLENBREYsRUFFRTtBQUNFVixZQUFJLEVBQUU7QUFDSkMsNEJBQWtCLEVBQUVDLGNBQWMsQ0FBQ1E7QUFEL0I7QUFEUixPQUZGLENBREksQ0FBTjtBQVVFWCxnQkFBVSxHQUFHRyxjQUFjLENBQUNRLEVBQTVCO0FBQ0g7O0FBR0QsVUFBTUMscUJBQXFCLEdBQUcsTUFBTVIsdURBQU0sQ0FBQ1MsUUFBUCxDQUFnQkMsUUFBaEIsQ0FBeUJSLE1BQXpCLENBQWdDO0FBQ2xFUyxjQUFRLEVBQUVmLFVBRHdEO0FBRWxFZ0IsMEJBQW9CLEVBQUUsQ0FBQyxNQUFELENBRjRDO0FBR2xFQyxnQ0FBMEIsRUFBRSxVQUhzQztBQUlsRUMsZ0JBQVUsRUFBRSxDQUNWO0FBQUVDLGFBQUssRUFBRSxnQ0FBVDtBQUEyQ0MsZ0JBQVEsRUFBRTtBQUFyRCxPQURVLENBSnNEO0FBT2xFQyxVQUFJLEVBQUUsY0FQNEQ7QUFRbEVDLDJCQUFxQixFQUFFLElBUjJDO0FBU2xFQyxpQkFBVyxFQUFFQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsa0JBVHlDO0FBVWxFQyxnQkFBVSxFQUFFSCxPQUFPLENBQUNDLEdBQVIsQ0FBWUc7QUFWMEMsS0FBaEMsQ0FBcEM7QUFhQSxXQUFPekMsR0FBRyxDQUFDMEMsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVDLGVBQVMsRUFBRW5CLHFCQUFxQixDQUFDRDtBQUFuQyxLQUFyQixDQUFQO0FBRUQsR0FqREQsTUFpRE87QUFDTHhCLE9BQUcsQ0FBQzZDLFNBQUosQ0FBYyxPQUFkLEVBQXVCLE1BQXZCO0FBQ0E3QyxPQUFHLENBQUMwQyxNQUFKLENBQVcsR0FBWCxFQUFnQkksR0FBaEIsQ0FBb0Isb0JBQXBCO0FBQ0Q7QUFDRixDQXRERCIsImZpbGUiOiIuL3NyYy9wYWdlcy9hcGkvc3Vic2NyaWJlLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gJ25leHQnXG5pbXBvcnQgeyBxdWVyeSBhcyBxIH0gZnJvbSAnZmF1bmFkYic7XG5pbXBvcnQgeyBnZXRTZXNzaW9uIH0gZnJvbSAnbmV4dC1hdXRoL2NsaWVudCdcbmltcG9ydCB7IHN0cmlwZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3N0cmlwZSdcbmltcG9ydCB7IGZhdW5hIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZmF1bmEnO1xuXG5cbnR5cGUgVXNlciA9IHtcbiAgcmVmOiB7XG4gICAgaWQ6IHN0cmluZztcbiAgfSxcbiAgZGF0YToge1xuICAgIHN0cmlwZV9jdXN0b21lcl9pZDogc3RyaW5nO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkgPT4ge1xuICBpZiAocmVxLm1ldGhvZCA9PT0gJ1BPU1QnKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oeyByZXEgfSk7XG5cbiAgICBjb25zdCB1c2VyID0gYXdhaXQgZmF1bmEucXVlcnk8VXNlcj4oXG4gICAgICBxLkdldChcbiAgICAgICAgcS5NYXRjaChcbiAgICAgICAgICBxLkluZGV4KCd1c2VyX2J5X2VtYWlsJyksXG4gICAgICAgICAgcS5DYXNlZm9sZChzZXNzaW9uLnVzZXIuZW1haWwpXG4gICAgICAgIClcbiAgICAgIClcbiAgICApXG5cbiAgICBsZXQgY3VzdG9tZXJJZCA9IHVzZXIuZGF0YS5zdHJpcGVfY3VzdG9tZXJfaWQ7XG5cbiAgICBpZiAoIWN1c3RvbWVySWQpIHtcbiAgICAgIGNvbnN0IHN0cmlwZUN1c3RvbWVyID0gYXdhaXQgc3RyaXBlLmN1c3RvbWVycy5jcmVhdGUoe1xuICAgICAgICBlbWFpbDogc2Vzc2lvbi51c2VyLmVtYWlsLFxuICAgICAgICAvLyBtZXRhZGF0YVxuICAgICAgfSlcbiAgXG4gICAgICBhd2FpdCBmYXVuYS5xdWVyeShcbiAgICAgICAgcS5VcGRhdGUoXG4gICAgICAgICAgcS5SZWYocS5Db2xsZWN0aW9uKCd1c2VycycpLCB1c2VyLnJlZi5pZCksXG4gICAgICAgICAge1xuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICBzdHJpcGVfY3VzdG9tZXJfaWQ6IHN0cmlwZUN1c3RvbWVyLmlkXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICApXG4gICAgICApXG4gICAgICAgIGN1c3RvbWVySWQgPSBzdHJpcGVDdXN0b21lci5pZDtcbiAgICB9XG4gICAgXG4gICAgXG4gICAgY29uc3Qgc3RyaXBlQ2hlY2tvdXRTZXNzaW9uID0gYXdhaXQgc3RyaXBlLmNoZWNrb3V0LnNlc3Npb25zLmNyZWF0ZSh7XG4gICAgICBjdXN0b21lcjogY3VzdG9tZXJJZCxcbiAgICAgIHBheW1lbnRfbWV0aG9kX3R5cGVzOiBbJ2NhcmQnXSxcbiAgICAgIGJpbGxpbmdfYWRkcmVzc19jb2xsZWN0aW9uOiAncmVxdWlyZWQnLFxuICAgICAgbGluZV9pdGVtczogW1xuICAgICAgICB7IHByaWNlOiAncHJpY2VfMUlhTTdjTDI5RVhrcnhCbkl4OXduUnVLJywgcXVhbnRpdHk6IDF9XG4gICAgICBdLFxuICAgICAgbW9kZTogJ3N1YnNjcmlwdGlvbicsXG4gICAgICBhbGxvd19wcm9tb3Rpb25fY29kZXM6IHRydWUsXG4gICAgICBzdWNjZXNzX3VybDogcHJvY2Vzcy5lbnYuU1RSSVBFX1NVQ0NFU1NfVVJMLFxuICAgICAgY2FuY2VsX3VybDogcHJvY2Vzcy5lbnYuU1RSSVBFX0NBTkNFTF9VUkwgICAgIFxuICAgIH0pXG5cbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oeyBzZXNzaW9uSWQ6IHN0cmlwZUNoZWNrb3V0U2Vzc2lvbi5pZCB9KVxuXG4gIH0gZWxzZSB7XG4gICAgcmVzLnNldEhlYWRlcignQWxsb3cnLCAnUE9TVCcpXG4gICAgcmVzLnN0YXR1cyg0MDUpLmVuZCgnTWV0aG9kIG5vdCBhbGxvd2VkJylcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/api/subscribe.ts\n");

/***/ }),

/***/ "./src/services/fauna.ts":
/*!*******************************!*\
  !*** ./src/services/fauna.ts ***!
  \*******************************/
/*! exports provided: fauna */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fauna\", function() { return fauna; });\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! faunadb */ \"faunadb\");\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(faunadb__WEBPACK_IMPORTED_MODULE_0__);\n\nconst fauna = new faunadb__WEBPACK_IMPORTED_MODULE_0__[\"Client\"]({\n  secret: process.env.FAUNADB_KEY\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvZmF1bmEudHM/OGY0ZCJdLCJuYW1lcyI6WyJmYXVuYSIsIkNsaWVudCIsInNlY3JldCIsInByb2Nlc3MiLCJlbnYiLCJGQVVOQURCX0tFWSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLE1BQU1BLEtBQUssR0FBRyxJQUFJQyw4Q0FBSixDQUFXO0FBQzlCQyxRQUFNLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQztBQURVLENBQVgsQ0FBZCIsImZpbGUiOiIuL3NyYy9zZXJ2aWNlcy9mYXVuYS50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENsaWVudCB9IGZyb20gJ2ZhdW5hZGInO1xuXG5leHBvcnQgY29uc3QgZmF1bmEgPSBuZXcgQ2xpZW50KHtcbiAgc2VjcmV0OiBwcm9jZXNzLmVudi5GQVVOQURCX0tFWVxufSk7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/services/fauna.ts\n");

/***/ }),

/***/ "./src/services/stripe.ts":
/*!********************************!*\
  !*** ./src/services/stripe.ts ***!
  \********************************/
/*! exports provided: stripe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"stripe\", function() { return stripe; });\n/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stripe */ \"stripe\");\n/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(stripe__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../package.json */ \"./package.json\");\nvar _package_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../package.json */ \"./package.json\", 1);\n\n\nconst stripe = new stripe__WEBPACK_IMPORTED_MODULE_0___default.a(process.env.STRIPE_API_KEY, {\n  apiVersion: '2020-08-27',\n  appInfo: {\n    name: 'ignewstest',\n    version: _package_json__WEBPACK_IMPORTED_MODULE_1__[\"version\"]\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvc3RyaXBlLnRzP2Q5NjgiXSwibmFtZXMiOlsic3RyaXBlIiwiU3RyaXBlIiwicHJvY2VzcyIsImVudiIsIlNUUklQRV9BUElfS0VZIiwiYXBpVmVyc2lvbiIsImFwcEluZm8iLCJuYW1lIiwidmVyc2lvbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUVPLE1BQU1BLE1BQU0sR0FBRyxJQUFJQyw2Q0FBSixDQUNwQkMsT0FBTyxDQUFDQyxHQUFSLENBQVlDLGNBRFEsRUFFcEI7QUFDRUMsWUFBVSxFQUFFLFlBRGQ7QUFFRUMsU0FBTyxFQUFFO0FBQ1BDLFFBQUksRUFBRSxZQURDO0FBRVBDLGtFQUFPQTtBQUZBO0FBRlgsQ0FGb0IsQ0FBZiIsImZpbGUiOiIuL3NyYy9zZXJ2aWNlcy9zdHJpcGUudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3RyaXBlIGZyb20gJ3N0cmlwZSc7XG5cbmltcG9ydCB7IHZlcnNpb24gfSBmcm9tICcuLi8uLi9wYWNrYWdlLmpzb24nO1xuXG5leHBvcnQgY29uc3Qgc3RyaXBlID0gbmV3IFN0cmlwZShcbiAgcHJvY2Vzcy5lbnYuU1RSSVBFX0FQSV9LRVksXG4gIHtcbiAgICBhcGlWZXJzaW9uOiAnMjAyMC0wOC0yNycsXG4gICAgYXBwSW5mbzoge1xuICAgICAgbmFtZTogJ2lnbmV3c3Rlc3QnLFxuICAgICAgdmVyc2lvblxuICAgIH1cbiAgfVxuKTtcblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/services/stripe.ts\n");

/***/ }),

/***/ "faunadb":
/*!**************************!*\
  !*** external "faunadb" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"faunadb\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmYXVuYWRiXCI/OWIwYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJmYXVuYWRiLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmF1bmFkYlwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///faunadb\n");

/***/ }),

/***/ "next-auth/client":
/*!***********************************!*\
  !*** external "next-auth/client" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-auth/client\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LWF1dGgvY2xpZW50XCI/ZDNiMCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJuZXh0LWF1dGgvY2xpZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1hdXRoL2NsaWVudFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next-auth/client\n");

/***/ }),

/***/ "stripe":
/*!*************************!*\
  !*** external "stripe" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"stripe\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHJpcGVcIj9mNWFiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InN0cmlwZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0cmlwZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///stripe\n");

/***/ })

/******/ });