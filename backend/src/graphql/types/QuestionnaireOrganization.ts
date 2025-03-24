import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Questionnaire } from './Questionnaire';
import { Organization } from './Organization';

@ObjectType()
@Entity('questionnaire_organizations')
export class QuestionnaireOrganization {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  questionnaire_id: number;

  @Field()
  @Column()
  organization_id: number;

  @Field()
  @CreateDateColumn()
  created_at: Date;

  @Field()
  @UpdateDateColumn()
  updated_at: Date;

  // Relations
  @ManyToOne(
    () => Questionnaire,
    (questionnaire) => questionnaire.questionnaireOrganizations,
  )
  @JoinColumn({ name: 'questionnaire_id' })
  questionnaire: Questionnaire;

  @ManyToOne(
    () => Organization,
    (organization) => organization.questionnaireOrganizations,
  )
  @JoinColumn({ name: 'organization_id' })
  organization: Organization;
}
