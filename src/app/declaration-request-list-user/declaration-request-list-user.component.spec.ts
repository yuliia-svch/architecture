import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeclarationRequestListUserComponent } from './declaration-request-list-user.component';

describe('DeclarationRequestListUserComponent', () => {
  let component: DeclarationRequestListUserComponent;
  let fixture: ComponentFixture<DeclarationRequestListUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeclarationRequestListUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeclarationRequestListUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
