import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedicalInstitutionListComponent } from './medical-institution-list/medical-institution-list.component';

const routes: Routes = [
  { path: 'medicalInstitutions', component: MedicalInstitutionListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
