import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { _User } from '../../user/user.entity';
import { Repository } from 'typeorm';
import { Promise as Bluebird } from 'bluebird';
import { Seeder } from '../seeder';

@Injectable()
export class UsersSeeder extends Seeder {
  constructor(
    @InjectRepository(_User)
    private readonly users: Repository<_User>,
  ) {
    super();
  }

  async seed() {
    const data: Partial<_User>[] = [];

    for (let i = 0; i < 10; i++) {
      data.push({
        firstname: 'Test firstname ' + i,
        lastname: 'Test lastname ' + i,
        password: 'Test',
      });
    }

    await Bluebird.each(data, async (data) => {
      const user = this.users.create(data);
      await this.users.insert(user);
    });
  }
}
