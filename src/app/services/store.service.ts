import { Injectable } from '@angular/core';
import { Product } from '../models/products/product.model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor() { }

  ServiceShoppingCart: Product[] = []

  addToShoppingCart(product:Product){
    this.ServiceShoppingCart.push(product);
    product.addedCart = true;
  }
}
