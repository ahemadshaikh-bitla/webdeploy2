"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[6549],{

/***/ 4970:
/*!********************************************************************************!*\
  !*** ./node_modules/@capacitor-community/firebase-analytics/dist/esm/index.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FirebaseAnalytics: () => (/* binding */ FirebaseAnalytics)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 15083);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 17500);

const FirebaseAnalytics = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)("FirebaseAnalytics", {
  web: () => __webpack_require__.e(/*! import() */ 4496).then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 24496)).then(m => new m.FirebaseAnalyticsWeb())
});


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 17500:
/*!**************************************************************************************!*\
  !*** ./node_modules/@capacitor-community/firebase-analytics/dist/esm/definitions.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=definitions.js.map

/***/ }),

/***/ 30072:
/*!**********************************************************!*\
  !*** ./src/app/price-breakup/price-breakup.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PriceBreakupComponent: () => (/* binding */ PriceBreakupComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 32881);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 74474);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 70600);
/* harmony import */ var _services_common_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/common-storage */ 96970);
/* harmony import */ var _services_util_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/util-provider */ 81101);
/* harmony import */ var _services_date_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/date-service */ 18149);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/common-service */ 6036);
/* harmony import */ var _services_api_factory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/api-factory */ 59348);
/* harmony import */ var _services_global_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/global-data.service */ 7516);
/* harmony import */ var _services_appdata__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/appdata */ 40172);
var _PriceBreakupComponent;











function PriceBreakupComponent_ng_container_0_div_13_ion_row_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Base Fare ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function PriceBreakupComponent_ng_container_0_div_13_ion_row_1_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const key_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", key_r3, " ");
  }
}
function PriceBreakupComponent_ng_container_0_div_13_ion_row_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ion-row")(1, "ion-col", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, PriceBreakupComponent_ng_container_0_div_13_ion_row_1_span_2_Template, 2, 0, "span", 13)(3, PriceBreakupComponent_ng_container_0_div_13_ion_row_1_span_3_Template, 2, 1, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "ion-col", 14)(5, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const key_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", key_r3 == "Ticket fare");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", key_r3 != "Ticket fare");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"](" ", ctx_r1.currencySym, "", ctx_r1.fareBreakup_hash[key_r3].toFixed(2), " ");
  }
}
function PriceBreakupComponent_ng_container_0_div_13_hr_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "hr", 17);
  }
}
function PriceBreakupComponent_ng_container_0_div_13_ion_row_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ion-row")(1, "ion-col", 12)(2, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, " Total Amount Payable ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "ion-col", 14)(5, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const key_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"](" ", ctx_r1.currencySym, "", ctx_r1.fareBreakup_hash[key_r3].toFixed(2), " ");
  }
}
function PriceBreakupComponent_ng_container_0_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, PriceBreakupComponent_ng_container_0_div_13_ion_row_1_Template, 7, 4, "ion-row", 0)(2, PriceBreakupComponent_ng_container_0_div_13_hr_2_Template, 1, 0, "hr", 11)(3, PriceBreakupComponent_ng_container_0_div_13_ion_row_3_Template, 7, 2, "ion-row", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const key_r3 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.fareBreakup_hash[key_r3] != 0 && key_r3 != "Payble Amount" && key_r3 != "Total Fare");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", key_r3 == "Payble Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", key_r3 == "Payble Amount");
  }
}
function PriceBreakupComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "ion-content", 1)(2, "div", 2)(3, "ion-row")(4, "ion-col", 3)(5, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, " Price Breakup ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "ion-col")(8, "span", 5)(9, "ion-buttons", 6)(10, "ion-button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function PriceBreakupComponent_ng_container_0_Template_ion_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.dismiss());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](11, "ion-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "ion-card", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](13, PriceBreakupComponent_ng_container_0_div_13_Template, 4, 3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r1.getObjectKeys(ctx_r1.fareBreakup_hash));
  }
}
function PriceBreakupComponent_ng_container_1_div_14_ion_row_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Base Fare ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function PriceBreakupComponent_ng_container_1_div_14_ion_row_1_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const key_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", key_r5, " ");
  }
}
function PriceBreakupComponent_ng_container_1_div_14_ion_row_1_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Bus Operator GST ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function PriceBreakupComponent_ng_container_1_div_14_ion_row_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ion-row")(1, "ion-col", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, PriceBreakupComponent_ng_container_1_div_14_ion_row_1_span_2_Template, 2, 0, "span", 13)(3, PriceBreakupComponent_ng_container_1_div_14_ion_row_1_span_3_Template, 2, 1, "span", 13)(4, PriceBreakupComponent_ng_container_1_div_14_ion_row_1_span_4_Template, 2, 0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "ion-col", 14)(6, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const key_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", key_r5 == "Ticket fare");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", key_r5 != "Ticket fare" && key_r5 != "Service Tax Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", key_r5 == "Service Tax Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"](" ", ctx_r1.currencySym, "", ctx_r1.fareBreakup_hash[key_r5].toFixed(2), " ");
  }
}
function PriceBreakupComponent_ng_container_1_div_14_hr_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "hr", 17);
  }
}
function PriceBreakupComponent_ng_container_1_div_14_ion_row_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ion-row")(1, "ion-col", 12)(2, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, " Total Amount Payable ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "ion-col", 14)(5, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const key_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"](" ", ctx_r1.currencySym, "", ctx_r1.fareBreakup_hash[key_r5].toFixed(2), " ");
  }
}
function PriceBreakupComponent_ng_container_1_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, PriceBreakupComponent_ng_container_1_div_14_ion_row_1_Template, 8, 5, "ion-row", 0)(2, PriceBreakupComponent_ng_container_1_div_14_hr_2_Template, 1, 0, "hr", 11)(3, PriceBreakupComponent_ng_container_1_div_14_ion_row_3_Template, 7, 2, "ion-row", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const key_r5 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.fareBreakup_hash[key_r5] != 0 && key_r5 != "Payble Amount" && key_r5 != "Total Fare");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", key_r5 === "Payble Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", key_r5 === "Payble Amount");
  }
}
function PriceBreakupComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "ion-content")(2, "div", 2)(3, "ion-row")(4, "ion-col", 3)(5, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "Fare Breakup");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "ion-col")(8, "span", 5)(9, "ion-buttons", 6)(10, "ion-button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function PriceBreakupComponent_ng_container_1_Template_ion_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.dismiss());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](11, "ion-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](12, "hr", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "ion-card", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](14, PriceBreakupComponent_ng_container_1_div_14_Template, 4, 3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r1.getObjectKeys(ctx_r1.fareBreakup_hash));
  }
}
class PriceBreakupComponent {
  constructor(modalCtrl, commonStorage, util, navParams, dateService, commonService, navCtrl, apiFactory, globalData, appData) {
    this.modalCtrl = modalCtrl;
    this.commonStorage = commonStorage;
    this.util = util;
    this.dateService = dateService;
    this.commonService = commonService;
    this.navCtrl = navCtrl;
    this.apiFactory = apiFactory;
    this.globalData = globalData;
    this.appData = appData;
    this.reservationData = [];
    this.onwardSeatDetails = [];
    this.returnSeatDetails = [];
    this.isReturn = false;
    this.isBima = false;
    this.payFromWallet = false;
    this.phoneBooking = false;
    this.idProofCnt = 0;
    this.promoCoupons = [];
    this.offersDropDown = [];
    this.showOfferCoupon = true;
    this.appliedcoupon1 = false;
    this.appliedcoupon2 = false;
    this.smartMilesDiscount = 0;
    this.smartMileCoupon = '';
    this.pnrDiscountAplied = false;
    this.passengerDetails = [];
    this.privCardNumber = "";
    this.isFromCoachLayout = false;
    this.dd_p = navParams.get('filData');
    this.metaData = this.commonStorage.localGet("metaData");
    // console.log(this.dd_p,this.globalData)
    this.isReturn = navParams.get('isReturn');
    this.idProof = navParams.get('idProof');
    this.checkCancelProtect = navParams.get('checkCancelProtect');
    this.payFromWallet = navParams.get('payFromWallet');
    this.phoneBooking = navParams.get('phoneBooking');
    this.appliedcoupon2 = navParams.get('appliedcoupon1');
    this.appliedcoupon1 = navParams.get('appliedcoupon1');
    this.appliedCouponname = navParams.get('appliedCouponname');
    this.smartMilesDiscount = navParams.get('smartMilesDiscount');
    this.smartMileCoupon = navParams.get('smartMileCoupon');
    this.pnrDiscountAplied = navParams.get('pnrDiscountAplied');
    this.quotePnrForm = navParams.get('quotePnrForm');
    this.privCardNumber = navParams.get('privCardNumber');
    this.idProofCnt = navParams.get('idProofCnt');
    this.promoCoupons = navParams.get('promoCoupons');
    this.appliedOfferCoupon = navParams.get('appliedOfferCoupon');
    this.is_cancel_protect = this.metaData.showCancelProtect;
    this.currencySym = this.commonStorage.localGet('metaData') ? this.commonStorage.localGet('metaData').currencySym : '₹';
    this.passengerDetails = this.commonStorage.localGet("passengerDetails");
    this.e_ticket_discount = this.commonStorage.getItem('deals').e_ticket_discount ? true : false;
    this.isBima = JSON.parse(localStorage.getItem('isBima'));
    this.reservationData = this.commonStorage.localGet("reservationData");
    this.reservationDataReturn = this.commonStorage.localGet("reservationDataReturn");
    this.isFromCoachLayout = navParams.get('isFromCoachLayout');
    this.onwardSeatDetails = navParams.get('onwardSeatDetails');
    this.returnSeatDetails = navParams.get('returnSeatDetails');
    this.offersDropDown = this.metaData.offersDropDown;
    for (var k = 0; k < this.offersDropDown.length; k++) {
      if (this.offersDropDown[k].id == '7') {
        this.offerType = '7';
      } else if (this.offersDropDown[k].id == '5') {
        this.offerType = '5';
      } else {
        this.offerType = '0';
      }
    }
  }
  ngOnInit() {
    let pathForBooking = '';
    if (this.isFromCoachLayout) {
      let res = this.isReturn ? this.globalData.SELECTED_ROUTE_RETURN.reservation_id : this.globalData.SELECTED_ROUTE.reservation_id;
      pathForBooking = "res_id=" + res;
    } else {
      pathForBooking = "res_id=" + this.globalData.RESERVATION_DATA.reserveId;
    }
    if (this.util.isWebApp()) {
      pathForBooking += "&native_app_type=6";
    } else {
      if (this.util.isIos()) {
        pathForBooking += "&native_app_type=9";
      } else {
        pathForBooking += "&native_app_type=10";
      }
    }
    pathForBooking += "&origin=" + this.globalData.SEARCH_DATA.originCity.id;
    pathForBooking += "&destination=" + this.globalData.SEARCH_DATA.destCity.id;
    if (!this.isFromCoachLayout) {
      pathForBooking += "&boarding_at=" + (this.reservationData.boardingStage ? this.reservationData.boardingStage.id : '');
      pathForBooking += "&drop_off=" + (this.reservationData.droppingStage ? this.reservationData.droppingStage.id : '');
    }
    pathForBooking += "&no_of_seats=" + this.onwardSeatDetails.length;
    if (this.paymentType) {
      pathForBooking += "&referral_code=&pay_gay_type=" + this.paymentType;
    }
    pathForBooking += "&is_mobile_app=true";
    if (this.isReturn) {
      if (!this.isFromCoachLayout) {
        pathForBooking += "&is_round_trip=true";
        pathForBooking += "&return_res_id=" + this.reservationDataReturn.reserveId;
      } else {
        pathForBooking += "&is_round_trip=false";
        pathForBooking += "&return_res_id=" + this.globalData.SELECTED_ROUTE_RETURN.reservation_id;
      }
    } else {
      pathForBooking += "&is_round_trip=false";
    }
    if (this.isBima) {
      pathForBooking += "&is_bima=true";
    }
    if (this.payFromWallet) {
      pathForBooking += "&is_wallet=true";
    }
    if (this.phoneBooking) {
      pathForBooking += "&is_e_phone_booking=true";
      pathForBooking += "&is_wallet=true";
    }
    if (this.is_cancel_protect && this.metaData.showCancelProtect) {
      pathForBooking += "&is_cancel_protect=" + this.checkCancelProtect;
    }
    let seatNumbers = [];
    for (let s of this.onwardSeatDetails) {
      seatNumbers.push(s.seat_number);
    }
    let seatNumbersReturn = [];
    for (let s of this.returnSeatDetails) {
      seatNumbersReturn.push(s.seat_number);
    }
    let promoCoupon;
    if (this.idProof && this.metaData['couponIdProofDetails'] || this.idProofCnt > 0) {
      let promoCoupon = {};
      this.idProofCnt = 0;
      promoCoupon['coupon_code'] = this.appliedOfferCoupon && this.offerType != '2' && this.offerType == '7' ? this.appliedOfferCoupon.coupon_code : '';
      promoCoupon["id_proof_details"] = this.idProof;
      if (this.idProof != '') promoCoupon["id_proof_details"] = this.idProof;
    } else {
      promoCoupon = this.appliedOfferCoupon && this.offerType != '2' && this.offerType == '7' ? this.appliedOfferCoupon.coupon_code : '';
    }
    if (promoCoupon != '') {
      this.appliedCouponname = promoCoupon;
      this.appliedcoupon1 = true;
    }
    let data = {
      "seat_numbers": this.isReturn && this.isFromCoachLayout ? seatNumbersReturn : seatNumbers,
      "no_of_seats": this.onwardSeatDetails.length,
      "return_seat_numbers": this.isReturn && !this.isFromCoachLayout ? seatNumbersReturn : [],
      "use_smart_miles": this.smartMilesDiscount && this.smartMilesDiscount > 0 ? true : false,
      "passenger_titles": {},
      "boarding_at": !this.isFromCoachLayout ? this.reservationData.boardingStage.id : '',
      "drop_off": !this.isFromCoachLayout && this.reservationData.droppingStage ? this.reservationData.droppingStage.id : '',
      "return_boarding_at": !this.isFromCoachLayout && this.isReturn ? this.reservationDataReturn.boardingStage.id : '',
      "return_dropoff": !this.isFromCoachLayout && this.isReturn ? this.reservationDataReturn.droppingStage ? this.reservationDataReturn.droppingStage.id : '' : '',
      "offer_coupon": this.appliedOfferCoupon && (this.smartMileCoupon == '' || this.smartMileCoupon == undefined) && this.offerType != '7' && this.offerType != '2' ? this.appliedOfferCoupon.coupon_code : '',
      "promo_coupon": promoCoupon,
      "previous_pnr_details": this.pnrDiscountAplied ? {
        "previous_pnr": this.quotePnrForm.value.pnrnumber,
        "phone_number": this.quotePnrForm.value.mobileno
      } : {},
      "coupon_details": this.passengerDetails && this.passengerDetails.coupon_details ? this.passengerDetails.coupon_details : [],
      "use_e_discount": this.e_ticket_discount,
      "priv_card_number": this.privCardNumber,
      "is_cancel_protect": this.checkCancelProtect
    };
    this.apiFactory.fareBreakUp(data, pathForBooking).subscribe(res => {
      this.fareBreakupDetails = res;
      this.fareBreakup_hash = res.fare_break_up_hash;
    }, err => {});
  }
  dismiss() {
    this.modalCtrl.dismiss();
  }
  getObjectKeys(obj) {
    if (obj == null) {
      return [];
    }
    return Object.keys(obj);
  }
}
_PriceBreakupComponent = PriceBreakupComponent;
_PriceBreakupComponent.ɵfac = function PriceBreakupComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PriceBreakupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_common_storage__WEBPACK_IMPORTED_MODULE_0__.CommonStorage), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_util_provider__WEBPACK_IMPORTED_MODULE_1__.UtilProvider), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_9__.NavParams), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_date_service__WEBPACK_IMPORTED_MODULE_2__.DateService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_3__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_9__.NavController), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_api_factory__WEBPACK_IMPORTED_MODULE_4__.ApiFactory), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_global_data_service__WEBPACK_IMPORTED_MODULE_5__.GlobalDataService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_appdata__WEBPACK_IMPORTED_MODULE_6__.AppData));
};
_PriceBreakupComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: _PriceBreakupComponent,
  selectors: [["app-price-breakup"]],
  decls: 2,
  vars: 2,
  consts: [[4, "ngIf"], [2, "--background", "white"], [2, "margin", "10px 0px 10px 10px"], [2, "display", "flex", "align-items", "center"], [1, "themeone-bg-cl"], [2, "float", "right"], ["slot", "end"], ["mode", "md", 3, "click"], ["name", "close", 2, "color", "#ADADAD", "height", "24px", "width", "24px"], [1, "search-box", 2, "margin", "0px 10px"], [4, "ngFor", "ngForOf"], ["class", "divider", 4, "ngIf"], ["size", "8", 2, "display", "flex", "align-items", "center"], ["class", "themeone-bg-cl-subtxt", 4, "ngIf"], ["size", "4"], [1, "themeone-bg-cl-subtxt", 2, "float", "right"], [1, "themeone-bg-cl-subtxt"], [1, "divider"], [1, "themeone-footer-txt"], [1, "themeone-footer-txt", 2, "float", "right"], [1, "themeone-bg-cl", 2, "font-size", "18px", "font-weight", "700", "color", "#333333"], [2, "border-top", "1px dashed #525151", "margin", "0px 18px 0px 4px"]],
  template: function PriceBreakupComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, PriceBreakupComponent_ng_container_0_Template, 14, 1, "ng-container", 0)(1, PriceBreakupComponent_ng_container_1_Template, 15, 1, "ng-container", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == "cbustheme" || ctx.metaData.msiteFolder == "networktheme");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx.metaData.msiteFolder == null || ctx.metaData.msiteFolder == "" || ctx.metaData.msiteFolder == "shyamolitheme") && ctx.appData.isIndia);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf],
  styles: [".search-box[_ngcontent-%COMP%] {\n  margin: 0px;\n  box-shadow: none;\n  font-family: \"Gilroy-Medium\";\n}\n\n.themeone-bg-cl-[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #333333;\n}\n\n.themeone-bg-cl-subtxt[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #333333;\n}\n\n.themeone-bg-cl[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: #333333;\n}\n\n.themeone-footer-txt[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  color: #333333;\n}\n\n.discount[_ngcontent-%COMP%] {\n  color: #333333;\n  font-weight: normal; \n\n}\n\n.divider[_ngcontent-%COMP%] {\n  display: block;\n  height: 1px;\n  border: 0;\n  border-top: 1px solid #ccc;\n  margin: 1em 0;\n  padding: 0;\n  margin-left: 12px;\n  margin-right: 12px;\n}"]
});

/***/ }),

/***/ 45312:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
const environment = {
  production: true,
  c_firebaseConfig: {
    apiKey: "AIzaSyCGL9kGMW80ARug7-1-m0zHX0q4N6EMmNg",
    authDomain: "pc-api-5560718033266272099-659.firebaseapp.com",
    projectId: "pc-api-5560718033266272099-659",
    storageBucket: "pc-api-5560718033266272099-659.firebasestorage.app",
    messagingSenderId: "276783339554",
    appId: "1:276783339554:web:a3d1878b9e2601740f927b",
    measurementId: "G-8PFZ6HYLEM"
  },
  firebaseConfig: {
    apiKey: "AIzaSyADe1YXngQ8NPrMkDyy1UBtOH1XqhqMsgA",
    authDomain: "customer-app---mweb.firebaseapp.com",
    projectId: "customer-app---mweb",
    storageBucket: "customer-app---mweb.firebasestorage.app",
    messagingSenderId: "697968204843",
    appId: "1:697968204843:web:2acfadff1e6821c0eede6e",
    measurementId: "G-ZFC9S0PR6W"
  }
};

/***/ }),

/***/ 47402:
/*!********************************************************!*\
  !*** ./src/app/services/firebase-analytics.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FirebaseAnalyticsService: () => (/* binding */ FirebaseAnalyticsService)
/* harmony export */ });
/* harmony import */ var _Users_ahemad_Documents_officeWorkspace_capacitor_customer_app_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 10467);
/* harmony import */ var _capacitor_community_firebase_analytics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor-community/firebase-analytics */ 4970);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 45312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _common_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common-storage */ 96970);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 70600);
/* harmony import */ var _appdata__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./appdata */ 40172);
/* harmony import */ var _util_provider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./util-provider */ 81101);

var _FirebaseAnalyticsService;







class FirebaseAnalyticsService {
  constructor(commonStorage, platform, appdata, util) {
    this.commonStorage = commonStorage;
    this.platform = platform;
    this.appdata = appdata;
    this.util = util;
    this.isInitialized = false;
    this.initializationPromise = null;
    const localData = this.commonStorage.localGet('metaData');
    this.operatorName = localData ? localData.operatorName : null;
    // Initialize Firebase Analytics
    this.initializationPromise = this.initializeAnalytics(localData);
    this.generateNewSessionId();
  }
  initializeAnalytics(localData) {
    var _this = this;
    return (0,_Users_ahemad_Documents_officeWorkspace_capacitor_customer_app_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let firebaseInitOptions;
      if (localData && localData.msiteFolder == 'cbustheme') {
        firebaseInitOptions = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.c_firebaseConfig;
      } else {
        firebaseInitOptions = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.firebaseConfig;
      }
      try {
        if (_this.appdata.isANDROID) {
          // For Android, Firebase is auto-initialized via google-services.json
          // No need to call initializeFirebase()
          _this.isInitialized = true;
          console.log('Firebase Analytics initialized successfully for Android');
        } else if (_this.appdata.isIOS) {
          // For iOS, Firebase is auto-initialized via GoogleService-Info.plist
          // The native Firebase SDK is already loaded, just mark as initialized
          _this.isInitialized = true;
          console.log('Firebase Analytics initialized successfully for iOS');
        } else {
          // For Web, use initializeFirebase
          yield _capacitor_community_firebase_analytics__WEBPACK_IMPORTED_MODULE_1__.FirebaseAnalytics.initializeFirebase(firebaseInitOptions);
          _this.isInitialized = true;
          console.log('Firebase Analytics initialized successfully for Web');
        }
      } catch (error) {
        console.error('Error initializing Firebase Analytics:', error);
        _this.isInitialized = false;
      }
    })();
  }
  // Log custom event
  logCustomEvent(eventName, params) {
    var _this2 = this;
    return (0,_Users_ahemad_Documents_officeWorkspace_capacitor_customer_app_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        // Wait for initialization to complete
        if (_this2.initializationPromise) {
          yield _this2.initializationPromise;
        }
        if (!_this2.isInitialized) {
          console.warn('Firebase Analytics is not initialized. Cannot log event:', eventName);
          return;
        }
        if (_this2.operatorName) {
          params['OPERATOR_NAME'] = _this2.operatorName;
        }
        params['op_custom_session_id'] = _this2.session_id;
        if (_this2.appdata.isIOS) {
          // Log event on native iOS platforms
          yield _capacitor_community_firebase_analytics__WEBPACK_IMPORTED_MODULE_1__.FirebaseAnalytics.logEvent({
            name: eventName,
            params
          });
          console.log(`Event "${eventName}" logged successfully on iOS`);
        } else if (_this2.appdata.isANDROID) {
          // Log event on native Android platforms
          yield _capacitor_community_firebase_analytics__WEBPACK_IMPORTED_MODULE_1__.FirebaseAnalytics.logEvent({
            name: eventName,
            params
          });
          console.log(`Event "${eventName}" logged successfully on Android with params:`, params);
        } else if (_this2.appdata.isWEBAPP) {
          // Log event on web
          yield _capacitor_community_firebase_analytics__WEBPACK_IMPORTED_MODULE_1__.FirebaseAnalytics.logEvent({
            name: eventName,
            params
          });
          console.log(`Event "${eventName}" logged successfully on Web`);
        }
      } catch (error) {
        console.error(`Error logging custom event "${eventName}":`, error);
      }
    })();
  }
  // Check if Firebase Analytics is initialized
  isAnalyticsReady() {
    var _this3 = this;
    return (0,_Users_ahemad_Documents_officeWorkspace_capacitor_customer_app_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this3.initializationPromise) {
        yield _this3.initializationPromise;
      }
      return _this3.isInitialized;
    })();
  }
  // Method to manually initialize if needed
  ensureInitialized() {
    var _this4 = this;
    return (0,_Users_ahemad_Documents_officeWorkspace_capacitor_customer_app_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this4.initializationPromise) {
        yield _this4.initializationPromise;
      }
      if (!_this4.isInitialized) {
        console.warn('Firebase Analytics initialization failed or is not complete');
      }
    })();
  }
  generateNewSessionId() {
    if (this.sessionInterval) {
      clearInterval(this.sessionInterval);
    }
    this.session_id = this.util.generateSid();
    this.sessionInterval = setInterval(() => {
      this.generateNewSessionId();
    }, 30 * 60 * 1000);
  }
}
_FirebaseAnalyticsService = FirebaseAnalyticsService;
_FirebaseAnalyticsService.ɵfac = function FirebaseAnalyticsService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FirebaseAnalyticsService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_common_storage__WEBPACK_IMPORTED_MODULE_3__.CommonStorage), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_appdata__WEBPACK_IMPORTED_MODULE_4__.AppData), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_util_provider__WEBPACK_IMPORTED_MODULE_5__.UtilProvider));
};
_FirebaseAnalyticsService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
  token: _FirebaseAnalyticsService,
  factory: _FirebaseAnalyticsService.ɵfac,
  providedIn: 'root'
});

/***/ })

}]);