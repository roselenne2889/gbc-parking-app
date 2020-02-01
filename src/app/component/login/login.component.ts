import { Component, OnInit, NgZone } from "@angular/core";
import { ApiService } from "./../../shared/api.service";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { switchMap } from "rxjs/operators";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";

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
    private ngZone: NgZone
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
        this.ngZone.run(() => this.router.navigateByUrl("/user-dashboard"));
      });
    }
  }
}
