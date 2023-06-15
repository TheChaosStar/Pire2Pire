import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { _Permission } from './permission.entity';
import { CreatePermissionDto } from 'src/dto/createPermission.dto';

@Injectable()
export class PermissionRepository extends Repository<_Permission> {
  constructor(private dataSource: DataSource) {
    super(_Permission, dataSource.createEntityManager());
  }

  async createPermission({
    name,
    desc,
  }: CreatePermissionDto): Promise<_Permission> {
    const task = this.create({ name, desc });
    await this.save(task);
    return task;
  }
}
