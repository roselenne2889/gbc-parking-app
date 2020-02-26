import { Component, OnInit, NgZone } from "@angular/core";
import { Router } from "@angular/router";
import { ApiService } from "../../shared/api.service";
import { MatDivider } from "@angular/material";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

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
    private apiService: ApiService
  ) {}

  ngOnInit() {
    this.createCommentForm();
  }

  createCommentForm() {
    this.commentForm = this.fb.group({
      comment: ["", [Validators.required]]
    });
  }

  public handleError = (controlName: string, errorName: string) => {
    return this.commentForm.controls[controlName].hasError(errorName);
  };

  submitCommentForm() {
    if (this.commentForm.valid) {
      this.apiService.AddComment(this.commentForm.value).subscribe(res => {
        this.ngZone.run(() => this.router.navigateByUrl("/user-dashboard"));
      });
    }
  }
}
