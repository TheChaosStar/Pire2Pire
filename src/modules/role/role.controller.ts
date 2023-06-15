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
import { CreateRoleDto } from 'src/dto/createRole.dto';
import { RoleService } from './role.service';

@Controller('role')
export class RoleController {
  constructor(private roleService: RoleService) {}
  @Get('/')
  getAllRole() {
    return this.roleService.getAllRole();
  }

  @Get('/:id')
  getRoleById(@Param('id') id?: string): Promise<any> {
    return this.roleService.getRoleById(Number(id));
  }

  @Post('/create')
  @HttpCode(200)
  @UsePipes(ValidationPipe)
  async createRole(@Body() userData: CreateRoleDto) {
    return await this.roleService.createRole(userData);
  }

  @Delete('/:id')
  async remove(@Param('id') id?: string): Promise<any> {
    await this.roleService.remove(parseInt(id));
  }

  @Put('/:id')
  update(@Param('id') id: string, @Body() createNewRoleDto: CreateRoleDto) {
    this.roleService.update(Number(id), createNewRoleDto);
  }
}
