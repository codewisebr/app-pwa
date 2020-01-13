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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _account_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./account.page */ "./src/app/pages/auth/account/account.page.ts");







const routes = [
    {
        path: '',
        component: _account_page__WEBPACK_IMPORTED_MODULE_6__["AccountPage"]
    }
];
let AccountPageModule = class AccountPageModule {
};
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");





let AccountPage = class AccountPage {
    constructor(authService, routingService, navCtrl) {
        this.authService = authService;
        this.routingService = routingService;
        this.navCtrl = navCtrl;
    }
    ngOnInit() { }
    ionViewWillEnter() {
        this.showUser();
    }
    ionViewDidEnter() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.routingService.preloadRoute('admin');
            yield this.routingService.preloadRoute('editsenha');
            yield this.routingService.preloadRoute('editdados');
        });
    }
    showUser() {
        this.authService.user()
            .subscribe(data => {
            this.id = data.id;
            this.fname = data.first_name.replace("\"", "");
            this.lname = data.last_name.replace("\"", "");
            this.email = data.email.replace("\"", "");
            this.endereco = data.endereco.replace("\"", "");
            this.cidade = data.cidade.replace("\"", "");
            this.estado = data.estado.replace("\"", "");
            this.telefone = data.telefone.replace("\"", "");
            this.data_nasc = data.data_nasc.replace("\"", "");
            this.profissao = data.profissao.replace("\"", "");
            this.authService.getIdCargos(data.cargo_id).subscribe(resul => {
                this.cargo = resul;
            });
            if (data.nivel == 1)
                this.nivel = "Aprendiz";
            else if (data.nivel == 2)
                this.nivel = "Companheiro";
            else if (data.nivel == 3)
                this.nivel = "Mestre";
        }, error => {
            //console.log("error: " + error);
        });
    }
    editarDados() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.navCtrl.navigateForward('/editdados');
        });
    }
    editarSenha() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.navCtrl.navigateForward('/editsenha');
        });
    }
};
AccountPage.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _route_to_preload__WEBPACK_IMPORTED_MODULE_1__["AppRoutingPreloaderService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] }
];
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



/***/ })

}]);
//# sourceMappingURL=pages-auth-account-account-module-es2015.js.map