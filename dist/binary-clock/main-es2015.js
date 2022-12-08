(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/clock/clock.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/clock/clock.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ouhterBox\">\n    <div class=\"innerBox\">\n        <div class=\"clockBox\">\n            <div class=\"dotBox\">\n                <div class=\"dots\">\n                    <div class=\"invisible\"></div>\n                    <div class=\"invisible\"></div>\n                    <div [ngClass]=\"{'active' : setActive(hour, 0, 2)}\"></div>\n                    <div [ngClass]=\"{'active' : setActive(hour, 0, 1)}\"></div>\n                </div>\n                <div class=\"dots\">\n                    <div [ngClass]=\"{'active' : setActive(hour, 1, 8)}\"></div>\n                    <div [ngClass]=\"{'active' : setActive(hour, 1, 4)}\"></div>\n                    <div [ngClass]=\"{'active' : setActive(hour, 1, 2)}\"></div>\n                    <div [ngClass]=\"{'active' : setActive(hour, 1, 1)}\"></div>\n                </div>\n            </div>\n            <div class=\"dotBox\">\n                <div class=\"dots\">\n                    <div class=\"invisible\"></div>\n                    <div [ngClass]=\"{'active' : setActive(minute, 0, 4)}\"></div>\n                    <div [ngClass]=\"{'active' : setActive(minute, 0, 2)}\"></div>\n                    <div [ngClass]=\"{'active' : setActive(minute, 0, 1)}\"></div>\n                </div>\n                <div class=\"dots\">\n                    <div [ngClass]=\"{'active' : setActive(minute, 1, 8)}\"></div>\n                    <div [ngClass]=\"{'active' : setActive(minute, 1, 4)}\"></div>\n                    <div [ngClass]=\"{'active' : setActive(minute, 1, 2)}\"></div>\n                    <div [ngClass]=\"{'active' : setActive(minute, 1, 1)}\"></div>\n                </div>\n            </div>\n            <div class=\"dotBox\">\n                <div class=\"dots\">\n                    <div class=\"invisible\"></div>\n                    <div [ngClass]=\"{'active' : setActive(second, 0, 4)}\"></div>\n                    <div [ngClass]=\"{'active' : setActive(second, 0, 2)}\"></div>\n                    <div [ngClass]=\"{'active' : setActive(second, 0, 1)}\"></div>\n                </div>\n                <div class=\"dots\">\n                    <div [ngClass]=\"{'active' : setActive(second, 1, 8)}\"></div>\n                    <div [ngClass]=\"{'active' : setActive(second, 1, 4)}\"></div>\n                    <div [ngClass]=\"{'active' : setActive(second, 1, 2)}\"></div>\n                    <div [ngClass]=\"{'active' : setActive(second, 1, 1)}\"></div>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"time\">\n            <p>{{time}}</p>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _clock_clock_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./clock/clock.component */ "./src/app/clock/clock.component.ts");




const routes = [
    {
        path: 'clock', component: _clock_clock_component__WEBPACK_IMPORTED_MODULE_3__["ClockComponent"]
    },
    {
        path: '', pathMatch: 'full', redirectTo: 'clock'
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _clock_clock_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./clock/clock.component */ "./src/app/clock/clock.component.ts");






let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _clock_clock_component__WEBPACK_IMPORTED_MODULE_5__["ClockComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/clock/clock.component.scss":
/*!********************************************!*\
  !*** ./src/app/clock/clock.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ouhterBox {\n  width: calc(100vw - 10px);\n  height: calc(100vh - 30px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.innerBox {\n  padding: 24px 24px 12px;\n  background-color: #f3f3f3;\n  box-shadow: 0px 0px 10px #bebebe;\n}\n\n.clockBox {\n  display: flex;\n  flex-direction: row;\n}\n\n.dotBox {\n  display: flex;\n  flex-direction: row;\n  margin: 5px;\n}\n\n.dots > div {\n  background-color: #b0d0de;\n  border-radius: 50%;\n  width: 50px;\n  height: 50px;\n  margin: 5px;\n}\n\n.dots > div.active {\n  background-color: #347d9d;\n}\n\n.invisible {\n  visibility: hidden;\n}\n\n.time {\n  font-size: 94px;\n  text-align: center;\n  color: #636363;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2xvY2svQzpcXFVzZXJzXFxNYXJpYSBXYWx6bFxcRGVza3RvcFxcYmluYXJ5Q2xvY2svc3JjXFxhcHBcXGNsb2NrXFxjbG9jay5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY2xvY2svY2xvY2suY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtFQUNBLDBCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNDSjs7QURFQTtFQUNJLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQ0FBQTtBQ0NKOztBREVBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FDQ0o7O0FERUE7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDQ0o7O0FEQUk7RUFDSSx5QkFBQTtBQ0VSOztBREVBO0VBQ0ksa0JBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2Nsb2NrL2Nsb2NrLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm91aHRlckJveCB7XG4gICAgd2lkdGg6IGNhbGMoMTAwdncgLSAxMHB4KTtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAzMHB4KTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5pbm5lckJveCB7XG4gICAgcGFkZGluZzogMjRweCAyNHB4IDEycHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjNmMztcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggI2JlYmViZTtcbn1cblxuLmNsb2NrQm94IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG5cbi5kb3RCb3gge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBtYXJnaW46IDVweDtcbn1cblxuLmRvdHMgPiBkaXYge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNiMGQwZGU7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBtYXJnaW46IDVweDtcbiAgICAmLmFjdGl2ZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzNDdkOWQ7XG4gICAgfVxufVxuXG4uaW52aXNpYmxlIHtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbi50aW1lIHtcbiAgICBmb250LXNpemU6IDk0cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjNjM2MzYzO1xufSIsIi5vdWh0ZXJCb3gge1xuICB3aWR0aDogY2FsYygxMDB2dyAtIDEwcHgpO1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAzMHB4KTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5pbm5lckJveCB7XG4gIHBhZGRpbmc6IDI0cHggMjRweCAxMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmM2YzO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggI2JlYmViZTtcbn1cblxuLmNsb2NrQm94IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cblxuLmRvdEJveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIG1hcmdpbjogNXB4O1xufVxuXG4uZG90cyA+IGRpdiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiMGQwZGU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgbWFyZ2luOiA1cHg7XG59XG4uZG90cyA+IGRpdi5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQ3ZDlkO1xufVxuXG4uaW52aXNpYmxlIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG4udGltZSB7XG4gIGZvbnQtc2l6ZTogOTRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzYzNjM2Mztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/clock/clock.component.ts":
/*!******************************************!*\
  !*** ./src/app/clock/clock.component.ts ***!
  \******************************************/
/*! exports provided: ClockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClockComponent", function() { return ClockComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ClockComponent = class ClockComponent {
    constructor() { }
    ngOnInit() {
        setInterval(() => this.getTime(), 1000);
    }
    getTime() {
        let newTime = new Date();
        newTime.setHours(newTime.getHours() + 1);
        this.time = newTime.toJSON().substring(11, 19);
        this.hour = this.time.substring(0, 2);
        this.minute = this.time.substring(3, 5);
        this.second = this.time.substring(6, 8);
    }
    setActive(key, position, value) {
        if (key) {
            let timeNumber = parseInt(key.charAt(position));
            if (value === 1) {
                if (timeNumber === 1 || timeNumber === 3 || timeNumber === 5 || timeNumber === 7 || timeNumber === 9) {
                    return true;
                }
            }
            else if (value === 2) {
                if (timeNumber === 2 || timeNumber === 3 || timeNumber === 6 || timeNumber === 7) {
                    return true;
                }
            }
            else if (value === 4) {
                if (timeNumber === 4 || timeNumber === 5 || timeNumber === 6 || timeNumber === 7) {
                    return true;
                }
            }
            else if (value === 8) {
                if (timeNumber === 8 || timeNumber === 9) {
                    return true;
                }
            }
        }
    }
};
ClockComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-clock',
        template: __webpack_require__(/*! raw-loader!./clock.component.html */ "./node_modules/raw-loader/index.js!./src/app/clock/clock.component.html"),
        styles: [__webpack_require__(/*! ./clock.component.scss */ "./src/app/clock/clock.component.scss")]
    })
], ClockComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Maria Walzl\Desktop\binaryClock\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map