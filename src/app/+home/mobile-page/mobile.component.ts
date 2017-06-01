import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent implements OnInit {
  //private LOGO = require("./assets/under-928246.jpg");
  constructor() { }

  showImage: boolean = true;
  showPassword: boolean = false;
  password: string = '';
  wantAndroid = false;

  ngOnInit() {
   
  }

  android(){
    this.wantAndroid = true;
    this.showImage = false;
    this.showPassword = true;
  }

  download(){
    this.wantAndroid = false;
    this.showImage = true;
    this.showPassword = false;

    if(this.password === 'Walle'){
      this.password = '';
      window.open(
        'http://www.crazyjonker.co.za/mobileapk/jonker-budget.apk',
        '_blank' // <- This is what makes it open in a new window.
      );
    
    } else {
      this.password = '';
      alert("Incorrect password")
    }

  }

}
