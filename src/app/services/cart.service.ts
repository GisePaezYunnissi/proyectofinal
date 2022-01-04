//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
//import { environment } from 'src/environments/environment';
//import { Cart } from '../models/cart.model';
import { Movie } from '../models/movie.model';
import { MovieAPI} from '../models/movieAPI.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private list: Movie[] = [];

  constructor() { }

  getList(): Observable<Movie[]> {
    return of(this.list);
  }

  addMovie(movie: Movie) {

    //if (this.list.indexOf ( (m: Movie) =>{ return m.id === movie.id
    //})) {
      this.list.push(movie);
      console.log(this.list);
    }

  //removeMovie(movie: Movie){};
    //tengo que remover del array el movie que coincida

  }

  /* private url = environment.cartRestApi+ 'cart'
  validateUser: any;

  constructor(private httpClient: HttpClient) {}

  getList(): Observable<Cart[]>{
    return this.httpClient.get<Cart[]>(this.url)
  } */

