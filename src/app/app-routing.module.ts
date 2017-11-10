import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './components/home/home.component';
import {ShopComponent} from './components/shop/shop.component';
import {AuthComponent} from './components/auth/auth.component';
import {UserFormInfoComponent} from './components/home/quick-order/user-form-info/user-form-info.component';
import {ChooseFlowersComponent} from './components/home/quick-order/choose-flowers/choose-flowers.component';
import {CatalogComponent} from './components/shop/catalog/catalog.component';
import {FavouritesComponent} from './components/shop/favourites/favourites.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, children: [
    { path: 'choose', component: ChooseFlowersComponent },
    { path: 'fill', component: UserFormInfoComponent },
  ]},
  { path: 'auth', component: AuthComponent },
  { path: 'shop', component: ShopComponent, children: [
    { path: 'catalog', component: CatalogComponent },
    { path: 'favourites', component: FavouritesComponent },
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
