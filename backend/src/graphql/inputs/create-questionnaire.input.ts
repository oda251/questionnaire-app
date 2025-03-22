import { InputType, Field } from '@nestjs/graphql';
import {
  IsString,
  MinLength,
  IsOptional,
  IsBoolean,
  ValidateNested,
  ArrayMinSize,
} from 'class-validator';
import { Type } from 'class-transformer';

@InputType()
export class CreateQuestionnaireInput {
  @Field()
  @IsString()
  @MinLength(3)
  title: string;

  @Field()
  @IsString()
  description: string;

  @Field(() => Boolean)
  @IsBoolean()
  is_public: boolean;

  @Field(() => Date, { nullable: true })
  @IsOptional()
  expiry_date?: Date | null; // 回答期限

  @Field(() => [CreateQuestionInput])
  @ValidateNested({ each: true })
  @Type(() => CreateQuestionInput)
  @ArrayMinSize(1)
  questions: CreateQuestionInput[];
}

@InputType()
export class CreateQuestionInput {
  @Field()
  @IsString()
  @MinLength(1)
  question_text: string;

  @Field()
  @IsBoolean()
  is_required: boolean;

  @Field(() => [String])
  @ArrayMinSize(1)
  choices: string[];
}
