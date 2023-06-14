import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Permission } from './permission.entity';
import { CreatePermissionDto } from 'src/dto/createPermission.dto';

@Injectable()
export class PermissionRepository extends Repository<Permission> {
  constructor(private dataSource: DataSource) {
    super(Permission, dataSource.createEntityManager());
  }

  async createPermission({
    name,
    desc,
  }: CreatePermissionDto): Promise<Permission> {
    const task = this.create({ name, desc });
    await this.save(task);
    return task;
  }
}
