"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[323],{

/***/ 30323:
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ion-segment-view.entry.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ion_segment_view: () => (/* binding */ SegmentView)
/* harmony export */ });
/* harmony import */ var _Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 10467);
/* harmony import */ var _index_527b9e34_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-527b9e34.js */ 96317);

/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */

const segmentViewIosCss = ":host{display:-ms-flexbox;display:flex;height:100%;overflow-x:scroll;-webkit-scroll-snap-type:x mandatory;-ms-scroll-snap-type:x mandatory;scroll-snap-type:x mandatory;scrollbar-width:none;-ms-overflow-style:none}:host::-webkit-scrollbar{display:none}:host(.segment-view-disabled){-ms-touch-action:none;touch-action:none;overflow-x:hidden}:host(.segment-view-scroll-disabled){pointer-events:none}:host(.segment-view-disabled){opacity:0.3}";
const IonSegmentViewIosStyle0 = segmentViewIosCss;
const segmentViewMdCss = ":host{display:-ms-flexbox;display:flex;height:100%;overflow-x:scroll;-webkit-scroll-snap-type:x mandatory;-ms-scroll-snap-type:x mandatory;scroll-snap-type:x mandatory;scrollbar-width:none;-ms-overflow-style:none}:host::-webkit-scrollbar{display:none}:host(.segment-view-disabled){-ms-touch-action:none;touch-action:none;overflow-x:hidden}:host(.segment-view-scroll-disabled){pointer-events:none}:host(.segment-view-disabled){opacity:0.3}";
const IonSegmentViewMdStyle0 = segmentViewMdCss;
const SegmentView = class {
  constructor(hostRef) {
    (0,_index_527b9e34_js__WEBPACK_IMPORTED_MODULE_1__.r)(this, hostRef);
    this.ionSegmentViewScroll = (0,_index_527b9e34_js__WEBPACK_IMPORTED_MODULE_1__.c)(this, "ionSegmentViewScroll", 7);
    this.scrollEndTimeout = null;
    this.isTouching = false;
    this.disabled = false;
    this.isManualScroll = undefined;
  }
  handleScroll(ev) {
    var _a;
    const {
      scrollLeft,
      scrollWidth,
      clientWidth
    } = ev.target;
    const scrollRatio = scrollLeft / (scrollWidth - clientWidth);
    this.ionSegmentViewScroll.emit({
      scrollRatio,
      isManualScroll: (_a = this.isManualScroll) !== null && _a !== void 0 ? _a : true
    });
    // Reset the timeout to check for scroll end
    this.resetScrollEndTimeout();
  }
  /**
   * Handle touch start event to know when the user is actively dragging the segment view.
   */
  handleScrollStart() {
    if (this.scrollEndTimeout) {
      clearTimeout(this.scrollEndTimeout);
      this.scrollEndTimeout = null;
    }
    this.isTouching = true;
  }
  /**
   * Handle touch end event to know when the user is no longer dragging the segment view.
   */
  handleTouchEnd() {
    this.isTouching = false;
  }
  /**
   * Reset the scroll end detection timer. This is called on every scroll event.
   */
  resetScrollEndTimeout() {
    if (this.scrollEndTimeout) {
      clearTimeout(this.scrollEndTimeout);
      this.scrollEndTimeout = null;
    }
    this.scrollEndTimeout = setTimeout(() => {
      this.checkForScrollEnd();
    },
    // Setting this to a lower value may result in inconsistencies in behavior
    // across browsers (particularly Firefox).
    // Ideally, all of this logic is removed once the scroll end event is
    // supported on all browsers (https://caniuse.com/?search=scrollend)
    100);
  }
  /**
   * Check if the scroll has ended and the user is not actively touching.
   * If the conditions are met (active content is enabled and no active touch),
   * reset the scroll position and emit the scroll end event.
   */
  checkForScrollEnd() {
    // Only emit scroll end event if the active content is not disabled and
    // the user is not touching the segment view
    if (!this.isTouching) {
      this.isManualScroll = undefined;
    }
  }
  /**
   * @internal
   *
   * This method is used to programmatically set the displayed segment content
   * in the segment view. Calling this method will update the `value` of the
   * corresponding segment button.
   *
   * @param id: The id of the segment content to display.
   * @param smoothScroll: Whether to animate the scroll transition.
   */
  setContent(_x) {
    var _this = this;
    return (0,_Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (id, smoothScroll = true) {
      const contents = _this.getSegmentContents();
      const index = contents.findIndex(content => content.id === id);
      if (index === -1) return;
      _this.isManualScroll = false;
      _this.resetScrollEndTimeout();
      const contentWidth = _this.el.offsetWidth;
      _this.el.scrollTo({
        top: 0,
        left: index * contentWidth,
        behavior: smoothScroll ? 'smooth' : 'instant'
      });
    }).apply(this, arguments);
  }
  getSegmentContents() {
    return Array.from(this.el.querySelectorAll('ion-segment-content'));
  }
  render() {
    const {
      disabled,
      isManualScroll
    } = this;
    return (0,_index_527b9e34_js__WEBPACK_IMPORTED_MODULE_1__.h)(_index_527b9e34_js__WEBPACK_IMPORTED_MODULE_1__.e, {
      key: 'fa528d2d9ae0f00fc3067defe2a047dce77c814a',
      class: {
        'segment-view-disabled': disabled,
        'segment-view-scroll-disabled': isManualScroll === false
      }
    }, (0,_index_527b9e34_js__WEBPACK_IMPORTED_MODULE_1__.h)("slot", {
      key: '74dc8b4d073caeff1bab272d11b9ea3e1a215954'
    }));
  }
  get el() {
    return (0,_index_527b9e34_js__WEBPACK_IMPORTED_MODULE_1__.f)(this);
  }
};
SegmentView.style = {
  ios: IonSegmentViewIosStyle0,
  md: IonSegmentViewMdStyle0
};


/***/ })

}]);