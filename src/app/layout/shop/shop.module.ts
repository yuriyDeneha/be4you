import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';

import {ProductGridComponent} from './components/product-grid/product-grid.component';
import {ProductFilterComponent} from './components/product-grid/product-filter/product-filter.component';
import {ProductItemComponent} from './components/product-grid/product-item/product-item.component';
import {FavoriteItemComponent} from './components/favorites/favorite-item/favorite-item.component';
import {FavoritesComponent} from './components/favorites/favorites.component';
import {SelectGridStructureComponent} from './components/product-grid/select-grid-structure/select-grid-structure.component';
import {ShopComponent} from './shop.component';

import {MatTooltipModule} from '@angular/material';
import {ColorPalleteComponent} from './components/product-grid/color-pallete/color-pallete.component';

@NgModule({
  imports: [
    CommonModule,
    MatTooltipModule,
    ShopRoutingModule,
  ],
  declarations: [
    ShopComponent,
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
