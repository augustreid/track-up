import { Ride } from "./ride.model"
import { EventEmitter } from "@angular/core";

export class RidesService {
  ridesUpdated = new EventEmitter<Ride[]>();

  private rides: Ride[] = [
    new Ride("5/01/2022", "Trail ride", "English", 20, 10, 3, "no further notes"),
    new Ride("5/03/2022", "Arena ride", "Western", 25, 10, 5, "was a very good boy"),
    new Ride("5/05/2022", "Trail ride", "Bareback", 20, 5, 0, "a chill meander")
  ]

  getRides() {
    return this.rides.slice();
  }

  addRide(rideData: Ride) {
    this.rides.push(rideData);
    this.ridesUpdated.emit(this.rides.slice());
  }
}