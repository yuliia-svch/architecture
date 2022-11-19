import { Component } from '@angular/core';
import { MedicalInstitution } from '../medical-institution';
import { MedicalInstitutionService } from '../medical-institution-service.service';

@Component({
  selector: 'app-medical-institution-list',
  templateUrl: './medical-institution-list.component.html',
  styleUrls: ['./medical-institution-list.component.css']
})
export class MedicalInstitutionListComponent {
  medicalInstitutions: MedicalInstitution[];

  constructor(private medicalInstitutionService: MedicalInstitutionService) {
  }

  ngOnInit() {
    this.medicalInstitutionService.findAll().subscribe(data => {
      this.medicalInstitutions = data;
    });
  }
}
