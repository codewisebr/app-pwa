(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pwa-pages-administrador-adminusuario-adminusuario-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pwa-pages/administrador/adminusuario/adminusuario.page.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pwa-pages/administrador/adminusuario/adminusuario.page.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n          <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n    <ion-title>Usuários</ion-title>\n  </ion-toolbar>\n</ion-header>\n  \n<ion-content padding>\n    <ion-card>\n      <ion-card-header>\n        <ion-buttons>\n          <ion-button color=\"primary\" fill=\"clear\" (click)=\"cadastrar()\">CADASTRAR</ion-button>\n          </ion-buttons>  \n      </ion-card-header>\n    </ion-card>\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title text-center>Lista de famílias</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-list lines=\"none\">\n        <ion-row>\n          <ion-col size=\"1\">\n            <ion-item-sliding *ngFor=\"let users of user\">\n              <ion-item>\n                <ion-buttons slot=\"start\">\n                  <ion-button color=\"primary\" fill=\"clear\" (click)=\"adicionar(users.id)\"><ion-icon name=\"add-circle-outline\"></ion-icon></ion-button>\n                </ion-buttons>\n              </ion-item>\n            </ion-item-sliding>\n          </ion-col>\n          <ion-col size=\"11\"> \n            <ion-item-sliding *ngFor=\"let nomes of nome\">\n              <ion-item>\n                  <ion-button color=\"dark\" fill=\"clear\" (click)=\"verFamilia(nomes[1])\">{{nomes[0]}}</ion-button>\n              </ion-item>\n            </ion-item-sliding>\n          </ion-col>\n        </ion-row>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n  "

/***/ }),

/***/ "./src/app/pwa-pages/administrador/adminusuario/adminusuario.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pwa-pages/administrador/adminusuario/adminusuario.module.ts ***!
  \*****************************************************************************/
/*! exports provided: AdminusuarioPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminusuarioPageModule", function() { return AdminusuarioPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _adminusuario_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./adminusuario.page */ "./src/app/pwa-pages/administrador/adminusuario/adminusuario.page.ts");







const routes = [
    {
        path: '',
        component: _adminusuario_page__WEBPACK_IMPORTED_MODULE_6__["AdminusuarioPage"]
    }
];
let AdminusuarioPageModule = class AdminusuarioPageModule {
};
AdminusuarioPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_adminusuario_page__WEBPACK_IMPORTED_MODULE_6__["AdminusuarioPage"]]
    })
], AdminusuarioPageModule);



/***/ }),

/***/ "./src/app/pwa-pages/administrador/adminusuario/adminusuario.page.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/pwa-pages/administrador/adminusuario/adminusuario.page.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3B3YS1wYWdlcy9hZG1pbmlzdHJhZG9yL2FkbWludXN1YXJpby9hZG1pbnVzdWFyaW8ucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pwa-pages/administrador/adminusuario/adminusuario.page.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pwa-pages/administrador/adminusuario/adminusuario.page.ts ***!
  \***************************************************************************/
/*! exports provided: AdminusuarioPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminusuarioPage", function() { return AdminusuarioPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_route_to_preload__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/route-to-preload */ "./src/app/route-to-preload.ts");





let AdminusuarioPage = class AdminusuarioPage {
    constructor(authService, routingService, navCtrl) {
        this.authService = authService;
        this.routingService = routingService;
        this.navCtrl = navCtrl;
        this.user = [];
        this.nome = [];
        this.familia = [];
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.routingService.preloadRoute('admin');
            yield this.routingService.preloadRoute('cadastrafamilia');
            yield this.routingService.preloadRoute('cadastrausuario');
        });
    }
    ionViewWillEnter() {
        this.showUsuarios();
    }
    showUsuarios() {
        this.authService.getAllUser().subscribe(data => {
            for (let i = 0; i < data.length; i++) {
                this.user[i] = data[i];
                this.authService.getNome(data[i].id).subscribe(resul => {
                    this.nome[i] = resul;
                });
                this.authService.getFamilia(data[i].id).subscribe(resp => {
                    if (resp == 0)
                        this.hidden = false;
                    else {
                        this.hidden = true;
                        for (let i = 0; i < resp.length; i++) {
                            this.familia[i] = resp[i];
                        }
                    }
                });
            }
        });
    }
    adicionar(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let navigationExtras = {
                queryParams: {
                    id: id
                }
            };
            this.navCtrl.navigateForward(['/cadastrafamilia'], navigationExtras);
        });
    }
    cadastrar() {
        this.navCtrl.navigateForward(['/cadastrausuario']);
    }
    verFamilia(id) {
        let navigationExtras = {
            queryParams: {
                id: id
            }
        };
        this.navCtrl.navigateForward(['/hisfamilia'], navigationExtras);
    }
};
AdminusuarioPage.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: src_app_route_to_preload__WEBPACK_IMPORTED_MODULE_4__["AppRoutingPreloaderService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"] }
];
AdminusuarioPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-adminusuario',
        template: __webpack_require__(/*! raw-loader!./adminusuario.page.html */ "./node_modules/raw-loader/index.js!./src/app/pwa-pages/administrador/adminusuario/adminusuario.page.html"),
        styles: [__webpack_require__(/*! ./adminusuario.page.scss */ "./src/app/pwa-pages/administrador/adminusuario/adminusuario.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
        src_app_route_to_preload__WEBPACK_IMPORTED_MODULE_4__["AppRoutingPreloaderService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"]])
], AdminusuarioPage);



/***/ })

}]);
//# sourceMappingURL=pwa-pages-administrador-adminusuario-adminusuario-module-es2015.js.map