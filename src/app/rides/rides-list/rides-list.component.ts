import { Component, OnInit, Input } from '@angular/core';
import { Horse } from 'src/app/shared/horse.model';
import { Ride } from "../../shared/ride.model";
import { RidesService } from '../../shared/rides.service';

@Component({
  selector: 'app-rides-list',
  templateUrl: './rides-list.component.html',
  styleUrls: ['./rides-list.component.scss']
})
export class RidesListComponent  {
 @Input() rides: Ride[];
  // unsorted: Ride[];

  // @Input() horseId: {id: number};

  constructor(private ridesService: RidesService) {}

  // ngOnInit() {
  //   this.ridesService.getRides(this.horseId.id)
  //       .subscribe(data => this.rides = data)
  //     // .subscribe(data => this.rides = data.sort((a: any, b: any) => {
  //     //   return a.day - b.day;
  //     // }))
  //     console.log(this.rides)
  // }
}
