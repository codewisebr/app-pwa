(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pwa-pages-edit-editinfo-editinfo-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pwa-pages/edit/editinfo/editinfo.page.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pwa-pages/edit/editinfo/editinfo.page.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button></ion-back-button>\n        </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n<ion-content padding>\n\n  <ion-grid text-center >\n    <div class=\"box\">\n      <h2>Editar Informativo</h2>\n      <form #form=\"ngForm\" (ngSubmit)=\"editar(form)\" method=\"POST\">\n        <ion-grid>\n          <ion-input type=\"text\" required=\"true\" name=\"novo\" [(ngModel)]=\"this.inform\"></ion-input>\n        </ion-grid>\n        <ion-grid>\n          <ion-list lines=\"none\">\n            <ion-radio-group ngModel name=\"nivel\">\n              <ion-list-header>\n                <ion-label>Nível</ion-label>\n              </ion-list-header>\n              <ion-item>\n                <ion-label>Aprendiz</ion-label>\n                <ion-radio value=\"1\" slot=\"start\" [checked]=\"checked1\"></ion-radio>\n              </ion-item>\n              <ion-item>\n                <ion-label>Companheiro</ion-label>\n                <ion-radio value=\"2\"slot=\"start\" [checked]=\"checked2\"></ion-radio>\n              </ion-item>\n              <ion-item>\n                <ion-label>Mestre</ion-label>\n                <ion-radio value=\"3\"slot=\"start\" [checked]=\"checked3\"></ion-radio>\n              </ion-item>\n            </ion-radio-group>\n          </ion-list>\n          <ion-button type=\"submit\" round expand=\"block\" color=\"danger\">Salvar</ion-button>\n        </ion-grid>\n      </form>\n    </div>\n  </ion-grid>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pwa-pages/edit/editinfo/editinfo.module.ts":
/*!************************************************************!*\
  !*** ./src/app/pwa-pages/edit/editinfo/editinfo.module.ts ***!
  \************************************************************/
/*! exports provided: EditinfoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditinfoPageModule", function() { return EditinfoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _editinfo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./editinfo.page */ "./src/app/pwa-pages/edit/editinfo/editinfo.page.ts");







const routes = [
    {
        path: '',
        component: _editinfo_page__WEBPACK_IMPORTED_MODULE_6__["EditinfoPage"]
    }
];
let EditinfoPageModule = class EditinfoPageModule {
};
EditinfoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_editinfo_page__WEBPACK_IMPORTED_MODULE_6__["EditinfoPage"]]
    })
], EditinfoPageModule);



/***/ }),

/***/ "./src/app/pwa-pages/edit/editinfo/editinfo.page.scss":
/*!************************************************************!*\
  !*** ./src/app/pwa-pages/edit/editinfo/editinfo.page.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: rgb(115,55,212);\n  --background: radial-gradient(circle, rgba(115,55,212,1) 0%, rgba(0,214,192,1) 100%);\n}\n\n.box {\n  background-color: white;\n  margin-left: auto;\n  margin-right: auto;\n  min-height: 300px;\n  max-width: 650px;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  border-radius: 7px !important;\n}\n\nion-input {\n  border-radius: 7px !important;\n  border: 1px solid #f1f1f1 !important;\n  text-align: justify;\n  --background: #f1f1f1;\n}\n\nion-grid {\n  padding-left: 30px;\n  padding-right: 30px;\n}\n\nion-button {\n  --border-radius: 7px;\n  padding-left: 30px;\n  padding-right: 30px;\n}\n\np {\n  color: #808080;\n}\n\nh2 {\n  color: grey;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NvZGV3aXNlL3VuaWFvdmlpL2FwcC1wd2Evc3JjL2FwcC9wd2EtcGFnZXMvZWRpdC9lZGl0aW5mby9lZGl0aW5mby5wYWdlLnNjc3MiLCJzcmMvYXBwL3B3YS1wYWdlcy9lZGl0L2VkaXRpbmZvL2VkaXRpbmZvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDZCQUFBO0VBQ0Esb0ZBQUE7QUNDSjs7QURDRTtFQUNFLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsNkJBQUE7QUNFSjs7QURBRTtFQUNFLDZCQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FDR0o7O0FEQUU7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FDR0o7O0FEQUU7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNHSjs7QURERTtFQUNFLGNBQUE7QUNJSjs7QURGRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtBQ0tKIiwiZmlsZSI6InNyYy9hcHAvcHdhLXBhZ2VzL2VkaXQvZWRpdGluZm8vZWRpdGluZm8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XG4gICAgLS1iYWNrZ3JvdW5kOiByZ2IoMTE1LDU1LDIxMik7XG4gICAgLS1iYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCByZ2JhKDExNSw1NSwyMTIsMSkgMCUsIHJnYmEoMCwyMTQsMTkyLDEpIDEwMCUpO1xuICB9XG4gIC5ib3h7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIG1pbi1oZWlnaHQ6IDMwMHB4O1xuICAgIG1heC13aWR0aDogNjUwcHg7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogN3B4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgaW9uLWlucHV0e1xuICAgIGJvcmRlci1yYWRpdXM6IDdweCAhaW1wb3J0YW50O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmMWYxZjEgIWltcG9ydGFudDtcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgIC0tYmFja2dyb3VuZDogI2YxZjFmMTtcbiAgfVxuICBcbiAgaW9uLWdyaWR7XG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG4gIH1cbiAgXG4gIGlvbi1idXR0b257XG4gICAgLS1ib3JkZXItcmFkaXVzOiA3cHg7XG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG4gIH1cbiAgcHtcbiAgICBjb2xvcjojODA4MDgwXG4gIH1cbiAgaDJ7XG4gICAgY29sb3I6IGdyZXk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4iLCJpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogcmdiKDExNSw1NSwyMTIpO1xuICAtLWJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsIHJnYmEoMTE1LDU1LDIxMiwxKSAwJSwgcmdiYSgwLDIxNCwxOTIsMSkgMTAwJSk7XG59XG5cbi5ib3gge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWluLWhlaWdodDogMzAwcHg7XG4gIG1heC13aWR0aDogNjUwcHg7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogN3B4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1pbnB1dCB7XG4gIGJvcmRlci1yYWRpdXM6IDdweCAhaW1wb3J0YW50O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZjFmMWYxICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIC0tYmFja2dyb3VuZDogI2YxZjFmMTtcbn1cblxuaW9uLWdyaWQge1xuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG59XG5cbmlvbi1idXR0b24ge1xuICAtLWJvcmRlci1yYWRpdXM6IDdweDtcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xufVxuXG5wIHtcbiAgY29sb3I6ICM4MDgwODA7XG59XG5cbmgyIHtcbiAgY29sb3I6IGdyZXk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pwa-pages/edit/editinfo/editinfo.page.ts":
/*!**********************************************************!*\
  !*** ./src/app/pwa-pages/edit/editinfo/editinfo.page.ts ***!
  \**********************************************************/
/*! exports provided: EditinfoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditinfoPage", function() { return EditinfoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _route_to_preload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../route-to-preload */ "./src/app/route-to-preload.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");







let EditinfoPage = class EditinfoPage {
    constructor(authService, alertService, navCtrl, router, routingService) {
        this.authService = authService;
        this.alertService = alertService;
        this.navCtrl = navCtrl;
        this.router = router;
        this.routingService = routingService;
        this.checked1 = "false";
        this.checked2 = "false";
        this.checked3 = "false";
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.routingService.preloadRoute('admininfo');
        });
    }
    ionViewWillEnter() {
        this.router.queryParams.subscribe(params => {
            this.id = params["id"];
        });
        this.showInfo();
    }
    showInfo() {
        this.authService.getInfo().subscribe(data => {
            for (let i = 0; i < data.length; i++) {
                if (this.id == data[i].id) {
                    this.inform = data[i].info;
                    this.nivel = data[i].nivel;
                    switch (this.nivel) {
                        case 1:
                            this.checked1 = "true";
                            break;
                        case 2:
                            this.checked2 = "true";
                            break;
                        case 3:
                            this.checked3 = "true";
                            break;
                    }
                    break;
                }
            }
        });
    }
    dismiss() {
        this.navCtrl.navigateRoot('/admininfo');
    }
    editar(form) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.authService.getInfo().subscribe(data => {
                for (let i = 0; i < data.length; i++) {
                    if (this.id == data[i].id) {
                        this.authService.updateInfo(data[i].id, form.value.novo, 1, form.value.nivel).subscribe(data => {
                            this.dismiss();
                            this.alertService.presentToast("Informativo editado com sucesso!");
                        }, error => {
                            this.alertService.presentToast('Preencha todos os campos!');
                        });
                        break;
                    }
                }
            });
        });
    }
};
EditinfoPage.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _route_to_preload__WEBPACK_IMPORTED_MODULE_1__["AppRoutingPreloaderService"] }
];
EditinfoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
        selector: 'app-editinfo',
        template: __webpack_require__(/*! raw-loader!./editinfo.page.html */ "./node_modules/raw-loader/index.js!./src/app/pwa-pages/edit/editinfo/editinfo.page.html"),
        styles: [__webpack_require__(/*! ./editinfo.page.scss */ "./src/app/pwa-pages/edit/editinfo/editinfo.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
        src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _route_to_preload__WEBPACK_IMPORTED_MODULE_1__["AppRoutingPreloaderService"]])
], EditinfoPage);



/***/ })

}]);
//# sourceMappingURL=pwa-pages-edit-editinfo-editinfo-module-es2015.js.map