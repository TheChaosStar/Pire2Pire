import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Role } from './role.entity';
import { CreateRoleDto } from 'src/dto/createRole.dto';

@Injectable()
export class RoleRepository extends Repository<Role> {
  constructor(private dataSource: DataSource) {
    super(Role, dataSource.createEntityManager());
  }

  async createRole({ name }: CreateRoleDto): Promise<Role> {
    const task = this.create({
      name,
    });

    await this.save(task);
    return task;
  }
}
