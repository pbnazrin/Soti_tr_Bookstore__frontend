import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private BASE_URL = 'http://localhost:50073/api';
  constructor(private http: HttpClient) {}

  getCategory(): Observable<any> {
    return this.http.get<any>(`${this.BASE_URL}/category`);
  }
}
