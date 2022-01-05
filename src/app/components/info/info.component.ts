import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/models/movie.model';
import { MovieAPI } from 'src/app/models/movieAPI.model';
import { CartService } from 'src/app/services/cart.service';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  movie: MovieAPI| any;
  urlPath: string = 'https://image.tmdb.org/t/p/w500';

  constructor(
    private activatedRoute: ActivatedRoute,
    private movieService: MovieService,
    private cartService: CartService
    ) { }

  ngOnInit(): void {
    this.movieService.getInfo(this.activatedRoute.snapshot.params['id'])
    .subscribe(response => {this.movie = response
      console.log(this.movie);
  });
  }

  addToCart(movie: MovieAPI){
    this.cartService.addMovie(movie);
  }
}
