import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ICart } from 'src/app/models/cart.model';
//import { Movie } from 'src/app/models/movie.model';
import { MovieAPI } from 'src/app/models/movieAPI.model';
import { CartService } from 'src/app/services/cart.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-cart',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {

  public list: ICart[] = [];
  constructor(
    private cartService: CartService) { };

    private subscription = new Subscription;

  ngOnInit(): void {
    this.subscription.add(this.cartService.getList().subscribe(all => {
      this.list = all;
      console.log(this.list,all);
    }));
  }

  removeMovie(id:string){
    this.subscription.add(this.cartService.removeMovie(id).subscribe(movie =>
      console.log(movie)));
      let index = this.list.findIndex(movie => movie.imdbID == id);
      this.list.splice(index, 1);
  }

  clearCart(){
    this.list.forEach(movie =>{
      this.subscription.add(this.cartService.removeMovie(movie.imdbID).subscribe(
        moviex => {
          console.log("Se vacio el carrito con éxito");
        }
      ))
    });
    this.list = [];
  }
}
