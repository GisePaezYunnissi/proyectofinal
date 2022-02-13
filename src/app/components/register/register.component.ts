import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { RegisterService } from 'src/app/services/register.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  usuario: User = {
    user: '',
    email: '',
    password: ''
  };

  flag : boolean = true;

  constructor(
    //private userService: UserService,
    private registerService: RegisterService,
    private router: Router
  ) { };

  //Suscripción
  private subscription = new Subscription;

  user:User[] = []

  ngOnInit(): void {
    this.subscription.add(this.registerService.getUsers().subscribe(data => {
      this.user = data;
      console.table(this.user);

    }));
  };

  newUserForm=new FormGroup({
    //Voy agregando los controles
    userName: new FormControl('',[Validators.required]),
    userMail: new FormControl('',[Validators.email,Validators.required]),
    password: new FormControl('',[Validators.required,Validators.minLength(8)]),
  });

    userControl=this.newUserForm.controls['userName'];
    mailControl=this.newUserForm.controls['userMail'];
    passwordControl=this.newUserForm.controls['password'];

  register() {
    this.usuario.user = this.newUserForm.controls['userName'].value;
    this.usuario.email = this.newUserForm.controls['userMail'].value;
    this.usuario.password = this.newUserForm.controls['password'].value;
    this.subscription.add(this.registerService.createUser(this.usuario).subscribe(data => {
      console.log("Rta api");
      console.log(data);

      if(data.status=="OK"){
        console.log("Se agrega usuario");
        this.user.push(this.usuario);
      } else{
        console.log("El usuario ya existe");
        }
    }));
  };

  volver(){
    this.router.navigate(['login']);
    console.log("Volver");
  };

  ngOnDestroy(): void {
    //Nos desuscribimos
  this.subscription.unsubscribe();
  };
}
