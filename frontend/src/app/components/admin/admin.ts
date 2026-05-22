import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';

import { Sidebar }
from '../layout/sidebar/sidebar';

@Component({
  selector: 'app-admin',

  standalone: true,

  imports: [
    CommonModule,
    Sidebar
  ],

  templateUrl: './admin.html',

  styleUrl: './admin.css'
})

export class Admin {

}