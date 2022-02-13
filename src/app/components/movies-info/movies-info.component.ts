import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { ICart } from 'src/app/models/cart.model';
import { IUniqueMovie, MovieAPI } from 'src/app/models/movieAPI.model';
import { CartService } from 'src/app/services/cart.service';
import { MoviesInfoService } from 'src/app/services/movies-info.service';
import Swal from 'sweetalert2';
import { cartAddMovie } from '../cart/store/cart.actions';
@Component({
  selector: 'app-movies-info',
  templateUrl: './movies-info.component.html',
  styleUrls: ['./movies-info.component.scss']
})
export class MoviesInfoComponent implements OnInit, OnDestroy {

  constructor(
    private activatedRoute: ActivatedRoute,
    private moviesInfoService: MoviesInfoService ,
    private cartService: CartService,
    private router: Router,
    private store: Store
  ) { };

    private subscription = new Subscription;

    movie!: IUniqueMovie;
    allmovies: ICart[]=[];

    movieToCart: ICart= {
      id:'',
      title: '',
      url:'' ,
      imdbID:'' ,
      price: 0,
      status: false
    };

 ngOnInit(): void {
    //Traigo desde la api
    this.subscription.add(this.moviesInfoService.getInfo(this.activatedRoute.snapshot.params['id'])
    .subscribe(response => {
      if (response != undefined) {
        this.movie = response;
      } else
        alert("Esa película no existe");
      }
    ));
    this.cartService.getList().subscribe(movie => this.allmovies = movie);
  };

  addToCart(){
    this.movieToCart.id = '';
    this.movieToCart.title = this.movie.Title;
    this.movieToCart.url = this.movie.Poster;
    this.movieToCart.price = 1000;
    this.movieToCart.imdbID = this.movie.imdbID;
    this.movieToCart.status = true;

    this.store.dispatch(cartAddMovie({movie : this.movieToCart }));
    Swal.fire("You added the movie", "Success");
  };

  back() {
    this.router.navigate(['peliculas'])
  };

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  };
}
