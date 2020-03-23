import { Component, OnInit, NgZone } from "@angular/core";
import { Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import { ApiService } from "../../shared/api.service";
import { DataService } from "../../shared/data.service";
import { Reservation } from "../../shared/reservation";
import { AuthService } from "../../shared/auth.service";
import { ReservationRequest } from "../../shared/reservation-request";

@Component({
    selector: "app-extend-reservation",
    templateUrl: "./extend-reservation.component.html",
    styleUrls: ["./extend-reservation.component.css"]
})
export class ExtendReservationComponent implements OnInit {
    extendForm: FormGroup;
    reservation: Reservation;
    today: Date;
    extensionTimeValues: Date[];
    extensionTimeStrings: string[] = [
        "30 mins",
        "1 hour",
        "1.5 hours",
        "2 hours"
    ];
    constructor(
        private apiService: ApiService,
        private dataService: DataService,
        private authService: AuthService,
        private router: Router,
        private ngZone: NgZone,
        private fb: FormBuilder
    ) {}

    ngOnInit() {
        this.today = new Date();
        this.extendForm = this.fb.group({
            timeToExtend: ["", [Validators.required]]
        });
        this.reservation = this.dataService.getReservation();
        this.extensionTimeValues = [
            new Date(
                this.today.getFullYear(),
                this.today.getMonth(),
                this.today.getDate(),
                0,
                30
            ),
            new Date(
                this.today.getFullYear(),
                this.today.getMonth(),
                this.today.getDate(),
                1,
                0
            ),
            new Date(
                this.today.getFullYear(),
                this.today.getMonth(),
                this.today.getDate(),
                1,
                30
            ),
            new Date(
                this.today.getFullYear(),
                this.today.getMonth(),
                this.today.getDate(),
                2,
                0
            )
        ];
    }

    submitExtendForm() {
        if (this.extendForm.valid) {
            let extendedTime = new Date(this.reservation.end_time);
            extendedTime.setHours(
                extendedTime.getHours() +
                    new Date(
                        this.extendForm.get("timeToExtend").value
                    ).getHours()
            );
            extendedTime.setMinutes(
                extendedTime.getMinutes() +
                    new Date(
                        this.extendForm.get("timeToExtend").value
                    ).getHours()
            );
            this.reservation.end_time = extendedTime;
            this.apiService
                .CreateReservation({
                    gbc_number: this.authService.loggedInGBCNumber,
                    reservation: this.reservation
                })
                .subscribe(res => {
                    this.router.navigateByUrl("/ext-res-complete");
                });
        }
    }
}
