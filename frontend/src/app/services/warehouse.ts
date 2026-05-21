import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class WarehouseService {

  private apiUrl =
    'http://localhost:8081/api/warehouses';

  constructor(private http: HttpClient) { }

  // GET WAREHOUSES
  getWarehouses() {

    return this.http.get(this.apiUrl);

  }

  // ADD WAREHOUSE
  addWarehouse(warehouse:any) {

    return this.http.post(
      this.apiUrl,
      warehouse
    );

  }

}