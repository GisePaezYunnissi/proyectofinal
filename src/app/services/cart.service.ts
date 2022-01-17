import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ICart } from '../models/cart.model';
//import { environment } from 'src/environments/environment';
//import { Cart } from '../models/cart.model';
//import { Movie } from '../models/movie.model';
import { MovieAPI } from '../models/movieAPI.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  url = environment.cartRestApi + 'cart';

  constructor(
    private httpClient: HttpClient,
  ) {}

  addMovie(movieToCart: ICart): Observable<ICart>{
    return this.httpClient.post<ICart>(this.url, movieToCart);

  }

  getList(): Observable<ICart[]>{
    return this.httpClient.get<ICart[]>(this.url);
  }

  removeMovie(id:string):Observable<boolean>{
    return this.httpClient.delete<boolean>(`${this.url}?id=${id}`);
  }
}

