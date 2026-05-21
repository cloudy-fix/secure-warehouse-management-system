import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class OrderService {

  private apiUrl =
    'http://localhost:8081/api/orders';

  constructor(private http: HttpClient) { }

  // GET ORDERS
  getOrders() {

    return this.http.get(this.apiUrl);

  }

  // ADD ORDER
  addOrder(order:any) {

    return this.http.post(
      this.apiUrl,
      order
    );

  }

}