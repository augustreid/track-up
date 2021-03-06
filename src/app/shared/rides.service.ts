import { Ride } from "./ride.model"
import { EventEmitter, Injectable, OnInit } from "@angular/core";
import {HttpClient} from '@angular/common/http';
import { Observable, BehaviorSubject } from "rxjs";

@Injectable()
export class RidesService {
  ridesUpdated = new EventEmitter<Ride[]>();
  ridesResponse: BehaviorSubject<any> = new BehaviorSubject({});

  constructor(private http: HttpClient) {}

  getRides(horseId): Observable<Ride[]> {
   return this.http.get<Ride[]>(`http://localhost:3000/api/v1/horses/${horseId}/rides`)
  }

   postRide(ride: Ride, horseId): Observable<any> {
    return  this.http.post(`http://localhost:3000/api/v1/horses/${horseId}/rides`, ride)
   }

    deleteRide(rideId, horseId): Observable<any> {
    return  this.http.delete(`http://localhost:3000/api/v1/horses/${horseId}/rides/${rideId}`)
   }
}