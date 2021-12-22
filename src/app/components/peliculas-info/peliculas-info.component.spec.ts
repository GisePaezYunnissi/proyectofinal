import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculasInfoComponent } from './peliculas-info.component';

describe('PeliculasInfoComponent', () => {
  let component: PeliculasInfoComponent;
  let fixture: ComponentFixture<PeliculasInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeliculasInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeliculasInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
