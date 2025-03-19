import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ChoiceService } from '../../services/choice.service';
import { Choice } from '../types';
import { CreateChoiceInput } from '../inputs/create-choice.input';
import { UpdateChoiceInput } from '../inputs/update-choice.input';

@Resolver(() => Choice)
export class ChoiceResolver {
  constructor(private choiceService: ChoiceService) {}

  @Query(() => [Choice])
  async choices(): Promise<Choice[]> {
    return this.choiceService.findAll();
  }

  @Query(() => Choice)
  async choice(@Args('id') id: number): Promise<Choice> {
    return this.choiceService.findOne(id);
  }

  @Mutation(() => Choice)
  async createChoice(@Args('input') input: CreateChoiceInput): Promise<Choice> {
    return this.choiceService.create(input);
  }

  @Mutation(() => Choice)
  async updateChoice(@Args('input') input: UpdateChoiceInput): Promise<Choice> {
    return this.choiceService.update(input.id, input);
  }

  @Mutation(() => Boolean)
  async deleteChoice(@Args('id') id: number): Promise<boolean> {
    await this.choiceService.remove(id);
    return true;
  }
}
