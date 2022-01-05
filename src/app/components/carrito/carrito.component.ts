import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie.model';
import { MovieAPI } from 'src/app/models/movieAPI.model';
import { CartService } from 'src/app/services/cart.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-cart',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {

 // public list: Movie[] = [];
  public list: MovieAPI[] = [];
  constructor(private cartService: CartService) { }
  urlPath = environment.imgApi;
  ngOnInit(): void {
    this.cartService.getList().subscribe(list => this.list = list);
  }

  removeMovie(movie: MovieAPI){
    this.cartService.removeMovie(movie);
  }

  clearCart(){
    this.list = this.cartService.clearCart();
  }
}
