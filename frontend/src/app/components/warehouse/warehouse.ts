import { Component, OnInit } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';

import { WarehouseService }
from '../../services/warehouse';

@Component({
  selector: 'app-warehouse',

  standalone: true,

  imports: [FormsModule, CommonModule],

  templateUrl: './warehouse.html',

  styleUrl: './warehouse.css'
})

export class Warehouse implements OnInit {

  warehouses:any[] = [];

  name = '';

  location = '';

  capacity = '';

  constructor(
    private warehouseService: WarehouseService
  ) {}

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