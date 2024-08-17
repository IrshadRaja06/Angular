import { Router } from "@angular/router";
import { SignUpService } from "./sign-up.service";

export class SignUpComponent {
  userData = { username: '', email: '', password: '', otp: '' };
  signupError: string | undefined;

  constructor(private signupService: SignUpService, private router: Router) {}

  signUp(signupForm: any) {
    if (signupForm.valid) {
      // Call a service method to send OTP to the user's email or phone number
      this.signupService.sendOTP(this.userData.email)
        .subscribe({
          next: () => {
            // If OTP sent successfully, proceed with signing up
            this.verifyOTP();
          },
          error: (error: any) => {
            console.error(error);
            this.signupError = 'An error occurred while sending OTP. Please try again later.';
          }
        });
    }
  }

  verifyOTP() {
    this.signupService.verifyOTP(this.userData.email, this.userData.otp)
      .subscribe({
        next: (response: { message: string | undefined; }) => {
          console.log(response);
          if (response.message === 'OTP verified successfully') {
            // If OTP verified successfully, proceed with signing up
            this.completeSignUp();
          } else {
            this.signupError = response.message; // Set error message from response
          }
        },
        error: (error: any) => {
          console.error(error);
          this.signupError = 'An error occurred while verifying OTP. Please try again later.';
        }
      });
  }

  completeSignUp() {
    this.signupService.signUp(this.userData.username, this.userData.email, this.userData.password)
      .subscribe({
        next: (response: { message: string | undefined; }) => {
          console.log(response);
          if (response.message === 'User registered successfully') {
            this.router.navigate(['/login']);
          } else {
            this.signupError = response.message; // Set error message from response
          }
        },
        error: (error: any) => {
          console.error(error);
          this.signupError = 'An error occurred while signing up. Please try again later.';
        }
      });
  }
}
