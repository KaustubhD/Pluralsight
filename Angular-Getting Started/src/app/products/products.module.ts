import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { AddSpaces } from '../shared/addSpaces.pipe';
import { ProductDetailGuard } from './product-detail.guard';
import { StarComponent } from '../shared/star.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent },
      {
        path: 'products/:id',
        canActivate: [ProductDetailGuard],
        component: ProductDetailComponent
      },
    ]),
    // CommonModule,
    // FormsModule,
    SharedModule,
    // SharedModule
  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
  ]
})
export class ProductModule { }