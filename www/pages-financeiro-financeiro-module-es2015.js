(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-financeiro-financeiro-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/financeiro/financeiro.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/financeiro/financeiro.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n          <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n    <ion-title>Financeiro</ion-title>\n  </ion-toolbar>\n</ion-header>\n  \n<ion-content padding>\n  <ion-card>\n    <ion-card-header>\n      <ion-buttons>\n        <ion-button color=\"primary\" fill=\"clear\" (click)=\"historico()\">HISTÓRICO</ion-button>\n      </ion-buttons>\n    </ion-card-header>\n  </ion-card>\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title text-center>Situação atual</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-list lines=\"none\" >\n        <ion-item-sliding *ngFor=\"let finan of financeiro\">\n          <ion-item>\n            <ion-label>Mês: {{finan.mes}}</ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-label>Pagamento: {{finan.data_pag}}</ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-label>Valor: {{finan.valor}}</ion-label>\n          </ion-item>\n          <ion-item *ngIf=\"financeiro.length>1\">\n            <!-- espaco -->\n          </ion-item>\n        </ion-item-sliding>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n  "

/***/ }),

/***/ "./src/app/pages/financeiro/financeiro.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/financeiro/financeiro.module.ts ***!
  \*******************************************************/
/*! exports provided: FinanceiroPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinanceiroPageModule", function() { return FinanceiroPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _financeiro_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./financeiro.page */ "./src/app/pages/financeiro/financeiro.page.ts");







const routes = [
    {
        path: '',
        component: _financeiro_page__WEBPACK_IMPORTED_MODULE_6__["FinanceiroPage"]
    }
];
let FinanceiroPageModule = class FinanceiroPageModule {
};
FinanceiroPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_financeiro_page__WEBPACK_IMPORTED_MODULE_6__["FinanceiroPage"]]
    })
], FinanceiroPageModule);



/***/ }),

/***/ "./src/app/pages/financeiro/financeiro.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/financeiro/financeiro.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ZpbmFuY2Vpcm8vZmluYW5jZWlyby5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/financeiro/financeiro.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/financeiro/financeiro.page.ts ***!
  \*****************************************************/
/*! exports provided: FinanceiroPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinanceiroPage", function() { return FinanceiroPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_services_global_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/global.service */ "./src/app/services/global.service.ts");
/* harmony import */ var src_app_route_to_preload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/route-to-preload */ "./src/app/route-to-preload.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");







let FinanceiroPage = class FinanceiroPage {
    constructor(authService, datePipe, navCtrl, routingService, global) {
        this.authService = authService;
        this.datePipe = datePipe;
        this.navCtrl = navCtrl;
        this.routingService = routingService;
        this.global = global;
        this.financeiro = [];
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.id = this.global.user_id;
        this.showFinanceiro();
    }
    ionViewDidEnter() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.routingService.preloadRoute('hisfinanceiro');
        });
    }
    showFinanceiro() {
        this.authService.getFinanceiro(this.id).subscribe(resul => {
            for (let i = 0; i < resul.length; i++) {
                this.financeiro[i] = resul[i];
                if (resul[i].data_pag == '0000-00-00' || resul[i].data_pag == null) {
                    this.financeiro[i].data_pag = "Aguardando";
                }
                else {
                    this.financeiro[i].data_pag = this.datePipe.transform(resul[i].data_pag, "dd/MM");
                }
            }
        });
    }
    historico() {
        let navigationExtras = {
            queryParams: {
                id: this.id
            }
        };
        this.navCtrl.navigateForward(['/hisfinanceiro'], navigationExtras);
    }
};
FinanceiroPage.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: src_app_route_to_preload__WEBPACK_IMPORTED_MODULE_2__["AppRoutingPreloaderService"] },
    { type: src_app_services_global_service__WEBPACK_IMPORTED_MODULE_1__["GlobalService"] }
];
FinanceiroPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
        selector: 'app-financeiro',
        template: __webpack_require__(/*! raw-loader!./financeiro.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/financeiro/financeiro.page.html"),
        styles: [__webpack_require__(/*! ./financeiro.page.scss */ "./src/app/pages/financeiro/financeiro.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
        _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
        src_app_route_to_preload__WEBPACK_IMPORTED_MODULE_2__["AppRoutingPreloaderService"],
        src_app_services_global_service__WEBPACK_IMPORTED_MODULE_1__["GlobalService"]])
], FinanceiroPage);



/***/ })

}]);
//# sourceMappingURL=pages-financeiro-financeiro-module-es2015.js.map