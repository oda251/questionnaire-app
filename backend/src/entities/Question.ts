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
import { Questionnaire } from './Questionnaire';
import { Choice } from './Choice';
import { Answer } from './Answer';

export enum QuestionType {
  SINGLE_CHOICE = 'SINGLE_CHOICE',
  MULTIPLE_CHOICE = 'MULTIPLE_CHOICE',
  FREE_TEXT = 'FREE_TEXT',
}

@Entity('questions')
export class Question {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  questionnaire_id: number;

  @Column()
  question_text: string;

  @Column({
    type: 'enum',
    enum: QuestionType,
  })
  question_type: QuestionType;

  @Column()
  is_required: boolean;

  @CreateDateColumn()
  created_at: Date;

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
