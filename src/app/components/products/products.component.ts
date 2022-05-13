import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/products/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(
    private productsService: ProductsService
  ) { }

  products: Product[] = [];

  ngOnInit(): void {
    this.productsService.getAllProducts().subscribe(data=>{
      this.products = data
    })
  }

}
