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
import { Question } from './Question';
import { Answer } from './Answer';

@Entity('choices')
export class Choice {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  question_id: number;

  @Column()
  choice_text: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  // Relations
  @ManyToOne(() => Question, (question) => question.choices)
  @JoinColumn({ name: 'question_id' })
  question: Question;

  @OneToMany(() => Answer, (answer) => answer.choice)
  answers: Answer[];
}
