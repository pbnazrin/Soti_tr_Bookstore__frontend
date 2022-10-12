import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class BookService {
  BASE_URL = 'http://localhost:50073/api/book';
  constructor(private http: HttpClient) {}

  getBestBooks(): Observable<any> {
    return this.http.get<any>(`${this.BASE_URL}/GetBestBooks`);
  }
  getBookByTitle(title: any): Observable<any> {
    return this.http.get<any>(`${this.BASE_URL}/GetBookBytitle/${title}`);
  }
  getBookByCategory(cat: any): Observable<any> {
    return this.http.get<any>(`${this.BASE_URL}/GetBookByCategory/${cat}`);
  }
  getBookByISBN(isbn: any): Observable<any> {
    return this.http.get<any>(`${this.BASE_URL}/GetBookByISBN/${isbn}`);
  }
  getBookByAuthor(author: any): Observable<any> {
    return this.http.get<any>(`${this.BASE_URL}/GetBookByAuthor/${author}`);
  }

 

  getBooksByCatId(catId: any): Observable<any> {
    return this.http.get<any>(`${this.BASE_URL}/GetBookByCatId/${catId}`);
  }

  getBookById(id: any): Observable<any> {
    return this.http.get<any>(`${this.BASE_URL}/GetBookByID/${id}`);
  }

}
