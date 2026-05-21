import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class TrackingService {

  private apiUrl =
    'http://localhost:8081/api/shipments';

  constructor(private http: HttpClient) { }

  // GET SHIPMENTS
  getShipments() {

    return this.http.get(this.apiUrl);

  }

  // ADD SHIPMENT
  addShipment(shipment:any) {

    return this.http.post(
      this.apiUrl,
      shipment
    );

  }

}