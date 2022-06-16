import { Horse } from "./horse.model"; 
import { EventEmitter, Injectable, OnInit } from "@angular/core";
import {HttpClient} from '@angular/common/http';
import { Observable, BehaviorSubject } from "rxjs";

@Injectable()
export class HorseService {
  horsesUpdated = new EventEmitter<Horse[]>();
  horseResponse: BehaviorSubject<any> = new BehaviorSubject({});

  constructor(private http: HttpClient) {}

  getHorses(): Observable<Horse[]> {
   return this.http.get<Horse[]>("http://localhost:3000/api/v1/horses/")
  }

  getSingleHorse(id: number):Observable<Horse> {
    return this.http.get<Horse>(`http://localhost:3000/api/v1/horses/${id}`)
  }

   postHorse(horse: Horse): Observable<any> {
    console.log(horse)
    return  this.http.post("http://localhost:3000/api/v1/horses", horse)
   }
}