import { Component, OnInit } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';

import { TrackingService }
from '../../services/tracking';

@Component({
  selector: 'app-tracking',

  standalone: true,

  imports: [FormsModule, CommonModule],

  templateUrl: './tracking.html',

  styleUrl: './tracking.css'
})

export class Tracking implements OnInit {

  shipments:any[] = [];

  trackingNumber = '';

  orderName = '';

  currentLocation = '';

  deliveryStatus = '';

  constructor(
    private trackingService: TrackingService
  ) {}

  ngOnInit(): void {

    this.loadShipments();

  }

  // LOAD SHIPMENTS
  loadShipments() {

    this.trackingService
      .getShipments()
      .subscribe((data:any) => {

        this.shipments = data;

      });

  }

  // ADD SHIPMENT
  addShipment() {

    const shipment = {

      trackingNumber: this.trackingNumber,

      orderName: this.orderName,

      currentLocation: this.currentLocation,

      deliveryStatus: this.deliveryStatus

    };

    this.trackingService
      .addShipment(shipment)
      .subscribe(() => {

        alert('Shipment Added');

        this.loadShipments();

      });

  }

}