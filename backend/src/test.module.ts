import { Module, type Request } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { typeOrmConfig } from './config/database.config';
import { UserResolver } from './graphql/resolvers/user.resolver';
import { UserService } from './services/user.service';
import { OrganizationResolver } from './graphql/resolvers/organization.resolver';
import { OrganizationService } from './services/organization.service';
import { RoleResolver } from './graphql/resolvers/role.resolver';
import { RoleService } from './services/role.service';
import { User, Organization, Role } from './entities';

export interface GraphQLContext {
  req: Request;
}

@Module({
  imports: [
    // TypeORMモジュールをインポート
    TypeOrmModule.forRoot(typeOrmConfig),
    TypeOrmModule.forFeature([User, Organization, Role]),

    // GraphQLモジュールをインポート
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
      playground: process.env.NODE_ENV !== 'production',
      context: ({ req }: { req: Request }): GraphQLContext => ({ req }),
    }),
  ],
  providers: [
    UserResolver,
    UserService,
    OrganizationResolver,
    OrganizationService,
    RoleResolver,
    RoleService,
  ],
})
export class AppModule {}
