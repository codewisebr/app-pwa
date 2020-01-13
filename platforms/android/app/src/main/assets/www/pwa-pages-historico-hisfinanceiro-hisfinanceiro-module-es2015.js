(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pwa-pages-historico-hisfinanceiro-hisfinanceiro-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pwa-pages/historico/hisfinanceiro/hisfinanceiro.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pwa-pages/historico/hisfinanceiro/hisfinanceiro.page.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button></ion-back-button>\n        </ion-buttons>\n      <ion-title>Histórico</ion-title>\n    </ion-toolbar>\n  </ion-header>\n    \n  <ion-content padding>\n    <ion-card>\n      <ion-card-content>\n        <ion-list lines=\"none\" >\n          <ion-item-sliding *ngFor=\"let finan of financeiro\">\n            <ion-item>\n              <ion-label>Mês: {{finan.mes}}</ion-label>\n            </ion-item>\n            <ion-item>\n              <ion-label>Pagamento: {{finan.data_pag}}</ion-label>\n            </ion-item>\n            <ion-item>\n              <ion-label>Valor: {{finan.valor}}</ion-label>\n            </ion-item>\n            <ion-item *ngIf=\"financeiro.length>1\">\n                <!-- espaco -->\n              </ion-item>\n          </ion-item-sliding>\n        </ion-list>\n      </ion-card-content>\n    </ion-card>\n  </ion-content>\n    "

/***/ }),

/***/ "./src/app/pwa-pages/historico/hisfinanceiro/hisfinanceiro.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pwa-pages/historico/hisfinanceiro/hisfinanceiro.module.ts ***!
  \***************************************************************************/
/*! exports provided: HisfinanceiroPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HisfinanceiroPageModule", function() { return HisfinanceiroPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _hisfinanceiro_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hisfinanceiro.page */ "./src/app/pwa-pages/historico/hisfinanceiro/hisfinanceiro.page.ts");







const routes = [
    {
        path: '',
        component: _hisfinanceiro_page__WEBPACK_IMPORTED_MODULE_6__["HisfinanceiroPage"]
    }
];
let HisfinanceiroPageModule = class HisfinanceiroPageModule {
};
HisfinanceiroPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_hisfinanceiro_page__WEBPACK_IMPORTED_MODULE_6__["HisfinanceiroPage"]]
    })
], HisfinanceiroPageModule);



/***/ }),

/***/ "./src/app/pwa-pages/historico/hisfinanceiro/hisfinanceiro.page.scss":
/*!***************************************************************************!*\
  !*** ./src/app/pwa-pages/historico/hisfinanceiro/hisfinanceiro.page.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3B3YS1wYWdlcy9oaXN0b3JpY28vaGlzZmluYW5jZWlyby9oaXNmaW5hbmNlaXJvLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pwa-pages/historico/hisfinanceiro/hisfinanceiro.page.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pwa-pages/historico/hisfinanceiro/hisfinanceiro.page.ts ***!
  \*************************************************************************/
/*! exports provided: HisfinanceiroPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HisfinanceiroPage", function() { return HisfinanceiroPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _route_to_preload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../route-to-preload */ "./src/app/route-to-preload.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");







let HisfinanceiroPage = class HisfinanceiroPage {
    constructor(authService, datePipe, navCtrl, routingService, router) {
        this.authService = authService;
        this.datePipe = datePipe;
        this.navCtrl = navCtrl;
        this.routingService = routingService;
        this.router = router;
        this.financeiro = [];
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.routingService.preloadRoute('financeiro');
        });
    }
    ionViewWillEnter() {
        this.router.queryParams.subscribe(params => {
            this.id = params["id"];
        });
        this.showFinanceiro();
    }
    showFinanceiro() {
        this.authService.getAllFinanceiro(this.id).subscribe(resul => {
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
};
HisfinanceiroPage.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _route_to_preload__WEBPACK_IMPORTED_MODULE_2__["AppRoutingPreloaderService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }
];
HisfinanceiroPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
        selector: 'app-hisfinanceiro',
        template: __webpack_require__(/*! raw-loader!./hisfinanceiro.page.html */ "./node_modules/raw-loader/index.js!./src/app/pwa-pages/historico/hisfinanceiro/hisfinanceiro.page.html"),
        styles: [__webpack_require__(/*! ./hisfinanceiro.page.scss */ "./src/app/pwa-pages/historico/hisfinanceiro/hisfinanceiro.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
        _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
        _route_to_preload__WEBPACK_IMPORTED_MODULE_2__["AppRoutingPreloaderService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
], HisfinanceiroPage);



/***/ })

}]);
//# sourceMappingURL=pwa-pages-historico-hisfinanceiro-hisfinanceiro-module-es2015.js.map