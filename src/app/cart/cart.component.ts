import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { GetItems } from '../store/actions';
import { Product } from '../product/product.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private store: Store<{
    items: []; cart: [] }>) 
  {
    store.pipe(select('shop')).subscribe(data => (this.items = data.items));
    store.pipe(select('shop')).subscribe(data => (this.cart = data.cart));
  }

  items: Product[] = [];
  cart: Product[] = [];

  ngOnInit() {}
}

