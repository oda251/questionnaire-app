import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { UserOrganization } from './UserOrganization';
import { QuestionnaireOrganization } from './QuestionnaireOrganization';

@Entity('organizations')
export class Organization {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @CreateDateColumn()
  created_at: Date;

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
