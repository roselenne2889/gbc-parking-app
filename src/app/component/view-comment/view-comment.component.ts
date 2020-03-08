import { Component, OnInit, AfterViewInit } from "@angular/core";
import { Observable } from "rxjs";
import { DataSource } from "@angular/cdk/collections";

import { ApiService } from "../../shared/api.service";
class UserComment {
    name: String;
    email: String;
    comment: String;
}
/* class CommentDataSource extends DataSource<any> {
    constructor(private apiService: ApiService) {
        super();
    }
    connect(): Observable<UserComment[]> {
        const comments: UserComment[] = [];
        this.apiService.GetAllComments().subscribe(users => {
            users.forEach(user => {
                user.comments.forEach(comment => {
                    const userComment: UserComment = {
                        name: `${user.first_name} ${user.last_name}`,
                        email: `${user.email}`,
                        comment: `${comment.comment_text}`
                    };
                    comments.push(userComment);
                });
            });
        });
        return comments;
    }
    disconnect() {}
} */
@Component({
    selector: "app-view-comment",
    templateUrl: "./view-comment.component.html",
    styleUrls: ["./view-comment.component.css"]
})
export class ViewCommentComponent implements OnInit, AfterViewInit {
    comments: UserComment[] = [];
    displayedColumns: String[] = ["name", "email", "comment"];
    constructor(private apiService: ApiService) {}

    ngOnInit() {}
    ngAfterViewInit() {
        this.apiService.GetAllComments().subscribe(comments => {
            /* users.forEach(user => {
                user.comments.forEach(comment => {
                    const userComment: UserComment = {
                        name: `${user.first_name} ${user.last_name}`,
                        email: `${user.email}`,
                        comment: `${comment.comment_text}`
                    };
                    this.comments.push(userComment);
                });
            }); */
            this.comments = comments;
        });
    }
}
