import { Component, OnInit } from '@angular/core';
import { Ride } from "../shared/ride.model";
import { RidesService } from '../shared/rides.service';
import { BehaviorSubject } from "rxjs";

@Component({
  selector: 'app-rides-list',
  templateUrl: './rides-list.component.html',
  styleUrls: ['./rides-list.component.scss']
})
export class RidesListComponent implements OnInit {
  rides: Ride[];
  // ridesResponse: BehaviorSubject<any> = new BehaviorSubject({});

  constructor(private ridesService: RidesService) {}

  ngOnInit() {
  // const fetchedRides = this.ridesService.sendRides();
  // console.log(fetchedRides)
  this.ridesService.getRides();
  console.log(this.ridesService.sendRides())

    this.ridesService.ridesUpdated
      .subscribe(
        (rides: Ride[]) => {
            this.rides = rides;
          console.log(rides);
        }
      )
  }

  // getApiRides() {
  //   const fetchedRides = this.ridesService.getRides()

  //   //   .subscribe(
  //   //     (response) => {
  //   //      this.ridesResponse.next(response);
  //   // },
  //   //   (error: any) => console.log(error),
  //   //   () => {
  //   //     console.log(this.ridesResponse.value);
  //   //     this.rides = this.ridesResponse.value;
  //   //   }
  //   //   )
  // }

    onNewRide(rideData: Ride) {
      this.rides.push(rideData)
    }
}
