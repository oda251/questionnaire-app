import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Question } from '../graphql/types';
import { CreateQuestionInput } from '../graphql/inputs/create-question.input';
import { UpdateQuestionInput } from '../graphql/inputs/update-question.input';

@Injectable()
export class QuestionService {
  constructor(
    @InjectRepository(Question)
    private questionRepository: Repository<Question>,
  ) {}

  async create(input: CreateQuestionInput): Promise<Question> {
    const question = this.questionRepository.create(input);
    return this.questionRepository.save(question);
  }

  async findAll(): Promise<Question[]> {
    return this.questionRepository.find();
  }

  async findOne(id: number): Promise<Question> {
    return this.questionRepository.findOneOrFail({ where: { id: id } });
  }

  async update(id: number, input: UpdateQuestionInput): Promise<Question> {
    await this.questionRepository.update(id, input);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.questionRepository.delete(id);
  }
}
