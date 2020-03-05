import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ApiService } from "../../shared/api.service";

@Component({
  selector: "app-select-lot-time",
  templateUrl: "./select-lot-time.component.html",
  styleUrls: ["./select-lot-time.component.css"]
})
export class SelectLotTimeComponent implements OnInit {
  selectLotForm: FormGroup;
  /*lots=lot[]=[
    {name:"CLB"},
    {name:"CLC"},
    {name:"CLD"}

  ];*/

  constructor() {}

  ngOnInit() {}
}
