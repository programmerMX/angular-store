import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/products/product.model';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(
    private storeService:StoreService
  ) {
    this.shoopingCart = this.storeService.ServiceShoppingCart
  }

  ngOnInit(): void {
  }

  @Input() product:Product={
    id: '',
    title: '',
    description: '',
    image: '',
    category: '',
    price: 0,
    addedCart: false
  }

  imgURL = this.product.image;

  shoopingCart:Product[] = []

  addCart(product:Product){
    this.storeService.addToShoppingCart(product);
    console.log(product);

  }

}
