import { InputType, Field, ID } from '@nestjs/graphql';
import { IsString, MinLength, IsOptional } from 'class-validator';

@InputType()
export class UpdateChoiceInput {
  @Field(() => ID)
  @IsString()
  id: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  @MinLength(1)
  choice_text?: string;
}
