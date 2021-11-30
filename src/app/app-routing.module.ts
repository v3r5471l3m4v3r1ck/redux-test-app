import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CartComponent } from './components/cart/cart.component';
import { ItemsComponent } from './components/items/items.component';

const routes: Routes = [
  { path: 'items', component: ItemsComponent, },
  { path: 'cart', component: CartComponent, },
  { path: '', redirectTo: 'items', pathMatch: 'prefix', },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
