import { InputType, Field } from '@nestjs/graphql';
import { IsString, MinLength, IsBoolean, IsEnum } from 'class-validator';
import { QuestionType } from '../types';

@InputType()
export class CreateQuestionInput {
  @Field()
  @IsString()
  @MinLength(1)
  question_text: string;

  @Field(() => QuestionType)
  @IsEnum(QuestionType)
  question_type: QuestionType;

  @Field()
  @IsBoolean()
  is_required: boolean;
}
