import { Controller, Post, Body, UseGuards, Req, Param, Get, Delete } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CartService } from './cart.service';
import { User } from '../entities/user.entity';
import { CartItem } from '../entities/card-item.entity';

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post('add')
  async addToCart(@Body() body: { username: string, productName: string, size: string, cost: number }, @Req() req): Promise<any> {
    const user: User = req.user;
    return await this.cartService.addToCart(user, body.productName, body.size, body.cost);
  }
}
