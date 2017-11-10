import { BrowserModule } from '@angular/platform-browser';
import {environment} from '../environments/environment';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpModule} from '@angular/http';


import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { Ng4GeoautocompleteModule } from 'ng4-geoautocomplete';

//Material design modules
import {MatButtonModule, MatInputModule} from '@angular/material';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { ContentComponent } from './components/content/content.component';
import { ShopComponent } from './components/shop/shop.component';
import { AuthComponent } from './components/auth/auth.component';
import { QuickOrderComponent } from './components/home/quick-order/quick-order.component';
import { WaveEffectComponent } from './common/wave-effect/wave-effect.component';
import { DataInputComponent } from './common/data-input/data-input.component';
import { UserFormInfoComponent } from './components/home/quick-order/user-form-info/user-form-info.component';
import { ChooseFlowersComponent } from './components/home/quick-order/choose-flowers/choose-flowers.component';
import { CatalogComponent } from './components/shop/catalog/catalog.component';
import { FavouritesComponent } from './components/shop/favourites/favourites.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopBarComponent,
    ContentComponent,
    ShopComponent,
    AuthComponent,
    QuickOrderComponent,
    WaveEffectComponent,
    DataInputComponent,
    UserFormInfoComponent,
    ChooseFlowersComponent,
    CatalogComponent,
    FavouritesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    Ng4GeoautocompleteModule.forRoot(),
    // material elements
    MatButtonModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
