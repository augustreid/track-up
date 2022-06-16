import { Component } from '@angular/core';
import { HorseService } from './shared/horse.service';
import { RidesService } from './shared/rides.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [HorseService, RidesService]
})
export class AppComponent {
  title = 'track-up';
}

//To start:
//Header
//add ride component (like edit shopping list)
//ride model
  //date
  //exercise type (select options or booleans for each?)
  //tack or bareback -- booleans?
  //walk time in minutes -- number
  //trot / tolt time in minutes -- number
  //canter time in minutes -- number
  //notes / details -- string
//rides-list component (like recipe list)
//singleRide component (like recipe item)
//ride details component? 


