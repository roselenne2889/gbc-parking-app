import { BrowserModule } from "@angular/platform-browser";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { AngularMaterialModule } from "./material.module";
import { HttpClientModule } from "@angular/common/http";
import { ApiService } from "./shared/api.service";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing/app-routing.module";
import { AppComponent } from "./app.component";
import { UserSignupComponent } from "./component/user-signup/user-signup.component";
import { UserDashboardComponent } from "./component/user-dashboard/user-dashboard.component";
import { AdminLoginComponent } from "./component/admin-login/admin-login.component";
import { LoginComponent } from "./component/login/login.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SubmitCommentComponent } from "./component/submit-comment/submit-comment.component";
import { ViewCommentComponent } from "./component/view-comment/view-comment.component";
import { AdminDashboardComponent } from "./component/admin-dashboard/admin-dashboard.component";
import { SelectLotTimeComponent } from "./component/select-lot-time/select-lot-time.component";
import { ClbSpotsComponent } from "./component/clb-spots/clb-spots.component";
import { ClcSpotsComponent } from "./component/clc-spots/clc-spots.component";
import { CldSpotsComponent } from "./component/cld-spots/cld-spots.component";
import { LicensePlateComponent } from "./component/license-plate/license-plate.component";
import { ConfResReserveComponent } from "./component/conf-res-reserve/conf-res-reserve.component";
import { ReservationCompleteComponent } from "./component/reservation-complete/reservation-complete.component";
import { ConfResCancelComponent } from "./component/conf-res-cancel/conf-res-cancel.component";
import { CancelCompleteComponent } from "./component/cancel-complete/cancel-complete.component";
import { ExtendReservationComponent } from "./component/extend-reservation/extend-reservation.component";
import { ExtResCompleteComponent } from "./component/ext-res-complete/ext-res-complete.component";
import { PaymentHistoryComponent } from "./component/payment-history/payment-history.component";
import { ViewUserComponent } from "./component/view-user/view-user.component";
import { SelectUserComponent } from "./component/select-user/select-user.component";
import { MakePaymentComponent } from "./component/make-payment/make-payment.component";

@NgModule({
    declarations: [
        AppComponent,
        UserSignupComponent,
        UserDashboardComponent,
        LoginComponent,
        SubmitCommentComponent,
        AdminLoginComponent,
        ViewCommentComponent,
        AdminDashboardComponent,
        SelectLotTimeComponent,
        ClbSpotsComponent,
        ClcSpotsComponent,
        CldSpotsComponent,
        LicensePlateComponent,
        ConfResReserveComponent,
        ReservationCompleteComponent,
        ConfResCancelComponent,
        CancelCompleteComponent,
        ExtendReservationComponent,
        ExtResCompleteComponent,
        PaymentHistoryComponent,
        ViewUserComponent,
        SelectUserComponent,
        MakePaymentComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        AngularMaterialModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    providers: [ApiService],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
