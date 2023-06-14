import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateRoleDto } from 'src/dto/createRole.dto';
import { RoleService } from './role.service';

@Controller('role')
export class RoleController {
  constructor(private roleService: RoleService) {}
  @Get('/')
  getAllRole() {
    return this.roleService.getAllRole();
  }

  @Post('/create')
  @HttpCode(200)
  @UsePipes(ValidationPipe)
  async createRole(@Body() userData: CreateRoleDto) {
    return await this.roleService.createRole(userData);
  }
}
