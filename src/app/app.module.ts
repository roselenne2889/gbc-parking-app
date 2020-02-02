import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { UserSignupComponent } from "./component/user-signup/user-signup.component";
import { UserDashboardComponent } from "./component/user-dashboard/user-dashboard.component";
import { UserHistoryComponent } from './component/user-history/user-history.component';
import { UserCommentComponent } from './component/user-comment/user-comment.component';

@NgModule({
  declarations: [AppComponent, UserSignupComponent, UserDashboardComponent, UserHistoryComponent, UserCommentComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
