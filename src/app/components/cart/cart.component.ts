import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Subscription, tap } from 'rxjs';
import { ICart } from 'src/app/models/cart.model';
import { CartService } from 'src/app/services/cart.service';
import { cartDeleteMovie } from './store/cart.actions';
import { cartStateSelector } from './store/cart.selector';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  list: ICart[] = [];
  total: number = 0;

  constructor(
    private cartService: CartService,
    private store: Store,
    private router: Router
  ) { };

    private subscription = new Subscription;

  ngOnInit(): void {
    this.store.pipe(
      select(cartStateSelector),
      tap(data => {
        console.log("Respuesta desde API", data);
      })
    ).subscribe(data => {
      this.list = data.movies
    })

    this.list.forEach(m => {
        this.total += m.price
    })
    console.log(this.list);

  }

  removeMovie(id:string){
    console.log('el id:' +id)

    this.subscription.add(
      this.cartService.removeMovie(id).subscribe(data => console.log(data))
    )
    let index = this.list.findIndex(m => m.imdbID == id)
    this.total -= this.list[index].price
    this.store.dispatch(cartDeleteMovie({id}))
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
    this.total = 0;
  }

  Back(){
    this.router.navigate(['peliculas'])
  }
}

