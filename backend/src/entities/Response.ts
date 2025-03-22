import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Questionnaire } from './Questionnaire';
import { Answer } from './Answer';

@ObjectType()
@Entity('responses')
export class Response {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => ID)
  @Column()
  questionnaire_id: number;

  @Field(() => String)
  @Column()
  respondent_token: string;

  @Field(() => Date)
  @Column()
  ip_address: string;

  @Field(() => Date)
  @CreateDateColumn()
  created_at: Date;

  // Relations
  @ManyToOne(() => Questionnaire, (questionnaire) => questionnaire.responses)
  @JoinColumn({ name: 'questionnaire_id' })
  questionnaire: Questionnaire;

  @OneToMany(() => Answer, (answer) => answer.response)
  answers: Answer[];
}
