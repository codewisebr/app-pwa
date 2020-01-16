(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pwa-pages-historico-hispresenca-hispresenca-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pwa-pages/historico/hispresenca/hispresenca.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pwa-pages/historico/hispresenca/hispresenca.page.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button></ion-back-button>\n        </ion-buttons>\n      <ion-title>Histórico de presença</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content padding>\n    <div class=\"box\">\n      <h2 text-center>Histórico</h2>\n      <br>\n      <ion-list lines=\"none\" *ngFor=\"let datas of data\" text-center>\n        <ion-button color=\"primary\" fill=\"clear\" (click)=\"lista(datas)\">Reunião do dia {{datas}}</ion-button>\n      </ion-list>\n    </div>\n  </ion-content>\n  "

/***/ }),

/***/ "./src/app/pwa-pages/historico/hispresenca/hispresenca.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pwa-pages/historico/hispresenca/hispresenca.module.ts ***!
  \***********************************************************************/
/*! exports provided: HispresencaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HispresencaPageModule", function() { return HispresencaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _hispresenca_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hispresenca.page */ "./src/app/pwa-pages/historico/hispresenca/hispresenca.page.ts");







var routes = [
    {
        path: '',
        component: _hispresenca_page__WEBPACK_IMPORTED_MODULE_6__["HispresencaPage"]
    }
];
var HispresencaPageModule = /** @class */ (function () {
    function HispresencaPageModule() {
    }
    HispresencaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_hispresenca_page__WEBPACK_IMPORTED_MODULE_6__["HispresencaPage"]]
        })
    ], HispresencaPageModule);
    return HispresencaPageModule;
}());



/***/ }),

/***/ "./src/app/pwa-pages/historico/hispresenca/hispresenca.page.scss":
/*!***********************************************************************!*\
  !*** ./src/app/pwa-pages/historico/hispresenca/hispresenca.page.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".box {\n  margin: auto;\n  padding: 10px;\n  border-radius: 4px;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NvZGV3aXNlL3VuaWFvdmlpL2FwcC1wd2Evc3JjL2FwcC9wd2EtcGFnZXMvaGlzdG9yaWNvL2hpc3ByZXNlbmNhL2hpc3ByZXNlbmNhLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcHdhLXBhZ2VzL2hpc3Rvcmljby9oaXNwcmVzZW5jYS9oaXNwcmVzZW5jYS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0NBQUE7RUFDQSwrR0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcHdhLXBhZ2VzL2hpc3Rvcmljby9oaXNwcmVzZW5jYS9oaXNwcmVzZW5jYS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm94e1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgYm94LXNoYWRvdzogMCAzcHggMXB4IC0ycHggcmdiYSgwLDAsMCwuMiksIDAgMnB4IDJweCAwIHJnYmEoMCwwLDAsLjE0KSwgMCAxcHggNXB4IDAgcmdiYSgwLDAsMCwuMTIpO1xufSIsIi5ib3gge1xuICBtYXJnaW46IGF1dG87XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBib3gtc2hhZG93OiAwIDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XG59Il19 */"

/***/ }),

/***/ "./src/app/pwa-pages/historico/hispresenca/hispresenca.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pwa-pages/historico/hispresenca/hispresenca.page.ts ***!
  \*********************************************************************/
/*! exports provided: HispresencaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HispresencaPage", function() { return HispresencaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _route_to_preload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../route-to-preload */ "./src/app/route-to-preload.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");






var HispresencaPage = /** @class */ (function () {
    function HispresencaPage(authService, dataPipe, navCtrl, routingService) {
        this.authService = authService;
        this.dataPipe = dataPipe;
        this.navCtrl = navCtrl;
        this.routingService = routingService;
        this.data = [];
    }
    HispresencaPage.prototype.ngOnInit = function () {
    };
    HispresencaPage.prototype.ionViewDidEnter = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.routingService.preloadRoute('hislista')];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.routingService.preloadRoute('adminpresenca')];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HispresencaPage.prototype.ionViewWillEnter = function () {
        this.showData();
    };
    HispresencaPage.prototype.showData = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.authService.getAllReuniao()
                            .subscribe(function (resul) {
                            for (var i = 0; i < resul.length; i++) {
                                //pega a data da reuniao
                                _this.data[i] = (_this.dataPipe.transform(resul[i].data, "dd/MM/yyyy"));
                            }
                        }, function (error) {
                            // console.log("error: " + error);
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HispresencaPage.prototype.lista = function (datas) {
        var _this = this;
        this.authService.getAllReuniao()
            .subscribe(function (resul) {
            for (var i = 0; i < resul.length; i++) {
                if (datas == (_this.dataPipe.transform(resul[i].data, "dd/MM/yyyy"))) {
                    _this.id = resul[i].id;
                    var navigationExtras = {
                        queryParams: {
                            id: _this.id
                        }
                    };
                    _this.navCtrl.navigateForward(['/hislista'], navigationExtras);
                }
            }
        });
    };
    HispresencaPage.ctorParameters = function () { return [
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
        { type: _route_to_preload__WEBPACK_IMPORTED_MODULE_1__["AppRoutingPreloaderService"] }
    ]; };
    HispresencaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
            selector: 'app-hispresenca',
            template: __webpack_require__(/*! raw-loader!./hispresenca.page.html */ "./node_modules/raw-loader/index.js!./src/app/pwa-pages/historico/hispresenca/hispresenca.page.html"),
            styles: [__webpack_require__(/*! ./hispresenca.page.scss */ "./src/app/pwa-pages/historico/hispresenca/hispresenca.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            _route_to_preload__WEBPACK_IMPORTED_MODULE_1__["AppRoutingPreloaderService"]])
    ], HispresencaPage);
    return HispresencaPage;
}());



/***/ })

}]);
//# sourceMappingURL=pwa-pages-historico-hispresenca-hispresenca-module-es5.js.map