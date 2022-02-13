import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Subscription, tap } from 'rxjs';
import { ICart } from 'src/app/models/cart.model';
import { CartService } from 'src/app/services/cart.service';
import Swal from 'sweetalert2';
import { cartClear, cartDeleteMovie } from './store/cart.actions';
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
    });

    this.list.forEach(m => {
        this.total += m.price
    });
    console.log(this.list);
  };

  removeMovie(id:string){
    console.log('el id:' +id);

    this.subscription.add(
      this.cartService.removeMovie(id).subscribe(data => console.log(data))
    )
    let index = this.list.findIndex(m => m.imdbID == id)
    this.total -= this.list[index].price
    this.store.dispatch(cartDeleteMovie({id}));
    Swal.fire("The movie has been removed");
  };

  clearCart(){
    this.store.dispatch(cartClear());
    this.list = [];
    Swal.fire("The cart is emptied");
  };

  Back(){
    this.router.navigate(['peliculas'])
  };
}

