import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
} from 'typeorm';
import { ObjectType, Field, ID } from '@nestjs/graphql';
import { User } from './User';

@ObjectType()
@Entity('roles')
export class Role {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: string;

  @Field(() => String)
  @Column()
  name: string;

  @Field(() => String)
  @Column()
  description: string;

  @Field(() => Date)
  @CreateDateColumn()
  created_at: Date;

  @Field(() => Date)
  @UpdateDateColumn()
  updated_at: Date;

  // Relations
  @Field(() => [User], { nullable: true })
  @ManyToMany(() => User, (user) => user.roles, {
    cascade: true,
    onDelete: 'CASCADE',
    nullable: true,
  })
  users: User[];
}
