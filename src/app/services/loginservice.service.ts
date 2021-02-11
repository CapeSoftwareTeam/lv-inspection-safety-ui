import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  constructor ( private http: HttpClient) { }
  
  public login (user :User): Observable<any> {
    return this.http.post<any>("http://localhost:8080/login", user)
  }
}



