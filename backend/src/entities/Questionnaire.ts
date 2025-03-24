import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany,
  JoinColumn,
  Generated,
  ManyToMany,
} from 'typeorm';
import { ObjectType, Field, ID } from '@nestjs/graphql';
import { User } from './User';
import { Question } from './Question';
import { Response } from './Response';
import { Organization } from './Organization';

@ObjectType()
@Entity('questionnaires')
export class Questionnaire {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: string;

  @Field(() => ID)
  @Column()
  user_id: string;

  @Field(() => String)
  @Column()
  title: string;

  @Field(() => String)
  @Column()
  description: string;

  @Field(() => String)
  @Generated('uuid')
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
  @ManyToOne(() => User, (user) => user.questionnaires, {
    nullable: false,
  })
  @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
  user: User;

  @Field(() => [Organization], { nullable: true })
  @ManyToMany(
    () => Organization,
    (organization) => organization.questionnaires,
    {
      cascade: true,
      onDelete: 'CASCADE',
      nullable: true,
    },
  )
  organizations: Organization[];

  @OneToMany(() => Question, (question) => question.questionnaire, {
    cascade: true,
    onDelete: 'CASCADE',
    nullable: true,
  })
  questions: Question[];

  @OneToMany(() => Response, (response) => response.questionnaire, {
    cascade: true,
    onDelete: 'CASCADE',
    nullable: true,
  })
  responses: Response[];
}
