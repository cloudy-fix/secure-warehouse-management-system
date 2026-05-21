import { Component } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { Router } from '@angular/router';

import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-login',

  standalone: true,

  imports: [FormsModule],

  templateUrl: './login.html',

  styleUrl: './login.css'
})

export class Login {

  email = '';

  password = '';

  constructor(

    private authService: AuthService,

    private router: Router

  ) {}

  login() {

    const user = {

      email: this.email,

      password: this.password

    };

    this.authService.login(user)
      .subscribe((response:any) => {

        if(response) {

          // STORE USER

          localStorage.setItem(
            'user',
            JSON.stringify(response)
          );

          alert('Login Successful');

          // NAVIGATE DASHBOARD

          this.router.navigate(['/dashboard']);

        } else {

          alert('Invalid Credentials');

        }

      });

  }

}