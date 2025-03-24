import { InputType, Field, ID } from '@nestjs/graphql';
import {
  IsString,
  MinLength,
  IsOptional,
  IsBoolean,
  IsEnum,
} from 'class-validator';
import { QuestionType } from '../../entities';

@InputType()
export class UpdateQuestionInput {
  @Field(() => ID)
  @IsString()
  id: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  @MinLength(1)
  question_text?: string;

  @Field(() => QuestionType, { nullable: true })
  @IsOptional()
  @IsEnum(QuestionType)
  question_type?: QuestionType;

  @Field(() => Boolean, { nullable: true })
  @IsOptional()
  @IsBoolean()
  is_required?: boolean;
}
