import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../user/user.entity';
import { Repository } from 'typeorm';
import { Promise as Bluebird } from 'bluebird';

@Injectable()
export class UsersSeeder {
  constructor(
    @InjectRepository(User)
    private readonly users: Repository<User>,
  ) {}

  async seed() {
    const data: Partial<User>[] = [];

    for (let i = 0; i < 10; i++) {
      data.push({
        firstname: 'Test firstname ' + i,
        lastname: 'Test lastname ' + i,
        password: 'Test',
      });
    }

    await Bluebird.each(data, async (data) => {
      const user = this.users.create(data);
      await this.users.save(user);
    });
  }
}
