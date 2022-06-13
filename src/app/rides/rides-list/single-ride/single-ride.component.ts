import { Component, Input} from '@angular/core';
import { Ride } from "../../../shared/ride.model"

@Component({
  selector: 'app-single-ride',
  templateUrl: './single-ride.component.html',
  styleUrls: ['./single-ride.component.scss']
})
export class SingleRideComponent  {
  @Input() ride: Ride;

}
