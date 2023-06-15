import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { _Module } from 'src/modules/module/module.entity';
import { Repository } from 'typeorm';
import { Promise as Bluebird } from 'bluebird';
import { Seeder } from '../seeder';

@Injectable()
export class ModulesSeeder extends Seeder {
  constructor(
    @InjectRepository(_Module)
    private readonly modules: Repository<_Module>,
  ) {
    super();
  }

  async seed() {
    const data: Partial<_Module>[] = [];

    for (let i = 0; i < 10; i++) {
      data.push({
        name: 'Module ' + i,
      });
    }

    await Bluebird.each(data, async (data) => {
      await this.modules.insert(data);
    });
  }
}
