import { Component, OnInit } from '@angular/core';
import { HorseService } from '../shared/horse.service';
import { Horse } from '../shared/horse.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  horses: Horse[];
  today: Date = new Date()

  constructor(private horseService: HorseService) {}

  ngOnInit() {
    this.horseService.getHorses()
      .subscribe(data => this.horses = data)
  }
}
