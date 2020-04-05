import { Component, OnInit } from "@angular/core";

import { ApiService } from "../../shared/api.service";
import { DataService } from "../../shared/data.service";
import { AuthService } from "../../shared/auth.service";

@Component({
    selector: "app-user-dashboard",
    templateUrl: "./user-dashboard.component.html",
    styleUrls: ["./user-dashboard.component.css"]
})
export class UserDashboardComponent implements OnInit {
    constructor(
        private dataService: DataService,
        private api: ApiService,
        private auth: AuthService
    ) {}

    ngOnInit() {
        this.api
            .GetUser({ gbc_number: this.auth.loggedInGBCNumber })
            .subscribe(res => {
                if (res.reservation) {
                    this.dataService.updateReservation(res.reservation);
                }
            });
    }
}
