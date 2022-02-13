import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MockMovies } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MostViewService {

  //Variable conexion con la API
  private url = environment.ApiMockMovies + 'movies';

  constructor(
    //Inyección del servicio
    private httpClient : HttpClient,
  ) { };

  //Metodo que llama a todas la peliculas GET
  getMovies(): Observable<MockMovies[]>{
    return this.httpClient.get<MockMovies[]>(this.url);
  };
}
