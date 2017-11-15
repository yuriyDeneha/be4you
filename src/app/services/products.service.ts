import { Injectable } from '@angular/core';
import {Product} from '../models/product.model';

@Injectable()
export class ProductsService {

  products: any[] = [
    { popularity: 1 },
    { popularity: 2 },
    { popularity: 1 },
    { popularity: 1 },
    { popularity: 1 },
    { popularity: 3 },
    { popularity: 2 },
    { popularity: 2 },
  ];

  productsTotal: number;
  constructor() { }

  getProducts() {
    return this.products;
  }

  transformProductsArray() {

    let currentSum = 0;
    for (let index = 0; index < this.productsTotal; index ++) {
      switch (this.products[index]) {
        case 3: {
          if ( currentSum === 0 )
            continue;
          else{
            let indexOfNeeded = this.findNeededElement(index, currentSum);
          }

        }
        case 2: {
          continue;
        }
        case 1: {
          continue;
        }
      }
    }
  }

  findNeededElement( fromPosition, value) {
    let index = fromPosition;

    while (this.products[++index].popularity !== value) {}


    return index;
  }
  exchangeElements(index1, index2) {
    let temp = this.products[index1];
    this.products[index1] = this.products[index2];
    this.products[index2] = temp;
  }
}
