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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _adminusuario_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./adminusuario.page */ "./src/app/pwa-pages/administrador/adminusuario/adminusuario.page.ts");







var routes = [
    {
        path: '',
        component: _adminusuario_page__WEBPACK_IMPORTED_MODULE_6__["AdminusuarioPage"]
    }
];
var AdminusuarioPageModule = /** @class */ (function () {
    function AdminusuarioPageModule() {
    }
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
    return AdminusuarioPageModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_route_to_preload__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/route-to-preload */ "./src/app/route-to-preload.ts");





var AdminusuarioPage = /** @class */ (function () {
    function AdminusuarioPage(authService, routingService, navCtrl) {
        this.authService = authService;
        this.routingService = routingService;
        this.navCtrl = navCtrl;
        this.user = [];
        this.nome = [];
        this.familia = [];
    }
    AdminusuarioPage.prototype.ngOnInit = function () {
    };
    AdminusuarioPage.prototype.ionViewDidEnter = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.routingService.preloadRoute('admin')];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.routingService.preloadRoute('cadastrafamilia')];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.routingService.preloadRoute('cadastrausuario')];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AdminusuarioPage.prototype.ionViewWillEnter = function () {
        this.showUsuarios();
    };
    AdminusuarioPage.prototype.showUsuarios = function () {
        var _this = this;
        this.authService.getAllUser().subscribe(function (data) {
            var _loop_1 = function (i) {
                _this.user[i] = data[i];
                _this.authService.getNome(data[i].id).subscribe(function (resul) {
                    _this.nome[i] = resul;
                });
                _this.authService.getFamilia(data[i].id).subscribe(function (resp) {
                    if (resp == 0)
                        _this.hidden = false;
                    else {
                        _this.hidden = true;
                        for (var i_1 = 0; i_1 < resp.length; i_1++) {
                            _this.familia[i_1] = resp[i_1];
                        }
                    }
                });
            };
            for (var i = 0; i < data.length; i++) {
                _loop_1(i);
            }
        });
    };
    AdminusuarioPage.prototype.adicionar = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var navigationExtras;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                navigationExtras = {
                    queryParams: {
                        id: id
                    }
                };
                this.navCtrl.navigateForward(['/cadastrafamilia'], navigationExtras);
                return [2 /*return*/];
            });
        });
    };
    AdminusuarioPage.prototype.cadastrar = function () {
        this.navCtrl.navigateForward(['/cadastrausuario']);
    };
    AdminusuarioPage.prototype.verFamilia = function (id) {
        var navigationExtras = {
            queryParams: {
                id: id
            }
        };
        this.navCtrl.navigateForward(['/hisfamilia'], navigationExtras);
    };
    AdminusuarioPage.ctorParameters = function () { return [
        { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: src_app_route_to_preload__WEBPACK_IMPORTED_MODULE_4__["AppRoutingPreloaderService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"] }
    ]; };
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
    return AdminusuarioPage;
}());



/***/ })

}]);
//# sourceMappingURL=pwa-pages-administrador-adminusuario-adminusuario-module-es5.js.map