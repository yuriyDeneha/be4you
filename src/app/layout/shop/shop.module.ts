import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';

import {ProductGridComponent} from './product-grid/product-grid.component';
import {ProductFilterComponent} from './product-grid/product-filter/product-filter.component';
import {ProductItemComponent} from './product-grid/product-item/product-item.component';
import {FavoriteItemComponent} from './favorites/favorite-item/favorite-item.component';
import {FavoritesComponent} from './favorites/favorites.component';
import {CatalogComponent} from './catalog/catalog.component';
import {SelectGridStructureComponent} from './product-grid/select-grid-structure/select-grid-structure.component';
import {ShopComponent} from './shop.component';

import {MatTooltipModule} from '@angular/material';
import {ColorPalleteComponent} from './product-grid/color-pallete/color-pallete.component';
import {AngularFirestoreModule} from "angularfire2/firestore";

@NgModule({
  imports: [
    CommonModule,
    MatTooltipModule,
    ShopRoutingModule,
  ],
  declarations: [
    ShopComponent,
    CatalogComponent,
    ProductGridComponent,
    ProductItemComponent,
    ProductFilterComponent,
    FavoriteItemComponent,
    FavoritesComponent,
    ColorPalleteComponent,
    SelectGridStructureComponent,
  ]
})
export class ShopModule { }
