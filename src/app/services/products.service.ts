import { Injectable } from '@angular/core';
import {Product} from '../models/product.model';

@Injectable()
export class ProductsService {

  products: Product[] = [];

  constructor() { }

  getProducts() {
    return this.products;
  }
}
