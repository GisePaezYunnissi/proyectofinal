import { Component, Input, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/persona.model';

@Component({
  selector: 'app-persona-item',
  templateUrl: './persona-item.component.html',
  styleUrls: ['./persona-item.component.scss']
})
export class PersonaItemComponent implements OnInit {

  @Input() persona: Persona = { apellido: '', nombre: ''};

  constructor() {
   }

  ngOnInit(): void {
  }

}
