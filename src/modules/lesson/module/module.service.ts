import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ModuleRepository } from './module.repository';

@Injectable()
export class ModuleService {
  constructor(
    @InjectRepository(ModuleRepository)
    private moduleRepository: ModuleRepository,
  ) {}

  async getAllModule() {
    return await this.moduleRepository.find();
  }
}
