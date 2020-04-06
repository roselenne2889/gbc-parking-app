import { Injectable } from "@angular/core";

import { Observable, of } from "rxjs";
import { tap, delay } from "rxjs/operators";
import { Router } from "@angular/router";

@Injectable({
    providedIn: "root",
})
export class AuthService {
    constructor(private router: Router) {}
    isLoggedIn = false;
    loggedInGBCNumber: number = 0;
    isAdmin = false;
    // store the URL so we can redirect after logging in
    redirectUrl: string;

    logOut() {
        const loginRoute = this.isAdmin ? "/admin-login" : "/login";
        this.isLoggedIn = false;
        this.isAdmin = false;
        this.loggedInGBCNumber = 0;
        this.router.navigateByUrl(loginRoute);
    }
}
