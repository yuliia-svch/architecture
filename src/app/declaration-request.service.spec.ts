import { TestBed } from '@angular/core/testing';

import { DeclarationRequestService } from './declaration-request.service';

describe('DeclarationRequestService', () => {
  let service: DeclarationRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeclarationRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
