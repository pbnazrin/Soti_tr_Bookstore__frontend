import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private BASE_URL = 'http://localhost:50073/api';
  constructor(private http: HttpClient) {}

  register(data: any): Observable<any> {
    return this.http.post<any>(`${this.BASE_URL}/Users/register`, data);
  }

  login(data: any): Observable<any> {
    return this.http.post<any>(`${this.BASE_URL}/Login`, data);
  }

  checkUserLogin() {
    if (localStorage.getItem('user')) {
      return true;
    } else {
      return false;
    }
  }

  checkAdminLogin() {
    if (localStorage.getItem('admin')) {
      return true;
    } else {
      return false;
    }
  }

  logout(){
    localStorage.clear()
  }
}
