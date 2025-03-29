import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  login(email: string, senha_hash: string): Observable<any> {
    const body = { email, senha_hash };
    return this.http.post<any>(`${this.apiUrl}/cliente/login`, body).pipe(
      map((response) => {
        return response;
      })
    );
  }
}
