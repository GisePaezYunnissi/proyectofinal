import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MockMovies } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MostViewAdminService {
  //Variable conexion con la API
  private url = environment.ApiMockMovies + 'movies';

  constructor(
    //Inyección del servicio
    private httpClient : HttpClient,
  ) { }

   //Manejo de Errores

   private handleError(error: HttpErrorResponse){

    //Error del Front
    if (error.error instanceof ErrorEvent){
      console.warn("Front error", error.error.message);

    //Error del back
    } else {
      console.warn(`Back error: ${error.status}, body error:
      ${error.message}`)
    }
    return throwError('HTTP comunication ERROR');
  }

   //Edita una pelicula
   updateMovies(movie: MockMovies): Observable<MockMovies> {
    return this.httpClient.put<MockMovies>(this.url+ '/' + movie.id, movie);
  }

  //Postea una pelicula
  addMovie(movie: MockMovies): Observable<MockMovies> {
    return this.httpClient.post<MockMovies>(this.url, movie);
  }

  //Elimina la pelicula
  deleteMovie(id: string): Observable<boolean> {
    return this.httpClient.delete<boolean>(`${this.url}/${id}`)
    //Esto acá es para cuando se busca una peli que no existe en nuestro sistema
      .pipe(catchError(this.handleError));

  }


}
