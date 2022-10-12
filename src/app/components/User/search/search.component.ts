import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  title: any = null;
  cat: any = null;
  isbn: any = null;
  author: any = null;
  categories: any[] = [];
  books: any[] = [];
  books_title: any[] = [];
  books_auth: any[] = [];
  books_isbn: any[] = [];
  books_cat: any[] = [];
 
  bestbooks: any[] = [];
  imageurl = '../../../../assets/images/';

  constructor(
    private categoryService: CategoryService,
    private bookservice: BookService
  ) {
    

    this.categoryService.getCategory().subscribe((response: any) => {
      this.categories = response;
    });
  }

  ngOnInit(): void {}

  Search() {
    if (this.title != null) {
      this.bookservice.getBookByTitle(this.title).subscribe((data: any) => {
        this.books_title = data;
      });
    }
    if (this.cat != null) {
      this.bookservice.getBookByCategory(this.cat).subscribe((data: any) => {
        this.books_cat = data;
      });
    }
    if (this.isbn != null) {
      this.bookservice.getBookByISBN(this.isbn).subscribe((data: any) => {
        this.books_isbn = data;
        
      });
    }
    if (this.author != null) {
      this.bookservice.getBookByAuthor(this.author).subscribe((data: any) => {
        this.books_auth = data;
      });
    }

     this.books = (this.books_auth.concat(this.books_cat)).concat(this.books_isbn.concat(this.books_title));
  }

  @ViewChild('widgetsContent', { read: ElementRef })
  public widgetsContent!: ElementRef<any>;
  public scrollRight(): void {
    this.widgetsContent.nativeElement.scrollTo({
      left: this.widgetsContent.nativeElement.scrollLeft + 150,
      behavior: 'smooth',
    });
  }

  public scrollLeft(): void {
    this.widgetsContent.nativeElement.scrollTo({
      left: this.widgetsContent.nativeElement.scrollLeft - 150,
      behavior: 'smooth',
    });
  }
}
