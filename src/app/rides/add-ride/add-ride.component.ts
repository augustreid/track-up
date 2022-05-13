import { Component, Output, EventEmitter } from '@angular/core';
import { Ride } from "../shared/ride.model";

@Component({
  selector: 'app-add-ride',
  templateUrl: './add-ride.component.html',
  styleUrls: ['./add-ride.component.scss']
})

export class AddRideComponent  {
  @Output() addedRide = new EventEmitter<Ride>()

  onAddRide(day: string, exercise: string, tack: string, walk: string, trot: string, canter: string, notes: string) {
    event.preventDefault();
    const newRide = new Ride(day, exercise, tack, Number(walk), Number(trot), Number(canter), notes);
    this.addedRide.emit(newRide)
    console.log(newRide)
  }

}
