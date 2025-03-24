import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Role } from '../entities';
import { CreateRoleInput } from '../graphql/inputs/create-role.input';
import { UpdateRoleInput } from '../graphql/inputs/update-role.input';

@Injectable()
export class RoleService {
  constructor(
    @InjectRepository(Role)
    private roleRepository: Repository<Role>,
  ) {}

  async create(input: CreateRoleInput): Promise<Role> {
    const role = this.roleRepository.create(input);
    return this.roleRepository.save(role);
  }

  async findAll(): Promise<Role[]> {
    return this.roleRepository.find();
  }

  async findOne(id: string): Promise<Role> {
    return this.roleRepository.findOneOrFail({ where: { id: id } });
  }

  async update(id: string, input: UpdateRoleInput): Promise<Role> {
    await this.roleRepository.update(id, input);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.roleRepository.delete(id);
  }
}
