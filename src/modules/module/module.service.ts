import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ModuleRepository } from './module.repository';
import { _Module } from './module.entity';
import { CreateModuleDto } from 'src/dto/createModule.dto';
import { DeleteResult } from 'typeorm';

@Injectable()
export class ModuleService {
  constructor(
    @InjectRepository(ModuleRepository)
    private moduleRepository: ModuleRepository,
  ) {}

  async getAllModule() {
    return await this.moduleRepository.find();
  }

  async getModuleById(id: number): Promise<_Module> {
    return await this.moduleRepository.findOneBy({ id: id });
  }

  async createModule(module: CreateModuleDto) {
    return await this.moduleRepository.createModule(module);
  }

  async remove(id: number): Promise<DeleteResult> {
    return this.moduleRepository.delete(id);
  }

  async update(id: number, module: CreateModuleDto) {
    return await this.moduleRepository.update(
      { id },
      {
        name: module.name,
        formations: module.formations,
        lessons: module.lessons,
      },
    );
  }
}
