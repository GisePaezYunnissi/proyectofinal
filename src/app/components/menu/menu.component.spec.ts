import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuComponent } from './menu.component';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
//Clase de testing
/* it('shoul title property be "Alquiler de Películas"', () => {
  expect(Component.title).toBe('Alquiler de Películas');
})

it(´should render title',()=> {
  ComponentFixture.detectChanges();
  const compiled = fixture.nativeElement;
  expect(compiled.querySelector('.title').textContent).toContain
  ('Alquiler de Películas');
}) */
