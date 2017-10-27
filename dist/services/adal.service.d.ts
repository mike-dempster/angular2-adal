/**
 * ng2-adal - Use Azure AD Library - ADAL in Angular 4 & 2. For Angular 4, use latest version 1.x.x. For Angular 2 use 0.3.1 version.
 * @version v2.0.2
 * @link https://github.com/sureshchahal/angular2-adal#readme
 * @license MIT
 */
/// <reference types="adal" />
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/bindCallback';
import { OAuthData } from './oauthdata.model';
export declare class AdalService {
    private adalContext;
    private oauthData;
    init(configOptions: adal.Config): void;
    readonly config: adal.Config;
    readonly userInfo: OAuthData;
    login(): void;
    loginInProgress(): boolean;
    logOut(): void;
    handleWindowCallback(): void;
    getCachedToken(resource: string): string;
    acquireToken(resource: string): Observable<string>;
    getUser(): Observable<adal.User>;
    clearCache(): void;
    clearCacheForResource(resource: string): void;
    info(message: string): void;
    verbose(message: string): void;
    GetResourceForEndpoint(url: string): string;
    refreshDataFromCache(): void;
    private updateDataFromCache(resource);
}
