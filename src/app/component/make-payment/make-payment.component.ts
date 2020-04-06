import { Component, OnInit, NgZone } from "@angular/core";
import {
    FormBuilder,
    FormGroup,
    Validators,
    AbstractControl,
} from "@angular/forms";
import { Router } from "@angular/router";

import { ApiService } from "../../shared/api.service";
import { Reservation } from "../../shared/reservation";
import { DataService } from "../../shared/data.service";
import { AuthService } from "../../shared/auth.service";
import { ReservationRequest } from "../../shared/reservation-request";

@Component({
    selector: "app-make-payment",
    templateUrl: "./make-payment.component.html",
    styleUrls: ["./make-payment.component.css"],
})
export class MakePaymentComponent implements OnInit {
    paymentForm: FormGroup;
    reservation: Reservation;
    constructor(
        private apiService: ApiService,
        private fb: FormBuilder,
        private dataService: DataService,
        public authService: AuthService,
        private ngZone: NgZone,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.reservation = this.dataService.getReservation();
        this.paymentForm = this.fb.group({
            email: ["", [Validators.required, Validators.email]],
            credit_card_number: [
                "",
                [Validators.required, Validators.pattern(/^[0-9]{15,16}$/)],
            ],
            expiration_date: [
                "",
                [
                    Validators.required,
                    Validators.pattern(/^(0[1-9]|1[0-2])\/[0-9]{2}$/),
                ],
            ],
            security_code: [
                "",
                [Validators.required, Validators.pattern(/[0-9][0-9][0-9]/)],
            ],
            cardholder_name: [
                "",
                [Validators.required, Validators.pattern(/^[a-zA-Z \-\.\']*$/)],
            ],
            postal_code: [
                "",
                [
                    Validators.required,
                    Validators.pattern(
                        /[ABCEGHJKLMNPRSTVXY][0-9][ABCEGHJKLMNPRSTVWXYZ] ?[0-9][ABCEGHJKLMNPRSTVWXYZ][0-9]/
                    ),
                ],
            ],
        });
    }

    /* luhnCheck(val) {
        var sum = 0;
        for (var i = 0; i < val.length; i++) {
            var intVal = parseInt(val.substr(i, 1));
            if (i % 2 == 0) {
                intVal *= 2;
                if (intVal > 9) {
                    intVal = 1 + (intVal % 10);
                }
            }
            sum += intVal;
        }
        return sum % 10 == 0;
    }

    validateCardNumber(cardNumRegex: RegExp) {
        return (control: AbstractControl): { [key: string]: any } | null => {
            const forbidden = cardNumRegex.test(control.value);
            return forbidden ? { 'forbiddenName': { value: control.value } } : null;
        };
        var regex = new RegExp("^[0-9]{15,16}$");
        if (!regex.test(number)) return false;

        return this.luhnCheck(number);
    } */

    handleError = (controlName: string, errorName: string) => {
        return this.paymentForm.controls[controlName].hasError(errorName);
    };

    submitPaymentForm() {
        if (this.paymentForm.valid) {
            this.reservation.reservation_number = Number(
                `${this.authService.loggedInGBCNumber}${this.dataService.reservation_history.length}`
            );
            this.reservation.amount = 12;
            this.apiService.MakePayment().subscribe(() => {
                const reqObj: ReservationRequest = {
                    reservation: { ...this.reservation },
                    gbc_number: this.authService.loggedInGBCNumber,
                };
                this.dataService.updateReservation(this.reservation);
                this.apiService.CreateReservation(reqObj).subscribe((res) => {
                    this.dataService.reservation_history = res.reservation_history.slice(
                        0
                    );
                    this.ngZone.run(() =>
                        this.router.navigateByUrl("/reservation-complete")
                    );
                });
            });
        }
    }
}
