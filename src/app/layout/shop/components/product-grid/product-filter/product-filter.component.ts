import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.sass']
})
export class ProductFilterComponent implements OnInit {

  @Output() search: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  changeGridStructure(){

  }
}
