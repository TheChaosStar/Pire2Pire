import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePermissionDto } from 'src/dto/createPermission.dto';
import { PermissionRepository } from './permission.repository';

@Injectable()
export class PermissionService {
  constructor(
    @InjectRepository(PermissionRepository)
    private permissionRepository: PermissionRepository,
  ) {}

  async getAllPermission() {
    return await this.permissionRepository.find();
  }

  async createPermission(permission: CreatePermissionDto) {
    return await this.permissionRepository.createPermission(permission);
  }
}
