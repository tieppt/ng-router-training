import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductComponent } from './product.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { AuthGuard } from '../auth.guard';
import { CheckEditGuard } from '../check-edit.guard';

const productRoutes: Routes = [
  {
    path: 'product',
    component: ProductComponent,
    children: [
      {
        path: '',
        component: ProductListComponent
      },
      {
        path: ':id',
        canActivate: [AuthGuard],
        children: [
          {
            path: '',
            component: ProductDetailComponent,
          },
          {
            path: 'edit',
            component: ProductEditComponent,
            canDeactivate: [CheckEditGuard]
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(productRoutes)
  ],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
