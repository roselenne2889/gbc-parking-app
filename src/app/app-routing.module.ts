import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserSignupComponent } from "./component/user-signup/user-signup.component";
import { UserDashboardComponent } from "./component/user-dashboard/user-dashboard.component";
import { UserHistoryComponent } from './component/user-history/user-history.component';
import { UserCommentComponent } from './component/user-comment/user-comment.component';
import { CancelComponent }from './component/user-comment/cancel.component';
import { SubmitComponent }from './component/user-comment/submit.component';
import { ReturnDashComponent }from './component/user-history/dashboard.component';


const routes: Routes = [
  { path: 'user-dashboard', component: UserDashboardComponent },
  { path: 'user-history', component: UserHistoryComponent },
  { path: 'user-signup', component: UserSignupComponent },
  { path: 'user-comment', component: UserCommentComponent }
];


@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [UserSignupComponent, UserDashboardComponent, UserHistoryComponent, UserCommentComponent,
    ReturnDashComponent]