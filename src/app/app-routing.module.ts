import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HooksComponent } from './components/hooks/hooks.component';
import { MoviesComponent } from './components/movies/movies.component';

const routes: Routes = [
  {
    path: 'peliculas',
    component: MoviesComponent
  },
  {
    path: 'hooks',
    component: HooksComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
