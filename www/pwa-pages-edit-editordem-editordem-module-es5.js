(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pwa-pages-edit-editordem-editordem-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pwa-pages/edit/editordem/editordem.page.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pwa-pages/edit/editordem/editordem.page.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button></ion-back-button>\n        </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n<ion-content padding>\n    <ion-grid text-center >\n      <div class=\"box\">\n        <h2>Editar Ordem</h2>\n        <form #form=\"ngForm\" (ngSubmit)=\"editar(form)\" method=\"POST\">\n          <ion-grid>\n            <ion-input type=\"text\" required=\"true\" name=\"novo\" [(ngModel)]=\"this.ordem\"></ion-input>\n          </ion-grid>\n          <ion-grid>\n            <ion-list lines=\"none\">\n              <ion-radio-group ngModel name=\"nivel\">\n                <ion-list-header>\n                  <ion-label>Nível</ion-label>\n                </ion-list-header>\n                <ion-item>\n                  <ion-label>Aprendiz</ion-label>\n                  <ion-radio value=\"1\" slot=\"start\" [checked]=\"checked1\"></ion-radio>\n                </ion-item>\n                <ion-item>\n                  <ion-label>Companheiro</ion-label>\n                  <ion-radio value=\"2\"slot=\"start\" [checked]=\"checked2\"></ion-radio>\n                </ion-item>\n                <ion-item>\n                  <ion-label>Mestre</ion-label>\n                  <ion-radio value=\"3\"slot=\"start\" [checked]=\"checked3\"></ion-radio>\n                </ion-item>\n              </ion-radio-group>\n            </ion-list>\n            <ion-button type=\"submit\" round expand=\"block\" color=\"danger\">Salvar</ion-button>\n          </ion-grid>\n        </form>\n      </div>\n    </ion-grid>\n  </ion-content>"

/***/ }),

/***/ "./src/app/pwa-pages/edit/editordem/editordem.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/pwa-pages/edit/editordem/editordem.module.ts ***!
  \**************************************************************/
/*! exports provided: EditordemPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditordemPageModule", function() { return EditordemPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _editordem_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./editordem.page */ "./src/app/pwa-pages/edit/editordem/editordem.page.ts");







var routes = [
    {
        path: '',
        component: _editordem_page__WEBPACK_IMPORTED_MODULE_6__["EditordemPage"]
    }
];
var EditordemPageModule = /** @class */ (function () {
    function EditordemPageModule() {
    }
    EditordemPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_editordem_page__WEBPACK_IMPORTED_MODULE_6__["EditordemPage"]]
        })
    ], EditordemPageModule);
    return EditordemPageModule;
}());



/***/ }),

/***/ "./src/app/pwa-pages/edit/editordem/editordem.page.scss":
/*!**************************************************************!*\
  !*** ./src/app/pwa-pages/edit/editordem/editordem.page.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: rgb(115,55,212);\n  --background: radial-gradient(circle, rgba(115,55,212,1) 0%, rgba(0,214,192,1) 100%);\n}\n\n.box {\n  background-color: white;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: auto;\n  margin-top: auto;\n  min-height: 300px;\n  max-width: 650px;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  border-radius: 7px !important;\n}\n\nion-input {\n  border-radius: 7px !important;\n  border: 1px solid #f1f1f1 !important;\n  text-align: justify;\n  --background: #f1f1f1;\n}\n\nion-grid {\n  padding-left: 30px;\n  padding-right: 30px;\n}\n\nion-button {\n  --border-radius: 7px;\n  padding-left: 30px;\n  padding-right: 30px;\n}\n\np {\n  color: #808080;\n}\n\nh2 {\n  color: grey;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NvZGV3aXNlL3VuaWFvdmlpL2FwcC1wd2Evc3JjL2FwcC9wd2EtcGFnZXMvZWRpdC9lZGl0b3JkZW0vZWRpdG9yZGVtLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcHdhLXBhZ2VzL2VkaXQvZWRpdG9yZGVtL2VkaXRvcmRlbS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw2QkFBQTtFQUNBLG9GQUFBO0FDQ0o7O0FEQ0U7RUFDRSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSw2QkFBQTtBQ0VKOztBREFFO0VBQ0UsNkJBQUE7RUFDQSxvQ0FBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUNHSjs7QURBRTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUNHSjs7QURBRTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ0dKOztBRERFO0VBQ0UsY0FBQTtBQ0lKOztBREZFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0FDS0oiLCJmaWxlIjoic3JjL2FwcC9wd2EtcGFnZXMvZWRpdC9lZGl0b3JkZW0vZWRpdG9yZGVtLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xuICAgIC0tYmFja2dyb3VuZDogcmdiKDExNSw1NSwyMTIpO1xuICAgIC0tYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgcmdiYSgxMTUsNTUsMjEyLDEpIDAlLCByZ2JhKDAsMjE0LDE5MiwxKSAxMDAlKTtcbiAgfVxuICAuYm94e1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xuICAgIG1hcmdpbi10b3A6IGF1dG87XG4gICAgbWluLWhlaWdodDogMzAwcHg7XG4gICAgbWF4LXdpZHRoOiA2NTBweDtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiA3cHggIWltcG9ydGFudDtcbiAgfVxuICBpb24taW5wdXR7XG4gICAgYm9yZGVyLXJhZGl1czogN3B4ICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2YxZjFmMSAhaW1wb3J0YW50O1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZjFmMWYxO1xuICB9XG4gIFxuICBpb24tZ3JpZHtcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMzBweDtcbiAgfVxuICBcbiAgaW9uLWJ1dHRvbntcbiAgICAtLWJvcmRlci1yYWRpdXM6IDdweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMzBweDtcbiAgfVxuICBwe1xuICAgIGNvbG9yOiM4MDgwODBcbiAgfVxuICBoMntcbiAgICBjb2xvcjogZ3JleTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH0iLCJpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogcmdiKDExNSw1NSwyMTIpO1xuICAtLWJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsIHJnYmEoMTE1LDU1LDIxMiwxKSAwJSwgcmdiYSgwLDIxNCwxOTIsMSkgMTAwJSk7XG59XG5cbi5ib3gge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcbiAgbWFyZ2luLXRvcDogYXV0bztcbiAgbWluLWhlaWdodDogMzAwcHg7XG4gIG1heC13aWR0aDogNjUwcHg7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogN3B4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1pbnB1dCB7XG4gIGJvcmRlci1yYWRpdXM6IDdweCAhaW1wb3J0YW50O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZjFmMWYxICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIC0tYmFja2dyb3VuZDogI2YxZjFmMTtcbn1cblxuaW9uLWdyaWQge1xuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG59XG5cbmlvbi1idXR0b24ge1xuICAtLWJvcmRlci1yYWRpdXM6IDdweDtcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xufVxuXG5wIHtcbiAgY29sb3I6ICM4MDgwODA7XG59XG5cbmgyIHtcbiAgY29sb3I6IGdyZXk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pwa-pages/edit/editordem/editordem.page.ts":
/*!************************************************************!*\
  !*** ./src/app/pwa-pages/edit/editordem/editordem.page.ts ***!
  \************************************************************/
/*! exports provided: EditordemPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditordemPage", function() { return EditordemPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _route_to_preload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../route-to-preload */ "./src/app/route-to-preload.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");







var EditordemPage = /** @class */ (function () {
    function EditordemPage(authService, alertService, navCtrl, router, routingService) {
        this.authService = authService;
        this.alertService = alertService;
        this.navCtrl = navCtrl;
        this.router = router;
        this.routingService = routingService;
        this.checked1 = "false";
        this.checked2 = "false";
        this.checked3 = "false";
    }
    EditordemPage.prototype.ngOnInit = function () {
    };
    EditordemPage.prototype.ionViewDidEnter = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.routingService.preloadRoute('adminagape')];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    EditordemPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.router.queryParams.subscribe(function (params) {
            _this.id = params["id"];
        });
        this.showOrdem();
    };
    EditordemPage.prototype.showOrdem = function () {
        var _this = this;
        this.authService.getOrdem().subscribe(function (data) {
            for (var i = 0; i < data.length; i++) {
                if (_this.id == data[i].id) {
                    _this.nivel = data[i].nivel;
                    _this.ordem = data[i].ordem;
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
                    break;
                }
            }
        }, function (error) {
            // console.log(error);
        });
    };
    EditordemPage.prototype.dismiss = function () {
        this.navCtrl.navigateForward('/adminordem');
    };
    EditordemPage.prototype.editar = function (form) {
        var _this = this;
        this.authService.getOrdem().subscribe(function (data) {
            for (var i = 0; i < data.length; i++) {
                //informação tem que estar ativa
                if (_this.id == data[i].id) {
                    _this.authService.updateOrdem(data[i].id, form.value.novo, 1, form.value.nivel).subscribe(function (data) {
                        _this.dismiss();
                        _this.alertService.presentToast("Ordem editado com sucesso!");
                    }, function (error) {
                        _this.alertService.presentToast('Preencha todos os campos!');
                    });
                    break;
                }
            }
        });
    };
    EditordemPage.ctorParameters = function () { return [
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
        { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _route_to_preload__WEBPACK_IMPORTED_MODULE_1__["AppRoutingPreloaderService"] }
    ]; };
    EditordemPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
            selector: 'app-editordem',
            template: __webpack_require__(/*! raw-loader!./editordem.page.html */ "./node_modules/raw-loader/index.js!./src/app/pwa-pages/edit/editordem/editordem.page.html"),
            styles: [__webpack_require__(/*! ./editordem.page.scss */ "./src/app/pwa-pages/edit/editordem/editordem.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _route_to_preload__WEBPACK_IMPORTED_MODULE_1__["AppRoutingPreloaderService"]])
    ], EditordemPage);
    return EditordemPage;
}());



/***/ })

}]);
//# sourceMappingURL=pwa-pages-edit-editordem-editordem-module-es5.js.map