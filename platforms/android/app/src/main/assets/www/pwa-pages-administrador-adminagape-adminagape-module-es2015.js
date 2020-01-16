(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pwa-pages-administrador-adminagape-adminagape-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pwa-pages/administrador/adminagape/adminagape.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pwa-pages/administrador/adminagape/adminagape.page.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n      <ion-title>Ágape</ion-title>\n    </ion-toolbar>\n  </ion-header>\n    \n  <ion-content padding>\n      <ion-card>\n        <ion-card-header>\n          <ion-buttons>\n            <ion-button color=\"primary\" fill=\"clear\" [disabled]=\"disabled1\" (click)=\"cadastrar()\">CADASTRAR</ion-button>\n            <ion-button color=\"primary\" fill=\"clear\" (click)=\"historico()\">HISTÓRICO</ion-button>\n          </ion-buttons>\n        </ion-card-header>\n      </ion-card>\n      <ion-card>\n          <ion-card-header>\n            <ion-card-title text-center>Ágapes</ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n            <ion-list lines=\"none\">\n                <ion-row *ngFor=\"let agapes of agape\">\n                  <ion-col size=\"8\">\n                    <ion-item>\n                      <ion-label>{{agapes.agape}}</ion-label>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col size=\"4\">\n                    <ion-item>\n                      <ion-buttons slot=\"end\">\n                        <ion-button fill=\"clear\" (click)=\"delete(agapes.id)\" color=\"danger\"><ion-icon name=\"trash\"></ion-icon></ion-button>\n                        <ion-button color=\"primary\" fill=\"clear\" (click)=\"editar(agapes.id)\"><ion-icon name=\"create\"></ion-icon></ion-button>\n                      </ion-buttons>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n            </ion-list>\n          </ion-card-content>\n        </ion-card>\n  </ion-content>"

/***/ }),

/***/ "./src/app/pwa-pages/administrador/adminagape/adminagape.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pwa-pages/administrador/adminagape/adminagape.module.ts ***!
  \*************************************************************************/
/*! exports provided: AdminagapePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminagapePageModule", function() { return AdminagapePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _adminagape_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./adminagape.page */ "./src/app/pwa-pages/administrador/adminagape/adminagape.page.ts");







const routes = [
    {
        path: '',
        component: _adminagape_page__WEBPACK_IMPORTED_MODULE_6__["AdminagapePage"]
    }
];
let AdminagapePageModule = class AdminagapePageModule {
};
AdminagapePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
        ],
        declarations: [_adminagape_page__WEBPACK_IMPORTED_MODULE_6__["AdminagapePage"]]
    })
], AdminagapePageModule);



/***/ }),

/***/ "./src/app/pwa-pages/administrador/adminagape/adminagape.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/pwa-pages/administrador/adminagape/adminagape.page.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3B3YS1wYWdlcy9hZG1pbmlzdHJhZG9yL2FkbWluYWdhcGUvYWRtaW5hZ2FwZS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pwa-pages/administrador/adminagape/adminagape.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pwa-pages/administrador/adminagape/adminagape.page.ts ***!
  \***********************************************************************/
/*! exports provided: AdminagapePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminagapePage", function() { return AdminagapePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _route_to_preload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../route-to-preload */ "./src/app/route-to-preload.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");






let AdminagapePage = class AdminagapePage {
    constructor(authService, alertService, alertCtrl, navCtrl, routingService) {
        this.authService = authService;
        this.alertService = alertService;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.routingService = routingService;
        this.agape = [];
        this.disabled1 = true;
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.routingService.preloadRoute('admin');
            yield this.routingService.preloadRoute('editagape');
            yield this.routingService.preloadRoute('cadastraagape');
            yield this.routingService.preloadRoute('hisagape');
        });
    }
    ionViewWillEnter() {
        this.showAgape();
        this.permissao();
    }
    permissao() {
        //permissao para cadastrar
        this.authService.user().subscribe(data => {
            if (data.cargo_id == 11 || data.cargo_id == 8 || data.cargo_id == 4) {
                this.disabled1 = false;
            }
        });
    }
    showAgape() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.authService.getAgape(1).subscribe(data => {
                for (let i = 0; i < data.length; i++) {
                    this.agape[i] = data[i];
                }
            }, error => {
                // console.log(error);
            });
        });
    }
    cadastrar() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.navCtrl.navigateForward('/cadastraagape');
        });
    }
    editar(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let navigationExtras = {
                queryParams: {
                    id: id
                }
            };
            this.navCtrl.navigateForward(['/editagape'], navigationExtras);
        });
    }
    delete(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.authService.getAgape(0).subscribe(data => {
                for (let i = 0; i < data.length; i++) {
                    if (id == data[i].id) {
                        //muda o ativo para zero
                        this.authService.updateAgape(data[i].id, data[i].agape, 0, data[i].data).subscribe(data => {
                            this.alertService.presentToast("Ordem excluido com sucesso!");
                            window.location.reload();
                        });
                        break;
                    }
                }
            }, error => {
                //console.log(error);
            });
        });
    }
    historico() {
        this.navCtrl.navigateForward('/hisagape');
    }
};
AdminagapePage.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _route_to_preload__WEBPACK_IMPORTED_MODULE_1__["AppRoutingPreloaderService"] }
];
AdminagapePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-adminagape',
        template: __webpack_require__(/*! raw-loader!./adminagape.page.html */ "./node_modules/raw-loader/index.js!./src/app/pwa-pages/administrador/adminagape/adminagape.page.html"),
        styles: [__webpack_require__(/*! ./adminagape.page.scss */ "./src/app/pwa-pages/administrador/adminagape/adminagape.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
        src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _route_to_preload__WEBPACK_IMPORTED_MODULE_1__["AppRoutingPreloaderService"]])
], AdminagapePage);



/***/ })

}]);
//# sourceMappingURL=pwa-pages-administrador-adminagape-adminagape-module-es2015.js.map