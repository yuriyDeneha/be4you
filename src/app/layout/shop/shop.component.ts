import { Component, OnInit } from '@angular/core';
import {ProductsService} from './services/products.service';
import {Product} from './models/product.model';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.sass']
})
export class ShopComponent implements OnInit {

  products: Product[] = [];
  selectedColors: number[] = [];
  favorites = {
    open: true
  };

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    // this.productsService.seedFireDatabase();


    this.productsService.getProducts()
      .subscribe(items => {

          this.products = this.productsService.addIdsToItems(items);
          console.log(this.products);
        }
      );
  }

  searchByColor() {
    // this.productsService.selectedColors$.next(this.selectedColors[this.selectedColors.length - 1]);
  }

  toggleFavoriteState() {
    // this.favorites.open = !this.favorites.open;
  }


}
