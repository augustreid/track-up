import { Component, OnInit } from '@angular/core';
import { Ride } from "../../shared/ride.model";
import { RidesService } from '../../shared/rides.service';

@Component({
  selector: 'app-rides-list',
  templateUrl: './rides-list.component.html',
  styleUrls: ['./rides-list.component.scss']
})
export class RidesListComponent implements OnInit {
  rides: Ride[];

  constructor(private ridesService: RidesService) {}

  ngOnInit() {
    this.ridesService.getRides()
      .subscribe(data => this.rides = data)
  }
}
