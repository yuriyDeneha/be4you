import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  orderState = true;

  constructor() { }

  ngOnInit() {
  }

  changeOrderState() {
    this.orderState = true;
    // this.orderState = !this.orderState;
  }

}
