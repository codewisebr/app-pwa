(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pwa-pages-edit-editpresenca-editpresenca-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pwa-pages/edit/editpresenca/editpresenca.page.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pwa-pages/edit/editpresenca/editpresenca.page.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button ></ion-back-button>\n        </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n<ion-content padding>\n    <ion-grid text-center >\n      <div class=\"box\">\n        <h2>Editar Presença</h2>\n        <form #form=\"ngForm\" (ngSubmit)=\"editar(form)\" method=\"POST\">\n          <ion-grid text-justify>\n            <ion-label>Nome: {{this.name}}</ion-label>\n          </ion-grid>\n          <ion-grid text-justify>\n            <ion-label>Presença:</ion-label>\n            <ion-list lines=\"none\">\n              <ion-radio-group ngModel name=\"presenca\">              \n                <ion-item>\n                  <ion-label>Presente</ion-label>\n                  <ion-radio value=\"1\" slot=\"start\" [checked]=\"checked1\"></ion-radio>\n                </ion-item>\n                <ion-item>\n                  <ion-label>Não presente</ion-label>\n                  <ion-radio value=\"0\"slot=\"start\" [checked]=\"checked2\"></ion-radio>\n                </ion-item>\n              </ion-radio-group>\n            </ion-list>\n          </ion-grid>\n          <ion-grid text-justify>\n            <ion-label>Motivo:</ion-label>\n            <ion-input type=\"text\" required=\"true\" name=\"motivo\" [(ngModel)]=\"this.motivo\"></ion-input>\n          </ion-grid>\n          <br>\n          <ion-grid>\n            <ion-button type=\"submit\" round expand=\"block\" color=\"danger\">Salvar</ion-button>\n          </ion-grid>\n          <br>\n        </form>\n      </div>\n    </ion-grid>\n  </ion-content>\n  "

/***/ }),

/***/ "./src/app/pwa-pages/edit/editpresenca/editpresenca.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/pwa-pages/edit/editpresenca/editpresenca.module.ts ***!
  \********************************************************************/
/*! exports provided: EditpresencaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditpresencaPageModule", function() { return EditpresencaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _editpresenca_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./editpresenca.page */ "./src/app/pwa-pages/edit/editpresenca/editpresenca.page.ts");







const routes = [
    {
        path: '',
        component: _editpresenca_page__WEBPACK_IMPORTED_MODULE_6__["EditpresencaPage"]
    }
];
let EditpresencaPageModule = class EditpresencaPageModule {
};
EditpresencaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_editpresenca_page__WEBPACK_IMPORTED_MODULE_6__["EditpresencaPage"]]
        //declarations: []
    })
], EditpresencaPageModule);



/***/ }),

/***/ "./src/app/pwa-pages/edit/editpresenca/editpresenca.page.scss":
/*!********************************************************************!*\
  !*** ./src/app/pwa-pages/edit/editpresenca/editpresenca.page.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: rgb(115,55,212);\n  --background: radial-gradient(circle, rgba(115,55,212,1) 0%, rgba(0,214,192,1) 100%);\n}\n\n.box {\n  background-color: white;\n  margin-left: auto;\n  margin-right: auto;\n  min-height: 300px;\n  max-width: 650px;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  border-radius: 7px !important;\n}\n\nion-input {\n  border-radius: 7px !important;\n  border: 1px solid #f1f1f1 !important;\n  text-align: justify;\n  --background: #f1f1f1;\n}\n\nion-grid {\n  padding-left: 30px;\n  padding-right: 30px;\n}\n\nion-button {\n  --border-radius: 7px;\n  padding-left: 30px;\n  padding-right: 30px;\n}\n\np {\n  color: #808080;\n}\n\nh2 {\n  color: grey;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NvZGV3aXNlL3VuaWFvdmlpL2FwcC1wd2Evc3JjL2FwcC9wd2EtcGFnZXMvZWRpdC9lZGl0cHJlc2VuY2EvZWRpdHByZXNlbmNhLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcHdhLXBhZ2VzL2VkaXQvZWRpdHByZXNlbmNhL2VkaXRwcmVzZW5jYS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw2QkFBQTtFQUNBLG9GQUFBO0FDQ0o7O0FEQ0U7RUFDRSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLDZCQUFBO0FDRUo7O0FEQUU7RUFDRSw2QkFBQTtFQUNBLG9DQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQ0dKOztBREFFO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQ0dKOztBREFFO0VBQ0Usb0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDR0o7O0FEREU7RUFDRSxjQUFBO0FDSUo7O0FERkU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUNLSiIsImZpbGUiOiJzcmMvYXBwL3B3YS1wYWdlcy9lZGl0L2VkaXRwcmVzZW5jYS9lZGl0cHJlc2VuY2EucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XG4gICAgLS1iYWNrZ3JvdW5kOiByZ2IoMTE1LDU1LDIxMik7XG4gICAgLS1iYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCByZ2JhKDExNSw1NSwyMTIsMSkgMCUsIHJnYmEoMCwyMTQsMTkyLDEpIDEwMCUpO1xuICB9XG4gIC5ib3h7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIG1pbi1oZWlnaHQ6IDMwMHB4O1xuICAgIG1heC13aWR0aDogNjUwcHg7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogN3B4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgaW9uLWlucHV0e1xuICAgIGJvcmRlci1yYWRpdXM6IDdweCAhaW1wb3J0YW50O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmMWYxZjEgIWltcG9ydGFudDtcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgIC0tYmFja2dyb3VuZDogI2YxZjFmMTtcbiAgfVxuICBcbiAgaW9uLWdyaWR7XG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG4gIH1cbiAgXG4gIGlvbi1idXR0b257XG4gICAgLS1ib3JkZXItcmFkaXVzOiA3cHg7XG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG4gIH1cbiAgcHtcbiAgICBjb2xvcjojODA4MDgwXG4gIH1cbiAgaDJ7XG4gICAgY29sb3I6IGdyZXk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9IiwiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHJnYigxMTUsNTUsMjEyKTtcbiAgLS1iYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCByZ2JhKDExNSw1NSwyMTIsMSkgMCUsIHJnYmEoMCwyMTQsMTkyLDEpIDEwMCUpO1xufVxuXG4uYm94IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1pbi1oZWlnaHQ6IDMwMHB4O1xuICBtYXgtd2lkdGg6IDY1MHB4O1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDdweCAhaW1wb3J0YW50O1xufVxuXG5pb24taW5wdXQge1xuICBib3JkZXItcmFkaXVzOiA3cHggIWltcG9ydGFudDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2YxZjFmMSAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAtLWJhY2tncm91bmQ6ICNmMWYxZjE7XG59XG5cbmlvbi1ncmlkIHtcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xufVxuXG5pb24tYnV0dG9uIHtcbiAgLS1ib3JkZXItcmFkaXVzOiA3cHg7XG4gIHBhZGRpbmctbGVmdDogMzBweDtcbiAgcGFkZGluZy1yaWdodDogMzBweDtcbn1cblxucCB7XG4gIGNvbG9yOiAjODA4MDgwO1xufVxuXG5oMiB7XG4gIGNvbG9yOiBncmV5O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/pwa-pages/edit/editpresenca/editpresenca.page.ts":
/*!******************************************************************!*\
  !*** ./src/app/pwa-pages/edit/editpresenca/editpresenca.page.ts ***!
  \******************************************************************/
/*! exports provided: EditpresencaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditpresencaPage", function() { return EditpresencaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");






let EditpresencaPage = class EditpresencaPage {
    constructor(authService, alertService, navCtrl, router) {
        this.authService = authService;
        this.alertService = alertService;
        this.navCtrl = navCtrl;
        this.router = router;
        this.checked1 = "false";
        this.checked2 = "false";
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.router.queryParams.subscribe(params => {
            this.id = params["id"];
        });
        this.showLista();
    }
    showLista() {
        this.authService.getLista().subscribe(data => {
            for (let i = 0; i < data.length; i++) {
                //pega na lista onde a reuniao esta ativa, o id do usuario
                if (this.id == data[i].id) {
                    this.presenca = data[i].presenca;
                    this.motivo = data[i].motivo;
                    switch (this.presenca) {
                        case 1:
                            this.checked1 = "true";
                            break;
                        case 0:
                            this.checked2 = "true";
                            break;
                    }
                    this.authService.getNome(data[i].id_user).subscribe(resul => {
                        this.name = resul[0];
                    });
                    break;
                }
            }
        }, error => {
            // console.log(error);
        });
    }
    dismiss() {
        this.navCtrl.navigateForward('/adminpresenca');
    }
    editar(form) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.authService.getLista().subscribe(data => {
                for (let i = 0; i < data.length; i++) {
                    //checa o id da lista
                    if (this.id == data[i].id) {
                        this.authService.updateLista(data[i].id, form.value.motivo, form.value.presenca).subscribe(data => {
                            this.dismiss();
                            this.alertService.presentToast("Presença editada com sucesso!");
                        }, error => {
                            this.alertService.presentToast('Preencha todos os campos!');
                        });
                        break;
                    }
                }
            }, error => {
                // console.log(error);
            });
        });
    }
};
EditpresencaPage.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }
];
EditpresencaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-editpresenca',
        template: __webpack_require__(/*! raw-loader!./editpresenca.page.html */ "./node_modules/raw-loader/index.js!./src/app/pwa-pages/edit/editpresenca/editpresenca.page.html"),
        styles: [__webpack_require__(/*! ./editpresenca.page.scss */ "./src/app/pwa-pages/edit/editpresenca/editpresenca.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
        src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
], EditpresencaPage);



/***/ })

}]);
//# sourceMappingURL=pwa-pages-edit-editpresenca-editpresenca-module-es2015.js.map