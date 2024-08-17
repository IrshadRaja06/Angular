// login.component.ts
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginError: string | undefined;
  username: string = '';
  password: string = '';

  constructor(private http: HttpClient, private router: Router, private authService: AuthService) { }

  
login() {
  // Send HTTP POST request to NestJS login endpoint
  this.http.post<any>('http://localhost:3000/signup/login', { username: this.username, password: this.password })
    .subscribe({
      next: (response) => {
        console.log(response); 
        if (response.message === 'Successful login') {
          this.authService.setLoggedIn(true, this.username);
          this.router.navigate(['/']);
        } else {
          this.loginError = response.message; 
        }
      },
      error: (error) => {
        console.error(error);
        this.loginError = 'An error occurred. Please try again later.';
      }
    });
}

}
