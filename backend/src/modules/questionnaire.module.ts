import { Module } from '@nestjs/common';
import { QuestionnaireService } from '../services/questionnaire.service';
import { QuestionnaireResolver } from '../graphql/resolvers/questionnaire.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Questionnaire, Question, QuestionnaireOrganization } from '@/entities';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Questionnaire,
      Question,
      QuestionnaireOrganization,
    ]),
  ],
  providers: [QuestionnaireService, QuestionnaireResolver],
  exports: [QuestionnaireService],
})
export class QuestionnaireModule {}
