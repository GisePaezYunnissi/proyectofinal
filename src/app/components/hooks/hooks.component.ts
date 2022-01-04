import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Persona } from 'src/app/models/persona.model';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-hooks',
  templateUrl: './hooks.component.html',
  styleUrls: ['./hooks.component.scss']
})
export class HooksComponent implements OnInit, OnDestroy, AfterViewInit {

  persons: Persona[] = [];

  private subscription: Subscription | undefined;

  constructor(
    private registersService: RegisterService
  ) {
    console.log('HOOK - CONSTRUCTOR');
  }

  ngOnInit(): void {
    this.subscription = this.registersService.getList().subscribe(
      persons => persons = this.persons = persons);

      console.log('HOOK - ON INIT');
  }

  ngAfterViewInit(){
    console.log('HOOK - AFTER VIEW INIT');
  }

  ngOnDestroy(): void{

    this.subscription?.unsubscribe();

      console.log('HOOK - ON DESTROY');
    }
}
