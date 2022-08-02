import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './core/components/products/products.component';
import { UsersComponent } from './core/components/users/users.component';

const routes: Routes = [
  { path:'products', component: ProductsComponent },
  { path:'users', component:UsersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
