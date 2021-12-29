import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Movie} from '../models/movie.model';
//import { moviesMock } from './movies.mock';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private url = environment.moviesRestApi + 'movies';

  constructor(
    private httpClient: HttpClient
  ) { }

  getList(): Observable<Movie[]> {
    return this.httpClient.get<Movie[]>(this.url);
  }
//getInfo(id: string): Observable<Movie | undefined> {
    //return of(moviesMock.find(movie => movie.id === id))
 //}
}
