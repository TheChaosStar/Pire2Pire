import { DataSource, Repository } from 'typeorm';
import { User } from './user.entity';
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/dto/createUser.dto';

@Injectable()
export class UserRepository extends Repository<User> {
  constructor(private dataSource: DataSource) {
    super(User, dataSource.createEntityManager());
  }

  async createUser({
    firstname,
    lastname,
    password,
  }: CreateUserDto): Promise<User> {
    const task = this.create({
      firstname,
      lastname,
      password,
    });

    await this.save(task);
    return task;
  }
}
