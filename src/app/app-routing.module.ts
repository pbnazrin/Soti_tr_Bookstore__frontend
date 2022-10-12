import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './pages/admin-home/admin-home.component';
import { AuthGuard } from './guard/auth.guard';
import { AuthadminGuard } from './guard/authadmin.guard';
import { BookDetailsComponent } from './pages/book-details/book-details.component';
import { BooksPageComponent } from './pages/books-page/books-page.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'adminHome', component: AdminHomeComponent,canActivate:[AuthadminGuard] },
  {
    path: 'books/:catId',
    component: BooksPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'books/details/:bookId',
    component: BookDetailsComponent,
    canActivate: [AuthGuard],
  },
  { path: 'cart/:UserId', component: CartPageComponent, canActivate: [AuthGuard] },
  {
    path: 'contact',
    component: ContactPageComponent,
    canActivate: [AuthGuard],
  },
 
  { path: 'register', component: RegisterPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: '**', component: ErrorPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
