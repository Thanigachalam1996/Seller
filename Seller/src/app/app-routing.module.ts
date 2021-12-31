import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddSellerComponent } from './component/add-seller/add-seller.component';
//import { ProductsComponent } from './component/updateSeller/products.component';

const routes: Routes = [
  {
    component: AddSellerComponent,
    path: 'seller'
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
