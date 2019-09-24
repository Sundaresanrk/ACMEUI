import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Country} from '../_models/country'
import {State} from '../_models/state'
import {OfferApplication} from '../_models/offerApplication'
import { map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})

export class CommonService {
  public API_URL: string = "http://localhost:58304/api";

  constructor(private http: HttpClient) { }

  // getCountries(): Observable<Country[]>
  // {
  //   debugger;
  //   return this.http.get<Country[]>(this.API_URL + '/Country');
  // }

  getCountries() {
    return this.http.get(this.API_URL + '/Country').pipe(
      map(res => {
        console.log(res);
        return res as Country[];
      })
    )
  }

  getStates()  {
    return this.http.get(this.API_URL + '/Postcode').pipe(
      map(res => {
        console.log(res);
        return res as State[];
      })
    )
  }

  saveApplication(application){
    return this.http.post(this.API_URL  + '/OfferApplication', application, httpOptions);
  }
}
