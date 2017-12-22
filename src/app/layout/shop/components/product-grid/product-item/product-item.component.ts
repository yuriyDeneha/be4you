import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../../models/product.model';
import {GridStructureMode} from '../../../../../shared/models/product-grid-structure.type';
import {ProductsService} from '../../../services/products.service';

@Component({
  selector: 'product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.sass']
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;
  @Input() gridStructureMode: GridStructureMode;

  styleType: string;
  toolTipPosition = 'right';
  public message: object = {
    freeDelivery: 'delivey is free, delivey is free, delivey is free, delivey is free, delivey is free, delivey is free,'
  };
  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.styleType = this.configureStyleForProduct();
  }

  configureStyleForProduct() {

    switch (this.gridStructureMode) {
      case GridStructureMode.SameColumn : {
        return 'product-item-same';
      }
      case GridStructureMode.ColorPalette : {
        // return this.getStyleByProductColor(product);
        break;
      }
      case GridStructureMode.VariousSize : {
        enum Position {
          center,
          top,
          bottom,
          right,
          left
        }
        enum Side {
          above,
          facade,
          side
        }

        const randPosition = this.getRandomNumberOfSet(0, 4),
          randSide = this.getRandomNumberOfSet(0, 2);

        return `${Position[randPosition]} ${Side[randSide]}`;
      }
    }

  }

  getRandomNumberOfSet(min= 0, max= 3) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  addToFavoritesProducts(product) {
    this.productsService.addToFavorites(product);
  }
}

