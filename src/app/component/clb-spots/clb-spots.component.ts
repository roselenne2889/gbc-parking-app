import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-clb-spots",
    templateUrl: "./clb-spots.component.html",
    styleUrls: ["./clb-spots.component.css"]
})
export class ClbSpotsComponent implements OnInit {
    spots: number[] = new Array(40);
    constructor() {}

    ngOnInit() {
        this.spots = this.spots.map((val, index) => {
            return index;
        });
    }
}
