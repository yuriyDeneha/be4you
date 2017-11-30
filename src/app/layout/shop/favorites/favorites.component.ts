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


  favoritesItems$: Observable<Product[]>;

  constructor(private productsService: ProductsService) {
  }

  ngOnInit() {
    this.favoritesItems$ = this.productsService.getFavoritesProducts();
  }
}
