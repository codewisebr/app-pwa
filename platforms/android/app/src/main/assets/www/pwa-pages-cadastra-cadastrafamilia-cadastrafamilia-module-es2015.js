(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pwa-pages-cadastra-cadastrafamilia-cadastrafamilia-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pwa-pages/cadastra/cadastrafamilia/cadastrafamilia.page.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pwa-pages/cadastra/cadastrafamilia/cadastrafamilia.page.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button ></ion-back-button>\n        </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n<ion-content>\n  <br>\n      <ion-grid text-center>\n       <ion-icon name=\"person-add\" class=\"icon\"></ion-icon> \n      </ion-grid>\n      <br>\n      <ion-grid text-center >\n        <div class=\"box\">\n          <h2>Cadastrar Familiar</h2>\n          <form #form=\"ngForm\" (ngSubmit)=\"cadastrar(form)\" method=\"POST\">\n            <ion-grid>\n              <ion-select ngModel name=\"grau\" required=\"true\" placeholder=\"Grau de parentesco\">\n                <ion-select-option *ngFor=\"let graus of grau\" value=\"{{graus}}\">{{graus}}</ion-select-option>\n              </ion-select> \n            </ion-grid>\n            <br>\n            <ion-grid>\n              <ion-datetime ngModel name=\"data\" placeholder=\"Data de nascimento\" display-format=\"DD/MM/YYYY\" required=\"true\"></ion-datetime>\n            </ion-grid>\n            <br>\n            <ion-grid>\n              <ion-button type=\"submit\" round expand=\"block\" color=\"danger\">Cadastrar</ion-button>\n            </ion-grid>\n          </form>\n        </div>\n      </ion-grid>\n</ion-content>"

/***/ }),

/***/ "./src/app/pwa-pages/cadastra/cadastrafamilia/cadastrafamilia.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pwa-pages/cadastra/cadastrafamilia/cadastrafamilia.module.ts ***!
  \******************************************************************************/
/*! exports provided: CadastrafamiliaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastrafamiliaPageModule", function() { return CadastrafamiliaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _cadastrafamilia_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cadastrafamilia.page */ "./src/app/pwa-pages/cadastra/cadastrafamilia/cadastrafamilia.page.ts");







const routes = [
    {
        path: '',
        component: _cadastrafamilia_page__WEBPACK_IMPORTED_MODULE_6__["CadastrafamiliaPage"]
    }
];
let CadastrafamiliaPageModule = class CadastrafamiliaPageModule {
};
CadastrafamiliaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_cadastrafamilia_page__WEBPACK_IMPORTED_MODULE_6__["CadastrafamiliaPage"]]
    })
], CadastrafamiliaPageModule);



/***/ }),

/***/ "./src/app/pwa-pages/cadastra/cadastrafamilia/cadastrafamilia.page.scss":
/*!******************************************************************************!*\
  !*** ./src/app/pwa-pages/cadastra/cadastrafamilia/cadastrafamilia.page.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: rgb(115,55,212);\n  --background: radial-gradient(circle, rgba(115,55,212,1) 0%, rgba(0,214,192,1) 100%);\n}\n\n.box {\n  background-color: white;\n  margin-left: auto;\n  margin-right: auto;\n  min-height: 300px;\n  max-width: 650px;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  border-radius: 7px !important;\n}\n\nion-input {\n  border-radius: 7px !important;\n  border: 1px solid #f1f1f1 !important;\n  text-align: justify;\n  --background: #f1f1f1;\n}\n\nion-grid {\n  padding-left: 30px;\n  padding-right: 30px;\n}\n\nion-button {\n  --border-radius: 7px;\n  padding-left: 30px;\n  padding-right: 30px;\n}\n\np {\n  color: #808080;\n}\n\nh2 {\n  color: grey;\n  text-align: center;\n}\n\n.icon {\n  font-size: 64px;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NvZGV3aXNlL3VuaWFvdmlpL2FwcC1wd2Evc3JjL2FwcC9wd2EtcGFnZXMvY2FkYXN0cmEvY2FkYXN0cmFmYW1pbGlhL2NhZGFzdHJhZmFtaWxpYS5wYWdlLnNjc3MiLCJzcmMvYXBwL3B3YS1wYWdlcy9jYWRhc3RyYS9jYWRhc3RyYWZhbWlsaWEvY2FkYXN0cmFmYW1pbGlhLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDZCQUFBO0VBQ0Esb0ZBQUE7QUNDSjs7QURDRTtFQUNFLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsNkJBQUE7QUNFSjs7QURBRTtFQUNFLDZCQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FDR0o7O0FEQUU7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FDR0o7O0FEQUU7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNHSjs7QURERTtFQUNFLGNBQUE7QUNJSjs7QURGRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtBQ0tKOztBREhFO0VBQ0UsZUFBQTtFQUNBLFlBQUE7QUNNSiIsImZpbGUiOiJzcmMvYXBwL3B3YS1wYWdlcy9jYWRhc3RyYS9jYWRhc3RyYWZhbWlsaWEvY2FkYXN0cmFmYW1pbGlhLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xuICAgIC0tYmFja2dyb3VuZDogcmdiKDExNSw1NSwyMTIpO1xuICAgIC0tYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgcmdiYSgxMTUsNTUsMjEyLDEpIDAlLCByZ2JhKDAsMjE0LDE5MiwxKSAxMDAlKTtcbiAgfVxuICAuYm94e1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBtaW4taGVpZ2h0OiAzMDBweDtcbiAgICBtYXgtd2lkdGg6IDY1MHB4O1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDdweCAhaW1wb3J0YW50O1xuICB9XG4gIGlvbi1pbnB1dHtcbiAgICBib3JkZXItcmFkaXVzOiA3cHggIWltcG9ydGFudDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZjFmMWYxICFpbXBvcnRhbnQ7XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICAtLWJhY2tncm91bmQ6ICNmMWYxZjE7XG4gIH1cbiAgXG4gIGlvbi1ncmlke1xuICAgIHBhZGRpbmctbGVmdDogMzBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xuICB9XG4gIFxuICBpb24tYnV0dG9ue1xuICAgIC0tYm9yZGVyLXJhZGl1czogN3B4O1xuICAgIHBhZGRpbmctbGVmdDogMzBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xuICB9XG4gIHB7XG4gICAgY29sb3I6IzgwODA4MFxuICB9XG4gIGgye1xuICAgIGNvbG9yOiBncmV5O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAuaWNvbntcbiAgICBmb250LXNpemU6IDY0cHg7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuIiwiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHJnYigxMTUsNTUsMjEyKTtcbiAgLS1iYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCByZ2JhKDExNSw1NSwyMTIsMSkgMCUsIHJnYmEoMCwyMTQsMTkyLDEpIDEwMCUpO1xufVxuXG4uYm94IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1pbi1oZWlnaHQ6IDMwMHB4O1xuICBtYXgtd2lkdGg6IDY1MHB4O1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDdweCAhaW1wb3J0YW50O1xufVxuXG5pb24taW5wdXQge1xuICBib3JkZXItcmFkaXVzOiA3cHggIWltcG9ydGFudDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2YxZjFmMSAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAtLWJhY2tncm91bmQ6ICNmMWYxZjE7XG59XG5cbmlvbi1ncmlkIHtcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xufVxuXG5pb24tYnV0dG9uIHtcbiAgLS1ib3JkZXItcmFkaXVzOiA3cHg7XG4gIHBhZGRpbmctbGVmdDogMzBweDtcbiAgcGFkZGluZy1yaWdodDogMzBweDtcbn1cblxucCB7XG4gIGNvbG9yOiAjODA4MDgwO1xufVxuXG5oMiB7XG4gIGNvbG9yOiBncmV5O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5pY29uIHtcbiAgZm9udC1zaXplOiA2NHB4O1xuICBjb2xvcjogd2hpdGU7XG59Il19 */"

/***/ }),

/***/ "./src/app/pwa-pages/cadastra/cadastrafamilia/cadastrafamilia.page.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pwa-pages/cadastra/cadastrafamilia/cadastrafamilia.page.ts ***!
  \****************************************************************************/
/*! exports provided: CadastrafamiliaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastrafamiliaPage", function() { return CadastrafamiliaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_route_to_preload__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/route-to-preload */ "./src/app/route-to-preload.ts");








let CadastrafamiliaPage = class CadastrafamiliaPage {
    constructor(routingService, router, authService, alertService, navCtrl, dataPipe) {
        this.routingService = routingService;
        this.router = router;
        this.authService = authService;
        this.alertService = alertService;
        this.navCtrl = navCtrl;
        this.dataPipe = dataPipe;
        this.grau = [
            'Pai', 'Mãe', 'Filho', 'Irmão', 'Irmã', 'Filho', 'Filha', 'Avô', 'Avó', 'Neto', 'Neta',
            'Tio', 'Tia', 'Sobrinho', 'Sobrinha', 'Primo', 'Prima', 'Sogro', 'Sogra', 'Genro', 'Nora',
            'Padrasto', 'Madrasta', 'Enteado', 'Enteada', 'Cunhado', 'Cunhada', 'Madrinha', 'Padrinho'
        ];
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.routingService.preloadRoute('adminusuario');
        });
    }
    ionViewWillEnter() {
        this.router.queryParams.subscribe(params => {
            this.id = params["id"];
        });
    }
    dismiss() {
        this.navCtrl.navigateForward('/adminusuario');
    }
    cadastrar(form) {
        this.data = this.dataPipe.transform(form.value.data, 'yyyy-MM-dd');
        this.authService.familia(this.id, form.value.grau, this.data).subscribe(resul => {
            this.dismiss();
            this.alertService.presentToast("Familiar cadastrado com sucesso!");
        }, error => {
            this.alertService.presentToast("Preencha todos os campos!");
        });
    }
};
CadastrafamiliaPage.ctorParameters = () => [
    { type: src_app_route_to_preload__WEBPACK_IMPORTED_MODULE_7__["AppRoutingPreloaderService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"] }
];
CadastrafamiliaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
        selector: 'app-cadastrafamilia',
        template: __webpack_require__(/*! raw-loader!./cadastrafamilia.page.html */ "./node_modules/raw-loader/index.js!./src/app/pwa-pages/cadastra/cadastrafamilia/cadastrafamilia.page.html"),
        styles: [__webpack_require__(/*! ./cadastrafamilia.page.scss */ "./src/app/pwa-pages/cadastra/cadastrafamilia/cadastrafamilia.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_route_to_preload__WEBPACK_IMPORTED_MODULE_7__["AppRoutingPreloaderService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
        src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
        _services_alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]])
], CadastrafamiliaPage);



/***/ })

}]);
//# sourceMappingURL=pwa-pages-cadastra-cadastrafamilia-cadastrafamilia-module-es2015.js.map