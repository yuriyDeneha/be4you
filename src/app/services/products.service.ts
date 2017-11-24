import { Injectable } from '@angular/core';
import {Product} from '../models/product.model';

@Injectable()
export class ProductsService {

  products: any[] = [
    { url: 'assets/images/flowers.png', popularity: 1, title: 'beautiful rose', price: 399 },
    { url: 'assets/images/flowers.png', popularity: 2, title: 'beautiful rose', price: 399 },
    { url: 'assets/images/flowers.png', popularity: 1, title: 'beautiful rose', price: 399 },
    { url: 'assets/images/flowers.png', popularity: 1, title: 'beautiful rose', price: 399 },
    { url: 'assets/images/flowers.png', popularity: 1, title: 'beautiful rose', price: 399 },
    { url: 'assets/images/flowers.png', popularity: 3, title: 'beautiful rose', price: 399 },
    { url: 'assets/images/flowers.png', popularity: 2, title: 'beautiful rose', price: 399 },
    { url: 'assets/images/flowers.png', popularity: 2, title: 'beautiful rose', price: 399 },
    { url: 'assets/images/flowers.png', popularity: 1, title: 'beautiful rose', price: 399 },
    { url: 'assets/images/flowers.png', popularity: 2, title: 'beautiful rose', price: 399 },
    { url: 'assets/images/flowers.png', popularity: 1, title: 'beautiful rose', price: 399 },
    { url: 'assets/images/flowers.png', popularity: 1, title: 'beautiful rose', price: 399 },
    { url: 'assets/images/flowers.png', popularity: 1, title: 'beautiful rose', price: 399 },
    { url: 'assets/images/flowers.png', popularity: 3, title: 'beautiful rose', price: 399 },
    { url: 'assets/images/flowers.png', popularity: 2, title: 'beautiful rose', price: 399 },
    { url: 'assets/images/flowers.png', popularity: 2, title: 'beautiful rose', price: 399 },
    { url: 'assets/images/flowers.png', popularity: 1, title: 'beautiful rose', price: 399 },
    { url: 'assets/images/flowers.png', popularity: 2, title: 'beautiful rose', price: 399 },
    { url: 'assets/images/flowers.png', popularity: 1, title: 'beautiful rose', price: 399 },
    { url: 'assets/images/flowers.png', popularity: 1, title: 'beautiful rose', price: 399 },
    { url: 'assets/images/flowers.png', popularity: 1, title: 'beautiful rose', price: 399 },
    { url: 'assets/images/flowers.png', popularity: 3, title: 'beautiful rose', price: 399 },
    { url: 'assets/images/flowers.png', popularity: 2, title: 'beautiful rose', price: 399 },
    { url: 'assets/images/flowers.png', popularity: 2, title: 'beautiful rose', price: 399 },
    { url: 'assets/images/flowers.png', popularity: 1, title: 'beautiful rose', price: 399 },
    { url: 'assets/images/flowers.png', popularity: 2, title: 'beautiful rose', price: 399 },
    { url: 'assets/images/flowers.png', popularity: 1, title: 'beautiful rose', price: 399 },
    { url: 'assets/images/flowers.png', popularity: 1, title: 'beautiful rose', price: 399 },
    { url: 'assets/images/flowers.png', popularity: 1, title: 'beautiful rose', price: 399 },
    { url: 'assets/images/flowers.png', popularity: 3, title: 'beautiful rose', price: 399 },
    { url: 'assets/images/flowers.png', popularity: 2, title: 'beautiful rose', price: 399 },
    { url: 'assets/images/flowers.png', popularity: 2, title: 'beautiful rose', price: 399 },
  ];
  favoritesProducts: any[] = [
    { url: 'assets/images/flowers.png', popularity: 1, title: 'beautiful rose', price: 399 },
    { url: 'assets/images/flowers.png', popularity: 2, title: 'beautiful rose', price: 399 },
    { url: 'assets/images/flowers.png', popularity: 1, title: 'beautiful rose', price: 399 },
    { url: 'assets/images/flowers.png', popularity: 1, title: 'beautiful rose', price: 399 },
    { url: 'assets/images/flowers.png', popularity: 1, title: 'beautiful rose', price: 399 },
    ];

  productsTotal: number;
  constructor() { }

  getProducts() {
    console.log();
    return this.products;
  }

  getFavoritesProducts() {
    console.log();
    return this.favoritesProducts;
  }

  defineSizeOnGrid() {
    const BIG = 3,
          NORMAL = 2,
          SMALL = 1;
    let randomSetNumber,
        previousSetNumber; // to avoid repeating in set

    for (let i = 0; i < this.products.length; i++) {
      switch ( this.products.length - (i + 1) ) {
        case 1: {
          randomSetNumber = this.getRandomNumberOfSet(1, 2);
          break;
        }
        case 0: {
          randomSetNumber = 0;
          break;
        }
        default: {
          do {
            randomSetNumber = this.getRandomNumberOfSet();
          } while (randomSetNumber === previousSetNumber);
          break;
        }
      }

      previousSetNumber = randomSetNumber;

      switch (randomSetNumber) {
        case 0: {
          this.products[i]['size'] = BIG;
          break;
        }
        case 1: {
          this.products[i]['size'] = NORMAL;
          this.products[++i]['size'] = SMALL;
          break;
        }
        case 2: {
          this.products[i]['size'] = SMALL;
          this.products[++i]['size'] = NORMAL;
          break;
        }
        case 3: {
          this.products[i]['size'] = SMALL;
          this.products[++i]['size'] = SMALL;
          this.products[++i]['size'] = SMALL;
          break;
        }
      }

    }
  }

  getRandomNumberOfSet(min= 0, max= 3) {
    // 4 type of set is available : [ {3}, {2,1}, {1,2}, {1,1,1} ]
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


}
