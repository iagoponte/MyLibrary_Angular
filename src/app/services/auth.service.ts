import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token_key = 'authToken'

  constructor(private router: Router ) {}

  saveToken(token: string) {
    localStorage.setItem(this.token_key, token);
  }

  getToken() {
    return localStorage.getItem(this.token_key);
  }

  logout () {
    localStorage.removeItem(this.token_key);
    this.router.navigate(['/']);
  }

  isAuth(): boolean {
    return !!this.getToken();
  }
}
