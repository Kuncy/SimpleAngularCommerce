import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { GetItems } from '../store/actions';
import { Product } from '../product/product.component';

@Component({
  selector: 'app-shopy',
  templateUrl: './shopy.component.html',
  styleUrls: ['./shopy.component.scss']
})
export class ShopyComponent implements OnInit {

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
