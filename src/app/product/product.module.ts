import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ProductComponent,
    ProductEditComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ProductRoutingModule,
    SharedModule
  ]
})
export class ProductModule { }
