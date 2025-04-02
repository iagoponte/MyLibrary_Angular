import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Cliente } from '../interface/cliente';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  constructor(private httpClient: HttpClient) {}
  private apiUrl = `${environment.apiUrl}`;

  getClientes(): Observable<Cliente[]>{
    return this.httpClient.get<Cliente[]>(`${this.apiUrl}/clientes`).pipe(map((response) => {
          return response;
        })
      );
  }

  createCliente(nome_usuario: string, email: string, senha_hash: string, cliente: any): Observable<Cliente>{
    return this.httpClient.post<Cliente>(`${this.apiUrl}/cliente/signup`, cliente).pipe(map((response) => {
      return response;
    }))
  }

  updateCliente(id: number, cliente: any): Observable<Cliente>{
    return this.httpClient.put<Cliente>(`${this.apiUrl}/cliente/atualizar/${id}`, cliente).pipe(map((response) => {
      return response;
    }))
  }

  deleteCliente(id: number): Observable<void>{
    return this.httpClient.delete<void>(`${this.apiUrl}/apagar/${id}`);
  }


}

