import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { OrganizationService } from '../../services/organization.service';
import { Organization } from '../../entities';
import { CreateOrganizationInput } from '../inputs/create-organization.input';
import { UpdateOrganizationInput } from '../inputs/update-organization.input';

@Resolver(() => Organization)
export class OrganizationResolver {
  constructor(private organizationService: OrganizationService) {}

  @Query(() => [Organization])
  async organizations(): Promise<Organization[]> {
    return this.organizationService.findAll();
  }

  @Query(() => Organization)
  async organization(@Args('id') id: string): Promise<Organization> {
    return this.organizationService.findOne(id);
  }

  @Mutation(() => Organization)
  async createOrganization(
    @Args('input') input: CreateOrganizationInput,
  ): Promise<Organization> {
    return this.organizationService.create(input);
  }

  @Mutation(() => Organization)
  async updateOrganization(
    @Args('input') input: UpdateOrganizationInput,
  ): Promise<Organization> {
    return this.organizationService.update(input.id, input);
  }

  @Mutation(() => Boolean)
  async deleteOrganization(@Args('id') id: string): Promise<boolean> {
    await this.organizationService.remove(id);
    return true;
  }
}
