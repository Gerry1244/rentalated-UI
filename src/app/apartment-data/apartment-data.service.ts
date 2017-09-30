import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Apartment } from '../apartment';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

@Injectable()
export class ApartmentDataService {

  constructor(private http: Http) { }

  getActiveListings(): Observable<Apartment[]> {
    return this.http
      .get('http://localhost:4567/api/apartments', { withCredentials: true })
      .map(response => response.json());
  }

  getMyListings(): Observable<Apartment[]> {  
    return this.http
      .get('http://localhost:4567/api/apartments/mine', { withCredentials: true })
      .map(response => response.json());
  }

    changeStatus (apartment: Apartment): Observable<Apartment>{
 
   if (apartment.is_active) {
     return this.http
     .post('http://localhost:4200/api/apartments/'+apartment.id+'/activations', {}, { withCredentials: true })
     .map(response => response.json());
   } else {
     return this.http
     .post('http://localhost:4200/api/apartments/'+apartment.id+'/deactivations', {}, { withCredentials: true })
     .map(response => response.json());
   }
 }


}
