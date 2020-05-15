import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path:'products',
    component: ProductCrudComponent
  },
  {
    path:'product/create',
    component: ProductCreateComponent
  },
  {
    //quando tem os dois pontos, e esperado que passe uma variavel, é a forma de passar paramentro para a rota
    path:'product/update/:id', 
    component: ProductUpdateComponent
  },
  {
    path:'product/delete/:id', 
    component: ProductDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
