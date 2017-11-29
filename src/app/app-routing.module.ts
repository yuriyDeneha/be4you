import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './components/home/home.component';
import {AuthComponent} from './components/auth/auth.component';
import {UserFormInfoComponent} from './components/home/quick-order/user-form-info/user-form-info.component';
import {ChooseFlowersComponent} from './components/home/quick-order/choose-flowers/choose-flowers.component';

const routes: Routes = [
  { path: '', redirectTo: '/shop', pathMatch: 'full' },
  { path: 'shop', loadChildren: './components/shop/shop.module#ShopModule' },
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
