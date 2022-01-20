import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ICart } from 'src/app/models/cart.model';
import { IUniqueMovie, MovieAPI } from 'src/app/models/movieAPI.model';
import { CartService } from 'src/app/services/cart.service';
import { MovieService } from 'src/app/services/movie.service';
import { MoviesInfoService } from 'src/app/services/movies-info.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-movies-info',
  templateUrl: './movies-info.component.html',
  styleUrls: ['./movies-info.component.scss']
})
export class MoviesInfoComponent implements OnInit, OnDestroy {

  constructor(
    private activatedRoute: ActivatedRoute,
    private moviesInfoService: MoviesInfoService ,
    private cartService: CartService
    ) { }

    uniquemovie!: IUniqueMovie;
    private subscription = new Subscription;

 ngOnInit(): void {
    //Traigo desde la api
    this.subscription.add(this.moviesInfoService.getInfo(this.activatedRoute.snapshot.params['id'])
    .subscribe(response => {
      if (response != undefined) {
        this.uniquemovie = response;
      } else
        alert("Esa película no existe");
      }
    ));
  }

  addToCart(){
    this.subscription.add(this.cartService.addMovie({
      id:'',
      title: this.uniquemovie.Title,
      url: this.uniquemovie.Poster,
      imdbID: this.uniquemovie.imdbID,
      price: 1000
    }).subscribe(response => {

      console.log("carrito");
      if (response.status==="OK"){
        alert("Movie successfully added")
      }else{
        alert ("Movie already in cart")
      }
    }));
  }


  //     alert("Tu película ha sido agregada con éxito")));
  // }












  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
