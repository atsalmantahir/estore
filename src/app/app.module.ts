import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './core/components/products/products.component';
import { UsersComponent } from './core/components/users/users.component';
import { AddProductComponent } from './core/components/products/add-product/add-product.component';
import { NotfoundComponent } from './core/components/notfound/notfound.component';
import { ProductDetailsComponent } from './core/components/products/product-details/product-details.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    NotfoundComponent,
    ProductsComponent,
    AddProductComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
