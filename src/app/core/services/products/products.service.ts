import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  rootUrl = 'https://localhost:5001/api/Products';

  getProducts() {
    return this.http.get(this.rootUrl);
  }
}