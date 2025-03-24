import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { QuestionnaireService } from '@/services/questionnaire.service';
import { QuestionService } from '@/services/question.service';
import { Questionnaire, Question } from '@/entities';
import { CreateQuestionnaireInput } from '../inputs/create-questionnaire.input';
import { UpdateQuestionnaireInput } from '../inputs/update-questionnaire.input';

@Resolver(() => Questionnaire)
export class QuestionnaireResolver {
  constructor(
    private questionnaireService: QuestionnaireService,
    private questionService: QuestionService,
  ) {}

  @Query(() => [Questionnaire])
  async questionnaires(): Promise<Questionnaire[]> {
    return this.questionnaireService.findAll();
  }

  @Query(() => Questionnaire)
  async questionnaire(@Args('id') id: string): Promise<Questionnaire> {
    return this.questionnaireService.findOne(id);
  }

  @Query(() => [Questionnaire])
  async questionnairesByUserId(
    @Args('userId') userId: string,
  ): Promise<Questionnaire[]> {
    return this.questionnaireService.findByUserId(userId);
  }

  @Mutation(() => Questionnaire)
  async createQuestionnaire(
    @Args('input') input: CreateQuestionnaireInput,
  ): Promise<Questionnaire> {
    return this.questionnaireService.create(input);
  }

  @Mutation(() => Questionnaire)
  async updateQuestionnaire(
    @Args('input') input: UpdateQuestionnaireInput,
  ): Promise<Questionnaire> {
    return this.questionnaireService.update(input.id, input);
  }

  @Mutation(() => Boolean)
  async deleteQuestionnaire(@Args('id') id: string): Promise<boolean> {
    await this.questionnaireService.remove(id);
    return true;
  }

  @ResolveField(() => [Question])
  async questions(@Parent() questionnaire: Questionnaire): Promise<Question[]> {
    return this.questionService.findByQuestionnaireId(questionnaire.id);
  }
}
