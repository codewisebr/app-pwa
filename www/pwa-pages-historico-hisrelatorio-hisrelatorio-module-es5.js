(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pwa-pages-historico-hisrelatorio-hisrelatorio-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pwa-pages/historico/hisrelatorio/hisrelatorio.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pwa-pages/historico/hisrelatorio/hisrelatorio.page.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n          <ion-back-button></ion-back-button>\n      </ion-buttons>\n    <ion-title>Relatório</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <div class=\"box\">\n    <h2 text-center>Relatório</h2>\n    <br>\n    <ion-list lines=\"none\" *ngFor=\"let nomes of nome\">\n      <ion-button color=\"primary\" fill=\"clear\" (click)=\"historico(nomes[1])\">{{nomes[0]}}</ion-button>\n    </ion-list>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pwa-pages/historico/hisrelatorio/hisrelatorio.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pwa-pages/historico/hisrelatorio/hisrelatorio.module.ts ***!
  \*************************************************************************/
/*! exports provided: HisrelatorioPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HisrelatorioPageModule", function() { return HisrelatorioPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _hisrelatorio_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hisrelatorio.page */ "./src/app/pwa-pages/historico/hisrelatorio/hisrelatorio.page.ts");







var routes = [
    {
        path: '',
        component: _hisrelatorio_page__WEBPACK_IMPORTED_MODULE_6__["HisrelatorioPage"]
    }
];
var HisrelatorioPageModule = /** @class */ (function () {
    function HisrelatorioPageModule() {
    }
    HisrelatorioPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_hisrelatorio_page__WEBPACK_IMPORTED_MODULE_6__["HisrelatorioPage"]]
        })
    ], HisrelatorioPageModule);
    return HisrelatorioPageModule;
}());



/***/ }),

/***/ "./src/app/pwa-pages/historico/hisrelatorio/hisrelatorio.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/pwa-pages/historico/hisrelatorio/hisrelatorio.page.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".box {\n  margin: 20px;\n  padding: 10px;\n  border-radius: 4px;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  padding-left: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NvZGV3aXNlL3VuaWFvdmlpL2FwcC1wd2Evc3JjL2FwcC9wd2EtcGFnZXMvaGlzdG9yaWNvL2hpc3JlbGF0b3Jpby9oaXNyZWxhdG9yaW8ucGFnZS5zY3NzIiwic3JjL2FwcC9wd2EtcGFnZXMvaGlzdG9yaWNvL2hpc3JlbGF0b3Jpby9oaXNyZWxhdG9yaW8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLG9DQUFBO0VBQ0EsK0dBQUE7RUFDQSxrQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcHdhLXBhZ2VzL2hpc3Rvcmljby9oaXNyZWxhdG9yaW8vaGlzcmVsYXRvcmlvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib3h7XG4gICAgbWFyZ2luOjIwcHg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgIGJveC1zaGFkb3c6IDAgM3B4IDFweCAtMnB4IHJnYmEoMCwwLDAsLjIpLCAwIDJweCAycHggMCByZ2JhKDAsMCwwLC4xNCksIDAgMXB4IDVweCAwIHJnYmEoMCwwLDAsLjEyKTtcbiAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XG59IiwiLmJveCB7XG4gIG1hcmdpbjogMjBweDtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAycHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgcGFkZGluZy1sZWZ0OiA1MHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pwa-pages/historico/hisrelatorio/hisrelatorio.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pwa-pages/historico/hisrelatorio/hisrelatorio.page.ts ***!
  \***********************************************************************/
/*! exports provided: HisrelatorioPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HisrelatorioPage", function() { return HisrelatorioPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _route_to_preload__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../route-to-preload */ "./src/app/route-to-preload.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");





var HisrelatorioPage = /** @class */ (function () {
    function HisrelatorioPage(routingService, authService, navCtrl) {
        this.routingService = routingService;
        this.authService = authService;
        this.navCtrl = navCtrl;
        this.nome = [];
    }
    HisrelatorioPage.prototype.ngOnInit = function () {
    };
    HisrelatorioPage.prototype.ionViewDidEnter = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.routingService.preloadRoute('hisadminfinanceiro')];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.routingService.preloadRoute('adminfinanceiro')];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HisrelatorioPage.prototype.ionViewWillEnter = function () {
        this.showLista();
    };
    HisrelatorioPage.prototype.showLista = function () {
        var _this = this;
        this.authService.getAllUser().subscribe(function (data) {
            var _loop_1 = function (i) {
                _this.authService.getNome(data[i].id).subscribe(function (resul) {
                    _this.nome[i] = resul;
                });
            };
            for (var i = 0; i < data.length; i++) {
                _loop_1(i);
            }
        });
    };
    HisrelatorioPage.prototype.historico = function (id) {
        var navigationExtras = {
            queryParams: {
                id: id
            }
        };
        this.navCtrl.navigateForward(['/hisadminfinanceiro'], navigationExtras);
    };
    HisrelatorioPage.ctorParameters = function () { return [
        { type: _route_to_preload__WEBPACK_IMPORTED_MODULE_3__["AppRoutingPreloaderService"] },
        { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"] }
    ]; };
    HisrelatorioPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'app-hisrelatorio',
            template: __webpack_require__(/*! raw-loader!./hisrelatorio.page.html */ "./node_modules/raw-loader/index.js!./src/app/pwa-pages/historico/hisrelatorio/hisrelatorio.page.html"),
            styles: [__webpack_require__(/*! ./hisrelatorio.page.scss */ "./src/app/pwa-pages/historico/hisrelatorio/hisrelatorio.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_route_to_preload__WEBPACK_IMPORTED_MODULE_3__["AppRoutingPreloaderService"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"]])
    ], HisrelatorioPage);
    return HisrelatorioPage;
}());



/***/ })

}]);
//# sourceMappingURL=pwa-pages-historico-hisrelatorio-hisrelatorio-module-es5.js.map