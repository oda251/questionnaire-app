import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import {
  User,
  Questionnaire,
  Question,
  Response,
  Organization,
  Role,
  Answer,
  Choice,
} from '../entities';

// 環境変数から設定を取得
const databaseType = process.env.DATABASE_TYPE || 'sqlite';
const isProduction = process.env.NODE_ENV === 'production';

// 開発環境と本番環境で異なるTypeORM設定を作成
export const typeOrmConfig: TypeOrmModuleOptions = {
  type: databaseType as 'mysql' | 'sqlite',

  // MySQLの設定（本番環境）
  ...(databaseType === 'mysql'
    ? {
        host: process.env.DATABASE_HOST,
        port: parseInt(process.env.DATABASE_PORT || '3306', 10),
        username: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_NAME,
      }
    : {}),

  // SQLiteの設定（開発環境）
  ...(databaseType === 'sqlite'
    ? {
        database: process.env.DATABASE_STORAGE || ':memory:',
      }
    : {}),

  // 共通設定
  entities: [
    User,
    Questionnaire,
    Question,
    Response,
    Organization,
    Role,
    Answer,
    Choice,
  ],
  synchronize: !isProduction, // 開発環境でのみ自動同期を有効に
  logging: !isProduction,
};
