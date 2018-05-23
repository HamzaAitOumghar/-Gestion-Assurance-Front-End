import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterContratSanteComponent } from './ajouter-contrat-sante.component';

describe('AjouterContratSanteComponent', () => {
  let component: AjouterContratSanteComponent;
  let fixture: ComponentFixture<AjouterContratSanteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterContratSanteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterContratSanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
