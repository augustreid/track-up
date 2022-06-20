import { Component, OnInit, Input } from '@angular/core';
import { Horse } from '../shared/horse.model';
import { ActivatedRoute, Params } from '@angular/router';
import { HorseService } from '../shared/horse.service';

@Component({
  selector: 'app-horse',
  templateUrl: './horse.component.html',
  styleUrls: ['./horse.component.scss']
})
export class HorseComponent implements OnInit {
  horse: Horse;
  horseId: {id: number};

  constructor(private route: ActivatedRoute, private horseService: HorseService) { }

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
        }
      )
      {
    this.horseService.getSingleHorse(this.horseId.id)
      .subscribe(data => this.horse = data)
    }
  }

}

//Ok, time to learn how to get params from the route to fetch the correct horse. 
