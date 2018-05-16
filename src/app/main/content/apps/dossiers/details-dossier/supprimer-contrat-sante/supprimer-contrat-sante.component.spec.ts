import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupprimerContratSanteComponent } from './supprimer-contrat-sante.component';

describe('SupprimerContratSanteComponent', () => {
  let component: SupprimerContratSanteComponent;
  let fixture: ComponentFixture<SupprimerContratSanteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupprimerContratSanteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupprimerContratSanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
