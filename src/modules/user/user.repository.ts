import { DataSource, Repository } from 'typeorm';
import { _User } from './user.entity';
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/dto/createUser.dto';

@Injectable()
export class UserRepository extends Repository<_User> {
  constructor(private dataSource: DataSource) {
    super(_User, dataSource.createEntityManager());
  }
}
