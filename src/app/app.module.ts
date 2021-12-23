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


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    CarritoComponent,
    MoviesComponent,
    MenuComponent,
    HooksComponent,
    PersonaListComponent,
    PersonaItemComponent,
    MiCuentaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
