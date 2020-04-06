import { Component, OnInit, NgZone } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { ApiService } from "../../shared/api.service";
import { User } from "../../shared/user";
import { DataService } from "../../shared/data.service";
import { AuthService } from "../../shared/auth.service";

@Component({
    selector: "app-select-user",
    templateUrl: "./select-user.component.html",
    styleUrls: ["./select-user.component.css"],
})
export class SelectUserComponent implements OnInit {
    selectUserForm: FormGroup;
    users: User[];
    constructor(
        private fb: FormBuilder,
        private apiService: ApiService,
        private dataService: DataService,
        private router: Router,
        public authService: AuthService
    ) {}

    ngOnInit() {
        this.selectUserForm = this.fb.group({
            user_list: ["", [Validators.required]],
        });
        this.apiService.GetAllUsers().subscribe((res) => {
            this.users = res;
        });
    }

    submitSelectUserForm() {
        if (this.selectUserForm.valid) {
            this.dataService.selectedUser = this.users.find((user) => {
                return (
                    user.gbc_number.toString() ===
                    this.selectUserForm.get("user_list").value
                );
            });
            this.router.navigateByUrl("/view-user");
        }
    }
}
