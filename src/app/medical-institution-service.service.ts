import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { MedicalInstitution } from './medical-institution';
import { Doctor } from './doctor';
import { Observable } from 'rxjs';

@Injectable()
export class MedicalInstitutionService {

  private medicalInstitutionsUrl: string;
  private doctorsUrl: string;

  constructor(private http: HttpClient) {
    this.medicalInstitutionsUrl = 'http://localhost:8080/user/medicalInstitutions';
    this.doctorsUrl = 'http://localhost:8080/user/doctors';
  }

  public findByCity(city : string): Observable<MedicalInstitution[]> {
    const options = city ?
      { params: new HttpParams().set('city', city) } : {};
    return this.http.get<MedicalInstitution[]>(this.medicalInstitutionsUrl, options);
  }

  public findDoctorsByMedInst(id : string): Observable<Doctor[]> {
      const options = id ?
        { params: new HttpParams().set('medInstId', id) } : {};
      return this.http.get<Doctor[]>(this.doctorsUrl, options);
    }

}
