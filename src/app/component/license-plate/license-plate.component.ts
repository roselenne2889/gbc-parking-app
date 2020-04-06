import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import { ApiService } from "../../shared/api.service";
import { DataService } from "../../shared/data.service";
import { Reservation } from "../../shared/reservation";
import { AuthService } from "../../shared/auth.service";

@Component({
    selector: "app-license-plate",
    templateUrl: "./license-plate.component.html",
    styleUrls: ["./license-plate.component.css"],
})
export class LicensePlateComponent implements OnInit {
    licensePlateForm: FormGroup;
    constructor(
        private fb: FormBuilder,
        private dataService: DataService,
        private router: Router,
        public authService: AuthService
    ) {}

    ngOnInit() {
        this.licensePlateForm = this.fb.group({
            license_plate_number: ["", [Validators.required]],
        });
    }

    public handleError = (controlName: string, errorName: string) => {
        return this.licensePlateForm.controls[controlName].hasError(errorName);
    };

    submitLicensePlateForm() {
        if (this.licensePlateForm.valid) {
            this.dataService.updateReservation({
                license_plate_number: this.licensePlateForm.get(
                    "license_plate_number"
                ).value,
            });
            this.router.navigateByUrl("/confirm-reservation");
            console.log(this.dataService.getReservation());
        }
    }
}
