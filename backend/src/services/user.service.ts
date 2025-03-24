import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities';
import { CreateUserInput } from '../graphql/inputs/create-user.input';
import { UpdateUserInput } from '../graphql/inputs/update-user.input';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async create(input: CreateUserInput): Promise<User> {
    const salt = await bcrypt.genSalt();
    input.password_hash = await bcrypt.hash(input.password, salt);
    const user = this.userRepository.create(input);
    return this.userRepository.save(user);
  }

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findOne(options: { id?: string; email?: string }): Promise<User> {
    if (!options.id && !options.email) {
      throw new Error('id or email is required');
    }
    return this.userRepository.findOneOrFail({ where: options });
  }

  async update(id: string, input: UpdateUserInput): Promise<User> {
    await this.userRepository.update(id, input);
    return this.findOne({
      id: id,
    });
  }

  async remove(id: string): Promise<void> {
    await this.userRepository.delete(id);
  }
}
