import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { QuestionService } from '../../services/question.service';
import { Question } from '../../entities';
import { CreateQuestionInput } from '../inputs/create-question.input';
import { UpdateQuestionInput } from '../inputs/update-question.input';

@Resolver(() => Question)
export class QuestionResolver {
  constructor(private questionService: QuestionService) {}

  @Query(() => [Question])
  async questions(): Promise<Question[]> {
    return this.questionService.findAll();
  }

  @Query(() => Question)
  async question(@Args('id') id: number): Promise<Question> {
    return this.questionService.findOne(id);
  }

  @Mutation(() => Question)
  async createQuestion(
    @Args('input') input: CreateQuestionInput,
  ): Promise<Question> {
    return this.questionService.create(input);
  }

  @Mutation(() => Question)
  async updateQuestion(
    @Args('input') input: UpdateQuestionInput,
  ): Promise<Question> {
    return this.questionService.update(input.id, input);
  }

  @Mutation(() => Boolean)
  async deleteQuestion(@Args('id') id: number): Promise<boolean> {
    await this.questionService.remove(id);
    return true;
  }
}
