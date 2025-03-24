import { InputType, Field, ID } from '@nestjs/graphql';
import {
  IsString,
  MinLength,
  IsOptional,
  IsBoolean,
  ValidateNested,
  ArrayMinSize,
} from 'class-validator';
import { Type } from 'class-transformer';
import { CreateQuestionInput } from './create-question.input';

@InputType()
export class CreateQuestionnaireInput {
  @Field(() => ID)
  user_id: string;

  @Field(() => String)
  @IsString()
  @MinLength(3)
  title: string;

  @Field(() => String)
  @IsString()
  description: string;

  @Field(() => Boolean)
  @IsBoolean()
  is_public: boolean;

  @Field(() => Date, { nullable: true })
  @IsOptional()
  expiry_date?: Date | null;

  @Field(() => [ID])
  @ValidateNested({ each: true })
  @Type(() => String)
  @ArrayMinSize(1)
  organization_ids: string[];

  @Field(() => [CreateQuestionInput])
  @ValidateNested({ each: true })
  @Type(() => CreateQuestionInput)
  @ArrayMinSize(1)
  questions: CreateQuestionInput[];
}
