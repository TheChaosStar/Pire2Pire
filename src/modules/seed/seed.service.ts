import { Injectable, Logger } from '@nestjs/common';
import { Connection } from 'typeorm';
import { UsersSeeder } from './user.seed';
import { Promise as Bluebird } from 'bluebird';

@Injectable()
export class SeedService {
  private readonly seeders: UsersSeeder[] = [];
  private readonly logger = new Logger(SeedService.name);

  constructor(
    private readonly connection: Connection,
    private readonly users: UsersSeeder,
  ) {
    this.seeders = [this.users];
  }

  async seed() {
    await Bluebird.each(this.seeders, async (seeder) => {
      this.logger.log(`Seeding ${seeder.constructor.name}`);
      await seeder.seed();
    });
  }
}
