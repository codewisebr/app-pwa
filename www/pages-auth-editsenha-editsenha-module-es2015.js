(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-auth-editsenha-editsenha-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/auth/editsenha/editsenha.page.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/auth/editsenha/editsenha.page.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button></ion-back-button>\n        </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n<ion-content padding>\n\n    <ion-grid text-center>\n        <ion-icon name=\"key\" class=\"icon\"></ion-icon>\n    </ion-grid> \n    <br>\n    <ion-grid text-center >\n      <div class=\"box\">\n          <h2>Editar senha</h2>\n    <form #form=\"ngForm\" (ngSubmit)=\"editar(form)\" method=\"POST\">\n      <ion-grid>\n        <ion-icon name=\"cash\" slot=\"start\"></ion-icon>\n        <ion-input ngModel placeholder=\"Senha atual\" name=\"password1\" type=\"password\" pattern=\"[a-z0-9._%+-]{6,}$\" required=\"true\">\n            &nbsp;<ion-icon name=\"lock\" color=\"primary\"></ion-icon>\n        </ion-input>\n      </ion-grid> \n      <br>\n      <ion-grid>\n        <ion-input ngModel placeholder=\"Senha nova\" name=\"password2\" type=\"password\" pattern=\"[a-z0-9._%+-]{6,}$\" required=\"true\">\n            &nbsp;<ion-icon name=\"unlock\" color=\"primary\"></ion-icon>\n        </ion-input>\n      </ion-grid> \n      <br>\n      <ion-button type=\"submit\" round expand=\"block\" color=\"primary\">Salvar edição</ion-button>\n  \n    </form>\n  </div>\n</ion-grid>\n  </ion-content>\n  "

/***/ }),

/***/ "./src/app/pages/auth/editsenha/editsenha.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/auth/editsenha/editsenha.module.ts ***!
  \**********************************************************/
/*! exports provided: EditsenhaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditsenhaPageModule", function() { return EditsenhaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _editsenha_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./editsenha.page */ "./src/app/pages/auth/editsenha/editsenha.page.ts");







const routes = [
    {
        path: '',
        component: _editsenha_page__WEBPACK_IMPORTED_MODULE_6__["EditsenhaPage"]
    }
];
let EditsenhaPageModule = class EditsenhaPageModule {
};
EditsenhaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_editsenha_page__WEBPACK_IMPORTED_MODULE_6__["EditsenhaPage"]]
        // declarations: []
    })
], EditsenhaPageModule);



/***/ }),

/***/ "./src/app/pages/auth/editsenha/editsenha.page.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/auth/editsenha/editsenha.page.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: rgb(115,55,212);\n  --background: radial-gradient(circle, rgba(115,55,212,1) 0%, rgba(0,214,192,1) 100%);\n}\n\n.box {\n  background-color: white;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: auto;\n  margin-top: auto;\n  min-height: 300px;\n  max-width: 650px;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  border-radius: 7px !important;\n}\n\nion-input {\n  border-radius: 7px !important;\n  border: 1px solid #f1f1f1 !important;\n  text-align: justify;\n  --background: #f1f1f1;\n}\n\nion-grid {\n  padding-left: 30px;\n  padding-right: 30px;\n}\n\nion-button {\n  --border-radius: 7px;\n  padding-left: 30px;\n  padding-right: 30px;\n}\n\np {\n  color: #808080;\n}\n\nh2 {\n  color: grey;\n  text-align: center;\n}\n\n.icon {\n  font-size: 64px;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NvZGV3aXNlL3VuaWFvdmlpL2FwcC1wd2Evc3JjL2FwcC9wYWdlcy9hdXRoL2VkaXRzZW5oYS9lZGl0c2VuaGEucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9hdXRoL2VkaXRzZW5oYS9lZGl0c2VuaGEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNkJBQUE7RUFDQSxvRkFBQTtBQ0NKOztBRENFO0VBQ0UsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsNkJBQUE7QUNFSjs7QURBRTtFQUNFLDZCQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FDR0o7O0FEQUU7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FDR0o7O0FEQUU7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNHSjs7QURERTtFQUNFLGNBQUE7QUNJSjs7QURGRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtBQ0tKOztBREZBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7QUNLSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2F1dGgvZWRpdHNlbmhhL2VkaXRzZW5oYS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcbiAgICAtLWJhY2tncm91bmQ6IHJnYigxMTUsNTUsMjEyKTtcbiAgICAtLWJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsIHJnYmEoMTE1LDU1LDIxMiwxKSAwJSwgcmdiYSgwLDIxNCwxOTIsMSkgMTAwJSk7XG4gIH1cbiAgLmJveHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgbWFyZ2luLWJvdHRvbTogYXV0bztcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xuICAgIG1pbi1oZWlnaHQ6IDMwMHB4O1xuICAgIG1heC13aWR0aDogNjUwcHg7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogN3B4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgaW9uLWlucHV0e1xuICAgIGJvcmRlci1yYWRpdXM6IDdweCAhaW1wb3J0YW50O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmMWYxZjEgIWltcG9ydGFudDtcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgIC0tYmFja2dyb3VuZDogI2YxZjFmMTtcbiAgfVxuICBcbiAgaW9uLWdyaWR7XG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG4gIH1cbiAgXG4gIGlvbi1idXR0b257XG4gICAgLS1ib3JkZXItcmFkaXVzOiA3cHg7XG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG4gIH1cbiAgcHtcbiAgICBjb2xvcjojODA4MDgwXG4gIH1cbiAgaDJ7XG4gICAgY29sb3I6IGdyZXk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbi5pY29ue1xuICAgIGZvbnQtc2l6ZTogNjRweDtcbiAgICBjb2xvcjogd2hpdGU7XG59IiwiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHJnYigxMTUsNTUsMjEyKTtcbiAgLS1iYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCByZ2JhKDExNSw1NSwyMTIsMSkgMCUsIHJnYmEoMCwyMTQsMTkyLDEpIDEwMCUpO1xufVxuXG4uYm94IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1hcmdpbi1ib3R0b206IGF1dG87XG4gIG1hcmdpbi10b3A6IGF1dG87XG4gIG1pbi1oZWlnaHQ6IDMwMHB4O1xuICBtYXgtd2lkdGg6IDY1MHB4O1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDdweCAhaW1wb3J0YW50O1xufVxuXG5pb24taW5wdXQge1xuICBib3JkZXItcmFkaXVzOiA3cHggIWltcG9ydGFudDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2YxZjFmMSAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAtLWJhY2tncm91bmQ6ICNmMWYxZjE7XG59XG5cbmlvbi1ncmlkIHtcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xufVxuXG5pb24tYnV0dG9uIHtcbiAgLS1ib3JkZXItcmFkaXVzOiA3cHg7XG4gIHBhZGRpbmctbGVmdDogMzBweDtcbiAgcGFkZGluZy1yaWdodDogMzBweDtcbn1cblxucCB7XG4gIGNvbG9yOiAjODA4MDgwO1xufVxuXG5oMiB7XG4gIGNvbG9yOiBncmV5O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5pY29uIHtcbiAgZm9udC1zaXplOiA2NHB4O1xuICBjb2xvcjogd2hpdGU7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/auth/editsenha/editsenha.page.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/auth/editsenha/editsenha.page.ts ***!
  \********************************************************/
/*! exports provided: EditsenhaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditsenhaPage", function() { return EditsenhaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_services_global_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/global.service */ "./src/app/services/global.service.ts");
/* harmony import */ var _route_to_preload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../route-to-preload */ "./src/app/route-to-preload.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");







let EditsenhaPage = class EditsenhaPage {
    constructor(alertService, authService, navCtrl, routingService, global) {
        this.alertService = alertService;
        this.authService = authService;
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
            yield this.routingService.preloadRoute('account');
        });
    }
    dismiss() {
        this.navCtrl.navigateForward('/account');
    }
    editar(form) {
        //verifica a senha atraves da senha
        this.authService.checkPassword(this.id, form.value.password1).subscribe(resp => {
            if (resp == false) {
                this.alertService.presentToast('Senha Incorreta!');
            }
            else if (resp == true) {
                //atualiza a nova senha
                this.authService.updatePassword(this.id, form.value.password2).subscribe(resp => {
                    this.alertService.presentToast('Senha atualizada!');
                    this.navCtrl.navigateRoot('/account');
                }, error => {
                    this.alertService.presentToast('Erro ao tentar atualizar senha, tente mais tarde.');
                });
            }
        }, error => {
            this.alertService.presentToast('Preencha todos os campos!');
        });
    }
};
EditsenhaPage.ctorParameters = () => [
    { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: _route_to_preload__WEBPACK_IMPORTED_MODULE_2__["AppRoutingPreloaderService"] },
    { type: src_app_services_global_service__WEBPACK_IMPORTED_MODULE_1__["GlobalService"] }
];
EditsenhaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
        selector: 'app-editsenha',
        template: __webpack_require__(/*! raw-loader!./editsenha.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/auth/editsenha/editsenha.page.html"),
        styles: [__webpack_require__(/*! ./editsenha.page.scss */ "./src/app/pages/auth/editsenha/editsenha.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"],
        src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"],
        _route_to_preload__WEBPACK_IMPORTED_MODULE_2__["AppRoutingPreloaderService"],
        src_app_services_global_service__WEBPACK_IMPORTED_MODULE_1__["GlobalService"]])
], EditsenhaPage);



/***/ })

}]);
//# sourceMappingURL=pages-auth-editsenha-editsenha-module-es2015.js.map