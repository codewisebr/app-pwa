(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-auth-account-account-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/auth/account/account.page.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/auth/account/account.page.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n      <ion-title>Minha Conta</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content padding>\n      <ion-card>\n          <ion-card-header>\n            <ion-buttons>\n              <ion-button color=\"primary\" fill=\"clear\" (click)=editarDados()>Editar dados</ion-button>\n              <ion-button color=\"primary\" fill=\"clear\" (click)=editarSenha()>Editar senha</ion-button>\n            </ion-buttons>\n          </ion-card-header>\n        </ion-card>\n      <ion-card>\n          <ion-card-header>\n            <ion-card-title text-center>Dados Pessoais</ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n            <ion-list lines=\"none\">\n              <ion-row>\n                <ion-col>\n                  <ion-item no-lines>\n                      <h3>Nome:</h3>&nbsp;<h3>{{this.fname}}</h3>\n                    </ion-item>\n                    <ion-item no-lines>\n                      <h3>Sobrenome:</h3>&nbsp;<h3>{{this.lname}}</h3>\n                    </ion-item>\n                    <ion-item no-lines>\n                      <h3>E-mail:</h3>&nbsp;<h3>{{this.email}}</h3>\n                    </ion-item>\n                </ion-col>\n                <ion-col>\n                  <ion-item no-lines>\n                    <h3>Data de nascimento:</h3>&nbsp;<h3>{{this.data_nasc|date: \"dd/MM/yyyy\"}}</h3>\n                  </ion-item>\n                  <ion-item no-lines>\n                    <h3>Telefone:</h3>&nbsp;<h3>{{this.telefone}}</h3>\n                  </ion-item>\n                  <ion-item no-lines>\n                    <h3>Profissao:</h3>&nbsp;<h3>{{this.profissao}}</h3>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n            </ion-list>\n          </ion-card-content>\n      </ion-card>\n      <ion-card>\n          <ion-card-header>\n            <ion-card-title text-center>Endereço</ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n            <ion-list lines=\"none\">\n                <ion-item no-lines>\n                    <h3>Endereço:</h3>&nbsp;<h3>{{this.endereco}}</h3>\n                  </ion-item>\n                  <ion-item no-lines>\n                    <h3>Cidade:</h3>&nbsp;<h3>{{this.cidade}}</h3>\n                  </ion-item>\n                  <ion-item no-lines>\n                    <h3>Estado:</h3>&nbsp;<h3>{{this.estado}}</h3>\n                  </ion-item>\n            </ion-list>\n          </ion-card-content>\n      </ion-card>\n      <ion-card>\n          <ion-card-header>\n            <ion-card-title text-center>Cargo</ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n            <ion-list lines=\"none\">\n                <ion-item no-lines>\n                    <h3>Cargo:</h3>&nbsp;<h3>{{this.cargo}}</h3>\n                </ion-item>\n                <ion-item no-lines>\n                  <h3>Nivel:</h3>&nbsp;<h3>{{this.nivel}}</h3>\n                </ion-item>\n            </ion-list>\n          </ion-card-content>\n      </ion-card>\n  </ion-content>\n  "

/***/ }),

/***/ "./src/app/pages/auth/account/account.module.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/auth/account/account.module.ts ***!
  \******************************************************/
/*! exports provided: AccountPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountPageModule", function() { return AccountPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _account_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./account.page */ "./src/app/pages/auth/account/account.page.ts");







var routes = [
    {
        path: '',
        component: _account_page__WEBPACK_IMPORTED_MODULE_6__["AccountPage"]
    }
];
var AccountPageModule = /** @class */ (function () {
    function AccountPageModule() {
    }
    AccountPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_account_page__WEBPACK_IMPORTED_MODULE_6__["AccountPage"]]
        })
    ], AccountPageModule);
    return AccountPageModule;
}());



/***/ }),

/***/ "./src/app/pages/auth/account/account.page.scss":
/*!******************************************************!*\
  !*** ./src/app/pages/auth/account/account.page.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2F1dGgvYWNjb3VudC9hY2NvdW50LnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/auth/account/account.page.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/auth/account/account.page.ts ***!
  \****************************************************/
/*! exports provided: AccountPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountPage", function() { return AccountPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _route_to_preload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../route-to-preload */ "./src/app/route-to-preload.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");





var AccountPage = /** @class */ (function () {
    function AccountPage(authService, routingService, navCtrl) {
        this.authService = authService;
        this.routingService = routingService;
        this.navCtrl = navCtrl;
    }
    AccountPage.prototype.ngOnInit = function () { };
    AccountPage.prototype.ionViewWillEnter = function () {
        this.showUser();
    };
    AccountPage.prototype.ionViewDidEnter = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.routingService.preloadRoute('admin')];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.routingService.preloadRoute('editsenha')];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.routingService.preloadRoute('editdados')];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AccountPage.prototype.showUser = function () {
        var _this = this;
        this.authService.user()
            .subscribe(function (data) {
            _this.id = data.id;
            _this.fname = data.first_name.replace("\"", "");
            _this.lname = data.last_name.replace("\"", "");
            _this.email = data.email.replace("\"", "");
            _this.endereco = data.endereco.replace("\"", "");
            _this.cidade = data.cidade.replace("\"", "");
            _this.estado = data.estado.replace("\"", "");
            _this.telefone = data.telefone.replace("\"", "");
            _this.data_nasc = data.data_nasc.replace("\"", "");
            _this.profissao = data.profissao.replace("\"", "");
            _this.authService.getIdCargos(data.cargo_id).subscribe(function (resul) {
                _this.cargo = resul;
            });
            if (data.nivel == 1)
                _this.nivel = "Aprendiz";
            else if (data.nivel == 2)
                _this.nivel = "Companheiro";
            else if (data.nivel == 3)
                _this.nivel = "Mestre";
        }, function (error) {
            //console.log("error: " + error);
        });
    };
    AccountPage.prototype.editarDados = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.navCtrl.navigateForward('/editdados');
                return [2 /*return*/];
            });
        });
    };
    AccountPage.prototype.editarSenha = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.navCtrl.navigateForward('/editsenha');
                return [2 /*return*/];
            });
        });
    };
    AccountPage.ctorParameters = function () { return [
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _route_to_preload__WEBPACK_IMPORTED_MODULE_1__["AppRoutingPreloaderService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] }
    ]; };
    AccountPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'app-account',
            template: __webpack_require__(/*! raw-loader!./account.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/auth/account/account.page.html"),
            styles: [__webpack_require__(/*! ./account.page.scss */ "./src/app/pages/auth/account/account.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _route_to_preload__WEBPACK_IMPORTED_MODULE_1__["AppRoutingPreloaderService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]])
    ], AccountPage);
    return AccountPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-auth-account-account-module-es5.js.map