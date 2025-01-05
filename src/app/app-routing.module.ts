import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { TestinomialComponent } from './testinomial/testinomial.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProductCardComponent } from './product-card/product-card.component';

const routes: Routes = [
  { path: '', component: HomeComponent },  // Home page
  { path: 'product', component: ProductComponent },  // About page
  { path: 'testinomial', component: TestinomialComponent }, 
  { path: 'about', component: AboutComponent }, 
  { path: 'product-card', component: ProductCardComponent }, 
  { path: 'contact', component: ContactComponent }, 

  { path: '**', redirectTo: '', pathMatch: 'full' },  // Redirect unknown routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
