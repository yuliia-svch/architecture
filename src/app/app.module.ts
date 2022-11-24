import { NgModule, Injectable } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MedicalInstitutionListComponent } from './medical-institution-list/medical-institution-list.component';
import { MedicalInstitutionService } from './medical-institution-service.service';
import { DeclarationRequestService } from './declaration-request.service';
import { MedicalInstitutionDetailsComponent } from './medical-institution-details/medical-institution-details.component';
import { DeclarationRequestFormComponent } from './declaration-request-form/declaration-request-form.component';
import { DeclarationRequestListUserComponent } from './declaration-request-list-user/declaration-request-list-user.component';
import { AppService } from './app.service';
import { TokenStorageService } from './token-storage.service';
import { Observable } from 'rxjs';
import { DeclarationRequestFormConsultantComponent } from './declaration-request-form-consultant/declaration-request-form-consultant.component';

@Injectable()
export class XhrInterceptor implements HttpInterceptor {
  constructor(private token: TokenStorageService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authReq = req;
    const token = this.token.getToken();
    if (token != null) {
      authReq = req.clone({ headers: req.headers.set('Authorization', 'Bearer ' + token) });
    }
    return next.handle(authReq);
  }
}

@NgModule({
  declarations: [
    AppComponent,
    MedicalInstitutionListComponent,
    MedicalInstitutionDetailsComponent,
    DeclarationRequestFormComponent,
    DeclarationRequestListUserComponent,
    DeclarationRequestFormConsultantComponent
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
    MatCheckboxModule,
    MatTabsModule,
    BrowserAnimationsModule
  ],
  providers: [MedicalInstitutionService, DeclarationRequestService, AppService,
  { provide: HTTP_INTERCEPTORS, useClass: XhrInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
