import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { RegisterService } from 'src/app/services/register.service';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(
    private userService: UserService,
    private registerService: RegisterService,
    private router: Router
  ) { }

  //Suscripción
  private subscription = new Subscription;

  user:User[] = []

  ngOnInit(): void {
    this.subscription.add(this.userService.getUserList().subscribe(user=>this.user=user))
  }

  newUserForm=new FormGroup({
    //Voy agregando los controles
    userName: new FormControl('',[Validators.required]),
    userMail: new FormControl('',[Validators.email,Validators.required]),
    password1: new FormControl('',[Validators.required,Validators.minLength(8)]),
    passwordConfirm:new FormControl('',[Validators.required]),
  });


  userControl=this.newUserForm.controls['userName'];
  mailControl=this.newUserForm.controls['userMail'];
  passwordControl=this.newUserForm.controls['password1'];
  passwordConfirmControl=this.newUserForm.controls['passwordConfirm'];


  createUser(){
    if (this.passwordControl.value === this. passwordConfirmControl.value ){
      const name=this.userControl.value;
      const mail= this.mailControl.value;
      const password= this.passwordControl.value;
      const role="user";
      this.subscription.add(this.registerService.createUser(name,mail,password).subscribe(response=>console.log(response)));
      this.newUserForm.reset();

    alert("Registro exitoso")
    }
    else{
      alert("Las contraseñas no coinciden")
    }
  }

  volver(){
    this.router.navigate(['login']);
    console.log("Volver");
  }

  ngOnDestroy(): void {
    //Nos desuscribimos
  this.subscription.unsubscribe();
  }
}
