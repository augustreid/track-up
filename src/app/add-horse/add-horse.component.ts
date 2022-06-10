import { Component, OnInit } from '@angular/core';
import { Horse } from '../rides/shared/horse.model';

@Component({
  selector: 'app-add-horse',
  templateUrl: './add-horse.component.html',
  styleUrls: ['./add-horse.component.scss']
})
export class AddHorseComponent  {

  // constructor(private ridesService: RidesService) {}

  onAddHorse(name: string, sex: string, age: string, imageUrl: string) {
    // const newHorse = new Horse(name, sex, Number(age), imageUrl);
    // this.ridesService.postRide(newRide).subscribe(res => console.log(res))
  }

}
