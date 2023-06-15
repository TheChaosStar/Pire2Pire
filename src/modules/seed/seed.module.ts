import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { seedOrmConfig } from 'src/config/typeorm.config';
import { SeedService } from './seed.service';
import { UsersSeeder } from './entitySeed/user.seed';
import { _User } from '../user/user.entity';
import { _Role } from '../role/role.entity';
import { RolesSeeder } from './entitySeed/role.seed';
import { _Permission } from '../permission/permission.entity';
import { PermissionsSeeder } from './entitySeed/permission.seed';
import { _Lesson } from '../lesson/lesson.entity';
import { LessonsSeeder } from './entitySeed/lesson.seed';
import { _Module } from '../module/module.entity';
import { ModulesSeeder } from './entitySeed/module.seed';
import { _Formation } from '../formation/formation.entity';
import { FormationsSeeder } from './entitySeed/formation.seed';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot(seedOrmConfig),
    TypeOrmModule.forFeature([
      _User,
      _Role,
      _Permission,
      _Module,
      _Lesson,
      _Formation,
    ]),
  ],
  controllers: [],
  providers: [
    SeedService,
    UsersSeeder,
    RolesSeeder,
    PermissionsSeeder,
    ModulesSeeder,
    LessonsSeeder,
    FormationsSeeder,
  ],
})
export class SeedModule {}
