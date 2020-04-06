import { Component, OnInit, AfterViewInit } from "@angular/core";
import { Observable } from "rxjs";
import { DataSource } from "@angular/cdk/collections";

import { ApiService } from "../../shared/api.service";
import { AuthService } from "../../shared/auth.service";
class UserComment {
    name: String;
    email: String;
    comment: String;
}
@Component({
    selector: "app-view-comment",
    templateUrl: "./view-comment.component.html",
    styleUrls: ["./view-comment.component.css"],
})
export class ViewCommentComponent implements OnInit, AfterViewInit {
    comments: UserComment[] = [];
    displayedColumns: String[] = ["name", "email", "comment"];
    constructor(
        private apiService: ApiService,
        public authService: AuthService
    ) {}

    ngOnInit() {}
    ngAfterViewInit() {
        this.apiService.GetAllComments().subscribe((comments) => {
            this.comments = comments;
        });
    }
}
