"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[167],{

/***/ 13440:
/*!*************************************************************!*\
  !*** ./src/app/passenger-details/passenger-details.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PassengerDetailsPage: () => (/* binding */ PassengerDetailsPage)
/* harmony export */ });
/* harmony import */ var _Users_ahemad_Documents_officeWorkspace_capacitor_customer_app_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 10467);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _add_existing_passenger_add_existing_passenger_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../add-existing-passenger/add-existing-passenger.component */ 89442);
/* harmony import */ var _calendar_modal_calendar_modal_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../calendar-modal/calendar-modal.page */ 70990);
/* harmony import */ var _snack_preference_snack_preference_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../snack-preference/snack-preference.page */ 66250);
/* harmony import */ var _cities_modal_cities_modal_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cities-modal/cities-modal.page */ 85960);
/* harmony import */ var _price_breakup_price_breakup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../price-breakup/price-breakup.component */ 30072);
/* harmony import */ var _countries_countries_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../countries/countries.json */ 2660);
/* harmony import */ var _services_validator_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/validator-service */ 1863);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @capacitor/core */ 15083);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! rxjs */ 18530);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! rxjs */ 70152);
/* harmony import */ var _auto_signup_dialog_auto_signup_dialog_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../auto-signup-dialog/auto-signup-dialog.page */ 48176);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _services_global_data_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/global-data.service */ 7516);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @ionic/angular */ 70600);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @ionic/angular */ 74474);
/* harmony import */ var _services_common_storage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/common-storage */ 96970);
/* harmony import */ var _services_util_provider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../services/util-provider */ 81101);
/* harmony import */ var _services_theme_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../services/theme-service */ 99692);
/* harmony import */ var _services_authentication__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../services/authentication */ 82491);
/* harmony import */ var _services_date_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../services/date-service */ 18149);
/* harmony import */ var _services_exception__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../services/exception */ 91502);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../services/common-service */ 6036);
/* harmony import */ var _services_api_factory__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../services/api-factory */ 59348);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/router */ 83087);
/* harmony import */ var _services_appdata__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../services/appdata */ 40172);
/* harmony import */ var _services_firebase_analytics_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../services/firebase-analytics.service */ 47402);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/common */ 32881);

var _PassengerDetailsPage;



























const _c0 = ["ionInputGst"];
const _c1 = () => ({
  standalone: true
});
const _c2 = () => ({
  "color": "#191966"
});
const _c3 = () => ({
  "color": "#000"
});
const _c4 = () => ({});
function PassengerDetailsPage_ng_container_0_ion_input_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ion-input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function PassengerDetailsPage_ng_container_0_ion_input_15_Template_ion_input_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.selectCountry_code());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpropertyInterpolate"]("value", ctx_r1.selected_Country_code);
  }
}
function PassengerDetailsPage_ng_container_0_ion_select_16_ion_select_option_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ion-select-option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const code_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpropertyInterpolate"]("value", code_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](code_r4);
  }
}
function PassengerDetailsPage_ng_container_0_ion_select_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ion-select", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](1, PassengerDetailsPage_ng_container_0_ion_select_16_ion_select_option_1_Template, 2, 2, "ion-select-option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngForOf", ctx_r1.AllowedCountryCodes);
  }
}
function PassengerDetailsPage_ng_container_0_ion_item_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ion-item", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](1, "ion-input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
}
function PassengerDetailsPage_ng_container_0_ion_row_24_ion_toggle_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ion-toggle", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("ionChange", function PassengerDetailsPage_ng_container_0_ion_row_24_ion_toggle_6_Template_ion_toggle_ionChange_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.onChangeWhatsappSwitch());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayListener"]("ngModelChange", function PassengerDetailsPage_ng_container_0_ion_row_24_ion_toggle_6_Template_ion_toggle_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayBindingSet"](ctx_r1.isWPSwitchOn, $event) || (ctx_r1.isWPSwitchOn = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpureFunction0"](2, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.isWPSwitchOn);
  }
}
function PassengerDetailsPage_ng_container_0_ion_row_24_ion_toggle_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ion-toggle", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("ionChange", function PassengerDetailsPage_ng_container_0_ion_row_24_ion_toggle_7_Template_ion_toggle_ionChange_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.onChangeWhatsappSwitch());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayListener"]("ngModelChange", function PassengerDetailsPage_ng_container_0_ion_row_24_ion_toggle_7_Template_ion_toggle_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayBindingSet"](ctx_r1.isWPSwitchOn, $event) || (ctx_r1.isWPSwitchOn = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpureFunction0"](2, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.isWPSwitchOn);
  }
}
function PassengerDetailsPage_ng_container_0_ion_row_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ion-row", 42)(1, "ion-col", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](2, "img", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "ion-col", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](4, "Send booking details and update on Whatsapp");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](5, "ion-col", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](6, PassengerDetailsPage_ng_container_0_ion_row_24_ion_toggle_6_Template, 1, 3, "ion-toggle", 47)(7, PassengerDetailsPage_ng_container_0_ion_row_24_ion_toggle_7_Template, 1, 3, "ion-toggle", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngClass", ctx_r1.metaData.msiteFolder == "cbustheme" ? "themeone-cbus" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.metaData.msiteFolder == "cbustheme");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.metaData.msiteFolder == "networktheme");
  }
}
function PassengerDetailsPage_ng_container_0_ion_card_25_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1, "Traveller Details (For Onward Journey)");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngClass", ctx_r1.metaData.msiteFolder == "cbustheme" ? "Contact-details" : "Contact-details-title");
  }
}
function PassengerDetailsPage_ng_container_0_ion_card_25_span_6_ion_icon_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](0, "ion-icon", 67);
  }
}
function PassengerDetailsPage_ng_container_0_ion_card_25_span_6_ion_icon_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](0, "ion-icon", 68);
  }
}
function PassengerDetailsPage_ng_container_0_ion_card_25_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](1, "ion-icon", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](2, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](4, PassengerDetailsPage_ng_container_0_ion_card_25_span_6_ion_icon_4_Template, 1, 0, "ion-icon", 65)(5, PassengerDetailsPage_ng_container_0_ion_card_25_span_6_ion_icon_5_Template, 1, 0, "ion-icon", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](seat_r8.seat_number);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", seat_r8.sex == "Ms");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", seat_r8.sex == "Mr");
  }
}
function PassengerDetailsPage_ng_container_0_ion_card_25_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](1, "ion-icon", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](2, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const seat_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](seat_r8.seat_number);
  }
}
function PassengerDetailsPage_ng_container_0_ion_card_25_ion_row_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ion-row")(1, "ion-radio-group", 69)(2, "ion-row")(3, "ion-col")(4, "ion-item", 70)(5, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](6, " Gender ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](7, "ion-col")(8, "ion-item", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](9, "ion-radio", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](10, "ion-label", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](12, "ion-col")(13, "ion-item", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](14, "ion-radio", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](15, "ion-label", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    const seat_r8 = ctx_r9.$implicit;
    const i_r9 = ctx_r9.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("value", seat_r8.sex);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("disabled", ctx_r1.isDisabled(i_r9, 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngClass", seat_r8.sex === "Mr" && !seat_r8.sexOptional ? "gender" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", "Male", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("disabled", ctx_r1.isDisabled(i_r9, 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngClass", seat_r8.sex === "Ms" && !seat_r8.sexOptional ? "gender" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", "Female", "");
  }
}
function PassengerDetailsPage_ng_container_0_ion_card_25_ion_row_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ion-row", 59)(1, "ion-col", 56)(2, "ion-item", 40)(3, "ion-input", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("keyup", function PassengerDetailsPage_ng_container_0_ion_card_25_ion_row_13_Template_ion_input_keyup_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r11);
      const i_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.onAgeChange($event, i_r9, 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()();
  }
}
function PassengerDetailsPage_ng_container_0_ion_card_25_ion_col_15_ng_container_2_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ion-select-option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const key_r12 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpropertyInterpolate"]("value", ctx_r1.metaData.idCardTypes[key_r12]);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](key_r12);
  }
}
function PassengerDetailsPage_ng_container_0_ion_card_25_ion_col_15_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](1, "ion-select", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](2, PassengerDetailsPage_ng_container_0_ion_card_25_ion_col_15_ng_container_2_ng_template_2_Template, 2, 2, "ng-template", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngForOf", ctx_r1.object.keys(ctx_r1.metaData.idCardTypes));
  }
}
function PassengerDetailsPage_ng_container_0_ion_card_25_ion_col_15_ng_container_3_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ion-select-option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const key_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpropertyInterpolate"]("value", key_r13.card_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](key_r13.card_type);
  }
}
function PassengerDetailsPage_ng_container_0_ion_card_25_ion_col_15_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](1, "ion-select", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](2, PassengerDetailsPage_ng_container_0_ion_card_25_ion_col_15_ng_container_3_ng_template_2_Template, 2, 2, "ng-template", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngForOf", ctx_r1.metaData.idCardTypes);
  }
}
function PassengerDetailsPage_ng_container_0_ion_card_25_ion_col_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ion-col", 76)(1, "ion-item", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](2, PassengerDetailsPage_ng_container_0_ion_card_25_ion_col_15_ng_container_2_Template, 3, 1, "ng-container", 1)(3, PassengerDetailsPage_ng_container_0_ion_card_25_ion_col_15_ng_container_3_Template, 3, 1, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", !ctx_r1.isArray(ctx_r1.metaData.idCardTypes));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.isArray(ctx_r1.metaData.idCardTypes));
  }
}
function PassengerDetailsPage_ng_container_0_ion_card_25_ion_col_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ion-col", 76)(1, "ion-item", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](2, "ion-input", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }
}
function PassengerDetailsPage_ng_container_0_ion_card_25_ion_row_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ion-row")(1, "ion-col", 82)(2, "ion-item", 40)(3, "ion-input", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function PassengerDetailsPage_ng_container_0_ion_card_25_ion_row_18_Template_ion_input_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r14);
      const i_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.selectPassportDate(1, ctx_r1.passengerForm[i_r9].value.passport_issued_date, i_r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](4, "ion-col", 84)(5, "ion-item", 40)(6, "ion-input", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function PassengerDetailsPage_ng_container_0_ion_card_25_ion_row_18_Template_ion_input_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r14);
      const i_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.selectPassportDate(2, ctx_r1.passengerForm[i_r9].value.passport_expiry_date, i_r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("readonly", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("readonly", true);
  }
}
function PassengerDetailsPage_ng_container_0_ion_card_25_ion_row_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ion-row")(1, "ion-col", 86)(2, "ion-item", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](3, "ion-input", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
  }
}
function PassengerDetailsPage_ng_container_0_ion_card_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ion-card", 51)(1, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](2, PassengerDetailsPage_ng_container_0_ion_card_25_div_2_Template, 2, 1, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "div")(4, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](6, PassengerDetailsPage_ng_container_0_ion_card_25_span_6_Template, 6, 3, "span", 55)(7, PassengerDetailsPage_ng_container_0_ion_card_25_span_7_Template, 4, 1, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](8, "ion-row")(9, "ion-col", 56)(10, "ion-item", 40)(11, "ion-input", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("keyup", function PassengerDetailsPage_ng_container_0_ion_card_25_Template_ion_input_keyup_11_listener($event) {
      const i_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r7).index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.onInputChange($event, i_r9, 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](12, PassengerDetailsPage_ng_container_0_ion_card_25_ion_row_12_Template, 17, 7, "ion-row", 1)(13, PassengerDetailsPage_ng_container_0_ion_card_25_ion_row_13_Template, 4, 0, "ion-row", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](14, "ion-row", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](15, PassengerDetailsPage_ng_container_0_ion_card_25_ion_col_15_Template, 4, 2, "ion-col", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](16, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](17, PassengerDetailsPage_ng_container_0_ion_card_25_ion_col_17_Template, 3, 0, "ion-col", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](18, PassengerDetailsPage_ng_container_0_ion_card_25_ion_row_18_Template, 7, 2, "ion-row", 1)(19, PassengerDetailsPage_ng_container_0_ion_card_25_ion_row_19_Template, 4, 0, "ion-row", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const i_r9 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("formGroup", ctx_r1.passengerForm[i_r9]);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", i_r9 == 0 && ctx_r1.isReturn);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"]("Passenger " + (i_r9 + 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.metaData.msiteFolder == "cbustheme");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.metaData.msiteFolder == "networktheme");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.metaData.msiteFolder == "networktheme");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.locale && ctx_r1.locale.passenger_details_config["Age"] && ctx_r1.locale.passenger_details_config["Age"] != "Hide");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.metaData.idCardTypes && (ctx_r1.metaData.showCardTypes || ctx_r1.locale && ctx_r1.locale.passenger_details_config["Id Type"] && ctx_r1.locale.passenger_details_config["Id Type"] != "Hide"));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.metaData.showCardTypes || ctx_r1.locale && ctx_r1.locale.passenger_details_config["Id No"] && ctx_r1.locale.passenger_details_config["Id No"] != "Hide");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.metaData.showCardTypes && ctx_r1.passengerForm[i_r9].value.id_card_type == 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.metaData.showCardTypes && ctx_r1.passengerForm[i_r9].value.id_card_type == 3);
  }
}
function PassengerDetailsPage_ng_container_0_ion_card_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ion-card", 51)(1, "ion-item", 88)(2, "ion-label", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](3, "Copy Onward Details To Return");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](4, "ion-checkbox", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayListener"]("ngModelChange", function PassengerDetailsPage_ng_container_0_ion_card_26_Template_ion_checkbox_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r15);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayBindingSet"](ctx_r1.copyData, $event) || (ctx_r1.copyData = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("ionChange", function PassengerDetailsPage_ng_container_0_ion_card_26_Template_ion_checkbox_ionChange_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r15);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.copyDataToReturn());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngClass", ctx_r1.metaData.msiteFolder == "cbustheme" ? "themeone-checkbox" : "themeone-checkbox_2");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.copyData);
  }
}
function PassengerDetailsPage_ng_container_0_div_27_ion_card_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1, "Traveller Details (For Return Journey)");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngClass", ctx_r1.metaData.msiteFolder == "cbustheme" ? "Contact-details" : "Contact-details-title");
  }
}
function PassengerDetailsPage_ng_container_0_div_27_ion_card_1_span_6_ion_icon_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](0, "ion-icon", 96);
  }
}
function PassengerDetailsPage_ng_container_0_div_27_ion_card_1_span_6_ion_icon_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](0, "ion-icon", 97);
  }
}
function PassengerDetailsPage_ng_container_0_div_27_ion_card_1_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](1, "ion-icon", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](2, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](4, PassengerDetailsPage_ng_container_0_div_27_ion_card_1_span_6_ion_icon_4_Template, 1, 0, "ion-icon", 94)(5, PassengerDetailsPage_ng_container_0_div_27_ion_card_1_span_6_ion_icon_5_Template, 1, 0, "ion-icon", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](seat_r17.seat_number);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", seat_r17.sex == "Ms");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", seat_r17.sex == "Mr");
  }
}
function PassengerDetailsPage_ng_container_0_div_27_ion_card_1_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](1, "ion-icon", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](2, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const seat_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](seat_r17.seat_number);
  }
}
function PassengerDetailsPage_ng_container_0_div_27_ion_card_1_ion_row_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ion-row")(1, "ion-radio-group", 98)(2, "ion-row")(3, "ion-col")(4, "ion-item", 99)(5, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](6, " Gender ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](7, "ion-col")(8, "ion-item", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](9, "ion-radio", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](10, "ion-label", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](12, "ion-col")(13, "ion-item", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](14, "ion-radio", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](15, "ion-label", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    const seat_r17 = ctx_r18.$implicit;
    const i_r18 = ctx_r18.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("disabled", ctx_r1.isDisabled(i_r18, 2));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngClass", seat_r17.sex === "Mr" && !seat_r17.sexOptional ? "gender" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", "Male", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("disabled", ctx_r1.isDisabled(i_r18, 2));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngClass", seat_r17.sex === "Ms" && !seat_r17.sexOptional ? "gender" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", "Female", "");
  }
}
function PassengerDetailsPage_ng_container_0_div_27_ion_card_1_ion_row_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ion-row", 100)(1, "ion-col", 86)(2, "ion-item", 40)(3, "ion-input", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("keyup", function PassengerDetailsPage_ng_container_0_div_27_ion_card_1_ion_row_13_Template_ion_input_keyup_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r20);
      const i_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.onAgeChange($event, i_r18, 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()();
  }
}
function PassengerDetailsPage_ng_container_0_div_27_ion_card_1_ion_col_15_ng_container_2_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ion-select-option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const key_r21 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpropertyInterpolate"]("value", ctx_r1.metaData.idCardTypes[key_r21]);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](key_r21);
  }
}
function PassengerDetailsPage_ng_container_0_div_27_ion_card_1_ion_col_15_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](1, "ion-select", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](2, PassengerDetailsPage_ng_container_0_div_27_ion_card_1_ion_col_15_ng_container_2_ng_template_2_Template, 2, 2, "ng-template", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngForOf", ctx_r1.object.keys(ctx_r1.metaData.idCardTypes));
  }
}
function PassengerDetailsPage_ng_container_0_div_27_ion_card_1_ion_col_15_ng_container_3_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ion-select-option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const key_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpropertyInterpolate"]("value", key_r22.card_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](key_r22.card_type);
  }
}
function PassengerDetailsPage_ng_container_0_div_27_ion_card_1_ion_col_15_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](1, "ion-select", 80)(2, "ion-select-option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](3, "Select Card");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](4, PassengerDetailsPage_ng_container_0_div_27_ion_card_1_ion_col_15_ng_container_3_ng_template_4_Template, 2, 2, "ng-template", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("value", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngForOf", ctx_r1.metaData.idCardTypes);
  }
}
function PassengerDetailsPage_ng_container_0_div_27_ion_card_1_ion_col_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ion-col", 76)(1, "ion-item", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](2, PassengerDetailsPage_ng_container_0_div_27_ion_card_1_ion_col_15_ng_container_2_Template, 3, 1, "ng-container", 1)(3, PassengerDetailsPage_ng_container_0_div_27_ion_card_1_ion_col_15_ng_container_3_Template, 5, 2, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", !ctx_r1.isArray(ctx_r1.metaData.idCardTypes));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.isArray(ctx_r1.metaData.idCardTypes));
  }
}
function PassengerDetailsPage_ng_container_0_div_27_ion_card_1_ion_col_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ion-col", 76)(1, "ion-item", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](2, "ion-input", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }
}
function PassengerDetailsPage_ng_container_0_div_27_ion_card_1_ion_row_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ion-row")(1, "ion-col", 82)(2, "div")(3, "ion-item", 40)(4, "ion-input", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function PassengerDetailsPage_ng_container_0_div_27_ion_card_1_ion_row_18_Template_ion_input_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r23);
      const i_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.selectPassportDate(1, ctx_r1.passengerForm[i_r18].value.passport_issued_date, i_r18));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](5, "ion-col", 84)(6, "div")(7, "ion-item", 40)(8, "ion-input", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function PassengerDetailsPage_ng_container_0_div_27_ion_card_1_ion_row_18_Template_ion_input_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r23);
      const i_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.selectPassportDate(2, ctx_r1.passengerForm[i_r18].value.passport_expiry_date, i_r18));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("readonly", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("readonly", true);
  }
}
function PassengerDetailsPage_ng_container_0_div_27_ion_card_1_ion_row_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ion-row")(1, "ion-col", 86)(2, "ion-item", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](3, "ion-input", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
  }
}
function PassengerDetailsPage_ng_container_0_div_27_ion_card_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ion-card", 51)(1, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](2, PassengerDetailsPage_ng_container_0_div_27_ion_card_1_div_2_Template, 2, 1, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "div")(4, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](6, PassengerDetailsPage_ng_container_0_div_27_ion_card_1_span_6_Template, 6, 3, "span", 55)(7, PassengerDetailsPage_ng_container_0_div_27_ion_card_1_span_7_Template, 4, 1, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](8, "ion-row")(9, "ion-col", 56)(10, "ion-item", 40)(11, "ion-input", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("keyup", function PassengerDetailsPage_ng_container_0_div_27_ion_card_1_Template_ion_input_keyup_11_listener($event) {
      const i_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r16).index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.onInputChange($event, i_r18, 2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](12, PassengerDetailsPage_ng_container_0_div_27_ion_card_1_ion_row_12_Template, 17, 6, "ion-row", 1)(13, PassengerDetailsPage_ng_container_0_div_27_ion_card_1_ion_row_13_Template, 4, 0, "ion-row", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](14, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](15, PassengerDetailsPage_ng_container_0_div_27_ion_card_1_ion_col_15_Template, 4, 2, "ion-col", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](16, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](17, PassengerDetailsPage_ng_container_0_div_27_ion_card_1_ion_col_17_Template, 3, 0, "ion-col", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](18, PassengerDetailsPage_ng_container_0_div_27_ion_card_1_ion_row_18_Template, 9, 2, "ion-row", 1)(19, PassengerDetailsPage_ng_container_0_div_27_ion_card_1_ion_row_19_Template, 4, 0, "ion-row", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const i_r18 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("formGroup", ctx_r1.passengerFormR[i_r18]);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", i_r18 == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"]("Passenger " + (i_r18 + 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.metaData.msiteFolder == "cbustheme");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.metaData.msiteFolder == "networktheme");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.metaData.msiteFolder == "networktheme");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.locale && ctx_r1.locale.passenger_details_config["Age"] && ctx_r1.locale.passenger_details_config["Age"] != "Hide");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.metaData.idCardTypes && (ctx_r1.metaData.showCardTypes || ctx_r1.locale && ctx_r1.locale.passenger_details_config["Id Type"] && ctx_r1.locale.passenger_details_config["Id Type"] != "Hide"));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.metaData.showCardTypes || ctx_r1.locale && ctx_r1.locale.passenger_details_config["Id No"] && ctx_r1.locale.passenger_details_config["Id No"] != "Hide");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.metaData.showCardTypes && ctx_r1.passengerFormR[i_r18].value.id_card_type == 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.metaData.showCardTypes && ctx_r1.passengerFormR[i_r18].value.id_card_type == 3);
  }
}
function PassengerDetailsPage_ng_container_0_div_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](1, PassengerDetailsPage_ng_container_0_div_27_ion_card_1_Template, 20, 11, "ion-card", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngForOf", ctx_r1.returnSeatDetails);
  }
}
function PassengerDetailsPage_ng_container_0_ion_card_28_ion_item_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ion-item", 40)(1, "ion-input", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("ionInput", function PassengerDetailsPage_ng_container_0_ion_card_28_ion_item_5_Template_ion_input_ionInput_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r25);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.onchangeStateId($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayListener"]("ngModelChange", function PassengerDetailsPage_ng_container_0_ion_card_28_ion_item_5_Template_ion_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r25);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayBindingSet"](ctx_r1.stateId, $event) || (ctx_r1.stateId = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.stateId);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpureFunction0"](2, _c1));
  }
}
function PassengerDetailsPage_ng_container_0_ion_card_28_ion_item_6_ion_select_option_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ion-select-option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpropertyInterpolate"]("value", item_r27.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"]("", item_r27.name, " ");
  }
}
function PassengerDetailsPage_ng_container_0_ion_card_28_ion_item_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ion-item", 40)(1, "ion-select", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("ionChange", function PassengerDetailsPage_ng_container_0_ion_card_28_ion_item_6_Template_ion_select_ionChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r26);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.onchangeId($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayListener"]("ngModelChange", function PassengerDetailsPage_ng_container_0_ion_card_28_ion_item_6_Template_ion_select_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r26);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayBindingSet"](ctx_r1.stateType, $event) || (ctx_r1.stateType = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](2, PassengerDetailsPage_ng_container_0_ion_card_28_ion_item_6_ion_select_option_2_Template, 2, 2, "ion-select-option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](3, "ion-icon", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpropertyInterpolate"]("value", ctx_r1.stateGetName);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.stateType);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpureFunction0"](5, _c1))("interfaceOptions", ctx_r1.stateOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngForOf", ctx_r1.state);
  }
}
function PassengerDetailsPage_ng_container_0_ion_card_28_ion_item_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ion-item", 40)(1, "ion-input", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("keyup", function PassengerDetailsPage_ng_container_0_ion_card_28_ion_item_7_Template_ion_input_keyup_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r28);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.onchangeCityId($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayListener"]("ngModelChange", function PassengerDetailsPage_ng_container_0_ion_card_28_ion_item_7_Template_ion_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r28);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayBindingSet"](ctx_r1.cityId, $event) || (ctx_r1.cityId = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpropertyInterpolate"]("value", ctx_r1.cityName ? ctx_r1.cityName : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.cityId);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpureFunction0"](3, _c1));
  }
}
function PassengerDetailsPage_ng_container_0_ion_card_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ion-card", 103)(1, "div", 104)(2, "p", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](3, "Please Enter your Residential Location Details.");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](4, "ion-icon", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function PassengerDetailsPage_ng_container_0_ion_card_28_Template_ion_icon_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r24);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.showWalletDets = !ctx_r1.showWalletDets);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](5, PassengerDetailsPage_ng_container_0_ion_card_28_ion_item_5_Template, 2, 3, "ion-item", 18)(6, PassengerDetailsPage_ng_container_0_ion_card_28_ion_item_6_Template, 4, 6, "ion-item", 18)(7, PassengerDetailsPage_ng_container_0_ion_card_28_ion_item_7_Template, 2, 4, "ion-item", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngClass", ctx_r1.businessTravel ? "businessTravelclick" : "businessTravelunclick");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", (ctx_r1.gstInfoConfig == null ? null : ctx_r1.gstInfoConfig.pincode) && ctx_r1.gstInfoConfig.pincode == "show" || ctx_r1.gstInfoConfig == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", (ctx_r1.gstInfoConfig == null ? null : ctx_r1.gstInfoConfig.state) && ctx_r1.gstInfoConfig.state == "show" || ctx_r1.gstInfoConfig == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", (ctx_r1.gstInfoConfig == null ? null : ctx_r1.gstInfoConfig.city) && ctx_r1.gstInfoConfig.city == "show" || ctx_r1.gstInfoConfig == null);
  }
}
function PassengerDetailsPage_ng_container_0_ion_card_29_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div")(1, "ion-item", 40)(2, "ion-input", 114, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("keyup", function PassengerDetailsPage_ng_container_0_ion_card_29_div_5_Template_ion_input_keyup_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r30);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.onchangeGstId($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayListener"]("ngModelChange", function PassengerDetailsPage_ng_container_0_ion_card_29_div_5_Template_ion_input_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r30);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayBindingSet"](ctx_r1.gstId, $event) || (ctx_r1.gstId = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](4, "ion-item", 40)(5, "ion-input", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayListener"]("ngModelChange", function PassengerDetailsPage_ng_container_0_ion_card_29_div_5_Template_ion_input_ngModelChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r30);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayBindingSet"](ctx_r1.gstName, $event) || (ctx_r1.gstName = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](6, "div", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](7, " Note: Please carry your ID proof. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.gstId);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpureFunction0"](4, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.gstName);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpureFunction0"](5, _c1));
  }
}
function PassengerDetailsPage_ng_container_0_ion_card_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ion-card", 103)(1, "ion-item", 111)(2, "ion-checkbox", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("ionChange", function PassengerDetailsPage_ng_container_0_ion_card_29_Template_ion_checkbox_ionChange_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r29);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.gstInfo());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayListener"]("ngModelChange", function PassengerDetailsPage_ng_container_0_ion_card_29_Template_ion_checkbox_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r29);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayBindingSet"](ctx_r1.businessTravel, $event) || (ctx_r1.businessTravel = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "ion-label", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](4, "I am booking for business travel");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](5, PassengerDetailsPage_ng_container_0_ion_card_29_div_5_Template, 8, 6, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngClass", ctx_r1.businessTravel ? "businessTravelclick" : "businessTravelunclick");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngClass", ctx_r1.metaData.msiteFolder == "cbustheme" ? "themeone-checkbox" : "themeone-checkbox_2");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.businessTravel);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpureFunction0"](6, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngStyle", (ctx_r1.metaData == null ? null : ctx_r1.metaData.msiteFolder) === "cbustheme" ? _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpureFunction0"](7, _c2) : _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpureFunction0"](8, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.businessTravel);
  }
}
function PassengerDetailsPage_ng_container_0_span_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "span", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1, "(Excluding VAT)");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
}
function PassengerDetailsPage_ng_container_0_div_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 118)(1, "div", 119)(2, "ion-row")(3, "ion-col", 120)(4, "p", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](5, "Important Note!!");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](6, "ion-col", 120)(7, "p", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function PassengerDetailsPage_ng_container_0_div_43_Template_p_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r31);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.showWalletDets = !ctx_r1.showWalletDets);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](8, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](9, "div", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](10, " As per the Govt new GST Rule - 46 Passengers are Mandated to provide their residential State, City and Pin Code details for the Bookings. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngStyle", ctx_r1.metaData.msiteFolder == "cbustheme" ? _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpureFunction0"](1, _c2) : _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpureFunction0"](2, _c4));
  }
}
function PassengerDetailsPage_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](1, "ion-header", 2)(2, "ion-toolbar", 3)(3, "ion-title", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](4, "Passenger Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](5, "ion-buttons", 5)(6, "ion-back-button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function PassengerDetailsPage_ng_container_0_Template_ion_back_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.goBack());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](7, "ion-content", 7)(8, "form", 8)(9, "ion-card", 9)(10, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](11, " Ticket details and updates will be sent here ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](12, "ion-item", 11)(13, "ion-row", 12)(14, "ion-col", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](15, PassengerDetailsPage_ng_container_0_ion_input_15_Template, 1, 1, "ion-input", 14)(16, PassengerDetailsPage_ng_container_0_ion_select_16_Template, 2, 1, "ion-select", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](17, "ion-col", 16)(18, "ion-input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("keyup", function PassengerDetailsPage_ng_container_0_Template_ion_input_keyup_18_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.onPhoneChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](19, PassengerDetailsPage_ng_container_0_ion_item_19_Template, 2, 0, "ion-item", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](20, "ion-item", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](21, "ion-checkbox", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](22, "ion-label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](23, "Create My Account");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](24, PassengerDetailsPage_ng_container_0_ion_row_24_Template, 8, 3, "ion-row", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](25, PassengerDetailsPage_ng_container_0_ion_card_25_Template, 20, 11, "ion-card", 23)(26, PassengerDetailsPage_ng_container_0_ion_card_26_Template, 5, 2, "ion-card", 24)(27, PassengerDetailsPage_ng_container_0_div_27_Template, 2, 1, "div", 1)(28, PassengerDetailsPage_ng_container_0_ion_card_28_Template, 8, 4, "ion-card", 25)(29, PassengerDetailsPage_ng_container_0_ion_card_29_Template, 6, 9, "ion-card", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](30, "div", 26)(31, "ion-row", 27)(32, "ion-col", 28)(33, "div")(34, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](36, "div", 30)(37, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function PassengerDetailsPage_ng_container_0_Template_span_click_37_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.callFarebreakup());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](38, "View Breakup");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](39, PassengerDetailsPage_ng_container_0_span_39_Template, 2, 0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](40, "ion-col", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function PassengerDetailsPage_ng_container_0_Template_ion_col_click_40_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.submitPassengerDetails());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](41, "ion-button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](42, "Continue");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](43, PassengerDetailsPage_ng_container_0_div_43_Template, 11, 3, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngClass", ctx_r1.metaData.msiteFolder == "cbustheme" ? "themeone-bg-cl" : "themeone-bg-cl_2");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("formGroup", ctx_r1.contactForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.metaData.show_countries_isd_codes_selection);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", !ctx_r1.metaData.show_countries_isd_codes_selection);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.locale && ctx_r1.locale.passenger_details_config["Email"] && ctx_r1.locale.passenger_details_config["Email"] != "Hide");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngClass", ctx_r1.metaData.msiteFolder == "cbustheme" ? "themeone-checkbox" : "themeone-checkbox_2");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.metaData && ctx_r1.metaData.isWhatsapp);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngForOf", ctx_r1.onwardSeatDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.isReturn);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.isReturn);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", !ctx_r1.commonService.isAbcApp() && (ctx_r1.commonStorage == null ? null : ctx_r1.commonStorage.getItem("isServiceTaxApplicable")) && ctx_r1.showPincodeCard);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", !ctx_r1.commonService.isAbcApp() && ctx_r1.commonStorage.getItem("isServiceTaxApplicable"));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngClass", ctx_r1.metaData.msiteFolder == "cbustheme" ? "themeone-bottom" : "themeone-bottom_2");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate2"]("", ctx_r1.currencySym, "", ctx_r1.payAmount(ctx_r1.globalData.RESERVATION_DATA.totalBookingAmount + (ctx_r1.globalData.RESERVATION_DATA_RETURN && ctx_r1.globalData.RESERVATION_DATA_RETURN.totalBookingAmount ? ctx_r1.globalData.RESERVATION_DATA_RETURN.totalBookingAmount : 0)), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.commonService.isAbcApp());
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngClass", ctx_r1.metaData.msiteFolder == "cbustheme" ? "cbus-select-pickup-btn" : "themeone-select-pickup-btn");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.showWalletDets);
  }
}
function PassengerDetailsPage_ng_container_1_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1, "(Round Trip)");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
}
function PassengerDetailsPage_ng_container_1_ion_item_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](1, "ion-input", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
}
function PassengerDetailsPage_ng_container_1_ion_input_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ion-input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function PassengerDetailsPage_ng_container_1_ion_input_18_Template_ion_input_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r33);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.selectCountry_code());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpropertyInterpolate"]("value", ctx_r1.selected_Country_code);
  }
}
function PassengerDetailsPage_ng_container_1_div_19_ion_select_option_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ion-select-option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const code_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpropertyInterpolate"]("value", code_r34);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"]("", code_r34, " ");
  }
}
function PassengerDetailsPage_ng_container_1_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 149)(1, "ion-select", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](2, PassengerDetailsPage_ng_container_1_div_19_ion_select_option_2_Template, 2, 2, "ion-select-option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](3, "ion-icon", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngForOf", ctx_r1.AllowedCountryCodes);
  }
}
function PassengerDetailsPage_ng_container_1_p_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "p", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1, "SMS shall not be sent to an international number");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
}
function PassengerDetailsPage_ng_container_1_hr_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](0, "hr", 153);
  }
}
function PassengerDetailsPage_ng_container_1_ion_row_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ion-row")(1, "ion-col", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](2, "img", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "ion-col", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](4, "Send booking details and updates on Whatsapp");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](5, "ion-col", 157)(6, "ion-toggle", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("ionChange", function PassengerDetailsPage_ng_container_1_ion_row_24_Template_ion_toggle_ionChange_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r35);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.onChangeWhatsappSwitch());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayListener"]("ngModelChange", function PassengerDetailsPage_ng_container_1_ion_row_24_Template_ion_toggle_ngModelChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r35);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayBindingSet"](ctx_r1.isWPSwitchOn, $event) || (ctx_r1.isWPSwitchOn = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpureFunction0"](2, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.isWPSwitchOn);
  }
}
function PassengerDetailsPage_ng_container_1_ion_card_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ion-card", 159)(1, "div", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2, "Traveller details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "span", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function PassengerDetailsPage_ng_container_1_ion_card_25_Template_span_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r36);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.addExistingPass());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](4, "Add existing passenger");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
  }
}
function PassengerDetailsPage_ng_container_1_ion_card_26_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1, "Traveller details");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
}
function PassengerDetailsPage_ng_container_1_ion_card_26_div_1_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "span", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1, "Primary Passenger");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
}
function PassengerDetailsPage_ng_container_1_ion_card_26_div_1_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "span", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1, "Co-Passenger");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
}
function PassengerDetailsPage_ng_container_1_ion_card_26_div_1_span_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1, "Reserved for female");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
}
function PassengerDetailsPage_ng_container_1_ion_card_26_div_1_ion_row_32_ion_input_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ion-input", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("ionInput", function PassengerDetailsPage_ng_container_1_ion_card_26_div_1_ion_row_32_ion_input_3_Template_ion_input_ionInput_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r39);
      const i_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3).index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.onAgeChange($event, i_r38, 1));
    })("ionBlur", function PassengerDetailsPage_ng_container_1_ion_card_26_div_1_ion_row_32_ion_input_3_Template_ion_input_ionBlur_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r39);
      const i_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3).index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.onAgeBlur($event, i_r38, 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
}
function PassengerDetailsPage_ng_container_1_ion_card_26_div_1_ion_row_32_ion_input_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ion-input", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("keyup", function PassengerDetailsPage_ng_container_1_ion_card_26_div_1_ion_row_32_ion_input_4_Template_ion_input_keyup_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r40);
      const i_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3).index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.onAgeChange($event, i_r38, 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
}
function PassengerDetailsPage_ng_container_1_ion_card_26_div_1_ion_row_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ion-row", 100)(1, "ion-col")(2, "ion-item", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](3, PassengerDetailsPage_ng_container_1_ion_card_26_div_1_ion_row_32_ion_input_3_Template, 1, 0, "ion-input", 177)(4, PassengerDetailsPage_ng_container_1_ion_card_26_div_1_ion_row_32_ion_input_4_Template, 1, 0, "ion-input", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.metaData == null ? null : ctx_r1.metaData.gst_tsrtc_enable);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", !(ctx_r1.metaData == null ? null : ctx_r1.metaData.gst_tsrtc_enable));
  }
}
function PassengerDetailsPage_ng_container_1_ion_card_26_div_1_ion_row_33_ion_select_option_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ion-select-option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r44 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpropertyInterpolate"]("value", item_r44.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", item_r44.type, " ");
  }
}
function PassengerDetailsPage_ng_container_1_ion_card_26_div_1_ion_row_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ion-row")(1, "ion-col", 181)(2, "ion-item", 182)(3, "ion-select", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("ionChange", function PassengerDetailsPage_ng_container_1_ion_card_26_div_1_ion_row_33_Template_ion_select_ionChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r41);
      const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
      const seat_r43 = ctx_r41.$implicit;
      const i_r38 = ctx_r41.index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.onConcessionChange($event, i_r38, 1, seat_r43));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](4, PassengerDetailsPage_ng_container_1_ion_card_26_div_1_ion_row_33_ion_select_option_4_Template, 2, 2, "ion-select-option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](5, "ion-icon", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngForOf", ctx_r1.concessions_category);
  }
}
function PassengerDetailsPage_ng_container_1_ion_card_26_div_1_ion_card_34_ion_col_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ion-col", 120)(1, "ion-item", 190);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function PassengerDetailsPage_ng_container_1_ion_card_26_div_1_ion_card_34_ion_col_8_Template_ion_item_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r46);
      const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
      const seat_r43 = ctx_r41.$implicit;
      const i_r38 = ctx_r41.index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.cardDetails(null, i_r38, 1, seat_r43));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](2, "ion-label", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](3, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](4, "ion-input", 191);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("readonly", true);
  }
}
function PassengerDetailsPage_ng_container_1_ion_card_26_div_1_ion_card_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ion-card", 185)(1, "ion-grid")(2, "ion-row")(3, "ion-col", 186)(4, "ion-item")(5, "ion-label", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](6, "Card Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](7, "ion-input", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("keyup", function PassengerDetailsPage_ng_container_1_ion_card_26_div_1_ion_card_34_Template_ion_input_keyup_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r45);
      const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
      const seat_r43 = ctx_r41.$implicit;
      const i_r38 = ctx_r41.index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.cardDetails($event, i_r38, 1, seat_r43));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](8, PassengerDetailsPage_ng_container_1_ion_card_26_div_1_ion_card_34_ion_col_8_Template, 5, 1, "ion-col", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const i_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2).index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("size", ctx_r1.cardValidationRequiredState[i_r38] ? 6 : 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpropertyInterpolate1"]("id", "input", i_r38, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.cardValidationRequiredState[i_r38]);
  }
}
function PassengerDetailsPage_ng_container_1_ion_card_26_div_1_ion_col_36_ng_container_2_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ion-select-option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const key_r47 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpropertyInterpolate"]("value", ctx_r1.metaData.idCardTypes[key_r47]);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](key_r47);
  }
}
function PassengerDetailsPage_ng_container_1_ion_card_26_div_1_ion_col_36_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](1, "ion-select", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](2, PassengerDetailsPage_ng_container_1_ion_card_26_div_1_ion_col_36_ng_container_2_ng_template_2_Template, 2, 2, "ng-template", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngForOf", ctx_r1.object.keys(ctx_r1.metaData.idCardTypes));
  }
}
function PassengerDetailsPage_ng_container_1_ion_card_26_div_1_ion_col_36_ng_container_3_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ion-select-option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const key_r48 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpropertyInterpolate"]("value", key_r48.card_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](key_r48.card_type);
  }
}
function PassengerDetailsPage_ng_container_1_ion_card_26_div_1_ion_col_36_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](1, "ion-select", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](2, PassengerDetailsPage_ng_container_1_ion_card_26_div_1_ion_col_36_ng_container_3_ng_template_2_Template, 2, 2, "ng-template", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngForOf", ctx_r1.metaData.idCardTypes);
  }
}
function PassengerDetailsPage_ng_container_1_ion_card_26_div_1_ion_col_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ion-col", 192)(1, "ion-item", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](2, PassengerDetailsPage_ng_container_1_ion_card_26_div_1_ion_col_36_ng_container_2_Template, 3, 1, "ng-container", 1)(3, PassengerDetailsPage_ng_container_1_ion_card_26_div_1_ion_col_36_ng_container_3_Template, 3, 1, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", !ctx_r1.isArray(ctx_r1.metaData.idCardTypes));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.isArray(ctx_r1.metaData.idCardTypes));
  }
}
function PassengerDetailsPage_ng_container_1_ion_card_26_div_1_ion_col_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ion-col", 192)(1, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](2, "ion-input", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }
}
function PassengerDetailsPage_ng_container_1_ion_card_26_div_1_ion_row_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ion-row")(1, "ion-col", 196)(2, "ion-item")(3, "ion-input", 197);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function PassengerDetailsPage_ng_container_1_ion_card_26_div_1_ion_row_39_Template_ion_input_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r49);
      const i_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2).index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.selectPassportDate(1, ctx_r1.passengerForm[i_r38].value.passport_issued_date, i_r38));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](4, "ion-col", 196)(5, "ion-item")(6, "ion-input", 198);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function PassengerDetailsPage_ng_container_1_ion_card_26_div_1_ion_row_39_Template_ion_input_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r49);
      const i_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2).index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.selectPassportDate(2, ctx_r1.passengerForm[i_r38].value.passport_expiry_date, i_r38));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](7, "ion-col", 196)(8, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](9, "ion-input", 199);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("readonly", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("readonly", true);
  }
}
function PassengerDetailsPage_ng_container_1_ion_card_26_div_1_div_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 200)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2, " Enter valid ID details; otherwise, it will impact your journey or package. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }
}
function PassengerDetailsPage_ng_container_1_ion_card_26_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](1, PassengerDetailsPage_ng_container_1_ion_card_26_div_1_div_1_Template, 2, 0, "div", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](3, PassengerDetailsPage_ng_container_1_ion_card_26_div_1_span_3_Template, 2, 0, "span", 164)(4, PassengerDetailsPage_ng_container_1_ion_card_26_div_1_span_4_Template, 2, 0, "span", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](5, "span", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](6, "Seat ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](7, "span", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](9, "div", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](10, PassengerDetailsPage_ng_container_1_ion_card_26_div_1_span_10_Template, 2, 0, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](11, "ion-row")(12, "ion-col")(13, "ion-item", 168)(14, "ion-input", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("keyup", function PassengerDetailsPage_ng_container_1_ion_card_26_div_1_Template_ion_input_keyup_14_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r37);
      const i_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.onInputChange($event, i_r38, 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](15, "ion-row", 170)(16, "ion-radio-group", 98)(17, "ion-row")(18, "ion-col")(19, "ion-item", 99)(20, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](21, " Gender ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](22, "ion-col")(23, "ion-item", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](24, "ion-radio", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](25, "ion-label", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](27, "ion-col")(28, "ion-item", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](29, "ion-radio", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](30, "ion-label", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](32, PassengerDetailsPage_ng_container_1_ion_card_26_div_1_ion_row_32_Template, 5, 2, "ion-row", 93)(33, PassengerDetailsPage_ng_container_1_ion_card_26_div_1_ion_row_33_Template, 6, 1, "ion-row", 1)(34, PassengerDetailsPage_ng_container_1_ion_card_26_div_1_ion_card_34_Template, 9, 4, "ion-card", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](35, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](36, PassengerDetailsPage_ng_container_1_ion_card_26_div_1_ion_col_36_Template, 4, 2, "ion-col", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](37, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](38, PassengerDetailsPage_ng_container_1_ion_card_26_div_1_ion_col_38_Template, 3, 0, "ion-col", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](39, PassengerDetailsPage_ng_container_1_ion_card_26_div_1_ion_row_39_Template, 10, 2, "ion-row", 1)(40, PassengerDetailsPage_ng_container_1_ion_card_26_div_1_div_40_Template, 3, 0, "div", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_19_0;
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    const seat_r43 = ctx_r41.$implicit;
    const i_r38 = ctx_r41.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("formGroup", ctx_r1.passengerForm[i_r38]);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", !ctx_r1.isLogin && i_r38 == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", i_r38 == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", i_r38 > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](seat_r43.seat_number);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", seat_r43.sex != "" && seat_r43.sex === "Ms");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("disabled", ctx_r1.isDisabled(i_r38, 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngClass", seat_r43.sex === "Mr" && !seat_r43.sexOptional ? "gender" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", "Male", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("disabled", ctx_r1.isDisabled(i_r38, 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngClass", seat_r43.sex === "Ms" && !seat_r43.sexOptional ? "gender" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", "Female", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.locale && ctx_r1.locale.passenger_details_config["Age"] && ctx_r1.locale.passenger_details_config["Age"] != "Hide");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.concessions_category && ctx_r1.concessions_category.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", (tmp_19_0 = ctx_r1.passengerForm.at(i_r38)) == null ? null : tmp_19_0.value == null ? null : tmp_19_0.value.isCard);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.metaData.idCardTypes && (ctx_r1.metaData.showCardTypes || ctx_r1.locale && ctx_r1.locale.passenger_details_config["Id Type"] && ctx_r1.locale.passenger_details_config["Id Type"] != "Hide"));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.metaData.showCardTypes || ctx_r1.locale && ctx_r1.locale.passenger_details_config["Id No"] && ctx_r1.locale.passenger_details_config["Id No"] != "Hide");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.metaData.showCardTypes && ctx_r1.passengerForm[i_r38].value.id_card_type == 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.metaData.idCardTypes && (ctx_r1.metaData.showCardTypes || ctx_r1.locale && ctx_r1.locale.passenger_details_config["Id Type"] && ctx_r1.locale.passenger_details_config["Id Type"] != "Hide"));
  }
}
function PassengerDetailsPage_ng_container_1_ion_card_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ion-card", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](1, PassengerDetailsPage_ng_container_1_ion_card_26_div_1_Template, 41, 19, "div", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.passengerForm.length === ctx_r1.onwardSeatDetails.length);
  }
}
function PassengerDetailsPage_ng_container_1_ion_card_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ion-card", 201)(1, "ion-item", 202)(2, "ion-label", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](3, "Copy Onward Details To Return");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](4, "ion-checkbox", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayListener"]("ngModelChange", function PassengerDetailsPage_ng_container_1_ion_card_27_Template_ion_checkbox_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r50);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayBindingSet"](ctx_r1.copyData, $event) || (ctx_r1.copyData = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("ionChange", function PassengerDetailsPage_ng_container_1_ion_card_27_Template_ion_checkbox_ionChange_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r50);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.copyDataToReturn());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.copyData);
  }
}
function PassengerDetailsPage_ng_container_1_div_28_ion_card_1_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1, "Primary Passenger");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
}
function PassengerDetailsPage_ng_container_1_div_28_ion_card_1_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1, "Co-Passenger");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
}
function PassengerDetailsPage_ng_container_1_div_28_ion_card_1_ion_row_32_ion_label_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ion-label", 209);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1, "Age");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
}
function PassengerDetailsPage_ng_container_1_div_28_ion_card_1_ion_row_32_ion_input_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ion-input", 210);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("keyup", function PassengerDetailsPage_ng_container_1_div_28_ion_card_1_ion_row_32_ion_input_4_Template_ion_input_keyup_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r53);
      const i_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2).index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.onAgeChange($event, i_r52, 2));
    })("ionBlur", function PassengerDetailsPage_ng_container_1_div_28_ion_card_1_ion_row_32_ion_input_4_Template_ion_input_ionBlur_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r53);
      const i_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2).index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.onAgeBlur($event, i_r52, 2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
}
function PassengerDetailsPage_ng_container_1_div_28_ion_card_1_ion_row_32_ion_input_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ion-input", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("keyup", function PassengerDetailsPage_ng_container_1_div_28_ion_card_1_ion_row_32_ion_input_5_Template_ion_input_keyup_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r54);
      const i_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2).index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.onAgeChange($event, i_r52, 2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
}
function PassengerDetailsPage_ng_container_1_div_28_ion_card_1_ion_row_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ion-row", 100)(1, "ion-col")(2, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](3, PassengerDetailsPage_ng_container_1_div_28_ion_card_1_ion_row_32_ion_label_3_Template, 2, 0, "ion-label", 206)(4, PassengerDetailsPage_ng_container_1_div_28_ion_card_1_ion_row_32_ion_input_4_Template, 1, 0, "ion-input", 207)(5, PassengerDetailsPage_ng_container_1_div_28_ion_card_1_ion_row_32_ion_input_5_Template, 1, 0, "ion-input", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.metaData == null ? null : ctx_r1.metaData.gst_tsrtc_enable);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.metaData == null ? null : ctx_r1.metaData.gst_tsrtc_enable);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", !(ctx_r1.metaData == null ? null : ctx_r1.metaData.gst_tsrtc_enable));
  }
}
function PassengerDetailsPage_ng_container_1_div_28_ion_card_1_ion_row_33_ion_select_option_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ion-select-option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r58 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpropertyInterpolate"]("value", item_r58.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](item_r58.type);
  }
}
function PassengerDetailsPage_ng_container_1_div_28_ion_card_1_ion_row_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ion-row")(1, "ion-col", 181)(2, "ion-select", 211);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("ionChange", function PassengerDetailsPage_ng_container_1_div_28_ion_card_1_ion_row_33_Template_ion_select_ionChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r55);
      const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      const seat_r57 = ctx_r55.$implicit;
      const i_r52 = ctx_r55.index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.onConcessionChange($event, i_r52, 2, seat_r57));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](3, PassengerDetailsPage_ng_container_1_div_28_ion_card_1_ion_row_33_ion_select_option_3_Template, 2, 2, "ion-select-option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](4, "ion-icon", 212);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngForOf", ctx_r1.concessions_category);
  }
}
function PassengerDetailsPage_ng_container_1_div_28_ion_card_1_ion_card_34_ion_col_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ion-col", 120)(1, "ion-item", 190);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function PassengerDetailsPage_ng_container_1_div_28_ion_card_1_ion_card_34_ion_col_8_Template_ion_item_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r60);
      const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
      const seat_r57 = ctx_r55.$implicit;
      const i_r52 = ctx_r55.index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.cardDetails(null, i_r52, 2, seat_r57));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](2, "ion-label", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](3, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](4, "ion-input", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("readonly", true);
  }
}
function PassengerDetailsPage_ng_container_1_div_28_ion_card_1_ion_card_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ion-card", 185)(1, "ion-grid")(2, "ion-row")(3, "ion-col", 186)(4, "ion-item")(5, "ion-label", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](6, "Card Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](7, "ion-input", 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("keyup", function PassengerDetailsPage_ng_container_1_div_28_ion_card_1_ion_card_34_Template_ion_input_keyup_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r59);
      const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      const seat_r57 = ctx_r55.$implicit;
      const i_r52 = ctx_r55.index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.cardDetails($event, i_r52, 2, seat_r57));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](8, PassengerDetailsPage_ng_container_1_div_28_ion_card_1_ion_card_34_ion_col_8_Template, 5, 1, "ion-col", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const i_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("size", ctx_r1.cardValidationRequiredStateReturn[i_r52] ? 6 : 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpropertyInterpolate1"]("id", "inputR", i_r52, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.cardValidationRequiredStateReturn[i_r52]);
  }
}
function PassengerDetailsPage_ng_container_1_div_28_ion_card_1_ion_col_36_ng_container_4_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ion-select-option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const key_r61 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpropertyInterpolate"]("value", ctx_r1.metaData.idCardTypes[key_r61]);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](key_r61);
  }
}
function PassengerDetailsPage_ng_container_1_div_28_ion_card_1_ion_col_36_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](1, "ion-select", 194)(2, "ion-select-option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](3, "Select Card");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](4, PassengerDetailsPage_ng_container_1_div_28_ion_card_1_ion_col_36_ng_container_4_ng_template_4_Template, 2, 2, "ng-template", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("value", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngForOf", ctx_r1.object.keys(ctx_r1.metaData.idCardTypes));
  }
}
function PassengerDetailsPage_ng_container_1_div_28_ion_card_1_ion_col_36_ng_container_5_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ion-select-option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const key_r62 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpropertyInterpolate"]("value", key_r62.card_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](key_r62.card_type);
  }
}
function PassengerDetailsPage_ng_container_1_div_28_ion_card_1_ion_col_36_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](1, "ion-select", 194)(2, "ion-select-option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](3, "Select Card");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](4, PassengerDetailsPage_ng_container_1_div_28_ion_card_1_ion_col_36_ng_container_5_ng_template_4_Template, 2, 2, "ng-template", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("value", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngForOf", ctx_r1.metaData.idCardTypes);
  }
}
function PassengerDetailsPage_ng_container_1_div_28_ion_card_1_ion_col_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ion-col", 76)(1, "ion-item", 40)(2, "ion-label", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](3, "Card Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](4, PassengerDetailsPage_ng_container_1_div_28_ion_card_1_ion_col_36_ng_container_4_Template, 5, 2, "ng-container", 1)(5, PassengerDetailsPage_ng_container_1_div_28_ion_card_1_ion_col_36_ng_container_5_Template, 5, 2, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", !ctx_r1.isArray(ctx_r1.metaData.idCardTypes));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.isArray(ctx_r1.metaData.idCardTypes));
  }
}
function PassengerDetailsPage_ng_container_1_div_28_ion_card_1_ion_col_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ion-col", 192)(1, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](2, "ion-input", 215);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }
}
function PassengerDetailsPage_ng_container_1_div_28_ion_card_1_ion_row_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ion-row")(1, "ion-col", 196)(2, "div")(3, "ion-item")(4, "ion-input", 216);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function PassengerDetailsPage_ng_container_1_div_28_ion_card_1_ion_row_39_Template_ion_input_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r63);
      const i_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.selectPassportDateR(1, ctx_r1.passengerFormR[i_r52].value.passport_issued_date, i_r52));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](5, "ion-col", 196)(6, "div")(7, "ion-item")(8, "ion-input", 217);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function PassengerDetailsPage_ng_container_1_div_28_ion_card_1_ion_row_39_Template_ion_input_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r63);
      const i_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.selectPassportDateR(2, ctx_r1.passengerFormR[i_r52].value.passport_issued_date, i_r52));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](9, "ion-col", 196)(10, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](11, "ion-input", 218);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("readonly", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("readonly", true);
  }
}
function PassengerDetailsPage_ng_container_1_div_28_ion_card_1_div_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 200)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2, " Enter valid ID details; otherwise, it will impact your journey or package. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }
}
function PassengerDetailsPage_ng_container_1_div_28_ion_card_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ion-card", 161)(1, "div", 52)(2, "div", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](3, "Traveller details (For return journey)");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](5, PassengerDetailsPage_ng_container_1_div_28_ion_card_1_span_5_Template, 2, 0, "span", 1)(6, PassengerDetailsPage_ng_container_1_div_28_ion_card_1_span_6_Template, 2, 0, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](7, "span", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](8, "Seat ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](9, "span", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](11, "ion-row")(12, "ion-col")(13, "ion-item")(14, "ion-input", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("keyup", function PassengerDetailsPage_ng_container_1_div_28_ion_card_1_Template_ion_input_keyup_14_listener($event) {
      const i_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r51).index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.onInputChange($event, i_r52, 2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](15, "ion-row", 170)(16, "ion-radio-group", 98)(17, "ion-row")(18, "ion-col")(19, "ion-item", 99)(20, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](21, " Gender ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](22, "ion-col")(23, "ion-item", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](24, "ion-radio", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](25, "ion-label", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](27, "ion-col")(28, "ion-item", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](29, "ion-radio", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](30, "ion-label", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](32, PassengerDetailsPage_ng_container_1_div_28_ion_card_1_ion_row_32_Template, 6, 3, "ion-row", 93)(33, PassengerDetailsPage_ng_container_1_div_28_ion_card_1_ion_row_33_Template, 5, 1, "ion-row", 1)(34, PassengerDetailsPage_ng_container_1_div_28_ion_card_1_ion_card_34_Template, 9, 4, "ion-card", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](35, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](36, PassengerDetailsPage_ng_container_1_div_28_ion_card_1_ion_col_36_Template, 6, 2, "ion-col", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](37, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](38, PassengerDetailsPage_ng_container_1_div_28_ion_card_1_ion_col_38_Template, 3, 0, "ion-col", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](39, PassengerDetailsPage_ng_container_1_div_28_ion_card_1_ion_row_39_Template, 12, 2, "ion-row", 1)(40, PassengerDetailsPage_ng_container_1_div_28_ion_card_1_div_40_Template, 3, 0, "div", 205);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const seat_r57 = ctx.$implicit;
    const i_r52 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("formGroup", ctx_r1.passengerFormR[i_r52]);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", i_r52 == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", i_r52 > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](seat_r57.seat_number);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("disabled", ctx_r1.isDisabled(i_r52, 2));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngClass", seat_r57.sex === "Mr" && !seat_r57.sexOptional ? "gender" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", "Male", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("disabled", ctx_r1.isDisabled(i_r52, 2));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngClass", seat_r57.sex === "Ms" && !seat_r57.sexOptional ? "gender" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", "Female", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.locale && ctx_r1.locale.passenger_details_config["Age"] && ctx_r1.locale.passenger_details_config["Age"] != "Hide");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.concessions_category && ctx_r1.concessions_category.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.passengerFormR[i_r52].value.isCard == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.metaData.idCardTypes && (ctx_r1.metaData.showCardTypes || ctx_r1.locale && ctx_r1.locale.passenger_details_config["Id Type"] && ctx_r1.locale.passenger_details_config["Id Type"] != "Hide"));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.metaData.showCardTypes || ctx_r1.locale && ctx_r1.locale.passenger_details_config["Id No"] && ctx_r1.locale.passenger_details_config["Id No"] != "Hide");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.metaData.showCardTypes && ctx_r1.passengerFormR[i_r52].value.id_card_type == 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.metaData.idCardTypes && (ctx_r1.metaData.showCardTypes || ctx_r1.locale && ctx_r1.locale.passenger_details_config["Id Type"] && ctx_r1.locale.passenger_details_config["Id Type"] != "Hide"));
  }
}
function PassengerDetailsPage_ng_container_1_div_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](1, PassengerDetailsPage_ng_container_1_div_28_ion_card_1_Template, 41, 17, "ion-card", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngForOf", ctx_r1.returnSeatDetails);
  }
}
function PassengerDetailsPage_ng_container_1_ng_container_29_ion_card_1_ion_item_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ion-item", 223)(1, "ion-input", 224);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("ionInput", function PassengerDetailsPage_ng_container_1_ng_container_29_ion_card_1_ion_item_5_Template_ion_input_ionInput_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r65);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.onchangeStateId($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayListener"]("ngModelChange", function PassengerDetailsPage_ng_container_1_ng_container_29_ion_card_1_ion_item_5_Template_ion_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r65);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayBindingSet"](ctx_r1.stateId, $event) || (ctx_r1.stateId = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.stateId);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpureFunction0"](2, _c1));
  }
}
function PassengerDetailsPage_ng_container_1_ng_container_29_ion_card_1_ion_item_6_ion_select_option_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ion-select-option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r67 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpropertyInterpolate"]("value", item_r67.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"]("", item_r67.name, " ");
  }
}
function PassengerDetailsPage_ng_container_1_ng_container_29_ion_card_1_ion_item_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ion-item", 223)(1, "ion-select", 225);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("ionChange", function PassengerDetailsPage_ng_container_1_ng_container_29_ion_card_1_ion_item_6_Template_ion_select_ionChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r66);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.onchangeId($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayListener"]("ngModelChange", function PassengerDetailsPage_ng_container_1_ng_container_29_ion_card_1_ion_item_6_Template_ion_select_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r66);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayBindingSet"](ctx_r1.stateType, $event) || (ctx_r1.stateType = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](2, PassengerDetailsPage_ng_container_1_ng_container_29_ion_card_1_ion_item_6_ion_select_option_2_Template, 2, 2, "ion-select-option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpropertyInterpolate"]("value", ctx_r1.stateGetName);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.stateType);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpureFunction0"](5, _c1))("interfaceOptions", ctx_r1.stateOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngForOf", ctx_r1.state);
  }
}
function PassengerDetailsPage_ng_container_1_ng_container_29_ion_card_1_ion_item_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ion-item", 223)(1, "ion-input", 226);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("keyup", function PassengerDetailsPage_ng_container_1_ng_container_29_ion_card_1_ion_item_7_Template_ion_input_keyup_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r68);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.onchangeCityId($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayListener"]("ngModelChange", function PassengerDetailsPage_ng_container_1_ng_container_29_ion_card_1_ion_item_7_Template_ion_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r68);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayBindingSet"](ctx_r1.cityId, $event) || (ctx_r1.cityId = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpropertyInterpolate"]("value", ctx_r1.cityName ? ctx_r1.cityName : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.cityId);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpureFunction0"](3, _c1));
  }
}
function PassengerDetailsPage_ng_container_1_ng_container_29_ion_card_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ion-card", 220)(1, "div", 104)(2, "p", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](3, "Please Enter your residential Location Details.");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](4, "ion-icon", 221);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function PassengerDetailsPage_ng_container_1_ng_container_29_ion_card_1_Template_ion_icon_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r64);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.showWalletDets = !ctx_r1.showWalletDets);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](5, PassengerDetailsPage_ng_container_1_ng_container_29_ion_card_1_ion_item_5_Template, 2, 3, "ion-item", 222)(6, PassengerDetailsPage_ng_container_1_ng_container_29_ion_card_1_ion_item_6_Template, 3, 6, "ion-item", 222)(7, PassengerDetailsPage_ng_container_1_ng_container_29_ion_card_1_ion_item_7_Template, 2, 4, "ion-item", 222);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngClass", ctx_r1.businessTravel ? "businessTravelclick" : "businessTravelunclick");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", (ctx_r1.gstInfoConfig == null ? null : ctx_r1.gstInfoConfig.pincode) && ctx_r1.gstInfoConfig.pincode == "show" || ctx_r1.gstInfoConfig == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", (ctx_r1.gstInfoConfig == null ? null : ctx_r1.gstInfoConfig.state) && ctx_r1.gstInfoConfig.state == "show" || ctx_r1.gstInfoConfig == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", (ctx_r1.gstInfoConfig == null ? null : ctx_r1.gstInfoConfig.city) && ctx_r1.gstInfoConfig.city == "show" || ctx_r1.gstInfoConfig == null);
  }
}
function PassengerDetailsPage_ng_container_1_ng_container_29_ion_card_2_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r70 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div")(1, "ion-item")(2, "ion-input", 228, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("keyup", function PassengerDetailsPage_ng_container_1_ng_container_29_ion_card_2_div_5_Template_ion_input_keyup_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r70);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.onchangeGstId($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayListener"]("ngModelChange", function PassengerDetailsPage_ng_container_1_ng_container_29_ion_card_2_div_5_Template_ion_input_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r70);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayBindingSet"](ctx_r1.gstId, $event) || (ctx_r1.gstId = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](4, "ion-item")(5, "ion-input", 229);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayListener"]("ngModelChange", function PassengerDetailsPage_ng_container_1_ng_container_29_ion_card_2_div_5_Template_ion_input_ngModelChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r70);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayBindingSet"](ctx_r1.gstName, $event) || (ctx_r1.gstName = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.gstId);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpureFunction0"](4, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.gstName);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpureFunction0"](5, _c1));
  }
}
function PassengerDetailsPage_ng_container_1_ng_container_29_ion_card_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ion-card", 220)(1, "ion-item", 202)(2, "ion-label", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](3, "I am booking for business travel");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](4, "ion-checkbox", 227);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("ionChange", function PassengerDetailsPage_ng_container_1_ng_container_29_ion_card_2_Template_ion_checkbox_ionChange_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r69);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.gstInfo());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayListener"]("ngModelChange", function PassengerDetailsPage_ng_container_1_ng_container_29_ion_card_2_Template_ion_checkbox_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r69);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayBindingSet"](ctx_r1.businessTravel, $event) || (ctx_r1.businessTravel = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](5, PassengerDetailsPage_ng_container_1_ng_container_29_ion_card_2_div_5_Template, 6, 6, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngClass", ctx_r1.businessTravel ? "businessTravelclick" : "businessTravelunclick");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.businessTravel);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpureFunction0"](4, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.businessTravel);
  }
}
function PassengerDetailsPage_ng_container_1_ng_container_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](1, PassengerDetailsPage_ng_container_1_ng_container_29_ion_card_1_Template, 8, 4, "ion-card", 219)(2, PassengerDetailsPage_ng_container_1_ng_container_29_ion_card_2_Template, 6, 5, "ion-card", 219);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", !ctx_r1.commonService.isAbcApp() && ctx_r1.commonStorage.getItem("isServiceTaxApplicable") && ctx_r1.showPincodeCard);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", !ctx_r1.commonService.isAbcApp() && ctx_r1.commonStorage.getItem("isServiceTaxApplicable"));
  }
}
function PassengerDetailsPage_ng_container_1_span_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "span", 230);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1, "(Excluding taxes)");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
}
function PassengerDetailsPage_ng_container_1_div_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r71 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 118)(1, "div", 119)(2, "ion-row")(3, "ion-col", 120)(4, "p", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](5, "Important Note!!");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](6, "ion-col", 120)(7, "p", 231);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function PassengerDetailsPage_ng_container_1_div_42_Template_p_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r71);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.showWalletDets = !ctx_r1.showWalletDets);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](8, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](9, "div", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](10, " As per the Govt new GST Rule - 46 Passengers are Mandated to provide their residential State, City and Pin Code details for the Bookings. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
  }
}
function PassengerDetailsPage_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](1, "ion-header")(2, "ion-toolbar", 124)(3, "ion-buttons", 5)(4, "ion-back-button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function PassengerDetailsPage_ng_container_1_Template_ion_back_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r32);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.goBack());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](5, "ion-title", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](7, PassengerDetailsPage_ng_container_1_span_7_Template, 2, 0, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](8, "ion-content", 126)(9, "form", 8)(10, "ion-card", 127)(11, "div", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](12, "Contact details");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](13, "div", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](14, " Your ticket and bus details will be sent here ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](15, PassengerDetailsPage_ng_container_1_ion_item_15_Template, 2, 0, "ion-item", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](16, "ion-row", 130)(17, "ion-col", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](18, PassengerDetailsPage_ng_container_1_ion_input_18_Template, 1, 1, "ion-input", 14)(19, PassengerDetailsPage_ng_container_1_div_19_Template, 4, 1, "div", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](20, "ion-col", 133)(21, "ion-input", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("keyup", function PassengerDetailsPage_ng_container_1_Template_ion_input_keyup_21_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r32);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.onPhoneChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](22, PassengerDetailsPage_ng_container_1_p_22_Template, 2, 0, "p", 135)(23, PassengerDetailsPage_ng_container_1_hr_23_Template, 1, 0, "hr", 136)(24, PassengerDetailsPage_ng_container_1_ion_row_24_Template, 7, 3, "ion-row", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](25, PassengerDetailsPage_ng_container_1_ion_card_25_Template, 5, 0, "ion-card", 137)(26, PassengerDetailsPage_ng_container_1_ion_card_26_Template, 2, 1, "ion-card", 138)(27, PassengerDetailsPage_ng_container_1_ion_card_27_Template, 5, 1, "ion-card", 139)(28, PassengerDetailsPage_ng_container_1_div_28_Template, 2, 1, "div", 1)(29, PassengerDetailsPage_ng_container_1_ng_container_29_Template, 3, 2, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](30, "div", 140)(31, "div", 141)(32, "span", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](34, "ion-row", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](35, PassengerDetailsPage_ng_container_1_span_35_Template, 2, 0, "span", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](36, "span", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function PassengerDetailsPage_ng_container_1_Template_span_click_36_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r32);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.callFarebreakup());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](37, "View Breakup");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](38, "div", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function PassengerDetailsPage_ng_container_1_Template_div_click_38_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r32);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.submitPassengerDetails());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](39, "div", 147)(40, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](41, "PROCEED");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](42, PassengerDetailsPage_ng_container_1_div_42_Template, 11, 0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate2"]("", ctx_r1.commaSeparate(ctx_r1.globalData.SEARCH_DATA.originCity.name), " - ", ctx_r1.commaSeparate(ctx_r1.globalData.SEARCH_DATA.destCity.name), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.isReturn);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("formGroup", ctx_r1.contactForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.locale && ctx_r1.locale.passenger_details_config["Email"] && ctx_r1.locale.passenger_details_config["Email"] != "Hide");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.metaData.show_countries_isd_codes_selection);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", !ctx_r1.metaData.show_countries_isd_codes_selection);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.selected_Country_code != "+91");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", !ctx_r1.metaData.show_countries_isd_codes_selection);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.metaData && ctx_r1.metaData.isWhatsapp);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.isLogin);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngForOf", ctx_r1.onwardSeatDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.isReturn);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.isReturn);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", !(ctx_r1.metaData == null ? null : ctx_r1.metaData.gst_tsrtc_enable));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate2"](" ", ctx_r1.currencySym, " ", ctx_r1.payAmount(ctx_r1.globalData.RESERVATION_DATA.totalBookingAmount + (ctx_r1.globalData.RESERVATION_DATA_RETURN && ctx_r1.globalData.RESERVATION_DATA_RETURN.totalBookingAmount ? ctx_r1.globalData.RESERVATION_DATA_RETURN.totalBookingAmount : 0)), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", !ctx_r1.commonService.isAbcApp());
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.showWalletDets);
  }
}
function PassengerDetailsPage_ng_container_2_span_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" (", ctx_r1.reservationData.next_day_service, ") ");
  }
}
function PassengerDetailsPage_ng_container_2_div_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](0, "div", 269);
  }
}
function PassengerDetailsPage_ng_container_2_ion_row_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ion-row")(1, "ion-col", 235)(2, "div", 236);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](4, "ion-icon", 237);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](5, "div", 236);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](ctx_r1.commaSeparate(ctx_r1.globalData.SEARCH_DATA.destCity.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](ctx_r1.commaSeparate(ctx_r1.globalData.SEARCH_DATA.originCity.name));
  }
}
function PassengerDetailsPage_ng_container_2_ion_row_40_span_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" (", ctx_r1.reservationDataReturn.next_day_service, ") ");
  }
}
function PassengerDetailsPage_ng_container_2_ion_row_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ion-row", 238)(1, "ion-col", 239)(2, "div", 240)(3, "span", 241);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](5, "p", 242);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](7, "ion-col", 243)(8, "p", 244);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](10, PassengerDetailsPage_ng_container_2_ion_row_40_span_10_Template, 2, 1, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](11, "ion-col", 239)(12, "div", 245)(13, "span", 241);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](15, "p", 242);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](ctx_r1.reservationDataReturn.boardingStage.time);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](ctx_r1.getFormatDate(ctx_r1.reservationDataReturn.boardingStage.travel_date));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", ctx_r1.mainTimeDiffrenceReturn, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.reservationDataReturn.next_day_service);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](ctx_r1.reservationDataReturn.droppingStage.time);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](ctx_r1.getFormatDate(ctx_r1.reservationDataReturn.droppingStage.travel_date));
  }
}
function PassengerDetailsPage_ng_container_2_span_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1, "Passenger Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
}
function PassengerDetailsPage_ng_container_2_span_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "span", 270);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1, "Passenger Details (For Onward Journey)");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
}
function PassengerDetailsPage_ng_container_2_div_48_ion_col_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r75 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ion-col", 120)(1, "ion-item", 280)(2, "ion-input", 281);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("input", function PassengerDetailsPage_ng_container_2_div_48_ion_col_15_Template_ion_input_input_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r75);
      const i_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.onAgeChange($event, i_r74, 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
  }
}
function PassengerDetailsPage_ng_container_2_div_48_ion_col_25_ng_container_4_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ion-select-option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const key_r77 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpropertyInterpolate"]("value", ctx_r1.metaData.idCardTypes[key_r77]);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](key_r77);
  }
}
function PassengerDetailsPage_ng_container_2_div_48_ion_col_25_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](1, "ion-select", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](2, PassengerDetailsPage_ng_container_2_div_48_ion_col_25_ng_container_4_ng_template_2_Template, 2, 2, "ng-template", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngForOf", ctx_r1.object.keys(ctx_r1.metaData.idCardTypes));
  }
}
function PassengerDetailsPage_ng_container_2_div_48_ion_col_25_ng_container_5_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ion-select-option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const key_r78 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpropertyInterpolate"]("value", key_r78.card_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](key_r78.card_type);
  }
}
function PassengerDetailsPage_ng_container_2_div_48_ion_col_25_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](1, "ion-select", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](2, PassengerDetailsPage_ng_container_2_div_48_ion_col_25_ng_container_5_ng_template_2_Template, 2, 2, "ng-template", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngForOf", ctx_r1.metaData.idCardTypes);
  }
}
function PassengerDetailsPage_ng_container_2_div_48_ion_col_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ion-col", 181)(1, "ion-item", 282)(2, "ion-label", 283);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](3, "Card Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](4, PassengerDetailsPage_ng_container_2_div_48_ion_col_25_ng_container_4_Template, 3, 1, "ng-container", 1)(5, PassengerDetailsPage_ng_container_2_div_48_ion_col_25_ng_container_5_Template, 3, 1, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", !ctx_r1.isArray(ctx_r1.metaData.idCardTypes));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.isArray(ctx_r1.metaData.idCardTypes));
  }
}
function PassengerDetailsPage_ng_container_2_div_48_ion_col_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ion-col", 181)(1, "ion-item", 272);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](2, "ion-input", 284);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }
}
function PassengerDetailsPage_ng_container_2_div_48_ion_row_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r79 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ion-row")(1, "ion-col", 239)(2, "ion-item", 272)(3, "ion-input", 285);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function PassengerDetailsPage_ng_container_2_div_48_ion_row_28_Template_ion_input_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r79);
      const i_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.selectPassportDate(1, ctx_r1.passengerForm[i_r74].value.passport_issued_date, i_r74));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](4, "ion-col", 239)(5, "ion-item", 272)(6, "ion-input", 286);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function PassengerDetailsPage_ng_container_2_div_48_ion_row_28_Template_ion_input_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r79);
      const i_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.selectPassportDate(2, ctx_r1.passengerForm[i_r74].value.passport_expiry_date, i_r74));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](7, "ion-col", 239)(8, "ion-item", 272);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](9, "ion-input", 287);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("readonly", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("readonly", true);
  }
}
function PassengerDetailsPage_ng_container_2_div_48_div_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 288)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2, "Enter valid ID details; otherwise, it will impact your journey or package.");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }
}
function PassengerDetailsPage_ng_container_2_div_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div")(1, "div", 52)(2, "ion-row")(3, "ion-col", 181)(4, "div", 271)(5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](7, " - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](10, "ion-row")(11, "ion-col", 181)(12, "ion-item", 272)(13, "ion-input", 273);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("input", function PassengerDetailsPage_ng_container_2_div_48_Template_ion_input_input_13_listener($event) {
      const i_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r73).index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.onInputChange($event, i_r74, 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](14, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](15, PassengerDetailsPage_ng_container_2_div_48_ion_col_15_Template, 3, 0, "ion-col", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](16, "ion-col", 274)(17, "ion-segment", 275);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayListener"]("ngModelChange", function PassengerDetailsPage_ng_container_2_div_48_Template_ion_segment_ngModelChange_17_listener($event) {
      const seat_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r73).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayBindingSet"](seat_r76.sex, $event) || (seat_r76.sex = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](18, "ion-segment-button", 276)(19, "ion-label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](21, "ion-segment-button", 277)(22, "ion-label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](24, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](25, PassengerDetailsPage_ng_container_2_div_48_ion_col_25_Template, 6, 2, "ion-col", 278);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](26, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](27, PassengerDetailsPage_ng_container_2_div_48_ion_col_27_Template, 3, 0, "ion-col", 278);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](28, PassengerDetailsPage_ng_container_2_div_48_ion_row_28_Template, 10, 2, "ion-row", 1)(29, PassengerDetailsPage_ng_container_2_div_48_div_29_Template, 3, 0, "div", 279);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const seat_r76 = ctx.$implicit;
    const i_r74 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("formGroup", ctx_r1.passengerForm[i_r74]);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"]("Passenger ", i_r74 + 1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"]("Seat ", seat_r76.seat_number, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.locale && ctx_r1.locale.passenger_details_config["Age"] && ctx_r1.locale.passenger_details_config["Age"] != "Hide");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayProperty"]("ngModel", seat_r76.sex);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("disabled", !seat_r76.sexOptional ? true : false);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngClass", seat_r76.sex === "Mr" && !seat_r76.sexOptional ? "ourbus_gender" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"]("Male");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("disabled", !seat_r76.sexOptional ? true : false);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngClass", seat_r76.sex === "Ms" && !seat_r76.sexOptional ? "ourbus_gender" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"]("Female");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.metaData.idCardTypes && (ctx_r1.metaData.showCardTypes || ctx_r1.locale && ctx_r1.locale.passenger_details_config["Id Type"] && ctx_r1.locale.passenger_details_config["Id Type"] != "Hide"));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.metaData.showCardTypes || ctx_r1.locale && ctx_r1.locale.passenger_details_config["Id No"] && ctx_r1.locale.passenger_details_config["Id No"] != "Hide");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.metaData.showCardTypes && ctx_r1.passengerForm[i_r74].value.id_card_type == 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.metaData.idCardTypes && (ctx_r1.metaData.showCardTypes || ctx_r1.locale && ctx_r1.locale.passenger_details_config["Id Type"] && ctx_r1.locale.passenger_details_config["Id Type"] != "Hide"));
  }
}
function PassengerDetailsPage_ng_container_2_div_49_div_7_ion_col_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r83 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ion-col", 120)(1, "ion-item", 272)(2, "ion-input", 281);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("input", function PassengerDetailsPage_ng_container_2_div_49_div_7_ion_col_15_Template_ion_input_input_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r83);
      const i_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.onAgeChange($event, i_r82, 2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
  }
}
function PassengerDetailsPage_ng_container_2_div_49_div_7_ion_col_25_ng_container_4_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ion-select-option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const key_r84 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpropertyInterpolate"]("value", ctx_r1.metaData.idCardTypes[key_r84]);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](key_r84);
  }
}
function PassengerDetailsPage_ng_container_2_div_49_div_7_ion_col_25_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](1, "ion-select", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](2, PassengerDetailsPage_ng_container_2_div_49_div_7_ion_col_25_ng_container_4_ng_template_2_Template, 2, 2, "ng-template", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngForOf", ctx_r1.object.keys(ctx_r1.metaData.idCardTypes));
  }
}
function PassengerDetailsPage_ng_container_2_div_49_div_7_ion_col_25_ng_container_5_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ion-select-option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const key_r85 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpropertyInterpolate"]("value", key_r85.card_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](key_r85.card_type);
  }
}
function PassengerDetailsPage_ng_container_2_div_49_div_7_ion_col_25_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](1, "ion-select", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](2, PassengerDetailsPage_ng_container_2_div_49_div_7_ion_col_25_ng_container_5_ng_template_2_Template, 2, 2, "ng-template", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngForOf", ctx_r1.metaData.idCardTypes);
  }
}
function PassengerDetailsPage_ng_container_2_div_49_div_7_ion_col_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ion-col", 181)(1, "ion-item", 296)(2, "ion-label", 283);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](3, "Card Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](4, PassengerDetailsPage_ng_container_2_div_49_div_7_ion_col_25_ng_container_4_Template, 3, 1, "ng-container", 1)(5, PassengerDetailsPage_ng_container_2_div_49_div_7_ion_col_25_ng_container_5_Template, 3, 1, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", !ctx_r1.isArray(ctx_r1.metaData.idCardTypes));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.isArray(ctx_r1.metaData.idCardTypes));
  }
}
function PassengerDetailsPage_ng_container_2_div_49_div_7_ion_col_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ion-col", 181)(1, "ion-item", 272);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](2, "ion-input", 284);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }
}
function PassengerDetailsPage_ng_container_2_div_49_div_7_ion_row_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r86 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ion-row")(1, "ion-col", 239)(2, "ion-item", 272)(3, "ion-input", 297);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function PassengerDetailsPage_ng_container_2_div_49_div_7_ion_row_28_Template_ion_input_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r86);
      const i_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.selectPassportDateR(1, ctx_r1.passengerFormR[i_r82].value.passport_issued_date, i_r82));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](4, "ion-col", 239)(5, "ion-item", 272)(6, "ion-input", 298);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function PassengerDetailsPage_ng_container_2_div_49_div_7_ion_row_28_Template_ion_input_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r86);
      const i_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.selectPassportDateR(2, ctx_r1.passengerFormR[i_r82].value.passport_issued_date, i_r82));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](7, "ion-col", 239)(8, "ion-item", 272);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](9, "ion-input", 299);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("readonly", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("readonly", true);
  }
}
function PassengerDetailsPage_ng_container_2_div_49_div_7_div_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 288)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2, " Enter valid ID details; otherwise, it will impact your journey or package. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }
}
function PassengerDetailsPage_ng_container_2_div_49_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r81 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 292)(1, "div", 52)(2, "ion-row")(3, "ion-col", 181)(4, "div", 271)(5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](7, " - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](10, "ion-row")(11, "ion-col", 181)(12, "ion-item", 272)(13, "ion-input", 293);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("input", function PassengerDetailsPage_ng_container_2_div_49_div_7_Template_ion_input_input_13_listener($event) {
      const i_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r81).index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.onInputChange($event, i_r82, 2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](14, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](15, PassengerDetailsPage_ng_container_2_div_49_div_7_ion_col_15_Template, 3, 0, "ion-col", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](16, "ion-col", 274)(17, "ion-segment", 294)(18, "ion-segment-button", 276)(19, "ion-label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](21, "ion-segment-button", 277)(22, "ion-label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](24, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](25, PassengerDetailsPage_ng_container_2_div_49_div_7_ion_col_25_Template, 6, 2, "ion-col", 278);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](26, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](27, PassengerDetailsPage_ng_container_2_div_49_div_7_ion_col_27_Template, 3, 0, "ion-col", 278);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](28, PassengerDetailsPage_ng_container_2_div_49_div_7_ion_row_28_Template, 10, 2, "ion-row", 1)(29, PassengerDetailsPage_ng_container_2_div_49_div_7_div_29_Template, 3, 0, "div", 295);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const seat_r87 = ctx.$implicit;
    const i_r82 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("formGroup", ctx_r1.passengerFormR[i_r82]);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"]("Passenger ", i_r82 + 1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"]("Seat ", seat_r87.seat_number, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.locale && ctx_r1.locale.passenger_details_config["Age"] && ctx_r1.locale.passenger_details_config["Age"] != "Hide");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("disabled", !seat_r87.sexOptional ? true : false);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngClass", seat_r87.sex === "Mr" && !seat_r87.sexOptional ? "ourbus_gender" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"]("Male");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("disabled", !seat_r87.sexOptional ? true : false);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngClass", seat_r87.sex === "Ms" && !seat_r87.sexOptional ? "ourbus_gender" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"]("Female");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.metaData.idCardTypes && (ctx_r1.metaData.showCardTypes || ctx_r1.locale && ctx_r1.locale.passenger_details_config["Id Type"] && ctx_r1.locale.passenger_details_config["Id Type"] != "Hide"));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.metaData.showCardTypes || ctx_r1.locale && ctx_r1.locale.passenger_details_config["Id No"] && ctx_r1.locale.passenger_details_config["Id No"] != "Hide");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.metaData.showCardTypes && ctx_r1.passengerFormR[i_r82].value.id_card_type == 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.metaData.idCardTypes && (ctx_r1.metaData.showCardTypes || ctx_r1.locale && ctx_r1.locale.passenger_details_config["Id Type"] && ctx_r1.locale.passenger_details_config["Id Type"] != "Hide"));
  }
}
function PassengerDetailsPage_ng_container_2_div_49_Template(rf, ctx) {
  if (rf & 1) {
    const _r80 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div")(1, "ion-item", 202)(2, "ion-label", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](3, "Copy Onward Details To Return");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](4, "ion-checkbox", 289);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayListener"]("ngModelChange", function PassengerDetailsPage_ng_container_2_div_49_Template_ion_checkbox_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r80);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayBindingSet"](ctx_r1.copyData, $event) || (ctx_r1.copyData = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("ionChange", function PassengerDetailsPage_ng_container_2_div_49_Template_ion_checkbox_ionChange_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r80);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.copyDataToReturn());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](5, "p", 290);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](6, "Passenger details (For Return Journey)");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](7, PassengerDetailsPage_ng_container_2_div_49_div_7_Template, 30, 14, "div", 291);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.copyData);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngForOf", ctx_r1.returnSeatDetails);
  }
}
function PassengerDetailsPage_ng_container_2_ion_item_60_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ion-item", 257);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](1, "ion-input", 300);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
}
function PassengerDetailsPage_ng_container_2_div_63_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div")(1, "ion-item", 301)(2, "ion-label", 302);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](4, "ion-input", 303);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", ctx_r1.selectedCountry.flag, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("readonly", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](ctx_r1.selectedCountry.dialCode);
  }
}
function PassengerDetailsPage_ng_container_2_div_64_ion_item_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r88 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ion-item", 305)(1, "ion-label", 306);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "ion-input", 307);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function PassengerDetailsPage_ng_container_2_div_64_ion_item_1_Template_ion_input_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r88);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.selectCountry_code());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", ctx_r1.selectedCountry.flag, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngModel", ctx_r1.selectedCountry.dialCode);
  }
}
function PassengerDetailsPage_ng_container_2_div_64_ion_item_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r89 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ion-item", 305)(1, "ion-label", 306);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "ion-input", 308);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function PassengerDetailsPage_ng_container_2_div_64_ion_item_2_Template_ion_input_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r89);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.selectCountry_code());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayListener"]("ngModelChange", function PassengerDetailsPage_ng_container_2_div_64_ion_item_2_Template_ion_input_ngModelChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r89);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayBindingSet"](ctx_r1.dialCodeSelected, $event) || (ctx_r1.dialCodeSelected = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", ctx_r1.flagSelected, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.dialCodeSelected);
  }
}
function PassengerDetailsPage_ng_container_2_div_64_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](1, PassengerDetailsPage_ng_container_2_div_64_ion_item_1_Template, 4, 2, "ion-item", 304)(2, PassengerDetailsPage_ng_container_2_div_64_ion_item_2_Template, 4, 2, "ion-item", 304);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.selectedCountry);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", !ctx_r1.selectedCountry);
  }
}
function PassengerDetailsPage_ng_container_2_ion_row_69_Template(rf, ctx) {
  if (rf & 1) {
    const _r90 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ion-row", 309)(1, "ion-col", 310)(2, "ion-checkbox", 311);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function PassengerDetailsPage_ng_container_2_ion_row_69_Template_ion_checkbox_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r90);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.onChangeWhatsappSwitch());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayListener"]("ngModelChange", function PassengerDetailsPage_ng_container_2_ion_row_69_Template_ion_checkbox_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r90);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayBindingSet"](ctx_r1.isWPSwitchOn, $event) || (ctx_r1.isWPSwitchOn = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "ion-col", 312);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](4, "Share booking details and updates on Whatsapp");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.isWPSwitchOn);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpureFunction0"](2, _c1));
  }
}
function PassengerDetailsPage_ng_container_2_ion_card_70_ion_item_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r92 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ion-item", 257)(1, "ion-input", 316);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("ionInput", function PassengerDetailsPage_ng_container_2_ion_card_70_ion_item_7_Template_ion_input_ionInput_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r92);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.onchangeStateId($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayListener"]("ngModelChange", function PassengerDetailsPage_ng_container_2_ion_card_70_ion_item_7_Template_ion_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r92);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayBindingSet"](ctx_r1.stateId, $event) || (ctx_r1.stateId = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.stateId);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpureFunction0"](2, _c1));
  }
}
function PassengerDetailsPage_ng_container_2_ion_card_70_ion_item_10_ion_select_option_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ion-select-option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r94 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpropertyInterpolate"]("value", item_r94.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"]("", item_r94.name, " ");
  }
}
function PassengerDetailsPage_ng_container_2_ion_card_70_ion_item_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r93 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ion-item", 272)(1, "ion-select", 317);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("ionChange", function PassengerDetailsPage_ng_container_2_ion_card_70_ion_item_10_Template_ion_select_ionChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r93);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.onchangeId($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayListener"]("ngModelChange", function PassengerDetailsPage_ng_container_2_ion_card_70_ion_item_10_Template_ion_select_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r93);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayBindingSet"](ctx_r1.stateType, $event) || (ctx_r1.stateType = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](2, PassengerDetailsPage_ng_container_2_ion_card_70_ion_item_10_ion_select_option_2_Template, 2, 2, "ion-select-option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpropertyInterpolate"]("value", ctx_r1.stateGetName);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("disabled", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.stateType);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpureFunction0"](5, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngForOf", ctx_r1.state);
  }
}
function PassengerDetailsPage_ng_container_2_ion_card_70_ion_item_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r95 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ion-item", 257)(1, "ion-input", 318);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("keyup", function PassengerDetailsPage_ng_container_2_ion_card_70_ion_item_13_Template_ion_input_keyup_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r95);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.onchangeCityId($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayListener"]("ngModelChange", function PassengerDetailsPage_ng_container_2_ion_card_70_ion_item_13_Template_ion_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r95);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayBindingSet"](ctx_r1.cityId, $event) || (ctx_r1.cityId = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpropertyInterpolate"]("value", ctx_r1.cityName ? ctx_r1.cityName : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("disabled", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.cityId);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpureFunction0"](4, _c1));
  }
}
function PassengerDetailsPage_ng_container_2_ion_card_70_Template(rf, ctx) {
  if (rf & 1) {
    const _r91 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ion-card", 234)(1, "div", 104)(2, "p", 313);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](3, "Please enter your residential location details.");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](4, "ion-icon", 314);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function PassengerDetailsPage_ng_container_2_ion_card_70_Template_ion_icon_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r91);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.showWalletDets = !ctx_r1.showWalletDets);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](5, "ion-row")(6, "ion-col");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](7, PassengerDetailsPage_ng_container_2_ion_card_70_ion_item_7_Template, 2, 3, "ion-item", 254);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](8, "ion-row")(9, "ion-col");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](10, PassengerDetailsPage_ng_container_2_ion_card_70_ion_item_10_Template, 3, 6, "ion-item", 315);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](11, "ion-row")(12, "ion-col");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](13, PassengerDetailsPage_ng_container_2_ion_card_70_ion_item_13_Template, 2, 5, "ion-item", 254);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", (ctx_r1.gstInfoConfig == null ? null : ctx_r1.gstInfoConfig.pincode) && ctx_r1.gstInfoConfig.pincode == "show" || ctx_r1.gstInfoConfig == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", (ctx_r1.gstInfoConfig == null ? null : ctx_r1.gstInfoConfig.state) && ctx_r1.gstInfoConfig.state == "show" || ctx_r1.gstInfoConfig == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", (ctx_r1.gstInfoConfig == null ? null : ctx_r1.gstInfoConfig.city) && ctx_r1.gstInfoConfig.city == "show" || ctx_r1.gstInfoConfig == null);
  }
}
function PassengerDetailsPage_ng_container_2_ion_card_71_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r97 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 323)(1, "ion-item", 324)(2, "ion-input", 325, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("keyup", function PassengerDetailsPage_ng_container_2_ion_card_71_div_5_Template_ion_input_keyup_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r97);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.onchangeGstId($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayListener"]("ngModelChange", function PassengerDetailsPage_ng_container_2_ion_card_71_div_5_Template_ion_input_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r97);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayBindingSet"](ctx_r1.gstId, $event) || (ctx_r1.gstId = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](4, "ion-item", 324)(5, "ion-input", 326);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayListener"]("ngModelChange", function PassengerDetailsPage_ng_container_2_ion_card_71_div_5_Template_ion_input_ngModelChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r97);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayBindingSet"](ctx_r1.gstName, $event) || (ctx_r1.gstName = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.gstId);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpureFunction0"](4, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.gstName);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpureFunction0"](5, _c1));
  }
}
function PassengerDetailsPage_ng_container_2_ion_card_71_Template(rf, ctx) {
  if (rf & 1) {
    const _r96 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ion-card", 234)(1, "ion-item", 319)(2, "div", 320);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](3, "Enter GST Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](4, "ion-toggle", 321);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayListener"]("ngModelChange", function PassengerDetailsPage_ng_container_2_ion_card_71_Template_ion_toggle_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r96);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayBindingSet"](ctx_r1.businessTravel, $event) || (ctx_r1.businessTravel = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("ionChange", function PassengerDetailsPage_ng_container_2_ion_card_71_Template_ion_toggle_ionChange_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r96);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.gstInfo());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](5, PassengerDetailsPage_ng_container_2_ion_card_71_div_5_Template, 6, 6, "div", 322);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.businessTravel);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpureFunction0"](3, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.businessTravel);
  }
}
function PassengerDetailsPage_ng_container_2_ion_card_72_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r99 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 323)(1, "ion-item", 324)(2, "ion-input", 325, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("keyup", function PassengerDetailsPage_ng_container_2_ion_card_72_div_5_Template_ion_input_keyup_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r99);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.onchangeGstId($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayListener"]("ngModelChange", function PassengerDetailsPage_ng_container_2_ion_card_72_div_5_Template_ion_input_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r99);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayBindingSet"](ctx_r1.gstId, $event) || (ctx_r1.gstId = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](4, "ion-item", 324)(5, "ion-input", 326);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayListener"]("ngModelChange", function PassengerDetailsPage_ng_container_2_ion_card_72_div_5_Template_ion_input_ngModelChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r99);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayBindingSet"](ctx_r1.gstName, $event) || (ctx_r1.gstName = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.gstId);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpureFunction0"](4, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.gstName);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpureFunction0"](5, _c1));
  }
}
function PassengerDetailsPage_ng_container_2_ion_card_72_Template(rf, ctx) {
  if (rf & 1) {
    const _r98 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ion-card", 234)(1, "ion-item", 319)(2, "div", 320);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](3, "Enter GST Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](4, "ion-toggle", 321);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayListener"]("ngModelChange", function PassengerDetailsPage_ng_container_2_ion_card_72_Template_ion_toggle_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r98);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayBindingSet"](ctx_r1.businessTravel, $event) || (ctx_r1.businessTravel = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("ionChange", function PassengerDetailsPage_ng_container_2_ion_card_72_Template_ion_toggle_ionChange_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r98);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.gstInfo());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](5, PassengerDetailsPage_ng_container_2_ion_card_72_div_5_Template, 6, 6, "div", 322);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.businessTravel);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpureFunction0"](3, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.businessTravel);
  }
}
function PassengerDetailsPage_ng_container_2_div_80_ion_row_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ion-row", 328)(1, "ion-col", 120)(2, "span", 329);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](4, "ion-col", 330)(5, "span", 329);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const key_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](key_r100);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate2"]("", ctx_r1.currencySym, "", ctx_r1.fareBreakup_hash[key_r100].toFixed(2), "");
  }
}
function PassengerDetailsPage_ng_container_2_div_80_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](1, PassengerDetailsPage_ng_container_2_div_80_ion_row_1_Template, 7, 3, "ion-row", 327);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const key_r100 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.fareBreakup_hash[key_r100] != 0 && key_r100 != "Payble Amount" && key_r100 != "Total Fare" && key_r100 != "e-Booking Discount");
  }
}
function PassengerDetailsPage_ng_container_2_div_82_ion_row_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ion-row", 332)(1, "ion-col", 120)(2, "span", 333);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](3, "Amount Payable");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](4, "ion-col", 330)(5, "span", 334);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const key_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate2"]("", ctx_r1.currencySym, "", ctx_r1.fareBreakup_hash[key_r101].toFixed(2), "");
  }
}
function PassengerDetailsPage_ng_container_2_div_82_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](1, PassengerDetailsPage_ng_container_2_div_82_ion_row_1_Template, 7, 2, "ion-row", 331);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const key_r101 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", key_r101 == "Payble Amount");
  }
}
function PassengerDetailsPage_ng_container_2_div_86_Template(rf, ctx) {
  if (rf & 1) {
    const _r102 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 118)(1, "div", 119)(2, "ion-row")(3, "ion-col", 335)(4, "p", 336);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](5, "Important Note!!");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](6, "ion-col", 120)(7, "p", 337);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function PassengerDetailsPage_ng_container_2_div_86_Template_p_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r102);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.showWalletDets = !ctx_r1.showWalletDets);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](8, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](9, "div", 338);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](10, " As per the Govt new GST Rule-46, Passengers are Mandated to provide their residential State, City and Pin Code details for the booking. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
  }
}
function PassengerDetailsPage_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r72 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](1, "ion-header", 232)(2, "ion-toolbar", 124)(3, "ion-row")(4, "ion-col", 157)(5, "ion-buttons")(6, "ion-back-button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function PassengerDetailsPage_ng_container_2_Template_ion_back_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r72);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.goBack());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](7, "ion-col", 233)(8, "div", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](9, " Booking Summary ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](10, "ion-content", 232)(11, "form", 8)(12, "ion-card", 234)(13, "div")(14, "ion-row")(15, "ion-col", 235)(16, "div", 236);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](18, "ion-icon", 237);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](19, "div", 236);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](21, "ion-row", 238)(22, "ion-col", 239)(23, "div", 240)(24, "span", 241);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](26, "p", 242);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](28, "ion-col", 243)(29, "p", 244);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](31, PassengerDetailsPage_ng_container_2_span_31_Template, 2, 1, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](32, "ion-col", 239)(33, "div", 245)(34, "span", 241);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](36, "p", 242);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](38, PassengerDetailsPage_ng_container_2_div_38_Template, 1, 0, "div", 246)(39, PassengerDetailsPage_ng_container_2_ion_row_39_Template, 7, 2, "ion-row", 1)(40, PassengerDetailsPage_ng_container_2_ion_row_40_Template, 17, 6, "ion-row", 247);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](41, "ion-card", 234)(42, "ion-row")(43, "ion-col", 248);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](44, "ion-icon", 249);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](45, "ion-col", 250);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](46, PassengerDetailsPage_ng_container_2_span_46_Template, 2, 0, "span", 1)(47, PassengerDetailsPage_ng_container_2_span_47_Template, 2, 0, "span", 251);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](48, PassengerDetailsPage_ng_container_2_div_48_Template, 30, 15, "div", 252)(49, PassengerDetailsPage_ng_container_2_div_49_Template, 8, 2, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](50, "ion-card", 234)(51, "div", 52)(52, "ion-row")(53, "ion-col", 248);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](54, "ion-icon", 253);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](55, "ion-col", 250)(56, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](57, "Contact Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](58, "ion-row")(59, "ion-col", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](60, PassengerDetailsPage_ng_container_2_ion_item_60_Template, 2, 0, "ion-item", 254);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](61, "ion-row")(62, "ion-col", 255);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](63, PassengerDetailsPage_ng_container_2_div_63_Template, 6, 3, "div", 1)(64, PassengerDetailsPage_ng_container_2_div_64_Template, 3, 2, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](65, "ion-col", 256)(66, "ion-item", 257)(67, "ion-input", 258);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("input", function PassengerDetailsPage_ng_container_2_Template_ion_input_input_67_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r72);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.onPhoneChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](68, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](69, PassengerDetailsPage_ng_container_2_ion_row_69_Template, 5, 3, "ion-row", 259);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](70, PassengerDetailsPage_ng_container_2_ion_card_70_Template, 14, 3, "ion-card", 260)(71, PassengerDetailsPage_ng_container_2_ion_card_71_Template, 6, 4, "ion-card", 260)(72, PassengerDetailsPage_ng_container_2_ion_card_72_Template, 6, 4, "ion-card", 260);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](73, "ion-card", 261)(74, "ion-row", 262)(75, "ion-col", 248);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](76, "ion-icon", 263);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](77, "ion-col", 264)(78, "span", 265);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](79, "Order Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](80, PassengerDetailsPage_ng_container_2_div_80_Template, 2, 1, "div", 252);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](81, "div", 266);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](82, PassengerDetailsPage_ng_container_2_div_82_Template, 2, 1, "div", 252);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](83, "ion-footer", 267)(84, "ion-button", 268);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function PassengerDetailsPage_ng_container_2_Template_ion_button_click_84_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r72);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.submitPassengerDetails());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](85, " Continue to Payment ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](86, PassengerDetailsPage_ng_container_2_div_86_Template, 11, 0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](ctx_r1.commaSeparate(ctx_r1.globalData.SEARCH_DATA.originCity.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](ctx_r1.commaSeparate(ctx_r1.globalData.SEARCH_DATA.destCity.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](ctx_r1.reservationData.boardingStage.time);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](ctx_r1.getFormatDate(ctx_r1.reservationData.boardingStage.travel_date));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", ctx_r1.mainTimeDiffrence, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.reservationData.next_day_service);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](ctx_r1.reservationData.droppingStage.time);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](ctx_r1.getFormatDate(ctx_r1.reservationData.droppingStage.travel_date));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.isReturn);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.isReturn);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.isReturn);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", !ctx_r1.isReturn);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.isReturn);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngForOf", ctx_r1.onwardSeatDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.isReturn);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("formGroup", ctx_r1.contactForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.locale && ctx_r1.locale.passenger_details_config["Email"] && ctx_r1.locale.passenger_details_config["Email"] != "Hide");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", !ctx_r1.metaData.show_countries_isd_codes_selection);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.metaData.show_countries_isd_codes_selection);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.metaData && ctx_r1.metaData.isWhatsapp);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.showPincodeCard);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", !ctx_r1.isReturn && ctx_r1.commonStorage.getItem("isServiceTaxApplicable"));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.isReturn && (ctx_r1.commonStorage.getItem("isServiceTaxApplicableReturn") || ctx_r1.commonStorage.getItem("isServiceTaxApplicable")));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngForOf", ctx_r1.getObjectKeys(ctx_r1.fareBreakup_hash));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngForOf", ctx_r1.getObjectKeys(ctx_r1.fareBreakup_hash));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.showWalletDets);
  }
}
function PassengerDetailsPage_ng_container_3_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1, "(Round Trip)");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
}
function PassengerDetailsPage_ng_container_3_ion_item_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ion-item", 367);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](1, "ion-input", 368);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
}
function PassengerDetailsPage_ng_container_3_ion_input_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r104 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ion-input", 369);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function PassengerDetailsPage_ng_container_3_ion_input_20_Template_ion_input_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r104);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.selectCountry_code());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpropertyInterpolate"]("value", ctx_r1.selected_Country_code);
  }
}
function PassengerDetailsPage_ng_container_3_ion_select_21_ion_select_option_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ion-select-option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const code_r105 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpropertyInterpolate"]("value", code_r105);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" +", code_r105, " ");
  }
}
function PassengerDetailsPage_ng_container_3_ion_select_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ion-select", 370);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](1, PassengerDetailsPage_ng_container_3_ion_select_21_ion_select_option_1_Template, 2, 2, "ion-select-option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngForOf", ctx_r1.AllowedCountryCodes);
  }
}
function PassengerDetailsPage_ng_container_3_p_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "p", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1, "SMS shall not be sent to an international number");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
}
function PassengerDetailsPage_ng_container_3_hr_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](0, "hr", 153);
  }
}
function PassengerDetailsPage_ng_container_3_ion_row_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r106 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ion-row", 371)(1, "ion-col", 372);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](2, "img", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "ion-col", 373);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](4, "Send booking details and updates on Whatsapp");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](5, "ion-col", 372)(6, "ion-toggle", 374);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("ionChange", function PassengerDetailsPage_ng_container_3_ion_row_27_Template_ion_toggle_ionChange_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r106);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.onChangeWhatsappSwitch());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayListener"]("ngModelChange", function PassengerDetailsPage_ng_container_3_ion_row_27_Template_ion_toggle_ngModelChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r106);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayBindingSet"](ctx_r1.isWPSwitchOn, $event) || (ctx_r1.isWPSwitchOn = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpureFunction0"](2, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.isWPSwitchOn);
  }
}
function PassengerDetailsPage_ng_container_3_div_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r107 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div")(1, "div", 344);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2, " Traveller details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "span", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function PassengerDetailsPage_ng_container_3_div_29_Template_span_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r107);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.addExistingPass());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](4, "Add existing passenger");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
  }
}
function PassengerDetailsPage_ng_container_3_div_30_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 344);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1, "Traveller details");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
}
function PassengerDetailsPage_ng_container_3_div_30_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1, "Primary Passenger");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
}
function PassengerDetailsPage_ng_container_3_div_30_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1, "Co-Passenger");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
}
function PassengerDetailsPage_ng_container_3_div_30_span_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1, "Reserved for female");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
}
function PassengerDetailsPage_ng_container_3_div_30_ion_row_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r110 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ion-row", 59)(1, "ion-col")(2, "ion-item", 367)(3, "ion-input", 384);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("keyup", function PassengerDetailsPage_ng_container_3_div_30_ion_row_33_Template_ion_input_keyup_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r110);
      const i_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.onAgeChange($event, i_r109, 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()();
  }
}
function PassengerDetailsPage_ng_container_3_div_30_ion_col_35_ng_container_2_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ion-select-option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const key_r111 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpropertyInterpolate"]("value", ctx_r1.metaData.idCardTypes[key_r111]);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](key_r111);
  }
}
function PassengerDetailsPage_ng_container_3_div_30_ion_col_35_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](1, "ion-select", 387);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](2, PassengerDetailsPage_ng_container_3_div_30_ion_col_35_ng_container_2_ng_template_2_Template, 2, 2, "ng-template", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngForOf", ctx_r1.object.keys(ctx_r1.metaData.idCardTypes));
  }
}
function PassengerDetailsPage_ng_container_3_div_30_ion_col_35_ng_container_3_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ion-select-option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const key_r112 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpropertyInterpolate"]("value", key_r112.card_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](key_r112.card_type);
  }
}
function PassengerDetailsPage_ng_container_3_div_30_ion_col_35_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](1, "ion-select", 387);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](2, PassengerDetailsPage_ng_container_3_div_30_ion_col_35_ng_container_3_ng_template_2_Template, 2, 2, "ng-template", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngForOf", ctx_r1.metaData.idCardTypes);
  }
}
function PassengerDetailsPage_ng_container_3_div_30_ion_col_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ion-col", 120)(1, "ion-item", 385);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](2, PassengerDetailsPage_ng_container_3_div_30_ion_col_35_ng_container_2_Template, 3, 1, "ng-container", 1)(3, PassengerDetailsPage_ng_container_3_div_30_ion_col_35_ng_container_3_Template, 3, 1, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](4, "ion-icon", 386);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", !ctx_r1.isArray(ctx_r1.metaData.idCardTypes));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.isArray(ctx_r1.metaData.idCardTypes));
  }
}
function PassengerDetailsPage_ng_container_3_div_30_ion_col_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ion-col", 120)(1, "ion-item", 367);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](2, "ion-input", 388);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }
}
function PassengerDetailsPage_ng_container_3_div_30_ion_row_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r113 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ion-row")(1, "ion-col", 196)(2, "ion-item", 367)(3, "ion-input", 389);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function PassengerDetailsPage_ng_container_3_div_30_ion_row_37_Template_ion_input_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r113);
      const i_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.selectPassportDate(1, ctx_r1.passengerForm[i_r109].value.passport_issued_date, i_r109));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](4, "ion-col", 196)(5, "ion-item", 367)(6, "ion-input", 390);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function PassengerDetailsPage_ng_container_3_div_30_ion_row_37_Template_ion_input_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r113);
      const i_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.selectPassportDate(2, ctx_r1.passengerForm[i_r109].value.passport_expiry_date, i_r109));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](7, "ion-col", 196)(8, "ion-item", 367);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](9, "ion-input", 391);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("readonly", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("readonly", true);
  }
}
function PassengerDetailsPage_ng_container_3_div_30_div_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 392)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2, "Enter valid ID details; otherwise, it will impact your journey or package.");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }
}
function PassengerDetailsPage_ng_container_3_div_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r108 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](1, PassengerDetailsPage_ng_container_3_div_30_div_1_Template, 2, 0, "div", 375);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](2, "div", 371);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](3, PassengerDetailsPage_ng_container_3_div_30_span_3_Template, 2, 0, "span", 1)(4, PassengerDetailsPage_ng_container_3_div_30_span_4_Template, 2, 0, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](5, "span", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](6, "Seat ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](7, "span", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](9, "div", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](10, PassengerDetailsPage_ng_container_3_div_30_span_10_Template, 2, 0, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](11, "ion-row")(12, "ion-col")(13, "ion-item", 367)(14, "ion-input", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("keyup", function PassengerDetailsPage_ng_container_3_div_30_Template_ion_input_keyup_14_listener($event) {
      const i_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r108).index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.onInputChange($event, i_r109, 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](15, "ion-row")(16, "ion-radio-group", 376)(17, "ion-row")(18, "ion-col", 239)(19, "ion-item", 352)(20, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](21, "Gender");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](22, "ion-col", 239)(23, "ion-item", 377);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](24, "ion-radio", 378);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](25, "ion-label", 379);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](26, " Male ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](27, "ion-col", 239)(28, "ion-item", 380);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](29, "ion-radio", 381);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](30, "ion-label", 379);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](31, " Female ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](32, "hr", 382);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](33, PassengerDetailsPage_ng_container_3_div_30_ion_row_33_Template, 4, 0, "ion-row", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](34, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](35, PassengerDetailsPage_ng_container_3_div_30_ion_col_35_Template, 5, 2, "ion-col", 189)(36, PassengerDetailsPage_ng_container_3_div_30_ion_col_36_Template, 3, 0, "ion-col", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](37, PassengerDetailsPage_ng_container_3_div_30_ion_row_37_Template, 10, 2, "ion-row", 1)(38, PassengerDetailsPage_ng_container_3_div_30_div_38_Template, 3, 0, "div", 383);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r114 = ctx.$implicit;
    const i_r109 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("formGroup", ctx_r1.passengerForm[i_r109]);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", !ctx_r1.isLogin && i_r109 == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", i_r109 == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", i_r109 > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](seat_r114.seat_number);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", seat_r114.sex !== "" && seat_r114.sex === "Ms");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("disabled", seat_r114.sex !== "" && !seat_r114.sexOptional);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngClass", seat_r114.sex === "Mr" && !seat_r114.sexOptional ? "gender" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("disabled", seat_r114.sex !== "" && !seat_r114.sexOptional);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngClass", seat_r114.sex === "Ms" && !seat_r114.sexOptional ? "gender" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.locale && ctx_r1.locale.passenger_details_config["Age"] && ctx_r1.locale.passenger_details_config["Age"] !== "Hide");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.metaData.idCardTypes && (ctx_r1.metaData.showCardTypes || ctx_r1.locale && ctx_r1.locale.passenger_details_config["Id Type"] && ctx_r1.locale.passenger_details_config["Id Type"] !== "Hide"));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.metaData.showCardTypes || ctx_r1.locale && ctx_r1.locale.passenger_details_config["Id No"] && ctx_r1.locale.passenger_details_config["Id No"] !== "Hide");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.metaData.showCardTypes && ctx_r1.passengerForm[i_r109].value.id_card_type == 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.metaData.idCardTypes && (ctx_r1.metaData.showCardTypes || ctx_r1.locale && ctx_r1.locale.passenger_details_config["Id Type"] && ctx_r1.locale.passenger_details_config["Id Type"] !== "Hide"));
  }
}
function PassengerDetailsPage_ng_container_3_ion_card_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r115 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ion-card", 393)(1, "ion-item", 352)(2, "ion-label", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](3, "Copy Onward Details To Return");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](4, "ion-checkbox", 394);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayListener"]("ngModelChange", function PassengerDetailsPage_ng_container_3_ion_card_31_Template_ion_checkbox_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r115);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayBindingSet"](ctx_r1.copyData, $event) || (ctx_r1.copyData = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("ionChange", function PassengerDetailsPage_ng_container_3_ion_card_31_Template_ion_checkbox_ionChange_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r115);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.copyDataToReturn());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.copyData);
  }
}
function PassengerDetailsPage_ng_container_3_div_32_ion_card_1_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1, "Primary Passenger");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
}
function PassengerDetailsPage_ng_container_3_div_32_ion_card_1_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1, "Co-Passenger");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
}
function PassengerDetailsPage_ng_container_3_div_32_ion_card_1_ion_row_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r118 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ion-row", 100)(1, "ion-col")(2, "ion-item", 367)(3, "ion-input", 384);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("keyup", function PassengerDetailsPage_ng_container_3_div_32_ion_card_1_ion_row_32_Template_ion_input_keyup_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r118);
      const i_r117 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.onAgeChange($event, i_r117, 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()();
  }
}
function PassengerDetailsPage_ng_container_3_div_32_ion_card_1_ion_col_34_ng_container_2_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ion-select-option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const key_r119 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpropertyInterpolate"]("value", ctx_r1.metaData.idCardTypes[key_r119]);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](key_r119);
  }
}
function PassengerDetailsPage_ng_container_3_div_32_ion_card_1_ion_col_34_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](1, "ion-select", 387);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](2, PassengerDetailsPage_ng_container_3_div_32_ion_card_1_ion_col_34_ng_container_2_ng_template_2_Template, 2, 2, "ng-template", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngForOf", ctx_r1.object.keys(ctx_r1.metaData.idCardTypes));
  }
}
function PassengerDetailsPage_ng_container_3_div_32_ion_card_1_ion_col_34_ng_container_3_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ion-select-option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const key_r120 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpropertyInterpolate"]("value", key_r120.card_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](key_r120.card_type);
  }
}
function PassengerDetailsPage_ng_container_3_div_32_ion_card_1_ion_col_34_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](1, "ion-select", 387);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](2, PassengerDetailsPage_ng_container_3_div_32_ion_card_1_ion_col_34_ng_container_3_ng_template_2_Template, 2, 2, "ng-template", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngForOf", ctx_r1.metaData.idCardTypes);
  }
}
function PassengerDetailsPage_ng_container_3_div_32_ion_card_1_ion_col_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ion-col", 120)(1, "ion-item", 385);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](2, PassengerDetailsPage_ng_container_3_div_32_ion_card_1_ion_col_34_ng_container_2_Template, 3, 1, "ng-container", 1)(3, PassengerDetailsPage_ng_container_3_div_32_ion_card_1_ion_col_34_ng_container_3_Template, 3, 1, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](4, "ion-icon", 386);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", !ctx_r1.isArray(ctx_r1.metaData.idCardTypes));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.isArray(ctx_r1.metaData.idCardTypes));
  }
}
function PassengerDetailsPage_ng_container_3_div_32_ion_card_1_ion_col_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ion-col", 120)(1, "ion-item", 367);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](2, "ion-input", 388);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }
}
function PassengerDetailsPage_ng_container_3_div_32_ion_card_1_ion_row_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r121 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ion-row")(1, "ion-col", 196)(2, "div")(3, "ion-item", 367)(4, "ion-input", 398);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function PassengerDetailsPage_ng_container_3_div_32_ion_card_1_ion_row_36_Template_ion_input_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r121);
      const i_r117 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.selectPassportDateR(1, ctx_r1.passengerFormR[i_r117].value.passport_issued_date, i_r117));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](5, "ion-col", 196)(6, "div")(7, "ion-item", 367)(8, "ion-label", 209);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](9, "Expiry Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](10, "ion-input", 399);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function PassengerDetailsPage_ng_container_3_div_32_ion_card_1_ion_row_36_Template_ion_input_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r121);
      const i_r117 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.selectPassportDateR(2, ctx_r1.passengerFormR[i_r117].value.passport_issued_date, i_r117));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](11, "ion-col", 196)(12, "ion-item", 367);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](13, "ion-input", 400);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("readonly", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("readonly", true);
  }
}
function PassengerDetailsPage_ng_container_3_div_32_ion_card_1_div_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 392)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2, " Enter valid ID details; otherwise, it will impact your journey or package. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }
}
function PassengerDetailsPage_ng_container_3_div_32_ion_card_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r116 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ion-card", 356)(1, "div", 52)(2, "div", 344);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](3, "Traveller details (For return journey)");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](4, "div", 371);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](5, PassengerDetailsPage_ng_container_3_div_32_ion_card_1_span_5_Template, 2, 0, "span", 1)(6, PassengerDetailsPage_ng_container_3_div_32_ion_card_1_span_6_Template, 2, 0, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](7, "span", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](8, "Seat ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](9, "span", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](11, "ion-row")(12, "ion-col")(13, "ion-item", 367)(14, "ion-input", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("keyup", function PassengerDetailsPage_ng_container_3_div_32_ion_card_1_Template_ion_input_keyup_14_listener($event) {
      const i_r117 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r116).index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.onInputChange($event, i_r117, 2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](15, "ion-row")(16, "ion-radio-group", 376)(17, "ion-row")(18, "ion-col", 239)(19, "ion-item", 352)(20, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](21, "Gender");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](22, "ion-col", 255)(23, "ion-item", 377);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](24, "ion-radio", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](25, "ion-label", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](26, " Male ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](27, "ion-col", 396)(28, "ion-item", 377);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](29, "ion-radio", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](30, "ion-label", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](31, " Female ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](32, PassengerDetailsPage_ng_container_3_div_32_ion_card_1_ion_row_32_Template, 4, 0, "ion-row", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](33, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](34, PassengerDetailsPage_ng_container_3_div_32_ion_card_1_ion_col_34_Template, 5, 2, "ion-col", 189)(35, PassengerDetailsPage_ng_container_3_div_32_ion_card_1_ion_col_35_Template, 3, 0, "ion-col", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](36, PassengerDetailsPage_ng_container_3_div_32_ion_card_1_ion_row_36_Template, 14, 2, "ion-row", 1)(37, PassengerDetailsPage_ng_container_3_div_32_ion_card_1_div_37_Template, 3, 0, "div", 397);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const seat_r122 = ctx.$implicit;
    const i_r117 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("formGroup", ctx_r1.passengerFormR[i_r117]);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", i_r117 == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", i_r117 > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](seat_r122.seat_number);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("disabled", seat_r122.sex !== "" && !seat_r122.sexOptional);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngClass", seat_r122.sex === "Mr" && !seat_r122.sexOptional ? "gender" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("disabled", seat_r122.sex !== "" && !seat_r122.sexOptional);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngClass", seat_r122.sex === "Ms" && !seat_r122.sexOptional ? "gender" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.locale && ctx_r1.locale.passenger_details_config["Age"] && ctx_r1.locale.passenger_details_config["Age"] != "Hide");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.metaData.idCardTypes && (ctx_r1.metaData.showCardTypes || ctx_r1.locale && ctx_r1.locale.passenger_details_config["Id Type"] && ctx_r1.locale.passenger_details_config["Id Type"] !== "Hide"));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.metaData.showCardTypes || ctx_r1.locale && ctx_r1.locale.passenger_details_config["Id No"] && ctx_r1.locale.passenger_details_config["Id No"] !== "Hide");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.metaData.showCardTypes && ctx_r1.passengerFormR[i_r117].value.id_card_type == 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.metaData.idCardTypes && (ctx_r1.metaData.showCardTypes || ctx_r1.locale && ctx_r1.locale.passenger_details_config["Id Type"] && ctx_r1.locale.passenger_details_config["Id Type"] != "Hide"));
  }
}
function PassengerDetailsPage_ng_container_3_div_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](1, PassengerDetailsPage_ng_container_3_div_32_ion_card_1_Template, 38, 13, "ion-card", 395);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngForOf", ctx_r1.returnSeatDetails);
  }
}
function PassengerDetailsPage_ng_container_3_ion_card_33_ion_item_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r124 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ion-item", 403)(1, "ion-input", 405);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("ionInput", function PassengerDetailsPage_ng_container_3_ion_card_33_ion_item_5_Template_ion_input_ionInput_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r124);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.onchangeStateId($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayListener"]("ngModelChange", function PassengerDetailsPage_ng_container_3_ion_card_33_ion_item_5_Template_ion_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r124);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayBindingSet"](ctx_r1.stateId, $event) || (ctx_r1.stateId = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.stateId);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpureFunction0"](2, _c1));
  }
}
function PassengerDetailsPage_ng_container_3_ion_card_33_ion_select_option_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ion-select-option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r125 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpropertyInterpolate"]("value", item_r125.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"]("", item_r125.name, " ");
  }
}
function PassengerDetailsPage_ng_container_3_ion_card_33_ion_item_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r126 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ion-item", 403)(1, "ion-input", 226);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("keyup", function PassengerDetailsPage_ng_container_3_ion_card_33_ion_item_11_Template_ion_input_keyup_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r126);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.onchangeCityId($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayListener"]("ngModelChange", function PassengerDetailsPage_ng_container_3_ion_card_33_ion_item_11_Template_ion_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r126);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayBindingSet"](ctx_r1.cityId, $event) || (ctx_r1.cityId = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpropertyInterpolate"]("value", ctx_r1.cityName ? ctx_r1.cityName : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.cityId);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpureFunction0"](3, _c1));
  }
}
function PassengerDetailsPage_ng_container_3_ion_card_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r123 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ion-card", 401)(1, "div", 104)(2, "span", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](3, "Please Enter your residential Location Details.");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](4, "ion-icon", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function PassengerDetailsPage_ng_container_3_ion_card_33_Template_ion_icon_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r123);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.showWalletDets = !ctx_r1.showWalletDets);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](5, PassengerDetailsPage_ng_container_3_ion_card_33_ion_item_5_Template, 2, 3, "ion-item", 402);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](6, "ion-item", 403)(7, "ion-label", 209);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](8, "State");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](9, "ion-select", 404);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("ionChange", function PassengerDetailsPage_ng_container_3_ion_card_33_Template_ion_select_ionChange_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r123);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.onchangeId($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayListener"]("ngModelChange", function PassengerDetailsPage_ng_container_3_ion_card_33_Template_ion_select_ngModelChange_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r123);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayBindingSet"](ctx_r1.stateType, $event) || (ctx_r1.stateType = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](10, PassengerDetailsPage_ng_container_3_ion_card_33_ion_select_option_10_Template, 2, 2, "ion-select-option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](11, PassengerDetailsPage_ng_container_3_ion_card_33_ion_item_11_Template, 2, 4, "ion-item", 402);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngClass", ctx_r1.businessTravel ? "businessTravelclick" : "businessTravelunclick");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", (ctx_r1.gstInfoConfig == null ? null : ctx_r1.gstInfoConfig.pincode) && ctx_r1.gstInfoConfig.pincode == "show" || ctx_r1.gstInfoConfig == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpropertyInterpolate"]("value", ctx_r1.stateGetName);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.stateType);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpureFunction0"](8, _c1))("interfaceOptions", ctx_r1.stateOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngForOf", ctx_r1.state);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", (ctx_r1.gstInfoConfig == null ? null : ctx_r1.gstInfoConfig.city) && ctx_r1.gstInfoConfig.city == "show" || ctx_r1.gstInfoConfig == null);
  }
}
function PassengerDetailsPage_ng_container_3_ion_item_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r127 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ion-item", 406)(1, "ion-label", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2, "I am booking for business travel");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "ion-checkbox", 407);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("ionChange", function PassengerDetailsPage_ng_container_3_ion_item_34_Template_ion_checkbox_ionChange_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r127);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.gstInfo());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayListener"]("ngModelChange", function PassengerDetailsPage_ng_container_3_ion_item_34_Template_ion_checkbox_ngModelChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r127);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayBindingSet"](ctx_r1.businessTravel, $event) || (ctx_r1.businessTravel = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.businessTravel);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpureFunction0"](2, _c1));
  }
}
function PassengerDetailsPage_ng_container_3_ion_card_35_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r128 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div")(1, "ion-item", 367)(2, "ion-input", 409, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("keyup", function PassengerDetailsPage_ng_container_3_ion_card_35_div_1_Template_ion_input_keyup_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r128);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.onchangeGstId($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayListener"]("ngModelChange", function PassengerDetailsPage_ng_container_3_ion_card_35_div_1_Template_ion_input_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r128);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayBindingSet"](ctx_r1.gstId, $event) || (ctx_r1.gstId = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](4, "ion-item", 367)(5, "ion-input", 410);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayListener"]("ngModelChange", function PassengerDetailsPage_ng_container_3_ion_card_35_div_1_Template_ion_input_ngModelChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r128);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayBindingSet"](ctx_r1.gstName, $event) || (ctx_r1.gstName = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.gstId);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpureFunction0"](4, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.gstName);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpureFunction0"](5, _c1));
  }
}
function PassengerDetailsPage_ng_container_3_ion_card_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ion-card", 408);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](1, PassengerDetailsPage_ng_container_3_ion_card_35_div_1_Template, 6, 6, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.businessTravel);
  }
}
function PassengerDetailsPage_ng_container_3_div_49_Template(rf, ctx) {
  if (rf & 1) {
    const _r129 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 118)(1, "div", 119)(2, "ion-row")(3, "ion-col", 120)(4, "p", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](5, "Important Note!!");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](6, "ion-col", 120)(7, "p", 231);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function PassengerDetailsPage_ng_container_3_div_49_Template_p_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r129);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.showWalletDets = !ctx_r1.showWalletDets);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](8, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](9, "div", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](10, " As per the Govt new GST Rule - 46 Passengers are Mandated to provide their residential State, City and Pin Code details for the Bookings. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
  }
}
function PassengerDetailsPage_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r103 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](1, "ion-header")(2, "ion-toolbar", 124)(3, "ion-buttons", 339)(4, "ion-back-button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function PassengerDetailsPage_ng_container_3_Template_ion_back_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r103);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.goBack());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](5, "ion-title", 340);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](6, "Passenger Information");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](7, "ion-title", 341);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](9, PassengerDetailsPage_ng_container_3_span_9_Template, 2, 0, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](10, "ion-content", 342)(11, "form", 8)(12, "ion-card", 343)(13, "div", 344);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](14, "Contact details");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](15, "div", 345);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](16, " Your ticket and bus details will be sent here ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](17, PassengerDetailsPage_ng_container_3_ion_item_17_Template, 2, 0, "ion-item", 346);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](18, "ion-row", 347)(19, "ion-col", 348);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](20, PassengerDetailsPage_ng_container_3_ion_input_20_Template, 1, 1, "ion-input", 349)(21, PassengerDetailsPage_ng_container_3_ion_select_21_Template, 2, 1, "ion-select", 350);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](22, "ion-col", 351)(23, "ion-item", 352)(24, "ion-input", 353);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("keyup", function PassengerDetailsPage_ng_container_3_Template_ion_input_keyup_24_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r103);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.onPhoneChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](25, PassengerDetailsPage_ng_container_3_p_25_Template, 2, 0, "p", 354)(26, PassengerDetailsPage_ng_container_3_hr_26_Template, 1, 0, "hr", 136)(27, PassengerDetailsPage_ng_container_3_ion_row_27_Template, 7, 3, "ion-row", 355);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](28, "ion-card", 356);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](29, PassengerDetailsPage_ng_container_3_div_29_Template, 5, 0, "div", 1)(30, PassengerDetailsPage_ng_container_3_div_30_Template, 39, 15, "div", 357);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](31, PassengerDetailsPage_ng_container_3_ion_card_31_Template, 5, 1, "ion-card", 358)(32, PassengerDetailsPage_ng_container_3_div_32_Template, 2, 1, "div", 1)(33, PassengerDetailsPage_ng_container_3_ion_card_33_Template, 12, 9, "ion-card", 359)(34, PassengerDetailsPage_ng_container_3_ion_item_34_Template, 4, 3, "ion-item", 360)(35, PassengerDetailsPage_ng_container_3_ion_card_35_Template, 2, 1, "ion-card", 361);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](36, "ion-card", 362)(37, "ion-row")(38, "ion-col", 363);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](39, "Amount ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](40, "ion-col", 239)(41, "span", 364);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](43, "div", 365);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](44, "ion-footer")(45, "div", 365)(46, "div", 366);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function PassengerDetailsPage_ng_container_3_Template_div_click_46_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r103);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.submitPassengerDetails());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](47, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](48, "Proceed to pay");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](49, PassengerDetailsPage_ng_container_3_div_49_Template, 11, 0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate2"]("", ctx_r1.commaSeparate(ctx_r1.globalData.SEARCH_DATA.originCity.name), " - ", ctx_r1.commaSeparate(ctx_r1.globalData.SEARCH_DATA.destCity.name), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.isReturn);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("formGroup", ctx_r1.contactForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.locale && ctx_r1.locale.passenger_details_config["Email"] && ctx_r1.locale.passenger_details_config["Email"] != "Hide");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.metaData.show_countries_isd_codes_selection);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", !ctx_r1.metaData.show_countries_isd_codes_selection);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.selected_Country_code != "+91");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.metaData.show_countries_isd_codes_selection);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.metaData && ctx_r1.metaData.isWhatsapp);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.isLogin);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngForOf", ctx_r1.onwardSeatDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.isReturn);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.isReturn);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.commonStorage && ctx_r1.commonStorage.localGet("serviceDetails").is_service_tax_applicable && ctx_r1.showPincodeCard);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.commonStorage && ctx_r1.commonStorage.localGet("serviceDetails").is_service_tax_applicable);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.commonStorage && ctx_r1.commonStorage.localGet("serviceDetails").is_service_tax_applicable && ctx_r1.businessTravel);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate2"]("", ctx_r1.currencySym, " ", ctx_r1.payAmount(ctx_r1.globalData.RESERVATION_DATA.totalBookingAmount + (ctx_r1.globalData.RESERVATION_DATA_RETURN && ctx_r1.globalData.RESERVATION_DATA_RETURN.totalBookingAmount ? ctx_r1.globalData.RESERVATION_DATA_RETURN.totalBookingAmount : 0)), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.showWalletDets);
  }
}
function PassengerDetailsPage_ng_container_4_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r131 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 427);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function PassengerDetailsPage_ng_container_4_div_18_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r131);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.selectCountry_code());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", ctx_r1.selected_Country_code || "+91", " ");
  }
}
function PassengerDetailsPage_ng_container_4_ion_select_19_ion_select_option_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ion-select-option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const code_r132 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("value", code_r132);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](code_r132);
  }
}
function PassengerDetailsPage_ng_container_4_ion_select_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ion-select", 428);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](1, PassengerDetailsPage_ng_container_4_ion_select_19_ion_select_option_1_Template, 2, 2, "ion-select-option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngForOf", ctx_r1.AllowedCountryCodes);
  }
}
function PassengerDetailsPage_ng_container_4_p_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "p", 429);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1, " SMS shall not be sent to an international number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
}
function PassengerDetailsPage_ng_container_4_ion_item_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ion-item", 430);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](1, "ion-input", 431);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
}
function PassengerDetailsPage_ng_container_4_ion_row_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r133 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ion-row", 432)(1, "ion-col", 248);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](2, "img", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "ion-col", 433);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](4, "Send booking details and updates on ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](5, "span", 434);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](6, "Whatsapp");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](7, "ion-col", 157)(8, "ion-toggle", 435);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("ionChange", function PassengerDetailsPage_ng_container_4_ion_row_25_Template_ion_toggle_ionChange_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r133);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.onChangeWhatsappSwitch());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayListener"]("ngModelChange", function PassengerDetailsPage_ng_container_4_ion_row_25_Template_ion_toggle_ngModelChange_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r133);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayBindingSet"](ctx_r1.isWPSwitchOn, $event) || (ctx_r1.isWPSwitchOn = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpureFunction0"](2, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.isWPSwitchOn);
  }
}
function PassengerDetailsPage_ng_container_4_ion_card_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r134 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ion-card", 161)(1, "div", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2, "Traveller details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "span", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function PassengerDetailsPage_ng_container_4_ion_card_26_Template_span_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r134);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.addExistingPass());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](4, "Add existing passenger");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
  }
}
function PassengerDetailsPage_ng_container_4_ion_card_27_div_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "span", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const i_r136 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2).index;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"]("Passenger ", i_r136 + 1, "");
  }
}
function PassengerDetailsPage_ng_container_4_ion_card_27_div_1_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "span", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const i_r136 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2).index;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"]("Passenger ", i_r136 + 1, "");
  }
}
function PassengerDetailsPage_ng_container_4_ion_card_27_div_1_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1, "Reserved for female");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
}
function PassengerDetailsPage_ng_container_4_ion_card_27_div_1_ion_col_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r137 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ion-col", 439)(1, "div", 446);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2, "Age");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "ion-item", 202)(4, "ion-input", 447);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("keyup", function PassengerDetailsPage_ng_container_4_ion_card_27_div_1_ion_col_31_Template_ion_input_keyup_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r137);
      const i_r136 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2).index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.onAgeChange($event, i_r136, 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
  }
}
function PassengerDetailsPage_ng_container_4_ion_card_27_div_1_ion_row_32_ion_select_option_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ion-select-option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r141 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpropertyInterpolate"]("value", item_r141.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", item_r141.type, " ");
  }
}
function PassengerDetailsPage_ng_container_4_ion_card_27_div_1_ion_row_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r138 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ion-row")(1, "ion-col", 181)(2, "ion-item", 182)(3, "ion-select", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("ionChange", function PassengerDetailsPage_ng_container_4_ion_card_27_div_1_ion_row_32_Template_ion_select_ionChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r138);
      const ctx_r138 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
      const seat_r140 = ctx_r138.$implicit;
      const i_r136 = ctx_r138.index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.onConcessionChange($event, i_r136, 1, seat_r140));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](4, PassengerDetailsPage_ng_container_4_ion_card_27_div_1_ion_row_32_ion_select_option_4_Template, 2, 2, "ion-select-option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](5, "ion-icon", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngForOf", ctx_r1.concessions_category);
  }
}
function PassengerDetailsPage_ng_container_4_ion_card_27_div_1_ion_card_33_ion_col_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r143 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ion-col", 120)(1, "div", 415);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2, "Card Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "ion-item", 450);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function PassengerDetailsPage_ng_container_4_ion_card_27_div_1_ion_card_33_ion_col_8_Template_ion_item_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r143);
      const ctx_r138 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
      const seat_r140 = ctx_r138.$implicit;
      const i_r136 = ctx_r138.index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.cardDetails(null, i_r136, 1, seat_r140));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](4, "ion-input", 451);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("readonly", true);
  }
}
function PassengerDetailsPage_ng_container_4_ion_card_27_div_1_ion_card_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r142 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ion-card", 448)(1, "ion-grid")(2, "ion-row")(3, "ion-col", 186)(4, "div", 415);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](5, "Card Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](6, "ion-item", 430)(7, "ion-input", 449);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("keyup", function PassengerDetailsPage_ng_container_4_ion_card_27_div_1_ion_card_33_Template_ion_input_keyup_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r142);
      const ctx_r138 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
      const seat_r140 = ctx_r138.$implicit;
      const i_r136 = ctx_r138.index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.cardDetails($event, i_r136, 1, seat_r140));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](8, PassengerDetailsPage_ng_container_4_ion_card_27_div_1_ion_card_33_ion_col_8_Template, 5, 1, "ion-col", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const i_r136 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2).index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("size", ctx_r1.cardValidationRequiredState[i_r136] ? 6 : 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpropertyInterpolate1"]("id", "input", i_r136, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.cardValidationRequiredState[i_r136]);
  }
}
function PassengerDetailsPage_ng_container_4_ion_card_27_div_1_ion_row_34_ion_col_1_ng_container_4_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ion-select-option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const key_r144 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpropertyInterpolate"]("value", ctx_r1.metaData.idCardTypes[key_r144]);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](key_r144);
  }
}
function PassengerDetailsPage_ng_container_4_ion_card_27_div_1_ion_row_34_ion_col_1_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](1, "ion-select", 454);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](2, PassengerDetailsPage_ng_container_4_ion_card_27_div_1_ion_row_34_ion_col_1_ng_container_4_ng_template_2_Template, 2, 2, "ng-template", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngForOf", ctx_r1.object.keys(ctx_r1.metaData.idCardTypes));
  }
}
function PassengerDetailsPage_ng_container_4_ion_card_27_div_1_ion_row_34_ion_col_1_ng_container_5_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ion-select-option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const key_r145 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpropertyInterpolate"]("value", key_r145.card_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](key_r145.card_type);
  }
}
function PassengerDetailsPage_ng_container_4_ion_card_27_div_1_ion_row_34_ion_col_1_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](1, "ion-select", 454);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](2, PassengerDetailsPage_ng_container_4_ion_card_27_div_1_ion_row_34_ion_col_1_ng_container_5_ng_template_2_Template, 2, 2, "ng-template", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngForOf", ctx_r1.metaData.idCardTypes);
  }
}
function PassengerDetailsPage_ng_container_4_ion_card_27_div_1_ion_row_34_ion_col_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ion-col", 186)(1, "div", 415);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2, "ID Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "ion-item", 453);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](4, PassengerDetailsPage_ng_container_4_ion_card_27_div_1_ion_row_34_ion_col_1_ng_container_4_Template, 3, 1, "ng-container", 1)(5, PassengerDetailsPage_ng_container_4_ion_card_27_div_1_ion_row_34_ion_col_1_ng_container_5_Template, 3, 1, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpropertyInterpolate"]("size", ctx_r1.metaData.idCardTypes && ctx_r1.locale && ctx_r1.locale.passenger_details_config["Id Type"] != "Hide" ? "6" : "12");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", !ctx_r1.isArray(ctx_r1.metaData.idCardTypes));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.isArray(ctx_r1.metaData.idCardTypes));
  }
}
function PassengerDetailsPage_ng_container_4_ion_card_27_div_1_ion_row_34_ion_col_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ion-col", 120)(1, "div", 415);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2, "ID Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "ion-item", 430);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](4, "ion-input", 455);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }
}
function PassengerDetailsPage_ng_container_4_ion_card_27_div_1_ion_row_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](1, PassengerDetailsPage_ng_container_4_ion_card_27_div_1_ion_row_34_ion_col_1_Template, 6, 3, "ion-col", 452)(2, PassengerDetailsPage_ng_container_4_ion_card_27_div_1_ion_row_34_ion_col_2_Template, 5, 0, "ion-col", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.metaData.idCardTypes && (ctx_r1.metaData.showCardTypes || ctx_r1.locale && ctx_r1.locale.passenger_details_config["Id Type"] && ctx_r1.locale.passenger_details_config["Id Type"] != "Hide"));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.metaData.showCardTypes || ctx_r1.locale && ctx_r1.locale.passenger_details_config["Id No"] && ctx_r1.locale.passenger_details_config["Id No"] != "Hide");
  }
}
function PassengerDetailsPage_ng_container_4_ion_card_27_div_1_ion_row_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r146 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ion-row")(1, "ion-col", 196)(2, "div", 415);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](3, "Issue Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](4, "ion-item", 430)(5, "ion-input", 456);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function PassengerDetailsPage_ng_container_4_ion_card_27_div_1_ion_row_35_Template_ion_input_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r146);
      const i_r136 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2).index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.selectPassportDate(1, ctx_r1.passengerForm[i_r136].value.passport_issued_date, i_r136));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](6, "ion-col", 196)(7, "div", 415);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](8, "Expiry Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](9, "ion-item", 430)(10, "ion-input", 457);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function PassengerDetailsPage_ng_container_4_ion_card_27_div_1_ion_row_35_Template_ion_input_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r146);
      const i_r136 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2).index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.selectPassportDate(2, ctx_r1.passengerForm[i_r136].value.passport_expiry_date, i_r136));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](11, "ion-col", 196)(12, "div", 415);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](13, "Place of issue");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](14, "ion-item", 430);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](15, "ion-input", 458);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("readonly", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("readonly", true);
  }
}
function PassengerDetailsPage_ng_container_4_ion_card_27_div_1_div_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 459)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2, " Enter valid ID details; otherwise, it will impact your journey or package. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }
}
function PassengerDetailsPage_ng_container_4_ion_card_27_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r135 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 52)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](2, PassengerDetailsPage_ng_container_4_ion_card_27_div_1_span_2_Template, 2, 1, "span", 163)(3, PassengerDetailsPage_ng_container_4_ion_card_27_div_1_span_3_Template, 2, 1, "span", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](4, "span", 436);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](5, "img", 437);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](6, "span", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](8, "div", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](9, PassengerDetailsPage_ng_container_4_ion_card_27_div_1_span_9_Template, 2, 0, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](10, "ion-row")(11, "ion-col", 86)(12, "div", 415);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](13, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](14, "ion-item", 430)(15, "ion-input", 438);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("keyup", function PassengerDetailsPage_ng_container_4_ion_card_27_div_1_Template_ion_input_keyup_15_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r135);
      const i_r136 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.onInputChange($event, i_r136, 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](16, "div")(17, "ion-row", 181)(18, "ion-col", 439)(19, "ion-radio-group", 98)(20, "div", 415);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](21, "Gender");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](22, "div", 440)(23, "ion-item", 441);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function PassengerDetailsPage_ng_container_4_ion_card_27_div_1_Template_ion_item_click_23_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r135);
      const i_r136 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.passengerForm[i_r136].controls["sex"].setValue("Mr"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](24, "ion-radio", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](25, "ion-label", 379);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](27, "ion-item", 442);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function PassengerDetailsPage_ng_container_4_ion_card_27_div_1_Template_ion_item_click_27_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r135);
      const i_r136 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.passengerForm[i_r136].controls["sex"].setValue("Ms"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](28, "ion-radio", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](29, "ion-label", 379);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](31, PassengerDetailsPage_ng_container_4_ion_card_27_div_1_ion_col_31_Template, 5, 0, "ion-col", 443);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](32, PassengerDetailsPage_ng_container_4_ion_card_27_div_1_ion_row_32_Template, 6, 1, "ion-row", 1)(33, PassengerDetailsPage_ng_container_4_ion_card_27_div_1_ion_card_33_Template, 9, 4, "ion-card", 444)(34, PassengerDetailsPage_ng_container_4_ion_card_27_div_1_ion_row_34_Template, 3, 2, "ion-row", 1)(35, PassengerDetailsPage_ng_container_4_ion_card_27_div_1_ion_row_35_Template, 16, 2, "ion-row", 1)(36, PassengerDetailsPage_ng_container_4_ion_card_27_div_1_div_36_Template, 3, 0, "div", 445);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_18_0;
    const ctx_r138 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    const seat_r140 = ctx_r138.$implicit;
    const i_r136 = ctx_r138.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("formGroup", ctx_r1.passengerForm[i_r136]);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", i_r136 == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", i_r136 > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](seat_r140.seat_number);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", seat_r140.sex != "" && seat_r140.sex === "Ms");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("disabled", ctx_r1.isDisabled(i_r136, 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngClass", seat_r140.sex === "Mr" && !seat_r140.sexOptional ? "gender" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", "Male", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("disabled", ctx_r1.isDisabled(i_r136, 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngClass", seat_r140.sex === "Ms" && !seat_r140.sexOptional ? "gender" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", "Female", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.locale && ctx_r1.locale.passenger_details_config["Age"] && ctx_r1.locale.passenger_details_config["Age"] != "Hide");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.concessions_category && ctx_r1.concessions_category.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", (tmp_18_0 = ctx_r1.passengerForm.at(i_r136)) == null ? null : tmp_18_0.value == null ? null : tmp_18_0.value.isCard);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.metaData.idCardTypes && (ctx_r1.metaData.showCardTypes || ctx_r1.locale && ctx_r1.locale.passenger_details_config["Id Type"] && ctx_r1.locale.passenger_details_config["Id Type"] != "Hide"));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.metaData.showCardTypes && ctx_r1.passengerForm[i_r136].value.id_card_type == 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.metaData.idCardTypes && (ctx_r1.metaData.showCardTypes || ctx_r1.locale && ctx_r1.locale.passenger_details_config["Id Type"] && ctx_r1.locale.passenger_details_config["Id Type"] != "Hide"));
  }
}
function PassengerDetailsPage_ng_container_4_ion_card_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ion-card", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](1, PassengerDetailsPage_ng_container_4_ion_card_27_div_1_Template, 37, 17, "div", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.passengerForm.length === ctx_r1.onwardSeatDetails.length);
  }
}
function PassengerDetailsPage_ng_container_4_ion_card_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r147 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ion-card", 460)(1, "ion-item", 202)(2, "ion-label", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](3, "Copy Onward Details To Return");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](4, "ion-checkbox", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayListener"]("ngModelChange", function PassengerDetailsPage_ng_container_4_ion_card_28_Template_ion_checkbox_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r147);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayBindingSet"](ctx_r1.copyData, $event) || (ctx_r1.copyData = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("ionChange", function PassengerDetailsPage_ng_container_4_ion_card_28_Template_ion_checkbox_ionChange_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r147);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.copyDataToReturn());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.copyData);
  }
}
function PassengerDetailsPage_ng_container_4_div_29_ion_card_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1, "Traveller details (For return journey)");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
}
function PassengerDetailsPage_ng_container_4_div_29_ion_card_1_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "span", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const i_r149 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().index;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"]("Passenger ", i_r149 + 1, "");
  }
}
function PassengerDetailsPage_ng_container_4_div_29_ion_card_1_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "span", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const i_r149 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().index;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"]("Passenger ", i_r149 + 1, "");
  }
}
function PassengerDetailsPage_ng_container_4_div_29_ion_card_1_ion_col_31_ion_input_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r150 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ion-input", 464);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("keyup", function PassengerDetailsPage_ng_container_4_div_29_ion_card_1_ion_col_31_ion_input_4_Template_ion_input_keyup_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r150);
      const i_r149 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2).index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.onAgeChange($event, i_r149, 2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
}
function PassengerDetailsPage_ng_container_4_div_29_ion_card_1_ion_col_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ion-col", 439)(1, "div", 446);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2, "Age");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "ion-item", 202);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](4, PassengerDetailsPage_ng_container_4_div_29_ion_card_1_ion_col_31_ion_input_4_Template, 1, 0, "ion-input", 463);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", !(ctx_r1.metaData == null ? null : ctx_r1.metaData.gst_tsrtc_enable));
  }
}
function PassengerDetailsPage_ng_container_4_div_29_ion_card_1_ion_row_32_ion_select_option_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ion-select-option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r154 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpropertyInterpolate"]("value", item_r154.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](item_r154.type);
  }
}
function PassengerDetailsPage_ng_container_4_div_29_ion_card_1_ion_row_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r151 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ion-row")(1, "ion-col", 181)(2, "ion-item", 182)(3, "ion-select", 211);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("ionChange", function PassengerDetailsPage_ng_container_4_div_29_ion_card_1_ion_row_32_Template_ion_select_ionChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r151);
      const ctx_r151 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      const seat_r153 = ctx_r151.$implicit;
      const i_r149 = ctx_r151.index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.onConcessionChange($event, i_r149, 2, seat_r153));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](4, PassengerDetailsPage_ng_container_4_div_29_ion_card_1_ion_row_32_ion_select_option_4_Template, 2, 2, "ion-select-option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](5, "ion-icon", 212);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngForOf", ctx_r1.concessions_category);
  }
}
function PassengerDetailsPage_ng_container_4_div_29_ion_card_1_ion_card_33_ion_col_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r156 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ion-col", 120)(1, "div", 415);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2, "Card Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "ion-item", 450);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function PassengerDetailsPage_ng_container_4_div_29_ion_card_1_ion_card_33_ion_col_8_Template_ion_item_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r156);
      const ctx_r151 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
      const seat_r153 = ctx_r151.$implicit;
      const i_r149 = ctx_r151.index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.cardDetails(null, i_r149, 2, seat_r153));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](4, "ion-input", 466);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("readonly", true);
  }
}
function PassengerDetailsPage_ng_container_4_div_29_ion_card_1_ion_card_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r155 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ion-card", 185)(1, "ion-grid")(2, "ion-row")(3, "ion-col", 186)(4, "div", 415);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](5, "Card Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](6, "ion-item", 430)(7, "ion-input", 465);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("keyup", function PassengerDetailsPage_ng_container_4_div_29_ion_card_1_ion_card_33_Template_ion_input_keyup_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r155);
      const ctx_r151 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      const seat_r153 = ctx_r151.$implicit;
      const i_r149 = ctx_r151.index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.cardDetails($event, i_r149, 2, seat_r153));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](8, PassengerDetailsPage_ng_container_4_div_29_ion_card_1_ion_card_33_ion_col_8_Template, 5, 1, "ion-col", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const i_r149 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("size", ctx_r1.cardValidationRequiredStateReturn[i_r149] ? 6 : 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpropertyInterpolate1"]("id", "inputR", i_r149, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.cardValidationRequiredStateReturn[i_r149]);
  }
}
function PassengerDetailsPage_ng_container_4_div_29_ion_card_1_ion_col_35_ng_container_4_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ion-select-option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const key_r157 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpropertyInterpolate"]("value", ctx_r1.metaData.idCardTypes[key_r157]);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](key_r157);
  }
}
function PassengerDetailsPage_ng_container_4_div_29_ion_card_1_ion_col_35_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](1, "ion-select", 454);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](2, PassengerDetailsPage_ng_container_4_div_29_ion_card_1_ion_col_35_ng_container_4_ng_template_2_Template, 2, 2, "ng-template", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngForOf", ctx_r1.object.keys(ctx_r1.metaData.idCardTypes));
  }
}
function PassengerDetailsPage_ng_container_4_div_29_ion_card_1_ion_col_35_ng_container_5_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ion-select-option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const key_r158 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpropertyInterpolate"]("value", key_r158.card_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](key_r158.card_type);
  }
}
function PassengerDetailsPage_ng_container_4_div_29_ion_card_1_ion_col_35_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](1, "ion-select", 454);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](2, PassengerDetailsPage_ng_container_4_div_29_ion_card_1_ion_col_35_ng_container_5_ng_template_2_Template, 2, 2, "ng-template", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngForOf", ctx_r1.metaData.idCardTypes);
  }
}
function PassengerDetailsPage_ng_container_4_div_29_ion_card_1_ion_col_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ion-col", 186)(1, "div", 415);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2, "ID Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "ion-item", 453);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](4, PassengerDetailsPage_ng_container_4_div_29_ion_card_1_ion_col_35_ng_container_4_Template, 3, 1, "ng-container", 1)(5, PassengerDetailsPage_ng_container_4_div_29_ion_card_1_ion_col_35_ng_container_5_Template, 3, 1, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpropertyInterpolate"]("size", ctx_r1.metaData.idCardTypes && ctx_r1.locale && ctx_r1.locale.passenger_details_config["Id No"] != "Hide" ? "6" : "12");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", !ctx_r1.isArray(ctx_r1.metaData.idCardTypes));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.isArray(ctx_r1.metaData.idCardTypes));
  }
}
function PassengerDetailsPage_ng_container_4_div_29_ion_card_1_ion_col_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ion-col", 120)(1, "div", 415);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2, "ID Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "ion-item", 430);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](4, "ion-input", 467);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }
}
function PassengerDetailsPage_ng_container_4_div_29_ion_card_1_ion_row_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r159 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ion-row")(1, "ion-col", 196)(2, "div")(3, "div", 415);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](4, "Issue Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](5, "ion-item", 430)(6, "ion-input", 468);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function PassengerDetailsPage_ng_container_4_div_29_ion_card_1_ion_row_37_Template_ion_input_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r159);
      const i_r149 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.selectPassportDateR(1, ctx_r1.passengerFormR[i_r149].value.passport_issued_date, i_r149));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](7, "ion-col", 196)(8, "div")(9, "div", 415);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](10, "Expiry Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](11, "ion-item", 430)(12, "ion-input", 457);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function PassengerDetailsPage_ng_container_4_div_29_ion_card_1_ion_row_37_Template_ion_input_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r159);
      const i_r149 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.selectPassportDateR(2, ctx_r1.passengerFormR[i_r149].value.passport_issued_date, i_r149));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](13, "ion-col", 196)(14, "div", 415);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](15, "Place of issue");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](16, "ion-item", 430);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](17, "ion-input", 469);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("readonly", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("readonly", true);
  }
}
function PassengerDetailsPage_ng_container_4_div_29_ion_card_1_div_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 459)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2, " Enter valid ID details; otherwise, it will impact your journey or package. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }
}
function PassengerDetailsPage_ng_container_4_div_29_ion_card_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r148 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ion-card", 161)(1, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](2, PassengerDetailsPage_ng_container_4_div_29_ion_card_1_div_2_Template, 2, 0, "div", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](4, PassengerDetailsPage_ng_container_4_div_29_ion_card_1_span_4_Template, 2, 1, "span", 163)(5, PassengerDetailsPage_ng_container_4_div_29_ion_card_1_span_5_Template, 2, 1, "span", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](6, "span", 436);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](7, "img", 437);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](8, "span", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](10, "ion-row")(11, "ion-col", 86)(12, "div", 415);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](13, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](14, "ion-item", 430)(15, "ion-input", 438);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("keyup", function PassengerDetailsPage_ng_container_4_div_29_ion_card_1_Template_ion_input_keyup_15_listener($event) {
      const i_r149 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r148).index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.onInputChange($event, i_r149, 2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](16, "div")(17, "ion-row", 181)(18, "ion-col", 439)(19, "ion-radio-group", 98)(20, "div", 415);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](21, "Gender");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](22, "div", 440)(23, "ion-item", 461);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function PassengerDetailsPage_ng_container_4_div_29_ion_card_1_Template_ion_item_click_23_listener() {
      const i_r149 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r148).index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.passengerForm[i_r149].controls["sex"].setValue("Mr"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](24, "ion-radio", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](25, "ion-label", 379);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](27, "ion-item", 442);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function PassengerDetailsPage_ng_container_4_div_29_ion_card_1_Template_ion_item_click_27_listener() {
      const i_r149 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r148).index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.passengerForm[i_r149].controls["sex"].setValue("Ms"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](28, "ion-radio", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](29, "ion-label", 379);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](31, PassengerDetailsPage_ng_container_4_div_29_ion_card_1_ion_col_31_Template, 5, 1, "ion-col", 443);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](32, PassengerDetailsPage_ng_container_4_div_29_ion_card_1_ion_row_32_Template, 6, 1, "ion-row", 1)(33, PassengerDetailsPage_ng_container_4_div_29_ion_card_1_ion_card_33_Template, 9, 4, "ion-card", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](34, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](35, PassengerDetailsPage_ng_container_4_div_29_ion_card_1_ion_col_35_Template, 6, 3, "ion-col", 452)(36, PassengerDetailsPage_ng_container_4_div_29_ion_card_1_ion_col_36_Template, 5, 0, "ion-col", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](37, PassengerDetailsPage_ng_container_4_div_29_ion_card_1_ion_row_37_Template, 18, 2, "ion-row", 1)(38, PassengerDetailsPage_ng_container_4_div_29_ion_card_1_div_38_Template, 3, 0, "div", 462);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const seat_r153 = ctx.$implicit;
    const i_r149 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("formGroup", ctx_r1.passengerFormR[i_r149]);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", i_r149 == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", i_r149 == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", i_r149 > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](seat_r153.seat_number);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("disabled", ctx_r1.isDisabled(i_r149, 2));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngClass", seat_r153.sex === "Mr" && !seat_r153.sexOptional ? "gender" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", "Male", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("disabled", ctx_r1.isDisabled(i_r149, 2));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngClass", seat_r153.sex === "Ms" && !seat_r153.sexOptional ? "gender" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", "Female", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.locale && ctx_r1.locale.passenger_details_config["Age"] && ctx_r1.locale.passenger_details_config["Age"] != "Hide");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.concessions_category && ctx_r1.concessions_category.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.passengerFormR[i_r149].value.isCard == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.metaData.idCardTypes && (ctx_r1.metaData.showCardTypes || ctx_r1.locale && ctx_r1.locale.passenger_details_config["Id Type"] && ctx_r1.locale.passenger_details_config["Id Type"] != "Hide"));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.metaData.showCardTypes || ctx_r1.locale && ctx_r1.locale.passenger_details_config["Id No"] && ctx_r1.locale.passenger_details_config["Id No"] != "Hide");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.metaData.showCardTypes && ctx_r1.passengerFormR[i_r149].value.id_card_type == 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.metaData.idCardTypes && (ctx_r1.metaData.showCardTypes || ctx_r1.locale && ctx_r1.locale.passenger_details_config["Id Type"] && ctx_r1.locale.passenger_details_config["Id Type"] != "Hide"));
  }
}
function PassengerDetailsPage_ng_container_4_div_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](1, PassengerDetailsPage_ng_container_4_div_29_ion_card_1_Template, 39, 18, "ion-card", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngForOf", ctx_r1.returnSeatDetails);
  }
}
function PassengerDetailsPage_ng_container_4_ng_container_30_ion_card_1_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 415);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1, "Pin Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
}
function PassengerDetailsPage_ng_container_4_ng_container_30_ion_card_1_ion_item_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r161 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ion-item", 475)(1, "ion-input", 476);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("ionInput", function PassengerDetailsPage_ng_container_4_ng_container_30_ion_card_1_ion_item_9_Template_ion_input_ionInput_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r161);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.onchangeStateId($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayListener"]("ngModelChange", function PassengerDetailsPage_ng_container_4_ng_container_30_ion_card_1_ion_item_9_Template_ion_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r161);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayBindingSet"](ctx_r1.stateId, $event) || (ctx_r1.stateId = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.stateId);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpureFunction0"](2, _c1));
  }
}
function PassengerDetailsPage_ng_container_4_ng_container_30_ion_card_1_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 415);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1, "State");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
}
function PassengerDetailsPage_ng_container_4_ng_container_30_ion_card_1_ion_item_11_ion_select_option_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ion-select-option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r163 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpropertyInterpolate"]("value", item_r163.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"]("", item_r163.name, " ");
  }
}
function PassengerDetailsPage_ng_container_4_ng_container_30_ion_card_1_ion_item_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r162 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ion-item", 475)(1, "ion-select", 477);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("ionChange", function PassengerDetailsPage_ng_container_4_ng_container_30_ion_card_1_ion_item_11_Template_ion_select_ionChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r162);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.onchangeId($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayListener"]("ngModelChange", function PassengerDetailsPage_ng_container_4_ng_container_30_ion_card_1_ion_item_11_Template_ion_select_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r162);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayBindingSet"](ctx_r1.stateType, $event) || (ctx_r1.stateType = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](2, PassengerDetailsPage_ng_container_4_ng_container_30_ion_card_1_ion_item_11_ion_select_option_2_Template, 2, 2, "ion-select-option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpropertyInterpolate"]("value", ctx_r1.stateGetName);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.stateType);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpureFunction0"](5, _c1))("interfaceOptions", ctx_r1.stateOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngForOf", ctx_r1.state);
  }
}
function PassengerDetailsPage_ng_container_4_ng_container_30_ion_card_1_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 415);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1, "City");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
}
function PassengerDetailsPage_ng_container_4_ng_container_30_ion_card_1_ion_item_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r164 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ion-item", 475)(1, "ion-input", 478);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("keyup", function PassengerDetailsPage_ng_container_4_ng_container_30_ion_card_1_ion_item_13_Template_ion_input_keyup_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r164);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.onchangeCityId($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayListener"]("ngModelChange", function PassengerDetailsPage_ng_container_4_ng_container_30_ion_card_1_ion_item_13_Template_ion_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r164);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayBindingSet"](ctx_r1.cityId, $event) || (ctx_r1.cityId = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpropertyInterpolate"]("value", ctx_r1.cityName ? ctx_r1.cityName : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.cityId);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpureFunction0"](3, _c1));
  }
}
function PassengerDetailsPage_ng_container_4_ng_container_30_ion_card_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r160 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ion-card", 220)(1, "div", 104)(2, "div", 471);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](3, "Residential Details.");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](4, "ion-icon", 472);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function PassengerDetailsPage_ng_container_4_ng_container_30_ion_card_1_Template_ion_icon_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r160);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.showWalletDets = !ctx_r1.showWalletDets);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](5, "div")(6, "p", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](7, "Please enter your residential details.");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](8, PassengerDetailsPage_ng_container_4_ng_container_30_ion_card_1_div_8_Template, 2, 0, "div", 473)(9, PassengerDetailsPage_ng_container_4_ng_container_30_ion_card_1_ion_item_9_Template, 2, 3, "ion-item", 474)(10, PassengerDetailsPage_ng_container_4_ng_container_30_ion_card_1_div_10_Template, 2, 0, "div", 473)(11, PassengerDetailsPage_ng_container_4_ng_container_30_ion_card_1_ion_item_11_Template, 3, 6, "ion-item", 474)(12, PassengerDetailsPage_ng_container_4_ng_container_30_ion_card_1_div_12_Template, 2, 0, "div", 473)(13, PassengerDetailsPage_ng_container_4_ng_container_30_ion_card_1_ion_item_13_Template, 2, 4, "ion-item", 474);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngClass", ctx_r1.businessTravel ? "businessTravelclick" : "businessTravelunclick");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", (ctx_r1.gstInfoConfig == null ? null : ctx_r1.gstInfoConfig.pincode) && ctx_r1.gstInfoConfig.pincode == "show" || ctx_r1.gstInfoConfig == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", (ctx_r1.gstInfoConfig == null ? null : ctx_r1.gstInfoConfig.pincode) && ctx_r1.gstInfoConfig.pincode == "show" || ctx_r1.gstInfoConfig == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", (ctx_r1.gstInfoConfig == null ? null : ctx_r1.gstInfoConfig.state) && ctx_r1.gstInfoConfig.state == "show" || ctx_r1.gstInfoConfig == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", (ctx_r1.gstInfoConfig == null ? null : ctx_r1.gstInfoConfig.state) && ctx_r1.gstInfoConfig.state == "show" || ctx_r1.gstInfoConfig == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", (ctx_r1.gstInfoConfig == null ? null : ctx_r1.gstInfoConfig.city) && ctx_r1.gstInfoConfig.city == "show" || ctx_r1.gstInfoConfig == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", (ctx_r1.gstInfoConfig == null ? null : ctx_r1.gstInfoConfig.city) && ctx_r1.gstInfoConfig.city == "show" || ctx_r1.gstInfoConfig == null);
  }
}
function PassengerDetailsPage_ng_container_4_ng_container_30_ion_card_2_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r166 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div")(1, "div", 415);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2, "GST No");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "ion-item", 430)(4, "ion-input", 482, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("keyup", function PassengerDetailsPage_ng_container_4_ng_container_30_ion_card_2_div_5_Template_ion_input_keyup_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r166);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.onchangeGstId($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayListener"]("ngModelChange", function PassengerDetailsPage_ng_container_4_ng_container_30_ion_card_2_div_5_Template_ion_input_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r166);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayBindingSet"](ctx_r1.gstId, $event) || (ctx_r1.gstId = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](6, "div", 415);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](7, "Registered company name");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](8, "ion-item", 483)(9, "ion-input", 484);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayListener"]("ngModelChange", function PassengerDetailsPage_ng_container_4_ng_container_30_ion_card_2_div_5_Template_ion_input_ngModelChange_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r166);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayBindingSet"](ctx_r1.gstName, $event) || (ctx_r1.gstName = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.gstId);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpureFunction0"](4, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.gstName);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpureFunction0"](5, _c1));
  }
}
function PassengerDetailsPage_ng_container_4_ng_container_30_ion_card_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r165 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ion-card", 479)(1, "ion-item", 202)(2, "ion-label", 480);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](3, "I Am Booking For Business Travel");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](4, "ion-checkbox", 481);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("ionChange", function PassengerDetailsPage_ng_container_4_ng_container_30_ion_card_2_Template_ion_checkbox_ionChange_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r165);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.gstInfo());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayListener"]("ngModelChange", function PassengerDetailsPage_ng_container_4_ng_container_30_ion_card_2_Template_ion_checkbox_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r165);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayBindingSet"](ctx_r1.businessTravel, $event) || (ctx_r1.businessTravel = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](5, PassengerDetailsPage_ng_container_4_ng_container_30_ion_card_2_div_5_Template, 10, 6, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngClass", ctx_r1.businessTravel ? "businessTravelclick" : "businessTravelunclick");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.businessTravel);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpureFunction0"](4, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.businessTravel);
  }
}
function PassengerDetailsPage_ng_container_4_ng_container_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](1, PassengerDetailsPage_ng_container_4_ng_container_30_ion_card_1_Template, 14, 7, "ion-card", 219)(2, PassengerDetailsPage_ng_container_4_ng_container_30_ion_card_2_Template, 6, 5, "ion-card", 470);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", !ctx_r1.commonService.isAbcApp() && ctx_r1.commonStorage.getItem("isServiceTaxApplicable") && ctx_r1.showPincodeCard);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", !ctx_r1.commonService.isAbcApp() && ctx_r1.commonStorage.getItem("isServiceTaxApplicable"));
  }
}
function PassengerDetailsPage_ng_container_4_ion_row_32_p_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "p", 492);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1, " (Excluding VAT) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
}
function PassengerDetailsPage_ng_container_4_ion_row_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r167 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ion-row", 485)(1, "ion-col", 486)(2, "h2", 487);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](4, "p", 488);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function PassengerDetailsPage_ng_container_4_ion_row_32_Template_p_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r167);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.callFarebreakup());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](5, " View Breakup ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](6, PassengerDetailsPage_ng_container_4_ion_row_32_p_6_Template, 2, 0, "p", 489);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](7, "ion-col", 490)(8, "ion-button", 491);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function PassengerDetailsPage_ng_container_4_ion_row_32_Template_ion_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r167);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.submitPassengerDetails());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](9, " Continue ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate2"](" ", ctx_r1.currencySym, "", ctx_r1.payAmount(ctx_r1.globalData.RESERVATION_DATA.totalBookingAmount + (ctx_r1.globalData.RESERVATION_DATA_RETURN && ctx_r1.globalData.RESERVATION_DATA_RETURN.totalBookingAmount ? ctx_r1.globalData.RESERVATION_DATA_RETURN.totalBookingAmount : 0)), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.commonService.isAbcApp());
  }
}
function PassengerDetailsPage_ng_container_4_div_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r168 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 118)(1, "div", 119)(2, "ion-row")(3, "ion-col", 120)(4, "p", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](5, "Important Note!!");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](6, "ion-col", 120)(7, "p", 231);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function PassengerDetailsPage_ng_container_4_div_33_Template_p_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r168);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.showWalletDets = !ctx_r1.showWalletDets);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](8, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](9, "div", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](10, " As per the Govt new GST Rule - 46 Passengers are Mandated to provide their residential State, City and Pin Code details for the Bookings. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
  }
}
function PassengerDetailsPage_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r130 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](1, "ion-header", 411)(2, "ion-toolbar", 412)(3, "ion-title", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](4, "Passenger Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](5, "ion-buttons", 5)(6, "ion-back-button", 190);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function PassengerDetailsPage_ng_container_4_Template_ion_back_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r130);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.goBack());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](7, "ion-content", 413)(8, "form", 414)(9, "ion-card", 127)(10, "div", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](11, "Contact Information");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](12, "div", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](13, " Your ticket and bus details will be sent here ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](14, "div", 415);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](15, "Mobile Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](16, "ion-item", 416)(17, "div", 417);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](18, PassengerDetailsPage_ng_container_4_div_18_Template, 2, 1, "div", 418)(19, PassengerDetailsPage_ng_container_4_ion_select_19_Template, 2, 1, "ion-select", 419);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](20, "ion-input", 420);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("keyup", function PassengerDetailsPage_ng_container_4_Template_ion_input_keyup_20_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r130);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.onPhoneChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](21, PassengerDetailsPage_ng_container_4_p_21_Template, 2, 0, "p", 421);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](22, "div", 415);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](23, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](24, PassengerDetailsPage_ng_container_4_ion_item_24_Template, 2, 0, "ion-item", 422)(25, PassengerDetailsPage_ng_container_4_ion_row_25_Template, 9, 3, "ion-row", 423);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](26, PassengerDetailsPage_ng_container_4_ion_card_26_Template, 5, 0, "ion-card", 424)(27, PassengerDetailsPage_ng_container_4_ion_card_27_Template, 2, 1, "ion-card", 138)(28, PassengerDetailsPage_ng_container_4_ion_card_28_Template, 5, 1, "ion-card", 425)(29, PassengerDetailsPage_ng_container_4_div_29_Template, 2, 1, "div", 1)(30, PassengerDetailsPage_ng_container_4_ng_container_30_Template, 3, 2, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](31, "ion-footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](32, PassengerDetailsPage_ng_container_4_ion_row_32_Template, 10, 3, "ion-row", 426);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](33, PassengerDetailsPage_ng_container_4_div_33_Template, 11, 0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("formGroup", ctx_r1.contactForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.metaData.show_countries_isd_codes_selection);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", !ctx_r1.metaData.show_countries_isd_codes_selection);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.selected_Country_code != "+91");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.locale && ctx_r1.locale.passenger_details_config["Email"] && ctx_r1.locale.passenger_details_config["Email"] != "Hide");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.metaData && ctx_r1.metaData.isWhatsapp);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.isLogin);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngForOf", ctx_r1.onwardSeatDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.isReturn);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.isReturn);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", !(ctx_r1.metaData == null ? null : ctx_r1.metaData.gst_tsrtc_enable));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.metaData.msiteFolder == "shyamolitheme");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.showWalletDets);
  }
}
class PassengerDetailsPage {
  constructor(globalData, navCtrl, commonStorage,
  //public viewCtrl: ViewController,
  elem, modalCtrl, loading, formBuilder, util, theme, authenticate, dateService, platform, ex, commonService, apiFactory, route, modalController, router, appData, firebaseAnalyticsService, fb, toastController) {
    var _this$gstInfoConfig, _this$gstInfoConfig2, _this$gstInfoConfig3;
    this.globalData = globalData;
    this.navCtrl = navCtrl;
    this.commonStorage = commonStorage;
    this.elem = elem;
    this.modalCtrl = modalCtrl;
    this.loading = loading;
    this.formBuilder = formBuilder;
    this.util = util;
    this.theme = theme;
    this.authenticate = authenticate;
    this.dateService = dateService;
    this.platform = platform;
    this.ex = ex;
    this.commonService = commonService;
    this.apiFactory = apiFactory;
    this.route = route;
    this.modalController = modalController;
    this.router = router;
    this.appData = appData;
    this.firebaseAnalyticsService = firebaseAnalyticsService;
    this.fb = fb;
    this.toastController = toastController;
    this.gstId = '';
    this.stateId = '';
    this.cityId = '';
    this.stateType = '';
    this.gstName = '';
    this.passengerForm = [];
    this.businessTravel = false;
    this.isReserved = [];
    this.showFormError = false;
    this.showContinue = true;
    this.onwardSeatDetails = [];
    this.returnSeatDetails = [];
    this.isReturn = false;
    this.isBima = false;
    this.passengerFormR = [];
    this.copyData = false;
    this.childFareAmtLess = 0;
    this.isBPDP = false;
    this.object = Object;
    this.selectedPassengerList = [];
    this.isLogin = false;
    this.flag = 1;
    this.isSnackAvailable = false;
    this.wakeUpCall = false;
    this.showWalletDets = false;
    this.cityName = '';
    this.stateGetName = '';
    this.stateGetName1 = '';
    this.getGstInfo = {};
    this.isWPSwitchOn = true;
    this.selected_Country_code = '+91';
    this.subdomain = '';
    this.getdate_go = {};
    this.getDate_come = {};
    this.datafill = false;
    this.isWPBooking = false;
    this.isEditable = true;
    this.selectedCountry = '';
    this.flagSelected = '';
    this.dialCodeSelected = '';
    this.isState = true;
    this.gstvalid = true;
    this.isIos = false;
    this.generalPublic = 'GENERAL PUBLIC';
    this.journaList = 'JOURNALIST';
    this.rtdRtcEmployee = 'RTD RTC EMPLOYEE';
    this.ageBlurSubject = new rxjs__WEBPACK_IMPORTED_MODULE_22__.Subject();
    this.cardValidationRequired = false;
    this.passengerStructure = false;
    this.cardValidationRequiredState = [];
    this.cardValidationRequiredStateReturn = [];
    this.concession_details = [];
    this.isProfileUpdateNeeded = false;
    this.stateOptions = {
      header: "Select State"
    };
    this.showPincodeCard = true;
    this.mobileNumberValue = "";
    const platformnew = _capacitor_core__WEBPACK_IMPORTED_MODULE_8__.Capacitor.getPlatform();
    this.isIos = platformnew === 'ios' ? true : false;
    this.metaData = commonStorage.localGet('metaData');
    this.getGstInfo = this.metaData.gst_info;
    this.gstInfoConfig = this.metaData.gst_info_config;
    if (this.gstInfoConfig == null || ((_this$gstInfoConfig = this.gstInfoConfig) === null || _this$gstInfoConfig === void 0 ? void 0 : _this$gstInfoConfig.state) == "show" || ((_this$gstInfoConfig2 = this.gstInfoConfig) === null || _this$gstInfoConfig2 === void 0 ? void 0 : _this$gstInfoConfig2.city) == "show" || ((_this$gstInfoConfig3 = this.gstInfoConfig) === null || _this$gstInfoConfig3 === void 0 ? void 0 : _this$gstInfoConfig3.pincode) == "show") {
      this.showPincodeCard = true;
    } else {
      this.showPincodeCard = false;
    }
    this.isServiceTaxApplicable = this.commonStorage.getItem('isServiceTaxApplicable');
    const datafill = this.commonStorage.localGet('autofillData') ? this.commonStorage.localGet('autofillData') : false;
    const seatnum_detail = this.commonStorage.localGet('ticketRecentData');
    this.fillSeatData = this.commonStorage.localGet('ticketRecentData');
    if (datafill) {
      this.passDetail = seatnum_detail && seatnum_detail.result.passengerDetails ? seatnum_detail.result.passengerDetails : [];
      this.datafill = datafill;
    } else {
      this.passDetail = [];
      this.datafill = false;
    }
    console.log("this.commonStorage.localGet('timeDifferenceHour')", this.commonStorage.localGet('timeDifferenceHour'));
    console.log("this.commonStorage.localGet('timeDifferenceMinute')", this.commonStorage.localGet('timeDifferenceMinute'));
    this.mainTimeDiffrence = this.commonStorage.localGet('timeDifferenceHour') + ' h' + ' ' + this.commonStorage.localGet('timeDifferenceMinute') + ' m';
  }
  goBack() {
    // this.router.navigate(['/seat-layout']);
    let isreturnTrip;
    this.route.queryParams.subscribe(params => {
      isreturnTrip = params["is_return_trip"];
    });
    if (isreturnTrip) {
      var _this$metaData;
      let navigationExtras = {
        queryParams: {
          is_return_trip: true
        }
      };
      if ((_this$metaData = this.metaData) !== null && _this$metaData !== void 0 && _this$metaData.allowBPDPFare) {
        this.navCtrl.navigateForward('/seat-layout', navigationExtras);
      } else {
        this.navCtrl.navigateForward('/stage-details', navigationExtras);
      }
    } else {
      var _this$metaData2;
      if ((_this$metaData2 = this.metaData) !== null && _this$metaData2 !== void 0 && _this$metaData2.allowBPDPFare) {
        this.router.navigate(['/seat-layout']);
      } else {
        this.router.navigate(['/stage-details']);
      }
    }
  }
  gstInfo() {
    if (this.businessTravel) {
      setTimeout(() => {
        if (this.ionInputGst) {
          this.ionInputGst.setFocus();
        }
      }, 100);
    }
    if (this.metaData.msiteFolder != 'ourbustheme') {
      this.globalData.IS_GST = this.businessTravel;
    } else {
      this.commonStorage.localSet("businessTravelToggole", this.businessTravel);
    }
  }
  ngOnInit() {
    var _this$commonStorage$g, _this$commonStorage$g2, _this$commonStorage$g3, _this$commonStorage$g4;
    // need to declare form
    this.contactForm = this.fb.group({
      country_code: [''],
      mobile_number: [''],
      email: ['']
    });
    this.firebaseAnalyticsService.logCustomEvent('passenger_details_page', {
      page: 'Passenger Details Page'
    });
    this.metaData = this.commonStorage.localGet('metaData');
    if (this.commonStorage.localGet("gstIdOurbus") && this.commonStorage.localGet("gstNameOurbus")) {
      this.gstId = this.commonStorage.localGet("gstIdOurbus");
      this.gstName = this.commonStorage.localGet("gstNameOurbus");
    }
    this.countryData = _countries_countries_json__WEBPACK_IMPORTED_MODULE_6__;
    this.selectedCountry = this.countryData.find(country => country.dialCode === "+91");
    this.appData.newTheme = this.util.getNewTheme();
    // this.util.getCountries().subscribe(data => {
    //   this.countries = data;
    // });
    this.concessions_category = (_this$commonStorage$g = this.commonStorage.getItem('serviceDetails')) !== null && _this$commonStorage$g !== void 0 && _this$commonStorage$g.concessions_category ? (_this$commonStorage$g2 = this.commonStorage.getItem('serviceDetails')) === null || _this$commonStorage$g2 === void 0 ? void 0 : _this$commonStorage$g2.concessions_category : '';
    this.businessTravel = this.globalData.IS_GST;
    if (this.commonService.isAbcApp()) {
      this.businessTravel = false;
    }
    this.route.queryParams.subscribe(params => {
      this.isReturn = params["is_return_trip"];
      this.isBPDP = params["isBPDP"];
      this.subdomain = this.metaData && this.metaData.operatorInternalUrl ? this.metaData.operatorInternalUrl.split('.')[0] : '';
      this.defaultCall();
    });
    if (this.isReturn) {
      this.mainTimeDiffrenceReturn = this.commonStorage.localGet('timeDifferenceHourReturn') + ' h' + ' ' + this.commonStorage.localGet('timeDifferenceMinuteReturn') + ' m';
      if (localStorage.getItem('currentUser')) {
        this.isLogin = true;
      } else {
        this.isLogin = false;
      }
    } else {
      this.mainTimeDiffrence = this.commonStorage.localGet('timeDifferenceHour') + ' h' + ' ' + this.commonStorage.localGet('timeDifferenceMinute') + ' m';
    }
    this.gstState();
    this.concessions_category = (_this$commonStorage$g3 = this.commonStorage.getItem('serviceDetails')) !== null && _this$commonStorage$g3 !== void 0 && _this$commonStorage$g3.concessions_category ? (_this$commonStorage$g4 = this.commonStorage.getItem('serviceDetails')) === null || _this$commonStorage$g4 === void 0 ? void 0 : _this$commonStorage$g4.concessions_category : '';
    this.util.getCountries().subscribe({
      next: data => {
        if (Array.isArray(data)) {
          console.log('Processed Country Data:', data);
          this.countries = data; // Store processed data
        } else {
          console.error('Unexpected response format:', data);
        }
      },
      error: err => {
        console.error('Error fetching country data:', err);
      }
    });
    this.ageBlurSubscription = this.ageBlurSubject.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_23__.debounceTime)(500)).subscribe(({
      event,
      i,
      formType
    }) => {
      this.handleAgeBlur(event, i, formType);
    });
    // this.initializePage();
  }
  initializePage() {
    return (0,_Users_ahemad_Documents_officeWorkspace_capacitor_customer_app_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {})();
  } // await this.createPassengerDataStructure()
  // this.passengerStructure = true;
  selectCountry_code() {
    var _this = this;
    return (0,_Users_ahemad_Documents_officeWorkspace_capacitor_customer_app_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this.metaData.msiteFolder == 'ourbustheme') {
        const reformattedCountries = _this.countryData.map(country => ({
          name: country.name,
          cca2: country.code,
          idd: country.dialCode,
          flags: country.flag
        }));
        const modal = yield _this.modalController.create({
          component: _cities_modal_cities_modal_page__WEBPACK_IMPORTED_MODULE_4__.CitiesModalPage,
          componentProps: {
            "list": 9,
            "destinationList": reformattedCountries,
            "isOurbus": 'true'
          }
        });
        yield modal.present();
        const {
          data
        } = yield modal.onDidDismiss();
        if (data != '') {
          _this.selectedCountry = null;
          _this.flagSelected = data.flags;
          _this.dialCodeSelected = data.idd;
        }
      } else {
        const modal = yield _this.modalController.create({
          component: _cities_modal_cities_modal_page__WEBPACK_IMPORTED_MODULE_4__.CitiesModalPage,
          componentProps: {
            "list": 9,
            "destinationList": _this.countries,
            "isOurbus": 'false'
          }
        });
        yield modal.present();
        const {
          data
        } = yield modal.onDidDismiss();
        if (data != '') {
          _this.selected_Country_code = data.idd;
        }
      }
    })();
  }
  ionViewWillEnter() {
    // this.commonService.gTrack('passengerPage', 'passenger page is being displayed')
    if (this.metaData.isWhatsapp) {
      this.onChangeWhatsappSwitch();
    }
    this.isWPBooking = this.commonStorage.localGet('isWPBooking');
    if (this.isWPBooking) {
      let mobile = this.commonStorage.localGet('wpMobileNo');
      this.contactForm.controls['mobile_number'].setValue(mobile);
    }
    this.isSnackAvailable = this.commonStorage.localGet('isSnackAvailable');
    this.commonStorage.localSet('snack_details', null);
  }
  gotoPaymentDetails() {
    this.globalData.GST_ID = this.gstId;
    this.globalData.GST_NAME = this.gstName;
    this.commonStorage.localSet("gstId", this.globalData.GST_ID);
    this.commonStorage.localSet("gstName", this.globalData.GST_NAME);
    if (this.isReturn) {
      let navigationExtras = {
        queryParams: {
          is_return_trip: true
        }
      };
      this.navCtrl.navigateForward('payment-details', navigationExtras);
    } else {
      this.navCtrl.navigateForward('payment-details');
    }
  }
  defaultCall() {
    try {
      this.commonService.setGloblaData();
      this.onwardSeatDetails = [];
      this.returnSeatDetails = [];
      this.passengerForm = [];
      this.passengerFormR = [];
      this.metaData = this.commonStorage.localGet('metaData');
      this.currencySym = this.metaData && this.metaData.currencySym ? this.metaData.currencySym : "₹";
      this.locale = this.commonStorage.localGet('locale');
      if (this.authenticate.isLoggedIn()) {
        this.personalInfo = this.authenticate.user();
        this.name = this.personalInfo ? this.personalInfo.name : '';
        this.mobileNo = this.personalInfo ? this.personalInfo.mobileNo : '';
        var splitData = this.personalInfo.email.split('@')[1];
        if (this.metaData.msiteFolder == 'ourbustheme') {
          if (splitData != 'ourbus-tmp.in') {
            this.email = this.personalInfo ? this.personalInfo.email : '';
          } else {
            this.isProfileUpdateNeeded = true;
            this.email = '';
          }
        } else {
          this.email = this.personalInfo ? this.personalInfo.email : '';
        }
        this.age = this.personalInfo ? this.personalInfo.dob ? this.dateService.getAge(this.personalInfo.dob, 'yyyy-mm-dd').toString() : '' : '';
      } else if (this.commonStorage.localGet('passengerDetails')) {
        this.personalInfo = this.commonStorage.localGet('passengerDetails').contact_detail;
        this.name = this.personalInfo ? this.personalInfo.emergency_name : '';
        this.mobileNo = this.personalInfo ? this.personalInfo.mobile_number : '';
        var splitData = this.personalInfo.email.split('@')[1];
        if (this.metaData.msiteFolder == 'ourbustheme') {
          if (splitData != 'ourbus-tmp.in') {
            this.email = this.personalInfo ? this.personalInfo.email : '';
          } else {
            this.isProfileUpdateNeeded = true;
            this.email = '';
          }
        } else {
          this.email = this.personalInfo ? this.personalInfo.email : '';
        }
      }
      this.destinationStageDetails = this.commonStorage.localGet('destinationStageDetails');
      this.originStageDetails = this.commonStorage.localGet('originStageDetails');
      this.reservationData = this.commonStorage.localGet("reservationData");
      console.log("reservationData", this.reservationData);
      if (this.isReturn) {
        this.reservationDataReturn = this.commonStorage.localGet("reservationDataReturn");
        this.originStageDetailsReturn = this.commonStorage.localGet('originStageDetailsReturn');
        this.destinationStageDetailsReturn = this.commonStorage.localGet('destinationStageDetailsReturn');
        this.selectedSeatsToBookReturn = this.commonStorage.localGet("reservationDataReturn").selectedSeatsToBook;
      }
      this.selectedSeatsToBook = this.reservationData.selectedSeatsToBook;
      this.origin = this.commonStorage.localGet("travelOrigin");
      this.destination = this.commonStorage.localGet("travelDestination");
      this.travelDate = this.commonStorage.localGet("travelDate");
      this.phoneNumCount = this.commonStorage.localGet('metaData').phoneNumCount;
      this.AllowedCountryCodes = this.commonStorage.localGet('metaData').AllowedCountryCodes;
      if (this.commonStorage.getItem('metaData').show_countries_isd_codes_selection) {
        if (this.AllowedCountryCodes[0] == '91') {
          this.selected_Country_code = '+91';
        } else {
          this.selected_Country_code = '+' + this.AllowedCountryCodes[0];
        }
      }
      this.errors = false;
      this.isChildFare = this.commonStorage.localGet('isChildFare');
      this.createPassengerDataStructure();
      this.travelDateHeader = this.dateService.headerDate(this.travelDate.formattedDate);
      this.selectedRoute = this.commonStorage.getItem('selectedRoute');
    } catch (e) {}
    this.farebreakUpcall();
  }
  getFormatDate(dateGet) {
    const [day, month, year] = dateGet.split("/");
    const travelDate = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
    return travelDate.toLocaleDateString('en-US', {
      weekday: 'short',
      // Fri
      month: 'short',
      // Nov
      day: '2-digit' // 08
    });
  }
  createPassengerDataStructure() {
    this.contactValidation();
    this.passengerStructure = true;
    try {
      var _this$globalData$RESE, _this$globalData, _this$globalData$RESE2, _this$globalData2;
      let contactDetails = {
        emergency_name: 'xxxx',
        mobile_number: this.personalInfo ? this.personalInfo.mobileNo : '',
        email: this.personalInfo ? this.personalInfo.email : ''
      };
      let seatDetails = [];
      if (this.commonStorage.localGet('passengerDetails')) {
        for (var j = 0; j < this.commonStorage.localGet('passengerDetails').seat_details.length; j++) {
          if (!this.commonStorage.localGet('passengerDetails').seat_details[j].is_round_trip_seat) {
            this.selectedSeatsToBook[j].name = this.commonStorage.localGet('passengerDetails').seat_details[j].name;
            this.selectedSeatsToBook[j].sex = this.commonStorage.localGet('passengerDetails').seat_details[j].sex;
            this.selectedSeatsToBook[j].age = this.commonStorage.localGet('passengerDetails').seat_details[j].age ? this.commonStorage.localGet('passengerDetails').seat_details[j].age : '';
            this.selectedSeatsToBook[j].name_by_id = this.commonStorage.localGet('passengerDetails').seat_details[j].name_by_id;
            this.selectedSeatsToBook[j].id_number = this.commonStorage.localGet('passengerDetails').seat_details[j].id_number;
            this.selectedSeatsToBook[j].concessions_category = this.commonStorage.localGet('passengerDetails').seat_details[j].concessions_category ? this.commonStorage.localGet('passengerDetails').seat_details[j].concessions_category : '';
          }
        }
      }
      console.log("this.globalData.RESERVATION_DATA.selectedSeatsToBook", this.globalData.RESERVATION_DATA.selectedSeatsToBook);
      console.log("this.onwardSeatDetails.length", this.onwardSeatDetails.length);
      let i = 0;
      // need to check the error
      if (this.onwardSeatDetails.length < ((_this$globalData$RESE = this.globalData.RESERVATION_DATA.selectedSeatsToBook) === null || _this$globalData$RESE === void 0 ? void 0 : _this$globalData$RESE.length)) {
        console.log(this.selectedSeatsToBook, 'this.selectedSeatsToBook');
        for (let seat of this.selectedSeatsToBook) {
          let isReserved = false;
          let gender = '';
          let sexOptional = true;
          // if(this.subdomain.includes('cbus') || this.subdomain.includes('lxmi')){
          if (this.metaData.msiteFolder == "cbustheme") {
            if (seat.isMaleOrFemale == 'male') {
              isReserved = true;
              gender = 'Mr';
              sexOptional = false;
            } else if (seat.isMaleOrFemale == 'female') {
              isReserved = true;
              gender = 'Ms';
              sexOptional = false;
            } else {
              if (seat.sex == 'Ms') {
                gender = 'Ms';
              } else {
                gender = 'Mr';
              }
            }
          } else {
            gender = seat.sex ? seat.sex : '';
            sexOptional = true;
            if (seat.is_gents_seat) {
              isReserved = true;
              gender = 'Mr';
              sexOptional = false;
            } else if (seat.is_ladies_seat) {
              isReserved = true;
              gender = 'Ms';
              sexOptional = false;
            } else {
              if (seat.sex == 'Ms') {
                gender = 'Ms';
              } else {
                gender = 'Mr';
              }
            }
          }
          seatDetails.push({
            is_primary: i === 0 ? true : false,
            seat_number: seat.number,
            fare: seat.fare,
            sex: gender,
            name: seat.name ? seat.name : '',
            age: seat.age ? seat.age : '',
            is_round_trip_seat: false,
            id_card_type: "",
            id_card_number: "",
            concessions_category: seat === null || seat === void 0 ? void 0 : seat.concessions_category,
            id_number: seat === null || seat === void 0 ? void 0 : seat.id_number,
            name_by_id: seat === null || seat === void 0 ? void 0 : seat.name_by_id
          });
          this.onwardSeatDetails.push({
            is_primary: i === 0 ? true : false,
            seat_number: seat.number,
            fare: seat.fare,
            sex: gender,
            name: seat.name ? seat.name : '',
            age: seat.age ? seat.age : '',
            sexOptional: sexOptional,
            concessions_category: seat === null || seat === void 0 ? void 0 : seat.concessions_category,
            id_number: seat.id_number,
            name_by_id: seat.name_by_id
          });
          console.log("onwardSeatDetails", this.onwardSeatDetails, seatDetails);
          if (this.personalInfo && i === 0) {
            this.validations({
              name: this.name,
              sex: gender,
              seat_number: seat.number,
              fare: seat.fare,
              age: seat.age ? seat.age : ''
              // age: this.age
            });
          } else {
            this.validations({
              name: seat.name ? seat.name : '',
              sex: gender,
              seat_number: seat.number,
              fare: seat.fare,
              age: seat.age ? seat.age : ''
            });
          }
          this.isReserved.push(isReserved);
          i++;
        }
      }
      let returnPassDtl = [];
      if (this.commonStorage.localGet('passengerDetails')) {
        for (var j = 0; j < this.commonStorage.localGet('passengerDetails').seat_details.length; j++) {
          if (this.commonStorage.localGet('passengerDetails').seat_details[j].is_round_trip_seat) {
            returnPassDtl.push(this.commonStorage.localGet('passengerDetails').seat_details[j]);
          }
        }
      }
      if (this.selectedSeatsToBookReturn) {
        for (var k = 0; k < returnPassDtl.length; k++) {
          this.selectedSeatsToBookReturn[k].name = returnPassDtl[k].name ? returnPassDtl[k].name : '';
          this.selectedSeatsToBookReturn[k].sex = returnPassDtl[k].sex ? returnPassDtl[k].sex : '';
          this.selectedSeatsToBookReturn[k].age = returnPassDtl[k].age ? returnPassDtl[k].age : '';
          if (this.concessions_category) {
            this.selectedSeatsToBookReturn[k].id_number = returnPassDtl[k].id_number ? returnPassDtl[k].id_number : '';
            this.selectedSeatsToBookReturn[k].name_by_id = returnPassDtl[k].name_by_id ? returnPassDtl[k].name_by_id : '';
            this.selectedSeatsToBookReturn[k].concessions_category = returnPassDtl[k].concessions_category ? returnPassDtl[k].concessions_category : '';
          }
        }
      }
      // need to check the error
      if (this.isReturn && (_this$globalData = this.globalData) !== null && _this$globalData !== void 0 && (_this$globalData = _this$globalData.DEPARTURE_DATE_RETURN) !== null && _this$globalData !== void 0 && _this$globalData.formattedDate && this.returnSeatDetails.length < ((_this$globalData$RESE2 = (_this$globalData2 = this.globalData) === null || _this$globalData2 === void 0 || (_this$globalData2 = _this$globalData2.RESERVATION_DATA_RETURN) === null || _this$globalData2 === void 0 || (_this$globalData2 = _this$globalData2.selectedSeatsToBook) === null || _this$globalData2 === void 0 ? void 0 : _this$globalData2.length) !== null && _this$globalData$RESE2 !== void 0 ? _this$globalData$RESE2 : 0)) {
        for (let seat of this.selectedSeatsToBookReturn) {
          let isReserved = false;
          let gender = '';
          let sexOptional = true;
          // if(this.subdomain.includes('cbus')){
          if (this.metaData.msiteFolder == "cbustheme") {
            if (seat.isMaleOrFemale == 'male') {
              isReserved = true;
              gender = 'Mr';
              sexOptional = false;
            } else if (seat.isMaleOrFemale == 'female') {
              isReserved = true;
              gender = 'Ms';
              sexOptional = false;
            }
          } else {
            gender = seat.sex ? seat.sex : '';
            sexOptional = true;
            if (seat.is_gents_seat) {
              isReserved = true;
              gender = 'Mr';
              sexOptional = false;
            } else if (seat.is_ladies_seat) {
              isReserved = true;
              gender = 'Ms';
              sexOptional = false;
            }
          }
          seatDetails.push({
            is_primary: i === 0 ? true : false,
            seat_number: seat.number,
            fare: seat.fare,
            sex: gender,
            name: seat.name ? seat.name : '',
            age: seat.age ? seat.age : '',
            is_round_trip_seat: true,
            id_card_type: null,
            id_card_number: null,
            concessions_category: seat === null || seat === void 0 ? void 0 : seat.concessions_category,
            id_number: seat.id_number,
            name_by_id: seat.name_by_id
          });
          this.returnSeatDetails.push({
            is_primary: i === 0 ? true : false,
            seat_number: seat.number,
            fare: seat.fare,
            sex: gender,
            name: seat.name ? seat.name : '',
            age: seat.age ? seat.age : '',
            sexOptional: sexOptional,
            concessions_category: seat === null || seat === void 0 ? void 0 : seat.concessions_category,
            id_number: seat.id_number,
            name_by_id: seat.name_by_id
          });
          this.validationsR({
            name: seat.name ? seat.name : '',
            sex: gender,
            seat_number: seat.number,
            fare: seat.fare,
            age: seat.age ? seat.age : '',
            concessions_category: seat.concessions_category,
            id_number: seat.id_number,
            name_by_id: seat.name_by_id
          });
          this.isReserved.push(isReserved);
          i++;
        }
      }
      let couponDetails;
      this.passengerDetails = {
        seat_details: seatDetails,
        contact_detail: contactDetails,
        coupon_details: couponDetails
        // gst_info: gstInfo
      };
      // this.contactValidation();
      i++;
      this.passengerStructure = false;
    } catch (e) {
      this.ex.call("PassengerDetail", "createPassengerDataStructure()", e);
    }
  }
  copyDataToReturn() {
    if (this.copyData) {
      this.copyDataToReturnMethod();
    } else {
      this.deleteDataFromReturnMethod();
    }
  }
  copyDataToReturnMethod() {
    for (let i = 0; i < this.passengerForm.length && i < this.passengerFormR.length; i++) {
      this.passengerFormR[i].controls['name'].setValue(this.passengerForm[i].controls.name.value);
      this.passengerFormR[i].controls['age'].setValue(this.passengerForm[i].controls.age.value);
      if (this.metaData.msiteFolder == "ourbustheme") {
        if (this.passengerFormR[i].controls['sex'].value !== 'Ms') {
          this.passengerFormR[i].controls['sex'].setValue(this.passengerForm[i].controls.sex.value);
        }
      } else {
        this.passengerFormR[i].controls['sex'].setValue(this.passengerForm[i].controls.sex.value);
      }
      this.passengerFormR[i].controls['id_card_type'].setValue(this.passengerForm[i].controls.id_card_type.value);
      this.passengerFormR[i].controls['id_card_number'].setValue(this.passengerForm[i].controls.id_card_number.value);
      this.passengerFormR[i].controls['passport_issued_date'].setValue(this.passengerForm[i].controls.passport_issued_date.value);
      this.passengerFormR[i].controls['passport_expiry_date'].setValue(this.passengerForm[i].controls.passport_expiry_date.value);
      this.passengerFormR[i].controls['place_of_issue'].setValue(this.passengerForm[i].controls.place_of_issue.value);
    }
  }
  deleteDataFromReturnMethod() {
    for (let i = 0; i < this.passengerForm.length && i < this.passengerFormR.length; i++) {
      this.passengerFormR[i].controls['name'].setValue("");
      if (this.metaData.msiteFolder == "ourbustheme") {
        if (this.passengerFormR[i].controls['sex'].value !== 'Ms') {
          this.passengerFormR[i].controls['sex'].setValue("");
        }
      } else {
        this.passengerFormR[i].controls['sex'].setValue("");
      }
      this.passengerFormR[i].controls['age'].setValue("");
      this.passengerFormR[i].controls['id_card_type'].setValue("");
      this.passengerFormR[i].controls['id_card_number'].setValue("");
      this.passengerFormR[i].controls['passport_issued_date'].setValue("");
      this.passengerFormR[i].controls['passport_expiry_date'].setValue("");
      this.passengerFormR[i].controls['place_of_issue'].setValue("");
    }
  }
  updatePassengerData() {
    console.log("onwardSeatDetails", this.onwardSeatDetails);
    if (this.passengerDetails.seat_details.length < 0) {
      //     this.defaultCall();
    }
    this.childFareAmtLess = 0;
    if (this.passengerForm) {
      for (let i = 0; i < this.passengerForm.length; i++) {
        this.passengerDetails.seat_details[i].name = this.passengerForm[i].value.name;
        this.passengerDetails.seat_details[i].sex = this.passengerForm[i].value.sex;
        this.passengerDetails.seat_details[i].seat_number = this.passengerForm[i].value.seat_number;
        this.passengerDetails.seat_details[i].age = this.passengerForm[i].value.age + "";
        if (this.concessions_category) {
          this.passengerDetails.seat_details[i].id_number = this.passengerForm[i].value.id_number;
          this.passengerDetails.seat_details[i].name_by_id = this.passengerForm[i].value.name_by_id;
          this.passengerDetails.seat_details[i].concessions_category = this.passengerForm[i].value.concessions_category;
        }
        //     if (this.metaData.showCardTypes && this.metaData.idCardTypes) {
        this.passengerDetails.seat_details[i].id_card_type = this.passengerForm[i].value.id_card_type ? this.passengerForm[i].value.id_card_type + "" : null;
        this.passengerDetails.seat_details[i].id_card_number = this.passengerForm[i].value.id_card_number ? this.passengerForm[i].value.id_card_number + "" : null;
        this.passengerDetails.seat_details[i].passport_issued_date = this.passengerForm[i].value.passport_issued_date + "";
        this.passengerDetails.seat_details[i].passport_expiry_date = this.passengerForm[i].value.passport_expiry_date + "";
        this.passengerDetails.seat_details[i].place_of_issue = this.passengerForm[i].value.place_of_issue + "";
        //   }
        this.onwardSeatDetails[i].name = this.passengerForm[i].value.name;
        this.onwardSeatDetails[i].seat_number = this.passengerForm[i].value.seat_number;
        this.onwardSeatDetails[i].age = this.passengerForm[i].value.age ? this.passengerForm[i].value.age : '';
        if (this.metaData.msiteFolder != 'cbustheme' || this.metaData.msiteFolder == null || this.metaData.msiteFolder == '') {
          this.onwardSeatDetails[i].sex = this.passengerForm[i].value.sex;
        } else if (this.metaData.msiteFolder == 'cbustheme') {
          this.passengerDetails.seat_details[i].sex = this.onwardSeatDetails[i].sex;
          this.onwardSeatDetails[i].sex = this.passengerForm[i].value.sex;
        }
        if (this.concessions_category) {
          this.onwardSeatDetails[i].id_number = this.passengerForm[i].value.id_number;
          this.onwardSeatDetails[i].name_by_id = this.passengerForm[i].value.name_by_id;
          this.onwardSeatDetails[i].concessions_category = this.passengerForm[i].value.concessions_category;
        }
        if (this.isChildFare && this.passengerDetails.seat_details[i].sex.toLowerCase() == 'jr') {
          this.childFareAmtLess += this.checkJrFare(this.passengerDetails.seat_details[i].seat_number);
        }
      }
    }
    if (this.isReturn) {
      for (let i = this.passengerForm.length; i < this.passengerForm.length + this.passengerFormR.length; i++) {
        this.passengerDetails.seat_details[i].name = this.passengerFormR[i - this.passengerForm.length].value.name;
        this.passengerDetails.seat_details[i].sex = this.passengerFormR[i - this.passengerForm.length].value.sex;
        this.passengerDetails.seat_details[i].seat_number = this.passengerFormR[i - this.passengerForm.length].value.seat_number;
        this.passengerDetails.seat_details[i].age = this.passengerFormR[i - this.passengerForm.length].value.age + "";
        this.returnSeatDetails[i - this.passengerForm.length].name = this.passengerFormR[i - this.passengerForm.length].value.name;
        this.returnSeatDetails[i - this.passengerForm.length].seat_number = this.passengerFormR[i - this.passengerForm.length].value.seat_number;
        this.returnSeatDetails[i - this.passengerForm.length].age = this.passengerFormR[i - this.passengerForm.length].value.age;
        this.returnSeatDetails[i - this.passengerForm.length].sex = this.passengerFormR[i - this.passengerForm.length].value.sex;
        if (this.isChildFare && this.passengerDetails.seat_details[i].sex.toLowerCase() == 'jr') {
          this.childFareAmtLess += this.checkJrFare(this.passengerDetails.seat_details[i].seat_number);
        }
        if (this.concessions_category) {
          this.returnSeatDetails[i - this.passengerForm.length].id_number = this.passengerFormR[i - this.passengerForm.length].value.id_number;
          this.returnSeatDetails[i - this.passengerForm.length].name_by_id = this.passengerFormR[i - this.passengerForm.length].value.name_by_id;
          this.returnSeatDetails[i - this.passengerForm.length].concessions_category = this.passengerFormR[i - this.passengerForm.length].value.concessions_category;
          this.passengerDetails.seat_details[i].id_number = this.passengerFormR[i - this.passengerForm.length].value.id_number;
          this.passengerDetails.seat_details[i].name_by_id = this.passengerFormR[i - this.passengerForm.length].value.name_by_id;
          this.passengerDetails.seat_details[i].concessions_category = this.passengerFormR[i - this.passengerForm.length].value.concessions_category;
        }
      }
    }
    if (this.passengerDetails) {
      this.passengerDetails.contact_detail.email = this.contactForm.value.email;
      this.passengerDetails.contact_detail.emergency_name = this.passengerForm[0].value.name;
      this.passengerDetails.contact_detail.mobile_number = this.contactForm.value.mobile_number + "";
      this.passengerDetails.contact_detail.country_code = this.contactForm.value.country_code + "";
      this.commonStorage.localSet("onwardSeatDetails", this.onwardSeatDetails);
      this.commonStorage.localSet("returnSeatDetails", this.returnSeatDetails);
      this.commonStorage.localSet("childFareAmtLess", this.childFareAmtLess);
    }
  }
  checkJrFare(seatNumber) {
    let seatDetails = this.commonStorage.getItem("seatDetails");
    let seat = seatDetails.find(it => {
      if (it.number == seatNumber) {
        return true;
      } else {
        return false;
      }
    });
    return +seat.child_fare;
  }
  openAutoSignupDialog() {
    var _this2 = this;
    return (0,_Users_ahemad_Documents_officeWorkspace_capacitor_customer_app_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var _this2$metaData, _this2$passengerForm$;
      const modal = yield _this2.modalController.create({
        component: _auto_signup_dialog_auto_signup_dialog_page__WEBPACK_IMPORTED_MODULE_9__.AutoSignupDialogPage,
        componentProps: {
          loginType: (_this2$metaData = _this2.metaData) === null || _this2$metaData === void 0 ? void 0 : _this2$metaData.loginType,
          name: _this2.passengerForm && _this2.passengerForm[0] ? (_this2$passengerForm$ = _this2.passengerForm[0].controls) === null || _this2$passengerForm$ === void 0 || (_this2$passengerForm$ = _this2$passengerForm$.name) === null || _this2$passengerForm$ === void 0 ? void 0 : _this2$passengerForm$.value : _this2.name,
          phone: _this2.contactForm && _this2.contactForm.controls['mobile_number'] ? _this2.contactForm.controls['mobile_number'].value : _this2.mobileNumberValue,
          email: _this2.contactForm && _this2.contactForm.controls['email'] ? _this2.contactForm.controls['email'].value : _this2.email
        },
        cssClass: 'auto-signup-modal-css',
        backdropDismiss: false
      });
      yield modal.present();
      const {
        data
      } = yield modal.onDidDismiss();
      if ((data === null || data === void 0 ? void 0 : data.action) === 'proceed' || (data === null || data === void 0 ? void 0 : data.action) === 'skip') {
        _this2.submitPassengerDetails(data === null || data === void 0 ? void 0 : data.action);
      } else {
        return;
      }
    })();
  }
  submitPassengerDetails(dataFrom = '') {
    var _this$concessions_cat, _this$gstInfoConfig4, _this$gstInfoConfig5;
    if (((_this$concessions_cat = this.concessions_category) === null || _this$concessions_cat === void 0 ? void 0 : _this$concessions_cat.length) > 0) {
      const currentPassengerForms = this.isReturn ? this.passengerFormR : this.passengerForm;
      if (currentPassengerForms) {
        var _this$concessions_cat2;
        if (this.metaData.msiteFolder == null && ((_this$concessions_cat2 = this.concessions_category) === null || _this$concessions_cat2 === void 0 ? void 0 : _this$concessions_cat2.length) > 0) {
          if (!this.isReturn) {
            let generalCount = 0;
            let tsrtcRtdCount = 0;
            let journCount = 0;
            if (this.passengerForm) {
              for (let item of this.passengerForm) {
                let selectedCategory = this.concessions_category.find(category => category.id == item.value.concessions_category);
                if (selectedCategory) {
                  switch (selectedCategory.type) {
                    case this.generalPublic:
                      generalCount++;
                      break;
                    case this.rtdRtcEmployee:
                      tsrtcRtdCount++;
                      break;
                    case this.journaList:
                      journCount++;
                      break;
                  }
                }
              }
            }
            // Checking max seat limits dynamically
            for (let category of this.concessions_category) {
              if (category.type == this.generalPublic && generalCount > category.max_seats) {
                this.util.showToast(`Max Allowed Person For ${category.type} is ${category.max_seats}`);
                return;
              }
              if (category.type == this.rtdRtcEmployee && tsrtcRtdCount > category.max_seats) {
                this.util.showToast(`Max Allowed Person For ${category.type} is ${category.max_seats}`);
                return;
              }
              if (category.type == this.journaList && journCount > category.max_seats) {
                this.util.showToast(`Max Allowed Person For ${category.type} is ${category.max_seats}`);
                return;
              }
            }
          }
        }
      }
    }
    this.globalData.GST_ID = this.gstId;
    this.globalData.GST_NAME = this.gstName;
    this.commonStorage.localSet("gstId", this.globalData.GST_ID);
    this.commonStorage.localSet("gstName", this.globalData.GST_NAME);
    this.commonStorage.localSet('gstCityName', this.cityName);
    this.commonStorage.localSet('gstStateName', this.stateGetName);
    if (this.metaData.msiteFolder != 'ourbustheme') {
      this.commonStorage.localSet('pinCode', this.stateId);
    } else {
      this.commonStorage.localRemove('pinCode');
    }
    if (this.metaData.msiteFolder == 'ourbustheme') {
      if (this.getGstInfo.pincode == 'mandatory') {
        if (!this.stateId || this.stateId.length !== 6) {
          this.util.showToast('Please enter valid pin code');
          return;
        } else if (!this.stateGetName && !this.stateType) {
          this.util.showToast('Please enter valid pin code');
          return;
        } else if (!this.cityName && !this.cityId) {
          this.util.showToast('Please enter valid pin code');
          return;
        }
      } else {
        if (this.stateId.length > 0) {
          if (!this.stateId || this.stateId.length !== 6) {
            this.util.showToast('Please enter valid pin code');
            return;
          } else if (!this.stateGetName && !this.stateType) {
            this.util.showToast('Please enter valid pin code');
            return;
          } else if (!this.cityName && !this.cityId) {
            this.util.showToast('Please enter valid pin code');
            return;
          }
        } else {
          this.stateGetName = '';
          this.stateType = '';
          this.cityName = '';
          this.cityId = '';
        }
      }
      if (this.businessTravel == true && this.gstId.length == 15) {
        if (!this.gstvalid) {
          this.util.showToast('Please enter valid GST ID');
          return;
        } else {
          if (this.metaData.msiteFolder == 'ourbustheme') {
            this.commonStorage.localSet("gstIdOurbus", this.gstId);
            this.commonStorage.localSet("gstNameOurbus", this.gstName);
          } else {
            this.commonStorage.localRemove("gstIdOurbus");
            this.commonStorage.localRemove("gstNameOurbus");
          }
        }
      }
    }
    if (this.businessTravel == true && this.gstId.length < 15) {
      this.util.showToast('Please enter valid GST ID');
    } else if (this.businessTravel == true && this.gstName.length < 1) {
      this.util.showToast('Please enter valid Comapny Name');
    } else if (this.metaData.msiteFolder != 'ourbustheme' && this.getGstInfo.pincode == 'mandatory' && this.isServiceTaxApplicable == true && (!this.stateId || this.stateId.length !== 6) && (this.gstInfoConfig == null || ((_this$gstInfoConfig4 = this.gstInfoConfig) === null || _this$gstInfoConfig4 === void 0 ? void 0 : _this$gstInfoConfig4.pincode) == "show")) {
      this.util.showToast('Please enter valid pin code');
    } else if (this.metaData.msiteFolder != 'ourbustheme' && this.getGstInfo.state == 'mandatory' && !this.stateGetName && !this.stateType && this.isServiceTaxApplicable == true && (this.gstInfoConfig == null || this.gstInfoConfig.state == "show")) {
      this.util.showToast('Please enter valid state');
    } else if (this.metaData.msiteFolder != 'ourbustheme' && this.getGstInfo.city == 'mandatory' && this.isServiceTaxApplicable == true && !this.cityName && !this.cityId && (this.gstInfoConfig == null || ((_this$gstInfoConfig5 = this.gstInfoConfig) === null || _this$gstInfoConfig5 === void 0 ? void 0 : _this$gstInfoConfig5.city) == "show")) {
      this.util.showToast('Please enter valid city');
    } else {
      if (this.isValid()) {
        var _this$metaData3;
        if ((_this$metaData3 = this.metaData) !== null && _this$metaData3 !== void 0 && _this$metaData3.loginType && (this.metaData.loginType == "Auto" || this.metaData.loginType == "Forced") && dataFrom == '' && !this.authenticate.isLoggedIn()) {
          this.openAutoSignupDialog();
          return;
        }
        this.commonStorage.localSet('passengerDetails', this.passengerDetails);
        const seatDetail_data = this.commonStorage.localGet('passenger_personal_data') ? this.commonStorage.localGet('passenger_personal_data') : [];
        if (this.stateId != '') {
          this.passengerDetails.contact_detail;
          this.passengerDetails.contact_detail = Object.assign(this.passengerDetails.contact_detail, {
            "pinCode": this.stateId
          });
        }
        if (seatDetail_data.length != 0) {
          if (this.passengerDetails.seat_details.length <= seatDetail_data.length) {
            for (let i = 0; i < this.passengerDetails.seat_details.length; i++) {
              seatDetail_data[i] = this.passengerDetails.seat_details[i];
              if (this.metaData.msiteFolder == 'ourbustheme') {
                if (this.passengerDetails.seat_details[i].age == '0') {
                  this.util.showToast('Please enter valid age');
                  return;
                }
              }
              if (this.metaData.msiteFolder == 'cbustheme') {
                if (this.passengerDetails.seat_details[i].age == '0') {
                  this.util.showToast('Please enter valid age');
                  return;
                }
              }
            }
            this.commonStorage.localSet('passenger_personal_contact', this.passengerDetails.contact_detail);
            this.commonStorage.localSet('passenger_personal_data', seatDetail_data);
          } else {
            this.commonStorage.localSet('passenger_personal_contact', this.passengerDetails.contact_detail);
            this.commonStorage.localSet('passenger_personal_data', this.passengerDetails.seat_details);
          }
        } else {
          this.commonStorage.localSet('passenger_personal_contact', this.passengerDetails.contact_detail);
          this.commonStorage.localSet('passenger_personal_data', this.passengerDetails.seat_details);
        }
        // this.globalData.RESERVATION_DATA = this.reservationData;
        // this.globalData.RESERVATION_DATA_RETURN = this.reservationDataReturn
        // // console.log('submit z', this.globalData.RESERVATION_DATA)
        // this.commonStorage.localSet("selected_Country_code", this.selected_Country_code)
        // const passengerFormData = this.passengerForm.map((form: FormGroup) => form.value);
        // const passengerFormRData = this.passengerFormR.map((form: FormGroup) => form.value);
        // this.commonStorage.localSet('passengerForm', passengerFormData);
        // this.commonStorage.localSet('passengerFormR', passengerFormRData);
        this.globalData.RESERVATION_DATA = this.reservationData;
        this.globalData.RESERVATION_DATA_RETURN = this.reservationDataReturn;
        this.commonStorage.localSet("selected_Country_code", this.selected_Country_code);
        const passengerFormData = this.passengerForm.map(form => form.value);
        const passengerFormRData = this.passengerFormR.map(form => form.value);
        this.commonStorage.localSet('passengerForm', passengerFormData);
        this.commonStorage.localSet('passengerFormR', passengerFormRData);
        if (this.isReturn) {
          console.log("passed true from pass det");
          let navigationExtras = {
            queryParams: {
              is_return_trip: true,
              is_profile_update_needed: this.isProfileUpdateNeeded
            }
          };
          this.navCtrl.navigateForward('payment-details', navigationExtras);
        } else {
          console.log("passed false from pass det");
          let navigationExtras = {
            queryParams: {
              is_profile_update_needed: this.isProfileUpdateNeeded
            }
          };
          this.navCtrl.navigateForward('payment-details', navigationExtras);
        }
      } else {
        this.errors = true;
      }
    }
  }
  onchangeGstId(ev) {
    const input = ev.target;
    const value = input.value;
    let name = '';
    name = value;
    name = value.replace(/[₹()]/g, '').replace(/[^A-Za-z0-9 ]/g, '');
    if (this.gstId.length > 15) {
      this.gstId = this.gstId.substr(0, 15);
    }
    let stateId = '';
    if (this.metaData.msiteFolder != 'ourbustheme') {
      stateId = this.stateId;
    } else {
      stateId = '';
    }
    if (this.gstId.length == 15) {
      this.apiFactory.getStateByPin(stateId, this.gstId).subscribe(res => {
        if (res.code == 200) {
          this.gstvalid = true;
          if (this.metaData.msiteFolder != 'ourbustheme') {
            this.stateGetName = res.result.state;
            if (res.result.city != '') {
              this.cityName = res.result.city;
            }
            this.cityName = res.result.city;
            if (this.isServiceTaxApplicable == true) {
              this.passengerDetails.gst_info = {
                "pin_code": this.gstInfoConfig == null || this.gstInfoConfig.pincode == 'show' ? this.stateId : null,
                "state": this.gstInfoConfig == null || this.gstInfoConfig.state == 'show' && this.stateGetName ? this.stateGetName : this.gstInfoConfig.state == 'show' && this.stateType ? this.stateType : null,
                "city": this.gstInfoConfig == null || this.gstInfoConfig.city == 'show' && this.cityName ? this.cityName : this.gstInfoConfig.city == 'show' && this.cityId ? this.cityId : null
              };
            }
          }
        } else {
          // alert('kk')
          this.gstvalid = false;
          this.util.showToast(res.message);
        }
      }, err => {
        this.util.showToast(err);
      });
    }
  }
  validations(seat) {
    if (this.metaData.msiteFolder == 'ourbustheme') {
      let sexValue = seat.sex === "" ? "Mr" : seat.sex;
      this.passengerForm.push(this.formBuilder.group({
        name: [seat.name, _angular_forms__WEBPACK_IMPORTED_MODULE_24__.Validators.required],
        sex: [sexValue, _angular_forms__WEBPACK_IMPORTED_MODULE_24__.Validators.required],
        seat_number: [seat.seat_number, _angular_forms__WEBPACK_IMPORTED_MODULE_24__.Validators.required],
        age: [seat.age, this.locale.passenger_details_config['Age'] == 'Mandatory' ? _angular_forms__WEBPACK_IMPORTED_MODULE_24__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_24__.Validators.maxLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_24__.Validators.pattern('[0-9]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_24__.Validators.required]) : null],
        id_card_type: [null, this.locale.passenger_details_config['Id Type'] == 'Mandatory' ? _angular_forms__WEBPACK_IMPORTED_MODULE_24__.Validators.required : null],
        id_card_number: [null, this.locale.passenger_details_config['Id No'] == 'Mandatory' ? _angular_forms__WEBPACK_IMPORTED_MODULE_24__.Validators.required : null],
        passport_issued_date: [''],
        passport_expiry_date: [''],
        place_of_issue: ['']
      }));
    } else {
      var _this$concessions_cat3;
      this.passengerForm.push(this.formBuilder.group({
        name: [seat.name, _angular_forms__WEBPACK_IMPORTED_MODULE_24__.Validators.required],
        sex: [seat.sex, _angular_forms__WEBPACK_IMPORTED_MODULE_24__.Validators.required],
        seat_number: [seat.seat_number, _angular_forms__WEBPACK_IMPORTED_MODULE_24__.Validators.required],
        age: [seat.age, this.locale.passenger_details_config['Age'] == 'Mandatory' ? _angular_forms__WEBPACK_IMPORTED_MODULE_24__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_24__.Validators.maxLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_24__.Validators.pattern('[0-9]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_24__.Validators.required]) : null],
        id_card_type: [null, this.locale.passenger_details_config['Id Type'] == 'Mandatory' ? _angular_forms__WEBPACK_IMPORTED_MODULE_24__.Validators.required : null],
        id_card_number: [null, this.locale.passenger_details_config['Id No'] == 'Mandatory' ? _angular_forms__WEBPACK_IMPORTED_MODULE_24__.Validators.required : null],
        passport_issued_date: [''],
        passport_expiry_date: [''],
        place_of_issue: [''],
        concessions_category: [String((_this$concessions_cat3 = this.concessions_category) === null || _this$concessions_cat3 === void 0 || (_this$concessions_cat3 = _this$concessions_cat3[0]) === null || _this$concessions_cat3 === void 0 ? void 0 : _this$concessions_cat3.id)],
        concession_fare: [seat.fare],
        name_by_id: [''],
        id_number: [''],
        isCard: [false]
      }));
    }
    console.log("passengerForm", this.passengerForm);
  }
  validationsR(seat) {
    if (this.metaData.msiteFolder == 'ourbustheme') {
      let sexValue = seat.sex === "" ? "Mr" : seat.sex;
      this.passengerFormR.push(this.formBuilder.group({
        name: [seat.name, _angular_forms__WEBPACK_IMPORTED_MODULE_24__.Validators.required],
        sex: [sexValue, _angular_forms__WEBPACK_IMPORTED_MODULE_24__.Validators.required],
        seat_number: [seat.seat_number, _angular_forms__WEBPACK_IMPORTED_MODULE_24__.Validators.required],
        age: [seat.age, this.locale.passenger_details_config['Age'] == 'Mandatory' ? _angular_forms__WEBPACK_IMPORTED_MODULE_24__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_24__.Validators.maxLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_24__.Validators.pattern('[0-9]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_24__.Validators.required]) : null],
        id_card_type: [null, this.locale.passenger_details_config['Id Type'] == 'Mandatory' ? _angular_forms__WEBPACK_IMPORTED_MODULE_24__.Validators.required : null],
        id_card_number: [null, this.locale.passenger_details_config['Id No'] == 'Mandatory' ? _angular_forms__WEBPACK_IMPORTED_MODULE_24__.Validators.required : null],
        passport_issued_date: [''],
        passport_expiry_date: [''],
        place_of_issue: ['']
      }));
    } else {
      var _this$concessions_cat4;
      this.passengerFormR.push(this.formBuilder.group({
        name: [seat.name, _angular_forms__WEBPACK_IMPORTED_MODULE_24__.Validators.required],
        sex: [seat.sex, _angular_forms__WEBPACK_IMPORTED_MODULE_24__.Validators.required],
        seat_number: [seat.seat_number, _angular_forms__WEBPACK_IMPORTED_MODULE_24__.Validators.required],
        age: [seat.age, this.locale.passenger_details_config['Age'] == 'Mandatory' ? _angular_forms__WEBPACK_IMPORTED_MODULE_24__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_24__.Validators.maxLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_24__.Validators.pattern('[0-9]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_24__.Validators.required]) : null],
        id_card_type: [null, this.locale.passenger_details_config['Id Type'] == 'Mandatory' ? _angular_forms__WEBPACK_IMPORTED_MODULE_24__.Validators.required : null],
        id_card_number: [null, this.locale.passenger_details_config['Id No'] == 'Mandatory' ? _angular_forms__WEBPACK_IMPORTED_MODULE_24__.Validators.required : null],
        passport_issued_date: [''],
        passport_expiry_date: [''],
        place_of_issue: [''],
        concessions_category: [String((_this$concessions_cat4 = this.concessions_category) === null || _this$concessions_cat4 === void 0 || (_this$concessions_cat4 = _this$concessions_cat4[0]) === null || _this$concessions_cat4 === void 0 ? void 0 : _this$concessions_cat4.id)],
        concession_fare: [seat === null || seat === void 0 ? void 0 : seat.fare],
        name_by_id: [''],
        id_number: [''],
        isCard: [false]
      }));
    }
  }
  idCardChange(i) {
    if (this.metaData.showCardTypes && this.passengerForm[i].value.id_card_type == 3 && this.locale.passenger_details_config['Id No'] == 'Mandatory') {
      this.passengerForm[i].controls['passport_issued_date'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_24__.Validators.required]);
      this.passengerForm[i].controls['passport_issued_date'].updateValueAndValidity();
      this.passengerForm[i].controls['passport_expiry_date'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_24__.Validators.required]);
      this.passengerForm[i].controls['passport_expiry_date'].updateValueAndValidity();
      this.passengerForm[i].controls['place_of_issue'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_24__.Validators.required]);
      this.passengerForm[i].controls['place_of_issue'].updateValueAndValidity();
    } else {
      this.passengerForm[i].controls['passport_issued_date'].clearValidators();
      this.passengerForm[i].controls['passport_issued_date'].updateValueAndValidity();
      this.passengerForm[i].controls['passport_expiry_date'].clearValidators();
      this.passengerForm[i].controls['passport_expiry_date'].updateValueAndValidity();
      this.passengerForm[i].controls['place_of_issue'].clearValidators();
      this.passengerForm[i].controls['place_of_issue'].updateValueAndValidity();
    }
  }
  idCardChangeR(i) {
    if (this.metaData.showCardTypes && this.passengerFormR[i].value.id_card_type == 3 && this.locale.passenger_details_config['Id No'] == 'Mandatory') {
      this.passengerFormR[i].controls['passport_issued_date'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_24__.Validators.required]);
      this.passengerFormR[i].controls['passport_issued_date'].updateValueAndValidity();
      this.passengerFormR[i].controls['passport_expiry_date'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_24__.Validators.required]);
      this.passengerFormR[i].controls['passport_expiry_date'].updateValueAndValidity();
      this.passengerFormR[i].controls['place_of_issue'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_24__.Validators.required]);
      this.passengerFormR[i].controls['place_of_issue'].updateValueAndValidity();
    } else {
      this.passengerFormR[i].controls['passport_issued_date'].clearValidators();
      this.passengerFormR[i].controls['passport_issued_date'].updateValueAndValidity();
      this.passengerFormR[i].controls['passport_expiry_date'].clearValidators();
      this.passengerFormR[i].controls['passport_expiry_date'].updateValueAndValidity();
      this.passengerFormR[i].controls['place_of_issue'].clearValidators();
      this.passengerFormR[i].controls['place_of_issue'].updateValueAndValidity();
    }
  }
  contactValidation() {
    let minPhoneCount = this.phoneNumCount === "" ? 0 : this.phoneNumCount;
    let maxPhoneCount = this.phoneNumCount === "" ? 18 : this.phoneNumCount;
    if (this.metaData.show_countries_isd_codes_selection) {
      this.contactForm = this.formBuilder.group({
        country_code: [this.selected_Country_code ? this.selected_Country_code : this.selected_Country_code, _angular_forms__WEBPACK_IMPORTED_MODULE_24__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_24__.Validators.required])],
        alt_country_code: [this.AllowedCountryCodes[1] ? this.AllowedCountryCodes[1] : this.AllowedCountryCodes[0], _angular_forms__WEBPACK_IMPORTED_MODULE_24__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_24__.Validators.required])],
        mobile_number: [this.mobileNo, _angular_forms__WEBPACK_IMPORTED_MODULE_24__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_24__.Validators.maxLength(maxPhoneCount), _angular_forms__WEBPACK_IMPORTED_MODULE_24__.Validators.minLength(minPhoneCount), _angular_forms__WEBPACK_IMPORTED_MODULE_24__.Validators.pattern('[0-9]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_24__.Validators.required])],
        email: [this.email && this.locale.passenger_details_config["Email"] !== "Hide" ? this.email : "", this.locale.passenger_details_config["Email"] == "Mandatory" ? _angular_forms__WEBPACK_IMPORTED_MODULE_24__.Validators.compose([_services_validator_service__WEBPACK_IMPORTED_MODULE_7__.ValidatorService.emailValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_24__.Validators.required]) : null]
      });
    } else {
      this.contactForm = this.formBuilder.group({
        country_code: [this.AllowedCountryCodes[1] ? this.AllowedCountryCodes[1] : this.AllowedCountryCodes[0], _angular_forms__WEBPACK_IMPORTED_MODULE_24__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_24__.Validators.required])],
        alt_country_code: [this.AllowedCountryCodes[1] ? this.AllowedCountryCodes[1] : this.AllowedCountryCodes[0], _angular_forms__WEBPACK_IMPORTED_MODULE_24__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_24__.Validators.required])],
        mobile_number: [this.mobileNo, _angular_forms__WEBPACK_IMPORTED_MODULE_24__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_24__.Validators.maxLength(maxPhoneCount), _angular_forms__WEBPACK_IMPORTED_MODULE_24__.Validators.minLength(minPhoneCount), _angular_forms__WEBPACK_IMPORTED_MODULE_24__.Validators.pattern('[0-9]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_24__.Validators.required])],
        email: [this.email && this.locale.passenger_details_config["Email"] !== "Hide" ? this.email : "", this.locale.passenger_details_config["Email"] == "Mandatory" ? _angular_forms__WEBPACK_IMPORTED_MODULE_24__.Validators.compose([_services_validator_service__WEBPACK_IMPORTED_MODULE_7__.ValidatorService.emailValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_24__.Validators.required]) : null]
      });
    }
    if (this.datafill) {
      setTimeout(() => {
        this.isProfileUpdateNeeded = false;
        this.contactForm.controls["email"].setValue(this.fillSeatData.result.passengerOtherDetails.email);
        const phone = this.fillSeatData.result.passengerOtherDetails.phone;
        if (this.metaData.msiteFolder != 'ourbustheme') {
          this.stateId = this.fillSeatData.result.passengerOtherDetails.pinCode;
        } else {
          this.stateId = '';
        }
        if (phone.includes('-')) {
          const parts = phone.split('-');
          this.contactForm.controls['mobile_number'].setValue(parts[1]);
        } else {
          this.contactForm.controls['mobile_number'].setValue(phone);
        }
        for (let i = 0; i < this.passengerForm.length; i++) {
          this.passengerForm[i].controls['name'].setValue(this.passDetail[i].name);
          this.passengerForm[i].controls['sex'].setValue(this.passDetail[i].title);
          this.passengerForm[i].controls['age'].setValue(this.passDetail[i].age ? this.passDetail[i].age : '');
          if (this.concessions_category) {
            this.passengerForm[i].controls['concessions_category'].setValue(this.passDetail[i].concessions_category);
            this.passengerForm[i].controls['id_number'].setValue(this.passDetail[i].id_number);
            this.passengerForm[i].controls['name_by_id'].setValue(this.passDetail[i].name_by_id);
          }
        }
      }, 1000);
    } else {
      const contact_data = this.commonStorage.localGet('passenger_personal_contact') ? this.commonStorage.localGet('passenger_personal_contact') : {};
      if (contact_data && Object.keys(contact_data).length != 0) {
        this.isProfileUpdateNeeded = false;
        this.contactForm.controls['email'].setValue(contact_data.email);
        if (contact_data.country_code && contact_data.country_code != '') {
          this.contactForm.controls['country_code'].setValue(contact_data.country_code);
        }
        setTimeout(() => {
          if (this.metaData.msiteFolder != 'ourbustheme') {
            this.stateId = contact_data.pinCode;
            if (this.stateId != '') {
              this.onchangeStateId('');
            }
          }
        }, 500);
        this.contactForm.controls['mobile_number'].setValue(contact_data.mobile_number);
      } else {
        if (this.authenticate.isLoggedIn()) {
          if (this.passengerForm.length != 0) {
            const title = this.personalInfo ? this.personalInfo.title : '';
            if (this.metaData.msiteFolder != 'ourbustheme') {
              this.passengerForm[0].controls['sex'].setValue(title == 'Mr' ? 'Mr' : title == '' ? '' : 'Ms');
            }
            this.passengerForm[0].controls['age'].setValue(this.personalInfo ? this.personalInfo.age : '');
          }
        }
      }
      const data = this.commonStorage.localGet('passenger_personal_data') ? this.commonStorage.localGet('passenger_personal_data') : [];
      if (data.length != 0) {
        for (let i = 0; i < this.passengerForm.length; i++) {
          this.passengerForm[i].controls['name'].setValue(data[i].name);
          this.passengerForm[i].controls['sex'].setValue(data[i].sex);
          this.passengerForm[i].controls['age'].setValue(data[i].age ? data[i].age : '');
          if (this.concessions_category) {
            var _this$concessions_cat5;
            this.passengerForm[i].controls['concessions_category'].setValue(String((_this$concessions_cat5 = this.concessions_category) === null || _this$concessions_cat5 === void 0 || (_this$concessions_cat5 = _this$concessions_cat5[0]) === null || _this$concessions_cat5 === void 0 ? void 0 : _this$concessions_cat5.id));
            this.passengerForm[i].controls['id_number'].setValue(data[i].id_number);
            this.passengerForm[i].controls['name_by_id'].setValue(data[i].name_by_id);
          }
        }
      }
    }
  }
  isValid() {
    if (this.passengerForm) {
      for (let valid of this.passengerForm) {
        if (valid.value.name == '') {
          this.util.showToast("Enter name in seat number " + valid.value.seat_number);
          return false;
        }
        if (valid.value.sex == '') {
          this.util.showToast("Please select gender in seat number " + valid.value.seat_number);
          return false;
        }
        // if (valid.controls.age.status == "INVALID") {
        //   this.util.showToast("Enter valid age in seat number " + valid.value.seat_number);
        //   return false;
        // }
        if (valid.value.sex.toLowerCase() == 'jr' && valid.value.age > 11) {
          this.util.showToast("Child age should be less or equal to 11 years in seat number " + valid.value.seat_number);
          this.showError("Child age should be less or equal to 11 years in seat number " + valid.value.seat_number);
          return false;
        }
        if (this.locale.passenger_details_config['Id Type'] == 'Mandatory' && this.metaData.idCardTypes) {
          if (valid.controls.id_card_type.status == "INVALID") {
            this.util.showToast("Select card type for seat number " + valid.value.seat_number);
            return false;
          }
        }
        if (this.locale.passenger_details_config['Id No'] == 'Mandatory' && this.metaData.showCardTypes) {
          if (valid.controls.id_card_number.status == "INVALID") {
            this.util.showToast("Enter Id Card no. for seat number " + valid.value.seat_number);
            return false;
          }
          if (valid.value.id_card_type == 3 && this.metaData.showCardTypes) {
            if (!valid.value.passport_issued_date) {
              this.util.showToast("Id Card issue date missing for seat number " + valid.value.seat_number);
              return false;
            }
            if (!valid.value.passport_expiry_date && this.metaData.showCardTypes) {
              this.util.showToast("Id Card expiry date missing for seat number " + valid.value.seat_number);
              return false;
            }
            if (!valid.value.place_of_issue && this.metaData.showCardTypes) {
              this.util.showToast("Id Card Place of issue missing for seat number " + valid.value.seat_number);
              return false;
            }
          }
        }
        if (this.concessions_category && this.concessions_category.length > 0) {
          let selectedCategory = this.concessions_category.find(item => item.id == valid.value.concessions_category);
          if (selectedCategory && selectedCategory.requires_card_validation) {
            if (!valid.value.id_number || valid.value.id_number.trim() === '' || !valid.value.name_by_id || valid.value.name_by_id.trim() === '') {
              this.util.showToast("Enter a valid card number for seat number " + valid.value.seat_number);
              return false;
            }
          }
        }
      }
    }
    if (this.isReturn) {
      for (let valid of this.passengerFormR) {
        if (valid.value.name == '') {
          this.util.showToast("Enter name in seat number " + valid.value.seat_number);
          return false;
        }
        if (valid.value.sex == '') {
          this.util.showToast("Please select gender in seat number " + valid.value.seat_number);
          return false;
        }
        // if (valid.controls.age.status == "INVALID") {
        //   this.util.showToast("Enter valid age in seat number " + valid.value.seat_number);
        //   return false;
        // }
        if (this.concessions_category && this.concessions_category.length > 0) {
          let selectedCategory = this.concessions_category.find(item => item.id == valid.value.concessions_category);
          if (selectedCategory && selectedCategory.requires_card_validation) {
            if (!valid.value.id_number || valid.value.id_number.trim() === '' && (!valid.value.name_by_id || valid.value.name_by_id.trim() === '')) {
              this.util.showToast("Enter a valid card number for seat number " + valid.value.seat_number);
              return false;
            }
          }
        }
        if (valid.value.sex.toLowerCase() == 'jr' && valid.value.age > 11) {
          this.util.showToast("Child age should be less or equal to 11 years in seat number " + valid.value.seat_number);
          this.showError("Child age should be less or equal to 11 years in seat number " + valid.value.seat_number);
          return false;
        }
        if (this.locale.passenger_details_config['Id Type'] == 'Mandatory' && this.metaData.idCardTypes) {
          if (valid.controls.id_card_type.status == "INVALID") {
            this.util.showToast("Select card type for seat number " + valid.value.seat_number);
            return false;
          }
        }
        if (this.locale.passenger_details_config['Id No'] == 'Mandatory' && this.metaData.showCardTypes) {
          if (valid.controls.id_card_number.status == "INVALID") {
            this.util.showToast("Enter Id Card no. for seat number " + valid.value.seat_number);
            return false;
          }
          if (valid.value.id_card_type == 3 && this.metaData.showCardTypes) {
            if (!valid.value.passport_issued_date) {
              this.util.showToast("Id Card issue date missing for seat number " + valid.value.seat_number);
              return false;
            }
            if (!valid.value.passport_expiry_date && this.metaData.showCardTypes) {
              this.util.showToast("Id Card expiry date missing for seat number " + valid.value.seat_number);
              return false;
            }
            if (!valid.value.place_of_issue && this.metaData.showCardTypes) {
              this.util.showToast("Id Card Place of issue missing for seat number " + valid.value.seat_number);
              return false;
            }
          }
        }
        //tsrtc code  start
        if (this.concessions_category && this.concessions_category.length > 0) {
          let selectedCategory = this.concessions_category.find(item => item.id == valid.value.concessions_category);
          if (selectedCategory && selectedCategory.requires_card_validation) {
            if (!valid.value.id_number || valid.value.id_number.trim() === '' || !valid.value.name_by_id || valid.value.name_by_id.trim() === '') {
              this.util.showToast("Enter a valid card number for seat number " + valid.value.seat_number);
              return false;
            }
          }
        }
        ////end
      }
    }
    let isnum = /^[0-9]$/.test(this.contactForm.controls['mobile_number'].value);
    if (this.contactForm.status == "INVALID") {
      if (this.contactForm.controls['mobile_number'].invalid) {
        this.showError("Invalid Mobile number");
        this.util.showToast("Invalid Mobile number");
      } else if (this.contactForm.controls['email'].invalid) {
        this.showError("Invalid Email");
        this.util.showToast("Invalid Email");
      } else {
        this.showError("Some Field(s) are missing in Contact details");
        this.util.showToast("Some Field(s) are missing in Contact details");
      }
      let elem = document.querySelector('ion-input.ng-invalid input');
      if (elem) {
        elem.focus();
      }
      return false;
    }
    this.updatePassengerData();
    return true;
  }
  onlyDigits(s) {
    for (let i = s.length - 1; i >= 0; i--) {
      const d = s.charCodeAt(i);
      if (d < 48 || d > 57) return false;
    }
    return true;
  }
  validations1(seat) {
    this.passengerForm.push(this.formBuilder.group({
      name: [seat.name, _angular_forms__WEBPACK_IMPORTED_MODULE_24__.Validators.required],
      sex: [seat.sex, _angular_forms__WEBPACK_IMPORTED_MODULE_24__.Validators.required],
      seat_number: [seat.seat_number, _angular_forms__WEBPACK_IMPORTED_MODULE_24__.Validators.required],
      age: [seat.age, _angular_forms__WEBPACK_IMPORTED_MODULE_24__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_24__.Validators.maxLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_24__.Validators.pattern('[0-9]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_24__.Validators.required])],
      id_card_type: [null],
      id_card_number: [null],
      passport_issued_date: [''],
      passport_expiry_date: [''],
      place_of_issue: ['']
    }));
  }
  contactValidation1() {
    if (this.metaData.show_countries_isd_codes_selection) {
      this.contactForm = this.formBuilder.group({
        country_code: [this.selected_Country_code, _angular_forms__WEBPACK_IMPORTED_MODULE_24__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_24__.Validators.required])],
        alt_country_code: [this.AllowedCountryCodes[0], _angular_forms__WEBPACK_IMPORTED_MODULE_24__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_24__.Validators.required])],
        mobile_number: [this.mobileNo, _angular_forms__WEBPACK_IMPORTED_MODULE_24__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_24__.Validators.maxLength(this.phoneNumCount), _angular_forms__WEBPACK_IMPORTED_MODULE_24__.Validators.minLength(0), _angular_forms__WEBPACK_IMPORTED_MODULE_24__.Validators.pattern('[0-9]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_24__.Validators.required])],
        email: [this.email, _angular_forms__WEBPACK_IMPORTED_MODULE_24__.Validators.compose([_services_validator_service__WEBPACK_IMPORTED_MODULE_7__.ValidatorService.emailValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_24__.Validators.required])],
        alternate_email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_24__.Validators.compose([_services_validator_service__WEBPACK_IMPORTED_MODULE_7__.ValidatorService.emailValidator, this.locale && this.locale.passenger_details_config && this.locale.passenger_details_config["Alternate Email"] == "Mandatory" ? _angular_forms__WEBPACK_IMPORTED_MODULE_24__.Validators.required : null])]
      });
    } else {
      this.contactForm = this.formBuilder.group({
        country_code: [this.AllowedCountryCodes[0], _angular_forms__WEBPACK_IMPORTED_MODULE_24__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_24__.Validators.required])],
        alt_country_code: [this.AllowedCountryCodes[0], _angular_forms__WEBPACK_IMPORTED_MODULE_24__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_24__.Validators.required])],
        mobile_number: [this.mobileNo, _angular_forms__WEBPACK_IMPORTED_MODULE_24__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_24__.Validators.maxLength(this.phoneNumCount), _angular_forms__WEBPACK_IMPORTED_MODULE_24__.Validators.minLength(0), _angular_forms__WEBPACK_IMPORTED_MODULE_24__.Validators.pattern('[0-9]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_24__.Validators.required])],
        email: [this.email, _angular_forms__WEBPACK_IMPORTED_MODULE_24__.Validators.compose([_services_validator_service__WEBPACK_IMPORTED_MODULE_7__.ValidatorService.emailValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_24__.Validators.required])],
        alternate_email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_24__.Validators.compose([_services_validator_service__WEBPACK_IMPORTED_MODULE_7__.ValidatorService.emailValidator, this.locale && this.locale.passenger_details_config && this.locale.passenger_details_config["Alternate Email"] == "Mandatory" ? _angular_forms__WEBPACK_IMPORTED_MODULE_24__.Validators.required : null])]
      });
    }
  }
  showError(msg) {
    this.errors = true;
    this.showFormError = true;
    this.formErrorMessage = msg;
  }
  onInputChange(ev, i, type) {
    const input = ev.target;
    let value = input.value;
    let name = '';
    name = value;
    name = name.replace(/[^A-Za-z\s]/g, '');
    if (type === 1) {
      this.passengerForm[i].controls['name'].setValue(name);
    } else {
      this.passengerFormR[i].controls['name'].setValue(name);
    }
    this.showFormError = false;
    this.formErrorMessage = null;
  }
  onPhoneChange(ev) {
    this.showFormError = false;
    this.formErrorMessage = null;
    const input = ev.target;
    let value = input.value;
    value = value.replace(/[^0-9]/g, '');
    if (value.length > 10) {
      value = value.substring(0, 10);
    }
    this.contactForm.controls['mobile_number'].setValue(value);
    let mob = value;
    this.mobileNumberValue = this.contactForm.value.mobile_number;
    if (this.contactForm.value.mobile_number) {
      mob = this.contactForm.value.mobile_number.toString();
    }
    let minPhoneCount = this.phoneNumCount === "" ? 0 : this.phoneNumCount;
    let maxPhoneCount = this.phoneNumCount === "" ? 18 : this.phoneNumCount;
    if (mob.length > this.phoneNumCount) {
      this.contactForm.controls['mobile_number'].setValue(mob.substr(0, maxPhoneCount));
    }
    const trimmedValue = parseInt(value, 10).toString();
    if (trimmedValue == '0') {
      input.value = '';
      this.contactForm.controls['mobile_number'].setValue(input.value);
      return;
    }
  }
  getPassengerDetals() {
    this.commonStorage.localSet('passengerGstInfo', null);
    let mob = this.contactForm.value.mobile_number.toString();
    this.apiFactory.getPassengerDetails(mob).subscribe(res => {
      if (res.code == 200) {
        this.passengerForm[0].controls.sex.setValue(res.passenger_title);
        this.passengerForm[0].controls.name.setValue(res.passenger_name);
        this.passengerForm[0].controls.age.setValue(res.passenger_age);
        this.contactForm.controls['email'].setValue(res.email);
        if (res.cust_comp_gst_code) {
          this.commonStorage.localSet('passengerGstInfo', res);
        }
      }
    }, err => {});
  }
  onAgeChange(ev, i, type) {
    if (this.metaData.msiteFolder == 'ourbustheme') {
      this.showFormError = false;
      this.formErrorMessage = null;
      const input = ev.target;
      let value = input.value;
      value = value.replace(/[^0-9]/g, '');
      const trimmedValue = parseInt(value, 10).toString();
      if (trimmedValue == '0') {
        input.value = '';
        if (type === 1) {
          this.passengerForm[i].controls['age'].setValue(input.value);
        } else {
          this.passengerFormR[i].controls['age'].setValue(input.value);
        }
        return;
      }
      if (value.length > 3) {
        value = value.substring(0, 3);
      }
      if (type === 1) {
        this.passengerForm[i].controls['age'].setValue(value);
      } else {
        this.passengerFormR[i].controls['age'].setValue(value);
      }
      let age = value;
      // let age: string = '';
      if (type === 1) {
        age = this.passengerForm[i].value.age != null ? this.passengerForm[i].value.age.toString() : '';
      } else {
        age = this.passengerFormR[i].value.age != null ? this.passengerFormR[i].value.age.toString() : '';
      }
      const ageValue = parseInt(age, 10);
      if (ageValue > 150) {
        if (type == 1) {
          this.passengerForm[i].controls['age'].setValue(150);
        } else {
          this.passengerFormR[i].controls['age'].setValue(150);
        }
      }
    } else {
      this.showFormError = false;
      this.formErrorMessage = null;
      let age = '';
      if (type == 1) {
        age = this.passengerForm[i].value.age != null ? this.passengerForm[i].value.age.toString() : '';
      } else {
        age = this.passengerFormR[i].value.age != null ? this.passengerFormR[i].value.age.toString() : '';
      }
      age = age.replace(/[^0-9]/g, '');
      const parsedAge = age === '' ? null : parseInt(age);
      if (type == 1) {
        this.passengerForm[i].controls['age'].setValue(parsedAge);
      } else {
        this.passengerFormR[i].controls['age'].setValue(parsedAge);
      }
      if (age.length > 2) {
        if (type == 1) {
          this.passengerForm[i].controls['age'].setValue(age.slice(0, 2));
        } else {
          this.passengerFormR[i].controls['age'].setValue(age.slice(0, 2));
        }
      }
    }
  }
  selectPassportDate(type, date, i) {
    var _this3 = this;
    return (0,_Users_ahemad_Documents_officeWorkspace_capacitor_customer_app_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let dt;
      if (date) {
        dt = _this3.dateService.getDateObjFromDateStr(date);
      } else {
        dt = _this3.dateService.getToday();
      }
      let modal = yield _this3.modalController.create({
        component: _calendar_modal_calendar_modal_page__WEBPACK_IMPORTED_MODULE_2__.CalendarModalPage,
        componentProps: {
          departureDate: dt,
          showPastDate: type == 1 ? true : false,
          title: type == 1 ? "Select Issue Date" : "Select Expiry Date",
          deactivateFutureDate: type == 1 ? true : false
          // type: type
        }
      });
      yield modal.present();
      const {
        data
      } = yield modal.onDidDismiss();
      if (data) {
        let dateStr = data.formattedDate;
        if (type == 1) {
          _this3.passengerForm[i].controls.passport_issued_date.setValue(dateStr);
        } else {
          _this3.passengerForm[i].controls.passport_expiry_date.setValue(dateStr);
        }
      }
      ;
    })();
  }
  selectPassportDateR(type, date, i) {
    var _this4 = this;
    return (0,_Users_ahemad_Documents_officeWorkspace_capacitor_customer_app_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let dt;
      if (date) {
        dt = _this4.dateService.getDateObjFromDateStr(date);
      } else {
        dt = _this4.dateService.getToday();
      }
      let modal = yield _this4.modalController.create({
        component: _calendar_modal_calendar_modal_page__WEBPACK_IMPORTED_MODULE_2__.CalendarModalPage,
        componentProps: {
          departureDate: dt,
          showPastDate: type == 1 ? true : false,
          title: type == 1 ? "Select Issue Date" : "Select Expiry Date",
          deactivateFutureDate: type == 1 ? true : false,
          type: type
        }
      });
      yield modal.present();
      const {
        data
      } = yield modal.onDidDismiss();
      if (data) {
        let dateStr = data.formattedDate;
        if (type == 1) {
          _this4.passengerFormR[i].controls.passport_issued_date.setValue(dateStr);
        } else {
          _this4.passengerFormR[i].controls.passport_expiry_date.setValue(dateStr);
        }
      }
    })();
  }
  resetForm() {
    for (let i = 0; i < this.passengerForm.length; i++) {
      var _this$concessions_cat6;
      this.passengerForm[i].controls['name'].setValue("");
      this.passengerForm[i].controls['sex'].setValue("");
      this.passengerForm[i].controls['age'].setValue("");
      this.passengerForm[i].controls['id_card_type'].setValue(null);
      this.passengerForm[i].controls['id_card_number'].setValue(null);
      this.passengerForm[i].controls['passport_issued_date'].setValue("");
      this.passengerForm[i].controls['passport_expiry_date'].setValue("");
      this.passengerForm[i].controls['place_of_issue'].setValue("");
      this.passengerForm[i].controls['concessions_category'].setValue(String((_this$concessions_cat6 = this.concessions_category) === null || _this$concessions_cat6 === void 0 || (_this$concessions_cat6 = _this$concessions_cat6[0]) === null || _this$concessions_cat6 === void 0 ? void 0 : _this$concessions_cat6.id));
      this.passengerForm[i].controls['name_by_id'].setValue("");
      this.passengerForm[i].controls['id_number'].setValue("");
    }
  }
  addExistingPass() {
    var _this5 = this;
    return (0,_Users_ahemad_Documents_officeWorkspace_capacitor_customer_app_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this5.resetForm();
      const modal = yield _this5.modalController.create({
        component: _add_existing_passenger_add_existing_passenger_component__WEBPACK_IMPORTED_MODULE_1__.AddExistingPassengerComponent,
        componentProps: {
          travellerLength: _this5.onwardSeatDetails.length,
          passengerList: _this5.selectedPassengerList
        }
      });
      yield modal.present();
      const {
        data
      } = yield modal.onDidDismiss();
      if (data != undefined) {
        _this5.selectedPassengerList = data;
        for (var i = 0; i < _this5.selectedPassengerList.length; i++) {
          if (_this5.selectedPassengerList[i].age) _this5.passengerForm[i].controls['age'].setValue(_this5.selectedPassengerList[i].age.substr(0, 2));
          if (_this5.selectedPassengerList[i].name) _this5.passengerForm[i].controls['name'].setValue(_this5.selectedPassengerList[i].name);
          if (_this5.selectedPassengerList[i].title) _this5.passengerForm[i].controls['sex'].setValue(_this5.selectedPassengerList[i].title);
        }
      }
    })();
  }
  snackPreferences() {
    var _this6 = this;
    return (0,_Users_ahemad_Documents_officeWorkspace_capacitor_customer_app_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let modal = yield _this6.modalController.create({
        component: _snack_preference_snack_preference_page__WEBPACK_IMPORTED_MODULE_3__.SnackPreferencePage,
        componentProps: {
          returnResId: _this6.isReturn ? _this6.commonStorage.getItem("returnResId") : null,
          onwardResId: _this6.commonStorage.getItem("onwardResId"),
          isReturn: _this6.isReturn
        }
      });
      yield modal.present();
      const {
        data
      } = yield modal.onDidDismiss();
      if (data) {
        _this6.snack = data;
        _this6.commonStorage.localSet('snack_details', _this6.snack);
        _this6.submitPassengerDetails();
      }
    })();
  }
  payAmount(amount) {
    const safeAmount = amount !== null && amount !== void 0 ? amount : 0;
    return safeAmount.toFixed(2);
  }
  commaSeparate(data) {
    if (data) {
      let city = data.split(',');
      return city[city.length - 1];
    } else {
      return '';
    }
  }
  onChangeWakeupCall() {
    this.commonStorage.localSet('wakeUpCall', this.wakeUpCall);
  }
  gstState() {
    this.apiFactory.gstState().subscribe(res => {
      if (res.code === 200) {
        this.state = res.states.map(state => ({
          ...state,
          name: state.name.toUpperCase()
        }));
      } else {
        this.util.showToast(res.message);
      }
    }, err => {});
  }
  onchangeStateId(ev) {
    if (this.stateId.length > 6) {
      this.stateId = this.stateId.substr(0, 6);
    }
    if (this.stateId.length < 6) {
      this.stateGetName = '';
      this.stateType = '';
      this.cityName = '';
      this.cityId = '';
    }
    if (this.stateId.length == 6) {
      let gst = '';
      if (this.metaData.msiteFolder != 'ourbustheme') {
        gst = this.gstId;
      } else {
        gst = '';
      }
      this.apiFactory.getStateByPin(this.stateId, gst).subscribe(res => {
        if (res.code == 200) {
          if (res.result.city != '') {
            this.cityName = res.result.city;
          }
          this.cityId = res.result.city;
          this.stateType = res.result.state.toUpperCase();
          if (res.result.state) {
            this.isEditable = false;
          } else {
            this.isEditable = true;
          }
          if (this.isServiceTaxApplicable == true) {
            this.passengerDetails.gst_info = {
              "pin_code": this.gstInfoConfig == null || this.gstInfoConfig.pincode == 'show' ? this.stateId : null,
              "state": this.gstInfoConfig == null || this.gstInfoConfig.state == 'show' && this.stateGetName ? this.stateGetName : this.gstInfoConfig.state == 'show' && this.stateType ? this.stateType : null,
              "city": this.gstInfoConfig == null || this.gstInfoConfig.city == 'show' && this.cityName ? this.cityName : this.gstInfoConfig.city == 'show' && this.cityId ? this.cityId : null
            };
          }
        } else {
          this.stateGetName = '';
          this.stateType = '';
          this.cityName = '';
          this.cityId = '';
          this.util.showToast(res.message);
        }
      }, err => {});
    }
    if (this.stateId.length < 6) {
      this.isEditable = true;
      this.isState = true;
    }
  }
  onchangeCityId(ev) {
    if (this.cityId == '') {
      this.cityName = '';
    } else {
      if (this.isServiceTaxApplicable == true) {
        this.passengerDetails.gst_info = {
          "pin_code": this.gstInfoConfig == null || this.gstInfoConfig.pincode == 'show' ? this.stateId : null,
          "state": this.gstInfoConfig == null || this.gstInfoConfig.state == 'show' && this.stateGetName ? this.stateGetName : this.gstInfoConfig.state == 'show' && this.stateType ? this.stateType : null,
          "city": this.gstInfoConfig == null || this.gstInfoConfig.city == 'show' && this.cityName ? this.cityName : this.gstInfoConfig.city == 'show' && this.cityId ? this.cityId : null
        };
      }
    }
  }
  onchangeId(ev) {
    if (this.isServiceTaxApplicable == true) {
      this.passengerDetails.gst_info = {
        "pin_code": this.gstInfoConfig == null || this.gstInfoConfig.pincode == 'show' ? this.stateId : null,
        "state": this.gstInfoConfig == null || this.gstInfoConfig.state == 'show' && this.stateGetName ? this.stateGetName : this.gstInfoConfig.state == 'show' && this.stateType ? this.stateType : null,
        "city": this.gstInfoConfig == null || this.gstInfoConfig.city == 'show' && this.cityName ? this.cityName : this.gstInfoConfig.city == 'show' && this.cityId ? this.cityId : null
      };
    }
  }
  onChangeWhatsappSwitch() {
    this.commonStorage.localSet('isWPSwitchOn', this.isWPSwitchOn);
  }
  callFarebreakup() {
    var _this7 = this;
    return (0,_Users_ahemad_Documents_officeWorkspace_capacitor_customer_app_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this7.modalController.create({
        component: _price_breakup_price_breakup_component__WEBPACK_IMPORTED_MODULE_5__.PriceBreakupComponent,
        componentProps: {
          filData: _this7.globalData,
          isReturn: _this7.isReturn,
          idProof: false,
          phoneBooking: false,
          payFromWallet: false,
          checkCancelProtect: true,
          idProofCnt: 0,
          appliedOfferCoupon: '',
          promoCoupon: '',
          appliedcoupon1: false,
          appliedcoupon2: false,
          appliedCouponname: '',
          smartMilesDiscount: 0,
          smartMileCoupon: '',
          pnrDiscountAplied: false,
          quotePnrForm: {},
          privCardNumber: '',
          onwardSeatDetails: _this7.onwardSeatDetails,
          returnSeatDetails: _this7.returnSeatDetails,
          isFromCoachLayout: false
        },
        cssClass: '',
        breakpoints: [0, 0.3, 0.5, 0.8],
        initialBreakpoint: 0.3
      });
      yield modal.present();
    })();
  }
  farebreakUpcall() {
    var _this$commonStorage$g5;
    let pathForBooking = '';
    pathForBooking = "res_id=" + this.globalData.RESERVATION_DATA.reserveId;
    if (this.util.isWebApp()) {
      pathForBooking += "&native_app_type=6";
    } else {
      if (this.util.isIos()) {
        pathForBooking += "&native_app_type=9";
      } else {
        pathForBooking += "&native_app_type=10";
      }
    }
    if (this.isReturn) {
      for (let item of this.passengerForm) {
        this.concession_details.push({
          "seat": item.value.seat_number,
          "concession_card": item.value.id_number,
          "type": item.value.concessions_category,
          "age": item.value.age,
          "is_round_trip": false
        });
      }
      for (let item of this.passengerFormR) {
        this.concession_details.push({
          "seat": item.value.seat_number,
          "concession_card": item.value.id_number,
          "type": item.value.concessions_category,
          "age": item.value.age,
          "is_round_trip": true
        });
      }
    } else {
      for (let item of this.passengerForm) {
        this.concession_details.push({
          "seat": item.value.seat_number,
          "concession_card": item.value.id_number,
          "type": item.value.concessions_category,
          "age": item.value.age,
          "is_round_trip": false
        });
      }
    }
    pathForBooking += "&origin=" + this.globalData.SEARCH_DATA.originCity.id;
    pathForBooking += "&destination=" + this.globalData.SEARCH_DATA.destCity.id;
    pathForBooking += "&boarding_at=" + (this.reservationData.boardingStage ? this.reservationData.boardingStage.id : '');
    pathForBooking += "&drop_off=" + (this.reservationData.droppingStage ? this.reservationData.droppingStage.id : '');
    pathForBooking += "&no_of_seats=" + this.onwardSeatDetails.length;
    pathForBooking += "&is_mobile_app=true";
    if (this.isReturn) {
      pathForBooking += "&is_round_trip=true";
      pathForBooking += "&return_res_id=" + this.reservationDataReturn.reserveId;
    } else {
      pathForBooking += "&is_round_trip=false";
    }
    if (this.isBima) {
      pathForBooking += "&is_bima=true";
    }
    if (this.metaData.showCancelProtect) {
      pathForBooking += "&is_cancel_protect=" + true;
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
    promoCoupon = '';
    let data = {
      "seat_numbers": seatNumbers,
      "no_of_seats": this.onwardSeatDetails.length,
      "return_seat_numbers": seatNumbersReturn,
      "use_smart_miles": false,
      "passenger_titles": {},
      "boarding_at": this.reservationData.boardingStage.id,
      "drop_off": this.reservationData.droppingStage.id,
      "return_boarding_at": this.isReturn ? this.reservationDataReturn.boardingStage.id : '',
      "return_dropoff": this.isReturn ? this.reservationDataReturn.droppingStage ? this.reservationDataReturn.droppingStage.id : '' : '',
      "offer_coupon": '',
      "promo_coupon": promoCoupon,
      "previous_pnr_details": {},
      "coupon_details": this.passengerDetails && this.passengerDetails.coupon_details ? this.passengerDetails.coupon_details : [],
      // "use_e_discount": this.commonStorage.getItem('deals').e_ticket_discount ? true : false,
      "use_e_discount": ((_this$commonStorage$g5 = this.commonStorage.getItem('deals')) === null || _this$commonStorage$g5 === void 0 || (_this$commonStorage$g5 = _this$commonStorage$g5.e_ticket_discount) === null || _this$commonStorage$g5 === void 0 ? void 0 : _this$commonStorage$g5.length) > 0 ? true : false,
      "priv_card_number": '',
      "is_cancel_protect": true,
      "concession_details": this.concessions_category ? this.concession_details : []
    };
    this.apiFactory.fareBreakUp(data, pathForBooking).subscribe(res => {
      this.fareBreakup_hash = res.fare_break_up_hash;
      this.fareBreakUpDetails = res;
      this.concessionFareDetails = res.concession_fare_details;
      if (this.concessionFareDetails) {
        for (let seat of this.concessionFareDetails) {
          if (seat.is_round_trip == true) {
            for (let i = 0; i < this.passengerFormR.length; i++) {
              if (this.passengerFormR[i].get('seat_number').value === seat.seat) {
                this.passengerFormR[i].get('concession_fare').setValue(seat.fare);
              }
              // this.passengerForm[i].get('concession_fare').setValue(seat.fare);
            }
          } else if (seat.is_round_trip == false)
            // if(this.passengerForm?.length > 0){
            for (let i = 0; i < this.passengerForm.length; i++) {
              if (this.passengerForm[i].get('seat_number').value === seat.seat) {
                this.passengerForm[i].get('concession_fare').setValue(seat.fare);
              }
            }
          // }
        }
      }
    }, err => {
      //this.loaderService.hideLoadingDefault();
    });
  }
  getObjectKeys(obj) {
    return obj ? Object.keys(obj) : [];
  }
  formatDuration(duration) {
    return duration.replace(":", "h ") + "m";
  }
  ///----------------------tsrtc code added----------------------------------------------------------
  ageValidationToast(message) {
    var _this8 = this;
    return (0,_Users_ahemad_Documents_officeWorkspace_capacitor_customer_app_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const toast = yield _this8.toastController.create({
        message: message,
        duration: 3000,
        position: 'bottom'
        // color: 'danger'
      });
      yield toast.present();
    })();
  }
  onCocessionChangeAgeValidation(event, i, formType) {
    var _formGroup$i;
    const formGroup = formType === 1 ? this.passengerForm : this.passengerFormR;
    const ageControl = formGroup[i].get('age');
    const ageValue = ageControl === null || ageControl === void 0 ? void 0 : ageControl.value;
    const categoryControl = formGroup[i].get('concessions_category');
    const isCardControl = formGroup[i].get('isCard');
    let selectedPassenger = (_formGroup$i = formGroup[i]) === null || _formGroup$i === void 0 ? void 0 : _formGroup$i.value;
    let selectedCategory = this.concessions_category.find(data => data.id == (selectedPassenger === null || selectedPassenger === void 0 ? void 0 : selectedPassenger.concessions_category));
    let categoryWithoutValidation = this.concessions_category.find(category => !category.requires_card_validation);
    if (!ageValue || isNaN(ageValue)) {
      ageControl === null || ageControl === void 0 || ageControl.setErrors({
        required: true
      });
      this.ageValidationToast(`Age must be ${this.metaData.min_age_for_retired_emp} or above for ${selectedCategory.type}.`);
      categoryControl === null || categoryControl === void 0 || categoryControl.setValue(categoryWithoutValidation ? String(categoryWithoutValidation.id) : '');
      isCardControl === null || isCardControl === void 0 || isCardControl.setValue(false);
      return false;
    }
    if ((selectedCategory === null || selectedCategory === void 0 ? void 0 : selectedCategory.type) === this.rtdRtcEmployee && ageValue < this.metaData.min_age_for_retired_emp) {
      this.ageValidationToast(`Age must be ${this.metaData.min_age_for_retired_emp} or above for ${selectedCategory.type}.`);
      categoryControl === null || categoryControl === void 0 || categoryControl.setValue(categoryWithoutValidation ? String(categoryWithoutValidation.id) : '');
      isCardControl === null || isCardControl === void 0 || isCardControl.setValue(false);
      return false;
    }
    if ((selectedCategory === null || selectedCategory === void 0 ? void 0 : selectedCategory.type) === this.journaList && ageValue < this.metaData.max_child_age_limit) {
      this.ageValidationToast(`Age must be ${this.metaData.max_child_age_limit} or above for ${selectedCategory.type}.`);
      categoryControl === null || categoryControl === void 0 || categoryControl.setValue(categoryWithoutValidation ? String(categoryWithoutValidation.id) : '');
      isCardControl === null || isCardControl === void 0 || isCardControl.setValue(false);
      return false;
    }
    return true;
  }
  getCardValidationRequired(i) {
    var _this$passengerForm$i;
    return ((_this$passengerForm$i = this.passengerForm[i]) === null || _this$passengerForm$i === void 0 || (_this$passengerForm$i = _this$passengerForm$i.value) === null || _this$passengerForm$i === void 0 ? void 0 : _this$passengerForm$i.cardValidationRequired) || false;
  }
  onConcessionChange(ev, i, type, seat) {
    if (!this.onCocessionChangeAgeValidation(ev, i, type)) {
      return;
    }
    let concession = this.concessions_category;
    let selectedCategory = type === 1 ? concession.find(data => data.id == this.passengerForm[i].value.concessions_category) : concession.find(data => data.id == this.passengerFormR[i].value.concessions_category);
    let isCardValidationRequired = selectedCategory === null || selectedCategory === void 0 ? void 0 : selectedCategory.requires_card_validation;
    let isCaptureCardDetails = selectedCategory === null || selectedCategory === void 0 ? void 0 : selectedCategory.capture_card_details;
    if (type === 1) {
      this.cardValidationRequiredState[i] = isCardValidationRequired;
    } else {
      this.cardValidationRequiredStateReturn[i] = isCardValidationRequired;
    }
    let shouldShowCard = isCaptureCardDetails || !isCardValidationRequired && isCaptureCardDetails;
    this.updateFormControls(ev, i, type, shouldShowCard, seat);
    this.farebreakUpcall();
  }
  updateFormControls(ev, i, type, shouldShowCard, seat) {
    const form = type === 1 ? this.passengerForm : this.passengerFormR;
    const cardValidationState = type === 1 ? this.cardValidationRequiredState : this.cardValidationRequiredStateReturn;
    form[i].value.concessions_category = ev.detail.value;
    if (shouldShowCard) {
      form[i].controls['isCard'].setValue(true);
      setTimeout(() => {
        let ele = document.getElementById(`input${type === 1 ? i : 'R' + i}`);
        if (ele) ele.setFocus();
      }, 800);
      form[i].controls['name_by_id'].setValue('');
      form[i].controls['concession_fare'].setValue('');
      form[i].controls['id_number'].setValue('');
    } else {
      form[i].controls['concession_fare'].setValue(seat.fare);
      form[i].controls['id_number'].setValue('');
      form[i].controls['name_by_id'].setValue('');
      form[i].controls['isCard'].setValue(false);
    }
  }
  cardDetails(ev, i, type, seat) {
    let concession = this.concessions_category;
    let selectedCategory = type == 1 ? concession.find(data => data.id == this.passengerForm[i].value.concessions_category) : concession.find(data => data.id == this.passengerFormR[i].value.concessions_category);
    let isCardValidationRequired = selectedCategory === null || selectedCategory === void 0 ? void 0 : selectedCategory.requires_card_validation;
    let isCaptureCardDetails = selectedCategory === null || selectedCategory === void 0 ? void 0 : selectedCategory.capture_card_details;
    if (!isCardValidationRequired || !isCaptureCardDetails) {
      return;
    }
    let data = {
      "concession_type_id": type == 1 ? this.passengerForm[i].value.concessions_category : this.passengerFormR[i].value.concessions_category,
      "concession_card": type == 1 ? this.passengerForm[i].value.id_number : this.passengerFormR[i].value.id_number,
      "seat_number": seat.seat_number,
      "passenger_age": "",
      "base_fare": seat.fare,
      "reservation_id": this.commonStorage.getItem('serviceDetails').reservation_id,
      "flexi_fare": this.commonStorage.getItem('serviceDetails').flexi_fare ? this.commonStorage.getItem('serviceDetails').flexi_fare : 0,
      "child_concession_percent": selectedCategory === null || selectedCategory === void 0 ? void 0 : selectedCategory.concession_percentage,
      "auth_token": ""
    };
    if (ev && ev.keyCode == 13) {
      this.callValidatePassengerAPI(data, type, i);
    } else if (!ev) {
      this.callValidatePassengerAPI(data, type, i);
    }
  }
  callValidatePassengerAPI(data, type, i) {
    this.apiFactory.validatePassenger(data).subscribe(response => {
      if (response.code == 200) {
        let form = type == 1 ? this.passengerForm[i] : this.passengerFormR[i];
        form.controls['sex'].setValue(response.gender === 'FEMALE' ? 'Ms' : response.gender === 'MALE' ? 'Mr' : '');
        form.controls['name'].setValue(response.passenger_name);
        form.controls['name_by_id'].setValue(response.passenger_name);
        form.controls['concession_fare'].setValue(response.concession_fare);
        this.concession_details = [];
        this.farebreakUpcall();
      } else {
        this.util.showToast(response.message);
      }
    });
  }
  onAgeBlurr(event, i) {
    const ageValue = event.target.value ? event.target.value.toString().trim() : '';
    const categoryControl = this.passengerForm[i].get('concessions_category');
    const isCradControl = this.passengerForm[i].get('isCard');
    let categoryWithoutValidation = this.concessions_category.find(category => !category.requires_card_validation);
    if (!ageValue || isNaN(Number(ageValue))) {
      var _this$passengerForm$i2;
      this.ageValidationToast('Age is required.');
      (_this$passengerForm$i2 = this.passengerForm[i].get('age')) === null || _this$passengerForm$i2 === void 0 || _this$passengerForm$i2.setErrors({
        required: true
      });
      categoryControl === null || categoryControl === void 0 || categoryControl.setValue(String(this.concessions_category[0].id));
      categoryControl === null || categoryControl === void 0 || categoryControl.setValue(categoryWithoutValidation ? String(categoryWithoutValidation.id) : '');
      isCradControl.setValue(false);
      return;
    }
    let selectedConcessionCategory = this.passengerForm[i].get('concessions_category').value;
    this.farebreakUpcall();
    // this.onCocessionChangeAgeValidation(selectedConcessionCategory, i, type);
  }
  onAgeBlur(event, i, formType) {
    this.ageBlurSubject.next({
      event,
      i,
      formType
    });
  }
  handleAgeBlur(event, i, formType) {
    const formGroup = formType === 1 ? this.passengerForm : this.passengerFormR;
    const ageValue = event.target.value ? event.target.value.toString().trim() : '';
    const categoryControl = formGroup[i].get('concessions_category');
    const isCardControl = formGroup[i].get('isCard');
    let categoryWithoutValidation = this.concessions_category.find(category => !category.requires_card_validation);
    if (!ageValue || isNaN(Number(ageValue))) {
      var _formGroup$i$get;
      (_formGroup$i$get = formGroup[i].get('age')) === null || _formGroup$i$get === void 0 || _formGroup$i$get.setErrors({
        required: true
      });
      categoryControl === null || categoryControl === void 0 || categoryControl.setValue(categoryWithoutValidation ? String(categoryWithoutValidation.id) : '');
      isCardControl === null || isCardControl === void 0 || isCardControl.setValue(false);
      return;
    }
    let selectedConcessionCategory = categoryControl === null || categoryControl === void 0 ? void 0 : categoryControl.value;
    this.onCocessionChangeAgeValidation(selectedConcessionCategory, i, formType);
    this.farebreakUpcall();
  }
  ngOnDestroy() {
    if (this.ageBlurSubscription) {
      this.ageBlurSubscription.unsubscribe();
    }
  }
  isDisabled(i, formType) {
    if (!this.cardValidationRequired) {
      var _formGroup$i2, _selectedCategory$req;
      if (this.concessions_category == '' || this.concessions_category == undefined || this.concessions_category == null) {
        this.concessions_category = [];
        return false; // <- Explicitly return a boolean
      }
      const formGroup = formType === 1 ? this.passengerForm : this.passengerFormR;
      let selectedPassenger = (_formGroup$i2 = formGroup[i]) === null || _formGroup$i2 === void 0 ? void 0 : _formGroup$i2.value;
      let selectedCategory = this.concessions_category.find(data => data.id == (selectedPassenger === null || selectedPassenger === void 0 ? void 0 : selectedPassenger.concessions_category));
      let isCardValidationRequired = (_selectedCategory$req = selectedCategory === null || selectedCategory === void 0 ? void 0 : selectedCategory.requires_card_validation) !== null && _selectedCategory$req !== void 0 ? _selectedCategory$req : false;
      let isNameEntered = (selectedPassenger === null || selectedPassenger === void 0 ? void 0 : selectedPassenger.name_by_id) !== '';
      return isCardValidationRequired && isNameEntered;
    }
    return false; // <- Fallback return if cardValidationRequired is true
  }
  isArray(value) {
    return Array.isArray(value);
  }
}
_PassengerDetailsPage = PassengerDetailsPage;
_PassengerDetailsPage.ɵfac = function PassengerDetailsPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PassengerDetailsPage)(_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_services_global_data_service__WEBPACK_IMPORTED_MODULE_10__.GlobalDataService), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_25__.NavController), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_services_common_storage__WEBPACK_IMPORTED_MODULE_11__.CommonStorage), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_21__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_26__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_26__.LoadingController), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_24__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_services_util_provider__WEBPACK_IMPORTED_MODULE_12__.UtilProvider), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_services_theme_service__WEBPACK_IMPORTED_MODULE_13__.ThemeService), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_services_authentication__WEBPACK_IMPORTED_MODULE_14__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_services_date_service__WEBPACK_IMPORTED_MODULE_15__.DateService), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_25__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_services_exception__WEBPACK_IMPORTED_MODULE_16__.ExceptionProvider), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_17__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_services_api_factory__WEBPACK_IMPORTED_MODULE_18__.ApiFactory), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_27__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_26__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_27__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_services_appdata__WEBPACK_IMPORTED_MODULE_19__.AppData), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_services_firebase_analytics_service__WEBPACK_IMPORTED_MODULE_20__.FirebaseAnalyticsService), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_24__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_26__.ToastController));
};
_PassengerDetailsPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineComponent"]({
  type: _PassengerDetailsPage,
  selectors: [["app-passenger-details"]],
  viewQuery: function PassengerDetailsPage_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵloadQuery"]()) && (ctx.ionInputGst = _t.first);
    }
  },
  standalone: false,
  decls: 5,
  vars: 5,
  consts: [["ionInputGst", ""], [4, "ngIf"], [1, "ion-no-border", "theme1"], ["mode", "md", 1, "themeone-bg-cl", 2, "--border-width", "0px", 3, "ngClass"], [1, "themeone-head", 2, "margin-right", "40px"], ["slot", "start"], [2, "color", "var(--textFieldPlaceholderColor)", 3, "click"], [1, "theme1-bg-content", "theme1"], ["novalidate", "", 2, "margin-bottom", "75px"], [1, "cbus_card-1", 2, "border-bottom", "5px solid #EFEFEF", 3, "formGroup"], [1, "themeone-hd-txt-2"], [1, "themeone-ion-item", "cbus-country-code-icon", 2, "--padding-start", "0px", "border-bottom", "none", "margin-right", "-2.2%", "margin-top", "12px"], [2, "width", "100%"], ["size", "3"], ["class", "txt-input", "formControlName", "country_code", "placeholder", "Code", 3, "value", "click", 4, "ngIf"], ["color", "red", "mode", "md", "formControlName", "country_code", "style", "border-bottom: 1px solid #F1F2F4;--padding-start: 0px;width: 70px ;max-width: 95%;height: 100%;", "class", "countryCode", 4, "ngIf"], ["size", "8", 2, "padding-right", "0px"], ["label", "Mobile Number", "labelPlacement", "floating", "formControlName", "mobile_number", "inputmode", "numeric", "type", "tel", 2, "min-height", "50px", "border-bottom", "1px solid #F1F2F4", "color", "#333333", 3, "keyup"], ["class", "themeone-ion-item", 4, "ngIf"], [1, "themeone-check-item", 2, "display", "none"], [3, "ngClass"], [1, "themeone-chklabel", 2, "font-size", "14px", "color", "#191966"], ["style", "padding-top:16px;", 4, "ngIf"], ["class", "cbus_card-1", "style", "    border-bottom: 5px solid #EFEFEF;", 4, "ngFor", "ngForOf"], ["class", "cbus_card-1", "style", "    border-bottom: 5px solid #EFEFEF;", 4, "ngIf"], ["class", "cbus_card-1", "style", "margin:0px;border-bottom: 5px solid #EFEFEF;", 3, "ngClass", 4, "ngIf"], ["ion-button", "", 3, "ngClass"], [2, "padding", "16px 19px", "width", "-webkit-fill-available", "width", "-moz-available"], ["size", "7.5"], [1, "themeone-totalvalue"], [2, "margin-top", "4px"], [1, "themeone-viewbreakup", 2, "font-weight", "600", 3, "click"], ["class", "themeone-viewbreakup", "style", "color: #FFFFFF;", 4, "ngIf"], ["size", "4.5", 2, "text-align", "end", 3, "click"], [2, "margin", "auto", "font-weight", "600", "border-radius", "5px", 3, "ngClass"], ["class", "whole center", 4, "ngIf"], ["formControlName", "country_code", "placeholder", "Code", 1, "txt-input", 3, "click", "value"], ["color", "red", "mode", "md", "formControlName", "country_code", 1, "countryCode", 2, "border-bottom", "1px solid #F1F2F4", "--padding-start", "0px", "width", "70px", "max-width", "95%", "height", "100%"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "themeone-ion-item"], ["formControlName", "email", "type", "email", "label", "Email Id", "labelPlacement", "floating", 2, "color", "#333333"], [2, "padding-top", "16px"], ["size", "1.5", 2, "padding", "5px 0px 5px 0px"], ["src", "./assets/icon/theme1_wpicon.svg", "alt", "", 1, "img-icn"], ["size", "8", 2, "padding-left", "0px", "font-size", "14px", "color", "#333333", "font-weight", "bold"], ["size", "2.5", 2, "align-self", "center", 3, "ngClass"], ["class", "themeonetoggle", "style", "float: right;", "checked", "true", "mode", "ios", 3, "ngModelOptions", "ngModel", "ionChange", "ngModelChange", 4, "ngIf"], ["color", "dark", "style", "float: right;", "checked", "true", "mode", "md", 3, "ngModelOptions", "ngModel", "ionChange", "ngModelChange", 4, "ngIf"], ["checked", "true", "mode", "ios", 1, "themeonetoggle", 2, "float", "right", 3, "ionChange", "ngModelChange", "ngModelOptions", "ngModel"], ["color", "dark", "checked", "true", "mode", "md", 2, "float", "right", 3, "ionChange", "ngModelChange", "ngModelOptions", "ngModel"], [1, "cbus_card-1", 2, "border-bottom", "5px solid #EFEFEF"], [3, "formGroup"], ["style", "padding-bottom: 10px;", 3, "ngClass", 4, "ngIf"], [1, "themeone-passenger-txt"], ["class", "cbus_pos", "style", "display: inline-flex;", 4, "ngIf"], [2, "padding", "0px", "padding-bottom", "10px"], ["formControlName", "name", "type", "text", "label", "First Name and Last Name", "labelPlacement", "floating", 2, "color", "#333333", 3, "keyup"], ["style", "margin-top: -10px;", 4, "ngIf"], [2, "margin-top", "-10px"], ["col-12", "", "style", "padding: 0px;", 4, "ngIf"], [2, "padding-bottom", "10px", 3, "ngClass"], [1, "cbus_pos", 2, "display", "inline-flex"], ["src", "./assets/icon/cbuspassSeat.svg", 2, "height", "22px", "width", "20px"], [1, "themeone-seatcolor"], ["style", "     margin-left: 15px;height: 22px;\n              width: 20px; border-radius: 20px;", "src", "./assets/icon/passFemale.svg", 4, "ngIf"], ["style", "     margin-left: 15px;height: 22px;\n              width: 20px; border-radius: 20px;", "src", "./assets/icon/passMale.svg", 4, "ngIf"], ["src", "./assets/icon/passFemale.svg", 2, "margin-left", "15px", "height", "22px", "width", "20px", "border-radius", "20px"], ["src", "./assets/icon/passMale.svg", 2, "margin-left", "15px", "height", "22px", "width", "20px", "border-radius", "20px"], ["formControlName", "sex", 3, "value"], ["lines", "none", 2, "margin-left", "-20px"], ["lines", "none", 2, "margin-left", "-25px"], ["mode", "md", "item-left", "", "value", "Mr", 2, "--color-checked", "var(--bottomBarColor)", 3, "disabled"], [2, "padding-left", "10px", 3, "ngClass"], ["mode", "md", "item-left", "", "value", "Ms", 2, "--color-checked", "var(--bottomBarColor)", 3, "disabled"], ["formControlName", "age", "label", "Age", "labelPlacement", "floating", "type", "number", "inputmode", "numeric", "maxlength", "2", "pattern", "[0-9]*", 2, "color", "#333333", 3, "keyup"], ["col-12", "", 2, "padding", "0px"], [1, "themeone-ion-item", "cbus-cardtype-icon"], ["label", "Card Type", "labelPlacement", "floating", "color", "red", "mode", "md", "formControlName", "id_card_type", "placeholder", "Select Card", 1, "txt-lbl"], ["ngFor", "", 3, "ngForOf"], ["color", "red", "mode", "md", "formControlName", "id_card_type", "placeholder", "Select Card"], ["placeholder", "Card Number", "formControlName", "id_card_number", "type", "text"], ["col-6", "", 2, "padding", "0px", "padding-right", "5px"], ["placeholder", "Issue Date", "formControlName", "passport_issued_date", "type", "text", 3, "click", "readonly"], ["col-6", "", 2, "padding", "0px", "padding-left", "5px"], ["type", "text", "formControlName", "passport_expiry_date", "placeholder", "Expiry Date", 2, "height", "35px", "width", "100%", 3, "click", "readonly"], [2, "padding", "0px"], ["type", "text", "required", "", "formControlName", "place_of_issue", "placeholder", "Place of issue", 2, "height", "35px", "width", "100%"], ["lines", "none", 2, "--background", "#fff", "--padding-start", "0px"], [1, "txt-lbl"], ["slot", "start", "name", "coupons", 3, "ngModelChange", "ionChange", "ngClass", "ngModel"], ["style", "    border-bottom: 5px solid #EFEFEF;", "class", "cbus_card-1", 4, "ngFor", "ngForOf"], ["formControlName", "name", "type", "text", "label", "First Name and Last Name", "labelPlacement", "floating", 3, "keyup"], ["style", "margin-top: -20px;", 4, "ngIf"], ["style", "     margin-left: 15px;height: 22px;\n                width: 20px;", "src", "./assets/icon/passFemale.svg", 4, "ngIf"], ["style", "     margin-left: 15px;height: 22px;\n                width: 20px;", "src", "./assets/icon/passMale.svg", 4, "ngIf"], ["src", "./assets/icon/passFemale.svg", 2, "margin-left", "15px", "height", "22px", "width", "20px"], ["src", "./assets/icon/passMale.svg", 2, "margin-left", "15px", "height", "22px", "width", "20px"], ["formControlName", "sex"], ["lines", "none", 2, "margin-left", "-10px"], [2, "margin-top", "-20px"], ["formControlName", "age", "label", "Age", "labelPlacement", "floating", "type", "number", "inputmode", "numeric", "maxlength", "2", "pattern", "[0-9]*", 3, "keyup"], ["placeholder", "Card No.", "formControlName", "id_card_number", "type", "text"], [1, "cbus_card-1", 2, "margin", "0px", "border-bottom", "5px solid #EFEFEF", 3, "ngClass"], [1, "gstDiv"], [2, "font-weight", "bold", "color", "var(--bookingDetailsBgColor)"], ["name", "information-circle-outline", 2, "font-size", "20px", "margin-left", "5px", "color", "var(--bookingDetailsBgColor)", 3, "click"], ["placeholder", "Pin Code", "inputmode", "numeric", "type", "tel", "maxlength", "6", 3, "ionInput", "ngModelChange", "ngModel", "ngModelOptions"], ["mode", "md", "placeholder", "State", "color", "red", 2, "--padding-start", "8px", 3, "ionChange", "ngModelChange", "value", "ngModel", "ngModelOptions", "interfaceOptions"], ["name", "caret-down-outline", "slot", "end", 2, "width", "15px"], ["placeholder", "City", "type", "text", 3, "keyup", "ngModelChange", "value", "ngModel", "ngModelOptions"], [1, "themeone-check-item", 2, "--background", "#fff"], ["slot", "start", 3, "ionChange", "ngModelChange", "ngClass", "ngModel", "ngModelOptions"], [1, "themeone-chklabel", 2, "font-size", "14px", 3, "ngStyle"], ["type", "text", "placeholder", "GST No.", 3, "keyup", "ngModelChange", "ngModel", "ngModelOptions"], ["type", "text", "placeholder", "Registered Name", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "themeone-hd-txt-2", 2, "margin-top", "15px"], [1, "themeone-viewbreakup", 2, "color", "#FFFFFF"], [1, "whole", "center"], [1, "legend-box", 2, "position", "absolute", "bottom", "0", "width", "100% !important"], ["size", "6"], [2, "margin-top", "0px"], [2, "text-align", "end", "margin-top", "0px", 3, "click", "ngStyle"], [1, "gstMsg"], ["mode", "md", 1, "bg-cl"], [1, "head"], [1, "bg-content"], [1, "card-1", 3, "formGroup"], [1, "Contact-details"], [1, "hd-txt-2"], [1, "txt-input", 2, "margin-left", "20px", "align-items", "center"], ["size", "2.8"], ["style", "position: relative; display: flex; align-items: center;", 4, "ngIf"], ["size", "9", "offset", "0.2"], ["formControlName", "mobile_number", "placeholder", "Enter mobile number", "inputmode", "numeric", "type", "tel", 1, "txt-lbl", 3, "keyup"], ["style", "font-size: 13px;\n      margin: 10px 0px 10px 22px;\n      color: var(--primary);", 4, "ngIf"], ["style", "width: 100%;font-size: 0px; opacity: 0.3;background: #a2a2a2;", 4, "ngIf"], ["class", "card-1 mr-tp-16", "style", "margin-bottom: -32px;", 4, "ngIf"], ["class", "card-1 mr-tp-16", 4, "ngFor", "ngForOf"], ["class", "card-1 mr-tp-16 mr-bt-16", 4, "ngIf"], ["ion-button", "", 1, "bottom"], [1, "seats"], [1, "seat-lbl"], [2, "margin-top", "5px"], ["class", "seat-val", 4, "ngIf"], [1, "default-theme-viewBreakup", 2, "margin-left", "5px", "margin-top", "-2px", 3, "click"], [1, "pay", 3, "click"], [2, "text-align", "center"], ["formControlName", "email", "placeholder", "Enter email address", "type", "email", 1, "txt-lbl"], [2, "position", "relative", "display", "flex", "align-items", "center"], ["color", "red", "mode", "md", "interface", "popover", "formControlName", "country_code", 2, "flex", "1", "padding-right", "25px"], ["name", "chevron-down-outline", 1, "selectIcon", "arrowIconStyle"], [2, "font-size", "13px", "margin", "10px 0px 10px 22px", "color", "var(--primary)"], [2, "width", "100%", "font-size", "0px", "opacity", "0.3", "background", "#a2a2a2"], ["size-sm", ""], ["src", "./assets/icon/whatsapp.svg", "alt", "", 1, "img-icn"], ["size", "8"], ["size", "2"], ["checked", "true", 1, "default-toggle", 3, "ionChange", "ngModelChange", "ngModelOptions", "ngModel"], [1, "card-1", "mr-tp-16", 2, "margin-bottom", "-32px"], [1, "pos", "addexisting", 3, "click"], [1, "card-1", "mr-tp-16"], [3, "formGroup", 4, "ngIf"], ["class", "Contact-details", 4, "ngIf"], ["class", "traveller_type", 4, "ngIf"], [1, "pos"], [1, "seatscolor"], [2, "text-align", "end"], [1, "traveller_details"], ["label", "Name", "labelPlacement", "floating", "placeholder", "Enter Name", "formControlName", "name", "type", "text", 3, "keyup"], [2, "padding-left", "8px"], ["mode", "md", "item-left", "", "value", "Mr", 2, "--color-checked", "var(--iconsAndButtonsColor)", "--color", "var(--iconsAndButtonsColor)", 3, "disabled"], ["mode", "md", "item-left", "", "value", "Ms", 2, "--color-checked", "var(--iconsAndButtonsColor)", "--color", "var(--iconsAndButtonsColor)", 3, "disabled"], ["style", "margin: 5px; box-shadow: none; border: 1px solid #bab2b2;", 4, "ngIf"], ["col-12", "", 4, "ngIf"], ["style", "color: red;\n                font-size: 10px;\n                font-weight: 700;\n                text-align: center;", 4, "ngIf"], [1, "traveller_type"], ["label", "Age", "labelPlacement", "floating", "formControlName", "age", "placeholder", "Age", "type", "number", "inputmode", "numeric", "min", "1", "max", "99", 3, "ionInput", "ionBlur", 4, "ngIf"], ["formControlName", "age", "label", "Age", "labelPlacement", "floating", "type", "number", "inputmode", "numeric", "max", "99", "pattern", "[0-9]*", "min", "1", 3, "keyup", 4, "ngIf"], ["label", "Age", "labelPlacement", "floating", "formControlName", "age", "placeholder", "Age", "type", "number", "inputmode", "numeric", "min", "1", "max", "99", 3, "ionInput", "ionBlur"], ["formControlName", "age", "label", "Age", "labelPlacement", "floating", "type", "number", "inputmode", "numeric", "max", "99", "pattern", "[0-9]*", "min", "1", 3, "keyup"], ["size", "12"], ["lines", "none", 1, "concession-select-item"], ["mode", "md", "cssClass", "custom-popover", "interface", "popover", "formControlName", "concessions_category", 1, "force-left-padding", 2, "color", "black", "--highlight-color-focused", "transparent", 3, "ionChange"], ["name", "chevron-down-outline", "slot", "end", 1, "selectIcon"], [2, "margin", "5px", "box-shadow", "none", "border", "1px solid #bab2b2"], [3, "size"], ["position", "stacked", 1, "txt-lbl"], ["placeholder", "Enter Card Number", "formControlName", "id_number", 3, "keyup", "id"], ["size", "6", 4, "ngIf"], [3, "click"], ["placeholder", "Card Name", "formControlName", "name_by_id", 3, "readonly"], ["col-12", ""], ["mode", "ios"], ["color", "red", "mode", "md", "interface", "popover", "formControlName", "id_card_type", "placeholder", "Select Card"], ["label", "ID card No.", "labelPlacement", "floating", "formControlName", "id_card_number", "placeholder", "Card No.", "type", "text"], ["col-4", ""], ["label", "Issue Date", "labelPlacement", "floating", "formControlName", "passport_issued_date", "placeholder", "Issue Date", "type", "text", 3, "click", "readonly"], ["label", "Expiry Date", "labelPlacement", "floating", "type", "text", "formControlName", "passport_expiry_date", "placeholder", "Expiry Date", 2, "height", "35px", "width", "100%", 3, "click", "readonly"], ["label", "Place of issue", "labelPlacement", "floating", "type", "text", "required", "", "formControlName", "place_of_issue", "placeholder", "Place of issue", 2, "height", "35px", "width", "100%"], [2, "color", "red", "font-size", "10px", "font-weight", "700", "text-align", "center"], [1, "card-1", "mr-tp-16", "mr-bt-16"], ["lines", "none"], ["slot", "start", "color", "red", "name", "coupons", 2, "margin", "-11px 15px -12px -13px", 3, "ngModelChange", "ionChange", "ngModel"], ["style", "margin: 5px;box-shadow: none;border: 1px solid #bab2b2;", 4, "ngIf"], ["style", "color: red;\n          font-size: 10px;\n          font-weight: 700;\n          text-align: center;", 4, "ngIf"], ["class", "txt-lbl", "position", "floating", 4, "ngIf"], ["formControlName", "age", "placeholder", "Age", "type", "number", "inputmode", "numeric", "maxlength", "2", "pattern", "[0-9]*", 3, "keyup", "ionBlur", 4, "ngIf"], ["formControlName", "age", "label", "Age", "labelPlacement", "floating", "type", "number", "inputmode", "numeric", "maxlength", "2", "pattern", "[0-9]*", 3, "keyup", 4, "ngIf"], ["position", "floating", 1, "txt-lbl"], ["formControlName", "age", "placeholder", "Age", "type", "number", "inputmode", "numeric", "maxlength", "2", "pattern", "[0-9]*", 3, "keyup", "ionBlur"], ["mode", "md", "interface", "popover", "formControlName", "concessions_category", 2, "border", "1px solid #bab2b2", "border-radius", "8px", "color", "black", 3, "ionChange"], ["name", "chevron-down-outline", 1, "selectIcon"], ["value", "", "placeholder", "Enter Card Number", "formControlName", "id_number", 3, "keyup", "id"], ["value", "", "placeholder", "Card Name", "formControlName", "name_by_id", 3, "readonly"], ["label", "ID Card No.", "labelPlacement", "floating", "type", "text", "required", "", "formControlName", "id_card_number", "placeholder", "Card No.", 2, "height", "35px"], ["label", "Issue Date", "labelPlacement", "floating", "type", "text", "formControlName", "passport_issued_date", "placeholder", "Issue Date", 2, "height", "35px", "width", "100%", 3, "click", "readonly"], ["type", "text", "formControlName", "passport_expiry_date", "placeholder", "Expiry Date", "label", "Expiry Date", "labelPlacement", "floating", 2, "height", "35px", "width", "100%", 3, "click", "readonly"], ["type", "text", "label", "Place of issue", "labelPlacement", "floating", "required", "", "formControlName", "place_of_issue", "placeholder", "Place", 1, "input", 2, "height", "35px", "width", "100%"], ["class", "card-1  mr-bt-16", 3, "ngClass", 4, "ngIf"], [1, "card-1", "mr-bt-16", 3, "ngClass"], ["name", "information-circle-outline", 2, "font-size", "20px", "margin-left", "5px", 3, "click"], ["mode", "md", 4, "ngIf"], ["mode", "md"], ["inputmode", "numeric", "type", "tel", "maxlength", "6", "label", "Pin Code", "labelPlacement", "floating", 1, "txt-lbl", 3, "ionInput", "ngModelChange", "ngModel", "ngModelOptions"], ["color", "red", "label", "State", "labelPlacement", "floating", 1, "txt-lbl", 3, "ionChange", "ngModelChange", "value", "ngModel", "ngModelOptions", "interfaceOptions"], ["type", "text", "label", "City", "labelPlacement", "floating", 1, "txt-lbl", 3, "keyup", "ngModelChange", "value", "ngModel", "ngModelOptions"], ["slot", "start", "color", "red", 2, "margin", "-11px 15px -12px -13px", 3, "ionChange", "ngModelChange", "ngModel", "ngModelOptions"], ["type", "text", "placeholder", "Enter GST number", "label", "GST ID", "labelPlacement", "floating", 1, "txt-lbl", 3, "keyup", "ngModelChange", "ngModel", "ngModelOptions"], ["type", "text", "placeholder", "Enter Reg. Name", "label", "Reg. Name", "labelPlacement", "floating", 1, "txt-lbl", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "seat-val"], [2, "text-align", "end", "color", "var(--sectionHeaderTextColor)", "margin-top", "0px", 3, "click"], [1, "ourbustheme"], ["size", "8", 2, "display", "flex", "align-items", "center", "justify-content", "center"], [2, "padding", "8px", "margin", "16px 8px"], [2, "display", "flex", "align-items", "center"], [1, "ourbus_ori_dest"], ["src", "././assets/icon/ourbus_ArrowRight.svg", 2, "margin", "0px 8px"], [1, "time-info"], ["size", "4"], [1, "time"], [1, "time-text"], [1, "date"], ["size", "4", 1, "duration"], [1, "ourbus_duration_time"], [1, "time", 2, "text-align", "end"], ["style", "border-bottom: 1px solid #EFEFEF;margin: 8px 0px;", 4, "ngIf"], ["class", "time-info", 4, "ngIf"], ["size", "1"], ["src", "././assets/icon/ourbus_profile.svg", 2, "width", "24px", "height", "24px"], ["size", "11", 1, "ourbus_pass_head"], ["style", "font-size: 14px;", 4, "ngIf"], [4, "ngFor", "ngForOf"], ["src", "././assets/icon/ourbus_PhoneCall.svg", 2, "width", "24px", "height", "24px"], ["lines", "none", "mode", "md", "class", "ourbus_custom_input", "style", "margin: 8px 0px;--min-height: 62px;", 4, "ngIf"], ["size", "3.5"], ["size", "8.5"], ["lines", "none", "mode", "md", 1, "ourbus_custom_input", 2, "margin", "8px 0px", "--min-height", "62px"], ["fill", "outline", "formControlName", "mobile_number", "placeholder", "Enter phone number", "inputmode", "numeric", "type", "tel", "maxlength", "10", "label", "Phone Number", "labelPlacement", "floating", 1, "ourbus_labelSet", 3, "input"], ["style", "margin: 0px 8px;", 4, "ngIf"], ["style", "padding: 8px;margin: 16px 8px;", 4, "ngIf"], [2, "margin", "16px 8px"], [1, "ourbus_rowBg"], ["src", "././assets/icon/ourbus_tag.svg", 2, "width", "24px", "height", "24px"], ["size", "11"], [1, "ourbus_order_details"], [2, "border", "1px solid #D9D9D9", "margin", "0px"], [2, "padding", "5px 15px 20px 15px", ";background", "white"], ["expand", "block", "slot", "fixed", 1, "btnEdit", 2, "--background", "var(--iconsAndButtonsColor)", "--color", "var(--primaryText)", "font-size", "18px", "font-weight", "500", "height", "50px", 3, "click"], [2, "border-bottom", "1px solid #EFEFEF", "margin", "8px 0px"], [2, "font-size", "14px"], [1, "ourbus_passList"], ["lines", "none", "mode", "md", 1, "ourbus_custom_input", 2, "margin", "8px 0px", "--min-height", "60px"], ["fill", "outline", "placeholder", "Enter your name", "label", "Name", "labelPlacement", "floating", "formControlName", "name", "type", "text", "inputmode", "text", "maxlength", "50", 1, "ourbus_labelSet", 2, "font-weight", "500", 3, "input"], ["size", "6", 2, "margin", "8px 0px"], ["mode", "ios", "formControlName", "sex", 2, "padding", "4px", 3, "ngModelChange", "ngModel"], ["value", "Mr", 1, "ourbus_segment", 3, "disabled"], ["value", "Ms", 3, "disabled"], ["size", "12", 4, "ngIf"], ["style", "color: red;\n          font-size: 10px;\n          font-weight: 700;\n          margin-left: 8px;", 4, "ngIf"], ["lines", "none", "mode", "md", 1, "ourbus_custom_input", "ourbus_inputText", 2, "margin", "8px 0px", "--min-height", "60px"], ["fill", "outline", "formControlName", "age", "placeholder", "Age", "pattern", "[0-9]*", "inputmode", "numeric", "type", "tel", "maxlength", "3", "label", "Age", "labelPlacement", "floating", 1, "ourbus_labelSet", 3, "input"], ["fill", "outline", "mode", "md", 1, "ourbus_custom_input", 2, "margin", "8px 0px", "--min-height", "60px"], ["position", "floating", 1, "ourbus_labelSet"], ["fill", "outline", "formControlName", "id_card_number", "placeholder", "Card No.", "type", "text", "label", "ID card No.", "labelPlacement", "floating", 1, "ourbus_labelSet"], ["fill", "outline", "formControlName", "passport_issued_date", "placeholder", "Issue Date", "type", "text", "label", "Issue Date", "labelPlacement", "floating", 1, "txt-lbl", 3, "click", "readonly"], ["fill", "outline", "type", "text", "formControlName", "passport_expiry_date", "placeholder", "Expiry Date", "label", "Expiry Date", "labelPlacement", "floating", 1, "txt-lbl", 2, "height", "35px", "width", "100%", 3, "click", "readonly"], ["fill", "outline", "type", "text", "required", "", "formControlName", "place_of_issue", "placeholder", "Place of issue", "label", "Place of issue", "labelPlacement", "floating", 1, "txt-lbl", 2, "height", "35px", "width", "100%"], [2, "color", "red", "font-size", "10px", "font-weight", "700", "margin-left", "8px"], ["mode", "md", "slot", "start", "name", "coupons", 1, "oubus_checkbox", 2, "--checkbox-background-checked", "var(--border-color-checked)", 3, "ngModelChange", "ionChange", "ngModel"], [1, "ourbus_pass_head", 2, "font-size", "14px"], ["style", "margin-top: 10px;", 4, "ngFor", "ngForOf"], [2, "margin-top", "10px"], ["fill", "outline", "label", "Name", "labelPlacement", "floating", "placeholder", "Enter your name", "formControlName", "name", "type", "text", "inputmode", "text", "maxlength", "50", 1, "ourbus_labelSet", 2, "font-weight", "500", 3, "input"], ["mode", "ios", "formControlName", "sex", 2, "padding", "4px"], ["style", "color: red;\n            font-size: 10px;\n            font-weight: 700;\n            margin-left: 8px;", 4, "ngIf"], ["lines", "none", "fill", "outline", "mode", "md", 1, "ourbus_custom_input", 2, "margin", "8px 0px", "--min-height", "60px"], ["fill", "outline", "formControlName", "passport_issued_date", "placeholder", "Issue Date", "type", "text", "label", "Issue Date", "labelPlacement", "floating", 1, "ourbus_labelSet", 3, "click", "readonly"], ["fill", "outline", "formControlName", "passport_expiry_date", "placeholder", "Expiry Date", "label", "Expiry Date", "labelPlacement", "floating", 1, "ourbus_labelSet", 2, "height", "35px", "width", "100%", 3, "click", "readonly"], ["fill", "outline", "type", "text", "required", "", "formControlName", "place_of_issue", "placeholder", "Place", "label", "Place od issue", "labelPlacement", "floating", 1, "ourbus_labelSet", 2, "height", "35px", "width", "100%"], ["fill", "outline", "formControlName", "email", "placeholder", "Enter your email", "label", "Email", "labelPlacement", "floating", "type", "email", "maxlength", "50", 1, "ourbus_labelSet"], ["lines", "none", "mode", "md", 1, "selectedFlag"], [2, "margin", "-34px 0px 0px 0px", "font-size", "20px"], [1, "ourbus_inputText", 2, "height", "58px", "margin-left", "8px", 3, "readonly"], ["lines", "none", "mode", "md", "class", "selectedFlag_New", 4, "ngIf"], ["lines", "none", "mode", "md", 1, "selectedFlag_New"], [2, "font-size", "20px", "margin-right", "10px"], ["formControlName", "country_code", "placeholder", "Code", 3, "click", "ngModel"], ["formControlName", "country_code", "placeholder", "Code", 3, "click", "ngModelChange", "ngModel"], [2, "margin", "0px 8px"], ["size", "1", 2, "margin-top", "auto", "margin-bottom", "auto"], ["mode", "md", 1, "ourbusCheckbux", 2, "--checkbox-background-checked", "var(--border-color-checked)", 3, "click", "ngModelChange", "ngModel", "ngModelOptions"], ["size", "11", 1, "ourbusWhtsappText"], [1, "ourbus_pass_head", 2, "font-weight", "bold", "color", "var(--bookingDetailsBgColor)"], ["name", "information-circle", 1, "ourbus_info_icon", 3, "click"], ["lines", "none", "mode", "md", "class", "ourbus_custom_input", "style", "margin: 8px 0px;--min-height: 60px;", 4, "ngIf"], ["fill", "outline", "inputmode", "numeric", "type", "tel", "maxlength", "6", "label", "Pin Code", "labelPlacement", "floating", 1, "ourbus_labelSet", 3, "ionInput", "ngModelChange", "ngModel", "ngModelOptions"], ["fill", "outline", "label", "State", "labelPlacement", "floating", "color", "red", "mode", "md", "interface", "popover", 1, "ourbus_labelSet", "labelState", 2, "white-space", "normal", 3, "ionChange", "ngModelChange", "disabled", "value", "ngModel", "ngModelOptions"], ["fill", "outline", "type", "text", "label", "City", "labelPlacement", "floating", 1, "ourbus_labelSet", "labelState", 3, "keyup", "ngModelChange", "disabled", "value", "ngModel", "ngModelOptions"], ["lines", "none", "lines", "none", 1, "no-padding", "ourbus_item", 2, "padding-inline-start", "0px"], [1, "ourbus_pass_head", 2, "color", "#2D2D2D"], ["slot", "end", "mode", "ios", 1, "ourbus_toggle", 3, "ngModelChange", "ionChange", "ngModel", "ngModelOptions"], ["class", "gst_card", 4, "ngIf"], [1, "gst_card"], ["lines", "none", "mode", "md", 1, "ourbus_custom_input", 2, "margin", "8px 0px"], ["fill", "outline", "type", "text", "placeholder", "Enter GST number", 3, "keyup", "ngModelChange", "ngModel", "ngModelOptions"], ["fill", "outline", "type", "text", "placeholder", "Enter Registration Name", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["style", "margin: 8px;", 4, "ngIf"], [2, "margin", "8px"], [1, "ourbus_farebreakup_curr"], ["size", "6", 2, "text-align", "end"], ["style", "padding: 8px;", 4, "ngIf"], [2, "padding", "8px"], [1, "ourbus_amount_payble"], [1, "ourbus_amount_paybl_amount"], ["size", "6", 2, "padding", "5px 0px"], [2, "margin-top", "0px", "margin-bottom", "6px", "font-family", "Test S\u00F6hne !important"], [2, "text-align", "end", "margin-bottom", "6px", "color", "var(--sectionHeaderTextColor)", "margin-top", "0px", 3, "click"], [1, "gstMsg", 2, "font-family", "Test S\u00F6hne !important", "margin-bottom", "7px"], ["slot", "start", 2, "margin-top", "-11px"], [1, "SeaBird_pass"], [1, "SeaBird_sub"], [1, "seaBirdbg-content"], [1, "seaBird-card-1", 2, "margin", "14px 9px", "border", "1px solid #626262", "border-radius", "10px", "background", "white", "padding-left", "0px", "padding-right", "0px", 3, "formGroup"], [1, "Contact-details", 2, "padding-left", "16px", "padding-right", "16px"], [1, "hd-txt-2", 2, "padding-left", "16px", "padding-right", "16px"], ["style", " --background: white;", 4, "ngIf"], [1, "txt-input", 2, "padding-bottom", "10px", "padding-left", "16px", "padding-right", "16px"], ["size", "2.8", 2, "border-bottom", "1px solid #a2a2a2", "display", "flex", "flex-direction", "column-reverse", "align-items", "center"], ["class", "txt-input", "formControlName", "country_code", 3, "value", "click", 4, "ngIf"], ["class", "SeaBird_code", "formControlName", "country_code", 4, "ngIf"], ["size", "9", "offset", "0.2", 2, "border-bottom", "1px solid #a2a2a2"], ["lines", "none", 2, "--background", "white"], ["formControlName", "mobile_number", "label", "Enter phone number", "labelPlacement", "floating", "inputmode", "numeric", "type", "tel", 1, "txt-input", "txt-lbl", 3, "keyup"], ["style", "font-size: 13px;\n        margin: 10px 0px 10px 22px;\n        color: var(--primary);", 4, "ngIf"], ["style", "padding-left: 16px;padding-right: 16px;", 4, "ngIf"], [1, "seaBird-card-1", "mr-tp-16", 2, "margin", "14px 9px", "border", "1px solid #626262", "border-radius", "10px", "background", "white", "padding-left", "0px", "padding-right", "0px"], [3, "formGroup", 4, "ngFor", "ngForOf"], ["class", "seaBird-card-1 mr-tp-16 mr-bt-16", "style", "margin: 14px 9px;border: 1px solid #626262;border-radius: 10px;background: white;", 4, "ngIf"], ["class", "seaBird-card-1  mr-bt-16", "style", "margin: 14px 9px;border: 1px solid #626262;border-radius: 10px;background: white;", 3, "ngClass", 4, "ngIf"], ["class", "transparent-item", 4, "ngIf"], ["class", "seaBird-card-1  mr-bt-16", "style", "margin: 14px 9px;border: 1px solid #626262;border-radius: 10px;padding: 0px 12px;background: white;", 4, "ngIf"], [1, "seaBird-card-1", 2, "margin", "14px 9px", "border", "1px solid #626262", "border-radius", "10px", "padding", "8px 12px", "background", "white"], ["size", "8", 2, "color", "black", "font-size", "14px", "font-weight", "bold"], [1, "seabirdAmount"], ["ion-button", ""], [1, "seabirdPay", 2, "display", "flex", "justify-content", "center", "align-items", "center", "flex-direction", "column", "padding", "10px 0px", 3, "click"], [2, "--background", "white"], ["formControlName", "email", "type", "email", "label", "Enter email address", "labelPlacement", "floating", 1, "txt-lbl"], ["formControlName", "country_code", 1, "txt-input", 3, "click", "value"], ["formControlName", "country_code", 1, "SeaBird_code"], [2, "padding-left", "16px", "padding-right", "16px"], ["size", "1.5"], ["size", "9"], ["mode", "md", "checked", "true", 1, "seabird-toggle", 3, "ionChange", "ngModelChange", "ngModelOptions", "ngModel"], ["class", "Contact-details", "style", "padding-left: 16px;padding-right: 16px;", 4, "ngIf"], ["formControlName", "sex", 2, "width", "100%"], ["lines", "none", 2, "--background", "white", "width", "fit-content"], ["mode", "md", "value", "Mr", 2, "--color-checked", "var(--iconsAndButtonsColor)", "--color", "var(--iconsAndButtonsColor)", 3, "disabled"], [2, "padding-left", "8px", 3, "ngClass"], ["lines", "none", 2, "--background", "white", "width", "fit-content", "margin-left", "-11px"], ["mode", "md", "value", "Ms", 2, "--color-checked", "var(--iconsAndButtonsColor)", "--color", "var(--iconsAndButtonsColor)", 3, "disabled"], [1, "styled-hr"], ["style", "color: red; font-size: 12px; font-weight: 700;padding-left: 16px;padding-right: 16px;", 4, "ngIf"], ["label", "Age", "labelPlacement", "floating", "formControlName", "age", "placeholder", "Age", "type", "number", 3, "keyup"], ["mode", "ios", 2, "--background", "white", "--min-height", "56px"], ["name", "caret-down-outline", "slot", "end", 2, "font-size", "12px", "color", "grey"], ["color", "red", "interface", "popover", "mode", "md", "formControlName", "id_card_type", "placeholder", "Select Card"], ["formControlName", "id_card_number", "label", "Card Number", "labelPlacement", "floating", "type", "text"], ["label", "Issue Date", "labelPlacement", "floating", "formControlName", "passport_issued_date", "placeholder", "Issue Date", "type", "text", 1, "txt-lbl", 3, "click", "readonly"], ["label", "Expiry Date", "labelPlacement", "floating", "formControlName", "passport_expiry_date", "placeholder", "Expiry Date", "type", "text", 1, "txt-lbl", 3, "click", "readonly"], ["formControlName", "place_of_issue", "label", "Place of Issue", "labelPlacement", "floating", "placeholder", "Place of issue", "type", "text", 1, "txt-lbl"], [2, "color", "red", "font-size", "12px", "font-weight", "700", "padding-left", "16px", "padding-right", "16px"], [1, "seaBird-card-1", "mr-tp-16", "mr-bt-16", 2, "margin", "14px 9px", "border", "1px solid #626262", "border-radius", "10px", "background", "white"], ["slot", "start", "name", "coupons", "mode", "md", 2, "margin", "-11px 15px -12px -13px", "--background-checked", "#2B28ce", "--border-color-checked", "#2b28ce", 3, "ngModelChange", "ionChange", "ngModel"], ["style", "margin: 14px 9px;border: 1px solid #626262;border-radius: 10px;background: white;padding-left: 0px;padding-right:0px;", "class", "seaBird-card-1 mr-tp-16", 4, "ngFor", "ngForOf"], ["size", "4.5"], ["style", "color: red;font-size: 12px;font-weight: 700; padding-left: 16px;padding-right: 16px;\n            ", 4, "ngIf"], ["type", "text", "formControlName", "passport_issued_date", "placeholder", "Issue Date", "label", "Issue Date", "labelPlacement", "floating", 1, "txt-lbl", 2, "height", "35px", "width", "100%", 3, "click", "readonly"], ["type", "text", "formControlName", "passport_expiry_date", "placeholder", "Expiry Date", "label", "Expiry Date", "labelPlacement", "floating", 1, "txt-lbl", 2, "height", "35px", "width", "100%", 3, "click", "readonly"], ["type", "text", "required", "", "formControlName", "place_of_issue", "placeholder", "Place", "label", "Place of Issue", "labelPlacement", "floating", 1, "input", "txt-lbl", 2, "height", "35px", "width", "100%"], [1, "seaBird-card-1", "mr-bt-16", 2, "margin", "14px 9px", "border", "1px solid #626262", "border-radius", "10px", "background", "white", 3, "ngClass"], ["mode", "md", "style", "--background: white;", 4, "ngIf"], ["mode", "md", 2, "--background", "white"], ["color", "red", "mode", "md", 3, "ionChange", "ngModelChange", "value", "ngModel", "ngModelOptions", "interfaceOptions"], ["inputmode", "numeric", "type", "tel", "label", "Pin Code", "labelPlacement", "floating", "maxlength", "6", 1, "txt-lbl", 3, "ionInput", "ngModelChange", "ngModel", "ngModelOptions"], [1, "transparent-item"], ["mode", "md", "slot", "start", 1, "SeaBird_check", 2, "margin", "-11px 15px -12px -13px", 3, "ionChange", "ngModelChange", "ngModel", "ngModelOptions"], [1, "seaBird-card-1", "mr-bt-16", 2, "margin", "14px 9px", "border", "1px solid #626262", "border-radius", "10px", "padding", "0px 12px", "background", "white"], ["type", "text", "placeholder", "Enter GST number", 3, "keyup", "ngModelChange", "ngModel", "ngModelOptions"], ["type", "text", "placeholder", "Enter Registration Name", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "ion-no-border", "shyamoli_theme_header"], ["mode", "md", 2, "--border-width", "0px"], [1, "shyamolitheme-bg-content"], ["novalidate", ""], [1, "subheading"], ["lines", "none", 1, "mobile-item"], [1, "mobile-input-container"], ["class", "country-code-box", 3, "click", 4, "ngIf"], ["formControlName", "country_code", "mode", "md", "interface", "popover", "class", "country-code-select", "style", "text-align: center;", 4, "ngIf"], ["formControlName", "mobile_number", "placeholder", "Enter your mobile number", "inputmode", "numeric", "type", "tel", 1, "mobile-input", 3, "keyup"], ["class", "intl-warning", 4, "ngIf"], ["lines", "none", "class", "email-item", 4, "ngIf"], ["class", "whatsapp-row", 4, "ngIf"], ["class", "card-1 mr-tp-16", 4, "ngIf"], ["class", "card-1 mr-tp-16 mr-bt-16", "style", "padding: 0px 10px;", 4, "ngIf"], ["class", "ion-padding shyamoli-footer-row", "style", "background: var(--iconsAndButtonsColor); border-top: 1px solid var(--iconsAndButtonsColor);border-top-left-radius: 10px;\n    border-top-right-radius: 10px; padding: 10px 20px 10px 20px;", 4, "ngIf"], [1, "country-code-box", 3, "click"], ["formControlName", "country_code", "mode", "md", "interface", "popover", 1, "country-code-select", 2, "text-align", "center"], [1, "intl-warning"], ["lines", "none", 1, "email-item"], ["formControlName", "email", "placeholder", "Enter your email", "type", "email", 1, "email-input"], [1, "whatsapp-row"], ["size", "9", 2, "color", "#333333", "font-size", "14px"], [2, "color", "#3BAD69"], ["mode", "ios", "checked", "true", 1, "default-toggle", 3, "ionChange", "ngModelChange", "ngModelOptions", "ngModel"], [1, "shyamoli-pos"], ["src", "./assets/icon/shyamoli-seat.svg", "alt", "Seat", 2, "height", "18px", "width", "18px", "vertical-align", "middle", "margin-right", "4px"], ["placeholder", "Enter your full name", "formControlName", "name", "type", "text", 1, "email-input", 3, "keyup"], ["size", "6", 2, "padding", "0px"], [2, "display", "inline-flex", "height", "50px"], ["mode", "md", "lines", "none", 2, "margin-right", "10px", "--padding-start", "0px", "display", "-webkit-box", "--inner-padding-end", "8px !important", 3, "click"], ["lines", "none", "mode", "md", 2, "--padding-start", "0px", "display", "-webkit-box", "--inner-padding-end", "8px !important", 3, "click"], ["size", "6", "style", "padding: 0px;", 4, "ngIf"], ["style", "margin: 15px 0px; box-shadow: none; border: 1px solid #bab2b2;", 4, "ngIf"], ["style", "color: red;\n                font-size: 10px;\n                font-weight: 700;\n                text-align: center;padding-top:5px;", 4, "ngIf"], [1, "subheading", 2, "padding-left", "16px"], ["formControlName", "age", "placeholder", "Enter age", "type", "number", "inputmode", "numeric", "max", "2", "pattern", "[0-9]*", "min", "1", 1, "email-input", 3, "keyup"], [2, "margin", "15px 0px", "box-shadow", "none", "border", "1px solid #bab2b2"], ["placeholder", "Enter Card Number", "formControlName", "id_number", 1, "email-input", 3, "keyup", "id"], ["lines", "none", 1, "email-item", 3, "click"], ["placeholder", "Card Name", "formControlName", "name_by_id", 1, "email-input", 3, "readonly"], [3, "size", 4, "ngIf"], ["mode", "ios", "lines", "none", 1, "email-item"], ["color", "red", "mode", "md", "interface", "popover", "formControlName", "id_card_type", "placeholder", "ID Type", 1, "email-input"], ["formControlName", "id_card_number", "placeholder", "Enter ID number", "type", "text", 1, "email-input"], ["formControlName", "passport_issued_date", "placeholder", "Issue Date", "type", "text", 1, "email-input", 3, "click", "readonly"], ["type", "text", "formControlName", "passport_expiry_date", "placeholder", "Expiry Date", 1, "email-input", 2, "width", "100%", 3, "click", "readonly"], ["type", "text", "required", "", "formControlName", "place_of_issue", "placeholder", "Place", 1, "email-input", 2, "width", "100%"], [2, "color", "red", "font-size", "10px", "font-weight", "700", "text-align", "center", "padding-top", "5px"], [1, "card-1", "mr-tp-16", "mr-bt-16", 2, "padding", "0px 10px"], ["lines", "none", "mode", "md", 2, "margin-right", "10px", "--padding-start", "0px", "display", "-webkit-box", "--inner-padding-end", "8px !important", 3, "click"], ["style", "color: red;\n          font-size: 10px;\n          font-weight: 700;\n          text-align: center;padding-top:5px;", 4, "ngIf"], ["formControlName", "age", "placeholder", "Enter age", "type", "number", "inputmode", "numeric", "maxlength", "2", "pattern", "[0-9]*", "class", "email-input", 3, "keyup", 4, "ngIf"], ["formControlName", "age", "placeholder", "Enter age", "type", "number", "inputmode", "numeric", "maxlength", "2", "pattern", "[0-9]*", 1, "email-input", 3, "keyup"], ["value", "", "placeholder", "Enter Card Number", "formControlName", "id_number", 1, "email-input", 3, "keyup", "id"], ["value", "", "placeholder", "Card Name", "formControlName", "name_by_id", 1, "email-input", 3, "readonly"], ["type", "text", "required", "", "formControlName", "id_card_number", "placeholder", "Enter ID number", 1, "email-input"], ["type", "text", "formControlName", "passport_issued_date", "placeholder", "Issue Date", 1, "email-input", 2, "width", "100%", 3, "click", "readonly"], ["type", "text", "label", "Place of issue", "labelPlacement", "floating", "required", "", "formControlName", "place_of_issue", "placeholder", "Place", 1, "email-input", 2, "width", "100%"], ["class", "card-1  mr-bt-16", "style", "padding: 0px 10px;", 3, "ngClass", 4, "ngIf"], [1, "Contact-details", 2, "margin-bottom", "0px", "width", "100%"], ["slot", "end", "name", "information-circle-outline", 2, "font-size", "20px", "margin-left", "5px", 3, "click"], ["class", "subheading", 4, "ngIf"], ["mode", "md", "lines", "none", "class", "email-item", 4, "ngIf"], ["mode", "md", "lines", "none", 1, "email-item"], ["inputmode", "numeric", "type", "tel", "maxlength", "6", "placeholder", "Enter pin code", 1, "email-input", 3, "ionInput", "ngModelChange", "ngModel", "ngModelOptions"], ["color", "red", "placeholder", "Enter state", 1, "email-input", 3, "ionChange", "ngModelChange", "value", "ngModel", "ngModelOptions", "interfaceOptions"], ["type", "text", "placeholder", "Enter city", 1, "email-input", 3, "keyup", "ngModelChange", "value", "ngModel", "ngModelOptions"], [1, "card-1", "mr-bt-16", 2, "padding", "0px 10px", 3, "ngClass"], [1, "Contact-details", 2, "margin", "0px"], ["slot", "start", "color", "red", "mode", "md", 2, "margin", "-11px 15px -12px -13px", 3, "ionChange", "ngModelChange", "ngModel", "ngModelOptions"], ["type", "text", "placeholder", "Enter GST number", 1, "email-input", 3, "keyup", "ngModelChange", "ngModel", "ngModelOptions"], ["lines", "none", 1, "email-item", 2, "padding-bottom", "10px"], ["type", "text", "placeholder", "Enter company name", 1, "email-input", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "ion-padding", "shyamoli-footer-row", 2, "background", "var(--iconsAndButtonsColor)", "border-top", "1px solid var(--iconsAndButtonsColor)", "border-top-left-radius", "10px", "border-top-right-radius", "10px", "padding", "10px 20px 10px 20px"], ["size", "6", 2, "display", "flex", "flex-direction", "column", "justify-content", "center"], [2, "color", "#ffffff", "font-weight", "700", "margin-bottom", "4px", "margin-top", "0px", "font-size", "16px !important"], ["id", "breakup-modal", 2, "margin-top", "4px", "color", "#000000", "cursor", "pointer", "font-size", "12px !important", "font-weight", "600 !important", "margin-bottom", "4px !important", 3, "click"], ["style", "margin-top: 4px;color: #ffffff; cursor: pointer;font-size: 12px !important;font-weight: 600 !important;margin-bottom: 4px !important;", 4, "ngIf"], ["size", "6", 2, "display", "flex", "justify-content", "center", "align-items", "center"], [1, "shyamoli-pay-btn", 2, "--background", "#fdfdfd", "--color", "#000000", "font-weight", "700", "border-radius", "8px", "width", "100%", "font-size", "16px", "width", "130px", "margin-left", "40px", 3, "click"], [2, "margin-top", "4px", "color", "#ffffff", "cursor", "pointer", "font-size", "12px !important", "font-weight", "600 !important", "margin-bottom", "4px !important"]],
  template: function PassengerDetailsPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](0, PassengerDetailsPage_ng_container_0_Template, 44, 18, "ng-container", 1)(1, PassengerDetailsPage_ng_container_1_Template, 43, 19, "ng-container", 1)(2, PassengerDetailsPage_ng_container_2_Template, 87, 26, "ng-container", 1)(3, PassengerDetailsPage_ng_container_3_Template, 50, 20, "ng-container", 1)(4, PassengerDetailsPage_ng_container_4_Template, 34, 13, "ng-container", 1);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == "cbustheme" || ctx.metaData.msiteFolder == "networktheme");
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == null || ctx.metaData.msiteFolder == "");
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == "ourbustheme");
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == "seabirdTheme");
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == "shyamolitheme");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_28__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_28__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_28__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_28__.NgStyle, _angular_forms__WEBPACK_IMPORTED_MODULE_24__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_24__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_24__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_24__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_24__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_24__.PatternValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_24__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_24__.NgForm, _ionic_angular__WEBPACK_IMPORTED_MODULE_26__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_26__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_26__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_26__.IonCheckbox, _ionic_angular__WEBPACK_IMPORTED_MODULE_26__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_26__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_26__.IonFooter, _ionic_angular__WEBPACK_IMPORTED_MODULE_26__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_26__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_26__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_26__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_26__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_26__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_26__.IonRadio, _ionic_angular__WEBPACK_IMPORTED_MODULE_26__.IonRadioGroup, _ionic_angular__WEBPACK_IMPORTED_MODULE_26__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_26__.IonSegment, _ionic_angular__WEBPACK_IMPORTED_MODULE_26__.IonSegmentButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_26__.IonSelect, _ionic_angular__WEBPACK_IMPORTED_MODULE_26__.IonSelectOption, _ionic_angular__WEBPACK_IMPORTED_MODULE_26__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_26__.IonToggle, _ionic_angular__WEBPACK_IMPORTED_MODULE_26__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_26__.BooleanValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_26__.NumericValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_26__.SelectValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_26__.TextValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_26__.IonBackButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_26__.IonMinValidator, _ionic_angular__WEBPACK_IMPORTED_MODULE_26__.IonMaxValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_24__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_24__.FormControlName],
  styles: ["@charset \"UTF-8\";\n.head[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n}\n\n.theme1-bg-content[_ngcontent-%COMP%] {\n  --background: #ffffff;\n}\n\n.bg-content[_ngcontent-%COMP%] {\n  --background: #e4e5e6;\n}\n\n.seaBirdbg-content[_ngcontent-%COMP%] {\n  --background: #F1F7FA;\n}\n.seaBirdbg-content[_ngcontent-%COMP%]   .ion-invalid[_ngcontent-%COMP%] {\n  --highlight-background: transparent !important;\n  background-color: transparent !important;\n}\n.seaBirdbg-content[_ngcontent-%COMP%]   .item-interactive.ion-valid[_ngcontent-%COMP%] {\n  --highlight-background: #a2a2a2;\n}\n\n.card-1[_ngcontent-%COMP%] {\n  padding: 16px 12px;\n  margin: 0;\n  box-shadow: rgba(0, 0, 0, 0) 0 0 0 0px, rgba(0, 0, 0, 0) 0 0 0 0, rgba(0, 0, 0, 0) 0 0 0 0;\n  border-radius: 0;\n}\n\n.seaBird-card-1[_ngcontent-%COMP%] {\n  padding: 16px 12px;\n  margin: 0;\n  box-shadow: rgba(0, 0, 0, 0) 0 0 0 0px, rgba(0, 0, 0, 0) 0 0 0 0, rgba(0, 0, 0, 0) 0 0 0 0;\n  border-radius: 0;\n}\n\n.cbus_card-1[_ngcontent-%COMP%] {\n  padding: 16px 22px;\n  margin: 0;\n  box-shadow: rgba(0, 0, 0, 0) 0 0 0 0px, rgba(0, 0, 0, 0) 0 0 0 0, rgba(0, 0, 0, 0) 0 0 0 0;\n  border-radius: 0;\n  background: #fff;\n}\n\n.txt-c1[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: bold;\n  text-align: right;\n  color: #3e3e52;\n}\n\n.pos[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 12px;\n}\n\n.cbus_pos[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 19px;\n  align-items: center;\n}\n\n.mr-md[_ngcontent-%COMP%] {\n  margin: 0 5px;\n}\n\n.mr-tp-2[_ngcontent-%COMP%] {\n  margin-top: 2px;\n}\n\n.mr-tp-16[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n\n.Contact-details[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: bold;\n  color: var(--sectionHeaderTextColor);\n  margin-bottom: 6px;\n}\n\n.Contact-details-title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: bold;\n  color: var(--primaryText);\n  margin-bottom: 6px;\n}\n\n.seatscolor[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: var(--sectionHeaderTextColor);\n}\n\n.addexisting[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 12px;\n  margin-top: 3px;\n  color: var(--sectionHeaderTextColor);\n}\n\n.hd-txt-2[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #7e7e8c;\n}\n\n.img-icn[_ngcontent-%COMP%] {\n  height: 32px;\n  width: 32px;\n}\n\n.routes-footer[_ngcontent-%COMP%] {\n  width: 100%;\n  display: inline-block;\n  position: fixed;\n  bottom: 0px;\n  margin: 0px;\n  z-index: 99999;\n}\n\n.routes-footer[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  font-weight: bolder;\n  font-size: 12px;\n  align-items: center;\n  justify-content: center;\n  height: 45px;\n}\n\n.routes-footer[_ngcontent-%COMP%]   .button1[_ngcontent-%COMP%] {\n  --background:var(--iconsAndButtonsColor);\n}\n\n.routes-footer[_ngcontent-%COMP%]   .button2[_ngcontent-%COMP%] {\n  --background:#3e3e52;\n}\n\n.pay-txt-1[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: bolder;\n}\n\n.pay-txt-2[_ngcontent-%COMP%] {\n  font-size: 8px;\n}\n\n.mr-bt-34[_ngcontent-%COMP%] {\n  margin-bottom: 34px;\n}\n\n.mr-bt-16[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n  margin-top: 16px;\n}\n\n.mr-15[_ngcontent-%COMP%] {\n  margin: 40px;\n}\n\n.chk-pos[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 33%;\n}\n\n.txt-lbl[_ngcontent-%COMP%] {\n  font-family: NotoSans;\n  font-size: 14px;\n  font-weight: normal;\n  color: #3e3e52 !important;\n}\n\n.txt-input[_ngcontent-%COMP%] {\n  font-family: NotoSans;\n  font-size: 16px;\n  font-weight: normal;\n}\n\n.seg-btn[_ngcontent-%COMP%] {\n  width: 196px;\n  margin: 16px 0 0;\n  border-radius: 4px;\n  background-color: #eaeaea;\n}\n.seg-btn[_ngcontent-%COMP%]   ion-segment[_ngcontent-%COMP%] {\n  height: 24px;\n  border: 1px solid #eaeaea;\n  border-radius: 4px;\n}\n.seg-btn[_ngcontent-%COMP%]   ion-segment-button[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: bold;\n  color: #9b9b9b;\n  min-height: 0px;\n  text-transform: capitalize;\n}\n.seg-btn[_ngcontent-%COMP%]   ion-segment-button.segment-button-checked[_ngcontent-%COMP%] {\n  color: var(--primaryText);\n  background-color: var(--iconsAndButtonsColor);\n  font-weight: bolder;\n}\n\nion-input[_ngcontent-%COMP%] {\n  font-family: NotoSans;\n}\n\n.businessTravelclick[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n  margin-top: 16px;\n}\n\n.bottom[_ngcontent-%COMP%] {\n  position: fixed;\n  display: flex;\n  width: 100vw;\n  height: 54px;\n  z-index: 10;\n  bottom: 0;\n  background: #ffffff;\n  font-size: 13px;\n  transition: all linear 0.24s;\n  flex-direction: row;\n  box-shadow: 5px 10px 10px 10px #888888;\n}\n.bottom[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 3px;\n}\n.bottom[_ngcontent-%COMP%]   .seats[_ngcontent-%COMP%] {\n  width: 65%;\n  display: flex;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n.bottom[_ngcontent-%COMP%]   .seats[_ngcontent-%COMP%]   .seat-lbl[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: bold;\n  display: block;\n  color: var(--iconsAndButtonsColor);\n  padding-left: 10px;\n}\n.bottom[_ngcontent-%COMP%]   .seats[_ngcontent-%COMP%]   .seat-val[_ngcontent-%COMP%] {\n  margin: 0 0 0 10px;\n  font-size: 11px;\n  font-weight: bolder;\n  color: #4a4a4a;\n}\n.bottom[_ngcontent-%COMP%]   .seabirdExl[_ngcontent-%COMP%] {\n  margin: 0 0 0 12px;\n  font-size: 13px;\n  font-weight: bolder;\n  color: #4a4a4a;\n}\n.bottom[_ngcontent-%COMP%]   .pay[_ngcontent-%COMP%] {\n  width: 35%;\n  height: 100%;\n  border: 1px solid var(--iconsAndButtonsColor);\n  background-color: var(--iconsAndButtonsColor);\n  font-size: 13px;\n  font-weight: bolder;\n  color: var(--viewBgColor);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.seabirdAmount[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: bold;\n  display: block;\n  color: var(--bottomBarColor);\n  padding-left: 10px;\n}\n\n.seabirdPay[_ngcontent-%COMP%] {\n  width: 97%;\n  height: 7%;\n  border: 1px solid var(--iconsAndButtonsColor);\n  background-color: var(--iconsAndButtonsColor);\n  font-size: 13px;\n  font-weight: bolder;\n  color: var(--primaryText);\n  border-radius: 26px;\n  margin-left: 7px;\n  position: fixed;\n  bottom: 10px;\n}\n\n.gender[_ngcontent-%COMP%] {\n  color: red;\n  opacity: 1 !important;\n}\n\n.gstDiv[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.whole[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 50;\n  width: 100%;\n  height: 100%;\n  background: rgba(255, 255, 255, 0.6);\n}\n\n.legend-box[_ngcontent-%COMP%] {\n  border-radius: 2px;\n  box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.2), 0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 24px 38px 3px rgba(0, 0, 0, 0.14);\n  background-color: #ffffff !important;\n  opacity: 1 !important;\n  padding: 18px 16px;\n  width: 280px;\n  height: auto;\n}\n\n.gstMsg[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #4a4a4a;\n  font-weight: 400;\n}\n\n.themeone-head[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n  font-size: 18px;\n  font-weight: 700;\n  line-height: 26px;\n  letter-spacing: 0em;\n  text-align: center;\n}\n\n.themeone-bg-cl[_ngcontent-%COMP%] {\n  color: #ffffff !important;\n  --background: white;\n  -webkit-text-fill-color: #333333 !important;\n}\n\n.themeone-bg-cl[_ngcontent-%COMP%] {\n  color: var(--primaryText) !important;\n  --background: var(--homeBgColor) !important;\n  -webkit-text-fill-color: var(--primaryText) !important;\n}\n\n.themeone-hd-txt-2[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #5F5F5F;\n}\n\n.themeone-seatcolor[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #333333;\n  margin: 1px 0px 0px 7px;\n}\n\n.item-native[_ngcontent-%COMP%] {\n  border: 0px;\n}\n\n.themeone-ion-item[_ngcontent-%COMP%] {\n  --inner-border-width: 0;\n  border-bottom: 1px solid #F1F2F4;\n  border-radius: 0px;\n  --border-width: 0px;\n  margin: 5px 0px 5px 0px;\n  color: #333333;\n  --padding-start: 0px;\n  --background: #fff;\n}\n\n.select-icon[_ngcontent-%COMP%] {\n  opacity: 0.8 !important;\n}\n\n.themeone-check-item[_ngcontent-%COMP%] {\n  margin: 10px 0px;\n  --inner-border-width: 0;\n  --padding-start: 0px;\n}\n\n.themeone-checkbox[_ngcontent-%COMP%] {\n  --border-radius: 0;\n  --background-checked: #191966;\n  height: 20px;\n  width: 20px;\n  --border-color: #2C3E50;\n  margin: 0px 16px 0px 0px;\n  --border-color-checked:#191966;\n  --checkbox-background-checked: #191966 !important;\n}\n\n.themeone-checkbox_2[_ngcontent-%COMP%] {\n  --border-radius: 0;\n  --background-checked: var(--bottomBarColor) !important;\n  height: 20px;\n  width: 20px;\n  --border-color: var(--bottomBarColor);\n  margin: 0px 16px 0px 0px;\n  --border-color-checked: var(--bottomBarColor) !important;\n  --checkbox-background-checked: var(--bottomBarColor) !important;\n}\n\n.themeone-passenger-txt[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #333333;\n  font-weight: 700;\n}\n\n.themeone-bottom[_ngcontent-%COMP%] {\n  position: fixed;\n  display: flex;\n  width: 100%;\n  height: 95px;\n  z-index: 10;\n  bottom: 0;\n  background: #191966;\n  font-size: 13px;\n  transition: all linear 0.24s;\n  flex-direction: row;\n  border-top-left-radius: 20px;\n  border-top-right-radius: 20px;\n}\n\n.themeone-bottom_2[_ngcontent-%COMP%] {\n  position: fixed;\n  display: flex;\n  width: 100%;\n  height: 95px;\n  z-index: 10;\n  bottom: 0;\n  background: var(--bottomBarColor);\n  font-size: 13px;\n  transition: all linear 0.24s;\n  flex-direction: row;\n  border-top-left-radius: 20px;\n  border-top-right-radius: 20px;\n}\n\n.themeone-totalvalue[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #FFFFFF;\n  font-family: \"NotoSans\";\n  font-weight: 700;\n}\n\n.cbus-select-pickup-btn[_ngcontent-%COMP%] {\n  --background: var(--iconsAndButtonsColor) !important;\n  color: #191966;\n  font-family: \"NotoSans\";\n  font-weight: bold;\n  font-size: 16px;\n  height: 38px;\n}\n\n.themeone-select-pickup-btn[_ngcontent-%COMP%] {\n  --background: var(--iconsAndButtonsColor) !important;\n  --background-activated: var(--iconsAndButtonsColor);\n  color: var(--primaryText) !important;\n  font-family: \"NotoSans\";\n  font-weight: bold;\n  font-size: 16px;\n  height: 38px;\n}\n\n.themeone-viewbreakup[_ngcontent-%COMP%] {\n  color: #FFBD16;\n  font-size: 12px;\n  font-family: \"NotoSans\";\n  font-weight: bold;\n}\n\n.default-theme-viewBreakup[_ngcontent-%COMP%] {\n  color: var(--iconsAndButtonsColor);\n  font-size: 12px;\n  font-family: \"NotoSans\";\n  font-weight: bolder;\n  margin-left: 5px;\n}\n\n.themeonetoggle[_ngcontent-%COMP%] {\n  --background: #ffffff;\n  --background-checked: #ffffff;\n  --border-radius: 16px;\n  --handle-background: grey;\n  --handle-background-checked: #191966;\n  --handle-border-radius: 25.5px;\n  --handle-box-shadow: 0 3px 12px rgba(0, 0, 0, 0.16), 0 3px 1px rgba(0, 0, 0, 0.1);\n  --handle-height: 20px;\n  --handle-max-height: calc(100% - (var(--handle-spacing) * 2));\n  --handle-width: 18px;\n  --handle-spacing: 7px;\n  --handle-transition: transform 300ms, width 120ms ease-in-out 80ms, left 110ms ease-in-out 80ms, right 110ms ease-in-out 80ms;\n  width: 48px;\n  height: 24px;\n  contain: strict;\n  overflow: hidden;\n  border: 2px solid grey;\n  border-radius: 15px;\n  --track-background-checked:\t#ffffff: ;\n}\n\n.themeone-cbus[_ngcontent-%COMP%]   .toggle-checked[_ngcontent-%COMP%] {\n  border: 2px solid #191966 !important;\n}\n\nion-input[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\nion-select[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\n.shyamolitheme-bg-content[_ngcontent-%COMP%]   ion-select[_ngcontent-%COMP%]::part(placeholder) {\n  opacity: 0.5;\n  min-width: 60px;\n}\n.shyamolitheme-bg-content[_ngcontent-%COMP%]   ion-select[_ngcontent-%COMP%]::part(text) {\n  min-width: 60px;\n}\n\n.ourbustheme[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  color: var(--placeholderColor);\n}\n.ourbustheme[_ngcontent-%COMP%]   .ourbus_ori_dest[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  color: #747474;\n}\n.ourbustheme[_ngcontent-%COMP%]   .labelState[_ngcontent-%COMP%] {\n  background-color: #ffffff !important;\n  opacity: 1.6 !important;\n}\n.ourbustheme[_ngcontent-%COMP%]   .time-info[_ngcontent-%COMP%] {\n  padding-top: 5px;\n  display: flex;\n  justify-content: space-between;\n}\n.ourbustheme[_ngcontent-%COMP%]   .time-text[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  color: #2D2D2D;\n}\n.ourbustheme[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 300;\n  color: #747474;\n  margin: 0px;\n}\n.ourbustheme[_ngcontent-%COMP%]   .duration[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 300;\n  color: #747474;\n}\n.ourbustheme[_ngcontent-%COMP%]   .ourbus_duration_time[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 0px;\n  font-size: 12px;\n  border-bottom: 1px dashed #9D9D9D;\n  padding: 4px;\n}\n.ourbustheme[_ngcontent-%COMP%]   .ourbus_pass_head[_ngcontent-%COMP%] {\n  margin-top: auto;\n  margin-bottom: auto;\n  font-size: 16px;\n  font-weight: 700;\n  color: var(--iconsAndButtonsColor);\n}\n.ourbustheme[_ngcontent-%COMP%]   .ourbus_passList[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  color: #747474;\n}\n.ourbustheme[_ngcontent-%COMP%]   .ourbus_segment[_ngcontent-%COMP%] {\n  height: 44px;\n}\n.ourbustheme[_ngcontent-%COMP%]   .ourbus_gender[_ngcontent-%COMP%] {\n  color: grey;\n}\n.ourbustheme[_ngcontent-%COMP%]   .segment-button-disabled[_ngcontent-%COMP%] {\n  opacity: 0.9 !important;\n}\n.ourbustheme[_ngcontent-%COMP%]   .segment-button-checked[_ngcontent-%COMP%] {\n  background: var(--iconsAndButtonsColor) !important;\n  --indicator-color-checked: var(--iconsAndButtonsColor) !important;\n  color: var(--primaryText);\n  font-size: 14px;\n  font-weight: 500;\n}\n.ourbustheme[_ngcontent-%COMP%]   .ourbusCheckbux[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  --background-checked:var(--sectionHeaderTextColor);\n  --border-color-checked:var(--sectionHeaderTextColor);\n}\n.ourbustheme[_ngcontent-%COMP%]   .ourbusWhtsappText[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 300;\n  color: #747474;\n}\n.ourbustheme[_ngcontent-%COMP%]   .ourbus_order_details[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 500;\n  color: #2d2d2d;\n  margin-left: 4px;\n}\n.ourbustheme[_ngcontent-%COMP%]   .ourbus_rowBg[_ngcontent-%COMP%] {\n  background-color: #EAF2FF;\n  padding: 8px;\n  display: flex;\n  align-items: center;\n}\n.ourbustheme[_ngcontent-%COMP%]   .ourbus_farebreakup_curr[_ngcontent-%COMP%] {\n  color: #2D2D2D;\n  font-size: 14px;\n  font-weight: 300;\n}\n.ourbustheme[_ngcontent-%COMP%]   .ourbus_amount_payble[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 300;\n  color: #2d2d2d;\n}\n.ourbustheme[_ngcontent-%COMP%]   .ourbus_amount_paybl_amount[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 500;\n  color: #2d2d2d;\n}\n.ourbustheme[_ngcontent-%COMP%]   .oubus_checkbox[_ngcontent-%COMP%] {\n  --background-checked:var(--sectionHeaderTextColor);\n  --border-color-checked:var(--sectionHeaderTextColor);\n}\n.ourbustheme[_ngcontent-%COMP%]   .ourbus_toggle[_ngcontent-%COMP%] {\n  --background-checked:var(--sectionHeaderTextColor);\n  --border-color-checked:var(--sectionHeaderTextColor);\n  --track-background-checked:var(--sectionHeaderTextColor);\n  padding-right: 0px;\n}\n.ourbustheme[_ngcontent-%COMP%]   .ourbus_item[_ngcontent-%COMP%] {\n  --padding-start: 5px;\n}\n.ourbustheme[_ngcontent-%COMP%]   .gst_card[_ngcontent-%COMP%] {\n  padding: 0px 5px;\n}\n.ourbustheme[_ngcontent-%COMP%]   .ourbus_info_icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  margin-left: 5px;\n  color: #2D2D2D;\n  margin-top: 2px;\n}\n\n.SeaBird_pass[_ngcontent-%COMP%] {\n  color: var(--homaPageHeadingTextColor);\n  padding: 0;\n  margin: 0;\n  font-size: 16px;\n  font-weight: 700;\n  line-height: 26px;\n  letter-spacing: 0em;\n}\n\n.SeaBird_sub[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: var(--homaPageHeadingTextColor);\n  padding: 0;\n  margin: 0;\n}\n\n.SeaBird_check[_ngcontent-%COMP%] {\n  --ion-color-primary: #3c3e52;\n}\n\nion-select.SeaBird_code[_ngcontent-%COMP%]::part(text) {\n  min-width: unset !important;\n}\n\n.styled-hr[_ngcontent-%COMP%] {\n  border: none;\n  background-color: #a2a2a2;\n  margin-left: 24px;\n}\n\n.ourbus-checkbox[_ngcontent-%COMP%] {\n  margin: -11px 15px -12px -13px;\n  --border-radius: 0px;\n  --size: 22px;\n  --checkbox-background-checked:var(--border-color-checked) !important;\n}\n\n.custom-select[_ngcontent-%COMP%]   ion-icon.select-icon[_ngcontent-%COMP%] {\n  display: none !important; \n\n}\n\n.custom-select[_ngcontent-%COMP%]::part(icon) {\n  display: none !important; \n\n}\n\nion-select[_ngcontent-%COMP%]::part(icon), \nion-select[_ngcontent-%COMP%]::deep(.select-icon) {\n  display: none !important; \n\n}\n\nion-select[_ngcontent-%COMP%]   .select-icon[aria-hidden=false][_ngcontent-%COMP%] {\n  display: none !important;\n}\n\nion-select[_ngcontent-%COMP%]   .select-icon[_ngcontent-%COMP%] {\n  display: none !important; \n\n}\n\n.selectedFlag[_ngcontent-%COMP%] {\n  margin: 12px 0px 0px 0px !important;\n  max-height: max-content;\n}\n\n.selectedFlag_New[_ngcontent-%COMP%] {\n  margin: 12px 0px 0px 0px !important;\n  padding-top: 6px !important;\n  max-height: max-content;\n  margin: 11px 0px 0px 1px !important;\n  border: 1px solid #c2c2c2;\n  border-radius: 4px;\n}\n\n.selectIcon[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n  top: 50%;\n  transform: translateY(-50%);\n  pointer-events: none;\n}\n\n.custom-popover[_ngcontent-%COMP%] {\n  --width: 300px !important; \n\n}\n\n.ourbus_custom_input[_ngcontent-%COMP%] {\n  --padding-start: 0px;\n  --inner-padding-end: 0px;\n}\n\nion-select.force-left-padding[_ngcontent-%COMP%]::part(text) {\n  padding-left: 20px !important;\n}\n\n.card-type-label[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  margin-right: 5px;\n}\n\nion-toggle.seabird-toggle[_ngcontent-%COMP%] {\n  --handle-background: white;\n  --handle-background-checked: var(--sectionHeaderTextColor);\n  --track-background: var(--ion-color-light-shade);\n  --track-background-checked: var(--ion-color-light-shade);\n}\n\nion-toggle.default-toggle[_ngcontent-%COMP%] {\n  --handle-background: white;\n  --handle-background-checked: var(--primary);\n  --track-background: var(--ion-color-light-shade);\n  --track-background-checked: var(--ion-color-light-shade);\n}\n\n.arrowIconStyle[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 5px;\n  top: 50%;\n  transform: translateY(-50%);\n  pointer-events: none;\n  z-index: 1;\n}\n\n.concession-select-item[_ngcontent-%COMP%] {\n  border: 1px solid #bab2b2;\n  border-radius: 8px;\n  --background: white;\n  --padding-start: 12px;\n  --padding-end: 12px;\n  margin: 8px 0;\n}\n.concession-select-item.item-has-focus[_ngcontent-%COMP%] {\n  border-color: var(--ion-color-primary);\n}\n\n.shyamolitheme-bg-content[_ngcontent-%COMP%] {\n  \n\n}\n.shyamolitheme-bg-content[_ngcontent-%COMP%]   .card-1[_ngcontent-%COMP%] {\n  border: 1px solid #D9D9D9;\n  margin: 12px;\n  border-radius: 5px;\n  box-shadow: none;\n  padding: 12px;\n}\n.shyamolitheme-bg-content[_ngcontent-%COMP%]   .Contact-details[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: bold;\n  color: var(--sectionHeaderTextColor);\n  margin-bottom: 3px;\n}\n.shyamolitheme-bg-content[_ngcontent-%COMP%]   .hd-txt-2[_ngcontent-%COMP%] {\n  color: #969696;\n  font-size: 13px;\n  margin: 2px 0px 0px 0px;\n}\n.shyamolitheme-bg-content[_ngcontent-%COMP%]   .mobile-item[_ngcontent-%COMP%] {\n  --inner-padding-end: 0;\n  --inner-padding-start: 0;\n  --padding-start: 0;\n  --background: transparent;\n  margin-bottom: 10px;\n}\n.shyamolitheme-bg-content[_ngcontent-%COMP%]   .subheading[_ngcontent-%COMP%] {\n  margin: 10px 0px 0px 0px;\n  color: #626262;\n  font-size: 16px;\n}\n.shyamolitheme-bg-content[_ngcontent-%COMP%]   .mobile-input-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-top: 3px;\n  width: 100%;\n}\n.shyamolitheme-bg-content[_ngcontent-%COMP%]   .country-code-box[_ngcontent-%COMP%] {\n  background: #f1f1f1;\n  border-radius: 8px;\n  padding: 15px 12px;\n  font-weight: 500;\n  color: #333;\n  font-size: 14px;\n  min-width: 60px;\n  text-align: center;\n}\n.shyamolitheme-bg-content[_ngcontent-%COMP%]   .country-code-select[_ngcontent-%COMP%] {\n  background: #f1f1f1;\n  border-radius: 8px;\n  font-size: 14px;\n  height: 42px;\n  min-width: 60px;\n}\n.shyamolitheme-bg-content[_ngcontent-%COMP%]   .mobile-input[_ngcontent-%COMP%] {\n  border: 1px solid #ddd;\n  border-radius: 8px;\n  height: 48px; \n\n  font-size: 15px;\n  color: #333;\n  background: #fff;\n  padding-left: 14px; \n\n  display: flex;\n  align-items: center;\n  margin-left: 5px;\n}\n.shyamolitheme-bg-content[_ngcontent-%COMP%]     ion-input.mobile-input .native-input {\n  height: auto;\n  margin-left: 15px;\n}\n.shyamolitheme-bg-content[_ngcontent-%COMP%]   .concession-select-item[_ngcontent-%COMP%] {\n  border: 1px solid #ddd;\n}\n.shyamolitheme-bg-content[_ngcontent-%COMP%]   .intl-warning[_ngcontent-%COMP%] {\n  font-size: 13px;\n  margin: 8px 0 12px 2px;\n  color: var(--ion-color-primary);\n}\n.shyamolitheme-bg-content[_ngcontent-%COMP%]   .email-item[_ngcontent-%COMP%] {\n  --background: transparent;\n  --inner-padding-start: 0;\n  --inner-padding-end: 0;\n  --padding-start: 0;\n}\n.shyamolitheme-bg-content[_ngcontent-%COMP%]   .email-input[_ngcontent-%COMP%] {\n  border: 1px solid #ddd;\n  border-radius: 8px;\n  height: 48px; \n\n  font-size: 15px;\n  color: #333;\n  background: #fff;\n  margin-top: 4px;\n  padding-left: 14px; \n\n  display: flex;\n  align-items: center;\n}\n.shyamolitheme-bg-content[_ngcontent-%COMP%]     ion-input.email-input .native-input {\n  height: auto;\n  margin-left: 15px;\n}\n.shyamolitheme-bg-content[_ngcontent-%COMP%]   .whatsapp-row[_ngcontent-%COMP%] {\n  border: 1px solid #ECFDF5;\n  padding: 10px;\n  margin: 15px 0px 10px 0px;\n  border-radius: 5px;\n  background-color: #ECFDF5;\n}\n.shyamolitheme-bg-content[_ngcontent-%COMP%]   .whatsapp-row[_ngcontent-%COMP%]   .img-icn[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n}\n.shyamolitheme-bg-content[_ngcontent-%COMP%]   .default-toggle[_ngcontent-%COMP%] {\n  --track-background-checked: #3BAD69;\n}\n.shyamolitheme-bg-content[_ngcontent-%COMP%]   .shyamoli-footer-row[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 16px;\n  font-weight: 700;\n  color: #333333;\n  padding: 12px 16px;\n}\n.shyamolitheme-bg-content[_ngcontent-%COMP%]   .shyamoli-footer-row[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #191966;\n  font-size: 12px;\n  font-weight: 600;\n}\n.shyamolitheme-bg-content[_ngcontent-%COMP%]   .shyamoli-footer-row[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  --color: #191966;\n  --background: #FFBD16;\n  font-size: 16px;\n  width: 100%;\n  font-weight: 600;\n}\n.shyamolitheme-bg-content[_ngcontent-%COMP%]   .shyamoli-pos[_ngcontent-%COMP%] {\n  background: #fff7e6;\n  padding: 6px 12px;\n  border-radius: 20px;\n  display: inline-flex;\n  align-items: center;\n  float: right; \n\n  margin-top: -5px; \n\n}\n.shyamolitheme-bg-content[_ngcontent-%COMP%]   .shyamoli-pos[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  size: 10px;\n}\n.shyamolitheme-bg-content[_ngcontent-%COMP%]   .shyamoli-pos[_ngcontent-%COMP%]   .seatscolor[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-top: 3px;\n}\n.shyamolitheme-bg-content[_ngcontent-%COMP%]   ion-select.countryCode[_ngcontent-%COMP%]::part(text) {\n  margin-left: 14px !important;\n  margin-top: 14px !important;\n}\n.shyamolitheme-bg-content[_ngcontent-%COMP%]   .traveller_details[_ngcontent-%COMP%] {\n  margin-left: -10px;\n}\n.shyamolitheme-bg-content[_ngcontent-%COMP%]   .traveller_type[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n.shyamolitheme-bg-content[_ngcontent-%COMP%]   .transparent-item[_ngcontent-%COMP%] {\n  --background: transparent !important;\n  --background-focused: transparent !important;\n  --background-activated: transparent !important;\n  background: transparent !important;\n  box-shadow: none !important;\n  --min-height: 0px;\n  margin: 20px 30px;\n  \n\n  \n\n  border: none !important;\n}\n.shyamolitheme-bg-content[_ngcontent-%COMP%]   .transparent-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%], \n.shyamolitheme-bg-content[_ngcontent-%COMP%]   .transparent-item[_ngcontent-%COMP%]   .item-inner[_ngcontent-%COMP%], \n.shyamolitheme-bg-content[_ngcontent-%COMP%]   .transparent-item[_ngcontent-%COMP%]   .item-native[_ngcontent-%COMP%] {\n  background: transparent !important;\n}\n.shyamolitheme-bg-content   [_nghost-%COMP%]     ion-item.transparent-item, \n.shyamolitheme-bg-content   [_nghost-%COMP%]     ion-item.transparent-item .item-inner, \n.shyamolitheme-bg-content   [_nghost-%COMP%]     ion-item.transparent-item .item-native, \n.shyamolitheme-bg-content   [_nghost-%COMP%]     ion-item.transparent-item::after, \n.shyamolitheme-bg-content   [_nghost-%COMP%]     ion-item.transparent-item::part(item-inner), \n.shyamolitheme-bg-content   [_nghost-%COMP%]     ion-item.transparent-item::part(native), \n.shyamolitheme-bg-content   [_nghost-%COMP%]     ion-item.transparent-item::part(start), \n.shyamolitheme-bg-content   [_nghost-%COMP%]     ion-item.transparent-item::part(end) {\n  border: none !important;\n  border-bottom: none !important;\n  box-shadow: none !important;\n  --inner-border-width: 0 !important;\n  --border-width: 0 !important;\n  --border-style: none !important;\n  background: transparent !important;\n}\n.shyamolitheme-bg-content[_ngcontent-%COMP%]   ion-select.countryCode[_ngcontent-%COMP%]::part(icon) {\n  display: unset !important;\n  position: absolute;\n  top: 50%;\n  bottom: 50%;\n  right: 10%;\n  transform: none !important;\n  transition: none !important;\n}\n\nion-select.shyamoli-select[_ngcontent-%COMP%]::part(icon) {\n  display: unset;\n  position: absolute;\n  right: 10px;\n}\n\n.cbus-country-code-icon[_ngcontent-%COMP%]   ion-select[_ngcontent-%COMP%]::part(icon) {\n  display: unset !important;\n  position: absolute;\n  right: 10%;\n  transform: none !important;\n  transition: none !important;\n}\n\n.cbus-cardtype-icon[_ngcontent-%COMP%]   ion-select[_ngcontent-%COMP%]::part(icon) {\n  display: unset !important;\n  position: absolute;\n  transform: none !important;\n  transition: none !important;\n}\n\n.radio-gender-default[_ngcontent-%COMP%] {\n  -inner-padding-start: 0px;\n  --inner-padding-end: 0px;\n}"]
});

/***/ }),

/***/ 20167:
/*!***************************************************************!*\
  !*** ./src/app/passenger-details/passenger-details.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PassengerDetailsPageModule: () => (/* binding */ PassengerDetailsPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 32881);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 74474);
/* harmony import */ var _passenger_details_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./passenger-details-routing.module */ 97918);
/* harmony import */ var _passenger_details_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./passenger-details.page */ 13440);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 17705);
var _PassengerDetailsPageModule;






class PassengerDetailsPageModule {}
_PassengerDetailsPageModule = PassengerDetailsPageModule;
_PassengerDetailsPageModule.ɵfac = function PassengerDetailsPageModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PassengerDetailsPageModule)();
};
_PassengerDetailsPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: _PassengerDetailsPageModule
});
_PassengerDetailsPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _passenger_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.PassengerDetailsPageRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](PassengerDetailsPageModule, {
    declarations: [_passenger_details_page__WEBPACK_IMPORTED_MODULE_1__.PassengerDetailsPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _passenger_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.PassengerDetailsPageRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule]
  });
})();

/***/ }),

/***/ 70152:
/*!***********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/debounceTime.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   debounceTime: () => (/* binding */ debounceTime)
/* harmony export */ });
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scheduler/async */ 43236);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/lift */ 39974);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OperatorSubscriber */ 54360);



function debounceTime(dueTime, scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__.asyncScheduler) {
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_1__.operate)((source, subscriber) => {
    let activeTask = null;
    let lastValue = null;
    let lastTime = null;
    const emit = () => {
      if (activeTask) {
        activeTask.unsubscribe();
        activeTask = null;
        const value = lastValue;
        lastValue = null;
        subscriber.next(value);
      }
    };
    function emitWhenIdle() {
      const targetTime = lastTime + dueTime;
      const now = scheduler.now();
      if (now < targetTime) {
        activeTask = this.schedule(undefined, targetTime - now);
        subscriber.add(activeTask);
        return;
      }
      emit();
    }
    source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__.createOperatorSubscriber)(subscriber, value => {
      lastValue = value;
      lastTime = scheduler.now();
      if (!activeTask) {
        activeTask = scheduler.schedule(emitWhenIdle, dueTime);
        subscriber.add(activeTask);
      }
    }, () => {
      emit();
      subscriber.complete();
    }, undefined, () => {
      lastValue = activeTask = null;
    }));
  });
}
//# sourceMappingURL=debounceTime.js.map

/***/ }),

/***/ 89442:
/*!****************************************************************************!*\
  !*** ./src/app/add-existing-passenger/add-existing-passenger.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddExistingPassengerComponent: () => (/* binding */ AddExistingPassengerComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 32881);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/loader-service */ 65894);
/* harmony import */ var _services_util_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/util-provider */ 81101);
/* harmony import */ var _services_theme_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/theme-service */ 99692);
/* harmony import */ var _services_exception__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/exception */ 91502);
/* harmony import */ var _services_common_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/common-storage */ 96970);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/common-service */ 6036);
/* harmony import */ var _services_api_factory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/api-factory */ 59348);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 74474);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 70600);
/* harmony import */ var _services_date_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/date-service */ 18149);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 83087);
/* harmony import */ var _services_global_data_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/global-data.service */ 7516);
var _AddExistingPassengerComponent;














function AddExistingPassengerComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " No Passengers Details Present! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function AddExistingPassengerComponent_ion_list_10_ion_item_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-item", 12)(1, "ion-checkbox", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AddExistingPassengerComponent_ion_list_10_ion_item_1_Template_ion_checkbox_click_1_listener() {
      const i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.selectPassenger(i_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayListener"]("ngModelChange", function AddExistingPassengerComponent_ion_list_10_ion_item_1_Template_ion_checkbox_ngModelChange_1_listener($event) {
      const i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayBindingSet"](i_r2.checked, $event) || (i_r2.checked = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "ion-label")(3, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const i_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayProperty"]("ngModel", i_r2.checked);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"]("", i_r2.title, " .", i_r2.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](i_r2.email);
  }
}
function AddExistingPassengerComponent_ion_list_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, AddExistingPassengerComponent_ion_list_10_ion_item_1_Template, 7, 4, "ion-item", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r2.travellersList);
  }
}
function AddExistingPassengerComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 16)(1, "ion-button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AddExistingPassengerComponent_div_11_Template_ion_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.addTraveller());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "Add");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
}
class AddExistingPassengerComponent {
  constructor(loader, util, theme, ex, commonStorage, commonService, apiFactory, modalController, dateService, navCtrl, route, router, globalData, modalCtrl, navParams) {
    this.loader = loader;
    this.util = util;
    this.theme = theme;
    this.ex = ex;
    this.commonStorage = commonStorage;
    this.commonService = commonService;
    this.apiFactory = apiFactory;
    this.modalController = modalController;
    this.dateService = dateService;
    this.navCtrl = navCtrl;
    this.route = route;
    this.router = router;
    this.globalData = globalData;
    this.modalCtrl = modalCtrl;
    this.navParams = navParams;
    this.selectedPassengers = [];
    // this.commonService.gTrack('addexistingpassenger');
    this.travellerlength = navParams.get('travellerLength');
    this.selectedPassengers = navParams.get('passengerList');
    this.getPassengerList();
    // this.commonService.gTrack('addExistingPassenger','“Add existing customer” is clicked')
  }
  ngOnInit() {}
  getPassengerList() {
    this.apiFactory.travellersList().subscribe(result => {
      this.loader.hideLoadingDefault();
      if (typeof result.code == "undefined") {
        this.travellersList = result.travellers_list;
        this.travellersList.forEach(value => {
          value['checked'] = false;
        });
        this.selectedPassengers.forEach(s => {
          if (s.checked) {
            this.travellersList.forEach(t => {
              if (s.id == t.id) t['checked'] = s.checked;
            });
          }
        });
      } else {
        setTimeout(() => {
          this.util.showAlert('', result.message);
        });
      }
    }, err => {
      this.loader.hideLoadingDefault();
      if (!this.util.isConnected()) {} else {}
    });
  }
  selectPassenger(data) {
    if (data.checked != true) {
      this.selectedPassengers.push(data);
    } else {
      let newArray = this.selectedPassengers.filter(function (el) {
        return el.id !== data.id;
      });
      this.selectedPassengers = newArray;
    }
  }
  addTraveller() {
    if (this.selectedPassengers.length > this.travellerlength) {
      this.util.showAlert('', "you can't select more than " + this.travellerlength + " passenger");
      return false;
    } else {
      this.dismiss();
      return false;
    }
  }
  dismiss() {
    this.modalCtrl.dismiss(this.selectedPassengers);
  }
}
_AddExistingPassengerComponent = AddExistingPassengerComponent;
_AddExistingPassengerComponent.ɵfac = function AddExistingPassengerComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AddExistingPassengerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_loader_service__WEBPACK_IMPORTED_MODULE_0__.LoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_util_provider__WEBPACK_IMPORTED_MODULE_1__.UtilProvider), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_theme_service__WEBPACK_IMPORTED_MODULE_2__.ThemeService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_exception__WEBPACK_IMPORTED_MODULE_3__.ExceptionProvider), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_common_storage__WEBPACK_IMPORTED_MODULE_4__.CommonStorage), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_5__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_api_factory__WEBPACK_IMPORTED_MODULE_6__.ApiFactory), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_date_service__WEBPACK_IMPORTED_MODULE_7__.DateService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_11__.NavController), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_global_data_service__WEBPACK_IMPORTED_MODULE_8__.GlobalDataService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_11__.NavParams));
};
_AddExistingPassengerComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
  type: _AddExistingPassengerComponent,
  selectors: [["app-add-existing-passenger"]],
  decls: 12,
  vars: 3,
  consts: [["mode", "md", 1, "bg-cl"], ["slot", "end"], ["mode", "md", 3, "click"], ["name", "close", "color", "default"], [1, "head"], [1, "bg-content"], [1, "center-div"], ["style", "font-weight:bolder;margin-top: 16px", 4, "ngIf"], [4, "ngIf"], ["padding", "", 4, "ngIf"], [2, "font-weight", "bolder", "margin-top", "16px"], ["lines", "none", 4, "ngFor", "ngForOf"], ["lines", "none"], [2, "margin-top", "5px", "margin-right", "10px", 3, "click", "ngModelChange", "ngModel"], [1, "txt-bp-name"], [1, "txt-bp-adrss"], ["padding", ""], ["mode", "md", "expand", "block", 1, "login-btn", 3, "click"]],
  template: function AddExistingPassengerComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar", 0)(2, "ion-buttons", 1)(3, "ion-button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AddExistingPassengerComponent_Template_ion_button_click_3_listener() {
        return ctx.dismiss();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "ion-icon", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "ion-title", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6, "Add Existing Passenger ");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "ion-content", 5)(8, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](9, AddExistingPassengerComponent_div_9_Template, 2, 0, "div", 7)(10, AddExistingPassengerComponent_ion_list_10_Template, 2, 1, "ion-list", 8)(11, AddExistingPassengerComponent_div_11_Template, 3, 0, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.travellersList.length < 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.travellersList.length > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.selectedPassengers.length > 0);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf],
  styles: [".head[_ngcontent-%COMP%] {\n  padding-left: 15px;\n  margin: 0;\n}\n\n.bg-cl[_ngcontent-%COMP%] {\n  --background: #ffdd21 !important;\n}\n\n.bg-content[_ngcontent-%COMP%] {\n  --background: #e4e5e6;\n}\n\n.card-1[_ngcontent-%COMP%] {\n  padding: 16px 12px;\n  margin: 0;\n  box-shadow: rgba(0, 0, 0, 0) 0 0 0 0px, rgba(0, 0, 0, 0) 0 0 0 0, rgba(0, 0, 0, 0) 0 0 0 0;\n  border-radius: 0;\n}\n\n.login-btn[_ngcontent-%COMP%] {\n  left: 10px;\n  right: 10px;\n  text-transform: initial;\n  --background: #ed3237;\n  font-family: NotoSans;\n  font-weight: bolder;\n  font-size: 13px;\n  position: fixed;\n  bottom: 0;\n  height: 50px;\n  border-radius: 4px;\n}"]
});

/***/ }),

/***/ 97918:
/*!***********************************************************************!*\
  !*** ./src/app/passenger-details/passenger-details-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PassengerDetailsPageRoutingModule: () => (/* binding */ PassengerDetailsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 49870);
/* harmony import */ var _passenger_details_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./passenger-details.page */ 13440);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 17705);
var _PassengerDetailsPageRoutingModule;




const routes = [{
  path: '',
  component: _passenger_details_page__WEBPACK_IMPORTED_MODULE_0__.PassengerDetailsPage
}];
class PassengerDetailsPageRoutingModule {}
_PassengerDetailsPageRoutingModule = PassengerDetailsPageRoutingModule;
_PassengerDetailsPageRoutingModule.ɵfac = function PassengerDetailsPageRoutingModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PassengerDetailsPageRoutingModule)();
};
_PassengerDetailsPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: _PassengerDetailsPageRoutingModule
});
_PassengerDetailsPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PassengerDetailsPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ })

}]);