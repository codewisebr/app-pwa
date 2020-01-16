(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-agape-agape-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/agape/agape.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/agape/agape.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n      <ion-title>Ágape</ion-title>\n    </ion-toolbar>\n  </ion-header>\n    \n  <ion-content padding>\n      <ion-card>\n        <ion-card-header>\n          <ion-card-title text-center>Ágape</ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n          <ion-list lines=\"none\">\n            <ion-item *ngFor=\"let agapes of agape\">\n              <ion-label>{{agapes}}</ion-label>\n            </ion-item>\n          </ion-list>\n        </ion-card-content>\n      </ion-card>\n    </ion-content>"

/***/ }),

/***/ "./src/app/pages/agape/agape.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/agape/agape.module.ts ***!
  \*********************************************/
/*! exports provided: AgapePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgapePageModule", function() { return AgapePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _agape_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./agape.page */ "./src/app/pages/agape/agape.page.ts");







var routes = [
    {
        path: '',
        component: _agape_page__WEBPACK_IMPORTED_MODULE_6__["AgapePage"]
    }
];
var AgapePageModule = /** @class */ (function () {
    function AgapePageModule() {
    }
    AgapePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_agape_page__WEBPACK_IMPORTED_MODULE_6__["AgapePage"]]
        })
    ], AgapePageModule);
    return AgapePageModule;
}());



/***/ }),

/***/ "./src/app/pages/agape/agape.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/agape/agape.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FnYXBlL2FnYXBlLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/agape/agape.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/agape/agape.page.ts ***!
  \*******************************************/
/*! exports provided: AgapePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgapePage", function() { return AgapePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var AgapePage = /** @class */ (function () {
    function AgapePage(authService) {
        this.authService = authService;
        this.agape = [];
    }
    AgapePage.prototype.ngOnInit = function () { };
    AgapePage.prototype.ionViewWillEnter = function () { this.showAgape(); };
    AgapePage.prototype.showAgape = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.authService.getAgape(0)
                            .subscribe(function (data) {
                            for (var i = 0; i < data.length; i++) {
                                _this.agape[i] = data[i].agape;
                            }
                        }, function (error) {
                            //console.log('erro');
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AgapePage.ctorParameters = function () { return [
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }
    ]; };
    AgapePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-agape',
            template: __webpack_require__(/*! raw-loader!./agape.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/agape/agape.page.html"),
            styles: [__webpack_require__(/*! ./agape.page.scss */ "./src/app/pages/agape/agape.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], AgapePage);
    return AgapePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-agape-agape-module-es5.js.map