import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { _Role } from '../../role/role.entity';
import { Repository } from 'typeorm';
import { Promise as Bluebird } from 'bluebird';
import { Seeder } from '../seeder';

@Injectable()
export class RolesSeeder extends Seeder {
  constructor(
    @InjectRepository(_Role)
    private readonly roles: Repository<_Role>,
  ) {
    super();
  }

  async seed() {
    const data: Partial<_Role>[] = [];

    for (let i = 0; i < 3; i++) {
      data.push({
        name: '_Role ' + i,
      });
    }

    await Bluebird.each(data, async (data) => {
      await this.roles.insert(data);
    });
  }
}
