import { Injectable } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';


import 'rxjs/add/operator/map';

import {Product} from './models/product.model';
import {FirebaseListObservable} from "angularfire2/database-deprecated";
import {element} from "protractor";

@Injectable()
export class ProductsService {

  flowersPath = '/flowers';
  favoritesPath = '/favorites';

  // favorites: Product[];
  favorites: any;
  products: Product[];

  constructor(private db: AngularFireDatabase) { }

  fetchFavorites() {
    return this.db.list(this.favoritesPath).snapshotChanges();
  }

  addIdsToItems(data) {
    return data.map(element => {
      return {
        ... element.payload.toJSON(),
        $key: element.key
      }});
  }

  getProducts(): FirebaseListObservable<Product[]> {
    return this.db.list(this.flowersPath).valueChanges();
  }

  addToProducts(product) {
    return this.db.list(this.flowersPath).push(product);
  }

  getFavorites(): FirebaseListObservable<Product[]> {
    return this.db.list(this.favoritesPath).valueChanges();
  }

  addToFavorites(product) {
    return this.db.list(this.favoritesPath).push(product);
  }

  removeFromFavorites($key) {
    return this.db.list(`${this.favoritesPath}/`).remove($key);
  }


}
