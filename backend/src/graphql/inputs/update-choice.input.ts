import { InputType, Field, ID } from '@nestjs/graphql';
import { IsString, MinLength, IsOptional, IsInt } from 'class-validator';

@InputType()
export class UpdateChoiceInput {
  @Field(() => ID)
  @IsInt()
  id: number;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  @MinLength(1)
  choice_text?: string;
}
