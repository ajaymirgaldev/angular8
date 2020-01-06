import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

//
export class ServiceDataService {

  //
  constructor(private http: HttpClient) { }

  //EVENT//
  firstClick() {
    return console.log('clicked');
  }

  //API call
  getUsersData(){
    return this.http.get("https://reqres.in/api/users");
  }
}
