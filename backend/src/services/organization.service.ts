import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Organization } from '../graphql/types';
import { CreateOrganizationInput } from '../graphql/inputs/create-organization.input';
import { UpdateOrganizationInput } from '../graphql/inputs/update-organization.input';

@Injectable()
export class OrganizationService {
  constructor(
    @InjectRepository(Organization)
    private organizationRepository: Repository<Organization>,
  ) {}

  async create(input: CreateOrganizationInput): Promise<Organization> {
    const organization = this.organizationRepository.create(input);
    return this.organizationRepository.save(organization);
  }

  async findAll(): Promise<Organization[]> {
    return this.organizationRepository.find();
  }

  async findOne(id: number): Promise<Organization> {
    return this.organizationRepository.findOneOrFail({ where: { id: id } });
  }

  async update(
    id: number,
    input: UpdateOrganizationInput,
  ): Promise<Organization> {
    await this.organizationRepository.update(id, input);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.organizationRepository.delete(id);
  }
}
