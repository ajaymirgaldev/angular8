import { Component, OnInit } from '@angular/core';
import { ServiceDataService } from '../service-data.service';

@Component({
  selector: 'app-vslcompoment',
  templateUrl: './vslcompoment.component.html',
  styleUrls: ['./vslcompoment.component.css']
})

//
export class VSLCompomentComponent implements OnInit {

  appTitle: string;
  htmlContent:string;

  //Empty Object //
  users: Object;

  //constructor//
  constructor(private data:ServiceDataService) { }

  //
  ngOnInit() {
    this.htmlContent = "<span data-bold='makebold'>Welcome to the Angular Application!</span>";
    this.setAppTitle("");

    //SERVICE call
    this.data.getUsersData()
    .subscribe(data => {
      //this.users = data;
      this.setUserData(data);
      
    });
  }

  //Mutator Method for User data//
  setUserData(_data={}){
    this.users = _data;
  }

  //Accessor Method for User data//
  getUserData(){
    return this.users;
  }

  //Mutator for App titile//
  setAppTitle(_value=""){
    this.appTitle = _value;
  }

  //Accessor for App titile//
  getAppTitle(){
    return this.appTitle;
  }

  //Service call for click event //
  firstClick(){
    this.data.firstClick();
  }

}
