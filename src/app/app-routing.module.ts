import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarritoComponent} from './components/carrito/carrito.component';
//import { HooksComponent } from './components/hooks/hooks.component';
import { InfoComponent } from './components/info/info.component';
import { LoginComponent } from './components/login/login.component';
import { MiCuentaComponent } from './components/mi-cuenta/mi-cuenta.component';
import { MoviesComponent } from './components/movies/movies.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {
    path: 'cart',
    component: CarritoComponent
  },
  {
    path: 'detalle',
    loadChildren: () => import('./components/movies/movies.component').then(m => m.MoviesComponent)
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'peliculas/:id',
    component: InfoComponent
  },
  {
    path: 'peliculas',
    component: MoviesComponent
  },
  {
    path: 'mi-cuenta',
    component: MiCuentaComponent
  },
  //{
    //path: 'hooks',
   // component: HooksComponent
  //}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
