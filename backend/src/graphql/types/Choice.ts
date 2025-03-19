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
import { Question } from './Question';
import { Answer } from './Answer';

@ObjectType()
@Entity('choices')
export class Choice {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  question_id: number;

  @Field()
  @Column()
  choice_text: string;

  @Field()
  @CreateDateColumn()
  created_at: Date;

  @Field()
  @UpdateDateColumn()
  updated_at: Date;

  // Relations
  @ManyToOne(() => Question, (question) => question.choices)
  @JoinColumn({ name: 'question_id' })
  question: Question;

  @OneToMany(() => Answer, (answer) => answer.choice)
  answers: Answer[];
}
