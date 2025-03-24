import { InputType, Field } from '@nestjs/graphql';
import {
  IsString,
  MinLength,
  IsBoolean,
  IsEnum,
  ValidateNested,
  IsOptional,
} from 'class-validator';
import { QuestionType } from '../../entities';
import { CreateChoiceInput } from './create-choice.input';

@InputType()
export class CreateQuestionInput {
  @Field(() => String)
  @IsString()
  @MinLength(1)
  question_text: string;

  @Field(() => QuestionType)
  @IsEnum(QuestionType)
  question_type: QuestionType;

  @Field(() => [CreateChoiceInput], { nullable: true })
  @ValidateNested({ each: true })
  @IsOptional()
  choices?: CreateChoiceInput[];

  @Field(() => Boolean)
  @IsBoolean()
  is_required: boolean;
}
