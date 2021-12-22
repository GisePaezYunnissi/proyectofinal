import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userForm = new FormGroup ({
    usuario: new FormControl('',[Validators.required]),
    contraseña: new FormControl('',[Validators.required])
  })

  usuarioControl = this.userForm.controls['usuario'];
  contraseñaControl = this.userForm.controls['contraseña'];

  constructor() { }

  ngOnInit(): void {
    this.userForm.controls['usuario'].valueChanges.subscribe(values => console.log('value changes',values));
  }

  guardar(){
    console.log(this.userForm.value);
  }
}

