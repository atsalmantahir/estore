import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './core/components/notfound/notfound.component';
import { AddProductComponent } from './core/components/products/add-product/add-product.component';
import { ProductDetailsComponent } from './core/components/products/product-details/product-details.component';
import { ProductsComponent } from './core/components/products/products.component';
import { UsersComponent } from './core/components/users/users.component';

const routes: Routes = [  
  { path:'products', 
    component: ProductsComponent,
    children :[
      { path: 'add', component: AddProductComponent },
      { path: 'details/:id', component: ProductDetailsComponent },
    ], 
  },
  { path:'add', component:AddProductComponent },
  { path:'users', component:UsersComponent },
  { path:'**', component:NotfoundComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
