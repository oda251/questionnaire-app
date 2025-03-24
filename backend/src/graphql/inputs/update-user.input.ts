import { InputType, Field, ID } from '@nestjs/graphql';
import {
  IsString,
  MinLength,
  IsEmail,
  IsOptional,
  IsInt,
} from 'class-validator';

@InputType()
export class UpdateUserInput {
  @Field(() => ID)
  @IsInt()
  id: number;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  @MinLength(3)
  name?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsEmail()
  email?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  @MinLength(6)
  password?: string;
}
