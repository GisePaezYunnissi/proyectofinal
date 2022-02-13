import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IUniqueMovie } from '../models/movieAPI.model';

@Injectable({
  providedIn: 'root'
})
export class MoviesInfoService {

  private union = '?i=';
  private url = environment.moviesApi + this.union;
  private apiKey = environment.keyApi;

  constructor(
    private httpclient: HttpClient,
  ) { };

  //Llamo a una pelicula por id
  getInfo( id: string): Observable<IUniqueMovie | undefined>{
    return this.httpclient.get<IUniqueMovie>(this.url+id+this.apiKey);
  };
}
