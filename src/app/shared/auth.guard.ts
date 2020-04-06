import { Injectable } from "@angular/core";
import {
    CanActivate,
    CanActivateChild,
    CanDeactivate,
    CanLoad,
    Route,
    UrlSegment,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    UrlTree,
    Router,
} from "@angular/router";
import { Observable } from "rxjs";

import { AuthService } from "./auth.service";

@Injectable({
    providedIn: "root",
})
export class AuthGuard
    implements CanActivate, CanActivateChild, CanDeactivate<unknown>, CanLoad {
    constructor(private authService: AuthService, private router: Router) {}
    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ):
        | Observable<boolean | UrlTree>
        | Promise<boolean | UrlTree>
        | boolean
        | UrlTree {
        return this.checkLogin(state.url);
    }
    canActivateChild(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ):
        | Observable<boolean | UrlTree>
        | Promise<boolean | UrlTree>
        | boolean
        | UrlTree {
        return this.canActivate(next, state);
    }
    canDeactivate(
        component: unknown,
        currentRoute: ActivatedRouteSnapshot,
        currentState: RouterStateSnapshot,
        nextState?: RouterStateSnapshot
    ):
        | Observable<boolean | UrlTree>
        | Promise<boolean | UrlTree>
        | boolean
        | UrlTree {
        return true;
    }
    canLoad(
        route: Route,
        segments: UrlSegment[]
    ): Observable<boolean> | Promise<boolean> | boolean {
        return true;
    }

    checkLogin(url: string): boolean {
        if (this.authService.isLoggedIn && this.authService.isAdmin) {
            return true;
        }

        // Store the attempted URL for redirecting
        this.authService.redirectUrl = url;

        // Navigate to the login page with extras
        this.router.navigate(["/admin-login"]);
        return false;
    }
}
