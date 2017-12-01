import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';

import 'rxjs/add/operator/map';

import {Product} from './models/product.model';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class ProductsService {

  productsPath = '/flowers';
  favoritesPath = '/favorites';

  selectedColors$ = new Subject<number>();

  favoritesRef: AngularFireList<Product> = this.db.list<Product>(this.favoritesPath);

  productsRef: AngularFireList<Product>  = this.db.list<Product>(this.productsPath);


  constructor(private db: AngularFireDatabase) { }

  getProducts() {
    return this.selectedColors$.switchMap(color =>
      this.db.list(this.productsPath, ref => this.checkByQuery(ref, color)
      ).snapshotChanges()
    );
  }

  addToProducts(product) {
    return this.productsRef.push(product);
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

  seedFireDatabase() {
    this.favoritesRef.snapshotChanges().subscribe(items => {
      this.addIdsToItems(items).forEach( item => {
        console.log('int');
        delete item.$key;
        item['color'] = 1;
        this.productsRef.push({...item})
          .then ( result => console.log(result));
      });
    });
  }

}
