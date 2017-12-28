import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './layout/home/home.component';
import {AuthComponent} from './auth/auth.component';
import {UserFormInfoComponent} from './layout/home/quick-order/user-form-info/user-form-info.component';
import {ChooseFlowersComponent} from './layout/home/quick-order/choose-flowers/choose-flowers.component';

const routes: Routes = [
  { path: '', redirectTo: '/shop', pathMatch: 'full' },
  { path: 'shop', loadChildren: './layout/shop/shop.module#ShopModule' },
  { path: 'home', component: HomeComponent, children: [
    { path: '', redirectTo: 'choose', pathMatch: 'full' },
    { path: 'choose', component: ChooseFlowersComponent },
    { path: 'fill', component: UserFormInfoComponent },
  ]},
  { path: 'auth', component: AuthComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
