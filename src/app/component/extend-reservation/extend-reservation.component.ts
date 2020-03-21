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
    constructor(
        private apiService: ApiService,
        private dataService: DataService,
        private authService: AuthService,
        private router: Router,
        private ngZone: NgZone,
        private fb: FormBuilder
    ) {}

    ngOnInit() {
        this.extendForm = this.fb.group({
            timeToExtend: ["", [Validators.required]]
        });
    }

    submitExtendForm() {}
}
