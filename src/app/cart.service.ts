import { Component, Input, OnInit, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AddToCart, RemoveFromCart } from './store/actions';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items = [];

constructor() { }

}
