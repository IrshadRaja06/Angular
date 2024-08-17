import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { signupEntity } from 'src/entities/signup.entity';

@Injectable()
export class SignupService {
  
  constructor(
    @InjectRepository(signupEntity)
    private readonly repo: Repository<signupEntity>,
  ) {}
 async register(details:{username: string, email: string, password: string}) {
  try {
    // Check if the user with the provided email already exists
    const existingUser = await this.repo.findOne({ where: { email: details.email } });
    if (existingUser) {
      return { message: 'User with the same email already exists' };
    }

    // Check if the user with the provided username already exists
    const existingUsername = await this.repo.findOne({ where: { username: details.username } });
    if (existingUsername) {
      return { message: 'User with the same username already exists' };
    }

    // If the user doesn't exist, create and save the user
    const user = this.repo.create({ username: details.username, email: details.email, password: details.password });
    const savedUser = await this.repo.save(user);
    return { message: 'User registered successfully', user: savedUser };
  } catch (error) {
    console.error(error);
    return { message: 'Failed to register user' };
  }

}

async login(credentials: { username: string; password: string }) {
  const user = await this.repo.findOne({ where: { username: credentials.username } });

  if (user) {
    // User found, check if the password matches
    if (user.password === credentials.password) {
      return { message: 'Successful login' }; // Password matches, successful login
    } else {
      return { message: 'Invalid password' }; // Password doesn't match
    }
  } else {
    return { message: 'Username not found' }; // Username not found in the database
  }
}

}


