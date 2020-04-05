import { Reservation } from "./reservation";

export interface User {
    first_name: String;
    last_name: String;
    gbc_number: number;
    email: String;
    user_password: String;
    reservation: Reservation;
}

export class UserLogin {
    _id: String;
    gbc_number: number;
    user_password: String;
}
