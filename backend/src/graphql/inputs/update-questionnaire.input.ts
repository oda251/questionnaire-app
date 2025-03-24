import { InputType, Field, ID } from '@nestjs/graphql';
import { IsString, MinLength, IsOptional, IsBoolean } from 'class-validator';

@InputType()
export class UpdateQuestionnaireInput {
  @Field(() => ID)
  @IsString()
  id: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  @MinLength(3)
  title?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  description?: string;

  @Field(() => Boolean, { nullable: true })
  @IsOptional()
  @IsBoolean()
  is_public?: boolean;

  @Field(() => Date, { nullable: true })
  @IsOptional()
  expiry_date?: Date | null;
}
