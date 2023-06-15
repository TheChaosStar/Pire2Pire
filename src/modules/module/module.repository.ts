import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { _Module } from './module.entity';
import { CreateModuleDto } from 'src/dto/createModule.dto';

@Injectable()
export class ModuleRepository extends Repository<_Module> {
  constructor(private dataSource: DataSource) {
    super(_Module, dataSource.createEntityManager());
  }

  async createModule({ name }: CreateModuleDto): Promise<_Module> {
    const task = this.create({
      name,
    });

    await this.save(task);
    return task;
  }
}
