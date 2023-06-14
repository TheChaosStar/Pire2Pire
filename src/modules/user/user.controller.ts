import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from '../../dto/createUser.dto';
import { User } from './user.entity';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Get('/')
  getAllUser() {
    return this.userService.getAllUser();
  }

  @Get('/:id')
  getUserById(@Param('id') id?: string): Promise<User> {
    return this.userService.getUserById(Number(id));
  }

  @Post('/create')
  @HttpCode(200)
  @UsePipes(ValidationPipe)
  async createUser(@Body() userData: CreateUserDto) {
    return await this.userService.createNewUser(userData);
  }
}
