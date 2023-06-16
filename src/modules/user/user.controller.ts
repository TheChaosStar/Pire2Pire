import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from '../../dto/createUser.dto';
import { _User } from './user.entity';
import { LoginUserDto } from 'src/dto/LoginUser.dto';
import { Observable } from 'rxjs';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Post('login')
  @HttpCode(200)
  login(@Body() loginUserDto: LoginUserDto): Observable<string> {
    return this.userService.login(loginUserDto);
  }

  @Get('/')
  getAllUser() {
    return this.userService.getAllUser();
  }

  @Get('/:id')
  getUserById(@Param('id') id?: string): Promise<any> {
    return this.userService.getUserById(Number(id));
  }

  @Post('/')
  @HttpCode(200)
  @UsePipes(ValidationPipe)
  async create(@Body() userData: CreateUserDto) {
    return await this.userService.create(userData);
  }

  @Delete('/:id')
  async remove(@Param('id') id: string): Promise<any> {
    await this.userService.remove(parseInt(id));
  }

  @Put('/:id')
  update(@Param('id') id: string, @Body() createNewUserDto: CreateUserDto) {
    this.userService.update(Number(id), createNewUserDto);
  }
}
