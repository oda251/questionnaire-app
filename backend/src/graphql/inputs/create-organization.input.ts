import { InputType, Field } from '@nestjs/graphql';
import { IsString, MinLength } from 'class-validator';

@InputType()
export class CreateOrganizationInput {
  @Field(() => String)
  @IsString()
  @MinLength(3)
  name: string;

  @Field(() => String)
  @IsString()
  description: string;
}
