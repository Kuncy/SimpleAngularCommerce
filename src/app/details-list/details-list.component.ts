import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../product/product.component';

@Component({
  selector: 'app-details-list',
  templateUrl: './details-list.component.html',
  styleUrls: ['./details-list.component.scss']
})
export class DetailsListComponent implements OnInit {

  constructor() { }

  @Input() fruits: Product[] = [];

  ngOnInit() {
  }

}
