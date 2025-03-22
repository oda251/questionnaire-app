import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuestionnaireService } from '../services/questionnaire.service';
import { QuestionnaireResolver } from '../graphql/resolvers/questionnaire.resolver';
import { Question, Choice, Questionnaire } from '../graphql/types';
import { QuestionService } from '../services/question.service';
import { QuestionResolver } from '../graphql/resolvers/question.resolver';
import { ChoiceService } from '../services/choice.service';
import { ChoiceResolver } from '../graphql/resolvers/choice.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Questionnaire, Question, Choice])],
  providers: [
    QuestionnaireService,
    QuestionnaireResolver,
    QuestionService,
    QuestionResolver,
    ChoiceService,
    ChoiceResolver,
  ],
  exports: [QuestionnaireService],
})
export class QuestionnaireModule {}
