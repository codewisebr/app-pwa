(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-dashboard-dashboard-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/dashboard/dashboard.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/dashboard/dashboard.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      <ion-title>Home</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content padding>\n    <ion-card>\n      <ion-card-header>\n        <ion-card-title text-center>\n            LISTA DE PRESENÇA\n        </ion-card-title>\n        <ion-list lines=\"none\">\n              <ion-card-subtitle text-center>Comparecerá na reunião do dia {{this.data_r}} ?</ion-card-subtitle>\n        </ion-list>\n      </ion-card-header>\n      <ion-card-content text-center>\n          <h3>CONFIRMADOS: {{this.qtde}}</h3><br>\n            <ion-button [color]=\"p1\" [disabled]=\"disabled1\" (click)=resposta(1)>SIM</ion-button>\n            <ion-button [color]=\"p2\" [disabled]=\"disabled2\" (click)=resposta(0)>NÃO</ion-button>\n        <ion-buttons>\n          <ion-button color=\"medium\" (click)=editar()>EDITAR</ion-button>\n          <ion-button color=\"medium\" [disabled]=\"disabled3\" (click)=bmotivo(0)>MOTIVO</ion-button>\n      </ion-buttons>\n      </ion-card-content>\n    </ion-card>\n    <ion-card>\n      <ion-card-header>\n        <ion-card-title text-center>\n              INFORMATIVOS\n        </ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        <ion-list lines=\"none\">\n          <ion-item *ngFor=\"let inform of info\">\n            <ion-label>{{inform}}</ion-label>\n          </ion-item>\n        </ion-list>\n        <br>\n        <ion-buttons>\n          <ion-button color=\"primary\" fill=\"clear\" [routerLink]=\"['/informativo']\">VER MAIS</ion-button>\n        </ion-buttons>\n      </ion-card-content>\n    </ion-card>\n    <ion-card>\n      <ion-card-header>\n        <ion-card-title text-center>\n              ÁGAPE\n        </ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n          <ion-list lines=\"none\">\n              <ion-item *ngFor=\"let agapes of agape\">\n                <ion-label>{{agapes}}</ion-label>\n              </ion-item>\n            </ion-list>\n            <br>\n            <ion-buttons>\n              <ion-button color=\"primary\" fill=\"clear\" [routerLink]=\"['/agape']\">VER MAIS</ion-button>\n            </ion-buttons>\n      </ion-card-content>\n    </ion-card>\n    <ion-card>\n      <ion-card-header>\n        <ion-card-title text-center>ORDEM DO DIA\n        </ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        <ion-list lines=\"none\">\n          <ion-item *ngFor=\"let ordens of ordem\">\n            <ion-label>{{ordens}}</ion-label>\n          </ion-item>\n        </ion-list>\n        <br>\n            <ion-buttons>\n              <ion-button color=\"primary\" fill=\"clear\" [routerLink]=\"['/ordem']\">VER MAIS</ion-button>\n            </ion-buttons>\n      </ion-card-content>\n    </ion-card>\n    <ion-card>\n      <ion-card-header>\n        <ion-card-title>FINANCEIRO</ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        <ion-list lines=\"none\" >\n          <ion-item-sliding *ngFor=\"let finan of financeiro\">\n            <ion-item>\n              <ion-label>Mês: {{finan.mes}}</ion-label>\n            </ion-item>\n            <ion-item>\n              <ion-label>Pagamento: {{finan.data_pag}}</ion-label>\n            </ion-item>\n            <ion-item>\n              <ion-label>Valor: {{finan.valor}}</ion-label>\n            </ion-item>\n          </ion-item-sliding>\n        </ion-list>\n        <br>\n        <ion-buttons>\n          <ion-button color=\"primary\" fill=\"clear\"  [routerLink]=\"['/financeiro']\">VER MAIS</ion-button>\n        </ion-buttons>\n      </ion-card-content>\n    </ion-card>\n  </ion-content>"

/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.module.ts ***!
  \*****************************************************/
/*! exports provided: DashboardPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPageModule", function() { return DashboardPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard.page */ "./src/app/pages/dashboard/dashboard.page.ts");







const routes = [
    {
        path: '',
        component: _dashboard_page__WEBPACK_IMPORTED_MODULE_6__["DashboardPage"]
    }
];
let DashboardPageModule = class DashboardPageModule {
};
DashboardPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_dashboard_page__WEBPACK_IMPORTED_MODULE_6__["DashboardPage"]]
    })
], DashboardPageModule);



/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Rhc2hib2FyZC9kYXNoYm9hcmQucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.page.ts ***!
  \***************************************************/
/*! exports provided: DashboardPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPage", function() { return DashboardPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/global.service */ "./src/app/services/global.service.ts");
/* harmony import */ var _services_env_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/env.service */ "./src/app/services/env.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");











let DashboardPage = class DashboardPage {
    constructor(navCtrl, authService, alertService, http, env, route, alertCtrl, global, storage, dataPipe, menu) {
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.alertService = alertService;
        this.http = http;
        this.env = env;
        this.route = route;
        this.alertCtrl = alertCtrl;
        this.global = global;
        this.storage = storage;
        this.dataPipe = dataPipe;
        this.menu = menu;
        this.p1 = "primary";
        this.p2 = "danger";
        this.reuniao = { id: null, data: '', ativo: 0 };
        this.ordem = [];
        this.info = [];
        this.qtde = 0;
        this.agape = [];
        this.financeiro = [];
        this.menu.enable(true, 'app');
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.id = this.global.user_id;
        this.showOrdem();
        this.showInfo();
        this.showFinanceiro();
        this.verifica();
        this.showData();
        this.presenca();
        this.showAgape();
        this.authService.reuniao().subscribe(data => { });
    }
    verifica() {
        //verifica se o usuario ja respondeu
        this.authService.getLista().subscribe(resp => {
            //verifica se esta vazio, se tiver permite q o usuario escolha a opcao
            if (resp.length == 0) {
                this.disabled1 = false;
                this.disabled2 = false;
                this.disabled3 = true;
            }
            else {
                this.disabled1 = true;
                this.disabled2 = true;
                for (let i = 0; i < resp.length; i++) {
                    if (resp[i].presenca == 1) {
                        this.p1 = "success";
                        this.p2 = "primary";
                        this.disabled3 = true;
                    }
                    else if (resp[i].presenca == 0) {
                        this.p2 = "success";
                        this.p1 = "primary";
                        this.disabled3 = false;
                    }
                }
            }
        }, error => {
            //se nao possui o id no banco de dados, deixa habilitado para o usuario
            //console.log('erro na verificação');
            this.disabled1 = false;
            this.disabled2 = false;
        });
    }
    showData() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            //mostra a data se tiver
            yield this.authService.getReuniao()
                .subscribe(resul => {
                this.data_r = (this.dataPipe.transform(resul[0].data, "dd/MM"));
                this.storage.set('reuniao', resul[0].id);
                this.disabled1 = false;
                this.disabled2 = false;
                this.verifica();
            }, error => {
                // console.log("error: " + error);
            });
        });
    }
    resposta(resp) {
        this.opcao = resp;
        if (this.opcao == 0) {
            this.disabled3 = false;
            this.bmotivo(this.opcao);
        }
        else {
            this.motivo = "-";
            this.lista(this.opcao, this.motivo);
        }
    }
    bmotivo(opcao) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            //abre um pop
            let alertPrompt = yield this.alertCtrl.create({
                header: 'Informe o motivo',
                inputs: [
                    {
                        name: 'motivo',
                        type: 'text'
                    }
                ],
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                        cssClass: 'secondary'
                    },
                    {
                        text: 'Enviar',
                        handler: (data) => {
                            if (data.motivo == "")
                                this.motivo = "Sem justificativa";
                            else
                                this.motivo = data.motivo;
                            this.lista(this.opcao, this.motivo);
                        }
                    }
                ]
            });
            yield alertPrompt.present();
        });
    }
    lista(opcao, motivo) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            //manda pra funcão o id do usuario e a resposta, se ja tiver no bd ele atualiza para uma nova resposta
            this.authService.confirmaPresenca(this.id, this.opcao, this.motivo, this.global.reuniao).subscribe(data => { }, error => {
                // console.log(error);
            }, () => {
                this.alertService.presentToast('Confirmação enviada!');
                window.location.reload();
            });
        });
    }
    editar() {
        this.disabled1 = !this.disabled1;
        this.disabled2 = !this.disabled2;
    }
    showOrdem() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            //pega as info de acordo com o nivel do usuario
            this.authService.getNivelOrdem(this.global.avental, 1)
                .subscribe(data => {
                for (let i = 0; i < data.length; i++) {
                    this.ordem[i] = data[i].ordem;
                }
            });
        });
    }
    showInfo() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.authService.getNivelInfo(this.global.avental, 1)
                .subscribe(data => {
                for (let i = 0; i < data.length; i++) {
                    this.info[i] = data[i].info;
                }
            });
        });
    }
    presenca() {
        this.authService.getConfirmacao(0)
            .subscribe(data => {
            this.qtde = data;
        });
    }
    showAgape() {
        this.authService.getAgape(1).subscribe(data => {
            for (let i = 0; i < data.length; i++) {
                this.agape[i] = data[i].agape;
            }
        }, error => {
            // console.log(error);
        });
    }
    showFinanceiro() {
        this.authService.getFinanceiro(this.id).subscribe(resul => {
            for (let i = 0; i < resul.length; i++) {
                this.financeiro[i] = resul[i];
                if (resul[i].data_pag == '0000-00-00' || resul[i].data_pag == null) {
                    this.financeiro[i].data_pag = "Aguardando";
                }
                else {
                    this.financeiro[i].data_pag = this.dataPipe.transform(resul[i].data_pag, "dd/MM");
                }
            }
        });
    }
};
DashboardPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] },
    { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _services_env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"] },
    { type: _services_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_1__["Storage"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_10__["DatePipe"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["MenuController"] }
];
DashboardPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__(/*! raw-loader!./dashboard.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/dashboard/dashboard.page.html"),
        styles: [__webpack_require__(/*! ./dashboard.page.scss */ "./src/app/pages/dashboard/dashboard.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"],
        src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"],
        _services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
        _services_env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"],
        _services_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_1__["Storage"],
        _angular_common__WEBPACK_IMPORTED_MODULE_10__["DatePipe"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["MenuController"]])
], DashboardPage);



/***/ })

}]);
//# sourceMappingURL=pages-dashboard-dashboard-module-es2015.js.map