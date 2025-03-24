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
import { User } from './User';

@ObjectType()
@Entity('responses')
export class Response {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: string;

  @Field(() => ID)
  @Column()
  questionnaire_id: string;

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

  @ManyToOne(() => User, (user) => user.responses)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @OneToMany(() => Answer, (answer) => answer.response, {
    cascade: true,
    onDelete: 'CASCADE',
  })
  answers: Answer[];
}
