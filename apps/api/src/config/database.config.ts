import { TypeOrmModuleOptions } from '@nestjs/typeorm'

export const databaseConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '3306'),
  username: process.env.DB_USERNAME || 'root',
  password: process.env.DB_PASSWORD || 'rootpass',
  database: process.env.DB_DATABASE || 'church-location',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: process.env.NODE_ENV !== 'production', // 開發環境自動同步，生產環境關閉
  logging: process.env.NODE_ENV !== 'production',
}
