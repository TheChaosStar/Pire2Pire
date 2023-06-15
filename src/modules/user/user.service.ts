import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';
import { CreateUserDto } from 'src/dto/createUser.dto';
import { _User } from './user.entity';
import { DeleteResult } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserRepository) private userRepository: UserRepository,
  ) {}

  async getAllUser() {
    const users = await this.userRepository.find();
    const newUser = [];
    users.forEach((user) => {
      newUser.push({
        id: user.id,
        firstname: user.firstname,
        lastname: user.lastname,
      });
    });
    return newUser;
  }

  async getUserById(id: number): Promise<_User> {
    return await this.userRepository.findOneBy({ id: id });
  }

  async createNewUser(user: CreateUserDto) {
    return await this.userRepository.createUser(user);
  }

  async remove(id: number): Promise<DeleteResult> {
    return await this.userRepository.delete(id);
  }

  async update(id: number, user: CreateUserDto) {
    return await this.userRepository.update(
      { id },
      {
        firstname: user.firstname,
        lastname: user.lastname,
        password: user.password,
        role_id: user.role_id,
        lessons: user.lessons,
        formations: user.formations,
      },
    );
  }
}
