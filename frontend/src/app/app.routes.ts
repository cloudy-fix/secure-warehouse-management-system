import { Routes } from '@angular/router';

import { Login } from './components/login/login';

import { Dashboard } from './components/dashboard/dashboard';

import { Products } from './components/products/products';

import { Warehouse } from './components/warehouse/warehouse';

import { Orders } from './components/orders/orders';

import { Tracking } from './components/tracking/tracking';

import { authGuard }
from './guards/auth-guard';

export const routes: Routes = [

  {
    path: '',
    component: Login
  },

  {
    path: 'dashboard',
    component: Dashboard
  },
  {
  path: 'products',
  component: Products
},
{
  path: 'warehouse',
  component: Warehouse
},
{
  path: 'orders',
  component: Orders
},
{
  path: 'tracking',
  component: Tracking
}

];