import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { AdminHomeComponent } from './pages/admin-home/admin-home.component';
import { NavbarComponent } from './components/User/navbar/navbar.component';
import { HeaderComponent } from './components/User/header/header.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CategoryComponent } from './components/User/category/category.component';
import { SearchComponent } from './components/User/search/search.component';

import { BestbooksComponent } from './components/User/bestbooks/bestbooks.component';
import { BooksComponent } from './components/User/books/books.component';
import { BooksPageComponent } from './pages/books-page/books-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { BookDetailsComponent } from './pages/book-details/book-details.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { AdminNavbarComponent } from './components/Admin/admin-navbar/admin-navbar.component';

@NgModule({
  declarations: [
    AppComponent,

    AdminHomeComponent,
    NavbarComponent,
    HeaderComponent,
    HomePageComponent,
    ContactPageComponent,
    CategoryComponent,
    SearchComponent,

    BestbooksComponent,
    BooksComponent,
    BooksPageComponent,
    LoginPageComponent,
    RegisterPageComponent,
    ErrorPageComponent,
    BookDetailsComponent,
    CartPageComponent,
    AdminNavbarComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
