import { Component, Input, OnChanges, SimpleChange, AfterContentInit, AfterContentChecked } from '@angular/core';
import { Ride } from "../shared/ride.model";

@Component({
  selector: 'app-rides-list',
  templateUrl: './rides-list.component.html',
  styleUrls: ['./rides-list.component.scss']
})
export class RidesListComponent  {
  // @Input() newAddedRide: Ride;
  rides: Ride[] = [
    new Ride("5/01/2022", "Trail ride", "English", 20, 10, 3, "no further notes"),
    new Ride("5/03/2022", "Arena ride", "Western", 25, 10, 5, "was a very good boy"),
    new Ride("5/05/2022", "Trail ride", "Bareback", 20, 5, 0, "a chill meander")
  ]

    onNewRide(rideData: Ride) {
      
      this.rides.push(rideData)
    }
}
