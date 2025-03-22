import { InputType, Field } from '@nestjs/graphql';
import { IsString, MinLength, IsEmail } from 'class-validator';

@InputType()
export class CreateUserInput {
  @Field(() => String)
  @IsString()
  @MinLength(3)
  name: string;

  @Field(() => String)
  @IsEmail()
  email: string;

  @Field(() => String)
  @IsString()
  @MinLength(6)
  password: string;

  @Field(() => String, { nullable: true })
  password_hash?: string;
}
