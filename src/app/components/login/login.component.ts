import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  ngOnInit(): void {
  }

  constructor (
    private loginService:LoginService,
    private router: Router,) { }

    //Suscripción
  private subscription = new Subscription;

  userForm=new FormGroup({
    //voy agregando los controles
    user: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required,Validators.minLength(8)]),
  });

  //Para controlar el form
  userControl=this.userForm.controls['user'];
  passwordControl=this.userForm.controls['password'];

  loginValidate() {
    const valid = this.loginService.validateUser(this.userControl.value, this.passwordControl.value)
    if (valid) {
      this.router.navigate(['peliculas']);
    }
    else {
      alert("User or password not valid, try again")
      // resetea el formulario
      this.userForm.reset();
      console.log(this.loginService.getUsers());
    };

  }

  ngOnDestroy(): void {
    //Nos desuscribimos
  this.subscription?.unsubscribe();
  }

}

