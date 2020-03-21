import { Component, OnInit, NgZone } from "@angular/core";
import { Router } from "@angular/router";

import { ApiService, UserGBCNumber } from "../../shared/api.service";
import { DataService } from "../../shared/data.service";
import { Reservation } from "../../shared/reservation";
import { AuthService } from "../../shared/auth.service";

@Component({
    selector: "app-conf-res-cancel",
    templateUrl: "./conf-res-cancel.component.html",
    styleUrls: ["./conf-res-cancel.component.css"]
})
export class ConfResCancelComponent implements OnInit {
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

    deleteReservation() {
        const reqObj: UserGBCNumber = {
            gbc_number: this.authService.loggedInGBCNumber
        };

        this.apiService.DeleteReservation(reqObj).subscribe(res => {
            this.ngZone.run(() =>
                this.router.navigateByUrl("/cancel-complete")
            );
        });
    }
}
