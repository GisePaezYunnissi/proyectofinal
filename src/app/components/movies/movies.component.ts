import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MovieAPI} from 'src/app/models/movieAPI.model';
import { CartService } from 'src/app/services/cart.service';
import { MovieService } from 'src/app/services/movie.service';
//import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  constructor(
    private movieService: MovieService,
    private router: Router,
    public cartService: CartService
    ) { }

    private subscription: Subscription | undefined;
    movies: MovieAPI[] = [];

    ngOnInit(): void {
      //traigo las películas desde el mock
      // this.movieService.getList().subscribe( movies => this.movie = movies);

      //Traigo las películas desde la API
      this.movieService.getListAPI().subscribe(response => {
        this.movies = response.results;
        console.log(this.movies)
      });
    }
    //Nos desuscribimos
    ngOnDestroy(): void {
      this.subscription?.unsubscribe();
    }

    moreInfo(id: number) {
      this.router.navigate(['movies', id]);
    }

  }
