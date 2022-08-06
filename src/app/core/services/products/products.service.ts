import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private api: HttpClient) { }

  rootUrl = 'https://localhost:5001/api/Products';

  getProducts() {
    return this.api.get(this.rootUrl);
  }
}