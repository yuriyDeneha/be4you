import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './components/home/home.component';
import {ShopComponent} from './components/shop/shop.component';
import {AuthComponent} from './components/auth/auth.component';
import {UserFormInfoComponent} from './components/home/quick-order/user-form-info/user-form-info.component';
import {ChooseFlowersComponent} from './components/home/quick-order/choose-flowers/choose-flowers.component';
import {CatalogComponent} from './components/shop/catalog/catalog.component';

const routes: Routes = [
  { path: '', redirectTo: '/home/choose', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, children: [
    { path: '', redirectTo: 'choose', pathMatch: 'full' },
    { path: 'choose', component: ChooseFlowersComponent },
    { path: 'fill', component: UserFormInfoComponent },
  ]},
  { path: 'auth', component: AuthComponent },
  { path: 'shop', component: ShopComponent, children: [
    { path: '', redirectTo: 'catalog', pathMatch: 'full' },
    { path: 'catalog', component: CatalogComponent },
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
