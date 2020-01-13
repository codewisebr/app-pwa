(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-auth-senha-senha-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/auth/senha/senha.page.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/auth/senha/senha.page.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n          <ion-back-button></ion-back-button>\n      </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content padding>\n\n  <ion-grid text-center>\n    <ion-icon name=\"mail\" class=\"icon\"></ion-icon>\n  </ion-grid> \n  <br>\n  <ion-grid text-center >\n    <div class=\"box\">\n      <br><br>\n        <h2>Confirme seu e-mail para mandarmos sua senha</h2>\n  <form #form=\"ngForm\" (ngSubmit)=\"senha(form)\" method=\"POST\">\n    <ion-grid>\n      <ion-input ngModel placeholder=\"E-mail\" name=\"email\" type=\"email\" pattern=\"[-a-zA-Z0-9~!$%^&amp;*_=+}{'?]+(\\.[-a-zA-Z0-9~!$%^&amp;*_=+}{'?]+)*@([a-zA-Z0-9_][-a-zA-Z0-9_]*(\\.[-a-zA-Z0-9_]+)*\\.([cC][oO][mM]))(:[0-9]{1,5})?\" required=\"true\">\n          &nbsp;<ion-icon name=\"at\" color=\"primary\"></ion-icon>\n      </ion-input>\n    </ion-grid> \n    <br>\n    <ion-button type=\"submit\" round expand=\"block\" color=\"primary\">Enviar</ion-button>\n  </form>\n</div>\n</ion-grid>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/auth/senha/senha.module.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/auth/senha/senha.module.ts ***!
  \**************************************************/
/*! exports provided: SenhaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SenhaPageModule", function() { return SenhaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _senha_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./senha.page */ "./src/app/pages/auth/senha/senha.page.ts");







var routes = [
    {
        path: '',
        component: _senha_page__WEBPACK_IMPORTED_MODULE_6__["SenhaPage"]
    }
];
var SenhaPageModule = /** @class */ (function () {
    function SenhaPageModule() {
    }
    SenhaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_senha_page__WEBPACK_IMPORTED_MODULE_6__["SenhaPage"]]
        })
    ], SenhaPageModule);
    return SenhaPageModule;
}());



/***/ }),

/***/ "./src/app/pages/auth/senha/senha.page.scss":
/*!**************************************************!*\
  !*** ./src/app/pages/auth/senha/senha.page.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: rgb(115,55,212);\n  --background: radial-gradient(circle, rgba(115,55,212,1) 0%, rgba(0,214,192,1) 100%);\n}\n\n.box {\n  background-color: white;\n  margin-left: auto;\n  margin-right: auto;\n  min-height: 300px;\n  max-width: 650px;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  border-radius: 7px !important;\n}\n\nion-input {\n  border-radius: 7px !important;\n  border: 1px solid #f1f1f1 !important;\n  text-align: justify;\n  --background: #f1f1f1;\n}\n\nion-grid {\n  padding-left: 30px;\n  padding-right: 30px;\n}\n\nion-button {\n  --border-radius: 7px;\n  padding-left: 30px;\n  padding-right: 30px;\n}\n\np {\n  color: #808080;\n}\n\nh2 {\n  color: grey;\n  text-align: center;\n}\n\n.icon {\n  font-size: 64px;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NvZGV3aXNlL3VuaWFvdmlpL2FwcC1wd2Evc3JjL2FwcC9wYWdlcy9hdXRoL3NlbmhhL3NlbmhhLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvYXV0aC9zZW5oYS9zZW5oYS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw2QkFBQTtFQUNBLG9GQUFBO0FDQ0o7O0FEQ0U7RUFDRSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLDZCQUFBO0FDRUo7O0FEQUU7RUFDRSw2QkFBQTtFQUNBLG9DQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQ0dKOztBREFFO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQ0dKOztBREFFO0VBQ0Usb0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDR0o7O0FEREU7RUFDRSxjQUFBO0FDSUo7O0FERkU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUNLSjs7QURGQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0FDS0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hdXRoL3NlbmhhL3NlbmhhLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xuICAgIC0tYmFja2dyb3VuZDogcmdiKDExNSw1NSwyMTIpO1xuICAgIC0tYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgcmdiYSgxMTUsNTUsMjEyLDEpIDAlLCByZ2JhKDAsMjE0LDE5MiwxKSAxMDAlKTtcbiAgfVxuICAuYm94e1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBtaW4taGVpZ2h0OiAzMDBweDtcbiAgICBtYXgtd2lkdGg6IDY1MHB4O1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDdweCAhaW1wb3J0YW50O1xuICB9XG4gIGlvbi1pbnB1dHtcbiAgICBib3JkZXItcmFkaXVzOiA3cHggIWltcG9ydGFudDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZjFmMWYxICFpbXBvcnRhbnQ7XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICAtLWJhY2tncm91bmQ6ICNmMWYxZjE7XG4gIH1cbiAgXG4gIGlvbi1ncmlke1xuICAgIHBhZGRpbmctbGVmdDogMzBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xuICB9XG4gIFxuICBpb24tYnV0dG9ue1xuICAgIC0tYm9yZGVyLXJhZGl1czogN3B4O1xuICAgIHBhZGRpbmctbGVmdDogMzBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xuICB9XG4gIHB7XG4gICAgY29sb3I6IzgwODA4MFxuICB9XG4gIGgye1xuICAgIGNvbG9yOiBncmV5O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4uaWNvbntcbiAgICBmb250LXNpemU6IDY0cHg7XG4gICAgY29sb3I6IHdoaXRlO1xufSIsImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoMTE1LDU1LDIxMik7XG4gIC0tYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgcmdiYSgxMTUsNTUsMjEyLDEpIDAlLCByZ2JhKDAsMjE0LDE5MiwxKSAxMDAlKTtcbn1cblxuLmJveCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtaW4taGVpZ2h0OiAzMDBweDtcbiAgbWF4LXdpZHRoOiA2NTBweDtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA3cHggIWltcG9ydGFudDtcbn1cblxuaW9uLWlucHV0IHtcbiAgYm9yZGVyLXJhZGl1czogN3B4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmMWYxZjEgIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgLS1iYWNrZ3JvdW5kOiAjZjFmMWYxO1xufVxuXG5pb24tZ3JpZCB7XG4gIHBhZGRpbmctbGVmdDogMzBweDtcbiAgcGFkZGluZy1yaWdodDogMzBweDtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gIC0tYm9yZGVyLXJhZGl1czogN3B4O1xuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG59XG5cbnAge1xuICBjb2xvcjogIzgwODA4MDtcbn1cblxuaDIge1xuICBjb2xvcjogZ3JleTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaWNvbiB7XG4gIGZvbnQtc2l6ZTogNjRweDtcbiAgY29sb3I6IHdoaXRlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/auth/senha/senha.page.ts":
/*!************************************************!*\
  !*** ./src/app/pages/auth/senha/senha.page.ts ***!
  \************************************************/
/*! exports provided: SenhaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SenhaPage", function() { return SenhaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");




var SenhaPage = /** @class */ (function () {
    function SenhaPage(authService, alertService) {
        this.authService = authService;
        this.alertService = alertService;
    }
    SenhaPage.prototype.ngOnInit = function () {
    };
    SenhaPage.prototype.senha = function (form) {
        var _this = this;
        this.authService.forgotPassword(form.value.email).subscribe(function (data) {
            _this.alertService.presentToast(data);
        }, function (error) {
            _this.alertService.presentToast(error);
        });
    };
    SenhaPage.ctorParameters = function () { return [
        { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"] }
    ]; };
    SenhaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-senha',
            template: __webpack_require__(/*! raw-loader!./senha.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/auth/senha/senha.page.html"),
            styles: [__webpack_require__(/*! ./senha.page.scss */ "./src/app/pages/auth/senha/senha.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"]])
    ], SenhaPage);
    return SenhaPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-auth-senha-senha-module-es5.js.map