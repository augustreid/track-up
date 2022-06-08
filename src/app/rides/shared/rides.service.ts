import { Ride } from "./ride.model"
import { EventEmitter, Injectable, OnInit } from "@angular/core";
import {HttpClient} from '@angular/common/http';
import { Observable, BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RidesService {
  ridesUpdated = new EventEmitter<Ride[]>();
  ridesResponse: BehaviorSubject<any> = new BehaviorSubject({});

  private rides: Ride[] = [
    new Ride("5/01/2022", "Trail ride", "English", 20, 10, 3, "no further notes"),
    new Ride("5/03/2022", "Arena ride", "Western", 25, 10, 5, "was a very good boy"),
    new Ride("5/05/2022", "Trail ride", "Bareback", 20, 5, 0, "a chill meander")
  ]

  constructor(private http: HttpClient) {
    this.getRides();
  }

  fetchRides(): Observable<Ride[]> {
   return this.http.get<Ride[]>("http://localhost:3000/api/v1/horses/1/rides")
  }

  getRides() {
    this.fetchRides()
    .subscribe(
        (response) => {
         this.ridesResponse.next(response);
    },
      (error: any) => console.log(error),
      () => {
        this.rides = this.ridesResponse.value;
        console.log(this.rides)
      }
    )
  //  this.sendRides();
  }

  sendRides() {
    this.rides.slice();
    this.ridesUpdated.emit(this.rides.slice());
  }
  // getRides() {
  //   this.fetchRides();
  //   this.pushRides();
  //   this.ridesUpdated.emit(this.rides.slice());
  //   this.rides.slice();
  // }

  addRide(rideData: Ride) {
    this.rides.push(rideData);
    this.ridesUpdated.emit(this.rides.slice());
  }
}