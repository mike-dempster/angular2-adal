/**
 * ng2-adal - Use Azure AD Library - ADAL in Angular 4 & 2. For Angular 4, use latest version 1.x.x. For Angular 2 use 0.3.1 version.
 * @version v2.0.2
 * @link https://github.com/sureshchahal/angular2-adal#readme
 * @license MIT
 */
import { NgModule } from '@angular/core';

import { AdalModule } from './adal.module';
import { AuthHttp } from './../services/authHttp.service'

@NgModule({
    imports: [AdalModule],
    exports: [],
    declarations: [],
    providers: [AuthHttp],
})
export class AuthHttpModule { }
