import { Component, Output, EventEmitter } from '@angular/core';
import { Ride } from "../../shared/ride.model";
import { RidesService } from '../../shared/rides.service';

@Component({
  selector: 'app-add-ride',
  templateUrl: './add-ride.component.html',
  styleUrls: ['./add-ride.component.scss']
})

export class AddRideComponent  {

  constructor(private ridesService: RidesService) {}

  onAddRide(day: string, exercise: string, tack: string, walk: string, trot: string, canter: string, notes: string) {
    const newRide = new Ride(day, exercise, tack, Number(walk), Number(trot), Number(canter), notes);
    this.ridesService.postRide(newRide).subscribe(res => console.log(res))
  }

}
