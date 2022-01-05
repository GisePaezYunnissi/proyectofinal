import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
//import { Movie } from '../models/movie.model';
import { MovieAPI, MoviesAPI } from '../models/movieAPI.model';
//import { moviesMock } from './movies.mock';

@Injectable({
  providedIn: 'root'})
export class MovieService {

  private url = environment.moviesApi;

  //Inyecto el HttpClient
  constructor(
    private httpClient: HttpClient
  ) { }

  //Traigo las películas desde la API
  getListAPI(): Observable<MoviesAPI> {
    return this.httpClient.get<MoviesAPI>(this.url);
  }

  getInfo(id: string): Observable<MoviesAPI> {
    return this.httpClient.get<MoviesAPI>(this.url)
    //of(moviesMock.find(movie => movie.id === id))
  }

  //addCart(id: string): Observable<Movie[]>{

  //}

}
