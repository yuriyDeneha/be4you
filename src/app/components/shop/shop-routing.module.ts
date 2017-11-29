import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ShopComponent} from './shop.component';
import {CatalogComponent} from './catalog/catalog.component';

const routes: Routes = [
  { path: '',
    component: ShopComponent
  },
  // { path: 'catalog', component: CatalogComponent },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule {}
