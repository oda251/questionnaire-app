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
import { ObjectType, Field, ID, registerEnumType } from '@nestjs/graphql';
import { Questionnaire } from './Questionnaire';
import { Choice } from './Choice';
import { Answer } from './Answer';

export enum QuestionType {
  SINGLE_CHOICE = 'SINGLE_CHOICE',
  MULTIPLE_CHOICE = 'MULTIPLE_CHOICE',
  FREE_TEXT = 'FREE_TEXT',
}

registerEnumType(QuestionType, {
  name: 'QuestionType',
  description: 'The supported question types',
});

@ObjectType()
@Entity('questions')
export class Question {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => ID)
  @Column()
  questionnaire_id: number;

  @Field(() => String)
  @Column()
  question_text: string;

  @Field(() => QuestionType)
  @Column({
    type: 'text',
    enum: QuestionType,
  })
  question_type: QuestionType;

  @Field()
  @Column()
  is_required: boolean;

  @Field()
  @CreateDateColumn()
  created_at: Date;

  @Field()
  @UpdateDateColumn()
  updated_at: Date;

  // Relations
  @ManyToOne(() => Questionnaire, (questionnaire) => questionnaire.questions)
  @JoinColumn({ name: 'questionnaire_id' })
  questionnaire: Questionnaire;

  @OneToMany(() => Choice, (choice) => choice.question)
  choices: Choice[];

  @OneToMany(() => Answer, (answer) => answer.question)
  answers: Answer[];
}
