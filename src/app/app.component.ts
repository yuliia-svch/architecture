import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import { Router } from '@angular/router';
import { MedicalInstitution } from './medical-institution';
import { MedicalInstitutionService } from './medical-institution-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Medical Module';
  medicalInstitutions: MedicalInstitution[];
  constructor(private medicalInstitutionService: MedicalInstitutionService) {
  }
  onSelected(value:string): void {
  	this.medicalInstitutionService.findByCity(value).subscribe(data => {
        this.medicalInstitutions = data;
    });
  }

}
