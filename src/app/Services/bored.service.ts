import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BoredService {

  constructor(private httpClient: HttpClient) { }

  getActivity(){

    return this.httpClient.get("https://www.boredapi.com/api/activity");

  }

}
