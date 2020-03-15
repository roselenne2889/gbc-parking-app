import { Injectable } from "@angular/core";

import { Observable, of } from "rxjs";
import { tap, delay } from "rxjs/operators";

@Injectable({
    providedIn: "root"
})
export class AuthService {
    isLoggedIn = false;
    loggedInGBCNumber: number = 12345;
    isAdmin = false;
    // store the URL so we can redirect after logging in
    redirectUrl: string;
}
