import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
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
import { StoreModule } from '@ngrx/store';
import { CartComponent } from './components/cart/cart.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
//import { EffectsModule } from '@ngrx/effects';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    MoviesInfoComponent,
    MoviesComponent,
    MenuComponent,
    HooksComponent,
    PersonaListComponent,
    PersonaItemComponent,
    MiCuentaComponent,
    MostViewComponent,
    MostViewAdminComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    //StoreModule.forRoot({app: appReducer}, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    //EffectsModule.forRoot([])
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
