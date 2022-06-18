import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { FlatpickrModule } from 'angularx-flatpickr';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AddRideComponent } from './rides/add-ride/add-ride.component';
import { HeaderComponent } from './header/header.component';
import { RidesListComponent } from './rides/rides-list/rides-list.component';
import { SingleRideComponent } from './rides/rides-list/single-ride/single-ride.component';
import { RidesComponent } from './rides/rides.component';
import { HorseComponent } from './horse/horse.component';
import { AddHorseComponent } from './add-horse/add-horse.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { DragCompComponent } from './drag-comp/drag-comp.component';

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
    HomeComponent,
    DragCompComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
        NgbModalModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
