import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../../../models/product.model';

@Component({
  selector: 'product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.sass']
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;

  styleType: object;

  constructor() { }

  ngOnInit() {
    this.styleType = this.configureStyleForProduct();
  }

  configureStyleForProduct() {

    enum Position {
      center,
      top,
      bottom,
      right,
      left
    }
    enum Side {
      above,
      facade,
      side
    }

    const randPosition = this.getRandomNumberOfSet(0, 4),
    randSide = this.getRandomNumberOfSet(0, 2);

    return {
      position: Position[randPosition],
      side: Side[randSide]
    };
  }

  getRandomNumberOfSet(min= 0, max= 3) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

