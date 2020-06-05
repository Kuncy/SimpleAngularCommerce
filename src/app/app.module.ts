import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import { AppRoutingModule } from './app-routing/app-routing';
import { RouterModule, Routes } from '@angular/router';

import { ShopReducer } from './store/reducer';
import { ShopEffects } from './store/effects';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule } from  '@angular/material';
import { CartComponent } from './cart/cart.component';
import { ShopComponent } from './shop/shop.component';
import { MatGridListModule } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ProductListComponent,
    ProductComponent,
    CartComponent,
    ShopComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({ shop: ShopReducer }),
    EffectsModule.forRoot([ShopEffects]),
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
    AppRoutingModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
