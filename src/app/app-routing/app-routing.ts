import { ShopComponent } from './../shop/shop.component';
import { HomeComponent } from '../home/home.component';
import { HeaderComponent } from '../header/header.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from '../cart/cart.component';

    const routes: Routes = [
        { path: 'cart', component: CartComponent, },
        { path: '', component: HeaderComponent },
        { path: 'shop', component: ShopComponent},
    ];

    NgModule({
        imports: [
            RouterModule.forRoot(routes)
        ],
        exports: [
            
        ],
        declarations: [RouterModule]
    })
    export const AppRoutingModule = RouterModule.forRoot(routes);