import { Component, OnInit, Input } from '@angular/core';
import { Horse } from '../shared/horse.model';

@Component({
  selector: 'app-horse',
  templateUrl: './horse.component.html',
  styleUrls: ['./horse.component.scss']
})
export class HorseComponent implements OnInit {
  @Input() horse: Horse;

  constructor() { }

  ngOnInit(): void {
    console.log(this.horse)
  }

}
