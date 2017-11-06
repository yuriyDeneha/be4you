import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {environment} from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { Ng4GeoautocompleteModule } from 'ng4-geoautocomplete';

//Material design modules
import { MatButtonModule } from '@angular/material';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { ContentComponent } from './components/content/content.component';
import { ShopComponent } from './components/shop/shop.component';
import { AuthComponent } from './components/auth/auth.component';
import { QuickOrderComponent } from './components/home/quick-order/quick-order.component';
import { WaveEffectComponent } from './components/common/wave-effect/wave-effect.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopBarComponent,
    ContentComponent,
    ShopComponent,
    AuthComponent,
    QuickOrderComponent,
    WaveEffectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    Ng4GeoautocompleteModule.forRoot(),
    // material elements
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
