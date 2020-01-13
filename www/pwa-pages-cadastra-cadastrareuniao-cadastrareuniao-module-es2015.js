(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pwa-pages-cadastra-cadastrareuniao-cadastrareuniao-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pwa-pages/cadastra/cadastrareuniao/cadastrareuniao.page.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pwa-pages/cadastra/cadastrareuniao/cadastrareuniao.page.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n          <ion-back-button ></ion-back-button>\n      </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n    <ion-grid text-center>\n    </ion-grid>\n    <br>\n    <ion-grid text-center >\n      <div class=\"box\">\n        <h2>Cadastrar Nova Reunião</h2>\n        <form #form=\"ngForm\" (ngSubmit)=\"cadastrar(form)\" method=\"POST\">\n          <ion-grid>\n            <ion-datetime ngModel name=\"data\" placeholder=\"Data da Reunião\" display-format=\"DD/MM/YYYY\" required=\"true\"></ion-datetime>\n          </ion-grid>\n          <br>\n          <ion-grid>\n            <ion-button type=\"submit\" round expand=\"block\" color=\"danger\">Cadastrar</ion-button>\n          </ion-grid>\n        </form>\n      </div>\n    </ion-grid>\n</ion-content>"

/***/ }),

/***/ "./src/app/pwa-pages/cadastra/cadastrareuniao/cadastrareuniao.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pwa-pages/cadastra/cadastrareuniao/cadastrareuniao.module.ts ***!
  \******************************************************************************/
/*! exports provided: CadastrareuniaoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastrareuniaoPageModule", function() { return CadastrareuniaoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _cadastrareuniao_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cadastrareuniao.page */ "./src/app/pwa-pages/cadastra/cadastrareuniao/cadastrareuniao.page.ts");







const routes = [
    {
        path: '',
        component: _cadastrareuniao_page__WEBPACK_IMPORTED_MODULE_6__["CadastrareuniaoPage"]
    }
];
let CadastrareuniaoPageModule = class CadastrareuniaoPageModule {
};
CadastrareuniaoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_cadastrareuniao_page__WEBPACK_IMPORTED_MODULE_6__["CadastrareuniaoPage"]]
    })
], CadastrareuniaoPageModule);



/***/ }),

/***/ "./src/app/pwa-pages/cadastra/cadastrareuniao/cadastrareuniao.page.scss":
/*!******************************************************************************!*\
  !*** ./src/app/pwa-pages/cadastra/cadastrareuniao/cadastrareuniao.page.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: rgb(115,55,212);\n  --background: radial-gradient(circle, rgba(115,55,212,1) 0%, rgba(0,214,192,1) 100%);\n}\n\n.box {\n  background-color: white;\n  margin-left: auto;\n  margin-right: auto;\n  min-height: 200px;\n  max-width: 650px;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  border-radius: 7px !important;\n}\n\nion-input {\n  border-radius: 7px !important;\n  border: 1px solid #f1f1f1 !important;\n  text-align: justify;\n  --background: #f1f1f1;\n}\n\nion-grid {\n  padding-left: 30px;\n  padding-right: 30px;\n}\n\nion-button {\n  --border-radius: 7px;\n  padding-left: 30px;\n  padding-right: 30px;\n}\n\np {\n  color: #808080;\n}\n\nh2 {\n  color: grey;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NvZGV3aXNlL3VuaWFvdmlpL2FwcC1wd2Evc3JjL2FwcC9wd2EtcGFnZXMvY2FkYXN0cmEvY2FkYXN0cmFyZXVuaWFvL2NhZGFzdHJhcmV1bmlhby5wYWdlLnNjc3MiLCJzcmMvYXBwL3B3YS1wYWdlcy9jYWRhc3RyYS9jYWRhc3RyYXJldW5pYW8vY2FkYXN0cmFyZXVuaWFvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDZCQUFBO0VBQ0Esb0ZBQUE7QUNDSjs7QURDRTtFQUNFLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsNkJBQUE7QUNFSjs7QURBRTtFQUNFLDZCQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FDR0o7O0FEQUU7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FDR0o7O0FEQUU7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNHSjs7QURERTtFQUNFLGNBQUE7QUNJSjs7QURGRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtBQ0tKIiwiZmlsZSI6InNyYy9hcHAvcHdhLXBhZ2VzL2NhZGFzdHJhL2NhZGFzdHJhcmV1bmlhby9jYWRhc3RyYXJldW5pYW8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XG4gICAgLS1iYWNrZ3JvdW5kOiByZ2IoMTE1LDU1LDIxMik7XG4gICAgLS1iYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCByZ2JhKDExNSw1NSwyMTIsMSkgMCUsIHJnYmEoMCwyMTQsMTkyLDEpIDEwMCUpO1xuICB9XG4gIC5ib3h7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIG1pbi1oZWlnaHQ6IDIwMHB4O1xuICAgIG1heC13aWR0aDogNjUwcHg7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogN3B4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgaW9uLWlucHV0e1xuICAgIGJvcmRlci1yYWRpdXM6IDdweCAhaW1wb3J0YW50O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmMWYxZjEgIWltcG9ydGFudDtcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgIC0tYmFja2dyb3VuZDogI2YxZjFmMTtcbiAgfVxuICBcbiAgaW9uLWdyaWR7XG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG4gIH1cbiAgXG4gIGlvbi1idXR0b257XG4gICAgLS1ib3JkZXItcmFkaXVzOiA3cHg7XG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG4gIH1cbiAgcHtcbiAgICBjb2xvcjojODA4MDgwXG4gIH1cbiAgaDJ7XG4gICAgY29sb3I6IGdyZXk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gICIsImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoMTE1LDU1LDIxMik7XG4gIC0tYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgcmdiYSgxMTUsNTUsMjEyLDEpIDAlLCByZ2JhKDAsMjE0LDE5MiwxKSAxMDAlKTtcbn1cblxuLmJveCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtaW4taGVpZ2h0OiAyMDBweDtcbiAgbWF4LXdpZHRoOiA2NTBweDtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA3cHggIWltcG9ydGFudDtcbn1cblxuaW9uLWlucHV0IHtcbiAgYm9yZGVyLXJhZGl1czogN3B4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmMWYxZjEgIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgLS1iYWNrZ3JvdW5kOiAjZjFmMWYxO1xufVxuXG5pb24tZ3JpZCB7XG4gIHBhZGRpbmctbGVmdDogMzBweDtcbiAgcGFkZGluZy1yaWdodDogMzBweDtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gIC0tYm9yZGVyLXJhZGl1czogN3B4O1xuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG59XG5cbnAge1xuICBjb2xvcjogIzgwODA4MDtcbn1cblxuaDIge1xuICBjb2xvcjogZ3JleTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pwa-pages/cadastra/cadastrareuniao/cadastrareuniao.page.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pwa-pages/cadastra/cadastrareuniao/cadastrareuniao.page.ts ***!
  \****************************************************************************/
/*! exports provided: CadastrareuniaoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastrareuniaoPage", function() { return CadastrareuniaoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_route_to_preload__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/route-to-preload */ "./src/app/route-to-preload.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");






let CadastrareuniaoPage = class CadastrareuniaoPage {
    constructor(authService, alertService, navCtrl, routingService) {
        this.authService = authService;
        this.alertService = alertService;
        this.navCtrl = navCtrl;
        this.routingService = routingService;
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.routingService.preloadRoute('adminpresenca');
        });
    }
    dismiss() {
        this.navCtrl.navigateForward('/adminpresenca');
    }
    cadastrar(form) {
        this.auxdata = form.value.data;
        this.data = this.auxdata.split('T')[0];
        this.authService.createReuniao(this.data).subscribe(data => {
            this.alertService.presentToast(data);
            this.dismiss();
        });
    }
};
CadastrareuniaoPage.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: src_app_route_to_preload__WEBPACK_IMPORTED_MODULE_4__["AppRoutingPreloaderService"] }
];
CadastrareuniaoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cadastrareuniao',
        template: __webpack_require__(/*! raw-loader!./cadastrareuniao.page.html */ "./node_modules/raw-loader/index.js!./src/app/pwa-pages/cadastra/cadastrareuniao/cadastrareuniao.page.html"),
        styles: [__webpack_require__(/*! ./cadastrareuniao.page.scss */ "./src/app/pwa-pages/cadastra/cadastrareuniao/cadastrareuniao.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
        src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
        src_app_route_to_preload__WEBPACK_IMPORTED_MODULE_4__["AppRoutingPreloaderService"]])
], CadastrareuniaoPage);



/***/ })

}]);
//# sourceMappingURL=pwa-pages-cadastra-cadastrareuniao-cadastrareuniao-module-es2015.js.map