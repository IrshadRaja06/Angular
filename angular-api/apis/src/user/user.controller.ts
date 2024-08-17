import { Controller, Post, Body, Res, Req, HttpStatus } from '@nestjs/common';
import { Request, Response } from 'express';
import { LoginDto } from 'src/dto/login.dto';

@Controller('user')
export class UserController {
  @Post('login')
  async login(@Body() loginDto: LoginDto, @Req() req: Request, @Res() res: Response) {
    // Your authentication logic here
    if (loginDto.username === 'example' && loginDto.password === 'password') {
      // Assuming login is successful, set up session or JWT token
      // For simplicity, let's assume a session-based approach
      (req.session as any).user = loginDto.username;
      return res.status(HttpStatus.OK).json({ message: 'Successful login', username: loginDto.username });
    } else {
      return res.status(HttpStatus.UNAUTHORIZED).json({ message: 'Invalid credentials' });
    }
  }
}
