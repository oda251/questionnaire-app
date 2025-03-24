import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ChoiceService } from '../../services/choice.service';
import { Choice } from '../../entities';
import { CreateChoiceInput } from '../inputs/create-choice.input';
import { UpdateChoiceInput } from '../inputs/update-choice.input';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '../../auth/gql-auth.guard';

@Resolver(() => Choice)
export class ChoiceResolver {
  constructor(private choiceService: ChoiceService) {}

  @Query(() => [Choice])
  @UseGuards(GqlAuthGuard)
  async choices(): Promise<Choice[]> {
    return this.choiceService.findAll();
  }

  @Query(() => Choice)
  @UseGuards(GqlAuthGuard)
  async choice(@Args('id') id: string): Promise<Choice> {
    return this.choiceService.findOne(id);
  }

  @Mutation(() => Choice)
  @UseGuards(GqlAuthGuard)
  async createChoice(@Args('input') input: CreateChoiceInput): Promise<Choice> {
    return this.choiceService.create(input);
  }

  @Mutation(() => Choice)
  @UseGuards(GqlAuthGuard)
  async updateChoice(@Args('input') input: UpdateChoiceInput): Promise<Choice> {
    return this.choiceService.update(input.id, input);
  }

  @Mutation(() => Boolean)
  @UseGuards(GqlAuthGuard)
  async deleteChoice(@Args('id') id: string): Promise<boolean> {
    await this.choiceService.remove(id);
    return true;
  }
}
