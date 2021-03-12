import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  apiUrl = environment.apiUrl;
  constructor ( private http: HttpClient) { }
  
  public  updateProfile (user :User): Observable<any> {
    return this.http.put<any>(this.apiUrl+'/updateUserProfile', user, { responseType: 'text' as 'json' })
  }

  public getUser (email: String): Observable<any> {
    return this.http.get<any>(this.apiUrl+'/retrieveUserInformation'+'/'+email, { responseType: 'text' as 'json' })
  }
}
