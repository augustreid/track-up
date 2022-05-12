import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddRideComponent } from './add-ride/add-ride.component';
import { HeaderComponent } from './header/header.component';
import { RidesListComponent } from './rides-list/rides-list.component';
import { SingleRideComponent } from './rides-list/single-ride/single-ride.component';
import { RideDetailsComponent } from './ride-details/ride-details.component';

@NgModule({
  declarations: [
    AppComponent,
    AddRideComponent,
    HeaderComponent,
    RidesListComponent,
    SingleRideComponent,
    RideDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
