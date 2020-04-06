import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../shared/auth.service";

@Component({
    selector: "app-cancel-complete",
    templateUrl: "./cancel-complete.component.html",
    styleUrls: ["./cancel-complete.component.css"],
})
export class CancelCompleteComponent implements OnInit {
    constructor(public authService: AuthService) {}

    ngOnInit() {}
}
