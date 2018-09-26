webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n  <span>Vending Machine</span>\n  <span class=\"spanmiddle\"></span>\n  <span>\n    <button mat-button (click)=\"completeTransaction()\">Complete Transaction</button>\n  </span>\n</mat-toolbar>\n\n<div class=\"container-fluid\">\n  <div class=\"container\">\n    <mat-card>\n      <mat-card-subtitle>\n        Add money by tapping on the denominations:\n      </mat-card-subtitle>\n      <mat-card-content>\n        <span>\n            <button mat-button color='primary' (click)=\"addCoin(5)\">KSH 5</button>\n            <button mat-button color='primary' (click)=\"addCoin(10)\">KSH 10</button>\n            <button mat-button color='primary' (click)=\"addCoin(20)\">KSH 20</button>\n            <button mat-button color='primary' (click)=\"addCoin(40)\">KSH 40</button>\n        </span>\n        <span class=\"spanmiddle\"></span>\n        <span>\n           Available balance in KES: {{initialAmount}} \n        </span>\n      </mat-card-content>\n    </mat-card>\n    <br>\n    \n      <table class=\"table table-hover\">\n        <thead>\n          <tr>\n            <th>Code</th>\n            <th>Name</th>\n            <th>Price (ksh)</th>\n            <th>Action</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let item of vendorItems\">\n            <td>{{item.code}}</td>\n            <td>{{item.name}}</td>\n            <td>{{item.price}}</td>\n            <td>\n              <button class=\"btn btn-sm btn-success\" (click)=\"makePurchase(item.price, item.name)\">Purchase</button>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__("./src/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(data, snack) {
        var _this = this;
        this.data = data;
        this.snack = snack;
        //initialize the current amount to zero to begin fresh transactions
        this.initialAmount = 0;
        //get all items available for selling from data service
        this.data.getVendorItems().subscribe(function (items) {
            _this.vendorItems = items;
        });
    }
    //increment value of balance each time user adds in a new coin
    AppComponent.prototype.addCoin = function (value) {
        this.initialAmount = this.initialAmount + value;
    };
    //when a user makes a purchase, pass in the price and name of the item to be used later
    AppComponent.prototype.makePurchase = function (price, name) {
        //checks to see if you've added enough money to make a purchase
        if (price > this.initialAmount) {
            //calculate how much more is needed for current item being sold
            var remaining = price - this.initialAmount;
            this.snack.open("You don't have enough money to purchase this item, please add KES " + remaining + ".", "Ok", {
                duration: 3000,
                verticalPosition: 'top'
            });
        }
        else {
            //decrement value from the amount user has
            this.initialAmount = this.initialAmount - price;
            this.snack.open("Vending " + name + " worth " + price + ", your current available balance is " + this.initialAmount + ".", "Ok", {
                duration: 3500,
                verticalPosition: 'top'
            });
        }
    };
    //complete the transaction, give user back balance and reset the vending machine
    AppComponent.prototype.completeTransaction = function () {
        if (this.initialAmount == 0) {
            this.snack.open("Thank you for using our vending machine, you have no available balance.", "Ok", {
                duration: 3000,
                verticalPosition: 'top'
            });
        }
        else {
            this.snack.open("Thank you for using our vending machine, your balance is " + this.initialAmount + ".", "Ok", {
                duration: 3000,
                verticalPosition: 'top'
            });
            //reset balance to 0 if user is done buying items
            this.initialAmount = 0;
        }
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MatSnackBar */]])
    ], AppComponent);
    return AppComponent;
}());

var Item = /** @class */ (function () {
    function Item() {
    }
    return Item;
}());


/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_data_service__ = __webpack_require__("./src/services/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





//import angular material elements


var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["e" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["b" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["d" /* MatSnackBarModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_6__services_data_service__["a" /* DataService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]],
            schemas: [__WEBPACK_IMPORTED_MODULE_2__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hammerjs__ = __webpack_require__("./node_modules/hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("./src/environments/environment.ts");





if (__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "./src/services/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
    }
    DataService.prototype.getVendorItems = function () {
        return this.http.get('./assets/items.json').map(function (res) { return res.json(); });
    };
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map