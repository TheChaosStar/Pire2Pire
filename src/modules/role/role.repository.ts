import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { _Role } from './role.entity';
import { CreateRoleDto } from 'src/dto/createRole.dto';

@Injectable()
export class RoleRepository extends Repository<_Role> {
  constructor(private dataSource: DataSource) {
    super(_Role, dataSource.createEntityManager());
  }

  async createRole({ name }: CreateRoleDto): Promise<_Role> {
    const task = this.create({
      name,
    });

    await this.save(task);
    return task;
  }
}
