import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { User } from './User';
import { Organization } from './Organization';

@Entity('user_organizations')
export class UserOrganization {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user_id: number;

  @Column()
  organization_id: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  // Relations
  @ManyToOne(() => User, (user) => user.userOrganizations)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(
    () => Organization,
    (organization) => organization.userOrganizations,
  )
  @JoinColumn({ name: 'organization_id' })
  organization: Organization;
}
