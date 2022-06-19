import { Component, OnInit } from '@angular/core';
import { HorseService } from '../shared/horse.service';
import { Horse } from '../shared/horse.model';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

horses: Horse[];

  constructor(private horseService: HorseService) {}

  ngOnInit() {
    this.horseService.getHorses()
      .subscribe(data => this.horses = data)
  }

}
