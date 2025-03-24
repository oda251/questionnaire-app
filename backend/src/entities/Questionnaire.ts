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
import { ObjectType, Field, ID } from '@nestjs/graphql';
import { User } from './User';
import { QuestionnaireOrganization } from './QuestionnaireOrganization';
import { Question } from './Question';
import { Response } from './Response';

@ObjectType()
@Entity('questionnaires')
export class Questionnaire {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => ID)
  @Column()
  user_id: number;

  @Field(() => String)
  @Column()
  title: string;

  @Field(() => String)
  @Column()
  description: string;

  @Field(() => String)
  @Column()
  access_url: string;

  @Field(() => Boolean)
  @Column()
  is_public: boolean;

  @Field(() => Date, { nullable: true })
  @Column('datetime', { nullable: true })
  expiry_date: Date | null;

  @Field(() => Date, { nullable: true })
  @CreateDateColumn()
  created_at: Date;

  @Field(() => Date, { nullable: true })
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
