import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeclarationRequestFormConsultantComponent } from './declaration-request-form-consultant.component';

describe('DeclarationRequestFormConsultantComponent', () => {
  let component: DeclarationRequestFormConsultantComponent;
  let fixture: ComponentFixture<DeclarationRequestFormConsultantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeclarationRequestFormConsultantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeclarationRequestFormConsultantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
