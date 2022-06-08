import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http"

import { AppComponent } from './app.component';
import { AddRideComponent } from './rides/add-ride/add-ride.component';
import { HeaderComponent } from './header/header.component';
import { RidesListComponent } from './rides/rides-list/rides-list.component';
import { SingleRideComponent } from './rides/rides-list/single-ride/single-ride.component';
import { RideDetailsComponent } from './rides/ride-details/ride-details.component';
import { RidesComponent } from './rides/rides.component';

@NgModule({
  declarations: [
    AppComponent,
    AddRideComponent,
    HeaderComponent,
    RidesListComponent,
    SingleRideComponent,
    RideDetailsComponent,
    RidesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
