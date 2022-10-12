import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  user: any;
  searchBook: any;
  constructor(
    public authService: AuthService,
    public bookService: BookService
  ) {}

  ngOnInit(): void {}
  get name() {
    this.user = localStorage.getItem('userName');
    // return this.user.firstName;
    return this.user.replace(/['"]+/g, '');
    //return 'hi';
  }
  userId: any;
  get UserId() {
    //this.userId = localStorage.getItem('user.UserId');
    // return this.user.firstName;
    //return this.user.replace(/['"]+/g, '');
    //return 'hi';
    this.userId = localStorage.getItem('UserId');
    console.log('test', this.userId);
    return this.userId;
  }
}
