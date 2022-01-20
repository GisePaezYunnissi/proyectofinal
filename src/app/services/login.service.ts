import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable} from 'rxjs';
import { environment } from 'src/environments/environment';
//import { User } from '../models/user.model';
//import { UserService } from './user.service';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private token : any = null;
  private user = '';
  private userName = '';
  private role = '';

  /* users:User[] = []; */

  constructor(
    private httpClient : HttpClient){
   /*  private userService: UserService) {
      //le asigna al array usuario la rta del observador
      this.userService.getUserList().subscribe(response => this.users = response); */
    }

 /*  getUsers():User[]{
    // Devuelve el array de usuario
    return this.users;
  } */

  private url = environment.cartRestApi + 'login';

  //Funcion para validar un usuario que se loguea
  validateCredentials(user: string, password: string): Observable<boolean> {
    return this.httpClient.post<any>(this.url, { user, password })
    .pipe (
      map(response => {
        if (response.status === 'OK') {
          this.token = response.token;
          //Se decodifica el token para despues obtener sus valores como user y userName
          const decodedToken: any = jwt_decode(this.token);
            this.user = decodedToken?.user;
            this.userName = decodedToken?.userName;
            this.role = decodedToken?.role;
            return true;

        } else {
            this.token = null;
            return false;
        }
      })
    )
  }

  getToken(): any{
    return this.token;
  }

  isUserLoggedIn() {
    return this.user !== '';
  }

  getUserInfo(): any {
    return {
      user: this.user,
      userName: this.userName,
      role: this.role
    }
  }
}
