import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Persona } from '../models/persona.model';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private url = environment.movieRestApi + 'persons';

  constructor(
    private httpClient: HttpClient
  ) { }

  getList(): Observable<Persona[]> {
    return this.httpClient.get<Persona[]>(this.url);
  }

  getById(id:string): Observable<Persona> {
    return this.httpClient.get<Persona>(`${this.url}/${id}`);
  }
}
