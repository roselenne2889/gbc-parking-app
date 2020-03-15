import { Lot } from "./lot";
import { Spot } from "./spot";

export class Reservation {
    reservation_number: number;
    lot: Lot;
    spot: Spot;
    start_time: Date;
    end_time: Date;
    license_plate_number: string;
}
