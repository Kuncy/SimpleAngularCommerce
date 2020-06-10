import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../product/product.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  constructor(private router: Router) {}

  @Input() fruits: Product[] = [];

  ngOnInit() {}

  clickFruit(fruit: Product): void {
    this.router.navigate(['/shopy', fruit.id]);
    console.log(fruit);
  }
}
