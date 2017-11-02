import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'quick-order',
  templateUrl: './quick-order.component.html',
  styleUrls: ['./quick-order.component.sass']
})
export class QuickOrderComponent implements OnInit {
  @Input() state: any;

  constructor() { }

  ngOnInit() {
  }

}
