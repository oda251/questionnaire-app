import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Questionnaire } from './Questionnaire';
import { User } from './User';

@ObjectType()
@Entity('organizations')
export class Organization {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: string;

  @Field(() => String)
  @Column()
  name: string;

  @Field(() => String)
  @Column()
  description: string;

  @Field(() => Date)
  @CreateDateColumn()
  created_at: Date;

  @Field(() => Date)
  @UpdateDateColumn()
  updated_at: Date;

  // Relations
  @Field(() => [User], { nullable: true })
  @ManyToMany(() => User, (user) => user.organizations, {
    nullable: true,
  })
  @JoinTable({
    name: 'user_organizations',
    joinColumn: { name: 'organization_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'user_id', referencedColumnName: 'id' },
  })
  user: User[];

  @Field(() => [Questionnaire], { nullable: true })
  @ManyToMany(
    () => Questionnaire,
    (questionnaire) => questionnaire.organizations,
    {
      nullable: true,
    },
  )
  @JoinTable({
    name: 'organization_questionnaires',
    joinColumn: { name: 'organization_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'questionnaire_id', referencedColumnName: 'id' },
  })
  questionnaires: Questionnaire[];
}
