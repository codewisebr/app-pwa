(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pwa-pages-administrador-admininfo-admininfo-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pwa-pages/administrador/admininfo/admininfo.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pwa-pages/administrador/admininfo/admininfo.page.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n      <ion-title>Informativos</ion-title>\n    </ion-toolbar>\n  </ion-header>\n    \n  <ion-content padding>\n    <ion-card>\n      <ion-card-header>\n        <ion-buttons>\n          <ion-button color=\"primary\" fill=\"clear\" [disabled]=\"disabled1\" (click)=\"cadastrar()\">CADASTRAR</ion-button>\n          <ion-button color=\"primary\" fill=\"clear\" (click)=\"historico()\">HISTÓRICO</ion-button>\n        </ion-buttons>\n      </ion-card-header>\n    </ion-card>\n\n    <ion-card>\n      <ion-card-header>\n        <ion-card-title text-center>Informativo</ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        <ion-list lines=\"none\">\n            <ion-row *ngFor=\"let inform of info\">\n              <ion-col size=\"9\">\n                  <ion-item>\n                      <ion-label>{{inform.info}}</ion-label>\n                  </ion-item>\n              </ion-col>\n            <ion-col size=\"3\">\n                <ion-item>\n                  <ion-buttons slot=\"end\">\n                    <ion-button fill=\"clear\" (click)=\"delete(inform.id)\" color=\"danger\"><ion-icon name=\"trash\"></ion-icon></ion-button>\n                    <ion-button color=\"primary\" fill=\"clear\" (click)=\"editar(inform.id)\"><ion-icon name=\"create\"></ion-icon></ion-button>\n                  </ion-buttons>\n                </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-list>\n      </ion-card-content>\n    </ion-card>\n  </ion-content>\n"

/***/ }),

/***/ "./src/app/pwa-pages/administrador/admininfo/admininfo.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pwa-pages/administrador/admininfo/admininfo.module.ts ***!
  \***********************************************************************/
/*! exports provided: AdmininfoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdmininfoPageModule", function() { return AdmininfoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _admininfo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admininfo.page */ "./src/app/pwa-pages/administrador/admininfo/admininfo.page.ts");







const routes = [
    {
        path: '',
        component: _admininfo_page__WEBPACK_IMPORTED_MODULE_6__["AdmininfoPage"]
    }
];
let AdmininfoPageModule = class AdmininfoPageModule {
};
AdmininfoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_admininfo_page__WEBPACK_IMPORTED_MODULE_6__["AdmininfoPage"]]
    })
], AdmininfoPageModule);



/***/ }),

/***/ "./src/app/pwa-pages/administrador/admininfo/admininfo.page.scss":
/*!***********************************************************************!*\
  !*** ./src/app/pwa-pages/administrador/admininfo/admininfo.page.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3B3YS1wYWdlcy9hZG1pbmlzdHJhZG9yL2FkbWluaW5mby9hZG1pbmluZm8ucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pwa-pages/administrador/admininfo/admininfo.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pwa-pages/administrador/admininfo/admininfo.page.ts ***!
  \*********************************************************************/
/*! exports provided: AdmininfoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdmininfoPage", function() { return AdmininfoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _route_to_preload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../route-to-preload */ "./src/app/route-to-preload.ts");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");






let AdmininfoPage = class AdmininfoPage {
    constructor(authService, alertService, alertCtrl, navCtrl, routingService) {
        this.authService = authService;
        this.alertService = alertService;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.routingService = routingService;
        this.info = [];
        this.disabled1 = true;
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.routingService.preloadRoute('admin');
            yield this.routingService.preloadRoute('editinfo');
            yield this.routingService.preloadRoute('cadastrainfo');
            yield this.routingService.preloadRoute('hisinfo');
        });
    }
    ionViewWillEnter() {
        this.showInfo();
        this.permissao();
    }
    permissao() {
        this.authService.user().subscribe(data => {
            if (data.cargo_id == 9 || data.cargo_id == 4) {
                this.disabled1 = false;
            }
        });
    }
    showInfo() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.authService.getInfo().subscribe(data => {
                for (let i = 0; i < data.length; i++) {
                    this.info[i] = data[i];
                }
            }, error => {
                // console.log(error);
            });
        });
    }
    cadastrar() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.navCtrl.navigateForward('/cadastrainfo');
        });
    }
    editar(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let navigationExtras = {
                queryParams: {
                    id: id
                }
            };
            this.navCtrl.navigateForward(['/editinfo'], navigationExtras);
        });
    }
    delete(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.authService.getInfo().subscribe(data => {
                for (let i = 0; i < data.length; i++) {
                    if (id == data[i].id) {
                        //muda o ativo para zero
                        this.authService.updateInfo(data[i].id, data[i].info, 0, data[i].nivel).subscribe(data => {
                            this.alertService.presentToast("Informativo excluido com sucesso!");
                            window.location.reload();
                        });
                    }
                }
            }, error => {
                // console.log(error);
            });
        });
    }
    historico() {
        this.navCtrl.navigateForward('/hisinfo');
    }
};
AdmininfoPage.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _route_to_preload__WEBPACK_IMPORTED_MODULE_1__["AppRoutingPreloaderService"] }
];
AdmininfoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-admininfo',
        template: __webpack_require__(/*! raw-loader!./admininfo.page.html */ "./node_modules/raw-loader/index.js!./src/app/pwa-pages/administrador/admininfo/admininfo.page.html"),
        styles: [__webpack_require__(/*! ./admininfo.page.scss */ "./src/app/pwa-pages/administrador/admininfo/admininfo.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
        _services_alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
        _route_to_preload__WEBPACK_IMPORTED_MODULE_1__["AppRoutingPreloaderService"]])
], AdmininfoPage);



/***/ })

}]);
//# sourceMappingURL=pwa-pages-administrador-admininfo-admininfo-module-es2015.js.map