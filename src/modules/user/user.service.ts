import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';
import { CreateUserDto } from 'src/dto/createUser.dto';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserRepository) private userRepository: UserRepository,
  ) {}

  async getAllUser() {
    const users = await this.userRepository.find();

    console.log('====================================');
    console.log(users);
    console.log('====================================');

    return users;
  }

  async getUserById(id: number): Promise<User> {
    const user = await this.userRepository.query(
      'SELECT * FROM "users" WHERE id = ' + id,
    );

    console.log('====================================');
    console.log(user);
    console.log('====================================');

    return user;
  }

  async createNewUser(user: CreateUserDto) {
    return await this.userRepository.createUser(user);
  }
}
