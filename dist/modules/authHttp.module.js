/**
 * ng2-adal - Use Azure AD Library - ADAL in Angular 4 & 2. For Angular 4, use latest version 1.x.x. For Angular 2 use 0.3.1 version.
 * @version v2.0.2
 * @link https://github.com/sureshchahal/angular2-adal#readme
 * @license MIT
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var adal_module_1 = require("./adal.module");
var authHttp_service_1 = require("./../services/authHttp.service");
var AuthHttpModule = /** @class */ (function () {
    function AuthHttpModule() {
    }
    AuthHttpModule = __decorate([
        core_1.NgModule({
            imports: [adal_module_1.AdalModule],
            exports: [],
            declarations: [],
            providers: [authHttp_service_1.AuthHttp],
        })
    ], AuthHttpModule);
    return AuthHttpModule;
}());
exports.AuthHttpModule = AuthHttpModule;

//# sourceMappingURL=authHttp.module.js.map
