import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/Product';
import { ProductsService } from '../../services/products/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: any;

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productsService.getProducts()
      .subscribe(response => {
        this.products = response;
      });
  }
}
