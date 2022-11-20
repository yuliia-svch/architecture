import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MedicalInstitutionListComponent } from './medical-institution-list/medical-institution-list.component';
import { MedicalInstitutionService } from './medical-institution-service.service';
import { MedicalInstitutionDetailsComponent } from './medical-institution-details/medical-institution-details.component';

@NgModule({
  declarations: [
    AppComponent,
    MedicalInstitutionListComponent,
    MedicalInstitutionDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    MatDialogModule
  ],
  providers: [MedicalInstitutionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
