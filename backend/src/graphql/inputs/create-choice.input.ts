import { InputType, Field } from '@nestjs/graphql';
import { IsString, MinLength } from 'class-validator';

@InputType()
export class CreateChoiceInput {
  @Field(() => String)
  @IsString()
  @MinLength(1)
  choice_text: string;
}
