import { Component, HostListener } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isTransparent: boolean = true;

  constructor(private authService: AuthService) { }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Detect the scroll position
    const offset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    // If the scroll position is greater than 0, make the header non-transparent
    this.isTransparent = offset === 0;
  }
  isLoggedIn(): boolean {
    return this.authService.getLoggedIn();
  }
  
}
