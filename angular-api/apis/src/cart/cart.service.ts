// cart.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CartItem } from '../entities/card-item.entity';
import { User } from '../entities/user.entity';

@Injectable()
export class CartService {
  constructor(
    @InjectRepository(CartItem)
    private readonly cartItemRepository: Repository<CartItem>,
  ) {}

  async addToCart(user: User, productName: string, size: string, cost: number): Promise<CartItem> {
    const cartItem = new CartItem();
    cartItem.productName = productName;
    cartItem.size = size;
    cartItem.cost = cost;
    cartItem.user = user;
    return await this.cartItemRepository.save(cartItem);
  }
}
