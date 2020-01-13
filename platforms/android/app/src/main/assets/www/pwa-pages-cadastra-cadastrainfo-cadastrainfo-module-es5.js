(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pwa-pages-cadastra-cadastrainfo-cadastrainfo-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pwa-pages/cadastra/cadastrainfo/cadastrainfo.page.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pwa-pages/cadastra/cadastrainfo/cadastrainfo.page.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button></ion-back-button>\n        </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n<ion-content padding>\n  <ion-grid text-center >\n    <div class=\"box\">\n      <h2>Cadastrar Informativo</h2>\n      <form #form=\"ngForm\" (ngSubmit)=\"cadastrar(form)\" method=\"POST\">\n        <ion-grid>\n          <ion-input ngModel placeholder=\"Informativo\" name=\"info\" type=\"text\" required=\"true\"></ion-input>\n        </ion-grid>\n        <ion-grid>\n          <ion-list lines=\"none\">\n            <ion-radio-group ngModel name=\"nivel\">\n              <ion-list-header>\n                <ion-label>Nível</ion-label>\n              </ion-list-header>\n              <ion-item>\n                <ion-label>Aprendiz</ion-label>\n                <ion-radio value=\"1\" slot=\"start\" checked></ion-radio>\n              </ion-item>\n              <ion-item>\n                <ion-label>Companheiro</ion-label>\n                <ion-radio value=\"2\"slot=\"start\"></ion-radio>\n              </ion-item>\n              <ion-item>\n                <ion-label>Mestre</ion-label>\n                <ion-radio value=\"3\"slot=\"start\"></ion-radio>\n              </ion-item>\n            </ion-radio-group>\n          </ion-list>\n          <ion-button type=\"submit\" round expand=\"block\" color=\"danger\">Cadastrar</ion-button>\n        </ion-grid>\n      </form>\n    </div>\n  </ion-grid>\n</ion-content>"

/***/ }),

/***/ "./src/app/pwa-pages/cadastra/cadastrainfo/cadastrainfo.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/pwa-pages/cadastra/cadastrainfo/cadastrainfo.module.ts ***!
  \************************************************************************/
/*! exports provided: CadastrainfoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastrainfoPageModule", function() { return CadastrainfoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _cadastrainfo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cadastrainfo.page */ "./src/app/pwa-pages/cadastra/cadastrainfo/cadastrainfo.page.ts");







var routes = [
    {
        path: '',
        component: _cadastrainfo_page__WEBPACK_IMPORTED_MODULE_6__["CadastrainfoPage"]
    }
];
var CadastrainfoPageModule = /** @class */ (function () {
    function CadastrainfoPageModule() {
    }
    CadastrainfoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_cadastrainfo_page__WEBPACK_IMPORTED_MODULE_6__["CadastrainfoPage"]]
        })
    ], CadastrainfoPageModule);
    return CadastrainfoPageModule;
}());



/***/ }),

/***/ "./src/app/pwa-pages/cadastra/cadastrainfo/cadastrainfo.page.scss":
/*!************************************************************************!*\
  !*** ./src/app/pwa-pages/cadastra/cadastrainfo/cadastrainfo.page.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: rgb(115,55,212);\n  --background: radial-gradient(circle, rgba(115,55,212,1) 0%, rgba(0,214,192,1) 100%);\n}\n\n.box {\n  background-color: white;\n  margin-left: auto;\n  margin-right: auto;\n  min-height: 300px;\n  max-width: 650px;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  border-radius: 7px !important;\n}\n\nion-input {\n  border-radius: 7px !important;\n  border: 1px solid #f1f1f1 !important;\n  text-align: justify;\n  --background: #f1f1f1;\n}\n\nion-grid {\n  padding-left: 30px;\n  padding-right: 30px;\n}\n\nion-button {\n  --border-radius: 7px;\n  padding-left: 30px;\n  padding-right: 30px;\n}\n\np {\n  color: #808080;\n}\n\nh2 {\n  color: grey;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NvZGV3aXNlL3VuaWFvdmlpL2FwcC1wd2Evc3JjL2FwcC9wd2EtcGFnZXMvY2FkYXN0cmEvY2FkYXN0cmFpbmZvL2NhZGFzdHJhaW5mby5wYWdlLnNjc3MiLCJzcmMvYXBwL3B3YS1wYWdlcy9jYWRhc3RyYS9jYWRhc3RyYWluZm8vY2FkYXN0cmFpbmZvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDZCQUFBO0VBQ0Esb0ZBQUE7QUNDSjs7QURFRTtFQUNFLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsNkJBQUE7QUNDSjs7QURDRTtFQUNFLDZCQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FDRUo7O0FEQ0U7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FDRUo7O0FEQ0U7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNFSjs7QURBRTtFQUNFLGNBQUE7QUNHSjs7QURERTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtBQ0lKIiwiZmlsZSI6InNyYy9hcHAvcHdhLXBhZ2VzL2NhZGFzdHJhL2NhZGFzdHJhaW5mby9jYWRhc3RyYWluZm8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XG4gICAgLS1iYWNrZ3JvdW5kOiByZ2IoMTE1LDU1LDIxMik7XG4gICAgLS1iYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCByZ2JhKDExNSw1NSwyMTIsMSkgMCUsIHJnYmEoMCwyMTQsMTkyLDEpIDEwMCUpO1xuICB9XG4gIFxuICAuYm94e1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBtaW4taGVpZ2h0OiAzMDBweDtcbiAgICBtYXgtd2lkdGg6IDY1MHB4O1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDdweCAhaW1wb3J0YW50O1xuICB9XG4gIGlvbi1pbnB1dHtcbiAgICBib3JkZXItcmFkaXVzOiA3cHggIWltcG9ydGFudDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZjFmMWYxICFpbXBvcnRhbnQ7XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICAtLWJhY2tncm91bmQ6ICNmMWYxZjE7XG4gIH1cbiAgXG4gIGlvbi1ncmlke1xuICAgIHBhZGRpbmctbGVmdDogMzBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xuICB9XG4gIFxuICBpb24tYnV0dG9ue1xuICAgIC0tYm9yZGVyLXJhZGl1czogN3B4O1xuICAgIHBhZGRpbmctbGVmdDogMzBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xuICB9XG4gIHB7XG4gICAgY29sb3I6IzgwODA4MFxuICB9XG4gIGgye1xuICAgIGNvbG9yOiBncmV5O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfSIsImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoMTE1LDU1LDIxMik7XG4gIC0tYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgcmdiYSgxMTUsNTUsMjEyLDEpIDAlLCByZ2JhKDAsMjE0LDE5MiwxKSAxMDAlKTtcbn1cblxuLmJveCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtaW4taGVpZ2h0OiAzMDBweDtcbiAgbWF4LXdpZHRoOiA2NTBweDtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA3cHggIWltcG9ydGFudDtcbn1cblxuaW9uLWlucHV0IHtcbiAgYm9yZGVyLXJhZGl1czogN3B4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmMWYxZjEgIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgLS1iYWNrZ3JvdW5kOiAjZjFmMWYxO1xufVxuXG5pb24tZ3JpZCB7XG4gIHBhZGRpbmctbGVmdDogMzBweDtcbiAgcGFkZGluZy1yaWdodDogMzBweDtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gIC0tYm9yZGVyLXJhZGl1czogN3B4O1xuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG59XG5cbnAge1xuICBjb2xvcjogIzgwODA4MDtcbn1cblxuaDIge1xuICBjb2xvcjogZ3JleTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pwa-pages/cadastra/cadastrainfo/cadastrainfo.page.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pwa-pages/cadastra/cadastrainfo/cadastrainfo.page.ts ***!
  \**********************************************************************/
/*! exports provided: CadastrainfoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastrainfoPage", function() { return CadastrainfoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _route_to_preload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../route-to-preload */ "./src/app/route-to-preload.ts");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");






var CadastrainfoPage = /** @class */ (function () {
    function CadastrainfoPage(authService, navCtrl, routingService, alertService) {
        this.authService = authService;
        this.navCtrl = navCtrl;
        this.routingService = routingService;
        this.alertService = alertService;
    }
    CadastrainfoPage.prototype.ngOnInit = function () {
    };
    CadastrainfoPage.prototype.ionViewDidEnter = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.routingService.preloadRoute('admininfo')];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CadastrainfoPage.prototype.dismiss = function () {
        this.navCtrl.navigateForward('/admininfo');
    };
    CadastrainfoPage.prototype.cadastrar = function (form) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.authService.user().subscribe(function (data) {
                    _this.authService.informativo(form.value.info, data.id, form.value.nivel).subscribe(function (resul) {
                        _this.dismiss();
                        _this.alertService.presentToast("Informativo cadastrada com sucesso!");
                    }, function (error) {
                        _this.alertService.presentToast('Preencha todos os campos!');
                    });
                });
                return [2 /*return*/];
            });
        });
    };
    CadastrainfoPage.ctorParameters = function () { return [
        { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
        { type: _route_to_preload__WEBPACK_IMPORTED_MODULE_1__["AppRoutingPreloaderService"] },
        { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"] }
    ]; };
    CadastrainfoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
            selector: 'app-cadastrainfo',
            template: __webpack_require__(/*! raw-loader!./cadastrainfo.page.html */ "./node_modules/raw-loader/index.js!./src/app/pwa-pages/cadastra/cadastrainfo/cadastrainfo.page.html"),
            styles: [__webpack_require__(/*! ./cadastrainfo.page.scss */ "./src/app/pwa-pages/cadastra/cadastrainfo/cadastrainfo.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
            _route_to_preload__WEBPACK_IMPORTED_MODULE_1__["AppRoutingPreloaderService"],
            _services_alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"]])
    ], CadastrainfoPage);
    return CadastrainfoPage;
}());



/***/ })

}]);
//# sourceMappingURL=pwa-pages-cadastra-cadastrainfo-cadastrainfo-module-es5.js.map