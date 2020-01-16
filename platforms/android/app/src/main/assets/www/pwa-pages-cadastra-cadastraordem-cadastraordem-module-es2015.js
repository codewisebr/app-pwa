(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pwa-pages-cadastra-cadastraordem-cadastraordem-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pwa-pages/cadastra/cadastraordem/cadastraordem.page.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pwa-pages/cadastra/cadastraordem/cadastraordem.page.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button ></ion-back-button>\n        </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n<ion-content padding>\n  <ion-grid text-center >\n    <div class=\"box\">\n      <h2>Cadastrar Ordem</h2>\n      <form #form=\"ngForm\" (ngSubmit)=\"cadastrar(form)\" method=\"POST\">\n        <ion-grid>\n          <ion-input ngModel placeholder=\"Ordem\" name=\"ordem\" type=\"text\" required=\"true\"></ion-input>\n        </ion-grid>\n        <ion-grid>\n          <ion-list lines=\"none\">\n            <ion-radio-group ngModel name=\"nivel\">\n              <ion-list-header>\n                <ion-label>Nível</ion-label>\n              </ion-list-header>\n              <ion-item>\n                <ion-label>Aprendiz</ion-label>\n                <ion-radio value=\"1\" slot=\"start\" checked></ion-radio>\n              </ion-item>\n              <ion-item>\n                <ion-label>Companheiro</ion-label>\n                <ion-radio value=\"2\"slot=\"start\"></ion-radio>\n              </ion-item>\n              <ion-item>\n                <ion-label>Mestre</ion-label>\n                <ion-radio value=\"3\"slot=\"start\"></ion-radio>\n              </ion-item>\n            </ion-radio-group>\n          </ion-list>\n          <ion-button type=\"submit\" round expand=\"block\" color=\"danger\">Cadastrar</ion-button>\n        </ion-grid>\n      </form>\n    </div>\n  </ion-grid>\n</ion-content>"

/***/ }),

/***/ "./src/app/pwa-pages/cadastra/cadastraordem/cadastraordem.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pwa-pages/cadastra/cadastraordem/cadastraordem.module.ts ***!
  \**************************************************************************/
/*! exports provided: CadastraordemPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastraordemPageModule", function() { return CadastraordemPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _cadastraordem_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cadastraordem.page */ "./src/app/pwa-pages/cadastra/cadastraordem/cadastraordem.page.ts");







const routes = [
    {
        path: '',
        component: _cadastraordem_page__WEBPACK_IMPORTED_MODULE_6__["CadastraordemPage"]
    }
];
let CadastraordemPageModule = class CadastraordemPageModule {
};
CadastraordemPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_cadastraordem_page__WEBPACK_IMPORTED_MODULE_6__["CadastraordemPage"]]
    })
], CadastraordemPageModule);



/***/ }),

/***/ "./src/app/pwa-pages/cadastra/cadastraordem/cadastraordem.page.scss":
/*!**************************************************************************!*\
  !*** ./src/app/pwa-pages/cadastra/cadastraordem/cadastraordem.page.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: rgb(115,55,212);\n  --background: radial-gradient(circle, rgba(115,55,212,1) 0%, rgba(0,214,192,1) 100%);\n}\n\n.box {\n  background-color: white;\n  margin-left: auto;\n  margin-right: auto;\n  min-height: 300px;\n  max-width: 650px;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  border-radius: 7px !important;\n}\n\nion-input {\n  border-radius: 7px !important;\n  border: 1px solid #f1f1f1 !important;\n  text-align: justify;\n  --background: #f1f1f1;\n}\n\nion-grid {\n  padding-left: 30px;\n  padding-right: 30px;\n}\n\nion-button {\n  --border-radius: 7px;\n  padding-left: 30px;\n  padding-right: 30px;\n}\n\np {\n  color: #808080;\n}\n\nh2 {\n  color: grey;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NvZGV3aXNlL3VuaWFvdmlpL2FwcC1wd2Evc3JjL2FwcC9wd2EtcGFnZXMvY2FkYXN0cmEvY2FkYXN0cmFvcmRlbS9jYWRhc3RyYW9yZGVtLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcHdhLXBhZ2VzL2NhZGFzdHJhL2NhZGFzdHJhb3JkZW0vY2FkYXN0cmFvcmRlbS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw2QkFBQTtFQUNBLG9GQUFBO0FDQ0Y7O0FEQ0E7RUFDRSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLDZCQUFBO0FDRUY7O0FEQUE7RUFDRSw2QkFBQTtFQUNBLG9DQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQ0dGOztBREFBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQ0dGOztBREFBO0VBQ0Usb0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDR0Y7O0FEREE7RUFDRSxjQUFBO0FDSUY7O0FERkE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUNLRiIsImZpbGUiOiJzcmMvYXBwL3B3YS1wYWdlcy9jYWRhc3RyYS9jYWRhc3RyYW9yZGVtL2NhZGFzdHJhb3JkZW0ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XG4gIC0tYmFja2dyb3VuZDogcmdiKDExNSw1NSwyMTIpO1xuICAtLWJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsIHJnYmEoMTE1LDU1LDIxMiwxKSAwJSwgcmdiYSgwLDIxNCwxOTIsMSkgMTAwJSk7XG59XG4uYm94e1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWluLWhlaWdodDogMzAwcHg7XG4gIG1heC13aWR0aDogNjUwcHg7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogN3B4ICFpbXBvcnRhbnQ7XG59XG5pb24taW5wdXR7XG4gIGJvcmRlci1yYWRpdXM6IDdweCAhaW1wb3J0YW50O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZjFmMWYxICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIC0tYmFja2dyb3VuZDogI2YxZjFmMTtcbn1cblxuaW9uLWdyaWR7XG4gIHBhZGRpbmctbGVmdDogMzBweDtcbiAgcGFkZGluZy1yaWdodDogMzBweDtcbn1cblxuaW9uLWJ1dHRvbntcbiAgLS1ib3JkZXItcmFkaXVzOiA3cHg7XG4gIHBhZGRpbmctbGVmdDogMzBweDtcbiAgcGFkZGluZy1yaWdodDogMzBweDtcbn1cbnB7XG4gIGNvbG9yOiM4MDgwODBcbn1cbmgye1xuICBjb2xvcjogZ3JleTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuIiwiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHJnYigxMTUsNTUsMjEyKTtcbiAgLS1iYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCByZ2JhKDExNSw1NSwyMTIsMSkgMCUsIHJnYmEoMCwyMTQsMTkyLDEpIDEwMCUpO1xufVxuXG4uYm94IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1pbi1oZWlnaHQ6IDMwMHB4O1xuICBtYXgtd2lkdGg6IDY1MHB4O1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDdweCAhaW1wb3J0YW50O1xufVxuXG5pb24taW5wdXQge1xuICBib3JkZXItcmFkaXVzOiA3cHggIWltcG9ydGFudDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2YxZjFmMSAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAtLWJhY2tncm91bmQ6ICNmMWYxZjE7XG59XG5cbmlvbi1ncmlkIHtcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xufVxuXG5pb24tYnV0dG9uIHtcbiAgLS1ib3JkZXItcmFkaXVzOiA3cHg7XG4gIHBhZGRpbmctbGVmdDogMzBweDtcbiAgcGFkZGluZy1yaWdodDogMzBweDtcbn1cblxucCB7XG4gIGNvbG9yOiAjODA4MDgwO1xufVxuXG5oMiB7XG4gIGNvbG9yOiBncmV5O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/pwa-pages/cadastra/cadastraordem/cadastraordem.page.ts":
/*!************************************************************************!*\
  !*** ./src/app/pwa-pages/cadastra/cadastraordem/cadastraordem.page.ts ***!
  \************************************************************************/
/*! exports provided: CadastraordemPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastraordemPage", function() { return CadastraordemPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_services_global_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/global.service */ "./src/app/services/global.service.ts");
/* harmony import */ var _route_to_preload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../route-to-preload */ "./src/app/route-to-preload.ts");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");







let CadastraordemPage = class CadastraordemPage {
    constructor(authService, alertService, navCtrl, routingService, global) {
        this.authService = authService;
        this.alertService = alertService;
        this.navCtrl = navCtrl;
        this.routingService = routingService;
        this.global = global;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.id = this.global.user_id;
    }
    ionViewDidEnter() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.routingService.preloadRoute('adminordem');
        });
    }
    dismiss() {
        this.navCtrl.navigateForward('/adminordem');
    }
    cadastrar(form) {
        this.authService.ordem(form.value.ordem, this.id, form.value.nivel).subscribe(resul => {
            this.dismiss();
            this.alertService.presentToast("Ordem cadastrada com sucesso!");
        }, error => {
            this.alertService.presentToast("Preencha todos os campos!");
        });
    }
};
CadastraordemPage.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: _route_to_preload__WEBPACK_IMPORTED_MODULE_2__["AppRoutingPreloaderService"] },
    { type: src_app_services_global_service__WEBPACK_IMPORTED_MODULE_1__["GlobalService"] }
];
CadastraordemPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
        selector: 'app-cadastraordem',
        template: __webpack_require__(/*! raw-loader!./cadastraordem.page.html */ "./node_modules/raw-loader/index.js!./src/app/pwa-pages/cadastra/cadastraordem/cadastraordem.page.html"),
        styles: [__webpack_require__(/*! ./cadastraordem.page.scss */ "./src/app/pwa-pages/cadastra/cadastraordem/cadastraordem.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
        _services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"],
        _route_to_preload__WEBPACK_IMPORTED_MODULE_2__["AppRoutingPreloaderService"],
        src_app_services_global_service__WEBPACK_IMPORTED_MODULE_1__["GlobalService"]])
], CadastraordemPage);



/***/ })

}]);
//# sourceMappingURL=pwa-pages-cadastra-cadastraordem-cadastraordem-module-es2015.js.map