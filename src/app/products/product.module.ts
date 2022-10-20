import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import ProductListComponent from './product-list.component';
import ProductDetailsComponent from './product-details.component';
import ProductDetailGuard from './product-detail.guard';
import SharedModule from '../shared/shared.module';

@NgModule({
  declarations: [ProductListComponent, ProductDetailsComponent],
  imports: [
    RouterModule,
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent },
      {
        path: 'product/:id',
        canActivate: [ProductDetailGuard],
        component: ProductDetailsComponent,
      },
    ]),
    SharedModule,
  ],
})
export default class ProductModule {}
