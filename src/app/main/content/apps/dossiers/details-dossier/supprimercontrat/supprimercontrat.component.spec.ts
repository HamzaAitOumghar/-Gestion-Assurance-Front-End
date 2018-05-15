import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupprimercontratComponent } from './supprimercontrat.component';

describe('SupprimercontratComponent', () => {
  let component: SupprimercontratComponent;
  let fixture: ComponentFixture<SupprimercontratComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupprimercontratComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupprimercontratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
