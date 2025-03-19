import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { Questionnaire } from './Questionnaire';
import { UserOrganization } from './UserOrganization';
import { UserRole } from './UserRole';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password_hash: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  // Relations
  @OneToMany(() => Questionnaire, (questionnaire) => questionnaire.user)
  questionnaires: Questionnaire[];

  @OneToMany(
    () => UserOrganization,
    (userOrganization) => userOrganization.user,
  )
  userOrganizations: UserOrganization[];

  @OneToMany(() => UserRole, (userRole) => userRole.user)
  userRoles: UserRole[];
}
