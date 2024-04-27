import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChambreUpdateFormComponent } from './chambre-update-form.component';

describe('ChambreUpdateFormComponent', () => {
  let component: ChambreUpdateFormComponent;
  let fixture: ComponentFixture<ChambreUpdateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChambreUpdateFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChambreUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
