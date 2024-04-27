import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlocUpdateFormComponent } from './bloc-update-form.component';

describe('BlocUpdateFormComponent', () => {
  let component: BlocUpdateFormComponent;
  let fixture: ComponentFixture<BlocUpdateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlocUpdateFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlocUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
