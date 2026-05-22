import { Component, OnInit } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';

import { TrackingService }
from '../../services/tracking';

import { Sidebar }
from '../layout/sidebar/sidebar';

@Component({
  selector: 'app-tracking',

  standalone: true,

  imports: [
  CommonModule,
  FormsModule,
  Sidebar
],

  templateUrl: './tracking.html',

  styleUrl: './tracking.css'
})

export class Tracking implements OnInit {

  shipments:any[] = [];

  trackingNumber = '';

  orderName = '';

  currentLocation = '';

  deliveryStatus = '';

  destination = '';

  role = '';

  constructor(
    private trackingService: TrackingService
  ) {
    this.role =
  localStorage.getItem('role') || '';
  }

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