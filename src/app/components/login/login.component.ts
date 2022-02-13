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

  //Suscripción
  private subscription = new Subscription;

  constructor (
    private loginService:LoginService,
    private router: Router
    ) { }

  ngOnInit(): void {
  };

  userForm=new FormGroup({
    //voy agregando los controles
    user: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required]),
  });

  // para controlar el form
  userControl=this.userForm.controls['user'];
  passwordControl=this.userForm.controls['password'];

  loginValidate() {
    console.log (this.userForm.controls['user'].value,this.userForm.controls['password'].value);
    const valid = this.loginService.validateCredentials(this.userForm.controls['user'].value,this.userForm.controls['password'].value).subscribe(
      valid => {
        if (valid) {
          this.router.navigate(['peliculas']);
        }
        else {
          alert("User or password not valid, try again")
          // resetea el formulario
          this.userForm.reset();
          //console.log(this.loginService.getUsers());
        };
      }
    )
  };

  ngOnDestroy(): void {
    //Nos desuscribimos
  this.subscription?.unsubscribe();
  };

}

