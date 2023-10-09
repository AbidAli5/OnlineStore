import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ContactUSComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  { path: 'products', component: ProductsListComponent },
  {path:'Contact Us', component:ContactUSComponent},
  {path:'About Us', component:AboutUsComponent},
  {path:'Shop/:id',component:ShopComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
