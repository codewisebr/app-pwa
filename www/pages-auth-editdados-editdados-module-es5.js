(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-auth-editdados-editdados-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/auth/editdados/editdados.page.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/auth/editdados/editdados.page.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button></ion-back-button>\n        </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n<ion-content padding>\n  <ion-grid text-center>\n      <ion-icon name=\"person\" class=\"icon\"></ion-icon>\n  </ion-grid> \n  <br>\n  <ion-grid text-center >\n    <div class=\"box\">\n      <h2>Editar dados</h2>\n      <form #form=\"ngForm\" (ngSubmit)=\"editar(form)\" method=\"POST\">\n        <ion-grid>\n          <ion-input ngModel name=\"fName\"type=\"text\" pattern=\"[A-Za-z\\s]+\"  required=\"true\" value={{this.fname}} ></ion-input>\n        </ion-grid> \n        <br>\n        <ion-grid>\n          <ion-input ngModel name=\"lName\" type=\"text\" pattern=\"[A-Za-z\\s]+\"  required=\"true\" value={{this.lname}}></ion-input>\n        </ion-grid> \n        <br>\n        <ion-grid> \n          <ion-datetime ngModel name=\"data_nasc\" display-format=\"DD/MM/YYYY\" required=\"true\" value={{this.data_nasc}}></ion-datetime>\n        </ion-grid> \n        <br>\n        <ion-grid>\n          <ion-input type=\"email\" ngModel name=\"email\" pattern=\"[-a-zA-Z0-9~!$%^&amp;*_=+}{'?]+(\\.[-a-zA-Z0-9~!$%^&amp;*_=+}{'?]+)*@([a-zA-Z0-9_][-a-zA-Z0-9_]*(\\.[-a-zA-Z0-9_]+)*\\.([cC][oO][mM]))(:[0-9]{1,5})?\" required=\"true\" value={{this.email}}></ion-input>\n        </ion-grid> \n        <br>\n        <ion-grid> \n          <ion-input ngModel name=\"endereco\" type=\"text\" pattern=\"[A-Za-z0-9\\s]+\" required=\"true\" value={{this.endereco}}></ion-input>\n        </ion-grid> \n        <br>\n        <ion-grid> \n          <ion-input ngModel name=\"cidade\" type=\"text\" pattern=\"[A-Za-z\\s]+\" required=\"true\" value={{this.cidade}}></ion-input>\n        </ion-grid> \n        <br>\n        <ion-grid> \n          <ion-input ngModel name=\"estado\" type=\"text\" pattern=\"[A-Za-z\\s]+\" required=\"true\" value={{this.estado}}></ion-input>\n        </ion-grid> \n        <br>\n        <ion-grid> \n          <ion-input ngModel name=\"telefone\" type=\"text\" pattern=\"[0-9.-]{11,12}$\" required=\"true\" value={{this.telefone}}></ion-input>\n        </ion-grid>\n        <br>\n        <ion-grid> \n          <ion-input ngModel name=\"profissao\" type=\"text\" pattern=\"[A-Za-z\\s]+\" required=\"true\" value={{this.profissao}}></ion-input>\n        </ion-grid> \n        <br>\n        <ion-grid>\n          <ion-select value={{this.cargo}} ngModel name=\"cargo\" required=\"true\">\n            <ion-select-option *ngFor=\"let c of cargos\" value=\"{{c}}\">{{c}}</ion-select-option>\n          </ion-select> \n        </ion-grid> \n        <br>\n        <ion-grid>\n          <ion-list lines=\"none\">\n              <ion-radio-group ngModel name=\"nivel\">\n                <ion-list-header>\n                  <ion-label>Avental</ion-label>\n                </ion-list-header>\n                <ion-item>\n                  <ion-label>Aprendiz</ion-label>\n                  <ion-radio value=\"1\" slot=\"start\" [checked]=\"checked1\"></ion-radio>\n                </ion-item>\n                <ion-item>\n                  <ion-label>Companheiro</ion-label>\n                  <ion-radio value=\"2\"slot=\"start\" [checked]=\"checked2\"></ion-radio>\n                </ion-item>\n                <ion-item>\n                  <ion-label>Mestre</ion-label>\n                  <ion-radio value=\"3\"slot=\"start\" [checked]=\"checked3\"></ion-radio>\n                </ion-item>\n              </ion-radio-group>\n          </ion-list>\n        </ion-grid>\n        <br>\n        <ion-grid> \n          <ion-button type=\"submit\" round expand=\"block\" color=\"primary\">Salvar edição</ion-button>\n        </ion-grid> \n      </form>\n    </div>\n  </ion-grid>\n</ion-content>\n  \n  "

/***/ }),

/***/ "./src/app/pages/auth/editdados/editdados.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/auth/editdados/editdados.module.ts ***!
  \**********************************************************/
/*! exports provided: EditdadosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditdadosPageModule", function() { return EditdadosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _editdados_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./editdados.page */ "./src/app/pages/auth/editdados/editdados.page.ts");







var routes = [
    {
        path: '',
        component: _editdados_page__WEBPACK_IMPORTED_MODULE_6__["EditdadosPage"]
    }
];
var EditdadosPageModule = /** @class */ (function () {
    function EditdadosPageModule() {
    }
    EditdadosPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_editdados_page__WEBPACK_IMPORTED_MODULE_6__["EditdadosPage"]]
            // declarations: []
        })
    ], EditdadosPageModule);
    return EditdadosPageModule;
}());



/***/ }),

/***/ "./src/app/pages/auth/editdados/editdados.page.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/auth/editdados/editdados.page.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: rgb(115,55,212);\n  --background: radial-gradient(circle, rgba(115,55,212,1) 0%, rgba(0,214,192,1) 100%);\n}\n\n.box {\n  background-color: white;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: auto;\n  margin-top: auto;\n  min-height: 500px;\n  max-width: 650px;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  border-radius: 7px !important;\n}\n\nion-input {\n  border-radius: 7px !important;\n  border: 1px solid #f1f1f1 !important;\n  text-align: justify;\n  --background: #f1f1f1;\n}\n\nion-grid {\n  padding-left: 30px;\n  padding-right: 30px;\n}\n\nion-button {\n  --border-radius: 7px;\n  padding-left: 30px;\n  padding-right: 30px;\n}\n\np {\n  color: #808080;\n}\n\nh2 {\n  color: grey;\n  text-align: center;\n}\n\n.icon {\n  font-size: 64px;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NvZGV3aXNlL3VuaWFvdmlpL2FwcC1wd2Evc3JjL2FwcC9wYWdlcy9hdXRoL2VkaXRkYWRvcy9lZGl0ZGFkb3MucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9hdXRoL2VkaXRkYWRvcy9lZGl0ZGFkb3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNkJBQUE7RUFDQSxvRkFBQTtBQ0NKOztBRENFO0VBQ0UsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsNkJBQUE7QUNFSjs7QURBRTtFQUNFLDZCQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FDR0o7O0FEQUU7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FDR0o7O0FEQUU7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNHSjs7QURERTtFQUNFLGNBQUE7QUNJSjs7QURGRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtBQ0tKOztBREhFO0VBQ0UsZUFBQTtFQUNBLFlBQUE7QUNNSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2F1dGgvZWRpdGRhZG9zL2VkaXRkYWRvcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcbiAgICAtLWJhY2tncm91bmQ6IHJnYigxMTUsNTUsMjEyKTtcbiAgICAtLWJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsIHJnYmEoMTE1LDU1LDIxMiwxKSAwJSwgcmdiYSgwLDIxNCwxOTIsMSkgMTAwJSk7XG4gIH1cbiAgLmJveHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgbWFyZ2luLWJvdHRvbTogYXV0bztcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xuICAgIG1pbi1oZWlnaHQ6IDUwMHB4O1xuICAgIG1heC13aWR0aDogNjUwcHg7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogN3B4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgaW9uLWlucHV0e1xuICAgIGJvcmRlci1yYWRpdXM6IDdweCAhaW1wb3J0YW50O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmMWYxZjEgIWltcG9ydGFudDtcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgIC0tYmFja2dyb3VuZDogI2YxZjFmMTtcbiAgfVxuICBcbiAgaW9uLWdyaWR7XG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG4gIH1cbiAgXG4gIGlvbi1idXR0b257XG4gICAgLS1ib3JkZXItcmFkaXVzOiA3cHg7XG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG4gIH1cbiAgcHtcbiAgICBjb2xvcjojODA4MDgwXG4gIH1cbiAgaDJ7XG4gICAgY29sb3I6IGdyZXk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5pY29uIHtcbiAgICBmb250LXNpemU6IDY0cHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9IiwiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHJnYigxMTUsNTUsMjEyKTtcbiAgLS1iYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCByZ2JhKDExNSw1NSwyMTIsMSkgMCUsIHJnYmEoMCwyMTQsMTkyLDEpIDEwMCUpO1xufVxuXG4uYm94IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1hcmdpbi1ib3R0b206IGF1dG87XG4gIG1hcmdpbi10b3A6IGF1dG87XG4gIG1pbi1oZWlnaHQ6IDUwMHB4O1xuICBtYXgtd2lkdGg6IDY1MHB4O1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDdweCAhaW1wb3J0YW50O1xufVxuXG5pb24taW5wdXQge1xuICBib3JkZXItcmFkaXVzOiA3cHggIWltcG9ydGFudDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2YxZjFmMSAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAtLWJhY2tncm91bmQ6ICNmMWYxZjE7XG59XG5cbmlvbi1ncmlkIHtcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xufVxuXG5pb24tYnV0dG9uIHtcbiAgLS1ib3JkZXItcmFkaXVzOiA3cHg7XG4gIHBhZGRpbmctbGVmdDogMzBweDtcbiAgcGFkZGluZy1yaWdodDogMzBweDtcbn1cblxucCB7XG4gIGNvbG9yOiAjODA4MDgwO1xufVxuXG5oMiB7XG4gIGNvbG9yOiBncmV5O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5pY29uIHtcbiAgZm9udC1zaXplOiA2NHB4O1xuICBjb2xvcjogd2hpdGU7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/auth/editdados/editdados.page.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/auth/editdados/editdados.page.ts ***!
  \********************************************************/
/*! exports provided: EditdadosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditdadosPage", function() { return EditdadosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _route_to_preload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../route-to-preload */ "./src/app/route-to-preload.ts");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../services/global.service */ "./src/app/services/global.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");








var EditdadosPage = /** @class */ (function () {
    function EditdadosPage(authService, alertService, navCtrl, storage, global, routingService) {
        this.authService = authService;
        this.alertService = alertService;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.global = global;
        this.routingService = routingService;
        this.checked1 = "false";
        this.checked2 = "false";
        this.checked3 = "false";
        this.cargos = [];
    }
    EditdadosPage.prototype.ngOnInit = function () {
    };
    EditdadosPage.prototype.ionViewWillEnter = function () {
        this.id = this.global.user_id;
        this.showDados();
    };
    EditdadosPage.prototype.ionViewDidEnter = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.routingService.preloadRoute('account')];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    EditdadosPage.prototype.dismiss = function () {
        this.navCtrl.navigateForward('/account');
    };
    EditdadosPage.prototype.showDados = function () {
        var _this = this;
        this.authService.user()
            .subscribe(function (data) {
            _this.fname = data.first_name.replace("\"", "");
            _this.lname = data.last_name.replace("\"", "");
            _this.email = data.email.replace("\"", "");
            _this.endereco = data.endereco.replace("\"", "");
            _this.cidade = data.cidade.replace("\"", "");
            _this.estado = data.estado.replace("\"", "");
            _this.telefone = data.telefone.replace("\"", "");
            _this.profissao = data.profissao.replace("\"", "");
            _this.data_nasc = data.data_nasc.replace("\"", "");
            _this.nivel = data.avental_id;
            switch (_this.nivel) {
                case 1:
                    _this.checked1 = "true";
                    break;
                case 2:
                    _this.checked2 = "true";
                    break;
                case 3:
                    _this.checked3 = "true";
                    break;
            }
            _this.authService.getIdCargos(data.cargo_id).subscribe(function (resul) {
                _this.cargo = resul;
            });
        });
        //deixa o value dos cargos como string p/ nao dar conflito
        this.authService.getCargos().subscribe(function (data) {
            for (var i = 0; i < data.length; i++) {
                _this.cargos[i] = data[i].cargo;
            }
        });
    };
    EditdadosPage.prototype.editar = function (form) {
        var _this = this;
        //volta de nome para id
        this.authService.getCargos().subscribe(function (data) {
            for (var i = 0; i < data.length; i++) {
                if (data[i].cargo == form.value.cargo) {
                    _this.global.cargo = data[i].id;
                    _this.storage.set('cargo', data[i].id);
                }
            }
        });
        //salva as alterações
        this.authService.updateUser(this.id, form.value.fName, form.value.lName, form.value.email, form.value.endereco, form.value.cidade, form.value.estado, form.value.data_nasc, form.value.telefone, form.value.nivel, this.global.cargo, form.value.profissao).subscribe(function (resp) {
            if (resp == true) {
                _this.storage.set('avental', form.value.nivel);
                _this.alertService.presentToast('Usuário atualizado!');
                _this.navCtrl.navigateRoot('/account');
            }
            else
                _this.alertService.presentToast('Verifique se você preencheu corretamente os dados!');
        }, function (error) {
            _this.alertService.presentToast('Verifique se você preencheu corretamente os dados!');
        });
    };
    EditdadosPage.ctorParameters = function () { return [
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
        { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] },
        { type: _services_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"] },
        { type: _route_to_preload__WEBPACK_IMPORTED_MODULE_1__["AppRoutingPreloaderService"] }
    ]; };
    EditdadosPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"])({
            selector: 'app-editdados',
            template: __webpack_require__(/*! raw-loader!./editdados.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/auth/editdados/editdados.page.html"),
            styles: [__webpack_require__(/*! ./editdados.page.scss */ "./src/app/pages/auth/editdados/editdados.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            _services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"],
            _services_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"],
            _route_to_preload__WEBPACK_IMPORTED_MODULE_1__["AppRoutingPreloaderService"]])
    ], EditdadosPage);
    return EditdadosPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-auth-editdados-editdados-module-es5.js.map