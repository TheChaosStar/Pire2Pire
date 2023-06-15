import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { seedOrmConfig } from 'src/config/typeorm.config';
import { SeedService } from './seed.service';
import { UsersSeeder } from './user.seed';
import { User } from '../user/user.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot(seedOrmConfig),
    TypeOrmModule.forFeature([User]),
  ],
  controllers: [],
  providers: [SeedService, UsersSeeder],
})
export class SeedModule {}
