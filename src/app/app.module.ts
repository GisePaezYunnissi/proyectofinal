import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { MoviesComponent } from './components/movies/movies.component';
import { MenuComponent } from './components/menu/menu.component';
import { HooksComponent } from './components/hooks/hooks.component';
import { PersonaListComponent } from './components/persona-list/persona-list.component';
import { PersonaItemComponent } from './components/persona-item/persona-item.component';
import { MiCuentaComponent } from './components/mi-cuenta/mi-cuenta.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MaterialModule } from './material/material.module';
import { MoviesInfoComponent } from './components/movies-info/movies-info.component';
import { MostViewComponent } from './components/most-view/most-view.component';
import { MostViewAdminComponent } from './components/most-view-admin/most-view-admin.component';
import { InterceptorService } from './interceptors/interceptor.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    CarritoComponent,
    MoviesInfoComponent,
    MoviesComponent,
    MenuComponent,
    HooksComponent,
    PersonaListComponent,
    PersonaItemComponent,
    MiCuentaComponent,
    MostViewComponent,
    MostViewAdminComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi:true
      //Hace que este pendiente de todos los cambios que hagamos
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
