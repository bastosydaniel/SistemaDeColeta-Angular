import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/shared/models/usuario';



@Injectable({
  providedIn: 'root',
})

export class UsuarioService {
  private readonly http: HttpClient;

  constructor(private readonly http: HttpClient) {}

  getUsers(): Promise<Usuario[]> {
    const url = '/api/users';
    return this.http.get<Usuario[]>(url);
  }

  getUserById(id: number): Promise<Usuario> {
    const url = `/api/users/${id}`;
    return this.http.get<Usuario>(url);
  }

  createUser(user: Usuario): Promise<Usuario> {
    const url = '/api/users';
    return this.http.post<Usuario>(url, user);
  }

  updateUser(user: Usuario): Promise<Usuario> {
    const url = `/api/users/${user.id}`;
    return this.http.put<Usuario>(url, user);
  }

  deleteUser(id: number): Promise<void> {
    const url = `/api/users/${id}`;
    return this.http.delete(url);
  }
}