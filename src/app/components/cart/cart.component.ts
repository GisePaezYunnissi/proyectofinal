import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ICart } from 'src/app/models/cart.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

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

