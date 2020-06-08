import { Component, OnInit, Input } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { GetItems } from '../store/actions';
import { Product } from '../product/product.component';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  constructor(private store: Store<{ 
    items: Product[]; cart: [] }>) {
    store.pipe(select('shop')).subscribe(data => (this.items = data.items));
    store.pipe(select('shop')).subscribe(data => (this.cart = data.cart));
  }
  @Input() fruits: Product[] = [];
  items: Product[] = [];
  cart: Product[] = [];
  ngOnInit() {
    this.store.dispatch(new GetItems());
  }
}