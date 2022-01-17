import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private url = environment.ApiMockMovies + 'users';

  constructor(
    private httpClient: HttpClient
  ) { }

  createUser(user: string, email: string, password: string): Observable<boolean>{
    return this.httpClient.post<boolean>(this.url,{
      user,
      email,
      password
    })
  }
}
