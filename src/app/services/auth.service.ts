import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { PayloadToken } from '../interface/payload-token';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private router: Router, private localStorageService: StorageService ) {}

  token_key = 'authToken'
  saveToken(token: string) {
    this.localStorageService.setItem(this.token_key, token);
  }

  getToken() {
    return this.localStorageService.getItem(this.token_key);
  }

  getRole() {
    const token = this.getToken()
    if (!token) return null;

    const payload = jwtDecode<PayloadToken>(token);
    // console.log('aqui é o payloaddd:', payload.role);
    return payload.role;
  }

  logout () {
    this.localStorageService.removeItem(this.token_key);
    this.router.navigate(['/']);
  }

  isLogged(): boolean {
    return !!this.getToken();
  }

  isAuthRole(){

  }
}
