(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pwa-pages-historico-hisfamilia-hisfamilia-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pwa-pages/historico/hisfamilia/hisfamilia.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pwa-pages/historico/hisfamilia/hisfamilia.page.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button></ion-back-button>\n        </ion-buttons>\n      <ion-title>Família</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content padding>\n    <div class=\"box\">\n      <h2>Família {{nome}}</h2>\n      <ion-list lines=\"none\">\n        <ion-item-sliding lines=\"none\" *ngFor=\"let fam of familia\">\n            <ion-item>\n              <ion-label>Grau: {{fam.grau}}</ion-label>\n            </ion-item>\n            <ion-item>\n              <ion-label>Data nascimento: {{fam.data_nasc}}</ion-label>\n            </ion-item>\n            <ion-item></ion-item>\n        </ion-item-sliding>\n      </ion-list>\n    </div>\n  </ion-content>"

/***/ }),

/***/ "./src/app/pwa-pages/historico/hisfamilia/hisfamilia.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pwa-pages/historico/hisfamilia/hisfamilia.module.ts ***!
  \*********************************************************************/
/*! exports provided: HisfamiliaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HisfamiliaPageModule", function() { return HisfamiliaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _hisfamilia_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hisfamilia.page */ "./src/app/pwa-pages/historico/hisfamilia/hisfamilia.page.ts");







const routes = [
    {
        path: '',
        component: _hisfamilia_page__WEBPACK_IMPORTED_MODULE_6__["HisfamiliaPage"]
    }
];
let HisfamiliaPageModule = class HisfamiliaPageModule {
};
HisfamiliaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_hisfamilia_page__WEBPACK_IMPORTED_MODULE_6__["HisfamiliaPage"]]
    })
], HisfamiliaPageModule);



/***/ }),

/***/ "./src/app/pwa-pages/historico/hisfamilia/hisfamilia.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/pwa-pages/historico/hisfamilia/hisfamilia.page.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".box {\n  margin: 20px;\n  padding: 10px;\n  border-radius: 4px;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n\nh2 {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NvZGV3aXNlL3VuaWFvdmlpL2FwcC1wd2Evc3JjL2FwcC9wd2EtcGFnZXMvaGlzdG9yaWNvL2hpc2ZhbWlsaWEvaGlzZmFtaWxpYS5wYWdlLnNjc3MiLCJzcmMvYXBwL3B3YS1wYWdlcy9oaXN0b3JpY28vaGlzZmFtaWxpYS9oaXNmYW1pbGlhLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQ0FBQTtFQUNBLCtHQUFBO0FDQ0o7O0FEQ0E7RUFDSSxrQkFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvcHdhLXBhZ2VzL2hpc3Rvcmljby9oaXNmYW1pbGlhL2hpc2ZhbWlsaWEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJveHtcbiAgICBtYXJnaW46MjBweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgYm94LXNoYWRvdzogMCAzcHggMXB4IC0ycHggcmdiYSgwLDAsMCwuMiksIDAgMnB4IDJweCAwIHJnYmEoMCwwLDAsLjE0KSwgMCAxcHggNXB4IDAgcmdiYSgwLDAsMCwuMTIpO1xufVxuaDJ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufSIsIi5ib3gge1xuICBtYXJnaW46IDIwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBib3gtc2hhZG93OiAwIDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbmgyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pwa-pages/historico/hisfamilia/hisfamilia.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pwa-pages/historico/hisfamilia/hisfamilia.page.ts ***!
  \*******************************************************************/
/*! exports provided: HisfamiliaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HisfamiliaPage", function() { return HisfamiliaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_route_to_preload__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/route-to-preload */ "./src/app/route-to-preload.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");







let HisfamiliaPage = class HisfamiliaPage {
    constructor(routingService, router, navCtrl, authService, dataPipe) {
        this.routingService = routingService;
        this.router = router;
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.dataPipe = dataPipe;
        this.familia = [];
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.routingService.preloadRoute('adminagape');
        });
    }
    ionViewWillEnter() {
        this.router.queryParams.subscribe(params => {
            this.id = params["id"];
        });
        this.showFamilia();
    }
    dismiss() {
        this.navCtrl.navigateForward('/adminagape');
    }
    showFamilia() {
        this.authService.getUsers(this.id).subscribe(data => {
            this.nome = data[0].last_name;
        });
        this.authService.getFamilia(this.id).subscribe(resp => {
            if (resp == 0)
                this.hidden = false;
            else {
                this.hidden = true;
                for (let i = 0; i < resp.length; i++) {
                    this.familia[i] = resp[i];
                    this.familia[i].data_nasc = (this.dataPipe.transform(resp[i].data_nasc, "dd/MM/yyyy"));
                }
            }
        });
    }
};
HisfamiliaPage.ctorParameters = () => [
    { type: src_app_route_to_preload__WEBPACK_IMPORTED_MODULE_5__["AppRoutingPreloaderService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"] }
];
HisfamiliaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
        selector: 'app-hisfamilia',
        template: __webpack_require__(/*! raw-loader!./hisfamilia.page.html */ "./node_modules/raw-loader/index.js!./src/app/pwa-pages/historico/hisfamilia/hisfamilia.page.html"),
        styles: [__webpack_require__(/*! ./hisfamilia.page.scss */ "./src/app/pwa-pages/historico/hisfamilia/hisfamilia.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_route_to_preload__WEBPACK_IMPORTED_MODULE_5__["AppRoutingPreloaderService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
        src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]])
], HisfamiliaPage);



/***/ })

}]);
//# sourceMappingURL=pwa-pages-historico-hisfamilia-hisfamilia-module-es2015.js.map