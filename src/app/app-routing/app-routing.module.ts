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
import { ViewUserComponent } from "../component/view-user/view-user.component";
import { SelectUserComponent } from "../component/select-user/select-user.component";
import { MakePaymentComponent } from "../component/make-payment/make-payment.component";

import { AuthGuard } from "../shared/auth.guard";
import { UserAuthGuard } from "../shared/user-auth.guard";

const routes: Routes = [
    {
        path: "",
        pathMatch: "full",
        redirectTo: "login",
    },
    {
        path: "login",
        component: LoginComponent,
    },
    {
        path: "user-signup",
        component: UserSignupComponent,
    },
    {
        path: "user-dashboard",
        component: UserDashboardComponent,
        canActivate: [UserAuthGuard],
    },

    {
        path: "submit-comment",
        component: SubmitCommentComponent,
        canActivate: [UserAuthGuard],
    },
    {
        path: "admin-login",
        component: AdminLoginComponent,
    },

    {
        path: "view-comment",
        component: ViewCommentComponent,
        canActivate: [AuthGuard],
    },

    {
        path: "admin-dashboard",
        component: AdminDashboardComponent,
        canActivate: [AuthGuard],
    },

    {
        path: "select-lot-time",
        component: SelectLotTimeComponent,
        canActivate: [UserAuthGuard],
    },

    {
        path: "select-spot",
        component: ClbSpotsComponent,
        canActivate: [UserAuthGuard],
    },

    {
        path: "clc-spots",
        component: ClcSpotsComponent,
        canActivate: [UserAuthGuard],
    },

    {
        path: "cld-spots",
        component: CldSpotsComponent,
        canActivate: [UserAuthGuard],
    },

    {
        path: "license-plate",
        component: LicensePlateComponent,
        canActivate: [UserAuthGuard],
    },

    {
        path: "confirm-reservation",
        component: ConfResReserveComponent,
        canActivate: [UserAuthGuard],
    },

    {
        path: "reservation-complete",
        component: ReservationCompleteComponent,
        canActivate: [UserAuthGuard],
    },

    {
        path: "conf-res-cancel",
        component: ConfResCancelComponent,
        canActivate: [UserAuthGuard],
    },

    {
        path: "cancel-complete",
        component: CancelCompleteComponent,
        canActivate: [UserAuthGuard],
    },

    {
        path: "extend-reservation",
        component: ExtendReservationComponent,
        canActivate: [UserAuthGuard],
    },

    {
        path: "ext-res-complete",
        component: ExtResCompleteComponent,
        canActivate: [UserAuthGuard],
    },

    {
        path: "payment-history",
        component: PaymentHistoryComponent,
        canActivate: [UserAuthGuard],
    },

    {
        path: "view-user",
        component: ViewUserComponent,
        canActivate: [AuthGuard],
    },

    {
        path: "select-user",
        component: SelectUserComponent,
        canActivate: [AuthGuard],
    },

    {
        path: "make-payment",
        component: MakePaymentComponent,
        canActivate: [UserAuthGuard],
    },
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
