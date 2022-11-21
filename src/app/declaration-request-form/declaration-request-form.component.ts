import { Component, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormControl, FormGroup, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-declaration-request-form',
  templateUrl: './declaration-request-form.component.html',
  styleUrls: ['./declaration-request-form.component.css']
})
export class DeclarationRequestFormComponent {
  form: FormGroup;
  info: string;
  constructor(private fb: FormBuilder,
                          private dialogRef: MatDialogRef<DeclarationRequestFormComponent>,
                          @Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit() {
    this.form = this.fb.group({
       info: [this.info, []]
    });
  }
  save() {
     this.dialogRef.close(this.form.value);
  }

  close() {
     this.dialogRef.close();
  }
}
