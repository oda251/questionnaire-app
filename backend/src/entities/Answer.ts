import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Response } from './Response';
import { Question } from './Question';
import { Choice } from './Choice';

@ObjectType()
@Entity('answers')
export class Answer {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => ID)
  @Column()
  response_id: number;

  @Field(() => ID)
  @Column()
  question_id: number;

  @Field(() => ID, { nullable: true })
  @Column({ nullable: true })
  choice_id: number | null;

  @Field(() => String, { nullable: true })
  @Column({ type: 'text', nullable: true })
  text_answer: string | null;

  @Field()
  @CreateDateColumn()
  created_at: Date;

  // Relations
  @ManyToOne(() => Response, (response) => response.answers)
  @JoinColumn({ name: 'response_id' })
  response: Response;

  @ManyToOne(() => Question, (question) => question.answers)
  @JoinColumn({ name: 'question_id' })
  question: Question;

  @ManyToOne(() => Choice, (choice) => choice.answers)
  @JoinColumn({ name: 'choice_id' })
  choice: Choice | null;
}
