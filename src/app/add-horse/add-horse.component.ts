import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Horse } from '../shared/horse.model';
import { HorseService } from '../shared/horse.service';

@Component({
  selector: 'app-add-horse',
  templateUrl: './add-horse.component.html',
  styleUrls: ['./add-horse.component.scss']
})
export class AddHorseComponent  {

  constructor(private horseService: HorseService, private router: Router ) {}

  onAddHorse(name: string, sex: string, age: string, imageUrl: string) {
    const newHorse = new Horse(name, sex, Number(age), imageUrl);
    this.horseService.postHorse(newHorse).subscribe(res => console.log(res))
    // this.router.navigate(["../"])
  }

}
