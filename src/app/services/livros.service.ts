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

// a declaração função(): Observable<> "fala" pra mim que a função irá retornar um Observable, que é uma representação de valores fixos (interface)
// então, o uso do subscribe({next, error, complete}) ele pega um retorno de observable e trabalha em cima dele diretamente
// por isso, não posso declarar uma função com observable e na mesma já chamar o subscribe.
// nesse caso o subscribe vem no componente, aqui utilizaremos pipe, pra possibilitar o manuseio dos dados dentro do observable
  getLivros(): Observable<Livro[]> {
    return this.httpClient.get<Livro[]>(this.apiUrl).pipe(
      map((response) => {
        return response;
      })
    );
  }

  getLivro(id: number): Observable<Livro> {
    return this.httpClient.get<Livro>(`${this.apiUrl}/${id}`).pipe(
      map((response) => {
        return response;
      })
    );
  }

  //o correto seria criar um interface para o livro. Caso contrário, o livro pode ser qualquer coisa.
  createLivro(livro: any): Observable<Livro> {
    return this.httpClient.post<Livro>(`${this.apiUrl}/create`, livro).pipe(
      map((response) => {
        return response;
      })
    );
  }

  updateLivro(id: number, titulo: string, autor: string, ano_publicacao: number, genero: string, capa: string, sinopse: string,  preco: number, quantidade: number): Observable<Livro> {
    const body = {titulo, autor, ano_publicacao, genero, capa, sinopse, preco, quantidade};
    //sem filtro ou utilidade pro pipe aqui.
    return this.httpClient.put<Livro>(`${this.apiUrl}/atualizar/${id}`, body).pipe(map((response) => {
      return response;
    }))
  }

  deleteLivro(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.apiUrl}/apagar/${id}`)
  }
}
