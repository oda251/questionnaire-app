import { InputType, Field } from '@nestjs/graphql';
import { IsString, MinLength } from 'class-validator';

@InputType()
export class CreateOrganizationInput {
  @Field()
  @IsString()
  @MinLength(3)
  name: string;

  @Field()
  @IsString()
  description: string;
}
