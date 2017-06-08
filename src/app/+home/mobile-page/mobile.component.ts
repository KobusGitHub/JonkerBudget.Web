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
  wantAndroidPro = false;

  ngOnInit() {
   
  }

  android(){
    this.wantAndroid = true;
    this.wantAndroidPro = false;
    this.showImage = false;
    this.showPassword = true;
  }

  androidPro() {
    this.wantAndroid = false;
    this.wantAndroidPro = true;
    this.showImage = false;
    this.showPassword = true;
  }

  download(){
    

    if(this.wantAndroid){
      if(this.password === 'crazyguest'){
        this.password = '';
        window.open(
          'http://www.crazyjonker.co.za/mobileapk/home-budget-offline.apk',
          '_blank' // <- This is what makes it open in a new window.
        );
      
      } else {
        this.password = '';
        alert("Incorrect password")
      }
    }

    if (this.wantAndroidPro) {
      if (this.password === 'crazywalle') {
        this.password = '';
        window.open(
          'http://www.crazyjonker.co.za/mobileapk/home-budget-online.apk',
          '_blank' // <- This is what makes it open in a new window.
        );

      } else {
        this.password = '';
        alert("Incorrect password")
      }
    }

    this.wantAndroid = false;
    this.wantAndroidPro = false;
    this.showImage = true;
    this.showPassword = false;
  }

}
