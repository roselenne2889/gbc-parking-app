import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { UserSignupComponent } from "./component/user-signup/user-signup.component";
import { UserDashboardComponent } from "./component/user-dashboard/user-dashboard.component";

@NgModule({
  declarations: [AppComponent, UserSignupComponent, UserDashboardComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
