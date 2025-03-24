import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Questionnaire } from './Questionnaire';
import { Organization } from './Organization';
import { Response } from './Response';
import { Role } from './Role';

@ObjectType()
@Entity('users')
export class User {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: string;

  @Field(() => String)
  @Column()
  name: string;

  @Field(() => String)
  @Column({ unique: true })
  email: string;

  @Column()
  password_hash: string;

  @Field()
  @CreateDateColumn()
  created_at: Date;

  @Field()
  @UpdateDateColumn()
  updated_at: Date;

  // Relations
  @OneToMany(() => Questionnaire, (questionnaire) => questionnaire.user)
  questionnaires: Questionnaire[];

  @OneToMany(() => Response, (response) => response.user)
  responses: Response[];

  @Field(() => [Organization], { nullable: true })
  @ManyToMany(() => Organization, (organization) => organization.user, {
    cascade: true,
    onDelete: 'CASCADE',
    nullable: true,
  })
  organizations: Organization[];

  @Field(() => [Role], { nullable: true })
  @ManyToMany(() => Role, (role) => role.users, {
    nullable: true,
  })
  @JoinTable({
    name: 'user_roles',
    joinColumn: { name: 'user_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'role_id', referencedColumnName: 'id' },
  })
  roles: Role[];
}

export type UserDto = Omit<
  User,
  'questionnaires' | 'userOrganizations' | 'userRoles'
>;
