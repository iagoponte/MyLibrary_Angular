import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LivrosService {
  constructor(private httpClient: HttpClient) {}
  private apiUrl = `${environment.apiUrl}/livros`;

  getLivros(): Observable<any> {
    return this.httpClient.get(this.apiUrl).pipe(
      map((response) => {
        return response;
      })
    );
  }

  getLivro(id: number): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/${id}`).pipe(
      map((response) => {
        return response;
      })
    );
  }

  //o correto seria criar um interface para o livro. Caso contrário, o livro pode ser qualquer coisa.
  createLivro(livro: any): Observable<any> {
    return this.httpClient.post(`${this.apiUrl}/create`, livro).pipe(
      map((response) => {
        return response;
      })
    );
  }
}
