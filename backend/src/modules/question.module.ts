import { Module } from '@nestjs/common';
import { QuestionService } from '../services/question.service';
import { QuestionResolver } from '../graphql/resolvers/question.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Question, Choice } from '@/entities';

@Module({
  imports: [TypeOrmModule.forFeature([Question, Choice])],
  providers: [QuestionService, QuestionResolver],
  exports: [QuestionService],
})
export class QuestionModule {}
