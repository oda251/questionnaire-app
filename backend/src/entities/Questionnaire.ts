import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { User } from './User';
import { QuestionnaireOrganization } from './QuestionnaireOrganization';
import { Question } from './Question';
import { Response } from './Response';

@Entity('questionnaires')
export class Questionnaire {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user_id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  access_url: string;

  @Column()
  is_public: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  // Relations
  @ManyToOne(() => User, (user) => user.questionnaires)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @OneToMany(
    () => QuestionnaireOrganization,
    (questionnaireOrganization) => questionnaireOrganization.questionnaire,
  )
  questionnaireOrganizations: QuestionnaireOrganization[];

  @OneToMany(() => Question, (question) => question.questionnaire)
  questions: Question[];

  @OneToMany(() => Response, (response) => response.questionnaire)
  responses: Response[];
}
