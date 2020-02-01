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

@NgModule({
  declarations: [
    AppComponent,
    UserSignupComponent,
    UserDashboardComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
