  // nestjs.service.ts
  import { Injectable } from '@angular/core';
  import { HttpClient } from '@angular/common/http'; // Importing HttpClientModule from Angular
  import { Observable } from 'rxjs';

  @Injectable({
    providedIn: 'root'
  })
  export class NestjsService {
    private baseUrl = 'http://localhost:3000/api/signup'; // Update with your backend URL

    constructor(private http: HttpClient) {}

    getData(): Observable<any> {
      return this.http.get<any>(`${this.baseUrl}/data`); // Making a GET request to the backend
    }

    postData(data: any): Observable<any> {
      return this.http.post<any>(`${this.baseUrl}/data`, data); // Making a POST request to the backend
    }
  }
