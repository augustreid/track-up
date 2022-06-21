import { Component, Input} from '@angular/core';
import { Router } from '@angular/router';
import { RidesService } from 'src/app/shared/rides.service';
import { Ride } from "../../../shared/ride.model"

@Component({
  selector: 'app-single-ride',
  templateUrl: './single-ride.component.html',
  styleUrls: ['./single-ride.component.scss']
})
export class SingleRideComponent  {
  @Input() ride: Ride;

  constructor(private ridesService: RidesService, private router: Router) {};

  onDeleteRide() {
    this.ridesService.deleteRide(this.ride.id, this.ride.horse_id)
        .subscribe()
    this.router.navigate(["/horses", `/${this.ride.horse_id}`])
  }
}
