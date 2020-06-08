import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AddToCart, RemoveFromCart } from '../store/actions';

export interface Product {
  name: string;
  price: number;
  description: string;
  image: string;
  perfect: string;
}

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  constructor(private store: Store<{ items: []; cart: [] }>) {}

  
  inCart = false;
  @Input() product: Product;

  addToCart(item: Product) {
    this.store.dispatch(new AddToCart(item));
    this.inCart = true;
  }

  removeFromCart(item: Product) {
    this.store.dispatch(new RemoveFromCart(item));
    this.inCart = false;
  }
  ngOnInit() {}
}