import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DeclarationRequest } from '../declaration-request';
import { TokenStorageService } from '../token-storage.service';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { DeclarationRequestService } from '../declaration-request.service';
import { DeclarationRequestFormConsultantComponent } from '../declaration-request-form-consultant/declaration-request-form-consultant.component'

@Component({
  selector: 'app-declaration-request-list-user',
  templateUrl: './declaration-request-list-user.component.html',
  styleUrls: ['./declaration-request-list-user.component.css']
})
export class DeclarationRequestListUserComponent {
  @Input() declarationRequests: DeclarationRequest[];
  @Input() isUser = true;
  @Input() userId : string;
  @Output() newItemEvent = new EventEmitter<boolean>();
  constructor(private dialog: MatDialog,
    private declarationRequestService: DeclarationRequestService) {
    }

    process(userId: string, doctorId : string): void {
      let selectedDR = {
             userId: '',
             doctorId: '',
             medData: '',
             comment: '',
             userName: '',
             doctorName: '',
             status: '',
             consultantId: ''
        };
        this.declarationRequests.forEach(function (value : any) {
           if(value.userId == userId && value.doctorId == doctorId) {
                selectedDR.userId = userId;
                selectedDR.doctorId = doctorId;
                selectedDR.status = value.status;
                selectedDR.doctorName = value.doctorName;
                selectedDR.medData = value.medData;
                selectedDR.userName = value.userName;
                selectedDR.comment = value.comment;
                selectedDR.consultantId = value.consultantId;
           }
        });
        const dialogRef = this.dialog.open(DeclarationRequestFormConsultantComponent, {
             width: '30%',
             maxHeight: '100vh',
             data: {
                 declaration: selectedDR
             },
        });
        dialogRef.afterClosed().subscribe((result : any) => {
            if(result.info != null && result.info != '') {
                 selectedDR.status = 'In Processing';
                 selectedDR.comment = result.info;
                 selectedDR.consultantId = this.userId;
                 this.declarationRequestService.addDeclarationRequest(selectedDR)
                      .subscribe(() => {
                        this.newItemEvent.emit(true);
                      });
            }
        });
    }
}
