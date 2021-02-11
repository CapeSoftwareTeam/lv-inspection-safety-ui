import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterserviceService {
  apiUrl = environment.apiUrl;
  constructor ( private http: HttpClient) { }
  
  public  register (user :User): Observable<any> {
    return this.http.post<any>('apiUrl/registerUser', user)
  }
}
