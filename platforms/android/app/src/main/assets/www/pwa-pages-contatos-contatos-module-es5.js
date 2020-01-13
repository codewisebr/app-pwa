(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pwa-pages-contatos-contatos-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pwa-pages/contatos/contatos.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pwa-pages/contatos/contatos.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n      <ion-title>Contatos</ion-title>\n    </ion-toolbar>\n  </ion-header>\n    \n  <ion-content padding>\n    <ion-card *ngIf=\"this.plataforma == 1\">\n      <ion-card-header>\n        <ion-card-title text-center>Lista de contatos</ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n          <ion-list lines=\"none\">\n              <ion-row>\n                <ion-col>\n                  <ion-item>\n                   <h2>Nome</h2> \n                  </ion-item>\n                </ion-col>\n                <ion-col>\n                  <ion-item>\n                    <h2>Profissão</h2>\n                  </ion-item>\n                </ion-col>\n                <ion-col>\n                  <ion-item>\n                    <h2>Telefone</h2>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col>\n                  <ion-item-sliding lines=\"none\" *ngFor=\"let nomes of nome\">\n                    <ion-item>\n                      <ion-label>{{nomes}}</ion-label>\n                    </ion-item>\n                  </ion-item-sliding>\n                </ion-col>\n                <ion-col>\n                  <ion-item-sliding lines=\"none\" *ngFor=\"let users of user\">\n                    <ion-item>\n                      <ion-label>{{users.profissao}}</ion-label>\n                    </ion-item>\n                  </ion-item-sliding>\n                </ion-col>\n                <ion-col>\n                  <ion-item-sliding lines=\"none\" *ngFor=\"let users of user\">\n                    <ion-item>\n                      <ion-label>{{users.telefone}}</ion-label>\n                    </ion-item>\n                  </ion-item-sliding>\n                </ion-col>\n              </ion-row>\n            </ion-list>\n      </ion-card-content>\n    </ion-card>\n    <ion-card *ngIf=\"this.plataforma == 0\">\n      <ion-card-header>\n        <ion-card-title text-center>Lista de contatos</ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        <ion-list lines=\"none\">\n          <ion-item-sliding lines=\"none\" *ngFor=\"let users of user\">\n              <ion-item>\n                <ion-label>Nome: {{users.id}}</ion-label>\n              </ion-item>\n              <ion-item>\n                <ion-label>Profissão: {{users.profissao}}</ion-label>\n              </ion-item>\n              <ion-item>\n                <ion-label>Telefone: <a href=\"tel:{{users.telefone}}\">{{users.telefone}}</a></ion-label>\n              </ion-item>\n              <ion-item>\n                  Enviar mensagem via: \n                <ion-button fill=\"clear\" (click)=\"whatsapp(users.telefone)\"><ion-icon name=\"logo-whatsapp\" color=\"success\" class=\"icon\"></ion-icon></ion-button>\n              </ion-item>\n              <ion-item></ion-item>\n          </ion-item-sliding>\n        </ion-list>\n      </ion-card-content>\n    </ion-card>\n  </ion-content>\n    "

/***/ }),

/***/ "./src/app/pwa-pages/contatos/contatos.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pwa-pages/contatos/contatos.module.ts ***!
  \*******************************************************/
/*! exports provided: ContatosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContatosPageModule", function() { return ContatosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _contatos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contatos.page */ "./src/app/pwa-pages/contatos/contatos.page.ts");







var routes = [
    {
        path: '',
        component: _contatos_page__WEBPACK_IMPORTED_MODULE_6__["ContatosPage"]
    }
];
var ContatosPageModule = /** @class */ (function () {
    function ContatosPageModule() {
    }
    ContatosPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_contatos_page__WEBPACK_IMPORTED_MODULE_6__["ContatosPage"]]
        })
    ], ContatosPageModule);
    return ContatosPageModule;
}());



/***/ }),

/***/ "./src/app/pwa-pages/contatos/contatos.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pwa-pages/contatos/contatos.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".icon {\n  font-size: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NvZGV3aXNlL3VuaWFvdmlpL2FwcC1wd2Evc3JjL2FwcC9wd2EtcGFnZXMvY29udGF0b3MvY29udGF0b3MucGFnZS5zY3NzIiwic3JjL2FwcC9wd2EtcGFnZXMvY29udGF0b3MvY29udGF0b3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcHdhLXBhZ2VzL2NvbnRhdG9zL2NvbnRhdG9zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pY29ue1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbn0iLCIuaWNvbiB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pwa-pages/contatos/contatos.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pwa-pages/contatos/contatos.page.ts ***!
  \*****************************************************/
/*! exports provided: ContatosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContatosPage", function() { return ContatosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_route_to_preload__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/route-to-preload */ "./src/app/route-to-preload.ts");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");






var ContatosPage = /** @class */ (function () {
    function ContatosPage(authService, routingService, platform, socialSharing) {
        this.authService = authService;
        this.routingService = routingService;
        this.platform = platform;
        this.socialSharing = socialSharing;
        this.user = [];
        this.nome = [];
    }
    ContatosPage.prototype.ngOnInit = function () {
    };
    ContatosPage.prototype.ionViewDidEnter = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.routingService.preloadRoute('admin')];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.routingService.preloadRoute('cadastrafamilia')];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ContatosPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.platform.ready().then(function () {
            if (_this.platform.is('cordova') || _this.platform.is('android') || _this.platform.is('ios')) {
                _this.plataforma = 0;
                _this.showContatoApp();
            }
            else if (_this.platform.is('pwa') || _this.platform.is('capacitor') || _this.platform.is('desktop')) {
                _this.plataforma = 1;
                _this.showContato();
            }
        });
    };
    ContatosPage.prototype.showContato = function () {
        var _this = this;
        this.authService.getAllUser().subscribe(function (data) {
            var _loop_1 = function (i) {
                _this.user[i] = data[i];
                _this.authService.getNome(data[i].id).subscribe(function (resul) {
                    _this.nome[i] = resul[0];
                });
            };
            for (var i = 0; i < data.length; i++) {
                _loop_1(i);
            }
        });
    };
    ContatosPage.prototype.showContatoApp = function () {
        var _this = this;
        this.authService.getAllUser().subscribe(function (data) {
            var _loop_2 = function (i) {
                _this.user[i] = data[i];
                _this.authService.getNome(data[i].id).subscribe(function (resul) {
                    _this.user[i].id = resul[0];
                });
            };
            for (var i = 0; i < data.length; i++) {
                _loop_2(i);
            }
        });
    };
    ContatosPage.prototype.whatsapp = function (tel) {
        var _this = this;
        // console.log(tel);
        this.tel = '+55' + tel;
        this.platform.ready().then(function () {
            _this.socialSharing.shareViaWhatsAppToReceiver(_this.tel, ' ', null, null)
                .then(function () {
                // console.log("WhatsApp share successful");
            }).catch(function (err) {
                // console.log("An error occurred ", err);
            });
        });
    };
    ContatosPage.ctorParameters = function () { return [
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: src_app_route_to_preload__WEBPACK_IMPORTED_MODULE_4__["AppRoutingPreloaderService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Platform"] },
        { type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_5__["SocialSharing"] }
    ]; };
    ContatosPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-contatos',
            template: __webpack_require__(/*! raw-loader!./contatos.page.html */ "./node_modules/raw-loader/index.js!./src/app/pwa-pages/contatos/contatos.page.html"),
            styles: [__webpack_require__(/*! ./contatos.page.scss */ "./src/app/pwa-pages/contatos/contatos.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            src_app_route_to_preload__WEBPACK_IMPORTED_MODULE_4__["AppRoutingPreloaderService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Platform"],
            _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_5__["SocialSharing"]])
    ], ContatosPage);
    return ContatosPage;
}());



/***/ })

}]);
//# sourceMappingURL=pwa-pages-contatos-contatos-module-es5.js.map