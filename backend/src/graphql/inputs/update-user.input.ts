import { InputType, Field, ID } from '@nestjs/graphql';
import { IsString, MinLength, IsEmail, IsOptional } from 'class-validator';

@InputType()
export class UpdateUserInput {
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
  @IsEmail()
  email?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  @MinLength(6)
  password?: string;
}
