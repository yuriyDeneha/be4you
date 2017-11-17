import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../../models/product.model";

@Component({
  selector: 'product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.sass']
})
export class ProductGridComponent implements OnInit {

  @Input() products: Product[];

  constructor() { }

  ngOnInit() {
    console.log(this.products);
  }

}
