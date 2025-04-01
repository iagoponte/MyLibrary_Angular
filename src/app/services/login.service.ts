import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Cliente } from '../interface/cliente';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient, private router: Router) {}

  login(email: string, senha_hash: string): Observable<Cliente> {
    const body = { email, senha_hash };
    return this.http.post<Cliente>(`${this.apiUrl}/cliente/login`, body).pipe(
      map((response) => {
        return response;
      })
    );
  }
}
