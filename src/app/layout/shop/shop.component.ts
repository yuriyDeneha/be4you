import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../../shared/products.service';
import {Product} from '../../shared/models/product.model';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.sass']
})
export class ShopComponent implements OnInit {

  products$: Observable<Product[]>;
  selectedColors: object[] = [];
  favorites = {
    open: true
  };

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.products$ = this.productsService.getProducts();
  }

  searchByColor() {
    console.log('searchByColor', this.selectedColors);
  }

  toggleFavoriteState() {
    // this.favorites.open = !this.favorites.open;
  }
}
