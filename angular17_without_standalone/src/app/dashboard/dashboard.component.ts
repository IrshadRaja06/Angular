import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service'; // Import AuthService

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  username: string | undefined;

  constructor(private router: Router, 
              private route: ActivatedRoute, 
              private authService: AuthService) { }

  ngOnInit() {
    this.username = this.authService.getLoggedInUsername(); // Retrieve username here
  }

  logout() {
    this.authService.setLoggedIn(false);
     // Clear username from AuthService
    this.router.navigate(['/']);
  }
}
