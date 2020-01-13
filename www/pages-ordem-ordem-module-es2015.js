(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-ordem-ordem-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/ordem/ordem.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/ordem/ordem.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n      <ion-title>Ordem</ion-title>\n    </ion-toolbar>\n  </ion-header>\n    \n  <ion-content padding>\n      <ion-card>\n        <ion-card-header>\n          <ion-card-title text-center>Ordem</ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n            <ion-list lines=\"none\">\n                <ion-item *ngFor=\"let ordens of ordem\">\n                  <ion-label>{{ordens}}</ion-label>\n                </ion-item>\n              </ion-list>\n        </ion-card-content>\n      </ion-card>\n  </ion-content>"

/***/ }),

/***/ "./src/app/pages/ordem/ordem.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/ordem/ordem.module.ts ***!
  \*********************************************/
/*! exports provided: OrdemPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdemPageModule", function() { return OrdemPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ordem_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ordem.page */ "./src/app/pages/ordem/ordem.page.ts");







const routes = [
    {
        path: '',
        component: _ordem_page__WEBPACK_IMPORTED_MODULE_6__["OrdemPage"]
    }
];
let OrdemPageModule = class OrdemPageModule {
};
OrdemPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_ordem_page__WEBPACK_IMPORTED_MODULE_6__["OrdemPage"]]
    })
], OrdemPageModule);



/***/ }),

/***/ "./src/app/pages/ordem/ordem.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/ordem/ordem.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL29yZGVtL29yZGVtLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/ordem/ordem.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/ordem/ordem.page.ts ***!
  \*******************************************/
/*! exports provided: OrdemPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdemPage", function() { return OrdemPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let OrdemPage = class OrdemPage {
    constructor(authService) {
        this.authService = authService;
        this.ordem = [];
    }
    ngOnInit() {
    }
    ionViewWillEnter() { this.showOrdem(); }
    showOrdem() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.authService.user().subscribe(resul => {
                //pega o nivel do usuario, assim so mostra as ordens do nivel
                this.authService.getNivelOrdem(resul.nivel, 0)
                    .subscribe(data => {
                    for (let i = 0; i < data.length; i++) {
                        this.ordem[i] = data[i].ordem;
                    }
                });
            });
        });
    }
};
OrdemPage.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }
];
OrdemPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-ordem',
        template: __webpack_require__(/*! raw-loader!./ordem.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/ordem/ordem.page.html"),
        styles: [__webpack_require__(/*! ./ordem.page.scss */ "./src/app/pages/ordem/ordem.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
], OrdemPage);



/***/ })

}]);
//# sourceMappingURL=pages-ordem-ordem-module-es2015.js.map