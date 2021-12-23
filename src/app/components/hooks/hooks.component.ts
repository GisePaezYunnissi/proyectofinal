import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/persona.model';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-hooks',
  templateUrl: './hooks.component.html',
  styleUrls: ['./hooks.component.scss']
})
export class HooksComponent implements OnInit {
  persons: Persona[] | undefined;

  constructor(
    private personsService: PersonService
  ) {
    console.log('HOOK - CONSTRUCTOR');
  }

  ngOnInit(): void {
    this.personsService.getList().subscribe(
      persons => persons = this.persons = persons );

      console.log('HOOK - ON INIT');
  }

}
