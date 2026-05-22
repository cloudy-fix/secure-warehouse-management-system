import { Component } from '@angular/core';

import {
  Router,
  RouterLink
} from '@angular/router';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',

  standalone: true,

  imports: [
    RouterLink,
    CommonModule
  ],

  templateUrl: './sidebar.html',

  styleUrl: './sidebar.css'
})

export class Sidebar {

  role = '';

  constructor(
    private router: Router
  ) {

    this.role =
      localStorage.getItem('role') || '';

  }

  logout() {

    localStorage.removeItem('token');

    localStorage.removeItem('role');

    alert('Logged Out');

    this.router.navigate(['/']);

  }

}