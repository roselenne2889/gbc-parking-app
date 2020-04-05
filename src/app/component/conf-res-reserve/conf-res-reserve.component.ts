import { Component, OnInit, NgZone } from "@angular/core";
import { Router } from "@angular/router";

import { ApiService } from "../../shared/api.service";
import { DataService } from "../../shared/data.service";
import { Reservation } from "../../shared/reservation";
import { AuthService } from "../../shared/auth.service";
import { ReservationRequest } from "../../shared/reservation-request";

@Component({
    selector: "app-conf-res-reserve",
    templateUrl: "./conf-res-reserve.component.html",
    styleUrls: ["./conf-res-reserve.component.css"]
})
export class ConfResReserveComponent implements OnInit {
    reservation: Reservation;
    constructor(
        private apiService: ApiService,
        private dataService: DataService,
        private authService: AuthService,
        private router: Router,
        private ngZone: NgZone
    ) {}

    ngOnInit() {
        this.reservation = this.dataService.getReservation();
    }

    createReservation() {
        this.reservation.reservation_number = Number(
            `${this.authService.loggedInGBCNumber}${this.dataService.reservation_history.length}`
        );
        const reqObj: ReservationRequest = {
            reservation: { ...this.reservation },
            gbc_number: this.authService.loggedInGBCNumber
        };

        this.apiService.CreateReservation(reqObj).subscribe(res => {
            this.dataService.reservation_history = res.reservation_history.slice(
                0
            );
            this.ngZone.run(() =>
                this.router.navigateByUrl("/reservation-complete")
            );
        });
    }
}
