import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MedicalInstitutionListComponent } from './medical-institution-list/medical-institution-list.component';
import { MedicalInstitutionService } from './medical-institution-service.service';
import { DeclarationRequestService } from './declaration-request.service';
import { MedicalInstitutionDetailsComponent } from './medical-institution-details/medical-institution-details.component';
import { DeclarationRequestFormComponent } from './declaration-request-form/declaration-request-form.component';
import { DeclarationRequestListUserComponent } from './declaration-request-list-user/declaration-request-list-user.component';

@NgModule({
  declarations: [
    AppComponent,
    MedicalInstitutionListComponent,
    MedicalInstitutionDetailsComponent,
    DeclarationRequestFormComponent,
    DeclarationRequestListUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule
  ],
  providers: [MedicalInstitutionService, DeclarationRequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
