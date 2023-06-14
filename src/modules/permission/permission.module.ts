import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PermissionRepository } from './permission.repository';
import { PermissionController } from './permission.controller';
import { PermissionService } from './permission.service';

@Module({
  controllers: [PermissionController],
  imports: [TypeOrmModule.forFeature([PermissionRepository])],
  providers: [PermissionService, PermissionRepository],
})
export class PermissionModule {}
