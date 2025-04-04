import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from './guards/auth.guard';
import { booksAuthGuard } from './guards/books-auth.guard';

export const routes: Routes = [
    {path:'home', component:HomeComponent},
    {path:'about', component:AboutUsComponent},
    {path:'contact', component:ContactUsComponent, canActivate:[authGuard]},
    {path:'login', component:LoginComponent},
    {path:'kids', loadComponent:()=>import('./kids/kids.component').then(x => x.KidsComponent) },
    {path:'books', loadChildren:()=>import('./books/books.routes').then(x => x.booksRoutes), canMatch:[booksAuthGuard] },
    {path:'**', component:NotFoundComponent},
];
