import { InputType, Field, ID } from '@nestjs/graphql';
import {
  IsString,
  MinLength,
  IsOptional,
  IsBoolean,
  IsInt,
} from 'class-validator';

@InputType()
export class UpdateQuestionnaireInput {
  @Field(() => ID)
  @IsInt()
  id: number;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  @MinLength(3)
  title?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  description?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsBoolean()
  is_public?: boolean;

  @Field({ nullable: true })
  @IsOptional()
  expiry_date?: Date | null;
}
