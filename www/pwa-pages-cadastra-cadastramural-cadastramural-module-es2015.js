(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pwa-pages-cadastra-cadastramural-cadastramural-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pwa-pages/cadastra/cadastramural/cadastramural.page.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pwa-pages/cadastra/cadastramural/cadastramural.page.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n          <ion-back-button></ion-back-button>\n      </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content padding>\n  <ion-grid text-center >\n    <div class=\"box\">\n      <h2>Cadastrar Mural</h2>\n      <br><br>\n      <form #form=\"ngForm\" (ngSubmit)=\"cadastrar(form)\" method=\"POST\">\n        <ion-grid>\n          <ion-textarea ngModel placeholder=\"Digite algo\" name=\"texto\" type=\"text\" required=\"true\" ></ion-textarea>\n        </ion-grid>\n        <br>\n        <ion-grid>\n          <ion-button type=\"submit\" round expand=\"block\" color=\"danger\">Cadastrar</ion-button>\n        </ion-grid>\n      </form>\n    </div>\n  </ion-grid>\n</ion-content>"

/***/ }),

/***/ "./src/app/pwa-pages/cadastra/cadastramural/cadastramural.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pwa-pages/cadastra/cadastramural/cadastramural.module.ts ***!
  \**************************************************************************/
/*! exports provided: CadastramuralPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastramuralPageModule", function() { return CadastramuralPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _cadastramural_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cadastramural.page */ "./src/app/pwa-pages/cadastra/cadastramural/cadastramural.page.ts");







const routes = [
    {
        path: '',
        component: _cadastramural_page__WEBPACK_IMPORTED_MODULE_6__["CadastramuralPage"]
    }
];
let CadastramuralPageModule = class CadastramuralPageModule {
};
CadastramuralPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_cadastramural_page__WEBPACK_IMPORTED_MODULE_6__["CadastramuralPage"]]
    })
], CadastramuralPageModule);



/***/ }),

/***/ "./src/app/pwa-pages/cadastra/cadastramural/cadastramural.page.scss":
/*!**************************************************************************!*\
  !*** ./src/app/pwa-pages/cadastra/cadastramural/cadastramural.page.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: rgb(115,55,212);\n  --background: radial-gradient(circle, rgba(115,55,212,1) 0%, rgba(0,214,192,1) 100%);\n}\n\n.box {\n  background-color: white;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: auto;\n  margin-top: auto;\n  min-height: 400px;\n  max-width: 650px;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  border-radius: 7px !important;\n}\n\nion-textarea {\n  border-radius: 7px !important;\n  border: 1px solid #f1f1f1 !important;\n  --background: #f1f1f1;\n}\n\nion-grid {\n  padding-left: 30px;\n  padding-right: 30px;\n}\n\nion-button {\n  --border-radius: 7px;\n  padding-left: 30px;\n  padding-right: 30px;\n}\n\np {\n  color: #808080;\n}\n\nh2 {\n  color: grey;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NvZGV3aXNlL3VuaWFvdmlpL2FwcC1wd2Evc3JjL2FwcC9wd2EtcGFnZXMvY2FkYXN0cmEvY2FkYXN0cmFtdXJhbC9jYWRhc3RyYW11cmFsLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcHdhLXBhZ2VzL2NhZGFzdHJhL2NhZGFzdHJhbXVyYWwvY2FkYXN0cmFtdXJhbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw2QkFBQTtFQUNBLG9GQUFBO0FDQ0o7O0FERUU7RUFDRSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSw2QkFBQTtBQ0NKOztBRENFO0VBQ0UsNkJBQUE7RUFDQSxvQ0FBQTtFQUNBLHFCQUFBO0FDRUo7O0FEQ0U7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FDRUo7O0FEQ0U7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNFSjs7QURBRTtFQUNFLGNBQUE7QUNHSjs7QURERTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtBQ0lKIiwiZmlsZSI6InNyYy9hcHAvcHdhLXBhZ2VzL2NhZGFzdHJhL2NhZGFzdHJhbXVyYWwvY2FkYXN0cmFtdXJhbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcbiAgICAtLWJhY2tncm91bmQ6IHJnYigxMTUsNTUsMjEyKTtcbiAgICAtLWJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsIHJnYmEoMTE1LDU1LDIxMiwxKSAwJSwgcmdiYSgwLDIxNCwxOTIsMSkgMTAwJSk7XG4gIH1cbiAgXG4gIC5ib3h7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbi1ib3R0b206IGF1dG87XG4gICAgbWFyZ2luLXRvcDogYXV0bztcbiAgICBtaW4taGVpZ2h0OiA0MDBweDtcbiAgICBtYXgtd2lkdGg6IDY1MHB4O1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDdweCAhaW1wb3J0YW50O1xuICB9XG4gIGlvbi10ZXh0YXJlYXtcbiAgICBib3JkZXItcmFkaXVzOiA3cHggIWltcG9ydGFudDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZjFmMWYxICFpbXBvcnRhbnQ7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZjFmMWYxO1xuICB9XG4gIFxuICBpb24tZ3JpZHtcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMzBweDtcbiAgfVxuICBcbiAgaW9uLWJ1dHRvbntcbiAgICAtLWJvcmRlci1yYWRpdXM6IDdweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMzBweDtcbiAgfVxuICBwe1xuICAgIGNvbG9yOiM4MDgwODBcbiAgfVxuICBoMntcbiAgICBjb2xvcjogZ3JleTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH0iLCJpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogcmdiKDExNSw1NSwyMTIpO1xuICAtLWJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsIHJnYmEoMTE1LDU1LDIxMiwxKSAwJSwgcmdiYSgwLDIxNCwxOTIsMSkgMTAwJSk7XG59XG5cbi5ib3gge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcbiAgbWFyZ2luLXRvcDogYXV0bztcbiAgbWluLWhlaWdodDogNDAwcHg7XG4gIG1heC13aWR0aDogNjUwcHg7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogN3B4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi10ZXh0YXJlYSB7XG4gIGJvcmRlci1yYWRpdXM6IDdweCAhaW1wb3J0YW50O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZjFmMWYxICFpbXBvcnRhbnQ7XG4gIC0tYmFja2dyb3VuZDogI2YxZjFmMTtcbn1cblxuaW9uLWdyaWQge1xuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG59XG5cbmlvbi1idXR0b24ge1xuICAtLWJvcmRlci1yYWRpdXM6IDdweDtcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xufVxuXG5wIHtcbiAgY29sb3I6ICM4MDgwODA7XG59XG5cbmgyIHtcbiAgY29sb3I6IGdyZXk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pwa-pages/cadastra/cadastramural/cadastramural.page.ts":
/*!************************************************************************!*\
  !*** ./src/app/pwa-pages/cadastra/cadastramural/cadastramural.page.ts ***!
  \************************************************************************/
/*! exports provided: CadastramuralPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastramuralPage", function() { return CadastramuralPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_services_global_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/global.service */ "./src/app/services/global.service.ts");
/* harmony import */ var _route_to_preload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../route-to-preload */ "./src/app/route-to-preload.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");







let CadastramuralPage = class CadastramuralPage {
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
            yield this.routingService.preloadRoute('mural');
        });
    }
    dismiss() {
        this.navCtrl.navigateForward('/mural');
    }
    cadastrar(form) {
        this.authService.mural(this.id, form.value.texto).subscribe(resul => {
            this.dismiss();
            this.alertService.presentToast("Mural criado com sucesso!");
        }, error => {
            this.alertService.presentToast("Preencha todos os campos!");
        });
    }
};
CadastramuralPage.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _route_to_preload__WEBPACK_IMPORTED_MODULE_2__["AppRoutingPreloaderService"] },
    { type: src_app_services_global_service__WEBPACK_IMPORTED_MODULE_1__["GlobalService"] }
];
CadastramuralPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
        selector: 'app-cadastramural',
        template: __webpack_require__(/*! raw-loader!./cadastramural.page.html */ "./node_modules/raw-loader/index.js!./src/app/pwa-pages/cadastra/cadastramural/cadastramural.page.html"),
        styles: [__webpack_require__(/*! ./cadastramural.page.scss */ "./src/app/pwa-pages/cadastra/cadastramural/cadastramural.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
        _services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
        _route_to_preload__WEBPACK_IMPORTED_MODULE_2__["AppRoutingPreloaderService"],
        src_app_services_global_service__WEBPACK_IMPORTED_MODULE_1__["GlobalService"]])
], CadastramuralPage);



/***/ })

}]);
//# sourceMappingURL=pwa-pages-cadastra-cadastramural-cadastramural-module-es2015.js.map