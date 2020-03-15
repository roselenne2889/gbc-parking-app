import { NgModule } from "@angular/core";
// import { CommonModule } from "@angular/common";
import { LoginComponent } from "../component/login/login.component";
import { RouterModule, Routes } from "@angular/router";
import { UserSignupComponent } from "../component/user-signup/user-signup.component";
import { UserDashboardComponent } from "../component/user-dashboard/user-dashboard.component";
import { SubmitCommentComponent } from "../component/submit-comment/submit-comment.component";
import { AdminLoginComponent } from "../component/admin-login/admin-login.component";
import { ViewCommentComponent } from "../component/view-comment/view-comment.component";
import { AdminDashboardComponent } from "../component/admin-dashboard/admin-dashboard.component";
import { SelectLotTimeComponent } from "../component/select-lot-time/select-lot-time.component";
import { ClbSpotsComponent } from "../component/clb-spots/clb-spots.component";
import { ClcSpotsComponent } from "../component/clc-spots/clc-spots.component";
import { CldSpotsComponent } from "../component/cld-spots/cld-spots.component";
import { LicensePlateComponent } from "../component/license-plate/license-plate.component";
import { ConfResReserveComponent } from "../component/conf-res-reserve/conf-res-reserve.component";
import { ReservationCompleteComponent } from "../component/reservation-complete/reservation-complete.component";
import { ConfResCancelComponent } from "../component/conf-res-cancel/conf-res-cancel.component";
import { CancelCompleteComponent } from "../component/cancel-complete/cancel-complete.component";
import { ExtendReservationComponent } from "../component/extend-reservation/extend-reservation.component";
import { ExtResCompleteComponent } from "../component/ext-res-complete/ext-res-complete.component";
import { PaymentHistoryComponent } from "../component/payment-history/payment-history.component";
import { LateFeesComponent } from "../component/late-fees/late-fees.component";
import { ViewUserComponent } from "../component/view-user/view-user.component";
import { SelectUserComponent } from "../component/select-user/select-user.component";

const routes: Routes = [
    {
        path: "",
        pathMatch: "full",
        redirectTo: "login"
    },
    {
        path: "login",
        component: LoginComponent
    },
    {
        path: "user-signup",
        component: UserSignupComponent
    },
    {
        path: "user-dashboard",
        component: UserDashboardComponent
    },

    {
        path: "submit-comment",
        component: SubmitCommentComponent
    },
    {
        path: "admin-login",
        component: AdminLoginComponent
    },

    {
        path: "view-comment",
        component: ViewCommentComponent
    },

    {
        path: "admin-dashboard",
        component: AdminDashboardComponent
    },

    {
        path: "select-lot-time",
        component: SelectLotTimeComponent
    },

    {
        path: "select-spot",
        component: ClbSpotsComponent
    },

    {
        path: "clc-spots",
        component: ClcSpotsComponent
    },

    {
        path: "cld-spots",
        component: CldSpotsComponent
    },

    {
        path: "license-plate",
        component: LicensePlateComponent
    },

    {
        path: "conf-res-reserve",
        component: ConfResReserveComponent
    },

    {
        path: "reservation-complete",
        component: ReservationCompleteComponent
    },

    {
        path: "conf-res-cancel",
        component: ConfResCancelComponent
    },

    {
        path: "cancel-complete",
        component: CancelCompleteComponent
    },

    {
        path: "extend-reservation",
        component: ExtendReservationComponent
    },

    {
        path: "ext-res-complete",
        component: ExtResCompleteComponent
    },

    {
        path: "payment-history",
        component: PaymentHistoryComponent
    },

    {
        path: "late-fees",
        component: LateFeesComponent
    },

    {
        path: "view-user",
        component: ViewUserComponent
    },

    {
        path: "select-user",
        component: SelectUserComponent
    }
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
