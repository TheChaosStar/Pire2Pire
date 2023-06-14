import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Module } from './module.entity';
import { CreateModuleDto } from 'src/dto/createModule.dto';

@Injectable()
export class ModuleRepository extends Repository<Module> {
  constructor(private dataSource: DataSource) {
    super(Module, dataSource.createEntityManager());
  }

  async createModule({ name }: CreateModuleDto): Promise<Module> {
    const task = this.create({
      name,
    });

    await this.save(task);
    return task;
  }
}
