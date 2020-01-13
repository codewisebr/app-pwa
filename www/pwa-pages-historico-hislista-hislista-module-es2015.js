(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pwa-pages-historico-hislista-hislista-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pwa-pages/historico/hislista/hislista.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pwa-pages/historico/hislista/hislista.page.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button></ion-back-button>\n        </ion-buttons>\n      <ion-title>Lista de presença</ion-title>\n    </ion-toolbar>\n  </ion-header>\n    \n  <ion-content padding>\n    <ion-card>\n      <ion-card-content>\n        <ion-list lines=\"none\">\n          <ion-row>\n            <ion-col size=\"5\">\n                <h2 text-center>Nome</h2>\n              <ion-item-sliding *ngFor=\"let nomes of name\">\n                <ion-item>\n                    <ion-label text-center>{{nomes}}</ion-label>\n                </ion-item>\n              </ion-item-sliding>\n            </ion-col>\n            <ion-col size=\"4\">\n                <h2 text-center>Presença</h2>\n              <ion-item-sliding *ngFor=\"let presencas of presenca\">\n                <ion-item>\n                    <ion-label text-center>{{presencas}}</ion-label>\n                </ion-item>\n              </ion-item-sliding>\n            </ion-col>\n            <ion-col size=\"3\">\n              <h2 text-center>Motivo</h2>\n              <ion-item-sliding *ngFor=\"let motivos of motivo\">\n                <ion-item>\n                    <ion-label text-center>{{motivos}}</ion-label>\n                </ion-item>\n              </ion-item-sliding>\n            </ion-col>\n          </ion-row>\n        </ion-list>\n      </ion-card-content>\n    </ion-card>\n  </ion-content>"

/***/ }),

/***/ "./src/app/pwa-pages/historico/hislista/hislista.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pwa-pages/historico/hislista/hislista.module.ts ***!
  \*****************************************************************/
/*! exports provided: HislistaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HislistaPageModule", function() { return HislistaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _hislista_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hislista.page */ "./src/app/pwa-pages/historico/hislista/hislista.page.ts");







const routes = [
    {
        path: '',
        component: _hislista_page__WEBPACK_IMPORTED_MODULE_6__["HislistaPage"]
    }
];
let HislistaPageModule = class HislistaPageModule {
};
HislistaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_hislista_page__WEBPACK_IMPORTED_MODULE_6__["HislistaPage"]]
    })
], HislistaPageModule);



/***/ }),

/***/ "./src/app/pwa-pages/historico/hislista/hislista.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pwa-pages/historico/hislista/hislista.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3B3YS1wYWdlcy9oaXN0b3JpY28vaGlzbGlzdGEvaGlzbGlzdGEucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pwa-pages/historico/hislista/hislista.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/pwa-pages/historico/hislista/hislista.page.ts ***!
  \***************************************************************/
/*! exports provided: HislistaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HislistaPage", function() { return HislistaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _route_to_preload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../route-to-preload */ "./src/app/route-to-preload.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let HislistaPage = class HislistaPage {
    constructor(router, authService, routingService) {
        this.router = router;
        this.authService = authService;
        this.routingService = routingService;
        this.id_user = [];
        this.motivo = [];
        this.name = [];
        this.presenca = [];
        this.aux = " ";
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.routingService.preloadRoute('hispresenca');
        });
    }
    ionViewWillEnter() {
        this.router.queryParams.subscribe(params => {
            this.id = params["id"];
        });
        this.showLista();
    }
    showLista() {
        this.authService.getAllLista(this.id).subscribe(data => {
            this.confirm = true;
            for (let i = 0; i < data.length; i++) {
                this.motivo[i] = data[i].motivo;
                if (data[i].presenca == 0)
                    this.presenca[i] = "Ausente";
                else
                    this.presenca[i] = "Presente";
                this.id_user[i] = data[i].id_user;
                this.authService.getNome(this.id_user[i]).subscribe(resul => {
                    this.name[i] = resul[0];
                });
            }
        }, error => {
            // console.log(error);
        });
    }
};
HislistaPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _route_to_preload__WEBPACK_IMPORTED_MODULE_1__["AppRoutingPreloaderService"] }
];
HislistaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-hislista',
        template: __webpack_require__(/*! raw-loader!./hislista.page.html */ "./node_modules/raw-loader/index.js!./src/app/pwa-pages/historico/hislista/hislista.page.html"),
        styles: [__webpack_require__(/*! ./hislista.page.scss */ "./src/app/pwa-pages/historico/hislista/hislista.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
        _route_to_preload__WEBPACK_IMPORTED_MODULE_1__["AppRoutingPreloaderService"]])
], HislistaPage);



/***/ })

}]);
//# sourceMappingURL=pwa-pages-historico-hislista-hislista-module-es2015.js.map