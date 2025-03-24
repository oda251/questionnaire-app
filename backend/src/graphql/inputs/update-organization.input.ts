import { InputType, Field, ID } from '@nestjs/graphql';
import { IsString, MinLength, IsOptional } from 'class-validator';

@InputType()
export class UpdateOrganizationInput {
  @Field(() => ID)
  @IsString()
  id: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  @MinLength(3)
  name?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  description?: string;
}
