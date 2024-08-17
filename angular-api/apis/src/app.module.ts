import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SignupModule } from './signup/signup.module';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { signupEntity } from './entities/signup.entity';
import { CartController } from './cart/cart.controller';
import { CartService } from './cart/cart.service';
import { CartItem } from './entities/card-item.entity';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';



@Module({
  imports: [
    SignupModule,
    TypeOrmModule.forFeature([CartItem]),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'fairoj',
      database: 'k.r.fashion',
      entities: [signupEntity],
      synchronize: true
    })
  ],
  controllers: [CartController, UserController],
  providers: [CartService, UserService],

  
})
export class AppModule {}
