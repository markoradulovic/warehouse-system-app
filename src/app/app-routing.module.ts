import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './shared/ui/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'product',
    loadComponent: () =>
      import('./product/product-form.component').then(
        (comp) => comp.ProductFormComponent
      ),
    data: { isNew: true },
  },
  {
    path: 'product/:id',
    loadComponent: () =>
      import('./product/product-form.component').then(
        (comp) => comp.ProductFormComponent
      ),
    data: { isNew: false },
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
