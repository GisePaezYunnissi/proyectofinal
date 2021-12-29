import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
private url = environment.moviesRestApi + 'persons'
  validateUser: any;
  constructor(private httpClient: HttpClient)  {}

  getList(): Observable<User[]>{
    return this.httpClient.get<User[]>(this.url)
  }
}
