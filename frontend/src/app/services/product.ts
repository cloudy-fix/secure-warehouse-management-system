import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  private apiUrl =
    'http://localhost:8081/api/products';

  constructor(private http: HttpClient) { }

  // GET PRODUCTS
  getProducts() {

    return this.http.get(this.apiUrl);

  }

  // ADD PRODUCT
  addProduct(product:any) {

    return this.http.post(
      this.apiUrl,
      product
    );

  }

}