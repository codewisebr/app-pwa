(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-auth-register-register-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/auth/register/register.page.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/auth/register/register.page.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n          <ion-back-button></ion-back-button>\n      </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content padding>\n  <ion-grid>\n    <div class=\"box\">\n      <h1>Registro</h1>\n      <br>\n      <form #form=\"ngForm\" (ngSubmit)=\"register(form)\" method=\"POST\">\n        <ion-grid>\n            <ion-input ngModel name=\"fName\" placeholder=\"Nome\" type=\"text\" pattern=\"[A-Za-z\\s]+\" maxlength=\"50\" required></ion-input>\n        </ion-grid>\n        <br>\n        <ion-grid>\n          <ion-input ngModel name=\"lName\" placeholder=\"Sobrenome\" type=\"text\" pattern=\"[A-Za-z\\s]+\" maxlength=\"50\" required></ion-input>\n        </ion-grid>\n        <br>\n        <ion-grid>\n          <ion-datetime ngModel name=\"data_nasc\" placeholder=\"Data de nascimento\" display-format=\"DD/MM/YYYY\" required=\"true\"></ion-datetime>\n        </ion-grid>\n        <br>\n        <ion-grid>\n          <ion-input type=\"email\" ngModel name=\"email\" placeholder=\"E-mail\" pattern=\"[-a-zA-Z0-9~!$%^&amp;*_=+}{'?]+(\\.[-a-zA-Z0-9~!$%^&amp;*_=+}{'?]+)*@([a-zA-Z0-9_][-a-zA-Z0-9_]*(\\.[-a-zA-Z0-9_]+)*\\.([cC][oO][mM]))(:[0-9]{1,5})?\" required=\"true\"></ion-input>\n          <ion-label>exemplo@exe.com</ion-label>\n        </ion-grid>\n        <br>\n        <ion-grid>\n          <ion-input type=\"tel\" ngModel name=\"telefone\" placeholder=\"Telefone\" required=\"true\" pattern=\"[0-9.-]{11,12}$\"></ion-input>\n          <ion-label>DD00000-0000</ion-label>\n        </ion-grid>\n        <br>\n        <ion-grid>\n          <ion-input ngModel name=\"profissao\" placeholder=\"Profissão\" type=\"text\" pattern=\"[A-Za-z\\s]+\" maxlength=\"50\" required></ion-input>\n        </ion-grid>\n        <br>\n        <ion-grid>\n          <ion-input ngModel name=\"endereco\" placeholder=\"Endereço\" type=\"text\" pattern=\"[A-Za-z0-9\\s]+\" required=\"true\"></ion-input>\n        </ion-grid>\n        <br>\n        <ion-grid>\n          <ion-input ngModel name=\"cidade\" placeholder=\"Cidade\" type=\"text\" pattern=\"[A-Za-z\\s]+\" required=\"true\"></ion-input>\n        </ion-grid>\n        <br>\n        <ion-grid>\n          <ion-select placeHolder=\"Selecione o estado\" ngModel name=\"estado\" required=\"true\" >\n            <ion-select-option *ngFor=\"let uf of ufs\" value=\"{{uf}}\">{{uf}}</ion-select-option>\n          </ion-select> \n        </ion-grid>\n        <br>\n        <ion-grid>\n          <ion-select placeHolder=\"Selecione o cargo\" ngModel name=\"cargo\"  required=\"true\">\n          <ion-select-option *ngFor=\"let cargo of cargos\" value=\"{{cargo}}\">{{cargo}}</ion-select-option>\n          </ion-select> \n        </ion-grid>\n        <br>\n        <ion-grid>\n          <ion-select placeHolder=\"Selecione o avental\" ngModel name=\"avental\" required=\"true\">\n            <ion-select-option *ngFor=\"let aventals of avental\" value=\"{{aventals}}\">{{aventals}}</ion-select-option>\n          </ion-select>\n        </ion-grid>\n        <br>\n        <ion-grid>\n          <ion-list lines=\"none\">\n            <ion-radio-group ngModel name=\"nivel\">\n              <ion-list-header>\n                <ion-label>Nível</ion-label>\n              </ion-list-header>\n              <ion-item>\n                <ion-label>Aprendiz</ion-label>\n                <ion-radio value=\"1\" slot=\"start\" checked></ion-radio>\n              </ion-item>\n              <ion-item>\n                <ion-label>Companheiro</ion-label>\n                <ion-radio value=\"2\"slot=\"start\"></ion-radio>\n              </ion-item>\n              <ion-item>\n                <ion-label>Mestre</ion-label>\n                <ion-radio value=\"3\"slot=\"start\"></ion-radio>\n              </ion-item>\n            </ion-radio-group>\n          </ion-list>\n        </ion-grid>\n        <br>\n        <ion-grid>\n          <ion-input type=\"password\" ngModel name=\"password\" placeholder=\"Senha\" pattern=\"[a-z0-9._%+-]{6,}$\" required=\"true\"title=\"Minimo 6 caracteres\"></ion-input>\n          <ion-label>Mínimo 6 caracteres</ion-label>\n        </ion-grid>\n        <br>\n        <ion-grid>\n          <ion-input type=\"password\" ngModel name=\"password_s\" placeholder=\"Confirmar senha\" pattern=\"[a-z0-9._%+-]{6,}$\" required=\"true\"></ion-input>\n          <ion-label>Mínimo 6 caracteres</ion-label>\n        </ion-grid>\n        <br>\n        <ion-button type=\"submit\" round expand=\"block\" color=\"danger\">Registrar</ion-button>\n      </form>\n      <p text-center >Já possui uma conta?</p>\n      <ion-button round expand=\"block\" color=\"primary\" (click)=\"loginModal()\">Login</ion-button>\n      <br>\n    </div>\n  </ion-grid>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/auth/register/register.module.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/auth/register/register.module.ts ***!
  \********************************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register.page */ "./src/app/pages/auth/register/register.page.ts");







const routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]
    }
];
let RegisterPageModule = class RegisterPageModule {
};
RegisterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
    })
], RegisterPageModule);



/***/ }),

/***/ "./src/app/pages/auth/register/register.page.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/auth/register/register.page.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: rgb(115,55,212);\n  --background: radial-gradient(circle, rgba(115,55,212,1) 0%, rgba(0,214,192,1) 100%);\n}\n\n.box {\n  background-color: white;\n  margin-left: auto;\n  margin-right: auto;\n  min-height: 800px;\n  max-width: 800px;\n  padding-top: 20px;\n  border-radius: 7px !important;\n}\n\nion-input {\n  border-radius: 7px !important;\n  border: 1px solid #f1f1f1 !important;\n  text-align: justify;\n  --background:#f1f1f1;\n}\n\nion-grid {\n  padding-left: 30px;\n  padding-right: 30px;\n}\n\nion-button {\n  --border-radius: 7px;\n  padding-left: 30px;\n  padding-right: 30px;\n}\n\np {\n  color: #808080;\n}\n\nh1 {\n  color: grey;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NvZGV3aXNlL3VuaWFvdmlpL2FwcC1wd2Evc3JjL2FwcC9wYWdlcy9hdXRoL3JlZ2lzdGVyL3JlZ2lzdGVyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvYXV0aC9yZWdpc3Rlci9yZWdpc3Rlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw2QkFBQTtFQUNBLG9GQUFBO0FDQ0Y7O0FEQ0E7RUFDRSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSw2QkFBQTtBQ0VGOztBREFBO0VBQ0UsNkJBQUE7RUFDQSxvQ0FBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7QUNHRjs7QURBQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUNHRjs7QURBQTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ0dGOztBRERBO0VBQ0UsY0FBQTtBQ0lGOztBRERBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0FDSUYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hdXRoL3JlZ2lzdGVyL3JlZ2lzdGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xuICAtLWJhY2tncm91bmQ6IHJnYigxMTUsNTUsMjEyKTtcbiAgLS1iYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCByZ2JhKDExNSw1NSwyMTIsMSkgMCUsIHJnYmEoMCwyMTQsMTkyLDEpIDEwMCUpO1xufVxuLmJveHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1pbi1oZWlnaHQ6IDgwMHB4O1xuICBtYXgtd2lkdGg6IDgwMHB4O1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogN3B4ICFpbXBvcnRhbnQ7XG59XG5pb24taW5wdXR7XG4gIGJvcmRlci1yYWRpdXM6IDdweCAhaW1wb3J0YW50O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZjFmMWYxICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIC0tYmFja2dyb3VuZDojZjFmMWYxO1xufVxuXG5pb24tZ3JpZHtcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xufVxuXG5pb24tYnV0dG9ue1xuICAtLWJvcmRlci1yYWRpdXM6IDdweDtcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xufVxucHtcbiAgY29sb3I6IzgwODA4MFxufVxuXG5oMXtcbiAgY29sb3I6IGdyZXk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iLCJpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogcmdiKDExNSw1NSwyMTIpO1xuICAtLWJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsIHJnYmEoMTE1LDU1LDIxMiwxKSAwJSwgcmdiYSgwLDIxNCwxOTIsMSkgMTAwJSk7XG59XG5cbi5ib3gge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWluLWhlaWdodDogODAwcHg7XG4gIG1heC13aWR0aDogODAwcHg7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA3cHggIWltcG9ydGFudDtcbn1cblxuaW9uLWlucHV0IHtcbiAgYm9yZGVyLXJhZGl1czogN3B4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmMWYxZjEgIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgLS1iYWNrZ3JvdW5kOiNmMWYxZjE7XG59XG5cbmlvbi1ncmlkIHtcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xufVxuXG5pb24tYnV0dG9uIHtcbiAgLS1ib3JkZXItcmFkaXVzOiA3cHg7XG4gIHBhZGRpbmctbGVmdDogMzBweDtcbiAgcGFkZGluZy1yaWdodDogMzBweDtcbn1cblxucCB7XG4gIGNvbG9yOiAjODA4MDgwO1xufVxuXG5oMSB7XG4gIGNvbG9yOiBncmV5O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/auth/register/register.page.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/auth/register/register.page.ts ***!
  \******************************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_route_to_preload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/route-to-preload */ "./src/app/route-to-preload.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var src_app_services_global_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/global.service */ "./src/app/services/global.service.ts");









let RegisterPage = class RegisterPage {
    constructor(authService, navCtrl, alertService, storage, global, platform, menu, routingService) {
        this.authService = authService;
        this.navCtrl = navCtrl;
        this.alertService = alertService;
        this.storage = storage;
        this.global = global;
        this.platform = platform;
        this.menu = menu;
        this.routingService = routingService;
        this.dataregister = _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"]; //armazena os dados para caso precise
        this.cargos = [];
        this.avental = [];
        this.ufs = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'];
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.routingService.preloadRoute('dashboard');
            yield this.routingService.preloadRoute('admin');
        });
    }
    ionViewWillEnter() {
        this.getCargos();
        this.getAvental();
    }
    loginModal() {
        this.navCtrl.navigateRoot('/home');
    }
    permissao() {
        this.platform.ready().then(() => {
            //se esta no celular
            if (this.platform.is('cordova') || this.platform.is('android') || this.platform.is('ios')) {
                this.navCtrl.navigateRoot('/dashboard');
            }
            //se esta no pc
            else if (this.platform.is('pwa') || this.platform.is('capacitor') || this.platform.is('desktop')) {
                this.navCtrl.navigateRoot('/admin');
            }
        });
    }
    register(form) {
        this.auxtel = form.value.telefone.replace(/\D+/g, '');
        this.auxdata = form.value.data_nasc;
        this.daux = this.auxdata.split('T')[0];
        //pega o id do avental
        this.authService.getAvental().subscribe(data => {
            for (let i = 0; i < data.length; i++) {
                if (data[i].avental == form.value.avental) {
                    this.storage.set('avental', data[i].id);
                    break;
                }
            }
        });
        //pega o id do cargo
        this.authService.getCargos().subscribe(data => {
            for (let i = 0; i < data.length; i++) {
                if (data[i].cargo == form.value.cargo) {
                    this.storage.set('cargo', data[i].id);
                    break;
                }
            }
        });
        //verifica a senha
        if (form.value.password != form.value.password_s) {
            this.alertService.presentToast("Senha incorreta!");
        }
        else {
            this.authService.register(form.value.fName, form.value.lName, form.value.email, form.value.password, this.daux, this.global.cargo, this.global.avental, this.auxtel, form.value.endereco, form.value.cidade, form.value.estado, form.value.nivel, form.value.profissao).subscribe(data => {
                this.authService.login(form.value.email, form.value.password).subscribe(data => {
                }, error => {
                    this.alertService.presentToast("Verifique se você preencheu os campos corretamente");
                }, () => {
                    this.permissao();
                });
            }, error => {
                //console.log(error);
                this.alertService.presentToast("Preencha todos os campos!");
            });
        }
    }
    getCargos() {
        this.authService.getCargos().subscribe(data => {
            for (let i = 0; i < data.length; i++) {
                this.cargos[i] = data[i].cargo;
            }
        }, error => {
            //console.log("error: " + error);
        });
    }
    getAvental() {
        this.authService.getAvental().subscribe(data => {
            for (let i = 0; i < data.length; i++) {
                this.avental[i] = data[i].avental;
            }
        }, error => {
            //console.log("error: " + error);
        });
    }
};
RegisterPage.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"] },
    { type: src_app_services_global_service__WEBPACK_IMPORTED_MODULE_8__["GlobalService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] },
    { type: src_app_route_to_preload__WEBPACK_IMPORTED_MODULE_1__["AppRoutingPreloaderService"] }
];
RegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-register',
        template: __webpack_require__(/*! raw-loader!./register.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/auth/register/register.page.html"),
        styles: [__webpack_require__(/*! ./register.page.scss */ "./src/app/pages/auth/register/register.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
        src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"],
        src_app_services_global_service__WEBPACK_IMPORTED_MODULE_8__["GlobalService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"],
        src_app_route_to_preload__WEBPACK_IMPORTED_MODULE_1__["AppRoutingPreloaderService"]])
], RegisterPage);



/***/ })

}]);
//# sourceMappingURL=pages-auth-register-register-module-es2015.js.map