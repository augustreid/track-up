import { Component, OnInit, Input } from '@angular/core';
import { Horse } from 'src/app/shared/horse.model';
import { Ride } from "../../shared/ride.model";
import { RidesService } from '../../shared/rides.service';

@Component({
  selector: 'app-rides-list',
  templateUrl: './rides-list.component.html',
  styleUrls: ['./rides-list.component.scss']
})
export class RidesListComponent implements OnInit {
  rides: Ride[];
  @Input() horse: Horse;

  constructor(private ridesService: RidesService) {}

  ngOnInit() {
    this.ridesService.getRides(this.horse.id)
      .subscribe(data => this.rides = data)
  }
}
