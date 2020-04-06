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
    styleUrls: ["./conf-res-reserve.component.css"],
})
export class ConfResReserveComponent implements OnInit {
    reservation: Reservation;
    constructor(
        private apiService: ApiService,
        private dataService: DataService,
        public authService: AuthService,
        private router: Router,
        private ngZone: NgZone
    ) {}

    ngOnInit() {
        this.reservation = this.dataService.getReservation();
    }

    createReservation() {
        this.router.navigateByUrl("/make-payment");
    }
}
