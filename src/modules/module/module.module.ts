import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ModuleRepository } from './module.repository';
import { ModuleService } from './module.service';
import { ModuleController } from './module.controller';

@Module({
  controllers: [ModuleController],
  imports: [TypeOrmModule.forFeature([ModuleRepository])],
  providers: [ModuleService, ModuleRepository],
})
export class ModuleModule {}
