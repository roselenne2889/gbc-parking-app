import { Component, OnInit, NgZone } from "@angular/core";
import { Router } from "@angular/router";
import { ApiService } from "../../shared/api.service";
import { MatDivider } from "@angular/material";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-user-signup",
  templateUrl: "./user-signup.component.html",
  styleUrls: ["./user-signup.component.css"]
})
export class UserSignupComponent implements OnInit {
  userForm: FormGroup;

  ngOnInit() {
    this.submitBookForm();
  }
  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private userApi: ApiService
  ) {}

  // Reactive book form
  submitBookForm() {
    this.userForm = this.fb.group({
      first_name: ["", [Validators.required]],
      last_name: ["", [Validators.required]],
      gbc_number: ["", [Validators.required]],
      email: ["", [Validators.required]],
      user_password: ["", [Validators.required]]
    });
  }
  //get errors
  public handleError = (controlName: string, errorName: string) => {
    return this.userForm.controls[controlName].hasError(errorName);
  };

  //submit book
  submitUserForm() {
    if (this.userForm.valid) {
      this.userApi.AddUser(this.userForm.value).subscribe(res => {
        this.ngZone.run(() => this.router.navigateByUrl("/login"));
      });
    }
  }
}
