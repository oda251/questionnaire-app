import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { RoleService } from '../../services/role.service';
import { Role } from '../types';
import { CreateRoleInput } from '../inputs/create-role.input';
import { UpdateRoleInput } from '../inputs/update-role.input';

@Resolver(() => Role)
export class RoleResolver {
  constructor(private roleService: RoleService) {}

  @Query(() => [Role])
  async roles(): Promise<Role[]> {
    return this.roleService.findAll();
  }

  @Query(() => Role)
  async role(@Args('id') id: number): Promise<Role> {
    return this.roleService.findOne(id);
  }

  @Mutation(() => Role)
  async createRole(@Args('input') input: CreateRoleInput): Promise<Role> {
    return this.roleService.create(input);
  }

  @Mutation(() => Role)
  async updateRole(@Args('input') input: UpdateRoleInput): Promise<Role> {
    return this.roleService.update(input.id, input);
  }

  @Mutation(() => Boolean)
  async deleteRole(@Args('id') id: number): Promise<boolean> {
    await this.roleService.remove(id);
    return true;
  }
}
