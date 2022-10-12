import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit {
  books: any[] = [];

  catId: any;

  constructor(
    private bookService: BookService,
    private activatedRoute: ActivatedRoute
  ) {
    //get catId from url and pass it to api query(line17)
    this.catId = this.activatedRoute.snapshot.paramMap.get('catId');
    this.bookService.getBooksByCatId(this.catId).subscribe((response: any) => {
      this.books = response;
    });
  }

  ngOnInit(): void {}
}