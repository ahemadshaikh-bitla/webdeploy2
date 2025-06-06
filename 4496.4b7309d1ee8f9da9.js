"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[4496],{

/***/ 24496:
/*!******************************************************************************!*\
  !*** ./node_modules/@capacitor-community/firebase-analytics/dist/esm/web.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FirebaseAnalyticsWeb: () => (/* binding */ FirebaseAnalyticsWeb)
/* harmony export */ });
/* harmony import */ var _Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 10467);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/core */ 15083);


class FirebaseAnalyticsWeb extends _capacitor_core__WEBPACK_IMPORTED_MODULE_1__.WebPlugin {
  constructor() {
    super();
    this.not_supported_mssg = "This method is not supported";
    this.options_missing_mssg = "Firebase options are missing";
    this.duplicate_app_mssg = "Firebase app already exists";
    this.analytics_missing_mssg = "Firebase analytics is not initialized. Make sure initializeFirebase() is called once";
    this.scripts = [{
      key: "firebase-app",
      src: "https://www.gstatic.com/firebasejs/8.2.3/firebase-app.js"
    }, {
      key: "firebase-ac",
      src: "https://www.gstatic.com/firebasejs/8.2.3/firebase-analytics.js"
    }];
    this.ready = new Promise(resolve => this.readyResolver = resolve);
    this.configure();
  }
  /**
   * Configure and Initialize FirebaseApp if not present
   * @param options - web app's Firebase configuration
   * @returns firebase analytics object reference
   * Platform: Web
   */
  initializeFirebase(options) {
    var _this = this;
    return new Promise(/*#__PURE__*/function () {
      var _ref = (0,_Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve, reject) {
        yield _this.ready;
        if (_this.hasFirebaseInitialized()) {
          reject(_this.duplicate_app_mssg);
          return;
        }
        if (!options) {
          reject(_this.options_missing_mssg);
          return;
        }
        const app = window.firebase.initializeApp(options);
        _this.analyticsRef = app.analytics();
        resolve(_this.analyticsRef);
      });
      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }());
  }
  /**
   * Sets the user ID property.
   * @param options - userId: unique identifier of the user to log
   * Platform: Web/Android/iOS
   */
  setUserId(options) {
    var _this2 = this;
    return new Promise(/*#__PURE__*/function () {
      var _ref2 = (0,_Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve, reject) {
        yield _this2.ready;
        if (!_this2.analyticsRef) {
          reject(_this2.analytics_missing_mssg);
          return;
        }
        const {
          userId
        } = options || {
          userId: undefined
        };
        if (!userId) {
          reject("userId property is missing");
          return;
        }
        _this2.analyticsRef.setUserId(userId);
        resolve();
      });
      return function (_x3, _x4) {
        return _ref2.apply(this, arguments);
      };
    }());
  }
  /**
   * Sets a user property to a given value.
   * @param options - name: The name of the user property to set.
   *                  value: The value of the user property.
   * Platform: Web/Android/iOS
   */
  setUserProperty(options) {
    var _this3 = this;
    return new Promise(/*#__PURE__*/function () {
      var _ref3 = (0,_Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve, reject) {
        yield _this3.ready;
        if (!_this3.analyticsRef) {
          reject(_this3.analytics_missing_mssg);
          return;
        }
        const {
          name,
          value
        } = options || {
          name: undefined,
          value: undefined
        };
        if (!name) {
          reject("name property is missing");
          return;
        }
        if (!value) {
          reject("value property is missing");
          return;
        }
        let property = {};
        property[name] = value;
        _this3.analyticsRef.setUserProperties(property);
        resolve();
      });
      return function (_x5, _x6) {
        return _ref3.apply(this, arguments);
      };
    }());
  }
  /**
   * Retrieves the app instance id from the service.
   * @returns - instanceId: current instance if of the app
   * Platform: Web/Android/iOS
   */
  getAppInstanceId() {
    return new Promise((resolve, _reject) => resolve);
  }
  /**
   * Sets the current screen name, which specifies the current visual context in your app.
   * @param options - screenName: the activity to which the screen name and class name apply.
   *                  nameOverride: the name of the current screen. Set to null to clear the current screen name.
   * Platform: Android/iOS
   */
  setScreenName(_options) {
    return new Promise((resolve, _reject) => resolve);
  }
  /**
   * Clears all analytics data for this app from the device and resets the app instance id.
   * Platform: Android/iOS
   */
  reset() {
    return new Promise((resolve, _reject) => resolve);
  }
  /**
   * Logs an app event.
   * @param options - name: unique name of the event
   *                  params: the map of event parameters.
   * Platform: Web/Android/iOS
   */
  logEvent(options) {
    var _this4 = this;
    return new Promise(/*#__PURE__*/function () {
      var _ref4 = (0,_Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve, reject) {
        yield _this4.ready;
        if (!_this4.analyticsRef) {
          reject(_this4.analytics_missing_mssg);
          return;
        }
        const {
          name,
          params
        } = options || {
          name: undefined,
          params: undefined
        };
        if (!name) {
          reject("name property is missing");
          return;
        }
        _this4.analyticsRef.logEvent(name, params);
        resolve();
      });
      return function (_x7, _x8) {
        return _ref4.apply(this, arguments);
      };
    }());
  }
  /**
   * Sets whether analytics collection is enabled for this app on this device.
   * @param options - enabled: boolean true/false to enable/disable logging
   * Platform: Web/Android/iOS
   */
  setCollectionEnabled(options) {
    var _this5 = this;
    return new Promise(/*#__PURE__*/function () {
      var _ref5 = (0,_Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve, reject) {
        yield _this5.ready;
        if (!_this5.analyticsRef) {
          reject(_this5.analytics_missing_mssg);
          return;
        }
        const {
          enabled
        } = options || {
          enabled: false
        };
        _this5.analyticsRef.setAnalyticsCollectionEnabled(enabled);
        resolve();
      });
      return function (_x9, _x0) {
        return _ref5.apply(this, arguments);
      };
    }());
  }
  /**
   * Sets the duration of inactivity that terminates the current session.
   * @param options - duration: duration of inactivity
   * Platform: Android/iOS
   */
  setSessionTimeoutDuration(_options) {
    return new Promise((_resolve, reject) => {
      reject(this.not_supported_mssg);
    });
  }
  /**
   * Returns analytics reference object
   */
  get remoteConfig() {
    return this.analyticsRef;
  }
  enable() {
    var _this6 = this;
    return new Promise(/*#__PURE__*/function () {
      var _ref6 = (0,_Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve, reject) {
        yield _this6.ready;
        if (!_this6.analyticsRef) {
          reject(_this6.analytics_missing_mssg);
          return;
        }
        _this6.analyticsRef.setAnalyticsCollectionEnabled(true);
        resolve();
      });
      return function (_x1, _x10) {
        return _ref6.apply(this, arguments);
      };
    }());
  }
  disable() {
    var _this7 = this;
    return new Promise(/*#__PURE__*/function () {
      var _ref7 = (0,_Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve, reject) {
        yield _this7.ready;
        if (!_this7.analyticsRef) {
          reject(_this7.analytics_missing_mssg);
          return;
        }
        _this7.analyticsRef.setAnalyticsCollectionEnabled(false);
        resolve();
      });
      return function (_x11, _x12) {
        return _ref7.apply(this, arguments);
      };
    }());
  }
  /**
   * Ready resolver to check and load firebase analytics
   */
  configure() {
    var _this8 = this;
    return (0,_Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        yield _this8.loadScripts();
        if (window.firebase && window.firebase.analytics && _this8.hasFirebaseInitialized()) {
          _this8.analyticsRef = window.firebase.analytics();
        }
      } catch (error) {
        throw error;
      }
      const interval = setInterval(() => {
        if (!window.firebase) {
          return;
        }
        clearInterval(interval);
        _this8.readyResolver();
      }, 50);
    })();
  }
  /**
   * Check for existing loaded script and load new scripts
   */
  loadScripts() {
    var _this9 = this;
    const firebaseAppScript = this.scripts[0];
    const firebaseAnalyticsScript = this.scripts[1];
    return new Promise(/*#__PURE__*/function () {
      var _ref8 = (0,_Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve, _reject) {
        const scripts = _this9.scripts.map(script => script.key);
        if (document.getElementById(scripts[0]) && document.getElementById(scripts[1])) {
          return resolve(null);
        }
        yield _this9.loadScript(firebaseAppScript.key, firebaseAppScript.src);
        yield _this9.loadScript(firebaseAnalyticsScript.key, firebaseAnalyticsScript.src);
        resolve(null);
      });
      return function (_x13, _x14) {
        return _ref8.apply(this, arguments);
      };
    }());
  }
  /**
   * Loaded single script with provided id and source
   * @param id - unique identifier of the script
   * @param src - source of the script
   */
  loadScript(id, src) {
    return new Promise((resolve, reject) => {
      const file = document.createElement("script");
      file.type = "text/javascript";
      file.src = src;
      file.id = id;
      file.onload = resolve;
      file.onerror = reject;
      document.querySelector("head").appendChild(file);
    });
  }
  /**
   * Returns true/false if firebase object reference exists inside window
   */
  hasFirebaseInitialized() {
    if (!window.firebase) {
      return false;
    }
    const firebaseApps = window.firebase.apps;
    if (firebaseApps && firebaseApps.length === 0) {
      return false;
    }
    return true;
  }
}
//# sourceMappingURL=web.js.map

/***/ })

}]);