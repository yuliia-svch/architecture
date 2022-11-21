import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import { Router } from '@angular/router';
import { MedicalInstitution } from './medical-institution';
import { MedicalInstitutionService } from './medical-institution-service.service';
import { DeclarationRequest } from './declaration-request';
import { DeclarationRequestService } from './declaration-request.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Institutions';
  medicalInstitutions: MedicalInstitution[];
  declarationRequests: DeclarationRequest[];
  constructor(private medicalInstitutionService: MedicalInstitutionService,
  private declarationRequestService: DeclarationRequestService) {
  this.refresh(true);
  }
  onSelected(value:string): void {
  	this.medicalInstitutionService.findByCity(value).subscribe(data => {
        this.medicalInstitutions = data;
    });
  }

  refresh(newItem: boolean) {
      if(newItem == true) {
        this.declarationRequestService.findDeclarationsByUser('1').subscribe((data: any) => {
           this.declarationRequests = data;
        });
      }
  }
}
