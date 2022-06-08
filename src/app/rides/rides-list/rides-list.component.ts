import { Component, OnInit } from '@angular/core';
import { Ride } from "../shared/ride.model";
import { RidesService } from '../shared/rides.service';

@Component({
  selector: 'app-rides-list',
  templateUrl: './rides-list.component.html',
  styleUrls: ['./rides-list.component.scss']
})
export class RidesListComponent implements OnInit {
  rides: Ride[];

  constructor(private ridesService: RidesService) {}

  ngOnInit() {
  this.ridesService.getRides();
    this.ridesService.ridesUpdated
      .subscribe(
        (rides: Ride[]) => {
            this.rides = rides;
          console.log(rides);
        }
      )
  }

    onNewRide(rideData: Ride) {
      this.rides.push(rideData)
    }
}
