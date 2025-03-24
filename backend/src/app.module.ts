import { Module, type Request } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { typeOrmConfig } from './config/database.config';
import {
  Organization,
  Role,
  Questionnaire,
  Question,
  Response,
  Answer,
  Choice,
} from '@/entities';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './modules/user.module';
import { OrganizationModule } from './modules/organization.module';
import { RoleModule } from './modules/role.module';
import { QuestionnaireModule } from './modules/questionnaire.module';
import { QuestionModule } from './modules/question.module';
import { ChoiceModule } from './modules/choice.module';

export interface GraphQLContext {
  req: Request;
}

@Module({
  imports: [
    // TypeORMモジュールをインポート
    TypeOrmModule.forRoot(typeOrmConfig),
    TypeOrmModule.forFeature([
      Organization,
      Role,
      Questionnaire,
      Question,
      Response,
      Answer,
      Choice,
    ]),

    // GraphQLモジュールをインポート
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
      playground: process.env.NODE_ENV !== 'production',
      context: ({ req }: { req: Request }): GraphQLContext => ({ req }),
    }),

    // カスタムModuleをインポート
    AuthModule,
    UserModule,
    OrganizationModule,
    RoleModule,
    QuestionnaireModule,
    QuestionModule,
    ChoiceModule,
  ],
  providers: [],
})
export class AppModule {}
