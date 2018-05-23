import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupprimerContratHabitationComponent } from './supprimer-contrat-habitation.component';

describe('SupprimerContratHabitationComponent', () => {
  let component: SupprimerContratHabitationComponent;
  let fixture: ComponentFixture<SupprimerContratHabitationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupprimerContratHabitationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupprimerContratHabitationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
