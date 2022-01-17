import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
//import { Movie } from '../models/movie.model';
import { Movie, MovieAPI } from '../models/movieAPI.model';
//import { moviesMock } from './movies.mock';

@Injectable({
  providedIn: 'root'})
export class MovieService {

  private movie = "Fast and Furious";
  private union = '?s=';
  private url = environment.moviesApi + this.union + this.movie + environment.keyApi;

  //Inyecto el HttpClient
  constructor(
    private httpClient: HttpClient
  ) { }

  //Traigo las películas desde la API
  getListAPI(id: number): Observable<Movie> {
    let params = new HttpParams().append('page', String(id));
    return this.httpClient.get<Movie>(this.url,{params});
  }

  getInfo(id: string): Observable<MovieAPI> {
    return this.httpClient.get<MovieAPI>(this.url)
    //of(moviesMock.find(movie => movie.id === id))
  }
}
