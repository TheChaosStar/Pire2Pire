import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
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

  @Post('/create')
  @HttpCode(200)
  @UsePipes(ValidationPipe)
  async createPermission(@Body() permissionData: CreatePermissionDto) {
    return await this.permissionService.createPermission(permissionData);
  }
}
