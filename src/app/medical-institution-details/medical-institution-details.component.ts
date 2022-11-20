import {Component, Inject} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-medical-institution-details',
  templateUrl: './medical-institution-details.component.html',
  styleUrls: ['./medical-institution-details.component.css']
})
export class MedicalInstitutionDetailsComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  sign(doctorId : string): void {
  }
}
