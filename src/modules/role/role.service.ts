import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RoleRepository } from './role.repository';
import { CreateRoleDto } from 'src/dto/createRole.dto';
import { _Role } from './role.entity';
import { DeleteResult } from 'typeorm';

@Injectable()
export class RoleService {
  constructor(
    @InjectRepository(RoleRepository) private roleRepository: RoleRepository,
  ) {}

  async getAllRole() {
    return await this.roleRepository.find();
  }

  async getRoleById(id: number): Promise<_Role> {
    return await this.roleRepository.findOneBy({ id: id });
  }

  async createRole(role: CreateRoleDto) {
    return await this.roleRepository.createRole(role);
  }

  async remove(id: number): Promise<DeleteResult> {
    return this.roleRepository.delete(id);
  }

  async update(id: number, role: CreateRoleDto) {
    return await this.roleRepository.update(
      { id },
      { name: role.name, permissions: role.permissions },
    );
  }
}
