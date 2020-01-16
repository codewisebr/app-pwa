(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pwa-pages-admin-admin-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pwa-pages/admin/admin.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pwa-pages/admin/admin.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Área do Administrador</ion-title>\n  </ion-toolbar> \n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col text-center>\n        <div class=\"box\">\n            <h3>Reunião</h3>\n            <h1>{{this.data}}</h1>\n        </div>\n      </ion-col>\n      <ion-col>\n        <ion-row class=\"minbox1\">\n          <ion-col text-center>\n              <h3>Comparecerá na reunião?</h3>\n              <ion-button [color]=\"p1\" [disabled]=\"disabled1\" (click)=resposta(1)>SIM</ion-button>\n              <ion-button [color]=\"p2\" [disabled]=\"disabled2\" (click)=resposta(0)>NÃO</ion-button>\n              <ion-buttons>\n                <ion-button color=\"medium\" (click)=editar()>EDITAR</ion-button>\n                <ion-button color=\"medium\" [disabled]=\"disabled3\" (click)=bmotivo(0)>MOTIVO</ion-button>\n              </ion-buttons>\n          </ion-col>\n        </ion-row>\n        <ion-row text-center>\n          <ion-col class=\"minbox2\">\n            <h3>Presentes: {{this.presente}}</h3>\n          </ion-col>\n          <ion-col class=\"minbox3\">\n            <h3>Ausentes: {{this.ausente}}</h3>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-row>\n          <ion-col>\n            <div class=\"boxes\">\n            <h3>Informativos</h3>\n            <ion-list lines=\"none\">\n              <ion-item *ngFor=\"let infos of info\">\n                <ion-label>{{infos}}</ion-label>\n              </ion-item>\n            </ion-list>\n            </div>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n          <div class=\"boxes\">\n            <h3>Ordens</h3>\n            <ion-list lines=\"none\">\n              <ion-item *ngFor=\"let ordens of ordem\">\n                <ion-label>{{ordens}}</ion-label>\n              </ion-item>\n            </ion-list>\n          </div>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n          <div class=\"boxes\">\n            <h3>Ágapes</h3>\n            <ion-list lines=\"none\">\n              <ion-item *ngFor=\"let agapes of agape\">\n                <ion-label>{{agapes}}</ion-label>\n              </ion-item>\n            </ion-list>\n          </div>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n      <ion-col class=\"img-box\">\n        <ion-img src=\"assets/admin.PNG\" class=\"img\"></ion-img>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pwa-pages/admin/admin.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pwa-pages/admin/admin.module.ts ***!
  \*************************************************/
/*! exports provided: AdminPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminPageModule", function() { return AdminPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _admin_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin.page */ "./src/app/pwa-pages/admin/admin.page.ts");







var routes = [
    {
        path: '',
        component: _admin_page__WEBPACK_IMPORTED_MODULE_6__["AdminPage"]
    }
];
var AdminPageModule = /** @class */ (function () {
    function AdminPageModule() {
    }
    AdminPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            ],
            declarations: [_admin_page__WEBPACK_IMPORTED_MODULE_6__["AdminPage"]]
        })
    ], AdminPageModule);
    return AdminPageModule;
}());



/***/ }),

/***/ "./src/app/pwa-pages/admin/admin.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pwa-pages/admin/admin.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Extra small devices (phones, 600px and down) */\n@media (max-width: 600px) {\n  .box {\n    padding-bottom: 5px;\n    padding-top: 50px;\n    border-radius: 4px;\n    height: 295px;\n  }\n\n  .boxes {\n    height: 220px;\n  }\n\n  .minbox1 {\n    margin-top: 0.1ch;\n    margin-bottom: 5px;\n    height: 170px;\n  }\n\n  .minbox2 {\n    border-radius: 4px;\n    height: 55px;\n    margin-bottom: 5px;\n  }\n\n  .minbox3 {\n    margin-bottom: 0px;\n    margin-top: 7px;\n    height: 55px;\n  }\n\n  .img-box {\n    display: none;\n  }\n\n  .img {\n    display: none;\n  }\n}\n/* Small devices (portrait tablets and large phones, 600px and up) */\n@media (min-width: 600px) {\n  .box {\n    padding-bottom: 5px;\n    padding-top: 50px;\n    border-radius: 4px;\n    height: 295px;\n  }\n\n  .boxes {\n    height: 220px;\n  }\n\n  .minbox1 {\n    margin-top: 0.1ch;\n    margin-bottom: 5px;\n    padding-top: 20px;\n    height: 188px;\n  }\n\n  .minbox2 {\n    margin-right: 2.5px;\n    border-radius: 4px;\n    padding-top: 20px;\n    height: 100px;\n  }\n\n  .minbox3 {\n    margin-bottom: 0px;\n    margin-left: 2.5px;\n    padding-top: 20px;\n    height: 100px;\n  }\n\n  .img-box {\n    display: none;\n  }\n\n  .img {\n    display: none;\n  }\n}\n/* Medium devices (landscape tablets, 768px and up) */\n@media (min-width: 768px) {\n  .box {\n    padding-bottom: 5px;\n    padding-top: 50px;\n    border-radius: 4px;\n    height: 250px;\n  }\n\n  .boxes {\n    padding-bottom: 5px;\n    border-radius: 4px;\n    height: 220px;\n  }\n\n  .minbox1 {\n    margin-top: 0.1ch;\n    margin-bottom: 5px;\n    height: 150px;\n  }\n\n  .minbox2 {\n    margin-right: 2.5px;\n    border-radius: 4px;\n    padding-top: 15px;\n    height: 95px;\n  }\n\n  .minbox3 {\n    margin-bottom: 0px;\n    margin-left: 2.5px;\n    padding-top: 15px;\n    height: 95px;\n  }\n\n  .img {\n    width: 400px;\n    height: 350px;\n  }\n\n  .img-box {\n    padding-top: 50px;\n  }\n}\n/* Large devices (laptops/desktops, 992px and up) */\n@media (min-width: 992px) {\n  .box {\n    padding-bottom: 5px;\n    padding-top: 50px;\n    border-radius: 4px;\n    height: 220px;\n  }\n\n  .boxes {\n    padding-bottom: 5px;\n    border-radius: 4px;\n    height: 220px;\n  }\n\n  .minbox1 {\n    margin-top: 0px;\n    margin-bottom: 5px;\n    height: 150px;\n  }\n\n  .minbox2 {\n    margin-right: 2.5px;\n    border-radius: 4px;\n    padding-bottom: 10px;\n    height: 65px;\n  }\n\n  .minbox3 {\n    margin-left: 2.5px;\n    padding-bottom: 5px;\n    height: 65px;\n  }\n\n  .img {\n    display: block;\n    width: 550px;\n    height: 500px;\n  }\n\n  .img-box {\n    display: block;\n    padding-top: 40px;\n  }\n}\n/* Extra large devices (large laptops and desktops, 1200px and up) */\n@media (min-width: 1200px) {\n  .box {\n    padding-bottom: 5px;\n    padding-top: 50px;\n    border-radius: 4px;\n    height: 220px;\n  }\n\n  .boxes {\n    padding-bottom: 5px;\n    border-radius: 4px;\n    height: 220px;\n  }\n\n  .minbox2 {\n    margin-right: 2.5px;\n    border-radius: 4px;\n    padding-bottom: 10px;\n    height: 65px;\n  }\n\n  .minbox3 {\n    margin-left: 2.5px;\n    padding-bottom: 5px;\n    height: 65px;\n  }\n\n  .img {\n    display: block;\n    width: 550px;\n    height: 500px;\n  }\n\n  .img-box {\n    display: block;\n    padding-top: 40px;\n  }\n}\n.box {\n  background-color: white;\n  margin-left: auto;\n  margin-right: auto;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n.boxes {\n  background-color: white;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n.minbox1 {\n  background-color: white;\n  margin-left: auto;\n  margin-right: auto;\n  border-radius: 4px;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n.minbox2 {\n  background: white;\n  margin-bottom: 0px;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n.minbox3 {\n  background-color: white;\n  border-radius: 4px;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n.img {\n  margin-left: auto;\n  margin-right: auto;\n}\nh1 {\n  text-align: center;\n  font-size: 50px;\n}\nh3 {\n  text-align: center;\n}\nion-buttons {\n  margin-left: 10px;\n}\n.img-box {\n  padding-top: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NvZGV3aXNlL3VuaWFvdmlpL2FwcC1wd2Evc3JjL2FwcC9wd2EtcGFnZXMvYWRtaW4vYWRtaW4ucGFnZS5zY3NzIiwic3JjL2FwcC9wd2EtcGFnZXMvYWRtaW4vYWRtaW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJLGlEQUFBO0FBQ0E7RUFDRTtJQUNHLG1CQUFBO0lBQ0EsaUJBQUE7SUFDQSxrQkFBQTtJQUNBLGFBQUE7RUNBUDs7RURFSTtJQUNHLGFBQUE7RUNDUDs7RURDSTtJQUNHLGlCQUFBO0lBQ0Esa0JBQUE7SUFDQSxhQUFBO0VDRVA7O0VEQUk7SUFDRyxrQkFBQTtJQUNBLFlBQUE7SUFDQSxrQkFBQTtFQ0dQOztFRERJO0lBQ0csa0JBQUE7SUFDQSxlQUFBO0lBQ0EsWUFBQTtFQ0lQOztFREZJO0lBQ0csYUFBQTtFQ0tQOztFREhJO0lBQ0csYUFBQTtFQ01QO0FBQ0Y7QURISSxvRUFBQTtBQUNBO0VBQ0U7SUFDRyxtQkFBQTtJQUNBLGlCQUFBO0lBQ0Esa0JBQUE7SUFDQSxhQUFBO0VDS1A7O0VESEk7SUFDRyxhQUFBO0VDTVA7O0VESkk7SUFDRyxpQkFBQTtJQUNBLGtCQUFBO0lBQ0EsaUJBQUE7SUFDQSxhQUFBO0VDT1A7O0VETEk7SUFDRyxtQkFBQTtJQUNBLGtCQUFBO0lBQ0EsaUJBQUE7SUFDQSxhQUFBO0VDUVA7O0VETkk7SUFDRyxrQkFBQTtJQUNBLGtCQUFBO0lBQ0EsaUJBQUE7SUFDQSxhQUFBO0VDU1A7O0VEUEk7SUFDRyxhQUFBO0VDVVA7O0VEUkk7SUFDRyxhQUFBO0VDV1A7QUFDRjtBRFJJLHFEQUFBO0FBQ0E7RUFDRTtJQUNHLG1CQUFBO0lBQ0EsaUJBQUE7SUFDQSxrQkFBQTtJQUNBLGFBQUE7RUNVUDs7RURSSTtJQUNFLG1CQUFBO0lBQ0Esa0JBQUE7SUFDQSxhQUFBO0VDV047O0VEVEk7SUFDRyxpQkFBQTtJQUNBLGtCQUFBO0lBQ0EsYUFBQTtFQ1lQOztFRFZJO0lBQ0csbUJBQUE7SUFDQSxrQkFBQTtJQUNBLGlCQUFBO0lBQ0EsWUFBQTtFQ2FQOztFRFhJO0lBQ0csa0JBQUE7SUFDQSxrQkFBQTtJQUNBLGlCQUFBO0lBQ0EsWUFBQTtFQ2NQOztFRFpJO0lBQ0csWUFBQTtJQUNBLGFBQUE7RUNlUDs7RURiSTtJQUNHLGlCQUFBO0VDZ0JQO0FBQ0Y7QURiSSxtREFBQTtBQUNBO0VBQ0U7SUFDRyxtQkFBQTtJQUNBLGlCQUFBO0lBQ0Esa0JBQUE7SUFDQSxhQUFBO0VDZVA7O0VEYkk7SUFDRSxtQkFBQTtJQUNBLGtCQUFBO0lBQ0EsYUFBQTtFQ2dCTjs7RURkSTtJQUNHLGVBQUE7SUFDQSxrQkFBQTtJQUNBLGFBQUE7RUNpQlA7O0VEZkk7SUFDRyxtQkFBQTtJQUNBLGtCQUFBO0lBQ0Esb0JBQUE7SUFDQSxZQUFBO0VDa0JQOztFRGhCSTtJQUNHLGtCQUFBO0lBQ0EsbUJBQUE7SUFDQSxZQUFBO0VDbUJQOztFRGpCSTtJQUNHLGNBQUE7SUFDQSxZQUFBO0lBQ0EsYUFBQTtFQ29CUDs7RURsQkk7SUFDRyxjQUFBO0lBQ0EsaUJBQUE7RUNxQlA7QUFDRjtBRGxCSSxvRUFBQTtBQUNBO0VBQ0U7SUFDRyxtQkFBQTtJQUNBLGlCQUFBO0lBQ0Esa0JBQUE7SUFDQSxhQUFBO0VDb0JQOztFRGxCSTtJQUNFLG1CQUFBO0lBQ0Esa0JBQUE7SUFDQSxhQUFBO0VDcUJOOztFRG5CSTtJQUNHLG1CQUFBO0lBQ0Esa0JBQUE7SUFDQSxvQkFBQTtJQUNBLFlBQUE7RUNzQlA7O0VEcEJJO0lBQ0csa0JBQUE7SUFDQSxtQkFBQTtJQUNBLFlBQUE7RUN1QlA7O0VEckJJO0lBQ0csY0FBQTtJQUNBLFlBQUE7SUFDQSxhQUFBO0VDd0JQOztFRHJCSTtJQUNHLGNBQUE7SUFDQSxpQkFBQTtFQ3dCUDtBQUNGO0FEcEJJO0VBQ0UsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0NBQUE7RUFDQSwrR0FBQTtBQ3NCTjtBRHBCRztFQUNFLHVCQUFBO0VBQ0Esb0NBQUE7RUFDQSwrR0FBQTtBQ3VCTDtBRHJCRztFQUNHLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0NBQUE7RUFDQSwrR0FBQTtBQ3dCTjtBRHRCRztFQUNHLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQ0FBQTtFQUNBLCtHQUFBO0FDeUJOO0FEdkJHO0VBQ0csdUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9DQUFBO0VBQ0EsK0dBQUE7QUMwQk47QUR4Qkc7RUFDRyxpQkFBQTtFQUNBLGtCQUFBO0FDMkJOO0FEekJDO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0FDNEJMO0FEMUJDO0VBQ0csa0JBQUE7QUM2Qko7QUQzQkM7RUFDSSxpQkFBQTtBQzhCTDtBRDVCQTtFQUNHLGlCQUFBO0FDK0JIIiwiZmlsZSI6InNyYy9hcHAvcHdhLXBhZ2VzL2FkbWluL2FkbWluLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIC8qIEV4dHJhIHNtYWxsIGRldmljZXMgKHBob25lcywgNjAwcHggYW5kIGRvd24pICovXG4gICAgQG1lZGlhKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAgIC5ib3h7XG4gICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICAgICAgICAgcGFkZGluZy10b3A6IDUwcHg7XG4gICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICBoZWlnaHQ6IDI5NXB4O1xuICAgICAgfVxuICAgICAgLmJveGVze1xuICAgICAgICAgaGVpZ2h0OiAyMjBweDtcbiAgICAgIH1cbiAgICAgIC5taW5ib3gxe1xuICAgICAgICAgbWFyZ2luLXRvcDogMC4xY2g7XG4gICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgICBoZWlnaHQ6IDE3MHB4O1xuICAgICAgfVxuICAgICAgLm1pbmJveDJ7XG4gICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICBoZWlnaHQ6IDU1cHg7XG4gICAgICAgICBtYXJnaW4tYm90dG9tOjVweDtcbiAgICAgIH1cbiAgICAgIC5taW5ib3gze1xuICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgICAgICAgbWFyZ2luLXRvcDogN3B4O1xuICAgICAgICAgaGVpZ2h0OiA1NXB4O1xuICAgICAgfVxuICAgICAgLmltZy1ib3h7XG4gICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuICAgICAgLmltZ3tcbiAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyogU21hbGwgZGV2aWNlcyAocG9ydHJhaXQgdGFibGV0cyBhbmQgbGFyZ2UgcGhvbmVzLCA2MDBweCBhbmQgdXApICovXG4gICAgQG1lZGlhKG1pbi13aWR0aDogNjAwcHgpIHtcbiAgICAgIC5ib3h7XG4gICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICAgICAgICAgcGFkZGluZy10b3A6IDUwcHg7XG4gICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICBoZWlnaHQ6IDI5NXB4O1xuICAgICAgfVxuICAgICAgLmJveGVze1xuICAgICAgICAgaGVpZ2h0OiAyMjBweDtcbiAgICAgIH1cbiAgICAgIC5taW5ib3gxe1xuICAgICAgICAgbWFyZ2luLXRvcDogMC4xY2g7XG4gICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgICBwYWRkaW5nLXRvcDoyMHB4O1xuICAgICAgICAgaGVpZ2h0OiAxODhweDtcbiAgICAgIH1cbiAgICAgIC5taW5ib3gye1xuICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyLjVweDtcbiAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgICAgICAgaGVpZ2h0OiAgMTAwcHg7XG4gICAgICB9XG4gICAgICAubWluYm94M3tcbiAgICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICAgICAgIG1hcmdpbi1sZWZ0OiAyLjVweDtcbiAgICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgIH1cbiAgICAgIC5pbWctYm94e1xuICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cbiAgICAgIC5pbWd7XG4gICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qIE1lZGl1bSBkZXZpY2VzIChsYW5kc2NhcGUgdGFibGV0cywgNzY4cHggYW5kIHVwKSAqL1xuICAgIEBtZWRpYShtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgICAuYm94e1xuICAgICAgICAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgICAgICAgIHBhZGRpbmctdG9wOiA1MHB4O1xuICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgaGVpZ2h0OiAyNTBweDtcbiAgICAgIH1cbiAgICAgIC5ib3hlc3tcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICBoZWlnaHQ6IDIyMHB4O1xuICAgICB9XG4gICAgICAubWluYm94MXtcbiAgICAgICAgIG1hcmdpbi10b3A6IDAuMWNoO1xuICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICAgaGVpZ2h0OiAxNTBweDtcbiAgICAgIH1cbiAgICAgIC5taW5ib3gye1xuICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyLjVweDtcbiAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgIHBhZGRpbmctdG9wOiAxNXB4O1xuICAgICAgICAgaGVpZ2h0OiA5NXB4O1xuICAgICAgfVxuICAgICAgLm1pbmJveDN7XG4gICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgICAgICBtYXJnaW4tbGVmdDogMi41cHg7XG4gICAgICAgICBwYWRkaW5nLXRvcDogMTVweDtcbiAgICAgICAgIGhlaWdodDogOTVweDtcbiAgICAgIH1cbiAgICAgIC5pbWd7XG4gICAgICAgICB3aWR0aDogNDAwcHg7XG4gICAgICAgICBoZWlnaHQ6IDM1MHB4O1xuICAgICAgfVxuICAgICAgLmltZy1ib3h7XG4gICAgICAgICBwYWRkaW5nLXRvcDogNTBweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKiBMYXJnZSBkZXZpY2VzIChsYXB0b3BzL2Rlc2t0b3BzLCA5OTJweCBhbmQgdXApICovXG4gICAgQG1lZGlhKG1pbi13aWR0aDogOTkycHgpIHtcbiAgICAgIC5ib3h7XG4gICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICAgICAgICAgcGFkZGluZy10b3A6IDUwcHg7XG4gICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICBoZWlnaHQ6IDIyMHB4O1xuICAgICAgfVxuICAgICAgLmJveGVze1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgIGhlaWdodDogMjIwcHg7XG4gICAgIH1cbiAgICAgIC5taW5ib3gxe1xuICAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xuICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICAgaGVpZ2h0OiAxNTBweDtcbiAgICAgIH1cbiAgICAgIC5taW5ib3gye1xuICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyLjVweDtcbiAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgICAgICAgaGVpZ2h0OiA2NXB4O1xuICAgICAgfVxuICAgICAgLm1pbmJveDN7XG4gICAgICAgICBtYXJnaW4tbGVmdDogMi41cHg7XG4gICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICAgICAgICAgaGVpZ2h0OiA2NXB4O1xuICAgICAgfVxuICAgICAgLmltZ3tcbiAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgd2lkdGg6IDU1MHB4O1xuICAgICAgICAgaGVpZ2h0OiA1MDBweDtcbiAgICAgIH0gICAgICBcbiAgICAgIC5pbWctYm94e1xuICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICBwYWRkaW5nLXRvcDogNDBweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKiBFeHRyYSBsYXJnZSBkZXZpY2VzIChsYXJnZSBsYXB0b3BzIGFuZCBkZXNrdG9wcywgMTIwMHB4IGFuZCB1cCkgKi9cbiAgICBAbWVkaWEobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgICAgIC5ib3h7XG4gICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICAgICAgICAgcGFkZGluZy10b3A6IDUwcHg7XG4gICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICBoZWlnaHQ6IDIyMHB4O1xuICAgICAgfVxuICAgICAgLmJveGVze1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgIGhlaWdodDogMjIwcHg7XG4gICAgIH1cbiAgICAgIC5taW5ib3gye1xuICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyLjVweDtcbiAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgICAgICAgaGVpZ2h0OiA2NXB4O1xuICAgICAgfVxuICAgICAgLm1pbmJveDN7XG4gICAgICAgICBtYXJnaW4tbGVmdDogMi41cHg7XG4gICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICAgICAgICAgaGVpZ2h0OiA2NXB4O1xuICAgICAgfVxuICAgICAgLmltZ3tcbiAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgd2lkdGg6IDU1MHB4O1xuICAgICAgICAgaGVpZ2h0OiA1MDBweDtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLmltZy1ib3h7XG4gICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgIHBhZGRpbmctdG9wOiA0MHB4O1xuICAgICAgfVxuICAgIH1cbiBcblxuICAgIC5ib3h7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgICAgYm94LXNoYWRvdzogMCAzcHggMXB4IC0ycHggcmdiYSgwLDAsMCwuMiksIDAgMnB4IDJweCAwIHJnYmEoMCwwLDAsLjE0KSwgMCAxcHggNXB4IDAgcmdiYSgwLDAsMCwuMTIpO1xuICAgfVxuICAgLmJveGVze1xuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgICBib3gtc2hhZG93OiAwIDNweCAxcHggLTJweCByZ2JhKDAsMCwwLC4yKSwgMCAycHggMnB4IDAgcmdiYSgwLDAsMCwuMTQpLCAwIDFweCA1cHggMCByZ2JhKDAsMCwwLC4xMik7XG4gIH1cbiAgIC5taW5ib3gxe1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICAgIGJveC1zaGFkb3c6IDAgM3B4IDFweCAtMnB4IHJnYmEoMCwwLDAsLjIpLCAwIDJweCAycHggMCByZ2JhKDAsMCwwLC4xNCksIDAgMXB4IDVweCAwIHJnYmEoMCwwLDAsLjEyKTtcbiAgIH1cbiAgIC5taW5ib3gye1xuICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgICBib3gtc2hhZG93OiAwIDNweCAxcHggLTJweCByZ2JhKDAsMCwwLC4yKSwgMCAycHggMnB4IDAgcmdiYSgwLDAsMCwuMTQpLCAwIDFweCA1cHggMCByZ2JhKDAsMCwwLC4xMik7XG4gICB9XG4gICAubWluYm94M3tcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgICAgYm94LXNoYWRvdzogMCAzcHggMXB4IC0ycHggcmdiYSgwLDAsMCwuMiksIDAgMnB4IDJweCAwIHJnYmEoMCwwLDAsLjE0KSwgMCAxcHggNXB4IDAgcmdiYSgwLDAsMCwuMTIpO1xuICAgfVxuICAgLmltZ3tcbiAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgfVxuIGgxe1xuICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgIGZvbnQtc2l6ZTogNTBweDtcbiB9XG4gaDN7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuIH1cbiBpb24tYnV0dG9uc3tcbiAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gfVxuLmltZy1ib3h7XG4gICBwYWRkaW5nLXRvcDogYXV0bztcbn0iLCIvKiBFeHRyYSBzbWFsbCBkZXZpY2VzIChwaG9uZXMsIDYwMHB4IGFuZCBkb3duKSAqL1xuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5ib3gge1xuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgcGFkZGluZy10b3A6IDUwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGhlaWdodDogMjk1cHg7XG4gIH1cblxuICAuYm94ZXMge1xuICAgIGhlaWdodDogMjIwcHg7XG4gIH1cblxuICAubWluYm94MSB7XG4gICAgbWFyZ2luLXRvcDogMC4xY2g7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIGhlaWdodDogMTcwcHg7XG4gIH1cblxuICAubWluYm94MiB7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGhlaWdodDogNTVweDtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIH1cblxuICAubWluYm94MyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgIG1hcmdpbi10b3A6IDdweDtcbiAgICBoZWlnaHQ6IDU1cHg7XG4gIH1cblxuICAuaW1nLWJveCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5pbWcge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbi8qIFNtYWxsIGRldmljZXMgKHBvcnRyYWl0IHRhYmxldHMgYW5kIGxhcmdlIHBob25lcywgNjAwcHggYW5kIHVwKSAqL1xuQG1lZGlhIChtaW4td2lkdGg6IDYwMHB4KSB7XG4gIC5ib3gge1xuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgcGFkZGluZy10b3A6IDUwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGhlaWdodDogMjk1cHg7XG4gIH1cblxuICAuYm94ZXMge1xuICAgIGhlaWdodDogMjIwcHg7XG4gIH1cblxuICAubWluYm94MSB7XG4gICAgbWFyZ2luLXRvcDogMC4xY2g7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgIGhlaWdodDogMTg4cHg7XG4gIH1cblxuICAubWluYm94MiB7XG4gICAgbWFyZ2luLXJpZ2h0OiAyLjVweDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgfVxuXG4gIC5taW5ib3gzIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDIuNXB4O1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgIGhlaWdodDogMTAwcHg7XG4gIH1cblxuICAuaW1nLWJveCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5pbWcge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbi8qIE1lZGl1bSBkZXZpY2VzIChsYW5kc2NhcGUgdGFibGV0cywgNzY4cHggYW5kIHVwKSAqL1xuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5ib3gge1xuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgcGFkZGluZy10b3A6IDUwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGhlaWdodDogMjUwcHg7XG4gIH1cblxuICAuYm94ZXMge1xuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGhlaWdodDogMjIwcHg7XG4gIH1cblxuICAubWluYm94MSB7XG4gICAgbWFyZ2luLXRvcDogMC4xY2g7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIGhlaWdodDogMTUwcHg7XG4gIH1cblxuICAubWluYm94MiB7XG4gICAgbWFyZ2luLXJpZ2h0OiAyLjVweDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgcGFkZGluZy10b3A6IDE1cHg7XG4gICAgaGVpZ2h0OiA5NXB4O1xuICB9XG5cbiAgLm1pbmJveDMge1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICBtYXJnaW4tbGVmdDogMi41cHg7XG4gICAgcGFkZGluZy10b3A6IDE1cHg7XG4gICAgaGVpZ2h0OiA5NXB4O1xuICB9XG5cbiAgLmltZyB7XG4gICAgd2lkdGg6IDQwMHB4O1xuICAgIGhlaWdodDogMzUwcHg7XG4gIH1cblxuICAuaW1nLWJveCB7XG4gICAgcGFkZGluZy10b3A6IDUwcHg7XG4gIH1cbn1cbi8qIExhcmdlIGRldmljZXMgKGxhcHRvcHMvZGVza3RvcHMsIDk5MnB4IGFuZCB1cCkgKi9cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAuYm94IHtcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICAgIHBhZGRpbmctdG9wOiA1MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBoZWlnaHQ6IDIyMHB4O1xuICB9XG5cbiAgLmJveGVzIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBoZWlnaHQ6IDIyMHB4O1xuICB9XG5cbiAgLm1pbmJveDEge1xuICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgfVxuXG4gIC5taW5ib3gyIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDIuNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICBoZWlnaHQ6IDY1cHg7XG4gIH1cblxuICAubWluYm94MyB7XG4gICAgbWFyZ2luLWxlZnQ6IDIuNXB4O1xuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgaGVpZ2h0OiA2NXB4O1xuICB9XG5cbiAgLmltZyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDU1MHB4O1xuICAgIGhlaWdodDogNTAwcHg7XG4gIH1cblxuICAuaW1nLWJveCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcGFkZGluZy10b3A6IDQwcHg7XG4gIH1cbn1cbi8qIEV4dHJhIGxhcmdlIGRldmljZXMgKGxhcmdlIGxhcHRvcHMgYW5kIGRlc2t0b3BzLCAxMjAwcHggYW5kIHVwKSAqL1xuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAuYm94IHtcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICAgIHBhZGRpbmctdG9wOiA1MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBoZWlnaHQ6IDIyMHB4O1xuICB9XG5cbiAgLmJveGVzIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBoZWlnaHQ6IDIyMHB4O1xuICB9XG5cbiAgLm1pbmJveDIge1xuICAgIG1hcmdpbi1yaWdodDogMi41cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgIGhlaWdodDogNjVweDtcbiAgfVxuXG4gIC5taW5ib3gzIHtcbiAgICBtYXJnaW4tbGVmdDogMi41cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgICBoZWlnaHQ6IDY1cHg7XG4gIH1cblxuICAuaW1nIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogNTUwcHg7XG4gICAgaGVpZ2h0OiA1MDBweDtcbiAgfVxuXG4gIC5pbWctYm94IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwYWRkaW5nLXRvcDogNDBweDtcbiAgfVxufVxuLmJveCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAycHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuLmJveGVzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgYm94LXNoYWRvdzogMCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4ubWluYm94MSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgYm94LXNoYWRvdzogMCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4ubWluYm94MiB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgYm94LXNoYWRvdzogMCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4ubWluYm94MyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgYm94LXNoYWRvdzogMCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4uaW1nIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuaDEge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogNTBweDtcbn1cblxuaDMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlvbi1idXR0b25zIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi5pbWctYm94IHtcbiAgcGFkZGluZy10b3A6IGF1dG87XG59Il19 */"

/***/ }),

/***/ "./src/app/pwa-pages/admin/admin.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pwa-pages/admin/admin.page.ts ***!
  \***********************************************/
/*! exports provided: AdminPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminPage", function() { return AdminPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/global.service */ "./src/app/services/global.service.ts");
/* harmony import */ var _route_to_preload__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../route-to-preload */ "./src/app/route-to-preload.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");









var AdminPage = /** @class */ (function () {
    function AdminPage(menu, platform, authService, navCtrl, alertService, alertCtrl, dataPipe, routingService, global, storage) {
        this.menu = menu;
        this.platform = platform;
        this.authService = authService;
        this.navCtrl = navCtrl;
        this.alertService = alertService;
        this.alertCtrl = alertCtrl;
        this.dataPipe = dataPipe;
        this.routingService = routingService;
        this.global = global;
        this.storage = storage;
        this.name = [];
        this.presenca = [];
        this.p1 = "primary";
        this.p2 = "danger";
        this.ordem = [];
        this.info = [];
        this.agape = [];
        this.menu.enable(true, 'web');
    }
    AdminPage.prototype.ngOnInit = function () {
    };
    AdminPage.prototype.ionViewWillEnter = function () {
        this.id = this.global.user_id;
        this.showLista();
        this.showData();
        this.showDados();
        this.verifica();
        this.authService.reuniao().subscribe(function (data) { });
    };
    AdminPage.prototype.ionViewDidEnter = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.routingService.preloadRoute('mural')];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.routingService.preloadRoute('adminagape')];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.routingService.preloadRoute('adminfinanceiro')];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.routingService.preloadRoute('admininfo')];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, this.routingService.preloadRoute('adminordem')];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, this.routingService.preloadRoute('adminpresenca')];
                    case 6:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AdminPage.prototype.verifica = function () {
        var _this = this;
        //verifica se o usuario ja respondeu
        this.authService.getLista().subscribe(function (resp) {
            //verifica se esta vazio, se tiver permite q o usuario escolha a opcao
            if (resp.length == 0) {
                _this.disabled1 = false;
                _this.disabled2 = false;
                _this.disabled3 = true;
            }
            else {
                _this.disabled1 = true;
                _this.disabled2 = true;
                for (var i = 0; i < resp.length; i++) {
                    if (resp[i].presenca == 1) {
                        _this.p1 = "success";
                        _this.p2 = "primary";
                        _this.disabled3 = true;
                    }
                    else if (resp[i].presenca == 0) {
                        _this.p2 = "success";
                        _this.p1 = "primary";
                        _this.disabled3 = false;
                    }
                }
            }
        }, function (error) {
            //se nao possui o id no banco de dados, deixa habilitado para o usuario
            //console.log('erro na verificação');
            _this.disabled1 = false;
            _this.disabled2 = false;
        });
    };
    AdminPage.prototype.resposta = function (resp) {
        this.opcao = resp;
        if (this.opcao == 0) {
            this.disabled3 = false;
            this.bmotivo(this.opcao);
        }
        else {
            this.motivo = "-";
            this.lista(this.opcao, this.motivo);
        }
    };
    AdminPage.prototype.bmotivo = function (opcao) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alertPrompt;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
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
                                    handler: function (data) {
                                        if (data.motivo == "")
                                            _this.motivo = "Sem justificativa";
                                        else
                                            _this.motivo = data.motivo;
                                        _this.lista(_this.opcao, _this.motivo);
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alertPrompt = _a.sent();
                        return [4 /*yield*/, alertPrompt.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AdminPage.prototype.lista = function (opcao, motivo) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                //manda pra funcão o id do usuario e a resposta, se ja tiver no bd ele atualiza para uma nova resposta
                this.authService.confirmaPresenca(this.id, this.opcao, this.motivo, this.global.reuniao).subscribe(function (data) { }, function (error) {
                    // console.log(error);
                }, function () {
                    _this.alertService.presentToast('Confirmação enviada!');
                    window.location.reload();
                });
                return [2 /*return*/];
            });
        });
    };
    AdminPage.prototype.editar = function () {
        this.disabled1 = !this.disabled1;
        this.disabled2 = !this.disabled2;
    };
    AdminPage.prototype.showData = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    //mostra a data se tiver
                    return [4 /*yield*/, this.authService.getReuniao()
                            .subscribe(function (data) {
                            _this.data = (_this.dataPipe.transform(data[0].data, "dd/MM"));
                            _this.storage.set('reuniao', data[0].id);
                            _this.disabled1 = false;
                            _this.disabled2 = false;
                            _this.verifica();
                        }, function (error) {
                            // console.log("error: " + error);
                        })];
                    case 1:
                        //mostra a data se tiver
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AdminPage.prototype.showLista = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.authService.getConfirmacao(1).subscribe(function (presente) {
                    _this.presente = presente;
                });
                this.authService.getConfirmacao(2).subscribe(function (ausente) {
                    _this.ausente = ausente;
                });
                return [2 /*return*/];
            });
        });
    };
    AdminPage.prototype.showDados = function () {
        var _this = this;
        this.authService.getNivelOrdem(3, 1)
            .subscribe(function (data) {
            for (var i = 0; i < data.length; i++) {
                _this.ordem[i] = data[i].ordem;
            }
        });
        this.authService.getNivelInfo(3, 1)
            .subscribe(function (data) {
            for (var i = 0; i < data.length; i++) {
                _this.info[i] = data[i].info;
            }
        });
        this.authService.getAgape(1)
            .subscribe(function (data) {
            for (var i = 0; i < data.length; i++) {
                _this.agape[i] = data[i].agape;
            }
        });
    };
    AdminPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["MenuController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["Platform"] },
        { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["NavController"] },
        { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"] },
        { type: _route_to_preload__WEBPACK_IMPORTED_MODULE_3__["AppRoutingPreloaderService"] },
        { type: _services_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_1__["Storage"] }
    ]; };
    AdminPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! raw-loader!./admin.page.html */ "./node_modules/raw-loader/index.js!./src/app/pwa-pages/admin/admin.page.html"),
            styles: [__webpack_require__(/*! ./admin.page.scss */ "./src/app/pwa-pages/admin/admin.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_8__["MenuController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["Platform"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["NavController"],
            _services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"],
            _route_to_preload__WEBPACK_IMPORTED_MODULE_3__["AppRoutingPreloaderService"],
            _services_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_1__["Storage"]])
    ], AdminPage);
    return AdminPage;
}());



/***/ })

}]);
//# sourceMappingURL=pwa-pages-admin-admin-module-es5.js.map