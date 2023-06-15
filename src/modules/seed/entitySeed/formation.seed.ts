import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Promise as Bluebird } from 'bluebird';
import { _Formation } from 'src/modules/formation/formation.entity';
import { Repository } from 'typeorm';
import { Seeder } from '../seeder';

@Injectable()
export class FormationsSeeder extends Seeder {
  constructor(
    @InjectRepository(_Formation)
    private readonly formations: Repository<_Formation>,
  ) {
    super();
  }

  async seed() {
    const data: Partial<_Formation>[] = [];

    for (let i = 0; i < 5; i++) {
      data.push({
        name: '_Formation ' + i,
      });
    }

    await Bluebird.each(data, async (data) => {
      await this.formations.insert(data);
    });
  }
}
