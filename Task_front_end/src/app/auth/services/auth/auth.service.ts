import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const BASE_URL = "http://task.us-east-1.elasticbeanstalk.com/";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : HttpClient) { }

  signup(signupRequest : any): Observable<any> {
    return this.http.post(BASE_URL+"/api/auth/signup",signupRequest);
  }

  login(loginRequest : any): Observable<any> {
    return this.http.post(BASE_URL+"/api/auth/login",loginRequest);
  }
}
