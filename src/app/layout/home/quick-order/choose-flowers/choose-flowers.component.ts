import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-choose-flowers',
  templateUrl: './choose-flowers.component.html',
  styleUrls: ['./choose-flowers.component.sass']
})
export class ChooseFlowersComponent implements OnInit {

  staticUrlToFile = 'assets/images/';
  item = {
    title: 'nice roses',
    src: 'flowers.png',
    price: 300
  };
  constructor() { }

  ngOnInit() {
  }

}
