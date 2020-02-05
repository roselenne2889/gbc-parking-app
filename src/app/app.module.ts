import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { Router } from '@angular/router';
import { AppRoutingModule,routingComponent } from './app-routing.module';

@NgModule({
  declarations: [AppComponent, routingComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router){
    
  }
}
