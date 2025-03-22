import { InputType, Field, ID } from '@nestjs/graphql';
import { IsString, MinLength, IsOptional, IsInt } from 'class-validator';

@InputType()
export class UpdateRoleInput {
  @Field(() => ID)
  @IsInt()
  id: number;

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
