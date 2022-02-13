import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ICart } from '../models/cart.model';
@Injectable({
  providedIn: 'root'
})
export class CartService {

  url = environment.cartRestApi + 'cart';

  constructor(
    private httpClient: HttpClient,
  ) {};

  getList(): Observable<ICart[]>{
    return this.httpClient.get<ICart[]>(this.url);
  };

  addMovie(movieToCart: ICart): Observable<any>{
    return this.httpClient.post<ICart>(this.url, movieToCart);
  };

  removeMovie(id:string):Observable<any>{
    return this.httpClient.delete<boolean>(`${this.url}?id=${id}`);
  };

  clearCart(){
    return this.httpClient.delete<any>(`${this.url}/clear`);
  };
}
