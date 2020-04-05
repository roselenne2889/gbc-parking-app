import { Injectable } from "@angular/core";

import { Lot } from "./lot";
import { Reservation } from "./reservation";
import { ReservationHistory } from "./reservation-history";
import { User } from "./user";

@Injectable({
    providedIn: "root"
})
export class DataService {
    lots: Lot[] = [
        {
            lot_id: "CLB",
            lot_name: "CLB" // TO DO: Change as needed
        },
        {
            lot_id: "CLC",
            lot_name: "CLC" // TO DO: Change as needed
        },
        {
            lot_id: "CLD",
            lot_name: "CLD" // TO DO: Change as needed
        }
    ];
    reservation: Reservation;
    reservation_history: ReservationHistory[] = [];
    selectedUser: User;

    updateReservation(reservation) {
        Object.assign(this.reservation, reservation);
    }

    getReservation() {
        return Object.assign({}, this.reservation);
    }
}
