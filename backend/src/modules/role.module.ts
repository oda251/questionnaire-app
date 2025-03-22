import { Module } from '@nestjs/common';
import { RoleService } from '../services/role.service';
import { RoleResolver } from '../graphql/resolvers/role.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Role } from '@/entities';

@Module({
  imports: [TypeOrmModule.forFeature([Role])],
  providers: [RoleService, RoleResolver],
  exports: [RoleService],
})
export class RoleModule {}
