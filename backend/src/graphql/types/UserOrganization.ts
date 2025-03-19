import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { ObjectType, Field, ID } from '@nestjs/graphql';
import { User } from './User';
import { Organization } from './Organization';

@ObjectType()
@Entity('user_organizations')
export class UserOrganization {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  user_id: number;

  @Field()
  @Column()
  organization_id: number;

  @Field()
  @CreateDateColumn()
  created_at: Date;

  @Field()
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
