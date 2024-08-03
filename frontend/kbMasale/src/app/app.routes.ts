import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { AddProductsComponent } from './add-products/add-products.component';

export const routes: Routes = [
    {path:'' , component:HomeComponent},

    {path:'products', component:ProductsComponent},

    {path:'about' , component:AboutComponent},

    {path:'contactUs', component:ContactUsComponent},

    {path:'signUp' , component:SignUpComponent},

    {path:'login' , component:LoginComponent},

    {path:'add-products' , component:AddProductsComponent},

    {path:'**' , component:PageNotFoundComponent},
];
