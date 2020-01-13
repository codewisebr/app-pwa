(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-informativo-informativo-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/informativo/informativo.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/informativo/informativo.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n      <ion-title>Informativos</ion-title>\n    </ion-toolbar>\n  </ion-header>\n    \n  <ion-content padding>\n    <ion-card>\n      <ion-card-header>\n        <ion-card-title text-center>Informativo</ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        <ion-list lines=\"none\">\n          <ion-item *ngFor=\"let inform of info\">\n            <ion-label>{{inform}}</ion-label>\n          </ion-item>\n        </ion-list>\n      </ion-card-content>\n    </ion-card>\n  </ion-content>"

/***/ }),

/***/ "./src/app/pages/informativo/informativo.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/informativo/informativo.module.ts ***!
  \*********************************************************/
/*! exports provided: InformativoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InformativoPageModule", function() { return InformativoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _informativo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./informativo.page */ "./src/app/pages/informativo/informativo.page.ts");







var routes = [
    {
        path: '',
        component: _informativo_page__WEBPACK_IMPORTED_MODULE_6__["InformativoPage"]
    }
];
var InformativoPageModule = /** @class */ (function () {
    function InformativoPageModule() {
    }
    InformativoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_informativo_page__WEBPACK_IMPORTED_MODULE_6__["InformativoPage"]]
        })
    ], InformativoPageModule);
    return InformativoPageModule;
}());



/***/ }),

/***/ "./src/app/pages/informativo/informativo.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/informativo/informativo.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2luZm9ybWF0aXZvL2luZm9ybWF0aXZvLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/informativo/informativo.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/informativo/informativo.page.ts ***!
  \*******************************************************/
/*! exports provided: InformativoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InformativoPage", function() { return InformativoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var InformativoPage = /** @class */ (function () {
    function InformativoPage(authService) {
        this.authService = authService;
        this.info = [];
    }
    InformativoPage.prototype.ngOnInit = function () { };
    InformativoPage.prototype.ionViewWillEnter = function () {
        this.showInfo();
    };
    InformativoPage.prototype.showInfo = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.authService.user().subscribe(function (resul) {
                    //pega o nivel do usuario, e assim mostra apenas as info de determinado nivel
                    _this.authService.getNivelInfo(resul.nivel, 0)
                        .subscribe(function (data) {
                        for (var i = 0; i < data.length; i++) {
                            _this.info[i] = data[i].info;
                        }
                    });
                });
                return [2 /*return*/];
            });
        });
    };
    InformativoPage.ctorParameters = function () { return [
        { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }
    ]; };
    InformativoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-informativo',
            template: __webpack_require__(/*! raw-loader!./informativo.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/informativo/informativo.page.html"),
            styles: [__webpack_require__(/*! ./informativo.page.scss */ "./src/app/pages/informativo/informativo.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], InformativoPage);
    return InformativoPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-informativo-informativo-module-es5.js.map