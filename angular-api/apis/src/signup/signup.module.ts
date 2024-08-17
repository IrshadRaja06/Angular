import { Module } from '@nestjs/common';
import { SignupController } from './signup.controller';
import { SignupService } from './signup.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { signupEntity } from 'src/entities/signup.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([signupEntity])
  ],
  controllers: [SignupController],
  providers: [SignupService]
})
export class SignupModule {}
