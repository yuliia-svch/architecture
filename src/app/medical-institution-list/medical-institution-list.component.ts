import { Component, Input, HostListener, Output, EventEmitter } from '@angular/core';
import { MedicalInstitution } from '../medical-institution';
import { Doctor } from '../doctor';
import { MedicalInstitutionService } from '../medical-institution-service.service';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute } from '@angular/router';
import { MedicalInstitutionDetailsComponent } from '../medical-institution-details/medical-institution-details.component'
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-medical-institution-list',
  templateUrl: './medical-institution-list.component.html',
  styleUrls: ['./medical-institution-list.component.css']
})
export class MedicalInstitutionListComponent {
  @Input() medicalInstitutions: MedicalInstitution[];
  doctors: Doctor[];
  @Output() newItemEvent = new EventEmitter<boolean>();
  constructor(private medicalInstitutionService: MedicalInstitutionService, private dialog: MatDialog) {
  }

  seeFull(id: string) {
      this.medicalInstitutionService.findDoctorsByMedInst(id).subscribe(data => {
         this.doctors = data;
         let selectedMed = {
                  id: '',
                  name: '',
                  address: '',
                  city: '',
                  phoneNumber: '',
                  imageUrl: '',
         };
         this.medicalInstitutions.forEach(function (value) {
            if(value.id == id) {
               selectedMed = value;
            }
         });
         this.openDialog(selectedMed);
      });

  }
  openDialog(selectedMed: any): void {
      const dialogRef = this.dialog.open(MedicalInstitutionDetailsComponent, {
        width: '50%',
        maxHeight: '100vh',
        data: {
           details: selectedMed,
           doctors: this.doctors,
        },
      });
      dialogRef.afterClosed().subscribe((result : any) => {
        if(result == true) {
          this.newItemEvent.emit(true);
        }
        this.doctors = [];
      });

    }
}
