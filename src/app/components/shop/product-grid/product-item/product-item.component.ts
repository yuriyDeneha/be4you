import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../../../models/product.model';

@Component({
  selector: 'product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.sass']
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;
  constructor() { }

  ngOnInit() {
    console.log(this.product);
  }

}
