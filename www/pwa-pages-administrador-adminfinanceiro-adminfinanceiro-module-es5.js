(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pwa-pages-administrador-adminfinanceiro-adminfinanceiro-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pwa-pages/administrador/adminfinanceiro/adminfinanceiro.page.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pwa-pages/administrador/adminfinanceiro/adminfinanceiro.page.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n      <ion-title>Financeiro</ion-title>\n    </ion-toolbar>\n  </ion-header>\n    \n  <ion-content padding>\n      <ion-card>\n        <ion-card-header>\n          <ion-buttons>\n            <ion-button color=\"primary\" fill=\"clear\" [disabled]=\"disabled1\" (click)=\"cadastrar()\">CADASTRAR</ion-button>\n            <ion-button color=\"primary\" fill=\"clear\" (click)=\"relatorio()\">RELATÓRIO</ion-button>\n          </ion-buttons>\n        </ion-card-header>\n      </ion-card>\n      <ion-card>\n          <ion-card-header>\n            <ion-card-title text-center>{{this.atual}}</ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n            <ion-list lines=\"none\">\n              <ion-row>\n                <ion-col size=\"5\">\n                  <ion-item>\n                    <h2>Nome</h2>\n                  </ion-item>\n                </ion-col>\n                <ion-col size=\"5\">\n                  <ion-item>\n                    <h2>Situação</h2>\n                  </ion-item>\n                </ion-col>\n                <ion-col size=\"2\">\n                  <ion-item>\n                    <h2></h2>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n              <ion-row *ngFor=\"let financeiros of financeiro\">\n                  <ion-col size=\"5\">\n                    <ion-item>\n                      <ion-label>{{financeiros.nome}}</ion-label>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col size=\"5\">\n                    <ion-item>\n                      <ion-label>{{financeiros.data_pag}}</ion-label>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col size=\"2\">\n                    <ion-item>\n                      <ion-buttons slot=\"end\">\n                        <ion-button color=\"primary\" fill=\"clear\" (click)=\"editar(financeiros.id)\"><ion-icon name=\"create\"></ion-icon></ion-button>\n                      </ion-buttons>\n                    </ion-item>\n                  </ion-col>\n              </ion-row>\n            </ion-list>\n          </ion-card-content>\n        </ion-card>\n  </ion-content>"

/***/ }),

/***/ "./src/app/pwa-pages/administrador/adminfinanceiro/adminfinanceiro.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pwa-pages/administrador/adminfinanceiro/adminfinanceiro.module.ts ***!
  \***********************************************************************************/
/*! exports provided: AdminfinanceiroPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminfinanceiroPageModule", function() { return AdminfinanceiroPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _adminfinanceiro_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./adminfinanceiro.page */ "./src/app/pwa-pages/administrador/adminfinanceiro/adminfinanceiro.page.ts");







var routes = [
    {
        path: '',
        component: _adminfinanceiro_page__WEBPACK_IMPORTED_MODULE_6__["AdminfinanceiroPage"]
    }
];
var AdminfinanceiroPageModule = /** @class */ (function () {
    function AdminfinanceiroPageModule() {
    }
    AdminfinanceiroPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            //declarations: [AdminfinanceiroPage, CadastrafinanceiroPage],
            declarations: [_adminfinanceiro_page__WEBPACK_IMPORTED_MODULE_6__["AdminfinanceiroPage"]]
        })
    ], AdminfinanceiroPageModule);
    return AdminfinanceiroPageModule;
}());



/***/ }),

/***/ "./src/app/pwa-pages/administrador/adminfinanceiro/adminfinanceiro.page.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/pwa-pages/administrador/adminfinanceiro/adminfinanceiro.page.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3B3YS1wYWdlcy9hZG1pbmlzdHJhZG9yL2FkbWluZmluYW5jZWlyby9hZG1pbmZpbmFuY2Vpcm8ucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pwa-pages/administrador/adminfinanceiro/adminfinanceiro.page.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pwa-pages/administrador/adminfinanceiro/adminfinanceiro.page.ts ***!
  \*********************************************************************************/
/*! exports provided: AdminfinanceiroPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminfinanceiroPage", function() { return AdminfinanceiroPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _route_to_preload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../route-to-preload */ "./src/app/route-to-preload.ts");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");







var AdminfinanceiroPage = /** @class */ (function () {
    function AdminfinanceiroPage(authService, navCtrl, datePipe, alertCtrl, alertService, routingService) {
        this.authService = authService;
        this.navCtrl = navCtrl;
        this.datePipe = datePipe;
        this.alertCtrl = alertCtrl;
        this.alertService = alertService;
        this.routingService = routingService;
        this.disabled1 = true;
        this.financeiro = [];
        this.data = new Date();
    }
    AdminfinanceiroPage.prototype.ngOnInit = function () {
    };
    AdminfinanceiroPage.prototype.ionViewDidEnter = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.routingService.preloadRoute('admin')];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.routingService.preloadRoute('hisrelatorio')];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.routingService.preloadRoute('cadastrafinanceiro')];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AdminfinanceiroPage.prototype.ionViewWillEnter = function () {
        this.showSituacao();
        this.permissao();
    };
    AdminfinanceiroPage.prototype.permissao = function () {
        var _this = this;
        this.authService.user().subscribe(function (data) {
            if (data.cargo_id == 1 || data.cargo_id == 3 || data.cargo_id == 4) {
                _this.disabled1 = false;
            }
        });
    };
    AdminfinanceiroPage.prototype.showMes = function (mes) {
        if (mes == 1)
            this.atual = "Janeiro";
        else if (mes == 2)
            this.atual = "Fevereiro";
        else if (mes == 3)
            this.atual = "Março";
        else if (mes == 4)
            this.atual = "Abril";
        else if (mes == 5)
            this.atual = "Maio";
        else if (mes == 6)
            this.atual = "Junho";
        else if (mes == 7)
            this.atual = "Julho";
        else if (mes == 8)
            this.atual = "Agosto";
        else if (mes == 9)
            this.atual = "Setembro";
        else if (mes == 10)
            this.atual = "Outubro";
        else if (mes == 11)
            this.atual = "Novembro";
        else if (mes == 12)
            this.atual = "Dezembro";
    };
    AdminfinanceiroPage.prototype.showSituacao = function () {
        var _this = this;
        this.mes = this.datePipe.transform(this.data, 'MM');
        this.showMes(this.mes);
        this.authService.getAdminFinanceiro().subscribe(function (data) {
            for (var i = 0; i < data.length; i++) {
                _this.financeiro[i] = data[i];
                if (data[i].data_pag == null)
                    _this.financeiro[i].data_pag = "Aguardando";
                else
                    _this.financeiro[i].data_pag = "Pago";
            }
        });
    };
    AdminfinanceiroPage.prototype.cadastrar = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.navCtrl.navigateForward('/cadastrafinanceiro');
                return [2 /*return*/];
            });
        });
    };
    AdminfinanceiroPage.prototype.relatorio = function () {
        this.navCtrl.navigateForward('/hisrelatorio');
    };
    AdminfinanceiroPage.prototype.editar = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: 'Editar situação',
                            inputs: [
                                {
                                    name: 'pg',
                                    type: 'radio',
                                    label: 'Pago',
                                    value: '1',
                                    checked: true
                                },
                                {
                                    name: 'pg',
                                    type: 'radio',
                                    label: 'Aguardando',
                                    value: '0'
                                }
                            ],
                            buttons: [
                                {
                                    text: 'Cancelar',
                                    //role cancel deixa ele como segunda opcao
                                    role: 'cancel',
                                    cssClass: 'secondary'
                                },
                                {
                                    text: 'Ok',
                                    handler: function (form) {
                                        _this.edit(form, id);
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AdminfinanceiroPage.prototype.edit = function (form, id) {
        var _this = this;
        this.pagamento = this.datePipe.transform(this.data, 'yyyy-MM-dd');
        this.authService.updateFinanceiro(id, form).subscribe(function (data) {
            _this.alertService.presentToast("Financeiro editado com sucesso!");
            window.location.reload();
        });
    };
    AdminfinanceiroPage.ctorParameters = function () { return [
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
        { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"] },
        { type: _route_to_preload__WEBPACK_IMPORTED_MODULE_1__["AppRoutingPreloaderService"] }
    ]; };
    AdminfinanceiroPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
            selector: 'app-adminfinanceiro',
            template: __webpack_require__(/*! raw-loader!./adminfinanceiro.page.html */ "./node_modules/raw-loader/index.js!./src/app/pwa-pages/administrador/adminfinanceiro/adminfinanceiro.page.html"),
            styles: [__webpack_require__(/*! ./adminfinanceiro.page.scss */ "./src/app/pwa-pages/administrador/adminfinanceiro/adminfinanceiro.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"],
            _services_alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"],
            _route_to_preload__WEBPACK_IMPORTED_MODULE_1__["AppRoutingPreloaderService"]])
    ], AdminfinanceiroPage);
    return AdminfinanceiroPage;
}());



/***/ })

}]);
//# sourceMappingURL=pwa-pages-administrador-adminfinanceiro-adminfinanceiro-module-es5.js.map