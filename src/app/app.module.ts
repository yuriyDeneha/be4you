import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import {environment} from '../environments/environment';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { Ng4GeoautocompleteModule } from 'ng4-geoautocomplete';

//Material design modules
import {MatButtonModule, MatInputModule, MatTooltipModule} from '@angular/material';

import {ProductsService} from './layout/shop/services/products.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './layout/home/home.component';
import { TopBarComponent } from './layout/top-bar/top-bar.component';
import { QuickOrderComponent } from './layout/home/quick-order/quick-order.component';
import { WaveEffectComponent } from './shared/components/wave-effect/wave-effect.component';
import { DataInputComponent } from './shared/components/data-input/data-input.component';
import { UserFormInfoComponent } from './layout/home/quick-order/user-form-info/user-form-info.component';
import { ChooseFlowersComponent } from './layout/home/quick-order/choose-flowers/choose-flowers.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopBarComponent,
    QuickOrderComponent,
    WaveEffectComponent,
    DataInputComponent,
    UserFormInfoComponent,
    ChooseFlowersComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,

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
  providers: [ ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
