import { Component, OnInit } from '@angular/core';
import {Product} from '../../../shared/models/product.model';
import {ProductsService} from '../../../shared/products.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.sass']
})
export class FavoritesComponent implements OnInit {


  favorites: Product[];

  constructor(private productsService: ProductsService) {
  }

  ngOnInit() {
    this.productsService.fetchFavorites()
      .subscribe(items =>
        this.favorites = this.productsService.addIdsToItems(items)
      );
  }

  removeItemFromFavorites($key) {
    this.productsService.removeFromFavorites($key);
  }
}
