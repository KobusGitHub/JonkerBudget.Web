import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //private LOGO = require("./assets/under-928246.jpg");
  constructor(private router: Router) { }

  ngOnInit() {
    if (localStorage.getItem('username') === undefined || localStorage.getItem('username') === null){
      this.router.navigate(['auth/login']);

    }
  }

    

}
