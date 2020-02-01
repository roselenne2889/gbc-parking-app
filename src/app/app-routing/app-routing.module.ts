import { NgModule } from "@angular/core";
// import { CommonModule } from "@angular/common";
import { LoginComponent } from "../component/login/login.component";
import { RouterModule, Routes } from "@angular/router";
import { UserSignupComponent } from "../component/user-signup/user-signup.component";
import { UserDashboardComponent } from "../component/user-dashboard/user-dashboard.component";

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
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
