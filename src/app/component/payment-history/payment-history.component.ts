import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../shared/auth.service";

@Component({
    selector: "app-payment-history",
    templateUrl: "./payment-history.component.html",
    styleUrls: ["./payment-history.component.css"],
})
export class PaymentHistoryComponent implements OnInit {
    constructor(public authService: AuthService) {}

    ngOnInit() {}
}
