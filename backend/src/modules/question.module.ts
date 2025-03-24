import { Module } from '@nestjs/common';
import { QuestionService } from '../services/question.service';
import { QuestionResolver } from '../graphql/resolvers/question.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Question, Choice } from '@/entities';
import { ChoiceModule } from './choice.module';

@Module({
  imports: [TypeOrmModule.forFeature([Question, Choice]), ChoiceModule],
  providers: [QuestionService, QuestionResolver],
  exports: [QuestionService, TypeOrmModule],
})
export class QuestionModule {}
