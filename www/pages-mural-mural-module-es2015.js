(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-mural-mural-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/mural/mural.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/mural/mural.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n          <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n    <ion-title>Mural</ion-title>\n  </ion-toolbar>\n</ion-header>\n  \n<ion-content padding>\n  <ion-card>\n    <ion-card-header>\n      <ion-buttons>\n        <ion-button color=\"primary\" fill=\"clear\" (click)=\"cadastrar()\">NOVO</ion-button>\n      </ion-buttons>\n    </ion-card-header>\n  </ion-card>\n\n  <ion-card *ngFor=\"let murals of mural\">\n    <ion-card-content>\n      <ion-item lines=\"none\">\n        <ion-avatar slot=\"start\">\n          <ion-icon name=\"person\" size=\"large\" color=\"primary\"></ion-icon>\n        </ion-avatar>\n        <ion-label>\n          <h2>{{murals.nome}}</h2>\n        </ion-label>\n      </ion-item>\n      <ion-item lines=\"none\">\n        <ion-label class=\"ion-text-wrap\">{{murals.texto}}</ion-label>\n      </ion-item>\n      <ion-item lines=\"none\" *ngIf=\"murals.ativo == 1\">\n        <ion-buttons slot=\"start\">\n          <ion-button fill=\"clear\" (click)=\"delete(murals.id)\" color=\"danger\"><ion-icon name=\"trash\"></ion-icon></ion-button>\n          <ion-button color=\"primary\" fill=\"clear\" (click)=\"editar(murals.id)\"><ion-icon name=\"create\"></ion-icon></ion-button>\n        </ion-buttons>\n      </ion-item>\n    </ion-card-content>\n  </ion-card>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/mural/mural.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/mural/mural.module.ts ***!
  \*********************************************/
/*! exports provided: MuralPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MuralPageModule", function() { return MuralPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _mural_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mural.page */ "./src/app/pages/mural/mural.page.ts");







const routes = [
    {
        path: '',
        component: _mural_page__WEBPACK_IMPORTED_MODULE_6__["MuralPage"]
    }
];
let MuralPageModule = class MuralPageModule {
};
MuralPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_mural_page__WEBPACK_IMPORTED_MODULE_6__["MuralPage"]]
    })
], MuralPageModule);



/***/ }),

/***/ "./src/app/pages/mural/mural.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/mural/mural.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ion-text-wrap {\n  white-space: normal;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NvZGV3aXNlL3VuaWFvdmlpL2FwcC1wd2Evc3JjL2FwcC9wYWdlcy9tdXJhbC9tdXJhbC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL211cmFsL211cmFsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9tdXJhbC9tdXJhbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW9uLXRleHQtd3JhcHtcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsXG59IiwiLmlvbi10ZXh0LXdyYXAge1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/mural/mural.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/mural/mural.page.ts ***!
  \*******************************************/
/*! exports provided: MuralPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MuralPage", function() { return MuralPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var src_app_services_global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/global.service */ "./src/app/services/global.service.ts");
/* harmony import */ var _route_to_preload__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../route-to-preload */ "./src/app/route-to-preload.ts");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");








let MuralPage = class MuralPage {
    constructor(authService, modalCtrl, alertService, navCtrl, routingService, global, storage) {
        this.authService = authService;
        this.modalCtrl = modalCtrl;
        this.alertService = alertService;
        this.navCtrl = navCtrl;
        this.routingService = routingService;
        this.global = global;
        this.storage = storage;
        this.mural = [];
        this.aux = " ";
        this.disabled1 = true;
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.routingService.preloadRoute('admin');
            yield this.routingService.preloadRoute('cadastramural');
        });
    }
    ionViewWillEnter() {
        this.id = this.global.user_id;
        this.showMural();
    }
    showMural() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.authService.getMural().subscribe(data => {
                for (let i = 0; i < data.length; i++) {
                    this.mural[i] = data[i];
                    //se o mural for da pessoa logada
                    if (data[i].id_users == this.id)
                        this.mural[i].ativo = 1;
                    else
                        this.mural[i].ativo = 0;
                }
            });
        });
    }
    cadastrar() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.navCtrl.navigateForward('/cadastramural');
        });
    }
    editar(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let navigationExtras = {
                queryParams: {
                    id: id
                }
            };
            this.navCtrl.navigateForward(['/editmural'], navigationExtras);
        });
    }
    delete(id) {
        this.authService.deleteMural(id).subscribe(data => {
            window.location.reload();
            this.alertService.presentToast("Postagem excluída com sucesso!");
        });
    }
};
MuralPage.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: _route_to_preload__WEBPACK_IMPORTED_MODULE_3__["AppRoutingPreloaderService"] },
    { type: src_app_services_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_1__["Storage"] }
];
MuralPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"])({
        selector: 'app-mural',
        template: __webpack_require__(/*! raw-loader!./mural.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/mural/mural.page.html"),
        styles: [__webpack_require__(/*! ./mural.page.scss */ "./src/app/pages/mural/mural.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"],
        src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"],
        _route_to_preload__WEBPACK_IMPORTED_MODULE_3__["AppRoutingPreloaderService"],
        src_app_services_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_1__["Storage"]])
], MuralPage);



/***/ })

}]);
//# sourceMappingURL=pages-mural-mural-module-es2015.js.map