import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { ApiService } from "../../shared/api.service";
import { DataService } from "../../shared/data.service";
import { Reservation } from "../../shared/reservation";

@Component({
    selector: "app-clb-spots",
    templateUrl: "./clb-spots.component.html",
    styleUrls: ["./clb-spots.component.css"]
})
export class ClbSpotsComponent implements OnInit {
    spots: number[] = Array.from({ length: 40 }, (val, index) => index + 1);
    spotAvailability: boolean[] = Array.from(
        { length: this.spots.length },
        () => true
    );
    reservation: Reservation;
    constructor(
        private apiService: ApiService,
        private dataService: DataService,
        private router: Router
    ) {}

    ngOnInit() {
        this.spotAvailability = this.spotAvailability.map(() => {
            return true;
        });
        this.reservation = this.dataService.getReservation();
        this.apiService.GetTakenSpots(this.reservation.lot).subscribe(spots => {
            spots.forEach(spotName => {
                this.spotAvailability[Number(spotName) - 1] = false;
            });
        });
        console.log(this.spotAvailability);
    }

    selectSpot(spotName) {
        this.reservation.spot.spot_name = spotName.toString();
        this.dataService.updateReservation(this.reservation);
        this.router.navigateByUrl("/license-plate");
    }
}
