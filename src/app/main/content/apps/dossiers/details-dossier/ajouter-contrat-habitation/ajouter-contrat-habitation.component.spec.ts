import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterContratHabitationComponent } from './ajouter-contrat-habitation.component';

describe('AjouterContratHabitationComponent', () => {
  let component: AjouterContratHabitationComponent;
  let fixture: ComponentFixture<AjouterContratHabitationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterContratHabitationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterContratHabitationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
