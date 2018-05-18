import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterContratAutoComponent } from './ajouter-contrat-auto.component';

describe('AjouterContratAutoComponent', () => {
  let component: AjouterContratAutoComponent;
  let fixture: ComponentFixture<AjouterContratAutoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterContratAutoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterContratAutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
