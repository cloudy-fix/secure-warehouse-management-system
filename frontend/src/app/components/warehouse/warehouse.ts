import { Component, OnInit } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';

import { WarehouseService }
from '../../services/warehouse';

import { Sidebar }
from '../layout/sidebar/sidebar';

@Component({
  selector: 'app-warehouse',

  standalone: true,

 imports: [
  CommonModule,
  FormsModule,
  Sidebar
],

  templateUrl: './warehouse.html',

  styleUrl: './warehouse.css'
})

export class Warehouse implements OnInit {

  warehouses:any[] = [];

  name = '';

  location = '';

  capacity = '';

  role = '';

  constructor(
    private warehouseService: WarehouseService
  ) {
    this.role =
  localStorage.getItem('role') || '';
  }

  ngOnInit(): void {

    this.loadWarehouses();

  }

  // LOAD WAREHOUSES
  loadWarehouses() {

    this.warehouseService
      .getWarehouses()
      .subscribe((data:any) => {

        this.warehouses = data;

      });

  }

  // ADD WAREHOUSE
  addWarehouse() {

    const warehouse = {

      name: this.name,

      location: this.location,

      capacity: this.capacity

    };

    this.warehouseService
      .addWarehouse(warehouse)
      .subscribe(() => {

        alert('Warehouse Added');

        this.loadWarehouses();

      });

  }

}