import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DeclarationRequest } from './declaration-request';
import { Observable } from 'rxjs';

@Injectable()
export class DeclarationRequestService {
  private declarationsUrl: string;
  private declarationsByUserUrl: string;
  constructor(private http: HttpClient) {
    this.declarationsUrl = 'http://localhost:8080/declarationRequests';
    this.declarationsByUserUrl = 'http://localhost:8080/declarationRequestsByUser';
  }

  public addDeclarationRequest(declarationRequest: DeclarationRequest) {
    return this.http.post<DeclarationRequest>(this.declarationsUrl, declarationRequest);
  }

  public findDeclarationsByUser(userId : string): Observable<DeclarationRequest[]> {
        const options = userId ?
          { params: new HttpParams().set('userId', userId) } : {};
        return this.http.get<DeclarationRequest[]>(this.declarationsByUserUrl, options);
      }

}
