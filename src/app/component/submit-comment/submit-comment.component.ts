import { Component, OnInit, NgZone } from "@angular/core";
import { Router } from "@angular/router";
import { ApiService } from "../../shared/api.service";
import { MatDivider } from "@angular/material";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import { AuthService } from "../../shared/auth.service";

@Component({
    selector: "app-submit-comment",
    templateUrl: "./submit-comment.component.html",
    styleUrls: ["./submit-comment.component.css"]
})
export class SubmitCommentComponent implements OnInit {
    commentForm: FormGroup;

    constructor(
        public fb: FormBuilder,
        private router: Router,
        private ngZone: NgZone,
        private apiService: ApiService,
        public authService: AuthService
    ) {}

    ngOnInit() {
        this.createCommentForm();
    }

    createCommentForm() {
        this.commentForm = this.fb.group({
            comment_text: ["", [Validators.required]],
            gbc_number: [""]
        });
    }

    public handleError = (controlName: string, errorName: string) => {
        return this.commentForm.controls[controlName].hasError(errorName);
    };

    submitCommentForm() {
        if (this.commentForm.valid) {
            this.commentForm.controls.gbc_number.setValue(
                this.authService.loggedInGBCNumber
            );
            console.log(this.commentForm.value);
            this.apiService
                .AddComment(this.commentForm.value)
                .subscribe(res => {
                    this.ngZone.run(() =>
                        this.router.navigateByUrl("/user-dashboard")
                    );
                });
        }
    }
}
