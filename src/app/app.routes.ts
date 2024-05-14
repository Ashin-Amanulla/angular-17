import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProductsComponent } from './pages/products/products.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { SingleComponent } from './pages/single/single.component';

export const routes: Routes = [

    { path: '', component: HomeComponent },
    {path:'contact', component: ContactComponent},
    {path:'products', component: ProductsComponent},
    {path:'products/:id', component: SingleComponent},

    {path:'**', component: NotfoundComponent}

];
