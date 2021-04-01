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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/api/webhooks.ts");
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

/***/ "./src/pages/api/_lib/manageSubscription.ts":
/*!**************************************************!*\
  !*** ./src/pages/api/_lib/manageSubscription.ts ***!
  \**************************************************/
/*! exports provided: saveSubscription */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"saveSubscription\", function() { return saveSubscription; });\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! faunadb */ \"faunadb\");\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(faunadb__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _services_fauna__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/fauna */ \"./src/services/fauna.ts\");\n/* harmony import */ var _services_stripe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/stripe */ \"./src/services/stripe.ts\");\n\n\n\nasync function saveSubscription(subscriptionId, customerId, createAtion = false) {\n  const userRef = await _services_fauna__WEBPACK_IMPORTED_MODULE_1__[\"fauna\"].query(faunadb__WEBPACK_IMPORTED_MODULE_0__[\"query\"].Select(\"ref\", faunadb__WEBPACK_IMPORTED_MODULE_0__[\"query\"].Get(faunadb__WEBPACK_IMPORTED_MODULE_0__[\"query\"].Match(faunadb__WEBPACK_IMPORTED_MODULE_0__[\"query\"].Index('user_by_stripe_customer_id'), customerId))));\n  const subscription = await _services_stripe__WEBPACK_IMPORTED_MODULE_2__[\"stripe\"].subscriptions.retrieve(subscriptionId);\n  const subscriptionData = {\n    id: subscription.id,\n    userId: userRef,\n    status: subscription.status,\n    price_id: subscription.items.data[0].price.id\n  };\n\n  if (createAtion) {\n    await _services_fauna__WEBPACK_IMPORTED_MODULE_1__[\"fauna\"].query(faunadb__WEBPACK_IMPORTED_MODULE_0__[\"query\"].Create(faunadb__WEBPACK_IMPORTED_MODULE_0__[\"query\"].Collection('subscriptions'), {\n      data: subscriptionData\n    }));\n  } else {\n    await _services_fauna__WEBPACK_IMPORTED_MODULE_1__[\"fauna\"].query(faunadb__WEBPACK_IMPORTED_MODULE_0__[\"query\"].Replace(faunadb__WEBPACK_IMPORTED_MODULE_0__[\"query\"].Select(\"ref\", faunadb__WEBPACK_IMPORTED_MODULE_0__[\"query\"].Get(faunadb__WEBPACK_IMPORTED_MODULE_0__[\"query\"].Match(faunadb__WEBPACK_IMPORTED_MODULE_0__[\"query\"].Index('subscription_by_id'), subscriptionId))), {\n      data: subscriptionData\n    }));\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvYXBpL19saWIvbWFuYWdlU3Vic2NyaXB0aW9uLnRzP2YzMDgiXSwibmFtZXMiOlsic2F2ZVN1YnNjcmlwdGlvbiIsInN1YnNjcmlwdGlvbklkIiwiY3VzdG9tZXJJZCIsImNyZWF0ZUF0aW9uIiwidXNlclJlZiIsImZhdW5hIiwicXVlcnkiLCJxIiwiU2VsZWN0IiwiR2V0IiwiTWF0Y2giLCJJbmRleCIsInN1YnNjcmlwdGlvbiIsInN0cmlwZSIsInN1YnNjcmlwdGlvbnMiLCJyZXRyaWV2ZSIsInN1YnNjcmlwdGlvbkRhdGEiLCJpZCIsInVzZXJJZCIsInN0YXR1cyIsInByaWNlX2lkIiwiaXRlbXMiLCJkYXRhIiwicHJpY2UiLCJDcmVhdGUiLCJDb2xsZWN0aW9uIiwiUmVwbGFjZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRU8sZUFBZUEsZ0JBQWYsQ0FDTEMsY0FESyxFQUVMQyxVQUZLLEVBR0xDLFdBQVcsR0FBRyxLQUhULEVBSUw7QUFFQSxRQUFNQyxPQUFPLEdBQUcsTUFBTUMscURBQUssQ0FBQ0MsS0FBTixDQUNwQkMsNkNBQUMsQ0FBQ0MsTUFBRixDQUNFLEtBREYsRUFFRUQsNkNBQUMsQ0FBQ0UsR0FBRixDQUNFRiw2Q0FBQyxDQUFDRyxLQUFGLENBQ0VILDZDQUFDLENBQUNJLEtBQUYsQ0FBUSw0QkFBUixDQURGLEVBRUVULFVBRkYsQ0FERixDQUZGLENBRG9CLENBQXRCO0FBWUEsUUFBTVUsWUFBWSxHQUFHLE1BQU1DLHVEQUFNLENBQUNDLGFBQVAsQ0FBcUJDLFFBQXJCLENBQThCZCxjQUE5QixDQUEzQjtBQUVBLFFBQU1lLGdCQUFnQixHQUFHO0FBQ3ZCQyxNQUFFLEVBQUVMLFlBQVksQ0FBQ0ssRUFETTtBQUV2QkMsVUFBTSxFQUFFZCxPQUZlO0FBR3ZCZSxVQUFNLEVBQUVQLFlBQVksQ0FBQ08sTUFIRTtBQUl2QkMsWUFBUSxFQUFFUixZQUFZLENBQUNTLEtBQWIsQ0FBbUJDLElBQW5CLENBQXdCLENBQXhCLEVBQTJCQyxLQUEzQixDQUFpQ047QUFKcEIsR0FBekI7O0FBT0EsTUFBSWQsV0FBSixFQUFpQjtBQUNmLFVBQU1FLHFEQUFLLENBQUNDLEtBQU4sQ0FDSkMsNkNBQUMsQ0FBQ2lCLE1BQUYsQ0FDRWpCLDZDQUFDLENBQUNrQixVQUFGLENBQWEsZUFBYixDQURGLEVBRUU7QUFBRUgsVUFBSSxFQUFFTjtBQUFSLEtBRkYsQ0FESSxDQUFOO0FBTUQsR0FQRCxNQU9PO0FBQ0wsVUFBTVgscURBQUssQ0FBQ0MsS0FBTixDQUNKQyw2Q0FBQyxDQUFDbUIsT0FBRixDQUNFbkIsNkNBQUMsQ0FBQ0MsTUFBRixDQUNFLEtBREYsRUFFRUQsNkNBQUMsQ0FBQ0UsR0FBRixDQUNFRiw2Q0FBQyxDQUFDRyxLQUFGLENBQ0VILDZDQUFDLENBQUNJLEtBQUYsQ0FBUSxvQkFBUixDQURGLEVBRUVWLGNBRkYsQ0FERixDQUZGLENBREYsRUFVRTtBQUFFcUIsVUFBSSxFQUFFTjtBQUFSLEtBVkYsQ0FESSxDQUFOO0FBY0Q7QUFDRiIsImZpbGUiOiIuL3NyYy9wYWdlcy9hcGkvX2xpYi9tYW5hZ2VTdWJzY3JpcHRpb24udHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBxdWVyeSBhcyBxIH0gZnJvbSAnZmF1bmFkYidcbmltcG9ydCB7IGZhdW5hIH0gZnJvbSBcIi4uLy4uLy4uL3NlcnZpY2VzL2ZhdW5hXCI7XG5pbXBvcnQgeyBzdHJpcGUgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9zdHJpcGUnO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2F2ZVN1YnNjcmlwdGlvbihcbiAgc3Vic2NyaXB0aW9uSWQ6IHN0cmluZyxcbiAgY3VzdG9tZXJJZDogc3RyaW5nLFxuICBjcmVhdGVBdGlvbiA9IGZhbHNlLFxuKSB7XG4gIFxuICBjb25zdCB1c2VyUmVmID0gYXdhaXQgZmF1bmEucXVlcnkoXG4gICAgcS5TZWxlY3QoXG4gICAgICBcInJlZlwiLFxuICAgICAgcS5HZXQoXG4gICAgICAgIHEuTWF0Y2goXG4gICAgICAgICAgcS5JbmRleCgndXNlcl9ieV9zdHJpcGVfY3VzdG9tZXJfaWQnKSxcbiAgICAgICAgICBjdXN0b21lcklkXG4gICAgICAgIClcbiAgICAgIClcbiAgICApXG4gIClcblxuICBjb25zdCBzdWJzY3JpcHRpb24gPSBhd2FpdCBzdHJpcGUuc3Vic2NyaXB0aW9ucy5yZXRyaWV2ZShzdWJzY3JpcHRpb25JZClcblxuICBjb25zdCBzdWJzY3JpcHRpb25EYXRhID0ge1xuICAgIGlkOiBzdWJzY3JpcHRpb24uaWQsXG4gICAgdXNlcklkOiB1c2VyUmVmLFxuICAgIHN0YXR1czogc3Vic2NyaXB0aW9uLnN0YXR1cyxcbiAgICBwcmljZV9pZDogc3Vic2NyaXB0aW9uLml0ZW1zLmRhdGFbMF0ucHJpY2UuaWQsXG4gIH1cblxuICBpZiAoY3JlYXRlQXRpb24pIHtcbiAgICBhd2FpdCBmYXVuYS5xdWVyeShcbiAgICAgIHEuQ3JlYXRlKFxuICAgICAgICBxLkNvbGxlY3Rpb24oJ3N1YnNjcmlwdGlvbnMnKSxcbiAgICAgICAgeyBkYXRhOiBzdWJzY3JpcHRpb25EYXRhIH1cbiAgICAgIClcbiAgICApXG4gIH0gZWxzZSB7XG4gICAgYXdhaXQgZmF1bmEucXVlcnkoXG4gICAgICBxLlJlcGxhY2UoXG4gICAgICAgIHEuU2VsZWN0KFxuICAgICAgICAgIFwicmVmXCIsXG4gICAgICAgICAgcS5HZXQoXG4gICAgICAgICAgICBxLk1hdGNoKFxuICAgICAgICAgICAgICBxLkluZGV4KCdzdWJzY3JpcHRpb25fYnlfaWQnKSxcbiAgICAgICAgICAgICAgc3Vic2NyaXB0aW9uSWQsXG4gICAgICAgICAgICApXG4gICAgICAgICAgKSAgICAgICAgICBcbiAgICAgICAgKSxcbiAgICAgICAgeyBkYXRhOiBzdWJzY3JpcHRpb25EYXRhIH1cbiAgICAgIClcbiAgICApXG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/api/_lib/manageSubscription.ts\n");

/***/ }),

/***/ "./src/pages/api/webhooks.ts":
/*!***********************************!*\
  !*** ./src/pages/api/webhooks.ts ***!
  \***********************************/
/*! exports provided: config, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"config\", function() { return config; });\n/* harmony import */ var _services_stripe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/stripe */ \"./src/services/stripe.ts\");\n/* harmony import */ var _lib_manageSubscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/manageSubscription */ \"./src/pages/api/_lib/manageSubscription.ts\");\n\n\n\nasync function buffer(readable) {\n  const chunks = [];\n\n  for await (const chunk of readable) {\n    chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk);\n  }\n\n  return Buffer.concat(chunks);\n}\n\nconst config = {\n  api: {\n    bodyParser: false\n  }\n};\nconst relevantEvents = new Set(['checkout.session.completed', 'customer.subscription.updated', 'customer.subscription.deleted']);\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (req, res) => {\n  if (req.method === 'POST') {\n    const buf = await buffer(req);\n    const secret = req.headers['stripe-signature'];\n    let event;\n\n    try {\n      event = _services_stripe__WEBPACK_IMPORTED_MODULE_0__[\"stripe\"].webhooks.constructEvent(buf, secret, process.env.STRIPE_WEBHOOK_SECRET);\n    } catch (err) {\n      return res.status(400).send(`webhook-error: ${err.message}`);\n    }\n\n    const {\n      type\n    } = event;\n\n    if (relevantEvents.has(type)) {\n      try {\n        switch (type) {\n          case 'customer.subscription.updated':\n          case 'customer.subscription.deleted':\n            const subscription = event.data.object;\n            await Object(_lib_manageSubscription__WEBPACK_IMPORTED_MODULE_1__[\"saveSubscription\"])(subscription.id, subscription.customer.toString(), false);\n            break;\n\n          case 'checkout.session.completed':\n            const checkoutSession = event.data.object;\n            await Object(_lib_manageSubscription__WEBPACK_IMPORTED_MODULE_1__[\"saveSubscription\"])(checkoutSession.subscription.toString(), checkoutSession.customer.toString(), true);\n            break;\n\n          default:\n            throw new Error('Unhandled event.');\n        }\n      } catch (err) {\n        return res.json({\n          error: 'webhook handler failed.'\n        });\n      }\n    }\n\n    res.json({\n      received: true\n    });\n  } else {\n    res.setHeader('Allow', 'POST');\n    res.status(405).end('Method not allowed');\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvYXBpL3dlYmhvb2tzLnRzPzUyOWYiXSwibmFtZXMiOlsiYnVmZmVyIiwicmVhZGFibGUiLCJjaHVua3MiLCJjaHVuayIsInB1c2giLCJCdWZmZXIiLCJmcm9tIiwiY29uY2F0IiwiY29uZmlnIiwiYXBpIiwiYm9keVBhcnNlciIsInJlbGV2YW50RXZlbnRzIiwiU2V0IiwicmVxIiwicmVzIiwibWV0aG9kIiwiYnVmIiwic2VjcmV0IiwiaGVhZGVycyIsImV2ZW50Iiwic3RyaXBlIiwid2ViaG9va3MiLCJjb25zdHJ1Y3RFdmVudCIsInByb2Nlc3MiLCJlbnYiLCJTVFJJUEVfV0VCSE9PS19TRUNSRVQiLCJlcnIiLCJzdGF0dXMiLCJzZW5kIiwibWVzc2FnZSIsInR5cGUiLCJoYXMiLCJzdWJzY3JpcHRpb24iLCJkYXRhIiwib2JqZWN0Iiwic2F2ZVN1YnNjcmlwdGlvbiIsImlkIiwiY3VzdG9tZXIiLCJ0b1N0cmluZyIsImNoZWNrb3V0U2Vzc2lvbiIsIkVycm9yIiwianNvbiIsImVycm9yIiwicmVjZWl2ZWQiLCJzZXRIZWFkZXIiLCJlbmQiXSwibWFwcGluZ3MiOiJBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7QUFHQSxlQUFlQSxNQUFmLENBQXNCQyxRQUF0QixFQUEwQztBQUN4QyxRQUFNQyxNQUFNLEdBQUcsRUFBZjs7QUFFQSxhQUFZLE1BQU1DLEtBQWxCLElBQTJCRixRQUEzQixFQUFxQztBQUNuQ0MsVUFBTSxDQUFDRSxJQUFQLENBQ0UsT0FBT0QsS0FBUCxLQUFpQixRQUFqQixHQUE0QkUsTUFBTSxDQUFDQyxJQUFQLENBQVlILEtBQVosQ0FBNUIsR0FBaURBLEtBRG5EO0FBR0Q7O0FBRUQsU0FBT0UsTUFBTSxDQUFDRSxNQUFQLENBQWNMLE1BQWQsQ0FBUDtBQUVEOztBQUVNLE1BQU1NLE1BQU0sR0FBRztBQUNwQkMsS0FBRyxFQUFFO0FBQ0hDLGNBQVUsRUFBRTtBQURUO0FBRGUsQ0FBZjtBQU1QLE1BQU1DLGNBQWMsR0FBRyxJQUFJQyxHQUFKLENBQVEsQ0FDN0IsNEJBRDZCLEVBRTdCLCtCQUY2QixFQUc3QiwrQkFINkIsQ0FBUixDQUF2QjtBQU9lLHNFQUFPQyxHQUFQLEVBQTZCQyxHQUE3QixLQUFzRDtBQUNuRSxNQUFJRCxHQUFHLENBQUNFLE1BQUosS0FBZSxNQUFuQixFQUEyQjtBQUN6QixVQUFNQyxHQUFHLEdBQUcsTUFBTWhCLE1BQU0sQ0FBQ2EsR0FBRCxDQUF4QjtBQUNBLFVBQU1JLE1BQU0sR0FBR0osR0FBRyxDQUFDSyxPQUFKLENBQVksa0JBQVosQ0FBZjtBQUVBLFFBQUlDLEtBQUo7O0FBRUEsUUFBSTtBQUNGQSxXQUFLLEdBQUdDLHVEQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLGNBQWhCLENBQStCTixHQUEvQixFQUFvQ0MsTUFBcEMsRUFBNENNLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxxQkFBeEQsQ0FBUjtBQUNELEtBRkQsQ0FFQyxPQUFPQyxHQUFQLEVBQVk7QUFDWCxhQUFPWixHQUFHLENBQUNhLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFzQixrQkFBaUJGLEdBQUcsQ0FBQ0csT0FBUSxFQUFuRCxDQUFQO0FBQ0Q7O0FBRUQsVUFBTTtBQUFDQztBQUFELFFBQVNYLEtBQWY7O0FBRUEsUUFBSVIsY0FBYyxDQUFDb0IsR0FBZixDQUFtQkQsSUFBbkIsQ0FBSixFQUE4QjtBQUM1QixVQUFJO0FBQ0YsZ0JBQVFBLElBQVI7QUFDRSxlQUFLLCtCQUFMO0FBQ0EsZUFBSywrQkFBTDtBQUVFLGtCQUFNRSxZQUFZLEdBQUdiLEtBQUssQ0FBQ2MsSUFBTixDQUFXQyxNQUFoQztBQUVBLGtCQUFNQyxnRkFBZ0IsQ0FDcEJILFlBQVksQ0FBQ0ksRUFETyxFQUVwQkosWUFBWSxDQUFDSyxRQUFiLENBQXNCQyxRQUF0QixFQUZvQixFQUdwQixLQUhvQixDQUF0QjtBQU1GOztBQUVBLGVBQUssNEJBQUw7QUFDRSxrQkFBTUMsZUFBZSxHQUFHcEIsS0FBSyxDQUFDYyxJQUFOLENBQVdDLE1BQW5DO0FBRUEsa0JBQU1DLGdGQUFnQixDQUNwQkksZUFBZSxDQUFDUCxZQUFoQixDQUE2Qk0sUUFBN0IsRUFEb0IsRUFFcEJDLGVBQWUsQ0FBQ0YsUUFBaEIsQ0FBeUJDLFFBQXpCLEVBRm9CLEVBR3BCLElBSG9CLENBQXRCO0FBTUY7O0FBRUE7QUFDRSxrQkFBTSxJQUFJRSxLQUFKLENBQVUsa0JBQVYsQ0FBTjtBQTFCSjtBQTRCRCxPQTdCRCxDQTZCQyxPQUFPZCxHQUFQLEVBQVk7QUFDWCxlQUFPWixHQUFHLENBQUMyQixJQUFKLENBQVM7QUFBRUMsZUFBSyxFQUFFO0FBQVQsU0FBVCxDQUFQO0FBQ0Q7QUFDRjs7QUFFRDVCLE9BQUcsQ0FBQzJCLElBQUosQ0FBUztBQUFFRSxjQUFRLEVBQUU7QUFBWixLQUFUO0FBRUQsR0FuREQsTUFtRE87QUFDTDdCLE9BQUcsQ0FBQzhCLFNBQUosQ0FBYyxPQUFkLEVBQXVCLE1BQXZCO0FBQ0E5QixPQUFHLENBQUNhLE1BQUosQ0FBVyxHQUFYLEVBQWdCa0IsR0FBaEIsQ0FBb0Isb0JBQXBCO0FBQ0Q7QUFDRixDQXhERCIsImZpbGUiOiIuL3NyYy9wYWdlcy9hcGkvd2ViaG9va3MudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlfSBmcm9tICduZXh0J1xuaW1wb3J0IHsgUmVhZGFibGUgfSBmcm9tICdzdHJlYW0nXG5pbXBvcnQgU3RyaXBlIGZyb20gJ3N0cmlwZSc7XG5pbXBvcnQgeyBzdHJpcGUgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9zdHJpcGUnXG5pbXBvcnQgeyBzYXZlU3Vic2NyaXB0aW9uIH0gZnJvbSAnLi9fbGliL21hbmFnZVN1YnNjcmlwdGlvbidcblxuXG5hc3luYyBmdW5jdGlvbiBidWZmZXIocmVhZGFibGU6IFJlYWRhYmxlKSB7XG4gIGNvbnN0IGNodW5rcyA9IFtdO1xuXG4gIGZvciBhd2FpdCAoIGNvbnN0IGNodW5rIG9mIHJlYWRhYmxlKSB7XG4gICAgY2h1bmtzLnB1c2goXG4gICAgICB0eXBlb2YgY2h1bmsgPT09ICdzdHJpbmcnID8gQnVmZmVyLmZyb20oY2h1bmspIDogY2h1bmtcbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIEJ1ZmZlci5jb25jYXQoY2h1bmtzKTtcblxufVxuXG5leHBvcnQgY29uc3QgY29uZmlnID0ge1xuICBhcGk6IHtcbiAgICBib2R5UGFyc2VyOiBmYWxzZSxcbiAgfVxufVxuXG5jb25zdCByZWxldmFudEV2ZW50cyA9IG5ldyBTZXQoW1xuICAnY2hlY2tvdXQuc2Vzc2lvbi5jb21wbGV0ZWQnLFxuICAnY3VzdG9tZXIuc3Vic2NyaXB0aW9uLnVwZGF0ZWQnLFxuICAnY3VzdG9tZXIuc3Vic2NyaXB0aW9uLmRlbGV0ZWQnLFxuICBcbl0pXG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXE6IE5leHRBcGlSZXF1ZXN0ICwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpID0+IHtcbiAgaWYgKHJlcS5tZXRob2QgPT09ICdQT1NUJykge1xuICAgIGNvbnN0IGJ1ZiA9IGF3YWl0IGJ1ZmZlcihyZXEpO1xuICAgIGNvbnN0IHNlY3JldCA9IHJlcS5oZWFkZXJzWydzdHJpcGUtc2lnbmF0dXJlJ11cblxuICAgIGxldCBldmVudDogU3RyaXBlLkV2ZW50O1xuXG4gICAgdHJ5IHtcbiAgICAgIGV2ZW50ID0gc3RyaXBlLndlYmhvb2tzLmNvbnN0cnVjdEV2ZW50KGJ1Ziwgc2VjcmV0LCBwcm9jZXNzLmVudi5TVFJJUEVfV0VCSE9PS19TRUNSRVQpO1xuICAgIH1jYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLnNlbmQoYHdlYmhvb2stZXJyb3I6ICR7ZXJyLm1lc3NhZ2V9YCk7XG4gICAgfVxuXG4gICAgY29uc3Qge3R5cGV9ID0gZXZlbnQ7XG5cbiAgICBpZiAocmVsZXZhbnRFdmVudHMuaGFzKHR5cGUpKSB7XG4gICAgICB0cnkge1xuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICBjYXNlICdjdXN0b21lci5zdWJzY3JpcHRpb24udXBkYXRlZCc6XG4gICAgICAgICAgY2FzZSAnY3VzdG9tZXIuc3Vic2NyaXB0aW9uLmRlbGV0ZWQnOlxuXG4gICAgICAgICAgICBjb25zdCBzdWJzY3JpcHRpb24gPSBldmVudC5kYXRhLm9iamVjdCBhcyBTdHJpcGUuU3Vic2NyaXB0aW9uO1xuXG4gICAgICAgICAgICBhd2FpdCBzYXZlU3Vic2NyaXB0aW9uKFxuICAgICAgICAgICAgICBzdWJzY3JpcHRpb24uaWQsXG4gICAgICAgICAgICAgIHN1YnNjcmlwdGlvbi5jdXN0b21lci50b1N0cmluZygpLFxuICAgICAgICAgICAgICBmYWxzZSwgICAgICAgICAgICAgXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlICdjaGVja291dC5zZXNzaW9uLmNvbXBsZXRlZCc6XG4gICAgICAgICAgICBjb25zdCBjaGVja291dFNlc3Npb24gPSBldmVudC5kYXRhLm9iamVjdCBhcyBTdHJpcGUuQ2hlY2tvdXQuU2Vzc2lvbiBcblxuICAgICAgICAgICAgYXdhaXQgc2F2ZVN1YnNjcmlwdGlvbihcbiAgICAgICAgICAgICAgY2hlY2tvdXRTZXNzaW9uLnN1YnNjcmlwdGlvbi50b1N0cmluZygpLFxuICAgICAgICAgICAgICBjaGVja291dFNlc3Npb24uY3VzdG9tZXIudG9TdHJpbmcoKSxcbiAgICAgICAgICAgICAgdHJ1ZSxcbiAgICAgICAgICAgIClcblxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVW5oYW5kbGVkIGV2ZW50LicpXG4gICAgICAgIH1cbiAgICAgIH1jYXRjaCAoZXJyKSB7XG4gICAgICAgIHJldHVybiByZXMuanNvbih7IGVycm9yOiAnd2ViaG9vayBoYW5kbGVyIGZhaWxlZC4nfSlcbiAgICAgIH1cbiAgICB9IFxuICAgICBcbiAgICByZXMuanNvbih7IHJlY2VpdmVkOiB0cnVlIH0pXG4gICAgICAgIFxuICB9IGVsc2Uge1xuICAgIHJlcy5zZXRIZWFkZXIoJ0FsbG93JywgJ1BPU1QnKVxuICAgIHJlcy5zdGF0dXMoNDA1KS5lbmQoJ01ldGhvZCBub3QgYWxsb3dlZCcpXG4gIH0gIFxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/api/webhooks.ts\n");

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

/***/ "stripe":
/*!*************************!*\
  !*** external "stripe" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"stripe\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHJpcGVcIj9mNWFiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InN0cmlwZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0cmlwZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///stripe\n");

/***/ })

/******/ });