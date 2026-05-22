import { Routes } from '@angular/router';

import { Login } from './components/login/login';

import { Register } from './components/register/register';

import { Dashboard } from './components/dashboard/dashboard';

import { Products } from './components/products/products';

import { Warehouse } from './components/warehouse/warehouse';

import { Orders } from './components/orders/orders';

import { Tracking } from './components/tracking/tracking';

import { authGuard }
from './guards/auth-guard';

import { Admin }
from './components/admin/admin';

export const routes: Routes = [

  {
    path: '',
    component: Login
  },

  {
    path: 'register',
    component: Register
  },

  {
    path: 'dashboard',
    component: Dashboard,
    canActivate: [authGuard]
  },
  {
    path: 'products',
    component: Products,
    canActivate: [authGuard]
  },
  {
    path: 'warehouse',
    component: Warehouse,
    canActivate: [authGuard]
  },
  {
    path: 'orders',
    component: Orders,
    canActivate: [authGuard]
  },
  {
    path: 'tracking',
    component: Tracking,
    canActivate: [authGuard]
  },
  {
    path:'admin',
    component: Admin,
    canActivate: [authGuard]
  }

];