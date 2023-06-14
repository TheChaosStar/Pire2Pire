import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RoleRepository } from './role.repository';
import { CreateRoleDto } from 'src/dto/createRole.dto';

@Injectable()
export class RoleService {
  constructor(
    @InjectRepository(RoleRepository) private roleRepository: RoleRepository,
  ) {}

  async getAllRole() {
    return await this.roleRepository.find();
  }

  async createRole(role: CreateRoleDto) {
    return await this.roleRepository.createRole(role);
  }
}
