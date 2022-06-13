import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http"

import { AppComponent } from './app.component';
import { AddRideComponent } from './rides/add-ride/add-ride.component';
import { HeaderComponent } from './header/header.component';
import { RidesListComponent } from './rides/rides-list/rides-list.component';
import { SingleRideComponent } from './rides/rides-list/single-ride/single-ride.component';
import { RidesComponent } from './rides/rides.component';
import { HorseComponent } from './horse/horse.component';
import { AddHorseComponent } from './add-horse/add-horse.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AddRideComponent,
    HeaderComponent,
    RidesListComponent,
    SingleRideComponent,
    RidesComponent,
    HorseComponent,
    AddHorseComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
