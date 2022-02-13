import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
private url = environment.ApiMockMovies + 'users';

  constructor (
    //Inyecto httpClient
    private httpClient: HttpClient
    ) {};

  getUserList(): Observable<User[]>{
    //Devuelve un observable con el array de usuario de la api
    return this.httpClient.get<User[]>(this.url);
  };

  getById(id: string): Observable<User> {
    return this.httpClient.get<User>(`${this.url}/${id}`);
  };
}
