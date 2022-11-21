import {Component, Inject} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { DeclarationRequestFormComponent } from '../declaration-request-form/declaration-request-form.component'
import { DeclarationRequest } from '../declaration-request';
import { DeclarationRequestService } from '../declaration-request.service';

@Component({
  selector: 'app-medical-institution-details',
  templateUrl: './medical-institution-details.component.html',
  styleUrls: ['./medical-institution-details.component.css']
})
export class MedicalInstitutionDetailsComponent {
  declarationRequest : DeclarationRequest;
  changed : boolean;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialog: MatDialog,
  private declarationRequestService: DeclarationRequestService) {
    this.declarationRequest = new DeclarationRequest();
    this.changed = false;
  }


  sign(doctorId : string): void {
    let selectedDoc = {
         id: '',
         name: ''
    };
    this.data.doctors.forEach(function (value : any) {
       if(value.id == doctorId) {
            selectedDoc.id = doctorId;
            selectedDoc.name = value.firstName + ' ' + value.lastName
       }
    });
    this.openDialog(selectedDoc);
  }
  openDialog(selectedDoc: any): void {
        const dialogRef = this.dialog.open(DeclarationRequestFormComponent, {
          width: '30%',
          maxHeight: '100vh',
          data: {
             doctor: selectedDoc
          },
        });
        dialogRef.afterClosed().subscribe((result : any) => {
           if(result.info != null && result.info != '') {
              this.data.doctors.forEach(function (value : any) {
                     if(value.id == selectedDoc.id) {
                          value.signed = true;
                     }
              });
              this.declarationRequest.doctorId = selectedDoc.id;
              this.declarationRequest.status = 'New';
              this.declarationRequest.medData = result.info;
              this.declarationRequestService.addDeclarationRequest(this.declarationRequest)
                                            .subscribe(() => {this.declarationRequest = new DeclarationRequest();
                                            this.changed = true;});

           } else {
              this.changed = false;
           }
        });
      }
}
