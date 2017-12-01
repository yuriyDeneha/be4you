import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../../shared/models/product.model';
import {GridStructureMode} from '../../../shared/models/product-grid-structure.type';
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.sass']
})
export class ProductGridComponent implements OnInit {

  @Input() products: Product[];

  gridStructureMode: GridStructureMode = GridStructureMode.SameColumn;

  constructor() { }

  ngOnInit() {
  }


  getProductItemStyle(product) {
    switch (this.gridStructureMode) {
      case GridStructureMode.SameColumn : {
        return 'product-item-same';
      }
      case GridStructureMode.ColorPalette : {
        return this.getStyleByProductColor(product);
      }
      case GridStructureMode.VariousSize : {
        return this.getStyleByProductPopularity(product);
      }
    }
    return 'product-item';
  }

  getStyleByProductColor(product) {
    return 'product-palette';
  }

  getStyleByProductPopularity(product) {
    return `product-item size-${product.size}`;
  }
}
