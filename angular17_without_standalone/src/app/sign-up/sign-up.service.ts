import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {
  constructor(private http: HttpClient) { }

  sendOTP(email: string): Observable<any> {
    // Make HTTP request to send OTP
    return this.http.post<any>('http://localhost:3000/signup/sendOTP', { email });
  }

  verifyOTP(email: string, otp: string): Observable<any> {
    // Make HTTP request to verify OTP
    return this.http.post<any>('http://localhost:3000/signup/verifyOTP', { email, otp });
  }

  signUp(username: string, email: string, password: string): Observable<any> {
    // Make HTTP request to sign up
    return this.http.post<any>('http://localhost:3000/signup/register', { username, email, password });
  }
}
