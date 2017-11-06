import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'quick-order',
  templateUrl: './quick-order.component.html',
  styleUrls: ['./quick-order.component.sass']
})
export class QuickOrderComponent implements OnInit {
  @Input() extended: any;

  staticUrlToFile = 'assets/images/';
  item = {
    src: 'flowers.png',
    price: 300
  };

  constructor() { }

  ngOnInit() {
  }

  autoCompleteCallback1(selectedData: any) {
    console.log(selectedData.formatted_address);
  }


}
