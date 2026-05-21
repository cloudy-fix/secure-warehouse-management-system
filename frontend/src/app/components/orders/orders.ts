import { Component, OnInit } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';

import { OrderService }
from '../../services/order';

@Component({
  selector: 'app-orders',

  standalone: true,

  imports: [FormsModule, CommonModule],

  templateUrl: './orders.html',

  styleUrl: './orders.css'
})

export class Orders implements OnInit {

  orders:any[] = [];

  customerName = '';

  productName = '';

  quantity = '';

  status = '';

  constructor(
    private orderService: OrderService
  ) {}

  ngOnInit(): void {

    this.loadOrders();

  }

  // LOAD ORDERS
  loadOrders() {

    this.orderService
      .getOrders()
      .subscribe((data:any) => {

        this.orders = data;

      });

  }

  // ADD ORDER
  addOrder() {

    const order = {

      customerName: this.customerName,

      productName: this.productName,

      quantity: this.quantity,

      status: this.status

    };

    this.orderService
      .addOrder(order)
      .subscribe(() => {

        alert('Order Created');

        this.loadOrders();

      });

  }

}