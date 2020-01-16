(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pwa-pages-cadastra-cadastrausuario-cadastrausuario-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pwa-pages/cadastra/cadastrausuario/cadastrausuario.page.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pwa-pages/cadastra/cadastrausuario/cadastrausuario.page.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n          <ion-back-button></ion-back-button>\n      </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content padding>\n    <ion-grid>\n      <div class=\"box\">\n          <h1>Registro</h1>\n          <br>\n          <form #form=\"ngForm\" (ngSubmit)=\"register(form)\" method=\"POST\">\n            <ion-grid>\n                <ion-input ngModel name=\"fName\" placeholder=\"Nome\" type=\"text\" pattern=\"[A-Za-z\\s]+\" maxlength=\"50\" required></ion-input>\n            </ion-grid>\n            <br>\n            <ion-grid>\n              <ion-input ngModel name=\"lName\" placeholder=\"Sobrenome\" type=\"text\" pattern=\"[A-Za-z\\s]+\" maxlength=\"50\" required></ion-input>\n            </ion-grid>\n            <br>\n            <ion-grid>\n              <ion-datetime ngModel name=\"data_nasc\" placeholder=\"Data de nascimento\" display-format=\"DD/MM/YYYY\" required></ion-datetime>\n            </ion-grid>\n            <br>\n            <ion-grid>\n              <ion-input type=\"email\" ngModel name=\"email\" placeholder=\"E-mail\" pattern=\"[-a-zA-Z0-9~!$%^&amp;*_=+}{'?]+(\\.[-a-zA-Z0-9~!$%^&amp;*_=+}{'?]+)*@([a-zA-Z0-9_][-a-zA-Z0-9_]*(\\.[-a-zA-Z0-9_]+)*\\.([cC][oO][mM]))(:[0-9]{1,5})?\" required></ion-input>\n              <ion-label>exemplo@exe.com</ion-label>\n            </ion-grid>\n            <br>\n            <ion-grid>\n              <ion-input type=\"tel\" ngModel name=\"telefone\" placeholder=\"Telefone\" required pattern=\"[0-9.-]{8,10}$\"></ion-input>\n                <ion-label>0000-0000</ion-label>\n            </ion-grid>\n            <br>\n            <ion-grid>\n              <ion-input ngModel name=\"profissao\" placeholder=\"Profissão\" type=\"text\" pattern=\"[A-Za-z\\s]+\" maxlength=\"50\" required></ion-input>\n            </ion-grid>\n            <br>\n            <ion-grid>\n              <ion-input ngModel name=\"endereco\" placeholder=\"Endereço\" type=\"text\" pattern=\"[A-Za-z0-9\\s]+\" required></ion-input>\n            </ion-grid>\n            <br>\n            <ion-grid>\n              <ion-input ngModel name=\"cidade\" placeholder=\"Cidade\" type=\"text\" pattern=\"[A-Za-z\\s]+\" required></ion-input>\n            </ion-grid>\n            <br>\n            <ion-grid>\n              <ion-select placeHolder=\"Selecione o estado\" ngModel name=\"estado\" required >\n                <ion-select-option *ngFor=\"let uf of ufs\" value=\"{{uf}}\">{{uf}}</ion-select-option>\n              </ion-select> \n            </ion-grid>\n            <br>\n            <ion-grid>\n              <ion-select placeHolder=\"Selecione o cargo\" ngModel name=\"cargo\"  required>\n              <ion-select-option *ngFor=\"let cargo of cargos\" value=\"{{cargo}}\">{{cargo}}</ion-select-option>\n              </ion-select> \n            </ion-grid>\n            <br>\n            <ion-grid>\n              <ion-list lines=\"none\">\n                <ion-radio-group ngModel name=\"nivel\">\n                  <ion-list-header>\n                    <ion-label>Nível</ion-label>\n                  </ion-list-header>\n                  <ion-item>\n                    <ion-label>Aprendiz</ion-label>\n                    <ion-radio value=\"1\" slot=\"start\" checked></ion-radio>\n                  </ion-item>\n                  <ion-item>\n                    <ion-label>Companheiro</ion-label>\n                    <ion-radio value=\"2\"slot=\"start\"></ion-radio>\n                  </ion-item>\n                  <ion-item>\n                    <ion-label>Mestre</ion-label>\n                    <ion-radio value=\"3\"slot=\"start\"></ion-radio>\n                  </ion-item>\n                </ion-radio-group>\n              </ion-list>\n            </ion-grid>\n            <br>\n            <ion-button (click)=\"hide()\">Incluir familiar</ion-button>\n            <br>\n            <div *ngIf=\"hideme\">\n                <h2>Cadastrar Familiar</h2>\n                <ion-grid>\n                    <ion-select ngModel name=\"grau1\" placeholder=\"Grau de parentesco\">\n                      <ion-select-option *ngFor=\"let graus of grau\" value=\"{{graus}}\">{{graus}}</ion-select-option>\n                    </ion-select> \n                </ion-grid>\n                <br>\n                <ion-grid>\n                  <ion-datetime ngModel name=\"data1\" placeholder=\"Data de nascimento\" display-format=\"DD/MM/YYYY\"></ion-datetime>\n                </ion-grid>\n                <ion-button (click)=\"plus()\">Mais</ion-button>\n                <div *ngIf=\"more\">\n                  <ion-grid>\n                      <ion-select ngModel name=\"grau2\" placeholder=\"Grau de parentesco\">\n                        <ion-select-option *ngFor=\"let graus of grau\" value=\"{{graus}}\">{{graus}}</ion-select-option>\n                      </ion-select> \n                  </ion-grid>\n                  <br>\n                  <ion-grid>\n                    <ion-datetime ngModel name=\"data2\" placeholder=\"Data de nascimento\" display-format=\"DD/MM/YYYY\"></ion-datetime>\n                  </ion-grid>\n                  <ion-button (click)=\"plus2()\">Mais</ion-button>\n                </div>\n                <div *ngIf=\"more2\">\n                    <ion-grid>\n                        <ion-select ngModel name=\"grau3\" placeholder=\"Grau de parentesco\">\n                          <ion-select-option *ngFor=\"let graus of grau\" value=\"{{graus}}\">{{graus}}</ion-select-option>\n                        </ion-select> \n                    </ion-grid>\n                    <br>\n                    <ion-grid>\n                      <ion-datetime ngModel name=\"data3\" placeholder=\"Data de nascimento\" display-format=\"DD/MM/YYYY\"></ion-datetime>\n                    </ion-grid>\n                  </div>\n            </div>\n            <br>\n            <ion-grid>\n              <ion-label>Senha padrão: 123456</ion-label>\n            </ion-grid>\n            <ion-button type=\"submit\" round expand=\"block\" color=\"danger\">Registrar</ion-button>\n            <br>\n          </form>\n      </div>\n    </ion-grid>\n  </ion-content>"

/***/ }),

/***/ "./src/app/pwa-pages/cadastra/cadastrausuario/cadastrausuario.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pwa-pages/cadastra/cadastrausuario/cadastrausuario.module.ts ***!
  \******************************************************************************/
/*! exports provided: CadastrausuarioPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastrausuarioPageModule", function() { return CadastrausuarioPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _cadastrausuario_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cadastrausuario.page */ "./src/app/pwa-pages/cadastra/cadastrausuario/cadastrausuario.page.ts");







var routes = [
    {
        path: '',
        component: _cadastrausuario_page__WEBPACK_IMPORTED_MODULE_6__["CadastrausuarioPage"]
    }
];
var CadastrausuarioPageModule = /** @class */ (function () {
    function CadastrausuarioPageModule() {
    }
    CadastrausuarioPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_cadastrausuario_page__WEBPACK_IMPORTED_MODULE_6__["CadastrausuarioPage"]]
        })
    ], CadastrausuarioPageModule);
    return CadastrausuarioPageModule;
}());



/***/ }),

/***/ "./src/app/pwa-pages/cadastra/cadastrausuario/cadastrausuario.page.scss":
/*!******************************************************************************!*\
  !*** ./src/app/pwa-pages/cadastra/cadastrausuario/cadastrausuario.page.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: rgb(115,55,212);\n  --background: radial-gradient(circle, rgba(115,55,212,1) 0%, rgba(0,214,192,1) 100%);\n}\n\n.box {\n  background-color: white;\n  margin-left: auto;\n  margin-right: auto;\n  min-height: 800px;\n  max-width: 800px;\n  padding-top: 20px;\n  border-radius: 7px !important;\n}\n\nion-input {\n  border-radius: 7px !important;\n  border: 1px solid #f1f1f1 !important;\n  text-align: justify;\n  --background:#f1f1f1;\n}\n\nion-grid {\n  padding-left: 30px;\n  padding-right: 30px;\n}\n\nion-button {\n  --border-radius: 7px;\n  padding-left: 30px;\n  padding-right: 30px;\n}\n\np {\n  color: #808080;\n}\n\nh1 {\n  color: grey;\n  text-align: center;\n}\n\nh2 {\n  color: grey;\n  text-align: center;\n}\n\nion-label {\n  color: grey;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NvZGV3aXNlL3VuaWFvdmlpL2FwcC1wd2Evc3JjL2FwcC9wd2EtcGFnZXMvY2FkYXN0cmEvY2FkYXN0cmF1c3VhcmlvL2NhZGFzdHJhdXN1YXJpby5wYWdlLnNjc3MiLCJzcmMvYXBwL3B3YS1wYWdlcy9jYWRhc3RyYS9jYWRhc3RyYXVzdWFyaW8vY2FkYXN0cmF1c3VhcmlvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDZCQUFBO0VBQ0Esb0ZBQUE7QUNDSjs7QURDRTtFQUNFLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLDZCQUFBO0FDRUo7O0FEQUU7RUFDRSw2QkFBQTtFQUNBLG9DQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtBQ0dKOztBREFFO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQ0dKOztBREFFO0VBQ0Usb0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDR0o7O0FEREU7RUFDRSxjQUFBO0FDSUo7O0FEREU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUNJSjs7QURGRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtBQ0tKOztBREhFO0VBQ0UsV0FBQTtBQ01KIiwiZmlsZSI6InNyYy9hcHAvcHdhLXBhZ2VzL2NhZGFzdHJhL2NhZGFzdHJhdXN1YXJpby9jYWRhc3RyYXVzdWFyaW8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XG4gICAgLS1iYWNrZ3JvdW5kOiByZ2IoMTE1LDU1LDIxMik7XG4gICAgLS1iYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCByZ2JhKDExNSw1NSwyMTIsMSkgMCUsIHJnYmEoMCwyMTQsMTkyLDEpIDEwMCUpO1xuICB9XG4gIC5ib3h7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIG1pbi1oZWlnaHQ6IDgwMHB4O1xuICAgIG1heC13aWR0aDogODAwcHg7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogN3B4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgaW9uLWlucHV0e1xuICAgIGJvcmRlci1yYWRpdXM6IDdweCAhaW1wb3J0YW50O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmMWYxZjEgIWltcG9ydGFudDtcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgIC0tYmFja2dyb3VuZDojZjFmMWYxO1xuICB9XG4gIFxuICBpb24tZ3JpZHtcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMzBweDtcbiAgfVxuICBcbiAgaW9uLWJ1dHRvbntcbiAgICAtLWJvcmRlci1yYWRpdXM6IDdweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMzBweDtcbiAgfVxuICBwe1xuICAgIGNvbG9yOiM4MDgwODBcbiAgfVxuICBcbiAgaDF7XG4gICAgY29sb3I6IGdyZXk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIGgye1xuICAgIGNvbG9yOiBncmV5O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICBpb24tbGFiZWx7XG4gICAgY29sb3I6IGdyZXk7XG4gIH0iLCJpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogcmdiKDExNSw1NSwyMTIpO1xuICAtLWJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsIHJnYmEoMTE1LDU1LDIxMiwxKSAwJSwgcmdiYSgwLDIxNCwxOTIsMSkgMTAwJSk7XG59XG5cbi5ib3gge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWluLWhlaWdodDogODAwcHg7XG4gIG1heC13aWR0aDogODAwcHg7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA3cHggIWltcG9ydGFudDtcbn1cblxuaW9uLWlucHV0IHtcbiAgYm9yZGVyLXJhZGl1czogN3B4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmMWYxZjEgIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgLS1iYWNrZ3JvdW5kOiNmMWYxZjE7XG59XG5cbmlvbi1ncmlkIHtcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xufVxuXG5pb24tYnV0dG9uIHtcbiAgLS1ib3JkZXItcmFkaXVzOiA3cHg7XG4gIHBhZGRpbmctbGVmdDogMzBweDtcbiAgcGFkZGluZy1yaWdodDogMzBweDtcbn1cblxucCB7XG4gIGNvbG9yOiAjODA4MDgwO1xufVxuXG5oMSB7XG4gIGNvbG9yOiBncmV5O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmgyIHtcbiAgY29sb3I6IGdyZXk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW9uLWxhYmVsIHtcbiAgY29sb3I6IGdyZXk7XG59Il19 */"

/***/ }),

/***/ "./src/app/pwa-pages/cadastra/cadastrausuario/cadastrausuario.page.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pwa-pages/cadastra/cadastrausuario/cadastrausuario.page.ts ***!
  \****************************************************************************/
/*! exports provided: CadastrausuarioPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastrausuarioPage", function() { return CadastrausuarioPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_route_to_preload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/route-to-preload */ "./src/app/route-to-preload.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_services_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/global.service */ "./src/app/services/global.service.ts");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");









var CadastrausuarioPage = /** @class */ (function () {
    function CadastrausuarioPage(authService, alertService, storage, global, dataPipe, navCtrl, routingService) {
        this.authService = authService;
        this.alertService = alertService;
        this.storage = storage;
        this.global = global;
        this.dataPipe = dataPipe;
        this.navCtrl = navCtrl;
        this.routingService = routingService;
        this.grau = [
            'Pai', 'Mãe', 'Filho', 'Irmão', 'Irmã', 'Filho', 'Filha', 'Avô', 'Avó', 'Neto', 'Neta',
            'Tio', 'Tia', 'Sobrinho', 'Sobrinha', 'Primo', 'Prima', 'Sogro', 'Sogra', 'Genro', 'Nora',
            'Padrasto', 'Madrasta', 'Enteado', 'Enteada', 'Cunhado', 'Cunhada', 'Madrinha', 'Padrinho'
        ];
        this.ufs = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA',
            'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'];
        this.cargos = [];
        this.aventals = [];
    }
    CadastrausuarioPage.prototype.ngOnInit = function () {
    };
    CadastrausuarioPage.prototype.ionViewWillEnter = function () {
        this.show();
    };
    CadastrausuarioPage.prototype.ionViewDidEnter = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.routingService.preloadRoute('adminusuario')];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CadastrausuarioPage.prototype.hide = function () {
        this.hideme = !this.hideme;
    };
    CadastrausuarioPage.prototype.plus = function () {
        this.more = !this.more;
    };
    CadastrausuarioPage.prototype.plus2 = function () {
        this.more2 = !this.more2;
    };
    CadastrausuarioPage.prototype.dismiss = function () {
        this.navCtrl.navigateForward('/adminusuario');
    };
    CadastrausuarioPage.prototype.show = function () {
        var _this = this;
        this.authService.getCargos().subscribe(function (data) {
            for (var i = 0; i < data.length; i++) {
                _this.cargos[i] = data[i].cargo;
            }
        }, function (error) {
            // console.log("error: " + error);
        });
    };
    CadastrausuarioPage.prototype.register = function (form) {
        var _this = this;
        this.auxtel = form.value.telefone.replace(/\D+/g, '');
        this.auxdata = form.value.data_nasc;
        this.daux = this.auxdata.split('T')[0];
        this.authService.getCargos().subscribe(function (data) {
            for (var i = 0; i < data.length; i++) {
                if (data[i].cargo == form.value.cargo) {
                    _this.storage.set('cargo', data[i].id);
                }
            }
        });
        //registra o usuário
        this.authService.register(form.value.fName, form.value.lName, form.value.email, "123456", this.daux, this.global.cargo, form.value.nivel, this.auxtel, form.value.endereco, form.value.cidade, form.value.estado, form.value.profissao).subscribe(function (data) {
            _this.id = data;
            _this.storage.set('avental', form.value.nivel);
            if (form.value.grau1 && form.value.data1) {
                _this.data_nasc = _this.dataPipe.transform(form.value.data1, 'yyyy-MM-dd');
                //adiciona membro da familia 1
                _this.authService.familia(_this.id, form.value.grau1, _this.data_nasc).subscribe(function (resp) {
                    // console.log('1 de 3 cadastrado');
                }, function (error) {
                    _this.alertService.presentToast("Verifique os campos de cadastro de familiar!");
                });
            }
            if (form.value.grau2 && form.value.data2) {
                _this.data_nasc = _this.dataPipe.transform(form.value.data2, 'yyyy-MM-dd');
                //adiciona membro da familia 2
                _this.authService.familia(_this.id, form.value.grau2, _this.data_nasc).subscribe(function (resp) {
                    // console.log('2 de 3 cadastrado');
                }, function (error) {
                    _this.alertService.presentToast("Verifique os campos de cadastro de familiar!");
                });
            }
            if (form.value.grau3 && form.value.data3) {
                _this.data_nasc = _this.dataPipe.transform(form.value.data3, 'yyyy-MM-dd');
                //adiciona membro da familia 3
                _this.authService.familia(_this.id, form.value.grau3, _this.data_nasc).subscribe(function (resp) {
                    // console.log('3 de 3 cadastrado');
                }, function (error) {
                    _this.alertService.presentToast("Verifique os campos de cadastro de familiar!");
                });
            }
            _this.dismiss();
            _this.alertService.presentToast("Usuário cadastrado!");
        }, function (error) {
            _this.alertService.presentToast("Preencha todos os campos corretamente!");
        });
    };
    CadastrausuarioPage.ctorParameters = function () { return [
        { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
        { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"] },
        { type: src_app_services_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: src_app_route_to_preload__WEBPACK_IMPORTED_MODULE_1__["AppRoutingPreloaderService"] }
    ]; };
    CadastrausuarioPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"])({
            selector: 'app-cadastrausuario',
            template: __webpack_require__(/*! raw-loader!./cadastrausuario.page.html */ "./node_modules/raw-loader/index.js!./src/app/pwa-pages/cadastra/cadastrausuario/cadastrausuario.page.html"),
            styles: [__webpack_require__(/*! ./cadastrausuario.page.scss */ "./src/app/pwa-pages/cadastra/cadastrausuario/cadastrausuario.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
            _services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"],
            src_app_services_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            src_app_route_to_preload__WEBPACK_IMPORTED_MODULE_1__["AppRoutingPreloaderService"]])
    ], CadastrausuarioPage);
    return CadastrausuarioPage;
}());



/***/ })

}]);
//# sourceMappingURL=pwa-pages-cadastra-cadastrausuario-cadastrausuario-module-es5.js.map