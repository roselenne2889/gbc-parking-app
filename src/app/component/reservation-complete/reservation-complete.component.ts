import { Component, OnInit } from "@angular/core";
import { Reservation } from "../../shared/reservation";
import { DataService } from "../../shared/data.service";
import { AuthService } from "../../shared/auth.service";

@Component({
    selector: "app-reservation-complete",
    templateUrl: "./reservation-complete.component.html",
    styleUrls: ["./reservation-complete.component.css"],
})
export class ReservationCompleteComponent implements OnInit {
    reservation: Reservation;
    constructor(
        private dataService: DataService,
        public authService: AuthService
    ) {}

    ngOnInit() {
        this.reservation = this.dataService.getReservation();
    }
}
