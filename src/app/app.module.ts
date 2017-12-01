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

import {ProductsService} from './shared/products.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './layout/home/home.component';
import { TopBarComponent } from './layout/top-bar/top-bar.component';
import { ContentComponent } from './layout/content/content.component';
import { AuthComponent } from './auth/auth.component';
import { QuickOrderComponent } from './layout/home/quick-order/quick-order.component';
import { WaveEffectComponent } from './common/wave-effect/wave-effect.component';
import { DataInputComponent } from './common/data-input/data-input.component';
import { UserFormInfoComponent } from './layout/home/quick-order/user-form-info/user-form-info.component';
import { ChooseFlowersComponent } from './layout/home/quick-order/choose-flowers/choose-flowers.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopBarComponent,
    ContentComponent,
    AuthComponent,
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
