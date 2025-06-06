"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[632],{

/***/ 20976:
/*!*******************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/input.utils-40504d6d.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ createSlotMutationController),
/* harmony export */   g: () => (/* binding */ getCounterText)
/* harmony export */ });
/* harmony import */ var _index_a5d50daf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-a5d50daf.js */ 28476);
/* harmony import */ var _helpers_d94bc8ad_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers-d94bc8ad.js */ 92486);
/* harmony import */ var _index_cfd9c1f2_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-cfd9c1f2.js */ 8736);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */




/**
 * Used to update a scoped component that uses emulated slots. This fires when
 * content is passed into the slot or when the content inside of a slot changes.
 * This is not needed for components using native slots in the Shadow DOM.
 * @internal
 * @param el The host element to observe
 * @param slotName mutationCallback will fire when nodes on these slot(s) change
 * @param mutationCallback The callback to fire whenever the slotted content changes
 */
const createSlotMutationController = (el, slotName, mutationCallback) => {
  let hostMutationObserver;
  let slottedContentMutationObserver;
  if (_index_a5d50daf_js__WEBPACK_IMPORTED_MODULE_0__.w !== undefined && "MutationObserver" in _index_a5d50daf_js__WEBPACK_IMPORTED_MODULE_0__.w) {
    const slots = Array.isArray(slotName) ? slotName : [slotName];
    hostMutationObserver = new MutationObserver(entries => {
      for (const entry of entries) {
        for (const node of entry.addedNodes) {
          /**
           * Check to see if the added node
           *  is our slotted content.
           */
          if (node.nodeType === Node.ELEMENT_NODE && slots.includes(node.slot)) {
            /**
             * If so, we want to watch the slotted
             * content itself for changes. This lets us
             * detect when content inside of the slot changes.
             */
            mutationCallback();
            /**
             * Adding the listener in an raf
             * waits until Stencil moves the slotted element
             * into the correct place in the event that
             * slotted content is being added.
             */
            (0,_helpers_d94bc8ad_js__WEBPACK_IMPORTED_MODULE_1__.r)(() => watchForSlotChange(node));
            return;
          }
        }
      }
    });
    hostMutationObserver.observe(el, {
      childList: true,
      /**
       * This fixes an issue with the `ion-input` and
       * `ion-textarea` not re-rendering in some cases
       * when using the label slot functionality.
       *
       * HTML element patches in Stencil that are enabled
       * by the `experimentalSlotFixes` flag in Stencil v4
       * result in DOM manipulations that won't trigger
       * the current mutation observer configuration and
       * callback.
       */
      subtree: true
    });
  }
  /**
   * Listen for changes inside of the slotted content.
   * We can listen for subtree changes here to be
   * informed of text within the slotted content
   * changing. Doing this on the host is possible
   * but it is much more expensive to do because
   * it also listens for changes to the internals
   * of the component.
   */
  const watchForSlotChange = slottedEl => {
    var _a;
    if (slottedContentMutationObserver) {
      slottedContentMutationObserver.disconnect();
      slottedContentMutationObserver = undefined;
    }
    slottedContentMutationObserver = new MutationObserver(entries => {
      mutationCallback();
      for (const entry of entries) {
        for (const node of entry.removedNodes) {
          /**
           * If the element was removed then we
           * need to destroy the MutationObserver
           * so the element can be garbage collected.
           */
          if (node.nodeType === Node.ELEMENT_NODE && node.slot === slotName) {
            destroySlottedContentObserver();
          }
        }
      }
    });
    /**
     * Listen for changes inside of the element
     * as well as anything deep in the tree.
     * We listen on the parentElement so that we can
     * detect when slotted element itself is removed.
     */
    slottedContentMutationObserver.observe((_a = slottedEl.parentElement) !== null && _a !== void 0 ? _a : slottedEl, {
      subtree: true,
      childList: true
    });
  };
  const destroy = () => {
    if (hostMutationObserver) {
      hostMutationObserver.disconnect();
      hostMutationObserver = undefined;
    }
    destroySlottedContentObserver();
  };
  const destroySlottedContentObserver = () => {
    if (slottedContentMutationObserver) {
      slottedContentMutationObserver.disconnect();
      slottedContentMutationObserver = undefined;
    }
  };
  return {
    destroy
  };
};
const getCounterText = (value, maxLength, counterFormatter) => {
  const valueLength = value == null ? 0 : value.toString().length;
  const defaultCounterText = defaultCounterFormatter(valueLength, maxLength);
  /**
   * If developers did not pass a custom formatter,
   * use the default one.
   */
  if (counterFormatter === undefined) {
    return defaultCounterText;
  }
  /**
   * Otherwise, try to use the custom formatter
   * and fallback to the default formatter if
   * there was an error.
   */
  try {
    return counterFormatter(valueLength, maxLength);
  } catch (e) {
    (0,_index_cfd9c1f2_js__WEBPACK_IMPORTED_MODULE_2__.d)('[ion-input] - Exception in provided `counterFormatter`:', e);
    return defaultCounterText;
  }
};
const defaultCounterFormatter = (length, maxlength) => {
  return `${length} / ${maxlength}`;
};


/***/ }),

/***/ 73701:
/*!************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/notch-controller-1a1f7183.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ createNotchController)
/* harmony export */ });
/* harmony import */ var _index_a5d50daf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-a5d50daf.js */ 28476);
/* harmony import */ var _helpers_d94bc8ad_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers-d94bc8ad.js */ 92486);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */



/**
 * A utility to calculate the size of an outline notch
 * width relative to the content passed. This is used in
 * components such as `ion-select` with `fill="outline"`
 * where we need to pass slotted HTML content. This is not
 * needed when rendering plaintext content because we can
 * render the plaintext again hidden with `opacity: 0` inside
 * of the notch. As a result we can rely on the intrinsic size
 * of the element to correctly compute the notch width. We
 * cannot do this with slotted content because we cannot project
 * it into 2 places at once.
 *
 * @internal
 * @param el: The host element
 * @param getNotchSpacerEl: A function that returns a reference to the notch spacer element inside of the component template.
 * @param getLabelSlot: A function that returns a reference to the slotted content.
 */
const createNotchController = (el, getNotchSpacerEl, getLabelSlot) => {
  let notchVisibilityIO;
  const needsExplicitNotchWidth = () => {
    const notchSpacerEl = getNotchSpacerEl();
    if (
    /**
     * If the notch is not being used
     * then we do not need to set the notch width.
     */
    notchSpacerEl === undefined ||
    /**
     * If either the label property is being
     * used or the label slot is not defined,
     * then we do not need to estimate the notch width.
     */
    el.label !== undefined || getLabelSlot() === null) {
      return false;
    }
    return true;
  };
  const calculateNotchWidth = () => {
    if (needsExplicitNotchWidth()) {
      /**
       * Run this the frame after
       * the browser has re-painted the host element.
       * Otherwise, the label element may have a width
       * of 0 and the IntersectionObserver will be used.
       */
      (0,_helpers_d94bc8ad_js__WEBPACK_IMPORTED_MODULE_1__.r)(() => {
        setNotchWidth();
      });
    }
  };
  /**
   * When using a label prop we can render
   * the label value inside of the notch and
   * let the browser calculate the size of the notch.
   * However, we cannot render the label slot in multiple
   * places so we need to manually calculate the notch dimension
   * based on the size of the slotted content.
   *
   * This function should only be used to set the notch width
   * on slotted label content. The notch width for label prop
   * content is automatically calculated based on the
   * intrinsic size of the label text.
   */
  const setNotchWidth = () => {
    const notchSpacerEl = getNotchSpacerEl();
    if (notchSpacerEl === undefined) {
      return;
    }
    if (!needsExplicitNotchWidth()) {
      notchSpacerEl.style.removeProperty('width');
      return;
    }
    const width = getLabelSlot().scrollWidth;
    if (
    /**
     * If the computed width of the label is 0
     * and notchSpacerEl's offsetParent is null
     * then that means the element is hidden.
     * As a result, we need to wait for the element
     * to become visible before setting the notch width.
     *
     * We do not check el.offsetParent because
     * that can be null if the host element has
     * position: fixed applied to it.
     * notchSpacerEl does not have position: fixed.
     */
    width === 0 && notchSpacerEl.offsetParent === null && _index_a5d50daf_js__WEBPACK_IMPORTED_MODULE_0__.w !== undefined && "IntersectionObserver" in _index_a5d50daf_js__WEBPACK_IMPORTED_MODULE_0__.w) {
      /**
       * If there is an IO already attached
       * then that will update the notch
       * once the element becomes visible.
       * As a result, there is no need to create
       * another one.
       */
      if (notchVisibilityIO !== undefined) {
        return;
      }
      const io = notchVisibilityIO = new IntersectionObserver(ev => {
        /**
         * If the element is visible then we
         * can try setting the notch width again.
         */
        if (ev[0].intersectionRatio === 1) {
          setNotchWidth();
          io.disconnect();
          notchVisibilityIO = undefined;
        }
      },
      /**
       * Set the root to be the host element
       * This causes the IO callback
       * to be fired in WebKit as soon as the element
       * is visible. If we used the default root value
       * then WebKit would only fire the IO callback
       * after any animations (such as a modal transition)
       * finished, and there would potentially be a flicker.
       */
      {
        threshold: 0.01,
        root: el
      });
      io.observe(notchSpacerEl);
      return;
    }
    /**
     * If the element is visible then we can set the notch width.
     * The notch is only visible when the label is scaled,
     * which is why we multiply the width by 0.75 as this is
     * the same amount the label element is scaled by in the host CSS.
     * (See $form-control-label-stacked-scale in ionic.globals.scss).
     */
    notchSpacerEl.style.setProperty('width', `${width * 0.75}px`);
  };
  const destroy = () => {
    if (notchVisibilityIO) {
      notchVisibilityIO.disconnect();
      notchVisibilityIO = undefined;
    }
  };
  return {
    calculateNotchWidth,
    destroy
  };
};


/***/ })

}]);