import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Response } from './Response';
import { Question } from './Question';
import { Choice } from './Choice';

@Entity('answers')
export class Answer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  response_id: number;

  @Column()
  question_id: number;

  @Column({ nullable: true })
  choice_id: number | null;

  @Column({ nullable: true })
  text_answer: string | null;

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
