import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { QuestionnaireService } from '@/services/questionnaire.service';
import { Questionnaire } from '@/entities';
import { CreateQuestionnaireInput } from '../inputs/create-questionnaire.input';
import { UpdateQuestionnaireInput } from '../inputs/update-questionnaire.input';

@Resolver(() => Questionnaire)
export class QuestionnaireResolver {
  constructor(private questionnaireService: QuestionnaireService) {}

  @Query(() => [Questionnaire])
  async questionnaires(): Promise<Questionnaire[]> {
    return this.questionnaireService.findAll();
  }

  @Query(() => Questionnaire)
  async questionnaire(@Args('id') id: number): Promise<Questionnaire> {
    return this.questionnaireService.findOne(id);
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
  async deleteQuestionnaire(@Args('id') id: number): Promise<boolean> {
    await this.questionnaireService.remove(id);
    return true;
  }
}
