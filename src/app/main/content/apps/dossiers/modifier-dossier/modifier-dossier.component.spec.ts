import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CompleterService, CompleterData } from 'ng2-completer';
import { ModifierDossierComponent } from './modifier-dossier.component';

describe('ModifierDossierComponent', () => {
  let component: ModifierDossierComponent;
  let fixture: ComponentFixture<ModifierDossierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifierDossierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierDossierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
