(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pwa-pages-historico-hisinfo-hisinfo-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pwa-pages/historico/hisinfo/hisinfo.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pwa-pages/historico/hisinfo/hisinfo.page.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n          <ion-back-button></ion-back-button>\n      </ion-buttons>\n    <ion-title>Histórico de informativos</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <div class=\"box\">\n    <ion-buttons>\n      <ion-button color=\"primary\" fill=\"clear\" (click)=\"popUp()\">EXCLUIR HISTÓRICO</ion-button>\n    </ion-buttons>\n  </div>\n  <div class=\"box\">\n    <h2 text-center>Histórico</h2>\n    <br>\n    <ion-row>\n        <ion-col size=\"5\">\n            <h3 text-center>Informativo</h3>\n            <ion-list lines=\"none\">\n                <ion-item-sliding *ngFor=\"let inform of info\">\n                  <ion-item>\n                      <ion-label text-center>{{inform}}</ion-label>\n                  </ion-item>\n                </ion-item-sliding>\n              </ion-list>\n          </ion-col>\n          <ion-col size=\"4\">\n            <h3 text-center>Data</h3>\n            <ion-list lines=\"none\">\n                <ion-item-sliding *ngFor=\"let inform of date\">\n                  <ion-item>\n                      <ion-label text-center>{{inform}}</ion-label>\n                  </ion-item>\n                </ion-item-sliding>\n              </ion-list>\n          </ion-col>\n          <ion-col size=\"3\">\n            <h3 text-center>Ativo</h3>\n            <ion-list lines=\"none\">\n                <ion-item-sliding *ngFor=\"let inform of ativo\">\n                  <ion-item>\n                      <ion-label text-center>{{inform}}</ion-label>\n                  </ion-item>\n                </ion-item-sliding>\n              </ion-list>\n          </ion-col>\n    </ion-row>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pwa-pages/historico/hisinfo/hisinfo.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pwa-pages/historico/hisinfo/hisinfo.module.ts ***!
  \***************************************************************/
/*! exports provided: HisinfoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HisinfoPageModule", function() { return HisinfoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _hisinfo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hisinfo.page */ "./src/app/pwa-pages/historico/hisinfo/hisinfo.page.ts");







const routes = [
    {
        path: '',
        component: _hisinfo_page__WEBPACK_IMPORTED_MODULE_6__["HisinfoPage"]
    }
];
let HisinfoPageModule = class HisinfoPageModule {
};
HisinfoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_hisinfo_page__WEBPACK_IMPORTED_MODULE_6__["HisinfoPage"]]
    })
], HisinfoPageModule);



/***/ }),

/***/ "./src/app/pwa-pages/historico/hisinfo/hisinfo.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pwa-pages/historico/hisinfo/hisinfo.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".box {\n  margin: 20px;\n  padding: 10px;\n  border-radius: 4px;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NvZGV3aXNlL3VuaWFvdmlpL2FwcC1wd2Evc3JjL2FwcC9wd2EtcGFnZXMvaGlzdG9yaWNvL2hpc2luZm8vaGlzaW5mby5wYWdlLnNjc3MiLCJzcmMvYXBwL3B3YS1wYWdlcy9oaXN0b3JpY28vaGlzaW5mby9oaXNpbmZvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQ0FBQTtFQUNBLCtHQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wd2EtcGFnZXMvaGlzdG9yaWNvL2hpc2luZm8vaGlzaW5mby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm94e1xuICAgIG1hcmdpbjoyMHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICBib3gtc2hhZG93OiAwIDNweCAxcHggLTJweCByZ2JhKDAsMCwwLC4yKSwgMCAycHggMnB4IDAgcmdiYSgwLDAsMCwuMTQpLCAwIDFweCA1cHggMCByZ2JhKDAsMCwwLC4xMik7XG59IiwiLmJveCB7XG4gIG1hcmdpbjogMjBweDtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAycHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pwa-pages/historico/hisinfo/hisinfo.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pwa-pages/historico/hisinfo/hisinfo.page.ts ***!
  \*************************************************************/
/*! exports provided: HisinfoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HisinfoPage", function() { return HisinfoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _route_to_preload__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../route-to-preload */ "./src/app/route-to-preload.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");







let HisinfoPage = class HisinfoPage {
    constructor(authService, dataPipe, routingService, alertCtrl, alertService) {
        this.authService = authService;
        this.dataPipe = dataPipe;
        this.routingService = routingService;
        this.alertCtrl = alertCtrl;
        this.alertService = alertService;
        this.info = [];
        this.date = [];
        this.ativo = [];
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.routingService.preloadRoute('admininfo');
        });
    }
    ionViewWillEnter() {
        this.showInfo();
    }
    showInfo() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.authService.getAllInfo().subscribe(data => {
                for (let i = 0; i < data.length; i++) {
                    this.info[i] = data[i].info;
                    this.date[i] = (this.dataPipe.transform(data[i].created_at, "dd/MM/yyyy"));
                    if (data[i].ativo == 1)
                        this.ativo[i] = "Sim";
                    else
                        this.ativo[i] = "Não";
                }
            }, error => {
                // console.log(error);
            });
        });
    }
    popUp() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let alert = yield this.alertCtrl.create({
                header: 'Ao apagar o histórico os registros serão apagados permanentemente. Deseja realmente excluir?',
                buttons: [
                    {
                        text: 'Cancelar',
                        //role cancel deixa ele como segunda opcao
                        role: 'cancel',
                        cssClass: 'secondary'
                    },
                    {
                        text: 'Continuar',
                        handler: () => {
                            this.delete();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    delete() {
        this.authService.deleteHistInfo().subscribe(data => {
            this.alertService.presentToast("Histórico apagado com sucesso!");
            window.location.reload();
        });
    }
};
HisinfoPage.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"] },
    { type: _route_to_preload__WEBPACK_IMPORTED_MODULE_3__["AppRoutingPreloaderService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"] }
];
HisinfoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
        selector: 'app-hisinfo',
        template: __webpack_require__(/*! raw-loader!./hisinfo.page.html */ "./node_modules/raw-loader/index.js!./src/app/pwa-pages/historico/hisinfo/hisinfo.page.html"),
        styles: [__webpack_require__(/*! ./hisinfo.page.scss */ "./src/app/pwa-pages/historico/hisinfo/hisinfo.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
        _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"],
        _route_to_preload__WEBPACK_IMPORTED_MODULE_3__["AppRoutingPreloaderService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        _services_alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"]])
], HisinfoPage);



/***/ })

}]);
//# sourceMappingURL=pwa-pages-historico-hisinfo-hisinfo-module-es2015.js.map