import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../../services/products.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.sass']
})
export class ShopComponent implements OnInit {

  products: Product = [];
  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    products = this.productsService.getProducts();
  }

}
