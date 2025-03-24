import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Choice } from '../entities';
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

  async findByQuestionId(questionId: string): Promise<Choice[]> {
    return this.choiceRepository.find({ where: { question_id: questionId } });
  }

  async findOne(id: string): Promise<Choice> {
    return this.choiceRepository.findOneOrFail({ where: { id: id } });
  }

  async update(id: string, input: UpdateChoiceInput): Promise<Choice> {
    await this.choiceRepository.update(id, input);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.choiceRepository.delete(id);
  }
}
