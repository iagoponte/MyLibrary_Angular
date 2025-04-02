import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { map, Observable } from 'rxjs';
import { Livro } from '../interface/livro';

@Injectable({
  providedIn: 'root',
})
export class LivrosService {
  constructor(private httpClient: HttpClient) {}
  private apiUrl = `${environment.apiUrl}/livros`;

  getLivros(): Observable<Livro[]> {
    return this.httpClient.get<Livro[]>(this.apiUrl)
    // .pipe(
    //   map((response) => {
    //     return response;
    //   })
    // );
    // talvez, não usar o pipe aqui, poderá fazer com que eu não consiga obter o retorno do meu back, por conta de como estruturei o json das respostas.
  }

  getLivro(id: number): Observable<Livro> {
    return this.httpClient.get<Livro>(`${this.apiUrl}/${id}`)
    // .pipe(
    //   map((response) => {
    //     return response;
    //   })
    // );
  }

  //o correto seria criar um interface para o livro. Caso contrário, o livro pode ser qualquer coisa.
  createLivro(livro: any): Observable<Livro> {
    return this.httpClient.post<Livro>(`${this.apiUrl}/create`, livro).pipe(
      map((response) => {
        return response;
      })
    );
  }

  updateLivro(id: number, livro: any): Observable<Livro> {
    //sem filtro ou utilidade pro pipe aqui.
    return this.httpClient.put<Livro>(`${this.apiUrl}/atualizar/${id}`, livro).pipe(map((response) => {
      return response;
    }))
  }

  deleteLivro(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.apiUrl}/apagar/${id}`)
  }
}
