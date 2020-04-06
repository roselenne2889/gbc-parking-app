import { Component, OnInit } from "@angular/core";

import { ApiService } from "../../shared/api.service";
import { User } from "../../shared/user";
import { DataService } from "../../shared/data.service";
import { ReservationHistory } from "../../shared/reservation-history";
import { AuthService } from "../../shared/auth.service";

@Component({
    selector: "app-view-user",
    templateUrl: "./view-user.component.html",
    styleUrls: ["./view-user.component.css"],
})
export class ViewUserComponent implements OnInit {
    user: User;
    reservationHistory: ReservationHistory[];
    constructor(
        private apiService: ApiService,
        private dataService: DataService,
        public authService: AuthService
    ) {}

    ngOnInit() {
        this.user = Object.assign({}, this.dataService.selectedUser);
        this.apiService
            .GetUserReservationHistory({
                gbc_number: this.user.gbc_number,
            })
            .subscribe((res) => {
                this.reservationHistory = res.reservation_history;
                console.log(this.reservationHistory);
            });
    }
}
