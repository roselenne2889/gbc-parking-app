import { Component, OnInit, NgZone } from "@angular/core";
import { ApiService } from "./../../shared/api.service";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { switchMap } from "rxjs/operators";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { AuthService } from "../../shared/auth.service";
import { DataService } from "../../shared/data.service";

@Component({
    selector: "app-login",
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
    userLoginForm: FormGroup;

    constructor(
        private api: ApiService,
        private route: ActivatedRoute,
        public fb: FormBuilder,
        private router: Router,
        private ngZone: NgZone,
        public authService: AuthService,
        private dataService: DataService
    ) {}

    ngOnInit() {
        this.initUserLoginForm();
    }

    public handleError = (controlName: string, errorName: string) => {
        return this.userLoginForm.controls[controlName].hasError(errorName);
    };

    initUserLoginForm() {
        this.userLoginForm = this.fb.group({
            gbc_number: ["", [Validators.required]],
            user_password: ["", [Validators.required]]
        });
    }

    submitUserLoginForm() {
        if (this.userLoginForm.valid) {
            this.api.Login(this.userLoginForm.value).subscribe(res => {
                this.api.SetUserLoginSession();
                this.authService.isLoggedIn = true;
                this.authService.loggedInGBCNumber = res.gbc_number;
                if (res.reservation_history.length > 0) {
                    this.dataService.reservation_history = res.reservation_history.slice(
                        0
                    );
                }
                this.ngZone.run(() =>
                    this.router.navigateByUrl("/user-dashboard")
                );
            });
        }
    }
}
