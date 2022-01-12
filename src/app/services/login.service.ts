import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  users:User[] = [];

  constructor(
    private userService: UserService) {
      //le asigna al array usuario la rta del observador
      this.userService.getUserList().subscribe(response => this.users = response);
     }

  getUsers():User[]{
       // Devuelve el array de usuario
    return this.users;
  }

  validateUser(user: string, password:string): Boolean{
    var response: boolean = false;

    this.users.forEach(users => {
      if (users.user === user && users.password === password) {
        response= true;
      }
    });
    return response;
  }
}
