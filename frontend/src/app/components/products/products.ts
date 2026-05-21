import { Component, OnInit } from '@angular/core';

import { ProductService } from '../../services/product';

import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',

  standalone: true,

  imports: [FormsModule, CommonModule],

  templateUrl: './products.html',

  styleUrl: './products.css'
})

export class Products implements OnInit {

  products:any[] = [];

  name = '';

  category = '';

  price = '';

  quantity = '';

  constructor(
    private productService: ProductService
  ) {}

  ngOnInit(): void {

    this.loadProducts();

  }

  // LOAD PRODUCTS
  loadProducts() {

    this.productService
      .getProducts()
      .subscribe((data:any) => {

        this.products = data;

      });

  }

  // ADD PRODUCT
  addProduct() {

    const product = {

      name: this.name,

      category: this.category,

      price: this.price,

      quantity: this.quantity

    };

    this.productService
      .addProduct(product)
      .subscribe(() => {

        alert('Product Added');

        this.loadProducts();

      });

  }

}