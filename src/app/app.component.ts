import { Component } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { GetItems } from './store/actions';
import { Product } from './product/product.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private store: Store<{ 
    items: Product[]; cart: [] }>) {
    store.pipe(select('shop')).subscribe(data => (this.items = data.items));
    store.pipe(select('shop')).subscribe(data => (this.cart = data.cart));
  }

  items: Product[] = [];
  cart: Product[] = [];
  ngOnInit() {
    this.store.dispatch(new GetItems());
  }
}
