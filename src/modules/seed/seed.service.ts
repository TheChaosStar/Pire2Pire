import { Injectable, Logger } from '@nestjs/common';
import { Connection } from 'typeorm';
import { UsersSeeder } from './entitySeed/user.seed';
import { Promise as Bluebird } from 'bluebird';
import { RolesSeeder } from './entitySeed/role.seed';
import { PermissionsSeeder } from './entitySeed/permission.seed';
import { ModulesSeeder } from './entitySeed/module.seed';
import { LessonsSeeder } from './entitySeed/lesson.seed';
import { FormationsSeeder } from './entitySeed/formation.seed';
import { Seeder } from './seeder';

@Injectable()
export class SeedService {
  private readonly seeders: Seeder[] = [];
  private readonly logger = new Logger(SeedService.name);

  constructor(
    private readonly connection: Connection,
    private readonly users: UsersSeeder,
    private readonly roles: RolesSeeder,
    private readonly permission: PermissionsSeeder,
    private readonly modules: ModulesSeeder,
    private readonly lessons: LessonsSeeder,
    private readonly formations: FormationsSeeder,
  ) {
    this.seeders = [
      this.users,
      this.roles,
      this.permission,
      this.modules,
      this.lessons,
      this.formations,
    ];
  }

  async seed() {
    await Bluebird.each(this.seeders, async (seeder) => {
      this.logger.log(`Seeding ${seeder.constructor.name}`);
      await seeder.seed();
    });
  }
}
