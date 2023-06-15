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
import { PermissionService } from './permission.service';
import { CreatePermissionDto } from 'src/dto/createPermission.dto';

@Controller('permission')
export class PermissionController {
  constructor(private permissionService: PermissionService) {}
  @Get('/')
  getAllPermission() {
    return this.permissionService.getAllPermission();
  }

  @Get('/:id')
  getPermissionById(@Param('id') id?: string): Promise<any> {
    return this.permissionService.getPermissionById(Number(id));
  }

  @Post('/create')
  @HttpCode(200)
  @UsePipes(ValidationPipe)
  async createPermission(@Body() permissionData: CreatePermissionDto) {
    return await this.permissionService.createPermission(permissionData);
  }

  @Delete('/:id')
  async remove(@Param('id') id?: string): Promise<any> {
    await this.permissionService.remove(parseInt(id));
  }

  @Put('/:id')
  update(
    @Param('id') id: string,
    @Body() createNewPermissionDto: CreatePermissionDto,
  ) {
    this.permissionService.update(Number(id), createNewPermissionDto);
  }
}
