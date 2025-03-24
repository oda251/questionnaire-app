import { Module } from '@nestjs/common';
import { QuestionnaireService } from '../services/questionnaire.service';
import { QuestionnaireResolver } from '../graphql/resolvers/questionnaire.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Questionnaire } from '@/entities';
import { QuestionModule } from './question.module';

@Module({
  imports: [TypeOrmModule.forFeature([Questionnaire]), QuestionModule],
  providers: [QuestionnaireService, QuestionnaireResolver],
  exports: [QuestionnaireService],
})
export class QuestionnaireModule {}
