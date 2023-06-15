import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { _Permission } from 'src/modules/permission/permission.entity';
import { Repository } from 'typeorm';
import { Promise as Bluebird } from 'bluebird';
import { Seeder } from '../seeder';

@Injectable()
export class PermissionsSeeder extends Seeder {
  constructor(
    @InjectRepository(_Permission)
    private readonly permissions: Repository<_Permission>,
  ) {
    super();
  }

  async seed() {
    const data: Partial<_Permission>[] = [];

    for (let i = 0; i < 8; i++) {
      data.push({
        name: '_Permission ' + i,
        desc: 'Esse aliqua excepteur reprehenderit id. Voluptate sit aliquip proident duis elit aliquip proident. Ipsum Lorem officia id est commodo occaecat qui occaecat excepteur nostrud sint.',
      });
    }

    await Bluebird.each(data, async (data) => {
      await this.permissions.insert(data);
    });
  }
}
