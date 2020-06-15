import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { GetItems } from '../store/actions';
import { Product } from '../product/product.component';
import { ActivatedRoute } from '@angular/router';
import { FruitsService } from '../fruits.service';
import { AddToCart, RemoveFromCart } from '../store/actions';

@Component({
  selector: 'app-shopy',
  templateUrl: './shopy.component.html',
  styleUrls: ['./shopy.component.scss']
})
export class ShopyComponent implements OnInit {

  constructor(private route: ActivatedRoute, private fruitService: FruitsService, private store: Store<{ 
    items: Product[]; cart: [] }>) {
    store.pipe(select('shop')).subscribe(data => (this.items = data.items));
    store.pipe(select('shop')).subscribe(data => (this.cart = data.cart));
    
  }
  
  items: Product[] = [];
  cart: Product[] = [];
  private productID: string = '';
  product: Product;
  inCart: true;
  

  
  async ngOnInit(): Promise<any> {
  this.productID =  this.route.snapshot.paramMap.get('id');
  await this.fruitService.getAll().toPromise();
  this.fruitService.getAll().subscribe((data: any[]) =>
    {
      
      const actualData: any =  data.find((element: any) => element.id === this.productID);
      this.product = {
        id: actualData.id,
        name: actualData.name,
        price: actualData.price,
        description: actualData.description,
        image: actualData.image,
        perfect: actualData.perfect,
        sizeS: actualData.sizeS,
        sizeM: actualData.sizeM,
        sizeL: actualData.sizeL,
        sizeXL: actualData.sizeXL,
      };
    });
  }
}
