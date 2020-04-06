import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../shared/auth.service";

@Component({
    selector: "app-ext-res-complete",
    templateUrl: "./ext-res-complete.component.html",
    styleUrls: ["./ext-res-complete.component.css"],
})
export class ExtResCompleteComponent implements OnInit {
    constructor(public authService: AuthService) {}

    ngOnInit() {}
}
