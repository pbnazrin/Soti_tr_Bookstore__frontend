import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CartService {

  private BASE_URL = 'http://localhost:50073/api/OrderItems';
  constructor(private http:HttpClient) { }

  postCartBook(id: any, data: any): Observable<any> {
    return this.http.post<any>(
      `${this.BASE_URL}?userid=${id}`,
      data
    );
  }

  getCartBookByUserId(id: any): Observable<any> {
    return this.http.get<any>(`${this.BASE_URL}/${id}`);
  }

  DeleteCartBook(userid: any, bookid: any): Observable<any> {
    return this.http.delete<any>(
      `${this.BASE_URL}/${userid}/${bookid}`
    );
  }


}
