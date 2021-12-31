import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { ProductsComponent } from './component/updateSeller/products.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AddSellerComponent } from './component/add-seller/add-seller.component';
@NgModule({
  declarations: [
    AppComponent,
    // ProductsComponent,
    AddSellerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    // RouterModule.forRoot([
    //   {
    //     path : 'addSeller',
    //     component : AddSellerComponent,
    //   }
    // ]

    // )
  ],
  providers: [AddSellerComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
