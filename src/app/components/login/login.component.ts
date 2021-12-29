import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private userService: UsersService
  ) { }

  ngOnInit(): void {

  }
  validateUser() {
    const user = 'gpaez';
    const password = 'mipass';

    this.userService.validateUser(user,password).subscribe((response: any) => console.log(response));
  }
}

