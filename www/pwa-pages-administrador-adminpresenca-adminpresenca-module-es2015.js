(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pwa-pages-administrador-adminpresenca-adminpresenca-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pwa-pages/administrador/adminpresenca/adminpresenca.page.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pwa-pages/administrador/adminpresenca/adminpresenca.page.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n      <ion-title>Lista de presença</ion-title>\n    </ion-toolbar>\n  </ion-header>\n    \n  <ion-content padding>\n    <ion-card>\n      <ion-card-header>\n        <ion-buttons>\n          <ion-button color=\"primary\" fill=\"clear\" (click)=\"create()\">CRIAR NOVA REUNIÃO</ion-button>\n          <ion-button color=\"primary\" fill=\"clear\" (click)=\"historico()\">HISTÓRICO</ion-button>\n        </ion-buttons>\n      </ion-card-header>\n    </ion-card>\n\n    <ion-card>\n      <ion-card-header>\n        <ion-card-title text-center >Lista de presença da reunião do dia {{this.data}}</ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        <ion-list lines=\"none\">\n          <ion-row>\n            <ion-col size=\"4\">\n              <ion-item>\n                <h2>Nome</h2>\n              </ion-item>\n              <ion-item-sliding *ngFor=\"let nomes of name\">\n                <ion-item>\n                    <ion-label>{{nomes}}</ion-label>\n                </ion-item>\n              </ion-item-sliding>\n            </ion-col>\n            <ion-col size=\"2\">\n              <ion-item>\n                <h2>Presença</h2>  \n              </ion-item>\n              <ion-item-sliding *ngFor=\"let listas of lista\">\n                <ion-item>\n                    <ion-label>{{listas.presenca}}</ion-label>\n                </ion-item>\n              </ion-item-sliding>\n            </ion-col>\n            <ion-col size=\"5\">\n              <ion-item>\n                <h2>Motivo</h2>\n              </ion-item>\n              <ion-item-sliding *ngFor=\"let listas of lista\">\n                <ion-item>\n                    <ion-label>{{listas.motivo}}</ion-label>\n                </ion-item>\n              </ion-item-sliding>\n            </ion-col>\n            <ion-col size=\"1\">\n              <ion-item>\n                <h2 class=\"color\">Editar</h2>\n              </ion-item>\n              <ion-item-sliding *ngFor=\"let listas of lista\">\n                <ion-item>\n                  <ion-buttons slot=\"start\">\n                    <ion-button color=\"primary\" fill=\"clear\" (click)=\"editar(listas.id)\"><ion-icon name=\"create\"></ion-icon></ion-button>\n                  </ion-buttons>\n                </ion-item>\n              </ion-item-sliding>\n            </ion-col>\n          </ion-row>\n        </ion-list>\n      </ion-card-content>\n    </ion-card>\n  </ion-content>\n\n"

/***/ }),

/***/ "./src/app/pwa-pages/administrador/adminpresenca/adminpresenca.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pwa-pages/administrador/adminpresenca/adminpresenca.module.ts ***!
  \*******************************************************************************/
/*! exports provided: AdminpresencaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminpresencaPageModule", function() { return AdminpresencaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _adminpresenca_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./adminpresenca.page */ "./src/app/pwa-pages/administrador/adminpresenca/adminpresenca.page.ts");







const routes = [
    {
        path: '',
        component: _adminpresenca_page__WEBPACK_IMPORTED_MODULE_6__["AdminpresencaPage"]
    }
];
let AdminpresencaPageModule = class AdminpresencaPageModule {
};
AdminpresencaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_adminpresenca_page__WEBPACK_IMPORTED_MODULE_6__["AdminpresencaPage"]]
    })
], AdminpresencaPageModule);



/***/ }),

/***/ "./src/app/pwa-pages/administrador/adminpresenca/adminpresenca.page.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/pwa-pages/administrador/adminpresenca/adminpresenca.page.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".color {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NvZGV3aXNlL3VuaWFvdmlpL2FwcC1wd2Evc3JjL2FwcC9wd2EtcGFnZXMvYWRtaW5pc3RyYWRvci9hZG1pbnByZXNlbmNhL2FkbWlucHJlc2VuY2EucGFnZS5zY3NzIiwic3JjL2FwcC9wd2EtcGFnZXMvYWRtaW5pc3RyYWRvci9hZG1pbnByZXNlbmNhL2FkbWlucHJlc2VuY2EucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcHdhLXBhZ2VzL2FkbWluaXN0cmFkb3IvYWRtaW5wcmVzZW5jYS9hZG1pbnByZXNlbmNhLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb2xvcntcbiAgICBjb2xvcjogd2hpdGU7XG59IiwiLmNvbG9yIHtcbiAgY29sb3I6IHdoaXRlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pwa-pages/administrador/adminpresenca/adminpresenca.page.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pwa-pages/administrador/adminpresenca/adminpresenca.page.ts ***!
  \*****************************************************************************/
/*! exports provided: AdminpresencaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminpresencaPage", function() { return AdminpresencaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _route_to_preload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../route-to-preload */ "./src/app/route-to-preload.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");






let AdminpresencaPage = class AdminpresencaPage {
    constructor(authService, modalCtrl, navCtrl, dataPipe, routingService) {
        this.authService = authService;
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.dataPipe = dataPipe;
        this.routingService = routingService;
        this.lista = [];
        this.motivo = [];
        this.name = [];
        this.presenca = [];
        this.aux = " ";
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.routingService.preloadRoute('admin');
            yield this.routingService.preloadRoute('editpresenca');
            yield this.routingService.preloadRoute('hispresenca');
            yield this.routingService.preloadRoute('cadastrareuniao');
        });
    }
    ionViewWillEnter() {
        this.showData();
        this.showLista();
    }
    showData() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            //mostra a data se tiver
            yield this.authService.getReuniao()
                .subscribe(data => {
                this.data = (this.dataPipe.transform(data[0].data, "dd/MM"));
            }, error => {
                // console.log("error: " + error);
            });
        });
    }
    showLista() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.authService.getLista().subscribe(data => {
                if (JSON.stringify(data) == "{}") {
                    this.confirm = false;
                }
                else {
                    this.confirm = true;
                    for (let i = 0; i < data.length; i++) {
                        this.lista[i] = data[i];
                        if (data[i].presenca == 0) {
                            this.lista[i].presenca = "Não estará presente";
                        }
                        else {
                            this.lista[i].presenca = "Estará presente";
                        }
                        this.authService.getNome(data[i].id_user).subscribe(resul => {
                            this.name[i] = resul[0];
                        });
                    }
                }
            }, error => {
                // console.log(error);
            });
        });
    }
    historico() {
        this.navCtrl.navigateForward('/hispresenca');
    }
    create() {
        this.navCtrl.navigateForward('/cadastrareuniao');
    }
    editar(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let navigationExtras = {
                queryParams: {
                    id: id
                }
            };
            this.navCtrl.navigateForward(['/editpresenca'], navigationExtras);
        });
    }
};
AdminpresencaPage.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"] },
    { type: _route_to_preload__WEBPACK_IMPORTED_MODULE_1__["AppRoutingPreloaderService"] }
];
AdminpresencaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-adminpresenca',
        template: __webpack_require__(/*! raw-loader!./adminpresenca.page.html */ "./node_modules/raw-loader/index.js!./src/app/pwa-pages/administrador/adminpresenca/adminpresenca.page.html"),
        styles: [__webpack_require__(/*! ./adminpresenca.page.scss */ "./src/app/pwa-pages/administrador/adminpresenca/adminpresenca.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
        _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"],
        _route_to_preload__WEBPACK_IMPORTED_MODULE_1__["AppRoutingPreloaderService"]])
], AdminpresencaPage);



/***/ })

}]);
//# sourceMappingURL=pwa-pages-administrador-adminpresenca-adminpresenca-module-es2015.js.map