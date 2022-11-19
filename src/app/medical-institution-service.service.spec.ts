import { TestBed } from '@angular/core/testing';

import { MedicalInstitutionServiceService } from './medical-institution-service.service';

describe('MedicalInstitutionServiceService', () => {
  let service: MedicalInstitutionServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedicalInstitutionServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
