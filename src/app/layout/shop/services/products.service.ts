import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';

import 'rxjs/add/operator/map';

import {Product} from '../models/product.model';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class ProductsService {

  productsPath = '/flowers';
  favoritesPath = '/favorites';
  colorsPath = '/colors';

  products: Product[];

  favoritesRef: AngularFireList<Product> = this.db.list<Product>(this.favoritesPath);

  productsRef: AngularFireList<Product>  = this.db.list<Product>(this.productsPath);

  colorsRef: AngularFireList<any>  = this.db.list<any>(this.colorsPath);


  constructor(private db: AngularFireDatabase) { }

  getProducts() {
    return this.productsRef.snapshotChanges();
  }

  addToProducts(product, color, price = 1) {
    this.productsRef.push(product)
      .then ( (data) =>
        this.db.list(`${this.colorsPath}/${color}/products`).push(data.key)
      );
  }

  getFavorites() {
    return this.favoritesRef.snapshotChanges(['child_added', 'child_removed']);
  }

  addToFavorites(product) {
    delete product.$key;
    return this.favoritesRef.push(product);
  }

  removeFromFavorites($key) {
    return this.favoritesRef.remove($key);
  }

  addIdsToItems(data): Product[] {
    return data.map(elements => {
      return {
        $key: elements.key,
        ... elements.payload.val()
      };
    });
  }

  checkByQuery(ref, color) {
    console.log(color);
    return color > -1 ? ref.orderByChild('color').equalTo(color) : ref;
  }

  fetchColors() {
    return this.colorsRef.snapshotChanges();
  }

}
