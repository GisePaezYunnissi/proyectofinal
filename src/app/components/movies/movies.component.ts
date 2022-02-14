import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MovieAPI} from 'src/app/models/movieAPI.model';
import { CartService } from 'src/app/features/cart/services/cart.service';
import { MovieService } from 'src/app/services/movie.service';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  constructor(
    private movieService: MovieService,
    private router: Router,
    public cartService: CartService,
    ) { };

    private subscription: Subscription | undefined;
    movies: MovieAPI[] = [];

    ngOnInit(): void {
      //Traigo las películas desde la API
      for(let i = 1; i<2; i++){
        this.movieService.getListAPI(i).subscribe(response => {
          this.movies = this.movies.concat(response.Search);
          console.log(this.movies)
        });
      }
    };

    //Nos desuscribimos
    ngOnDestroy(): void {
      this.subscription?.unsubscribe();
    };

    //Para ver la descripción de las pelis
    moreInfo(id: string) {
      this.router.navigate(['peliculas', id]);
    };
}
