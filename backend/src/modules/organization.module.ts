import { Module } from '@nestjs/common';
import { OrganizationService } from '../services/organization.service';
import { OrganizationResolver } from '../graphql/resolvers/organization.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Organization } from '@/entities';

@Module({
  imports: [TypeOrmModule.forFeature([Organization])],
  providers: [OrganizationService, OrganizationResolver],
  exports: [OrganizationService],
})
export class OrganizationModule {}
