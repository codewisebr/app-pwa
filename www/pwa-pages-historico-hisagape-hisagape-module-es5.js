(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pwa-pages-historico-hisagape-hisagape-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pwa-pages/historico/hisagape/hisagape.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pwa-pages/historico/hisagape/hisagape.page.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n          <ion-back-button></ion-back-button>\n      </ion-buttons>\n    <ion-title>Histórico de ágape</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <div class=\"box\">\n    <ion-buttons>\n      <ion-button color=\"primary\" fill=\"clear\" (click)=\"popUp()\">EXCLUIR HISTÓRICO</ion-button>\n    </ion-buttons>\n  </div>\n  <div class=\"box\">\n    <h2 text-center>Histórico</h2>\n    <br>\n    <ion-row>\n        <ion-col size=\"5\">\n            <h3 text-center>Ágape</h3>\n            <ion-list lines=\"none\">\n                <ion-item-sliding *ngFor=\"let agapes of agape\">\n                  <ion-item>\n                      <ion-label text-center>{{agapes}}</ion-label>\n                  </ion-item>\n                </ion-item-sliding>\n              </ion-list>\n          </ion-col>\n          <ion-col size=\"4\">\n            <h3 text-center>Data</h3>\n            <ion-list lines=\"none\">\n                <ion-item-sliding *ngFor=\"let datas of date\">\n                  <ion-item>\n                      <ion-label text-center>{{datas}}</ion-label>\n                  </ion-item>\n                </ion-item-sliding>\n              </ion-list>\n          </ion-col>\n          <ion-col size=\"3\">\n            <h3 text-center>Ativo</h3>\n            <ion-list lines=\"none\">\n                <ion-item-sliding *ngFor=\"let ativos of ativo\">\n                  <ion-item>\n                      <ion-label text-center>{{ativos}}</ion-label>\n                  </ion-item>\n                </ion-item-sliding>\n              </ion-list>\n          </ion-col>\n    </ion-row>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pwa-pages/historico/hisagape/hisagape.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pwa-pages/historico/hisagape/hisagape.module.ts ***!
  \*****************************************************************/
/*! exports provided: HisagapePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HisagapePageModule", function() { return HisagapePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _hisagape_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hisagape.page */ "./src/app/pwa-pages/historico/hisagape/hisagape.page.ts");







var routes = [
    {
        path: '',
        component: _hisagape_page__WEBPACK_IMPORTED_MODULE_6__["HisagapePage"]
    }
];
var HisagapePageModule = /** @class */ (function () {
    function HisagapePageModule() {
    }
    HisagapePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_hisagape_page__WEBPACK_IMPORTED_MODULE_6__["HisagapePage"]]
        })
    ], HisagapePageModule);
    return HisagapePageModule;
}());



/***/ }),

/***/ "./src/app/pwa-pages/historico/hisagape/hisagape.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pwa-pages/historico/hisagape/hisagape.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".box {\n  margin: 20px;\n  padding: 10px;\n  border-radius: 4px;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NvZGV3aXNlL3VuaWFvdmlpL2FwcC1wd2Evc3JjL2FwcC9wd2EtcGFnZXMvaGlzdG9yaWNvL2hpc2FnYXBlL2hpc2FnYXBlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcHdhLXBhZ2VzL2hpc3Rvcmljby9oaXNhZ2FwZS9oaXNhZ2FwZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0NBQUE7RUFDQSwrR0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcHdhLXBhZ2VzL2hpc3Rvcmljby9oaXNhZ2FwZS9oaXNhZ2FwZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm94e1xuICAgIG1hcmdpbjoyMHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICBib3gtc2hhZG93OiAwIDNweCAxcHggLTJweCByZ2JhKDAsMCwwLC4yKSwgMCAycHggMnB4IDAgcmdiYSgwLDAsMCwuMTQpLCAwIDFweCA1cHggMCByZ2JhKDAsMCwwLC4xMik7XG59IiwiLmJveCB7XG4gIG1hcmdpbjogMjBweDtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAycHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pwa-pages/historico/hisagape/hisagape.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/pwa-pages/historico/hisagape/hisagape.page.ts ***!
  \***************************************************************/
/*! exports provided: HisagapePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HisagapePage", function() { return HisagapePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _route_to_preload__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../route-to-preload */ "./src/app/route-to-preload.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");







var HisagapePage = /** @class */ (function () {
    function HisagapePage(authService, dataPipe, routingService, alertService, alertCtrl) {
        this.authService = authService;
        this.dataPipe = dataPipe;
        this.routingService = routingService;
        this.alertService = alertService;
        this.alertCtrl = alertCtrl;
        this.agape = [];
        this.date = [];
        this.ativo = [];
    }
    HisagapePage.prototype.ngOnInit = function () {
    };
    HisagapePage.prototype.ionViewDidEnter = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.routingService.preloadRoute('adminagape')];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HisagapePage.prototype.ionViewWillEnter = function () {
        this.showAgape();
    };
    HisagapePage.prototype.showAgape = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.authService.getAllAgape().subscribe(function (data) {
                            for (var i = 0; i < data.length; i++) {
                                _this.agape[i] = data[i].agape;
                                _this.date[i] = (_this.dataPipe.transform(data[i].data, "dd/MM/yyyy"));
                                if (data[i].ativo == 1)
                                    _this.ativo[i] = "Sim";
                                else
                                    _this.ativo[i] = "Não";
                            }
                        }, function (error) {
                            // console.log(error);
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HisagapePage.prototype.popUp = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
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
                                    handler: function () {
                                        _this.delete();
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HisagapePage.prototype.delete = function () {
        var _this = this;
        this.authService.deleteHistAgape().subscribe(function (data) {
            _this.alertService.presentToast("Histórico apagado com sucesso!");
            window.location.reload();
        });
    };
    HisagapePage.ctorParameters = function () { return [
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"] },
        { type: _route_to_preload__WEBPACK_IMPORTED_MODULE_3__["AppRoutingPreloaderService"] },
        { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"] }
    ]; };
    HisagapePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
            selector: 'app-hisagape',
            template: __webpack_require__(/*! raw-loader!./hisagape.page.html */ "./node_modules/raw-loader/index.js!./src/app/pwa-pages/historico/hisagape/hisagape.page.html"),
            styles: [__webpack_require__(/*! ./hisagape.page.scss */ "./src/app/pwa-pages/historico/hisagape/hisagape.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"],
            _route_to_preload__WEBPACK_IMPORTED_MODULE_3__["AppRoutingPreloaderService"],
            _services_alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"]])
    ], HisagapePage);
    return HisagapePage;
}());



/***/ })

}]);
//# sourceMappingURL=pwa-pages-historico-hisagape-hisagape-module-es5.js.map