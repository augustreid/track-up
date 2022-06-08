import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Ride } from "./shared/ride.model";
import { RidesService } from './shared/rides.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-rides',
  templateUrl: './rides.component.html',
  styleUrls: ['./rides.component.scss'],
  providers: [RidesService]
})
export class RidesComponent  {
constructor(private ridesService: RidesService) {}

  // ngOnInit() {
  // const fetchedRides = this.ridesService.sendRides();
  // console.log(fetchedRides)
  // }

}
