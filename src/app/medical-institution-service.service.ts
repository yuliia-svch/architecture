import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MedicalInstitution } from './medical-institution';
import { Observable } from 'rxjs';

@Injectable()
export class MedicalInstitutionService {

  private medicalInstitutionsUrl: string;

  constructor(private http: HttpClient) {
    this.medicalInstitutionsUrl = 'http://localhost:8080/medicalInstitutions';
  }

  public findAll(): Observable<MedicalInstitution[]> {
    return this.http.get<MedicalInstitution[]>(this.medicalInstitutionsUrl);
  }
}
