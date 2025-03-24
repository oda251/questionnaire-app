import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { ObjectType, Field, ID } from '@nestjs/graphql';
import { UserOrganization } from './UserOrganization';
import { QuestionnaireOrganization } from './QuestionnaireOrganization';

@ObjectType()
@Entity('organizations')
export class Organization {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  description: string;

  @Field()
  @CreateDateColumn()
  created_at: Date;

  @Field()
  @UpdateDateColumn()
  updated_at: Date;

  // Relations
  @OneToMany(
    () => UserOrganization,
    (userOrganization) => userOrganization.organization,
  )
  userOrganizations: UserOrganization[];

  @OneToMany(
    () => QuestionnaireOrganization,
    (questionnaireOrganization) => questionnaireOrganization.organization,
  )
  questionnaireOrganizations: QuestionnaireOrganization[];
}
