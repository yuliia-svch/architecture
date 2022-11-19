import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalInstitutionListComponent } from './medical-institution-list.component';

describe('MedicalInstitutionListComponent', () => {
  let component: MedicalInstitutionListComponent;
  let fixture: ComponentFixture<MedicalInstitutionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicalInstitutionListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicalInstitutionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
