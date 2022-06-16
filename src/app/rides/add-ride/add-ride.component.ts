import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Ride } from "../../shared/ride.model";
import { RidesService } from '../../shared/rides.service';
import { Horse } from 'src/app/shared/horse.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-ride',
  templateUrl: './add-ride.component.html',
  styleUrls: ['./add-ride.component.scss']
})

export class AddRideComponent  {
  @Input() horse: Horse;

  constructor(private ridesService: RidesService, private router: Router) {}

  onAddRide(day: string, exercise: string, tack: string, walk: string, trot: string, canter: string, notes: string) {
    const newRide = new Ride(day, exercise, tack, Number(walk), Number(trot), Number(canter), notes);
    this.ridesService.postRide(newRide, this.horse.id).subscribe(res => console.log(res))
    // this.router.navigate(["/horses/:id"])
  }

}
