import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
book:any;
id:any;
userId:any;
  constructor(private bookService:BookService,private activatedRoute:ActivatedRoute,private cartService:CartService) {
    this.id = this.activatedRoute.snapshot.paramMap.get('bookId');
    this.bookService.getBookById(this.id).subscribe((response:any)=>{
      this.book = response;
    })
   }

  ngOnInit(): void {
  }

  get UserId() {
    //this.userId = localStorage.getItem('user.UserId');
    // return this.user.firstName;
    //return this.user.replace(/['"]+/g, '');
    //return 'hi';
    this.userId = localStorage.getItem('UserId');
    console.log('test', this.userId);
    return this.userId;
  }

  onClickHandler(book: any) {
    console.log('book', book);
    this.cartService
      .postCartBook(this.userId, this.book)
      .subscribe((response: any) => {
        console.log('cart', response);
      });
  }

}
