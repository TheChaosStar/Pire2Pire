import { DataSource, Repository } from 'typeorm';
import { _User } from './user.entity';
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/dto/createUser.dto';

@Injectable()
export class UserRepository extends Repository<_User> {
  constructor(private dataSource: DataSource) {
    super(_User, dataSource.createEntityManager());
  }

  async createUser({
    firstname,
    lastname,
    password,
  }: CreateUserDto): Promise<_User> {
    const task = this.create({
      firstname,
      lastname,
      password,
    });

    await this.save(task);
    return task;
  }
}
