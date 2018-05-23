import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierContratHabitationComponent } from './modifier-contrat-habitation.component';

describe('ModifierContratHabitationComponent', () => {
  let component: ModifierContratHabitationComponent;
  let fixture: ComponentFixture<ModifierContratHabitationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifierContratHabitationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierContratHabitationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
