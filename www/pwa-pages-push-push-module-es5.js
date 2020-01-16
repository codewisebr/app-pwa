(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pwa-pages-push-push-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pwa-pages/push/push.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pwa-pages/push/push.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n          <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n    <ion-title>Notificações</ion-title>\n  </ion-toolbar>\n</ion-header>\n  \n<ion-content padding>\n  <ion-grid text-center >\n    <div class=\"box\">\n      <h2 text-center>Enviar Notificação</h2>\n        <form #form=\"ngForm\" (ngSubmit)=\"showPush(form)\" method=\"POST\">\n          <ion-grid>\n            <ion-input ngModel placeholder=\"Titulo\" name=\"titulo\" type=\"text\" required=\"true\" ></ion-input>\n          </ion-grid>\n          <br>\n          <ion-grid>\n            <ion-textarea ngModel placeholder=\"Corpo\" name=\"corpo\" type=\"text\" required=\"true\"></ion-textarea>\n          </ion-grid>\n          <br>\n          <ion-grid>\n            <ion-button type=\"submit\" round expand=\"block\" color=\"danger\">Enviar</ion-button>\n          </ion-grid>\n      </form>\n    </div>\n  </ion-grid>\n</ion-content>"

/***/ }),

/***/ "./src/app/pwa-pages/push/push.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pwa-pages/push/push.module.ts ***!
  \***********************************************/
/*! exports provided: PushPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PushPageModule", function() { return PushPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _push_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./push.page */ "./src/app/pwa-pages/push/push.page.ts");







var routes = [
    {
        path: '',
        component: _push_page__WEBPACK_IMPORTED_MODULE_6__["PushPage"]
    }
];
var PushPageModule = /** @class */ (function () {
    function PushPageModule() {
    }
    PushPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_push_page__WEBPACK_IMPORTED_MODULE_6__["PushPage"]]
        })
    ], PushPageModule);
    return PushPageModule;
}());



/***/ }),

/***/ "./src/app/pwa-pages/push/push.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pwa-pages/push/push.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".box {\n  background-color: white;\n  margin-left: auto;\n  margin-right: auto;\n  min-height: 300px;\n  max-width: 650px;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  border-radius: 7px !important;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n\nion-input {\n  border-radius: 7px !important;\n  border: 1px solid #f1f1f1 !important;\n  text-align: justify;\n  --background: #f1f1f1;\n}\n\nion-textarea {\n  --background: #f1f1f1;\n  text-align: justify;\n  border-radius: 7px !important;\n  border: 1px solid #f1f1f1 !important;\n}\n\nion-grid {\n  padding-left: 30px;\n  padding-right: 30px;\n}\n\nion-button {\n  --border-radius: 7px;\n  padding-left: 30px;\n  padding-right: 30px;\n}\n\np {\n  color: #808080;\n}\n\nh2 {\n  color: grey;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NvZGV3aXNlL3VuaWFvdmlpL2FwcC1wd2Evc3JjL2FwcC9wd2EtcGFnZXMvcHVzaC9wdXNoLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcHdhLXBhZ2VzL3B1c2gvcHVzaC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLDZCQUFBO0VBQ0Esb0NBQUE7RUFDQSwrR0FBQTtBQ0NKOztBRENFO0VBQ0UsNkJBQUE7RUFDQSxvQ0FBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUNFSjs7QURBRTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLG9DQUFBO0FDR0o7O0FEREU7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FDSUo7O0FEREU7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNJSjs7QURGRTtFQUNFLGNBQUE7QUNLSjs7QURIRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtBQ01KIiwiZmlsZSI6InNyYy9hcHAvcHdhLXBhZ2VzL3B1c2gvcHVzaC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm94e1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBtaW4taGVpZ2h0OiAzMDBweDtcbiAgICBtYXgtd2lkdGg6IDY1MHB4O1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDdweCAhaW1wb3J0YW50O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICBib3gtc2hhZG93OiAwIDNweCAxcHggLTJweCByZ2JhKDAsMCwwLC4yKSwgMCAycHggMnB4IDAgcmdiYSgwLDAsMCwuMTQpLCAwIDFweCA1cHggMCByZ2JhKDAsMCwwLC4xMik7XG4gIH1cbiAgaW9uLWlucHV0e1xuICAgIGJvcmRlci1yYWRpdXM6IDdweCAhaW1wb3J0YW50O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmMWYxZjEgIWltcG9ydGFudDtcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgIC0tYmFja2dyb3VuZDogI2YxZjFmMTtcbiAgfVxuICBpb24tdGV4dGFyZWF7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZjFmMWYxO1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgYm9yZGVyLXJhZGl1czogN3B4ICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2YxZjFmMSAhaW1wb3J0YW50O1xuICB9XG4gIGlvbi1ncmlke1xuICAgIHBhZGRpbmctbGVmdDogMzBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xuICB9XG4gIFxuICBpb24tYnV0dG9ue1xuICAgIC0tYm9yZGVyLXJhZGl1czogN3B4O1xuICAgIHBhZGRpbmctbGVmdDogMzBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xuICB9XG4gIHB7XG4gICAgY29sb3I6IzgwODA4MFxuICB9XG4gIGgye1xuICAgIGNvbG9yOiBncmV5O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfSIsIi5ib3gge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWluLWhlaWdodDogMzAwcHg7XG4gIG1heC13aWR0aDogNjUwcHg7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogN3B4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgYm94LXNoYWRvdzogMCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG5pb24taW5wdXQge1xuICBib3JkZXItcmFkaXVzOiA3cHggIWltcG9ydGFudDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2YxZjFmMSAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAtLWJhY2tncm91bmQ6ICNmMWYxZjE7XG59XG5cbmlvbi10ZXh0YXJlYSB7XG4gIC0tYmFja2dyb3VuZDogI2YxZjFmMTtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgYm9yZGVyLXJhZGl1czogN3B4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmMWYxZjEgIWltcG9ydGFudDtcbn1cblxuaW9uLWdyaWQge1xuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG59XG5cbmlvbi1idXR0b24ge1xuICAtLWJvcmRlci1yYWRpdXM6IDdweDtcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xufVxuXG5wIHtcbiAgY29sb3I6ICM4MDgwODA7XG59XG5cbmgyIHtcbiAgY29sb3I6IGdyZXk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pwa-pages/push/push.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pwa-pages/push/push.page.ts ***!
  \*********************************************/
/*! exports provided: PushPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PushPage", function() { return PushPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_route_to_preload__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/route-to-preload */ "./src/app/route-to-preload.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");





var PushPage = /** @class */ (function () {
    function PushPage(routingService, http, alertService) {
        this.routingService = routingService;
        this.http = http;
        this.alertService = alertService;
        this.URL = 'https://fcm.googleapis.com/fcm/send';
    }
    PushPage.prototype.ngOnInit = function () {
    };
    PushPage.prototype.ionViewDidEnter = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.routingService.preloadRoute('admin')];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PushPage.prototype.ionViewWillEnter = function () {
    };
    PushPage.prototype.showPush = function (form) {
        var _this = this;
        if (form.value.titulo == '' || form.value.corpo == '') {
            this.alertService.presentToast('Preencha todos os campos!');
        }
        else {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'key=AAAAYt2fEOU:APA91bHA3KYq96a5MHCet0DAWgpwxjF6QVu1YTATVgoVUgxU8U9oZ-xz6r2AHoqMvcyMMDj1TjBB6hPYwivTVmln3ry_uKitsv1nW-SZ16ptjwneFKS2u-O5fU_SHv9gZVadzUubRy3O'
            });
            return this.http.post(this.URL, {
                "notification": {
                    "title": form.value.titulo,
                    "body": form.value.corpo,
                },
                "to": "/topics/all"
            }, { headers: headers }).subscribe(function (data) {
                _this.alertService.presentToast('Notificação enviada com sucesso!');
            }, function (error) {
                _this.alertService.presentToast('Erro ao tentar enviar notificação, tente mais tarde.');
            });
        }
    };
    PushPage.ctorParameters = function () { return [
        { type: src_app_route_to_preload__WEBPACK_IMPORTED_MODULE_3__["AppRoutingPreloaderService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"] }
    ]; };
    PushPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'app-push',
            template: __webpack_require__(/*! raw-loader!./push.page.html */ "./node_modules/raw-loader/index.js!./src/app/pwa-pages/push/push.page.html"),
            styles: [__webpack_require__(/*! ./push.page.scss */ "./src/app/pwa-pages/push/push.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_route_to_preload__WEBPACK_IMPORTED_MODULE_3__["AppRoutingPreloaderService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"]])
    ], PushPage);
    return PushPage;
}());



/***/ })

}]);
//# sourceMappingURL=pwa-pages-push-push-module-es5.js.map