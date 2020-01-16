(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-work-work-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/work/work.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/work/work.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n      <ion-title>Work to do</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content padding>\n      <ion-card>\n          <ion-card-header>\n              <ion-card-title text-center>Work to do</ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n              <ion-list lines=\"none\">\n                  <!-- se estiver vazia *lembrando q ngIf é um recurso do angular -->\n                  <ion-item *ngIf=\"tasks.length < 1\">\n                      <ion-label text-center text-uppercase>Não há nada...</ion-label>\n                    </ion-item>\n                  <!-- repete esse bloco se tiver item -->\n                  <ion-item-sliding *ngFor=\"let task of tasks\">\n                      <ion-item (click)=\"openActions(task)\">\n                        <ion-label text-uppercase>{{task.name}}</ion-label>\n                        <!-- se tuver marcado ou nao -->\n                        <ion-icon *ngIf=\"!task.done\" slot=\"start\" name=\"radio-button-off\"></ion-icon>\n                        <ion-icon *ngIf=\"task.done\" slot=\"start\" name=\"checkmark-circle\" color=\"success\"></ion-icon>\n                      </ion-item>\n                      <ion-item-options side=\"end\">\n                        <ion-item-option (click)=\"delete(task)\" color=\"danger\">Excluir</ion-item-option>\n                      </ion-item-options>\n                    </ion-item-sliding>\n                </ion-list>\n                <br>\n              <ion-button color=\"primary\" (click)=abrir()>Adicionar</ion-button>\n          </ion-card-content>\n      </ion-card>\n  </ion-content>"

/***/ }),

/***/ "./src/app/pages/work/work.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/work/work.module.ts ***!
  \*******************************************/
/*! exports provided: WorkPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkPageModule", function() { return WorkPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _work_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./work.page */ "./src/app/pages/work/work.page.ts");







var routes = [
    {
        path: '',
        component: _work_page__WEBPACK_IMPORTED_MODULE_6__["WorkPage"]
    }
];
var WorkPageModule = /** @class */ (function () {
    function WorkPageModule() {
    }
    WorkPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_work_page__WEBPACK_IMPORTED_MODULE_6__["WorkPage"]]
        })
    ], WorkPageModule);
    return WorkPageModule;
}());



/***/ }),

/***/ "./src/app/pages/work/work.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/work/work.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3dvcmsvd29yay5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/work/work.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/work/work.page.ts ***!
  \*****************************************/
/*! exports provided: WorkPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkPage", function() { return WorkPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");




var WorkPage = /** @class */ (function () {
    function WorkPage(menu, authService, toastCtrl, alertCtrl, actionSheetCtrl) {
        this.menu = menu;
        this.authService = authService;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.tasks = [];
        this.menu.enable(true);
        var tasksJson = localStorage.getItem('taskbd');
        if (tasksJson != null) {
            this.tasks = JSON.parse(tasksJson);
        }
    }
    WorkPage.prototype.ngOnInit = function () {
    };
    WorkPage.prototype.abrir = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: 'Adicionar tarefa',
                            inputs: [
                                {
                                    name: 'taskToDo',
                                    type: 'text',
                                    placeholder: 'tarefa a fazer'
                                }
                            ],
                            buttons: [
                                {
                                    text: 'Cancelar',
                                    //role cancel deixa ele como segunda opcao
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function () {
                                        //sconsole.log('cancelado')
                                    }
                                },
                                {
                                    text: 'Ok',
                                    handler: function (form) {
                                        //console.log(form),
                                        _this.add(form.taskToDo);
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
    WorkPage.prototype.add = function (taskToDo) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast, task;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(taskToDo.trim().length < 1)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.toastCtrl.create({
                                message: 'Digite alguma informação!',
                                duration: 2000,
                                position: 'top'
                            })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                    case 2:
                        task = { name: taskToDo, done: false };
                        this.tasks.push(task);
                        this.updateLocalStorage();
                        return [2 /*return*/];
                }
            });
        });
    };
    WorkPage.prototype.openActions = function (task) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetCtrl.create({
                            header: "O que deseja fazer?",
                            buttons: [{
                                    text: task.done ? 'Desmarcar' : 'Marcar',
                                    icon: task.done ? 'radio-button-off' : 'checkmark-circle',
                                    handler: function () {
                                        task.done = !task.done;
                                        _this.updateLocalStorage();
                                    }
                                },
                                {
                                    text: 'Cancelar',
                                    icon: 'close',
                                    //role cancel deixa ele como segunda opcao
                                    role: 'cancel',
                                    handler: function () {
                                        //console.log('cancelado')
                                    }
                                }]
                        })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    WorkPage.prototype.updateLocalStorage = function () {
        // JSON transforma em string
        localStorage.setItem('taskbd', JSON.stringify(this.tasks));
    };
    WorkPage.prototype.delete = function (task) {
        this.tasks = this.tasks.filter(function (taskArray) { return task != taskArray; });
        this.updateLocalStorage();
    };
    WorkPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
        { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"] }
    ]; };
    WorkPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-work',
            template: __webpack_require__(/*! raw-loader!./work.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/work/work.page.html"),
            styles: [__webpack_require__(/*! ./work.page.scss */ "./src/app/pages/work/work.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"]])
    ], WorkPage);
    return WorkPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-work-work-module-es5.js.map