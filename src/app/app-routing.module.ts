import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarritoComponent} from './components/carrito/carrito.component';
//import { HooksComponent } from './components/hooks/hooks.component';
import { LoginComponent } from './components/login/login.component';
import { MiCuentaComponent } from './components/mi-cuenta/mi-cuenta.component';
import { MostViewAdminComponent } from './components/most-view-admin/most-view-admin.component';
import { MostViewComponent } from './components/most-view/most-view.component';
import { MoviesInfoComponent } from './components/movies-info/movies-info.component';
import { MoviesComponent } from './components/movies/movies.component';
import { RegisterComponent } from './components/register/register.component';
import { AdminRoleGuardGuard } from './guards/admin-role-guard.guard';
import { ProtectedGuardGuard } from './guards/protected-guard.guard';

const routes: Routes = [
  {
    path: 'admin',
    canActivate: [AdminRoleGuardGuard],
    component: MostViewAdminComponent
  },
  {
    path: 'mostViews',
    canActivate: [ProtectedGuardGuard],
    component: MostViewComponent
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
    path: 'peliculas',
    canActivate: [ProtectedGuardGuard],
    component: MoviesComponent
  },
  {
    path: 'peliculas/:id',
    canActivate: [ProtectedGuardGuard],
    component: MoviesInfoComponent
  },
  {
    path: 'cart',
    canActivate: [ProtectedGuardGuard],
    component: CarritoComponent
  },

 /*  {
    path: 'detalle',
    loadChildren: () => import('./components/movies/movies.component').then(m => m.MoviesComponent)
  },
   {
    path: 'mi-cuenta',
    //canActivate: [ProtectedGuardGuard],
    component: MiCuentaComponent
  }, */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
