import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ContactUSComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  { path: 'products', component: ProductsListComponent },
  {path:'ContactUs', component:ContactUSComponent},
  {path:'AboutUs', component:AboutUsComponent},
  {path:'Shop/:id',component:ShopComponent},
  {path:'cart',component:CartComponent},
  {path: '**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
