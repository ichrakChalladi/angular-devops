import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffecterChambreABlocComponent } from './affecter-chambre-abloc.component';

describe('AffecterChambreABlocComponent', () => {
  let component: AffecterChambreABlocComponent;
  let fixture: ComponentFixture<AffecterChambreABlocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffecterChambreABlocComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffecterChambreABlocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
