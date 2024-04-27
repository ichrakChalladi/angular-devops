import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoyerAffecteBlocComponent } from './foyer-affect-bloc.component';

describe('FoyerAffectUniversiteComponent', () => {
  let component: FoyerAffecteBlocComponent;
  let fixture: ComponentFixture<FoyerAffecteBlocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoyerAffecteBlocComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoyerAffecteBlocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
