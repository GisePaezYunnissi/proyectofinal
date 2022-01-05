import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
//import { environment } from 'src/environments/environment';
//import { Cart } from '../models/cart.model';
//import { Movie } from '../models/movie.model';
import { MovieAPI } from '../models/movieAPI.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  //url = environment.cartRestApi;

  //private list: Movie[] = [];
  private list: MovieAPI[] = [];

  constructor() {}

    //private httpClient: HttpClient) { }
    //private url = environment.urlApi + 'cart'

    getList(): Observable<MovieAPI[]>{
      return of(this.list);
      //return this.httpClient.get<Cart[]>(this.url);
     //hecho por el profe para la nueva apicart ->return this.httpClient.get<any[]>(this.url);
    }


    addMovie(movie : MovieAPI) {
      this.list.push(movie);
      //console.log(movie)
      //return this.httpClient.post<Cart>(this.url,movie);
      alert ('Movie added to cart');
    }

    //Tengo que remover el array de movie que coincida
    removeMovie(movie: MovieAPI){
      let index = this.list.indexOf(movie);
      return this.list.splice(index,1);
      //return this.httpClient.delete<boolean>(`${this.url}/${id}`)
    }
    clearCart(){
      return this.list = [];
    }
}

