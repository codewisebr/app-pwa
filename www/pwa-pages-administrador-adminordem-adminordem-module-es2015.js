(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pwa-pages-administrador-adminordem-adminordem-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pwa-pages/administrador/adminordem/adminordem.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pwa-pages/administrador/adminordem/adminordem.page.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n      <ion-title>Ordem</ion-title>\n    </ion-toolbar>\n  </ion-header>\n    \n  <ion-content padding>\n      <ion-card>\n        <ion-card-header>\n          <ion-buttons>\n            <ion-button color=\"primary\" fill=\"clear\" [disabled]=\"disabled1\" (click)=\"cadastrar()\">CADASTRAR</ion-button>\n            <ion-button color=\"primary\" fill=\"clear\" (click)=\"historico()\">HISTÓRICO</ion-button>\n          </ion-buttons>\n        </ion-card-header>\n      </ion-card>\n      \n      <ion-card>\n        <ion-card-header>\n          <ion-card-title text-center>Ordem</ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n          <ion-list lines=\"none\">\n              <ion-row *ngFor=\"let ordens of ordem\">\n                <ion-col size=\"8\">\n                    <ion-item>\n                      <ion-label>{{ordens.ordem}}</ion-label>\n                    </ion-item>\n                </ion-col>\n                <ion-col size=\"4\">\n                    <ion-item>\n                      <ion-buttons slot=\"end\">\n                        <ion-button fill=\"clear\" (click)=\"delete(ordens.id)\" color=\"danger\"><ion-icon name=\"trash\"></ion-icon></ion-button>\n                        <ion-button color=\"primary\" fill=\"clear\" (click)=\"editar(ordens.id)\"><ion-icon name=\"create\"></ion-icon></ion-button>\n                      </ion-buttons>\n                    </ion-item>\n                </ion-col>\n              </ion-row>\n            </ion-list>\n        </ion-card-content>\n      </ion-card>\n  </ion-content>"

/***/ }),

/***/ "./src/app/pwa-pages/administrador/adminordem/adminordem.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pwa-pages/administrador/adminordem/adminordem.module.ts ***!
  \*************************************************************************/
/*! exports provided: AdminordemPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminordemPageModule", function() { return AdminordemPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _adminordem_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./adminordem.page */ "./src/app/pwa-pages/administrador/adminordem/adminordem.page.ts");







const routes = [
    {
        path: '',
        component: _adminordem_page__WEBPACK_IMPORTED_MODULE_6__["AdminordemPage"]
    }
];
let AdminordemPageModule = class AdminordemPageModule {
};
AdminordemPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_adminordem_page__WEBPACK_IMPORTED_MODULE_6__["AdminordemPage"]]
    })
], AdminordemPageModule);



/***/ }),

/***/ "./src/app/pwa-pages/administrador/adminordem/adminordem.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/pwa-pages/administrador/adminordem/adminordem.page.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3B3YS1wYWdlcy9hZG1pbmlzdHJhZG9yL2FkbWlub3JkZW0vYWRtaW5vcmRlbS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pwa-pages/administrador/adminordem/adminordem.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pwa-pages/administrador/adminordem/adminordem.page.ts ***!
  \***********************************************************************/
/*! exports provided: AdminordemPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminordemPage", function() { return AdminordemPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _route_to_preload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../route-to-preload */ "./src/app/route-to-preload.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");







let AdminordemPage = class AdminordemPage {
    constructor(authService, alertService, alertCtrl, navCtrl, modalCtrl, router, routingService) {
        this.authService = authService;
        this.alertService = alertService;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.router = router;
        this.routingService = routingService;
        this.ordem = [];
        this.disabled1 = true;
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.routingService.preloadRoute('admin');
            yield this.routingService.preloadRoute('editordem');
            yield this.routingService.preloadRoute('cadastraordem');
            yield this.routingService.preloadRoute('hisordem');
        });
    }
    ionViewWillEnter() {
        this.showOrdem();
        this.permissao();
    }
    permissao() {
        this.authService.user().subscribe(data => {
            if (data.cargo_id == 9 || data.cargo_id == 4) {
                this.disabled1 = false;
            }
        });
    }
    showOrdem() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.authService.getOrdem().subscribe(data => {
                for (let i = 0; i < data.length; i++) {
                    this.ordem[i] = data[i];
                }
            }, error => {
                // console.log(error);
            });
        });
    }
    cadastrar() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.navCtrl.navigateForward('/cadastraordem');
        });
    }
    editar(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let navigationExtras = {
                queryParams: {
                    id: id
                }
            };
            this.navCtrl.navigateForward(['/editordem'], navigationExtras);
        });
    }
    delete(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.authService.getOrdem().subscribe(data => {
                for (let i = 0; i < data.length; i++) {
                    if (id == data[i].id) {
                        //muda o ativo para zero
                        this.authService.updateOrdem(data[i].id, data[i].ordem, 0, data[i].nivel).subscribe(data => {
                            this.alertService.presentToast("Ordem excluido com sucesso!");
                            window.location.reload();
                        });
                        break;
                    }
                }
            }, error => {
                // console.log(error);
            });
        });
    }
    historico() {
        this.navCtrl.navigateForward('/hisordem');
    }
};
AdminordemPage.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _route_to_preload__WEBPACK_IMPORTED_MODULE_1__["AppRoutingPreloaderService"] }
];
AdminordemPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
        selector: 'app-adminordem',
        template: __webpack_require__(/*! raw-loader!./adminordem.page.html */ "./node_modules/raw-loader/index.js!./src/app/pwa-pages/administrador/adminordem/adminordem.page.html"),
        styles: [__webpack_require__(/*! ./adminordem.page.scss */ "./src/app/pwa-pages/administrador/adminordem/adminordem.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
        _services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _route_to_preload__WEBPACK_IMPORTED_MODULE_1__["AppRoutingPreloaderService"]])
], AdminordemPage);



/***/ })

}]);
//# sourceMappingURL=pwa-pages-administrador-adminordem-adminordem-module-es2015.js.map