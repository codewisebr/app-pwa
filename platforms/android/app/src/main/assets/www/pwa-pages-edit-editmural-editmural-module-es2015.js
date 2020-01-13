(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pwa-pages-edit-editmural-editmural-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pwa-pages/edit/editmural/editmural.page.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pwa-pages/edit/editmural/editmural.page.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button></ion-back-button>\n        </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n<ion-content padding>\n\n  <ion-grid text-center >\n    <div class=\"box\">\n      <br><br><br>\n      <h2>Editar Mural</h2>\n      <form #form=\"ngForm\" (ngSubmit)=\"editar(form)\" method=\"POST\">\n        <br><br>\n        <ion-grid>\n          <ion-textarea placeholder=\"Digite algo\" name=\"texto\" type=\"text\" required=\"true\" [(ngModel)]=\"this.texto\"></ion-textarea>\n        </ion-grid>\n        <br>\n        <ion-grid>\n          <ion-button type=\"submit\" round expand=\"block\" color=\"danger\">Salvar</ion-button>\n        </ion-grid>\n      </form>\n    </div>\n  </ion-grid>\n</ion-content>"

/***/ }),

/***/ "./src/app/pwa-pages/edit/editmural/editmural.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/pwa-pages/edit/editmural/editmural.module.ts ***!
  \**************************************************************/
/*! exports provided: EditmuralPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditmuralPageModule", function() { return EditmuralPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _editmural_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./editmural.page */ "./src/app/pwa-pages/edit/editmural/editmural.page.ts");







const routes = [
    {
        path: '',
        component: _editmural_page__WEBPACK_IMPORTED_MODULE_6__["EditmuralPage"]
    }
];
let EditmuralPageModule = class EditmuralPageModule {
};
EditmuralPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_editmural_page__WEBPACK_IMPORTED_MODULE_6__["EditmuralPage"]]
    })
], EditmuralPageModule);



/***/ }),

/***/ "./src/app/pwa-pages/edit/editmural/editmural.page.scss":
/*!**************************************************************!*\
  !*** ./src/app/pwa-pages/edit/editmural/editmural.page.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: rgb(115,55,212);\n  --background: radial-gradient(circle, rgba(115,55,212,1) 0%, rgba(0,214,192,1) 100%);\n}\n\n.box {\n  background-color: white;\n  margin-left: auto;\n  margin-right: auto;\n  min-height: 400px;\n  max-width: 650px;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  border-radius: 7px !important;\n}\n\nion-textarea {\n  border-radius: 7px !important;\n  border: 1px solid #f1f1f1 !important;\n  --background: #f1f1f1;\n}\n\nion-grid {\n  padding-left: 30px;\n  padding-right: 30px;\n}\n\nion-button {\n  --border-radius: 7px;\n  padding-left: 30px;\n  padding-right: 30px;\n}\n\np {\n  color: #808080;\n}\n\nh2 {\n  color: grey;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NvZGV3aXNlL3VuaWFvdmlpL2FwcC1wd2Evc3JjL2FwcC9wd2EtcGFnZXMvZWRpdC9lZGl0bXVyYWwvZWRpdG11cmFsLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcHdhLXBhZ2VzL2VkaXQvZWRpdG11cmFsL2VkaXRtdXJhbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw2QkFBQTtFQUNBLG9GQUFBO0FDQ0Y7O0FEQ0E7RUFDRSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLDZCQUFBO0FDRUY7O0FEQUE7RUFDRSw2QkFBQTtFQUNBLG9DQUFBO0VBQ0EscUJBQUE7QUNHRjs7QURBQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUNHRjs7QURBQTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ0dGOztBRERBO0VBQ0UsY0FBQTtBQ0lGOztBREZBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0FDS0YiLCJmaWxlIjoic3JjL2FwcC9wd2EtcGFnZXMvZWRpdC9lZGl0bXVyYWwvZWRpdG11cmFsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xuICAtLWJhY2tncm91bmQ6IHJnYigxMTUsNTUsMjEyKTtcbiAgLS1iYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCByZ2JhKDExNSw1NSwyMTIsMSkgMCUsIHJnYmEoMCwyMTQsMTkyLDEpIDEwMCUpO1xufVxuLmJveHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1pbi1oZWlnaHQ6IDQwMHB4O1xuICBtYXgtd2lkdGg6IDY1MHB4O1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDdweCAhaW1wb3J0YW50O1xufVxuaW9uLXRleHRhcmVhe1xuICBib3JkZXItcmFkaXVzOiA3cHggIWltcG9ydGFudDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2YxZjFmMSAhaW1wb3J0YW50O1xuICAtLWJhY2tncm91bmQ6ICNmMWYxZjE7XG59XG5cbmlvbi1ncmlke1xuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG59XG5cbmlvbi1idXR0b257XG4gIC0tYm9yZGVyLXJhZGl1czogN3B4O1xuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG59XG5we1xuICBjb2xvcjojODA4MDgwXG59XG5oMntcbiAgY29sb3I6IGdyZXk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iLCJpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogcmdiKDExNSw1NSwyMTIpO1xuICAtLWJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsIHJnYmEoMTE1LDU1LDIxMiwxKSAwJSwgcmdiYSgwLDIxNCwxOTIsMSkgMTAwJSk7XG59XG5cbi5ib3gge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWluLWhlaWdodDogNDAwcHg7XG4gIG1heC13aWR0aDogNjUwcHg7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogN3B4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi10ZXh0YXJlYSB7XG4gIGJvcmRlci1yYWRpdXM6IDdweCAhaW1wb3J0YW50O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZjFmMWYxICFpbXBvcnRhbnQ7XG4gIC0tYmFja2dyb3VuZDogI2YxZjFmMTtcbn1cblxuaW9uLWdyaWQge1xuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG59XG5cbmlvbi1idXR0b24ge1xuICAtLWJvcmRlci1yYWRpdXM6IDdweDtcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xufVxuXG5wIHtcbiAgY29sb3I6ICM4MDgwODA7XG59XG5cbmgyIHtcbiAgY29sb3I6IGdyZXk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pwa-pages/edit/editmural/editmural.page.ts":
/*!************************************************************!*\
  !*** ./src/app/pwa-pages/edit/editmural/editmural.page.ts ***!
  \************************************************************/
/*! exports provided: EditmuralPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditmuralPage", function() { return EditmuralPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _route_to_preload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../route-to-preload */ "./src/app/route-to-preload.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");







let EditmuralPage = class EditmuralPage {
    constructor(authService, alertService, navCtrl, router, routingService) {
        this.authService = authService;
        this.alertService = alertService;
        this.navCtrl = navCtrl;
        this.router = router;
        this.routingService = routingService;
    }
    ngOnInit() { }
    ionViewDidEnter() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.routingService.preloadRoute('mural');
        });
    }
    ionViewWillEnter() {
        this.router.queryParams.subscribe(params => {
            this.id = params["id"];
        });
        this.showMural();
    }
    dismiss() {
        this.navCtrl.navigateForward('/mural');
    }
    showMural() {
        this.authService.getMural().subscribe(data => {
            for (let i = 0; i < data.length; i++) {
                if (this.id == data[i].id) {
                    this.texto = data[i].texto;
                    break;
                }
            }
        });
    }
    editar(form) {
        this.authService.updateMural(this.id, form.value.texto).subscribe(resul => {
            this.alertService.presentToast("Mural editado com sucesso!");
            this.dismiss();
        }, error => {
            this.alertService.presentToast('Preencha todos os campos!');
        });
    }
};
EditmuralPage.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _route_to_preload__WEBPACK_IMPORTED_MODULE_1__["AppRoutingPreloaderService"] }
];
EditmuralPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
        selector: 'app-editmural',
        template: __webpack_require__(/*! raw-loader!./editmural.page.html */ "./node_modules/raw-loader/index.js!./src/app/pwa-pages/edit/editmural/editmural.page.html"),
        styles: [__webpack_require__(/*! ./editmural.page.scss */ "./src/app/pwa-pages/edit/editmural/editmural.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
        _services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _route_to_preload__WEBPACK_IMPORTED_MODULE_1__["AppRoutingPreloaderService"]])
], EditmuralPage);



/***/ })

}]);
//# sourceMappingURL=pwa-pages-edit-editmural-editmural-module-es2015.js.map