import { Component, OnInit, Input } from '@angular/core';
import { Horse } from '../shared/horse.model';
import { Ride } from '../shared/ride.model';
import { ActivatedRoute, Params } from '@angular/router';
import { HorseService } from '../shared/horse.service';
import { RidesService } from '../shared/rides.service';

@Component({
  selector: 'app-horse',
  templateUrl: './horse.component.html',
  styleUrls: ['./horse.component.scss']
})
export class HorseComponent implements OnInit {
  horse: Horse;
  horseId: {id: number};
  rides: Ride[];
  sorted: Ride[];

  constructor(private route: ActivatedRoute, private horseService: HorseService, private ridesService: RidesService) { }

  ngOnInit(): void {
    this.horseId = {
      id: this.route.snapshot.params["id"]
    }
    this.route.params
      .subscribe(
        (params: Params) => {
          this.horseId.id = params["id"];
             this.horseService.getSingleHorse(this.horseId.id)
                  .subscribe(data => this.horse = data)
            this.ridesService.getRides(this.horseId.id)
                  .subscribe(data => this.rides = data.sort((a: any, b: any ) => {
                  return (b.day - a.day)
                })
                  )
                }
                )
              }

      sortRides()  {
              this.rides.sort((a: any, b: any ) => {
                  console.log( b.day - a.day)
                  return (b.day - a.day)
                })
            }

            }

