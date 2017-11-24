import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../../services/products.service';
import {Product} from '../../models/product.model';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.sass']
})
export class ShopComponent implements OnInit {

  products: Product[] = [];
  selectedColors: object[] = [];
  favorites = {
    open: true
  };

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.products = this.productsService.getProducts();
    this.productsService.defineSizeOnGrid();
  }

  searchByColor() {
    console.log('searchByColor', this.selectedColors);
    this.productsService.getProducts();
  }

  toggleFavoriteState() {
    this.favorites.open = !this.favorites.open;
  }
}
