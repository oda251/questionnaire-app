import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { Questionnaire } from './Questionnaire';
import { Answer } from './Answer';

@Entity('responses')
export class Response {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  questionnaire_id: number;

  @Column()
  respondent_token: string;

  @Column()
  ip_address: string;

  @CreateDateColumn()
  created_at: Date;

  // Relations
  @ManyToOne(() => Questionnaire, (questionnaire) => questionnaire.responses)
  @JoinColumn({ name: 'questionnaire_id' })
  questionnaire: Questionnaire;

  @OneToMany(() => Answer, (answer) => answer.response)
  answers: Answer[];
}
