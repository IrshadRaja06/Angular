import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class CartItem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  productName: string;

  @Column()
  size: string;

  @Column()
  cost: number;

  @ManyToOne(() => User, user => user.cartItems)
  user: User;
}