import { Body, Controller, Get, Post } from '@nestjs/common';
import { SignupService } from './signup.service';

@Controller('signup')
export class SignupController {
  constructor(private readonly signupService: SignupService) {}

  @Get()
  getDetails() {
    return "Signup Works";
  }

  @Post('login') // Endpoint for login
  async login(@Body() credentials: { username: string; password: string }) {
    return this.signupService.login(credentials);
  }

  @Post('register') // Endpoint for registering/signup
  async register(@Body() details: { username: string; email: string; password: string }) {
    return this.signupService.register(details);
  }
}
