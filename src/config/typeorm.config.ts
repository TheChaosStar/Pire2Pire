import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'donovan',
  password: 'password',
  database: 'pire2pire',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  autoLoadEntities: true,
  synchronize: true,
};

export const seedOrmConfig: TypeOrmModuleOptions = {
  ...typeOrmConfig,
  logging: ['error', 'warn'],
};
