import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class AppService {
  authenticated = false;
  error = false;
  userUrl: string;

  constructor(private http: HttpClient) {
    this.userUrl = 'http://localhost:8080/login';
  }

  authenticate(username : string, password: string) : Observable<any> {
        return this.http.post(this.userUrl, {username, password}, httpOptions);
    }

}
