import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { MedicalInstitution } from './medical-institution';
import { MedicalInstitutionService } from './medical-institution-service.service';
import { DeclarationRequest } from './declaration-request';
import { DeclarationRequestService } from './declaration-request.service';
import { AppService } from './app.service';
import { TokenStorageService } from './token-storage.service';
import {finalize} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Institutions';
  medicalInstitutions: MedicalInstitution[];
  declarationRequests: DeclarationRequest[];
  authenticated = false;
  authenticatedAsUser = false;
  authenticatedAsConsultant = false;
  error = false;
  userId : string;
  roles : any;
  credentials = {username: '', password: ''};
  constructor(private app: AppService,
              private medicalInstitutionService: MedicalInstitutionService,
              private declarationRequestService: DeclarationRequestService,
              private http: HttpClient,
              private tokenStorage: TokenStorageService) {
      if(this.authenticated == true) {
        this.refresh(true);
      }
  }

  logout() {
        this.tokenStorage.signOut();
        window.location.reload();
  }

  login() {
      this.app.authenticate(this.credentials.username, this.credentials.password).subscribe(
        (data : any) => {
                this.tokenStorage.saveToken(data.token);
                this.tokenStorage.saveUser(data);
                this.roles = this.tokenStorage.getUser().roles;
                this.userId = this.tokenStorage.getUser().id;
                this.authenticatedAsUser = this.roles.includes('ROLE_USER');
                this.authenticatedAsConsultant = this.roles.includes('ROLE_CONSULTANT');
                this.authenticated = true;
                this.error = false;
                this.refresh(true);
        },
        (err : any) => {
                this.error = true;
                this.authenticated = false;
        }
      );
    }

  onSelected(value:string): void {
  	this.medicalInstitutionService.findByCity(value).subscribe(data => {
        this.medicalInstitutions = data;
    });
  }

  refresh(newItem: boolean) {
      if(newItem == true) {
        if(this.authenticatedAsUser == true) {
          this.declarationRequestService.findDeclarationsByUser(this.userId).subscribe((data: any) => {
             this.declarationRequests = data;
          });
        } else if (this.authenticatedAsConsultant == true) {
            this.declarationRequestService.findAllDeclarations().subscribe((data: any) => {
               this.declarationRequests = data;
            });
        }
      }
  }
}
