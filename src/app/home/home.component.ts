import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  homeTitle = "Welcome to Michael's directory!";
  myString="Enter a value";
  myBoolean="true";

  alertMe(val) {
    alert(val);
  }
  constructor() { }
  ngOnInit() {
  }

}
