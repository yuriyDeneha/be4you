import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {AngularFireDatabase} from 'angularfire2/database';

import {Product} from './models/product.model';

@Injectable()
export class ProductsService {

  flowersPath = '/flowers';
  favoritesPath = '/favorites';

  constructor(private db: AngularFireDatabase) { }

  getProducts(): Observable<Product[]> {
    return this.db.list(this.flowersPath).valueChanges();
  }

  addToProducts(product) {
    return this.db.list(this.flowersPath).push(product);
  }

  getFavoritesProducts(): Observable<Product[]> {
    return this.db.list(this.favoritesPath).valueChanges();
  }

  addToFavoritesProducts(product) {
    return this.db.list(this.favoritesPath).push(product);
  }


}
