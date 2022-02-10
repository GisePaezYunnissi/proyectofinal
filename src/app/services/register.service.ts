import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(
    private httpClient: HttpClient
  ) { }

    url = `${environment.cartRestApi}register`;

    getUser: User[] = []

  createUser(user: User): Observable<any>{
    return this.httpClient.post<User>(this.url, user);
  }

  getUsers(): Observable<User[]>{
    return this.httpClient.get<User[]>(this.url);
  }
}
