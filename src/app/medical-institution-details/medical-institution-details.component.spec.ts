import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalInstitutionDetailsComponent } from './medical-institution-details.component';

describe('MedicalInstitutionDetailsComponent', () => {
  let component: MedicalInstitutionDetailsComponent;
  let fixture: ComponentFixture<MedicalInstitutionDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicalInstitutionDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicalInstitutionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
