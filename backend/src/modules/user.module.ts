import { Module } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { UserResolver } from '../graphql/resolvers/user.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '@/entities';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UserService, UserResolver],
  exports: [UserService],
})
export class UserModule {}
