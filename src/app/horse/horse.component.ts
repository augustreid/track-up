import { Component, OnInit, Input } from '@angular/core';
import { Horse } from '../shared/horse.model';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-horse',
  templateUrl: './horse.component.html',
  styleUrls: ['./horse.component.scss']
})
export class HorseComponent implements OnInit {
  // @Input() horse: Horse;
  horseId: {id: number};

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.horseId = {
      id: this.route.snapshot.params["id"]
    }
    this.route.params
      .subscribe(
        (params: Params) => {
          this.horseId.id = params["id"];
        }
      )
      console.log(this.horseId.id)
  }

}

//Ok, time to learn how to get params from the route to fetch the correct horse. 
