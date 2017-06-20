import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent implements OnInit {
  //private LOGO = require("./assets/under-928246.jpg");
  constructor(private router: Router) { }

  password: string = '';
  wantAndroid = false;
  wantAndroidPro = false;
  proAccess = false;

  ngOnInit() {
    if (localStorage.getItem('accessToken') === undefined || localStorage.getItem('accessToken') === null) {
      this.router.navigate(['auth/login']);
    }

    this.proAccess = false;
    if (localStorage.getItem('roles').indexOf('Admin') > -1){
      this.proAccess = true;
    }
  }

  android(){
    this.wantAndroid = true;
    this.wantAndroidPro = false;
    this.download();
  }

  androidPro() {
    this.wantAndroid = false;
    this.wantAndroidPro = true;
    this.download();
  }

  download(){
    if(this.wantAndroid){
      window.open(
        'http://www.crazyjonker.co.za/mobileapk/home-budget-offline.apk',
        '_blank' // <- This is what makes it open in a new window.
      );
    }

    if (this.wantAndroidPro) {
      window.open(
        'http://www.crazyjonker.co.za/mobileapk/home-budget-online.apk',
        '_blank' // <- This is what makes it open in a new window.
      );
    }
    this.wantAndroid = false;
    this.wantAndroidPro = false;
  }
}
