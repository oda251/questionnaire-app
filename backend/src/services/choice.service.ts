import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Choice } from '../graphql/types';
import { CreateChoiceInput } from '../graphql/inputs/create-choice.input';
import { UpdateChoiceInput } from '../graphql/inputs/update-choice.input';

@Injectable()
export class ChoiceService {
  constructor(
    @InjectRepository(Choice)
    private choiceRepository: Repository<Choice>,
  ) {}

  async create(input: CreateChoiceInput): Promise<Choice> {
    const choice = this.choiceRepository.create(input);
    return this.choiceRepository.save(choice);
  }

  async findAll(): Promise<Choice[]> {
    return this.choiceRepository.find();
  }

  async findOne(id: number): Promise<Choice> {
    return this.choiceRepository.findOneOrFail({ where: { id: id } });
  }

  async update(id: number, input: UpdateChoiceInput): Promise<Choice> {
    await this.choiceRepository.update(id, input);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.choiceRepository.delete(id);
  }
}
