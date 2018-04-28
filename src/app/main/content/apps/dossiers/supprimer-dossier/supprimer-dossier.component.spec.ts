import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupprimerDossierComponent } from './supprimer-dossier.component';

describe('SupprimerDossierComponent', () => {
  let component: SupprimerDossierComponent;
  let fixture: ComponentFixture<SupprimerDossierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupprimerDossierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupprimerDossierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
