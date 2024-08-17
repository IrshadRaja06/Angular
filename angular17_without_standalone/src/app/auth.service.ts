import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn: boolean = false;
  private loggedInUsername: string | undefined = undefined;

  constructor() { }

  // Method to set login status and username
  setLoggedIn(value: boolean, username?: string) {
    this.isLoggedIn = value;
    if (username) {
      this.loggedInUsername = username;
    }
  }

  // Method to check if user is logged in
  getLoggedIn(): boolean {
    return this.isLoggedIn;
  }

  // Method to get the logged in username
  getLoggedInUsername(): string | undefined {
    return this.loggedInUsername;
  }
}
