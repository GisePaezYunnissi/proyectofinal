import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MockMovies } from 'src/app/models/movie.model';
import { MostViewService } from 'src/app/services/most-view.service';

@Component({
  selector: 'app-most-view',
  templateUrl: './most-view.component.html',
  styleUrls: ['./most-view.component.scss']
})
export class MostViewComponent implements OnInit {

  //Variable contenedora
  allMovies : MockMovies[] = [];

  movie: MockMovies = {
    id: '',
    title: '',
    premiere: 0,
    gender: '',
    adultsOnly: false,
    description: '',
    image: ''
  }

  //Variable subscripción
  private subscription = new Subscription;

  constructor(
    private mostViewService: MostViewService,
  ) { }

  ngOnInit(): void {
    //Le pasamos todas las peliculas que tenemos al array de pelis
    this.subscription.add(this.mostViewService.getMovies()
      .subscribe(movies => {
        this.allMovies = movies;
        console.table(this.allMovies);
    }));
  }
}
