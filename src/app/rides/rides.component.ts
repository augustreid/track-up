import { Component, Output, EventEmitter } from '@angular/core';
import { Ride } from "./shared/ride.model";
@Component({
  selector: 'app-rides',
  templateUrl: './rides.component.html',
  styleUrls: ['./rides.component.scss']
})
export class RidesComponent  {
  // newRide: Ride;
  // @Output() forwardRide = new EventEmitter<Ride>();

  // onNewRide(event: Ride) {
  //   console.log(event)
  //   this.newRide = event;
  //   this.forwardRide.emit(this.newRide);
  // }

}
