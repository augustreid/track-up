import { Component, OnInit, Input } from '@angular/core';
import { Horse } from 'src/app/shared/horse.model';
import { Ride } from "../../shared/ride.model";
import { RidesService } from '../../shared/rides.service';

@Component({
  selector: 'app-rides-list',
  templateUrl: './rides-list.component.html',
  styleUrls: ['./rides-list.component.scss']
})
export class RidesListComponent  implements OnInit {
 @Input() rides: Ride[];
  sorted: Ride[]

  // @Input() horseId: {id: number};

  constructor(private ridesService: RidesService) {}

  ngOnInit() {
    this.sortRides(this.rides)
  }

  sortRides(rides) {
      this.sorted = rides.sort((a: any, b: any) => {
      return b.day - a.day;
    })
    console.log(this.sorted)
  }
}
