import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierContratSanteComponent } from './modifier-contrat-sante.component';

describe('ModifierContratSanteComponent', () => {
  let component: ModifierContratSanteComponent;
  let fixture: ComponentFixture<ModifierContratSanteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifierContratSanteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierContratSanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
