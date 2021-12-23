import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, QueryList, SimpleChanges, ViewChild, ViewChildren } from '@angular/core';
import { Persona } from 'src/app/models/persona.model';
import { PersonaItemComponent } from '../persona-item/persona-item.component';

@Component({
  selector: 'app-persona-list',
  templateUrl: './persona-list.component.html',
  styleUrls: ['./persona-list.component.scss']
})
export class PersonaListComponent implements OnInit, AfterViewInit, OnDestroy, OnChanges {

  @Input() personas: Persona[] = [];
  @Output() selected = new EventEmitter<Persona>();

  selectedPersona: Persona = { nombre: '', apellido: '' };

  constructor() { }

  @ViewChildren(PersonaItemComponent) personaItems: QueryList<PersonaItemComponent> | any;


  ngOnInit(): void {
    console.log('>>> PERSONA-LIST - ON INIT');
  }

  ngAfterViewInit() {
    console.log('>>> PERSONA-LIST - AFTER VIEW INIT');
  }

  ngOnDestroy(): void {
      console.log('>>> PERSONA-LIST - ON DESTROY');
  }


  ngOnChanges(changes: SimpleChanges): void {
    console.log('>>> PERSONA-LIST - ON CHANGES', changes);
  }

  clickPersona(persona: Persona) {
    this.selectedPersona = persona;
    this.selected.emit(persona);
  }

  isSelected(persona: Persona): boolean {
    return persona.nombre === this.selectedPersona.nombre &&
      persona.apellido === this.selectedPersona.apellido
  }
}
