import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Questionnaire } from './Questionnaire';
import { Organization } from './Organization';

@Entity('questionnaire_organizations')
export class QuestionnaireOrganization {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  questionnaire_id: number;

  @Column()
  organization_id: number;

  @CreateDateColumn()
  created_at: Date;

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
