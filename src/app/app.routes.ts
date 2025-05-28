import { Routes } from '@angular/router';
import { ProductItemComponent } from './products/product-item/product-item.component';

export const routes: Routes = [
  { path: '', component: ProductItemComponent },
  { path: 'products/:id', component: ProductItemComponent },
  { path: '**', redirectTo: '' },
];
